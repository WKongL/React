import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import NotFound from '../containers/404'

export default class SubRouter extends Component{
    constructor(props){
        super(props) 
    }

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/city" component={City} />
                <Route path="/user" component={User} />
                <Route path="/Search/:category/:keyword?" component={Search} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/login/:router?" component={Login} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}