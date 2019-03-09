const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c7aa6ca512a3b851dd8e437';

// if (!ObjectID.isValid()) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     } else {
//         console.log('Todo by id', todo);
//     }
    
// }).catch((e) => console.log(e));

// User.findById(id).then((user) => {
//     if (user) {
//         console.log('User: ', user);
//     } else if (!user) {
//         return console.log('User not found');
//     }  
// });

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});