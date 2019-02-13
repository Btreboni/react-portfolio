import React from 'react';

import './index.css';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton/>
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Skills</a></li>
                    <li><a href="/">Games</a></li>
                </ul>
            </div>
        </nav>
    </header>
);  

export default toolbar;