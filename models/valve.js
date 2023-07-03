const Mongoose = require("mongoose");

const valveSchema = new Mongoose.Schema({
    node_name:{
        type: String,
    },
    valve_name:{
        type:String,
    },
    valve_percent:{
        type: String,
    },
    valve_status:{
        type:String,
    },
    date:{
        type:String,
    },
},{
    timestamps: true
});
module.exports = Mongoose.model("valve", valveSchema);

