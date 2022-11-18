import Router from 'koa-router';
import * as interestsCtrl from './interests.ctrl.js';

const interests = new Router();

interests.get('/', interestsCtrl.list);
interests.post('/', interestsCtrl.add);
interests.delete('/:coinName', interestsCtrl.remove);

export default interests;
