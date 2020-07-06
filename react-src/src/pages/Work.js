import React, { Component } from "react";
import Navbar from "../components/Navbar";
import HpFooter from "../components/Homepage-Elements/Footer/HpFooter.js";
import { withStyles } from '@material-ui/core/styles';
import HeaderStatement from "../components/Workpage-Elements/HeaderStatement/WP-Head-Statement";
import Articles from "../components/Workpage-Elements/Articles/WP-Articles";
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import axios from "axios";

const useStyles = theme => ({
    headerDiv: {
        backgroundColor: "#004268",
        height: "200px", 
        color: "white"
    }
});
class Work extends Component {

    constructor(props) {
        super(props);

        this.state = {
            workData: []
        }
    }

    componentDidMount() {
        axios.get("https://hellotierney.com/wp-json/acf/v3/work")
            .then((response) => response.data)
            .then(dataSet => {
                console.log(dataSet)
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className="container-fluid" className={classes.headerDiv}>
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <p>Work</p>
                                        <h1>Our Work</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <HeaderStatement/>
                <Articles/>
                <HpFooter />
            </div >

        )
    }
}

export default withStyles(useStyles)(Work); 