'use strict';

import "../assets/css/product.scss";
import tpl from "../assets/tpl/product.tpl";

$('.product').append(tpl());


$(function(){

	var fn = function() {
		var $img= $(".back"),
			$mask = $(".mask"), 
			$porItem = $(".product-item"),
			w = $mask.offset().left,
			winWidth = $(window).width(),
			center = winWidth/2;
			


			$img.click(function(){
			var $indexWidth = $(this).offset().left,
				right = $indexWidth-center,
				left = center + $indexWidth;	
					console.log("$indexWidth" +$indexWidth);
					console.log("winWidth"+winWidth);
					console.log("center"+center);
					console.log("right"+right);
					console.log("left"+left);

				if(right > center-80 && right < center 
					|| left < center - 72){
					$porItem.animate({left: -center},300);
				}else if(right < 0 || left < center && left > center - 70){
					$porItem.animate({left: 0 },300);
				}else if (right < center-80) {
					$porItem.animate({left: -winWidth},300);
				}
				
				
			})

			
	}
	fn();
})