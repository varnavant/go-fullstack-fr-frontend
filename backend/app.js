const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/thing');
const bodyParser = require('body-parser');

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

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id; // delete fake id create by frontend
    const thing = new Thing({
       ...req.body // copy all element in req.body
    });
    thing.save()
        .then(() => res.status(201).json({message: 'created!'}))
        .catch(error => res.status(400).json({ error }));
});

app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
});

app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id :  req.params.id})
        .then(() => res.status(200).json({ message: 'deleted!'}))
        .catch(error => res.status(400).json({ error}));
});

app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

app.get('/api/stuff', (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;
