import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = theme => ({
    cardContainer: {
        width: "284px",
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
            transition: "all .1s ease-in"
        }
    },
    cardImg: {
        width: "284px",
        height: "284px",
        objectFit: "cover",
        borderRadius: "7px",
 
    },
    textOverlay: {
        position: "absolute",
        textAlign: "left",
        color: "white",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 800,
        fontSize: "30px",
        top: '0px',
        left: '0px',
        opacity: 0,
        width: "284px",
        height: "284px",
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
