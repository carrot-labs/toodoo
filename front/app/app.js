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
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/todos/index.html'
			})

			.when('/edit', {
				templateUrl: 'views/todos/edit.html'
			})

			.otherwise({
				redirectTo: '/banana'
			});

	}

})(angular);