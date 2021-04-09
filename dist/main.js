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
  function Game(canvas, ctx, worldNum, levelNum, game, renderHome, gameMusic, muted, toggleMute) {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.worldNum = worldNum;
    this.levelNum = levelNum;
    this.game = game;
    this.renderHome = renderHome;
    this.gameMusic = gameMusic;
    this.muted = muted;
    this.toggleMute = toggleMute;
    this.frameNum = 0;
    this.levelTime = 6000;
    this.paused = false;
    this.menu = new _gamemenu__WEBPACK_IMPORTED_MODULE_26__["default"](this.canvas, this.ctx, "failed", this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome, this.gameMusic, this.muted, this.toggleMute);
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
        _this.jumpSound.play();

        _this.Player.velocity[1] -= 5;
        _this.Player.isJumping = true;
        _this.Player.grounded = false;
        setTimeout(function () {
          _this.Player.isJumping = false;
        }, 60);
      } else if (event.key == "Escape") {
        _this.pauseSound.pause();

        _this.pauseSound.currentTime = 0;

        _this.pauseSound.play();

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
            _this4.footstep.play();

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
  function GameMenu(mainCanvas, mainCtx, type, worldNum, levelNum, game, setData, unpause, renderGame, renderHome, gameMusic, muted, toggleMute) {
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
    this.muted = muted;
    this.toggleMute = toggleMute;
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
          _this.menuBlip.play();

          _this.selected--;

          _this.render();
        }
      } else if (event.key == 's') {
        var maxNum = _this.type == "pause" ? 3 : 2;

        if (_this.selected != maxNum) {
          _this.menuBlip.play();

          _this.selected++;

          _this.render();
        }
      } else if (event.key == 'Enter') {
        _this.pause.pause();

        _this.pause.currentTime = 0;

        _this.pause.play();

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
        _this.toggleMute();

        _this.muted = !_this.muted;

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
        if (this.muted) {
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
/* harmony import */ var _assets_soundOn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/soundOn.png */ "./src/assets/soundOn.png");
/* harmony import */ var _assets_soundOff_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/soundOff.png */ "./src/assets/soundOff.png");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
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
    this.muted = true;
    this.numWorlds = 2;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_5__["default"](this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this), this.music, this.muted, this.toggleMute.bind(this));
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
        _this.toggleMute();
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
    key: "toggleMute",
    value: function toggleMute() {
      this.muted = !this.muted;

      if (this.muted) {
        this.music.pause();
      } else {
        this.music.currentTime = 0;
        this.music.play();
      }
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
        }

        var soundButton = new Image();

        if (_this2.muted) {
          soundButton.src = 'dist/images/soundOff.png';
        } else {
          soundButton.src = 'dist/images/soundOn.png';
        }

        _this2.ctx.drawImage(soundButton, 730, 30, 40, 30);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXVzZS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXVzZU1lbnUubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RhYkljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGlueVBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMU11c2ljLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMkJHLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbnRlcmFjdGFibGVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGV2ZWxkYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWVGcmFtZSIsIkhvbWVQYWdlIiwicmVuZGVyIiwiRXhpdCIsIngiLCJ5IiwibGV2ZWxOdW0iLCJ3b3JsZE51bSIsImV4aXRJbWFnZSIsIkltYWdlIiwiZnJhbWVOdW0iLCJ4UG9zIiwieVBvcyIsInBvcnRhbEZyYW1lIiwiY3VycmVudEltYWdlTnVtIiwiTWF0aCIsImZsb29yIiwic3JjIiwiZHJhd0ltYWdlIiwiSW50ZXJhY3RhYmxlIiwiR2FtZSIsImdhbWUiLCJyZW5kZXJIb21lIiwiZ2FtZU11c2ljIiwibXV0ZWQiLCJ0b2dnbGVNdXRlIiwibGV2ZWxUaW1lIiwicGF1c2VkIiwibWVudSIsIkdhbWVNZW51Iiwic2V0RGF0YSIsImJpbmQiLCJ0b2dnbGVQYXVzZSIsImNsZWFyUmVjdCIsImxldmVsRGF0YSIsIkxldmVsRGF0YSIsIlZFTE9DSVRZX1giLCJHUkFWSVRZIiwiZ3Jhdml0eSIsIlBsYXllciIsInZlbG9jaXR5IiwiaXNKdW1waW5nIiwiY2FuSnVtcCIsInBsYXllclN0YXJ0UG9zIiwiZmFjZVJpZ2h0IiwibW92aW5nIiwiY29sbGlkaW5nWCIsImNvbGxpZGluZ1kiLCJncm91bmRlZCIsImNvbGxpc2lvbnN1cmZhY2VZIiwicGF1c2VTb3VuZCIsIkF1ZGlvIiwidm9sdW1lIiwianVtcFNvdW5kIiwiZm9vdHN0ZXAiLCJ3b3JsZEJHcyIsInBsYXllclNwcml0ZSIsInBvcnRhbFNwcml0ZSIsImV4aXQiLCJmaW5pc2hQb3MiLCJpbnRlcmFjdGFibGVzIiwiaW1hZ2VzIiwiZm9yRWFjaCIsImludGVyYWN0YWJsZSIsInB1c2giLCJpbWdVcmwiLCJsZW5ndGgiLCJJbnRlcmFjdGFibGVJbWFnZSIsInlPZmZzZXQiLCJpbWdIZWlnaHQiLCJsZXZlbFRleHQiLCJMZXZlbFRleHQiLCJ3aW5kb3ciLCJldmVudCIsImtleSIsInBsYXkiLCJzZXRUaW1lb3V0IiwicGF1c2UiLCJjdXJyZW50VGltZSIsIm5ld0dhbWUiLCJpbWciLCJnYW1lTG9vcCIsImNsZWFySW50ZXJ2YWwiLCJzZXRNZW51RGF0YSIsIm9wZW4iLCJmaW5pc2hXb3JsZCIsImNvdW50IiwiZXhpdFgiLCJleGl0WSIsImV4aXRXIiwiZXhpdEgiLCJzZXRJbnRlcnZhbCIsImltYWdlIiwiZHJhd1BsYXllciIsInNraXAiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInBhdXNlR2FtZSIsImZpbGxTdHlsZSIsImdhbWVPdmVyIiwiY3VyckZyYW1lIiwiaXNDb2xsaWRpbmdYIiwiaXNDb2xsaWRpbmdZIiwibGV2ZWxDb21wbGV0ZSIsImZvbnQiLCJmaWxsVGV4dCIsInRvU3RyaW5nIiwibWFpbkNhbnZhcyIsIm1haW5DdHgiLCJ0eXBlIiwidW5wYXVzZSIsInJlbmRlckdhbWUiLCJzZXRHYW1lRGF0YSIsInNvdW5kT2ZmIiwic291bmRPbiIsIm1lbnVCbGlwIiwic2VsZWN0ZWQiLCJzdWJtaXR0ZWQiLCJtYXhOdW0iLCJjbG9zZSIsImNhbnZhc1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1vdXNlWCIsImxlZnQiLCJtb3VzZVkiLCJ0b3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZmlsbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50V29ybGQiLCJudW1Xb3JsZHMiLCJtdXNpYyIsImhvbWUiLCJpIiwiaW5jcmVtZW50Iiwic291bmRCdXR0b24iLCJCVUZGRVJfWCIsIkJVRkZFUl9ZIiwidXJsIiwibWVzc2FnZSIsInRleHRDb2xvciIsImJnQ29sb3IiLCJ3b3JkcyIsInNwbGl0IiwibGVuIiwic2VnbWVudHMiLCJzZWdtZW50IiwiZmFkZUluTG9vcCIsImZhZGVPdXQiLCJ0ZXh0T3BhY2l0eSIsImJnT3BhY2l0eSIsImZhZGVPdXRMb29wIiwiZmFkZUluIiwiam9pbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFB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QURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0ltRSxVQUFNLEVBQUMsK0JBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0E1QlcsQ0FGbkI7QUF3Q0lWLFdBQVMsRUFBRSxDQUFDLEdBQUQsRUFBSyxFQUFMLENBeENmO0FBeUNJckIsU0FBTyxFQUFFLENBQUM7QUF6Q2QsQ0FGSixDQXhVcUIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1dvcmxkMURvb3IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvV29ybGQyRG9vci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9mb290c3RlcC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaWRsZUZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9qdW1wU291bmQubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9tYWlucGFnZV9iZy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9tZW51QmxpcC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9wYXVzZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9wYXVzZU1lbnUubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb3VuZE9mZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb3VuZE9uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RhYkljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvdGlueVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL3dvcmxkMU11c2ljLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMkJHLnBuZ1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3NjcmlwdHMvaG9tZXBhZ2UnXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWFpblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIGxldCBnYW1lRnJhbWUgPSAwO1xuXG5cbiAgICBuZXcgSG9tZVBhZ2UoY2FudmFzLCBjdHgpLnJlbmRlcigpO1xuXG4gICAgXG5cblxufSk7XG4iLCJpbXBvcnQgSW50ZXJhY3RhYmxlIGZyb20gXCIuL2ludGVyYWN0YWJsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4aXQgZXh0ZW5kcyBJbnRlcmFjdGFibGV7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGxldmVsTnVtLCB3b3JsZE51bSkge1xuICAgICAgICBzdXBlcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuXG5cbiAgICAgICAgdGhpcy5leGl0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoZnJhbWVOdW0sIHhQb3MgPSB0aGlzLngsIHlQb3MgPSB0aGlzLnksIHdpZHRoID0gNjAsIGhlaWdodCA9IDgwKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgIGxldCBwb3J0YWxGcmFtZSA9IGZyYW1lTnVtICUgMTIwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbWFnZU51bSA9IE1hdGguZmxvb3IocG9ydGFsRnJhbWUvMTUpICsgMTtcbiAgICAgICAgICAgIHRoaXMuZXhpdEltYWdlLnNyYyA9IGBkaXN0L2ltYWdlcy9Qb3J0YWxGcmFtZSR7Y3VycmVudEltYWdlTnVtfS5wbmdgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmV4aXRJbWFnZSwgeFBvcywgeVBvcywgd2lkdGgsIGhlaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhpdEltYWdlLnNyYyA9IGBkaXN0L2ltYWdlcy9Xb3JsZCR7dGhpcy53b3JsZE51bX1Eb29yLnBuZ2BcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmV4aXRJbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgcnVuUmlnaHRJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUxLnBuZydcbmltcG9ydCBydW5SaWdodEltYWdlMiBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTIucG5nJ1xuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMSBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMS5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMiBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMi5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMyBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmcnXG5cbmltcG9ydCBQb3J0YWxGcmFtZTEgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMS5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWUyIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTIucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lMyBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUzLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTQgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNC5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU1IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTUucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNiBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU2LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTcgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNy5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU4IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTgucG5nJ1xuXG5pbXBvcnQgV29ybGQxRG9vciBmcm9tICcuLi9hc3NldHMvV29ybGQxRG9vci5wbmcnXG5pbXBvcnQgV29ybGQyRG9vciBmcm9tICcuLi9hc3NldHMvV29ybGQyRG9vci5wbmcnXG5pbXBvcnQgV29ybGQxTXVzaWMgZnJvbSAnLi4vYXNzZXRzL3dvcmxkMU11c2ljLm1wMydcbmltcG9ydCBqdW1wU291bmQgZnJvbSAnLi4vYXNzZXRzL2p1bXBTb3VuZC5tcDMnXG5pbXBvcnQgZm9vdHN0ZXAgZnJvbSAnLi4vYXNzZXRzL2Zvb3RzdGVwLm1wMydcblxuaW1wb3J0IGxhcmdlUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL2xhcmdlUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IG1lZGl1bVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmcnXG5pbXBvcnQgc21hbGxQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgdGlueVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nJ1xuXG5pbXBvcnQgaWRsZUZyYW1lIGZyb20gJy4uL2Fzc2V0cy9pZGxlRnJhbWUucG5nJ1xuaW1wb3J0IGlkbGVGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZTIucG5nJ1xuaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tICcuL2ludGVyYWN0YWJsZSdcbmltcG9ydCBHYW1lTWVudSBmcm9tICcuL2dhbWVtZW51J1xuaW1wb3J0IEV4aXQgZnJvbSAnLi9leGl0J1xuXG5pbXBvcnQgeyBMZXZlbERhdGEgfSBmcm9tICcuL2xldmVsZGF0YSdcbmltcG9ydCBJbnRlcmFjdGFibGVJbWFnZSBmcm9tICcuL2ludGVyYWN0YWJsZUltYWdlJ1xuaW1wb3J0IExldmVsVGV4dCBmcm9tICcuL2xldmVsVGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSwgcmVuZGVySG9tZSwgZ2FtZU11c2ljLCBtdXRlZCwgdG9nZ2xlTXV0ZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXRlZCA9IG11dGVkO1xuICAgICAgICB0aGlzLnRvZ2dsZU11dGUgPSB0b2dnbGVNdXRlO1xuXG4gICAgICAgIHRoaXMuZnJhbWVOdW0gPSAwO1xuICAgICAgICB0aGlzLmxldmVsVGltZSA9IDYwMDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBHYW1lTWVudSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIFwiZmFpbGVkXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lLCB0aGlzLnNldERhdGEuYmluZCh0aGlzKSwgdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLCB0aGlzLnJlbmRlckhvbWUsIHRoaXMuZ2FtZU11c2ljLCB0aGlzLm11dGVkLCB0aGlzLnRvZ2dsZU11dGUpO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gZ2V0IHNlZWQgZGF0YSBmb3IgY3VycmVudCBsZXZlbFxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IExldmVsRGF0YVt0aGlzLndvcmxkTnVtIC0gMV1bdGhpcy5sZXZlbE51bSAtIDFdXG5cbiAgICAgICAgdGhpcy5WRUxPQ0lUWV9YID0gMztcbiAgICAgICAgdGhpcy5HUkFWSVRZID0gdGhpcy5sZXZlbERhdGEuZ3Jhdml0eTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuUGxheWVyID0ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IFswLDBdLFxuICAgICAgICAgICAgaXNKdW1waW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkp1bXA6IGZhbHNlLFxuICAgICAgICAgICAgeDogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMF0sXG4gICAgICAgICAgICB5OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1sxXSxcbiAgICAgICAgICAgIHdpZHRoOiAzNCxcbiAgICAgICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgICAgICBmcmFtZU51bTogMCxcbiAgICAgICAgICAgIGZhY2VSaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIG1vdmluZzogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdYOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1k6IGZhbHNlLFxuICAgICAgICAgICAgZ3JvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlzaW9uc3VyZmFjZVk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGF1c2VTb3VuZCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9wYXVzZS5tcDMnKVxuICAgICAgICB0aGlzLnBhdXNlU291bmQudm9sdW1lID0gMC4yO1xuXG4gICAgICAgIC8vIHBsYXllciBtb3ZlbWVudCBzb3VuZHNcbiAgICAgICAgdGhpcy5qdW1wU291bmQgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vanVtcFNvdW5kLm1wMycpXG4gICAgICAgIHRoaXMuanVtcFNvdW5kLnZvbHVtZSA9IDAuNjtcbiAgICAgICAgdGhpcy5mb290c3RlcCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9mb290c3RlcC5tcDMnKVxuICAgICAgICB0aGlzLmZvb3RzdGVwLnZvbHVtZSA9IDAuNjtcblxuICAgICAgICB0aGlzLndvcmxkQkdzID0gW1xuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL21haW5wYWdlX2JnLnBuZycsXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvd29ybGQyQkcucG5nJyxcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMucG9ydGFsU3ByaXRlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDcwLDcwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaW1nVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVJbWFnZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS5pbWdVcmwsaW50ZXJhY3RhYmxlLngsaW50ZXJhY3RhYmxlLnkgLSBpbnRlcmFjdGFibGUueU9mZnNldCxpbnRlcmFjdGFibGUud2lkdGgsaW50ZXJhY3RhYmxlLmltZ0hlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBuZXcgTGV2ZWxUZXh0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0LCAxNjAsMjAwKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gdGhpcy5WRUxPQ0lUWV9YO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZmFjZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gLXRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJyAnICYmIHRoaXMuUGxheWVyLmdyb3VuZGVkICYmICF0aGlzLlBsYXllci5pc0p1bXBpbmcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wU291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5pc0p1bXBpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIDYwKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VTb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ2QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2EnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHNldEdhbWUobmV3R2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXdHYW1lO1xuICAgIH1cblxuICAgIHNldERhdGEod29ybGROdW0sIGxldmVsTnVtLCBnYW1lKSB7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMuZnJhbWVOdW0gPSAwO1xuICAgICAgICB0aGlzLmxldmVsVGltZSA9IDYwMDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gMDtcblxuICAgICAgICAvLyBzZXQgZXhpdCBsb2NhdGlvblxuICAgICAgICB0aGlzLmV4aXQgPSBuZXcgRXhpdCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1swXSx0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMV0sNTAsNTAsIHRoaXMubGV2ZWxOdW0sIHRoaXMud29ybGROdW0pO1xuXG4gICAgICAgIC8vIHNldCBpbnRlcmFjdGFibGVzIGZvciB0aGlzIHN0YWdlIGZyb20gc2VlZCBkYXRhXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsRGF0YS5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUueCwgaW50ZXJhY3RhYmxlLnksIGludGVyYWN0YWJsZS5oZWlnaHQsIGludGVyYWN0YWJsZS53aWR0aCkpO1xuICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pbWdVcmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dCA9IG5ldyBMZXZlbFRleHQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQsIDE2MCwyMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICB0b2dnbGVQYXVzZSgpe1xuICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIGdhbWVPdmVyKGdhbWVMb29wKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiZmFpbGVkXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgfVxuXG4gICAgbGV2ZWxDb21wbGV0ZShnYW1lTG9vcCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZpbmlzaFdvcmxkKVxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImNvbXBsZXRlXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICAgICAgICAgIH0sIDQwMDApXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGV4aXRYID0gNTAwO1xuICAgICAgICAgICAgbGV0IGV4aXRZID0gMTgwO1xuICAgICAgICAgICAgbGV0IGV4aXRXID0gNjA7XG4gICAgICAgICAgICBsZXQgZXhpdEggPSA4MDtcbiAgICAgICAgICAgIGxldCBmaW5pc2hXb3JsZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpdFggKz0gMC42O1xuICAgICAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIGV4aXRYLCBleGl0WSwgZXhpdFcsIGV4aXRIKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXRYIC09IDAuMztcbiAgICAgICAgICAgICAgICAgICAgZXhpdFkgLT0gMC40O1xuICAgICAgICAgICAgICAgICAgICBleGl0VyArPSAwLjY7XG4gICAgICAgICAgICAgICAgICAgIGV4aXRIICs9IDAuODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgZXhpdFgsIGV4aXRZLCBleGl0VywgZXhpdEgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIDUzMCwgMTAwLCAxMjAsIDE2MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgLy8gZHJhdyBpbnRlcmFjdGFibGVzIFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgJSA0MCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyMjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55IC09IDI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjUwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjc1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAwLjU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMzI1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIud2lkdGggLT0gMC4zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5oZWlnaHQgLT0gMC41O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDAuMTU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gMC4yNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMucGxheWVyU3ByaXRlLCB0aGlzLlBsYXllci54LCB0aGlzLlBsYXllci55LCB0aGlzLlBsYXllci53aWR0aCwgdGhpcy5QbGF5ZXIuaGVpZ2h0KVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcClcbiAgICAgICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImNvbXBsZXRlXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwYXVzZUdhbWUoZ2FtZUxvb3ApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcClcbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwicGF1c2VcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKHNraXAgPSBmYWxzZSl7XG4gICAgICAgIGlmICh0aGlzLmxldmVsVGV4dCAhPSBcIlwiICYmICFza2lwKSB7ICAgIFxuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQub3BlbigpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMud29ybGRCR3NbdGhpcy53b3JsZE51bSAtIDFdfSlgXG4gICAgICAgIGNvbnN0IGdhbWVMb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUdhbWUoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcblxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLnkgPiA1MDAgfHwgdGhpcy5sZXZlbFRpbWUgPD0gMTEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcihnYW1lTG9vcClcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIGRyYXcgZXhpdFxuICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcih0aGlzLmZyYW1lTnVtKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLnJlbmRlcigpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gZHJhdyBwbGF5ZXJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BsYXllcih0aGlzLnBsYXllclNwcml0ZSwgdGhpcy5QbGF5ZXIueCwgdGhpcy5QbGF5ZXIueSwgdGhpcy5QbGF5ZXIud2lkdGgsIHRoaXMuUGxheWVyLmhlaWdodClcblxuXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIGZyYW1lIGltYWdlXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIubW92aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdHN0ZXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyckZyYW1lID0gTWF0aC5mbG9vcih0aGlzLlBsYXllci5mcmFtZU51bSAvIDEwKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZmFjZVJpZ2h0KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyckZyYW1lID09IDAgfHwgY3VyckZyYW1lID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lTnVtICUgNDAgPiAyMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcblxuICAgIFxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBvYnN0YWNsZSBjb2xsaXNpb25cbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1kgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS5yZW5kZXIoKTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWCh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaXNDb2xsaWRpbmdZKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdZID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaXNpb25zdXJmYWNlWSA9IGludGVyYWN0YWJsZS55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgbGV2ZWwgZmluaXNoIFxuICAgICAgICAgICAgaWYgKHRoaXMuZXhpdC5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsQ29tcGxldGUoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBtb3ZlbWVudCBiYXNlIG9uIHBsYXllciBjb2xsaXNpb25cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdOyAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSA9IHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZIC0gNTk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgICAgIC8vbGV2ZWwgaW5mbyBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX1gLCAzNjQsIDUwKTtcblxuICAgICAgICAgICAgLy8gdGltZXJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUaW1lLS07XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChNYXRoLmZsb29yKHRoaXMubGV2ZWxUaW1lLzEwMCkudG9TdHJpbmcoKSwgNzAwLCA1MCk7XG4gICAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmZyYW1lTnVtID0gKHRoaXMuUGxheWVyLmZyYW1lTnVtICsgMSkgJSA0MFxuICAgICAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9ICh0aGlzLnBvcnRhbEZyYW1lICsgMSkgJSA4MDtcblxuICAgICAgICAgICAgdGhpcy5mcmFtZU51bSsrO1xuICAgICAgICAgICAgXG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxufSIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5pbXBvcnQgbWVudUJsaXAgZnJvbSAnLi4vYXNzZXRzL21lbnVCbGlwLm1wMydcbmltcG9ydCBwYXVzZU1lbnUgZnJvbSAnLi4vYXNzZXRzL3BhdXNlTWVudS5tcDMnXG5pbXBvcnQgcGF1c2UgZnJvbSAnLi4vYXNzZXRzL3BhdXNlLm1wMydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1haW5DYW52YXMsIG1haW5DdHgsIHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSwgc2V0RGF0YSwgdW5wYXVzZSwgcmVuZGVyR2FtZSwgcmVuZGVySG9tZSwgZ2FtZU11c2ljLCBtdXRlZCwgdG9nZ2xlTXV0ZSl7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IG1haW5DYW52YXM7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IG1haW5DdHg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSA9IHNldERhdGE7XG4gICAgICAgIHRoaXMudW5wYXVzZSA9IHVucGF1c2U7XG4gICAgICAgIHRoaXMucmVuZGVyR2FtZSA9IHJlbmRlckdhbWU7XG4gICAgICAgIHRoaXMucmVuZGVySG9tZSA9IHJlbmRlckhvbWU7XG5cbiAgICAgICAgdGhpcy5nYW1lTXVzaWMgPSBnYW1lTXVzaWM7XG4gICAgICAgIHRoaXMubXV0ZWQgPSBtdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXRlID0gdG9nZ2xlTXV0ZTtcbiAgICAgICAgdGhpcy5zb3VuZE9mZiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNvdW5kT2ZmLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9mZi5wbmcnO1xuICAgICAgICB0aGlzLnNvdW5kT24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZE9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9uLnBuZyc7XG5cbiAgICAgICAgdGhpcy5tZW51QmxpcCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9tZW51QmxpcC5tcDMnKTtcbiAgICAgICAgdGhpcy5wYXVzZSA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9wYXVzZS5tcDMnKVxuICAgICAgICB0aGlzLm1lbnVCbGlwLnZvbHVtZSA9IDAuMTtcbiAgICAgICAgdGhpcy5wYXVzZS52b2x1bWUgPSAwLjI7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAndycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudUJsaXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1heE51bSA9IHRoaXMudHlwZSA9PSBcInBhdXNlXCIgPyAzIDogMjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSBtYXhOdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51QmxpcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIgJiYgdGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNTQwICYmIG1vdXNlWCA8IDU3MCAmJiBtb3VzZVkgPiAxMzAgJiYgbW91c2VZIDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXRlZCA9ICF0aGlzLm11dGVkO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldE1lbnVEYXRhKHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zdCBtZW51ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5tYWluQ2FudmFzLCB0aGlzLm1haW5DdHgsIHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtICsgMSwgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtICsgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1lbnUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDEwMCw0MDAsMjAwKTtcblxuICAgICAgICAvLyBzZXQgbWVudSBoZWFkZXIgZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIC8vIGRyYXcgbWVudSBoZWFkZXJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBGYWlsZWRcIiwgMjYwLCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgQ29tcGxldGUhXCIsIDIyNCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCw4NywyNTUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlXCIsIDM0NCwgMTUwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXV0ZSBidXR0b24gc2V0dXBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11dGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc291bmRPZmYsIDU0MCwgMTMwLCAzMCwgMjApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zb3VuZE9uLCA1NDAsIDEzMCwgMzAsIDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvLyBzZXQgbWVudSBvcHRpb24gZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICBcbiAgICAgICAgLy8gZHJhdyBtZW51IG9wdGlvbnMgYW5kIGFycm93c1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmV0cnlcIiwgMzYwLCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMjAsIDI1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMzAwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMjAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMwMCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MjAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUwMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTIwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI2MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjgwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJOZXh0IExldmVsXCIsIDMwMCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzEwLCAyNTApXG5cbiAgICAgICAgICAgIC8vIGRyYXcgc2VsZWN0ZWQgYXJyb3dzIGFyb3VuZCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI0MCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjYwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNDAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI3MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjUwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTMwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NTAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDMwMCw0MDAsNDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXN1bWVcIiwgMzQ0LCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3RhcnRcIiwgMzM0LCAyNTApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTQsIDMwMClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNzQsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI5NCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjc0LCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUzNCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTE0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjY0LCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODQsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2NCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NDQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUyNCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQ0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjM0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIzNCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTc0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEJHIGZyb20gJy4uL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmcnXG5pbXBvcnQgdGFiSWNvbiBmcm9tICcuLi9hc3NldHMvdGFiSWNvbi5wbmcnXG5pbXBvcnQgd29ybGQyQkcgZnJvbSAnLi4vYXNzZXRzL3dvcmxkMkJHLnBuZydcblxuaW1wb3J0IHNvdW5kT24gZnJvbSAnLi4vYXNzZXRzL3NvdW5kT24ucG5nJ1xuaW1wb3J0IHNvdW5kT2ZmIGZyb20gJy4uL2Fzc2V0cy9zb3VuZE9mZi5wbmcnXG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IDE7XG4gICAgICAgIHRoaXMubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm51bVdvcmxkcyA9IDI7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gIG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMSwgMSwgdGhpcy5nYW1lLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLCB0aGlzLm11c2ljLCB0aGlzLm11dGVkLCB0aGlzLnRvZ2dsZU11dGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuaG9tZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygpO1xuICAgICAgICB0aGlzLm11c2ljLnNyYyA9ICdkaXN0L2F1ZGlvL3dvcmxkMU11c2ljLm1wMyc7XG4gICAgICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC42O1xuXG4gICAgICAgIHRoaXMud29ybGRCR3MgPSBbXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvbWFpbnBhZ2VfYmcucG5nJyxcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy93b3JsZDJCRy5wbmcnLFxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG5cblxuICAgICAgICAgICAgbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDEwMCArIGluY3JlbWVudCAmJiBtb3VzZVggPCAxNjUgKyBpbmNyZW1lbnQgJiYgbW91c2VZID4gMzQ1ICYmIG1vdXNlWSA8IDQxNSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaG9tZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNldERhdGEodGhpcy5jdXJyZW50V29ybGQsIGkgKyAxLCB0aGlzLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA3MzAgJiYgbW91c2VYIDwgNzcwICYmIG1vdXNlWSA+IDMwICYmIG1vdXNlWSA8IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVkgPCAyNzAgJiYgbW91c2VZID4gMjQwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA8IDI0MCAmJiBtb3VzZVggPiAyMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmxkID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gdGhpcy5udW1Xb3JsZHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA8IDU5MCAmJiBtb3VzZVggPiA1NjApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmxkIDwgdGhpcy5udW1Xb3JsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlTXV0ZSgpIHtcbiAgICAgICAgdGhpcy5tdXRlZCA9ICF0aGlzLm11dGVkO1xuXG4gICAgICAgIGlmICh0aGlzLm11dGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ob21lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMud29ybGRCR3NbdGhpcy5jdXJyZW50V29ybGQgLSAxXX0pYFxuICAgIFxuICAgICAgICAgICAgLy90aXRsZVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzJweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdPdGhlcndvcmxkcycsIDIyNSwgOTApXG5cbiAgICAgICAgICAgIC8vY29udHJvbHNcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnV0FTRCAtIE1vdmUnLCAzMjMsIDE0MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTcGFjZSAtIEp1bXAnLCAzMDksIDE3MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdFc2MgLSBQYXVzZScsIDMzNywgMjAwKVxuXG4gICAgXG4gICAgICAgICAgICAvLyB3b3JsZCBzZWxlY3QgICAgICBcbiAgICAgICAgICAgIC8vIC0td29ybGQgbmFtZVxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjhweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBXb3JsZCAke3RoaXMuY3VycmVudFdvcmxkfWAsIDMwMiwgMjcwKVxuXG4gICAgICAgICAgICAvLy0tIHdvcmxkIGN5Y2xpbmcgYXJyb3dzXG4gICAgICAgICAgICAvLy0tLS0gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU2MCwgMjcwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1OTAsIDI1NSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyNDApO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjNDQ0NDQ0JztcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8tLS0tIGxlZnQgYXJyb3dcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI0MCwgMjcwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyMTAsIDI1NSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjQwLCAyNDApO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjNDQ0NDQ0JztcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvL2xldmVsIHNlbGVjdCAtIDEzMHB4IGJldHdlZW4gbGV2ZWxcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigxMDAsMTAwLDEwMClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwMCArIGluY3JlbWVudCwzNDUsNzAsNzApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMjQwLDI0MCwyNDApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDUgKyBpbmNyZW1lbnQsMzUwLDYwLDYwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoKGkgKyAxKS50b1N0cmluZygpLCAxMjAgKyBpbmNyZW1lbnQsIDM5NylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNvdW5kQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXRlZCkge1xuICAgICAgICAgICAgICAgIHNvdW5kQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9mZi5wbmcnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdW5kQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9uLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShzb3VuZEJ1dHRvbiwgNzMwLCAzMCwgNDAsIDMwKTtcblxuICAgICAgICB9LDEwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBcbn1cblxuIiwiY29uc3QgQlVGRkVSX1ggPSAxNztcbmNvbnN0IEJVRkZFUl9ZID0gMzA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGlzQ29sbGlkaW5nWCh4UG9zLCB5UG9zKSB7XG4gICAgICAgIGlmICh4UG9zICsgQlVGRkVSX1ggPiB0aGlzLnggJiYgeFBvcyAtIEJVRkZFUl9YIDwgdGhpcy54ICsgdGhpcy53aWR0aCAmJiB5UG9zICsgQlVGRkVSX1kgLSA2ID4gdGhpcy55ICYmIHlQb3MgLSBCVUZGRVJfWSArIDYgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQ29sbGlkaW5nWSh4UG9zLCB5UG9zKSB7XG4gICAgICAgIGlmICh5UG9zICsgQlVGRkVSX1kgPiB0aGlzLnkgJiYgeVBvcyA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIHhQb3MgKyBCVUZGRVJfWCAtIDYgPiB0aGlzLnggJiYgeFBvcyAtIEJVRkZFUl9YICsgNiA8IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDApXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RhYmxlSW1hZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB1cmwsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsVGV4dCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIG1lc3NhZ2UsIHgsIHkpIHtcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMubWFpbkN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXRleHRcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknO1xuICAgICAgICB0aGlzLmJnQ29sb3IgPSAncmdiYSgwLDAsMCwwLjYpJ1xuXG4gICAgICAgIGxldCB3b3JkcyA9IHRoaXMubWVzc2FnZS5zcGxpdChcIiBcIilcbiAgICAgICAgbGV0IGxlbiA9IHdvcmRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgc2VnbWVudCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgY291bnQgKz0gd29yZHNbMF0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDMwKSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudC5wdXNoKHdvcmRzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KVxuICAgIH1cblxuICAgIGZhZGVJbigpIHtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW5Mb29wKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xuICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGZhZGVJbkxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgbGV0IHRleHRPcGFjaXR5ID0gY291bnQgLyAxMDA7XG4gICAgICAgICAgICBsZXQgYmdPcGFjaXR5ID0gY291bnQgKiAwLjYgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLnRleHRDb2xvciA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7dGV4dE9wYWNpdHl9KWA7XG4gICAgICAgICAgICB0aGlzLmJnQ29sb3IgPSBgcmdiYSgwLDAsMCwke2JnT3BhY2l0eX0pYFxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgZmFkZU91dCgpIHtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlT3V0TG9vcClcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGZhZGVPdXRMb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGxldCB0ZXh0T3BhY2l0eSA9IDEgLSAoY291bnQgLyAxMDApO1xuICAgICAgICAgICAgbGV0IGJnT3BhY2l0eSA9IDAuNiAtIChjb3VudCAqIDAuNiAvIDEwMCk7XG4gICAgICAgICAgICB0aGlzLnRleHRDb2xvciA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7dGV4dE9wYWNpdHl9KWA7XG4gICAgICAgICAgICB0aGlzLmJnQ29sb3IgPSBgcmdiYSgwLDAsMCwke2JnT3BhY2l0eX0pYFxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTApXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGRhcmtlbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwLDAuNilcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWdtZW50cy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2VnbWVudHNbaV0uam9pbihcIiBcIiksIHRoaXMueCwgdGhpcy55ICsgKGkgKiAzMCksIDQ4MClcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxufSIsIlxuLy9vdXRlciBhcnJheSBpcyB3b3JsZHMsIGlubmVyIGFycmF5IGlzIGxldmVsRGF0YSBvYmplY3RzXG5leHBvcnQgY29uc3QgTGV2ZWxEYXRhID0gW1xuICAgIC8vIHdvcmxkIDFcbiAgICBbXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgMVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFsxMDAsNTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMSxcbiAgICAgICAgICAgIGxldmVsVGV4dDogXCJUaGlzIGlzIHRoZSBzdG9yeSBvZiBzcGFjZW1hbiwgYSByZXNpZGVudCBvZiB0aGUgY2xvdWQgd29ybGQgd2hvIGhhcyBhIHBhc3Npb24gZm9yIGFkdmVudHVyZS5cIlxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDJcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2ODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY2MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY2MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzIwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDU0XSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTozODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIHk6MzYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6MjYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjIwLFxuICAgICAgICAgICAgICAgICAgICB5OjE0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzcyMCw0MDBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDRcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzUwLDM2MF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1NTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIxMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjUwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNzUwLDQ1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgNVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDIwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzUwMCwxODBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMSxcbiAgICAgICAgICAgIGxldmVsVGV4dDogXCJOb3cgdGhhdCBzcGFjZW1hbiBoYXMgc2VlbiBhbGwgdGhhdCBoaXMgd29ybGQgaGFzIHRvIG9mZmVyLCBoZSBiZWdpbnMgaGlzIGpvdXJuZXkgdGhyb3VnaCBvdGhlciB3b3JsZHNcIlxuICAgICAgICB9XG5cbiAgICBdLFxuICAgIC8vIHdvcmxkIDJcbiAgICBbXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgMVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFsxMDAsNTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgIF1cbl0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9