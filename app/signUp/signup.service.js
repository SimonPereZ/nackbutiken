angular.module("signUp").factory("signUpService", ["$http", function ($http) {

    return {
        createNewCustomer: function (newCustomer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", newCustomer);
        }

    };

}]);