/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initVh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initVh */ \"./src/js/modules/initVh.js\");\n/* harmony import */ var _modules_toggleBurger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleBurger */ \"./src/js/modules/toggleBurger.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_initVh__WEBPACK_IMPORTED_MODULE_0__.initVh)();\n  (0,_modules_toggleBurger__WEBPACK_IMPORTED_MODULE_1__.toggleBurger)();\n});\n\n//# sourceURL=webpack:///./src/js/bundle.js?");

/***/ }),

/***/ "./src/js/modules/initVh.js":
/*!**********************************!*\
  !*** ./src/js/modules/initVh.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initVh\": () => (/* binding */ initVh)\n/* harmony export */ });\nvar initVh = function initVh() {\n  function init() {\n    var vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n  }\n  init();\n  window.addEventListener('resize', init);\n};\n\n//# sourceURL=webpack:///./src/js/modules/initVh.js?");

/***/ }),

/***/ "./src/js/modules/toggleBurger.js":
/*!****************************************!*\
  !*** ./src/js/modules/toggleBurger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleBurger\": () => (/* binding */ toggleBurger)\n/* harmony export */ });\nvar toggleBurger = function toggleBurger() {\n  var menu = document.querySelector('.header__nav');\n  var menuActiveClass = 'header__nav_active';\n  var burger = document.querySelector('.header__burger');\n  var burgerActiveClass = 'header__burger_active';\n  burger.addEventListener('click', function () {\n    menu.classList.toggle(menuActiveClass);\n    burger.classList.toggle(burgerActiveClass);\n    document.body.style.overflow === '' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';\n  });\n};\n\n//# sourceURL=webpack:///./src/js/modules/toggleBurger.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/bundle.js");
/******/ 	
/******/ })()
;