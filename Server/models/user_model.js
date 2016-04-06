"use strict";

// Conectamos con el driver
var conn = require('../lib/connect_mongoose');
var mongoose = require('mongoose');

// Creamos el esquema de usuarios
var userSchema = mongoose.Schema({
    profile_picture: String,
    name: String,
    email: String,
    pwd: String
});

// Añadimos función que devuelve todos los usuarios
userSchema.statics.listAll = function(cb){
    // Preparamos la query sin ejecutarla
    var query = User.find({});

    query.select('profile_picture name email');

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
var User = mongoose.model('User', userSchema);

// Exportamos el modelo
module.exports = User;