//import React, React-Router
var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

//create variables to point to components for our routes -- Main, Search, Saved
var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');

module.exports = (
  //root path - Main
  //other paths - Search and Saved
  //indexroute - Search
  <Route path='/' component={Main}>

    <Route path='Search' component={Search} />
    <Route path='Saved' component={Saved} />

    <IndexRoute component={Search} />

  </Route>

);