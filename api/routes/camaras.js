
const express = require('express');
const { json } = require('body-parser');

const app  =  express();
var camaras = [{marca:"Nikon",referencia:"D3400",precio: "649.95",id:"1"},
                {marca:"Nikon",referencia:"D5",precio: "6499.95",id: "2"},
                {marca:"Nikon",referencia:"D500",precio: "1999.95",id:"3"},
                {marca:"Nikon",referencia:"D7200",precio: "1049.95",id:"4"},
                {marca:"Canon",referencia:"EOS 5D",precio: "3999.95",id:"5"},
                {marca:"Canon",referencia:"EOS 7D",precio: "1800.95",id:"6"},
                {marca:"Canon",referencia:"EOS 80D",precio: "2645.95",id:"7"},
                {marca:"Canon",referencia:"EOS Rebel T6",precio: "989.95",id:"8"},
                {marca:"Canon",referencia:"EOS-1D",precio: "753.95",id:"9"},
                {marca:"Canon",referencia:"EOS 1D X",precio: "457.95",id:"10"},];


// retorna una camara especifica por ID.
app.get('/camaras/:id', function (req, res) {
    var id = req.params.id;
    res.send(camaras[id-1]);
});
//retorna todas las camaras.
app.get('/camaras', function (req, res) {
    res.send(camaras);
  });
//retorna todas las camaras.
app.get('/', function (req, res) {
    res.send('<h1>Bienvenido a la calculadora</h1><br><br> <p>Realiza un cálculo simple utilizando la página https://apptic2.azurewebsites.net/{operación}/{número 1}/{número 2}</p><br><br><h2>El resultado de la multiplicación es: %s </h2>');
  });

// agrega una camara | en postman, escribir la siguiente sentencia: marca, referencia, precio e id
app.put('/camaras',function (req,res ){
    
    let body = req.body; 
    camaras.push(body);
    res.send(body)
})

module.exports = app;
