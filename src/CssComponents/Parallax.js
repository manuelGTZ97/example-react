import React, { Component } from 'react';

const Parallax = () => <div style={parallax}> </div>;

const parallax = {
    'background-image': 'url("http://jonvilma.com/images/2016-yamaha-yzf-r1-3.jpg")',
    'min-height': '500px', 
    'background-attachment': 'fixed',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover'
};

export default Parallax;