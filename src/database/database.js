const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/dbtorneo", {useNewUrlParser: true})

module.exports = {Schema, mongoose}