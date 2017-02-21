'use strict';

import "../assets/css/members.scss";
import tpl from "../assets/tpl/members.tpl";

$('.members').append(tpl());

$(function () {
	function scrollFunc(e) {
        e = e || window.event;
        if (e.wheelDelta || e.detail) {  //判断浏览器IE，谷歌滑轮事件
			if ($('.members').hasClass('swiper-slide-active')) {
				$('.picture').addClass('show-picture');
			}
			else {
				$('.picture').removeClass('show-picture');
			}
        } 
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc; 

    $('.swiper-pagination-bullet').click(function () {
    	if ($('.members').hasClass('swiper-slide-active')) {
				$('.picture').removeClass('show-picture');
			}
			else {
				$('.picture').addClass('show-picture');
			}
    });

});