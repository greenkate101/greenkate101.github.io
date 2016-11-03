var EventEmitter = require('eventemitter3');


//create a new eventemitter object
//EventEmitters can register callback function to run whenever they trigger an event
var store = Object.create(EventEmitter.prototype);

EventEmitter.call(store);

var todoItems = [];

//add a todo item to our data
store.add = function (text) {
	todoItems.push({ text: text, completed: false, id: Math.random()});
	store.emit('update');
};

//complete a todo item (set its completed to false)
store.complete = function (id) {
	var todoItem = todoItems.find(function (item) {
		return item.id === id;
	});
	todoItem.completed = !todoItem.completed;
	store.emit('update');
};

store.getItems = function () {
	return todoItems;
}

module.exports = store;