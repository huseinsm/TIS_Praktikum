require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book.route');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
    db.on('error', (error) => {
    console.log(error);
});

db.once('connected', () => {
    console.log('Mongo connected');
})

const app = express();
app.use(express.json());

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Husein Sidharta Muhammad,245150707111040'
    })
})

app.use('/books', bookRoutes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})



