const mongoose = require("mongoose")
const pensSchema = mongoose.Schema({
    pens_name: String,
    penstype: {String, required:true},
    cost:{type: Number,required:true,
        min:[10,'low price'],
        max:[150,'costly pen']}
})


module.exports = mongoose.model("pens", pensSchema)