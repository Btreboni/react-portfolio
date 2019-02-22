import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">About Me</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/games">Games</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;

// 32:08 discussing hover effect