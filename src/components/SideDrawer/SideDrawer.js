import React from 'react'

//styled
import './SideDrawer.css'

//components
import DrawerToggleButton from './DrawerToggleButton'

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
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