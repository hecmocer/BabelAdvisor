"use strict";

// Conectamos con el driver
var conn = require('../lib/connect_mongoose');
var mongoose = require('mongoose');

// Creamos el esquema de paises
var countrySchema = mongoose.Schema({
    name: String,
    flag: String,
    upVotes: Number,
    downVotes: Number
});

// Añadimos función que devuelve todos los elementos
countrySchema.statics.listAll = function(cb){
    // Preparamos la query sin ejecutarla
    var query = Country.find({});

    query.select('name flag upVotes downVotes');

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
countrySchema.statics.listElement = function(id, cb){
    // Preparamos query sin ejecutarla
    var query = Country.find({"_id": id});

    // Ejecutamos la query y llamamos al callback
    query.exec(function(err, rows){
        if(err){
            cb(err);
        }
        else{
            cb(null, rows[0]);
        }
    });
}

// Registramos el schema en mongoose
var Country = mongoose.model('Country', countrySchema);

// Exportamos el modelo
module.exports = Country;
