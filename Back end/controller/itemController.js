const items = require('../models/User'); // Ensure 'User' model is correctly defined

// Create Item
exports.createItem = async (req, res) => {
    try {
        const item = new items(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read All Items
exports.getItems = async (req, res) => {
    try {
        const allItems = await items.find();
        res.json(allItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read Single Item
exports.getItem = async (req, res) => {
    try {
        const item = await items.findById(req.params.id);
        item ? res.json(item) : res.status(404).json({ message: "Item not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Item
exports.updateItem = async (req, res) => {
    try {
        const item = await items.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        item ? res.json(item) : res.status(404).json({ message: "Item not found" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Item
exports.deleteItem = async (req, res) => {
    try {
        const item = await items.findByIdAndDelete(req.params.id);
        item ? res.json({ message: "Item deleted" }) : res.status(404).json({ message: "Item not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
