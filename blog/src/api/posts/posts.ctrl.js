let postId = 1; //id의 초깃값

// posts 배열 초기 데이터
const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];

// 포스트 작성 POST /api/posts
// { title, body }
export const write = ctx => {
    //rest api의 Rquest Body = ctx.request.body에서 조회
    const { title, body } = ctx.request.body;
    postId += 1; //기존 postId 값에 1을 더함
    const post = { id: postId, title, body };
    posts.push(post);
    ctx.body = post;
}

export const list = ctx => {
    ctx.body = posts;
}

// 특정 포스트 조회
// GET /api/posts/:id
export const read = ctx => {
    const { id } = ctx.params;
    // 주어진 아이디 값으로 포스트 찾기
    // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환
    // 비교할 p.id 값을 문자열로 변경해야함
    const post = posts.find(p => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환함
    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    };
    ctx.body = post;
};

// 특정 포스트 제거
// DELETE /api/posts/:id
export const remove = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환
    if (!index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        }
        return;
    }
    // 포스트 제거
    posts.splice(index, 1);
    ctx.body = 204; // No Content
}

// 포스트 수정(교체)
// PUT /api/posts/:id
//{ title, body }
export const replace = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환
    if (index === -1) {
        ctx.stauts = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    // 전체 객체를 덮어 씌우기
    // id를 제외한 기존 정보를 삭제후, 객체를 새로 만듬
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

// 포스트 수정(특정 필드 변경)
// PATCH /api/posts/:id
// { title, body }
export const update = ctx => {
    // PATH 메서드는 주어진 필드만 교체
    const { id } = ctx.params;
    // 해당 id를 가진 post가 몇번째인지 확인
    const index = posts.findIndex(p => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환
    if(!index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    // 기존값에 정보를 덮어 씌우기
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
}


