const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title : { type: String, required: true },
    completed : { type: Boolean, default: false },
    timestamp : { type: Date, default: Date.now } //createdAt y updatedAt
});

module.exports = mongoose.model('task', Schema);