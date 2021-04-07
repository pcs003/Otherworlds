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
    this.jumpSound.volume = 0.8;
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
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
    this.game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this));
    this.home = null;
    this.music = new Audio();
    this.music.src = 'dist/audio/world1Music.mp3';
    this.music.volume = 0.6;
    this.firstClick = true;
    this.canvas.addEventListener('mousedown', function (event) {
      if (_this.firstClick) {
        _this.music.play();

        _this.firstClick = false;
      }

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
    });
  }

  _createClass(HomePage, [{
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
  playerStartPos: [100, 100],
  interactables: [{
    x: 80,
    y: 360,
    height: 5,
    width: 160,
    imgUrl: 'dist/images/smallPlatform.png',
    yOffset: 18,
    imgHeight: 20
  }, {
    x: 400,
    y: 360,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 680,
    y: 360,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 660,
    y: 240,
    height: 5,
    width: 50,
    imgUrl: 'dist/images/tinyPlatform.png',
    yOffset: 14,
    imgHeight: 16
  }, {
    x: 200,
    y: 100,
    height: 5,
    width: 100,
    imgUrl: '',
    yOffset: 18,
    imgHeight: 20
  }],
  finishPos: [50, 50],
  gravity: -0.1
}, // world 1 level 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9vdHN0ZXAubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2lkbGVGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanVtcFNvdW5kLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xhcmdlUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbWFpbnBhZ2VfYmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbWVkaXVtUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuUmlnaHRGcmFtZTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQxTXVzaWMubXAzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW50ZXJhY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xldmVsZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lRnJhbWUiLCJIb21lUGFnZSIsInJlbmRlciIsIkV4aXQiLCJ4IiwieSIsImxldmVsTnVtIiwid29ybGROdW0iLCJleGl0SW1hZ2UiLCJJbWFnZSIsImZyYW1lTnVtIiwicG9ydGFsRnJhbWUiLCJjdXJyZW50SW1hZ2VOdW0iLCJNYXRoIiwiZmxvb3IiLCJzcmMiLCJkcmF3SW1hZ2UiLCJJbnRlcmFjdGFibGUiLCJHYW1lIiwiZ2FtZSIsInJlbmRlckhvbWUiLCJsZXZlbFRpbWUiLCJwYXVzZWQiLCJtZW51IiwiR2FtZU1lbnUiLCJzZXREYXRhIiwiYmluZCIsInRvZ2dsZVBhdXNlIiwiY2xlYXJSZWN0IiwibGV2ZWxEYXRhIiwiTGV2ZWxEYXRhIiwiVkVMT0NJVFlfWCIsIkdSQVZJVFkiLCJncmF2aXR5IiwiUGxheWVyIiwidmVsb2NpdHkiLCJpc0p1bXBpbmciLCJjYW5KdW1wIiwicGxheWVyU3RhcnRQb3MiLCJmYWNlUmlnaHQiLCJtb3ZpbmciLCJjb2xsaWRpbmdYIiwiY29sbGlkaW5nWSIsImdyb3VuZGVkIiwiY29sbGlzaW9uc3VyZmFjZVkiLCJqdW1wU291bmQiLCJBdWRpbyIsInZvbHVtZSIsImZvb3RzdGVwIiwicGxheWVyU3ByaXRlIiwicG9ydGFsU3ByaXRlIiwiZXhpdCIsImZpbmlzaFBvcyIsImludGVyYWN0YWJsZXMiLCJpbWFnZXMiLCJmb3JFYWNoIiwiaW50ZXJhY3RhYmxlIiwicHVzaCIsImltZ1VybCIsImxlbmd0aCIsIkludGVyYWN0YWJsZUltYWdlIiwieU9mZnNldCIsImltZ0hlaWdodCIsIndpbmRvdyIsImV2ZW50Iiwia2V5IiwicGxheSIsInNldFRpbWVvdXQiLCJuZXdHYW1lIiwiaW1nIiwiZ2FtZUxvb3AiLCJjbGVhckludGVydmFsIiwic2V0TWVudURhdGEiLCJvcGVuIiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwicGF1c2VHYW1lIiwiZmlsbFN0eWxlIiwiZ2FtZU92ZXIiLCJpbWFnZSIsImRyYXdQbGF5ZXIiLCJjdXJyRnJhbWUiLCJpc0NvbGxpZGluZ1giLCJpc0NvbGxpZGluZ1kiLCJsZXZlbENvbXBsZXRlIiwiZm9udCIsImZpbGxUZXh0IiwidG9TdHJpbmciLCJtYWluQ2FudmFzIiwibWFpbkN0eCIsInR5cGUiLCJ1bnBhdXNlIiwicmVuZGVyR2FtZSIsInNldEdhbWVEYXRhIiwic2VsZWN0ZWQiLCJzdWJtaXR0ZWQiLCJtYXhOdW0iLCJjbG9zZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsIiwiY3VycmVudFdvcmxkIiwiaG9tZSIsIm11c2ljIiwiZmlyc3RDbGljayIsImNhbnZhc1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1vdXNlWCIsImxlZnQiLCJtb3VzZVkiLCJ0b3AiLCJpIiwiaW5jcmVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCVUZGRVJfWCIsIkJVRkZFUl9ZIiwieFBvcyIsInlQb3MiLCJ1cmwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FB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STRELFVBQU0sRUFBQztBQUxYLEdBRFcsRUFRWDtBQUNJdEQsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSTRELFVBQU0sRUFBQztBQUxYLEdBUlcsRUFlWDtBQUNJdEQsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSTRELFVBQU0sRUFBQztBQUxYLEdBZlcsRUFzQlg7QUFDSXRELEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0k0RCxVQUFNLEVBQUM7QUFMWCxHQXRCVyxDQUZuQjtBQWdDSU4sV0FBUyxFQUFFLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FoQ2Y7QUFpQ0luQixTQUFPLEVBQUUsQ0FBQztBQWpDZCxDQTNLSixDQUZxQixFQWtOckI7QUFDQSxFQW5OcUIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1dvcmxkMURvb3IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJhdWRpby9mb290c3RlcC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaWRsZUZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImF1ZGlvL2p1bXBTb3VuZC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21haW5wYWdlX2JnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvdGlueVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXVkaW8vd29ybGQxTXVzaWMubXAzXCI7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vc2NyaXB0cy9ob21lcGFnZSdcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1tYWluXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY2FudmFzLndpZHRoID0gODAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gICAgbGV0IGdhbWVGcmFtZSA9IDA7XG5cblxuICAgIG5ldyBIb21lUGFnZShjYW52YXMsIGN0eCkucmVuZGVyKCk7XG5cbiAgICBcblxuXG59KTtcbiIsImltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSBcIi4vaW50ZXJhY3RhYmxlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhpdCBleHRlbmRzIEludGVyYWN0YWJsZXtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgbGV2ZWxOdW0sIHdvcmxkTnVtKSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG5cblxuICAgICAgICB0aGlzLmV4aXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcihmcmFtZU51bSkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICBsZXQgcG9ydGFsRnJhbWUgPSBmcmFtZU51bSAlIDgwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbWFnZU51bSA9IE1hdGguZmxvb3IocG9ydGFsRnJhbWUvMTApICsgMTtcbiAgICAgICAgICAgIHRoaXMuZXhpdEltYWdlLnNyYyA9IGBkaXN0L2ltYWdlcy9Qb3J0YWxGcmFtZSR7Y3VycmVudEltYWdlTnVtfS5wbmdgXG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmV4aXRJbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leGl0SW1hZ2Uuc3JjID0gYGRpc3QvaW1hZ2VzL1dvcmxkJHt0aGlzLndvcmxkTnVtfURvb3IucG5nYFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZXhpdEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBydW5SaWdodEltYWdlMSBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUzLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUyLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUzLnBuZydcblxuaW1wb3J0IFBvcnRhbEZyYW1lMSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUxLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWUzIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTMucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU0LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTUgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNS5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU2IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTYucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNyBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU3LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTggZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lOC5wbmcnXG5cbmltcG9ydCBXb3JsZDFEb29yIGZyb20gJy4uL2Fzc2V0cy9Xb3JsZDFEb29yLnBuZydcbmltcG9ydCBXb3JsZDFNdXNpYyBmcm9tICcuLi9hc3NldHMvd29ybGQxTXVzaWMubXAzJ1xuaW1wb3J0IGp1bXBTb3VuZCBmcm9tICcuLi9hc3NldHMvanVtcFNvdW5kLm1wMydcbmltcG9ydCBmb290c3RlcCBmcm9tICcuLi9hc3NldHMvZm9vdHN0ZXAubXAzJ1xuXG5pbXBvcnQgbGFyZ2VQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgbWVkaXVtUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL21lZGl1bVBsYXRmb3JtLnBuZydcbmltcG9ydCBzbWFsbFBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZydcbmltcG9ydCB0aW55UGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3RpbnlQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCBpZGxlRnJhbWUgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZS5wbmcnXG5pbXBvcnQgaWRsZUZyYW1lMiBmcm9tICcuLi9hc3NldHMvaWRsZUZyYW1lMi5wbmcnXG5pbXBvcnQgSW50ZXJhY3RhYmxlIGZyb20gJy4vaW50ZXJhY3RhYmxlJ1xuaW1wb3J0IEdhbWVNZW51IGZyb20gJy4vZ2FtZW1lbnUnXG5pbXBvcnQgRXhpdCBmcm9tICcuL2V4aXQnXG5cbmltcG9ydCB7IExldmVsRGF0YSB9IGZyb20gJy4vbGV2ZWxkYXRhJ1xuaW1wb3J0IEludGVyYWN0YWJsZUltYWdlIGZyb20gJy4vaW50ZXJhY3RhYmxlSW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHJlbmRlckhvbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5yZW5kZXJIb21lID0gcmVuZGVySG9tZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgR2FtZU1lbnUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSwgdGhpcy5zZXREYXRhLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXJIb21lKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbGF5ZXIgbW92ZW1lbnQgc291bmRzXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2p1bXBTb3VuZC5tcDMnKVxuICAgICAgICB0aGlzLmp1bXBTb3VuZC52b2x1bWUgPSAwLjg7XG4gICAgICAgIHRoaXMuZm9vdHN0ZXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vZm9vdHN0ZXAubXAzJylcbiAgICAgICAgdGhpcy5mb290c3RlcC52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5wb3J0YWxTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAvLyBzZXQgZXhpdCBsb2NhdGlvblxuICAgICAgICB0aGlzLmV4aXQgPSBuZXcgRXhpdCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1swXSx0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMV0sNTAsNTAsIHRoaXMubGV2ZWxOdW0sIHRoaXMud29ybGROdW0pO1xuXG4gICAgICAgIC8vIHNldCBpbnRlcmFjdGFibGVzIGZvciB0aGlzIHN0YWdlIGZyb20gc2VlZCBkYXRhXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsRGF0YS5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUueCwgaW50ZXJhY3RhYmxlLnksIGludGVyYWN0YWJsZS5oZWlnaHQsIGludGVyYWN0YWJsZS53aWR0aCkpO1xuICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pbWdVcmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gdGhpcy5WRUxPQ0lUWV9YO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZmFjZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gLXRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJyAnICYmIHRoaXMuUGxheWVyLmdyb3VuZGVkICYmICF0aGlzLlBsYXllci5pc0p1bXBpbmcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wU291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5pc0p1bXBpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIDYwKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5pc0p1bXBpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgc2V0R2FtZShuZXdHYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ld0dhbWU7XG4gICAgfVxuXG4gICAgc2V0RGF0YSh3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUpIHtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5mcmFtZU51bSA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWxUaW1lID0gNjAwMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gZ2V0IHNlZWQgZGF0YSBmb3IgY3VycmVudCBsZXZlbFxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IExldmVsRGF0YVt0aGlzLndvcmxkTnVtIC0gMV1bdGhpcy5sZXZlbE51bSAtIDFdXG5cbiAgICAgICAgdGhpcy5WRUxPQ0lUWV9YID0gMztcbiAgICAgICAgdGhpcy5HUkFWSVRZID0gdGhpcy5sZXZlbERhdGEuZ3Jhdml0eTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuUGxheWVyID0ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IFswLDBdLFxuICAgICAgICAgICAgaXNKdW1waW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkp1bXA6IGZhbHNlLFxuICAgICAgICAgICAgeDogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMF0sXG4gICAgICAgICAgICB5OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1sxXSxcbiAgICAgICAgICAgIHdpZHRoOiAzNCxcbiAgICAgICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgICAgICBmcmFtZU51bTogMCxcbiAgICAgICAgICAgIGZhY2VSaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIG1vdmluZzogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdYOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1k6IGZhbHNlLFxuICAgICAgICAgICAgZ3JvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlzaW9uc3VyZmFjZVk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAwO1xuXG4gICAgICAgIC8vIHNldCBleGl0IGxvY2F0aW9uXG4gICAgICAgIHRoaXMuZXhpdCA9IG5ldyBFeGl0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzBdLHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1sxXSw1MCw1MCwgdGhpcy5sZXZlbE51bSwgdGhpcy53b3JsZE51bSk7XG5cbiAgICAgICAgLy8gc2V0IGludGVyYWN0YWJsZXMgZm9yIHRoaXMgc3RhZ2UgZnJvbSBzZWVkIGRhdGFcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IEludGVyYWN0YWJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoKSk7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlSW1hZ2UodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUuaW1nVXJsLGludGVyYWN0YWJsZS54LGludGVyYWN0YWJsZS55IC0gaW50ZXJhY3RhYmxlLnlPZmZzZXQsaW50ZXJhY3RhYmxlLndpZHRoLGludGVyYWN0YWJsZS5pbWdIZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBcbiAgICB0b2dnbGVQYXVzZSgpe1xuICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcblxuICAgICAgICBpZiAodGhpcy5wYXVzZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIGdhbWVPdmVyKGdhbWVMb29wKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiZmFpbGVkXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgfVxuXG4gICAgbGV2ZWxDb21wbGV0ZShnYW1lTG9vcCkge1xuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImNvbXBsZXRlXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgfVxuXG4gICAgcGF1c2VHYW1lKGdhbWVMb29wKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVudSlcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcClcbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwicGF1c2VcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IGdhbWVMb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUdhbWUoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcblxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLnkgPiA1MDAgfHwgdGhpcy5sZXZlbFRpbWUgPD0gMTEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcihnYW1lTG9vcClcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIGRyYXcgZXhpdFxuICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcih0aGlzLmZyYW1lTnVtKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLnJlbmRlcigpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gZHJhdyBwbGF5ZXJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BsYXllcih0aGlzLnBsYXllclNwcml0ZSwgdGhpcy5QbGF5ZXIueCwgdGhpcy5QbGF5ZXIueSwgdGhpcy5QbGF5ZXIud2lkdGgsIHRoaXMuUGxheWVyLmhlaWdodClcblxuXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIGZyYW1lIGltYWdlXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIubW92aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdHN0ZXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyckZyYW1lID0gTWF0aC5mbG9vcih0aGlzLlBsYXllci5mcmFtZU51bSAvIDEwKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZmFjZVJpZ2h0KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyckZyYW1lID09IDAgfHwgY3VyckZyYW1lID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lTnVtICUgNDAgPiAyMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcblxuICAgIFxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBvYnN0YWNsZSBjb2xsaXNpb25cbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1kgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS5yZW5kZXIoKTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWCh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaXNDb2xsaWRpbmdZKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdZID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaXNpb25zdXJmYWNlWSA9IGludGVyYWN0YWJsZS55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgbGV2ZWwgZmluaXNoIFxuICAgICAgICAgICAgaWYgKHRoaXMuZXhpdC5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsQ29tcGxldGUoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBtb3ZlbWVudCBiYXNlIG9uIHBsYXllciBjb2xsaXNpb25cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdOyAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSA9IHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZIC0gNTk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgICAgIC8vbGV2ZWwgaW5mbyBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX1gLCAzNjQsIDUwKTtcblxuICAgICAgICAgICAgLy8gdGltZXJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUaW1lLS07XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChNYXRoLmZsb29yKHRoaXMubGV2ZWxUaW1lLzEwMCkudG9TdHJpbmcoKSwgNzAwLCA1MCk7XG4gICAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmZyYW1lTnVtID0gKHRoaXMuUGxheWVyLmZyYW1lTnVtICsgMSkgJSA0MFxuICAgICAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9ICh0aGlzLnBvcnRhbEZyYW1lICsgMSkgJSA4MDtcblxuICAgICAgICAgICAgdGhpcy5mcmFtZU51bSsrO1xuICAgICAgICAgICAgXG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxufSIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluQ2FudmFzLCBtYWluQ3R4LCB0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHNldERhdGEsIHVucGF1c2UsIHJlbmRlckdhbWUsIHJlbmRlckhvbWUpe1xuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSBtYWluQ2FudmFzO1xuICAgICAgICB0aGlzLm1haW5DdHggPSBtYWluQ3R4O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1tZW51XCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuc2V0R2FtZURhdGEgPSBzZXREYXRhO1xuICAgICAgICB0aGlzLnVucGF1c2UgPSB1bnBhdXNlO1xuICAgICAgICB0aGlzLnJlbmRlckdhbWUgPSByZW5kZXJHYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAxO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ3cnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1heE51bSA9IHRoaXMudHlwZSA9PSBcInBhdXNlXCIgPyAzIDogMjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSBtYXhOdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIkVzY2FwZVwiICYmIHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldE1lbnVEYXRhKHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zdCBtZW51ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5tYWluQ2FudmFzLCB0aGlzLm1haW5DdHgsIHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtICsgMSwgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtICsgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1lbnUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDEwMCw0MDAsMjAwKTtcblxuICAgICAgICAvLyBzZXQgbWVudSBoZWFkZXIgZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIC8vIGRyYXcgbWVudSBoZWFkZXJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBGYWlsZWRcIiwgMjYwLCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgQ29tcGxldGUhXCIsIDIyNCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCw4NywyNTUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlXCIsIDM0NCwgMTUwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IG1lbnUgb3B0aW9uIGZvbnRcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgIFxuICAgICAgICAvLyBkcmF3IG1lbnUgb3B0aW9ucyBhbmQgYXJyb3dzXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXRyeVwiLCAzNjAsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMyMCwgMjUwKVxuXG4gICAgICAgICAgICAvLyBkcmF3IHNlbGVjdGVkIGFycm93cyBhcm91bmQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygzMDAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMyMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzAwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUyMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTAwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MjAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk5leHQgTGV2ZWxcIiwgMzAwLCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTAsIDI1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjcwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTUwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMzAwLDQwMCw0MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3VtZVwiLCAzNDQsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmVzdGFydFwiLCAzMzQsIDI1MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMxNCwgMzAwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI3NCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjk0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTM0LCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MTQsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUzNCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4NCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjY0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU0NCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTI0LCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDQsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyMzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjM0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU3NCwgMzAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTU0LCAyOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NzQsIDI4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgQkcgZnJvbSAnLi4vYXNzZXRzL21haW5wYWdlX2JnLnBuZydcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IDE7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gIG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMSwgMSwgdGhpcy5nYW1lLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ob21lID0gbnVsbDtcblxuICAgICAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIHRoaXMubXVzaWMuc3JjID0gJ2Rpc3QvYXVkaW8vd29ybGQxTXVzaWMubXAzJztcbiAgICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSAwLjY7XG4gICAgICAgIHRoaXMuZmlyc3RDbGljayA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0Q2xpY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDEwMCArIGluY3JlbWVudCAmJiBtb3VzZVggPCAxNjUgKyBpbmNyZW1lbnQgJiYgbW91c2VZID4gMzQ1ICYmIG1vdXNlWSA8IDQxNSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaG9tZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNldERhdGEodGhpcy5jdXJyZW50V29ybGQsIGkgKyAxLCB0aGlzLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmhvbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnZGlzdC9pbWFnZXMvbWFpbnBhZ2VfYmcucG5nJylcIlxuICAgIFxuICAgICAgICAgICAgLy90aXRsZVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzJweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdPdGhlcndvcmxkcycsIDIyNSwgOTApXG4gICAgXG4gICAgICAgICAgICAvL2xldmVsIHNlbGVjdCAtIDEyMHB4IGJldHdlZW4gbGV2ZWxcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDEwMCwxMDAsMTAwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAwICsgaW5jcmVtZW50LDM0NSw3MCw3MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNDAsMjQwLDI0MClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwNSArIGluY3JlbWVudCwzNTAsNjAsNjApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgoaSArIDEpLnRvU3RyaW5nKCksIDEyMCArIGluY3JlbWVudCwgMzk3KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sMTApXG4gICAgICAgIFxuICAgIH1cblxuICAgIFxufVxuXG4iLCJjb25zdCBCVUZGRVJfWCA9IDE3O1xuY29uc3QgQlVGRkVSX1kgPSAzMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmdYKHhQb3MsIHlQb3MpIHtcbiAgICAgICAgaWYgKHhQb3MgKyBCVUZGRVJfWCA+IHRoaXMueCAmJiB4UG9zIC0gQlVGRkVSX1ggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHlQb3MgKyBCVUZGRVJfWSAtIDYgPiB0aGlzLnkgJiYgeVBvcyAtIEJVRkZFUl9ZICsgNiA8IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmdZKHhQb3MsIHlQb3MpIHtcbiAgICAgICAgaWYgKHlQb3MgKyBCVUZGRVJfWSA+IHRoaXMueSAmJiB5UG9zIDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgeFBvcyArIEJVRkZFUl9YIC0gNiA+IHRoaXMueCAmJiB4UG9zIC0gQlVGRkVSX1ggKyA2IDwgdGhpcy54ICsgdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGVJbWFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHVybCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cbn0iLCJcbi8vb3V0ZXIgYXJyYXkgaXMgd29ybGRzLCBpbm5lciBhcnJheSBpcyBsZXZlbERhdGEgb2JqZWN0c1xuZXhwb3J0IGNvbnN0IExldmVsRGF0YSA9IFtcbiAgICAvLyB3b3JsZCAxXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMTAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNTAsNTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDNcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwxMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzUwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMTAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgNVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDEwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNTAsNTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9XG5cbiAgICBdLFxuICAgIC8vIHdvcmxkIDJcbiAgICBbXG5cbiAgICBdXG5dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==