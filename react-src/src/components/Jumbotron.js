import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function JumboComp() {
    return (
        <>
            <Jumbotron fluid style={{
                backgroundColor: 'white', textAlign: 'center', paddingTop: "300px", paddingBottom: "300px"
            }}>
                <Container>
                    <h1 style={{fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700, fontSize: 70}}>Hello, we're Tierney.</h1>
                </Container>
            </Jumbotron>
        </>
    )
}