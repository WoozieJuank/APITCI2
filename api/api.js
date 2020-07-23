
require('./config/config');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const bodyParser= require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Middleware
app.use( require('./routes/camaras'));

// Iniciar.
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${ port}`)
})


