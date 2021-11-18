const mongoose = require("mongoose")
const pensSchema = mongoose.Schema({
    pens_type: String,
    type: Number,
    cost: Number
})
module.exports = mongoose.model("pens",
    pensSchema)