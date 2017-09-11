var express = require("express");
var app = express();
var path = require("path");
var body = require("body-parser")
var db = require("../models");

var router = express.Router();


router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(dbburger) {
        // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
        var hbsObject = {
            burgers: dbburger
        };
        res.render("index", hbsObject);
    });
});

// put route -> back to index
router.put("/:id?", function(req, res) {
    db.burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbburger) {
        res.redirect("/");
    });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for buger.addBurger
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(dbburger) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console,
        // render back to index with handle
        res.redirect("/");
    });
});

module.exports = router;