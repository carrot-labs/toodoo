(function(angular) {

	'use strict';

	/**
	 * Get the controllers module
	 */
	angular
		.module('toodoo.modules.Todo.controllers')
		.controller('TodoShowController', TodoShowController);


	/**
	 * Dependency injection on the TodoListController function
	 */
	TodoShowController.$inject = ['$scope', '$routeParams', '$location', '$log', 'todos'];


	/**
	 * 
	 */
	function TodoShowController($scope, $routeParams, $location, $log, todos) {
		var Todo = todos;
		$scope.todo = {description: 'he'};

		$scope.markDone = markDone;
		$scope.deleteTodo = deleteTodo;
		activate();

		function activate() {
			var id = $routeParams.id;
			$scope.loading = true;

			Todo.findOne(id)
				.success(function(data) {
					$scope.todo = data;
					$scope.loading = false;
				});
		}

		function markDone(todo) {
			todo.done = !todo.done;
			todo.updatedAt = Date.now();

			Todo.update(todo);
		}

		function deleteTodo(todo) {
			Todo.remove(todo);
			$scope.todo = '';
			// $location.path('/todos');
		}

	}

})(angular);