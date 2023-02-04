const express = require('express');
const router = express.Router();
const Classe = require('../models/classe');

module.exports = router;

// Get all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Classe.find({});
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific class by ID
router.get('/:id', async (req, res) => {
  try {
    const classe = await Classe.findById(req.params.id);
    if (!classe) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.json(classe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new class
router.post('/', async (req, res) => {
  const classe = new Classe({
    name: req.body.name,
    teacher: req.body.teacher,
    students: req.body.students
  });
  try {
    const newClasse = await classe.save();
    res.status(201).json(newClasse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a class
router.put('/:id', async (req, res) => {
  try {
    const classe = await Classe.findById(req.params.id);
    if (!classe) {
      return res.status(404).json({ message: 'Class not found' });
    }
    if (req.body.name != null) {
      classe.name = req.body.name;
    }
    if (req.body.teacher != null) {
      classe.teacher = req.body.teacher;
    }
    if (req.body.students != null) {
      classe.students = req.body.students;
    }
    const updatedClasse = await classe.save();
    res.json(updatedClasse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a class with patch
router.patch('/:id', async (req, res) => {
  try {
    const classe = await Classe.findById(req.params.id);
    if (!classe) {
      return res.status(404).json({ message: 'Class not found' });
    }
    if (req.body.name != null) {
      classe.name = req.body.name;
    }
    if (req.body.teacher != null) {
      classe.teacher = req.body.teacher;
    }
    if (req.body.students != null) {
      classe.students = req.body.students;
    }
    const updatedClasse = await classe.save();
    return res.json(updatedClasse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});