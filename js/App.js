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
	 	when('/newMessage',{
	 		templateUrl: 'partials/new-message.html'
	 	}).
	 	otherwise({
	 		redirectTo: '/'
	 	});
}]);

messageApp.controller('indexController', ['$http', '$scope', function($http, $scope){
	var index = this;
	this.messages = {};
	$scope.messLimit = 4;

	$http({
		method: 'GET',
		url:'/locust-sms-prototype/FakeMessages.json',
	}).success(function(data){
		$scope.messages=data;
	}).error(function(data){
		alert('Sorry, something went wrong. Please try again');
	});
}]);

messageApp.controller('detailController', ['$http', '$routeParams', '$scope', function($http, $routeParams, $scope){
	var detail = this;
	$http.get('/locust-sms-prototype/messages/'+$routeParams.message_id+'.json').success(function(data){
		$scope.messages = data;
	}).error(function(data){
		alert('Sorry, something went wrong. Please try again.')
	});
}]);

var raiseLimit = function(x){x+4;};