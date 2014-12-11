(function(angular) {

	'use strict';

	/**
	 * Get the services module
	 */
	angular
		.module('toodoo.modules.Todo.services')
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
		var _urlBase = 'api/todos';
		

		/**
		 * Define the service functions
		 */
		this.find    = find;
		this.findOne = findOne;
		this.create  = create;
		this.update  = update;
		this.remove  = remove;


		/**
		 * Create the actions functions for the service
		 */
		function find() {
			return $http.get(_urlBase);
		}

		function findOne(id) {
			return $http.get(_urlBase + '/_id/' + id);
		}

		function create(data) {
			return $http.post(_urlBase, data);
		}

		function update(data) {
			return $http.put(_urlBase + '/_id/' + data._id, data);
		}

		function remove(data) {
			return $http.delete(_urlBase + '/_id/' + data._id, data);
		}
	}

})(angular);