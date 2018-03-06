import React, {Component} from 'react'
import FooterMenuItem from './FooterMenuItem'
import * as constants from '../../constants'

class CommonFooter extends Component{
    render(){
        const footerMenus = constants.footerMenus;
        return (
            <footer className="common-cnode-footer">
                <ul className="cnode-footer-sortlist">
                    {
                            footerMenus.map((menu, index) => 
                                <FooterMenuItem 
                                       key={menu.name}
                                       menu={menu}
                                    />
                            )
                    }
                </ul>
            </footer>
        )
    }
}

export default CommonFooter