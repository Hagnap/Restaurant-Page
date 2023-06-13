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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPageDisplay)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction contactPageDisplay(element) {\n\n    element.innerHTML = \"\";\n\n    // Create elements for webpage\n    const subContentDiv = document.createElement(\"div\");\n    subContentDiv.setAttribute(\"id\", \"sub-content-div\");\n\n    const navbar = document.createElement(\"div\");\n    navbar.setAttribute(\"id\", \"navbar\");\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, navbar);\n\n    const header = document.createElement(\"header\");\n    header.textContent = \"How to Contact The Pizza Palace\";\n\n    const contactInfo = document.createElement(\"p\");\n    contactInfo.innerHTML = \n      \"Hours: 11am - 10pm\"\n      + \"</br></br>Location: 123 Pizza Road, Town City\"\n      + \"</br></br>Phone Number: 012-345-6789\"\n      + \"</br></br>Email: ThePizzaPalace@internet.com\";\n\n    // Add content to element (content div on webpage)\n    subContentDiv.appendChild(header);\n    subContentDiv.appendChild(contactInfo);\n\n    element.appendChild(navbar);\n    element.appendChild(subContentDiv);\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePageDisplay)\n/* harmony export */ });\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction homePageDisplay(element) {\n\n    element.innerHTML = \"\";\n\n    // Create elements for webpage\n    const subContentDiv = document.createElement(\"div\");\n    subContentDiv.setAttribute(\"id\", \"sub-content-div\");\n\n    const navbar = document.createElement(\"div\");\n    navbar.setAttribute(\"id\", \"navbar\");\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, navbar);\n\n    const header = document.createElement(\"header\");\n    header.textContent = \"Welcome to The Pizza Palace!\";\n\n    const heroImage = document.createElement(\"img\");\n    heroImage.setAttribute(\"height\", \"300px\");\n    heroImage.setAttribute(\"width\", \"300px\");\n    heroImage.setAttribute(\"id\", \"hero-image\");\n    heroImage.setAttribute(\"src\", \"../hero-image.png\");\n\n    const heroMessage = document.createElement(\"p\");\n    heroMessage.setAttribute(\"id\", \"hero-message\");\n\n    // Newline char didn't work, this solved my issue https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent\n    heroMessage.setAttribute('style', 'white-space: pre;');\n    heroMessage.innerHTML = \n        \"Welcome to our beloved pizza restaurant, where family traditions and exceptional service blend to create an unforgettable dining experience!\"\n        + \"</br>For over three decades, we have proudly served our community with the utmost passion, dedication, and, of course, mouthwatering pizzas.\"\n        + \"</br>It all started more than 30 years ago when a determined mom and pop embarked on a culinary journey, armed with a cherished family recipe that has stood the test of time.\"\n        + \"</br>With love as the secret ingredient, they crafted each pizza with care, delighting taste buds and creating memories that have resonated through generations.\"\n        + \"</br>Our commitment to preserving that legacy is unwavering. From the moment you step into our cozy establishment, you become part of our extended family.\"\n        + \"</br>Our warm and friendly staff greets you with genuine smiles, eager to provide exceptional customer service that goes beyond expectations.\"\n        + \"</br>We believe that every interaction should leave you feeling valued and appreciated.\"\n        + \"</br>Our pizzas are a masterpiece, meticulously prepared with only the freshest ingredients, hand-tossed dough, and a blend of flavorful sauces that dance on your palate.\"\n        + \"</br>Each pizza is lovingly topped with an abundance of premium cheeses and a variety of meticulously selected toppings, ensuring every bite is a symphony of flavors.\"\n        + \"</br>As a staple in our community, we take great pride in being the place where friends gather, families celebrate, and memories are created.\"\n        + \"</br>Whether it's a lively evening with loved ones or a cozy dinner for two, our inviting atmosphere and exceptional hospitality create the perfect backdrop for any occasion.\"\n        + \"</br>So join us, as we invite you to savor the magic of our cherished family recipe, experience the warmth of our genuine customer service, and become a part of our pizza-loving family.\"\n        + \"</br>Together, let's create moments that will be cherished for years to come.\";\n\n    heroMessage.classList.add('test');\n\n    // Add content to element (content div on webpage)\n    subContentDiv.appendChild(header);\n    subContentDiv.appendChild(heroImage);\n    subContentDiv.appendChild(heroMessage);\n\n    element.appendChild(navbar);\n    element.appendChild(subContentDiv);\n  }\n\n\n//# sourceURL=webpack://restaurant-page-/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addButtons)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\n\n\n\nfunction addButtons(element, navbar) {\n    \n    const homeBtn = document.createElement(\"button\");\n    homeBtn.innerText = \"Home\";\n    homeBtn.setAttribute(\"id\", \"homeBtn\");\n    homeBtn.addEventListener(\"click\", function() {\n        (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n    })\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.innerText = \"Menu\";\n    menuBtn.setAttribute(\"id\", \"menuBtn\");\n    menuBtn.addEventListener(\"click\", function() {\n        (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n    })\n\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.innerText = \"Contact\";\n    contactBtn.setAttribute(\"id\", \"contactBtn\");\n    contactBtn.addEventListener(\"click\", function() {\n        (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element);\n    })\n\n    navbar.appendChild(homeBtn);\n    navbar.appendChild(menuBtn);\n    navbar.appendChild(contactBtn);\n}\n\nfunction component() {\n\n    const element = document.querySelector(\"#content\"); \n\n    (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n    //menuPageDisplay(element);\n    //contactPageDisplay(element);\n}\n\ncomponent();\n\n//# sourceURL=webpack://restaurant-page-/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPageDisplay)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction addMenuItem(name, price, description) {\n\n    var item = document.createElement(\"div\");\n    item.setAttribute(\"class\", \"menu-item\");\n    var itemName = document.createElement(\"p\");\n    itemName.style.textDecoration = \"underline\";\n    var itemDescription = document.createElement(\"p\");\n    var itemPrice = document.createElement(\"p\");\n    itemName.textContent = name;\n    itemPrice.textContent = price;\n    itemDescription.textContent = description;\n    \n    item.appendChild(itemName);\n    item.appendChild(itemPrice);\n    item.appendChild(itemDescription);\n\n    return item;\n}\n\nfunction menuPageDisplay(element) {\n\n    element.innerHTML = \"\";\n\n    // Create elements for webpage\n    const subContentDiv = document.createElement(\"div\");\n    subContentDiv.setAttribute(\"id\", \"sub-content-div-menu\");\n\n    const grid = document.createElement(\"div\");\n    grid.setAttribute(\"id\", \"grid\");\n\n    const itemOne = addMenuItem(\"Four Cheese\", \"$14\",\"Cheese lovers rejoice! The four cheese pizza boasts a medley of rich and creamy cheeses, such as mozzarella, cheddar, Parmesan, and sometimes gorgonzola or ricotta. It's a heavenly indulgence for those seeking a cheese-packed delight.\");\n    const itemTwo = addMenuItem(\"Pepperoni\", \"$16\",\"A perennial favorite, pepperoni pizza is topped with spicy, cured pepperoni slices that crisp up in the oven, releasing their irresistible flavor. It's often paired with tomato sauce and mozzarella cheese.\");\n    const itemThree = addMenuItem(\"Margherita\", \"$16\",\"A classic pizza originating from Naples, Italy, the Margherita features a thin crust topped with tomato sauce, mozzarella cheese, and fresh basil leaves. Its simplicity allows the quality of the ingredients to shine.\");\n    const itemFour = addMenuItem(\"Hawaiian\", \"$16\",\"A divisive yet popular choice, Hawaiian pizza combines the savory taste of ham with the sweetness of pineapple. It typically includes tomato sauce, mozzarella cheese, and the iconic pineapple and ham toppings.\");\n    const itemFive = addMenuItem(\"BBQ Chicken\", \"$16\",\"This unique pizza features tangy barbecue sauce as the base, topped with grilled chicken, red onions, and a blend of cheeses. The combination of smoky flavors and tender chicken makes it a crowd-pleaser.\");\n    const itemSix = addMenuItem(\"Meat Lovers\", \"$20\",\"As the name suggests, this pizza caters to meat enthusiasts. It's piled high with an assortment of savory meats like pepperoni, sausage, bacon, ham, and sometimes ground beef, making it a protein-packed delight.\");\n    const itemSeven = addMenuItem(\"Buffalo Chicken\", \"$16\",\"Inspired by the tangy flavors of Buffalo wings, this pizza features buffalo sauce as the base, topped with grilled or breaded chicken, blue cheese or ranch dressing, and sometimes diced celery. It's a zesty and satisfying choice.\");\n    const itemEight = addMenuItem(\"Supreme\", \"$20\",\"The Supreme pizza is a loaded feast of flavors, combining various toppings like pepperoni, sausage, bell peppers, onions, mushrooms, and olives. It's a crowd-pleasing option that offers a bit of everything.\");\n    const itemNine = addMenuItem(\"Mediterranean\", \"$16\",\"Bringing a taste of the Mediterranean to your plate, this pizza is topped with ingredients like feta cheese, Kalamata olives, roasted red peppers, sun-dried tomatoes, and fresh herbs. It's a flavorful and aromatic delight.\");\n    const itemTen = addMenuItem(\"Veggie Supreme\", \"$16\",\"A vegetarian delight, the Veggie Supreme pizza is loaded with a colorful array of fresh vegetables like bell peppers, mushrooms, onions, olives, and tomatoes. It's a wholesome and flavorful option for vegetable enthusiasts.\");\n\n    grid.appendChild(itemOne);\n    grid.appendChild(itemTwo);\n    grid.appendChild(itemThree);\n    grid.appendChild(itemFour);\n    grid.appendChild(itemFive);\n    grid.appendChild(itemSix);\n    grid.appendChild(itemSeven);\n    grid.appendChild(itemEight);\n    grid.appendChild(itemNine);\n    grid.appendChild(itemTen);\n\n    const navbar = document.createElement(\"div\");\n    navbar.setAttribute(\"id\", \"navbar\");\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, navbar);\n\n    const header = document.createElement(\"header\");\n    header.textContent = \"Pizza Palace Menu\";\n\n    // Add content to element (content div on webpage)\n    subContentDiv.appendChild(header);\n    subContentDiv.appendChild(grid);\n\n    element.appendChild(navbar);\n    element.appendChild(subContentDiv);\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/menuPage.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;