import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl.js';

const comments = new Router();

comments.post('/', commentsCtrl.write);

comments.get('/', commentsCtrl.list);

comments.put('/:commentId', commentsCtrl.update);

comments.delete('/:commentId', commentsCtrl.remove);

export default comments;
