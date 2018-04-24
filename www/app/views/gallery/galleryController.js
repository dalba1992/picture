(function () {
        'use strict';

        angular
            .module('jedcouvre')
            .controller('galleryController', feedbackController);


        function feedbackController($http) {

            var vm = this;
            // vm.catalogues = [];
            // var i = 0;
            // $http.get('https://my.craftar.net/api/v0/collection/?api_key=9faa3308ba51217b3a65ac019840ad9d1d48cc53').then(function (resCatalogues) {
            //
            //     resCatalogues.data.objects.forEach(function (catalogue) {
            //         vm.catalogues.push({
            //             name: catalogue.name
            //         });
            //         $http.get('https://my.craftar.net/api/v0/item/?api_key=9faa3308ba51217b3a65ac019840ad9d1d48cc53&collection__uuid=' + catalogue.uuid).then(function (resItems) {
            //             vm.catalogues[i].items = resItems.data.objects;
            //             vm.catalogues[i].items.forEach(function (item) {
            //                 $http.get('https://my.craftar.net/api/v0/image/?api_key=9faa3308ba51217b3a65ac019840ad9d1d48cc53&item__uuid=' + item.uuid).then(function (resImages) {
            //                     item.images = resImages.data.objects;
            //                 });
            //             })
            //
            //         });
            //
            //     });
            //     console.log(vm.catalogues);
            // });

        }
    }

)();


