/**
 * Created by Haiduk on 28.05.2016.
 */

"use strict";
import Application from './app';

const ApplicationDefault = new Application();

ApplicationDefault.run();


/*
import Koa from 'koa';
import Pug from 'koa-pug';
import json from 'koa-json';
import convert from 'koa-convert';
import logger from 'koa-logger';
import Router from 'koa-router';
import mongo from 'koa-mongo';

// Constants
const app = new Koa();
const router = new Router();
const pug = new Pug();
const options = {
    key: fs.readFileSync('./keys/localhost.key'),
    cert: fs.readFileSync('./keys/localhost.crt')
};

function ignoreAssets(mw) {
    return function *(next){
        if (/(\.js|\.css|\.ico)$/.test(this.path)) {
            yield next;
        } else {
            // must .call() to explicitly set the receiver
            // so that "this" remains the koa Context
            yield mw.call(this, next);
        }
    }
}

//Uses
app.use(convert(json()));
app.use(convert(ignoreAssets(logger())));
pug.use(app);
app.use(convert(mongo({
    host: 'ds015953.mlab.com',
    port: 15953,
    user: 'db_user',
    pass: 'CkW9UC2ent9AK4Z3',
    db: 'miraries',
    max: 100,
    min: 1,
    timeout: 30000,
    log: false
})));

http.createServer(app.callback()).listen(9001);
http2.createServer(options, app.callback()).listen(9002);*/
