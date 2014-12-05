(function(angular) {

	'use strict';

	/**
	 * Create the controllers module
	 */
	angular
		.module('toodoo.modules.Todo.controllers', [])
		.controller('TodoListController', TodoListController);


	/**
	 * Dependency injection on the TodoListController function
	 */
	TodoListController.$inject = ['$scope', '$log', 'todos'];

	function TodoListController($scope, $log, todos) {
		var Todo = todos;

		activate();

		function activate() {
			$scope.loading = true;

			Todo.find()
				.success(function(data, status) {
					$scope.todos = data;
					$scope.loading = false;
					$log.info(data);
				})
				.error(function(data, status) {
					$log.warn("Error:", data);
					$scope.loading = false;
				});
		}

	}

})(angular);