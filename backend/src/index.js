import { config } from 'dotenv';
config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';
import api from './api/index.js';
import jwtMiddleware from './lib/jwtMiddleware.js';
import axios from '../node_modules/axios/index.js';
const app = new Koa();
const router = new Router();
const { MONGO_URI, PORT } = process.env;
const __dirname = path.resolve();

mongoose
    .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log(MONGO_URI);
        console.log('Connected to mongodb');
    })
    .catch((e) => {
        console.error(e);
    });

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);

router.get('/search/news', async (ctx) => {
    const client_id = 'zuQk494JI7Fxpjylx8gN';
    const client_secret = 'IZTyzeJ0qk';
    const api_url = 'https://openapi.naver.com/v1/search/news.json?display=3&query=' + encodeURI('가상코인자산');
    const option = {};
    const options = {
        url: api_url,
        qs: option,
        headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
            'Access-Control-Allow-Origin': '*',
        },
    };
    const newsArray = [];
    const response = await axios.get('https://openapi.naver.com/v1/search/news?display=100&query=가상코인자산', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
        },
    });
    ctx.body = response.data;
});

app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../frontend/build');
app.use(serve(buildDirectory));
app.use(async (ctx) => {
    if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
        await send(ctx, 'index.html', { root: buildDirectory });
    }
});

const port = PORT || 4000;
app.listen(port, () => {
    console.log(`listen ${port}`);
});
