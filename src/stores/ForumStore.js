// ForumStore
// event emitter object that listens for actions from the dispatcher,
// performs business logic and updates state in virtual DOM, 
// then triggers updates in React by emitting notifications of updated state.
//
// contains data, methods that interact with that data and the registration 
// that responds to any actions involved with this data

import EventEmitter from "../eventemitter";
import ForumDispatcher from "../dispatcher/ForumDispatcher";

// initial data for store, set by <Forum /> constructore
var answerData = {
    "1": {
        body: "Isn't this about time travel?",
        correct: false
    },
    "2": {
        body: "React and Flux are a tool and a methodology for building front-end web applications.", 
        correct: false
    },
    "3": {
        body: "React is a synonym for respond.",
        correct: false
    }
};

// instantiate new EventEmitter for Store
var ForumStore = new EventEmitter();

// calls event emiter when store's data changes... 
ForumStore.emitChange = function () {
    this.emit('change');
}

// register listener function that subscribes to store's data changes
ForumStore.addChangeListener = function(listener) {
    this.on('change', listener);
}

ForumStore.getAnswers = function() {
    return answerData;
}

// push new answer into object list
ForumStore.addAnswer = function(newAnswer) {
    answerData[Object.keys(answerData).length + 1] = {
        body: newAnswer, 
        correct: false
    };
    var oldData = answerData;
    answerData = Object.assign({}, answerData);  // return new object, don't mutate
    console.log(`Does oldData === answerData?  ${oldData === answerData}`);
    this.emitChange();
}

// set all correct to false, then set id to true    
ForumStore.markAsCorrect = function(id) {
    for (let index in answerData) {
        answerData[index].correct = false;
    }
    answerData[id].correct = true;
    this.emitChange();
}


// this is one of the functions that will get called
// whenever ForumDispatcher.dispatch() is called.
// must register before ReactDOM.render() 
ForumDispatcher.register(function(action) {
    switch (action.actionType) {
        case 'FORUM_ANSWER_MARKED_CORRECT': {
            console.log(`actionType = ${action.actionType}, action.id = ${action.id}` );
            ForumStore.markAsCorrect(action.id);
            break;
        }
        case 'FORUM_ANSWER_ADDED': {
            console.log(`actionType = ${action.actionType}, action.newAnswer = ${action.newAnswer}` );
            ForumStore.addAnswer(action.newAnswer);
            break;
        }
        default: {
            console.log(`Action type: ${action.type} not found.`);
        }
    };
});

export default ForumStore;


