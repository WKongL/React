import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router-dom'
import './style.less'

class Category extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            index:0
        }
    }

    render(){
        let opt = {
            auto:2000,
            callback:function(index){
                //更新state获取当前轮播图的index
                this.setState({index:index})
            }.bind(this)
        }
        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-page">
                        <ul className="carousel-list clear-fix">
                            <Link to="/search/jingdian"><li className="carousel-item jingdian">景点</li></Link>
                            <Link to="/search/ktv"><li className="carousel-item ktv">KTV</li></Link>
                            <Link to="/search/gouwu"><li className="carousel-item gouwu">购物</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="carousel-item shenghuofuwu">生活服务</li></Link>
                            <Link to="/search/jianshenyundong"><li className="carousel-item jianshenyundong">健身运动</li></Link>
                            <Link to="/search/meifa"><li className="carousel-item meifa">美发</li></Link>
                            <Link to="/search/qinzi"><li className="carousel-item qinzi">亲子</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="carousel-item xiaochikuaican">小吃快餐</li></Link>
                            <Link to="/search/zizhucan"><li className="carousel-item zizhucan">自助餐</li></Link>
                            <Link to="/search/jiuba"><li className="carousel-item jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-page">
                        <ul className="carousel-list clear-fix">
                            <Link to="/search/meishi"><li className="carousel-item meishi">美食</li></Link>
                            <Link to="/search/dianying"><li className="carousel-item dianying">电影</li></Link>
                            <Link to="/search/jiudian"><li className="carousel-item jiudian">酒店</li></Link>
                            <Link to="/search/xuixianyule"><li className="carousel-item xuixianyule">休闲娱乐</li></Link>
                            <Link to="/search/waimai"><li className="carousel-item waimai">外卖</li></Link>
                            <Link to="/search/huoguo"><li className="carousel-item huoguo">火锅</li></Link>
                            <Link to="/search/liren"><li className="carousel-item liren">丽人</li></Link>
                            <Link to="/search/dujiachuxing"><li className="carousel-item dujiachuxing">度假出行</li></Link>
                            <Link to="/search/zuliaoanmo"><li className="carousel-item zuliaoanmo">足疗按摩</li></Link>
                            <Link to="/search/zhoubianyou"><li className="carousel-item zhoubianyou">周边游</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-page">
                        <ul className="carousel-list clear-fix">
                            <Link to="/search/ribencai"><li className="carousel-item ribencai">日本菜</li></Link>
                            <Link to="/search/SPA"><li className="carousel-item SPA">SPA</li></Link>
                            <Link to="/search/jiehun"><li className="carousel-item jiehun">结婚</li></Link>
                            <Link to="/search/xuexipeixun"><li className="carousel-item xuexipeixun">学习培训</li></Link>
                            <Link to="/search/xican"><li className="carousel-item xican">西餐</li></Link>
                            <Link to="/search/huochejipiao"><li className="carousel-item huochejipiao">火车机票</li></Link>
                            <Link to="/search/shaokao"><li className="carousel-item shaokao">烧烤</li></Link>
                            <Link to="/search/jiazhuang"><li className="carousel-item jiazhuang">家装</li></Link>
                            <Link to="/search/chongwu"><li className="carousel-item chongwu">宠物</li></Link>
                            <Link to="/search/quanbufenlei"><li className="carousel-item quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul className="index-list">
                        <li className={'index-item '+(this.state.index === 0?"selected":"")}></li>
                        <li className={'index-item '+(this.state.index === 1?"selected":"")}></li>
                        <li className={'index-item '+(this.state.index === 2?"selected":"")}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category