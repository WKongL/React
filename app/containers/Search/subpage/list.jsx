import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getSearchData } from '../../../fetch/search/search'
import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'



const initial={
            hasMore:false,//判断是否可以加载更多
            data:[],//存储数据
            isLoadingMore: false, //判断是否加载中
            page: 1 //记录下一页的页码
        }

class SearchList extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initial
    }

    render(){
        return (
            <div>
                {
                    this.state.data.length
                    ?<ListCompoent data = {this.state.data}/>
                    :<div></div>
                }
                {
                    this.state.hasMore
                    ?<LoadMore loadMoreFn={this.loadMoreDate.bind(this)} isLoadingMore={this.state.isLoadingMore} />
                    :<div></div>
                }
            </div>
        )
    }

    componentDidMount(){
        this.loadFirstPageData()
    }
    // 获取首页数据
    loadFirstPageData(){
        const cityName = this.props.userinfo.cityName
        const keyword = this.props.keyword || ''
        const category = this.props.category
        const result = getSearchData(0,cityName,category,keyword)
        this.resultHandle(result)
    }

    //读取更多数据
    loadMoreDate(){
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.userinfo.cityName
        const keyword = this.props.keyword || ''
        const category = this.props.category
        const page = this.state.page
        const result = getSearchData(page,cityName,category,keyword)
        this.resultHandle(result)

        this.setState({
            isLoadingMore: false
        })
    }

    // 处理数据
    resultHandle(result){
        const page = this.state.page
        this.setState({
            page: page + 1
        })
        result.then(res => {
            return res.json()
        }).then(json =>{
            const hasMore = json.hasMore
            const data = json.data

            this.setState({
                //在原数据基础上拼接新的数据
                data: this.state.data.concat(data),
                hasMore: hasMore
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('搜索页获取数据报错, ', ex.message)
            }
        })
    }
    //处理重新搜索
    componentDidUpdate(prevProps,prevState){
        const keyword = this.props.keyword 
        const category = this.props.category

        //条件没变则忽略
        if(keyword === prevProps.keyword && category === prevProps.category){
            return
        }
        //重制state
        this.setState(initial)
        //重新加载数据
        this.loadFirstPageData()
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(){
    return{}
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList))