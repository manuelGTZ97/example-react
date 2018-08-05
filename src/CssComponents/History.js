import React, { Component } from 'react';
import { Container, Row, Col, Alert  } from 'reactstrap';
import historyArray from '../Arrays/history';
export default class History extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Row style={margin}>
                <Col>
                {/*Al momento de llamar el componente padre, se llama el nombre del props que es el objeto y se llama el array de objetos que seria el json*/}
                    <AlertComponent historyArray={historyArray[0]} />
                    <AlertComponent historyArray={historyArray[1]} />
                </Col>
                <Col style={colParent}> <img style={middleImage} src={historyArray[4].small} onLoad={this.onLoad} /></Col>
                <Col>
                    <AlertComponent historyArray={historyArray[2]} />
                    <AlertComponent historyArray={historyArray[3]} />
                </Col>
            </Row>
        );
    }
}

//Componentes pequeños que realizan la funcion del body del AlertComponent
//Recibirá como parametro props y props.NOMBREDELOBJETO.NOMBREDELAPROPIEDADDELOBJETO
const Title = props => <h4 className="alert-heading"> {props.historyArray.title} </h4>;
const Body = props => <p> {props.historyArray.body} </p>
const imageResponsive = props => <img src={props.historyArray.small} alt="prueba"/>;

//Componente que engloba los dos componentes pequeños
//Recibirá como parametro props
//Cuando se llama a los componentes pequeños se declara que objeto será NOMBREDELOBJETO={props.NOMBREDELOBJETODELOSCOMPONENTESPEQUEÑOS}
const AlertComponent = props => {
    return(
        <Alert color="primary">
            <Title historyArray={props.historyArray}/>
            <Body historyArray={props.historyArray}/>
        </Alert>
    );
};


//Css styles

const colParent = {
    'align-items': 'center',
    'display': 'flex',
    'justify-content' : 'center'
};

const middleImage = {
    'vertical-align': 'middle'
};

const margin ={
    'margin-top' : '20px'
};