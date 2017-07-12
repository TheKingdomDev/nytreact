//import react and react-router
var React = require('react');
var Router = require('react-router');

//import helpers
var helpers = require('../../utils/helpers');

//create Results component -- will display the results from a query in a new location
var Results = React.createClass({
    //initial state will be empty string of - title, url, publish date
  getInitialState: function(){
    return {
      title: "",
      url: "",
      pubdate: "",
    }
  },
    //function to handle the click and save an article
  handleClick: function(item, event){

    helpers.postSaved(item.headline.main, item.pub_date, item.web_url)
      .then(function(data){
      }.bind(this))

  },
    //render function that checks for a document and display the results of the query
  render: function(){

    if (!this.props.results.hasOwnProperty('docs')){

      return(

        <li className="list-group-item">

          <h3>
              <span><em>Search articles.</em></span>
          </h3>

          </li>

      )

    }

    else {

      var articles = this.props.results.docs.map(function(article, index){

        return(

            <div key={index}>

              <li className="list-group-item" >

              <h3>
                  <span>{article.headline.main}</span>
                <span className="btn-group pull-right" >
                  <a href={article.web_url} target="_blank"><button className="btn btn-default ">View</button></a>
                  <button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Save</button>
                  
                </span>
              </h3>
              <p><small>Date Published: {article.pub_date}</small></p>

              </li>

            </div>
        )

      }.bind(this))

    }

    return(
      <div className ="main-container">


        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
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
    )

  }

});
    //export Results component
module.exports = Results;





