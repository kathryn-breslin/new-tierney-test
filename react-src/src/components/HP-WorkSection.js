import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


class HpWorkSection extends Component {

    render() {
        return (
            <Card style={{ minWidth: 275 }}>
                <CardContent>
                    <Paper style={{ padding: 2, margin: 'auto', maxWidth: 500, marginTop: 20 }}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase style={{ width: 128, height: 128 }}>
                                    {/* <img src={item.image} style={{ margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%' }} /> */}
                                </ButtonBase>
                            </Grid>

                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {this.props.client}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>
                                            {/* <Button onClick={() => this.removeFromCart(item)}>Remove</Button> */}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* <Grid item>
                                    <Typography variant="subtitle1">Quantity: {item.quantity} </Typography>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Paper>
                </CardContent>
            </Card>
        )
    }
}

export default HpWorkSection;