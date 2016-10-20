/**
 * Created by jeff on 2016/10/20.
 */
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

var myAction = require('../actions/MyAction');
var myStore = require('../stores/MyStore');

var Camera = React.createClass({
  getInitialState: function () {
    return {
      position: myStore.getPosition(),
      isMoveable: false
    }
  },
  componentDidMount: function () {
    myStore.addChangePositionListener(this._onStateChange);
  },
  componentWillUnmount: function () {
    myStore.removeChangePositionListener(this._onStateChange);
  },
  _onStateChange: function () {
    this.setState({
      position: myStore.getPosition()
    });
  },
  onMouseDownCamera: function (event) {
    console.log("onMouseDownCamera");
    var e = event || window.event;
    //console.log("isMoveable: ", this.state.isMoveable, ", X: ", e.clientX, ", Y: ", e.clientY);
    this.setState({
      isMoveable: true
    });
  },
  onMouseMoveCamera: function (event) {
    var e = event || window.event;
    if(this.state.isMoveable) {
      myAction.changePosition(e.clientX, e.clientY);
    }
  },
  onMouseUpCamera: function () {
    console.log("onMouseUpCamera");
    this.setState({
      isMoveable: false
    });
  },
  render: function () {
    return (<div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="view">
        <circle cx={this.state.position.top} cy={this.state.position.left} r="50" stroke="black"
                onMouseDown={this.onMouseDownCamera} onMouseMove={this.onMouseMoveCamera} onMouseUp={this.onMouseUpCamera}
                strokeWidth="2" fill="red"/>
      </svg>
    </div>)
  }
});

module.exports = Camera;

{/*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="-2 9.277 24 12.723" style="enable-background:new -2 9.277 24 12.723;" xml:space="preserve">
  <g id="normal_1_">
    <g>
      <g id="_x32__2_">
        <path style="fill:#FFFFFF;" d="M5.081,13.134h9.838c2.048,0,3.708,1.662,3.708,3.71v0.581c0,2.047-1.659,3.709-3.707,3.709H5.081     c-2.048,0-3.707-1.662-3.707-3.709v-0.581C1.374,14.796,3.033,13.134,5.081,13.134z" />
        <path style="fill:#3085C4;" d="M14.92,21.634H5.081c-2.32,0-4.207-1.888-4.207-4.209v-0.581c0-2.321,1.887-4.21,4.207-4.21h9.838     c2.319,0,4.207,1.889,4.207,4.21v0.581C19.126,19.746,17.239,21.634,14.92,21.634z M5.081,13.634c-1.769,0-3.207,1.44-3.207,3.21     v0.581c0,1.77,1.438,3.209,3.207,3.209h9.839c1.768,0,3.206-1.439,3.206-3.209v-0.581c0-1.77-1.438-3.21-3.207-3.21H5.081z" />
      </g>
      <g id="_x31__2_">
        <path style="fill:#FFFFFF;" d="M10,10.3c2.485,0,4.5,2.014,4.5,4.5s-2.015,4.5-4.5,4.5s-4.5-2.015-4.5-4.5S7.515,10.3,10,10.3z" />
        <path style="fill:#3085C4;" d="M10,19.8c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S12.757,19.8,10,19.8z M10,10.8     c-2.206,0-4,1.794-4,4c0,2.206,1.794,4,4,4c2.206,0,4-1.794,4-4C14,12.594,12.206,10.8,10,10.8z" />
      </g>
    </g>
  </g>
</svg>*/}
