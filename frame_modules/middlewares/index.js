'use strict'

const favicon = require('koa-favicon');
exports.favicon = favicon;

const compress = require('koa-compress');
exports.compress = compress.bind(compress, {
    filter: function (content_type) {
        return /text/i.test(content_type);
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
});



// const koaLogger = require('koa-logger');




