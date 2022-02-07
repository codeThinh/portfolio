import React, { useEffect } from "react"
import "../styles.css"
import HamburgerToggleButton from "./HamburgerToggleButton"

export default function Header(props) {
    return (
        <header className="header--container">
            <h3>code</h3><h3>Thinh</h3>
            <nav>
                <ul className="header--nav">
                    <li><a href ="#about">About</a></li>
                    <li><a href ="#projects">Projects</a></li>
                    <li><a href ="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header--toggle-button">
                <HamburgerToggleButton click={props.drawerToggleClickHandler} />
            </div>
        </header>
    )
}