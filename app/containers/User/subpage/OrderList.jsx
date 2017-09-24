import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getOrderListData , postComment} from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/OrderList/index'
import './style.less'

class OrderList extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]
        }
    }

    render(){
        return (
            <div className="order-list-content">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)} />
                    : <div>{/* loading */}</div>
                }
                
            </div>
        )
    }

    componentDidMount(){
        const username = this.props.username
        if(username){
            this.loadOrderListData(username)
        }
    }
    //读取数据
    loadOrderListData(username){
        const result = getOrderListData(username)
        this.resultHandle(result)
    }
    //处理数据
    resultHandle(result){
        result.then(res =>{
            return res.json()
        }).then(json =>{
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }
    //提交数据
    submitComment(id,value,star,callback){
        const result = postComment(id,value,star)
        result.then(res =>{
            return res.json()
        }).then(json =>{
            //提交成功后调用callback
            if(json.errno ===0){
                callback()
            }
        })
    }
}

export default OrderList