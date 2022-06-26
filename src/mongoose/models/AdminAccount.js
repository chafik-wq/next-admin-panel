const mongoose = require('mongoose');

var AdminsSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true,
        unique: true,
    },
    adminEmail: {
        type: String,
        required: true,
        unique: true,
    },
    adminPassword: {
        type: String,
    }
})

module.exports = mongoose.models.admins || mongoose.model('admins', AdminsSchema);