export function menuOpen() {
	const btnOpen = document.querySelector('.header__open-burger');
	const header = document.querySelector('.header');
	if (btnOpen) {
		btnOpen.addEventListener('click', () => {
			document.body.classList.add('lock');
			header.classList.add('active');
		});
	}
}
export function menuClose() {
	const btnClose = document.querySelector('.header__close-burger');
	const areaClose = document.querySelector('.header__close-area');
	const header = document.querySelector('.header');
	if (btnClose) {
		btnClose.addEventListener('click', () => {
			document.body.classList.remove('lock');
			header.classList.remove('active');
		});
	}
	if (areaClose) {
		areaClose.addEventListener('click', () => {
			document.body.classList.remove('lock');
			header.classList.remove('active');
		});
	}
}