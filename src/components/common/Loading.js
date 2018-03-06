import React, {Component} from 'react'

class Loading extends Component{
    render(){
    //    const {showLoading} = this.props;
    //    if(!showLoading) return null;
       return (
        <div className="loading-wrapper">
            <div className="loading-container container1">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
            </div>
            <div className="loading-container container2">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
            </div>
            <div className="loading-container container3">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
            </div>
        </div>  
       )
    }
}

export default Loading