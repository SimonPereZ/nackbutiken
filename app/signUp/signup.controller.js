angular.module("signUp").
    controller("signUpController", ["$scope", "$routeParams", "$rootScope", "$location", "signUpService", "categoryService", "productService",
        function ($scope, $routeParams, $rootScope, $location, signUpService, categoryService, productService) {

            $scope.fail = false;


            $scope.signUp = function () {
                var newCustomer = {

                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    email: $scope.email,
                    phone: $scope.phone,
                    password: $scope.password,
                    address: $scope.address,
                    postalCode: $scope.postalCode,
                    city: $scope.city
                };

                signUpService.createNewCustomer(newCustomer).then(function success(response) {
                    var user = response.data;
                    $location.path("/logIn");
                }, function error(response) {
                    $scope.fail = true;
                });
            }
        }]);