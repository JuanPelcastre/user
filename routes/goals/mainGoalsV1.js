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

// Saving Goals
var customer_01 = require('../../mock/V01/goalsV01/arrayGoals/customerId_01.json');
var customer_02 = require('../../mock/V01/goalsV01/arrayGoals/customerId_02.json');
var customer_03 = require('../../mock/V01/goalsV01/arrayGoals/customerId_03.json');
var customer_04 = require('../../mock/V01/goalsV01/arrayGoals/customerId_04.json');

// var customer_01 = require('../../mock/V01/goalsV01/listGoals/customerId_01.json');
// var customer_02 = require('../../mock/V01/goalsV01/listGoals/customerId_02.json');
// var customer_03 = require('../../mock/V01/goalsV01/listGoals/customerId_03.json');
// var customer_04 = require('../../mock/V01/goalsV01/listGoals/customerId_04.json');

// handler for query http://localhost:3000/V00/?customerId=91222262
// https://saving-goals.herokuapp.com/savingGoalAccounts/V01/?customerId=91222262
// /savingGoalAccounts/V01/2334726138/getGoalDetail/?secuenceNumber=1
router.get('/V01/', function(req, res, next) {
    var tsec = req.headers['tsec'];
    // tsec = 'anything';

    if (tsec === '' || tsec === 'null' || tsec === undefined) {
        return res.status(409).json({'error': 'tsec no valid o vacio'});

    }else{    
    
        if (req.query.customerId === '91222262') {
            return res.json(customer_01);

        } else if (req.query.customerId === 'D0102118') {
            return res.json(customer_02);

        } else if (req.query.customerId === 'D0102134') {
            return res.json(customer_03);

        } else if (req.query.customerId === 'D0102136') {
            return res.json(customer_04);

        }
        return res.json({ "message": "El usuario no existe" });
    }    
    next();
});

// Saving Goal Detail
// var customer_01 = require('../../mock/V01/goalsV01/listGoals/customer_01_detail.json');
var goal_01 = require('../../mock/V01/goalsV01/goalDetail/goal_01.json');
var goal_02 = require('../../mock/V01/goalsV01/goalDetail/goal_02.json');
var goal_03 = require('../../mock/V01/goalsV01/goalDetail/goal_03.json');
var goal_04 = require('../../mock/V01/goalsV01/goalDetail/goal_04.json');

// handler for query http://localhost:3000/V00/2334726138/getGoalDetail?secuenceNumber=1
//              /V01/2334726138/getGoalDetail/?secuenceNumber=1
router.get('/V01/:accountNumber/getGoalDetail/', function(req, res, next) {
    var tsec = req.headers['tsec'];
    // tsec = 'anything';

    if (tsec === '' || tsec === 'null' || tsec === undefined || req.query.secuenceNumber != 1) {
        return res.status(409).json(genericError);

    }else {    

        if (req.params.accountNumber === '2334726138') {
            return res.json(goal_01);

        } else if (req.params.accountNumber === '2334727274') {
            return res.json(goal_02);

        } else if (req.params.accountNumber === '2334727924') {
            return res.json(goal_03);

        } else if (req.params.accountNumber === '2334749405') {
            return res.json(goal_04);

        }
        return res.json({ "message": "La meta no existe" });
    }
    next();
});

module.exports = router;