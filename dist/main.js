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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://02_ozon/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// code incapsulation; this helps use same name for functions and variables,\n// since they are not visible globally\nconst cart = () => {\n\tconst cartBtn = document.getElementById(\"cart\");\n\n\t// open hidden cart items by click\n\tconst cartItems = document.querySelector(\".cart\");\n\n\tconst openCart = () => {\n\t\tcartItems.style.display = \"flex\";\n\t};\n\n\t// addEventListener can be used many times\n\tcartBtn.addEventListener(\"click\", openCart);\n\n\t// close cart items window by click\n\tconst cartCloseBtn = cartItems.querySelector(\".cart-close\"); // faster way to find classname\n\tconst closeCart = () => {\n\t\tcartItems.style.display = \"\";\n\t};\n\n\tcartCloseBtn.addEventListener(\"click\", closeCart);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst catalog = () => {\n\tconst catalogBtn = document.querySelector(\".catalog-button > button\"); // capturing tag 'button'\n\tconst catalogModal = document.querySelector(\".catalog\");\n\tconst catalogModalItems = document.querySelectorAll(\".catalog li\");\n\n\tlet isOpen = false;\n\n\tcatalogBtn.addEventListener(\"click\", () => {\n\t\tisOpen = !isOpen; // true\n\t\tif (isOpen) {\n\t\t\tcatalogModal.style.display = \"flex\";\n\t\t} else {\n\t\t\tcatalogModal.style.display = \"\";\n\t\t}\n\t});\n\n\tcatalogModalItems.forEach((item) => {\n\t\titem.addEventListener(\"click\", () => {\n\t\t\tconst text = item.textContent; // getting item text\n\t\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\n\t\t\t});\n\t\t});\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   maxPriceFilter: () => (/* binding */ maxPriceFilter),\n/* harmony export */   minPriceFilter: () => (/* binding */ minPriceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n\t// filter creates new array with searched items\n\treturn goods.filter((goodsItem) => {\n\t\treturn goodsItem.title.toLowerCase().includes(value.toLowerCase()); // register independent\n\t});\n};\n\nconst categoryFilter = (goods, text) => {\n\t// filter creates new array with searched items\n\treturn goods.filter((goodsItem) => {\n\t\treturn goodsItem.category === text;\n\t});\n};\n\nconst minPriceFilter = (goods, price) => {\n\treturn goods.filter((goodsItem) => {\n\t\treturn goodsItem.price >= price;\n\t});\n};\n\nconst maxPriceFilter = (goods, price) => {\n\treturn goods.filter((goodsItem) => {\n\t\tif (price !== \"\") {\n\t\t\treturn goodsItem.price <= price;\n\t\t} else {\n\t\t\treturn goodsItem.price;\n\t\t}\n\t});\n};\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\n\treturn fetch(\n\t\t// `https://ozone-396c0-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${\n\t\t// \tstr ? `search=${str}` : \"\"\n\t\t// }` this option is not working with firebase service\n\n\t\t`https://ozone-396c0-default-rtdb.europe-west1.firebasedatabase.app/goods.json`\n\t).then((response) => {\n\t\treturn response.json();\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n // we can use a module from another module\n\n\n\nconst load = () => {\n\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = () => {\n\t// return fetch(\"http://localhost:3000/goods/6287\", {\n\t// \tmethod: \"DELETE\",\n\t// }).then((res) => res.json());\n\n\treturn fetch(\"http://localhost:3000/goods\", {\n\t\tmethod: \"POST\",\n\t\tbody: JSON.stringify({\n\t\t\ttitle: \"Ведьмак 3\",\n\t\t\tprice: 3000,\n\t\t\tsale: true,\n\t\t\timg: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\n\t\t\tcategory: \"Игры и софт\",\n\t\t}),\n\t\theaders: {\n\t\t\t\"Content-type\": \"application/json; charset=UTF-8\",\n\t\t},\n\t}).then((res) => res.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\n\tconst goodsWrapper = document.querySelector(\".goods\");\n\n\t// cleans duplicated rendering of goods\n\tgoodsWrapper.innerHTML = \"\";\n\n\t// iterating goods array\n\tgoods.forEach((goodsItem) => {\n\t\tgoodsWrapper.insertAdjacentHTML(\n\t\t\t\"beforeend\",\n\t\t\t`\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n\t\t\t\t<div class=\"card\">\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\n\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"card-img-top\"\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tbackground-image: url(${goodsItem.img});\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body justify-content-between\">\n\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\n\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n      `\n\t\t);\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst search = () => {\n\tconst searchInput = document.querySelector(\".search-wrapper_input\");\n\tsearchInput.addEventListener(\"input\", (event) => {\n\t\tconst value = event.target.value;\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\n\t\t});\n\t});\n\n\tconst searchMinPriceInput = document.getElementById(\"min\");\n\tconst searchMaxPriceInput = document.getElementById(\"max\");\n\n\t// Price Search; not perfect, but good enough in these circumstances\n\tsearchMinPriceInput.addEventListener(\"input\", (event) => {\n\t\tconst minPrice = event.target.value;\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n\t\t\tconst filteredOnMinData = (0,_filters__WEBPACK_IMPORTED_MODULE_2__.minPriceFilter)(data, minPrice);\n\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filteredOnMinData);\n\t\t\tsearchMaxPriceInput.addEventListener(\"input\", (event) => {\n\t\t\t\tconst maxPrice = event.target.value;\n\t\t\t\tconst filteredOnMaxData = (0,_filters__WEBPACK_IMPORTED_MODULE_2__.maxPriceFilter)(filteredOnMinData, maxPrice);\n\t\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filteredOnMaxData);\n\t\t\t});\n\t\t});\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n\n//# sourceURL=webpack://02_ozon/./src/modules/search.js?\n}");

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