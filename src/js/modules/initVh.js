export const initVh = () => {
	function init() {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	init();
	window.addEventListener('resize', init);
};
