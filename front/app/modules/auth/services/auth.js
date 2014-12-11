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
			var userToken = { token: $window.sessionStorage.token };

			if(!$window.sessionStorage.token) {
				deferred.reject('Not logged in');

				return deferred.promise;
			}
			

			$http.post(_urlBase + '/loggedin', userToken)
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data, status) {
					deferred.reject(data);
				});


			return deferred.promise;
		}

		function login(credentials) {
			return $http.post(_urlBase + '/login', credentials);
		}

		function storeToken(token) {
			$window.sessionStorage.token = token;
		}
	}

})(angular);