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
            <div class="spa-chat">
                <div class="spa-chat-head">
                    <div class="spa-chat-head-toggle">+</div>
                    <div class="spa-chat-head-title">
                        Chat
                    </div>
                </div>
                <div class="spa-chat-closer">x</div>
                <div class="spa-chat-sizer">
                    <div class="spa-chat-msgs"></div>
                    <div class="spa-chat-box">
                        <input type="text">
                        <div>send</div>
                    </div>
                </div>
            </div>
            `,
           settable_map:{
               slider_open_time:true,
               slider_close_time:true,
               slider_opened_em:true,
               slider_closed_em:true,
               slider_opened_title:true,
               slider_closed_title:true,
               chat_model:true,
               people_model:true,
               set_chat_anchor:true
           },
           slider_open_time:250,
           slider_close_time:250,
           slider_opened_em:18,
           slider_closed_em:2,
           slider_opened_min_em:10,
           windiw_height_min_em:20,
           slider_opened_title:'点击关闭',
           slider_closed_title:'点击打开',
           chat_model:null,
           people_model:null,
           set_chat_anchor:null
       },
       stateMap = {
       $container:null,
           $append_target:null,
           position_type:'closed',
           px_per_em:0,
           slider_hidden_px:0,
           slider_closed_px:0,
           slider_opened_px:0,
       },
       jqueryMap = {},
       setJqueryMap,getEmSize,setPxSizes,setSliderPosition,
       onClickToggle,configModule,initModule,
       removeSlider, handleResize
        ;
    // ----------------------- 结束-模块全局变量 ---------------------

    // ------------------------- 开始-工具类方法 ------------------------
    getEmSize = function (elem) {
        return Number(
            getComputedStyle(elem,'').fontSize.match(/\d*\.?\d*/)[0]
        );
    };

    // ------------------------- 结束-工具类方法 ------------------------


    // ------------------------- 开始-DOM-方法 ------------------------
    // Begin Dom method /setJqueryMap/
    setJqueryMap = function () {
        var
            $append_target = stateMap.$append_target,
            $slider = $append_target.find('.spa-chat');

        jqueryMap = {
            $slider : $slider,
            $head:    $slider.find('.spa-chat-head'),
            $toggle:  $slider.find('.spa-chat-head-toggle'),
            $title:   $slider.find('.spa-chat-head-title'),
            $sizer:   $slider.find('.spa-chat-head-sizer'),
            $msgs:    $slider.find('.spa-chat-msgs'),
            $box:     $slider.find('.spa-chat-box'),
            $input:   $slider.find('.spa-chat-input input[type=text]')
        }
    };
    // End Dom method /setJqueryMap/

    // Begin DOM method /setPxSizes/
    setPxSizes = function () {
        var px_per_em,window_height_em,opened_height_em;
        px_per_em = getEmSize(jqueryMap.$slider.get(0));
        window_height_em = Math.floor(
            ($(window).height() / px_per_em) + 0.5
        );

        opened_height_em
            = window_height_em > configMap.slider_opened_em
            ? configMap.slider_opened_em
            : configMap.slider_opened_min_em;

        stateMap.px_per_em = px_per_em;
        stateMap.slider_closed_px = configMap.slider_closed_em * px_per_em;
        stateMap.slider_opened_px = opened_height_em * px_per_em;
        jqueryMap.$slider.css({
           height:(opened_height_em -2 ) * px_per_em
        });
    };
    // End Dom method /setPxSizes/

    // Begin DOM method /setSliderPosition/
    setSliderPosition = function (position_type,callback) {
        var
            height_px,animate_time,slider_title,toggle_text;
        //
        if(stateMap.position_type === position_type){
            return true;
        }
        debugger;
        // prepare animate parameters
        switch (position_type){
            case 'opened':
                height_px = stateMap.slider_opened_px;
                animate_time = configMap.slider_open_time;
                slider_title = configMap.slider_opened_title;
                toggle_text = '=';
                break;
            case 'hidden':
                height_px = 0;
                animate_time = configMap.slider_open_time;
                slider_title = '';
                toggle_text = '+';
                break;
            case 'closed':
                height_px = stateMap.slider_closed_px;
                animate_time = configMap.slider_close_time;
                slider_title = configMap.slider_closed_title;
                toggle_text = '+';
                break;
            default: return false;
        }
        // animate slider position change
        stateMap.position_type = '';
        jqueryMap.$slider.animate(
            {height:height_px},
            animate_time,
            function () {
                jqueryMap.$toggle.prop('title',slider_title);
                jqueryMap.$toggle.text(toggle_text);
                stateMap.position_type = position_type;
                if(callback){
                    callback(jqueryMap.$slider);
                }
            }
        )
    };
    // End Dom method /setSliderPosition/

    // ------------------------- 结束-DOM-方法 ------------------------

    // --------------------------Begin Event Handlers--------------------
    onClickToggle = function (event) {
        var set_chat_anchor = configMap.set_chat_anchor;
        if(stateMap.position_type === 'opened'){
            set_chat_anchor('closed');
        } else if(stateMap.position_type === 'closed'){
            set_chat_anchor('opened');
        }
        return false;
    };
    // --------------------------End Event Handlers--------------------

    // ------------------------------开始-公共方法-------------------------------

    // Begin public method /configModule/
    // Example  : spa.chat.configModule({ slider_open_em : 18 })
    // Arguments :
    configModule = function (input_map) {
        spa.util.setConfigMap({
            input_map:input_map,
            settable_map:configMap.settable_map,
            config_map:configMap
        });
        return true;
    };
    // Begin public method /setSliderPosition/
    //
    // Example: spa.chat.setSliderPosition('closed');





    // Begin public method /initModule/
    // Example   : spa.chat.initModule($('#div_id'))
    // Purpose   : Directs Chat to offer its capability to the user
    // Arguments :
    //      * $append_target
    initModule = function ($append_target) {
        $append_target.append(configMap.main_html);
        stateMap.$append_target = $append_target;
        setJqueryMap();
        setPxSizes();

        // initialize chat slider to default title and state
        jqueryMap.$toggle.prop('title',configMap.slider_closed_title);
        jqueryMap.$head.click(onClickToggle);
        stateMap.position_type = 'closed';
        return true;
    };

    // Begin public method /removeSlider/
    // Purpose:
    //

    removeSlider = function () {
        // unwind initialization and state
        // remove DOM container;  this removes event bingdings too
        if(jqueryMap.$slider){
            jqueryMap.$slider.remove();
            jqueryMap = {};
        }
        stateMap.$append_target = null;
        stateMap.position_type = 'closed';
        // unwind key configurations
        configMap.chat_model = null;
        configMap.people_model = null;
        configMap.set_chat_anchor = null;

        return true;
    };
    // End public method /removeSlider/

    // Begin public method /handleResize/
    handleResize = function () {
        // don't do anything if we don't have a slider container
        if( ! jqueryMap.$slider ){ return false; }

        setPxSizes();
        if(stateMap.position_type === 'opened'){
            jqueryMap.$slider.css({height:stateMap.slider_opened_px});
        }
        return true;
    };
    // End public method /handleResize/

    return {
        setSliderPosition:setSliderPosition,
        configModule:configModule,
        initModule:initModule,
        removeSlider:removeSlider,
        handleResize:handleResize
    }
    // ------------------------------结束-公共方法-------------------------------
}());