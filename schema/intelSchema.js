const mongoose = require('mongoose');

// Format to store data goes here
const IntelSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    agentId: {
        type: String,
        require: true
    },
})

const Intel = mongoose.model('Intel', IntelSchema);
module.exports = Intel;