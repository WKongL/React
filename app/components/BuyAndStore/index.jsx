import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class BuyAndStore extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div className="buy-store-content clear-fix">
                <div className="item-content">
                    {
                        this.props.isStore
                        ?<button className="btn selected" onClick={this.storeClick.bind(this)}>已收藏</button>
                        :<button className="btn" onClick={this.storeClick.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-content">
                    <button className="btn" onClick={this.buyClick.bind(this)}>购买</button>
                </div>
            </div>
        )
    }

    storeClick(){
        this.props.storeFn()
    }

    buyClick(){
        this.props.buyFn()
    }
}

export default BuyAndStore