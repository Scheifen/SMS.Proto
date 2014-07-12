'use strict';

/* Main App */

var messageApp = angular.module('messageApp', ['ngRoute',]);

messageApp.config(['$routeProvider',
	function($routeProvider) {
	 $routeProvider.
	 	when('/', {
	 		templateUrl: 'partials/message-index.html',
	 		controller: 'indexController'
	 	}).
	 	when('/messages/:message_id', {
	 		templateUrl: 'partials/message-detail.html',
	 		controller:'detailController',		
	 	}).
	 	otherwise({
	 		redirectTo: '/'
	 	});
}]);

messageApp.controller('indexController', ['$http', '$scope', function($http, $scope){
	var index = this;
	var selectedLocation;
	var locationSelect;
	this.messages = {};
	$http({
		method: 'GET',
		url:'/locust-sms-prototype/FakeMessages.json',
	}).success(function(data){
		$scope.messages=data;
	});
}]);

messageApp.controller('detailController', ['$http', '$routeParams', '$scope', function($http, $routeParams, $scope){
	var detail = this;
	$http.get('/locust-sms-prototype/messages/'+$routeParams.message_id+'.json').success(function(data){
		$scope.messages = data;
	});
}]);