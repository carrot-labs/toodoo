(function(angular) {

	'use strict';

	/**
	 * Create the services module
	 */
	angular
		.module('toodoo.modules.Todo.services', [])
		.service('todos', todos);


	/**
	 * Dependency injection on the config function
	 */
	todos.$inject = ['$http'];


	/**
	 * The todos service
	 */
	function todos($http) {
		/**
		 * The base url for the http requests
		 */
		var urlBase = 'api/todos';
		

		/**
		 * Define the service functions
		 */
		this.find    = find;
		this.findOne = findOne;
		this.create  = create;
		this.update  = update;
		this.remove  = remove;


		/**
		 * Create the action functions for the service
		 */
		function find() {
			return $http.get(urlBase);
		}

		function findOne(id) {
			return $http.get(urlBase + '/_id/' + id);
		}

		function create(data) {
			return $http.post(urlBase, data);
		}

		function update(data) {
			return $http.put(urlBase + '/_id/' + data._id, data);
		}

		function remove(data) {
			return $http.delete(urlBase + '/_id/' + data.id, data);
		}
	}

})(angular);