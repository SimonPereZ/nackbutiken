angular.module("product").factory("productService", ["$http", function ($http) {
    var cart = [];

    return {
        getProducts: function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/product");

        },
        getProductsById: function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/product" + id);
        },

        setCart: function (newCart) {
            cart = newCart;
        },
        getCart: function () {
            return cart;
        }
    };
}]);