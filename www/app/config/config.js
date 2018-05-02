(function () {
    'use strict';
    app.config(config);
    config.$inject = ['$translateProvider','toastrConfig'];

    function config($translateProvider,toastrConfig) {

        switch (navigator.language.split('-')[0]) {
            case "fr":
                $translateProvider.preferredLanguage("fr");
                break;
            case "nl":
                $translateProvider.preferredLanguage("nl");
                break;
            default:
                $translateProvider.preferredLanguage("en");
                break;
        }
        $translateProvider.useStaticFilesLoader({
            prefix: './translations/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
        toastrConfig = {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        };
    }
})();
