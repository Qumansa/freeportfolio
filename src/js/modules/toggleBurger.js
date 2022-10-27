export const toggleBurger = () => {
	const menu = document.querySelector('.header__nav');
	const menuActiveClass = 'header__nav_active';
	const burger = document.querySelector('.header__burger');
	const burgerActiveClass = 'header__burger_active';

	burger.addEventListener('click', () => {
		menu.classList.toggle(menuActiveClass);
		burger.classList.toggle(burgerActiveClass);

		document.body.style.overflow === ''
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = '');
	});

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('header__link') && menu.classList.contains(menuActiveClass)) {
			menu.classList.remove(menuActiveClass);
			burger.classList.remove(burgerActiveClass);
			document.body.style.overflow = '';
		}
	});
};
