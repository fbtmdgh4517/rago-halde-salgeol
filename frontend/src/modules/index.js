import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { wrtieSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import comments, { CommentsSaga } from './comments';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
    post,
    posts,
    comments,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), wrtieSaga(), postSaga(), postsSaga(), CommentsSaga()]);
}

export default rootReducer;