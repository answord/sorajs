const koa = require('koa');
const app = new koa();



// 此处开始堆叠各种中间件
//...

app.use((ctx, next) => {
    const start = new Date();
    return next().then(() => {
        const ms = new Date() - start;
        console.log('%s %s %sms', ctx.method, ctx.url, ms);
    });
});

/** node.js v4不支持async/await
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log('%s %s %sms', ctx.method, ctx.url, ms);
}); */

/** response
app.use(ctx => {
    console.log('Hello Koa!');
    ctx.body = 'Hello Koa!';
}); */

app.use(function *() {
    var path = this.path;
    this.body = path;
});

app.listen(3000);