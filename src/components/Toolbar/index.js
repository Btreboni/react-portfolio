import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

//styled
import './index.css';

//components
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <Router>
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar_logo"><a href="/">Welcome!</a></div>
                <div className="spacer"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </div>
            </nav>
        </Router>
    </header>
);

export default toolbar;