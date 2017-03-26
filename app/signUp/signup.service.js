angular.module("signUp").factory("signUpService", ["$http", function ($http) {

    return {
        createNewCustomer: function (customer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", customer);
        }

    };

}]);