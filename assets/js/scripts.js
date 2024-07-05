var $ = jQuery.noConflict();
var mainHeader = $('.main-header');
const useCaseSlider = document.querySelectorAll('.use-case .use-case-slider');
const featuredPartners = document.querySelectorAll('.featured-partners .fp-slider');
const trendingTopics = document.querySelectorAll('.tranding-topics .tt-slider');
const casestudieSlider = document.querySelectorAll('.cs-slider');
const whoweSlider = document.querySelectorAll('.ww-slider');


/* Script on ready
------------------------------------------------------------------------------*/
$(() => {
	/* Do jQuery stuff when DOM is ready */
	Fancybox.bind("[data-fancybox]");
	  
	//onscroll header color
	if ($(window).scrollTop() < 1) {
		mainHeader.removeClass('stuck');
	} else {
		mainHeader.addClass('stuck');
	}
	
	//end onscroll

	//search button start	
	if ($('.main-header').length) {
		$('.mh-search').click(function () {
			$('.search-input').toggleClass('active');
		});
		$('.close-search').click(function () {
			$('.search-input').removeClass('active');
		});
	}
	//search button end

	//start back to top button
	if ($('.main-footer').length) {
		var btn = $('.mf-back-wrap');

		$(window).scroll(function () {
			if ($(window).scrollTop() > 300) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});
		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	//end back to top button

	//start accordian 

	$('.assessment-solutions .as-accordian-item:first-child').addClass('active');
	$('.assessment-solutions .as-accordian-item:first-child .as-accordian-data').css({ "display": "block" });
	$('.assessment-solutions .as-accordian-heading').on("click", function (e) {
		if ($(this).parents('.as-accordian-item').hasClass('active')) {
			$(this).parents('.as-accordian-item').removeClass("active");
			$(this).parents('.as-accordian-item').find('.as-accordian-data').stop().slideUp();
		} else {
			$(this).parents('.as-accordian-item').addClass("active").siblings().removeClass("active");
			$(this).parents('.as-accordian-item').find('.as-accordian-data').stop().slideDown();
			$(this).parents('.as-accordian-item').siblings().find('.as-accordian-data').stop().slideUp();
		}
	});
	//end accordian

	//swiper slider for use-case
	if (useCaseSlider) {
		useCaseSlider.forEach((slider, index) => {
			const swiperInstance = new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 50,
				loop:true,
				navigation: {
					prevEl: slider.parentNode.querySelector('.uc-mobile-controls .prev-btn'),
					nextEl: slider.parentNode.querySelector('.uc-mobile-controls .next-btn'),
				},
				breakpoints: {
                    991: {
                        navigation: {
                            nextEl: slider.parentNode.querySelector('.uc-desktop-controls .prev-btn'),
                            prevEl: slider.parentNode.querySelector('.uc-desktop-controls .next-btn'),
                        },
                    }
                }
			});
		});
	}

	// end use-case swiper slider
	
	//start featured-partners swiper slider
	if (featuredPartners) {
		featuredPartners.forEach((slider, index) => {
			const swiperInstance = new Swiper(slider, {
				slidesPerView: 2,
				spaceBetween: 100,
				adaptiveHeight : true,
				// slidesPerView: 'auto',
				loop:true,
				navigation: {
					prevEl: slider.parentNode.querySelector('.fp-controls .prev-btn'),
					nextEl: slider.parentNode.querySelector('.fp-controls .next-btn'),
				},
				breakpoints: {
                    767: {
                        slidesPerView: 3,
                    },
					992: {
						slidesPerView: 5,
					},
                }
			});
		});
	}
	//end featured-partners swiper slider

	//start trending-topics slider	
	if (trendingTopics) {
		trendingTopics.forEach((slider, index) => {
			const swiperInstance = new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 100,
				loop:true,
				navigation: {
					prevEl: slider.parentNode.querySelector('.tt-controls .prev-btn'),
					nextEl: slider.parentNode.querySelector('.tt-controls .next-btn'),
				},
			});
		});
	}
	//end trending-topics slider 

	//start case-studies slider section
	if (casestudieSlider) {
		casestudieSlider.forEach((slider, index) => {
			const swiperInstance = new Swiper(slider, {
				slidesPerView: 1.2,
				spaceBetween: 32,
				loop:true,
				navigation: {
					prevEl: slider.parentNode.parentNode.querySelector('.cs-controls .prev-btn'),
					nextEl: slider.parentNode.parentNode.querySelector('.cs-controls .next-btn'),
				},
				breakpoints: {
                    767: {
                        slidesPerView: 2,
                    },
					992: {
						slidesPerView: 3,
					},
                }
			});
		});
	}
	//end case-studies slider section

	$(".form-wrap .cf-form-control input, .form-wrap .cf-form-control textarea").focus(function () {
		$(this).parent().addClass('focused');
	});
	$(".form-wrap .cf-form-control input, .form-wrap .cf-form-control textarea").blur(function () {
		var txtName = $(this).val();
		if (txtName) {
			$(this).parent().addClass('focused blured');
		} else {
			$(this).parent().removeClass('focused blured');
		}
	});



	// start about who-we-are swiper
	if (whoweSlider) {
		whoweSlider.forEach((slider, index) => {
			const swiperInstance = new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 30,

				// loop:true,
				navigation: {
					prevEl: slider.parentNode.querySelector('.swiper-controls .prev-btn'),
					nextEl: slider.parentNode.querySelector('.swiper-controls .next-btn'),
				},
				pagination: {
					el: slider.parentNode.querySelector('.custom-dt'),
					clickable: true,
				},
				breakpoints: {
                    767: {
                        slidesPerView: 2,
						spaceBetween:50,
                    },
					992: {
						slidesPerView: 3,
					},
                }
			});
		});
	}

	// start about who-we-are swiper

});

/* Script on load
------------------------------------------------------------------------------*/
window.onload = () => {
	/* Do jQuery stuff when DOM is fully loaded, including all frames, objects and images */
};

/* Script on scroll
------------------------------------------------------------------------------*/
window.onscroll = () => {
	/* Do jQuery stuff on Scroll */
	//start onload header color
	if ($(window).scrollTop() < 1) {
		mainHeader.removeClass('stuck');
	} else {
		mainHeader.addClass('stuck');
	}
	//end onload header color
};

/* Script on resize
------------------------------------------------------------------------------*/

window.onresize = (event) => {
	/* Do jQuery stuff on resize */
};

/* Script all functions
------------------------------------------------------------------------------*/