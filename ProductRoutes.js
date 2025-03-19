const express = require('express');
const router = express.Router();

// Create a new product
router.post('/', (req, res) => {
    const { name, brand, price, shade } = req.body;

    if (!name || !brand || !price || !shade) {
        return res.status(400).json({ message: "All fields are required" });
    }

    res.status(201).json({ message: "Product created successfully", product: { name, brand, price, shade } });
});

// Get all products
router.get('/', (req, res) => {
    res.status(200).json({ message: "Fetched all products", products: [] });
});

// Get a single product by ID
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    res.status(200).json({ message: "Product fetched", productId });
});

// Update a product
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const { name, brand, price, shade } = req.body;

    res.status(200).json({ message: "Product updated successfully", updatedProduct: { productId, name, brand, price, shade } });
});

// Delete a product
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    res.status(200).json({ message: "Product deleted successfully", productId });
});

module.exports = router;
    