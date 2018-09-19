import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col, Alert  } from 'reactstrap';
import Home from '../Layouts/Home';
import Detail from '../Layouts/Detail';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
//Comentario develop a master
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Yamaha</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/Models">Models</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
    );
  }
}
//First develop commit
//Write my first feature in git flow
//First relaese 1.0.0