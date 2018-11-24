import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Forum from './components/Forum.react'; 
// import * as serviceWorker from './serviceWorker';


// var jElement = React.createElement('h1', {className: 'greeting'}, 'Hello World');
ReactDOM.render(<Forum />,  document.getElementById('root'));



/*
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

*/
