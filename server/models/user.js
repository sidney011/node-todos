var mongoose = require('mongoose');

var user = mongoose.model('User', {
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    }
});

module.exports = {user};