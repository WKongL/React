import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from '../../../components/DetailInfo/index'
import { getInfoData } from '../../../fetch/detail/detail'

class Info extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            info: false
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.info
                    ?<DetailInfo data={this.state.info} />
                    :<div>没有相关资料</div>
                }
            </div>
        )
    }

    componentDidMount(){
        this.getInfo()
       
    }

    getInfo(){
        const id = this.props.id

        //获取info
        const result = getInfoData(id)
        //处理获取结果
        this.resultHandle(result)
    }

    resultHandle(result){
        result.then(res =>{
            return res.json()
        }).then(json =>{
            this.setState({
                info: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页，获取商户信息出错')
            }
        })
    }
}

export default Info