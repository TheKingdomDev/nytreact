//import React and React-Router
var React = require('react');
var Router = require('react-router');
//import children components -- Query and Results
var Query = require('./search/Query');
var Results = require('./search/Results');
//import helpers
var helpers = require('../utils/helpers');
//create Search component
var Search = React.createClass({
        //Initial State will be empty strings for queryTerm, startYear, endYear, empty object for results
  getInitialState: function() {
    return {
      queryTerm: "",
      startYear: "",
      endYear: "",
      results: {}
    }
  },
    //lifecycle method did update to check the state
  componentDidUpdate: function(prevProps, prevState)  {

    if (this.state.queryTerm != "" && prevState.queryTerm != this.state.queryTerm)
    {
      helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)

      .then(function(data)  {
        if (data != this.state.results)
        {
          this.setState({
            results: data
          })
        }

      }.bind(this))
    }
  },
        //helper function setQuery to set a new state
  setQuery: function(newQuery, newStart, newEnd){

    this.setState({
      queryTerm: newQuery,
      startYear: newStart,
      endYear: newEnd
    })
  },
    //render function that returns a container and import the children components of Query and Results
  render: function(){

    return(

      <div className="main-container">

        <Query updateSearch={this.setQuery} />

        <Results results={this.state.results}/>

      </div>

    )
  }
});
    //export component
module.exports = Search;







