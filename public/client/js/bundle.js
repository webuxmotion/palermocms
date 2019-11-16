/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/areaCalculator.js":
/*!**********************************!*\
  !*** ./src/js/areaCalculator.js ***!
  \**********************************/
/*! exports provided: areaCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaCalculator", function() { return areaCalculator; });
const areaCalculator = (s) => {
    const proto = {
      sum() {
        let sum = 0;
  
        s.forEach(el => {
          switch (el.type) {
            case 'Circle':
              sum += Math.PI * (+el.radius * +el.radius);
              break;
            case 'Square':
              sum += +el.length * +el.length;
              break;
            case 'Rect':
              sum += el.a * el.b;
              break;
            default:
              console.log(`Add case for type ${el.type}`);
          }
        });
  
        return sum;
      }
    }
    return Object.assign(Object.create(proto), {shapes: s})
  }

/***/ }),

/***/ "./src/js/areaOputter.js":
/*!*******************************!*\
  !*** ./src/js/areaOputter.js ***!
  \*******************************/
/*! exports provided: areaOputter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaOputter", function() { return areaOputter; });
const areaOputter = (areas) => {
    const proto = {
  
      JSON() {
        const res = {
          'sum': this.areas.sum()
        };
        return res;
      },
  
      HTML(container) {
        const res = `<h2>Total area of the shapes: ${this.areas.sum()}</h2>`;
        container.innerHTML = res;
      },
  
      ALERT() {
        const res = `Total area of the shapes: ${this.areas.sum()}`;
        alert(res);
      }
    }
    return Object.assign(Object.create(proto), {areas: areas})
  }

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ "./src/js/shapes.js");
/* harmony import */ var _areaCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areaCalculator */ "./src/js/areaCalculator.js");
/* harmony import */ var _areaOputter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./areaOputter */ "./src/js/areaOputter.js");
// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";

// jQuery(function() {
//   jQuery("body").css("color", "blue");
// });





const shapes = [
    Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["circle"])(0.5),
    Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["square"])(5),
    Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["rect"])(10, 5),
    Object(_shapes__WEBPACK_IMPORTED_MODULE_0__["square"])(7)
];
  
  const areas = Object(_areaCalculator__WEBPACK_IMPORTED_MODULE_1__["areaCalculator"])(shapes);
  const output = Object(_areaOputter__WEBPACK_IMPORTED_MODULE_2__["areaOputter"])(areas);
  
  console.log(output.JSON());

console.log('testtddfddft');
console.log('test');

/***/ }),

/***/ "./src/js/shapes.js":
/*!**************************!*\
  !*** ./src/js/shapes.js ***!
  \**************************/
/*! exports provided: circle, square, rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rect", function() { return rect; });
const circle = (radius) => {
    const proto = {
      type: 'Circle'
    }
    return Object.assign(Object.create(proto), {radius})
  }
  const square = (length) => {
    const proto = {
      type: 'Square'
    }
    return Object.assign(Object.create(proto), {length})
  }
  const rect = (a, b) => {
    const proto = {
      type: 'Rect'
    }
    return Object.assign(Object.create(proto), {a, b})
  }

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/styles.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/styles.scss */"./src/scss/styles.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map