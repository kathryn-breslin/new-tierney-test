import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import "./FeaturedArticle.css";

export default function FeaturedArticle() {
    return (

        <>
            {/* // This should be pulled from the API
        //Temporarily hard-coding it here for front-end structure */}

            <div style={{
                textAlign: "center"
            }}>
                <Card.Img style={{
                    width: "700px",
                    height: "400px",
                    // position: "absolute",
                    // top: "30px",
                    // left: "130px",
                    objectFit: "cover",
                    zIndex: 1,
                    margin: "0 auto",
                    borderRadius: "10px",
                    border: "none"
                }}
                    src="https://hellotierney.com/retail/wp-content/uploads/2020/02/thought-leadership_hero-image_1440x500@2x-scaled.jpg" />

                <Card style={{
                    width: "700px",
                    // position: "absolute",
                    top: "-60px",
                    left: "-200px",
                    backgroundColor: "#F6F5F3",
                    padding: "50px",
                    zIndex: 2,
                    margin: "0 auto",
                    textAlign: "left",
                    borderRadius: "10px",
                    border: "none"

                }}>
                    <Card.Subtitle>Culture</Card.Subtitle>
                    <Card.Title>Article</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </Card.Text>
                    <Button variant="outline-info" href="/latest">Read More</Button>
                </Card>

            </div>
            <div style={{
                zIndex: 3,
                marginLeft: "62%",
                marginTop: "-190px"
            }}>
                <Button variant="outline-info" href="/latest">See All</Button>
            </div>
        </>
    )
}