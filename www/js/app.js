// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('ScanController', function ($scope, $timeout, $ionicLoading) {
        //Variables angular
        $scope.isLoading = true;
        //
        $scope.init = init;
        $scope.restartScan = restartScan;
        $ionicLoading.show({
            template: '<svg class="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">\n' +
            '  <circle class="internal-circle" cx="60" cy="60" r="30"></circle>\n' +
            '  <circle class="external-circle" cx="60" cy="60" r="50"></circle>\n' +
            '</svg>',
            noBackdrop: false   
        });

        function init() {
            $timeout(function () {
                $scope.isLoading = false;
                $ionicLoading.hide();
                CraftARSDK.startView(null, null, {"loadUrl": "single_shot_search.html"});

            }, 3000);
        }

        function restartScan() {
            CraftARSDK.startView(null, null, {"loadUrl": "single_shot_search.html"});
        }
    });
