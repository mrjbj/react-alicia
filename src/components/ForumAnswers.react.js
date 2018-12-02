// ForumAnswers 
//  - a stateful component containing collection of ForumAnswer components
//  - state is populated from Forum.allAnswers to start but has ability 
//  - to add more answers to that stack here locally.
// Properties
//  - props.allAnswers comes from <Forum allAnswers={this.state.foo}>
//  - sends property "onMarkCorrect" function down into <ForumAnswer onMarkCorrect={this._privateFunction} />
//  - 
// TODO: add in propTypes.isRequired for "allAnswers" property. 

import React from 'react';
import PropTypes from "prop-types";

import ForumAnswer from './ForumAnswer.react';
import ForumDispatcher from '../dispatcher/ForumDispatcher';  // a singleton import

class ForumAnswers extends React.Component {
    _answers = [];  // is this the same as ForumAnswers.prototype._answers = []?

    constructor(props) {
        super(props);
        for (let jKey in this.props.allAnswers) {
            // key attribute is react attribute that helps virtual dom diffing go faster.
            // props.allAnswers comes from <Forum>
            // sends strings "answer" and "onMarkCorrect" as properties to <ForumAnswer/>
            this._answers.push(<ForumAnswer 
                                            key={jKey} 
                                            id={jKey} 
                                            answer={this.props.allAnswers[jKey]} 
                                            dispatchMarkCorrectAction={this._onMarkCorrect}
                                            />);
        }
    }
    render() {
        return (
            <div>
                { this._answers }
            </div>
        );
    }

    // this function gets passed down as a property into each ForumAnswer component.
    _onMarkCorrect(id) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id: id
        });
    }
}

// receiveProperty: allAnswers >  default answer data from <Forum allAnswers={data} /> component. 
// sendProperty: onMarkCorrect >  logic for "mark correct" link on <ForumAnswer onMarkCorrect={addLogic} /> 
// should use for 'mark correct' html action 
ForumAnswers.prototype.answerShape = {
    body: PropTypes.string,
    correct: PropTypes.string
};

ForumAnswers.propTypes = {
    allAnswers: PropTypes.objectOf(PropTypes.shape(ForumAnswers.answerShape)).isRequired,
};


export default ForumAnswers;