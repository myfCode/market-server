const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Mock = require('mockjs')

router.get('/', (ctx, next) => {

    let result = Mock.mock({
        code: '10000',
        message: 'OK',
        data: {
            'list|10-20' : [
                {
                    'id|+1': 1
                }
            ]
        }
    })
    ctx.body = result
})


module.exports = router