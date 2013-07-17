/**
 * Main file & configuration.
 * 
 * Copyright (c) 2013. Jean-Philippe Blary.
 * Contact: <contact@blary.be>
 */

require.config({

	baseUrl: "./js",

	paths: {

		// RequireJS plugins
		"domReady"				: "libs/require.domReady",
		"text"					: "libs/require.text",
		"hbs"					: "libs/require.hbs",
		"hbs.i18nprecompile"	: 'libs/require.hbs.i18nprecompile',

		// Major libraries
		"jquery"				: "libs/jquery-2.0.2.min",
		"underscore"			: "libs/underscore-min",
		"backbone"				: "libs/backbone-min",
		"backbone.validateAll"	: "libs/Backbone.validateAll",
		"Handlebars"			: "libs/Handlebars",
		"less"					: "libs/less-1.3.3.min",							// ---- remove in production

		// Plugins
		"json"					: "libs/json2",
		"jstorage"				: "libs/jstorage",
		"timers"				: "libs/jquery.timers",

		"iscroll"				: "libs/iscroll",
		"jquery.animate"		: "libs/jquery.animate-enhanced",
		"noClickDelay"			: "libs/noClickDelay",
		"appUI"					: "libs/viewnavigator",

		// Utils
		"vm"					: "app/utils/vm",
		"events"				: "app/utils/events",
		"helpers"				: "app/utils/common_include",
		"udpsocket"				: "app/utils/udpsocket",

		// Application Folders
		'config'				: 'app/config',
		"models"				: "app/models",
		"views"					: "app/views",
		"collections"			: "app/collections",
		"routers"				: "app/routers",
		"tpl"					: "../tpl"
	},

	shim: {

		// Major libraries
		"jquery" : {
			"exports"	: "$"
		},
		"underscore" : {
			"exports"	: "_"
		},
		"backbone" : {
			"deps"		: ["underscore", "jquery"],
			"exports"	: "Backbone"
		},
		"backbone.validateAll" : ["backbone"],

		// Plugins
		"json" : {
			"exports"		: "JSON"
		},
		"jstorage" 			: ["jquery", "json"],
		"timers" 			: ["jquery"],
		"jquery.animate" 	: ["jquery"],
		"appUI"				: ["jquery", "jquery.animate", "noClickDelay", "iscroll"],

		// Template engine.
		"Handlebars" : {
			"exports"	: "Handlebars"
		}

	},

	//locale : function() { return "fr_FR" },
	
	waitSeconds: 120,

	hbs : {
		templateExtension : 'html',
		disableI18n : true,
		helperDirectory : 'app/helpers/'
	}

});

// ----------------------------------------------------------------------------

less = {																			// ---- remove in production
	env: "development"
};

require([
	'config',
	'domReady',
	'views/app',
	'routers/router',
	'vm',
	'less'																			// ---- remove in production
], function (config, domReady, AppView, Router, Vm) {

	// domReady is RequireJS plugin that triggers when DOM is ready.
	domReady(function () {

		// onDeviceReady is a function triggered by Phonegap when device is ready.
		function onDeviceReady() {

			// Define if Retina display or not.
			window.isRetina = function isRetina() {

				if (window.devicePixelRatio > 1)
					return true;

				var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
								  (min--moz-device-pixel-ratio: 1.5),\
								  (-o-min-device-pixel-ratio: 3/2),\
								  (min-resolution: 1.5dppx)";
								  
				if (window.matchMedia && window.matchMedia(mediaQuery).matches)
					return true;

				return false;
			};

			// Load App view & router.
			var appView = Vm.create({}, 'AppView', AppView);
			Router.initialize({appView: appView});

			// Force hiding splash screen when app is loaded.
			setTimeout(function() {
				try {
					navigator.splashscreen.hide();
					cordova.exec(null, null, 'SplashScreen', 'hide', []);
				} catch(e) {}
			}, 1);
		}

		// Waiting for deviceready event.
		if (window.var_debug)
			onDeviceReady();
		else
			document.addEventListener('deviceready', onDeviceReady, false);

	});
});
