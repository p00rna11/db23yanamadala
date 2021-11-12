var pens = require('../models/pens');
// List of all penss
exports.pens_list = function (req, res) {
    res.send('NOT IMPLEMENTED: pens list');
};
// for a specific pens.
exports.pens_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: pens detail: ' + req.params.id);
};
// Handle pens create on POST.
exports.pens_create_post = async function (req, res) {
    console.log(req.body)
    let document = new pens();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"pens_type":"regular", "quantity":13, "cost":43.56}
    document.pens_type = req.body.pens_type;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle pens delete form on DELETE.
exports.pens_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: pens delete DELETE ' + req.params.id);
};
// Handle pens update form on PUT.
exports.pens_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: pens update PUT' + req.params.id);
};

// List of all penss
exports.pens_list = async function (req, res) {
    try {
        thepens = await pens.find();
        res.send(thepens);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.pens_view_all_Page = async function (req, res) {
    try {
        thepens = await pens.find();
        res.render('pens', { title: 'pens Search Results', results: thepens });
        res.render('pens', {
            title: 'pens Search Results',
            results: thepens
        });
        
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};