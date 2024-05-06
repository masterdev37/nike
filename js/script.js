document.addEventListener('DOMContentLoaded', () => {

	const swiperThumbs = new Swiper('.swiper-thumbs', {
		slidesPerView: 4,
		speed: 1000,
		spaceBetween: 50,
	});

	const swiperBanner = new Swiper('.swiper-banner', {
		speed: 1000,
		spaceBetween: 0,
		effect: 'cube',
		mousewheel: {
			enabled: true,
		},
		thumbs: {
			swiper: swiperThumbs,
		},
		pagination: {
			el: '.swiper-banner .swiper-pagination',
			clickable: true,
		}
	});
	
})