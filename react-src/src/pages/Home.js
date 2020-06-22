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
            data: []
        }
    }

    componentDidMount() {

        axios.get("https://hellotierney.com/wp-json/acf/v3/work")
            .then((response) => response.data)
            .then(dataSet => {
                this.setState({
                    data: dataSet
                })
            })
    }

    render() {

        return (
            <div>
                <Navbar />
                <JumboComp />

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

                    <div className="HpWorkSection" style={{ float: "right" }}>
                        <Button variant="outline-info" href="/work">See All</Button>
                    </div>


                <HpMission />
                <HpFeaturedArticle />
                <HpFooter/>

            </div>
        )
    }
}

export default Home; 