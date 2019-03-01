import React from 'react'
import { Link } from 'react-router-dom'

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
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;