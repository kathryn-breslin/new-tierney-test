import React from "react";
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Pull statement from API
const useStyles = makeStyles({
    missionContainer: {
        marginTop: "200px",
        marginBottom: "200px",
        textAlign: "center",
        justifyContent: "center",
        width: "50%",
        margin: "0 auto",
    },
    cardContainer: {
        boxShadow: "none"
    },
    missionTitle: {
        textAlign: "center !important",
        margin: "0 auto",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 800,
        fontSize: 35,
    }
    ,
    actionButton: {
        textAlign: "center !important",
        margin: "0 auto",
        width: "175px",
        borderRadius: "50px",
        color: "#004268",
        borderColor: "#004268",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 800,
        '&:hover': {
            backgroundColor: "#004268",
            color: "white",
            // border: "none"
        },
    }

});

export default function Mission() {
    const classes = useStyles();

    return (
        <div className="container" className={classes.missionContainer}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <Card className={classes.cardContainer}>
                            <CardContent>
                                <Typography className={classes.missionTitle}>
                                    Lorem Ipsum mission.
                                </Typography>
                                <Typography>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>

                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="row">
                        <Button className={classes.actionButton} variant="outline-info" href="/about">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}