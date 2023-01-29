const express = require('express');
const router = express.Router();

module.exports = router;


// Get all grades
router.get('/', (req, res) => {
    // Code to handle GET request for all grades
});

// Get a specific grade by ID
router.get('/:id', (req, res) => {
    // Code to handle GET request for a specific grade
});

// Add a new grade
router.post('/', (req, res) => {
    // Code to handle POST request for adding a new grade
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

module.exports = router;
