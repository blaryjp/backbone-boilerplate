define([
	'jquery',
	'underscore',
	'backbone',
	'text!tpl/home/page.html'
], function($, _, Backbone, homeTemplate) {

	var HomeView = Backbone.View.extend({

		el: '#content',

		initialize: function () {
			_.bindAll(this, 'render');
		},

		render: function () {
			this.$el.html(homeTemplate);
			return this;
		}

	});

	return HomeView;
});