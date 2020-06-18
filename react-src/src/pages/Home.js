import React, { Component } from "react";
import Navbar from "../components/Navbar";
import JumboComp from "../components/Jumbotron";
import HpWorkSection from "../components/HP-WorkSection";
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
                 
                
                {this.state.data.map(item => {
                    // {console.log(item)}

                    if(item.acf.featured_post[0] === "featured") {
                        {console.log(item.acf.case_study_hero_client)}
                        return (
                            <h1>{item.acf.case_study_hero_client}</h1>
                        )
                    }
                })}

            </div>
        )
    }
}

export default Home; 