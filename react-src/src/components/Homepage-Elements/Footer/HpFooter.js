import React from "react";
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import { InputAdornment } from "@material-ui/core";
import { Icon, InlineIcon } from '@iconify/react';
import slashForward from '@iconify/icons-mdi/slash-forward';

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
                backgroundColor: "#E0DDD5"
            },
        },

    },
    top: {
        backgroundColor: "#DFE0E1",
        height: "100px",
        // marginTop: "200px",
        // textAlign: "center",
        padding: "20px",
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
        fontSize: "25px",
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
    btnSpan: {
        fontFamily: 'Montserrat, sans-serif',
        // fontWeight: 700,
        fontSize: 30,
        paddingRight: "10px",
        margin: "0 auto"
    },
    leftButton: {
        marginRight: "10px",
        marginLeft: "120px",
        borderRadius: "50px",
        color: "#004268",
        // borderColor: "#004268",
        width: "175px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
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
        borderRadius: "50px",
        color: "#004268",
        borderColor: "#004268",
        marginLeft: "12px",
        width: "175px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
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
    inputField: {
        backgroundColor: "#E0DDD5",
        width: "260px",
        height: "40px",
        borderRadius: "50px",
        border: "none",
        textAlign: "center",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: 15,
        outline: "none !important",
        outlineOffset: "none !important",
        // "&:focus": {
        //     backgroundColor: "white"
        // }

    },
    // submitEmailBtn: {
    //     width: "200px",
    //     height: "40px",
    //     borderRadius: "50px",
    //     color: "#004268",
    //     borderColor: "#004268",
    //     backgroundColor: "white",
    //     fontFamily: 'Montserrat, sans-serif',
    //     fontWeight: 700,
    //     fontSize: 15,
    //     marginTop: "10px",
    //     outline: "none !important",
    //     outlineOffset: "none !important",
    //     '&:hover': {
    //         backgroundColor: "#004268",
    //         color: "white",
    //         border: "none"
    //     },
    // },
    addresses: {
        fontFamily: 'Montserrat, sans-serif !important',
        fontSize: 17,
    },

    inputContainer: {
        position: "relative"
    },
    inputBtn: {
        position: "absolute",
        right: "8px",
        top: "8px",
        bottom: "8px",
        zIndex: 9,
        border: "none",
        backgroundColor: "#E0DDD5",
        borderRadius: "50%"
    }
}));


export default function FooterComponent(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.top}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className={classes.topText}>Lorem ipsum Contact us or Careers?</div>
                        </div>
                        {/* <br className={classes.break} /> */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className={classes.topButtons}>
                                <Button className={classes.leftButton} variant="light" href="/contact">Contact Us</Button>
                                <Icon icon={slashForward} height="20" /> <Icon icon={slashForward} height="20" />
                                <Button className={classes.rightButton} variant="outline-info" href="/careers">Careers</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.bottom} style={{ backgroundColor: "#F1F1F1", height: "400px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="container" style={{ paddingTop: "50px" }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12" style={{ marginBottom: "50px", textAlign: "center" }}>
                            <h6 style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: 20,
                            }}>Sign up &amp; stay Connected.</h6>
                            {/* <form className={classes.root}> */}
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
                            {/* <input
                                    className={classes.inputField}
                                    type="email"
                                    aria-label="Email"
                                    onChange={props.handleInputChange}
                                    value={props.userEmail}
                                    name="userEmail"
                                    placeholder="Enter Email Here"
                                    id="userEmail"
                                />
                                <button
                                    onClick={props.handleEmailSubmit}
                                    className={classes.submitEmailBtn}
                                    type="submit"
                                    id="button"
                                >
                                    Join
                            </button>
                            </form> */}
                            <form className={classes.root}>
                                <div className={classes.inputContainer}>
                                    <input type="text"
                                        className={classes.inputField}
                                        aria-label="Email"
                                        onChange={props.handleInputChange}
                                        value={props.userEmail}
                                        name="userEmail"
                                        placeholder="Enter Email Here"
                                        id="userEmail" />
                                    <div className="input-group-prepend">
                                        <button
                                            onClick={props.handleEmailSubmit}
                                            className={classes.inputBtn}
                                            type="submit"
                                            id="button"
                                        >
                                            <ArrowForwardIosIcon />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div style={{ marginLeft: "150px", display: "flex" }}>
                            <div>
                                <span className={classes.addresses} style={{ color: "#004153", textDecoration: "underline", fontWeight: 700 }}>Philadelphia</span>
                                <p className={classes.addresses}>1700 Market St. 29th Floor <br /> Philadelphia, PA 19103 <br />(215) 790-4100</p>
                            </div>

                            <div style={{ marginLeft: "45px" }}>
                                <span className={classes.addresses} style={{ color: "#004153", textDecoration: "underline", fontWeight: 700 }}>New York City</span>
                                <p className={classes.addresses}>100 West 33rd St. 5th Floor <br /> New York, NY 10001 <br />(646) 736-1690</p>
                            </div>
                            <div style={{ marginLeft: "45px" }}>
                                <span className={classes.addresses} style={{ color: "#004153", textDecoration: "underline", fontWeight: 700 }}>Harrisburg</span>
                                <p className={classes.addresses}>212 Locust St. Suite 400 <br />Harrisburg, PA 17101 <br /> (717) 231-5330</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="row">
                        <div className="col-4">
                            <h6 style={{ color: "#004153", fontWeight: 700 }}>Follow Us</h6>
                            <div>
                                <p style={{
                                    display: "inline-block",
                                }}><TwitterIcon style={{ color: "#004268", fontSize: 30 }} /></p>
                                <p style={{
                                    display: "inline-block", marginLeft: "10px"
                                }}><FacebookIcon style={{ color: "#004268", fontSize: 30 }} /></p>
                                <p style={{
                                    display: "inline-block", marginLeft: "10px"
                                }}><LinkedInIcon style={{ color: "#004268", fontSize: 30 }} /></p>
                                <p style={{
                                    display: "inline-block", marginLeft: "10px"
                                }}><YouTubeIcon style={{ color: "#004268", fontSize: 30 }} /></p>
                                <p style={{
                                    display: "inline-block", marginLeft: "10px"
                                }}><InstagramIcon style={{ color: "#004268", fontSize: 30 }} /></p>
                                <p style={{ display: "inline-block", marginLeft: "10px" }}>an IPG Agency</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="p-2" style={{ textAlign: "right" }}>
                                <p style={{ display: "inline-block", marginRight: "20px" }}><br />Copyright 2020 Tierney | Privacy &amp; Terms </p>

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
        </div>
    )
}
