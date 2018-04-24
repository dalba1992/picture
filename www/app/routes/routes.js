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
                templateUrl: "app/views/feedback/feedback.html",
                controller: "feedbackController",
                controllerAs:"vm"
            })
            .when("/gallery", {
                templateUrl: "app/views/gallery/gallery.html",
                controller: "galleryController",
                controllerAs:"vm"
            })
            .otherwise({redirectTo: '/howtouse'})
    }
})();