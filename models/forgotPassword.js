const mongoose = require("mongoose");

const ForgotPasswordsSchema = new mongoose.Schema({
    userId: String,
    uniqueString: String,
    createdAt: Date,
    expiresAt: Date,
});

module.exports = mongoose.model("PasswordReset",ForgotPasswordsSchema);