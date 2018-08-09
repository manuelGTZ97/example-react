import React, { Component } from 'react';
import './App.css';
import NavBar from './CssComponents/NavBar';
import Gallery from './CssComponents/Gallery';
import gallery from './Arrays/gallery';
import { Container, Row, Col } from 'reactstrap';
import Footer from './CssComponents/Footer';

class App extends Component {
  render() {
    return (
      <Container style={width}>
          <NavBar />
          <Footer />
      </Container>
    );
  }
}
const width = {
  'max-width': '100%'
}

export default App;
