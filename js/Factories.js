'use strict';

/* Factories */

var messageFactories = angular.factory('messageFactories', ['ngResource']);

messageFactories.factory('Messages', ['$resource',
 function($resource){
	return $resource('messages/:messageId.json', {}, {
		query: {method:'GET', params:{messageId:'messages'}, isArray:true}		
	});
}]);