
(function($) {
	    var controller = new ScrollMagic.Controller();
 var updateBox=function(e){
 				var $slideParentElement = $(e.currentTarget.triggerElement()),
 					$slidePrevSibling = $($slideParentElement).parent().next('.scrollmagic-pin-spacer'),
	 		 		$prevParentElement=$('.container.scroll_container',$slideParentElement).closest('.scrollmagic-pin-spacer').prev('.scrollmagic-pin-spacer'),
	 		 		$nextParentElement=$('.container.scroll_container',$slideParentElement).closest('.scrollmagic-pin-spacer').next('.scrollmagic-pin-spacer'),
	 		 		$slidePrevImg = $('.brief-img_in img' ,$prevParentElement),
	 		 		$slidePrevContent = $('.desc_product' ,$prevParentElement),
	 		 		$slideImg = $('.brief-img_in img', $slideParentElement),	 
	 		 		$slideContent = $('.desc_product',$slideParentElement),
	 		 		$slideNextImg = $('.brief-img_in img' ,$nextParentElement),
	 		 		$slideNextContent = $('.desc_product' ,$nextParentElement),
	 		 		$slideNav = $("#slide-nav"),	
	 		 		$getParentId = $slideParentElement.attr('id'),
	 		 		$getprevParentId = $slidePrevSibling.attr('id');
	 		 		console.log($slidePrevSibling);
console.log(e.type)
					// console.log($getParentId);

					if(e.type==="enter"){
					$slideNav.removeClass('hide-nav');
					$slideNav.addClass('show-nav');
					
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
			 		for(var i=1;i<=4;i++){

						if($getParentId == "slide0"+i)
						{
							$('#slide-nav a').removeClass('active-nav');
							$('#carsl'+i).addClass('active-nav');
							// return;
						}
						// $('#carsl'+i).off().on('click',function(e){
						// 	e.preventDefault();
						// 	$('#carsl'+i).addClass('active-nav');
						// });
					}
			 	}
			 	if(e.type==="leave"){
			 		// console.log($getprevParentId);
			 			$slideNav.removeClass('hide-nav');
						$slideNav.addClass('show-nav');

						$slideContent.removeClass("fadeInDownBig");
						$slideContent.addClass("fadeOutDownBig");
						$slideImg .removeClass("zoomIn");
						$slideImg .addClass("zoomOut");

						$slidePrevContent.addClass("fadeInDownBig");
						$slidePrevContent.removeClass("fadeOutDownBig");
						$slidePrevImg.addClass("zoomIn");
						$slidePrevImg.removeClass("zoomOut");	
					 	$('.container.scroll_container',$prevParentElement).removeClass('zero-opacity');
					 	for(var i=1;i<=4;i++){
							// console.log($getParentId );
						if($getParentId == "slide0"+i)
							{
								i= i-1;
								$('#slide-nav a').removeClass('active-nav');
								$('#carsl'+i).addClass('active-nav');
								return;
							}
							// $('#carsl'+i).click(function(){
							// $('#carsl'+i).addClass('active-nav');
							// });
						}
			 	}
	}

	var initScrollMagic=function(controller){
			$.each($('.slide'),function(index,widget){
					var elementId="#"+$(widget).attr('id'),
						scene = new ScrollMagic.Scene({triggerElement: elementId,triggerHook: "onStart"});
						scene.addIndicators(); 
						scene.on("enter leave",updateBox);
						scene.setPin(elementId);
						scene.addTo(controller);
			});
	

				//  bind scroll to anchor links
			$('#slide-nav').find('a.indicator-link').on("click", function (e) {
					var id = $(this).attr("href");
					if ($(id).length > 0) {
							e.preventDefault();
							controller.scrollTo(id);
							if (window.history && window.history.pushState) {
									history.pushState("", document.title, id);
							}
					}
			});
		}

		initScrollMagic(controller);

})(jQuery);