var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Petición GET
router.get('/', function(req, res, next) {
    var userParam = req.query.n || "";

    User.listAll(userParam, function(err, rows){
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
    var user = new User(req.body);

    // Insertamos dicho objeto. Mongoose se encargará de comprobar si concuerdan los campos
    user.save(function(err, newRow){
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
    User.remove({_id: req.params.id}, function(err, data){
        if(err){
            res.json( { result: false, error: err});
        }
        else{
            res.json( { result: true, data: data});
        }
    });
});

module.exports = router;
