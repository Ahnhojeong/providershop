/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', function () {\n  var cursor = document.querySelector('.cursor');\n  var linkBtn = document.querySelectorAll('[href]');\n  console.log(linkBtn);\n  window.addEventListener('mousemove', function (e) {\n    cursor.style = \"transition:.15s; left:\".concat(e.clientX, \"px; top:\").concat(e.clientY, \"px\");\n  });\n\n  for (var i = 0; i < linkBtn.length; i++) {\n    linkBtn[i].addEventListener('mouseenter', cursorFun);\n    linkBtn[i].addEventListener('mouseleave', cursorFun);\n  }\n\n  function cursorFun(e) {\n    if (e.type == 'mouseenter') {\n      cursor.classList.add('active');\n    } else {\n      cursor.classList.remove('active');\n    }\n  } //circle event\n\n\n  var circle = document.querySelector('.circle-pattern');\n  window.addEventListener('scroll', function () {\n    circle.style.transform = 'translateY(' + this.scrollY + 'px)';\n  });\n});\n\n//# sourceURL=webpack://providershop-master/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;