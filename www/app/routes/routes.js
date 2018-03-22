(function () {
    'use strict';
    app.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {

        $routeProvider
            .when("/howtouse", {
                templateUrl: "app/views/howtouse/howtouse.html",
                controller: "howToUseController",
                controllerAs:"vm"
            })
            .when("/feedback", {
                templateUrl: "app/views/feedback/feedback.html"
            })
            .when("/about", {
                templateUrl: "app/views/about/about.html",
                controller: "aboutController",
                controllerAs:"vm"
            })
            .otherwise({redirectTo: '/howtouse'})
    }
})();