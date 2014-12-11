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
			return (typeof $window.sessionStorage.token === 'undefined') ? false : true;
		}

		function login(credentials) {
			return $http.post(_urlBase + '/login', credentials);
		}

		function storeToken(token) {
			$window.sessionStorage.token = token;
		}
	}

})(angular);