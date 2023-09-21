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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load.js */ \"./src/initial-load.js\");\n\r\n\r\n(0,_initial_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://resturant-site/./src/index.js?");

/***/ }),

/***/ "./src/initial-load.js":
/*!*****************************!*\
  !*** ./src/initial-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-home.js */ \"./src/main-home.js\");\n/* harmony import */ var _main_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-about.js */ \"./src/main-about.js\");\n/* harmony import */ var _main_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-menu.js */ \"./src/main-menu.js\");\n\r\n\r\n\r\n\r\nconst LoadPage = () => {\r\n    const content = document.querySelector('.content');\r\n    \r\n    const header = document.createElement('header');\r\n    let main  = (0,_main_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const footer = document.createElement('footer'); \r\n\r\n    // header \r\n    const nav = document.createElement('nav');\r\n    const logo = document.createElement('h1');\r\n    logo.textContent = 'Egyptian Food';\r\n\r\n    const ul = document.createElement('ul');\r\n    const liHome = document.createElement('li');\r\n    const liMenu = document.createElement('li');\r\n    const liAbout = document.createElement('li');\r\n\r\n    liHome.innerHTML = 'Home';\r\n    liMenu.innerHTML = 'Menu';\r\n    liAbout.innerHTML = 'About';\r\n    ul.appendChild(liHome);\r\n    ul.appendChild(liMenu);\r\n    ul.appendChild(liAbout);\r\n\r\n\r\n    nav.appendChild(ul);\r\n\r\n    header.appendChild(logo);\r\n    header.appendChild(nav);\r\n\r\n    // footer\r\n    const madeBy = document.createElement('p');\r\n    madeBy.innerHTML = 'Made by <a href=\"https://github.com/AliHussienabdo\"> Me :) </a>';\r\n\r\n    footer.appendChild(madeBy);\r\n\r\n    content.appendChild(header);\r\n    content.appendChild(main);\r\n    content.appendChild(footer);\r\n\r\n    // listen for any action in toggles buttons\r\n    liAbout.addEventListener('click', () => refresh((0,_main_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()));\r\n    liHome.addEventListener('click', () => refresh((0,_main_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()));\r\n    liMenu.addEventListener('click', () => refresh((0,_main_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\r\n\r\n    function refresh (TheMain) {\r\n        content.removeChild(main);\r\n        content.removeChild(footer);\r\n        main = TheMain;\r\n        content.appendChild(main);\r\n        content.appendChild(footer);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadPage);\n\n//# sourceURL=webpack://resturant-site/./src/initial-load.js?");

/***/ }),

/***/ "./src/main-about.js":
/*!***************************!*\
  !*** ./src/main-about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst about = () => {\r\n    const main = document.createElement('div');\r\n    main.setAttribute('id', 'about');\r\n    const descriptionDiv = document.createElement('div');\r\n    descriptionDiv.setAttribute('class', 'description');\r\n    \r\n    const descrpHeader = document.createElement('h1');\r\n    const descrpOpenning = document.createElement('p');\r\n\r\n    descrpHeader.textContent = 'About Section';\r\n    descrpOpenning.textContent = 'made with Love :)';\r\n\r\n    descriptionDiv.appendChild(descrpHeader);\r\n    descriptionDiv.appendChild(descrpOpenning);\r\n\r\n    main.appendChild(descriptionDiv);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://resturant-site/./src/main-about.js?");

/***/ }),

/***/ "./src/main-home.js":
/*!**************************!*\
  !*** ./src/main-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst home = () => {\r\n    // const content = document.querySelector('.content');\r\n    const main = document.createElement('main');\r\n    const descriptionDiv = document.createElement('div');\r\n    descriptionDiv.setAttribute('class', 'description');\r\n    \r\n    const descrpHeader = document.createElement('h1');\r\n    const descrpOpenning = document.createElement('p');\r\n\r\n    descrpHeader.textContent = 'Egyptian food resturant';\r\n    descrpOpenning.textContent = 'Welcome to our restaurant';\r\n\r\n    descriptionDiv.appendChild(descrpHeader);\r\n    descriptionDiv.appendChild(descrpOpenning);\r\n\r\n    main.appendChild(descriptionDiv);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://resturant-site/./src/main-home.js?");

/***/ }),

/***/ "./src/main-menu.js":
/*!**************************!*\
  !*** ./src/main-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst menu = () => {\r\n    const main = document.createElement('div');\r\n    main.setAttribute('id', 'menu');\r\n    const descriptionDiv = document.createElement('div');\r\n    descriptionDiv.setAttribute('class', 'description');\r\n    \r\n    const descrpHeader = document.createElement('h1');\r\n    const descrpOpenning = document.createElement('p');\r\n\r\n    descrpHeader.textContent = 'Menu Section';\r\n    descrpOpenning.textContent = 'made with Love :)';\r\n\r\n    descriptionDiv.appendChild(descrpHeader);\r\n    descriptionDiv.appendChild(descrpOpenning);\r\n\r\n    main.appendChild(descriptionDiv);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://resturant-site/./src/main-menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;