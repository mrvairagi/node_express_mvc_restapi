var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        username: String,
        password: String,
        email: String,
        full_name: String,
    },
    { timestamps: true }
);

var user = mongoose.model('user', userSchema);
module.exports = user;