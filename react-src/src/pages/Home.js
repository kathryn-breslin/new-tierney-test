import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Navbar from "../components/Navbar";
import JumboComp from "../components/Jumbotron";
import HpWorkSection from "../components/Homepage-Elements/WorkSection/HP-WorkSection.js";
import HpMission from "../components/Homepage-Elements/MissionStatement/HP-Mission.js";
import HpFeaturedArticle from "../components/Homepage-Elements/FeaturedArticle/HP-FeaturedArticle.js";
import HpFooter from "../components/Homepage-Elements/Footer/HpFooter.js";
import axios from "axios";
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loaded: false
        }
    }

    componentDidMount() {

        axios.get("https://hellotierney.com/wp-json/acf/v3/work")
            .then((response) => response.data)
            .then(dataSet => {
                this.setState({
                    data: dataSet,
                    loaded: true
                })
            })
    }

    loadIcon() {
        if (this.state.loaded) {
            return (
                <>
                    <div className="HpWorkSection" style={{ display: "flex", justifyContent: "center" }}>

                        {this.state.data.map(item => {
                            if (item.acf.featured_post[0] === "featured") {
                                return (
                                    <HpWorkSection
                                        client={item.acf.case_study_hero_client}
                                        client_image={item.acf.case_study_hero_image}
                                    />
                                )
                            }
                        })}
                    </div>
                </>

            )
        }
        else {
            return (
                <>
                    <img src="https://i.imgur.com/5DrQIHe.gif"/>

                    {/* Using this GIF as a placeholder */}
                    {/* Image Source: https://imgur.com/gallery/kKc4E */}
                    {/* All Credit to 'iactuallychangedmyusername' on August 27, 2014 */}
                </>
            )
        }
    }

    render() {

        return (
            <div>
                <Navbar />
                <JumboComp />

                <div className="HpWorkSection" style={{ display: "flex", justifyContent: "center" }}>
                    {this.loadIcon()}
                </div>

                <div className="HpWorkSection" style={{ float: "right" }}>
                    {this.state.loaded ? <Button variant="outline-info" href="/work">See All</Button> : null }
                </div>

                <HpMission />
                <HpFeaturedArticle />
                <HpFooter />

            </div>
        )
    }
}

export default Home; 