import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <h1>404 not found page</h1>
        )
    }
}

//使用 require.ensure异步加载，还不支持ES6的export
//export default NotFound
module.exports = NotFound