import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules/index';
import { applyMiddleware } from 'redux';
import { tempSetUser, check } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser() {
    try {
        const user = localStorage.getItem('user');
        if (!user) return;

        store.dispatch(tempSetUser(user));
        store.dispatch(check());
    } catch (e) {
        console.log('localStorage is not working');
    }
}

sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </BrowserRouter>
    </Provider>
);
