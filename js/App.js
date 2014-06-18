//'use strict';

/* Main App */

var messageApp = angular.module('messageApp', ['ngRoute',]);

messageApp.config(['$routeProvider',
	function($routeProvider) {
	 $routeProvider.
	 	when('/', {
	 		templateUrl: 'partials/message-index.html',
	 	}).
	 	// when('/:messageId', {
	 	// 	templateUrl: 'partials/message-detail.html',
	 	// 	controller:'detailCtrl',		
	 	// }).
	 	otherwise({
	 		redirectTo: '/'
	 	});
}]);

messageApp.controller('indexController', ['$http', function($http){
	var index = this;
	this.messages = {};
	$http.get('/locust-sms-prototype/FakeMessages.json').success(function(data){index.messages=data});
}]);