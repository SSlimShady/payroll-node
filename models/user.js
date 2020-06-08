const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Employee Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = User = mongoose.model('user', UserSchema);