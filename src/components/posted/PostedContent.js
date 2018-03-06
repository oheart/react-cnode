import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'



class PostedContent extends Component{
    handleInputChange(e){
        const {updateTopic, dispatch_updateTopic} = this.props;
        const name = e.target.name;
        const value = e.target.value;
        
        dispatch_updateTopic({[name]: value})
    }
    
    render(){
        const {updateTopic} = this.props;
        return (
            <main className="cnode-main-wrapper">
                 <div className="post-content-box">
                    <div className="post-content-list">
                        <div className="post-content-item">
                            <select className="post-content-input post-content-select"
                                 name="tab"
                                 vaule={updateTopic.tab}
                                 onChange={(e) => this.handleInputChange(e)}
                                >
                                <option value="">选择板块</option>
                                <option value="share">分享</option>
                                <option value="ask">问答</option>
                                <option value="job">招聘</option>
                                <option value="dev">客户端测试</option>
                            </select>
                        </div>
                        <div className="post-content-item">
                           <input type="text"
                                className="post-content-input"
                                placeholder="标题字数 10字以上"
                                name="title"
                                value={updateTopic.title}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <div className="post-content-item">
                            <textarea type="text" 
                                    className="post-content-input"
                                    placeholder="内容字数 30字以上"
                                    name="content"
                                    value={updateTopic.content}
                                    onChange={(e) => this.handleInputChange(e)}
                                 />
                        </div>
                    </div>
                 </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        updateTopic: state.updateTopic
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_updateTopic: (prop) => dispatch(actions.updateTopic(prop))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostedContent)