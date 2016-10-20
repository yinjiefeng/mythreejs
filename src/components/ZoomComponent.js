'use strict';
require('styles/App.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

var $ = require('../bower_components/jquery/dist/jquery');
//import App from './components/Main';
//import Zoom from './components/ZoomComponent';

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

var colors = ['red', 'blue', 'yellow'];
var zooManName = 'Beckham';

var Pig = React.createClass({
  render: function () {
    return (<div>
      {
        colors.map(function (color, index) {
          return <div key={index}>There is a {color} pig</div>;
        })
      }
    </div>);
  }
});

var Cat = React.createClass({
  render: function () {
    return (
      <div>
        {
          React.Children.map(this.props.children, function (child) {
            return <div>{child}</div>;
          })
        }
      </div>
    );
  }
});

var Zoo = React.createClass({
  //设置默认的prop
  getDefaultProps: function () {
    console.log('getDefaultProps');
    return {
      action: 'welcome to'
    };
  },
  getInitialState: function () {
    console.log('getInitialState');
    return {
      opacity: 1.0,
      value: '',
      food: ''
    };
  },
  componentDidMount: function () {
    /*console.log('componentDidMount');
     window.setInterval(function () {
     var opacity = this.state.opacity;
     opacity -= 0.1;
     if(opacity < 0.1) {
     opacity = 1.0;
     }
     this.setState({opacity: opacity});
     }.bind(this), 1000);*/
    console.log('componentDidMount');
    this.setState({opacity: 0.5});

    ReactDOM.findDOMNode(this.refs.myCat).style.color = 'red';
    $('div .font-yh').css('font-weight', 'bold');
  },
  handleClick1: function (event) {
    //alert('event: ' + event);
    console.log('handleClick1', event);
    this.setState({enable: !this.state.enable});
  },
  changeValue: function (event) {
    this.setState({value: event.target.value});
  },
  feedFood: function (event) {
    this.setState({food: event.target.value});
  },
  render: function () {
    console.log('render');
    return (<div className="font-yh">
      <input type="text" disabled={this.state.enable} onChange={this.changeValue}/>
      <button onClick={this.handleClick1}>Change State</button>
      <div>{this.state.value}</div>
      <h2 style={{opacity: this.state.opacity}}>{this.props.action} {this.props.name}</h2>
      <Pig />
      <Cat ref="myCat">
        <span>Persian</span>
        <span>Ragdoll</span>
        <span>Dragen-Li</span>
      </Cat>
      <ZooMan foodEvent={this.feedFood} name={zooManName}/>
      <div>
        ZooMan is feeding the food of: {this.state.food}
      </div>
      <TigerElement />
    </div>);
  }
});

var Tiger = React.createClass({
  render: function () {
    return (<li>
      {this.props.children}
    </li>)
  }
});

var tigerFactory = React.createFactory(Tiger);
var AltaicaTigerElement = tigerFactory({key:'Altaica'}, 'Altaica Tiger');
var AmoyensisTigerElement = tigerFactory({key:'Amoyensis'}, 'Amoyensis Tiger');
var BalicaTigerElement = tigerFactory({key:'Balica'}, 'Balica Tiger');

var TigerElement = React.createClass({
  render: function() {
    return React.createElement('ul', {className:'font-yh'}, AltaicaTigerElement, AmoyensisTigerElement, BalicaTigerElement);
  }
});

var ZooMan = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div>
        <input type="text" onChange={this.props.foodEvent}/>
      </div>
    );
  }
});

ReactDOM.render(<Zoo name="zoo"/>, document.getElementById('zoo'));
