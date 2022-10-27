// 'use strict';
import { initVh } from './modules/initVh';
import { toggleBurger } from './modules/toggleBurger';
import { initAnimations } from './modules/initAnimations';
import { highlightActiveLinkInHeader } from './modules/highlightActiveLinkInHeader';

document.addEventListener('DOMContentLoaded', () => {
	initVh();
	toggleBurger();
	// initAnimations();
	highlightActiveLinkInHeader();
});
