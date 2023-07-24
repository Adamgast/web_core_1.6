export function mobileInitSlider() {
	if (document.querySelector('.swiper')) {
		if (window.innerWidth <= 767.98) {
			const slider1 = new Swiper('.slider', {
				direction: 'horizontal',
				loop: true,
				slidesPerView: 1.2,
				spaceBetween: 16,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				breakpoints: {
					490: {
						slidesPerView: 2,
					},
				},
			});
			const slider2 = new Swiper('.service-price__slider', {
				direction: 'horizontal',
				loop: true,
				slidesPerView: 1.1,
				spaceBetween: 16,
				pagination: {
					el: '.service-price__pagination',
					clickable: true,
				},
				breakpoints: {
					460: {
						slidesPerView: 1.5,
					},
					620: {
						slidesPerView: 2,
					},
				},
			});
		}
	}
}
mobileInitSlider();
window.addEventListener("resize", () => {
	mobileInitSlider();
});
