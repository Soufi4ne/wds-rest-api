const express = require('express');
const router = express.Router();
const Classe = require('../models/classe');

module.exports = router;

// Get all classes
router.get('/', async (req, res) => {
    try {
        const classes = await Classe.find();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific class by ID
router.get('/:id', async (req, res) => {
    try {
        const classe = await Classe.findById(req.params.id);
        res.json(classe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new class
router.post('/', async (req, res) => {
    const classe = new Classe({
        name: req.body.name,
        teacher: req.body.teacher,
        students: req.body.students,
    });
    try {
        const newClasse = await classe.save()
        res.status(201).json(newClasse)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a class
router.put('/:id', async (req, res) => {
    try {
        const updatedClasse = await Classe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedClasse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a class
router.delete('/:id', async (req, res) => {
    try {
        const deletedClasse = await Classe.findByIdAndDelete(req.params.id);
        res.json(deletedClasse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
