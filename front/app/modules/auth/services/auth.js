(function(angular) {

	'use strict';

	/**
	 * Get the services module
	 */
	angular
		.module('toodoo.modules.Auth.services')
		.service('auth', auth);


	/**
	 * Inject the dependencies
	 */
	auth.$inject = ['$window', '$http', '$log'];


	/**
	 * Create the service
	 */
	function auth($window, $http, $log) {
		var _urlBase = '/auth';

		this.deleteToken = deleteToken;
		this.isLoggedIn  = isLoggedIn;
		this.login       = login;
		this.storeToken  = storeToken;

		function deleteToken() {
			if($window.sessionStorage.token) {
				delete $window.sessionStorage.token;
			}
		}

		function isLoggedIn() {
			if($window.sessionStorage.token) {
				return true;
			}

			return false;
		}

		function login(credentials) {
			return $http.post(_urlBase + '/login', credentials);
		}

		function storeToken(token) {
			$window.sessionStorage.token = token;
		}
	}

})(angular);