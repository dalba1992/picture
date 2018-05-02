(function () {
    'use strict';

    angular
        .module('jedcouvre')
        .controller('howToUseController', howToUseController);


    function howToUseController($timeout, $ionicLoading) {
        var vm = this;
        vm.init = init;
        vm.restartScan = restartScan;
        vm.showVideo = showVideo;
        $ionicLoading.show({
            template: '<svg class="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">\n' +
            '  <circle class="internal-circle" cx="60" cy="60" r="30"></circle>\n' +
            '  <circle class="external-circle" cx="60" cy="60" r="50"></circle>\n' +
            '</svg>',
            noBackdrop: false
        });
        return vm;
     
        function init() {
            $timeout(function () {
                vm.isLoading = false;
                $ionicLoading.hide();
            }, 3000);
        }

        function restartScan() {
            CraftARSDK.startView(null, null, {"loadUrl": "single_shot_search.html"});
        }

        function showVideo() {
            var ref = cordova.InAppBrowser.open('http://www.youtube.com/embed/WHlADEBuQE8', '_blank', 'location=no');
        }
    }
})();
