import React from "react";
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    cardContainer: {
        boxShadow: "none"
    },
    cardImg: {
        width: "800px",
        height: "400px",
        // objectFit: "cover",
        // top: "-60px",
        left: "200px",
        position: "relative",
        zIndex: 1,
        margin: "0 auto",
        borderRadius: "10px",
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
        left: "-200px",
        backgroundColor: "#F6F5F3",
        padding: "50px",
        zIndex: 2,
        margin: "0 auto",
        textAlign: "left",
        borderRadius: "10px",
        border: "none",
        boxShadow: "none",
        fontFamily: 'Montserrat, sans-serif',
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            width: "600px",
            left: "-100px"
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            width: "510px",
            left: "0px"
        },

    },
    subtitle: {
        color: "#DB2416",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
    },
    title: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: 30,
        paddingTop: "10px"
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
                            image="https://hellotierney.com/retail/wp-content/uploads/2020/02/thought-leadership_hero-image_1440x500@2x-scaled.jpg"
                            title="featured article title"
                        />
                    </Card>

                    <Card className={classes.cardArticle}>
                        <CardContent>
                            <Typography className={classes.subtitle}>
                                Culture
                    </Typography>
                            <Typography className={classes.title}>
                                Article Title
                    </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo. &nbsp;
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
        </div>




        // <div>
        //     {/* // This should be pulled from the API
        // //Temporarily hard-coding it here for front-end structure */}

        //     <div style={{
        //         textAlign: "center"
        //     }}>
        //         <Card.Img style={{
        //             width: "800px",
        //             height: "400px",
        //             // position: "absolute",
        //             // top: "30px",
        //             // left: "130px",
        //             objectFit: "cover",
        //             zIndex: 1,
        //             margin: "0 auto",
        //             borderRadius: "10px",
        //             border: "none"
        //         }}
        //             className="featuredImg" src="https://hellotierney.com/retail/wp-content/uploads/2020/02/thought-leadership_hero-image_1440x500@2x-scaled.jpg" />

        //         <Card style={{
        //             width: "750px",
        //             // position: "absolute",
        //             top: "-60px",
        //             left: "-200px",
        //             backgroundColor: "#F6F5F3",
        //             padding: "50px",
        //             zIndex: 2,
        //             margin: "0 auto",
        //             textAlign: "left",
        //             borderRadius: "10px",
        //             border: "none",         
        //             ['@media (min-width: 768px) and (max-width: 992px)']: {
        //                 left: "initial",
        //                 width: "550px",

        //             },

        //         }} className="featuredText">
        //             <Card.Subtitle style={
        //                 {
        //                     color: "#DB2416",
        //                     fontFamily: 'Montserrat, sans-serif',
        //                     fontWeight: 700,
        //                 }}>Culture</Card.Subtitle>
        //             <Card.Title style={{
        //                 fontFamily: 'Montserrat, sans-serif',
        //                 fontWeight: 700,
        //                 fontSize: 30,
        //                 paddingTop: "10px"
        //             }}>Article Title</Card.Title>
        //             <Card.Text style={{
        //                 fontFamily: 'Montserrat, sans-serif',
        //             }}>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        //                 sed do eiusmod tempor incididunt ut labore et dolore magna
        //                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //                 ullamco laboris nisi ut aliquip ex ea commodo. &nbsp;
        //                 <a href="/latest"
        //                     style={{
        //                         color: "#004268",
        //                         textDecoration: "underline"
        //                     }}>Read More</a>
        //             </Card.Text>
        //         </Card>

        //     </div>



        //     <div className="seeAllWork" style={{
        //         // zIndex: 3,
        //         // marginLeft: "75%",
        //         // marginTop: "-190px",
        //         // width: "130px",
        //         textAlign: "center"
        //     }}>
        //         <Button className="seeAllWork" style={{
        //             width: "130px",
        //             borderRadius: "50px",
        //             color: "#004268",
        //             borderColor: "#004268",
        //         }}
        //             variant="outline" href="/latest">See All</Button>
        //     </div>


        // </div>
    )
}