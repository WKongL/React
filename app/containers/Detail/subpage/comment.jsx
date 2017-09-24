import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { getCommentData } from '../../../fetch/detail/detail'
import CommentList from '../../../components/CommentList/index'
import LoadMore from '../../../components/LoadMore/index'

class Comment extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [], //存储数据
            hasMore: false, //判断是否可以加载更多
            isLoadingMore: false, //判断是否加载中
            page: 1 //记录下一页的页码
        }
    }

    render(){
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ?<CommentList data={this.state.data} />
                    :<div>没有相关点评</div>
                }
                {
                    this.state.hasMore
                    ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    :<div>没有更多了</div>
                }
            </div>
        )
    }

    componentDidMount(){
        this.loadFirstData()
    }
    //读取更多数据
    loadMoreData(){
        this.setState({
            isLoadingMore: true
        })

        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page,id)
        this.resultHandle(result)

        this.setState({
            isLoadingMore: false
        })
    }

    loadFirstData(){
        //首次加载数据
        const id = this.props.id
        const result = getCommentData(0,id)
        //处理数据
        this.resultHandle(result)
    }

    resultHandle(result){

        result.then(res =>{
            return res.json()
        }).then(json =>{
            // 增加 page 技术
            const page = this.state.page
            this.setState({
                page: page + 1
            })

            const data = json.data
            const hasMore = json.hasMore
            
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })

        }).catch(ex=>{
            if (__DEV__) {
                console.error('详情页获取用户评论数据出错, ', ex.message)
            }
        })
    }
}

export default Comment