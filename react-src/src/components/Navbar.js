import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Nav, Navbar } from "react-bootstrap";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        marginTop: 40,
        width: 800,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        paddingLeft: 40,
        fontSize: 60,
        ['@media (min-width: 768px) and (max-width: 992px)']: {
            width: 500,
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: {
            width: 400,
            fontSize: 60,
        },
        ['@media (min-width: 200px) and (max-width: 576px)']: {
            width: 200,
            fontSize: 40,
        }
    },
    listItem: {
        '&:hover': {
            paddingLeft: "70px",
            backgroundColor: "white",
            // color: "#DB2416"
            showArrow: {
                visibility: "visible", 
                color: "#DB2416"           
            }
        }
    },
    fullList: {
        width: '100%',
    },
    menu: {
        fontFamily: 'Montserrat, sans-serif',
        border: "none",
        fontWeight: 700,
        fontSize: 20,
        textTransform: "none",
    '&:hover': {
        backgroundColor: "white",
        color: "#DB2416"
    }
}
});

export default function NavbarComp() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const classes = useStyles();

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem className={classes.listItem} button>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={{
                        pathname: "/"
                    }}>Home <ArrowForwardIosIcon className={classes.showArrow} /> </Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={{
                        pathname: "/work"
                    }}>Work <ArrowForwardIosIcon className={classes.showArrow} /> </Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={{
                        pathname: "/about"
                    }}>About <ArrowForwardIosIcon className={classes.showArrow} /> </Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={{
                        pathname: "/latest"
                    }}>Latest <ArrowForwardIosIcon className={classes.showArrow} /> </Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={{
                        pathname: "/careers"
                    }}>Careers <ArrowForwardIosIcon className={classes.showArrow} /> </Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={{
                        pathname: "/contact"
                    }}>Contact <ArrowForwardIosIcon className={classes.showArrow} /> </Link>
                </ListItem>
                <div style={{ float: "right", marginTop: "20%", marginRight: "10%" }}>
                    <img
                        src="https://hellotierney.com/wp-content/uploads/2018/04/Layer-1.gif"
                        width="150"
                        // height="100"
                        className="d-inline-block align-top"
                        alt="Tierney logo"
                    />
                </div>

            </List>
        </div>
    );

    return (
        <>
            <Navbar style={{marginLeft: "-20px", marginTop: 30, display: "inline-block"}}>
                <Navbar.Brand href="/">
                    <img
                        src="https://hellotierney.com/wp-content/uploads/2018/04/Layer-1.gif"
                        width="150"
                        // height="100"
                        className="d-inline-block align-top"
                        alt="Tierney logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <Nav activeKey="/" style={{ marginTop: 60, display: "inline-block", float: "right"}}>
                {['right',].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button className={classes.menu} onClick={toggleDrawer(anchor, true)}>Menu<AddIcon style={{ color: "#DB2416", marginLeft: 5}} /></Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}

            </Nav>
        </>
    );
}


