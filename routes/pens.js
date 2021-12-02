var express = require('express');
const pens_controlers= require('../controllers/pens');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}  
/* GET pens */
router.get('/',secured, pens_controlers.pens_view_all_Page );
/* GET detail pens page */
router.get('/detail',secured, pens_controlers.pens_view_one_Page);
/* GET create pens page */
router.get('/create',secured, pens_controlers.pens_create_Page);
/* GET create update page */
router.get('/update',secured, pens_controlers.pens_update_Page);
/* GET create pens page */
router.get('/delete',secured, pens_controlers.pens_delete_Page);
module.exports = router;
