import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

class List extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            hasMore:false,//判断是否可以加载更多
            data:[],//存储数据
            isLoadingMore: false, //判断是否加载中
            page: 1 //记录下一页的页码
        }
    }

    render(){
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.data.length
                 ?<ListComponent data={this.state.data}/>
                 :<div>加载中...</div>}
                {
                    this.state.hasMore
                    ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn ={this.LoadMoreData.bind(this)} />
                    :<div></div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData()
    }
    //获取首页数据
    loadFirstPageData(){
        const cityName = this.props.cityName
        const result = getListData(cityName,0);
        this.resultHandle(result)
    }
    //加载更多数据
    LoadMoreData(){
        //记录状态
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName,page);
        this.resultHandle(result)

        this.setState({
            isLoadingMore: false,
            page: page + 1
        })
    }
    //数据处理
    resultHandle(result){
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            //存储数据
            this.setState({
                hasMore : hasMore,
                data : this.state.data.concat(data)
            })
        })
    }
}

export default List