import React, { Component } from "react";
import Navbar from "../components/Navbar";
import HpFooter from "../components/Homepage-Elements/Footer/HpFooter.js";

class Latest extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <h1>Latest Page</h1>
                <HpFooter />
            </div>

        )
    }
}

export default Latest; 