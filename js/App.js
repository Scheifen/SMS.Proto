//'use strict';

/* Main App */

var messageApp = angular.module('messageApp', ['ngRoute',]);

messageApp.config(['$routeProvider',
	function($routeProvider) {
	 $routeProvider.
	 	when('/', {
	 		templateUrl: 'partials/message-index.html',
	 	}).
	 	when('/:indexController.messages.messageId', {
	 		templateUrl: 'partials/message-detail.html',		
	 	}).
	 	otherwise({
	 		redirectTo: '/'
	 	});
}]);

messageApp.controller('indexController', ['$http', '$scope' function($http){
	var index = this;
	$scope.messages = {};
	$http.get('/locust-sms-prototype/FakeMessages.json').success(function(data){index.messages=data});
}]);

messageApp.controller('detailController', ['$http', '$routeParams', ])