//  * **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

//import React and React-Router
var React = require('react');
var Router = require('react-router');

//create main component
var Main = React.createClass({
    //render function to display main-container/navbar -- navbar has react routes for search and saved
    render: function() {

        return(
        <div className="main-container">


            <div className="container">

            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Home</a>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#/search">Search</a></li>
                    <li><a href="#/saved">Saved Articles</a></li>
                    </ul>
                </div>
                </div>
            </nav>

            <div className="jumbotron">
                <h2 className="text-center"><strong>New York Times Articles</strong></h2>
            </div>

            {this.props.children}

            </div>
      </div>
        )
    }
});

module.exports = Main;