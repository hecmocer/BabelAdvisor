"use strict";

// Importa la libreria fs de node
var fs = require('fs');

// Importamos mongoose y los modelos de usuario
var mongoose = require('mongoose');
var User = require('./models/user_model');
var Destination = require('./models/destination_model');
var Country = require('./models/country_model');
var Hotel = require('./models/hotel_model');
var Restaurant = require('./models/restaurant_model');

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

// Función que devuelve promesa que borra paises
function deleteCountries(){
    return new Promise( function(resolve, reject){
        // Borramos paises
        Country.remove({}, function(err) {
            if(err){
                console.log('Error when trying to delete country', err);
                reject(err);
            }
            else{
                console.log('Se han borrado los paises');
                resolve();
            }
        });
    });
}

// Función que devuelve promesa que borra hoteles
function deleteHotels(){
    return new Promise( function(resolve, reject){
        // Borramos hoteles
        Hotel.remove({}, function(err) {
            if(err){
                console.log('Error when trying to delete hotel', err);
                reject(err);
            }
            else{
                console.log('Se han borrado los hoteles');
                resolve();
            }
        });
    });
}

// Función que devuelve promesa que borra restaurantes
function deleteRestaurants(){
    return new Promise( function(resolve, reject){
        // Borramos restaurantes
        Restaurant.remove({}, function(err) {
            if(err){
                console.log('Error when trying to delete restaurant', err);
                reject(err);
            }
            else{
                console.log('Se han borrado los restaurantes');
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
        var newUser = new User(packageData.users[i]);

        newUser.save(function(err, new_row){
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

// Función que devuelve promesa que inserta paises
function insertCountries(){
    return new Promise( function(resolve, reject){
        // Leer fichero countries e insertar paises
        fs.readFile('./data/countries.json', {encoding: 'utf8'}, function(err, data) {
            if(err){
                console.log('Ha habido un error al leer el fichero countries: ', err);
                reject(err);
            }
            else{
                var packageData = JSON.parse(data);

                // Inserta pais a pais y resuelve en el callback
                insertSingleCountry(packageData, 0, function(){
                    console.log('Se han insertado los paises');
                    resolve();
                });
            }
        });
    });
}

// Inserta elemento a elemento y una vez acabado llama al callback (resolverá la promesa)
function insertSingleCountry(packageData, i, cb){
    // Condición de parada
    if(i < packageData.countries.length){
        var newCountry = new Country(packageData.countries[i]);

        newCountry.save(function(err, new_row){
            if(err){
                console.log("No se pudo insertar el pais numero ", i);
            }else{
                console.log("Insertado pais numero ", i);
                // Llamada a insertar siguiente pais
                insertSingleCountry(packageData, i+1, cb)
            }
        });
    }
    else{
        cb();
    }
}

// Función que devuelve promesa que inserta hoteles
function insertHotels(){
    return new Promise( function(resolve, reject){
        // Leer fichero hotels e insertar hoteles
        fs.readFile('./data/hotels.json', {encoding: 'utf8'}, function(err, data) {
            if(err){
                console.log('Ha habido un error al leer el fichero hotels: ', err);
                reject(err);
            }
            else{
                var packageData = JSON.parse(data);

                // Inserta elemento a elemento y resuelve en el callback
                insertSingleHotel(packageData, 0, function(){
                    console.log('Se han insertado los hoteles');
                    resolve();
                });
            }
        });
    });
}

// Inserta elemento a elemento y una vez acabado llama al callback (resolverá la promesa)
function insertSingleHotel(packageData, i, cb){
    // Condición de parada
    if(i < packageData.hotels.length){
        var newHotel = new Hotel(packageData.hotels[i]);

        newHotel.save(function(err, new_row){
            if(err){
                console.log("No se pudo insertar el hotel numero ", i);
            }else{
                console.log("Insertado hotel numero ", i);
                // Llamada a insertar siguiente elemento
                insertSingleHotel(packageData, i+1, cb)
            }
        });
    }
    else{
        cb();
    }
}

// Función que devuelve promesa que inserta restaurantes
function insertRestaurants(){
    return new Promise( function(resolve, reject){
        // Leer fichero restaurants e insertar restaurantes
        fs.readFile('./data/restaurants.json', {encoding: 'utf8'}, function(err, data) {
            if(err){
                console.log('Ha habido un error al leer el fichero restaurants: ', err);
                reject(err);
            }
            else{
                var packageData = JSON.parse(data);

                // Inserta elemento a elemento y resuelve en el callback
                insertSingleRestaurant(packageData, 0, function(){
                    console.log('Se han insertado los restaurantes');
                    resolve();
                });
            }
        });
    });
}

// Inserta elemento a elemento y una vez acabado llama al callback (resolverá la promesa)
function insertSingleRestaurant(packageData, i, cb){
    // Condición de parada
    if(i < packageData.restaurants.length){
        var newRestaurant = new Restaurant(packageData.restaurants[i]);

        newRestaurant.save(function(err, new_row){
            if(err){
                console.log("No se pudo insertar el restaurante numero ", i);
            }else{
                console.log("Insertado restaurante numero ", i);
                // Llamada a insertar siguiente elemento
                insertSingleRestaurant(packageData, i+1, cb)
            }
        });
    }
    else{
        cb();
    }
}

// Cadena de promesas que primero borra y luego reinserta. Por último imprime mensaje por pantalla y termina el proceso
deleteUsers()
.then(deleteDestinations)
.then(deleteCountries)
.then(deleteHotels)
.then(deleteRestaurants)
.then(insertUsers)
.then(insertDestinations)
.then(insertCountries)
.then(insertHotels)
.then(insertRestaurants)
.then(function(){
    process.exit();
}).catch(function(err){
    console.error('Ha habido un problema en la ejecución');
    process.exit(1);
})