'use strict'

const serverconfig = require('./config.js').SERVER;

const sora = require('./frame_modules/sora.js');
const koa = require('koa');
const app = new koa();

const logger = sora.Logger('app.js');

const middlewares = sora.middlewares;
app.use(middlewares.favicon(__dirname + '/public/favicon.ico'));
app.use(middlewares.compress());

const router = sora.router;
app.use(router.routes());
app.use(router.allowedMethods());

/**
app.use((ctx, next) => {
    const start = new Date();
    return next().then(() => {
        const ms = new Date() - start;
        console.log('%s %s %sms', ctx.method, ctx.url, ms);
    });
}); */

/** node.js v4不支持async/await
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log('%s %s %sms', ctx.method, ctx.url, ms);
}); */

/** response */
app.use(ctx => {

    console.log(ctx.req.method);
    console.log(ctx.req.url);

    console.log('Hello Koa!');
    ctx.body = 'Hello Koa!';
});

app.on('error', function (err, ctx) {
    console.error("cath exception:" + err);
});



app.listen(serverconfig.LISTEN_PORT, function() {
    logger.info('server listening on port:' + this.address().port);
});
