/*global $*/

$(function(){
	
	//scroll to elementa
	
	$('.fixed-menu li a').click(function(e){
		
		e.preventDefault();
		
		$('html,body').animate({
			
			scrollTop:$('.'+$(this).data('scroll')).offset().top+1
		},1000);
	});
	
	
	
	
	
	//tyrewriter effect
	
	
	var theText=$('.typer').data('text'),
		theTextLength=theText.length,
		n=0,
	theTyper=setInterval(function(){
		
		$('.typer').each(function(){
			
			$(this).html($(this).html()+theText[n]);
		});
		
		n+=1;
		
		if(n>=theTextLength){
			clearInterval(theTyper)
		}
	},400);
	
	
	

	
	
	
	
	
	
	
	
// change theme color
	
	$(".change-color ul li").on('click',function(){
		
		$('body').attr('data-default-color',$(this).data('color'))
	})
	
	
	
	//fixed menu toggle class
	
	
	
	$('.fixed-menu .fa-bars').on('click',function(){
		
		$(this).parent('.fixed-menu').toggleClass('is-visible');
		
		
		
		if($(this).parent('.fixed-menu').hasClass('is-visible')){
			
			$(this).parent('.fixed-menu').animate({
				
				right:0
				
			},500);
			
		$('body').animate({
			
			paddingRight:'240px'
			
		},500);
		

			
		}else{
			
			$(this).parent('.fixed-menu').animate({
				
				right:'-240px'
				
			},500);
			
		$('body').animate({
			
			paddingRight:0
			
		},500);
		}
		
								 							 
								 
	})
	
		
	
});


//preloader
	
	$(window).on("load",function ()
{
	'use strict';
	
	$(".loader").fadeOut(6000,function(){
		
		$("body").css("overflow","auto");
		
		$(this).remove();
		
	});
	    
		
		
		
	//scroll to top
	
	var scrollButton=$('.scroll-top');
	
	$(window).scroll(function(){
		
		$(this).scrollTop()>=500? scrollButton.fadeIn():scrollButton.fadeOut();
	})
	
	
	scrollButton.click(function(){
		
		$("html,body").animate({
			scrollTop:0
		},600);
	})
	
	
	
	
		
		

		});