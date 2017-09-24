import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/index'
import LoginComponent from '../../components/Login/index'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 


class Login extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            checking: true
        }
    }

    render(){
        return (
            <div>
                <Header title="登录" history={this.props.history} />
                {
                    this.state.checking
                    ?<div></div>
                    :<LoginComponent loginFn={this.loginHandle.bind(this)} />
                }
            </div>
        )
    }

    componentDidMount(){
        this.doCheck()
    }

    doCheck(){
        const username = this.props.userinfo.username
        if(username){
            //已登录则跳转到用户页面
            this.goUserPage()
        }else{
            //未登录则显示需要登录
            this.setState({
                checking:false
            })
        }
    }

    loginHandle(username){
        //更新redux
        let userinfo = this.props.userinfo
        userinfo.username = username
        this.props.userInfoActions.update(userinfo)

        const router = this.props.match.params.router
        if(router){
            //跳转到router页面
            this.props.history.push(decodeURIComponent(router))
        }else{
            // 跳转到用户主页
            this.goUserPage()
        }
    }

    goUserPage(){
        this.props.history.push('/User')
    }
}

function mapStateToprops(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default withRouter(connect(
    mapStateToprops,
    mapDispatchToProps
)(Login))