define([
	'jquery',
	'underscore',
	'backbone',
	'models/Toto'
], function($, _, Backbone, TotoItemModel) {

	var TotoItemCollection = Backbone.Collection.extend({

		model: TotoItemModel,

		initialize: function() {

			_.bindAll(this, 'toto');
			
		},

		toto: function() {
			
		}

	});

	return TotoItemCollection;
});