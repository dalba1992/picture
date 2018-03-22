(function () {
    'use strict';
    app.config(config);
    config.$inject = ['$translateProvider'];

    function config($translateProvider) {

        switch (navigator.language.split('-')[0]) {
            case "fr":
                $translateProvider.preferredLanguage("fr");
                break;
            case "nl":
                $translateProvider.preferredLanguage("nl");
                break;
            default:
        }
        $translateProvider.useStaticFilesLoader({
            prefix: './translations/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    }
})();
