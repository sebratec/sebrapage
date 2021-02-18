document.getElementById("LangTrigger").onclick = function() {ToggleLangMenu()};

function ToggleLangMenu() {
  var ToggleMenu = document.getElementById("LangSelect");
  
if (ToggleMenu.style.display === "block") {
    ToggleMenu.style.display = "none";
  } else {
    ToggleMenu.style.display = "block";
  }
}

var elements = ".s1, .s2, .s3"
var images = ".image1, .image2, .image3"
function myFn() {
	if ($('.s1').hasClass('active')) {
		$(elements).removeClass("active");
    	$(".s2").addClass("active");	
        $(".image1").animate({left: '-110vw'});
		$(".image2, .image3").animate({left: '0vw'});
    } else if ($('.s2').hasClass('active')) {
      	$(elements).removeClass("active");
    	$(".s3").addClass("active");
		$(".image1, .image2").animate({left: '-110vw'});
		$(".image3").css("left", "0px");
    } else {
    	$(elements).removeClass("active");
    	$(".s1").addClass( "active" );
    	$(images).animate({left: '0vw', opacity: 1});
    }
}
//This sets slider time to 7sec. You can increase/decrease as you wish
myTimer = setInterval(myFn, 7000);

$(".results").hide();

$(document).ready(function(){	
	//SHOWS THE RESULTS WHENEVER THE SEARCHBAR AREA IS CLICKED
	$(".SearchBar, .result").click(function () {
		$(".results").show();
	});

	$(".SearchBar, .results").focusout(function () {
		$(".results").hide();
	});

	$(".main-action, .scroll-to-courses").click(function() {
		document.querySelector('.CourseCategories').scrollIntoView({behavior: 'smooth' });
	})

	//Primeiro um RESET
	$(images).css({left: '0vw', opacity: 1});

	//DA FOCO AO PRIMEIRO SLIDE
    $(".s1").click(function(){
		clearInterval(myTimer);
		myTimer = setInterval(myFn, 7000);
		$(elements).removeClass("active");
    	$(".s1").addClass( "active" );
    	$(images).animate({left: '0vw', opacity: 1});
    });

	// DA FOCO AO SEGUNDO SLIDE
	$(".s2").click(function(){
		clearInterval(myTimer);
		myTimer = setInterval(myFn, 7000);
		$(elements).removeClass("active");
    	$(".s2").addClass("active");	
        $(".image1").animate({left: '-110vw'});
		$(".image2, .image3").animate({left: '0vw'});
    });

	//DA FOCO AO TERCEIRO SLIDE
	$(".s3").click(function(){
		clearInterval(myTimer);
		myTimer = setInterval(myFn, 7000);
		$(elements).removeClass("active");
    	$(".s3").addClass("active");
		$(".image1, .image2").animate({left: '-110vw'});
		$(".image3").css("left", "0px");
	 });
});
