import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'

class App extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            initDone: false
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.initDone
                    ?this.props.children
                    :<div>加载中....</div>
                }
            </div>
        )
    }

    componentDidMount(){
        //从localstoreage里面获取城市
        let cityName = localStore.getItem(CITYNAME);
        if(cityName == null){
            cityName ='北京'
        }
        //将城市信息存储到Redux中
        this.props.userInfoActions.update({
            cityName : cityName
        })


        this.setState({
            initDone : true
        })

    }
}

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile,dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))