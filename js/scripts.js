$(document).ready(function(){
    $("#exploratory-btn").click(function(){
        $("#global-wrapper").slideUp("slow");
		$("#pocket-wrapper").slideUp("slow");
		$("#exploratory-wrapper").toggle("slow");
		
    });
});

$(document).ready(function(){
    $("#global-btn").click(function(){
        $("#exploratory-wrapper").slideUp("slow");
		$("#pocket-wrapper").slideUp("slow");
		$("#global-wrapper").toggle("slow");
    });
});

$(document).ready(function(){
    $("#pocket-btn").click(function(){
        $("#exploratory-wrapper").slideUp("slow");
		$("#global-wrapper").slideUp("slow");
		$("#pocket-wrapper").toggle("slow");
		
    });
});

//SMOOTH SCROLLING
$(document).ready(function() {
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
		event.preventDefault;
		var hash = this.hash;
		
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function(){
			window.location.hash = hash;
		});
	});
});

//SLIDE IN ANIMATION
$(window).scroll(function() {
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;
		
		var winTop = $(window).scrollTop();
		if(pos < winTop + 600) {
			$(this).addClass("slide");
		}
	});
});