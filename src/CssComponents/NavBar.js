import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from '../Layouts/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      render() {
        return (
          <Router>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">Yamaha</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/Information">Information</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/Models">Models</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
              <Route exact path="/" component={Home} />
            </Navbar>
          </Router>
        );
      }
    }