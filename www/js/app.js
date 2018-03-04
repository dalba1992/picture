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
    .controller('ScanController', function ($scope, $timeout) {
        //Variables angular
        $scope.isLoading = true;
        //
        $scope.init = init;
        $scope.restartScan = restartScan;

        function init() {
            $timeout(function () {
                $scope.isLoading = false;
            }, 2000);
            CraftARSDK.startView(null, null, {"loadUrl": "single_shot_search.html"});
        }

        function restartScan() {
            CraftARSDK.startView(null, null, {"loadUrl": "single_shot_search.html"});
        }
    });
