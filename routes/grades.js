const express = require('express');
const router = express.Router();

module.exports = router;


// Get all grades
router.get('/', async (req, res) => {
    // Code to handle GET request for all grades
    try {
        const grades = await Grade.find();
        res.json(grades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific grade by ID
router.get('/:id', async (req, res) => {
    // Code to handle GET request for a specific grade
    try {
        const grade = await Grade.findById(req.params.id);
        res.json(grade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new grade
router.post('/', async (req, res) => {
    // Code to handle POST request for adding a new grade
    const grade = new Grade({
        student_id: req.body.student_id,
        subject_id: req.body.subject_id,
        score: req.body.score,
    });
    try {
        const newGrade = await grade.save()
        res.status(201).json(newGrade)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Update a grade with async await
router.put('/:id', async (req, res) => {
    try {
        const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGrade);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});

// Update a grade with patch
router.patch('/:id', async (req, res) => {
    try {
        const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(updatedGrade);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a grade
router.delete('/:id', async (req, res) => {
    try {
        const deletedGrade = await Grade.findByIdAndRemove(req.params.id);
        res.json(deletedGrade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});