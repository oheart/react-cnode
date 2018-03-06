import React, {Component} from 'react'
import SigninTipMsg from '../../components/signin/SigninTipMsg'
import PostedContent from  './PostedContent'
import Service from '../../utils/service'

class PostedMain extends Component{
    render(){
        const User = Service.localItem('User');
        let Posted = null;
        if(!User){
            Posted =  <SigninTipMsg />
        }else{
            Posted = <PostedContent />
        }

        return (
            <div className="main-part-wrapper">
                    {Posted}
            </div>
        )
    }
}

export default PostedMain