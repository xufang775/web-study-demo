/**
 spa.chat.js
 Chat feature module for SPA
 */


/* global $, spa */
spa.chat = (function () {
   // ------------------- 开始-模块全局变量 -----------------
   var
       configMap = {
            main_html:`
            <div style="padding: 1em; color: #fff;">
                Say hello to chat
            </div>
            `,
           settable_map:{}
       },
       stateMap = { $container:null },
       jqueryMap = {},
       setJqueryMap,configModule,initModule;
    // ----------------------- 结束-模块全局变量 ---------------------

    // ------------------------- 开始-工具类方法 ------------------------


    // ------------------------- 结束-工具类方法 ------------------------


    // ------------------------- 开始-DOM-方法 ------------------------
    // Begin Dom method /setJqueryMap/
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {$container:$container};
    };
    // End Dom method /setJqueryMap/

    // ------------------------- 结束-DOM-方法 ------------------------

    // --------------------------Begin Event Handlers--------------------

    // --------------------------End Event Handlers--------------------

    // ------------------------------开始-公共方法-------------------------------
    configModule = function (input_map) {
        spa.util.setConfigMap({
            input_map:input_map,
            settable_map:configMap.settable_map,
            config_map:configMap
        });
        return true;
    };

    initModule = function ($container) {
        $container.html(configMap.main_html);
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    }

    return {
        configModule:configModule,
        initModule:initModule
    }
    // ------------------------------结束-公共方法-------------------------------
}());