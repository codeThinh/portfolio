import React from 'react';
import '../styles.css';

export default function SideDrawer(props) {
    let drawerClasses = 'side-drawer--container';
    if (props.show) {
        drawerClasses = 'side-drawer--container open';
    }
    return (
        <nav className={drawerClasses}>
            <ul className="side-drawer--nav">
                <li><a href ="#about">About</a></li>
                <li><a href ="#projects">Projects</a></li>
                <li><a href ="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}