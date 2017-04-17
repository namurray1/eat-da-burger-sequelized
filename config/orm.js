var connection = require("./connection.js");

var orm = {
	selectAll: function(callback) {
		var queryString = "SELECT * FROM burgers";

		connection.query(queryString, function(err, result) {
			if (err) throw err;

			callback(result);
		});
	},
	insertOne: function(burgerName, callback) {
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (";
		queryString += "'"+burgerName+"'";
		queryString += ", " + false + ");";

		connection.query(queryString, function(err, result) {
			if (err) throw err;

			callback(result);
		});
	},
	updateOne: function(id, callback) {
		var queryString = "UPDATE burgers";

	    queryString += " SET ";
	    queryString += "devoured = 1";
	    queryString += " WHERE ";
	    queryString += "id = " + id;

	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      callback(result);
	    });
	}
};

module.exports = orm;