import React from 'react';
import { Link } from 'react-router-dom'

//styled
import './index.css';

//components
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar_logo"><Link to="/home">Welcome!</Link></div>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </div>
            </nav>
    </header>
);

export default toolbar;