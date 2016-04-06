"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Country = mongoose.model('Country');

// Petición GET
router.get('/', function(req, res, next) {
    Country.listAll(function(err, rows){
        if(err){
            res.json({
                result: false,
                err: err
            });
        }
        else{

            // Modificamos cada fila para que devuelva link
            for(let i = 0; i < rows.length; i++){
                rows[i] = rows[i].toObject();
                rows[i].link = "http://localhost:8000/#/countries/" + rows[i]._id;
            }

            res.json({
                result: true,
                count:rows.length,
                rows: rows
            });
        }
    });
});

// Petición GET :id
router.get('/:id', function(req, res, next) {
    Country.listElement(req.params.id, function(err, rows){
        if(err){
            res.json({
                result: false,
                err: err
            });
        }
        else{
            // Modificamos cada fila para que devuelva link
            for(let i = 0; i < rows.length; i++){
                rows[i] = rows[i].toObject();
                rows[i].destinations = "http://localhost:8000/#/destinations/?c=" + rows[i].name;
                rows[i].hotels = "http://localhost:8000/#/hotels/?c=" + rows[i].name;
                rows[i].restaurants = "http://localhost:8000/#/restaurants/?c=" + rows[i].name;
            }

            res.json({
                result: true,
                rows: rows
            });
        }
    });
});

// Petición POST
router.post('/', function(req, res){
    // Creamos un objeto con lo que nos pasen en el cuerpo de la petición
    var country = new Country(req.body);

    // Insertamos dicho objeto. Mongoose se encargará de comprobar si concuerdan los campos
    country.save(function(err, newRow){
        if(err){
            res.json( { result: false, error: err } );
        }
        else{
            res.json( { result: true, insertedElement: newRow } );
        }
    })
});

// Petición DELETE
router.delete('/:id', function(req, res){

    // Borramos el elemento con el id especificado en la petición
    Country.remove({_id: req.params.id}, function(err, data){
        if(err){
            res.json( { result: false, error: err});
        }
        else{
            res.json( { result: true, data: data});
        }
    });
});

module.exports = router;
