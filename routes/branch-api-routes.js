var db =require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // GET route for getting all of the branches

    // Get route for retrieving a single branch

    // POST route for saving a new branch
    app.post("/api/branch", function(req, res) {
        console.log(req.body);
        db.Branch.create({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            zipcode: req.body.zipcode,
        })
        .then(function(dbPost){
            res.json(dbPost);
        });
    });


}