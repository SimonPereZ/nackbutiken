angular.module("app")
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "app/products/product.template.html",
            controller: "productController"
        })
            .when("/cart", {
                templateUrl: "app/cart/cart.template.html",
                controller: "cartController"
            })
            .when("/signUp", {
                templateUrl: "app/signUp/signup.template.html",
                controller: "signUpController"
            })
            .when("/logIn", {
                templateUrl: "app/logIn/login.template.html",
                controller: "logInController"
            })
            .otherwise("/");
        $locationProvider.html5Mode(true);
    }]);