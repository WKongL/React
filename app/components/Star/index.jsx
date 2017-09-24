import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Star extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            star:0
        }
    }

    render(){
        // let star = this.props.star
        let star = this.state.star || 0
        if(star > 5){
            star = star % 5
        }
        
        return (
            <div className="star-item">
                {
                    [1,2,3,4,5].map((item,index) =>{
                        const lightClass = star >=item?' light': ''
                        return <i key={index} className={'icon-star' + lightClass } onClick={this.starClickHandle.bind(this,item)}></i>
                    })
                }
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            star:this.props.star
        })

    }

    starClickHandle(star){
        this.setState({
            star: star
        })

        const starClickFn = this.props.starClickFn
        starClickFn(star)
    }
}

export default Star