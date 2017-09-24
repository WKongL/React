import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ""
        }
    }

    render(){
        return (
            <input  type="text" 
                    className = "search-input"
                    placeholder="请输入关键字" 
                    value={this.state.value} 
                    onChange={this.changeHandle.bind(this)}
                    onKeyUp={this.keyUpHandle.bind(this)} />
        )
    }

    componentDidMount(){
        //设置默认值
        this.setState({
            value: this.props.value || ''
        })
    }

    changeHandle(e){
        //input改变时自动改变state.value
        const val = e.target.value
        this.setState({
            value: val
        })
    }

    keyUpHandle(e){
        //监听回车
        if(e.keyCode !== 13){
            return
        }
        this.props.enterFn(this.state.value)
    }
}

export default SearchInput