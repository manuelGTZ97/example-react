import React, { Component } from 'react';
import NavBar from '../CssComponents/NavBar';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../CssComponents/Footer';

function Layout(props) {
    return (
        <Container style={width}>
            <NavBar />
            {props.children}
            <Footer />
        </Container>
    )
}

const width = {
    'max-width': '100%'
  }
export default Layout;