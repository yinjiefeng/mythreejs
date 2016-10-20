/**
 * Created by jeff on 2016/10/20.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MyAction = {
  changePosition: function (top, left) {
    AppDispatcher.dispatch({
      actionType: 'CHANGE_POSITION',
      top: top,
      left: left
    });
  }
};

module.exports = MyAction;
