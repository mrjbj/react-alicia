// ForumAnswer
//  - react presentation component of a single answer
//  - note that there's no 'this' issue here when packaging as stateless function component
//  - so use 'props.answer' instead of 'this.props.answer'
//  - 'this' is actually undefined.

import React from 'react';
import PropTypes from "prop-types";

function ForumAnswer(props) {
    console.log(`ForumAnswer props = ${props.answer.body}`);
    return (
        <div className="panel panel-default">
            <div className="panel-body">
              {props.answer.body}
            </div>
        </div>
    );
}

ForumAnswer.propTypes = {
    answer: PropTypes.object
};

export default ForumAnswer;