var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

// Petición GET
router.get('/', function(req, res, next) {
    User.listAll(function(err, rows){
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

module.exports = router;
