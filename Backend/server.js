const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Models
const User = require('./models/Schema/UserSchema');
const Product = require('./models/Schema/Product');
const Brand = require('./models/Schema/Brand');
const Quiz = require('./models/Schema/Quiz');
const Review = require('./models/Schema/Review');

// DB Connection
const db = require('./db');
db();

const app = express();
const port = process.env.PORT || 5555;

// Middleware
app.use(cors());
app.use(express.json());

// ------------------ ROUTES ------------------ //

// USER - Create & Get
app.post('/user', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// PRODUCT - Create & Get
app.post('/product', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// BRAND - Create & Get
app.post('/brand', async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/brands', async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
});

// QUIZ - Create & Get
app.post('/quiz', async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/quizzes', async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// REVIEW - Create & Get
app.post('/review', async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

// Optional: If you want to organize all routes into a router file
// const router = require('./Routes/route')
// app.use('/routes', router)

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
