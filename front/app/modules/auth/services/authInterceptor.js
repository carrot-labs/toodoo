(function(angular) {

	'use strict';

	/**
	 * Get the services module
	 */
	angular
		.module('toodoo.modules.Auth.services')
		.factory('authInterceptor', authInterceptor);


	/**
	 * Inject the dependencies
	 */
	authInterceptor.$inject = ['$rootScope', '$q', '$window'];


	/**
	 * Create the factory
	 */
	function authInterceptor($rootScope, $q, $window) {

		return {
			request: request,
			response: response
		};

		function request(config) {
			config.headers = config.headers || {};

			if($window.sessionStorage.token) {
				config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
			}

			return config;
		}

		function response(response) {
			if(response.status === 401) {
				// Action in case the user is not logged in!
				$location.path('/login');
			}

			return response || $q.when(response);
		}
	}
})(angular);