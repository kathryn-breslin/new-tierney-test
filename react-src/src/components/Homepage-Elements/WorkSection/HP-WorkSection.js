import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Card from 'react-bootstrap/Card'
// import "./HP-WorkSection.css";

const useStyles = theme => ({
    cardContainer: {
        width: "250px",
        height: "auto",
        margin: "10px",
        border: "none",
        borderRadius: "7px",
        display: "inline-block",
        position: "relative",
        backgroundColor: "#004268",
        '&:hover :nth-child(2)': {
            opacity: 1,
            backgroundColor: "#004268",
        }
    },
    cardImg: {
        width: "250px",
        height: "250px",
        objectFit: "cover",
        borderRadius: "7px",
 
    },
    textOverlay: {
        position: "absolute",
        textAlign: "left",
        color: "white",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: "30px",
        top: '0px',
        left: '0px',
        opacity: 0,
        width: "250px",
        height: "250px",
        paddingTop: "20px", 
        paddingLeft: "20px"
    }
})

class HpWorkSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (

            <Card
                className={classes.cardContainer}
                onClick={this.props.onMouseOver}
            >
                <CardMedia className={classes.cardImg}
                    image={this.props.client_image} alt={this.props.client} />
                <div className={classes.textOverlay}>
                    {this.props.client}
                </div>
            </Card>
        )
    }
}

export default withStyles(useStyles)(HpWorkSection);
