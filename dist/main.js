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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/PortalFrame1.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame1.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame1.png");

/***/ }),

/***/ "./src/assets/PortalFrame2.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame2.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame2.png");

/***/ }),

/***/ "./src/assets/PortalFrame3.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame3.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame3.png");

/***/ }),

/***/ "./src/assets/PortalFrame4.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame4.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame4.png");

/***/ }),

/***/ "./src/assets/PortalFrame5.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame5.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame5.png");

/***/ }),

/***/ "./src/assets/PortalFrame6.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame6.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame6.png");

/***/ }),

/***/ "./src/assets/PortalFrame7.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame7.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame7.png");

/***/ }),

/***/ "./src/assets/PortalFrame8.png":
/*!*************************************!*\
  !*** ./src/assets/PortalFrame8.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/PortalFrame8.png");

/***/ }),

/***/ "./src/assets/World1Door.png":
/*!***********************************!*\
  !*** ./src/assets/World1Door.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/World1Door.png");

/***/ }),

/***/ "./src/assets/World2Door.png":
/*!***********************************!*\
  !*** ./src/assets/World2Door.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/World2Door.png");

/***/ }),

/***/ "./src/assets/footstep.mp3":
/*!*********************************!*\
  !*** ./src/assets/footstep.mp3 ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/audio/footstep.mp3");

/***/ }),

/***/ "./src/assets/idleFrame.png":
/*!**********************************!*\
  !*** ./src/assets/idleFrame.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/idleFrame.png");

/***/ }),

/***/ "./src/assets/idleFrame2.png":
/*!***********************************!*\
  !*** ./src/assets/idleFrame2.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/idleFrame2.png");

/***/ }),

/***/ "./src/assets/jumpSound.mp3":
/*!**********************************!*\
  !*** ./src/assets/jumpSound.mp3 ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/audio/jumpSound.mp3");

/***/ }),

/***/ "./src/assets/largePlatform.png":
/*!**************************************!*\
  !*** ./src/assets/largePlatform.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/largePlatform.png");

/***/ }),

/***/ "./src/assets/mainpage_bg.png":
/*!************************************!*\
  !*** ./src/assets/mainpage_bg.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/mainpage_bg.png");

/***/ }),

/***/ "./src/assets/mediumPlatform.png":
/*!***************************************!*\
  !*** ./src/assets/mediumPlatform.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/mediumPlatform.png");

/***/ }),

/***/ "./src/assets/menuBlip.mp3":
/*!*********************************!*\
  !*** ./src/assets/menuBlip.mp3 ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/audio/menuBlip.mp3");

/***/ }),

/***/ "./src/assets/musicOff.png":
/*!*********************************!*\
  !*** ./src/assets/musicOff.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/musicOff.png");

/***/ }),

/***/ "./src/assets/musicOn.png":
/*!********************************!*\
  !*** ./src/assets/musicOn.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/musicOn.png");

/***/ }),

/***/ "./src/assets/pause.mp3":
/*!******************************!*\
  !*** ./src/assets/pause.mp3 ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/audio/pause.mp3");

/***/ }),

/***/ "./src/assets/pauseMenu.mp3":
/*!**********************************!*\
  !*** ./src/assets/pauseMenu.mp3 ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/audio/pauseMenu.mp3");

/***/ }),

/***/ "./src/assets/runLeftFrame1.png":
/*!**************************************!*\
  !*** ./src/assets/runLeftFrame1.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/runLeftFrame1.png");

/***/ }),

/***/ "./src/assets/runLeftFrame2.png":
/*!**************************************!*\
  !*** ./src/assets/runLeftFrame2.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/runLeftFrame2.png");

/***/ }),

/***/ "./src/assets/runLeftFrame3.png":
/*!**************************************!*\
  !*** ./src/assets/runLeftFrame3.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/runLeftFrame3.png");

/***/ }),

/***/ "./src/assets/runRightFrame1.png":
/*!***************************************!*\
  !*** ./src/assets/runRightFrame1.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/runRightFrame1.png");

/***/ }),

/***/ "./src/assets/runRightFrame2.png":
/*!***************************************!*\
  !*** ./src/assets/runRightFrame2.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/runRightFrame2.png");

/***/ }),

/***/ "./src/assets/runRightFrame3.png":
/*!***************************************!*\
  !*** ./src/assets/runRightFrame3.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/runRightFrame3.png");

/***/ }),

/***/ "./src/assets/smallPlatform.png":
/*!**************************************!*\
  !*** ./src/assets/smallPlatform.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/smallPlatform.png");

/***/ }),

/***/ "./src/assets/soundOff.png":
/*!*********************************!*\
  !*** ./src/assets/soundOff.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/soundOff.png");

/***/ }),

/***/ "./src/assets/soundOn.png":
/*!********************************!*\
  !*** ./src/assets/soundOn.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/soundOn.png");

/***/ }),

/***/ "./src/assets/tabIcon.png":
/*!********************************!*\
  !*** ./src/assets/tabIcon.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/tabIcon.png");

/***/ }),

/***/ "./src/assets/tinyPlatform.png":
/*!*************************************!*\
  !*** ./src/assets/tinyPlatform.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/tinyPlatform.png");

/***/ }),

/***/ "./src/assets/world1Music.mp3":
/*!************************************!*\
  !*** ./src/assets/world1Music.mp3 ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/audio/world1Music.mp3");

/***/ }),

/***/ "./src/assets/world2BG.png":
/*!*********************************!*\
  !*** ./src/assets/world2BG.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2BG.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/homepage */ "./src/scripts/homepage.js");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");



document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas-main");
  var ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 500;
  var gameFrame = 0;
  new _scripts_homepage__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, ctx).render();
});

/***/ }),

/***/ "./src/scripts/exit.js":
/*!*****************************!*\
  !*** ./src/scripts/exit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Exit; });
/* harmony import */ var _interactable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactable */ "./src/scripts/interactable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Exit = /*#__PURE__*/function (_Interactable) {
  _inherits(Exit, _Interactable);

  var _super = _createSuper(Exit);

  function Exit(canvas, ctx, x, y, height, width, levelNum, worldNum) {
    var _this;

    _classCallCheck(this, Exit);

    _this = _super.call(this, canvas, ctx, x, y, height, width);
    _this.levelNum = levelNum;
    _this.worldNum = worldNum;
    _this.exitImage = new Image();
    return _this;
  }

  _createClass(Exit, [{
    key: "render",
    value: function render(frameNum) {
      var xPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.x;
      var yPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.y;
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 60;
      var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 80;

      if (this.levelNum == 5) {
        var portalFrame = frameNum % 120;
        var currentImageNum = Math.floor(portalFrame / 15) + 1;
        this.exitImage.src = "dist/images/PortalFrame".concat(currentImageNum, ".png");
        this.ctx.drawImage(this.exitImage, xPos, yPos, width, height);
      } else {
        this.exitImage.src = "dist/images/World".concat(this.worldNum, "Door.png");
        this.ctx.drawImage(this.exitImage, this.x, this.y, this.width, this.height);
      }
    }
  }]);

  return Exit;
}(_interactable__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _assets_runRightFrame1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/runRightFrame1.png */ "./src/assets/runRightFrame1.png");
/* harmony import */ var _assets_runRightFrame2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/runRightFrame2.png */ "./src/assets/runRightFrame2.png");
/* harmony import */ var _assets_runRightFrame3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/runRightFrame3.png */ "./src/assets/runRightFrame3.png");
/* harmony import */ var _assets_runLeftFrame1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/runLeftFrame1.png */ "./src/assets/runLeftFrame1.png");
/* harmony import */ var _assets_runLeftFrame2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/runLeftFrame2.png */ "./src/assets/runLeftFrame2.png");
/* harmony import */ var _assets_runLeftFrame3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/runLeftFrame3.png */ "./src/assets/runLeftFrame3.png");
/* harmony import */ var _assets_PortalFrame1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/PortalFrame1.png */ "./src/assets/PortalFrame1.png");
/* harmony import */ var _assets_PortalFrame2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/PortalFrame2.png */ "./src/assets/PortalFrame2.png");
/* harmony import */ var _assets_PortalFrame3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/PortalFrame3.png */ "./src/assets/PortalFrame3.png");
/* harmony import */ var _assets_PortalFrame4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/PortalFrame4.png */ "./src/assets/PortalFrame4.png");
/* harmony import */ var _assets_PortalFrame5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/PortalFrame5.png */ "./src/assets/PortalFrame5.png");
/* harmony import */ var _assets_PortalFrame6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/PortalFrame6.png */ "./src/assets/PortalFrame6.png");
/* harmony import */ var _assets_PortalFrame7_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/PortalFrame7.png */ "./src/assets/PortalFrame7.png");
/* harmony import */ var _assets_PortalFrame8_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/PortalFrame8.png */ "./src/assets/PortalFrame8.png");
/* harmony import */ var _assets_World1Door_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/World1Door.png */ "./src/assets/World1Door.png");
/* harmony import */ var _assets_World2Door_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/World2Door.png */ "./src/assets/World2Door.png");
/* harmony import */ var _assets_world1Music_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/world1Music.mp3 */ "./src/assets/world1Music.mp3");
/* harmony import */ var _assets_jumpSound_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/jumpSound.mp3 */ "./src/assets/jumpSound.mp3");
/* harmony import */ var _assets_footstep_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/footstep.mp3 */ "./src/assets/footstep.mp3");
/* harmony import */ var _assets_largePlatform_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/largePlatform.png */ "./src/assets/largePlatform.png");
/* harmony import */ var _assets_mediumPlatform_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/mediumPlatform.png */ "./src/assets/mediumPlatform.png");
/* harmony import */ var _assets_smallPlatform_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/smallPlatform.png */ "./src/assets/smallPlatform.png");
/* harmony import */ var _assets_tinyPlatform_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/tinyPlatform.png */ "./src/assets/tinyPlatform.png");
/* harmony import */ var _assets_idleFrame_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/idleFrame.png */ "./src/assets/idleFrame.png");
/* harmony import */ var _assets_idleFrame2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/idleFrame2.png */ "./src/assets/idleFrame2.png");
/* harmony import */ var _interactable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./interactable */ "./src/scripts/interactable.js");
/* harmony import */ var _gamemenu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gamemenu */ "./src/scripts/gamemenu.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./exit */ "./src/scripts/exit.js");
/* harmony import */ var _leveldata__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./leveldata */ "./src/scripts/leveldata.js");
/* harmony import */ var _interactableImage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./interactableImage */ "./src/scripts/interactableImage.js");
/* harmony import */ var _levelText__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./levelText */ "./src/scripts/levelText.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

































var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx, worldNum, levelNum, game, renderHome, gameMusic, musicMuted, toggleSoundMuted, getSoundMuted, toggleMusicMuted) {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.worldNum = worldNum;
    this.levelNum = levelNum;
    this.game = game;
    this.renderHome = renderHome;
    this.gameMusic = gameMusic;
    this.musicMuted = musicMuted;
    this.toggleSoundMuted = toggleSoundMuted;
    this.getSoundMuted = getSoundMuted;
    this.toggleMusicMuted = toggleMusicMuted;
    this.frameNum = 0;
    this.levelTime = 6000;
    this.paused = false;
    this.menu = new _gamemenu__WEBPACK_IMPORTED_MODULE_26__["default"](this.canvas, this.ctx, "failed", this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome, this.gameMusic, this.musicMuted, this.toggleSoundMuted, this.getSoundMuted, this.toggleSoundMuted);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // get seed data for current level

    this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_28__["LevelData"][this.worldNum - 1][this.levelNum - 1];
    this.VELOCITY_X = 3;
    this.GRAVITY = this.levelData.gravity;
    this.Player = {
      velocity: [0, 0],
      isJumping: false,
      canJump: false,
      x: this.levelData.playerStartPos[0],
      y: this.levelData.playerStartPos[1],
      width: 34,
      height: 60,
      frameNum: 0,
      faceRight: true,
      moving: false,
      collidingX: false,
      collidingY: false,
      grounded: false,
      collisionsurfaceY: 0
    };
    this.pauseSound = new Audio('dist/audio/pause.mp3');
    this.pauseSound.volume = 0.2; // player movement sounds

    this.jumpSound = new Audio('dist/audio/jumpSound.mp3');
    this.jumpSound.volume = 0.6;
    this.footstep = new Audio('dist/audio/footstep.mp3');
    this.footstep.volume = 0.6;
    this.worldBGs = ['dist/images/mainpage_bg.png', 'dist/images/world2BG.png'];
    this.playerSprite = new Image();
    this.portalFrame = 0;
    this.portalSprite = new Image(); // set exit location

    this.exit = new _exit__WEBPACK_IMPORTED_MODULE_27__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 70, 70, this.levelNum, this.worldNum); // set interactables for this stage from seed data

    this.interactables = [];
    this.images = [];
    this.levelData.interactables.forEach(function (interactable) {
      _this.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_25__["default"](_this.canvas, _this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

      if (interactable.imgUrl.length > 0) {
        _this.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_29__["default"](_this.canvas, _this.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
      }
    });
    this.levelText = "";

    if (this.levelData.levelText) {
      this.levelText = new _levelText__WEBPACK_IMPORTED_MODULE_30__["default"](this.canvas, this.ctx, this.levelData.levelText, 160, 200);
    }

    window.addEventListener('keydown', function (event) {
      if (event.key == 'd') {
        _this.Player.velocity[0] = _this.VELOCITY_X;
        _this.Player.moving = true;
        _this.Player.faceRight = true;
      } else if (event.key == 'a') {
        _this.Player.velocity[0] = -_this.VELOCITY_X;
        _this.Player.moving = true;
        _this.Player.faceRight = false;
      } else if (event.key == ' ' && _this.Player.grounded && !_this.Player.isJumping) {
        if (!_this.getSoundMuted()) _this.jumpSound.play();
        _this.Player.velocity[1] -= 5;
        _this.Player.isJumping = true;
        _this.Player.grounded = false;
        setTimeout(function () {
          _this.Player.isJumping = false;
        }, 60);
      } else if (event.key == "Escape") {
        _this.pauseSound.pause();

        _this.pauseSound.currentTime = 0;
        if (!_this.getSoundMuted()) _this.pauseSound.play();

        _this.togglePause();
      }
    });
    window.addEventListener('keyup', function (event) {
      if (event.key == 'd') {
        _this.Player.velocity[0] = 0;
        _this.Player.moving = false;
      } else if (event.key == 'a') {
        _this.Player.velocity[0] = 0;
        _this.Player.moving = false;
      } else if (event.key == ' ') {
        _this.Player.isJumping = false;
      }
    });
  }

  _createClass(Game, [{
    key: "setGame",
    value: function setGame(newGame) {
      this.game = newGame;
    }
  }, {
    key: "setData",
    value: function setData(worldNum, levelNum, game) {
      var _this2 = this;

      this.worldNum = worldNum;
      this.levelNum = levelNum;
      this.game = game;
      this.frameNum = 0;
      this.levelTime = 6000;
      this.paused = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // get seed data for current level

      this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_28__["LevelData"][this.worldNum - 1][this.levelNum - 1];
      this.VELOCITY_X = 3;
      this.GRAVITY = this.levelData.gravity;
      this.Player = {
        velocity: [0, 0],
        isJumping: false,
        canJump: false,
        x: this.levelData.playerStartPos[0],
        y: this.levelData.playerStartPos[1],
        width: 34,
        height: 60,
        frameNum: 0,
        faceRight: true,
        moving: false,
        collidingX: false,
        collidingY: false,
        grounded: false,
        collisionsurfaceY: 0
      };
      this.portalFrame = 0; // set exit location

      this.exit = new _exit__WEBPACK_IMPORTED_MODULE_27__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 50, 50, this.levelNum, this.worldNum); // set interactables for this stage from seed data

      this.interactables = [];
      this.images = [];
      this.levelData.interactables.forEach(function (interactable) {
        _this2.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_25__["default"](_this2.canvas, _this2.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

        if (interactable.imgUrl.length > 0) {
          _this2.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_29__["default"](_this2.canvas, _this2.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
        }
      });
      this.levelText = "";

      if (this.levelData.levelText) {
        this.levelText = new _levelText__WEBPACK_IMPORTED_MODULE_30__["default"](this.canvas, this.ctx, this.levelData.levelText, 160, 200);
      }
    }
  }, {
    key: "togglePause",
    value: function togglePause() {
      this.paused = !this.paused;

      if (this.paused == false) {
        this.render(true);
      }
    }
  }, {
    key: "drawPlayer",
    value: function drawPlayer(img, x, y, width, height) {
      this.ctx.drawImage(img, x, y, width, height);
    }
  }, {
    key: "gameOver",
    value: function gameOver(gameLoop) {
      this.interactables = [];
      clearInterval(gameLoop);
      this.menu.setMenuData("failed", this.worldNum, this.levelNum);
      this.menu.open();
    }
  }, {
    key: "levelComplete",
    value: function levelComplete(gameLoop) {
      var _this3 = this;

      if (this.levelNum == 5) {
        clearInterval(gameLoop);
        setTimeout(function () {
          _this3.interactables = [];
          clearInterval(finishWorld);

          _this3.menu.setMenuData("complete", _this3.worldNum, _this3.levelNum);

          _this3.menu.open();
        }, 4000);
        var count = 0;
        var exitX = 500;
        var exitY = 180;
        var exitW = 60;
        var exitH = 80;
        var finishWorld = setInterval(function () {
          _this3.ctx.clearRect(0, 0, _this3.canvas.width, _this3.canvas.height);

          count++; // draw exit

          if (count < 100) {
            exitX += 0.6;
            exitY -= 0.4;

            _this3.exit.render(count, exitX, exitY, exitW, exitH);
          } else if (count < 200) {
            exitX -= 0.3;
            exitY -= 0.4;
            exitW += 0.6;
            exitH += 0.8;

            _this3.exit.render(count, exitX, exitY, exitW, exitH);
          } else {
            _this3.exit.render(count, 530, 100, 120, 160);
          } // draw images


          _this3.images.forEach(function (image) {
            image.render();
          }); // draw interactables 


          _this3.interactables.forEach(function (interactable) {
            interactable.render();
          });

          if (count < 100) {
            if (count % 40 > 20) {
              _this3.playerSprite.src = "dist/images/idleFrame.png";
            } else {
              _this3.playerSprite.src = "dist/images/idleFrame2.png";
            }
          } else if (count < 200) {
            _this3.playerSprite.src = "dist/images/runRightFrame1.png";
          } else {
            _this3.playerSprite.src = "dist/images/runRightFrame2.png";
          }

          if (count >= 200 && count < 225) {
            _this3.Player.x += 1;
            _this3.Player.y -= 2;
          } else if (count >= 200 && count < 250) {
            _this3.Player.x += 1;
            _this3.Player.y -= 1;
          } else if (count >= 200 && count < 275) {
            _this3.Player.x += 1;
            _this3.Player.y -= 0.5;
          } else if (count >= 200 && count < 300) {
            _this3.Player.x += 1;
          } else if (count >= 200 && count < 325) {
            _this3.Player.x += 1;
            _this3.Player.y += 0.5;
          }

          if (count >= 300) {
            _this3.Player.width -= 0.3;
            _this3.Player.height -= 0.5;
            _this3.Player.x += 0.15;
            _this3.Player.y += 0.25;
          }

          _this3.drawPlayer(_this3.playerSprite, _this3.Player.x, _this3.Player.y, _this3.Player.width, _this3.Player.height);
        }, 10);
      } else {
        this.interactables = [];
        clearInterval(gameLoop);
        this.menu.setMenuData("complete", this.worldNum, this.levelNum);
        this.menu.open();
      }
    }
  }, {
    key: "pauseGame",
    value: function pauseGame(gameLoop) {
      clearInterval(gameLoop);
      this.menu.setMenuData("pause", this.worldNum, this.levelNum);
      this.menu.open();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.levelText != "" && !skip) {
        this.levelText.open();
      }

      this.canvas.style.backgroundImage = "url(".concat(this.worldBGs[this.worldNum - 1], ")");
      var gameLoop = setInterval(function () {
        if (_this4.paused) {
          _this4.pauseGame(gameLoop);
        }

        _this4.ctx.clearRect(0, 0, _this4.canvas.width, _this4.canvas.height);

        _this4.ctx.fillStyle = "rgb(0,0,0)";

        if (_this4.Player.y > 500 || _this4.levelTime <= 110) {
          _this4.gameOver(gameLoop);
        } // draw exit


        _this4.exit.render(_this4.frameNum); // draw images


        _this4.images.forEach(function (image) {
          image.render();
        }); // draw player


        _this4.drawPlayer(_this4.playerSprite, _this4.Player.x, _this4.Player.y, _this4.Player.width, _this4.Player.height); // handle player frame image


        if (_this4.Player.moving) {
          if (_this4.Player.grounded) {
            if (!_this4.getSoundMuted()) _this4.footstep.play();
            var currFrame = Math.floor(_this4.Player.frameNum / 10);

            if (_this4.Player.faceRight) {
              if (currFrame == 0 || currFrame == 2) {
                _this4.playerSprite.src = "dist/images/runRightFrame1.png";
              } else if (currFrame == 1) {
                _this4.playerSprite.src = "dist/images/runRightFrame2.png";
              } else if (currFrame == 3) {
                _this4.playerSprite.src = "dist/images/runRightFrame3.png";
              }
            } else {
              if (currFrame == 0 || currFrame == 2) {
                _this4.playerSprite.src = "dist/images/runLeftFrame1.png";
              } else if (currFrame == 1) {
                _this4.playerSprite.src = "dist/images/runLeftFrame2.png";
              } else if (currFrame == 3) {
                _this4.playerSprite.src = "dist/images/runLeftFrame3.png";
              }
            }
          } else {
            if (_this4.Player.faceRight) {
              _this4.playerSprite.src = "dist/images/runRightFrame2.png";
            } else {
              _this4.playerSprite.src = "dist/images/runLeftFrame2.png";
            }
          }
        } else {
          if (_this4.frameNum % 40 > 20) {
            _this4.playerSprite.src = "dist/images/idleFrame.png";
          } else {
            _this4.playerSprite.src = "dist/images/idleFrame2.png";
          }
        } // handle player obstacle collision


        _this4.Player.collidingX = false;
        _this4.Player.collidingY = false;
        _this4.Player.grounded = false;

        _this4.interactables.forEach(function (interactable) {
          interactable.render();

          if (interactable.isCollidingX(_this4.Player.x + _this4.Player.width / 2 + _this4.Player.velocity[0], _this4.Player.y + _this4.Player.height / 2 + _this4.Player.velocity[1])) {
            _this4.Player.collidingX = true;
          }

          if (interactable.isCollidingY(_this4.Player.x + _this4.Player.width / 2 + _this4.Player.velocity[0], _this4.Player.y + _this4.Player.height / 2 + _this4.Player.velocity[1])) {
            _this4.Player.collidingY = true;
            _this4.Player.grounded = true;
            _this4.Player.collisionsurfaceY = interactable.y;
          }
        }); // handle player level finish 


        if (_this4.exit.isCollidingX(_this4.Player.x + _this4.Player.width / 2 + _this4.Player.velocity[0], _this4.Player.y + _this4.Player.height / 2 + _this4.Player.velocity[1]) || _this4.exit.isCollidingY(_this4.Player.x + _this4.Player.width / 2 + _this4.Player.velocity[0], _this4.Player.y + _this4.Player.height / 2 + _this4.Player.velocity[1])) {
          _this4.levelComplete(gameLoop);
        } // handle player movement base on player collision


        if (!_this4.Player.collidingX) {
          _this4.Player.x += _this4.Player.velocity[0];
        } else {
          _this4.Player.velocity[1] = 0;
        }

        if (!_this4.Player.collidingY) {
          _this4.Player.velocity[1] -= _this4.GRAVITY;
          _this4.Player.y += _this4.Player.velocity[1];
        } else {
          _this4.Player.y = _this4.Player.collisionsurfaceY - 59;
          _this4.Player.velocity[1] = 0;
        }

        if (_this4.Player.isJumping) {
          _this4.Player.velocity[1] -= _this4.GRAVITY;
          _this4.Player.y += _this4.Player.velocity[1];
        }

        _this4.ctx.fillStyle = '#ffffff';
        _this4.ctx.font = "24px 'Press Start 2P'"; //level info 

        _this4.ctx.fillText("".concat(_this4.worldNum, "-").concat(_this4.levelNum), 364, 50); // timer


        _this4.levelTime--;

        _this4.ctx.fillText(Math.floor(_this4.levelTime / 100).toString(), 700, 50);

        _this4.Player.frameNum = (_this4.Player.frameNum + 1) % 40;
        _this4.portalFrame = (_this4.portalFrame + 1) % 80;
        _this4.frameNum++;
      }, 10);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/gamemenu.js":
/*!*********************************!*\
  !*** ./src/scripts/gamemenu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameMenu; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/scripts/homepage.js");
/* harmony import */ var _assets_menuBlip_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menuBlip.mp3 */ "./src/assets/menuBlip.mp3");
/* harmony import */ var _assets_pauseMenu_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/pauseMenu.mp3 */ "./src/assets/pauseMenu.mp3");
/* harmony import */ var _assets_pause_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pause.mp3 */ "./src/assets/pause.mp3");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var GameMenu = /*#__PURE__*/function () {
  function GameMenu(mainCanvas, mainCtx, type, worldNum, levelNum, game, setData, unpause, renderGame, renderHome, gameMusic, musicMuted, toggleSoundMuted, getSoundMuted, toggleMusicMuted) {
    var _this = this;

    _classCallCheck(this, GameMenu);

    this.mainCanvas = mainCanvas;
    this.mainCtx = mainCtx;
    this.canvas = document.getElementById("canvas-menu");
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.type = type;
    this.worldNum = worldNum;
    this.levelNum = levelNum;
    this.game = game;
    this.setGameData = setData;
    this.unpause = unpause;
    this.renderGame = renderGame;
    this.renderHome = renderHome;
    this.gameMusic = gameMusic;
    this.musicMuted = musicMuted;
    this.toggleSoundMuted = toggleSoundMuted;
    this.getSoundMuted = getSoundMuted;
    this.toggleMusicMuted = toggleMusicMuted;
    this.soundOff = new Image();
    this.soundOff.src = 'dist/images/soundOff.png';
    this.soundOn = new Image();
    this.soundOn.src = 'dist/images/soundOn.png';
    this.menuBlip = new Audio('dist/audio/menuBlip.mp3');
    this.pause = new Audio('dist/audio/pause.mp3');
    this.menuBlip.volume = 0.1;
    this.pause.volume = 0.2;
    this.selected = 1;
    this.submitted = false;
    window.addEventListener("keydown", function (event) {
      if (event.key == 'w') {
        if (_this.selected != 1) {
          if (!_this.getSoundMuted()) _this.menuBlip.play();
          _this.selected--;

          _this.render();
        }
      } else if (event.key == 's') {
        var maxNum = _this.type == "pause" ? 3 : 2;

        if (_this.selected != maxNum) {
          if (!_this.getSoundMuted()) _this.menuBlip.play();
          _this.selected++;

          _this.render();
        }
      } else if (event.key == 'Enter') {
        _this.pause.pause();

        _this.pause.currentTime = 0;
        if (!_this.getSoundMuted()) _this.pause.play();
        _this.submitted = true;
      } else if (event.key == "Escape" && _this.type == "pause") {
        _this.close();
      }
    });
    this.canvas.addEventListener('mousedown', function (event) {
      var canvasPos = _this.canvas.getBoundingClientRect();

      var mouseX = event.x - canvasPos.left;
      var mouseY = event.y - canvasPos.top;

      if (mouseX > 540 && mouseX < 570 && mouseY > 130 && mouseY < 150) {
        _this.toggleSoundMuted();

        _this.musicMuted = !_this.musicMuted;

        _this.render();
      }
    });
  }

  _createClass(GameMenu, [{
    key: "setMenuData",
    value: function setMenuData(type, worldNum, levelNum) {
      this.type = type;
      this.worldNum = worldNum;
      this.levelNum = levelNum;
    }
  }, {
    key: "close",
    value: function close() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.classList.remove("active");
      this.submitted = false;
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      this.canvas.classList.add("active");
      this.render();
      var menu = setInterval(function () {
        if (_this2.submitted) {
          if (_this2.type == "failed") {
            if (_this2.selected == 1) {
              // this.game = new Game(this.mainCanvas, this.mainCtx, this.worldNum, this.levelNum, this.game)
              // this.game.render();
              _this2.setGameData(_this2.worldNum, _this2.levelNum, _this2.game);

              _this2.renderGame();
            } else if (_this2.selected == 2) {
              _this2.renderHome();
            }
          } else if (_this2.type == "complete") {
            if (_this2.selected == 1) {
              if (_this2.levelNum == 5) {
                _this2.setGameData(_this2.worldNum + 1, 1, _this2.game);
              } else {
                _this2.setGameData(_this2.worldNum, _this2.levelNum + 1, _this2.game);
              }

              _this2.renderGame();
            } else if (_this2.selected == 2) {
              _this2.renderHome();
            }
          } else if (_this2.type == "pause") {
            if (_this2.selected == 1) {
              _this2.close();

              _this2.unpause();
            } else if (_this2.selected == 2) {
              _this2.setGameData(_this2.worldNum, _this2.levelNum, _this2.game);

              _this2.renderGame();
            } else if (_this2.selected == 3) {
              _this2.renderHome();
            }
          }

          _this2.close();

          clearInterval(menu);
        }
      }, 10);
    }
  }, {
    key: "render",
    value: function render() {
      // draw menu box
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "rgb(0,0,0)";
      this.ctx.fillRect(200, 100, 400, 200); // set menu header font

      this.ctx.font = "24px 'Press Start 2P'"; // draw menu header

      if (this.type == "failed") {
        this.ctx.fillStyle = "rgb(255,0,0)";
        this.ctx.fillText("Level Failed", 260, 150);
      } else if (this.type == "complete") {
        this.ctx.fillStyle = "rgb(0,255,0)";
        this.ctx.fillText("Level Complete!", 224, 150);
      } else if (this.type == "pause") {
        this.ctx.fillStyle = "rgb(200,87,255)";
        this.ctx.fillText("Pause", 344, 150);
      } // mute button setup


      this.ctx.fillStyle = "#ffffff";

      if (this.type == "pause") {
        if (this.musicMuted) {
          this.ctx.drawImage(this.soundOff, 540, 130, 30, 20);
        } else {
          this.ctx.drawImage(this.soundOn, 540, 130, 30, 20);
        }
      } // set menu option font


      this.ctx.font = "20px 'Press Start 2P'"; // draw menu options and arrows

      if (this.type == "failed") {
        this.ctx.fillText("Retry", 360, 200);
        this.ctx.fillText("Main Menu", 320, 250); // draw selected arrows around currently selected option

        if (this.selected == 1) {
          //left arrow
          this.ctx.beginPath();
          this.ctx.moveTo(300, 200);
          this.ctx.lineTo(320, 190);
          this.ctx.lineTo(300, 180);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(520, 200);
          this.ctx.lineTo(500, 190);
          this.ctx.lineTo(520, 180);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        } else {
          this.ctx.beginPath();
          this.ctx.moveTo(260, 250);
          this.ctx.lineTo(280, 240);
          this.ctx.lineTo(260, 230);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(560, 250);
          this.ctx.lineTo(540, 240);
          this.ctx.lineTo(560, 230);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        }
      } else if (this.type == "complete") {
        this.ctx.fillText("Next Level", 300, 200);
        this.ctx.fillText("Main Menu", 310, 250); // draw selected arrows around currently selected option

        if (this.selected == 1) {
          //left arrow
          this.ctx.beginPath();
          this.ctx.moveTo(240, 200);
          this.ctx.lineTo(260, 190);
          this.ctx.lineTo(240, 180);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(560, 200);
          this.ctx.lineTo(540, 190);
          this.ctx.lineTo(560, 180);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        } else {
          this.ctx.beginPath();
          this.ctx.moveTo(250, 250);
          this.ctx.lineTo(270, 240);
          this.ctx.lineTo(250, 230);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(550, 250);
          this.ctx.lineTo(530, 240);
          this.ctx.lineTo(550, 230);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        }
      } else if (this.type == "pause") {
        this.ctx.fillStyle = "rgb(0,0,0)";
        this.ctx.fillRect(200, 300, 400, 40);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText("Resume", 344, 200);
        this.ctx.fillText("Restart", 334, 250);
        this.ctx.fillText("Main Menu", 314, 300);

        if (this.selected == 1) {
          this.ctx.beginPath();
          this.ctx.moveTo(274, 200);
          this.ctx.lineTo(294, 190);
          this.ctx.lineTo(274, 180);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(534, 200);
          this.ctx.lineTo(514, 190);
          this.ctx.lineTo(534, 180);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        } else if (this.selected == 2) {
          //left arrow
          this.ctx.beginPath();
          this.ctx.moveTo(264, 250);
          this.ctx.lineTo(284, 240);
          this.ctx.lineTo(264, 230);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(544, 250);
          this.ctx.lineTo(524, 240);
          this.ctx.lineTo(544, 230);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        } else {
          console.log(this.selected);
          this.ctx.beginPath();
          this.ctx.moveTo(234, 300);
          this.ctx.lineTo(254, 290);
          this.ctx.lineTo(234, 280);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(574, 300);
          this.ctx.lineTo(554, 290);
          this.ctx.lineTo(574, 280);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        }
      }
    }
  }]);

  return GameMenu;
}();



/***/ }),

/***/ "./src/scripts/homepage.js":
/*!*********************************!*\
  !*** ./src/scripts/homepage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _assets_mainpage_bg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/mainpage_bg.png */ "./src/assets/mainpage_bg.png");
/* harmony import */ var _assets_tabIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tabIcon.png */ "./src/assets/tabIcon.png");
/* harmony import */ var _assets_world2BG_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/world2BG.png */ "./src/assets/world2BG.png");
/* harmony import */ var _assets_musicOn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/musicOn.png */ "./src/assets/musicOn.png");
/* harmony import */ var _assets_musicOff_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/musicOff.png */ "./src/assets/musicOff.png");
/* harmony import */ var _assets_soundOn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/soundOn.png */ "./src/assets/soundOn.png");
/* harmony import */ var _assets_soundOff_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/soundOff.png */ "./src/assets/soundOff.png");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var HomePage = /*#__PURE__*/function () {
  function HomePage(canvas, ctx) {
    var _this = this;

    _classCallCheck(this, HomePage);

    this.canvas = canvas;
    this.ctx = ctx;
    this.currentWorld = 1;
    this.soundMuted = true;
    this.musicMuted = true;
    this.numWorlds = 2;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_7__["default"](this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this), this.music, this.soundMuted, this.toggleMuteSound.bind(this), this.getSoundMuted.bind(this), this.toggleMuteMusic.bind(this));
    this.home = null;
    this.music = new Audio();
    this.music.src = 'dist/audio/world1Music.mp3';
    this.music.volume = 0.6;
    this.worldBGs = ['dist/images/mainpage_bg.png', 'dist/images/world2BG.png'];
    this.canvas.addEventListener('mousedown', function (event) {
      var canvasPos = canvas.getBoundingClientRect();
      var mouseX = event.x - canvasPos.left;
      var mouseY = event.y - canvasPos.top;

      for (var i = 0; i < 5; i++) {
        var increment = i * 130;

        if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
          clearInterval(_this.home);

          _this.game.setData(_this.currentWorld, i + 1, _this.game);

          _this.game.render();
        }
      }

      if (mouseX > 730 && mouseX < 770 && mouseY > 30 && mouseY < 60) {
        _this.toggleMuteMusic();
      }

      if (mouseX > 660 && mouseX < 700 && mouseY > 30 && mouseY < 60) {
        _this.toggleMuteSound();
      }

      if (mouseY < 270 && mouseY > 240) {
        if (mouseX < 240 && mouseX > 210) {
          if (_this.currentWorld > 1) {
            _this.currentWorld--;
          } else {
            _this.currentWorld = _this.numWorlds;
          }
        }

        if (mouseX < 590 && mouseX > 560) {
          if (_this.currentWorld < _this.numWorlds) {
            _this.currentWorld++;
          } else {
            _this.currentWorld = 1;
          }
        }
      }
    });
  }

  _createClass(HomePage, [{
    key: "toggleMuteMusic",
    value: function toggleMuteMusic() {
      this.musicMuted = !this.musicMuted;

      if (this.musicMuted) {
        this.music.pause();
      } else {
        this.music.currentTime = 0;
        this.music.play();
      }
    }
  }, {
    key: "getSoundMuted",
    value: function getSoundMuted() {
      return this.soundMuted;
    }
  }, {
    key: "toggleMuteSound",
    value: function toggleMuteSound() {
      this.soundMuted = !this.soundMuted;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.home = setInterval(function () {
        _this2.ctx.clearRect(0, 0, _this2.canvas.width, _this2.canvas.height);

        _this2.canvas.style.backgroundImage = "url(".concat(_this2.worldBGs[_this2.currentWorld - 1], ")"); //title

        _this2.ctx.fillStyle = '#ffffff';
        _this2.ctx.font = "32px 'Press Start 2P'";

        _this2.ctx.fillText('Otherworlds', 225, 90); //controls


        _this2.ctx.font = "14px 'Press Start 2P'";

        _this2.ctx.fillText('WASD - Move', 323, 140);

        _this2.ctx.fillText('Space - Jump', 309, 170);

        _this2.ctx.fillText('Esc - Pause', 337, 200); // world select      
        // --world name


        _this2.ctx.font = "28px 'Press Start 2P'";

        _this2.ctx.fillText("World ".concat(_this2.currentWorld), 302, 270); //-- world cycling arrows
        //---- right arrow


        _this2.ctx.beginPath();

        _this2.ctx.moveTo(560, 270);

        _this2.ctx.lineTo(590, 255);

        _this2.ctx.lineTo(560, 240);

        _this2.ctx.closePath();

        _this2.ctx.lineWidth = 5;
        _this2.ctx.strokeStyle = '#444444';

        _this2.ctx.stroke();

        _this2.ctx.fillStyle = "#ffffff";

        _this2.ctx.fill(); //---- left arrow


        _this2.ctx.beginPath();

        _this2.ctx.moveTo(240, 270);

        _this2.ctx.lineTo(210, 255);

        _this2.ctx.lineTo(240, 240);

        _this2.ctx.closePath();

        _this2.ctx.lineWidth = 5;
        _this2.ctx.strokeStyle = '#444444';

        _this2.ctx.stroke();

        _this2.ctx.fillStyle = "#ffffff";

        _this2.ctx.fill(); //level select - 130px between level


        for (var i = 0; i < 5; i++) {
          var increment = i * 130;
          _this2.ctx.fillStyle = "rgb(100,100,100)";

          _this2.ctx.fillRect(100 + increment, 345, 70, 70);

          _this2.ctx.fillStyle = "rgb(240,240,240)";

          _this2.ctx.fillRect(105 + increment, 350, 60, 60);

          _this2.ctx.fillStyle = "rgb(0,0,0)";

          _this2.ctx.fillText((i + 1).toString(), 120 + increment, 397);
        } // mute sound button


        var soundButton = new Image();

        if (_this2.soundMuted) {
          soundButton.src = 'dist/images/soundOff.png';
        } else {
          soundButton.src = 'dist/images/soundOn.png';
        }

        _this2.ctx.drawImage(soundButton, 660, 30, 40, 30); //mute music button


        var musicButton = new Image();

        if (_this2.musicMuted) {
          musicButton.src = 'dist/images/musicOff.png';
        } else {
          musicButton.src = 'dist/images/musicOn.png';
        }

        _this2.ctx.drawImage(musicButton, 730, 30, 40, 30);
      }, 10);
    }
  }]);

  return HomePage;
}();



/***/ }),

/***/ "./src/scripts/interactable.js":
/*!*************************************!*\
  !*** ./src/scripts/interactable.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interactable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BUFFER_X = 17;
var BUFFER_Y = 30;

var Interactable = /*#__PURE__*/function () {
  function Interactable(canvas, ctx, x, y, height, width) {
    _classCallCheck(this, Interactable);

    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Interactable, [{
    key: "isCollidingX",
    value: function isCollidingX(xPos, yPos) {
      if (xPos + BUFFER_X > this.x && xPos - BUFFER_X < this.x + this.width && yPos + BUFFER_Y - 6 > this.y && yPos - BUFFER_Y + 6 < this.y + this.height) {
        return true;
      }

      return false;
    }
  }, {
    key: "isCollidingY",
    value: function isCollidingY(xPos, yPos) {
      if (yPos + BUFFER_Y > this.y && yPos < this.y + this.height && xPos + BUFFER_X - 6 > this.x && xPos - BUFFER_X + 6 < this.x + this.width) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.fillStyle = "rgba(0,0,0,0)";
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Interactable;
}();



/***/ }),

/***/ "./src/scripts/interactableImage.js":
/*!******************************************!*\
  !*** ./src/scripts/interactableImage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractableImage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InteractableImage = /*#__PURE__*/function () {
  function InteractableImage(canvas, ctx, url, x, y, width, height) {
    _classCallCheck(this, InteractableImage);

    this.canvas = canvas;
    this.ctx = ctx;
    this.url = url;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }

  _createClass(InteractableImage, [{
    key: "render",
    value: function render() {
      this.img.src = this.url;
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }]);

  return InteractableImage;
}();



/***/ }),

/***/ "./src/scripts/levelText.js":
/*!**********************************!*\
  !*** ./src/scripts/levelText.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelText; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LevelText = /*#__PURE__*/function () {
  function LevelText(canvas, ctx, message, x, y) {
    _classCallCheck(this, LevelText);

    this.mainCanvas = canvas;
    this.mainCtx = ctx;
    this.canvas = document.getElementById("canvas-text");
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.message = message;
    this.x = x;
    this.y = y;
    this.textColor = 'rgba(255,255,255,1)';
    this.bgColor = 'rgba(0,0,0,0.6)';
    var words = this.message.split(" ");
    var len = words.length;
    this.segments = [];
    var count = 0;
    var segment = [];

    for (var i = 0; i < len; i++) {
      count++;
      count += words[0].length;

      if (count <= 30) {
        segment.push(words[i]);
      } else {
        this.segments.push(segment);
        segment = [];
        count = 0;
        i--;
      }
    }

    this.segments.push(segment);
  }

  _createClass(LevelText, [{
    key: "fadeIn",
    value: function fadeIn() {
      var _this = this;

      setTimeout(function () {
        clearInterval(fadeInLoop);

        _this.render();

        setTimeout(function () {
          _this.fadeOut();
        }, 2000);
      }, 1000);
      var count = 0;
      var fadeInLoop = setInterval(function () {
        count++;
        var textOpacity = count / 100;
        var bgOpacity = count * 0.6 / 100;
        _this.textColor = "rgba(255,255,255,".concat(textOpacity, ")");
        _this.bgColor = "rgba(0,0,0,".concat(bgOpacity, ")");

        _this.render();
      }, 10);
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this2 = this;

      setTimeout(function () {
        clearInterval(fadeOutLoop);

        _this2.close();
      }, 1000);
      var count = 0;
      var fadeOutLoop = setInterval(function () {
        count++;
        var textOpacity = 1 - count / 100;
        var bgOpacity = 0.6 - count * 0.6 / 100;
        _this2.textColor = "rgba(255,255,255,".concat(textOpacity, ")");
        _this2.bgColor = "rgba(0,0,0,".concat(bgOpacity, ")");

        _this2.render();
      }, 10);
    }
  }, {
    key: "open",
    value: function open() {
      this.canvas.classList.add("active");
      this.fadeIn();
    }
  }, {
    key: "close",
    value: function close() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.classList.remove("active");
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // darken background

      this.ctx.fillStyle = "rgb(0,0,0,0.6)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.textColor;
      this.ctx.font = "16px 'Press Start 2P'";

      for (var i = 0; i < this.segments.length; i++) {
        this.ctx.fillText(this.segments[i].join(" "), this.x, this.y + i * 30, 480);
      }
    }
  }]);

  return LevelText;
}();



/***/ }),

/***/ "./src/scripts/leveldata.js":
/*!**********************************!*\
  !*** ./src/scripts/leveldata.js ***!
  \**********************************/
/*! exports provided: LevelData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelData", function() { return LevelData; });
//outer array is worlds, inner array is levelData objects
var LevelData = [// world 1
[// world 1 level 1
{
  playerStartPos: [100, 300],
  interactables: [{
    x: 80,
    y: 420,
    height: 5,
    width: 640,
    imgUrl: 'dist/images/largePlatform.png',
    yOffset: 25,
    imgHeight: 30
  }, {
    x: 500,
    y: 300,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 300,
    y: 200,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 80,
    y: 110,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }],
  finishPos: [100, 50],
  gravity: -0.1,
  levelText: "This is the story of spaceman, a resident of the cloud world who has a passion for adventure."
}, // world 1 level 2
{
  playerStartPos: [100, 300],
  interactables: [{
    x: 80,
    y: 460,
    height: 5,
    width: 160,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 400,
    y: 460,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 680,
    y: 460,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 660,
    y: 340,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 380,
    y: 280,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 660,
    y: 160,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 320,
    y: 110,
    height: 5,
    width: 160,
    imgUrl: 'dist/images/mediumPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 60,
    y: 110,
    height: 5,
    width: 220,
    imgUrl: 'dist/images/largePlatform.png',
    yOffset: 18,
    imgHeight: 20
  }],
  finishPos: [100, 54],
  gravity: -0.1
}, // world 1 level 3
{
  playerStartPos: [100, 300],
  interactables: [{
    x: 80,
    y: 420,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 200,
    y: 380,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 280,
    y: 360,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 80,
    y: 260,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 220,
    y: 140,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }],
  finishPos: [720, 400],
  gravity: -0.1
}, // world 1 level 4
{
  playerStartPos: [50, 360],
  interactables: [{
    x: 40,
    y: 460,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 200,
    y: 400,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 40,
    y: 340,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 200,
    y: 280,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 40,
    y: 220,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 200,
    y: 160,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 40,
    y: 100,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 200,
    y: 60,
    height: 5,
    width: 500,
    imgUrl: 'dist/images/largePlatform.png',
    yOffset: 25,
    imgHeight: 30
  }, {
    x: 500,
    y: 140,
    height: 5,
    width: 300,
    imgUrl: 'dist/images/mediumPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 550,
    y: 210,
    height: 5,
    width: 250,
    imgUrl: 'dist/images/mediumPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 600,
    y: 280,
    height: 5,
    width: 200,
    imgUrl: 'dist/images/mediumPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 650,
    y: 350,
    height: 5,
    width: 150,
    imgUrl: 'dist/images/mediumPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 700,
    y: 420,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }],
  finishPos: [750, 450],
  gravity: -0.1
}, // world 1 level 5
{
  playerStartPos: [100, 200],
  interactables: [{
    x: 80,
    y: 280,
    height: 5,
    width: 640,
    imgUrl: 'dist/images/largePlatform.png',
    yOffset: 25,
    imgHeight: 30
  }],
  finishPos: [500, 180],
  gravity: -0.1,
  levelText: "Now that spaceman has seen all that his world has to offer, he begins his journey through other worlds"
}], // world 2
[// world 1 level 1
{
  playerStartPos: [100, 300],
  interactables: [{
    x: 80,
    y: 420,
    height: 5,
    width: 640,
    imgUrl: 'dist/images/largePlatform.png',
    yOffset: 25,
    imgHeight: 30
  }, {
    x: 500,
    y: 300,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 300,
    y: 200,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 80,
    y: 110,
    height: 5,
    width: 100,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }],
  finishPos: [100, 50],
  gravity: -0.1
}]];

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlTWVudS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT2ZmLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGFiSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQxTXVzaWMubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW50ZXJhY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xldmVsVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbGRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZUZyYW1lIiwiSG9tZVBhZ2UiLCJyZW5kZXIiLCJFeGl0IiwieCIsInkiLCJsZXZlbE51bSIsIndvcmxkTnVtIiwiZXhpdEltYWdlIiwiSW1hZ2UiLCJmcmFtZU51bSIsInhQb3MiLCJ5UG9zIiwicG9ydGFsRnJhbWUiLCJjdXJyZW50SW1hZ2VOdW0iLCJNYXRoIiwiZmxvb3IiLCJzcmMiLCJkcmF3SW1hZ2UiLCJJbnRlcmFjdGFibGUiLCJHYW1lIiwiZ2FtZSIsInJlbmRlckhvbWUiLCJnYW1lTXVzaWMiLCJtdXNpY011dGVkIiwidG9nZ2xlU291bmRNdXRlZCIsImdldFNvdW5kTXV0ZWQiLCJ0b2dnbGVNdXNpY011dGVkIiwibGV2ZWxUaW1lIiwicGF1c2VkIiwibWVudSIsIkdhbWVNZW51Iiwic2V0RGF0YSIsImJpbmQiLCJ0b2dnbGVQYXVzZSIsImNsZWFyUmVjdCIsImxldmVsRGF0YSIsIkxldmVsRGF0YSIsIlZFTE9DSVRZX1giLCJHUkFWSVRZIiwiZ3Jhdml0eSIsIlBsYXllciIsInZlbG9jaXR5IiwiaXNKdW1waW5nIiwiY2FuSnVtcCIsInBsYXllclN0YXJ0UG9zIiwiZmFjZVJpZ2h0IiwibW92aW5nIiwiY29sbGlkaW5nWCIsImNvbGxpZGluZ1kiLCJncm91bmRlZCIsImNvbGxpc2lvbnN1cmZhY2VZIiwicGF1c2VTb3VuZCIsIkF1ZGlvIiwidm9sdW1lIiwianVtcFNvdW5kIiwiZm9vdHN0ZXAiLCJ3b3JsZEJHcyIsInBsYXllclNwcml0ZSIsInBvcnRhbFNwcml0ZSIsImV4aXQiLCJmaW5pc2hQb3MiLCJpbnRlcmFjdGFibGVzIiwiaW1hZ2VzIiwiZm9yRWFjaCIsImludGVyYWN0YWJsZSIsInB1c2giLCJpbWdVcmwiLCJsZW5ndGgiLCJJbnRlcmFjdGFibGVJbWFnZSIsInlPZmZzZXQiLCJpbWdIZWlnaHQiLCJsZXZlbFRleHQiLCJMZXZlbFRleHQiLCJ3aW5kb3ciLCJldmVudCIsImtleSIsInBsYXkiLCJzZXRUaW1lb3V0IiwicGF1c2UiLCJjdXJyZW50VGltZSIsIm5ld0dhbWUiLCJpbWciLCJnYW1lTG9vcCIsImNsZWFySW50ZXJ2YWwiLCJzZXRNZW51RGF0YSIsIm9wZW4iLCJmaW5pc2hXb3JsZCIsImNvdW50IiwiZXhpdFgiLCJleGl0WSIsImV4aXRXIiwiZXhpdEgiLCJzZXRJbnRlcnZhbCIsImltYWdlIiwiZHJhd1BsYXllciIsInNraXAiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInBhdXNlR2FtZSIsImZpbGxTdHlsZSIsImdhbWVPdmVyIiwiY3VyckZyYW1lIiwiaXNDb2xsaWRpbmdYIiwiaXNDb2xsaWRpbmdZIiwibGV2ZWxDb21wbGV0ZSIsImZvbnQiLCJmaWxsVGV4dCIsInRvU3RyaW5nIiwibWFpbkNhbnZhcyIsIm1haW5DdHgiLCJ0eXBlIiwidW5wYXVzZSIsInJlbmRlckdhbWUiLCJzZXRHYW1lRGF0YSIsInNvdW5kT2ZmIiwic291bmRPbiIsIm1lbnVCbGlwIiwic2VsZWN0ZWQiLCJzdWJtaXR0ZWQiLCJtYXhOdW0iLCJjbG9zZSIsImNhbnZhc1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1vdXNlWCIsImxlZnQiLCJtb3VzZVkiLCJ0b3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZmlsbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50V29ybGQiLCJzb3VuZE11dGVkIiwibnVtV29ybGRzIiwibXVzaWMiLCJ0b2dnbGVNdXRlU291bmQiLCJ0b2dnbGVNdXRlTXVzaWMiLCJob21lIiwiaSIsImluY3JlbWVudCIsInNvdW5kQnV0dG9uIiwibXVzaWNCdXR0b24iLCJCVUZGRVJfWCIsIkJVRkZFUl9ZIiwidXJsIiwibWVzc2FnZSIsInRleHRDb2xvciIsImJnQ29sb3IiLCJ3b3JkcyIsInNwbGl0IiwibGVuIiwic2VnbWVudHMiLCJzZWdtZW50IiwiZmFkZUluTG9vcCIsImZhZGVPdXQiLCJ0ZXh0T3BhY2l0eSIsImJnT3BhY2l0eSIsImZhZGVPdXRMb29wIiwiZmFkZUluIiwiam9pbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUscUZBQXNCLEU7Ozs7Ozs7Ozs7OztBQ0FyQztBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBZSxxRkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLG9GQUFxQixFOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFlLHFGQUFzQixFOzs7Ozs7Ozs7Ozs7QUNBckM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQWUsMEZBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0ExQztBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFl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SUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXFFLFVBQU0sRUFBRSwrQkFMWjtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQURXLEVBVVg7QUFDSW5FLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lxRSxVQUFNLEVBQUMsK0JBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FWVyxFQW1CWDtBQUNJbkUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXFFLFVBQU0sRUFBQywrQkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQW5CVyxFQTRCWDtBQUNJbkUsS0FBQyxFQUFFLEVBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXFFLFVBQU0sRUFBQywrQkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQTVCVyxDQUZuQjtBQXdDSVYsV0FBUyxFQUFFLENBQUMsR0FBRCxFQUFLLEVBQUwsQ0F4Q2Y7QUF5Q0lyQixTQUFPLEVBQUUsQ0FBQztBQXpDZCxDQUZKLENBeFVxQixDQUFsQixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvV29ybGQxRG9vci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Xb3JsZDJEb29yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2Zvb3RzdGVwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2p1bXBTb3VuZC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21haW5wYWdlX2JnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL21lbnVCbGlwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2UubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2VNZW51Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90YWJJY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby93b3JsZDFNdXNpYy5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJCRy5wbmdcIjsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9zY3JpcHRzL2hvbWVwYWdlJ1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1haW5cIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjYW52YXMud2lkdGggPSA4MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcbiAgICBsZXQgZ2FtZUZyYW1lID0gMDtcblxuXG4gICAgbmV3IEhvbWVQYWdlKGNhbnZhcywgY3R4KS5yZW5kZXIoKTtcblxuICAgIFxuXG5cbn0pO1xuIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGl0IGV4dGVuZHMgSW50ZXJhY3RhYmxle1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoLCBsZXZlbE51bSwgd29ybGROdW0pIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcblxuXG4gICAgICAgIHRoaXMuZXhpdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGZyYW1lTnVtLCB4UG9zID0gdGhpcy54LCB5UG9zID0gdGhpcy55LCB3aWR0aCA9IDYwLCBoZWlnaHQgPSA4MCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICBsZXQgcG9ydGFsRnJhbWUgPSBmcmFtZU51bSAlIDEyMDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW1hZ2VOdW0gPSBNYXRoLmZsb29yKHBvcnRhbEZyYW1lLzE1KSArIDE7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvUG9ydGFsRnJhbWUke2N1cnJlbnRJbWFnZU51bX0ucG5nYFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvV29ybGQke3RoaXMud29ybGROdW19RG9vci5wbmdgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHJ1blJpZ2h0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUyLnBuZydcbmltcG9ydCBydW5SaWdodEltYWdlMyBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTMucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTMucG5nJ1xuXG5pbXBvcnQgUG9ydGFsRnJhbWUxIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lMiBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTMgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU0IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTYgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU3IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lOCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZydcblxuaW1wb3J0IFdvcmxkMURvb3IgZnJvbSAnLi4vYXNzZXRzL1dvcmxkMURvb3IucG5nJ1xuaW1wb3J0IFdvcmxkMkRvb3IgZnJvbSAnLi4vYXNzZXRzL1dvcmxkMkRvb3IucG5nJ1xuaW1wb3J0IFdvcmxkMU11c2ljIGZyb20gJy4uL2Fzc2V0cy93b3JsZDFNdXNpYy5tcDMnXG5pbXBvcnQganVtcFNvdW5kIGZyb20gJy4uL2Fzc2V0cy9qdW1wU291bmQubXAzJ1xuaW1wb3J0IGZvb3RzdGVwIGZyb20gJy4uL2Fzc2V0cy9mb290c3RlcC5tcDMnXG5cbmltcG9ydCBsYXJnZVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9sYXJnZVBsYXRmb3JtLnBuZydcbmltcG9ydCBtZWRpdW1QbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbWVkaXVtUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHNtYWxsUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3NtYWxsUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHRpbnlQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvdGlueVBsYXRmb3JtLnBuZydcblxuaW1wb3J0IGlkbGVGcmFtZSBmcm9tICcuLi9hc3NldHMvaWRsZUZyYW1lLnBuZydcbmltcG9ydCBpZGxlRnJhbWUyIGZyb20gJy4uL2Fzc2V0cy9pZGxlRnJhbWUyLnBuZydcbmltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSAnLi9pbnRlcmFjdGFibGUnXG5pbXBvcnQgR2FtZU1lbnUgZnJvbSAnLi9nYW1lbWVudSdcbmltcG9ydCBFeGl0IGZyb20gJy4vZXhpdCdcblxuaW1wb3J0IHsgTGV2ZWxEYXRhIH0gZnJvbSAnLi9sZXZlbGRhdGEnXG5pbXBvcnQgSW50ZXJhY3RhYmxlSW1hZ2UgZnJvbSAnLi9pbnRlcmFjdGFibGVJbWFnZSdcbmltcG9ydCBMZXZlbFRleHQgZnJvbSAnLi9sZXZlbFRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgR2FtZU1lbnUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSwgdGhpcy5zZXREYXRhLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXJIb21lLCB0aGlzLmdhbWVNdXNpYywgdGhpcy5tdXNpY011dGVkLCB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQsIHRoaXMuZ2V0U291bmRNdXRlZCwgdGhpcy50b2dnbGVTb3VuZE11dGVkKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhdXNlU291bmQgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vcGF1c2UubXAzJylcbiAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICAvLyBwbGF5ZXIgbW92ZW1lbnQgc291bmRzXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2p1bXBTb3VuZC5tcDMnKVxuICAgICAgICB0aGlzLmp1bXBTb3VuZC52b2x1bWUgPSAwLjY7XG4gICAgICAgIHRoaXMuZm9vdHN0ZXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vZm9vdHN0ZXAubXAzJylcbiAgICAgICAgdGhpcy5mb290c3RlcC52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnBvcnRhbFNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIC8vIHNldCBleGl0IGxvY2F0aW9uXG4gICAgICAgIHRoaXMuZXhpdCA9IG5ldyBFeGl0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzBdLHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1sxXSw3MCw3MCwgdGhpcy5sZXZlbE51bSwgdGhpcy53b3JsZE51bSk7XG5cbiAgICAgICAgLy8gc2V0IGludGVyYWN0YWJsZXMgZm9yIHRoaXMgc3RhZ2UgZnJvbSBzZWVkIGRhdGFcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IEludGVyYWN0YWJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoKSk7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlSW1hZ2UodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUuaW1nVXJsLGludGVyYWN0YWJsZS54LGludGVyYWN0YWJsZS55IC0gaW50ZXJhY3RhYmxlLnlPZmZzZXQsaW50ZXJhY3RhYmxlLndpZHRoLGludGVyYWN0YWJsZS5pbWdIZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IHRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IC10aGlzLlZFTE9DSVRZX1g7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5mYWNlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJyAmJiB0aGlzLlBsYXllci5ncm91bmRlZCAmJiAhdGhpcy5QbGF5ZXIuaXNKdW1waW5nICkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA2MClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2VTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZXRHYW1lKG5ld0dhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3R2FtZTtcbiAgICB9XG5cbiAgICBzZXREYXRhKHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSkge1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDUwLDUwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaW1nVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVJbWFnZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS5pbWdVcmwsaW50ZXJhY3RhYmxlLngsaW50ZXJhY3RhYmxlLnkgLSBpbnRlcmFjdGFibGUueU9mZnNldCxpbnRlcmFjdGFibGUud2lkdGgsaW50ZXJhY3RhYmxlLmltZ0hlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBuZXcgTGV2ZWxUZXh0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0LCAxNjAsMjAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgdG9nZ2xlUGF1c2UoKXtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5wYXVzZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1BsYXllcihpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihnYW1lTG9vcCkge1xuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cblxuICAgIGxldmVsQ29tcGxldGUoZ2FtZUxvb3ApIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxOdW0gPT0gNSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmaW5pc2hXb3JsZClcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJjb21wbGV0ZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCBleGl0WCA9IDUwMDtcbiAgICAgICAgICAgIGxldCBleGl0WSA9IDE4MDtcbiAgICAgICAgICAgIGxldCBleGl0VyA9IDYwO1xuICAgICAgICAgICAgbGV0IGV4aXRIID0gODA7XG4gICAgICAgICAgICBsZXQgZmluaXNoV29ybGQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gZHJhdyBleGl0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50IDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXRYICs9IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgZXhpdFkgLT0gMC40O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCBleGl0WCwgZXhpdFksIGV4aXRXLCBleGl0SCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBleGl0WCAtPSAwLjM7XG4gICAgICAgICAgICAgICAgICAgIGV4aXRZIC09IDAuNDtcbiAgICAgICAgICAgICAgICAgICAgZXhpdFcgKz0gMC42O1xuICAgICAgICAgICAgICAgICAgICBleGl0SCArPSAwLjg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIGV4aXRYLCBleGl0WSwgZXhpdFcsIGV4aXRIKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCA1MzAsIDEwMCwgMTIwLCAxNjApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGltYWdlc1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIGRyYXcgaW50ZXJhY3RhYmxlcyBcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ICUgNDAgPiAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjI1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAyO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDI1MCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDI3NSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMC41O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDMyNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLndpZHRoIC09IDAuMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaGVpZ2h0IC09IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAwLjE1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IDAuMjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BsYXllcih0aGlzLnBsYXllclNwcml0ZSwgdGhpcy5QbGF5ZXIueCwgdGhpcy5QbGF5ZXIueSwgdGhpcy5QbGF5ZXIud2lkdGgsIHRoaXMuUGxheWVyLmhlaWdodClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApXG4gICAgICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJjb21wbGV0ZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGF1c2VHYW1lKGdhbWVMb29wKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApXG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcInBhdXNlXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcihza2lwID0gZmFsc2Upe1xuICAgICAgICBpZiAodGhpcy5sZXZlbFRleHQgIT0gXCJcIiAmJiAhc2tpcCkgeyAgICBcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0Lm9wZW4oKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLndvcmxkQkdzW3RoaXMud29ybGROdW0gLSAxXX0pYFxuICAgICAgICBjb25zdCBnYW1lTG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VHYW1lKGdhbWVMb29wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiXG5cbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci55ID4gNTAwIHx8IHRoaXMubGV2ZWxUaW1lIDw9IDExMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoZ2FtZUxvb3ApXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIodGhpcy5mcmFtZU51bSk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VzXG4gICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGRyYXcgcGxheWVyXG4gICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG5cblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBmcmFtZSBpbWFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLm1vdmluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLmZvb3RzdGVwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5QbGF5ZXIuZnJhbWVOdW0gLyAxMClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZU51bSAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgb2JzdGFjbGUgY29sbGlzaW9uXG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgPSBpbnRlcmFjdGFibGUueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIGxldmVsIGZpbmlzaCBcbiAgICAgICAgICAgIGlmICh0aGlzLmV4aXQuaXNDb2xsaWRpbmdYKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5pc0NvbGxpZGluZ1kodGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbENvbXBsZXRlKGdhbWVMb29wKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgbW92ZW1lbnQgYmFzZSBvbiBwbGF5ZXIgY29sbGlzaW9uXG4gICAgICAgICAgICBpZiAoIXRoaXMuUGxheWVyLmNvbGxpZGluZ1gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuUGxheWVyLmNvbGxpZGluZ1kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSB0aGlzLkdSQVZJVFk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSB0aGlzLlBsYXllci52ZWxvY2l0eVsxXTsgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgPSB0aGlzLlBsYXllci5jb2xsaXNpb25zdXJmYWNlWSAtIDU5O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSB0aGlzLkdSQVZJVFk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSB0aGlzLlBsYXllci52ZWxvY2l0eVsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgICAgICAvL2xldmVsIGluZm8gXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19YCwgMzY0LCA1MCk7XG5cbiAgICAgICAgICAgIC8vIHRpbWVyXG4gICAgICAgICAgICB0aGlzLmxldmVsVGltZS0tO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoTWF0aC5mbG9vcih0aGlzLmxldmVsVGltZS8xMDApLnRvU3RyaW5nKCksIDcwMCwgNTApO1xuICAgIFxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aGlzLlBsYXllci5mcmFtZU51bSA9ICh0aGlzLlBsYXllci5mcmFtZU51bSArIDEpICUgNDBcbiAgICAgICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAodGhpcy5wb3J0YWxGcmFtZSArIDEpICUgODA7XG5cbiAgICAgICAgICAgIHRoaXMuZnJhbWVOdW0rKztcbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMClcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuaW1wb3J0IG1lbnVCbGlwIGZyb20gJy4uL2Fzc2V0cy9tZW51QmxpcC5tcDMnXG5pbXBvcnQgcGF1c2VNZW51IGZyb20gJy4uL2Fzc2V0cy9wYXVzZU1lbnUubXAzJ1xuaW1wb3J0IHBhdXNlIGZyb20gJy4uL2Fzc2V0cy9wYXVzZS5tcDMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluQ2FudmFzLCBtYWluQ3R4LCB0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHNldERhdGEsIHVucGF1c2UsIHJlbmRlckdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCl7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IG1haW5DYW52YXM7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IG1haW5DdHg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSA9IHNldERhdGE7XG4gICAgICAgIHRoaXMudW5wYXVzZSA9IHVucGF1c2U7XG4gICAgICAgIHRoaXMucmVuZGVyR2FtZSA9IHJlbmRlckdhbWU7XG4gICAgICAgIHRoaXMucmVuZGVySG9tZSA9IHJlbmRlckhvbWU7XG5cbiAgICAgICAgdGhpcy5nYW1lTXVzaWMgPSBnYW1lTXVzaWM7XG4gICAgICAgIHRoaXMubXVzaWNNdXRlZCA9IG11c2ljTXV0ZWQ7XG4gICAgICAgIHRoaXMudG9nZ2xlU291bmRNdXRlZCA9IHRvZ2dsZVNvdW5kTXV0ZWQ7XG4gICAgICAgIHRoaXMuZ2V0U291bmRNdXRlZCA9IGdldFNvdW5kTXV0ZWQ7XG4gICAgICAgIHRoaXMudG9nZ2xlTXVzaWNNdXRlZCA9IHRvZ2dsZU11c2ljTXV0ZWQ7XG5cbiAgICAgICAgdGhpcy5zb3VuZE9mZiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNvdW5kT2ZmLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9mZi5wbmcnO1xuICAgICAgICB0aGlzLnNvdW5kT24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZE9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9uLnBuZyc7XG5cbiAgICAgICAgdGhpcy5tZW51QmxpcCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9tZW51QmxpcC5tcDMnKTtcbiAgICAgICAgdGhpcy5wYXVzZSA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9wYXVzZS5tcDMnKVxuICAgICAgICB0aGlzLm1lbnVCbGlwLnZvbHVtZSA9IDAuMTtcbiAgICAgICAgdGhpcy5wYXVzZS52b2x1bWUgPSAwLjI7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAndycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMubWVudUJsaXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1heE51bSA9IHRoaXMudHlwZSA9PSBcInBhdXNlXCIgPyAzIDogMjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSBtYXhOdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5tZW51QmxpcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2UucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIgJiYgdGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNTQwICYmIG1vdXNlWCA8IDU3MCAmJiBtb3VzZVkgPiAxMzAgJiYgbW91c2VZIDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRNZW51RGF0YSh0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0pIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgY29uc3QgbWVudSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMubWFpbkNhbnZhcywgdGhpcy5tYWluQ3R4LCB0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxOdW0gPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSArIDEsIDEsIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSArIDEsIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtZW51KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0sIDEwKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gZHJhdyBtZW51IGJveFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDIwMCwxMDAsNDAwLDIwMCk7XG5cbiAgICAgICAgLy8gc2V0IG1lbnUgaGVhZGVyIGZvbnRcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICAvLyBkcmF3IG1lbnUgaGVhZGVyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgRmFpbGVkXCIsIDI2MCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMjU1LDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxldmVsIENvbXBsZXRlIVwiLCAyMjQsIDE1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyMDAsODcsMjU1KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQYXVzZVwiLCAzNDQsIDE1MClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG11dGUgYnV0dG9uIHNldHVwXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXNpY011dGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc291bmRPZmYsIDU0MCwgMTMwLCAzMCwgMjApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zb3VuZE9uLCA1NDAsIDEzMCwgMzAsIDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvLyBzZXQgbWVudSBvcHRpb24gZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICBcbiAgICAgICAgLy8gZHJhdyBtZW51IG9wdGlvbnMgYW5kIGFycm93c1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmV0cnlcIiwgMzYwLCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMjAsIDI1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMzAwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMjAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMwMCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MjAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUwMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTIwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI2MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjgwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJOZXh0IExldmVsXCIsIDMwMCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzEwLCAyNTApXG5cbiAgICAgICAgICAgIC8vIGRyYXcgc2VsZWN0ZWQgYXJyb3dzIGFyb3VuZCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI0MCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjYwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNDAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI3MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjUwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTMwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NTAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDMwMCw0MDAsNDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXN1bWVcIiwgMzQ0LCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3RhcnRcIiwgMzM0LCAyNTApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTQsIDMwMClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNzQsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI5NCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjc0LCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUzNCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTE0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjY0LCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODQsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2NCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NDQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUyNCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQ0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjM0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIzNCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTc0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEJHIGZyb20gJy4uL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmcnXG5pbXBvcnQgdGFiSWNvbiBmcm9tICcuLi9hc3NldHMvdGFiSWNvbi5wbmcnXG5pbXBvcnQgd29ybGQyQkcgZnJvbSAnLi4vYXNzZXRzL3dvcmxkMkJHLnBuZydcbmltcG9ydCBtdXNpY09uIGZyb20gJy4uL2Fzc2V0cy9tdXNpY09uLnBuZydcbmltcG9ydCBtdXNpY09mZiBmcm9tICcuLi9hc3NldHMvbXVzaWNPZmYucG5nJ1xuaW1wb3J0IHNvdW5kT24gZnJvbSAnLi4vYXNzZXRzL3NvdW5kT24ucG5nJ1xuaW1wb3J0IHNvdW5kT2ZmIGZyb20gJy4uL2Fzc2V0cy9zb3VuZE9mZi5wbmcnXG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IDE7XG4gICAgICAgIHRoaXMuc291bmRNdXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubXVzaWNNdXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubnVtV29ybGRzID0gMjtcblxuICAgICAgICB0aGlzLmdhbWUgPSAgbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAxLCAxLCB0aGlzLmdhbWUsIHRoaXMucmVuZGVyLmJpbmQodGhpcyksIHRoaXMubXVzaWMsIHRoaXMuc291bmRNdXRlZCwgdGhpcy50b2dnbGVNdXRlU291bmQuYmluZCh0aGlzKSwgdGhpcy5nZXRTb3VuZE11dGVkLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlTXV0ZU11c2ljLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmhvbWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubXVzaWMgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgdGhpcy5tdXNpYy5zcmMgPSAnZGlzdC9hdWRpby93b3JsZDFNdXNpYy5tcDMnO1xuICAgICAgICB0aGlzLm11c2ljLnZvbHVtZSA9IDAuNjtcblxuICAgICAgICB0aGlzLndvcmxkQkdzID0gW1xuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL21haW5wYWdlX2JnLnBuZycsXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvd29ybGQyQkcucG5nJyxcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuICAgICAgICAgICAgICAgIGlmIChtb3VzZVggPiAxMDAgKyBpbmNyZW1lbnQgJiYgbW91c2VYIDwgMTY1ICsgaW5jcmVtZW50ICYmIG1vdXNlWSA+IDM0NSAmJiBtb3VzZVkgPCA0MTUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhvbWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zZXREYXRhKHRoaXMuY3VycmVudFdvcmxkLCBpICsgMSwgdGhpcy5nYW1lKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNzMwICYmIG1vdXNlWCA8IDc3MCAmJiBtb3VzZVkgPiAzMCAmJiBtb3VzZVkgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZU11c2ljKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA2NjAgJiYgbW91c2VYIDwgNzAwICYmIG1vdXNlWSA+IDMwICYmIG1vdXNlWSA8IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlU291bmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWSA8IDI3MCAmJiBtb3VzZVkgPiAyNDApIHtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgMjQwICYmIG1vdXNlWCA+IDIxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZC0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSB0aGlzLm51bVdvcmxkcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgNTkwICYmIG1vdXNlWCA+IDU2MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPCB0aGlzLm51bVdvcmxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVNdXRlTXVzaWMoKSB7XG4gICAgICAgIHRoaXMubXVzaWNNdXRlZCA9ICF0aGlzLm11c2ljTXV0ZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNNdXRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNvdW5kTXV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdW5kTXV0ZWQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlTXV0ZVNvdW5kKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VuZE11dGVkID0gIXRoaXMuc291bmRNdXRlZDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmhvbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLmN1cnJlbnRXb3JsZCAtIDFdfSlgXG4gICAgXG4gICAgICAgICAgICAvL3RpdGxlXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ090aGVyd29ybGRzJywgMjI1LCA5MClcblxuICAgICAgICAgICAgLy9jb250cm9sc1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTRweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdXQVNEIC0gTW92ZScsIDMyMywgMTQwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1NwYWNlIC0gSnVtcCcsIDMwOSwgMTcwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0VzYyAtIFBhdXNlJywgMzM3LCAyMDApXG5cbiAgICBcbiAgICAgICAgICAgIC8vIHdvcmxkIHNlbGVjdCAgICAgIFxuICAgICAgICAgICAgLy8gLS13b3JsZCBuYW1lXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyOHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFdvcmxkICR7dGhpcy5jdXJyZW50V29ybGR9YCwgMzAyLCAyNzApXG5cbiAgICAgICAgICAgIC8vLS0gd29ybGQgY3ljbGluZyBhcnJvd3NcbiAgICAgICAgICAgIC8vLS0tLSByaWdodCBhcnJvd1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyNzApO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU5MCwgMjU1KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDI0MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM0NDQ0NDQnO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAvLy0tLS0gbGVmdCBhcnJvd1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAyNzApO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIxMCwgMjU1KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNDAsIDI0MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM0NDQ0NDQnO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vbGV2ZWwgc2VsZWN0IC0gMTMwcHggYmV0d2VlbiBsZXZlbFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDEwMCwxMDAsMTAwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAwICsgaW5jcmVtZW50LDM0NSw3MCw3MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNDAsMjQwLDI0MClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwNSArIGluY3JlbWVudCwzNTAsNjAsNjApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgoaSArIDEpLnRvU3RyaW5nKCksIDEyMCArIGluY3JlbWVudCwgMzk3KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtdXRlIHNvdW5kIGJ1dHRvblxuICAgICAgICAgICAgbGV0IHNvdW5kQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VuZE11dGVkKSB7XG4gICAgICAgICAgICAgICAgc291bmRCdXR0b24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT2ZmLnBuZydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291bmRCdXR0b24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT24ucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNvdW5kQnV0dG9uLCA2NjAsIDMwLCA0MCwgMzApO1xuXG4gICAgICAgICAgICAvL211dGUgbXVzaWMgYnV0dG9uXG4gICAgICAgICAgICBsZXQgbXVzaWNCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobXVzaWNCdXR0b24sIDczMCwgMzAsIDQwLCAzMCk7XG5cbiAgICAgICAgfSwxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG59XG5cbiIsImNvbnN0IEJVRkZFUl9YID0gMTc7XG5jb25zdCBCVUZGRVJfWSA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1goeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeFBvcyArIEJVRkZFUl9YID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeVBvcyArIEJVRkZFUl9ZIC0gNiA+IHRoaXMueSAmJiB5UG9zIC0gQlVGRkVSX1kgKyA2IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1koeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeVBvcyArIEJVRkZFUl9ZID4gdGhpcy55ICYmIHlQb3MgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiB4UG9zICsgQlVGRkVSX1ggLSA2ID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCArIDYgPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZUltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgdXJsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFRleHQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBtZXNzYWdlLCB4LCB5KSB7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLm1haW5DdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy10ZXh0XCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gJ3JnYmEoMCwwLDAsMC42KSdcblxuICAgICAgICBsZXQgd29yZHMgPSB0aGlzLm1lc3NhZ2Uuc3BsaXQoXCIgXCIpXG4gICAgICAgIGxldCBsZW4gPSB3b3Jkcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IHNlZ21lbnQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGNvdW50ICs9IHdvcmRzWzBdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAzMCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQucHVzaCh3b3Jkc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gW107XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudClcbiAgICB9XG5cbiAgICBmYWRlSW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUluTG9vcClcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWRlSW5Mb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGxldCB0ZXh0T3BhY2l0eSA9IGNvdW50IC8gMTAwO1xuICAgICAgICAgICAgbGV0IGJnT3BhY2l0eSA9IGNvdW50ICogMC42IC8gMTAwO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBgcmdiYSgyNTUsMjU1LDI1NSwke3RleHRPcGFjaXR5fSlgO1xuICAgICAgICAgICAgdGhpcy5iZ0NvbG9yID0gYHJnYmEoMCwwLDAsJHtiZ09wYWNpdHl9KWBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwKVxuICAgIH1cblxuICAgIGZhZGVPdXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZU91dExvb3ApXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWRlT3V0TG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSAxIC0gKGNvdW50IC8gMTAwKTtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSAwLjYgLSAoY291bnQgKiAwLjYgLyAxMDApO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBgcmdiYSgyNTUsMjU1LDI1NSwke3RleHRPcGFjaXR5fSlgO1xuICAgICAgICAgICAgdGhpcy5iZ0NvbG9yID0gYHJnYmEoMCwwLDAsJHtiZ09wYWNpdHl9KWBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBkYXJrZW4gYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMCwwLjYpXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy50ZXh0Q29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE2cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VnbWVudHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnNlZ21lbnRzW2ldLmpvaW4oXCIgXCIpLCB0aGlzLngsIHRoaXMueSArIChpICogMzApLCA0ODApXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbn0iLCJcbi8vb3V0ZXIgYXJyYXkgaXMgd29ybGRzLCBpbm5lciBhcnJheSBpcyBsZXZlbERhdGEgb2JqZWN0c1xuZXhwb3J0IGNvbnN0IExldmVsRGF0YSA9IFtcbiAgICAvLyB3b3JsZCAxXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiVGhpcyBpcyB0aGUgc3Rvcnkgb2Ygc3BhY2VtYW4sIGEgcmVzaWRlbnQgb2YgdGhlIGNsb3VkIHdvcmxkIHdobyBoYXMgYSBwYXNzaW9uIGZvciBhZHZlbnR1cmUuXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMyMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1NF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgM1xuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6MzgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjgwLFxuICAgICAgICAgICAgICAgICAgICB5OjM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OjI2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgeToxNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs3MjAsNDAwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOls1MCwzNjBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTUwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzc1MCw0NTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDVcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwyMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MDAsMTgwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiTm93IHRoYXQgc3BhY2VtYW4gaGFzIHNlZW4gYWxsIHRoYXQgaGlzIHdvcmxkIGhhcyB0byBvZmZlciwgaGUgYmVnaW5zIGhpcyBqb3VybmV5IHRocm91Z2ggb3RoZXIgd29ybGRzXCJcbiAgICAgICAgfVxuXG4gICAgXSxcbiAgICAvLyB3b3JsZCAyXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICBdXG5dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==