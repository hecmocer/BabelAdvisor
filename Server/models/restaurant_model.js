"use strict";

// Conectamos con el driver
var conn = require('../lib/connect_mongoose');
var mongoose = require('mongoose');

// Creamos el esquema de restaurantes
var restaurantSchema = mongoose.Schema({
    name: String,
    country: String,
    picture: String,
    opinion: String,
    type: String,
    url: String,
    upVotes: Number,
    downVotes: Number
});

// Añadimos función que devuelve todos los elementos
restaurantSchema.statics.listAll = function(country, cb){
    // Preparamos la query sin ejecutarla
    var query = Restaurant.find({});

    if(country !== ""){
        query.where('country').equals(country);
    }

    query.select('name country picture type upVotes downVotes');

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
restaurantSchema.statics.listElement = function(id, cb){
    // Preparamos query sin ejecutarla
    var query = Restaurant.find({"_id": id});

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
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Exportamos el modelo
module.exports = Restaurant;
