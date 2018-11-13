const {Schema, mongoose} = require("../database/database")
var encuentro = new Schema({
                        
                        fecha: String,
                        idLocal: String,
                        descripcionLocal: String,
                        urlLocal: String,
                        golesLocal: Number,
                        idVisitante: String,
                        descripcionVisitante: String,
                        urlVisitante: String,
                        golesVisitante: Number
                     })
var Encuentro = mongoose.model("Encuentro", encuentro)

module.exports = Encuentro