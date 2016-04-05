var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

// Petición GET
router.get('/', function(req, res, next) {
    Restaurant.listAll(function(err, rows){
        if(err){
            res.json({
                result: false,
                err: err
            });
        }
        else{
            res.json({
                result: true,
                count:rows.length,
                rows: rows
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
