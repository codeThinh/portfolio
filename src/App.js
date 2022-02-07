import React from "react"
import Header from "./components/Header"
import Aside from "./components/Aside"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SideDrawer from "./components/SideDrawer"
import "./styles.css"
import Backdrop from "./components/Backdrop"
import { render } from "@testing-library/react"



class App extends React.Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prev) => {
            return {sideDrawerOpen: !prev.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

    return (
        <div className="app--container">
            <Header drawerToggleClickHandler={this.drawerToggleClickHandler} />
            <div className="aside--container">
                <Aside />
            </div>
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
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
}

export default App