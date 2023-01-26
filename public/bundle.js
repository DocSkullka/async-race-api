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
    var j = 0;
    var k = 1;
    document.querySelector('.create').addEventListener('click', function () {
        document.querySelector('.garageCount').textContent = "GARAGE ".concat(document.querySelectorAll('.blockCar').length + 1);
        i++;
        j++;
        var road = "<div class=\"blockCar\"><div class=\"settInfo\"><button class=\"select".concat(i, "\">Select</button><button class=\"remove\">Remove</button><div class=\"namCar").concat(i, "\"></div></div><div class=\"road\"><div class=\"startStop").concat(i, "\"><button class=\"start\">A</button><button class=\"stop\" disabled/>B</button></div><div class=\"way\"> <img class=\"carImg carColor").concat(i, "\" src=\"assets/car.png\" alt=\"car\"><img class=\"flag\" src=\"assets/flag.png\" alt=\"flag\"></div></div></div>");
        var cars = document.createElement("blockCar".concat(i));
        cars.innerHTML = road;
        document.querySelector(".cars").appendChild(cars);
        document.querySelector(".namCar".concat(i)).textContent = document.querySelector('.inpCreat').value;
        document.querySelector(".carColor".concat(i)).style.backgroundColor = document.querySelector(".createColor").value;
        if (j > 7) {
            document.querySelector("blockCar".concat(i)).style.display = 'none';
        }
        if (j > 7) {
            document.querySelector('.next').disabled = false;
        }
    });
    document.querySelector('.next').addEventListener('click', function () {
        return j = document.querySelectorAll(".blockCar").length - (7 * k);
    });
    document.querySelector('.next').addEventListener('click', function () {
        document.querySelector('.next').disabled = true;
        k++;
    });
    document.querySelector('.back').addEventListener('click', function () {
        k--;
    });
}


/***/ }),

/***/ "./src/animation.ts":
/*!**************************!*\
  !*** ./src/animation.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ anim)
/* harmony export */ });
function anim() {
    var width = 0;
    setInterval(function () {
        width = +window.innerWidth - 120;
    }, 1000);
    document.addEventListener('click', function (co) {
        if (co.target.className == 'start') {
            var m_1 = 10;
            var i_1 = co.target.id;
            var timer_1 = setInterval(function () {
                m_1 = m_1 + 20;
                document.querySelector(".carColor".concat(i_1)).style.left = m_1 + 'px';
                if (m_1 >= width)
                    clearInterval(timer_1);
            }, 25);
        }
        if (co.target.className == 'stop') {
            var s = co.target.id;
            document.querySelector(".carColor".concat(s)).style.left = 45 + 'px';
            console.log(s);
            return;
        }
        else {
            return;
        }
    });
}


/***/ }),

/***/ "./src/paggination.ts":
/*!****************************!*\
  !*** ./src/paggination.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextBackButton": () => (/* binding */ nextBackButton),
/* harmony export */   "paggination": () => (/* binding */ paggination)
/* harmony export */ });
function paggination() {
    document.querySelector('.garage').insertAdjacentHTML('afterend', "<div class=\"backNextButton\"><button class=\"back\" disabled>BACK</button><button class=\"next\" disabled>NEXT</button></div>");
}
function nextBackButton() {
    var i = 1;
    document.querySelector('.next').addEventListener('click', function () {
        if (document.querySelector('.cars').childNodes.length / 7 <= i) {
            document.querySelector('.next').disabled = true;
        }
        else {
            i++;
            document.querySelector('.pageNumber').textContent = "Page ".concat(i);
            if (i > 1) {
                document.querySelector('.back').disabled = false;
            }
            document.querySelectorAll(".blockCar").forEach(function (el) {
                el.style.display = 'none';
            });
            for (var k = 7; k > 0; k--) {
                if (document.querySelectorAll(".blockCar")[(7 * i) - k]) {
                    document.querySelector("blockCar".concat((7 * i) - k + 1)).style.display = '';
                    document.querySelectorAll(".blockCar")[(7 * i) - k].style.display = '';
                }
            }
        }
    });
    document.querySelector('.back').addEventListener('click', function () {
        if (i == 1) {
            document.querySelector('.back').disabled = true;
        }
        else {
            i--;
            document.querySelector('.pageNumber').textContent = "Page ".concat(i);
            document.querySelector('.next').disabled = false;
            document.querySelectorAll(".blockCar").forEach(function (el) {
                el.style.display = 'none';
            });
        }
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
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation */ "./src/animation.ts");
/* harmony import */ var _paggination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paggination */ "./src/paggination.ts");






(0,_views__WEBPACK_IMPORTED_MODULE_1__.win)();
(0,_views__WEBPACK_IMPORTED_MODULE_1__.garage)();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.startStop)();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.race)();
(0,_startStop__WEBPACK_IMPORTED_MODULE_3__.reset)();
(0,_animation__WEBPACK_IMPORTED_MODULE_4__["default"])();
alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо  <3');
(0,_paggination__WEBPACK_IMPORTED_MODULE_5__.paggination)();
(0,_paggination__WEBPACK_IMPORTED_MODULE_5__.nextBackButton)();
(0,_addCar__WEBPACK_IMPORTED_MODULE_2__["default"])();
// alert('Здравствуйте, не могли бы вы проверить мою работу в конце кросс чека. Заранее спасибо <3')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxNQUFNO1FBQ3ZFLFFBQVEsQ0FBQyxhQUFhLENBQWMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxFQUFFO1FBQ2xFLFFBQVEsQ0FBQyxhQUFhLENBQWMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxFQUFFO0lBQ3ZFLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7VUNiRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYTtBQUNEO0FBQ2lCO0FBQ3BCO0FBQzZCO0FBRTNELDJDQUFHLEVBQUU7QUFDTCw4Q0FBTSxFQUFFO0FBQ1IscURBQVMsRUFBRTtBQUNYLGdEQUFJLEVBQUU7QUFDTixpREFBSyxFQUFFO0FBQ1Asc0RBQUksRUFBRTtBQUNOLEtBQUssQ0FBQywyRkFBMkYsQ0FBQztBQUVsRyx5REFBVyxFQUFFO0FBQ2IsNERBQWMsRUFBRTtBQUNoQixtREFBVSxFQUFFO0FBRVosb0dBQW9HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2FkZENhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvcGFnZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvc3RhcnRTdG9wLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL3ZpZXdzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZGluZ0NhcnMoKSB7XHJcbiAgICBsZXQgaSA9IDBcclxuICAgIGxldCBqID0gMFxyXG4gICAgbGV0IGsgPSAxXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlQ291bnQnKS50ZXh0Q29udGVudCA9IGBHQVJBR0UgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2tDYXInKS5sZW5ndGggKyAxfWBcclxuICAgICAgICBpKytcclxuICAgICAgICBqKytcclxuICAgICAgICBsZXQgcm9hZCA9IGA8ZGl2IGNsYXNzPVwiYmxvY2tDYXJcIj48ZGl2IGNsYXNzPVwic2V0dEluZm9cIj48YnV0dG9uIGNsYXNzPVwic2VsZWN0JHtpfVwiPlNlbGVjdDwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5SZW1vdmU8L2J1dHRvbj48ZGl2IGNsYXNzPVwibmFtQ2FyJHtpfVwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJyb2FkXCI+PGRpdiBjbGFzcz1cInN0YXJ0U3RvcCR7aX1cIj48YnV0dG9uIGNsYXNzPVwic3RhcnRcIj5BPC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInN0b3BcIiBkaXNhYmxlZC8+QjwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3M9XCJ3YXlcIj4gPGltZyBjbGFzcz1cImNhckltZyBjYXJDb2xvciR7aX1cIiBzcmM9XCJhc3NldHMvY2FyLnBuZ1wiIGFsdD1cImNhclwiPjxpbWcgY2xhc3M9XCJmbGFnXCIgc3JjPVwiYXNzZXRzL2ZsYWcucG5nXCIgYWx0PVwiZmxhZ1wiPjwvZGl2PjwvZGl2PjwvZGl2PmBcclxuICAgICAgICBsZXQgY2FycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJsb2NrQ2FyJHtpfWApXHJcbiAgICAgICAgY2Fycy5pbm5lckhUTUwgPSByb2FkIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyc1wiKS5hcHBlbmRDaGlsZChjYXJzKSBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmFtQ2FyJHtpfWApLnRleHRDb250ZW50ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJy5pbnBDcmVhdCcpLnZhbHVlXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgLmNhckNvbG9yJHtpfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiLmNyZWF0ZUNvbG9yXCIpLnZhbHVlXHJcbiAgICAgICAgaWYoaiAgPiA3KXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oYGJsb2NrQ2FyJHtpfWApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaiA+IDcpeyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KCcubmV4dCcpLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7ICAgXHJcbiAgICAgICAgcmV0dXJuIGogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihgLmJsb2NrQ2FyYCkubGVuZ3RoIC0gKDcqaylcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXsgICBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLm5leHQnKS5kaXNhYmxlZCA9IHRydWUgXHJcbiAgICAgICAgaysrICAgIFxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpeyAgIFxyXG4gICAgICAgIGstLSAgICBcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW0gKCl7XHJcbiAgICBsZXQgd2lkdGggPSAwIFxyXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgIHdpZHRoID0gK3dpbmRvdy5pbm5lcldpZHRoIC0gMTIwXHJcbiAgICB9LDEwMDApXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGNvOmFueSl7XHJcbiAgICAgICAgaWYgKGNvLnRhcmdldC5jbGFzc05hbWUgPT0gJ3N0YXJ0Jyl7XHJcbiAgICAgICAgICAgIGxldCBtOm51bWJlciA9IDEwXHJcbiAgICAgICAgICAgIGxldCBpID0gY28udGFyZ2V0LmlkXHJcbiAgICAgICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBtPW0gKyAyMFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgLmNhckNvbG9yJHtpfWApLnN0eWxlLmxlZnQ9bSsncHgnXHJcbiAgICAgICAgICAgICAgICBpZihtID49IHdpZHRoKWNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwyNSkgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvLnRhcmdldC5jbGFzc05hbWUgPT0gJ3N0b3AnKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gY28udGFyZ2V0LmlkXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYC5jYXJDb2xvciR7c31gKS5zdHlsZS5sZWZ0PSA0NSsncHgnXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHMpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcGFnZ2luYXRpb24oKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYDxkaXYgY2xhc3M9XCJiYWNrTmV4dEJ1dHRvblwiPjxidXR0b24gY2xhc3M9XCJiYWNrXCIgZGlzYWJsZWQ+QkFDSzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJuZXh0XCIgZGlzYWJsZWQ+TkVYVDwvYnV0dG9uPjwvZGl2PmApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0QmFja0J1dHRvbigpIHtcclxuICAgIGxldCBpOm51bWJlciA9IDFcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJzJykuY2hpbGROb2Rlcy5sZW5ndGggLyA3IDw9IGkpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLm5leHQnKS5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB9ZWxzZXsgICAgIFxyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VOdW1iZXInKS50ZXh0Q29udGVudCA9IGBQYWdlICR7aX1gXHJcbiAgICAgICAgICAgIGlmKGk+MSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PignLmJhY2snKS5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oYC5ibG9ja0NhcmApLmZvckVhY2goZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBmb3IgKGxldCBrOm51bWJlciA9IDc7IGsgPiAwOyBrLS0peyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oYC5ibG9ja0NhcmApWyg3KmkpIC0ga10pe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KGBibG9ja0NhciR7KDcqaSkgLSBrICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihgLmJsb2NrQ2FyYClbKDcqaSkgLSBrXS5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZihpID09IDEpeyBcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5iYWNrJykuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGktLVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZU51bWJlcicpLnRleHRDb250ZW50ID0gYFBhZ2UgJHtpfWBcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oJy5uZXh0JykuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PihgLmJsb2NrQ2FyYCkuZm9yRWFjaChmdW5jdGlvbihlbCl7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcCgpIHtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGVsOmFueSk6dm9pZCB7IFxyXG4gICAgICAgIGlmKGVsLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJ0Jykpe1xyXG4gICAgICAgICAgICBlbC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uZGlzYWJsZWQgPSBmYWxzZSBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihlbC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdG9wJykpe1xyXG4gICAgICAgICAgICBlbC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGVsLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWNlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0JykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdG9wJykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0b3AnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsOmFueSl7XHJcbiAgICAgICAgICAgIGVsLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0JykuZm9yRWFjaChmdW5jdGlvbihlbDphbnkpe1xyXG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0iLCJleHBvcnQgIGZ1bmN0aW9uIHdpbigpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRXaW5uZXJzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZ2FyYWdlJykuc3R5bGUuZGlzcGxheSAgPSAnbm9uZSdcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmdhcmFnZTEnKS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcud2lubmVycycpLnN0eWxlLmRpc3BsYXkgID0gJydcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0ICBmdW5jdGlvbiBnYXJhZ2UoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0R2FyYWdlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcud2lubmVycycpLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5nYXJhZ2UnKS5zdHlsZS5kaXNwbGF5ICA9ICcnXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5nYXJhZ2UxJykuc3R5bGUuZGlzcGxheSAgPSAnJ1xyXG4gICAgfSlcclxufSBcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcbmltcG9ydCB7d2luLGdhcmFnZX0gZnJvbSAnLi92aWV3cydcclxuaW1wb3J0IGFkZGluZ0NhcnMgZnJvbSAnLi9hZGRDYXInXHJcbmltcG9ydCB7c3RhcnRTdG9wLCByYWNlLCByZXNldH0gZnJvbSAnLi9zdGFydFN0b3AnXHJcbmltcG9ydCBhbmltIGZyb20gJy4vYW5pbWF0aW9uJ1xyXG5pbXBvcnQgeyBwYWdnaW5hdGlvbiwgbmV4dEJhY2tCdXR0b24gfSBmcm9tICcuL3BhZ2dpbmF0aW9uJ1xyXG5cclxud2luKClcclxuZ2FyYWdlKClcclxuc3RhcnRTdG9wKClcclxucmFjZSgpXHJcbnJlc2V0KClcclxuYW5pbSgpXHJcbmFsZXJ0KCfQl9C00YDQsNCy0YHRgtCy0YPQudGC0LUsINC90LUg0LzQvtCz0LvQuCDQsdGLINCy0Ysg0L/RgNC+0LLQtdGA0LjRgtGMINC80L7RjiDRgNCw0LHQvtGC0YMg0LIg0LrQvtC90YbQtSDQutGA0L7RgdGBINGH0LXQutCwLiDQl9Cw0YDQsNC90LXQtSDRgdC/0LDRgdC40LHQviAgPDMnKVxyXG5cclxucGFnZ2luYXRpb24oKVxyXG5uZXh0QmFja0J1dHRvbigpXHJcbmFkZGluZ0NhcnMoKVxyXG5cclxuLy8gYWxlcnQoJ9CX0LTRgNCw0LLRgdGC0LLRg9C50YLQtSwg0L3QtSDQvNC+0LPQu9C4INCx0Ysg0LLRiyDQv9GA0L7QstC10YDQuNGC0Ywg0LzQvtGOINGA0LDQsdC+0YLRgyDQsiDQutC+0L3RhtC1INC60YDQvtGB0YEg0YfQtdC60LAuINCX0LDRgNCw0L3QtdC1INGB0L/QsNGB0LjQsdC+IDwzJykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=