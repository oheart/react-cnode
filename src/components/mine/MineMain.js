import React, {Component} from 'react'
import Service from '../../utils/service'
import SigninTipMsg from '../../components/signin/SigninTipMsg'
import MineContent from './MineContent'

class MineMain extends Component{
    render(){
        const User = Service.localItem('User');
        let Mine = null;
        if(!User){
            Mine =  <SigninTipMsg />
        }else{
            Mine = <MineContent />
        }

        return (
               <div className="main-part-wrapper">
                    {Mine}
               </div>
        )
    }
}

export default MineMain