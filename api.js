var api = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Todo = require('./models/todo');
var config = require('./config');

//to get params from post req
api.use(bodyParser.urlencoded({extended : true}));
api.use(bodyParser.json());
mongoose.connect(config.db_url);

//get all tasks
api.get('/todo', (req, res,  next) => {
    
});

//get one
api.get('/todo/:id', (req, res, next) => {
    
});

//post i.e., create new data
api.post('/todo', (req, res, next) => {
   
});

api.put('/todo/:id', (req, res, next) => {
    
});

api.delete('/todo/:id', (req, res, next) => {
    
});

module.exports = api;
