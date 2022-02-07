import React from 'react';
import '../styles.css';

export default function HamburgerToggleButton(props) {
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button--line"></div>
            <div className="toggle-button--line"></div>
            <div className="toggle-button--line"></div>
        </button>
    )
}