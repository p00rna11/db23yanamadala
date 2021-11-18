var express = require('express');
const pens_controllers = require('../controllers/pens');
var router = express.Router();


/* GET detail pens page */
router.get('/detail',pens_controllers.pens_view_one_Page);
/* GET create pens page */
router.get('/create',pens_controllers.pens_create_Page);
/* GET create update page */
router.get('/update',pens_controllers.pens_update_Page);
/* GET create pens page */
router.get('/delete',pens_controllers.pens_delete_Page);


module.exports = router; 
 