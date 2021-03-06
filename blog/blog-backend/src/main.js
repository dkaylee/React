/*
require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const api = require('./api');
*/

require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
// import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
// import multer from 'koa-multer';
import cors from 'koa-cors';
// middleware: upload를 위해 ctx.request.body.files로 가져옴
import koaBody from 'koa-body';
// import createFakeData from './createFakeData';

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;
const path = require('path');

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

// const upload = multer({
//   dest: __dirname + '/uploads/', // 이미지 업로드 경로
// });

//라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

//라우터 적용 전에 bodyParser 적용
//app.use(bodyParser());
app.use(jwtMiddleware);
app.use(cors()); // Test를 위해 세팅 "실제서버에 배포할 때는 아이피를 설정"
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, 'public/uploads'),
      maxFileSize: 200 * 1024 * 1024, //Max설정 기본제한을 초과하면 잘못 보고됨
      keepExtensions: true,
    },
  }),
);

// router.get('/', ctx => {
//     ctx.body = '홈';
// });

// router.get('/about/:name?', ctx => {
//     const { name } = ctx.params;
//     // name의 존재 유무에 따라 다른 결과 출력
//     ctx.body = name ? `${name}의 소개` : '소개';
// });

// router.get('/posts', ctx => {
//     const { id } = ctx.query;
//     // id의 존재 유무에 따라 다른 결과 출력
//     ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// });

// app 인스턴스에 라우터 적용 (middleware)
app.use(router.routes()).use(router.allowedMethods());

// Middle Ware 설정 next() 미들웨어 역할
// app.use(async(ctx, next) => {
//     console.log(ctx.url);
//     console.log(1);
//     if (ctx.query.authorized !== '1'){
//         ctx.status = 401; // unauthorized
//         return;
//     }
//     await next();
//     console.log('END');
// });

// app.use((ctx, next) => {
//     console.log(2);
//     next();
// });

// app.use(ctx => {
//     ctx.body = "hello";
// });

// app.listen(4000, () => {
//     console.log('Listening to port 4000');
// });

// PORT 가 지정되어있지 않다면 4000 을 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
