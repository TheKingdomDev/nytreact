//import React and React-Router
var React = require('react');
var Router = require('react-router');
//import helpers
var helpers = require('../utils/helpers');
//create Saved component
var Saved = React.createClass({
        //initialize state for saved articles as empty string
    getInitialState: function(){
    return {
      savedArticles: ""
    }
  },
    //use lifescycle method to check for saved articles and set the state to any data found

  componentDidMount: function(){

    helpers.getSaved()
      .then(function(articleData){
        this.setState({
          savedArticles: articleData.data
        });

      }.bind(this))
  },
    //create a function to handle clicks for delete and get saved articles
  handleClick: function(item, event){

    helpers.deleteSaved(item.title, item.date, item.url)
      .then(function(data){

      helpers.getSaved()
        .then(function(articleData){
          this.setState({
            savedArticles: articleData.data
          });

        }.bind(this))



      }.bind(this))
  },
    //render function that checks the state and displays a message for no articles
  render: function(){

    if (this.state.savedArticles == "") {
      return(

        <li className="list-group-item">
          <h3>
              <span><em> No saved articles</em></span>
          </h3>
        </li>

      );
    }

    else {
            //if articles are found map over them and display them as list items
      var articles = this.state.savedArticles.map(function(article, index){

        return(

            <div key={index}>

              <li className="list-group-item" >

                <h3>
                  <span><em>{article.title}</em></span>
                  <span className="btn-group pull-right" >
                    <a href={article.url} target="_blank"><button className="btn btn-default ">View</button></a>
                    <button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Delete</button>
                  </span>
                </h3>
                <p>Date Published: {article.date}</p>

              </li>

            </div>
        );

      }.bind(this))

    }
        //return a container of those list items
    return(

      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong></h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {articles}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }

});


module.exports = Saved;




