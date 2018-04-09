/*    Music App | University of Richmond | Jared Barnum & John Kim     */

import React, { Component } from "react";
import NavBar from "./components/Navbar/index.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";

import Wrapper from "./components/Wrapper/index.js";
import "./app.css"
import Footer from "./components/Footer/footer.js";

const NavLink = require('react-router-dom').NavLink;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
                <NavbarBrand href="/">Navbar</NavbarBrand>
                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                <Collapse isOpen={this.state.collapse} navbar>
                    <NavbarNav className="mr-auto" onClick={this.onClick}>
                        <NavItem>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/feature">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/opinions">Opinions</NavLink>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav className="ml-auto">
                        <NavItem>
                            <NavLink className="nav-link" to="https://facebook.com/"><Fa icon="facebook" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="https://twitter.com/"><Fa icon="twitter" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="https://instagram.com/"><Fa icon="instagram" /></NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }
}
