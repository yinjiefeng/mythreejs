/**
 * Created by jeff on 2016/10/20.
 */
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var MyStore = require('../stores/MyStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'CHANGE_POSITION':
      MyStore.setPositionHandler(action.top, action.left);
      MyStore.emitChange();
      break;
    default:
      break;
  };
});

module.exports = AppDispatcher;
