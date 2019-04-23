var express = require('express');
var router = express.Router();

/* GET goals listing. */
router.get('/', function(req, res, next) {
  res.render('goals', { 
    title: 'Saving Goals Accounts' 
  });
});

module.exports = router;
