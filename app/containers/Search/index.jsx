import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader/index'
import SearchList from './subpage/list'

class Search extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        const params = this.props.match.params
        return (
            <div>
                <SearchHeader keyword ={params.keyword} history={this.props.history}/>
                <SearchList keyword={params.keyword} category={params.category} />
            </div> 
        )
    }
}

export default Search