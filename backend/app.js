const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://varnavant:varnavant@12!test@cluster0.j02zm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion success !'))
    .catch(() => console.log('Connexion failed !'));

// need to be on top, it has to be the first executed middleware on the server
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //access the api from all area *
    //add different headers
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content, Accept, Content-Type, Authorization');
    // set up the method we can use
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next(); // tell the server to go to next middleware
});

app.use(express.json());
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images'))); // define the storage folder
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = router;
module.exports = app;
