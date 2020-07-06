import React from "react";
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    cardContainer: {
        boxShadow: "none"
    },
    cardImg: {
        width: "100%",
        height: "400px",
        left: "155px",
        position: "relative",
        zIndex: 1,
        margin: "0 auto",
        borderRadius: "7px",
        objectFit: "cover",
        border: "none",
        ['@media (min-width: 992px) and (max-width: 1130px)']: {
            width: "800px",
            left: "100px"
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            width: "700px !important",
            left: "100px !important"
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            width: "700px",
            left: "0px"
        },
    },
    cardImgLeft: {
        width: "100%",
        height: "400px",
        left: "-155px",
        position: "relative",
        zIndex: 1,
        margin: "0 auto",
        borderRadius: "7px",
        objectFit: "cover",
        border: "none",
        ['@media (min-width: 992px) and (max-width: 1130px)']: {
            width: "800px",
            left: "100px"
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            width: "700px !important",
            left: "100px !important"
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            width: "700px",
            left: "0px"
        },
    },
    cardArticle: {
        width: "750px",
        position: "relative",
        top: "-60px",
        left: "-180px",
        backgroundColor: "#F6F5F3",
        padding: "20px",
        zIndex: 2,
        margin: "0 auto",
        textAlign: "left",
        borderRadius: "10px",
        border: "none",
        boxShadow: "none",
        fontFamily: 'Montserrat, sans-serif',
        ['@media (min-width: 1130px) and (max-width: 1190px)']: {
            width: "600px",
        },
        ['@media (min-width: 992px) and (max-width: 1130px)']: {
            width: "600px",
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            width: "600px",
            left: "-100px"
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            width: "510px",
            left: "0px"
        },

    },
    cardArticleRight: {
        width: "750px",
        position: "relative",
        top: "-60px",
        left: "180px",
        backgroundColor: "#F6F5F3",
        padding: "20px",
        zIndex: 2,
        margin: "0 auto",
        textAlign: "left",
        borderRadius: "10px",
        border: "none",
        boxShadow: "none",
        fontFamily: 'Montserrat, sans-serif',
        ['@media (min-width: 1130px) and (max-width: 1190px)']: {
            width: "600px",
        },
        ['@media (min-width: 992px) and (max-width: 1130px)']: {
            width: "600px",
        },
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            width: "600px",
            left: "100px"
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            width: "510px",
            left: "0px"
        },
    },
    subtitle: {
        color: "#DB2416",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
    },
    title: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        fontSize: 30,
        paddingTop: "5px"
    },
    actionDiv: {
        // textAlign: "center", 

    },
    seeAllButton: {
        position: "relative",
        width: "175px",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        borderRadius: "50px",
        color: "#004268",
        borderColor: "#004268",
        zIndex: 3,
        top: "-105px",
        '&:hover': {
            backgroundColor: "#004268",
            color: "white",
            // border: "none"
        },
    }
});

export default function FeaturedArticle() {

    const classes = useStyles();

    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Card className={classes.cardContainer}>
                        <CardMedia className={classes.cardImg}
                            image="https://hellotierney.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-09-at-1.36.01-PM.png"
                            title="featured article title"
                        />
                    </Card>

                    <Card className={classes.cardArticle}>
                        <CardContent>
                            <Typography className={classes.subtitle}>
                                Brand Name
                    </Typography>
                            <Typography className={classes.title}>
                                Short Messaging Statement About the Project
                    </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                &nbsp;
                         <a href="/latest"
                                    style={{
                                        color: "#004268",
                                        textDecoration: "underline"
                                    }}>Read More</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className={classes.actionDiv} className="d-flex justify-content-end">
                <Button className={classes.seeAllButton}
                    variant="outline" href="/latest">See All</Button>
            </div>


            {/* Left */}

            <div className="row">
                <div className="col-12">
                    <Card className={classes.cardContainer}>
                        <CardMedia className={classes.cardImgLeft}
                            image="https://hellotierney.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-09-at-1.36.01-PM.png"
                            title="featured article title"
                        />
                    </Card>

                    <Card className={classes.cardArticleRight}>
                        <CardContent>
                            <Typography className={classes.subtitle}>
                                Brand Name
                    </Typography>
                            <Typography className={classes.title}>
                                Short Messaging Statement About the Project
                    </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                &nbsp;
                         <a href="/latest"
                                    style={{
                                        color: "#004268",
                                        textDecoration: "underline"
                                    }}>Read More</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className={classes.actionDiv} className="d-flex justify-content-start">
                <Button className={classes.seeAllButton}
                    variant="outline" href="/latest">See All</Button>
            </div>

            <div className="row">
                <div className="col-12">
                    <Card className={classes.cardContainer}>
                        <CardMedia className={classes.cardImg}
                            image="https://hellotierney.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-09-at-1.36.01-PM.png"
                            title="featured article title"
                        />
                    </Card>

                    <Card className={classes.cardArticle}>
                        <CardContent>
                            <Typography className={classes.subtitle}>
                                Brand Name
                    </Typography>
                            <Typography className={classes.title}>
                                Short Messaging Statement About the Project
                    </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                &nbsp;
                         <a href="/latest"
                                    style={{
                                        color: "#004268",
                                        textDecoration: "underline"
                                    }}>Read More</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className={classes.actionDiv} className="d-flex justify-content-end">
                <Button className={classes.seeAllButton}
                    variant="outline" href="/latest">See All</Button>
            </div>
        </div>
    )
}