(function(angular) {

	'use strict';

	/**
	 * Get the services module
	 */
	angular
		.module('toodoo.modules.Auth.services')
		.service('token', token);


	/**
	 * Inject the dependencies
	 */
	token.$inject = ['$log'];


	/**
	 * Create the service
	 */
	function token($log) {
		this.decodeToken            = decodeToken;
		this.getTokenExpirationDate = getTokenExpirationDate;
		this.isTokenExpired         = isTokenExpired;
		this.urlBase64Decode        = urlBase64Decode;

    function decodeToken(token) {
      var parts = token.split('.');

      if (parts.length !== 3) {
        throw new Error('JWT must have 3 parts');
      }

      var decoded = this.urlBase64Decode(parts[1]);
      if (!decoded) {
        throw new Error('Cannot decode the token');
      }

      return JSON.parse(decoded);
    }

    function getTokenExpirationDate(token) {
      var decoded;
      decoded = this.decodeToken(token);

      if(!decoded.exp) {
        return null;
      }

      var d = new Date(0); // The 0 here is the key, which sets the date to the epoch
      d.setUTCSeconds(decoded.exp);

      return d;
    };

    function isTokenExpired(token) {
      var d = this.getTokenExpirationDate(token);

      if (!d) {
        return false;
      }

      // Token expired?
      return !(d.valueOf() > new Date().valueOf());
    };

		function urlBase64Decode(str) {
      var output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch (output.length % 4) {
        case 0: { break; }
        case 2: { output += '=='; break; }
        case 3: { output += '='; break; }
        default: {
          throw 'Illegal base64url string!';
        }
      }
      return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
    }	}
})(angular);