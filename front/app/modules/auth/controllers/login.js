(function(angular) {

	'use strict';

	/**
	 * Get the controllers module
	 */
	angular
		.module('toodoo.modules.Auth.controllers')
		.controller('AuthLoginController', AuthLoginController);


	/**
	 * Inject the dependencies
	 */
	AuthLoginController.$inject = ['$scope', '$log', 'auth', 'token'];


	/**
	 * Create the controller
	 */
	function AuthLoginController($scope, $log, auth, token) {
		var Auth  = auth;
		var Token = token;

		$scope.user = {
			username: 'johndoe',
			password: 'foobar'
		};
		
		$scope.login       = login;
		$scope.logout      = logout;
		$scope.verifyLogin = verifyLogin;


		function login() {
			Auth.login($scope.user)
				.success(function(data, status) {
					Auth.storeToken(data.token);
				})
				.error(function(data, status) {
					Auth.deleteToken();
				});
		}

		function logout() {
			Auth.deleteToken();
		}

		function verifyLogin() {
			Auth.verifyLogin().then(function(data) {
				$log.info(data);
			}, function(data) {
				$log.info(data);
			});
		}
	}

})(angular);