const express = require('express');

const app=express();

//definir el motor de plantillaa utilizar
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index', 
       {title: "Programacion Computacional IV", message: "Express con Jade"}
    );
});

app.route('/test').get(function(req, res){
    res.send("Test Page");
});

app.route('/new').get(function(req, res){
    res.send("PRUEBA NUEVA PAGINA");
});

const server = app.listen(3000);