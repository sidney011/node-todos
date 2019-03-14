const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5c8aaf74b593fa8a98a3f12f'}).then((todo) => {

});

// Todo.findByIdAndRemove('5c8aaf74b593fa8a98a3f12f').then((todo) => {
//     console.log(todo);
// })