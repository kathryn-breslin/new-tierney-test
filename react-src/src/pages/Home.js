import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>Homepage</h1>
            </div>
        )
    }
}

export default Home; 