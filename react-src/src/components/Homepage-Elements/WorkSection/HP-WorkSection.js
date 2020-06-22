import React, { Component } from "react";
import Card from 'react-bootstrap/Card'

class HpWorkSection extends Component {

    render() {
        return (
            <Card className="bg-dark text-white" style={{ width: "400px", height: "auto", margin: "20px", border: "none", borderRadius: "10px", display: "inline-block" }}>
                <Card.Img src={this.props.client_image} alt={this.props.client} style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "10px" }} />
                <Card.ImgOverlay>
                    <Card.Title>{this.props.client}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default HpWorkSection;