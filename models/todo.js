var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Todo = mongoose.model('Todo', new Schema({
    text : String
}));

module.exports = Todo;