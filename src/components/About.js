import React from "react"
import "../styles.css"

export default function About(props) {
    return (
        <section className="about">
            <div className="about--container">
                <h4 id="about">About Me</h4>
                <h2>I enjoy creatings things on the internet and even remember making webpages with tables on geocities when I was a kid. I have re-discovered my passion for it and now I am focusing on learning web development on a more advanced level.</h2>
                <h2>Some technologies I am familiar with:</h2>
                <div className="about--tech">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i>
                    <i class="fa-brands fa-js"></i>
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-bootstrap"></i>
                </div>
                <h4>Experience</h4>
                <h2>Currently working as a full-time AutoCAD engineer, but have been completing coding certificates thru online programs from freeCodeCamp, Coursera, and Scrimba on my free time.</h2>
            <h3>Attending Nucamp Full Stack Web + Mobile Development Bootcamp Part-time</h3>
            </div>
            <div className="about--img">
                <img src="https://pbs.twimg.com/profile_images/1489446310201597955/5Z6YFqB0_400x400.jpg"/>
            </div>
        </section>

    )
}
