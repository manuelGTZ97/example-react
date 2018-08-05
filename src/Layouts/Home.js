import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gallery from '../CssComponents/Gallery';
import gallery from '../Arrays/gallery';
import History from '../CssComponents/History';

export default class Information extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Row style={margin}>
            <Gallery items={gallery}/>
            <History />
        </Row>
        );
    }
}

const margin ={
    'margin-top' : '20px'
};
