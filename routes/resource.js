var express = require('express');

var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pens_controller = require('../controllers/pens');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// pens ROUTES ///
// POST request for creating a pens.
router.post('/pens', pens_controller.pens_create_post);
// DELETE request to delete pens.
router.delete('/pens/:id', pens_controller.pens_delete);
// PUT request to update pens
router.put('/pens/:id', pens_controller.pens_update_put);
// GET request for one pens
router.get('/pens/:id', pens_controller.pens_detail);
// GET request for list of all pens items.
router.get('/pens', pens_controller.pens_list);
module.exports = router;