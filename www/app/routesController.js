(function () {
    'use strict';

    angular
        .module('jedcouvre')
        .controller('routesController', routesController);


    function routesController($location,$ionicSideMenuDelegate) {
        var vm = this;
        vm.goTo = goTo;
        return vm;

        function goTo(route) {
            $ionicSideMenuDelegate.toggleLeft();
            $location.path('/' + route);
        }

    }
})();
