import React, { Component } from "react";
import Navbar from "../components/Navbar";
import HpFooter from "../components/Homepage-Elements/Footer/HpFooter.js";

class About extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <h1>About Page</h1>
                <HpFooter />
            </div>

        )
    }
}

export default About; 