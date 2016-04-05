"use strict";

// Conectamos con el driver
var conn = require('../lib/connect_mongoose');
var mongoose = require('mongoose');

// Creamos el esquema de hoteles
var hotelSchema = mongoose.Schema({
    name: String,
    country: String,
    picture: String,
    opinion: String,
    price: String,
    url: String,
    upVotes: Number,
    downVotes: Number
});

// Añadimos función que devuelve todos los elementos
hotelSchema.statics.listAll = function(cb){
    // Preparamos la query sin ejecutarla
    var query = Hotel.find({});

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
var Hotel = mongoose.model('Hotel', hotelSchema);

// Exportamos el modelo
module.exports = Hotel;
