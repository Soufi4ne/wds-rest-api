const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');

module.exports = router;

// Get all subjects
router.get('/', async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific subject by ID
router.get('/:id', getSubject, (req, res) => {
    res.json(res.subject);
});

// Add a new subject
router.post('/', async (req, res) => {
    const subject = new Subject({
        name: req.body.name,
        teacher: req.body.teacher
    });

    try {
        const newSubject = await subject.save();
        res.status(201).json(newSubject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a subject
router.put('/:id', getSubject, async (req, res) => {
    res.subject.name = req.body.name;
    res.subject.teacher = req.body.teacher;

    try {
        const updatedSubject = await res.subject.save();
        res.json(updatedSubject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a subject with patch
router.patch('/:id', getSubject, async (req, res) => {
    if (req.body.name != null) {
        res.subject.name = req.body.name;
    }
    if (req.body.teacher != null) {
        res.subject.teacher = req.body.teacher;
    }

    try {
        const updatedSubject = await res.subject.save();
        res.json(updatedSubject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a subject
router.delete('/:id', getSubject, async (req, res) => {
    try {
        await res.subject.remove();
        res.json({ message: 'Deleted This Subject' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getSubject(req, res, next) {
    let subject;
    try {
        subject = await Subject.findById(req.params.id);
        if (subject == null) {
            return res.status(404).json({ message: 'Cant find subject' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.subject = subject;
    next();
}