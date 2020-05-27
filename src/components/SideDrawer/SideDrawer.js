import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {

    let drawerClasses = ['side-drawer'];
    
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses} >
        <ul>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Dev</a></li>

        </ul>
    </nav>
    );
};

export default SideDrawer;