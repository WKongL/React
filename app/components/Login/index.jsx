import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoginComponent extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            username:''
        }
    }

    render(){
        return (
            <div className="login-content">
                <div className="input-item phone-content">
                    <i className="icon-tablet"></i>
                    <input  type="text"
                            onChange={this.changeHandle.bind(this)}
                            placeholder="请输入手机号"
                            value={this.state.username} />
                </div>
                <div className="input-item password-content">
                    <i className="icon-key"></i>
                    <button className="btn-code" >发送验证码</button>
                    <input  type="text"
                            placeholder="请输入验证号" />
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }

    changeHandle(e){
        const username = e.target.value
        //更新username
        this.setState({
            username: username
        })
    }

    clickHandle(){
        const username = this.state.username
        this.props.loginFn(username)
    }
}

export default LoginComponent