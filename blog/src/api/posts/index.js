/*
const Router = require('koa-router');
const postCtrl = require('./posts.ctrl');
*/
import Router from 'koa-router';
import { exp } from 'prelude-ls';
import * as postCtrl from './posts.ctrl';

const posts = new Router();

// const printInfo = ctx => {
//     ctx.body = {
//         method: ctx.method,
//         path: ctx.path,
//         params: ctx.params,
//     };
// };

// posts.get('/', printInfo);
// posts.post('/', printInfo);
// posts.get('/id', printInfo);
// posts.delete('/:id', printInfo);
// posts.put('/:id', printInfo);
// posts.patch('/:id', printInfo);

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);
posts.get('/:id', postCtrl.read);
posts.delete('/:id', postCtrl.remove);
posts.put('/:id', postCtrl.replace);
posts.patch('/:id', postCtrl.update);

// module.exports = posts;
export default posts;