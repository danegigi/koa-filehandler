### Example:

_using koa router_
> 
    const router = require('koa-router');
    const mongo = require('koa-mongo');
    const routes = new router();
    routes
     .get(...)
     .post('userAddProcess', '/user-add',fileHandler('single','profilePic'), async () => {....})


You can now access the files using **_ctx.request.file_** for single upload (single)
and **_ctx.request.files_** for multiple uploads (array, fields and any)