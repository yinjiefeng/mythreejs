'use strict';
require('styles/App.css');
require('normalize.css/normalize.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

var View2d = require('./components/2dView');

ReactDOM.render(<View2d />, document.getElementById('editor2d'));
