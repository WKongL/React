import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/index'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Category from '../../components/Category/index'
import Ad from './subpage/ad'
import List from './subpage/list'

class Home extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName} history={this.props.history} />
                <Category />
                <Ad/>
                <List cityName={this.props.userinfo.cityName} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home))