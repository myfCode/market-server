let Koa = require('koa')
let KoaRouter = require('koa-router')

const user = require('./routers/user.js')
const order = require('./routers/order.js')
const product = require('./routers/product.js')
const config = require('./config/index')

const PORT = process.env.PORT || config.PORT


const app = new Koa()
const router = new KoaRouter()


router.use('/user', user.routes(), user.allowedMethods())
router.use('/order', order.routes(), order.allowedMethods())
router.use('/product', product.routes(), product.allowedMethods())


app.use(router.routes())
.use(router.allowedMethods())

app.listen(PORT, function(){
    console.log('server is listen on port:', PORT)
})