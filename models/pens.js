const mongoose = require("mongoose")
const pensSchema = mongoose.Schema({
    pens_type: String,
    quantity: Number,
    cost: Number
})
module.exports = mongoose.model("pens",
    pensSchema)