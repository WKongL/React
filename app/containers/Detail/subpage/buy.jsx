import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore/index'
import { withRouter } from 'react-router-dom'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as storeActionsFromOtherFile from '../../../actions/store'

class Buy extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            isStore: false
        }
    }

    render(){
        return (
            <BuyAndStore isStore={this.state.isStore} buyFn={this.buyHandle.bind(this)} storeFn={this.storeHandle.bind(this)} />
        )
    }

    componentDidMount(){
        this.storeCheck()
    }

    // 检查是否收藏
    storeCheck(){
        const id = this.props.id
        const store = this.props.store

        store.some(item =>{
            if(item.id === id){
                //更新收藏状态
                this.setState({
                    isStore: true
                })
                //退出循环
                return true
            }
        })
    }

    //检查登录状态
    loginCheck(){
        const username = this.props.userinfo.username
        const id = this.props.id

        if(!username){
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+id))
            return false
        }
        return true
    }

    //购买事件
    buyHandle(){
        //判断是否登录了
        const loginStatus = this.loginCheck()
        if(!loginStatus){
            return 
        }

        // 跳转到用户主页
        this.props.history.push('/User')
    }
    // 收藏事件
    storeHandle(){
        //判断是否登录了
        const loginStatus = this.loginCheck()
        if(!loginStatus){
            console.log('loginfalse')
            return 
        }

        //修改redux
        const id = this.props.id
        let isStore = this.state.isStore
        const storeActions = this.props.storeActions
        if(isStore){
            storeActions.rm({id:id})
        }else{
            storeActions.add({id:id})
        }

        //修改state
        this.setState({
            isStore: !isStore
        })
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch){
    return {
        storeActions: bindActionCreators(storeActionsFromOtherFile,dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy))