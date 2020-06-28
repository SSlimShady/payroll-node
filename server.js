const express = require('express');
const mongoose = require('mongoose');
const emp = require('./routes/api/emp');
const app = express();
const path = require('path');
const PORT = 1234;

//BodyParser middleware
app.use(express.json());

app.listen(PORT);

mongoose.connect('mongodb://localhost:27017/payrolldb', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('DB connected'));

//Send to route file
app.use('/api/emp', emp);

//Reroute to static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('clientreact/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


