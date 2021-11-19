const mongoose = require("mongoose")
const pensSchema = mongoose.Schema({
    pens_name: String,
    penstype: String,
    cost: Number
})
module.exports = mongoose.model("pens",
    pensSchema)