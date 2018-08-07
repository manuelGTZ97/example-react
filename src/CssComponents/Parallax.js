import React, { Component } from 'react';

export default class Parallax extends Component{
    render(){
        return(
            <div style={parallax}>
                <div style={insideDiv}>
                    Designed by Yamaha Racing
                </div>
            </div>
        );
    }
}

const parallax = {
    'background-image': 'url("https://i.pinimg.com/originals/65/d9/66/65d966785224286999d6b0171a14bd76.jpg")',
    'min-height': '400px', 
    'background-attachment': 'fixed',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'align-items': 'center',
    'display': 'flex',
    'justify-content' : 'center'
};

const insideDiv = {
    'border-style': 'solid',
    'width': '250px',
    'height': '50px',
    'color': 'white',
    'align-items': 'center',
    'display': 'flex',
    'justify-content' : 'center',
    'border-width': 'thin',
    'font-weight': 'lighter'
};
