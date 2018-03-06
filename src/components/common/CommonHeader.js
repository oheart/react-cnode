import React, {Component} from 'react'

class CommonHeader extends Component{
    render(){
        const {tit, left, right} = this.props;
        return (
            <div className="common-cnode-header">
               {left}
               <div className="header-txt-part">
                    <span>{tit}</span>
               </div>
               {right}
            </div>
        )
    }
}

export default CommonHeader