import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Link} from 'react-router-dom'

class ListItem extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        const data = this.props.data
        return (
            <div className="list-item clear-fix">
                <Link to={'/detail/' + data.id}>
                    <div className="item-img-container">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <div className="item-sub-title">
                            <p>{data.subTitle}</p>
                        </div>
                        <div className="item-price-container clear-fix">
                            <span className="price">￥{data.price}</span>
                            <span className="number">已售{data.mumber}</span> 
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListItem