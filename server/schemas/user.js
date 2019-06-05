const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    preferences: Object,
    friends: [String],
});

const User = mongoose.model('User', userSchema);

export default User;
