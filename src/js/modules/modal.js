export function modal() {
	const modalButtons = document.querySelectorAll("[data-modal-button]");
	const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
	const modals = document.querySelectorAll("[data-modal]");

	modalButtons.forEach((modalButton) => {
		modalButton.addEventListener("click", () => {
			const modalId = modalButton.dataset.modalButton;
			const modal = document.querySelector("#" + modalId);
			isLock()
			modal.classList.remove("hidden");
			modal.querySelector(".modal__window").addEventListener("click", (e) => {
				e.stopPropagation();
			});
		});
	});

	modalCloseButtons.forEach((modalCloseButton) => {
		modalCloseButton.addEventListener("click", () => {
			const modal = modalCloseButton.closest("[data-modal]");
			isLock()
			modal.classList.add("hidden");
		});
	});
	modals.forEach((modal) => {
		modal.addEventListener("click", () => {
			isLock()
			modal.classList.add("hidden");
		});
	});
	function isLock() {
		const header = document.querySelector('.header');
		if (!document.body.classList.contains("lock") && !header.classList.contains('active')) {
			document.body.classList.add("lock");
		} else if (document.body.classList.contains("lock") && !header.classList.contains('active')) {
			document.body.classList.remove("lock");
		}
	}
}
modal();