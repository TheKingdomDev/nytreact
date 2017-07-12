//import mongoose and schema

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create a new schema for articles - title, date, url
var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: Date
  },
  url: {
    type: String,
  }
});
//create model to export
var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;