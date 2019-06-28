/*
*  spa.shell.js
*  Shell module for SPA
* */

spa.shell = (function () {
    //-----------------------Begin Module scope variables-------------------------
    var
        configMap = {
            anchor_schema_map:{
                chat:{ opened:true,closed:true }
            },
            main_html:`
             <div class="spa-shell-head">
                <div class="spa-shell-head-logo">
                    <h1>SPA</h1>
                    <p>javascript end to end</p>
                </div>
                <div class="spa-shell-head-acct"></div>
                <div class="spa-shell-head-search"></div>
            </div>
            <div class="spa-shell-main">
                <div class="spa-shell-main-nav"></div>
                <div class="spa-shell-main-content"></div>
            </div>
            <div class="spa-shell-foot"></div>
            <!--<div class="spa-shell-chat"></div>-->
            <div class="spa-shell-modal"></div>
            `,
            resize_interval:200
        },
        stateMap = {
            $container:undefined,
            anchor_map:{},
            resize_idto:undefined
            // is_chat_retracted: true
        },
        jqueryMap = {},
        copyAnchorMap,setJqueryMap,
        changeAnchorPart, onHashChange,
        onTapAcct,onLogin, onLogout, onResize,
        setChatAnchor, initModule;
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
            $acct: $container.find('.spa-shell-head-acct'),
            $nav:$container.find('.spa-shell-main-nav')
            // $chat:$container.find('.spa-shell-chat')
        };
    };
    // End Dom method  /changeAnchorPart/
    // Purpose : Changes part of the URI anchor component
    // Arguments:
    //      * arg_map - The map describing what part of the URI anchor we want changed

    changeAnchorPart = function (arg_map) {
        console.log(arg_map);
        var
            anchor_map_revise = copyAnchorMap(),
            bool_return = true,
            key_name, key_name_dep;

        // Begin merge changes into anchor map
        KBYVAl:
        for( key_name in arg_map ){
            if(arg_map.hasOwnProperty(key_name)){

                // skip dependent keys during iteration
                if(key_name.indexOf('_')===0){
                    continue KBYVAl;
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
            _s_chat_previous,_s_chat_proposed,s_chat_proposed,
            anchor_map_proposed,
            is_ok = true,
            anchor_map_previous = copyAnchorMap();

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
                    // toggleChat(true);
                    is_ok = spa.chat.setSliderPosition('opened');
                    break;
                case 'closed':
                    // toggleChat(false);
                    is_ok = spa.chat.setSliderPosition('closed');
                    break;
                default:
                    spa.chat.setSliderPosition('closed');
                    // toggleChat(false);
                    delete anchor_map_proposed.chat;
                    $.uriAnchor.setAnchor(anchor_map_proposed,null,true);
            }
        }
        // End adjust chat component if changed

        // Begin revert anchor is slider change denied
        if(!is_ok){
            if(anchor_map_previous){
                $.uriAnchor.setAnchor(anchor_map_previous,null,true);
                stateMap.anchor_map =anchor_map_previous;
            } else {
                delete anchor_map_proposed.chat;
                $.uriAnchor.setAnchor(anchor_map_proposed,null,true);
            }
        }
        // End revert anchor if slider change denied
        return false;
    };
    // End Event handler /onHashChange/


    // Begin Event handler /onResize/
    onResize = function () {
        if(stateMap.resize_idto){return true;}

        spa.chat.handleResize();
        stateMap.resize_idto = setTimeout(function () {
            stateMap.resize_idto = undefined;
        },configMap.resize_interval);
        return true;
    };
    // End Event handler /onResize/

    onTapAcct = function (event) {
        var acct_text, user_name, user = spa.model.people.get_user();
        if( user.get_is_anon()){
            user_name = prompt( '请登录' );
            spa.model.people.login( user_name );
            jqueryMap.$acct.text( '... 加载中 ...' );
        } else {
            spa.model.people.logout();
        }
        return false;
    };
    onLogin = function (event, login_user) {
        jqueryMap.$acct.text(login_user.name);
    };
    onLogout = function (event,logout_user) {
        jqueryMap.$acct.text('请登录');
    };

    //-----------------------------End Event Handlers------------------------------

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


    //--------------------------------Begin CallBacks-------------------------------

    // Begin callback method /setChatAnchor
    setChatAnchor = function (position_type) {
        console.log(11);
        console.log(position_type);
        return changeAnchorPart({chat:position_type});
    };
    // End callback method /setChatAnchor

    //--------------------------------End CallBacks-------------------------------




    //--------------------------------Begin Public Methods-------------------------------
    // 开始公共方法   /initModule/
    initModule = function ($container) {
        // load HTML and map jQuery collections
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();

        // configure uriAnchor to use our schema
        $.uriAnchor.configModule({
            schema_map:configMap.anchor_schema_map
        });

        // 配置且初始化功能模块
        spa.chat.configModule({
            set_chat_anchor:setChatAnchor,
            chat_model:spa.model.chat,
            people_model:spa.model.people
        });
        spa.chat.initModule(jqueryMap.$container);


        // Handle URI anchor  change events

        $(window)
            .bind('resize',onResize)
            .bind('hashchange',onHashChange)
            .trigger('hashchange');

        $.gevent.subscribe($container,'spa-login',onLogin);
        $.gevent.subscribe($container,'spa-logout',onLogout);

        jqueryMap.$acct
            .text('请登录')
            .bind('utap',onTapAcct);
        // initialize chat slider and bind click handler
        // stateMap.is_chat_retracted = true;
        // jqueryMap.$chat
        //     .attr('title',configMap.chat_retracted_title)
        //     .click(onClickChat);

        // test toggle
        // setTimeout(function () {toggleChat(true);},3000)
        // setTimeout(function () {toggleChat(false);},8000)
    };
    // End Public method /initModule/
    return {initModule:initModule}
    //--------------------------------End Public Methods-------------------------------
}());
