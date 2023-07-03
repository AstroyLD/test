const Mongoose = require("mongoose");

const qualitySchema = new Mongoose.Schema({
    Quality_name:{
        type: String,
    },
    time:{
        type:String,

    },
    value:{
        type: String,
    },
},{
    timestamps: true
});
module.exports = Mongoose.model("quality", qualitySchema);

