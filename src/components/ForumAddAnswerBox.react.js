// ForumAddAnswerBox 
// stateful component to allow adding a new answer to ForumAnswers

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ForumAddAnswerBox extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this._addAnswer = this._addAnswer.bind(this);
        this.state = {
            answerText: ""
        }
    }

    // This Explainer: The 'this' in the function invocations '_onChange' and '_addAnswer' (which are triggered by the <textarea> and <input> 
    // HTML tags) normally resolve to either 'undefined' or 'window' (depending upon whether strict mode is set or not). 
    // This is becasue the method invocation '{this._onChange} is being passed as a parameter to the onChange event handler 
    // through react.  Since method functions are stripped of their object context when invoked from a variable passed as a
    // parameter the global execution context is set at run time to global or undefined. 
    //
    // Fix this issue either by binding 'this' to this' in class constructor or by using arrow functions 
    // as was done in the code below. 
    //      _methodName = () => { code } 

    render() {
        return (
            <div>
                <textarea 
                    id="addAnswer"
                    className="col-md-6 col-xs-8"
                    onChange={this._onChange}
                    ></textarea>
                &nbsp;
                <input 
                    type="button" 
                    className="btn btn-primary" 
                    value="Add"
                    onClick={this._addAnswer} />
            </div>
        );
    }

    // private methods
    _addAnswer () {
         // onAddAnswer is function passed in by user to define 
         // logic to be used upon clicking 'add' button. 
         // this function signature expects string 'answer text' 
         // passed in as property from JSX element above 
         //    <ForumAddAnswerBox onAddAnswer={this._onAddAnswer} />
        this.props.dispatchNewAnswer(this.state.answerText); 
    }

    _onChange  (event) {
        // this is essentially manual data-binding from HTML to JavaScript state object. 
        // console.log(`change detected in <textarea /> element. This / event equals: `, this, event);
        this.setState( Object.assign({}, {answerText: event.target.value}));
    }
}

export default ForumAddAnswerBox;