import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
        <Router>
            <nav className={drawerClasses}>
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
        </nav>
        </Router>
    );
};

export default sideDrawer;

// 32:08 discussing hover effect