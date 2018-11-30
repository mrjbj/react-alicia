// Dispatcher
// listens for actions coming from UI
// invokes functions registered in it's list to notify subscribers that action occured
// question: seems similar to event except that user action triggers emit
//           and no event 'type' needed, just call all functions registered
//           with dispatcher and each function is respnsible to discern
//           whether it responds to that action or not. 
//            
//           Hence, this.callbacks not an array of functions to call based on type
//           (e.g. _event.type1[], event.type2[]) but instead an object list
//           of functions to call no matter what action calls into dispatcher. 
//           Each function is invoked as a method, with method name uniquerly identified 
//           by a propertyname based on _lastID  (e.g. 'CID_' + this._lastID)

function Dispatcher() {
    this._lastID = 0;
    this._callbacks = {};
}

Dispatcher.prototype.register = function(callback) {
    var id = 'CID_' + this._lastID++;  // use then increment
    this._callbacks[id] = callback;
    return id;
}

//invoke all registered functions regardless of action type
Dispatcher.prototype.dispatch = function(action) {
    for (var func in this._callbacks) {
        this._callbacks[func](action);  //invoke each method passing in action object
    }
}

Dispatcher.prototype.waitFor = function(ids){
    // TODO: in case some functions need to wait for other functions
    // to complete before executing
}
export default Dispatcher;