import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Header extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div className="header-content">
                <span className="back-icon" onClick={this.clickReturn.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1 className="header-title">{this.props.title}</h1>
            </div>
        )
    }

    clickReturn(){
        const backRouter = this.props.backRouter
        if(backRouter){
            this.props.history.push(backRouter)
        }else{
            window.history.back()
        }
        
    }

}

export default Header