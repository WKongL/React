/*
* @Author: WKongL
* @Date:   2017-08-26 15:53:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-28 17:53:08
*/

var app = require('koa')();
var router = require('koa-router')();

//首页 ——广告(超值特惠)
var homeAdData = require('./home/ad.js')
router.get('/api/homead',function *(next){
    this.body = homeAdData
});

//首页 —— 推荐列表(猜你喜欢)
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page',function *(next) {
    //参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：'+ paramsCity)
    console.log('当前页数：'+ paramsPage)

    this.body = homeListData
}); 

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    this.body = searchListData
})

// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情页 - 商户信息')

    const params = this.params
    const id = params.id

    console.log('商户id: ' + id)
    //根据ID查出对应的商户
    const dataInfo = detailInfo.find((item) =>{
        if(item.id === id){
            return item
        }
    })
    this.body = dataInfo
})
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情页 - 用户点评')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)

    //根据ID查出对应的商户评论
    let commentInfo = {}
    commentInfo = detailComment.find((item) =>{
        if(item.id === id){
            return item
        }
    })
    // this.body = detailComment
    this.body = commentInfo
})

// 订单列表
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function *(next) {
    console.log('订单列表')

    const params = this.params
    const username = params.username
    console.log('用户名：' + username)

    this.body = orderList
})

// 提交评论
router.post('/api/submitComment', function *(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);