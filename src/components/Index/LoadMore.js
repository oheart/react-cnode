import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class LoadMore extends Component{
    componentDidMount(){
        const {isLoadingMore, LoadMoreFn} = this.props;
        const loadMoreWrapper = this.refs.loadMoreWrapper;


        //利用timeoutId实现节流
        let timeoutId;
        
        function callback(){
            const top = loadMoreWrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
                // 当loadMoreWrapper已经滚动到暴露在可视区域之内时重新加载更多
                LoadMoreFn();
            }
        }

        window.addEventListener('scroll', function(){
            //如果是”加载更多“则不做处理
            if(isLoadingMore){
                return;
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), true)

    }
    render(){
        const {isLoadingMore, LoadMoreFn} = this.props;
        return (
            <div className="load-more-container" ref="loadMoreWrapper">
                {
                    isLoadingMore
                    ? <span>加载中...</span>
                    : <a 
                        onClick={LoadMoreFn}>
                        加载更多
                      </a>
                }
            </div>
        )
    }
}

export default withRouter(LoadMore)