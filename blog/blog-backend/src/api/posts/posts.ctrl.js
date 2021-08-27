import Post from "../../models/post";
// DB연결
import mongoose from 'mongoose';
// Request Body 검증
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

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
export const write = async ctx => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array()
        .items(Joi.string())
        .required(), // 문자열로 이루어진 배열
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
        body,
        tags,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (e) {
        ctx.throw(500, e);
    }
   
}

// 특정 포스트 조회
// GET /api/posts/:id
export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404; // not found
            return;
        }
        ctx.body = post;
    }catch (e) {
        ctx.throw(500, e);
    }
};

// 특정 포스트 제거
// DELETE /api/posts/:id
export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204; // No Content (성공했지만 응답할 데이터는 없음)
    }catch(e) {
        ctx.throw(500, e)
    }
}

// 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
export const update = async ctx => {
    const { id } = ctx.params;

    // write에서 사용한 schema와 비슷한데, required()가 없음
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string()),
      });
      
    // 검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, // 이값을 설정하면 업데이트된 데이터가 반환
            // false일땐 업데이트되기 전의 데이터를 반환
        }).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e) {
        ctx.throw(500, e);
    }
};


