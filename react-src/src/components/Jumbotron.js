import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function JumboComp() {
    return (
        <>
            <Jumbotron fluid style={{backgroundColor: 'white', textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', fontSize: '200px', paddingTop: "300px", paddingBottom: "300px"}}>
                <Container>
                    <h1>Hello, we're Tierney.</h1>
                </Container>
            </Jumbotron>
        </>
    )
}