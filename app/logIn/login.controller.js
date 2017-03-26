angular.module("logIn").
    controller("logInController", ["$scope", "logInService", function ($scope, logInService) {

        var isLoggedIn = false;
        var LoggedIn = false;
        $scope.notLoggedIn = false;

        $scope.login = function (username, password) {
            logInService.doLogin(username, password);
        };

        $scope.$on("notLoggedin", function (event, arg) {
            $scope.notLoggedIn = true;
        });



    }]);
