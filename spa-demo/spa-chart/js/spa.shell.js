/*
*  spa.shell.js
*  Shell module for SPA
* */

spa.shell = (function () {
    //-----------------------Begin Module scope variables-------------------------
    var
        configMap = {
            main_html:`
             <div class="spa-shell-head">
                <div class="spa-shell-head-logo"></div>
                <div class="spa-shell-head-acct"></div>
                <div class="spa-shell-head-search"></div>
            </div>
            <div class="spa-shell-main">
                <div class="spa-shell-main-nav"></div>
                <div class="spa-shell-main-content"></div>
            </div>
            <div class="spa-shell-foot"></div>
            <div class="spa-shell-chat"></div>
            <div class="spa-shell-modal"></div>
            `
        },
        stateMap = { $container:null },
        jqueryMap = {},
        setJqueryMap, initModule;
    //---------------------- Begin Module scope variables------------------------------

    //--------------------------------Begin Utility Methods-------------------------------
    //--------------------------------End Utility Methods-------------------------------

    //--------------------------------Begin Dom Methods-------------------------------
    // Begin Dom method /setJqueryMap/
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {$container:$container};
    };
    // End Dom method  /setJqueryMap/
    //----------------------------------End Dom Methods----------------------------------

    //--------------------------------Begin Event Methods-------------------------------
    //--------------------------------End Event Methods-------------------------------


    //--------------------------------Begin Public Methods-------------------------------
    initModule = function ($container) {
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();
    }
    return {initModule:initModule}
    //--------------------------------End Public Methods-------------------------------
}());
