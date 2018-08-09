import React, { Component } from 'react';
import { Container, Row, Col, Button  } from 'reactstrap';
import Detail from '../Layouts/Detail';

//Functional component 
//Se puede aplicar para hacer componentes funcionales y la "clase" se peude usar en componentes padres
function Footer() {
    return (
        <Row style={background}>
            <Col style={centerImage}><img src="https://i.pinimg.com/originals/27/a1/6f/27a16f85d08a71aa0e3bb599b345fcf4.png" alt="yamaha" /></Col>
            <Col style={text}>
                <ul style={list}>
                    <li> <h5>R6 Model</h5> </li>
                    <li> <h5>R1 Model</h5> </li>
                    <li> <h5>R15 Model</h5> </li>
                  <li> <h5>R3 Model</h5> </li>
                </ul>
            </Col>
            <Col  lg="4" sm="12" style={centerImage}>
                <Button color="primary" size="lg" href="/Detail">More Info</Button>{' '}
            </Col>
        </Row>
    );
};

const centerImage = {
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
};

const text = {
    'display': 'inline-grid',
    'align-items': 'center'
};

const list = {
    'list-style': 'none'
};

const background = {
    'background-color': 'rgb(41, 41, 41)',
    'color': 'white',
    'margin-top': '20px'
};
export default Footer;