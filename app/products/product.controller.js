var cartList = [];

angular.module("product").
    controller("productController", ["$scope", "$rootScope", "productService", "categoryService", function ($scope, $rootScope, productService, categoryService) {

        $scope.cartList = cartList;
        

        productService.getProducts().then(function (response) {
            var products = response.data;
            $scope.products = products;

        });

        categoryService.getCategories().then(function (response) {
            var categories = response.data;
            categories.unshift({ name: "Alla produkter" });
            $scope.categories = categories;
        });


        $scope.addToCart = function (item) {
            var check = false;

            angular.forEach(cartList, function (cartProduct) {
                if (cartProduct.id == item.id) {
                    cartProduct.quantity += 1;
                    check = true;
                }
            })
            if (!check) {
                item.quantity = 1;
                cartList.push(item);
            }
        };

        $scope.removeFromCart = function (item) {

            if (item.quantity == 1) {
                var index = $scope.cartList.indexOf(item)
                $scope.cartList.splice(index, 1);
            }
            else {
                item.quantity -= 1;
            }
        };

        $scope.onCategorySelect = function (categoryId) {
            $scope.selectedCategoryId = categoryId;
        };

        $scope.goAndBuy = function (){
            productService.setCart(cartList);
        };

    }]);

