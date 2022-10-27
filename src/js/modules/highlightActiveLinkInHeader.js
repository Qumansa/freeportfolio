export const highlightActiveLinkInHeader = () => {
	const sections = document.querySelectorAll('[data-section]');
	const links = document.querySelectorAll('.header__link');
	const linkActiveClass = 'header__link_active';

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					links.forEach((link) => link.classList.remove(linkActiveClass));

					const activeLink = document.querySelector(`.header__link[href="#${entry.target.id}"]`);
					activeLink.classList.add(linkActiveClass);
				}
			});
		},
		{
			threshold: 0.3,
		}
	);

	sections.forEach((section) => observer.observe(section));
};
