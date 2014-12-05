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
			.when('/todos', {
				templateUrl: 'views/todos/index.html'
			})

			.when('/todos/:id', {
				templateUrl: 'views/todos/show.html'
			})

			.when('/todos/edit', {
				templateUrl: 'views/todos/edit.html'
			})

			.otherwise({
				redirectTo: '/todos'
			});

	}

})(angular);