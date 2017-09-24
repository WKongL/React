import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return (
            <div className="load-more" ref= "wrapper">
                {
                    this.props.isLoadingMore
                    ?<span>加载中....</span>
                    :<span onClick={this.loadMoreHandle.bind(this)} >加载更多</span>
                }
            </div>
        )
    }

    loadMoreHandle(){
        //执行传递过来的loadMoreData函数
        this.props.loadMoreFn()
    }

    componentDidMount(){
        let timeId
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        function callback(){
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = this.screen.height
            if(top && top < windowHeight){
                loadMoreFn()
            }
        }
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return
            }
            if(timeId){
                clearTimeout(timeId)
            }
            //当100ms后没拉滚动条后，才开始调用加载
            timeId = setTimeout(callback,100)
        }.bind(this),false)
    }
}

export default LoadMore