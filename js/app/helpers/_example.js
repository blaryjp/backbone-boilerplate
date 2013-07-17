define([
	'Handlebars'
], function (Handlebars) {

	function toto(context, options) {

		return "toto";
	}

	Handlebars.registerHelper('toto', toto);

	return toto;
});