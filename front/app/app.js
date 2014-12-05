(function(angular) {

	'use strict';

	angular
		.module('toodoo', [
			'ngRoute',
			'ngResource'
		])
		.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];

	function config($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateURL: ''
			});

		$locationProvider.html5Mode(true);
	}

})(angular);