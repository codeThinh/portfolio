import React from "react"
import Header from "./components/Header"
import Aside from "./components/Aside"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles.css"
import Headroom from "react-headroom"




export default function App(props) {

    // function handleBackClick() {
    //     articleRef.current.scrollIntoView({ behavior: 'smooth' })
    // }

    return (
        <div className="app--container">
            <Header />
            <div className="aside--container">
                <Aside />
            </div>
            <div className="main--container">
                <Hero />
                <About />
                <Projects />
                <Contact />
                <div id="footer">
                   <Footer />
                </div>
            </div>

        </div>

    )
}