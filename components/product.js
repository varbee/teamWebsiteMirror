'use strict';

import "../assets/css/product.scss";
import tpl from "../assets/tpl/product.tpl";

$('.product').append(tpl());


$(function(){

	var fn = function() {
		var $img= $(".back"),
			$mask = $(".mask"), 
			$porItem = $(".product-item"),
			w = $mask.offset().left;
			
			console.log($img);
			console.log(w);
			console.log($mask);
			console.log($porItem);

			
			$img.click(function(){

				var $indexWidth = $(this).offset().left;
					
					console.log($indexWidth);

				if($indexWidth > 1210 || $indexWidth < 730 && $indexWidth > 720 || $indexWidth < -60){
					$porItem.animate({left: "-50%"},300);
				}
				if($indexWidth > 1190 && $indexWidth < 1210 || $indexWidth < 650 && $indexWidth > 640 ){
					$porItem.animate({left: "-100%"},300);
				}
				if($indexWidth < 100 &&  $indexWidth> -60){
					$porItem.animate({left: "0"},300);
				}
				
			})

			
	}
	fn();
})