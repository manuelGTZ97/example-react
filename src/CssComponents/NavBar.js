import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
//import { Link } from 'react-router';
import Detail from '../Layouts/Detail';
import Information from '../Layouts/Information';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink as RRNavLink } from 'react-router-dom';

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
          <Router>
            <Navbar color="faded" light style ={marginNavaBar}>
              <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink  tag={Link} to="/Information">Information</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/Detail">Detail</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
              <Route path="/Information" component={Information} />
              <Route path="/Detail" component={Detail} />
            </Navbar>
            
            </Router>
          //<div>sfds</div>
          /*<Router>
    <div>
      <ul>
        <li>
          <Link to="/Detail">Home</Link>
        </li>
        <li>
          <Link to="/Information">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route  path="/Detail" component={Detail} />
      <Route path="/Information" component={Information} />
    </div>
  </Router>*/
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