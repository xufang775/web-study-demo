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
            `,
            chat_extend_time:250,
            chat_retract_time:300,
            chat_extend_height:450,
            chat_retract_height:15,
            chat_extend_title:'Click to retract',
            chat_retracted_title:'Click to extend'
        },
        stateMap = {
            $container:null,
            is_chat_retracted: true
        },
        jqueryMap = {},
        setJqueryMap, toggleChat, onClickChat, initModule;
    //---------------------- Begin Module scope variables------------------------------

    //--------------------------------Begin Utility Methods-------------------------------
    //--------------------------------End Utility Methods-------------------------------

    //--------------------------------Begin Dom Methods-------------------------------
    // Begin Dom method /setJqueryMap/
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {
            $container:$container,
            $chat:$container.find('.spa-shell-chat')
        };
    };
    // End Dom method  /setJqueryMap/

    toggleChat = function (do_extend,callback) {
        console.log(11);
        var
            px_chat_ht = jqueryMap.$chat.height(),
            is_open = px_chat_ht === configMap.chat_extend_height,
            is_closed = px_chat_ht === configMap.chat_retract_height,
            is_sliding = !is_open && !is_closed;
        // aviod race condition
        if(is_sliding){ return false; }

        // Bagin extend chat slider
        if(do_extend){
            jqueryMap.$chat.animate(
                {height:configMap.chat_extend_height},
                configMap.chat_extend_time,
                function () {
                    jqueryMap.$chat.attr(
                        'title',configMap.chat_extend_title
                    );
                    stateMap.is_chat_retracted = false;

                    if(callback){callback(jqueryMap.$chat);}
                });
            return true;
        }
        // End extend chat slider

        // Begin retract chat slider
        jqueryMap.$chat.animate(
            {height:configMap.chat_retract_height},
            configMap.chat_retract_time,
            function () {
                jqueryMap.$chat.attr(
                    'title',configMap.chat_retracted_title
                );
                stateMap.is_chat_retracted = true;
                if(callback){callback(jqueryMap.$chat);}
            }
        );
        return true;
        // End retract chat slider
    };
    // End DOM method /toggleChat/



    //----------------------------------End Dom Methods----------------------------------

    //--------------------------------Begin Event Methods-------------------------------
    onClickChat = function (event) {
        toggleChat(stateMap.is_chat_retracted);
        return false;
    };

    //--------------------------------End Event Methods-------------------------------


    //--------------------------------Begin Public Methods-------------------------------
    initModule = function ($container) {
        // load HTML and map jQuery collections
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();

        // initialize chat slider and bind click handler
        stateMap.is_chat_retracted = true;
        jqueryMap.$chat
            .attr('title',configMap.chat_retracted_title)
            .click(onClickChat);

        // test toggle
        // setTimeout(function () {toggleChat(true);},3000)
        // setTimeout(function () {toggleChat(false);},8000)
    };
    // End Public method /initModule/
    return {initModule:initModule}
    //--------------------------------End Public Methods-------------------------------
}());
