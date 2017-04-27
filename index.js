'use strict'
const compose = require('koa-compose');
const Multer = require('koa-multer');

// fileHandler('single'[,args, opts]);

const fileHandler = (name, args, opts = {}) => {
  // make the limit defaults to 20 MB
  const options = Object.assign({}, {limit: '20mb'}, opts);
  const multer = Multer(options);

  // instead of accessing files using ctx.req
  // use ctx.request for consistency
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

  // return combined middleware
  return compose([multer[name](...args), toCtxRequest]);
}

module.exports = fileHandler;