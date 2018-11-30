import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Forum from './components/Forum.react'; 

import ForumDispatcher from './dispatcher/ForumDispatcher';
import EventEmitter from './eventemitter';



// var jElement = React.createElement('h1', {className: 'greeting'}, 'Hello World');
ReactDOM.render(<Forum />,  document.getElementById('root'));



// SCRATCH
/* this is just playing around with EventEmitter and ForumDispatcher Objects */
var myEmitter = new EventEmitter();
myEmitter.on("STARTED", function() {
    console.log('Listener 1 - started the app.');
});
myEmitter.on("STARTED", function() {
    console.log('Listener 2 - started the app.');
});

// this triggers the functions registered by 'on' to run
myEmitter.emit('STARTED');

ForumDispatcher.register(function(action) {
    if (action.actionType === "FORUM_ANSWER_MARKED_CORRECT") {
        console.log(`actionType = ${action.actionType}, answer id = ${action.id}` );
    } else if (action.actionType === "FORUM_ANSWER_ADDED") {
        console.log(`actionType = ${action.actionType}, answer id = ${action.newAnswer}` );
    } else {
        console.log('actionType not found');
    }
});

