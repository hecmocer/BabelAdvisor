"use strict";

// Conectamos con el driver
var conn = require('../lib/connect_mongoose');
var mongoose = require('mongoose');

// Creamos el esquema de destinos
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
destinationSchema.statics.listAll = function(country, cb){
    // Preparamos la query sin ejecutarla
    var query = Destination.find({});

    if(country !== ""){
        query.where('country').equals(country);
    }

    query.select('name country picture_main upVotes downVotes');

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

// Función que devuelve un único elemento y su información asociada
destinationSchema.statics.listElement = function(id, cb){
    // Preparamos query sin ejecutarla
    var query = Destination.find({"_id": id});

    // Ejecutamos la query y llamamos al callback
    query.exec(function(err, rows){
        if(err){
            cb(err);
        }
        else{
            cb(null, rows);
        }
    });
}

// Registramos el schema en mongoose
var Destination = mongoose.model('Destination', destinationSchema);

// Exportamos el modelo
module.exports = Destination;
