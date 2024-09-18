const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
    photo:{
        type:String
    },
    name:{
        type:String
    },
    company_name:{
        type:String
    },
    link:{
        type:String
    }
},
{timestamps:true}
);

const Tool = mongoose.model('Tool',toolSchema);

module.exports = Tool;