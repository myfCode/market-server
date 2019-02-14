const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get('/', (ctx, next)=>{
    ctx.body = 'user router'
})


module.exports = router