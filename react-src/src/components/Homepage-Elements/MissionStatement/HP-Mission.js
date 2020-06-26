import React from "react";
import Button from 'react-bootstrap/Button'

//Pull statement from API

export default function Mission() {

    return (
        <div className="container" style={{ marginTop: "300px", marginBottom: "300px", textAlign: "center", justifyContent: "center" }}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <h1 style={{ textAlign: "center !important", margin: "0 auto" }}>Lorem Ipsum mission.</h1>
                    </div>
                    <div className="row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    </div>
                    <div className="row">
                        <Button style={{
                            textAlign: "center !important", 
                            margin: "0 auto", 
                            width: "130px",
                            borderRadius: "50px",
                            color: "#004268",
                            borderColor: "#004268",
                        }} variant="outline-info" href="/about">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}