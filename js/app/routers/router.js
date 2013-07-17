define([
	'jquery',
	'underscore',
	'backbone',
	'vm'
], function ($, _, Backbone, Vm) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			// Pages
			''			: 'home',

			// Default - catch all
			'*actions'	: 'defaultAction'
		}
	});

	var initialize = function(options){
		
		var appView = options.appView;
		window.appView = appView;

		var router = new AppRouter(options);

		router.on('route:home', function() {
			require(['views/home/page'], function (HomePage) {
				var homePage = Vm.create(appView, 'HomePage', HomePage);
				homePage.render();
			});
		});


		router.on('route:defaultAction', function() {
			// window.location = "404.html";
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});