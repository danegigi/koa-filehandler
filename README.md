## Example:

_using koa router_
> 
    const router = require('koa-router');
    const mongo = require('koa-mongo');
    const routes = new router();
    routes
     .get(...)
     .post('userAddProcess', '/user-add',fileHandler('single','profilePic'), async () => {....})

## Access uploads using
* ctx.request.file - for single upload (single)
* ctx.request.files - for multiple uploads (array, fields and any)
* ctx.request.body - for other fields