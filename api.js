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
    Todo.find({}, (err, todo) => {
        if(err) throw err;
        res.json(todo);
    });
});

//get one
api.get('/todo/:id', (req, res, next) => {
    Todo.findOne({ todo_id : req.params.id}, (err, todo) => {
        if(err) throw err;
        res.json(todo);
    });
});

//post i.e., create new data
api.post('/todo', (req, res, next) => {
    var newTodo = new Todo({
        todo_id : req.query.id,
        text : req.query.text
    });
    newTodo.save((err) => {
        if(err) throw err;
        res.json({
            success : true
        });
    })
});

api.put('/todo/:id', (req, res, next) => {
    Todo.findOne({todo_id : req.params.id}, (err, todo) => {
        if(err) throw err;
        todo.text = req.query.text;
        todo.save((err) => {
            if(err) throw err;
            res.json(todo);
        });
    });
});

api.delete('/todo/:id', (req, res, next) => {
    Todo.remove({todo_id : req.params.id}, (err, todo) => {
        if(err) throw err;
        res.json({
            success : true,
            todo : todo
        });
    });
});

module.exports = api;
