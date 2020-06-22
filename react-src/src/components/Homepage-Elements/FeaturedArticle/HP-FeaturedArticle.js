import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import "./FeaturedArticle.css";

export default function FeaturedArticle() {
    return (

        // This should be pulled from the API
        //Temporarily hard-coding it here for front-end structure

        <div style={{ margin: "0 auto", maxWidth: "2000px", paddingLeft: "300px", paddingRight: "300px"}}>

            <Card className="featuredArticleWidget" style={{ border: "none", borderRadius: "10px", zIndex: "1", width: "900px", backgroundColor: "#F6F5F3", padding: "50px", position: "relative" }}>
                <Card.Subtitle className="mb-2 text-muted">Culture</Card.Subtitle>

                <Card.Title>Article</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </Card.Text>
                <Button variant="outline-info" href="/latest">Read More</Button>
            </Card>


            <Card style={{ float: "right", border: "none", borderRadius: "10px", zIndex: "-1", position: "relative", width: "900px", height: "600px", marginTop: "-650px" }}>
                <Card.Img style={{ borderRadius: "10px", width: "900px", height: "600px", objectFit: "cover" }} src="https://hellotierney.com/retail/wp-content/uploads/2020/02/thought-leadership_hero-image_1440x500@2x-scaled.jpg" />
            </Card>

        </div>
    )
}