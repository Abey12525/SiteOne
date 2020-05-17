import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toogle-button">
                <DrawerToggleButton click={props.drawerClickHandlerVar}/>
            </div>
            <div className="toolbar__logo"><a href='/'>THE PHINET</a></div>
            <div className="spacer"/>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">User</a></li>

                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;