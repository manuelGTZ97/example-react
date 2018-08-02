import React, { Component } from 'react';
import './App.css';
import NavBar from './CssComponents/NavBar';
import Gallery from './CssComponents/Gallery';
import gallery from './Arrays/gallery';
import { Container, Row, Col } from 'reactstrap';
import Information from './Layouts/Information';

class App extends Component {
  render() {
    return (
      <Container style={margin}>
      <NavBar /> 
      <Information />
      </Container>
    );
  }
}

const margin = {
  margin: '0',
  'max-width': '100%'
}

export default App;
