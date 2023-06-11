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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPageDisplay)\n/* harmony export */ });\nfunction contactPageDisplay(element) {\n    console.log('I got called from contactPage.js!');\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePageDisplay)\n/* harmony export */ });\nfunction homePageDisplay(element) {\n    console.log('I got called from mainPage.js!');\n\n    element.innerHTML = \"\";\n\n    // Create elements for webpage\n    const header = document.createElement(\"header\");\n    header.textContent = \"Welcome to Pizza Palace!\";\n    header.classList.add(\"test\");\n\n    const heroImage = document.createElement(\"img\");\n    heroImage.setAttribute(\"height\", \"300px\");\n    heroImage.setAttribute(\"width\", \"300px\");\n    heroImage.setAttribute(\"id\", \"hero-image\");\n    heroImage.setAttribute(\"src\", \"../hero-image.png\");\n\n    const heroMessage = document.createElement(\"p\");\n    heroMessage.setAttribute(\"id\", \"hero-message\");\n    heroMessage.textContent = \n            \"Welcome to our beloved pizza restaurant, where family traditions and exceptional service blend to create an unforgettable dining experience!\"\n            + '\\n' + \"For over three decades, we have proudly served our community with the utmost passion, dedication, and, of course, mouthwatering pizzas.\"\n            + '\\n' + \"Our commitment to preserving that legacy is unwavering. From the moment you step into our cozy establishment,\"\n            + '\\n' + \"our warm and friendly staff greets you with genuine smiles, eager to provide exceptional customer service that goes beyond expectations.\"\n            + '\\n' + \"Our pizzas are a masterpiece, meticulously prepared with only the freshest ingredients, hand-tossed dough, and a blend of flavorful sauces that dance on your palate.\"\n            + '\\n' + \"Each pizza is lovingly topped with an abundance of premium cheeses and a variety of meticulously selected toppings, ensuring every bite is a symphony of flavors.\"\n            + '\\n' + \"So join us, as we invite you to savor the magic of our cherished family recipe, experience the warmth of our genuine customer service, and become a part of our pizza-loving family.\";\n    \n    heroMessage.classList.add('test');\n\n    // Add elements to content elem\n    element.appendChild(header);\n    element.appendChild(heroImage);\n    element.appendChild(heroMessage);\n\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\n\n\n\nfunction component() {\n\n    const element = document.querySelector(\"#content\"); \n\n    (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n    (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n    (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element);\n}\n\ncomponent();\n\n//# sourceURL=webpack://restaurant-page-/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPageDisplay)\n/* harmony export */ });\nfunction menuPageDisplay(element) {\n    console.log('I got called from menuPage.js!');\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/menuPage.js?");

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