var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // Trying the above way wont work for UPDATE, It's will keep giving error (WHERE id = #)
    updateOne: function (table, setValue, valOfCol, cb) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
        connection.query(queryString,[table, setValue, valOfCol,cb], function (err, result) {

            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;