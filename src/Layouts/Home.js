import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gallery from '../CssComponents/Gallery';
import gallery from '../Arrays/gallery';
import History from '../CssComponents/History';
import Parallax from '../CssComponents/Parallax';

export default class Information extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div style={margin}>
            <Gallery items={gallery}/>
            <History/>
            <Parallax/>
            {/*TODO: Realizar siguiente seccion de todos los modelos, carousel de tres componentes */}
        </div>
        );
    }
}

const margin ={
    'margin-top' : '20px'
};
