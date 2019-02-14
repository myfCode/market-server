const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get('/', (ctx, next) => {
    ctx.body = 'product router'
})


module.exports = router