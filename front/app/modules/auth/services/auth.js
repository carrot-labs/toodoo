(function(angular) {

	'use strict';

	/**
	 * Get the module
	 */
	angular
		.module('toodoo.modules.Auth.services')
		.service('auth', auth);


	/**
	 * Inject the dependencies
	 */
	auth.$inject = ['$http'];


	/**
	 * Create the service
	 */
	function auth($http) {
		var _urlBase = '/auth';

		this.login = login;

		function login(credentials) {
			return $http.post(_urlBase + '/login', credentials);
		}
	}

})(angular);