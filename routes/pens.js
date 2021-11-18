var express = require('express');
var router = express.Router();
const pens_controller = require('../controllers/pens');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pens', { title: 'Search Results Pens' })
});
/* GET detail pens page */
router.get('/detail', pens_controlers.pens_view_one_Page);
/* GET create pens page */
router.get('/create', pens_controlers.pens_create_Page);
/* GET create update page */
router.get('/update', pens_controlers.pens_update_Page);
/* GET create pens page */
router.get('/delete', pens_controlers.pens_delete_Page);


module.exports = router; 
 