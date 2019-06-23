/*
*  spa.shell.js
*  Shell module for SPA
* */

spa.shell = (function () {
    //-----------------------Begin Module scope variables-------------------------
    var
        configMap = {
            anchor_schema_map:{
                chat:{ open:true,closed:true }
            },
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
            anchor_map:{},
            is_chat_retracted: true
        },
        jqueryMap = {},
        copyAnchorMap,setJqueryMap, toggleChat,
        changeAnchorPart, onHashChange,
        onClickChat, initModule;
    //---------------------- Begin Module scope variables------------------------------

    //--------------------------------Begin Utility Methods-------------------------------
    // Returns copy of stored anchor map; minimizes overhead
    copyAnchorMap = function () {
        return $.extend(true,{},stateMap.anchor_map);
    };
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
    // End Dom method  /changeAnchorPart/
    // Purpose : Changes part of the URI anchor component
    // Arguments:
    //      * arg_map - The map describing what part of the URI anchor we want changed

    changeAnchorPart = function (arg_map) {
        var
            anchor_map_revise = copyAnchorMap(),
            bool_return = true,
            key_name, key_name_dep;

        // Begin merge changes into anchor map
        // KBYVAl:
        for( key_name in arg_map ){
            if(arg_map.hasOwnProperty(key_name)){

                // skip dependent keys during iteration
                if(key_name.indexOf('_')===0){
                    continue ;
                }

                // update independent key value
                anchor_map_revise[key_name] = arg_map[key_name];

                // update matching dependent key
                key_name_dep = '_'+key_name;
                if(arg_map[key_name_dep]){
                    anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
                } else {
                    delete anchor_map_revise[key_name_dep];
                    delete anchor_map_revise['_s'+key_name_dep];
                }
            }
        }
        // End merge changes into anchor map

        // Begin attempt to update URI; revert if not successful
        try{
            $.uriAnchor.setAnchor(anchor_map_revise);
        } catch (error){
            // replace URI with existing state
            $.uriAnchor.setAnchor(stateMap.anchor_map,null,true);
            bool_return = false;
        }
        // End attempt to update URI...
        return bool_return;
    };

    // End Dom method  /onHashCange/
    // Purpose : Changes part of the URI anchor component
    // Arguments:
    //      * arg_map - The map describing what part of the URI anchor we want changed
    onHashChange = function (event) {
        var
            anchor_map_previous = copyAnchorMap,
            anchor_map_proposed,
            _s_chat_previous,_s_chat_proposed,
            s_chat_proposed;
        // attempt to parse anchor
        try{
            anchor_map_proposed = $.uriAnchor.makeAnchorMap();
        } catch (error){
            $.uriAnchor.setAnchor(anchor_map_previous,null,true);
            return false;
        }
        stateMap.anchor_map = anchor_map_proposed;

        // convenience vars
        _s_chat_previous = anchor_map_previous._s_chat;
        _s_chat_proposed = anchor_map_proposed._s_chat;

        // Begin adjust chat component if changed
        if(!anchor_map_previous || _s_chat_previous !== _s_chat_proposed){
            s_chat_proposed = anchor_map_proposed.chat;
            switch (s_chat_proposed){
                case 'open':
                    toggleChat(true);
                    break;
                case 'closed':
                    toggleChat(false);
                    break;
                default:
                    toggleChat(false);
                    delete anchor_map_proposed.chat;
                    $.uriAnchor.setAnchor(anchor_map_proposed,null,true);
            }
        }
        // End adjust chat component if changed
        return false;
    };
    // End Event handler /onHashChange/




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
    // Begin Event handler /onClickChat/
    // onClickChat
    onClickChat = function (event) {
        // if (toggleChat(stateMap.is_chat_retracted)) {
        //     $.uriAnchor.setAnchor({
        //         chat:(stateMap.is_chat_retracted ? 'open':'closed')
        //     });
        // }
        changeAnchorPart({
            chat:(stateMap.is_chat_retracted ? 'open':'closed')
        });

        return false;
    };
    // End Event handler /onClickChat/

    //--------------------------------End Event Methods-------------------------------


    //--------------------------------Begin Public Methods-------------------------------
    // 开始公共方法   /initModule/
    initModule = function ($container) {
        // load HTML and map jQuery collections
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();

        $.uriAnchor.configModule({
            schema_map:configMap.anchor_schema_map
        });

        // 配置且初始化功能模块
        spa.chat.configModule({});
        spa.chat.initModule(jqueryMap.$chat);


        // Handle URI anchor  change events

        $(window)
            .bind('hashchange',onHashChange)
            .trigger('hashchange');

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