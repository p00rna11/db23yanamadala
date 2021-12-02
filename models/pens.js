const mongoose = require("mongoose")
const pensSchema = mongoose.Schema({
    pens_name: {type:String,
                required: true},
    penstype: {type:String,
        required: true},
    cost:{type: Number,
        min:[10,'low price'],
        max:[150,'costly pen']}
})


module.exports = mongoose.model("pens", pensSchema)