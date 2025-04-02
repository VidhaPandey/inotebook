const connectToMongo = require('./db');
const express = require('express');

const app = express();
const port = 3000;

// Add this middleware
app.use(express.json());

// Connect to MongoDB
connectToMongo();

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`)
});