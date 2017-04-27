'use strict'
const compose = require('koa-compose');

// fileHandler('single'[,args, opts]);

const fileHandler = (name, args, opts = {}) => {
  const options = Object.assign({}, {limit: '20mb'}, opts);
  const multer = require('koa-multer')(options);

  const toCtxRequest = async (ctx, next) => {
    // multer.single
    ctx.request.file = ctx.req.file;

    // multer.fields
    // multer.any
    // multer.array
    ctx.request.files = ctx.req.files;
    // other fields
    ctx.request.body = ctx.req.body;
    await next();
  }
  if(!Array.isArray(args)) args = [args]

  return compose([multer[name](...args), toCtxRequest]);
}

module.exports = fileHandler;