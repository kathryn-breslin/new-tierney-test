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
            color: "#004254"
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
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Enter your email address" variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <ArrowForwardIosIcon>
                                                    
                                                </ArrowForwardIosIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </form>
                        </div>
                        <div className="col-2">Philadelphia</div>
                        <div className="col-2">New York City</div>
                        <div className="col-2">Harrisburg</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 004254