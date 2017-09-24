import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import ListItem from './Item/index'

class List extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        const data = this.props.data
        return (
            <div className="item-container">
                {data.map((item,index)=>{
                    return <ListItem key={index} data={item} />
                })}
            </div>
        )
    }
}

export default List