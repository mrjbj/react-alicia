// simple event emitter 
//   - note javascript dynamic method invocation using bracket notation 
//     so that events.save is the same as _events['save']
//   - if we have an add type, then will have this.events.add = []

function EventEmitter() {
    this._events = {};
}

// add listener function for given event type
EventEmitter.prototype.on = function (type, listener) {
    // if property events.type not exist, then create and initialize it to empty array
    this._events[type] = this._events[type] || []; 
    // add listener to property's array of values 
    this._events[type].push(listener);  
};

// invoke all of the listener functions whenever emit[type] is called
EventEmitter.prototype.emit = function (type) {
    if (this._events[type]) {
        this._events[type].forEach(listenerFunction => {
            listenerFunction();
        });
    }
};

//remove listener
EventEmitter.prototype.removeListener = function( type, listener) {
    if (this._events[type]) {
        this._events[type].splice(this._events[type].indexOf(listener), 1);
    }
};

export default EventEmitter;



