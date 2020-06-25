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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 800, 
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        fontSize: 80,
        ['@media (min-width: 768px) and (max-width: 992px)']: { 
            width: 400,
        },
        ['@media (min-width: 576px) and (max-width: 768px)']: { 
            width: 400,
        },
        ['@media (min-width: 200px) and (max-width: 576px)']: { 
            width: 200,
        } 
    },
    listItem: {
        '&:hover': {
            background: "#f00",
         }
    },
    fullList: {
        width: '100%',
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
                    <Link style={{textDecoration: "none", color: "inherit"}} to={{
                        pathname: "/"
                    }}>Home</Link>
                </ListItem>
                <ListItem  className={classes.listItem} button>
                    <Link style={{textDecoration: "none", color: "inherit"}} to={{
                        pathname: "/work"
                    }}>Work</Link>
                </ListItem>
                <ListItem  className={classes.listItem} button>
                    <Link style={{textDecoration: "none", color: "inherit"}} to={{
                        pathname: "/about"
                    }}>About</Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{textDecoration: "none", color: "inherit"}} to={{
                        pathname: "/latest"
                    }}>Latest</Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{textDecoration: "none", color: "inherit"}} to={{
                        pathname: "/careers"
                    }}>Careers</Link>
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <Link style={{textDecoration: "none", color: "inherit"}} to={{
                        pathname: "/contact"
                    }}>Contact</Link>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Navbar>
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
            <Nav className="justify-content-end" activeKey="/">
                {['right',].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}

            </Nav>
        </div>
    );
}


