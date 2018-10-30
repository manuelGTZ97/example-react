import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*var state = {
    isEnglish: false
};

var i = Object.assign({}, state, {isEnglish: true});
console.log(i);

//Only for iterables (Array not objects)
var a = [1,2,3,4,5];
var b = [6,7,8,9,10];

console.log(...a,...b);*/
