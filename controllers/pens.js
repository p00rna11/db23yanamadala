var pens = require('../models/pens');
// List of all penss
exports.pens_list = function (req, res) {
    res.send('NOT IMPLEMENTED: pens list');
};
// for a specific pens.
// for a specific pens.
exports.pens_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await pens.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle pens create on POST.
exports.pens_create_post = async function (req, res) {
    console.log(req.body)
    let document = new pens();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"pens_name":"regular", "type":13, "cost":43.56}
    document.pens_name = req.body.pens_name;
    document.penstype = req.body.penstype;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle pens delete on DELETE.
exports.pens_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await pens.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle pens update form on PUT.
exports.pens_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await pens.findById( req.params.id)
 // Do updates of properties
 if(req.body.pens_name) toUpdate.pens_name = req.body.pens_name;
 if(req.body.penstype) toUpdate.penstype = req.body.penstype;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
        res.render('pens', {
            title: 'pens Search Results',
            results: thepens
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.pens_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await pens.findById( req.query.id)
    res.render('pensdetail',
   { title: 'pens Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a pens.
// No body, no in path parameter, no query.
// Does not need to be async
exports.pens_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('penscreate', { title: 'pens Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a pens.
// query provides the id
exports.pens_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await pens.findById(req.query.id)
    res.render('pensupdate', { title: 'pens Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.pens_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await pens.findById(req.query.id)
    res.render('pensdelete', { title: 'pens Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

