var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var sharkStore = Object.create(EventEmitter.prototype);
EventEmitter.call(sharkStore);

var sharks = [];