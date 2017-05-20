
$(document).ready(function(){ 


	$("#uw").delay("200").fadeIn(1000);
	$("#between").delay("400").fadeIn(1000);
	$("#syde").delay("600").fadeIn(1000);

	$("#linkedin").delay("800").fadeIn(1000);
	$("#github").delay("1000").fadeIn(1000);
	$("#resume").delay("1200").fadeIn(1000);

	function bobble() {
	  $(".arrow").animate({
	  	width: '35px'
	  }, "slow");
	  $(".arrow").animate({
	  	width: '30px'
	  }, "slow");
	}
	bobble();
	setInterval(bobble, 50);

	$("#headerarrow").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".about").offset().top
	    }, 1000);
	});

	$("#aboutarrow").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".projects").offset().top
	    }, 1000);
	});

	$("#projectsarrow").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".blog").offset().top
	    }, 1000);
	});

	var fidgetClicked = false;
	var goodtasteClicked = false;
	var twistnliftClicked = false;

	$(".fidget").click(function(){
		if(fidgetClicked){
			$(".twistnlift").show();
			$(".goodtaste").show()
			resetAll();
		}else{
			if($(window).width() < 1300){
				$(".twistnlift").hide();
				$(".goodtaste").hide()
			}
			resetAll();
			$(this).css("opacity", "0.5")
			$(".fidgets").show();
			fidgetClicked = true;
		}
	});

	$(".goodtaste").click(function(){
		console.log($(window).width());
		if(goodtasteClicked){
			$(".twistnlift").show();
			$(".fidget").show()
			resetAll();
		}else{
			if($(window).width() < 1300){
				$(".twistnlift").hide();
				$(".fidget").hide()
			}
			resetAll();
			$(this).css("opacity", "0.5")
			$(".goodtastes").show();
			goodtasteClicked = true;
		}
	});

	$(".twistnlift").click(function(){
		if(twistnliftClicked){
			$(".fidget").show();
			$(".goodtaste").show()
			resetAll();
		}else{
			if($(window).width() < 1300){
				$(".goodtaste").hide();
				$(".fidget").hide()
			}
			resetAll();
			$(this).css("opacity", "0.5")
			$(".twistnlifts").show();
			twistnliftClicked = true;
		}
	});

	function resetAll(){
		$(".fidgets").hide();
		$(".twistnlifts").hide();
		$(".goodtastes").hide();

		fidgetClicked = false;
		goodtasteClicked = false;
		twistnliftClicked = false;

		$(".fidget").css("opacity", "1");
		$(".goodtaste").css("opacity", "1");
		$(".twistnlift").css("opacity", "1");

	}

	// Changing the defaults
	window.sr = ScrollReveal({ reset: true });

	// Customizing a reveal set
	sr.reveal('.diamond', { duration: 1500 }, 200);

	sr.reveal('hr', {duration: 1000, scale: 0.5, origin: 'left'});

});