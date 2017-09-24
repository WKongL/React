import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput/index'
import './style.less'

class SearchHeader extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.returnHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="search-container">
                    <i className="icon-search"></i>
                    <SearchInput value = {this.props.keyword || ''} enterFn={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }

    returnHandle(){
        window.history.back()
    }

    enterHandle(value){
        this.props.history.push('/search/all/'+encodeURIComponent(value))
    }
}

export default SearchHeader