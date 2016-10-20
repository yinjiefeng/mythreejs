/**
 * Created by jeff on 2016/10/20.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var MyStore = assign({}, EventEmitter.prototype, {
  position: {
    top:50,
    left:50
  },
  getPosition: function () {
    return this.position;
  },
  setPositionHandler: function (top, left) {
    this.position.top = top;
    this.position.left = left;
  },
  emitChange: function () {
    this.emit('changePosition');
  },
  addChangePositionListener: function (callback) {
    this.on('changePosition', callback);
  },
  removeChangePositionListener: function (callback) {
    this.removeListener('changePosition', callback);
  }
});

module.exports = MyStore;
