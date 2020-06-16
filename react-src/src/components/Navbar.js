import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Link to={{
                    pathname: "/"
                }}>Home</Link>
            </Nav.Item>

            <Nav.Item>
                <Link to={{
                    pathname: "/work"
                }}>Work</Link>
            </Nav.Item>

            <Nav.Item>
                <Link to={{
                    pathname: "/about"
                }}>About</Link>
            </Nav.Item>

            <Nav.Item>
                <Link to={{
                    pathname: "/latest"
                }}>Latest</Link>
            </Nav.Item>

            <Nav.Item>
                <Link to={{
                    pathname: "/careers"
                }}>Careers</Link>
            </Nav.Item>

            <Nav.Item>
                <Link to={{
                    pathname: "/contact"
                }}>Contact</Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;