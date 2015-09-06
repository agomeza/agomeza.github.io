$( document ).ready(function() {
	$('#skills_link').click(function() {
		$(".skill_card").css({
		    right: -3000,
		    position: "relative"
		}).each(function(i) {
		    var el = $(this);
		    setTimeout(function() {
		        el.animate({
		            right: 0
		        }, 400);
		    }, i * 400);
		});
	});
	
    $('a.link-cv').click(function() {
    
    	$('a.link-cv').css( "color", "white" );
    	
    	
//        var $target = $($(this).attr('href')),
        var $target = $($(this).attr('data-href')),
            $other = $target.siblings('.active');
        
        $target.css( "color", "lightskyblue" );
        if (!$target.hasClass('active')) {
            $other.each(function(index, self) {
                var $this = $(this);
                $this.css( "display", "none" );
                $this.removeClass('active').animate({
                    left: $this.width()
                }, 500);
            });

            $target.addClass('active').show().css({
                left: -($target.width())
            }).animate({
                left: 0
            }, 500);
        }
    });

});