var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body.name)
    burger.create(`burgers_name`, req.body.name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id;
    burger.update(req.body.devoured, condition, function (result) {
        console.log("IT WORK!")
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();

        }
    });
});

module.exports = router;