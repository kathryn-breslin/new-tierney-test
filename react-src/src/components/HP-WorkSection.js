import React, { Component } from "react";

class HpWorkSection extends Component {

    componentDidMount() {
        this.setWorkSection()
    }

    setWorkSection() {
        console.log("Data in work section")
        console.log(this.props.work)
    }
    render() {
        return (
            <div>
                <h1>Work Work Work</h1>
            </div>
        )
    }
}

export default HpWorkSection;