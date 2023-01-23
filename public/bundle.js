/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/addCar.ts":
/*!***********************!*\
  !*** ./src/addCar.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addingCars)
/* harmony export */ });
function addingCars() {
    var i = 0;
    document.querySelector('.create').addEventListener('click', function () {
        i++;
        var road = "<div class=\"blockCar\"><div class=\"settInfo\"><button class=\"select".concat(i, "\">Select</button><button class=\"remove\">Remove</button><div class=\"namCar").concat(i, "\"></div></div><div class=\"road\"><div class=\"startStop").concat(i, "\"><button class=\"start\">A</button><button class=\"stop\" disabled/>B</button></div><div class=\"way\"> <img class=\"carImg carColor").concat(i, "\" src=\"assets/car.png\" alt=\"car\"><img class=\"flag\" src=\"assets/flag.png\" alt=\"flag\"></div></div></div>");
        var cars = document.createElement("blockCar".concat(i));
        cars.innerHTML = road;
        document.querySelector(".cars").appendChild(cars);
        document.querySelector(".namCar".concat(i)).textContent = document.querySelector('.inpCreat').value;
        document.querySelector(".carColor".concat(i)).style.backgroundColor = document.querySelector(".createColor").value;
    });
}


/***/ }),

/***/ "./src/startStop.ts":
/*!**************************!*\
  !*** ./src/startStop.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "race": () => (/* binding */ race),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "startStop": () => (/* binding */ startStop)
/* harmony export */ });
function startStop() {
    document.addEventListener('click', function (el) {
        if (el.target.classList.contains('start')) {
            el.target.disabled = true;
            el.target.parentNode.childNodes[1].disabled = false;
        }
        else if (el.target.classList.contains('stop')) {
            el.target.disabled = true;
            el.target.parentNode.childNodes[0].disabled = false;
        }
    });
}
function race() {
    document.querySelector('.race').addEventListener('click', function () {
        document.querySelectorAll('.start').forEach(function (el) {
            el.disabled = true;
        });
        document.querySelectorAll('.stop').forEach(function (el) {
            el.disabled = false;
        });
    });
}
function reset() {
    document.querySelector('.reset').addEventListener('click', function () {
        document.querySelectorAll('.stop').forEach(function (el) {
            el.disabled = true;
        });
        document.querySelectorAll('.start').forEach(function (el) {
            el.disabled = false;
        });
    });
}


/***/ }),

/***/ "./src/views.ts":
/*!**********************!*\
  !*** ./src/views.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "garage": () => (/* binding */ garage),
/* harmony export */   "win": () => (/* binding */ win)
/* harmony export */ });
function win() {
    document.querySelector('.buttWinners').addEventListener('click', function () {
        document.querySelector('.garage').style.display = 'none';
        document.querySelector('.garage1').style.display = 'none';
        document.querySelector('.winners').style.display = '';
    });
}
function garage() {
    document.querySelector('.buttGarage').addEventListener('click', function () {
        document.querySelector('.winners').style.display = 'none';
        document.querySelector('.garage').style.display = '';
        document.querySelector('.garage1').style.display = '';
    });
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ "./src/views.ts");
/* harmony import */ var _addCar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCar */ "./src/addCar.ts");
/* harmony import */ var _startStop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startStop */ "./src/startStop.ts");




(0,_views__WEBPACK_IMPORTED_MODULE_1__.win)();
(0,_views__WEBPACK_IMPORTED_MODULE_1__.garage)();
(0,_addCar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.startStop)();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.race)();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.reset)();
alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо <3');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBRTtBQUNMLDhDQUFNLEVBQUU7QUFDUixtREFBVSxFQUFFO0FBQ1oscURBQVMsRUFBRTtBQUNYLGdEQUFJLEVBQUU7QUFDTixpREFBSyxFQUFFO0FBRVAsS0FBSyxDQUFDLDBGQUEwRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2FkZENhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9zdGFydFN0b3AudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvdmlld3MudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkaW5nQ2FycygpIHtcclxuICAgIHZhciBpID0gMFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgaSsrXHJcbiAgICAgICAgbGV0IHJvYWQgPSBgPGRpdiBjbGFzcz1cImJsb2NrQ2FyXCI+PGRpdiBjbGFzcz1cInNldHRJbmZvXCI+PGJ1dHRvbiBjbGFzcz1cInNlbGVjdCR7aX1cIj5TZWxlY3Q8L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCI+UmVtb3ZlPC9idXR0b24+PGRpdiBjbGFzcz1cIm5hbUNhciR7aX1cIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicm9hZFwiPjxkaXYgY2xhc3M9XCJzdGFydFN0b3Ake2l9XCI+PGJ1dHRvbiBjbGFzcz1cInN0YXJ0XCI+QTwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJzdG9wXCIgZGlzYWJsZWQvPkI8L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzPVwid2F5XCI+IDxpbWcgY2xhc3M9XCJjYXJJbWcgY2FyQ29sb3Ike2l9XCIgc3JjPVwiYXNzZXRzL2Nhci5wbmdcIiBhbHQ9XCJjYXJcIj48aW1nIGNsYXNzPVwiZmxhZ1wiIHNyYz1cImFzc2V0cy9mbGFnLnBuZ1wiIGFsdD1cImZsYWdcIj48L2Rpdj48L2Rpdj48L2Rpdj5gXHJcbiAgICBsZXQgY2FycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJsb2NrQ2FyJHtpfWApXHJcbiAgICBjYXJzLmlubmVySFRNTCA9IHJvYWQgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnNcIikuYXBwZW5kQ2hpbGQoY2FycykgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmFtQ2FyJHtpfWApLnRleHRDb250ZW50ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJy5pbnBDcmVhdCcpLnZhbHVlXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAuY2FyQ29sb3Ike2l9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIuY3JlYXRlQ29sb3JcIikudmFsdWVcclxufSlcclxufVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcCgpIHtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGVsOmFueSk6dm9pZCB7IFxyXG4gICAgICAgIGlmKGVsLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJ0Jykpe1xyXG4gICAgICAgICAgICBlbC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uZGlzYWJsZWQgPSBmYWxzZSBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihlbC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdG9wJykpe1xyXG4gICAgICAgICAgICBlbC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWNlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0JykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdG9wJykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0b3AnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsOmFueSl7XHJcbiAgICAgICAgICAgIGVsLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0JykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbiIsImV4cG9ydCAgZnVuY3Rpb24gd2luKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dFdpbm5lcnMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5nYXJhZ2UnKS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZ2FyYWdlMScpLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy53aW5uZXJzJykuc3R5bGUuZGlzcGxheSAgPSAnJ1xyXG4gICAgfSlcclxufVxyXG5leHBvcnQgIGZ1bmN0aW9uIGdhcmFnZSgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRHYXJhZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy53aW5uZXJzJykuc3R5bGUuZGlzcGxheSAgPSAnbm9uZSdcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmdhcmFnZScpLnN0eWxlLmRpc3BsYXkgID0gJydcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmdhcmFnZTEnKS5zdHlsZS5kaXNwbGF5ICA9ICcnXHJcbiAgICB9KVxyXG59IFxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuaW1wb3J0IHt3aW4sZ2FyYWdlfSBmcm9tICcuL3ZpZXdzJ1xyXG5pbXBvcnQgYWRkaW5nQ2FycyBmcm9tICcuL2FkZENhcidcclxuaW1wb3J0IHtzdGFydFN0b3AsIHJhY2UsIHJlc2V0fSBmcm9tICcuL3N0YXJ0U3RvcCdcclxuXHJcbndpbigpXHJcbmdhcmFnZSgpXHJcbmFkZGluZ0NhcnMoKVxyXG5zdGFydFN0b3AoKVxyXG5yYWNlKClcclxucmVzZXQoKVxyXG5cclxuYWxlcnQoJ9CX0LTRgNCw0LLRgdGC0LLRg9C50YLQtSwg0L3QtSDQvNC+0LPQu9C4INCx0Ysg0LLRiyDQv9GA0L7QstC10YDQuNGC0Ywg0LzQvtGOINGA0LDQsdC+0YLRgyDQsiDQutC+0L3RhtC1INC60YDQvtGB0YEg0YfQtdC60LAuINCX0LDRgNCw0L3QtdC1INGB0L/QsNGB0LjQsdC+IDwzJykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=