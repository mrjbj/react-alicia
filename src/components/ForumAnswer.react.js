// ForumAnswer
//  - react presentation component of a single answer
//  - note that there's no 'this' issue here when packaging as stateless function component
//  - so use 'props.answer' instead of 'this.props.answer'
//  - 'this' is actually undefined.
//
// Usage: <ForumAnswers id={} answer={} onMarkCorrect={}
//  - id <string>: index of for-loop iterator passing across propertyNames defined in the allAnswers state object of <ForumAnswers />.
//  - answer <: data:  the answer object instanct pulled from allAnswers state in  <ForumAnswers />
//  - onMarkCorrect: function : logic injected in from <ForumAnswers /> used to drive behavior of html link "mark as corect" 
//
//   both the logic and the data are injected in via properties from <ForumAnswers /> container. 

import React from 'react';
import PropTypes from "prop-types";

function ForumAnswer(props) {
    console.log(`ForumAnswer props = ${props.answer.body}`);
    return (
        <div className="panel panel-default">
            <div className="panel-body">
              {props.answer.body}
              <div className="pull-right">
                <small><button className="link-button" onClick={this._markCorrect}>Mark as correct</button></small>
              </div>
            </div>
        </div>
    );
}


//
ForumAnswer.prototype._markCorrect = () => {
    this.props.onMarkCorrect(this.props.id);
};

ForumAnswer.propTypes = {
    id: PropTypes.string.isRequired,
    answer: PropTypes.object,
    onMarkCorrect: PropTypes.func.isRequired,
};

export default ForumAnswer;