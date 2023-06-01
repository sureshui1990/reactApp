const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define models
const userSchema = new Schema({
    email: { type: String, lowercase: true, unique: true},
    password: { type: String}
});

// create class 
const ModelClass = mongoose.model('user', userSchema);

// export
module.exports = ModelClass;

