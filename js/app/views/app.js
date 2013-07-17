define([
	'jquery',
	'underscore',
	'backbone',
	'vm',
	'text!tpl/layout.html'
], function($, _, Backbone, Vm, layoutTemplate) {

	var AppView = Backbone.View.extend({

		el: '#root',

		initialize: function () {
			_.bindAll(this, 'render');
			this.render();
		},

		render: function () {
			this.$el.html(layoutTemplate);
			return this;
		}

	});

	return AppView;
});