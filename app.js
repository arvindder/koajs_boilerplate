const koa = require('koa');
const json = require('koa-json');
const koa_router = require('koa-router');
const path = require('path');
const render = require('koa-ejs');

const app = new koa();
const router = new koa_router();

//Json prettier Middleware
app.use(json());


render(app,{
    root: path.join(__dirname,'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

//Simple Middlware
// app.use(async ctx => ctx.body = {msg:'Hello World'});

router.get('/', async ctx => {
    await ctx.render('index');
})

//Router
router.get('/test', (ctx,next) => {
    ctx.body = "Hello bro";
});

//Router middleware
app.use(router.routes()).use(router.allowedMethods());

//Initializing App
app.listen(3000,() => console.log('Server Started....'));