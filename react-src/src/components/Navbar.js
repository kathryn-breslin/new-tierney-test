import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
        </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to={{
                        pathname: "/"
                    }}>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={{
                        pathname: "/work"
                    }}>Work</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={{
                        pathname: "/about"
                    }}>About</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={{
                        pathname: "/latest"
                    }}>Latest</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={{
                        pathname: "/careers"
                    }}>Careers</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={{
                        pathname: "/contact"
                    }}>Contact</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}


   