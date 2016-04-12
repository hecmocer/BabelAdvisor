"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

// Petición GET
router.get('/', function(req, res, next) {
    var countryParam = req.query.c || "";

    Restaurant.listAll(countryParam, function(err, rows){
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
                rows[i].link = "http://localhost:8000/#/restaurants/" + rows[i]._id;
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
    Restaurant.listElement(req.params.id, function(err, row){
        if(err){
            res.json({
                result: false,
                err: err
            });
        }
        else{
            res.json({
                result: true,
                row: row
            });
        }
    });
});

// Petición POST
router.post('/', function(req, res){
    // Creamos un objeto con lo que nos pasen en el cuerpo de la petición
    var restaurant = new Restaurant(req.body);

    // Insertamos dicho objeto. Mongoose se encargará de comprobar si concuerdan los campos
    restaurant.save(function(err, newRow){
        if(err){
            res.json( { result: false, error: err } );
        }
        else{
            res.json( { result: true, insertedElement: newRow } );
        }
    })
});

// Petición PUT
router.put('/:id', function(req, res){
    // Obtenemos el elemento a modificar
    Restaurant.listElement(req.params.id, function(err, row){
        if(err){
            res.json({
                result: false,
                err: err
            });
        }
        else{

            var data_to_put = {};

            // Actualizamos los campos del objeto en memoria
            if(req.body.vote === true){
                row.upVotes++;
                data_to_put.upVotes = row.upVotes;
            }
            if(req.body.vote === false){
                row.downVotes++;
                data_to_put.downVotes = row.downVotes;
            }

            // Actualizamos dicho objeto en la base de datos
            Restaurant.update(
                { _id: req.params.id},
                {$set: data_to_put},
                function(err, data){
                    if(err){
                        res.json({ result: false, error: err});
                    }
                    else{
                        res.json({ result: true, info: data, row: row});
                    }
                });
        }
    });
});

// Petición DELETE
router.delete('/:id', function(req, res){

    // Borramos el elemento con el id especificado en la petición
    Restaurant.remove({_id: req.params.id}, function(err, data){
        if(err){
            res.json( { result: false, error: err});
        }
        else{
            res.json( { result: true, data: data});
        }
    });
});

module.exports = router;
