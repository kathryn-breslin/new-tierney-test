import React from "react";
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FooterComponent() {
    const classes = useStyles();
    return (
        <div>
            <div style={{ backgroundColor: "#DFE0E1", height: "100px", marginTop: "200px", textAlign: "center" }}>
                <div style={{ paddingTop: "20px" }}>
                    <div style={{ display: "inline-block", margin: "0 auto" }}>Lorem ipsum Contact us or Careers? ipsum lorem amet.</div>
                    <div style={{ display: "inline-block", margin: "10px" }}>
                        <Button style={{ marginRight: "10px" }} variant="light" href="/contact">Contact Us</Button>
                        //
                        <Button style={{ marginLeft: "10px" }} variant="outline-info" href="/careers">Explore Jobs</Button>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#F1F1F1", height: "400px", marginLeft: "auto", marginRight: "auto" }}>
                <div className="container" style={{ paddingTop: "50px" }}>
                    <div className="row">
                        <div className="col-3">
                            <h6>Sign up &amp; stay Connected.</h6>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Enter your email address" variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <ArrowForwardIosIcon>


                                                    {/* Link below to Input Adornment */}
                                                    {/* https://stackoverflow.com/questions/51694149/add-element-inside-textfield-component-material-ui */}



                                                </ArrowForwardIosIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </form>
                        </div>
                        <div className="col-3">
                            <h6 style={{ color: "#004153", textDecoration: "underline" }}>Philadelphia</h6>
                            <p>1700 Market St. 29th Floor <br /> Philadelphia, PA 19103 <br />(215) 790-4100</p>
                        </div>

                        <div className="col-3">
                            <h6 style={{ color: "#004153", textDecoration: "underline" }}>New York City</h6>
                            <p>100 West 33rd St. 5th Floor <br /> New York, NY 10001 <br />(646) 736-1690</p>
                        </div>
                        <div className="col-3">
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
