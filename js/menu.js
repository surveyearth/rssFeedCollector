jQuery(function(){
	var hidden = $('.slick-box').hide();
	
		$('a.menu-toggle').click(function(e){
			var part = $($(this).attr('href')).show();
			isShowing = part.is(":visible");
			
			$('h4 a').removeClass('active');
			hidden.hide();
			if (isShowing) {
            part.show();
			
			}
			e.preventDefault();
		}); 
	$('#slickbox1').show();
	});

	$(function() {
    $('h4 a').click(function(e) {
        var $this = $(this);
        
        $('.active').removeClass('active');
        $this.addClass('active');
        e.preventDefault();
		
		});
	});	