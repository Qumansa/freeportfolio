export const highlightActiveLinkInHeader = () => {
	const sections = document.querySelectorAll('[data-section]');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const activeLink = document.querySelector(`.header__link[href="#${entry.target.id}"]`);

				activeLink.classList.toggle('header__link_active', entry.isIntersecting);
			});
		},
		{
			rootMargin: '-48%',
		}
	);

	sections.forEach((section) => observer.observe(section));
};
