import Router from 'koa-router';
import posts from './posts/index.js';
import auth from './auth/index.js';
import interests from './interests/index.js';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/interests', interests.routes());

export default api;
