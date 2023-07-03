const Mongoose = require("mongoose");

const flowSchema = new Mongoose.Schema({
    time:{
        type:String,
    },
    flow_name:{
        type:String,

    },
    flow_rate:{
        type: String,
    },
    total_flow:{
        type:String,
    },
    valve_position:{
        type:String,
    }
},{
    timestamps: true
});

module.exports = Mongoose.model("flow", flowSchema);

