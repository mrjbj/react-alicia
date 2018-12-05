// ForumActions 
// refactoring of code so all of the dispatch calls are in one place. 

import ForumDispatcher from "../dispatcher/ForumDispatcher";
import ForumConstants from "../constants/ForumConstants";

var ForumActions = {
    markAnswerCorrect: function (id) {
        ForumDispatcher.dispatch({
           actionType: ForumConstants.FORUM_ANSWER_MARKED_CORRECT,
           id: id 
        });
    },
    addNewAnswer: function(answerText) {
        ForumDispatcher.dispatch({
            actionType: ForumConstants.FORUM_ANSWER_ADDED,
            newAnswer: answerText
        });
    }
}

export default ForumActions;
