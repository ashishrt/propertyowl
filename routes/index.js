var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title:'Propertyowl-Find the Best place to advertize' });
});

module.exports = router;
