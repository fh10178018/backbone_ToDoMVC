const Router  = require('koa-router');

const router = new Router()

router.get('/',async function (ctx) {
    await ctx.render('index',{
        csrf: ctx.csrf,
    })
})

module.exports = router