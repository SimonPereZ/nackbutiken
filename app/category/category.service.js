angular.module("category").factory("categoryService", ["$http", function ($http) {

    var categories = [];

    return {

        getCategories: function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/category");

        },
        getCategoriesById: function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/category/" + id);
        }
    };
}]);