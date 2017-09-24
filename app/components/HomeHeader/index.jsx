import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Link } from 'react-router-dom'

import SearchInput from '../SearchInput/index'

class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <div id="home-header" className = 'clear-fix'>
                <div className='home-header-left float-left'>
                    <Link to="/city">
                        {this.props.cityName}&nbsp;<i className='icon-angle-down'></i>
                    </Link>
                </div>
                <div className='home-header-right float-right'>
                    <Link to="/login">
                        <i className='icon-user'></i>
                    </Link>
                </div>
                <div className='home-header-middle'>
                    <div className = 'search-container'>
                         <i className='icon-search'></i>
                         <SearchInput enterFn={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    enterHandle(keyWord){
        this.props.history.push('/search/all/'+encodeURIComponent(keyWord))
    }
}


export default HomeHeader