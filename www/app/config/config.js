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
            prefix: '/Translations/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    }
})();
