import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star/index'
import './style.less'

class Item extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 0, //0-未评价 1-评价中 2-已评价
            stars:{}
        }
    }

    render(){
        const data = this.props.data
        return (
            <div className="order-item-content">
                <div className="clear-fix">
                    <div className="img-content">
                        <img src={data.img} alt={data.title} />
                    </div>
                    <div className="info-content">
                        <p>商户：{data.title}</p>
                        <p>数量：{data.count}</p>
                        <p>价格：￥{data.price}</p>
                    </div>
                    <div className="comment-content">
                       {
                            this.state.commentState === 0
                            ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                            :   
                                this.state.commentState === 1
                                ?''
                                : <button className="btn unseleted-btn">已评价</button>
                       } 
                    </div>
                </div>
                {
                    this.state.commentState === 1
                    ?   <div className="comment-text-content">
                            <textarea ref="commentText" className="comment-text"></textarea>
                            <div className="star">
                                <Star star="0" starClickFn={this.starClick.bind(this)}/>
                            </div>
                            <button className="btn" onClick={this.submitHandle.bind(this)}>提交</button>&nbsp;
                            <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                    :''
                }
            </div>
        )
    }

    componentDidMount(){
        const data = this.props.data
        const commentState = data.commentState
        //更新评价状态
        this.setState({
            commentState: commentState
        })
    }

    //显示评论模块
    showComment(){
        this.setState({
            commentState: 1
        })
    }

    //隐藏评论模块
    hideComment(){
        this.setState({
            commentState: 0
        })
    }

    //提交评论
    submitHandle(){
        const submitComment = this.props.submitComment
        const id = this.props.data.id
        const stars = this.state.stars
        const star = stars[id] || 0
        const value = this.refs.commentText.value
        //评论为空则返回
        if(!value){
            return
        }
        //提交评论
        submitComment(id,value,star,this.commentOk.bind(this))
    }

    //评论成功
    commentOk(){
        this.setState({
            commentState: 2
        })
    }

    //星星评分
    starClick(star){
        let stars = this.state.stars
        const id = this.props.data.id
        //id对应相对的star
        stars[id] = star

        this.setState({
            stars: stars
        })
    }
}

export default Item