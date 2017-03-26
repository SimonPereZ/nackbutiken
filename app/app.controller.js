angular.module("app").controller("appController", ["$scope", "$rootScope", "categoryService", "logInService", function ($scope, $rootScope, categoryService, logInService) {

     $scope.loggedin = false;

    categoryService.getCategories().then(function (response) {
        var categories = response.data;
        categories.unshift({ name: "Alla produkter" });
        $scope.categories = categories;
    });

    $scope.onCategorySelect = function (categoryId) {
        $scope.selectedCategoryId = categoryId;
    };

    $rootScope.$on("loggedIn", function (event, arg) {
        $scope.name = logInService.getUserName();
        $scope.loggedin = logInService.getLoginValue();
    });

    $scope.logOut = function () {
        $scope.loggedin = false;
        $scope.name = "";
        logInService.logOut();
    };







}]);