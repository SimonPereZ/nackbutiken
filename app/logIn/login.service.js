angular.module("logIn")
    .factory("logInService", ["$http", "$location", "$rootScope", function ($http, $location, $rootScope) {

        var loggedIn = false;
        var user;
        var userId;
        var doLoginError = false;
        var userName;
        var error = true;

        return {
            doLogin: function (username, password) {

                var login = {
                    email: username,
                    password: password
                }
                $http.post("http://nackbutik.azurewebsites.net/api/customer/login", login).then(function (response) {
                    user = response.data;
                    if (user.email == username) {
                        loggedIn = true;
                        userId = user.customerId;
                        userName = user.firstName + " " + user.lastName;
                        $rootScope.$broadcast("loggedIn");
                        $location.path("/cart");
                    }
                }, function error(response) {
                    $rootScope.$broadcast("notLoggedin");
                });

            },
            getLoginValue: function () {
                return loggedIn;
            },
            getUserId: function () {
                return userId;
            },
            getUserName: function () {
                return userName;
            },
            logOut: function () {
                loggedIn = false;
            }
        };
    }]);