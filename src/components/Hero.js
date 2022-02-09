import React from "react"
import "../styles.css"

export default function Hero(props) {
    return (
        <main className="hero--container">
            <h4>Hello World,</h4>
            <h1>this is codeThinh;</h1>
            <h1>and I program stuff.</h1>
            <h2>I am a self-taught software engineer, specializing in Javascript and web development.</h2>
            <a href="#projects"><button>Check Out My Projects!</button></a>
            <a href="#about" className="scroll-down">
                <div className="mouse">
                    <span></span>
                </div>
                <div className="arrow">
                    <span></span>
                </div>
            </a>
        </main>
    )
}