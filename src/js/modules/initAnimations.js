export const initAnimations = () => {
	const elems = document.querySelectorAll('[data-animation="initial"]');

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.dataset.animation = 'activated';
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.32,
		}
	);

	elems.forEach((elem) => observer.observe(elem));
};
