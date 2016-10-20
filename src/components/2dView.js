require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

var Camera = require('./camera');

var View2d = React.createClass({
  render: function () {
    return (<div>
      <Camera/>
    </div>)
  }
});

module.exports = View2d;
