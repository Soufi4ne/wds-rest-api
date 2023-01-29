const express = require('express');
const router = express.Router();

module.exports = router;

const Student = require('../models/student');

// Get all students
router.get('/', (req, res) => {
    Student.find()
        .then(students => {
            res.send(students);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});


// Get a specific student by ID
router.get('/:id', (req, res) => {
    // Code to handle GET request for a specific student
});

// Add a new student
router.post('/', (req, res) => {
    // Code to handle POST request for adding a new student
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

