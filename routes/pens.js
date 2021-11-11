var express = require('express');
var router = express.Router();
const pens_controller = require('../controllers/pens');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pens', { title: 'Search Results Pens' })
});

module.exports = router; 
 