import React, { Component } from "react";
import Navbar from "../components/Navbar";
import HpFooter from "../components/Homepage-Elements/Footer/HpFooter.js";
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import axios from "axios";

// const useStyles = theme => ({
//     header: {
//         textAlign: "center"
//     }
// });

class Work extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            workData: []
        }
    }

    // componentDidMount() {
    //     axios.get("https://hellotierney.com/wp-json/acf/v3/work")
    //         .then((response) => response.data)
    //         .then(dataSet => {
    //             console.log(dataSet)
    //         })
    // }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Work</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                        </div>
                    </div>
                </div>
                <HpFooter />
            </div>

        )
    }
}

export default Work; 