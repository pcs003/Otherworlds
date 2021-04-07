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

/***/ "./src/assets/wordl1Music.mp3":
/*!************************************!*\
  !*** ./src/assets/wordl1Music.mp3 ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("audio/wordl1Music.mp3");

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
/* harmony import */ var _assets_wordl1Music_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/wordl1Music.mp3 */ "./src/assets/wordl1Music.mp3");
/* harmony import */ var _assets_largePlatform_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/largePlatform.png */ "./src/assets/largePlatform.png");
/* harmony import */ var _assets_mediumPlatform_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/mediumPlatform.png */ "./src/assets/mediumPlatform.png");
/* harmony import */ var _assets_smallPlatform_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/smallPlatform.png */ "./src/assets/smallPlatform.png");
/* harmony import */ var _assets_tinyPlatform_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/tinyPlatform.png */ "./src/assets/tinyPlatform.png");
/* harmony import */ var _assets_idleFrame_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/idleFrame.png */ "./src/assets/idleFrame.png");
/* harmony import */ var _assets_idleFrame2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/idleFrame2.png */ "./src/assets/idleFrame2.png");
/* harmony import */ var _interactable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./interactable */ "./src/scripts/interactable.js");
/* harmony import */ var _gamemenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./gamemenu */ "./src/scripts/gamemenu.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./exit */ "./src/scripts/exit.js");
/* harmony import */ var _leveldata__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./leveldata */ "./src/scripts/leveldata.js");
/* harmony import */ var _interactableImage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./interactableImage */ "./src/scripts/interactableImage.js");
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
    this.music = new Audio('dist/audio/world1Music.mp3');
    this.frameNum = 0;
    this.levelTime = 6000;
    this.paused = false;
    this.menu = new _gamemenu__WEBPACK_IMPORTED_MODULE_23__["default"](this.canvas, this.ctx, "failed", this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // get seed data for current level

    this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_25__["LevelData"][this.worldNum - 1][this.levelNum - 1];
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
    this.playerSprite = new Image();
    this.portalFrame = 0;
    this.portalSprite = new Image(); // set exit location

    this.exit = new _exit__WEBPACK_IMPORTED_MODULE_24__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 50, 50, this.levelNum, this.worldNum); // set interactables for this stage from seed data

    this.interactables = [];
    this.images = [];
    this.levelData.interactables.forEach(function (interactable) {
      _this.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_22__["default"](_this.canvas, _this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

      if (interactable.imgUrl.length > 0) {
        _this.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_26__["default"](_this.canvas, _this.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
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

      this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_25__["LevelData"][this.worldNum - 1][this.levelNum - 1];
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

      this.exit = new _exit__WEBPACK_IMPORTED_MODULE_24__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 50, 50, this.levelNum, this.worldNum); // set interactables for this stage from seed data

      this.interactables = [];
      this.images = [];
      this.levelData.interactables.forEach(function (interactable) {
        _this2.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_22__["default"](_this2.canvas, _this2.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

        if (interactable.imgUrl.length > 0) {
          _this2.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_26__["default"](_this2.canvas, _this2.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2lkbGVGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RpbnlQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JkbDFNdXNpYy5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2V4aXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbnRlcmFjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW50ZXJhY3RhYmxlSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGV2ZWxkYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWVGcmFtZSIsIkhvbWVQYWdlIiwicmVuZGVyIiwiRXhpdCIsIngiLCJ5IiwibGV2ZWxOdW0iLCJ3b3JsZE51bSIsImV4aXRJbWFnZSIsIkltYWdlIiwiZnJhbWVOdW0iLCJwb3J0YWxGcmFtZSIsImN1cnJlbnRJbWFnZU51bSIsIk1hdGgiLCJmbG9vciIsInNyYyIsImRyYXdJbWFnZSIsIkludGVyYWN0YWJsZSIsIkdhbWUiLCJnYW1lIiwicmVuZGVySG9tZSIsIm11c2ljIiwiQXVkaW8iLCJsZXZlbFRpbWUiLCJwYXVzZWQiLCJtZW51IiwiR2FtZU1lbnUiLCJzZXREYXRhIiwiYmluZCIsInRvZ2dsZVBhdXNlIiwiY2xlYXJSZWN0IiwibGV2ZWxEYXRhIiwiTGV2ZWxEYXRhIiwiVkVMT0NJVFlfWCIsIkdSQVZJVFkiLCJncmF2aXR5IiwiUGxheWVyIiwidmVsb2NpdHkiLCJpc0p1bXBpbmciLCJjYW5KdW1wIiwicGxheWVyU3RhcnRQb3MiLCJmYWNlUmlnaHQiLCJtb3ZpbmciLCJjb2xsaWRpbmdYIiwiY29sbGlkaW5nWSIsImdyb3VuZGVkIiwiY29sbGlzaW9uc3VyZmFjZVkiLCJwbGF5ZXJTcHJpdGUiLCJwb3J0YWxTcHJpdGUiLCJleGl0IiwiZmluaXNoUG9zIiwiaW50ZXJhY3RhYmxlcyIsImltYWdlcyIsImZvckVhY2giLCJpbnRlcmFjdGFibGUiLCJwdXNoIiwiaW1nVXJsIiwibGVuZ3RoIiwiSW50ZXJhY3RhYmxlSW1hZ2UiLCJ5T2Zmc2V0IiwiaW1nSGVpZ2h0Iiwid2luZG93IiwiZXZlbnQiLCJrZXkiLCJzZXRUaW1lb3V0IiwibmV3R2FtZSIsImltZyIsImdhbWVMb29wIiwiY2xlYXJJbnRlcnZhbCIsInNldE1lbnVEYXRhIiwib3BlbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCIsInBhdXNlR2FtZSIsImZpbGxTdHlsZSIsImdhbWVPdmVyIiwiaW1hZ2UiLCJkcmF3UGxheWVyIiwiY3VyckZyYW1lIiwiaXNDb2xsaWRpbmdYIiwiaXNDb2xsaWRpbmdZIiwibGV2ZWxDb21wbGV0ZSIsImZvbnQiLCJmaWxsVGV4dCIsInRvU3RyaW5nIiwibWFpbkNhbnZhcyIsIm1haW5DdHgiLCJ0eXBlIiwidW5wYXVzZSIsInJlbmRlckdhbWUiLCJzZXRHYW1lRGF0YSIsInNlbGVjdGVkIiwic3VibWl0dGVkIiwibWF4TnVtIiwiY2xvc2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZmlsbCIsImN1cnJlbnRXb3JsZCIsImhvbWUiLCJjYW52YXNQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtb3VzZVgiLCJsZWZ0IiwibW91c2VZIiwidG9wIiwiaSIsImluY3JlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiQlVGRkVSX1giLCJCVUZGRVJfWSIsInhQb3MiLCJ5UG9zIiwidXJsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSxzRkFB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QyxFQUFELEVBQUksRUFBSixDQWhDZjtBQWlDSWYsU0FBTyxFQUFFLENBQUM7QUFqQ2QsQ0F2SUosRUEwS0k7QUFDQTtBQUNJSyxnQkFBYyxFQUFDLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FEbkI7QUFFSVcsZUFBYSxFQUFFLENBQ1g7QUFDSS9DLEtBQUMsRUFBRSxFQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0kwRCxVQUFNLEVBQUM7QUFMWCxHQURXLEVBUVg7QUFDSXBELEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0kwRCxVQUFNLEVBQUM7QUFMWCxHQVJXLEVBZVg7QUFDSXBELEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0kwRCxVQUFNLEVBQUM7QUFMWCxHQWZXLEVBc0JYO0FBQ0lwRCxLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsR0FKWDtBQUtJMEQsVUFBTSxFQUFDO0FBTFgsR0F0QlcsQ0FGbkI7QUFnQ0lOLFdBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBaENmO0FBaUNJZixTQUFPLEVBQUUsQ0FBQztBQWpDZCxDQTNLSixDQUZxQixFQWtOckI7QUFDQSxFQW5OcUIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1dvcmxkMURvb3IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaWRsZUZyYW1lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9tYWlucGFnZV9iZy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5SaWdodEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5SaWdodEZyYW1lMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImF1ZGlvL3dvcmRsMU11c2ljLm1wM1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3NjcmlwdHMvaG9tZXBhZ2UnXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWFpblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIGxldCBnYW1lRnJhbWUgPSAwO1xuXG4gICAgbmV3IEhvbWVQYWdlKGNhbnZhcywgY3R4KS5yZW5kZXIoKTtcblxuICAgIFxuXG5cbn0pO1xuIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGl0IGV4dGVuZHMgSW50ZXJhY3RhYmxle1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoLCBsZXZlbE51bSwgd29ybGROdW0pIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcblxuXG4gICAgICAgIHRoaXMuZXhpdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGZyYW1lTnVtKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgIGxldCBwb3J0YWxGcmFtZSA9IGZyYW1lTnVtICUgODA7XG4gICAgICAgICAgICBsZXQgY3VycmVudEltYWdlTnVtID0gTWF0aC5mbG9vcihwb3J0YWxGcmFtZS8xMCkgKyAxO1xuICAgICAgICAgICAgdGhpcy5leGl0SW1hZ2Uuc3JjID0gYGRpc3QvaW1hZ2VzL1BvcnRhbEZyYW1lJHtjdXJyZW50SW1hZ2VOdW19LnBuZ2BcblxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZXhpdEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvV29ybGQke3RoaXMud29ybGROdW19RG9vci5wbmdgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHJ1blJpZ2h0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUyLnBuZydcbmltcG9ydCBydW5SaWdodEltYWdlMyBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTMucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTMucG5nJ1xuXG5pbXBvcnQgUG9ydGFsRnJhbWUxIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lMiBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTMgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU0IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTYgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU3IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lOCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZydcblxuaW1wb3J0IFdvcmxkMURvb3IgZnJvbSAnLi4vYXNzZXRzL1dvcmxkMURvb3IucG5nJ1xuaW1wb3J0IFdvcmxkMU11c2ljIGZyb20gJy4uL2Fzc2V0cy93b3JkbDFNdXNpYy5tcDMnXG5cbmltcG9ydCBsYXJnZVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9sYXJnZVBsYXRmb3JtLnBuZydcbmltcG9ydCBtZWRpdW1QbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbWVkaXVtUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHNtYWxsUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3NtYWxsUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHRpbnlQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvdGlueVBsYXRmb3JtLnBuZydcblxuaW1wb3J0IGlkbGVGcmFtZSBmcm9tICcuLi9hc3NldHMvaWRsZUZyYW1lLnBuZydcbmltcG9ydCBpZGxlRnJhbWUyIGZyb20gJy4uL2Fzc2V0cy9pZGxlRnJhbWUyLnBuZydcbmltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSAnLi9pbnRlcmFjdGFibGUnXG5pbXBvcnQgR2FtZU1lbnUgZnJvbSAnLi9nYW1lbWVudSdcbmltcG9ydCBFeGl0IGZyb20gJy4vZXhpdCdcblxuaW1wb3J0IHsgTGV2ZWxEYXRhIH0gZnJvbSAnLi9sZXZlbGRhdGEnXG5pbXBvcnQgSW50ZXJhY3RhYmxlSW1hZ2UgZnJvbSAnLi9pbnRlcmFjdGFibGVJbWFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSwgcmVuZGVySG9tZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuXG4gICAgICAgIHRoaXMubXVzaWMgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vd29ybGQxTXVzaWMubXAzJyk7XG5cbiAgICAgICAgdGhpcy5mcmFtZU51bSA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWxUaW1lID0gNjAwMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IEdhbWVNZW51KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgXCJmYWlsZWRcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUsIHRoaXMuc2V0RGF0YS5iaW5kKHRoaXMpLCB0aGlzLnRvZ2dsZVBhdXNlLmJpbmQodGhpcyksIHRoaXMucmVuZGVyLmJpbmQodGhpcyksIHRoaXMucmVuZGVySG9tZSk7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5wb3J0YWxTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAvLyBzZXQgZXhpdCBsb2NhdGlvblxuICAgICAgICB0aGlzLmV4aXQgPSBuZXcgRXhpdCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1swXSx0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMV0sNTAsNTAsIHRoaXMubGV2ZWxOdW0sIHRoaXMud29ybGROdW0pO1xuXG4gICAgICAgIC8vIHNldCBpbnRlcmFjdGFibGVzIGZvciB0aGlzIHN0YWdlIGZyb20gc2VlZCBkYXRhXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsRGF0YS5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUueCwgaW50ZXJhY3RhYmxlLnksIGludGVyYWN0YWJsZS5oZWlnaHQsIGludGVyYWN0YWJsZS53aWR0aCkpO1xuICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pbWdVcmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gdGhpcy5WRUxPQ0lUWV9YO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZmFjZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gLXRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJyAnICYmIHRoaXMuUGxheWVyLmdyb3VuZGVkICYmICF0aGlzLlBsYXllci5pc0p1bXBpbmcgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5pc0p1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgNjApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZXRHYW1lKG5ld0dhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3R2FtZTtcbiAgICB9XG5cbiAgICBzZXREYXRhKHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSkge1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDUwLDUwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaW1nVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVJbWFnZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS5pbWdVcmwsaW50ZXJhY3RhYmxlLngsaW50ZXJhY3RhYmxlLnkgLSBpbnRlcmFjdGFibGUueU9mZnNldCxpbnRlcmFjdGFibGUud2lkdGgsaW50ZXJhY3RhYmxlLmltZ0hlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIHRvZ2dsZVBhdXNlKCl7XG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuXG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoZ2FtZUxvb3ApIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJmYWlsZWRcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICB9XG5cbiAgICBsZXZlbENvbXBsZXRlKGdhbWVMb29wKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiY29tcGxldGVcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICB9XG5cbiAgICBwYXVzZUdhbWUoZ2FtZUxvb3ApIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZW51KVxuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJwYXVzZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIueSA+IDUwMCB8fCB0aGlzLmxldmVsVGltZSA8PSAxMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGdhbWVMb29wKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBleGl0XG4gICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKHRoaXMuZnJhbWVOdW0pO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2UucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBkcmF3IHBsYXllclxuICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMucGxheWVyU3ByaXRlLCB0aGlzLlBsYXllci54LCB0aGlzLlBsYXllci55LCB0aGlzLlBsYXllci53aWR0aCwgdGhpcy5QbGF5ZXIuaGVpZ2h0KVxuXG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgZnJhbWUgaW1hZ2VcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5tb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyRnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuUGxheWVyLmZyYW1lTnVtIC8gMTApXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyckZyYW1lID09IDAgfHwgY3VyckZyYW1lID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZmFjZVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVOdW0gJSA0MCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuXG4gICAgXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIG9ic3RhY2xlIGNvbGxpc2lvblxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLnJlbmRlcigpO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaXNDb2xsaWRpbmdYKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1kodGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1kgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZID0gaW50ZXJhY3RhYmxlLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBsZXZlbCBmaW5pc2ggXG4gICAgICAgICAgICBpZiAodGhpcy5leGl0LmlzQ29sbGlkaW5nWCh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQuaXNDb2xsaWRpbmdZKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb21wbGV0ZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIG1vdmVtZW50IGJhc2Ugb24gcGxheWVyIGNvbGxpc2lvblxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSB0aGlzLlBsYXllci52ZWxvY2l0eVswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07ICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ID0gdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgLSA1OTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICAgICAgLy9sZXZlbCBpbmZvIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfWAsIDM2NCwgNTApO1xuXG4gICAgICAgICAgICAvLyB0aW1lclxuICAgICAgICAgICAgdGhpcy5sZXZlbFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KE1hdGguZmxvb3IodGhpcy5sZXZlbFRpbWUvMTAwKS50b1N0cmluZygpLCA3MDAsIDUwKTtcbiAgICBcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZnJhbWVOdW0gPSAodGhpcy5QbGF5ZXIuZnJhbWVOdW0gKyAxKSAlIDQwXG4gICAgICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gKHRoaXMucG9ydGFsRnJhbWUgKyAxKSAlIDgwO1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lTnVtKys7XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgICAgIFxuICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1haW5DYW52YXMsIG1haW5DdHgsIHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSwgc2V0RGF0YSwgdW5wYXVzZSwgcmVuZGVyR2FtZSwgcmVuZGVySG9tZSl7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IG1haW5DYW52YXM7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IG1haW5DdHg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSA9IHNldERhdGE7XG4gICAgICAgIHRoaXMudW5wYXVzZSA9IHVucGF1c2U7XG4gICAgICAgIHRoaXMucmVuZGVyR2FtZSA9IHJlbmRlckdhbWU7XG4gICAgICAgIHRoaXMucmVuZGVySG9tZSA9IHJlbmRlckhvbWU7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDE7XG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAndycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAncycpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWF4TnVtID0gdGhpcy50eXBlID09IFwicGF1c2VcIiA/IDMgOiAyO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICE9IG1heE51bSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIgJiYgdGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0TWVudURhdGEodHlwZSwgd29ybGROdW0sIGxldmVsTnVtKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLm1haW5DYW52YXMsIHRoaXMubWFpbkN0eCwgdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0gKyAxLCAxLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0gKyAxLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobWVudSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGRyYXcgbWVudSBib3hcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMTAwLDQwMCwyMDApO1xuXG4gICAgICAgIC8vIHNldCBtZW51IGhlYWRlciBmb250XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgLy8gZHJhdyBtZW51IGhlYWRlclxuICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxldmVsIEZhaWxlZFwiLCAyNjAsIDE1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDI1NSwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBDb21wbGV0ZSFcIiwgMjI0LCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDg3LDI1NSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VcIiwgMzQ0LCAxNTApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgbWVudSBvcHRpb24gZm9udFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgXG4gICAgICAgIC8vIGRyYXcgbWVudSBvcHRpb25zIGFuZCBhcnJvd3NcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJldHJ5XCIsIDM2MCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzIwLCAyNTApXG5cbiAgICAgICAgICAgIC8vIGRyYXcgc2VsZWN0ZWQgYXJyb3dzIGFyb3VuZCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDMwMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzIwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMDAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTIwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MDAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUyMCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU2MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTmV4dCBMZXZlbFwiLCAzMDAsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMxMCwgMjUwKVxuXG4gICAgICAgICAgICAvLyBkcmF3IHNlbGVjdGVkIGFycm93cyBhcm91bmQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNDAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2MCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjQwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU2MCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNzAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI1MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUzMCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTUwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDIwMCwzMDAsNDAwLDQwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmVzdW1lXCIsIDM0NCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXN0YXJ0XCIsIDMzNCwgMjUwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzE0LCAzMDApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjc0LCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyOTQsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI3NCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MzQsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUxNCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTM0LCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI2NCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjg0LCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjQsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTQ0LCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MjQsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0NCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDIzNCwgMzAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjU0LCAyOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyMzQsIDI4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTc0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU3NCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBCRyBmcm9tICcuLi9hc3NldHMvbWFpbnBhZ2VfYmcucG5nJ1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcblxuICAgICAgICB0aGlzLmdhbWUgPSAgbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAxLCAxLCB0aGlzLmdhbWUsIHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmhvbWUgPSBudWxsO1xuXG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbnZhc1BvcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDEwMCArIGluY3JlbWVudCAmJiBtb3VzZVggPCAxNjUgKyBpbmNyZW1lbnQgJiYgbW91c2VZID4gMzQ1ICYmIG1vdXNlWSA8IDQxNSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaG9tZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNldERhdGEodGhpcy5jdXJyZW50V29ybGQsIGkgKyAxLCB0aGlzLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuaG9tZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnKVwiXG4gICAgXG4gICAgICAgICAgICAvL3RpdGxlXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ090aGVyd29ybGRzJywgMjI1LCA5MClcbiAgICBcbiAgICAgICAgICAgIC8vbGV2ZWwgc2VsZWN0IC0gMTIwcHggYmV0d2VlbiBsZXZlbFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMTAwLDEwMCwxMDApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDAgKyBpbmNyZW1lbnQsMzQ1LDcwLDcwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI0MCwyNDAsMjQwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTA1ICsgaW5jcmVtZW50LDM1MCw2MCw2MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KChpICsgMSkudG9TdHJpbmcoKSwgMTIwICsgaW5jcmVtZW50LCAzOTcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG59XG5cbiIsImNvbnN0IEJVRkZFUl9YID0gMTc7XG5jb25zdCBCVUZGRVJfWSA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1goeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeFBvcyArIEJVRkZFUl9YID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeVBvcyArIEJVRkZFUl9ZIC0gNiA+IHRoaXMueSAmJiB5UG9zIC0gQlVGRkVSX1kgKyA2IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1koeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeVBvcyArIEJVRkZFUl9ZID4gdGhpcy55ICYmIHlQb3MgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiB4UG9zICsgQlVGRkVSX1ggLSA2ID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCArIDYgPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZUltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgdXJsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuLy9vdXRlciBhcnJheSBpcyB3b3JsZHMsIGlubmVyIGFycmF5IGlzIGxldmVsRGF0YSBvYmplY3RzXG5leHBvcnQgY29uc3QgTGV2ZWxEYXRhID0gW1xuICAgIC8vIHdvcmxkIDFcbiAgICBbXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgMVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMjUsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFsxMDAsNTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDJcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwxMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2ODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY2MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgM1xuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDEwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNTAsNTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDRcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwxMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzUwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA1XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMTAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOicnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6JydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH1cblxuICAgIF0sXG4gICAgLy8gd29ybGQgMlxuICAgIFtcblxuICAgIF1cbl0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9