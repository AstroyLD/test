const Mongoose = require("mongoose");

const levelSchema = new Mongoose.Schema({
    time:{
        type:String,
    },
    level_name:{
        type:String,
    },
    level:{
        type:String,
    }
},{
    timestamps: true
});
module.exports = Mongoose.model("level", levelSchema);

