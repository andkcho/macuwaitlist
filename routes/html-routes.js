var path = require("path");

//Routes
//==============================
module.exports = function (app) {
        // Each of the below routes just handles the HTML page that the user gets sent to.

        //root routes loads dropin.html
        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/html/dropin.html"));
        });
        app.get("/admin", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/html/admin.html"));
        });
        app.get("/controllers", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/html/controllers.html"));
        });

}