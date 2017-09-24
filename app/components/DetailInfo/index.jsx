import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star/index'
import './style.less'

class DetailInfo extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        const data = this.props.data
        return (
            <div className="detail-info-content">
                <div className="info-content clear-fix">
                    <div className="img-content">
                        <img src={data.img} alt={data.title} />
                    </div>
                    <div className="info-item">
                        <h1>{data.title}</h1>
                        <div className="info-star">
                            <Star star={data.star} />
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
            </div>
        )
    }

   
}

export default DetailInfo