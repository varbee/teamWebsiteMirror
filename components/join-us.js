'use strict';

import "../assets/css/join-us.scss";
import tpl from "../assets/tpl/join-us.tpl";
$('.join-us').append(tpl());

/*鼠标放上去显示二维码*/

$(function(){
     $('.hxq_footer_wechat').on('mouseover', function(){

        $('.hxq_footer_code').show();

    }),$('.hxq_footer_wechat').on('mouseout', function(){

         $('.hxq_footer_code').hide();

    });
    
})

/* 表单验证 */



