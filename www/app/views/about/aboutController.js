(function () {
    'use strict';

    angular
        .module('jedcouvre')
        .controller('aboutController', aboutController);


    function aboutController($timeout, $ionicLoading) {
        var vm = this;
        vm.init = init;
        vm.version = "";
        return vm;

        function init() {
            cordova.getAppVersion.getVersionNumber().then(function (version) {
                vm.version = version;
            });
        }
    }
})();

