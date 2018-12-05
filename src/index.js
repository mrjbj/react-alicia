import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Forum from './components/Forum.react'; 


ReactDOM.render(<Forum />,  document.getElementById('root'));



// SCRATCH
// this is just playing around with EventEmitter and ForumDispatcher Objects 

/*
import EventEmitter from './eventemitter';
var myEmitter = new EventEmitter();
myEmitter.on("STARTED", function() {
    console.log('Listener 1 - started the app.');
});
myEmitter.on("STARTED", function() {
    console.log('Listener 2 - started the app.');
});

// this triggers the functions registered by 'on' to run
myEmitter.emit('STARTED');
*/


