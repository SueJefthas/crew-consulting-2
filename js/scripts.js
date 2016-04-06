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