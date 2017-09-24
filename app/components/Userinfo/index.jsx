import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Userinfo extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div className="userinfo-content">
                <p>
                    <i className="icon-user"></i>
                    {this.props.username}
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    {this.props.cityname}
                </p>
            </div>
        )
    }
}

export default Userinfo