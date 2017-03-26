var cart = [];

angular.module("cart").
    controller("cartController", ["$scope", "$routeParams", "$rootScope", "$location", "productService", "logInService", "cartService",
        function ($scope, $routeParams, $rootScope, $location, productService, logInService, cartService) {

            cart = productService.getCart();
            $scope.cart = cart;
            $scope.totalCost = 0;
            $scope.loggedIn = logInService.getLoginValue();
            UserId = logInService.getUserId();
            $scope.failed = false;
            $scope.success = false;
            

            getTotaltPrice = function () {
                $scope.totalCost = 0;
                angular.forEach(cart, function (item) {

                    $scope.totalCost = $scope.totalCost + (item.price * item.quantity);
                })
            };

            getTotaltPrice();

            $scope.removeFromCart = function (item) {

                if (item.quantity == 1) {
                    var index = $scope.cart.indexOf(item)
                    $scope.cart.splice(index, 1);
                    getTotaltPrice();
                }
                else {
                    item.quantity -= 1;
                    getTotaltPrice();
                }
            };

            $scope.makeOrder = function () {

                var newOrder = [];
                angular.forEach(cart, function (item) {
                    newOrder.push({ productId: item.id, quantity: item.quantity })
                })
                var order = {
                    customerId: UserId,
                    products: newOrder
                }
                cartService.sendOrder(order).then(function success(response) {
                    $scope.success = true;
                }, function error(response) {
                    $scope.failed = true;
                });
            };
        }]);

