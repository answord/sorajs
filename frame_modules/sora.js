'use strict'

const log4js = require('koa-log4');
// log4js.configure({
//   appenders: [
//     {
//         "type": 'console'
//     },
//     {
//         "type": 'file', filename: __dirname + '/logs/sora.log'
//     },
//     {
//         "type": "smtp",
//         "recipients": "424052164@qq.com",
//         "sender": "424052164@qq.com",
//         "sendInterval": 60,
//         "SMTP": {
//             "host": "smtp.qq.com",
//             "secure": true,
//             "port": 465,
//             "auth": {
//                 "user": "424052164@qq.com",
//                 "pass": "veyzooppiidpbggd"
//             }
//         }
//     }
//   ]
// });

const logger = log4js.getLogger('sora.js');

const mounter = require('./mounter');
const middlewares = require('./middlewares');
const router = require('koa-router')();

router.get('/helloworld', ctx => {
    logger.debug("helloworld:" + ctx.req.url);

    ctx.body = 'Hello World!';
});

module.exports = {
    'Logger': function (tag) {
        return log4js.getLogger(tag);
    },
    'mounter': mounter,
    'middlewares': middlewares,
    'router': router
};
