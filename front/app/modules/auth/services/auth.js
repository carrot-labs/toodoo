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
	auth.$inject = ['$window', '$http', '$q', '$log', 'token'];


	/**
	 * Create the service
	 */
	function auth($window, $http, $q, $log, token) {
		var _urlBase = '/auth';
		var Token = token;

		this.deleteToken = deleteToken;
		this.getToken    = getToken;
		this.login       = login;
		this.storeToken  = storeToken;
		this.verifyLogin = verifyLogin;

		function deleteToken() {
			if($window.sessionStorage.token) {
				delete $window.sessionStorage.token;
			}
		}

		function getToken() {
			if($window.sessionStorage.token) {
				return $window.sessionStorage.token;
			}

			return undefined;
		}

		function verifyLogin() {
			var deferred  = $q.defer();
			
			if($window.sessionStorage.token) {
				var userToken = { token: $window.sessionStorage.token };

				$http.post(_urlBase + '/loggedin', userToken)
					.success(function(data, status) {
						deferred.resolve(data, status);
					})
					.error(function(data, status) {
						deferred.reject(data)
					});
			} else {
				deferred.reject(401);
			}


			return deferred.promise
		}

		function login(credentials) {
			return $http.post(_urlBase + '/login', credentials);
		}

		function storeToken(token) {
			$window.sessionStorage.token = token;
		}
	}

})(angular);