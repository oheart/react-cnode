import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'
import PostedIcon from './PostedIcon'

class PostedHeader extends Component{
    render(){
        return (
            <div>
               <CommonHeader 
                    tit="发表主题" 
                    right={
                      <PostedIcon />
                    }
                    />
            </div>
        )
    }
}

export default PostedHeader