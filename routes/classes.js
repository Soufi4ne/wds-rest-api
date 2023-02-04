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
router.get('/:id', getClasse, (req, res) => {
  res.json(res.classe);
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
router.put('/:id', getClasse, async (req, res) => {
  if (req.body.name != null) {
    res.classe.name = req.body.name;
  }
  if (req.body.teacher != null) {
    res.classe.teacher = req.body.teacher;
  }
  if (req.body.students != null) {
    res.classe.students = req.body.students;
  }
  try {
    const updatedClasse = await res.classe.save();
    res.json(updatedClasse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a class with patch
router.patch('/:id', getClasse, async (req, res) => {
  if (req.body.name != null) {
    res.classe.name = req.body.name;
  }
  if (req.body.teacher != null) {
    res.classe.teacher = req.body.teacher;
  }
  if (req.body.students != null) {
    res.classe.students = req.body.students;
  }
  try {
    const updatedClasse = await res.classe.save();
    res.json(updatedClasse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a class
router.delete('/:id', getClasse, async (req, res) => {
  try {
    await res.classe.remove();
    res.json({ message: 'Deleted This Class' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});