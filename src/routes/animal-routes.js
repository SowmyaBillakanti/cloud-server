'use strict';

const express = require('express');
const Animals = require('../models/animal');
const animals = new Animals();

const router = express.Router();

// RESTful routes
router.get('/animals', getAnimals);
router.get('/animals/:id', getOneAnimal);
router.post('/animals', createAnimal);
router.put('/animals/:id', updateAnimal);
router.delete('/animals/:id', deleteAnimal);

// RESTful route handlers
function getAnimals(req, res) {
    const allAnimals = animals.get()
    res.status(200).json(allAnimals);
}

function getOneAnimal(req, res) {
    const id = req.params.id;
    const oneAnimal = animals.get(id);
    console.log(oneAnimal);
    res.status(200).json(oneAnimal);
}

function createAnimal(req, res) {
    console.log("reached")
    console.log(req.body)
    const obj = req.body;
    const newAnimal = animals.create(obj)
    res.status(200).json(newAnimal);
}

function updateAnimal(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    const newIDToBeGiven = req.params.id;
    const animalObjToBeUpdated = req.body;
    const newUpdatedAnimal = animals.update(newIDToBeGiven, animalObjToBeUpdated);
    res.status(200).json(newUpdatedAnimal);
}

function deleteAnimal(req, res) {
    animals.delete(req.params.id);
    res.status(200).json('deleting animal');
}

module.exports = router;

