const mongoose = require('mongoose');
const { Schema } = mongoose;

const account = new Schema({
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
    refreshToken: String,
    accessToken: String,
    expiresAt: Number,
    scope: String,
    tokenType: String,
    idToken: String,
    sessionState: String,
});

module.exports = {
    Account: mongoose.model('Account', account)
};
