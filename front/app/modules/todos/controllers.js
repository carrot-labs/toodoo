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

		$scope.markDone   = markDone;
		$scope.deleteTodo = deleteTodo;

		activate();

		function activate() {
			$scope.loading = true;

			Todo.find()
				.success(function(data, status) {
					$scope.todos = data;
					$scope.loading = false;
				})
				.error(function(data, status) {
					$log.warn("Error:", data);
					$scope.loading = false;
				});
		}

		function markDone(todo) {
			todo.done = !todo.done;
			Todo.update(todo);
		}

		function deleteTodo(todo) {
			var todoIndex = $scope.todos.indexOf(todo);

			$scope.todos.splice(todoIndex, 1);

			Todo.remove(todo);
		}

	}

})(angular);