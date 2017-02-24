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

$(function(){
	$("#join-us").validate({
		debug: true,
		rules: {
			name: {
				required: true,
				minlenghth: 4
			},
			school: {
				required: true,
				minlenghth: 8
			},
			grade: {
				required: true,
				maxlenghth:  16
			},
			tel: {
				required: true,
				length:  11
			},
			group: {
				required: true
			},
			selfIntro: {
				required: true,
				minlenghth: 30
			}
		},
		messages: {
			name: {
				required: "请输入姓名",
				minlenghth: "至少输入两个字"
			},
			school: {
				required: "请输入学校",
				minlenghth: "至少输入4个字"
			},
			grade: {
				required: "请输入年级",
				maxlenghth:  "不超过16个字"
			},
			tel: {
				required: "请输入电话号码",
				length:  "不超过11位数"
			},
			group: {
				required: "请选择报名组别"
			},
			selfIntro: {
				required: "请填写自我介绍",
				minlenghth: "至少30字"
			}			
		}
	
	});
})

