

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port=3551;
require('dotenv').config();

const userRoutes = require('./Routes/userRoutes')
const productRoutes = require('./Routes/ProductRoutes');


const app = express();
app.use(express.json());
app.use(cors());
const db= async()=>{
    await mongoose.connect('mongodb+srv://shreemanvithajinnas82:root@cluster0.2hdes.mongodb.net/login?retryWrites=true&w=majority&appName=Cluster0')
    console.log("connected")
}
db()

.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




