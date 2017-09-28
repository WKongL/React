import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'

import * as userInfoActionsFormOtherFile from '../../actions/userinfo'

import Header from '../../components/Header/index'
import CurrentCity from '../../components/CurrentCity/index'
import CityList from '../../components/CityList/index'

import { CITYNAME } from '../../config/localStoreKey'
import LocalStore from '../../util/localStore'

class City extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div>
                <Header title="选择城市" history={this.props.history} />
                <CurrentCity cityName={this.props.userinfo.cityName} />
                <CityList changeCityFn={this.changeCity.bind(this)} />
            </div>
        )
    }

    changeCity(newCity){
        if(newCity ==null){
            return
        }

        //更新redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)
        //更新localStore
        LocalStore.setItem(CITYNAME, newCity)
        //返回主页
        this.props.history.replace('/')
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile,dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))