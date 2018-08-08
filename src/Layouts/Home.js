import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gallery from '../CssComponents/Gallery';
import gallery from '../Arrays/gallery';
import History from '../CssComponents/History';
import Parallax from '../CssComponents/Parallax';
import CardDetail from '../CssComponents/CardDetail';

export default class Information extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div style={margin}>
            <Gallery items={gallery} />
            <History />
            <Parallax />
            <CardDetail />
        </div>
        );
    }
}

const margin ={
    'margin-top' : '20px'
};
