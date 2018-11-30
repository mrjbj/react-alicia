// Main container component that contains state (allAnswers) 

import React, { Component } from 'react';
import ForumHeader from './ForumHeader.react';
import ForumQuestion from './ForumQuestion.react';
import ForumAnswers from './ForumAnswers.react';
import ForumAddAnswerBox from './ForumAddAnswerBox.react';
import ForumDispatcher from '../dispatcher/ForumDispatcher';

//this is a container component that contains state
// therefore it's a class with constructor that initializes it.
// 
// if it were a presentation component then it would just be a function like so:
//      function Forum(props) { return <JSX>;}
//
// State -vs Properties
//   - properties are immutable, initialized by JSX at component creation 
//   - state is private mutable data structure that can be passed down to 
//     child components for encapsulated rendering therein.
//   - properties can be validated via 'proptypes', state's internal structure not.
class Forum extends Component {
    constructor(props) {
        super(props);  // always do this.
        this.state = this._jgetState();
    }

    //public methods
    componentDidMount() {
        // setting state here will cause re-rendering
        console.log('componentDidMount Called');
        this.setState(this._jgetState(2));
    }
    componentWillUnmount() {
        // called just before component is destroyed
        console.log('componentWillUnmount called');
    }
    render() {
        return (
        // passing down state into presentation component's "prop" property
        <div> 
            <ForumHeader />

            <div className="container">
                <ForumQuestion />
                <hr />
                <ForumAnswers allAnswers={this.state.allAnswers} />
                <hr />
                <h4>Add an answer</h4>
                <ForumAddAnswerBox onAddAnswer={this._onAddAnswer} />
            </div>
        </div>
        );
    }

    // PRIVATE methods
    _onAddAnswer(pAnswerText) {
        // function that gets called by ForumAddAnswerBox component
        // whenever 'add' button is pressed.
        // that function expects to receive answser text passed into 
        // it from component's internal state.  
        // 
        // this function is a property of <ForumAddAnswerBox /> 
        // and is called from the line within it like so:
        //    this.props.onAddAnswer(this.state.answerText), where 'this' resolves to <ForumAddAnswerBox />
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: pAnswerText
        });
    }
    _jgetState(pMethod) {
        // private method called from constructor to set changeable state of component.
        // this.state is set to a javascript object called "allAnswers" (a list of
        // object properties, each identified by a unique object.propertyName of 
        // type string-id).  (As in allAnswers.1.body, allAnswers.2.body, etc.)
        //
        // since each objectPropertyName is like a unique integer, we can iterate
        // across a for-in loop while storing a unique id string in the iterator 
        // each time.  (jKey is used in the <FormAnswers /> implementation here.)

        if (pMethod) {
            return {
                allAnswers: {
                    "1": {
                        body: "Updated 1",
                        correct: false
                    },
                    "2": {
                        body: "Updated 2", 
                        correct: false
                    },
                    "3": {
                        body: "Updated 3",
                        correct: false
                    }
                }
            }
        }  else {
            return {
                allAnswers: {
                    "1": {
                        body: "Isn't that about time travel?",
                        correct: false
                    },
                    "2": {
                        body: "React and Flux are a tool and methodology for buildiong front end web applications.", 
                        correct: false
                    },
                    "3": {
                        body: "React is a synonym for 'respond'",
                        correct: false
                    }
                }
            }
        }
    }
}

export default Forum;