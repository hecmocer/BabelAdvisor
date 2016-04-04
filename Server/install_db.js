"use strict";

// Importa la libreria fs de node
var fs = require('fs');

// Importamos mongoose y los modelos de usuario
var mongoose = require('mongoose');
var User = require('./models/user_model');
var Destination = require('./models/destination_model');

// Función que devuelve promesa que borra usuarios
function deleteUsers(){
    return new Promise( function(resolve, reject){
        // Borramos usuarios
        User.remove({}, function(err) {
            if(err){
                console.log('Error when trying to delete users', err);
                reject(err);
            }
            else{
                console.log('Se han borrado los usuarios');
                resolve();
            }
        });
    });
}

// Función que devuelve promesa que borra destinos
function deleteDestinations(){
    return new Promise( function(resolve, reject){
        // Borramos destinos
        Destination.remove({}, function(err) {
            if(err){
                console.log('Error when trying to delete destination', err);
                reject(err);
            }
            else{
                console.log('Se han borrado los destinos');
                resolve();
            }
        });
    });
}

// Función que devuelve promesa que inserta usuarios
function insertUsers(){
    return new Promise( function(resolve, reject){
        // Leer fichero users e insertar usuarios
        fs.readFile('./data/users.json', {encoding: 'utf8'}, function(err, data) {
            if(err){
                console.log('Ha habido un error al leer el fichero users: ', err);
                reject(err);
            }
            else{
                var packageData = JSON.parse(data);

                // Inserta usuario a usuario y resuelve en el callback
                insertSingleUser(packageData, 0, function(){
                    console.log('Se han insertado los usuarios');
                    resolve();
                });
            }
        });
    });
}

// Inserta usuario a usuario y una vez acabado llama al callback (resolverá la promesa)
function insertSingleUser(packageData, i, cb){
    // Condición de parada
    if(i < packageData.users.length){
        var new_user = new User(packageData.users[i]);

        new_user.save(function(err, new_row){
            if(err){
                console.log("No se pudo insertar el usuario numero ", i);
            }else{
                console.log("Insertado usuario numero ", i);
                // Llamada a insertar siguiente usuario
                insertSingleUser(packageData, i+1, cb)
            }
        });
    }
    else{
        cb();
    }
}

// Función que devuelve promesa que inserta destinos
function insertDestinations(){
    return new Promise( function(resolve, reject){
        // Leer fichero destinations e insertar destinos
        fs.readFile('./data/destinations.json', {encoding: 'utf8'}, function(err, data) {
            if(err){
                console.log('Ha habido un error al leer el fichero destinations: ', err);
                reject(err);
            }
            else{
                var packageData = JSON.parse(data);

                // Inserta destino a destino y resuelve en el callback
                insertSingleDestination(packageData, 0, function(){
                    console.log('Se han insertado los destinos');
                    resolve();
                });
            }
        });
    });
}

// Inserta destino a destino y una vez acabado llama al callback (resolverá la promesa)
function insertSingleDestination(packageData, i, cb){
    // Condición de parada
    if(i < packageData.destinations.length){
        var newDestination = new Destination(packageData.destinations[i]);

        newDestination.save(function(err, new_row){
            if(err){
                console.log("No se pudo insertar el destino numero ", i);
            }else{
                console.log("Insertado destino numero ", i);
                // Llamada a insertar siguiente destino
                insertSingleDestination(packageData, i+1, cb)
            }
        });
    }
    else{
        cb();
    }
}

// Cadena de promesas que primero borra y luego reinserta. Por último imprime mensaje por pantalla y termina el proceso
deleteUsers().then(deleteDestinations).then(insertUsers).then(insertDestinations).then(function(){
    process.exit();
}).catch(function(err){
    console.error('Ha habido un problema en la ejecución');
    process.exit(1);
})