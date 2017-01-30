
(function($) {
	    var controller = new ScrollMagic.Controller();
 var updateBox=function(e){
 	var $slideParentElement = $(e.currentTarget.triggerElement()),
	 		 		$prevParentElement=$('.container.scroll_container',$slideParentElement).closest('.scrollmagic-pin-spacer').prev('.scrollmagic-pin-spacer'),
	 		 		$nextParentElement=$('.container.scroll_container',$slideParentElement).closest('.scrollmagic-pin-spacer').next('.scrollmagic-pin-spacer'),
	 		 		$slidePrevImg = $('.brief-img_in img' ,$prevParentElement),
	 		 		$slidePrevContent = $('.desc_product' ,$prevParentElement),
	 		 		$slideImg = $('.brief-img_in img', $slideParentElement),	 
	 		 		$slideContent = $('.desc_product',$slideParentElement),
	 		 		$slideNextImg = $('.brief-img_in img' ,$nextParentElement),
	 		 		$slideNextContent = $('.desc_product' ,$nextParentElement);	
console.log(e.type)
				if(e.type==="enter"){
					
					$slideParentElement.removeClass('hide-div');
			 		$('.container.scroll_container').addClass('zero-opacity');
			 		$slideContent.addClass("fadeInDownBig");
					$slideContent.removeClass("fadeOutDownBig");
					$slideImg .addClass("zoomIn");
					$slideImg .removeClass("zoomOut");

					$slidePrevContent.removeClass(" fadeInDownBig");
					$slidePrevContent.addClass("fadeOutDownBig");
					$slidePrevImg.removeClass("zoomIn");
					$slidePrevImg.addClass("zoomOut");	
			 		$('.container.scroll_container',e.currentTarget.triggerElement()).removeClass('zero-opacity');
			 	}
			 	if(e.type==="leave"){
						$slideContent.removeClass("fadeInDownBig");
						$slideContent.addClass("fadeOutDownBig");
						$slideImg .removeClass("zoomIn");
						$slideImg .addClass("zoomOut");

						$slidePrevContent.addClass("fadeInDownBig");
						$slidePrevContent.removeClass("fadeOutDownBig");
						$slidePrevImg.addClass("zoomIn");
						$slidePrevImg.removeClass("zoomOut");	
					 	$('.container.scroll_container',$prevParentElement).removeClass('zero-opacity');					 		
			 	}
	}

	var someFunc=function(controller){
		var slider1 = new ScrollMagic.Scene({triggerElement: "#slide01"});
					// var tween1 = new TimelineLite();
					// tween1.from("#img1-slide" ,0.4, {scale: 0});
					// tween1.from("#content1-slide",0.4, {top: -700, opacity: 0},'-=0.4');
					slider1.addIndicators(); 
					slider1.setPin("#slide01");
					slider1.on("enter leave",updateBox);
					//slider1.setTween(tween1);
					
					slider1.addTo(controller);
	var slider2 = new ScrollMagic.Scene({triggerElement: "#slide02"});
					// var tween2 = new TimelineLite();
					// tween2.from("#img2-slide" ,0.4, {scale: 0});
					// tween2.from("#content2-slide",0.4, {top: -700, opacity: 0},'-=0.4');
					slider2.addIndicators(); 
					//slider2.setTween(tween2);
					slider2.on("enter leave", updateBox);
					//slider2.triggerHook(0.3);
					slider2.setPin("#slide02");
					slider2.addTo(controller);
	var slider3 = new ScrollMagic.Scene({triggerElement: "#slide03"});
					// var tween3 = new TimelineLite();
					// tween3.from("#img3-slide" ,0.4, {scale: 0});
					
					// tween3.from("#content3-slide", 0.4, {top: -700, opacity: 0},'-=0.4');
					//slider3.setTween(tween3);
					slider3.addIndicators(); 
					// slider3.triggerHook(0.3);
					slider3.on("enter leave", updateBox);
					slider3.setPin("#slide03");
					slider3.addTo(controller);
	var slider4 = new ScrollMagic.Scene({triggerElement: "#slide04"});
					// var tween4 = new TimelineLite();
					// tween4.from("#img4-slide" ,0.4, {scale: 0});

					// tween4.from("#content4-slide", 0.4, {top: -700, opacity: 0},'-=0.4');
					slider4.addIndicators(); 
					//slider4.setTween(tween4);
					//slider4.triggerHook(0.3);
					slider4.on("enter leave", updateBox);
					slider4.setPin("#slide04");
					slider4.addTo(controller);
	}
		someFunc(controller);

})(jQuery);