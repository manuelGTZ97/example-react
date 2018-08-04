import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
//import { Link } from 'react-router';
import Detail from '../Layouts/Detail';
import { BrowserRouter as Router, Route, Link } from "react-router";

import App from '../App';
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
            /*<Navbar color="faded" light style ={marginNavaBar}>
              <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/test">Information</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>*/
          //<div>sfds</div>
          <Router>
    <div>
      <ul>
        <li>
          <Link to="../Layouts/Detail">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route  path="../Layouts/Detail" component={Detail} />
      <Route path="/about" component={About} />
    </div>
  </Router>
        );
      }
    }

const marginNavaBar = {
    margin: '0 5px 0 5px',
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);