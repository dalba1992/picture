(function () {
    'use strict';

    angular
        .module('jedcouvre')
        .controller('feedbackController', feedbackController);


    function feedbackController($translate, $location, toastr) {
        var vm = this;
        vm.sendFeedBack = sendFeedBack;
        vm.subjects = [
            {
                id: 1,
                value: $translate.instant('Question')
            },
            {
                id: 2,
                value: $translate.instant('Bug')
            },
            {
                id: 3,
                value: $translate.instant('FeatureRequest')
            }];
        vm.feedback = {
            priority: 1,
            status: 2
        };
        vm.errors = {};

        return vm;

        function sendFeedBack() {
            if (vm.feedbackForm.$invalid) return;
            vm.isSending = true;
            var yourdomain = '303studio';
            var api_key = 'DuvCl6Urs7E1p5OMWygF';
            $.ajax(
                {
                    url: "https://" + yourdomain + ".freshdesk.com/api/v2/tickets",
                    type: 'POST',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    headers: {
                        "Authorization": "Basic " + btoa(api_key + ":x")
                    },
                    data: JSON.stringify(vm.feedback),
                    success: function (data, textStatus, jqXHR) {
                        toastr.info($translate.instant('SuccessCreateFeedbackMessage'), $translate.instant('SuccessCreateFeedbackTitle'), {
                            timeOut: 0,
                            closeOnHover: false
                        });
                        $location.path('/howtouse');
                    },
                    error: function (jqXHR, tranStatus) {
                        toastr.error($translate.instant('WarnCreateFeedbackMessage'), $translate.instant('WarnCreateFeedbackTitle'), {
                            timeOut: 0,
                            closeOnHover: false
                        });
                    }
                }
            );
        }


    }


})();


