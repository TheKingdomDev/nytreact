//import axios
var axios = require('axios');

//save api key as variable to use in our request
var APIKey = '3dbfbf1bb1034c4bb5e8901725645c29';

//initialize helpers and create functions to execute
var helpers = {
       //function to run a Query
  runQuery: function(term, start, end)  {

    if(start == "") start = "2015";
    if(end == "") end = "2017";

    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': APIKey,
          'q': term,
          'begin_date': start,
          'end_date': end
      }
    })

    .then(function(results){

      return results.data.response;

    });
  },
    //function to get a saved article
  getSaved: function(){

    return axios.get('/api/saved')
      .then(function(results){

        return results;
      })
  },
    //function to post a saved article
  postSaved: function(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        return results._id;
      })

  },
    //function to delete a saved article
  deleteSaved: function(title, data, url){

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      return results;
    })
  }

}
    //export our helpers
module.exports = helpers;
 
    
    
    

