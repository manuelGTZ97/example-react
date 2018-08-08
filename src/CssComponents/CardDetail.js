import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import cardsArray from '../Arrays/cards';
export default class CardDetail extends Component {
    render() {
        return (
            <Col style={margin}>
                <CardDeck>
                    <Cardelement cardsArray={cardsArray[0]}/>
                    <Cardelement cardsArray={cardsArray[1]} />
                    <Cardelement cardsArray={cardsArray[2]}/>
                </CardDeck>
            </Col>
        );
    }
}

const margin = {
    'margin-top': '20px'
};

const Cardtit = props => <CardTitle> {props.cardsArray.title} </CardTitle>;
const Cardbody = props => <CardText> {props.cardsArray.body} </CardText>;
const Cardimage = props => {
    const {url} = props;
    return(
    <CardImg top width="100%" src={url} alt="Card image cap" />
    );

};


const Cardelement = props => {
    return (
        <Card>
            <Cardimage url={props.cardsArray.img} />
            <CardBody>
                <Cardtit cardsArray={props.cardsArray}/>
                <Cardbody cardsArray={props.cardsArray}/>
            </CardBody>
        </Card>
    );
};