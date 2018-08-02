import React, { Component } from 'react';
import { Container, Row, Col,ListGroup,ListGroupItem } from 'reactstrap';
import Gallery from '../CssComponents/Gallery';
import gallery from '../Arrays/gallery';

export default class Information extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <Row>
                <Col> <Gallery items={gallery} /> </Col>
            </Row>
            <Row style={margin}>
                <Col>
                    <ListGroup>
                        <ListGroupItem active>Suzuki</ListGroupItem>
                        <ListGroupItem ><p>Con una inigualable combinación de excelente respuesta al acelerador, 
                                    lineal entrega de potencia, capacidad de frenada, fiabilidad en la conducción y 
                                    la mejor relación peso/potencia de su clase.</p>
                        </ListGroupItem>
                     </ListGroup>

                     <ListGroup style={margin}>
                        <ListGroupItem active>Gsxr</ListGroupItem>
                        <ListGroupItem><p>La Suzuki GSX-R 600 de 2012 emplea pistones forjados ligeros y de mejor duración, 
                            que los modelos anteriores, diseñados mediante el mismo MEF.</p>
                        </ListGroupItem>
                     </ListGroup>
                </Col>
                <Col><img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} onLoad={this.onLoad} style={middeImage}/></Col>
                <Col>
                    <ListGroup>
                            <ListGroupItem active>Gixxer</ListGroupItem>
                            <ListGroupItem ><p>Las GSX-R son una serie de motos deportivas del fabricante japonés 
                            Suzuki. Como sobrenombre se las suele denominar "Gixxers".</p>
                            </ListGroupItem>
                    </ListGroup>

                    <ListGroup style={margin}>
                            <ListGroupItem active>600</ListGroupItem>
                            <ListGroupItem ><p>Suzuki GSX-R 600 2012 equipa un diseño de carrocería más aerodinámico y compacto. 
                            Fue desarrollada en el túnel de viento con el piloto en su lugar.</p>
                            </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </div>
        );
    }
}

const margin = {
    'margin-top': '20px'
};

const middeImage = {
    'display': 'block',
    'margin-left': 'auto',
    'margin-right': 'auto'
};

const small = 'https://cdn1.louis.de/content/bikedb/images/bikes/fotos/350x350/1731.png';
const medium = 'https://servicemanualsgsxr.com/es/wp-content/uploads/2016/06/L6-Suzuki-GSXR-750-2016-6-660x437.png';
const large = 'https://motobanda.pl/uploads/motors/367/2069.jpg';
const xlarge = 'https://motobanda.pl/uploads/motors/367/2069.jpg';