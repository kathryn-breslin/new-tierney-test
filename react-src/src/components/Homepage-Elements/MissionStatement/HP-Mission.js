import React from "react";
import Button from 'react-bootstrap/Button'

export default function Mission() {
    return (
        <div className="container" style={{ marginTop: "300px", marginBottom: "700px", textAlign: "center", justifyContent: "center" }}>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row">
                        <h1>Lorem Ipsum mission.</h1>
                    </div>
                    <div className="row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    </div>
                    <div className="row">
                        <Button variant="outline-info" href="/about">Learn More</Button>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}