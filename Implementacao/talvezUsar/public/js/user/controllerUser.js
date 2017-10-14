/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('userApp.controllers', [])
	.controller('UserListController',
	function ($scope, $state, popupService, $window, User) {
		//.query == GET
		User.query(function (users) {
			$scope.users = users;
		});
	}).controller('UserCreateController',
	function ($scope, $state, $stateParams, User) {

		$scope.user = new Object();
		$scope.user.details = {};

		$scope.addUser = function () {
			User.add($scope.user, function (response) {
				$state.go('user');
			});
		}

	});