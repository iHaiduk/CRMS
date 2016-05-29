/**
 * Created by Haiduk on 29.05.2016.
 */

import path from 'path';
import fs from 'fs';
import http from 'http';
import http2 from 'http2';

import Koa from 'koa';
import Boom from 'boom';

import routing from './routing';



class Application {

    constructor(properties = {}) {

        const {port, https} = properties;

        this.Koa = new Koa;
        this.port = port || 9001;
        this.https = https || false;

        this.router = routing(this);
    }

    useErrorMessage() {
        this.Koa.use(async (ctx, next) => {
            try {
                await next(); // next is now a function
            } catch (err) {
                ctx.body = { message: err.message };
                ctx.status = err.status || 500;
            }
        });
    }

    useRouterSettings() {

        this.Koa
            .use(this.router.routes())
            .use(this.router.allowedMethods({
                throw: true,
                notImplemented: () => new Boom.notImplemented(),
                methodNotAllowed: () => new Boom.methodNotAllowed()
            }));

    }

    run() {

        this.useErrorMessage.call(this);
        this.useRouterSettings.call(this);

        if (this.https) {
            let keys = {
                key: fs.readFileSync('./keys/localhost.key'),
                cert: fs.readFileSync('./keys/localhost.crt')
            };

            http2.createServer(keys, this.Koa.callback()).listen(this.port);
        } else {
            http.createServer(this.Koa.callback()).listen(this.port);
        }
    }

}


export default Application;