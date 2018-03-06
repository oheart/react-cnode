import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'
import ReturnIcon from '../common/ReturnIcon'


class TopicHeader extends Component{
    render(){
        return (
            <div>
              <CommonHeader 
                    tit="详情" 
                    left={
                        <ReturnIcon />
                    }
                    />
            </div>
        )
    }
}

export default TopicHeader