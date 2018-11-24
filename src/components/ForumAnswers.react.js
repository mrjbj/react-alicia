// ForumAnswers 
//  - a stateful component containing collection of ForumAnswer components
//  - state is populated from Forum.allAnswers to start but has ability 
//  - to add more answers to that stack here locally.

import React from 'react';
import ForumAnswer from './ForumAnswer.react';

class ForumAnswers extends React.Component {
    _answers = [];  // is this the same as ForumAnswers.prototype._answers = []?

    constructor(props) {
        super(props);
        for (let jKey in this.props.allAnswers) {
            // key attribute is react attribute that helps virtual dom diffing go faster.
            this._answers.push(<ForumAnswer key={jKey} id={jKey} answer={this.props.allAnswers[jKey]} />);
        }
    }
    render() {
        return (
            <div>
                { this._answers }
            </div>
        );
    }
}

export default ForumAnswers;