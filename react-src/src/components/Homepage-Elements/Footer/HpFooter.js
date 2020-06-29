import React from "react";
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
          '& label.Mui-focused': {
              color: "#004268",
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: "#004268",
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: "#004268",
                backgroundColor: "#E0DDD5", 
                width: "200px"
              },
              '&:hover fieldset': {
                borderColor: "#004268",
              },
              '&.Mui-focused fieldset': {
                borderColor: "#004268",
                backgroundColor:  "#E0DDD5"
              },
            },
   
    },
    top: {
        backgroundColor: "#DFE0E1",
        height: "100px",
        marginTop: "200px",
        textAlign: "center",
        ['@media (min-width: 1130px) and (max-width: 1190px)']: {
            height: "150px"
        },
        ['@media (min-width: 992px) and (max-width: 1130px)']: {
            height: "150px"
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            height: "175px"
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            height: "200px"

        },
    },
    topText: {
        display: "inline-block",
        margin: "0 auto",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: 30,
        paddingTop: "10px"
    },
    break: {
        display: "none",
        ['@media (min-width: 1130px) and (max-width: 1190px)']: {
            display: "inline"
        },
        ['@media (min-width: 992px) and (max-width: 1130px)']: {
            display: "inline"
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            display: "inline"
        },
    },
    topButtons: {
        display: "inline-block",
        marginTop: "10px",
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            display: "initial",
            margin: "0 auto"
        },
    },
    leftButton: {
        marginRight: "10px",
        marginLeft: "120px",
        width: "130px",
        borderRadius: "50px",
        color: "#004268",
        borderColor: "#004268",
        '&:hover': {
            backgroundColor: "#004268",
            color: "white",
            border: "none"
        },
        ['@media (min-width: 1130px) and (max-width: 1190px)']: {
            marginLeft: "0px"
        },
        ['@media (min-width: 992px) and (max-width: 1130px)']: {
            marginLeft: "0px"
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            marginLeft: "0px"
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            marginLeft: "0px"

        },
    },
    rightButton: {
        width: "130px",
        borderRadius: "50px",
        color: "#004268",
        borderColor: "#004268",
        marginLefT: "10px",
        '&:hover': {
            backgroundColor: "#004268",
            color: "white",
            border: "none"
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            display: "initial",
            margin: "0 auto"
        },
    },
}));


export default function FooterComponent() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.top}>
                <div style={{ paddingTop: "20px" }}>
                    <div className={classes.topText}>Lorem ipsum Contact us or Careers? ipsum lorem amet.</div>
                    <br className={classes.break} />
                    <div className={classes.topButtons}>
                        <Button className={classes.leftButton} variant="light" href="/contact">Contact Us</Button>
                        <Button className={classes.rightButton} variant="outline-info" href="/careers">Explore Jobs</Button>
                    </div>
                </div>
            </div>


            <div className={classes.bottom} style={{ backgroundColor: "#F1F1F1", height: "400px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="container" style={{ paddingTop: "50px" }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12" style={{marginBottom: "50px"}}>
                            <h6>Sign up &amp; stay Connected.</h6>
                            <form className={classes.root} noValidate autoComplete="off">
                                {/* <TextField className={classes.emailField} label="Email"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <ArrowForwardIosIcon>


                                                    Link below to Input Adornment
                                                    https://stackoverflow.com/questions/51694149/add-element-inside-textfield-component-material-ui



                                                </ArrowForwardIosIcon>
                                            </InputAdornment>
                                        )
                                    }}/> */}
                                <TextField
                                    className={classes.margin}
                                    label="Enter Email Here"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                />                                
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 officeField">
                            <h6 style={{ color: "#004153", textDecoration: "underline" }}>Philadelphia</h6>
                            <p>1700 Market St. 29th Floor <br /> Philadelphia, PA 19103 <br />(215) 790-4100</p>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-4">
                            <h6 style={{ color: "#004153", textDecoration: "underline" }}>New York City</h6>
                            <p>100 West 33rd St. 5th Floor <br /> New York, NY 10001 <br />(646) 736-1690</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4">
                            <h6 style={{ color: "#004153", textDecoration: "underline" }}>Harrisburg</h6>
                            <p>212 Locust St. Suite 400 <br />Harrisburg, PA 17101 <br /> (717) 231-5330</p>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="row">
                        <div className="col-5">
                            <h6 style={{ color: "#004153" }}>Follow Us</h6>
                            <div>
                                <p style={{ display: "inline-block" }}>Twitter</p> <p style={{ display: "inline-block" }}>Facebook</p> <p style={{ display: "inline-block" }}>LinkedIn</p> <p style={{ display: "inline-block" }}>YouTube</p> <p style={{ display: "inline-block" }}>Instagram</p> <p style={{ display: "inline-block" }}>IPG</p>
                            </div>
                        </div>
                        <div className="col-7" style={{ textAlign: "right" }}>
                            <p style={{ display: "inline-block" }}><br />Copyright 2020 Tierney | Privacy &amp; Terms </p>
                            <img
                                src="https://hellotierney.com/wp-content/uploads/2018/04/Layer-1.gif"
                                width="100"
                                className="d-inline-block align-top"
                                alt="Tierney logo"
                                style={{ display: "inline-block", marginLeft: "10px", marginTop: "-5px" }}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
