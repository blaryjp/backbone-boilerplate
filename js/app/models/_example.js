define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var TotoItemModel = Backbone.Model.extend({

		defaults: {
			id     : 0,
			name   : "toto"
		},

		initialize: function() {

			//_.bindAll(this, 'fetch', 'parse');

		},

		// Overloads the Backbone fetch method.
		// fetch: function(options) {
		// 
		// 	var params = {
		// 		
		// 	};
		// 
		// 	options = options ? _.clone(options) : {};
		// 	options.data = _.extend(params, options.data)
		// 	return this.constructor.__super__.fetch.call(this, options);
		// },

		// Overloads the Backbone parse method.
		// parse: function(data) {
		// 	console.log(data);
		// 	return data;
		// },

		// Gets called automatically by Backbone when the set and/or save methods are called.
		// validate: function(attrs) {
		// 
		// }

	});

	return TotoItemModel;
});