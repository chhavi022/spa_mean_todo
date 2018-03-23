var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Todo = mongoose.model('Todo', new Schema({
    todo_id : Number,
    text : String
}));

module.exports = Todo;