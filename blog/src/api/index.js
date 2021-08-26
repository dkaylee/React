/*
const Router = require('koa-router');
const posts = require('./posts');
*/
import Router from 'koa-router';
import posts from './posts';
 
const api = new Router();

api.use('/posts', posts.routes());

// 라우터를 내보내기
export default api;
