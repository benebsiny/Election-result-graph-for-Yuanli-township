const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const { createReadStream } = require('fs');

const app = new Koa();

app.use(static(path.join(`${__dirname}`)))
app.use(async (ctx) => {
    ctx.type = 'html';
    ctx.body = createReadStream('index.html');
})

app.listen(3000, '127.0.0.1', () => {
    console.log('http://127.0.0.1:3000');  
})
