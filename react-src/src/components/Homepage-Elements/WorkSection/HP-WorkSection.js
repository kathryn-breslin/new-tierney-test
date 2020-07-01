import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = theme => ({
    cardContainer: {
        width: "250px",
        height: "auto",
        margin: "10px",
        border: "none",
        borderRadius: "10px",
        display: "inline-block",
        position: "relative",
    },
    cardImg: {
        width: "250px",
        // height: "200px",
        height: "250px",
        objectFit: "cover",
        borderRadius: "10px"
    },
    textOverlay: {
        position: "absolute",
        color: "white",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: "20px",
        top: '20px',
        left: '20px',
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
                className={classes.cardContainer}>
                <CardMedia className={classes.cardImg}
                    image={this.props.client_image} alt={this.props.client} />
                    {console.log(this.props.client)}

                <div className={classes.textOverlay}>{this.props.client}</div>
            </Card>
        )
    }
}

export default withStyles(useStyles)(HpWorkSection);