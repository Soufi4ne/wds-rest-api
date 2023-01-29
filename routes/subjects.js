const express = require('express');
const router = express.Router();

module.exports = router;

// Get all subjects
router.get('/', (req, res) => {
    // Code to handle GET request for all subjects
});

// Get a specific subject by ID
router.get('/:id', (req, res) => {
    // Code to handle GET request for a specific subject
});

// Add a new subject
router.post('/', (req, res) => {
    // Code to handle POST request for adding a new subject
});

// Update a subject
router.put('/:id', (req, res) => {
    // Code to handle PUT request for updating a subject
});

// Update a subject with patch
router.patch('/:id', (req, res) => {
    // Code to make partial updates request for updating a subject
});

// Delete a subject
router.delete('/:id', (req, res) => {
    // Code to handle DELETE request for deleting a subject
});

