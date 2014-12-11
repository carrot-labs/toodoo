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
	AuthLoginController.$inject = ['$scope', '$log'];


	/**
	 * Create the controller
	 */
	function AuthLoginController($scope, $log) {
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
			alert(12);
		}
	}

})(angular);