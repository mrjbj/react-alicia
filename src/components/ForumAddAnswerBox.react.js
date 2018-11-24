// ForumAddAnswerBox 
// presentation component to allow adding a new answer to ForumAnswers

import React from 'react';
// import Forum from './Forum.react';

function ForumAddAnswerBox(props) {
    return (
        <div>
            <textarea id="addAnswer" className="col-md-6 col-xs-8"></textarea>
            &nbsp;<input type="button" className="btn btn-primary" value="Add" />
        </div>
    );
};

export default ForumAddAnswerBox;