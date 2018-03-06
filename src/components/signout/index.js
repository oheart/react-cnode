import React, {Component} from 'react'
import SignoutHeader from './SignoutHeader'
import SignoutMain from './SignoutMain'

class Signout extends Component{
    render(){
        return (
            <div  className="cnode-content-wrapper">
                <SignoutHeader />
                <SignoutMain />
            </div>
        )
    }
}

export default Signout