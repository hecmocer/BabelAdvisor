"use strict";

// Conectamos con el driver
var conn = require('../lib/connect_mongoose');
var mongoose = require('mongoose');

// Creamos el esquema de usuarios
var destinationSchema = mongoose.Schema({
    name: String,
    country: String,
    picture_main: String,
    picture_1: String,
    picture_2: String,
    picture_3: String,
    opinion: String,
    price: String,
    upVotes: Number,
    downVotes: Number
});

// Añadimos función que devuelve todos los usuarios
destinationSchema.statics.listAll = function(cb){
    // Preparamos la query sin ejecutarla
    var query = Destination.find({});

    // Ejecutamos la query y llamamos al callback
    query.exec(function(err, rows){
        if(err){
            cb(err);
        }
        else{
            cb(null, rows);
        }
    });
};

// Registramos el schema en mongoose
var destinationModel = mongoose.model('Destination', destinationSchema);

// Exportamos el modelo
module.exports = destinationModel;