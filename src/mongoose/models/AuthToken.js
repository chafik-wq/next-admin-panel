const mongoose = require('mongoose');

var AuthTokenSchema = new mongoose.Schema({
    authToken: {
        type: String,
    },
    adminEmail: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.models.authTokens || mongoose.model('authTokens', AuthTokenSchema);