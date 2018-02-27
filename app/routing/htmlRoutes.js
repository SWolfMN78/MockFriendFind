var path = require("path");


module.exports = function(app) {

    //navigate back to the home page.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //navigate to the survey page.

};