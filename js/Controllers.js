'use strict';

/* Controllers */

var MessagesControllers = angular.module('MessagesControllers', []);

MessagesControllers.controller('indexCtrl', ['$scope', 'Messages', 
	function($scope, Messages){
	$scope.Messages = Messages.query();
	$scope.orderProp = 'age';
}]);

MessagesControllers.controller('detailCtrl', ['$scope', '$routeParams', 'Messages',
 function($scope, $routeParams, Messages) {
 	$scope.message = Messages.get({messageId: $routeParams.messageId}, function(Messages){
 })
	
}]);