var express = require('express');
var router = express.Router();
var fs = require("fs");
var sessionManagment = require('../../util/sessionManagment.js');

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

// Tsec
// handler for query http://localhost:3000/dashboard/V00/tsec
router.post('/V00/tsec', function(req, res, next) {
    let tsec = sessionManagment.getTsec(req);
    res.setHeader('tsec', tsec);
    
    return res.json({});
    next();
});

module.exports = router;