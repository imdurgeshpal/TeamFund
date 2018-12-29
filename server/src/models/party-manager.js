const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartyManager = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

// Export the PartyManager model
module.exports = mongoose.model('PartyManager', PartyManager);