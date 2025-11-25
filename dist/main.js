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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second */ \"./src/modules/second.js\");\n/* harmony import */ var _modules_postData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postData */ \"./src/modules/postData.js\");\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_second__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://02_ozon/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// code incapsulation; this helps use same name for functions and variables,\n// since they are not visible globally\nconst cart = () => {\n\tconst cartBtn = document.getElementById(\"cart\");\n\n\t// open hidden cart items by click\n\tconst cartItems = document.querySelector(\".cart\");\n\n\tconst openCart = () => {\n\t\tcartItems.style.display = \"flex\";\n\t};\n\n\t// addEventListener can be used many times\n\tcartBtn.addEventListener(\"click\", openCart);\n\n\t// close cart items window by click\n\tconst cartCloseBtn = cartItems.querySelector(\".cart-close\"); // faster way to find classname\n\tconst closeCart = () => {\n\t\tcartItems.style.display = \"\";\n\t};\n\n\t//cartCloseBtn.onclick = closeCart;\n\tcartCloseBtn.addEventListener(\"click\", closeCart);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n\treturn fetch(\n\t\t\"https://ozone-396c0-default-rtdb.europe-west1.firebasedatabase.app/goods.json\"\n\t).then((response) => {\n\t\treturn response.json();\n\t});\n};\n\n// this is another comment\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = () => {\n\t// return fetch(\"http://localhost:3000/goods/6287\", {\n\t// \tmethod: \"DELETE\",\n\t// }).then((res) => res.json());\n\n\treturn fetch(\"http://localhost:3000/goods\", {\n\t\tmethod: \"POST\",\n\t\tbody: JSON.stringify({\n\t\t\ttitle: \"Ведьмак 3\",\n\t\t\tprice: 3000,\n\t\t\tsale: true,\n\t\t\timg: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\n\t\t\tcategory: \"Игры и софт\",\n\t\t}),\n\t\theaders: {\n\t\t\t\"Content-type\": \"application/json; charset=UTF-8\",\n\t\t},\n\t}).then((res) => res.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/second.js":
/*!*******************************!*\
  !*** ./src/modules/second.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n // we can use a module from another module\n\n\nconst second = () => {\n\tconst cartBtn = document.getElementById(\"cart\");\n\n\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\tconsole.log(data);\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/second.js?\n}");

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