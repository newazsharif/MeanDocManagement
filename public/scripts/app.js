angular.module('docManagement', ['ngRoute','ngFileUpload']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : '/views/fileUpload.html'
	})
})