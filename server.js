const express = require('express');
const mongoose = require('mongoose');
const emp = require('./routes/api/emp');
const app = express();

const PORT = 1234;

//BodyParser middleware
app.use(express.json());

app.listen(PORT);

mongoose.connect('mongodb://localhost:27017/payrolldb', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('DB connected'));

//Send to route file
app.use('/api/emp', emp);


