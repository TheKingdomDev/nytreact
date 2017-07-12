//import React
var React = require('react');

//create Query component -- handles form to submit a new article query
var Query = React.createClass({
    //initial state is empty string for -- search, start, end
  getInitialState: function(){
    return {
      search: "",
      start: "",
      end: "",
    }
  },

        //handlechange lifecycle to set a new state
    handleChange: function(event) {

      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },

        //handleSubmit function to use updateSearch helper
  handleSubmit: function(){
    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
    return false;
  },

    //render function that has a form input
  render: function(){

    return(
      <div className ="main-container">

          <div className="row">
            <div className="col-lg-12">

              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Search</strong></h1>
                </div>
                <div className="panel-body">

                  <form>
                    <div className="form-group">
                      <h4 className=""><strong>Topic (Required)</strong></h4>
                      <input type="text" value={this.state.value} className="form-control " id="search" onChange= {this.handleChange} required/>

                      <h4 className=""><strong>Start Year (Optional)</strong></h4>
                      <input value={this.state.value} className="form-control " id="start" onChange= {this.handleChange} required/>

                      <h4 className=""><strong>End Year (Optional)</strong></h4>
                      <input value={this.state.value} className="form-control " id="end" onChange= {this.handleChange} required/>

                    </div>

                    <div className="pull-right">
                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}><h4>Submit</h4></button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>

      </div>

    )
  }

});
    //export Query
module.exports = Query;






