//'use strict';

/* Main App */

var messageApp = angular.module('messageApp', ['ngRoute',]);

messageApp.config(['$routeProvider',
	function($routeProvider) {
	 $routeProvider.
	 	when('/', {
	 		templateUrl: 'partials/message-index.html',
	 	}).
	 	when('/messages/:message_id', {
	 		templateUrl: 'partials/message-detail.html',
	 		controller:'detailController',		
	 	}).
	 	otherwise({
	 		redirectTo: '/'
	 	});
}]);

messageApp.controller('indexController', ['$http', function($http){
	var index = this;
	this.messages = {};
	$http.get('/locust-sms-prototype/FakeMessages.json').success(function(data){
		index.messages=data});
}]);

messageApp.controller('detailController', ['$http', '$routeParams', function($http, $routeParams){
	var detail = this;
	$http.get('/locusts-sms-prototype/messages/'+$routeParams.message_id+'.json').success(function(data){
		detail.message = data;
	});
}]);