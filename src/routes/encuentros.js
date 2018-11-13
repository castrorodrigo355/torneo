const express = require("express");
const Encuentro = require("../models/encuentroModel")
const router = express.Router();

// CREAR UN ENCUENTRO
router.post("/", (req, res) => {
    let data = req.body;
    let encuentro = new Encuentro(data);
    encuentro.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE ENCUENTROS
router.get("/", (req, res) => {
    Encuentro.find({}).then(encuentros => res.json (encuentros));
})

// OBTENER UN DETERMINADO EQUIPO MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Encuentro.findById(req.params.id)
        .then(equipo => {
            if (encuentro){
                res.json(encuentro)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UN DETERMINADO ENCUENTRO MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Encuentro.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// ACTUALIZAR UN DETERMINADO ENCUENTRO MEDIANTE UN "id"
router.put("/:id", (req, res) => {
    Encuentro.findByIdAndUpdate(req.params.id, {$set: {
                                                        golesLocal: req.body.golesLocal,
                                                        golesVisitante: req.body.golesVisitante 
                                                  }}, {new: true}, (err, doc) => {
        err ? res.json(err) : res.json(doc)
    })
})

module.exports = router;