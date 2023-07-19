export function mobileInitSlider() {
	if (window.innerWidth <= 767.98) {
		const swiper = new Swiper('.slider', {
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
	}
}
mobileInitSlider();
window.addEventListener('resize', mobileInitSlider);
