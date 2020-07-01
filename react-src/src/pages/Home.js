import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Navbar from "../components/Navbar";
import JumboComp from "../components/Jumbotron";
import HpWorkSection from "../components/Homepage-Elements/WorkSection/HP-WorkSection.js";
import HpMission from "../components/Homepage-Elements/MissionStatement/HP-Mission.js";
import HpFeaturedArticle from "../components/Homepage-Elements/FeaturedArticle/HP-FeaturedArticle.js";
import HpFooter from "../components/Homepage-Elements/Footer/HpFooter.js";
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import HPWorkSection from "../components/Homepage-Elements/WorkSection/HP-WorkSection.js";

const useStyles = theme => ({
    workButton: {
        alignContent: "right",
        // marginRight: "-1300px", 
        marginTop: "20px",
        borderRadius: "50px",
        color: "#004268",
        borderColor: "#004268",
        width: "175px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        marginRight: "1%",
        '&:hover': {
            backgroundColor: "#004268",
            color: "white",
            // border: "none"
        },
    }
});


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loaded: false,
            userEmail: "", 
        }

        this.loadIcon = this.loadIcon.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.testfunction = this.testfunction.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: [{
                id: 1,
                image: "https://hellotierney.com/wp-content/uploads/2020/07/section-navigation.jpg",
                title: "Xfinity Hangouts"
            },
            {
                id: 2,
                image: "https://hellotierney.com/wp-content/uploads/2019/05/Champion_Hero_Image_1904x1120.jpg",
                title: "Champion"
            },
            {
                id: 3,
                image: "https://hellotierney.com/wp-content/uploads/2019/05/IBX_Hero_Image_1904x1120.jpg",
                title: "Independence Blue Cross"
            },
            {
                id: 4,
                image: "https://hellotierney.com/wp-content/uploads/2017/05/grid-image.jpg",
                title: "Fine Wine and Good Spirits"
            }], loaded: true
        })
    }

    // componentDidMount() {
    //     // axios.get("https://hellotierney.com/wp-json/acf/v3/work")
    //     //     .then((response) => response.data)
    //     //     .then(dataSet => {
    //     //         this.setState({
    //     //             data: dataSet,
    //     //             loaded: true
    //     //         })
    //     //     })
    //     {this.loadIcon()}
    // }

    onMouseOver = () => this.setState({ shadow: 3});


    loadIcon() {
        if (this.state.loaded) {
            return (
                <>    {
                    this.state.data.map(item => {

                        return (
                            <HpWorkSection
                                client={item.title}
                                client_image={item.image}
                                id={item.id}
                                key={item.id}
                                onMouseOver={this.onMouseOver}
                            />
                        )

                    })
                }
                </>
            )
        }
    }

    testfunction() {
        console.log("Working!")
    }


        //     if (this.state.loaded) {
        //         return (
        //             <>
        //                 {/* <div className="HpWorkSection" style={{ display: "flex", justifyContent: "center" }}> */}

        //                 {this.state.data.map(item => {
        //                     if (item.acf.featured_post[0] === "featured") {

        //                         return (
        //                             <HpWorkSection
        //                                 // client={item.acf.case_study_hero_client}
        //                                 // client_image={item.acf.case_study_hero_image}
        //                                 // id={item.index}
        //                                 // key={item.index}
        //                                 client={title}
        //                                 client_image={image}
        //                                 id={item.id}
        //                                 key={item.id}
        //                             />
        //                         )
        //                     }
        //                 })}
        //                 {/* </div> */}
        //             </>

        //         )
        //     }
        //     else {
        //         return (
        //             <>
        //                 <img src="https://i.imgur.com/5DrQIHe.gif" />

        //                 {/* Using this GIF as a placeholder */}
        //                 {/* Image Source: https://imgur.com/gallery/kKc4E */}
        //                 {/* All Credit to 'iactuallychangedmyusername' on August 27, 2014 */}
        //             </>
        //         )
        //     }
        // }

        handleInputChange = (event) => {
            event.preventDefault();

            const { name, value } = event.target;
            this.setState({
                [name]: value
            });
            console.log({ [name]: value })
        }

        handleEmailSubmit = (event) => {
            event.preventDefault();
            const { userEmail } = this.state;

            this.setState({
                userEmail: userEmail
            })
            console.log("User Email: " + this.state.userEmail)

            //Post to MailChimp
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
                    {/* <JumboComp /> */}
                    <div className="container d-flex justify-content-center" style={{ marginTop: "10%", minWidth: "500px" }}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6" style={{ minWidth: "500px" }}>
                                <h1 style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 700, fontSize: 40, paddingTop: "30%", letterSpacing: "1px"
                                }}>Hello, <br /> we're Tierney.</h1>
                                <p style={{ width: "70%", fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}> Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6" style={{ minWidth: "500px" }}>
                                {this.loadIcon()}
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">

                                {this.state.loaded ? <Button className={classes.workButton} variant="outline-info" href="/work">See All</Button> : null}
                            </div>
                        </div>
                    </div>

                    <HpMission />
                    <HpFeaturedArticle />
                    <HpFooter
                        userEmail={this.state.userEmail}
                        handleInputChange={this.handleInputChange}
                        handleEmailSubmit={this.handleEmailSubmit}
                    />

                </div>
            )
        }
    }

    export default withStyles(useStyles)(Home); 