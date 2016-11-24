(function($) {
 
    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    $("#product_brief .slide").each(function() {
 
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
 //    // .addIndicators({
 //    colorStart: "rgba(255,255,255,0.5)",
 //    colorEnd: "rgba(255,255,255,0.5)", 
 //    colorTrigger : "rgba(255,255,255,1)",
 //    name:name
	// }) 
	.loglevel(3)
    .addTo(ctrl);
 
	});
 
 var wh = window.innerHeight;
 
new ScrollMagic.Scene({
  offset: wh*3
})
.setClassToggle("#container4", "is-active")
.addTo(ctrl);

// trans
	var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 600}});

	// $("#product_brief.slide").each(function(){
	// 	var tween = TweenMax.from($this, 0.3, {autoAlpha:0,scale:0.5,y:'+=30', ease:Linear.easeNone});
	// 	//build scene
	// 	var scene=new ScrollMagic.Scene({
	// 	triggerElement:this
	// 	})
	// 	.triggerHook(0)
	// 	.setTween(tween)
	// 	.addTo(controller);


	// });

	// build scenes
	var slider1 = new ScrollMagic.Scene({triggerElement: "#slide01"});
					slider1.setClassToggle("#carsl1", "active-nav"); // add class toggle
					slider1.on("enter", function(e){
					// $("#slide01").waypoint(function(direction){
					// 	if (direction === 'down')
					// 	{
						// alert(e);
						$("#slide01").removeClass("hide-div");
						
						$("#slide01").addClass("show-div");
						$("#content1-slide").addClass("fadeInRightBig");
						$("#content1-slide").removeClass("rotateOutDownLeft");
						$("#img1-slide").addClass("zoomIn");
						$("#img1-slide").removeClass("zoomOut");
						// }else
						// return;
					// });
					});
					slider1.on("leave", function(){
						$("#content1-slide").removeClass("fadeInRightBig");
						$("#content1-slide").addClass("rotateOutDownLeft");
						$("#img1-slide").addClass("zoomOut");
						$("#img1-slide").removeClass("zoomIn");
					});
					slider1.triggerHook(0);
					 // slider1.addIndicators(); // add indicators (requires plugin)
					slider1.addTo(controller);
	var slider2 = new ScrollMagic.Scene({triggerElement: "#slide02"});
					slider2.setClassToggle("#carsl2", "active-nav"); // add class toggle
					slider2.on("enter", function(e){
					// $("#slide02").waypoint(function(direction){
					// 	if (direction === 'down')
					// 	{
						$("#content2-slide").addClass("fadeInRightBig");
						$("#content2-slide").removeClass("rotateOutDownLeft");
						
						$("#slide01").removeClass("show-div");
						$("#slide02").removeClass("hide-div");
						$("#slide02").addClass("show-div");
						$("#img2-slide").addClass("zoomIn");
						$("#img2-slide").removeClass("zoomOut");
						// $("#content1-slide").removeClass("fadeInRightBig");
						// $("#content1-slide").addClass("rotateOutDownLeft");
						// $("#img1-slide").addClass("zoomOut");
						// $("#img1-slide").removeClass("zoomIn");
					// 	}else
					// 	return;
					// });	

					});
					slider2.on("leave", function(){
						$("#content2-slide").removeClass("fadeInRightBig");
						$("#content2-slide").addClass("rotateOutDownLeft");
						$("#img2-slide").addClass("zoomOut");
						$("#img2-slide").removeClass("zoomIn");
					});
					slider2.triggerHook(0);
					// slider2.addIndicators(); // add indicators (requires plugin)
					slider2.addTo(controller);
	var slider3 = new ScrollMagic.Scene({triggerElement: "#slide03"});
					slider3.setClassToggle("#carsl3", "active-nav"); // add class toggle
					slider3.on("enter", function(e){
						// $("#slide03").waypoint(function(direction){
						// if (direction === 'down')
						// {
						$("#content3-slide").addClass("fadeInRightBig");
						$("#content3-slide").removeClass("rotateOutDownLeft");
						// $("#slide04").removeClass("show-div");
						$("#slide02").removeClass("show-div");
						$("#slide03").removeClass("hide-div");

						$("#slide03").addClass("show-div");

						$("#img3-slide").addClass("zoomIn");
						$("#img3-slide").removeClass("zoomOut");
						// $("#content2-slide").removeClass("fadeInRightBig");
						// $("#content2-slide").addClass("rotateOutDownLeft");
						// $("#img2-slide").addClass("zoomOut");
						// $("#img2-slide").removeClass("zoomIn");
					// }
					// else
					// 	return;
					// });
						
					});
					slider3.on("leave", function(){
						$("#content3-slide").removeClass("fadeInRightBig");
						$("#content3-slide").addClass("rotateOutDownLeft");
						$("#img3-slide").addClass("zoomOut");
						$("#img3-slide").removeClass("zoomIn");
					});
					
					slider3.triggerHook(0);
					// slider3.addIndicators(); // add indicators (requires plugin)
					slider3.addTo(controller);
	var slider4 = new ScrollMagic.Scene({triggerElement: "#slide04"});
					slider4.setClassToggle("#carsl4", "active-nav"); // add class toggle
					slider4.on("enter", function(e){
						// $("#slide04").waypoint(function(direction){
						// if (direction === 'down' || direction === 'up')
						// {
						
						// $("#content4-slide").removeClass("rotateOutDownLeft");
						$("#slide03").removeClass("show-div");
						$("#slide04").removeClass("hide-div");
						$("#slide04").addClass("show-div");
						$("#img4-slide").removeClass("zoomOut");
						$("#img4-slide").addClass("zoomIn");
						$("#content4-slide").addClass("fadeInRightBig");
						$("#content4-slide").removeClass("rotateOutDownLeft");
						// repeat
						$("#content3-slide").removeClass("fadeInRightBig");
						$("#content3-slide").addClass("rotateOutDownLeft");
						$("#img3-slide").addClass("zoomOut");
						$("#img3-slide").removeClass("zoomIn");
					});
					slider4.on("leave", function(){
						$("#content4-slide").removeClass("fadeInRightBig");
						$("#content4-slide").addClass("rotateOutDownLeft");
						$("#img4-slide").addClass("zoomOut");
						$("#img4-slide").removeClass("zoomIn");
					});

					slider4.triggerHook(0.001);
					// slider4.addIndicators(); // add indicators (requires plugin)
					slider4.addTo(controller);
	

	// for img in-out
	// var ctrl_anim= new ScrollMagic.Controller();
	// // slide 1
	// var slider1=new ScrollMagic.Scene({triggerElement: "#shrinkOut_img1", duration:600});
	// 				slider1.on("start", function(e){
	// 					$("#content1-slide").addClass("fadeInRightBig");
	// 					$("#content1-slide").removeClass("rotateOutDownLeft");
	// 					$("#img1-slide").addClass("zoomIn");
	// 					$("#img1-slide").removeClass("zoomOut");
						
	// 				});
					
	// 				// slider1.on("end", function(e){
	// 				// 	// alert("a");
	// 				// 	$("#content1-slide").removeClass("fadeInRightBig");
	// 				// 	$("#content1-slide").addClass("rotateOutDownLeft");
	// 				// 	$("#img1-slide").addClass("zoomOut");
	// 				// 	$("#img1-slide").removeClass("zoomIn");
	// 				// });
	// 				slider1.addIndicators(); // add indicators (requires plugin)
	// 				slider1.addTo(ctrl_anim);



	// var slider2=new ScrollMagic.Scene({triggerElement: "#shrinkOut_img2", duration:600});
	// 				slider2.on("start", function(e){
	// 					$("#content2-slide").addClass("fadeInRightBig");
	// 					$("#content2-slide").removeClass("rotateOutDownLeft");
	// 					$("#img2-slide").addClass("zoomIn");
	// 					$("#img2-slide").removeClass("zoomOut");
	// 					$("#content1-slide").removeClass("fadeInRightBig");
	// 					$("#content1-slide").addClass("rotateOutDownLeft");
	// 					$("#img1-slide").addClass("zoomOut");
	// 					$("#img1-slide").removeClass("zoomIn");

						
	// 				});
					
	// 				// slider2.on("end", function(e){
	// 				// 	// alert("a");
	// 				// 	$("#content2-slide").removeClass("fadeInRightBig");
	// 				// 	$("#content2-slide").addClass("rotateOutDownLeft");
	// 				// 	$("#img2-slide").addClass("zoomOut");
	// 				// 	$("#img2-slide").removeClass("zoomIn");
	// 				// });
	// 				slider2.addIndicators(); // add indicators (requires plugin)
	// 				slider2.addTo(ctrl_anim);



	// var slider3=new ScrollMagic.Scene({triggerElement: "#shrinkOut_img3", duration:600});
	// 				slider3.on("start", function(e){
	// 					$("#content3-slide").addClass("fadeInRightBig");
	// 					$("#content3-slide").removeClass("rotateOutDownLeft");
	// 					$("#img3-slide").addClass("zoomIn");
	// 					$("#img3-slide").removeClass("zoomOut");
	// 					$("#content2-slide").removeClass("fadeInRightBig");
	// 					$("#content2-slide").addClass("rotateOutDownLeft");
	// 					$("#img2-slide").addClass("zoomOut");
	// 					$("#img2-slide").removeClass("zoomIn");
						
	// 				});
					
	// 				// slider3.on("end", function(e){
	// 				// 	// alert("a");
	// 				// 	$("#content3-slide").removeClass("fadeInRightBig");
	// 				// 	$("#content3-slide").addClass("rotateOutDownLeft");
	// 				// 	$("#img3-slide").addClass("zoomOut");
	// 				// 	$("#img3-slide").removeClass("zoomIn");
	// 				// });
	// 				slider3.addIndicators(); // add indicators (requires plugin)
	// 				slider3.addTo(ctrl_anim);


	// var slider4=new ScrollMagic.Scene({triggerElement: "#shrinkOut_img4", duration:600});
	// 				slider4.on("start", function(e){
	// 					$("#content4-slide").addClass("fadeInRightBig");
	// 					$("#content4-slide").removeClass("rotateOutDownLeft");
	// 					$("#img4-slide").addClass("zoomIn");
	// 					$("#img4-slide").removeClass("zoomOut");
	// 					$("#content3-slide").removeClass("fadeInRightBig");
	// 					$("#content3-slide").addClass("rotateOutDownLeft");
	// 					$("#img3-slide").addClass("zoomOut");
	// 					$("#img3-slide").removeClass("zoomIn");
						
	// 				});
					
	// 				// slider4.on("end", function(e){
	// 				// 	// alert("a");
	// 				// 	$("#content4-slide").removeClass("fadeInRightBig");
	// 				// 	$("#content4-slide").addClass("rotateOutDownLeft");
	// 				// 	$("#img4-slide").addClass("zoomOut");
	// 				// 	$("#img4-slide").removeClass("zoomIn");
	// 				// });
	// 				slider4.addIndicators(); // add indicators (requires plugin)
	// 				slider4.addTo(ctrl_anim);
	// new ScrollMagic.Scene({triggerElement: "#container2", duration:600})
					
	// 				.setClassToggle("#img2-slide", "zoomIn")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#container2", duration:600})
					
	// 				.setClassToggle("#content2-slide", "fadeInRightBig")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#shrinkOut_img2", duration:600})
	// 				.setClassToggle("#img2-slide", "zoomOut")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#shrinkOut_img2", duration:600})
					
	// 				.setClassToggle("#content2-slide", "rotateOutDownLeft")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#container3", duration:600})
					
	// 				.setClassToggle("#img3-slide", "zoomIn")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#container3", duration:600})
					
	// 				.setClassToggle("#content3-slide", "fadeInRightBig")
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#shrinkOut_img3", duration:600})
	// 				.setClassToggle("#img3-slide", "zoomOut")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#shrinkOut_img3", duration:600})
					
	// 				.setClassToggle("#content3-slide", "rotateOutDownLeft")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#container4", duration:600})
					
	// 				.setClassToggle("#img4-slide", "zoomIn")
					
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	// new ScrollMagic.Scene({triggerElement: "#container4", duration:600})
					
	// 				.setClassToggle("#content4-slide", "fadeInRightBig")
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(ctrl_anim);

	


	// // slide 2
	

})(jQuery);