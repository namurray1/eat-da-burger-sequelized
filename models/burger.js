var orm = require("../config/orm.js");

var burger = {
	all: function(callback) {
		orm.selectAll(function(res) {
			callback(res);
		}); 
	},
	create: function(burgerName, callback) {
		orm.insertOne(burgerName, function(res) {
			callback(res);
		});
	},
	devour: function(id, callback) {
		orm.updateOne(id, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;