import React from 'react';

import './index.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">The Logo</a></div>
            <div className="toolbar_navigation_items">
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