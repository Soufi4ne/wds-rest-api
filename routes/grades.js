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


// Update a grade
router.put('/:id', (req, res) => {
    // Code to handle PUT request for updating a grade
});

// Update a grade with patch
router.patch('/:id', (req, res) => {
    // Code to make partial updates request for updating a grade
});

// Delete a grade
router.delete('/:id', (req, res) => {
    // Code to handle DELETE request for deleting a grade
});
