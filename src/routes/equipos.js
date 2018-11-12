const express = require("express");
const Equipo = require("../models/equipoModel")
const router = express.Router();

// CREAR UN EQUIPO
router.post("/", (req, res) => {
    let data = req.body;
    let equipo = new Equipo(data);
    equipo.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE EQUIPOS
router.get("/", (req, res) => {
    Equipo.find({}).then(equipos => res.json (equipos));
})

// OBTENER UN DETERMINADO EQUIPO MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Equipo.findById(req.params.id)
        .then(equipo => {
            if (equipo){
                res.json(equipo)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UN DETERMINADO EQUIPO MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Equipo.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// ACTUALIZAR UN DETERMINADO EQUIPO MEDIANTE UN "id"
router.put("/:id", (req, res) => {
    Equipo.findByIdAndUpdate(req.params.id, {$set: {"descripcion": req.body.descripcion, 
                                                  }}, {new: true}, (err, doc) => {
        err ? res.json(err) : res.json(doc)
    })
})

module.exports = router;