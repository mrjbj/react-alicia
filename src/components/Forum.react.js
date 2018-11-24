// Main container component that contains state (allAnswers) 

import React, { Component } from 'react';
import ForumHeader from './ForumHeader.react';
import ForumQuestion from './ForumQuestion.react';
import ForumAnswers from './ForumAnswers.react';
import ForumAddAnswerBox from './ForumAddAnswerBox.react';

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
            <ForumAddAnswerBox />
          </div>
      </div>
    );
  }

  // private method called from constructor to set initial state
  // only do this on 
  _jgetState(pMethod) {
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