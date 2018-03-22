(function () {
    'use strict';

    angular
        .module('jedcouvre')
        .controller('routesController', routesController);


    function routesController($location, $ionicSideMenuDelegate, $ionicModal) {
        var vm = this;
        vm.goTo = goTo;
        vm.showAbout=showAbout;
        return vm;

        function goTo(route) {
            $ionicSideMenuDelegate.toggleLeft();
            $location.path('/' + route);
        }

        function showAbout() {
            $ionicModal.fromTemplateUrl('./app/views/about/about.html', {          
                animation: 'slide-in-up'
            }).then(function (modal) {
                vm.modal = modal;
                vm.modal.show();
                $ionicSideMenuDelegate.toggleLeft();
            });
        }
    }
})();
