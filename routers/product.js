const KoaRouter = require('koa-router')
const router = new KoaRouter()

const Mock = require('mockjs')
const Resut = require('../result')

router.get('/', (ctx, next) => {

    let data = Mock.mock({
        'list|10-20': [
            {
                'id|+1': 1
            }
        ]
    })

    ctx.body = new Resut(data)
})


module.exports = router