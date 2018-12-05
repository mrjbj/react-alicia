// Main container component that contains state (allAnswers) 

import React, { Component } from 'react';
import ForumHeader from './ForumHeader.react';
import ForumQuestion from './ForumQuestion.react';
import ForumAnswers from './ForumAnswers.react';
import ForumAddAnswerBox from './ForumAddAnswerBox.react';
import ForumStore from '../stores/ForumStore';
import ForumActions from '../actions/ForumActions';

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
        this.state = {allAnswers: this._jgetState()};

        // bind returns a bound function, so we are setting _onChange to always
        // bind its this context to Forum.  If not, will have issue when 
        // _onChange is called from event emitter as regular function invocation.
        this._onChange = this._onChange.bind(this);
    }

    //public methods
    componentDidMount() {
        // setting state here will cause re-rendering
        console.log('Component mounted');
        ForumStore.addChangeListener(this._onChange);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("this.state updated.");
        console.log('old state, new state: ', prevState, this.state );
    }
    componentWillUnmount() {
        // called just before component is destroyed
        ForumStore.removeListener(this._onChange);
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
                <ForumAddAnswerBox dispatchNewAnswer={this._AddAnswer} />
            </div>
        </div>
        );
    }

    // PRIVATE methods
    _AddAnswer(pAnswerText) {
        // function that gets called by ForumAddAnswerBox component
        // whenever 'add' button is pressed.
        // that function expects to receive answser text passed into 
        // it from component's internal state.  
        // 
        // this function is a property of <ForumAddAnswerBox /> 
        // and is called from the line within it like so:
        //    this.props.onAddAnswer(this.state.answerText), where 'this' resolves to <ForumAddAnswerBox />
        ForumActions.addNewAnswer(pAnswerText);
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
        return ForumStore.getAnswers();
    }
    // listener function that subscribes to ForumStore.emitChange via ForumStore.addChangeListener
    // it's registered in the componentDidMount lifecycle method.
    // just get the data again and re-render yourself
    _onChange() {
        this.setState({ allAnswers: ForumStore.getAnswers() });
 }
}

export default Forum;