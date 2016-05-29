/**
 * Created by Haiduk on 29.05.2016.
 */

import path from 'path';
import * as _ from 'lodash';
import Router from 'koa-router';
import routes from './../routes';

const   CONTROLLERS_DIR = path.join(__dirname, '..', 'controllers'),
        CONTROLLER_SUFFIX = 'Controller',
        ARRAY_REST = ['get', 'post', 'put', 'delete', 'patch'];

export default function (application) {

    const router = new Router();
    routes.forEach(value => {
        let re = /([a-z]+)/gi,
            m = value.controller.match(re);

        if (m[0] != undefined) {
            let controllerRequire = require(path.join(CONTROLLERS_DIR, _.capitalize(String(m[0])) + CONTROLLER_SUFFIX)).default,
                controller = new controllerRequire,
                _func = m[1] != undefined ? _.lowerCase(String(m[1])) : 'index';

            controller.getName = () => String(m[0]);

            if (controller[_func] != undefined) {
                ARRAY_REST.forEach( method => {
                    if(value.hasOwnProperty(method)) {
                        router[method](value[method], controller[_func]);
                    }
                });
            }
        }
    });

    return router;

}