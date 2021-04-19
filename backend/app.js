const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb+srv://varnavant:varnavant@12!test@cluster0.j02zm.mongodb.net/productDatabase?retryWrites=true&w=majority',
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

app.post('/api/products', (req, res, next) => {
    const product = new Product({
        ...req.body // copy all element in req.body
    });
    product.save()
        .then( product => res.status(201).json(product))
        .catch(error => res.status(400).json({ error }));
});

app.put('/api/products/:id', (req, res, next) => {
    Product.updateOne({ _id: req.params.id }, {
        "name": 'test',
        "description": 'test',
        "price": 5000,
        "inStock": true
    , _id: req.params.id
    })
        .then(() => res.status(200).json({ message: 'Modified!'}))
        .catch(error => res.status(400).json({ error }));
});

app.delete('/api/products/:id', (req, res, next) => {
    Product.deleteOne({ _id :  req.params.id})
        .then(() => res.status(200).json({ message: 'Deleted!'}))
        .catch(error => res.status(400).json({ error}));
});

app.get('/api/products/:id', (req, res, next) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.status(200).json(product))
        .catch(error => res.status(404).json({ error }));
});

app.get('/api/products', (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;
