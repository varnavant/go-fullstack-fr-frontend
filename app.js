const express = require('express');

const app = express();

// need to be on top, it has to be the first executed middleware on the server
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //access the api from all area *
    //add different headers
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content, Accept, Content-Type, Authorization');
    // set up the method we can use
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next(); // tell the server to go to next middleware
});

app.use('/api/stuff', (req, res, next) => {
   const stuff = [
       {
           _id: '001',
           title: 'first object',
           description: 'information of object',
           imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
           price: '4900',
           userId: '1',
       },
       {
           _id: '002',
           title: 'second object',
           description: 'information of second object',
           imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
           price: '2900',
           userId: '1',
       },
   ];
   res.status(200).json(stuff);
});


module.exports = app;
