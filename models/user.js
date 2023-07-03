const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
    {
        email:{
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        hashedPassword: {
            type: String,
            minlength:6,
            required: true,
        },
    },{
        timestamps: true,
    }
);

const User = Mongoose.model("User", UserSchema);

module.exports = User;
