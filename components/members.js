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

    //核心成员
    var currentMember = 0,
    nextMember = 0,

    $Members = null,
    $showMember = null,
    $currentMember = null,
    $nextMember = null;

    $('.swiper-pagination-bullet').click(function () {
    	if ($('.members').hasClass('swiper-slide-active')) {
				$('.picture').removeClass('show-picture');
			}
			else {
				$('.picture').addClass('show-picture');
			}
    });

    $('.main-members').click(function () {
        //改变背景
        $('.members').css("background-color","#333");
        $('.members-page').addClass('members-down').removeClass('members-top');

        //显示导航
        $('.members-info > nav').addClass('show-nav');
        //显示详细介绍
        $Members = $('.members-info').children('div');
        $showMember = $('.members-info').find("[data-panel='" + $( this ).data( 'panel' ) + "']");
        $showMember.addClass('show-active');
        
        
    });
    //nextPerson
        $('.next-members').click(function () {
            currentMember = $('.show-active').index();
            $currentMember = $Members.eq(currentMember);
            nextMember = currentMember < 3? currentMember + 1 : 0 ;
            $nextMember = $Members.eq(nextMember);
            
            $currentMember.removeClass('show-active').addClass('show-down').removeClass('show-down');
            $nextMember.addClass('show-active');
        });
        //关闭页面
        $('.members-close').click(function () {
            $('.members-page').removeClass('members-down').addClass('members-top');
            $('.members').css("background-color","#99deed");
            $('.members-info > div').removeClass('show-active');
            $('.members-info > nav').removeClass('show-nav');
        });
    

});