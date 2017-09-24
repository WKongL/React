import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/index'
import Info from './subpage/info'
import Comment from './subpage/comment'
import Buy from './subpage/buy'

class Detail extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        const id = this.props.match.params.id
        return (
            <div>
                <Header title="商户详情" history={this.props.history} />
                <Info id = {id}/>
                <Buy id={id}/>
                <Comment id={id} />
            </div>
        )
    }
}

export default Detail