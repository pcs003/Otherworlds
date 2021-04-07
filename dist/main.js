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

/***/ "./src/assets/footstep.mp3":
/*!*********************************!*\
  !*** ./src/assets/footstep.mp3 ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("audio/footstep.mp3");

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
/* harmony default export */ __webpack_exports__["default"] = ("audio/jumpSound.mp3");

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
/* harmony default export */ __webpack_exports__["default"] = ("audio/world1Music.mp3");

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
      if (this.levelNum == 5) {
        var portalFrame = frameNum % 80;
        var currentImageNum = Math.floor(portalFrame / 10) + 1;
        this.exitImage.src = "dist/images/PortalFrame".concat(currentImageNum, ".png");
        this.ctx.drawImage(this.exitImage, this.x, this.y, this.width, this.height);
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
/* harmony import */ var _assets_world1Music_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/world1Music.mp3 */ "./src/assets/world1Music.mp3");
/* harmony import */ var _assets_jumpSound_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/jumpSound.mp3 */ "./src/assets/jumpSound.mp3");
/* harmony import */ var _assets_footstep_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/footstep.mp3 */ "./src/assets/footstep.mp3");
/* harmony import */ var _assets_largePlatform_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/largePlatform.png */ "./src/assets/largePlatform.png");
/* harmony import */ var _assets_mediumPlatform_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/mediumPlatform.png */ "./src/assets/mediumPlatform.png");
/* harmony import */ var _assets_smallPlatform_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/smallPlatform.png */ "./src/assets/smallPlatform.png");
/* harmony import */ var _assets_tinyPlatform_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/tinyPlatform.png */ "./src/assets/tinyPlatform.png");
/* harmony import */ var _assets_idleFrame_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/idleFrame.png */ "./src/assets/idleFrame.png");
/* harmony import */ var _assets_idleFrame2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/idleFrame2.png */ "./src/assets/idleFrame2.png");
/* harmony import */ var _interactable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interactable */ "./src/scripts/interactable.js");
/* harmony import */ var _gamemenu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gamemenu */ "./src/scripts/gamemenu.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./exit */ "./src/scripts/exit.js");
/* harmony import */ var _leveldata__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./leveldata */ "./src/scripts/leveldata.js");
/* harmony import */ var _interactableImage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./interactableImage */ "./src/scripts/interactableImage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }































var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx, worldNum, levelNum, game, renderHome) {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.worldNum = worldNum;
    this.levelNum = levelNum;
    this.game = game;
    this.renderHome = renderHome;
    this.frameNum = 0;
    this.levelTime = 6000;
    this.paused = false;
    this.menu = new _gamemenu__WEBPACK_IMPORTED_MODULE_25__["default"](this.canvas, this.ctx, "failed", this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // get seed data for current level

    this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_27__["LevelData"][this.worldNum - 1][this.levelNum - 1];
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
    }; // player movement sounds

    this.jumpSound = new Audio('dist/audio/jumpSound.mp3');
    this.jumpSound.volume = 0.6;
    this.footstep = new Audio('dist/audio/footstep.mp3');
    this.footstep.volume = 0.6;
    this.playerSprite = new Image();
    this.portalFrame = 0;
    this.portalSprite = new Image(); // set exit location

    this.exit = new _exit__WEBPACK_IMPORTED_MODULE_26__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 50, 50, this.levelNum, this.worldNum); // set interactables for this stage from seed data

    this.interactables = [];
    this.images = [];
    this.levelData.interactables.forEach(function (interactable) {
      _this.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_24__["default"](_this.canvas, _this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

      if (interactable.imgUrl.length > 0) {
        _this.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_28__["default"](_this.canvas, _this.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
      }
    });
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

      this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_27__["LevelData"][this.worldNum - 1][this.levelNum - 1];
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

      this.exit = new _exit__WEBPACK_IMPORTED_MODULE_26__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 50, 50, this.levelNum, this.worldNum); // set interactables for this stage from seed data

      this.interactables = [];
      this.images = [];
      this.levelData.interactables.forEach(function (interactable) {
        _this2.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_24__["default"](_this2.canvas, _this2.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

        if (interactable.imgUrl.length > 0) {
          _this2.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_28__["default"](_this2.canvas, _this2.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
        }
      });
    }
  }, {
    key: "togglePause",
    value: function togglePause() {
      this.paused = !this.paused;

      if (this.paused == false) {
        this.render();
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
      this.interactables = [];
      clearInterval(gameLoop);
      this.menu.setMenuData("complete", this.worldNum, this.levelNum);
      this.menu.open();
    }
  }, {
    key: "pauseGame",
    value: function pauseGame(gameLoop) {
      console.log(this.menu);
      clearInterval(gameLoop);
      this.menu.setMenuData("pause", this.worldNum, this.levelNum);
      this.menu.open();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var gameLoop = setInterval(function () {
        if (_this3.paused) {
          _this3.pauseGame(gameLoop);
        }

        _this3.ctx.clearRect(0, 0, _this3.canvas.width, _this3.canvas.height);

        _this3.ctx.fillStyle = "rgb(0,0,0)";

        if (_this3.Player.y > 500 || _this3.levelTime <= 110) {
          _this3.gameOver(gameLoop);
        } // draw exit


        _this3.exit.render(_this3.frameNum); // draw images


        _this3.images.forEach(function (image) {
          image.render();
        }); // draw player


        _this3.drawPlayer(_this3.playerSprite, _this3.Player.x, _this3.Player.y, _this3.Player.width, _this3.Player.height); // handle player frame image


        if (_this3.Player.moving) {
          if (_this3.Player.grounded) {
            _this3.footstep.play();

            var currFrame = Math.floor(_this3.Player.frameNum / 10);

            if (_this3.Player.faceRight) {
              if (currFrame == 0 || currFrame == 2) {
                _this3.playerSprite.src = "dist/images/runRightFrame1.png";
              } else if (currFrame == 1) {
                _this3.playerSprite.src = "dist/images/runRightFrame2.png";
              } else if (currFrame == 3) {
                _this3.playerSprite.src = "dist/images/runRightFrame3.png";
              }
            } else {
              if (currFrame == 0 || currFrame == 2) {
                _this3.playerSprite.src = "dist/images/runLeftFrame1.png";
              } else if (currFrame == 1) {
                _this3.playerSprite.src = "dist/images/runLeftFrame2.png";
              } else if (currFrame == 3) {
                _this3.playerSprite.src = "dist/images/runLeftFrame3.png";
              }
            }
          } else {
            if (_this3.Player.faceRight) {
              _this3.playerSprite.src = "dist/images/runRightFrame2.png";
            } else {
              _this3.playerSprite.src = "dist/images/runLeftFrame2.png";
            }
          }
        } else {
          if (_this3.frameNum % 40 > 20) {
            _this3.playerSprite.src = "dist/images/idleFrame.png";
          } else {
            _this3.playerSprite.src = "dist/images/idleFrame2.png";
          }
        } // handle player obstacle collision


        _this3.Player.collidingX = false;
        _this3.Player.collidingY = false;
        _this3.Player.grounded = false;

        _this3.interactables.forEach(function (interactable) {
          interactable.render();

          if (interactable.isCollidingX(_this3.Player.x + _this3.Player.width / 2 + _this3.Player.velocity[0], _this3.Player.y + _this3.Player.height / 2 + _this3.Player.velocity[1])) {
            _this3.Player.collidingX = true;
          }

          if (interactable.isCollidingY(_this3.Player.x + _this3.Player.width / 2 + _this3.Player.velocity[0], _this3.Player.y + _this3.Player.height / 2 + _this3.Player.velocity[1])) {
            _this3.Player.collidingY = true;
            _this3.Player.grounded = true;
            _this3.Player.collisionsurfaceY = interactable.y;
          }
        }); // handle player level finish 


        if (_this3.exit.isCollidingX(_this3.Player.x + _this3.Player.width / 2 + _this3.Player.velocity[0], _this3.Player.y + _this3.Player.height / 2 + _this3.Player.velocity[1]) || _this3.exit.isCollidingY(_this3.Player.x + _this3.Player.width / 2 + _this3.Player.velocity[0], _this3.Player.y + _this3.Player.height / 2 + _this3.Player.velocity[1])) {
          _this3.levelComplete(gameLoop);
        } // handle player movement base on player collision


        if (!_this3.Player.collidingX) {
          _this3.Player.x += _this3.Player.velocity[0];
        } else {
          _this3.Player.velocity[1] = 0;
        }

        if (!_this3.Player.collidingY) {
          _this3.Player.velocity[1] -= _this3.GRAVITY;
          _this3.Player.y += _this3.Player.velocity[1];
        } else {
          _this3.Player.y = _this3.Player.collisionsurfaceY - 59;
          _this3.Player.velocity[1] = 0;
        }

        if (_this3.Player.isJumping) {
          _this3.Player.velocity[1] -= _this3.GRAVITY;
          _this3.Player.y += _this3.Player.velocity[1];
        }

        _this3.ctx.fillStyle = '#ffffff';
        _this3.ctx.font = "24px 'Press Start 2P'"; //level info 

        _this3.ctx.fillText("".concat(_this3.worldNum, "-").concat(_this3.levelNum), 364, 50); // timer


        _this3.levelTime--;

        _this3.ctx.fillText(Math.floor(_this3.levelTime / 100).toString(), 700, 50);

        _this3.Player.frameNum = (_this3.Player.frameNum + 1) % 40;
        _this3.portalFrame = (_this3.portalFrame + 1) % 80;
        _this3.frameNum++;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GameMenu = /*#__PURE__*/function () {
  function GameMenu(mainCanvas, mainCtx, type, worldNum, levelNum, game, setData, unpause, renderGame, renderHome) {
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
    this.selected = 1;
    this.submitted = false;
    window.addEventListener("keydown", function (event) {
      if (event.key == 'w') {
        if (_this.selected != 1) {
          _this.selected--;

          _this.render();
        }
      } else if (event.key == 's') {
        var maxNum = _this.type == "pause" ? 3 : 2;

        if (_this.selected != maxNum) {
          _this.selected++;

          _this.render();
        }
      } else if (event.key == 'Enter') {
        _this.submitted = true;
      } else if (event.key == "Escape" && _this.type == "pause") {
        _this.close();
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
      } // set menu option font


      this.ctx.fillStyle = "#ffffff";
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
/* harmony import */ var _assets_soundOn_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/soundOn.png */ "./src/assets/soundOn.png");
/* harmony import */ var _assets_soundOff_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/soundOff.png */ "./src/assets/soundOff.png");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
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
    this.game = new _game__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this));
    this.home = null;
    this.music = new Audio();
    this.music.src = 'dist/audio/world1Music.mp3';
    this.music.volume = 0.6;
    this.muted = true;
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

        _this2.canvas.style.backgroundImage = "url('dist/images/mainpage_bg.png')"; //title

        _this2.ctx.fillStyle = '#ffffff';
        _this2.ctx.font = "32px 'Press Start 2P'";

        _this2.ctx.fillText('Otherworlds', 225, 90); //level select - 120px between level


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
  gravity: -0.1
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
  finishPos: [700, 400],
  gravity: -0.1
}, // world 1 level 4
{
  playerStartPos: [100, 100],
  interactables: [{
    x: 80,
    y: 360,
    height: 30,
    width: 640,
    imgUrl: ''
  }, {
    x: 500,
    y: 300,
    height: 20,
    width: 100,
    imgUrl: ''
  }, {
    x: 300,
    y: 200,
    height: 20,
    width: 100,
    imgUrl: ''
  }, {
    x: 200,
    y: 100,
    height: 20,
    width: 100,
    imgUrl: ''
  }],
  finishPos: [50, 50],
  gravity: -0.1
}, // world 1 level 5
{
  playerStartPos: [100, 100],
  interactables: [{
    x: 80,
    y: 360,
    height: 30,
    width: 640,
    imgUrl: ''
  }, {
    x: 500,
    y: 300,
    height: 20,
    width: 100,
    imgUrl: ''
  }, {
    x: 300,
    y: 200,
    height: 20,
    width: 100,
    imgUrl: ''
  }, {
    x: 200,
    y: 100,
    height: 20,
    width: 100,
    imgUrl: ''
  }],
  finishPos: [50, 50],
  gravity: -0.1
}], // world 2
[]];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9vdHN0ZXAubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2lkbGVGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanVtcFNvdW5kLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xhcmdlUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbWFpbnBhZ2VfYmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbWVkaXVtUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RhYkljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGlueVBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMU11c2ljLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbnRlcmFjdGFibGVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbGRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZUZyYW1lIiwiSG9tZVBhZ2UiLCJyZW5kZXIiLCJFeGl0IiwieCIsInkiLCJsZXZlbE51bSIsIndvcmxkTnVtIiwiZXhpdEltYWdlIiwiSW1hZ2UiLCJmcmFtZU51bSIsInBvcnRhbEZyYW1lIiwiY3VycmVudEltYWdlTnVtIiwiTWF0aCIsImZsb29yIiwic3JjIiwiZHJhd0ltYWdlIiwiSW50ZXJhY3RhYmxlIiwiR2FtZSIsImdhbWUiLCJyZW5kZXJIb21lIiwibGV2ZWxUaW1lIiwicGF1c2VkIiwibWVudSIsIkdhbWVNZW51Iiwic2V0RGF0YSIsImJpbmQiLCJ0b2dnbGVQYXVzZSIsImNsZWFyUmVjdCIsImxldmVsRGF0YSIsIkxldmVsRGF0YSIsIlZFTE9DSVRZX1giLCJHUkFWSVRZIiwiZ3Jhdml0eSIsIlBsYXllciIsInZlbG9jaXR5IiwiaXNKdW1waW5nIiwiY2FuSnVtcCIsInBsYXllclN0YXJ0UG9zIiwiZmFjZVJpZ2h0IiwibW92aW5nIiwiY29sbGlkaW5nWCIsImNvbGxpZGluZ1kiLCJncm91bmRlZCIsImNvbGxpc2lvbnN1cmZhY2VZIiwianVtcFNvdW5kIiwiQXVkaW8iLCJ2b2x1bWUiLCJmb290c3RlcCIsInBsYXllclNwcml0ZSIsInBvcnRhbFNwcml0ZSIsImV4aXQiLCJmaW5pc2hQb3MiLCJpbnRlcmFjdGFibGVzIiwiaW1hZ2VzIiwiZm9yRWFjaCIsImludGVyYWN0YWJsZSIsInB1c2giLCJpbWdVcmwiLCJsZW5ndGgiLCJJbnRlcmFjdGFibGVJbWFnZSIsInlPZmZzZXQiLCJpbWdIZWlnaHQiLCJ3aW5kb3ciLCJldmVudCIsImtleSIsInBsYXkiLCJzZXRUaW1lb3V0IiwibmV3R2FtZSIsImltZyIsImdhbWVMb29wIiwiY2xlYXJJbnRlcnZhbCIsInNldE1lbnVEYXRhIiwib3BlbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCIsInBhdXNlR2FtZSIsImZpbGxTdHlsZSIsImdhbWVPdmVyIiwiaW1hZ2UiLCJkcmF3UGxheWVyIiwiY3VyckZyYW1lIiwiaXNDb2xsaWRpbmdYIiwiaXNDb2xsaWRpbmdZIiwibGV2ZWxDb21wbGV0ZSIsImZvbnQiLCJmaWxsVGV4dCIsInRvU3RyaW5nIiwibWFpbkNhbnZhcyIsIm1haW5DdHgiLCJ0eXBlIiwidW5wYXVzZSIsInJlbmRlckdhbWUiLCJzZXRHYW1lRGF0YSIsInNlbGVjdGVkIiwic3VibWl0dGVkIiwibWF4TnVtIiwiY2xvc2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZmlsbCIsImN1cnJlbnRXb3JsZCIsImhvbWUiLCJtdXNpYyIsIm11dGVkIiwiY2FudmFzUG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibW91c2VYIiwibGVmdCIsIm1vdXNlWSIsInRvcCIsImkiLCJpbmNyZW1lbnQiLCJ0b2dnbGVNdXRlIiwicGF1c2UiLCJjdXJyZW50VGltZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic291bmRCdXR0b24iLCJCVUZGRVJfWCIsIkJVRkZFUl9ZIiwieFBvcyIsInlQb3MiLCJ1cmwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUscUZBQXNCLEU7Ozs7Ozs7Ozs7OztBQ0FyQztBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUsMEZBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0ExQztBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLG9GQUFxQixFOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRD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QUFFLEdBSlg7QUFLSTRELFVBQU0sRUFBQztBQUxYLEdBZlcsRUFzQlg7QUFDSXRELEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0k0RCxVQUFNLEVBQUM7QUFMWCxHQXRCVyxDQUZuQjtBQWdDSU4sV0FBUyxFQUFFLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FoQ2Y7QUFpQ0luQixTQUFPLEVBQUUsQ0FBQztBQWpDZCxDQXZOSixDQUZxQixFQThQckI7QUFDQSxFQS9QcUIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1dvcmxkMURvb3IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJhdWRpby9mb290c3RlcC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaWRsZUZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImF1ZGlvL2p1bXBTb3VuZC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21haW5wYWdlX2JnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90YWJJY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImF1ZGlvL3dvcmxkMU11c2ljLm1wM1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3NjcmlwdHMvaG9tZXBhZ2UnXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWFpblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIGxldCBnYW1lRnJhbWUgPSAwO1xuXG5cbiAgICBuZXcgSG9tZVBhZ2UoY2FudmFzLCBjdHgpLnJlbmRlcigpO1xuXG4gICAgXG5cblxufSk7XG4iLCJpbXBvcnQgSW50ZXJhY3RhYmxlIGZyb20gXCIuL2ludGVyYWN0YWJsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4aXQgZXh0ZW5kcyBJbnRlcmFjdGFibGV7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGxldmVsTnVtLCB3b3JsZE51bSkge1xuICAgICAgICBzdXBlcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuXG5cbiAgICAgICAgdGhpcy5leGl0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoZnJhbWVOdW0pIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxOdW0gPT0gNSkge1xuICAgICAgICAgICAgbGV0IHBvcnRhbEZyYW1lID0gZnJhbWVOdW0gJSA4MDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW1hZ2VOdW0gPSBNYXRoLmZsb29yKHBvcnRhbEZyYW1lLzEwKSArIDE7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvUG9ydGFsRnJhbWUke2N1cnJlbnRJbWFnZU51bX0ucG5nYFxuXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhpdEltYWdlLnNyYyA9IGBkaXN0L2ltYWdlcy9Xb3JsZCR7dGhpcy53b3JsZE51bX1Eb29yLnBuZ2BcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmV4aXRJbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgcnVuUmlnaHRJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUxLnBuZydcbmltcG9ydCBydW5SaWdodEltYWdlMiBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTIucG5nJ1xuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMSBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMS5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMiBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMi5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMyBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmcnXG5cbmltcG9ydCBQb3J0YWxGcmFtZTEgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMS5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWUyIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTIucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lMyBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUzLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTQgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNC5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU1IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTUucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNiBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU2LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTcgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNy5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU4IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTgucG5nJ1xuXG5pbXBvcnQgV29ybGQxRG9vciBmcm9tICcuLi9hc3NldHMvV29ybGQxRG9vci5wbmcnXG5pbXBvcnQgV29ybGQxTXVzaWMgZnJvbSAnLi4vYXNzZXRzL3dvcmxkMU11c2ljLm1wMydcbmltcG9ydCBqdW1wU291bmQgZnJvbSAnLi4vYXNzZXRzL2p1bXBTb3VuZC5tcDMnXG5pbXBvcnQgZm9vdHN0ZXAgZnJvbSAnLi4vYXNzZXRzL2Zvb3RzdGVwLm1wMydcblxuaW1wb3J0IGxhcmdlUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL2xhcmdlUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IG1lZGl1bVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmcnXG5pbXBvcnQgc21hbGxQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgdGlueVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nJ1xuXG5pbXBvcnQgaWRsZUZyYW1lIGZyb20gJy4uL2Fzc2V0cy9pZGxlRnJhbWUucG5nJ1xuaW1wb3J0IGlkbGVGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZTIucG5nJ1xuaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tICcuL2ludGVyYWN0YWJsZSdcbmltcG9ydCBHYW1lTWVudSBmcm9tICcuL2dhbWVtZW51J1xuaW1wb3J0IEV4aXQgZnJvbSAnLi9leGl0J1xuXG5pbXBvcnQgeyBMZXZlbERhdGEgfSBmcm9tICcuL2xldmVsZGF0YSdcbmltcG9ydCBJbnRlcmFjdGFibGVJbWFnZSBmcm9tICcuL2ludGVyYWN0YWJsZUltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgd29ybGROdW0sIGxldmVsTnVtLCBnYW1lLCByZW5kZXJIb21lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucmVuZGVySG9tZSA9IHJlbmRlckhvbWU7XG5cbiAgICAgICAgdGhpcy5mcmFtZU51bSA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWxUaW1lID0gNjAwMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IEdhbWVNZW51KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgXCJmYWlsZWRcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUsIHRoaXMuc2V0RGF0YS5iaW5kKHRoaXMpLCB0aGlzLnRvZ2dsZVBhdXNlLmJpbmQodGhpcyksIHRoaXMucmVuZGVyLmJpbmQodGhpcyksIHRoaXMucmVuZGVySG9tZSk7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGxheWVyIG1vdmVtZW50IHNvdW5kc1xuICAgICAgICB0aGlzLmp1bXBTb3VuZCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9qdW1wU291bmQubXAzJylcbiAgICAgICAgdGhpcy5qdW1wU291bmQudm9sdW1lID0gMC42O1xuICAgICAgICB0aGlzLmZvb3RzdGVwID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2Zvb3RzdGVwLm1wMycpXG4gICAgICAgIHRoaXMuZm9vdHN0ZXAudm9sdW1lID0gMC42O1xuXG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMucG9ydGFsU3ByaXRlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDUwLDUwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaW1nVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVJbWFnZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS5pbWdVcmwsaW50ZXJhY3RhYmxlLngsaW50ZXJhY3RhYmxlLnkgLSBpbnRlcmFjdGFibGUueU9mZnNldCxpbnRlcmFjdGFibGUud2lkdGgsaW50ZXJhY3RhYmxlLmltZ0hlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IHRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IC10aGlzLlZFTE9DSVRZX1g7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5mYWNlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJyAmJiB0aGlzLlBsYXllci5ncm91bmRlZCAmJiAhdGhpcy5QbGF5ZXIuaXNKdW1waW5nICkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA2MClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ2QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2EnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHNldEdhbWUobmV3R2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXdHYW1lO1xuICAgIH1cblxuICAgIHNldERhdGEod29ybGROdW0sIGxldmVsTnVtLCBnYW1lKSB7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHRoaXMuZnJhbWVOdW0gPSAwO1xuICAgICAgICB0aGlzLmxldmVsVGltZSA9IDYwMDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gMDtcblxuICAgICAgICAvLyBzZXQgZXhpdCBsb2NhdGlvblxuICAgICAgICB0aGlzLmV4aXQgPSBuZXcgRXhpdCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1swXSx0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMV0sNTAsNTAsIHRoaXMubGV2ZWxOdW0sIHRoaXMud29ybGROdW0pO1xuXG4gICAgICAgIC8vIHNldCBpbnRlcmFjdGFibGVzIGZvciB0aGlzIHN0YWdlIGZyb20gc2VlZCBkYXRhXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsRGF0YS5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUueCwgaW50ZXJhY3RhYmxlLnksIGludGVyYWN0YWJsZS5oZWlnaHQsIGludGVyYWN0YWJsZS53aWR0aCkpO1xuICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pbWdVcmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgXG4gICAgdG9nZ2xlUGF1c2UoKXtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucGF1c2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1BsYXllcihpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihnYW1lTG9vcCkge1xuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cblxuICAgIGxldmVsQ29tcGxldGUoZ2FtZUxvb3ApIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJjb21wbGV0ZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cblxuICAgIHBhdXNlR2FtZShnYW1lTG9vcCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lbnUpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApXG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcInBhdXNlXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBnYW1lTG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VHYW1lKGdhbWVMb29wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiXG5cbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci55ID4gNTAwIHx8IHRoaXMubGV2ZWxUaW1lIDw9IDExMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoZ2FtZUxvb3ApXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIodGhpcy5mcmFtZU51bSk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VzXG4gICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGRyYXcgcGxheWVyXG4gICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG5cblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBmcmFtZSBpbWFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLm1vdmluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RzdGVwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5QbGF5ZXIuZnJhbWVOdW0gLyAxMClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZU51bSAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgb2JzdGFjbGUgY29sbGlzaW9uXG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgPSBpbnRlcmFjdGFibGUueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIGxldmVsIGZpbmlzaCBcbiAgICAgICAgICAgIGlmICh0aGlzLmV4aXQuaXNDb2xsaWRpbmdYKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5pc0NvbGxpZGluZ1kodGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbENvbXBsZXRlKGdhbWVMb29wKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgbW92ZW1lbnQgYmFzZSBvbiBwbGF5ZXIgY29sbGlzaW9uXG4gICAgICAgICAgICBpZiAoIXRoaXMuUGxheWVyLmNvbGxpZGluZ1gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuUGxheWVyLmNvbGxpZGluZ1kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSB0aGlzLkdSQVZJVFk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSB0aGlzLlBsYXllci52ZWxvY2l0eVsxXTsgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgPSB0aGlzLlBsYXllci5jb2xsaXNpb25zdXJmYWNlWSAtIDU5O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSB0aGlzLkdSQVZJVFk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSB0aGlzLlBsYXllci52ZWxvY2l0eVsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgICAgICAvL2xldmVsIGluZm8gXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19YCwgMzY0LCA1MCk7XG5cbiAgICAgICAgICAgIC8vIHRpbWVyXG4gICAgICAgICAgICB0aGlzLmxldmVsVGltZS0tO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoTWF0aC5mbG9vcih0aGlzLmxldmVsVGltZS8xMDApLnRvU3RyaW5nKCksIDcwMCwgNTApO1xuICAgIFxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aGlzLlBsYXllci5mcmFtZU51bSA9ICh0aGlzLlBsYXllci5mcmFtZU51bSArIDEpICUgNDBcbiAgICAgICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAodGhpcy5wb3J0YWxGcmFtZSArIDEpICUgODA7XG5cbiAgICAgICAgICAgIHRoaXMuZnJhbWVOdW0rKztcbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMClcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWVudSB7XG4gICAgY29uc3RydWN0b3IobWFpbkNhbnZhcywgbWFpbkN0eCwgdHlwZSwgd29ybGROdW0sIGxldmVsTnVtLCBnYW1lLCBzZXREYXRhLCB1bnBhdXNlLCByZW5kZXJHYW1lLCByZW5kZXJIb21lKXtcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzID0gbWFpbkNhbnZhcztcbiAgICAgICAgdGhpcy5tYWluQ3R4ID0gbWFpbkN0eDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWVudVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnNldEdhbWVEYXRhID0gc2V0RGF0YTtcbiAgICAgICAgdGhpcy51bnBhdXNlID0gdW5wYXVzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJHYW1lID0gcmVuZGVyR2FtZTtcbiAgICAgICAgdGhpcy5yZW5kZXJIb21lID0gcmVuZGVySG9tZTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gMTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICd3Jykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICE9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdzJykge1xuICAgICAgICAgICAgICAgIGxldCBtYXhOdW0gPSB0aGlzLnR5cGUgPT0gXCJwYXVzZVwiID8gMyA6IDI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gbWF4TnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIiAmJiB0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRNZW51RGF0YSh0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0pIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgY29uc3QgbWVudSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMubWFpbkNhbnZhcywgdGhpcy5tYWluQ3R4LCB0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxOdW0gPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSArIDEsIDEsIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSArIDEsIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtZW51KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0sIDEwKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gZHJhdyBtZW51IGJveFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDIwMCwxMDAsNDAwLDIwMCk7XG5cbiAgICAgICAgLy8gc2V0IG1lbnUgaGVhZGVyIGZvbnRcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICAvLyBkcmF3IG1lbnUgaGVhZGVyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMjU1LDAsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgRmFpbGVkXCIsIDI2MCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMjU1LDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxldmVsIENvbXBsZXRlIVwiLCAyMjQsIDE1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyMDAsODcsMjU1KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQYXVzZVwiLCAzNDQsIDE1MClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBtZW51IG9wdGlvbiBmb250XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICBcbiAgICAgICAgLy8gZHJhdyBtZW51IG9wdGlvbnMgYW5kIGFycm93c1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmV0cnlcIiwgMzYwLCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMjAsIDI1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMzAwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMjAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMwMCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MjAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUwMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTIwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI2MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjgwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJOZXh0IExldmVsXCIsIDMwMCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzEwLCAyNTApXG5cbiAgICAgICAgICAgIC8vIGRyYXcgc2VsZWN0ZWQgYXJyb3dzIGFyb3VuZCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI0MCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjYwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNDAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI3MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjUwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTMwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NTAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDMwMCw0MDAsNDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXN1bWVcIiwgMzQ0LCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3RhcnRcIiwgMzM0LCAyNTApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTQsIDMwMClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNzQsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI5NCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjc0LCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUzNCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTE0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjY0LCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODQsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2NCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NDQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUyNCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQ0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjM0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIzNCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTc0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEJHIGZyb20gJy4uL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmcnXG5pbXBvcnQgdGFiSWNvbiBmcm9tICcuLi9hc3NldHMvdGFiSWNvbi5wbmcnXG5cbmltcG9ydCBzb3VuZE9uIGZyb20gJy4uL2Fzc2V0cy9zb3VuZE9uLnBuZydcbmltcG9ydCBzb3VuZE9mZiBmcm9tICcuLi9hc3NldHMvc291bmRPZmYucG5nJ1xuXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSAxO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9ICBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDEsIDEsIHRoaXMuZ2FtZSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuaG9tZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygpO1xuICAgICAgICB0aGlzLm11c2ljLnNyYyA9ICdkaXN0L2F1ZGlvL3dvcmxkMU11c2ljLm1wMyc7XG4gICAgICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC42O1xuXG4gICAgICAgIHRoaXMubXV0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuICAgICAgICAgICAgICAgIGlmIChtb3VzZVggPiAxMDAgKyBpbmNyZW1lbnQgJiYgbW91c2VYIDwgMTY1ICsgaW5jcmVtZW50ICYmIG1vdXNlWSA+IDM0NSAmJiBtb3VzZVkgPCA0MTUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhvbWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zZXREYXRhKHRoaXMuY3VycmVudFdvcmxkLCBpICsgMSwgdGhpcy5nYW1lKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNzMwICYmIG1vdXNlWCA8IDc3MCAmJiBtb3VzZVkgPiAzMCAmJiBtb3VzZVkgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZU11dGUoKSB7XG4gICAgICAgIHRoaXMubXV0ZWQgPSAhdGhpcy5tdXRlZDtcblxuICAgICAgICBpZiAodGhpcy5tdXRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaG9tZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnKVwiXG4gICAgXG4gICAgICAgICAgICAvL3RpdGxlXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ090aGVyd29ybGRzJywgMjI1LCA5MClcbiAgICBcbiAgICAgICAgICAgIC8vbGV2ZWwgc2VsZWN0IC0gMTIwcHggYmV0d2VlbiBsZXZlbFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMTAwLDEwMCwxMDApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDAgKyBpbmNyZW1lbnQsMzQ1LDcwLDcwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI0MCwyNDAsMjQwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTA1ICsgaW5jcmVtZW50LDM1MCw2MCw2MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KChpICsgMSkudG9TdHJpbmcoKSwgMTIwICsgaW5jcmVtZW50LCAzOTcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzb3VuZEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBzb3VuZEJ1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZEJ1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc291bmRCdXR0b24sIDczMCwgMzAsIDQwLCAzMCk7XG5cbiAgICAgICAgfSwxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG59XG5cbiIsImNvbnN0IEJVRkZFUl9YID0gMTc7XG5jb25zdCBCVUZGRVJfWSA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1goeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeFBvcyArIEJVRkZFUl9YID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeVBvcyArIEJVRkZFUl9ZIC0gNiA+IHRoaXMueSAmJiB5UG9zIC0gQlVGRkVSX1kgKyA2IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1koeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeVBvcyArIEJVRkZFUl9ZID4gdGhpcy55ICYmIHlQb3MgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiB4UG9zICsgQlVGRkVSX1ggLSA2ID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCArIDYgPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZUltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgdXJsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuLy9vdXRlciBhcnJheSBpcyB3b3JsZHMsIGlubmVyIGFycmF5IGlzIGxldmVsRGF0YSBvYmplY3RzXG5leHBvcnQgY29uc3QgTGV2ZWxEYXRhID0gW1xuICAgIC8vIHdvcmxkIDFcbiAgICBbXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgMVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFsxMDAsNTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDJcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2ODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY2MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY2MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzIwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDU0XSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTozODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIHk6MzYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6MjYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjIwLFxuICAgICAgICAgICAgICAgICAgICB5OjE0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzcwMCw0MDBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDRcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwxMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzUwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA1XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMTAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH1cblxuICAgIF0sXG4gICAgLy8gd29ybGQgMlxuICAgIFtcblxuICAgIF1cbl0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9