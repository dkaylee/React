import Post from '../../models/post';
// DB연결
import mongoose from 'mongoose';
// Request Body 검증
import Joi from 'joi';
// html 필터링
import sanitizeHtml from 'sanitize-html';

const { ObjectId } = mongoose.Types;

const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http'],
};

// html없애고 내용이 너무 길면 200로 제한하는 함수
const removeHtmlAndShorten = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

// 작성자만 포스팅 수정하거나 삭제
export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; //Bad Request
    return;
  }
  try {
    const post = await Post.findById(id);
    // 포스트가 존재하지 않을 때
    if (!post) {
      ctx.status = 404; //Not Found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

// middleware -> id로 찾은 포스트가 로그인 중인 사용자가 작성한 포스트인지 확인
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

/*
    POST /api/posts
    {
      title: '제목',
      body: '내용',
      tags: ['태그1', '태그2']
    }
*/

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  return next();
};

// 포스트 작성 POST /api/posts
// { title, body }
export const write = async (ctx) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
    files: Joi.array().items(Joi.string()).required(),
  });

  // 검증하고 실패인경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title,
    body: sanitizeHtml(body, sanitizeOption),
    tags,
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 리스트에서 특정 사용자가 작성한 포스트만 조회 혹은 태그로 조회
export const list = async (ctx) => {
  // query는 문자열이기때문에 int로 바꿔줘야함
  // 값이 주어지지 않으면 1을 기본으로 사용
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts.map((post) => ({
      ...post,
      body:
        // post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
        removeHtmlAndShorten(post.body),
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 특정 포스트 조회
// GET /api/posts/:id
// export const read = async ctx => {
//     const { id } = ctx.params;
//     try {
//         const post = await Post.findById(id).exec();
//         if (!post) {
//             ctx.status = 404; // not found
//             return;
//         }
//         ctx.body = post;
//     }catch (e) {
//         ctx.throw(500, e);
//     }
// };

// GET /api/posts/:id
export const read = async (ctx) => {
  ctx.body = ctx.state.post;
};

// 특정 포스트 제거
// DELETE /api/posts/:id
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공했지만 응답할 데이터는 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
export const update = async (ctx) => {
  const { id } = ctx.params;

  const nextData = { ...ctx.request.body }; // 객체를 복사하고
  // body 값이 주어졌으면 HTML 필터링
  if (nextData.body) {
    nextData.body = sanitizeHtml(nextData.body, sanitizeOption);
  }

  // write에서 사용한 schema와 비슷한데, required()가 없음
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
    files: Joi.array().items(Joi.string()),
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, nextData, {
      new: true, // 이값을 설정하면 업데이트된 데이터가 반환
      // false일땐 업데이트되기 전의 데이터를 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 아이디로 포스트 조회
// GET /api/posts/:id
export const findByUser = async (ctx) => {
  const { user } = ctx.state.user;
  const { post } = ctx.state;
  try {
    const mypost = await Post.findById(user._id).exec();
    if (post.user._id.toString() !== mypost._id) {
      ctx.status = 404; // not found
      return;
    }
    ctx.body = mypost;
  } catch (e) {
    ctx.throw(500, e);
  }
};
