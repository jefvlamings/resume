/* Author: Jef Vlamings

*/

// eas
$(function() {
	$("div[class='ability three']").hide();

// Smooth scrolling to anchor points
    $('.nav').bind('click',function(event){
        var $anchor = $(this).find("a");
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });

// keep navigation on top
	$(window).scroll(function(){
		//help
		if($(window).scrollTop() > 250) {
			$('#navigation').css('top', '0px');
			$('#navigation').css('position', 'fixed');
		}
		else {
			$('#navigation').css('position', 'absolute');
			$('#navigation').css('top', '250px');
		}
	});

// Fill array with made choices
    var keuzes = [];
    var loop = function(){
    	var alles= "";
    	for(i=0;i<keuzes.length;i++){
    		alles+= keuzes[i]+ " ";
    	}
    	console.log(alles);
    };
// If six choices are made, show divs
    var six = function(){    	
    	if(keuzes.length === 6){
    		for(i=0;i<keuzes.length;i++){
    			$div = $("div[id='a"+keuzes[i]+"']");
    			$div.show();
    		}
    	}
    	else{
    		for(i=0;i<keuzes.length;i++){
    			$("div[class='ability three']").hide();
    		}
    	}
    }
// If a choice is being clicked, do some magic    
    $('.choice').bind('click',function(event){
        var $keuze = $(this).find('a').attr('id');
        var $temp = $(this);
        // if clicked, add class, if clicked again, remove class
        if(keuzes.length < 6){
	        if($temp.hasClass("clicked")){
	        	$temp.removeClass("clicked");
	        	for (i=0;i<keuzes.length;i++){
	        		if(keuzes[i]===$keuze){
	        			keuzes.splice(i,1);
	        		}
	        	}
	        	loop();
	        }
	        else{
	        	$temp.addClass("clicked");
	        	keuzes.push($keuze);
	        	loop();
	        }
	    }
	    else{
	    	if($temp.hasClass("clicked")){
	        	$temp.removeClass("clicked");
	        	for (i=0;i<keuzes.length;i++){
	        		if(keuzes[i]===$keuze){
	        			keuzes.splice(i,1);
	        		}
	        	}
	        	loop();
	        }
	    }    

        six();

    });

// Make drop-down box go to anchor points
    $("#navigation select").change(function() {
      window.location = $(this).find("option:selected").val();
    });

});



