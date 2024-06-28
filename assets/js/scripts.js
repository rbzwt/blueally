var $ = jQuery.noConflict();
var mainHeader = $('.main-header');
const useCaseSlider = document.querySelectorAll('.use-case .use-case-slider');

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

	//swiper slider
	if (useCaseSlider) {
		useCaseSlider.forEach((slider, index) => {
			const swiperInstance = new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 50,

				navigation: {
					prevEl: slider.parentNode.querySelector('.prev-btn'),
					nextEl: slider.parentNode.querySelector('.next-btn'),
				},
				// pagination: {
				// 	el: slider.parentNode.querySelector('.swiper-pagination'),
				// 	clickable: true,
				// },
				// breakpoints: {
				// 	576: {
				// 		slidesPerView: 2.2,
				// 	},
				// 	767: {
				// 		slidesPerView: 2.5,
				// 	},
				// 	992: {
				// 		slidesPerView: 3.5,
				// 	},
				// 	1200: {
				// 		slidesPerView: 4.3,
				// 	},
				// 	1500: {
				// 		slidesPerView: 4.5,
				// 	},
				// }
			});
		});
	}


	if (useCaseSlider) {
		useCaseSlider.forEach((slider, index) => {
			const swiperInstance = new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 50,

				navigation: {
					prevEl: slider.parentNode.parentNode.querySelector('prev-mob-btn'),
					nextEl: slider.parentNode.parentNode.querySelector('next-mob-btn'),
				},
				// pagination: {
				// 	el: slider.parentNode.querySelector('.swiper-pagination'),
				// 	clickable: true,
				// },
				// breakpoints: {
				// 	576: {
				// 		slidesPerView: 2.2,
				// 	},
				// 	767: {
				// 		slidesPerView: 2.5,
				// 	},
				// 	992: {
				// 		slidesPerView: 3.5,
				// 	},
				// 	1200: {
				// 		slidesPerView: 4.3,
				// 	},
				// 	1500: {
				// 		slidesPerView: 4.5,
				// 	},
				// }
			});
		});
	}


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