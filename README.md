## Example:

_using koa router_
```node
    const router = require('koa-router');
    const mongo = require('koa-mongo');
    const fileHanlder = require('koa-filehandler');
    const routes = new router();
    routes
     /*
      other routes
     */
     .post('/register',fileHandler('single','profilePic'), async () => {....})
```
## Access uploads using
* ctx.request.file - for single upload (single)
* ctx.request.files - for multiple uploads (array, fields and any)
* ctx.request.body - for other fields