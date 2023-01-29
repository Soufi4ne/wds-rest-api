const express = require('express');
const router = express.Router();
const Student = require('../models/student');

module.exports = router;


// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


    // Student.find()
    //     .then(students => {
    //         res.send(students + "all students");
    //     })
    //     .catch(error => {
    //         res.status(500).send(error);
    //     });
});

// Add a new student
router.post('/', async (req, res) => {
    // Code to handle POST request for adding a new student
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        class: req.body.class,
        subjects: req.body.subjects,
        grades: req.body.grades,
    });
    try {
        const newStudent = await student.save()
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a student
router.put('/:id', (req, res) => {
    // Code to handle PUT request for updating a student
});

// Update a student with patch
router.patch('/:id', (req, res) => {
    // Code to make partial updates request for updating a student
});

// Delete a student
router.delete('/:id', (req, res) => {
    // Code to handle DELETE request for deleting a student
});

