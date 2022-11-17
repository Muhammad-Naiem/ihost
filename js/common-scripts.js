
(function($){
	$(function(){
        
        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".main-nav").fadeToggle()
        });
        
        $('.pricing-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.pricing-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.pricing-tab-item-wrap .pricing-tab-item').hide();
            
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        $('.plan-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.plan-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.plan-tab-item-wrap .plan-tab-item').hide();
            
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if ($('.testimonial-component-wrap').length) {
            $('.testimonial-component-wrap').marquee({
                direction: 'left',
                duration: 50000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });

        }

        if ($('.blog-component-slider').length) {
            $('.blog-component-slider').slick({
                dots: true,
                arrows: false,
                autoplay: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {

                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {

                            slidesToShow: 1,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.blog-component-slider').slick('resize');
            });
        }
		
	})// End ready function.
   
})(jQuery)

