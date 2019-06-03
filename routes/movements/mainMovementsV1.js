var express = require('express');
var router = express.Router();
var fs = require("fs");
// var path = require('path');

/* GET users listing. */
router.use(function(req, res, next) {
    var host = req.get('origin');
    res.setHeader('Access-Control-Allow-Origin', host||"*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,tsec,otp');
    res.setHeader('Access-Control-Allow-Credentials', true);/*    if(req.get(withCredentials)){
      res.setHeader('Access-Control-Allow-Credentials', true);
    } else {
    }*/
    next();
});

// Saving Goals Movements
const movements_00 = require('../../mock/V01/movementsV01/movements0.json');
const movements_01 = require('../../mock/V01/movementsV01/movements1.json');
const movements_02 = require('../../mock/V01/movementsV01/movements2.json');
const movements_03 = require('../../mock/V01/movementsV01/movements3.json');
// V02/transactions/?secuenceNumber=1
router.get('/V02/transactions/:accountNumber', function(req, res, next) {
    var tsec = req.headers['tsec'];

    // tsec = 'cualquiercosa';
    
    if (tsec === '' || tsec === 'null' || tsec === undefined) {
        return res.status(409).json({'error': 'tsec no valid o vacio'});

    }else{    
    
        if (req.params.accountNumber === '6138') {
            return res.json(movements_00);
        } else if (req.params.accountNumber === '7274') {
            return res.json(movements_01);
        } else if (req.params.accountNumber === '7924') {
            return res.json(movements_02);
        } else if (req.params.accountNumber === '9405') { // Sin movimientos, mensaje no hay movimientos
            return res.json(movements_03);
        } 
        return res.json({ "message": "La meta no existe" });
    }    
    next();
});

module.exports = router;