const express = require('express');
const router = express.Router();

// Register a new user
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    res.status(201).json({ message: "User registered successfully", user: { username, email } });
});

// Login user
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    res.status(200).json({ message: "Login successful", token: "fake-jwt-token" });
});

// Get user profile
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: "User profile fetched", userId });
});

// Update user profile
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;

    res.status(200).json({ message: "User updated successfully", updatedUser: { userId, username, email } });
});

// Delete user account
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: "User deleted successfully", userId });
});

module.exports = router;
