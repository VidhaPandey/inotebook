const connectToMongo = require('./db');
const express = require('express');

const app = express();
const port = 3000;

// Connect to MongoDB
connectToMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`)
});