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
	AuthLoginController.$inject = ['$scope', '$log', 'auth'];


	/**
	 * Create the controller
	 */
	function AuthLoginController($scope, $log, auth) {
		var Auth = auth;

		$scope.user = {
			username: 'johndoe',
			password: 'foobar'
		};
		
		$scope.login = login;


		/**
		 * Login
		 * 
		 * Authenticate the user
		 */
		function login() {
			Auth.login($scope.user)
				.success(function(data, status) {
					$log.info('status:', status, 'data:', data);
				})
				.error(function(data, status) {
					$log.info('status:', status, 'data:', data);
				});
		}
	}

})(angular);