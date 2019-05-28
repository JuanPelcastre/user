var express = require('express');
var router = express.Router();

/* GET goals listing. */
router.get('/', function(req, res, next) {
  res.render('movements', { 
    title: 'Saving Goals Accounts Movements' 
  });
});

module.exports = router;
