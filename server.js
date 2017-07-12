//initialize express server - load in mongoose and Schema

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');

//initialize express application and port
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));
//add link for heroku/mlab deployment
//var link = ;
//Local link
var link = 'mongodb://localhost27017/nytreact';
//connect to mongodb database
mongoose.connect(link);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

//==============Routes===================

//  `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes

//  * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles

//  * `/api/saved` (post) - your components will use this to save an article to the database

//  * `/api/saved` (delete) - your components will use this to delete a saved article in the database

app.get('/api/saved', function(req, res) {
    Article.find({}).exec(function(err, doc) {
        if(err) {
            console.log(err);
        }
        else {
            res.send(doc);
        }
    });
});

app.post('api/saved', function(req, res) {
    var newArticle = new Article(req.body);

    var title = req.body.title;
    var date = req.body.date;
    var url = req.body.url;

    newArticle.save(function(err, doc) {
        if(err) {
            console.log(err);
        }
        else {
            res.send(doc._id);
        }
    });

});

app.delete('api/saved', function(req, res) {
    var url = req.param('url');

    Article.find({"url": url}).remove().exec(function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            res.send("Deleted");
        }
    });
});

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});

//Port listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});