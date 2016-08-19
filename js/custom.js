//js
$(function(){


				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
	
		   
		   
		    /* Page Scroll to id fn call */
        $(".navbar-nav li a, .navbar-brand").mPageScroll2id({
          highlightSelector:".active"
        });



	
	
	
	$('#testimonials-slider').bxSlider({
 
  slideMargin: 5,
  auto:true,
  pager:false,
  
   nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: '<i class="fa fa-angle-right"></i>',
  prevText: '<i class="fa fa-angle-left"></i>'
});
	
$('.class-details:first').show();
	
$('.class-category').hover(function(){
		
		
		$('.class-details').hide();
		
		$(this).find('.class-details').show();
		
		return false;
		
		
		
	})
	
	




	//contact form

	$('.error').hide();

	$('#submit_btn').click(

	function(){

		$('.error').hide();

		

		var name = $('input#name').val();

		if(name==''){

			$('label#name_error').show()

			$('input#name').focus();

			return false;

			}

											

		var email = $('input#email').val();

		if(email == ''){

			$('label#email_error').show();

			$('input#email').focus();

			return false;

			}
			



		var view=$('textarea#view').val();



		var dataString = 'name='+ name + '&email=' + email + '&view='+ view;

		//alert (dataString);return false;

		

		$.ajax({

			type: "POST",

			url: "submit.php",

			data: dataString,

			success: function() {

				$('#secondry').html("<div id='form-submit' class='text-center'></div>");

				$('#form-submit').html("<h2 class='sect-tittle red text-center'>Contact Form Submitted!</h2>")

				.append("<p style='color:#000; font-size:18px;'></p>")

				.hide()

				.fadeIn(1500, function() {

					$('#form-submit').append('<i style="color:green" class="fa fa-check fa-4x green-icon" aria-hidden="true"></i>');

					});

					}

				});

				return false;

			});

		








});


	



$(window).load(function(){
	
	//var doc_height = $('.hero').height();
	
	//$('.v-center').css({height:doc_height+'px'});
	
	$('.match').matchHeight();
	
	$('#hero-slider').show();
	
	$('.progress').hide();
	
	
	$('#slider').bxSlider({
  mode: 'fade',
  slideMargin: 5,
  auto:true
});
	  
	
	
	
	
	
});