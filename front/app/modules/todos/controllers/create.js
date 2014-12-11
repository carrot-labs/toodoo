(function(angular) {

	'use strict';

	/**
	 * Get the controllers module
	 */
	angular
		.module('toodoo.modules.Todo.controllers')
		.controller('TodoCreateController', TodoCreateController);


	/**
	 * Dependency injection on the TodoListController function
	 */
	TodoCreateController.$inject = ['$scope', '$log', 'todos'];


	/**
	 * Create the controller
	 */
	function TodoCreateController($scope, $log, todos) {
		var Todo = todos;

		$scope.successMessage = false;

		$scope.newTodo = {
			description: '',
			done: false
		};

		$scope.saveTodo = saveTodo;

		function saveTodo(todo) {
			$scope.successMessage = false;
			
			Todo.create(todo)
				.success(function(data, status) {
					$scope.successMessage = true;
					$scope.createdTodoLink = data._id;
				});

			$scope.newTodo = {
				description: '',
				done: false
			};
		}
	}

})(angular);