import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import modelsArray from '../Arrays/models';
import Modal from './Modal';

export default class Models extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <RowModel modelsArray={modelsArray[0]} />
                <RowModel modelsArray={modelsArray[1]} />
                <RowModel modelsArray={modelsArray[2]} />
                <RowModel modelsArray={modelsArray[3]} />
                <RowModel modelsArray={modelsArray[4]} />
                <RowModel modelsArray={modelsArray[5]} />
            </div>
        );
    }
};
//Commit
//Commit develop
//Other

const ImgModel = props => {
    const { url } = props;
    return (
        <Col sm="12" lg={{ size: 4, offset: 1 }}>
            <img src={url} alt={url} style={image}/>
        </Col>
    );
};

const DescriptionModel = props => {
    return (
        <Col sm="12" lg="4">
            <h4> {props.modelsArray.title} </h4>
            <br />
            <p> {props.modelsArray.subtitle} </p>
        </Col>
    );
};

const ModalModel = props => {
    return(
        <Col sm="12" lg="2" style={centerButton}>
            <Modal buttonLabel={props.modelsArray.title} title={props.modelsArray.title} modal={props.modelsArray.modal}/>
        </Col>
    );
};

const RowModel = props => {
    return (
        <Row style={row}>
            <ImgModel url={props.modelsArray.img} />
            <DescriptionModel modelsArray={props.modelsArray} />
            <ModalModel modelsArray={props.modelsArray} />
        </Row>
    );
};


const row = {
    'border-bottom': 'solid',
    'margin-top': '10px',
    'margin-bottom': '15px'
};

const image = {
    'margin': '5px',
    'max-width': '100%'
};

const centerButton = {
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
};
//export default Models;