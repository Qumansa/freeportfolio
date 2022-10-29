'use strict';
import { initVh } from './modules/initVh';
import { initAnimations } from './modules/initAnimations';
import { highlightActiveLinkInHeader } from './modules/highlightActiveLinkInHeader';
import { toggleBurger } from './modules/toggleBurger';

document.addEventListener('DOMContentLoaded', () => {
	initVh();
	initAnimations();
	highlightActiveLinkInHeader();
	toggleBurger();
});
