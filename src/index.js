import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();


var a0 = 0;
var a1 = 0;

if (a0 === a1) {
    console.log("so sanh 1: Hai so nay bang nhau")
} else {
    console.log("so sanh 1: Hai so nay khac nhau")
}