var express = require('express');
var router = express.Router();
var passport = require('passport'); 
var Account = require('../models/account'); 
 
// Require controller modules.
var api_controller = require('../controllers/api');
var pens_controller = require('../controllers/pens');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// pens ROUTES ///
// POST request for creating a pens.
router.post('/resource/pens', pens_controller.pens_create_post);
// DELETE request to delete pens.
router.delete('/resource/pens/:id', pens_controller.pens_delete);
// PUT request to update pens.
router.put('/resource/pens/:id', pens_controller.pens_update_put);
// GET request for one pens.
router.get('/resource/pens/:id', pens_controller.pens_detail);
// GET request for list of all pens items.
router.get('/resource/pens', pens_controller.pens_list);

module.exports = router;
