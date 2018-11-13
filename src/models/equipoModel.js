const {Schema, mongoose} = require("../database/database")
var equipo = new Schema({
                        descripcion: String,
                        url: String,
                        jugados: Number,
                        ganados: Number,
                        empatados: Number,
                        perdidos: Number,
                        golesAFavor: Number,
                        golesEnContra: Number,
                        diferenciaDeGoles: Number,
                        puntos: Number
                     })
var Equipo = mongoose.model("Equipo", equipo)

module.exports = Equipo