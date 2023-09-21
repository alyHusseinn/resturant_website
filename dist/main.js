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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst LoadPage = () => {\r\n    const content = document.querySelector('.content');\r\n\r\n    const header = document.createElement('header');\r\n\r\n    const nav = document.createElement('nav');\r\n    const logo = document.createElement('h1');\r\n    logo.textContent = 'Egyptian Food';\r\n\r\n    const ul = document.createElement('ul');\r\n    const liHome = document.createElement('li');\r\n    const liMenu = document.createElement('li');\r\n    const liContact = document.createElement('li');\r\n    liHome.innerHTML = 'Home';\r\n    liMenu.innerHTML = 'Menu';\r\n    liContact.innerHTML = 'Content';\r\n    ul.appendChild(liHome);\r\n    ul.appendChild(liMenu);\r\n    ul.appendChild(liContact);\r\n\r\n\r\n    nav.appendChild(ul);\r\n\r\n    header.appendChild(logo);\r\n    header.appendChild(nav);\r\n\r\n\r\n    const main = document.createElement('main');\r\n    const descriptionDiv = document.createElement('div');\r\n    descriptionDiv.setAttribute('class', 'description');\r\n\r\n    // MainImage.src = './imgs/egyFood2.jpg';\r\n    // MainImage.style.cssText = 'height: 300px; width: 300px';\r\n    const descrpHeader = document.createElement('h1');\r\n    const descrpOpenning = document.createElement('p');\r\n\r\n    descrpHeader.textContent = 'Egyptian food resturants';\r\n    descrpOpenning.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.';\r\n\r\n    descriptionDiv.appendChild(descrpHeader);\r\n    descriptionDiv.appendChild(descrpOpenning);\r\n\r\n    main.appendChild(descriptionDiv);\r\n\r\n    const footer = document.createElement('footer');\r\n\r\n    const madeBy = document.createElement('p');\r\n    madeBy.textContent = 'Made by Me :)';\r\n\r\n    footer.appendChild(madeBy);\r\n\r\n    content.appendChild(header);\r\n    content.appendChild(main);\r\n    content.appendChild(footer);\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadPage);\n\n//# sourceURL=webpack://resturant-site/./src/initial-load.js?");

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