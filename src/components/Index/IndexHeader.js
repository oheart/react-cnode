import React, {Component} from 'react'
import HeaderMenuItem from './HeaderMenuItem'
import * as constants from '../../constants'


class IndexHeader extends Component{
    render(){
        const headerMenus = constants.headerMenus;
        return (
            <header className="index-menu-header">
                <nav className="cnode-nav">
                    <ul className="cnode-nav-list">
                        {
                            headerMenus.map((menu, index) => 
                                <HeaderMenuItem 
                                       key={menu.name}
                                       menu={menu}
                                    />
                            )
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}


export default IndexHeader



