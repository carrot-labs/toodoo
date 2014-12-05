(function(angular) {

	'use strict';

	/**
	 * Create the main angular module
	 */
	angular
		.module('toodoo', [
			'ngRoute',
			'ngResource',

			'toodoo.modules.Todo.services',
			'toodoo.modules.Todo.controllers',
		])
		.config(config);


	/**
	 * Dependency injection on the config function
	 */
	config.$inject = ['$routeProvider', '$locationProvider'];


	/**
	 * The main angular module configuration
	 */
	function config($routeProvider, $locationProvider) {
		/**
		 * Create the routes
		 */
		$routeProvider
			.when('/todos', {
				templateUrl: 'views/todos/index.html',
				controller: 'TodoListController'
			})

			.when('/todos/create', {
				templateUrl: 'views/todos/create.html',
				controller: 'TodoCreateController'
			})

			.when('/todos/:id', {
				templateUrl: 'views/todos/show.html',
				controller: 'TodoShowController'
			})

			.when('/todos/:id/edit', {
				templateUrl: 'views/todos/edit.html',
				controller: 'TodoEditController'
			})

			.otherwise({
				redirectTo: '/todos'
			});


		/**
		 * Make the URL routing looks like HTML5 routing
		 */
		$locationProvider.html5Mode(true);
	}

})(angular);