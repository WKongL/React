import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header/index'
import Userinfo from '../../components/Userinfo/index'
import OrderList from './subpage/OrderList'

class User extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        const userinfo = this.props.userinfo
        return (
            <div>
                <Header title="用户详情" backRouter="/" history={this.props.history} />
                <Userinfo username={userinfo.username} cityname={userinfo.cityName} />
                <OrderList username={userinfo.username} />
            </div>
        )
    }

    componentDidMount(){
        //如果没有用户名，则跳转到登录页面
        if(!this.props.userinfo.username){
            this.props.history.push('/Login')
        }
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {}
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(User))