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

/***/ "./src/assets/world2LargePlatform.png":
/*!********************************************!*\
  !*** ./src/assets/world2LargePlatform.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2LargePlatform.png");

/***/ }),

/***/ "./src/assets/world2LargeWeakPlatform.png":
/*!************************************************!*\
  !*** ./src/assets/world2LargeWeakPlatform.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2LargeWeakPlatform.png");

/***/ }),

/***/ "./src/assets/world2MediumPlatform.png":
/*!*********************************************!*\
  !*** ./src/assets/world2MediumPlatform.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2MediumPlatform.png");

/***/ }),

/***/ "./src/assets/world2MediumWeakPlatform.png":
/*!*************************************************!*\
  !*** ./src/assets/world2MediumWeakPlatform.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2MediumWeakPlatform.png");

/***/ }),

/***/ "./src/assets/world2SmallPlatform.png":
/*!********************************************!*\
  !*** ./src/assets/world2SmallPlatform.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2SmallPlatform.png");

/***/ }),

/***/ "./src/assets/world2SmallWeakPlatform.png":
/*!************************************************!*\
  !*** ./src/assets/world2SmallWeakPlatform.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2SmallWeakPlatform.png");

/***/ }),

/***/ "./src/assets/world2TinyPlatform.png":
/*!*******************************************!*\
  !*** ./src/assets/world2TinyPlatform.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2TinyPlatform.png");

/***/ }),

/***/ "./src/assets/world2TinyWeakPlatform.png":
/*!***********************************************!*\
  !*** ./src/assets/world2TinyWeakPlatform.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world2TinyWeakPlatform.png");

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

/***/ "./src/scripts/assetImports.js":
/*!*************************************!*\
  !*** ./src/scripts/assetImports.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _assets_largePlatform_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/largePlatform.png */ "./src/assets/largePlatform.png");
/* harmony import */ var _assets_mediumPlatform_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/mediumPlatform.png */ "./src/assets/mediumPlatform.png");
/* harmony import */ var _assets_smallPlatform_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/smallPlatform.png */ "./src/assets/smallPlatform.png");
/* harmony import */ var _assets_tinyPlatform_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/tinyPlatform.png */ "./src/assets/tinyPlatform.png");
/* harmony import */ var _assets_world2LargePlatform_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/world2LargePlatform.png */ "./src/assets/world2LargePlatform.png");
/* harmony import */ var _assets_world2MediumPlatform_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/world2MediumPlatform.png */ "./src/assets/world2MediumPlatform.png");
/* harmony import */ var _assets_world2SmallPlatform_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/world2SmallPlatform.png */ "./src/assets/world2SmallPlatform.png");
/* harmony import */ var _assets_world2TinyPlatform_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/world2TinyPlatform.png */ "./src/assets/world2TinyPlatform.png");
/* harmony import */ var _assets_world2LargeWeakPlatform_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/world2LargeWeakPlatform.png */ "./src/assets/world2LargeWeakPlatform.png");
/* harmony import */ var _assets_world2MediumWeakPlatform_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/world2MediumWeakPlatform.png */ "./src/assets/world2MediumWeakPlatform.png");
/* harmony import */ var _assets_world2SmallWeakPlatform_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/world2SmallWeakPlatform.png */ "./src/assets/world2SmallWeakPlatform.png");
/* harmony import */ var _assets_world2TinyWeakPlatform_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/world2TinyWeakPlatform.png */ "./src/assets/world2TinyWeakPlatform.png");
/* harmony import */ var _assets_idleFrame_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/idleFrame.png */ "./src/assets/idleFrame.png");
/* harmony import */ var _assets_idleFrame2_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/idleFrame2.png */ "./src/assets/idleFrame2.png");
/* harmony import */ var _assets_mainpage_bg_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/mainpage_bg.png */ "./src/assets/mainpage_bg.png");
/* harmony import */ var _assets_tabIcon_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/tabIcon.png */ "./src/assets/tabIcon.png");
/* harmony import */ var _assets_world2BG_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/world2BG.png */ "./src/assets/world2BG.png");
/* harmony import */ var _assets_musicOn_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/musicOn.png */ "./src/assets/musicOn.png");
/* harmony import */ var _assets_musicOff_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/musicOff.png */ "./src/assets/musicOff.png");
/* harmony import */ var _assets_soundOn_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/soundOn.png */ "./src/assets/soundOn.png");
/* harmony import */ var _assets_soundOff_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/soundOff.png */ "./src/assets/soundOff.png");
/* harmony import */ var _assets_world1Music_mp3__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/world1Music.mp3 */ "./src/assets/world1Music.mp3");
/* harmony import */ var _assets_jumpSound_mp3__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/jumpSound.mp3 */ "./src/assets/jumpSound.mp3");
/* harmony import */ var _assets_footstep_mp3__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../assets/footstep.mp3 */ "./src/assets/footstep.mp3");
/* harmony import */ var _assets_menuBlip_mp3__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../assets/menuBlip.mp3 */ "./src/assets/menuBlip.mp3");
/* harmony import */ var _assets_pauseMenu_mp3__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../assets/pauseMenu.mp3 */ "./src/assets/pauseMenu.mp3");
/* harmony import */ var _assets_pause_mp3__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../assets/pause.mp3 */ "./src/assets/pause.mp3");
//images 




































 //audio








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
/* harmony import */ var _interactable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactable */ "./src/scripts/interactable.js");
/* harmony import */ var _gamemenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamemenu */ "./src/scripts/gamemenu.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exit */ "./src/scripts/exit.js");
/* harmony import */ var _leveldata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leveldata */ "./src/scripts/leveldata.js");
/* harmony import */ var _interactableImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactableImage */ "./src/scripts/interactableImage.js");
/* harmony import */ var _levelText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levelText */ "./src/scripts/levelText.js");
/* harmony import */ var _weakPlatform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weakPlatform */ "./src/scripts/weakPlatform.js");
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
    this.showControls = false;
    this.frameNum = 0;
    this.levelTime = 6000;
    this.paused = false;
    this.menu = new _gamemenu__WEBPACK_IMPORTED_MODULE_1__["default"](this.canvas, this.ctx, "failed", this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome, this.gameMusic, this.musicMuted, this.toggleSoundMuted, this.getSoundMuted, this.toggleSoundMuted);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // get seed data for current level

    this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_3__["LevelData"][this.worldNum - 1][this.levelNum - 1];
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

    this.exit = new _exit__WEBPACK_IMPORTED_MODULE_2__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 70, 70, this.levelNum, this.worldNum); // set interactables for this stage from seed data

    this.interactables = [];
    this.images = [];
    this.levelData.interactables.forEach(function (interactable) {
      _this.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_0__["default"](_this.canvas, _this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

      if (interactable.imgUrl.length > 0) {
        _this.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_4__["default"](_this.canvas, _this.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
      }
    });
    this.levelText = "";

    if (this.levelData.levelText) {
      this.levelText = new _levelText__WEBPACK_IMPORTED_MODULE_5__["default"](this.canvas, this.ctx, this.levelData.levelText, 160, 200);
    }

    window.addEventListener('keydown', function (event) {
      if (event.key == 'd' || event.key == 'ArrowRight') {
        _this.Player.velocity[0] = _this.VELOCITY_X;
        _this.Player.moving = true;
        _this.Player.faceRight = true;
      } else if (event.key == 'a' || event.key == 'ArrowLeft') {
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
      if (event.key == 'd' || event.key == 'ArrowRight') {
        _this.Player.velocity[0] = 0;
        _this.Player.moving = false;
      } else if (event.key == 'a' || event.key == 'ArrowLeft') {
        _this.Player.velocity[0] = 0;
        _this.Player.moving = false;
      } else if (event.key == ' ') {
        _this.Player.isJumping = false;
      }
    });

    this.moveListener = function (event) {
      var canvasPos = _this.canvas.getBoundingClientRect();

      var mouseX = event.x - canvasPos.left;
      var mouseY = event.y - canvasPos.top;

      if (mouseX > 0 && mouseX < 125 && mouseY > 0 && mouseY < 45) {
        _this.showControls = true;
      } else {
        _this.showControls = false;
      }
    };

    this.canvas.addEventListener('mousemove', this.moveListener);
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

      this.levelData = _leveldata__WEBPACK_IMPORTED_MODULE_3__["LevelData"][this.worldNum - 1][this.levelNum - 1];
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

      this.exit = new _exit__WEBPACK_IMPORTED_MODULE_2__["default"](this.canvas, this.ctx, this.levelData.finishPos[0], this.levelData.finishPos[1], 50, 50, this.levelNum, this.worldNum); // set interactables for this stage from seed data

      this.interactables = [];
      this.images = [];
      this.levelData.interactables.forEach(function (interactable) {
        if (interactable.weak) {
          _this2.interactables.push(new _weakPlatform__WEBPACK_IMPORTED_MODULE_6__["default"](_this2.canvas, _this2.ctx, interactable.x, interactable.y, interactable.height, interactable.width, interactable.duration, interactable.imgUrl, _this2.GRAVITY));
        } else {
          _this2.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_0__["default"](_this2.canvas, _this2.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

          if (interactable.imgUrl.length > 0) {
            _this2.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_4__["default"](_this2.canvas, _this2.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
          }
        }
      });
      this.levelText = "";

      if (this.levelData.levelText) {
        this.levelText = new _levelText__WEBPACK_IMPORTED_MODULE_5__["default"](this.canvas, this.ctx, this.levelData.levelText, 160, 200);
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
    key: "incrementDeathCount",
    value: function incrementDeathCount() {
      var deathCount = window.localStorage.getItem("".concat(this.worldNum, "-").concat(this.levelNum, " death count"));

      if (deathCount == null) {
        window.localStorage.setItem("".concat(this.worldNum, "-").concat(this.levelNum, " death count"), 1);
      } else {
        window.localStorage.setItem("".concat(this.worldNum, "-").concat(this.levelNum, " death count"), parseInt(deathCount) + 1);
      }
    }
  }, {
    key: "checkBestTime",
    value: function checkBestTime() {
      var current = window.localStorage.getItem("".concat(this.worldNum, "-").concat(this.levelNum, " best time"));
      console.log(current);
      console.log(this.levelTime);

      if (current == null) {
        window.localStorage.setItem("".concat(this.worldNum, "-").concat(this.levelNum, " best time"), this.levelTime);
        return true;
      } else {
        if (this.levelTime > current) {
          window.localStorage.setItem("".concat(this.worldNum, "-").concat(this.levelNum, " best time"), this.levelTime);
          return true;
        }
      }

      return false;
    }
  }, {
    key: "gameOver",
    value: function gameOver(gameLoop) {
      this.interactables = [];
      clearInterval(gameLoop);
      this.incrementDeathCount();
      this.menu.setMenuData("failed", this.worldNum, this.levelNum);
      this.menu.open();
    }
  }, {
    key: "levelComplete",
    value: function levelComplete(gameLoop) {
      // set new levelsCompleted localStorage variable
      var current = window.localStorage.getItem("levelsCompleted");

      if (current) {
        window.localStorage.setItem("levelsCompleted", parseInt(current) + 1);
      } else {
        window.localStorage.setItem("levelsCompleted", 1);
      } // animation at end of level 5


      if (this.levelNum == 5) {
        this.level5Animation(gameLoop);
      } else {
        this.interactables = [];
        clearInterval(gameLoop);
        var newBest = this.checkBestTime();
        this.menu.setMenuData("complete", this.worldNum, this.levelNum, newBest, this.levelTime);
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
      var _this3 = this;

      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.levelText != "" && !skip) {
        this.levelText.open();
      }

      this.canvas.style.backgroundImage = "url(".concat(this.worldBGs[this.worldNum - 1], ")");
      var gameLoop = setInterval(function () {
        if (_this3.paused) {
          _this3.pauseGame(gameLoop);
        }

        _this3.ctx.clearRect(0, 0, _this3.canvas.width, _this3.canvas.height);

        _this3.ctx.fillStyle = "rgb(0,0,0)";

        if (_this3.Player.y > 500 || _this3.levelTime <= 99) {
          _this3.gameOver(gameLoop);
        } // draw exit


        _this3.exit.render(_this3.frameNum); // draw images


        _this3.images.forEach(function (image) {
          image.render();
        }); // draw player


        _this3.drawPlayer(_this3.playerSprite, _this3.Player.x, _this3.Player.y, _this3.Player.width, _this3.Player.height); // handle player frame image


        if (_this3.Player.moving) {
          if (_this3.Player.grounded) {
            if (!_this3.getSoundMuted()) _this3.footstep.play();
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
            if (interactable.fall && !interactable.isFalling) {
              interactable.fall();
              console.log("fall");
            }

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

        _this3.ctx.fillText(Math.floor(_this3.levelTime / 100).toString(), 700, 50); // controls hover


        _this3.ctx.fillStyle = "#ffffff";
        _this3.ctx.font = "12px 'Press Start 2P'";

        _this3.ctx.fillText('controls', 20, 30);

        if (_this3.showControls) {
          _this3.ctx.fillStyle = 'rgba(0,0,0,0.7)';

          _this3.ctx.fillRect(0, 0, _this3.canvas.width, _this3.canvas.height);

          _this3.ctx.fillStyle = '#ffffff';
          _this3.ctx.font = "20px 'Press Start 2P'";

          _this3.ctx.fillText('WASD - Move', 290, 170);

          _this3.ctx.fillText('Space - Jump', 270, 210);

          _this3.ctx.fillText('Esc - Pause', 310, 250);

          _this3.ctx.font = "12px 'Press Start 2P'";

          _this3.ctx.fillText('Useful Tip: Holding the arrow key in the direction of', 90, 310);

          _this3.ctx.fillText('a wall while colliding with it will slow your fall', 110, 330);
        }

        _this3.Player.frameNum = (_this3.Player.frameNum + 1) % 40;
        _this3.portalFrame = (_this3.portalFrame + 1) % 80;
        _this3.frameNum++;
      }, 10);
    } // animations

  }, {
    key: "level5Animation",
    value: function level5Animation(gameLoop) {
      var _this4 = this;

      clearInterval(gameLoop);
      setTimeout(function () {
        _this4.interactables = [];
        clearInterval(finishWorld);

        var newBest = _this4.checkBestTime();

        _this4.menu.setMenuData("complete", _this4.worldNum, _this4.levelNum, newBest, _this4.levelTime);

        _this4.menu.open();
      }, 4000);
      this.Player.x = 469;
      this.Player.y = 221;
      var count = 0;
      var exitX = 500;
      var exitY = 180;
      var exitW = 60;
      var exitH = 80;
      var finishWorld = setInterval(function () {
        _this4.ctx.clearRect(0, 0, _this4.canvas.width, _this4.canvas.height);

        count++; // draw exit

        if (count < 100) {
          exitX += 0.6;
          exitY -= 0.4;

          _this4.exit.render(count, exitX, exitY, exitW, exitH);
        } else if (count < 200) {
          exitX -= 0.3;
          exitY -= 0.4;
          exitW += 0.6;
          exitH += 0.8;

          _this4.exit.render(count, exitX, exitY, exitW, exitH);
        } else {
          _this4.exit.render(count, 530, 100, 120, 160);
        } // draw images


        _this4.images.forEach(function (image) {
          image.render();
        }); // draw interactables 


        _this4.interactables.forEach(function (interactable) {
          interactable.render();
        });

        if (count < 100) {
          if (count % 40 > 20) {
            _this4.playerSprite.src = "dist/images/idleFrame.png";
          } else {
            _this4.playerSprite.src = "dist/images/idleFrame2.png";
          }
        } else if (count < 200) {
          _this4.playerSprite.src = "dist/images/runRightFrame1.png";
        } else {
          _this4.playerSprite.src = "dist/images/runRightFrame2.png";
        }

        if (count >= 200 && count < 225) {
          _this4.Player.x += 1;
          _this4.Player.y -= 2;
        } else if (count >= 200 && count < 250) {
          _this4.Player.x += 1;
          _this4.Player.y -= 1;
        } else if (count >= 200 && count < 275) {
          _this4.Player.x += 1;
          _this4.Player.y -= 0.5;
        } else if (count >= 200 && count < 300) {
          _this4.Player.x += 1;
        } else if (count >= 200 && count < 325) {
          _this4.Player.x += 1;
          _this4.Player.y += 0.5;
        }

        if (count >= 300) {
          _this4.Player.width -= 0.3;
          _this4.Player.height -= 0.5;
          _this4.Player.x += 0.15;
          _this4.Player.y += 0.25;
        }

        _this4.drawPlayer(_this4.playerSprite, _this4.Player.x, _this4.Player.y, _this4.Player.width, _this4.Player.height);
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
  function GameMenu(mainCanvas, mainCtx, type, worldNum, levelNum, game, setData, unpause, renderGame, renderHome, gameMusic, musicMuted, toggleSoundMuted, getSoundMuted, toggleMusicMuted) {
    var _this = this;

    _classCallCheck(this, GameMenu);

    this.mainCanvas = mainCanvas;
    this.mainCtx = mainCtx;
    this.canvas = document.getElementById("canvas-menu");
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.active = false;
    this.type = type;
    this.worldNum = worldNum;
    this.levelNum = levelNum;
    this.game = game;
    this.setGameData = setData;
    this.unpause = unpause;
    this.renderGame = renderGame;
    this.renderHome = renderHome;
    this.newBest = false;
    this.time = 0;
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
      if (_this.active) {
        if (event.key == 'w' || event.key == 'ArrowUp') {
          if (_this.selected != 1) {
            if (!_this.getSoundMuted()) _this.menuBlip.play();
            _this.selected--;

            _this.render();
          }
        } else if (event.key == 's' || event.key == 'ArrowDown') {
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
    value: function setMenuData(type, worldNum, levelNum, newBest, time) {
      this.type = type;
      this.worldNum = worldNum;
      this.levelNum = levelNum;
      this.newBest = newBest;
      this.time = time;
    }
  }, {
    key: "close",
    value: function close() {
      this.active = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.classList.remove("active");
      this.submitted = false;
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      this.active = true;
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
        this.ctx.fillStyle = "rgb(0,0,0)";
        this.ctx.fillRect(200, 300, 400, 100);
        this.ctx.fillStyle = "#ffffff";

        if (this.newBest) {
          // new high score text
          this.ctx.fillStyle = 'rgb(0,255,0)';
          this.ctx.font = "12px 'Press Start 2P'";
          this.ctx.fillText("New Best Time!", 316, 200); // reset fillstyle and font

          this.ctx.font = "20px 'Press Start 2P'";
          this.ctx.fillStyle = "#ffffff";
        }

        this.ctx.fillText("Time: ".concat((this.time / 100).toString()), 290, 225);
        this.ctx.fillText("Next Level", 300, 300);
        this.ctx.fillText("Main Menu", 310, 350); // draw selected arrows around currently selected option

        if (this.selected == 1) {
          //left arrow
          this.ctx.beginPath();
          this.ctx.moveTo(240, 300);
          this.ctx.lineTo(260, 290);
          this.ctx.lineTo(240, 280);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(560, 300);
          this.ctx.lineTo(540, 290);
          this.ctx.lineTo(560, 280);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill();
        } else {
          this.ctx.beginPath();
          this.ctx.moveTo(250, 350);
          this.ctx.lineTo(270, 340);
          this.ctx.lineTo(250, 330);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.ctx.strokeStyle = '#bf00ff';
          this.ctx.stroke();
          this.ctx.fillStyle = "#ffffff";
          this.ctx.fill(); // right arrow

          this.ctx.beginPath();
          this.ctx.moveTo(550, 350);
          this.ctx.lineTo(530, 340);
          this.ctx.lineTo(550, 330);
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _assetImports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assetImports */ "./src/scripts/assetImports.js");
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
    this.deathCount = 0;
    this.bestTime = "--:--";
    this.showControls = false;
    this.levelFills = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this), this.music, this.soundMuted, this.toggleMuteSound.bind(this), this.getSoundMuted.bind(this), this.toggleMuteMusic.bind(this));
    this.home = null;
    this.music = new Audio();
    this.music.src = 'dist/audio/world1Music.mp3';
    this.music.volume = 0.6;
    this.worldBGs = ['dist/images/mainpage_bg.png', 'dist/images/world2BG.png']; // get current number of levels completed

    this.levelsCompleted = window.localStorage.getItem("levelsCompleted");

    if (this.levelsCompleted == null) {
      this.levelsCompleted = 0;
    }

    this.moveListener = function (event) {
      var canvasPos = _this.canvas.getBoundingClientRect();

      var mouseX = event.x - canvasPos.left;
      var mouseY = event.y - canvasPos.top;

      for (var i = 0; i < 5; i++) {
        var increment = i * 130;

        if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
          if (_this.levelsCompleted >= (_this.currentWorld - 1) * 5 + i) {
            _this.deathCount = window.localStorage.getItem("".concat(_this.currentWorld, "-").concat(i + 1, " death count")) || 0;
            _this.bestTime = window.localStorage.getItem("".concat(_this.currentWorld, "-").concat(i + 1, " best time")) / 100 || "--:--";
            _this.levelFills[i] = 'rgb(255,190,255)';
          }
        } else {
          _this.levelFills[i] = '#ffffff';
        }
      }

      if (mouseX > 0 && mouseX < 125 && mouseY > 0 && mouseY < 45) {
        _this.showControls = true;
      } else {
        _this.showControls = false;
      }
    };

    this.canvas.addEventListener('mousemove', this.moveListener);

    this.clickListener = function (event) {
      var canvasPos = _this.canvas.getBoundingClientRect();

      var mouseX = event.x - canvasPos.left;
      var mouseY = event.y - canvasPos.top;

      for (var i = 0; i < 5; i++) {
        var increment = i * 130;

        if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
          if (_this.levelsCompleted >= (_this.currentWorld - 1) * 5 + i) {
            clearInterval(_this.home);

            _this.game.setData(_this.currentWorld, i + 1, _this.game);

            _this.game.render(); // this.canvas.removeEventListener('mousedown', this.clickListener);
            // this.canvas.removeEventListener('mousemove', this.moveListener);

          }
        }
      }

      if (mouseX > 730 && mouseX < 770 && mouseY > 30 && mouseY < 60) {
        _this.toggleMuteMusic();
      }

      if (mouseX > 660 && mouseX < 700 && mouseY > 30 && mouseY < 60) {
        _this.toggleMuteSound();
      }

      if (mouseY < 280 && mouseY > 250) {
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
      } // uncomment for dev options
      // if (mouseX > 0 && mouseX < 20 && mouseY > 0 && mouseY < 20) {
      //     window.localStorage.setItem("levelsCompleted", 0);
      //     this.render();
      // }
      // if (mouseX > 0 && mouseX < 20 && mouseY > 450 && mouseY < 500) {
      //     window.localStorage.setItem("levelsCompleted", this.numWorlds * 5);
      //     this.render();
      // }
      // if (mouseX > 750 && mouseX < 800 && mouseY > 450 && mouseY < 500) {
      //     console.log("here")
      //     for (let i = 1; i <= this.numWorlds; i++) {
      //         for (let j = 1; j <= 5; j++) {
      //             window.localStorage.setItem(`${i}-${j} best time`, 0);
      //             window.localStorage.setItem(`${i}-${j} death count`, 0);
      //         }
      //     }
      // }

    };

    this.canvas.addEventListener('mousedown', this.clickListener);
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
    key: "getLevelsCompleted",
    value: function getLevelsCompleted() {
      this.levelsCompleted = window.localStorage.getItem("levelsCompleted");

      if (this.levelsCompleted == null) {
        this.levelsCompleted = 0;
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.canvas.addEventListener('mousedown', this.clickListener);
      this.canvas.addEventListener('mousemove', this.moveListener);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.getLevelsCompleted();
      this.home = setInterval(function () {
        _this2.ctx.clearRect(0, 0, _this2.canvas.width, _this2.canvas.height);

        _this2.canvas.style.backgroundImage = "url(".concat(_this2.worldBGs[_this2.currentWorld - 1], ")"); //title

        _this2.ctx.fillStyle = '#ffffff';
        _this2.ctx.font = "32px 'Press Start 2P'";

        _this2.ctx.fillText('Otherworlds', 225, 90); // world select      
        // --world name


        _this2.ctx.font = "28px 'Press Start 2P'";

        _this2.ctx.fillText("World ".concat(_this2.currentWorld), 302, 280); //-- world cycling arrows
        //---- right arrow


        _this2.ctx.beginPath();

        _this2.ctx.moveTo(560, 280);

        _this2.ctx.lineTo(590, 265);

        _this2.ctx.lineTo(560, 250);

        _this2.ctx.closePath();

        _this2.ctx.lineWidth = 5;
        _this2.ctx.strokeStyle = '#444444';

        _this2.ctx.stroke();

        _this2.ctx.fillStyle = "#ffffff";

        _this2.ctx.fill(); //---- left arrow


        _this2.ctx.beginPath();

        _this2.ctx.moveTo(240, 280);

        _this2.ctx.lineTo(210, 265);

        _this2.ctx.lineTo(240, 250);

        _this2.ctx.closePath();

        _this2.ctx.lineWidth = 5;
        _this2.ctx.strokeStyle = '#444444';

        _this2.ctx.stroke();

        _this2.ctx.fillStyle = "#ffffff";

        _this2.ctx.fill(); //level select - 130px between level


        for (var i = 0; i < 5; i++) {
          var fillColor = "rgb(120,120,120)";

          if ((_this2.currentWorld - 1) * 5 + i <= _this2.levelsCompleted) {
            fillColor = _this2.levelFills[i];
          }

          var increment = i * 130;
          _this2.ctx.fillStyle = "rgb(80,80,80)";

          _this2.ctx.fillRect(100 + increment, 345, 70, 70);

          _this2.ctx.fillStyle = fillColor;

          _this2.ctx.fillRect(105 + increment, 350, 60, 60);

          _this2.ctx.fillStyle = "rgb(0,0,0)";

          _this2.ctx.fillText((i + 1).toString(), 122 + increment, 397);
        } // mute sound button


        var soundButton = new Image();

        if (_this2.soundMuted) {
          soundButton.src = 'dist/images/soundOff.png';
        } else {
          soundButton.src = 'dist/images/soundOn.png';
        }

        _this2.ctx.drawImage(soundButton, 660, 30, 40, 30); // mute music button


        var musicButton = new Image();

        if (_this2.musicMuted) {
          musicButton.src = 'dist/images/musicOff.png';
        } else {
          musicButton.src = 'dist/images/musicOn.png';
        }

        _this2.ctx.drawImage(musicButton, 730, 30, 40, 30); // stats


        _this2.ctx.fillStyle = '#ffffff';
        _this2.ctx.font = "20px 'Press Start 2P'";

        _this2.ctx.fillText("Best Time: ".concat(_this2.bestTime), 240, 160);

        _this2.ctx.fillText("Death Count: ".concat(_this2.deathCount), 260, 200); // show/hide controls


        _this2.ctx.font = "12px 'Press Start 2P'";

        _this2.ctx.fillText("controls", 20, 30);

        if (_this2.showControls) {
          _this2.ctx.fillStyle = 'rgba(0,0,0,0.7)';

          _this2.ctx.fillRect(0, 0, _this2.canvas.width, _this2.canvas.height);

          _this2.ctx.fillStyle = '#ffffff';
          _this2.ctx.font = "20px 'Press Start 2P'";

          _this2.ctx.fillText('WASD - Move', 290, 170);

          _this2.ctx.fillText('Space - Jump', 270, 210);

          _this2.ctx.fillText('Esc - Pause', 310, 250);

          _this2.ctx.font = "12px 'Press Start 2P'";

          _this2.ctx.fillText('Useful Tip: Holding the arrow key in the direction of', 90, 310);

          _this2.ctx.fillText('a wall while colliding with it will slow your fall', 110, 330);
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
      count += words[i].length;

      if (count <= 30) {
        segment.push(words[i]);
      } else {
        this.segments.push(segment);
        segment = [];
        count = 0;
        i--;
      }

      count++;
    }

    this.segments.push(segment);
    this.y = this.canvas.height / 2 - this.segments.length * 8;
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
        }, 3000);
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
        var line = this.segments[i].join(" ");
        var offset = (480 - line.length * 16) / 2;
        this.ctx.fillText(line, this.x + offset, this.y + i * 30, 480);
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
  levelText: "Now that spaceman has seen all that his world has to offer, he begins his journey through otherworlds"
}], // world 2
[// world 2 level 1
{
  playerStartPos: [100, 300],
  interactables: [{
    x: 50,
    y: 450,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }, {
    x: 200,
    y: 400,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 300,
    y: 350,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 400,
    y: 300,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 500,
    y: 250,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 600,
    y: 200,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 700,
    y: 150,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 675,
    y: 450,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }],
  finishPos: [700, 400],
  gravity: -0.1,
  levelText: "Spaceman finds himself in an arid mountain world with stone platforms. Some of the platforms seem quite old..."
}, // world 2 level 2
{
  playerStartPos: [100, 300],
  interactables: [{
    x: 50,
    y: 450,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }, {
    x: 200,
    y: 400,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 300,
    y: 350,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 400,
    y: 300,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 500,
    y: 250,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 600,
    y: 200,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 700,
    y: 150,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 675,
    y: 450,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }],
  finishPos: [700, 400],
  gravity: -0.1,
  levelText: "Spaceman finds himself in an arid mountain world with stone platforms. Some of the platforms seem quite old..."
}, // world 2 level 4
{
  playerStartPos: [100, 300],
  interactables: [{
    x: 80,
    y: 450,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }, {
    x: 370,
    y: 450,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 600,
    y: 450,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 750,
    y: 350,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 600,
    y: 250,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }, {
    x: 470,
    y: 200,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 420,
    y: 200,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 100
  }, {
    x: 220,
    y: 250,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }, {
    x: 0,
    y: 180,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }, {
    x: 160,
    y: 70,
    height: 30,
    width: 640,
    imgUrl: 'dist/images/world2LargeWeakPlatform.png',
    yOffset: 0,
    imgHeight: 30,
    weak: true,
    duration: 0
  }],
  finishPos: [600, 20],
  gravity: -0.1
}]];

/***/ }),

/***/ "./src/scripts/weakPlatform.js":
/*!*************************************!*\
  !*** ./src/scripts/weakPlatform.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeakPlatform; });
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



var WeakPlatform = /*#__PURE__*/function (_Interactable) {
  _inherits(WeakPlatform, _Interactable);

  var _super = _createSuper(WeakPlatform);

  function WeakPlatform(canvas, ctx, x, y, height, width, duration, imgUrl, gravity) {
    var _this;

    _classCallCheck(this, WeakPlatform);

    _this = _super.call(this, canvas, ctx, x, y, height, width);
    _this.duration = duration;
    _this.imgUrl = imgUrl;
    _this.gravity = gravity;
    _this.img = new Image();
    _this.isFalling = false;
    _this.fallSpeed = 0; // pixels per second

    return _this;
  }

  _createClass(WeakPlatform, [{
    key: "fall",
    value: function fall() {
      var _this2 = this;

      console.log("started flal function");
      this.isFalling = true;
      setTimeout(function () {
        clearInterval(platformFall);
      }, (this.canvas.height - this.y + 100) * 10 + this.duration);
      var count = 0;
      var platformFall = setInterval(function () {
        if (count > _this2.duration / 100) {
          _this2.fallSpeed += _this2.gravity;
          _this2.y -= _this2.fallSpeed;
        }

        count++;
      }, 10);
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.fillStyle = "rgba(0,0,0,0)";
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      this.img.src = this.imgUrl;
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }]);

  return WeakPlatform;
}(_interactable__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlTWVudS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT2ZmLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGFiSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQxTXVzaWMubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJUaW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Fzc2V0SW1wb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW50ZXJhY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xldmVsVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbGRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvd2Vha1BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWVGcmFtZSIsIkhvbWVQYWdlIiwicmVuZGVyIiwiRXhpdCIsIngiLCJ5IiwibGV2ZWxOdW0iLCJ3b3JsZE51bSIsImV4aXRJbWFnZSIsIkltYWdlIiwiZnJhbWVOdW0iLCJ4UG9zIiwieVBvcyIsInBvcnRhbEZyYW1lIiwiY3VycmVudEltYWdlTnVtIiwiTWF0aCIsImZsb29yIiwic3JjIiwiZHJhd0ltYWdlIiwiSW50ZXJhY3RhYmxlIiwiR2FtZSIsImdhbWUiLCJyZW5kZXJIb21lIiwiZ2FtZU11c2ljIiwibXVzaWNNdXRlZCIsInRvZ2dsZVNvdW5kTXV0ZWQiLCJnZXRTb3VuZE11dGVkIiwidG9nZ2xlTXVzaWNNdXRlZCIsInNob3dDb250cm9scyIsImxldmVsVGltZSIsInBhdXNlZCIsIm1lbnUiLCJHYW1lTWVudSIsInNldERhdGEiLCJiaW5kIiwidG9nZ2xlUGF1c2UiLCJjbGVhclJlY3QiLCJsZXZlbERhdGEiLCJMZXZlbERhdGEiLCJWRUxPQ0lUWV9YIiwiR1JBVklUWSIsImdyYXZpdHkiLCJQbGF5ZXIiLCJ2ZWxvY2l0eSIsImlzSnVtcGluZyIsImNhbkp1bXAiLCJwbGF5ZXJTdGFydFBvcyIsImZhY2VSaWdodCIsIm1vdmluZyIsImNvbGxpZGluZ1giLCJjb2xsaWRpbmdZIiwiZ3JvdW5kZWQiLCJjb2xsaXNpb25zdXJmYWNlWSIsInBhdXNlU291bmQiLCJBdWRpbyIsInZvbHVtZSIsImp1bXBTb3VuZCIsImZvb3RzdGVwIiwid29ybGRCR3MiLCJwbGF5ZXJTcHJpdGUiLCJwb3J0YWxTcHJpdGUiLCJleGl0IiwiZmluaXNoUG9zIiwiaW50ZXJhY3RhYmxlcyIsImltYWdlcyIsImZvckVhY2giLCJpbnRlcmFjdGFibGUiLCJwdXNoIiwiaW1nVXJsIiwibGVuZ3RoIiwiSW50ZXJhY3RhYmxlSW1hZ2UiLCJ5T2Zmc2V0IiwiaW1nSGVpZ2h0IiwibGV2ZWxUZXh0IiwiTGV2ZWxUZXh0Iiwid2luZG93IiwiZXZlbnQiLCJrZXkiLCJwbGF5Iiwic2V0VGltZW91dCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJtb3ZlTGlzdGVuZXIiLCJjYW52YXNQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtb3VzZVgiLCJsZWZ0IiwibW91c2VZIiwidG9wIiwibmV3R2FtZSIsIndlYWsiLCJXZWFrUGxhdGZvcm0iLCJkdXJhdGlvbiIsImltZyIsImRlYXRoQ291bnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInBhcnNlSW50IiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lTG9vcCIsImNsZWFySW50ZXJ2YWwiLCJpbmNyZW1lbnREZWF0aENvdW50Iiwic2V0TWVudURhdGEiLCJvcGVuIiwibGV2ZWw1QW5pbWF0aW9uIiwibmV3QmVzdCIsImNoZWNrQmVzdFRpbWUiLCJza2lwIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZXRJbnRlcnZhbCIsInBhdXNlR2FtZSIsImZpbGxTdHlsZSIsImdhbWVPdmVyIiwiaW1hZ2UiLCJkcmF3UGxheWVyIiwiY3VyckZyYW1lIiwiaXNDb2xsaWRpbmdYIiwiaXNDb2xsaWRpbmdZIiwiZmFsbCIsImlzRmFsbGluZyIsImxldmVsQ29tcGxldGUiLCJmb250IiwiZmlsbFRleHQiLCJ0b1N0cmluZyIsImZpbGxSZWN0IiwiZmluaXNoV29ybGQiLCJjb3VudCIsImV4aXRYIiwiZXhpdFkiLCJleGl0VyIsImV4aXRIIiwibWFpbkNhbnZhcyIsIm1haW5DdHgiLCJ0eXBlIiwidW5wYXVzZSIsInJlbmRlckdhbWUiLCJhY3RpdmUiLCJzZXRHYW1lRGF0YSIsInRpbWUiLCJzb3VuZE9mZiIsInNvdW5kT24iLCJtZW51QmxpcCIsInNlbGVjdGVkIiwic3VibWl0dGVkIiwibWF4TnVtIiwiY2xvc2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZpbGwiLCJjdXJyZW50V29ybGQiLCJzb3VuZE11dGVkIiwibnVtV29ybGRzIiwiYmVzdFRpbWUiLCJsZXZlbEZpbGxzIiwibXVzaWMiLCJ0b2dnbGVNdXRlU291bmQiLCJ0b2dnbGVNdXRlTXVzaWMiLCJob21lIiwibGV2ZWxzQ29tcGxldGVkIiwiaSIsImluY3JlbWVudCIsImNsaWNrTGlzdGVuZXIiLCJnZXRMZXZlbHNDb21wbGV0ZWQiLCJmaWxsQ29sb3IiLCJzb3VuZEJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiQlVGRkVSX1giLCJCVUZGRVJfWSIsInVybCIsIm1lc3NhZ2UiLCJ0ZXh0Q29sb3IiLCJiZ0NvbG9yIiwid29yZHMiLCJzcGxpdCIsImxlbiIsInNlZ21lbnRzIiwic2VnbWVudCIsImZhZGVJbkxvb3AiLCJmYWRlT3V0IiwidGV4dE9wYWNpdHkiLCJiZ09wYWNpdHkiLCJmYWRlT3V0TG9vcCIsImZhZGVJbiIsImxpbmUiLCJqb2luIiwib2Zmc2V0IiwiZmFsbFNwZWVkIiwicGxhdGZvcm1GYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFlLG9GQUFxQixFOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFBZSxxRkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFlLHFGQUFzQixFOzs7Ozs7Ozs7Ozs7QUNBckM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQWUscUZBQXNCLEU7Ozs7Ozs7Ozs7OztBQ0FyQztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQWUsMEZBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0ExQztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLG9GQUFxQixFOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFBZSwrRkFBZ0MsRTs7Ozs7Ozs7Ozs7O0FDQS9DO0FBQWUsbUdBQW9DLEU7Ozs7Ozs7Ozs7OztBQ0FuRDtBQUFlLGdHQUFpQyxFOzs7Ozs7Ozs7Ozs7QUNBaEQ7QUFBZSxvR0FBcUMsRTs7Ozs7Ozs7Ozs7O0FDQXBEO0FBQWUsK0ZBQWdDLEU7Ozs7Ozs7Ozs7OztBQ0EvQztBQUFlLG1HQUFvQyxFOzs7Ozs7Ozs7Ozs7QUNBbkQ7QUFBZSw4RkFBK0IsRTs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQWUsa0dBQW1DLEU7Ozs7Ozs7Ozs7OztBQ0FsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FILFFBQU0sQ0FBQ0ksS0FBUCxHQUFlLEdBQWY7QUFDQUosUUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBR0EsTUFBSUMseURBQUosQ0FBYVAsTUFBYixFQUFxQkUsR0FBckIsRUFBMEJNLE1BQTFCO0FBS0gsQ0FiRCxFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTs7SUFHcUJDLEk7Ozs7O0FBQ2pCLGdCQUFZVCxNQUFaLEVBQW9CRSxHQUFwQixFQUF5QlEsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCTixNQUEvQixFQUF1Q0QsS0FBdkMsRUFBOENRLFFBQTlDLEVBQXdEQyxRQUF4RCxFQUFrRTtBQUFBOztBQUFBOztBQUM5RCw4QkFBTWIsTUFBTixFQUFjRSxHQUFkLEVBQW1CUSxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUJOLE1BQXpCLEVBQWlDRCxLQUFqQztBQUNBLFVBQUtRLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFHQSxVQUFLQyxTQUFMLEdBQWlCLElBQUlDLEtBQUosRUFBakI7QUFOOEQ7QUFPakU7Ozs7V0FFRCxnQkFBT0MsUUFBUCxFQUF3RTtBQUFBLFVBQXZEQyxJQUF1RCx1RUFBaEQsS0FBS1AsQ0FBMkM7QUFBQSxVQUF4Q1EsSUFBd0MsdUVBQWpDLEtBQUtQLENBQTRCO0FBQUEsVUFBekJQLEtBQXlCLHVFQUFqQixFQUFpQjtBQUFBLFVBQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFDcEUsVUFBSSxLQUFLTyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFlBQUlPLFdBQVcsR0FBR0gsUUFBUSxHQUFHLEdBQTdCO0FBQ0EsWUFBSUksZUFBZSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsV0FBVyxHQUFDLEVBQXZCLElBQTZCLENBQW5EO0FBQ0EsYUFBS0wsU0FBTCxDQUFlUyxHQUFmLG9DQUErQ0gsZUFBL0M7QUFFQSxhQUFLbEIsR0FBTCxDQUFTc0IsU0FBVCxDQUFtQixLQUFLVixTQUF4QixFQUFtQ0csSUFBbkMsRUFBeUNDLElBQXpDLEVBQStDZCxLQUEvQyxFQUFzREMsTUFBdEQ7QUFDSCxPQU5ELE1BTU87QUFDSCxhQUFLUyxTQUFMLENBQWVTLEdBQWYsOEJBQXlDLEtBQUtWLFFBQTlDO0FBQ0EsYUFBS1gsR0FBTCxDQUFTc0IsU0FBVCxDQUFtQixLQUFLVixTQUF4QixFQUFtQyxLQUFLSixDQUF4QyxFQUEyQyxLQUFLQyxDQUFoRCxFQUFtRCxLQUFLUCxLQUF4RCxFQUErRCxLQUFLQyxNQUFwRTtBQUNIO0FBRUo7Ozs7RUF0QjZCb0IscUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGxDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkMsSTtBQUNqQixnQkFBWTFCLE1BQVosRUFBb0JFLEdBQXBCLEVBQXlCVyxRQUF6QixFQUFtQ0QsUUFBbkMsRUFBNkNlLElBQTdDLEVBQW1EQyxVQUFuRCxFQUErREMsU0FBL0QsRUFBMEVDLFVBQTFFLEVBQXNGQyxnQkFBdEYsRUFBd0dDLGFBQXhHLEVBQXVIQyxnQkFBdkgsRUFBeUk7QUFBQTs7QUFBQTs7QUFDckksU0FBS2pDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtXLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLZSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFNBQUtsQixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS21CLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLElBQUwsR0FBWSxJQUFJQyxpREFBSixDQUFhLEtBQUt0QyxNQUFsQixFQUEwQixLQUFLRSxHQUEvQixFQUFvQyxRQUFwQyxFQUE2QyxLQUFLVyxRQUFsRCxFQUE0RCxLQUFLRCxRQUFqRSxFQUEyRSxLQUFLZSxJQUFoRixFQUFzRixLQUFLWSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBdEYsRUFBK0csS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBL0csRUFBNEksS0FBS2hDLE1BQUwsQ0FBWWdDLElBQVosQ0FBaUIsSUFBakIsQ0FBNUksRUFBb0ssS0FBS1osVUFBekssRUFBcUwsS0FBS0MsU0FBMUwsRUFBcU0sS0FBS0MsVUFBMU0sRUFBc04sS0FBS0MsZ0JBQTNOLEVBQTZPLEtBQUtDLGFBQWxQLEVBQWlRLEtBQUtELGdCQUF0USxDQUFaO0FBR0EsU0FBSzdCLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzFDLE1BQUwsQ0FBWUksS0FBckMsRUFBNEMsS0FBS0osTUFBTCxDQUFZSyxNQUF4RCxFQW5CcUksQ0FxQnJJOztBQUNBLFNBQUtzQyxTQUFMLEdBQWlCQyxvREFBUyxDQUFDLEtBQUsvQixRQUFMLEdBQWdCLENBQWpCLENBQVQsQ0FBNkIsS0FBS0QsUUFBTCxHQUFnQixDQUE3QyxDQUFqQjtBQUVBLFNBQUtpQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtILFNBQUwsQ0FBZUksT0FBOUI7QUFFQSxTQUFLQyxNQUFMLEdBQWM7QUFDVkMsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FEQTtBQUVWQyxlQUFTLEVBQUUsS0FGRDtBQUdWQyxhQUFPLEVBQUUsS0FIQztBQUlWekMsT0FBQyxFQUFFLEtBQUtpQyxTQUFMLENBQWVTLGNBQWYsQ0FBOEIsQ0FBOUIsQ0FKTztBQUtWekMsT0FBQyxFQUFFLEtBQUtnQyxTQUFMLENBQWVTLGNBQWYsQ0FBOEIsQ0FBOUIsQ0FMTztBQU1WaEQsV0FBSyxFQUFFLEVBTkc7QUFPVkMsWUFBTSxFQUFFLEVBUEU7QUFRVlcsY0FBUSxFQUFFLENBUkE7QUFTVnFDLGVBQVMsRUFBRSxJQVREO0FBVVZDLFlBQU0sRUFBRSxLQVZFO0FBV1ZDLGdCQUFVLEVBQUUsS0FYRjtBQVlWQyxnQkFBVSxFQUFFLEtBWkY7QUFhVkMsY0FBUSxFQUFFLEtBYkE7QUFjVkMsdUJBQWlCLEVBQUU7QUFkVCxLQUFkO0FBaUJBLFNBQUtDLFVBQUwsR0FBa0IsSUFBSUMsS0FBSixDQUFVLHNCQUFWLENBQWxCO0FBQ0EsU0FBS0QsVUFBTCxDQUFnQkUsTUFBaEIsR0FBeUIsR0FBekIsQ0E3Q3FJLENBK0NySTs7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlGLEtBQUosQ0FBVSwwQkFBVixDQUFqQjtBQUNBLFNBQUtFLFNBQUwsQ0FBZUQsTUFBZixHQUF3QixHQUF4QjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsSUFBSUgsS0FBSixDQUFVLHlCQUFWLENBQWhCO0FBQ0EsU0FBS0csUUFBTCxDQUFjRixNQUFkLEdBQXVCLEdBQXZCO0FBRUEsU0FBS0csUUFBTCxHQUFnQixDQUNaLDZCQURZLEVBRVosMEJBRlksQ0FBaEI7QUFLQSxTQUFLQyxZQUFMLEdBQW9CLElBQUlsRCxLQUFKLEVBQXBCO0FBRUEsU0FBS0ksV0FBTCxHQUFtQixDQUFuQjtBQUNBLFNBQUsrQyxZQUFMLEdBQW9CLElBQUluRCxLQUFKLEVBQXBCLENBN0RxSSxDQStEckk7O0FBQ0EsU0FBS29ELElBQUwsR0FBWSxJQUFJMUQsNkNBQUosQ0FBUyxLQUFLVCxNQUFkLEVBQXNCLEtBQUtFLEdBQTNCLEVBQWdDLEtBQUt5QyxTQUFMLENBQWV5QixTQUFmLENBQXlCLENBQXpCLENBQWhDLEVBQTRELEtBQUt6QixTQUFMLENBQWV5QixTQUFmLENBQXlCLENBQXpCLENBQTVELEVBQXdGLEVBQXhGLEVBQTJGLEVBQTNGLEVBQStGLEtBQUt4RCxRQUFwRyxFQUE4RyxLQUFLQyxRQUFuSCxDQUFaLENBaEVxSSxDQWtFckk7O0FBQ0EsU0FBS3dELGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUszQixTQUFMLENBQWUwQixhQUFmLENBQTZCRSxPQUE3QixDQUFxQyxVQUFBQyxZQUFZLEVBQUk7QUFDakQsV0FBSSxDQUFDSCxhQUFMLENBQW1CSSxJQUFuQixDQUF3QixJQUFJaEQscURBQUosQ0FBaUIsS0FBSSxDQUFDekIsTUFBdEIsRUFBOEIsS0FBSSxDQUFDRSxHQUFuQyxFQUF3Q3NFLFlBQVksQ0FBQzlELENBQXJELEVBQXdEOEQsWUFBWSxDQUFDN0QsQ0FBckUsRUFBd0U2RCxZQUFZLENBQUNuRSxNQUFyRixFQUE2Rm1FLFlBQVksQ0FBQ3BFLEtBQTFHLENBQXhCOztBQUNBLFVBQUlvRSxZQUFZLENBQUNFLE1BQWIsQ0FBb0JDLE1BQXBCLEdBQTZCLENBQWpDLEVBQW9DO0FBQ2hDLGFBQUksQ0FBQ0wsTUFBTCxDQUFZRyxJQUFaLENBQWlCLElBQUlHLDBEQUFKLENBQXNCLEtBQUksQ0FBQzVFLE1BQTNCLEVBQW1DLEtBQUksQ0FBQ0UsR0FBeEMsRUFBNkNzRSxZQUFZLENBQUNFLE1BQTFELEVBQWlFRixZQUFZLENBQUM5RCxDQUE5RSxFQUFnRjhELFlBQVksQ0FBQzdELENBQWIsR0FBaUI2RCxZQUFZLENBQUNLLE9BQTlHLEVBQXNITCxZQUFZLENBQUNwRSxLQUFuSSxFQUF5SW9FLFlBQVksQ0FBQ00sU0FBdEosQ0FBakI7QUFDSDtBQUNKLEtBTEQ7QUFPQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCOztBQUNBLFFBQUksS0FBS3BDLFNBQUwsQ0FBZW9DLFNBQW5CLEVBQThCO0FBQzFCLFdBQUtBLFNBQUwsR0FBaUIsSUFBSUMsa0RBQUosQ0FBYyxLQUFLaEYsTUFBbkIsRUFBMkIsS0FBS0UsR0FBaEMsRUFBcUMsS0FBS3lDLFNBQUwsQ0FBZW9DLFNBQXBELEVBQStELEdBQS9ELEVBQW1FLEdBQW5FLENBQWpCO0FBQ0g7O0FBRURFLFVBQU0sQ0FBQ2xGLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUFtRixLQUFLLEVBQUk7QUFDeEMsVUFBSUEsS0FBSyxDQUFDQyxHQUFOLElBQWEsR0FBYixJQUFvQkQsS0FBSyxDQUFDQyxHQUFOLElBQWEsWUFBckMsRUFBbUQ7QUFDL0MsYUFBSSxDQUFDbkMsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLElBQTBCLEtBQUksQ0FBQ0osVUFBL0I7QUFDQSxhQUFJLENBQUNHLE1BQUwsQ0FBWU0sTUFBWixHQUFxQixJQUFyQjtBQUNBLGFBQUksQ0FBQ04sTUFBTCxDQUFZSyxTQUFaLEdBQXdCLElBQXhCO0FBQ0gsT0FKRCxNQUlPLElBQUk2QixLQUFLLENBQUNDLEdBQU4sSUFBYSxHQUFiLElBQW9CRCxLQUFLLENBQUNDLEdBQU4sSUFBYSxXQUFyQyxFQUFrRDtBQUNyRCxhQUFJLENBQUNuQyxNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsSUFBMEIsQ0FBQyxLQUFJLENBQUNKLFVBQWhDO0FBQ0EsYUFBSSxDQUFDRyxNQUFMLENBQVlNLE1BQVosR0FBcUIsSUFBckI7QUFDQSxhQUFJLENBQUNOLE1BQUwsQ0FBWUssU0FBWixHQUF3QixLQUF4QjtBQUNILE9BSk0sTUFJQSxJQUFJNkIsS0FBSyxDQUFDQyxHQUFOLElBQWEsR0FBYixJQUFvQixLQUFJLENBQUNuQyxNQUFMLENBQVlTLFFBQWhDLElBQTRDLENBQUMsS0FBSSxDQUFDVCxNQUFMLENBQVlFLFNBQTdELEVBQXlFO0FBQzVFLFlBQUksQ0FBQyxLQUFJLENBQUNsQixhQUFMLEVBQUwsRUFBMkIsS0FBSSxDQUFDOEIsU0FBTCxDQUFlc0IsSUFBZjtBQUMzQixhQUFJLENBQUNwQyxNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsS0FBMkIsQ0FBM0I7QUFDQSxhQUFJLENBQUNELE1BQUwsQ0FBWUUsU0FBWixHQUF3QixJQUF4QjtBQUNBLGFBQUksQ0FBQ0YsTUFBTCxDQUFZUyxRQUFaLEdBQXVCLEtBQXZCO0FBQ0E0QixrQkFBVSxDQUFDLFlBQU07QUFDYixlQUFJLENBQUNyQyxNQUFMLENBQVlFLFNBQVosR0FBd0IsS0FBeEI7QUFDSCxTQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0gsT0FSTSxNQVFBLElBQUlnQyxLQUFLLENBQUNDLEdBQU4sSUFBYSxRQUFqQixFQUEyQjtBQUM5QixhQUFJLENBQUN4QixVQUFMLENBQWdCMkIsS0FBaEI7O0FBQ0EsYUFBSSxDQUFDM0IsVUFBTCxDQUFnQjRCLFdBQWhCLEdBQThCLENBQTlCO0FBQ0EsWUFBSSxDQUFDLEtBQUksQ0FBQ3ZELGFBQUwsRUFBTCxFQUEyQixLQUFJLENBQUMyQixVQUFMLENBQWdCeUIsSUFBaEI7O0FBQzNCLGFBQUksQ0FBQzNDLFdBQUw7QUFDSDtBQUNKLEtBdkJEO0FBd0JBd0MsVUFBTSxDQUFDbEYsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQW1GLEtBQUssRUFBSTtBQUN0QyxVQUFJQSxLQUFLLENBQUNDLEdBQU4sSUFBYSxHQUFiLElBQW9CRCxLQUFLLENBQUNDLEdBQU4sSUFBYSxZQUFyQyxFQUFtRDtBQUMvQyxhQUFJLENBQUNuQyxNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsSUFBMEIsQ0FBMUI7QUFDQSxhQUFJLENBQUNELE1BQUwsQ0FBWU0sTUFBWixHQUFxQixLQUFyQjtBQUNILE9BSEQsTUFHTyxJQUFJNEIsS0FBSyxDQUFDQyxHQUFOLElBQWEsR0FBYixJQUFvQkQsS0FBSyxDQUFDQyxHQUFOLElBQWEsV0FBckMsRUFBa0Q7QUFDckQsYUFBSSxDQUFDbkMsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLElBQTBCLENBQTFCO0FBQ0EsYUFBSSxDQUFDRCxNQUFMLENBQVlNLE1BQVosR0FBcUIsS0FBckI7QUFDSCxPQUhNLE1BR0EsSUFBSTRCLEtBQUssQ0FBQ0MsR0FBTixJQUFhLEdBQWpCLEVBQXNCO0FBQ3pCLGFBQUksQ0FBQ25DLE1BQUwsQ0FBWUUsU0FBWixHQUF3QixLQUF4QjtBQUNIO0FBQ0osS0FWRDs7QUFXQSxTQUFLc0MsWUFBTCxHQUFvQixVQUFBTixLQUFLLEVBQUk7QUFDekIsVUFBSU8sU0FBUyxHQUFHLEtBQUksQ0FBQ3pGLE1BQUwsQ0FBWTBGLHFCQUFaLEVBQWhCOztBQUNBLFVBQUlDLE1BQU0sR0FBR1QsS0FBSyxDQUFDeEUsQ0FBTixHQUFVK0UsU0FBUyxDQUFDRyxJQUFqQztBQUNBLFVBQUlDLE1BQU0sR0FBR1gsS0FBSyxDQUFDdkUsQ0FBTixHQUFVOEUsU0FBUyxDQUFDSyxHQUFqQzs7QUFFQSxVQUFJSCxNQUFNLEdBQUcsQ0FBVCxJQUFjQSxNQUFNLEdBQUcsR0FBdkIsSUFBOEJFLE1BQU0sR0FBRyxDQUF2QyxJQUE0Q0EsTUFBTSxHQUFHLEVBQXpELEVBQTZEO0FBQ3pELGFBQUksQ0FBQzNELFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFJLENBQUNBLFlBQUwsR0FBb0IsS0FBcEI7QUFDSDtBQUNKLEtBVkQ7O0FBV0EsU0FBS2xDLE1BQUwsQ0FBWUQsZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS3lGLFlBQS9DO0FBQ0g7Ozs7V0FFRCxpQkFBUU8sT0FBUixFQUFpQjtBQUNiLFdBQUtwRSxJQUFMLEdBQVlvRSxPQUFaO0FBQ0g7OztXQUVELGlCQUFRbEYsUUFBUixFQUFrQkQsUUFBbEIsRUFBNEJlLElBQTVCLEVBQWtDO0FBQUE7O0FBQzlCLFdBQUtkLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsV0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxXQUFLZSxJQUFMLEdBQVlBLElBQVo7QUFFQSxXQUFLWCxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsV0FBS21CLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUVBLFdBQUtsQyxHQUFMLENBQVN3QyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUsxQyxNQUFMLENBQVlJLEtBQXJDLEVBQTRDLEtBQUtKLE1BQUwsQ0FBWUssTUFBeEQsRUFUOEIsQ0FXOUI7O0FBQ0EsV0FBS3NDLFNBQUwsR0FBaUJDLG9EQUFTLENBQUMsS0FBSy9CLFFBQUwsR0FBZ0IsQ0FBakIsQ0FBVCxDQUE2QixLQUFLRCxRQUFMLEdBQWdCLENBQTdDLENBQWpCO0FBRUEsV0FBS2lDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsS0FBS0gsU0FBTCxDQUFlSSxPQUE5QjtBQUVBLFdBQUtDLE1BQUwsR0FBYztBQUNWQyxnQkFBUSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FEQTtBQUVWQyxpQkFBUyxFQUFFLEtBRkQ7QUFHVkMsZUFBTyxFQUFFLEtBSEM7QUFJVnpDLFNBQUMsRUFBRSxLQUFLaUMsU0FBTCxDQUFlUyxjQUFmLENBQThCLENBQTlCLENBSk87QUFLVnpDLFNBQUMsRUFBRSxLQUFLZ0MsU0FBTCxDQUFlUyxjQUFmLENBQThCLENBQTlCLENBTE87QUFNVmhELGFBQUssRUFBRSxFQU5HO0FBT1ZDLGNBQU0sRUFBRSxFQVBFO0FBUVZXLGdCQUFRLEVBQUUsQ0FSQTtBQVNWcUMsaUJBQVMsRUFBRSxJQVREO0FBVVZDLGNBQU0sRUFBRSxLQVZFO0FBV1ZDLGtCQUFVLEVBQUUsS0FYRjtBQVlWQyxrQkFBVSxFQUFFLEtBWkY7QUFhVkMsZ0JBQVEsRUFBRSxLQWJBO0FBY1ZDLHlCQUFpQixFQUFFO0FBZFQsT0FBZDtBQWlCQSxXQUFLdkMsV0FBTCxHQUFtQixDQUFuQixDQWxDOEIsQ0FvQzlCOztBQUNBLFdBQUtnRCxJQUFMLEdBQVksSUFBSTFELDZDQUFKLENBQVMsS0FBS1QsTUFBZCxFQUFzQixLQUFLRSxHQUEzQixFQUFnQyxLQUFLeUMsU0FBTCxDQUFleUIsU0FBZixDQUF5QixDQUF6QixDQUFoQyxFQUE0RCxLQUFLekIsU0FBTCxDQUFleUIsU0FBZixDQUF5QixDQUF6QixDQUE1RCxFQUF3RixFQUF4RixFQUEyRixFQUEzRixFQUErRixLQUFLeEQsUUFBcEcsRUFBOEcsS0FBS0MsUUFBbkgsQ0FBWixDQXJDOEIsQ0F1QzlCOztBQUNBLFdBQUt3RCxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxXQUFLM0IsU0FBTCxDQUFlMEIsYUFBZixDQUE2QkUsT0FBN0IsQ0FBcUMsVUFBQUMsWUFBWSxFQUFJO0FBQ2pELFlBQUlBLFlBQVksQ0FBQ3dCLElBQWpCLEVBQXVCO0FBQ25CLGdCQUFJLENBQUMzQixhQUFMLENBQW1CSSxJQUFuQixDQUF3QixJQUFJd0IscURBQUosQ0FBaUIsTUFBSSxDQUFDakcsTUFBdEIsRUFBOEIsTUFBSSxDQUFDRSxHQUFuQyxFQUF3Q3NFLFlBQVksQ0FBQzlELENBQXJELEVBQXdEOEQsWUFBWSxDQUFDN0QsQ0FBckUsRUFBd0U2RCxZQUFZLENBQUNuRSxNQUFyRixFQUE2Rm1FLFlBQVksQ0FBQ3BFLEtBQTFHLEVBQWlIb0UsWUFBWSxDQUFDMEIsUUFBOUgsRUFBd0kxQixZQUFZLENBQUNFLE1BQXJKLEVBQTZKLE1BQUksQ0FBQzVCLE9BQWxLLENBQXhCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUksQ0FBQ3VCLGFBQUwsQ0FBbUJJLElBQW5CLENBQXdCLElBQUloRCxxREFBSixDQUFpQixNQUFJLENBQUN6QixNQUF0QixFQUE4QixNQUFJLENBQUNFLEdBQW5DLEVBQXdDc0UsWUFBWSxDQUFDOUQsQ0FBckQsRUFBd0Q4RCxZQUFZLENBQUM3RCxDQUFyRSxFQUF3RTZELFlBQVksQ0FBQ25FLE1BQXJGLEVBQTZGbUUsWUFBWSxDQUFDcEUsS0FBMUcsQ0FBeEI7O0FBQ0EsY0FBSW9FLFlBQVksQ0FBQ0UsTUFBYixDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDaEMsa0JBQUksQ0FBQ0wsTUFBTCxDQUFZRyxJQUFaLENBQWlCLElBQUlHLDBEQUFKLENBQXNCLE1BQUksQ0FBQzVFLE1BQTNCLEVBQW1DLE1BQUksQ0FBQ0UsR0FBeEMsRUFBNkNzRSxZQUFZLENBQUNFLE1BQTFELEVBQWlFRixZQUFZLENBQUM5RCxDQUE5RSxFQUFnRjhELFlBQVksQ0FBQzdELENBQWIsR0FBaUI2RCxZQUFZLENBQUNLLE9BQTlHLEVBQXNITCxZQUFZLENBQUNwRSxLQUFuSSxFQUF5SW9FLFlBQVksQ0FBQ00sU0FBdEosQ0FBakI7QUFDSDtBQUNKO0FBR0osT0FYRDtBQWFBLFdBQUtDLFNBQUwsR0FBaUIsRUFBakI7O0FBQ0EsVUFBSSxLQUFLcEMsU0FBTCxDQUFlb0MsU0FBbkIsRUFBOEI7QUFDMUIsYUFBS0EsU0FBTCxHQUFpQixJQUFJQyxrREFBSixDQUFjLEtBQUtoRixNQUFuQixFQUEyQixLQUFLRSxHQUFoQyxFQUFxQyxLQUFLeUMsU0FBTCxDQUFlb0MsU0FBcEQsRUFBK0QsR0FBL0QsRUFBbUUsR0FBbkUsQ0FBakI7QUFDSDtBQUNKOzs7V0FHRCx1QkFBYTtBQUNULFdBQUszQyxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjs7QUFFQSxVQUFJLEtBQUtBLE1BQUwsSUFBZSxLQUFuQixFQUEwQjtBQUN0QixhQUFLNUIsTUFBTCxDQUFZLElBQVo7QUFDSDtBQUNKOzs7V0FFRCxvQkFBVzJGLEdBQVgsRUFBZ0J6RixDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JQLEtBQXRCLEVBQTZCQyxNQUE3QixFQUFxQztBQUNqQyxXQUFLSCxHQUFMLENBQVNzQixTQUFULENBQW1CMkUsR0FBbkIsRUFBd0J6RixDQUF4QixFQUEyQkMsQ0FBM0IsRUFBOEJQLEtBQTlCLEVBQXFDQyxNQUFyQztBQUNIOzs7V0FFRCwrQkFBc0I7QUFDbEIsVUFBSStGLFVBQVUsR0FBR25CLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLFdBQStCLEtBQUt6RixRQUFwQyxjQUFnRCxLQUFLRCxRQUFyRCxrQkFBakI7O0FBQ0EsVUFBSXdGLFVBQVUsSUFBSSxJQUFsQixFQUF3QjtBQUNwQm5CLGNBQU0sQ0FBQ29CLFlBQVAsQ0FBb0JFLE9BQXBCLFdBQStCLEtBQUsxRixRQUFwQyxjQUFnRCxLQUFLRCxRQUFyRCxtQkFBNkUsQ0FBN0U7QUFDSCxPQUZELE1BRU87QUFDSHFFLGNBQU0sQ0FBQ29CLFlBQVAsQ0FBb0JFLE9BQXBCLFdBQStCLEtBQUsxRixRQUFwQyxjQUFnRCxLQUFLRCxRQUFyRCxtQkFBNkU0RixRQUFRLENBQUNKLFVBQUQsQ0FBUixHQUF1QixDQUFwRztBQUNIO0FBQ0o7OztXQUVELHlCQUFnQjtBQUNaLFVBQUlLLE9BQU8sR0FBR3hCLE1BQU0sQ0FBQ29CLFlBQVAsQ0FBb0JDLE9BQXBCLFdBQStCLEtBQUt6RixRQUFwQyxjQUFnRCxLQUFLRCxRQUFyRCxnQkFBZDtBQUNBOEYsYUFBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3hFLFNBQWpCOztBQUNBLFVBQUlzRSxPQUFPLElBQUksSUFBZixFQUFxQjtBQUNqQnhCLGNBQU0sQ0FBQ29CLFlBQVAsQ0FBb0JFLE9BQXBCLFdBQStCLEtBQUsxRixRQUFwQyxjQUFnRCxLQUFLRCxRQUFyRCxpQkFBMkUsS0FBS3VCLFNBQWhGO0FBQ0EsZUFBTyxJQUFQO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsWUFBSSxLQUFLQSxTQUFMLEdBQWlCc0UsT0FBckIsRUFBOEI7QUFDMUJ4QixnQkFBTSxDQUFDb0IsWUFBUCxDQUFvQkUsT0FBcEIsV0FBK0IsS0FBSzFGLFFBQXBDLGNBQWdELEtBQUtELFFBQXJELGlCQUEyRSxLQUFLdUIsU0FBaEY7QUFDQSxpQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLEtBQVA7QUFDSDs7O1dBRUQsa0JBQVN5RSxRQUFULEVBQW1CO0FBQ2YsV0FBS3ZDLGFBQUwsR0FBcUIsRUFBckI7QUFDQXdDLG1CQUFhLENBQUNELFFBQUQsQ0FBYjtBQUVBLFdBQUtFLG1CQUFMO0FBR0EsV0FBS3pFLElBQUwsQ0FBVTBFLFdBQVYsQ0FBc0IsUUFBdEIsRUFBK0IsS0FBS2xHLFFBQXBDLEVBQThDLEtBQUtELFFBQW5EO0FBQ0EsV0FBS3lCLElBQUwsQ0FBVTJFLElBQVY7QUFDSDs7O1dBRUQsdUJBQWNKLFFBQWQsRUFBd0I7QUFDcEI7QUFDQSxVQUFJSCxPQUFPLEdBQUd4QixNQUFNLENBQUNvQixZQUFQLENBQW9CQyxPQUFwQixDQUE0QixpQkFBNUIsQ0FBZDs7QUFDQSxVQUFJRyxPQUFKLEVBQWE7QUFDVHhCLGNBQU0sQ0FBQ29CLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCLGlCQUE1QixFQUErQ0MsUUFBUSxDQUFDQyxPQUFELENBQVIsR0FBb0IsQ0FBbkU7QUFDSCxPQUZELE1BRU87QUFDSHhCLGNBQU0sQ0FBQ29CLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCLGlCQUE1QixFQUErQyxDQUEvQztBQUNILE9BUG1CLENBU3BCOzs7QUFDQSxVQUFJLEtBQUszRixRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGFBQUtxRyxlQUFMLENBQXFCTCxRQUFyQjtBQUVILE9BSEQsTUFHTztBQUNILGFBQUt2QyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0F3QyxxQkFBYSxDQUFDRCxRQUFELENBQWI7QUFDQSxZQUFJTSxPQUFPLEdBQUcsS0FBS0MsYUFBTCxFQUFkO0FBQ0EsYUFBSzlFLElBQUwsQ0FBVTBFLFdBQVYsQ0FBc0IsVUFBdEIsRUFBaUMsS0FBS2xHLFFBQXRDLEVBQWdELEtBQUtELFFBQXJELEVBQStEc0csT0FBL0QsRUFBd0UsS0FBSy9FLFNBQTdFO0FBQ0EsYUFBS0UsSUFBTCxDQUFVMkUsSUFBVjtBQUNIO0FBR0o7OztXQUVELG1CQUFVSixRQUFWLEVBQW9CO0FBQ2hCQyxtQkFBYSxDQUFDRCxRQUFELENBQWI7QUFDQSxXQUFLdkUsSUFBTCxDQUFVMEUsV0FBVixDQUFzQixPQUF0QixFQUE4QixLQUFLbEcsUUFBbkMsRUFBNkMsS0FBS0QsUUFBbEQ7QUFDQSxXQUFLeUIsSUFBTCxDQUFVMkUsSUFBVjtBQUNIOzs7V0FFRCxrQkFBb0I7QUFBQTs7QUFBQSxVQUFiSSxJQUFhLHVFQUFOLEtBQU07O0FBQ2hCLFVBQUksS0FBS3JDLFNBQUwsSUFBa0IsRUFBbEIsSUFBd0IsQ0FBQ3FDLElBQTdCLEVBQW1DO0FBQy9CLGFBQUtyQyxTQUFMLENBQWVpQyxJQUFmO0FBQ0g7O0FBQ0QsV0FBS2hILE1BQUwsQ0FBWXFILEtBQVosQ0FBa0JDLGVBQWxCLGlCQUEyQyxLQUFLdEQsUUFBTCxDQUFjLEtBQUtuRCxRQUFMLEdBQWdCLENBQTlCLENBQTNDO0FBQ0EsVUFBTStGLFFBQVEsR0FBR1csV0FBVyxDQUFDLFlBQU07QUFDL0IsWUFBSSxNQUFJLENBQUNuRixNQUFULEVBQWlCO0FBQ2IsZ0JBQUksQ0FBQ29GLFNBQUwsQ0FBZVosUUFBZjtBQUNIOztBQUNELGNBQUksQ0FBQzFHLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsTUFBSSxDQUFDMUMsTUFBTCxDQUFZSSxLQUFyQyxFQUE0QyxNQUFJLENBQUNKLE1BQUwsQ0FBWUssTUFBeEQ7O0FBQ0EsY0FBSSxDQUFDSCxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFlBQXJCOztBQUVBLFlBQUksTUFBSSxDQUFDekUsTUFBTCxDQUFZckMsQ0FBWixHQUFnQixHQUFoQixJQUF1QixNQUFJLENBQUN3QixTQUFMLElBQWtCLEVBQTdDLEVBQWlEO0FBQzdDLGdCQUFJLENBQUN1RixRQUFMLENBQWNkLFFBQWQ7QUFDSCxTQVQ4QixDQVcvQjs7O0FBQ0EsY0FBSSxDQUFDekMsSUFBTCxDQUFVM0QsTUFBVixDQUFpQixNQUFJLENBQUNRLFFBQXRCLEVBWitCLENBYy9COzs7QUFDQSxjQUFJLENBQUNzRCxNQUFMLENBQVlDLE9BQVosQ0FBb0IsVUFBQW9ELEtBQUssRUFBSTtBQUN6QkEsZUFBSyxDQUFDbkgsTUFBTjtBQUNILFNBRkQsRUFmK0IsQ0FtQi9COzs7QUFDQSxjQUFJLENBQUNvSCxVQUFMLENBQWdCLE1BQUksQ0FBQzNELFlBQXJCLEVBQW1DLE1BQUksQ0FBQ2pCLE1BQUwsQ0FBWXRDLENBQS9DLEVBQWtELE1BQUksQ0FBQ3NDLE1BQUwsQ0FBWXJDLENBQTlELEVBQWlFLE1BQUksQ0FBQ3FDLE1BQUwsQ0FBWTVDLEtBQTdFLEVBQW9GLE1BQUksQ0FBQzRDLE1BQUwsQ0FBWTNDLE1BQWhHLEVBcEIrQixDQXVCL0I7OztBQUNBLFlBQUksTUFBSSxDQUFDMkMsTUFBTCxDQUFZTSxNQUFoQixFQUF3QjtBQUNwQixjQUFJLE1BQUksQ0FBQ04sTUFBTCxDQUFZUyxRQUFoQixFQUEwQjtBQUN0QixnQkFBSSxDQUFDLE1BQUksQ0FBQ3pCLGFBQUwsRUFBTCxFQUEyQixNQUFJLENBQUMrQixRQUFMLENBQWNxQixJQUFkO0FBQzNCLGdCQUFJeUMsU0FBUyxHQUFHeEcsSUFBSSxDQUFDQyxLQUFMLENBQVcsTUFBSSxDQUFDMEIsTUFBTCxDQUFZaEMsUUFBWixHQUF1QixFQUFsQyxDQUFoQjs7QUFDQSxnQkFBSSxNQUFJLENBQUNnQyxNQUFMLENBQVlLLFNBQWhCLEVBQTJCO0FBQ3ZCLGtCQUFJd0UsU0FBUyxJQUFJLENBQWIsSUFBa0JBLFNBQVMsSUFBSSxDQUFuQyxFQUFzQztBQUNsQyxzQkFBSSxDQUFDNUQsWUFBTCxDQUFrQjFDLEdBQWxCLEdBQXdCLGdDQUF4QjtBQUNILGVBRkQsTUFFTyxJQUFJc0csU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ3ZCLHNCQUFJLENBQUM1RCxZQUFMLENBQWtCMUMsR0FBbEIsR0FBd0IsZ0NBQXhCO0FBQ0gsZUFGTSxNQUVBLElBQUlzRyxTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDdkIsc0JBQUksQ0FBQzVELFlBQUwsQ0FBa0IxQyxHQUFsQixHQUF3QixnQ0FBeEI7QUFDSDtBQUNKLGFBUkQsTUFRTztBQUNILGtCQUFJc0csU0FBUyxJQUFJLENBQWIsSUFBa0JBLFNBQVMsSUFBSSxDQUFuQyxFQUFzQztBQUNsQyxzQkFBSSxDQUFDNUQsWUFBTCxDQUFrQjFDLEdBQWxCLEdBQXdCLCtCQUF4QjtBQUNILGVBRkQsTUFFTyxJQUFJc0csU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ3ZCLHNCQUFJLENBQUM1RCxZQUFMLENBQWtCMUMsR0FBbEIsR0FBd0IsK0JBQXhCO0FBQ0gsZUFGTSxNQUVBLElBQUlzRyxTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDdkIsc0JBQUksQ0FBQzVELFlBQUwsQ0FBa0IxQyxHQUFsQixHQUF3QiwrQkFBeEI7QUFDSDtBQUNKO0FBQ0osV0FwQkQsTUFvQk87QUFDSCxnQkFBSSxNQUFJLENBQUN5QixNQUFMLENBQVlLLFNBQWhCLEVBQTJCO0FBQ3ZCLG9CQUFJLENBQUNZLFlBQUwsQ0FBa0IxQyxHQUFsQixHQUF3QixnQ0FBeEI7QUFDSCxhQUZELE1BRU87QUFDSCxvQkFBSSxDQUFDMEMsWUFBTCxDQUFrQjFDLEdBQWxCLEdBQXdCLCtCQUF4QjtBQUNIO0FBQ0o7QUFDSixTQTVCRCxNQTRCTztBQUNILGNBQUksTUFBSSxDQUFDUCxRQUFMLEdBQWdCLEVBQWhCLEdBQXFCLEVBQXpCLEVBQTZCO0FBQ3pCLGtCQUFJLENBQUNpRCxZQUFMLENBQWtCMUMsR0FBbEIsR0FBd0IsMkJBQXhCO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsa0JBQUksQ0FBQzBDLFlBQUwsQ0FBa0IxQyxHQUFsQixHQUF3Qiw0QkFBeEI7QUFDSDtBQUVKLFNBM0Q4QixDQStEL0I7OztBQUNBLGNBQUksQ0FBQ3lCLE1BQUwsQ0FBWU8sVUFBWixHQUF5QixLQUF6QjtBQUNBLGNBQUksQ0FBQ1AsTUFBTCxDQUFZUSxVQUFaLEdBQXlCLEtBQXpCO0FBQ0EsY0FBSSxDQUFDUixNQUFMLENBQVlTLFFBQVosR0FBdUIsS0FBdkI7O0FBQ0EsY0FBSSxDQUFDWSxhQUFMLENBQW1CRSxPQUFuQixDQUEyQixVQUFBQyxZQUFZLEVBQUk7QUFDdkNBLHNCQUFZLENBQUNoRSxNQUFiOztBQUNBLGNBQUlnRSxZQUFZLENBQUNzRCxZQUFiLENBQTBCLE1BQUksQ0FBQzlFLE1BQUwsQ0FBWXRDLENBQVosR0FBZ0IsTUFBSSxDQUFDc0MsTUFBTCxDQUFZNUMsS0FBWixHQUFrQixDQUFsQyxHQUFzQyxNQUFJLENBQUM0QyxNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsQ0FBaEUsRUFBeUYsTUFBSSxDQUFDRCxNQUFMLENBQVlyQyxDQUFaLEdBQWdCLE1BQUksQ0FBQ3FDLE1BQUwsQ0FBWTNDLE1BQVosR0FBbUIsQ0FBbkMsR0FBdUMsTUFBSSxDQUFDMkMsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLENBQWhJLENBQUosRUFBOEo7QUFDMUosa0JBQUksQ0FBQ0QsTUFBTCxDQUFZTyxVQUFaLEdBQXlCLElBQXpCO0FBQ0g7O0FBRUQsY0FBSWlCLFlBQVksQ0FBQ3VELFlBQWIsQ0FBMEIsTUFBSSxDQUFDL0UsTUFBTCxDQUFZdEMsQ0FBWixHQUFnQixNQUFJLENBQUNzQyxNQUFMLENBQVk1QyxLQUFaLEdBQWtCLENBQWxDLEdBQXNDLE1BQUksQ0FBQzRDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixDQUFyQixDQUFoRSxFQUF5RixNQUFJLENBQUNELE1BQUwsQ0FBWXJDLENBQVosR0FBZ0IsTUFBSSxDQUFDcUMsTUFBTCxDQUFZM0MsTUFBWixHQUFtQixDQUFuQyxHQUF1QyxNQUFJLENBQUMyQyxNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsQ0FBaEksQ0FBSixFQUE4SjtBQUMxSixnQkFBSXVCLFlBQVksQ0FBQ3dELElBQWIsSUFBcUIsQ0FBQ3hELFlBQVksQ0FBQ3lELFNBQXZDLEVBQWtEO0FBQzlDekQsMEJBQVksQ0FBQ3dELElBQWI7QUFDQXRCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0g7O0FBQ0Qsa0JBQUksQ0FBQzNELE1BQUwsQ0FBWVEsVUFBWixHQUF5QixJQUF6QjtBQUNBLGtCQUFJLENBQUNSLE1BQUwsQ0FBWVMsUUFBWixHQUF1QixJQUF2QjtBQUNBLGtCQUFJLENBQUNULE1BQUwsQ0FBWVUsaUJBQVosR0FBZ0NjLFlBQVksQ0FBQzdELENBQTdDO0FBRUg7QUFDSixTQWhCRCxFQW5FK0IsQ0FxRi9COzs7QUFDQSxZQUFJLE1BQUksQ0FBQ3dELElBQUwsQ0FBVTJELFlBQVYsQ0FBdUIsTUFBSSxDQUFDOUUsTUFBTCxDQUFZdEMsQ0FBWixHQUFnQixNQUFJLENBQUNzQyxNQUFMLENBQVk1QyxLQUFaLEdBQWtCLENBQWxDLEdBQXNDLE1BQUksQ0FBQzRDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixDQUFyQixDQUE3RCxFQUFzRixNQUFJLENBQUNELE1BQUwsQ0FBWXJDLENBQVosR0FBZ0IsTUFBSSxDQUFDcUMsTUFBTCxDQUFZM0MsTUFBWixHQUFtQixDQUFuQyxHQUF1QyxNQUFJLENBQUMyQyxNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsQ0FBN0gsS0FDQSxNQUFJLENBQUNrQixJQUFMLENBQVU0RCxZQUFWLENBQXVCLE1BQUksQ0FBQy9FLE1BQUwsQ0FBWXRDLENBQVosR0FBZ0IsTUFBSSxDQUFDc0MsTUFBTCxDQUFZNUMsS0FBWixHQUFrQixDQUFsQyxHQUFzQyxNQUFJLENBQUM0QyxNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsQ0FBN0QsRUFBc0YsTUFBSSxDQUFDRCxNQUFMLENBQVlyQyxDQUFaLEdBQWdCLE1BQUksQ0FBQ3FDLE1BQUwsQ0FBWTNDLE1BQVosR0FBbUIsQ0FBbkMsR0FBdUMsTUFBSSxDQUFDMkMsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLENBQTdILENBREosRUFDMko7QUFFbkosZ0JBQUksQ0FBQ2lGLGFBQUwsQ0FBbUJ0QixRQUFuQjtBQUNQLFNBMUY4QixDQTRGL0I7OztBQUNBLFlBQUksQ0FBQyxNQUFJLENBQUM1RCxNQUFMLENBQVlPLFVBQWpCLEVBQTZCO0FBQ3pCLGdCQUFJLENBQUNQLE1BQUwsQ0FBWXRDLENBQVosSUFBaUIsTUFBSSxDQUFDc0MsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLENBQWpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUksQ0FBQ0QsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLElBQTBCLENBQTFCO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDLE1BQUksQ0FBQ0QsTUFBTCxDQUFZUSxVQUFqQixFQUE2QjtBQUN6QixnQkFBSSxDQUFDUixNQUFMLENBQVlDLFFBQVosQ0FBcUIsQ0FBckIsS0FBMkIsTUFBSSxDQUFDSCxPQUFoQztBQUNBLGdCQUFJLENBQUNFLE1BQUwsQ0FBWXJDLENBQVosSUFBaUIsTUFBSSxDQUFDcUMsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLENBQWpCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsZ0JBQUksQ0FBQ0QsTUFBTCxDQUFZckMsQ0FBWixHQUFnQixNQUFJLENBQUNxQyxNQUFMLENBQVlVLGlCQUFaLEdBQWdDLEVBQWhEO0FBQ0EsZ0JBQUksQ0FBQ1YsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLElBQTBCLENBQTFCO0FBQ0g7O0FBRUQsWUFBSSxNQUFJLENBQUNELE1BQUwsQ0FBWUUsU0FBaEIsRUFBMkI7QUFDdkIsZ0JBQUksQ0FBQ0YsTUFBTCxDQUFZQyxRQUFaLENBQXFCLENBQXJCLEtBQTJCLE1BQUksQ0FBQ0gsT0FBaEM7QUFDQSxnQkFBSSxDQUFDRSxNQUFMLENBQVlyQyxDQUFaLElBQWlCLE1BQUksQ0FBQ3FDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixDQUFyQixDQUFqQjtBQUNIOztBQUlELGNBQUksQ0FBQy9DLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxjQUFJLENBQUN2SCxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQixDQWxIK0IsQ0FvSC9COztBQUNBLGNBQUksQ0FBQ2pJLEdBQUwsQ0FBU2tJLFFBQVQsV0FBcUIsTUFBSSxDQUFDdkgsUUFBMUIsY0FBc0MsTUFBSSxDQUFDRCxRQUEzQyxHQUF1RCxHQUF2RCxFQUE0RCxFQUE1RCxFQXJIK0IsQ0F1SC9COzs7QUFDQSxjQUFJLENBQUN1QixTQUFMOztBQUNBLGNBQUksQ0FBQ2pDLEdBQUwsQ0FBU2tJLFFBQVQsQ0FBa0IvRyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxNQUFJLENBQUNhLFNBQUwsR0FBZSxHQUExQixFQUErQmtHLFFBQS9CLEVBQWxCLEVBQTZELEdBQTdELEVBQWtFLEVBQWxFLEVBekgrQixDQTJIL0I7OztBQUNBLGNBQUksQ0FBQ25JLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxjQUFJLENBQUN2SCxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQjs7QUFDQSxjQUFJLENBQUNqSSxHQUFMLENBQVNrSSxRQUFULENBQWtCLFVBQWxCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDOztBQUNBLFlBQUksTUFBSSxDQUFDbEcsWUFBVCxFQUF1QjtBQUNuQixnQkFBSSxDQUFDaEMsR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixpQkFBckI7O0FBQ0EsZ0JBQUksQ0FBQ3ZILEdBQUwsQ0FBU29JLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsTUFBSSxDQUFDdEksTUFBTCxDQUFZSSxLQUFsQyxFQUF5QyxNQUFJLENBQUNKLE1BQUwsQ0FBWUssTUFBckQ7O0FBRUEsZ0JBQUksQ0FBQ0gsR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUNBLGdCQUFJLENBQUN2SCxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQjs7QUFDQSxnQkFBSSxDQUFDakksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixhQUFsQixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0Qzs7QUFDQSxnQkFBSSxDQUFDbEksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixjQUFsQixFQUFrQyxHQUFsQyxFQUF1QyxHQUF2Qzs7QUFDQSxnQkFBSSxDQUFDbEksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixhQUFsQixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0Qzs7QUFDQSxnQkFBSSxDQUFDbEksR0FBTCxDQUFTaUksSUFBVCxHQUFnQix1QkFBaEI7O0FBQ0EsZ0JBQUksQ0FBQ2pJLEdBQUwsQ0FBU2tJLFFBQVQsQ0FBa0IsdURBQWxCLEVBQTJFLEVBQTNFLEVBQStFLEdBQS9FOztBQUNBLGdCQUFJLENBQUNsSSxHQUFMLENBQVNrSSxRQUFULENBQWtCLG9EQUFsQixFQUF3RSxHQUF4RSxFQUE2RSxHQUE3RTtBQUNIOztBQUVELGNBQUksQ0FBQ3BGLE1BQUwsQ0FBWWhDLFFBQVosR0FBdUIsQ0FBQyxNQUFJLENBQUNnQyxNQUFMLENBQVloQyxRQUFaLEdBQXVCLENBQXhCLElBQTZCLEVBQXBEO0FBQ0EsY0FBSSxDQUFDRyxXQUFMLEdBQW1CLENBQUMsTUFBSSxDQUFDQSxXQUFMLEdBQW1CLENBQXBCLElBQXlCLEVBQTVDO0FBRUEsY0FBSSxDQUFDSCxRQUFMO0FBQ0gsT0FqSjJCLEVBaUp6QixFQWpKeUIsQ0FBNUI7QUFxSkgsSyxDQUVEOzs7O1dBRUEseUJBQWdCNEYsUUFBaEIsRUFBMEI7QUFBQTs7QUFDdEJDLG1CQUFhLENBQUNELFFBQUQsQ0FBYjtBQUNBdkIsZ0JBQVUsQ0FBRSxZQUFNO0FBQ2QsY0FBSSxDQUFDaEIsYUFBTCxHQUFxQixFQUFyQjtBQUNBd0MscUJBQWEsQ0FBQzBCLFdBQUQsQ0FBYjs7QUFDQSxZQUFJckIsT0FBTyxHQUFHLE1BQUksQ0FBQ0MsYUFBTCxFQUFkOztBQUNBLGNBQUksQ0FBQzlFLElBQUwsQ0FBVTBFLFdBQVYsQ0FBc0IsVUFBdEIsRUFBaUMsTUFBSSxDQUFDbEcsUUFBdEMsRUFBZ0QsTUFBSSxDQUFDRCxRQUFyRCxFQUErRHNHLE9BQS9ELEVBQXdFLE1BQUksQ0FBQy9FLFNBQTdFOztBQUNBLGNBQUksQ0FBQ0UsSUFBTCxDQUFVMkUsSUFBVjtBQUNILE9BTlMsRUFNUCxJQU5PLENBQVY7QUFPQSxXQUFLaEUsTUFBTCxDQUFZdEMsQ0FBWixHQUFnQixHQUFoQjtBQUNBLFdBQUtzQyxNQUFMLENBQVlyQyxDQUFaLEdBQWdCLEdBQWhCO0FBQ0EsVUFBSTZILEtBQUssR0FBRyxDQUFaO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFDQSxVQUFJQyxLQUFLLEdBQUcsR0FBWjtBQUNBLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJTCxXQUFXLEdBQUdoQixXQUFXLENBQUMsWUFBTTtBQUNoQyxjQUFJLENBQUNySCxHQUFMLENBQVN3QyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLE1BQUksQ0FBQzFDLE1BQUwsQ0FBWUksS0FBckMsRUFBNEMsTUFBSSxDQUFDSixNQUFMLENBQVlLLE1BQXhEOztBQUNBbUksYUFBSyxHQUYyQixDQUloQzs7QUFFQSxZQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNiQyxlQUFLLElBQUksR0FBVDtBQUNBQyxlQUFLLElBQUksR0FBVDs7QUFDQSxnQkFBSSxDQUFDdkUsSUFBTCxDQUFVM0QsTUFBVixDQUFpQmdJLEtBQWpCLEVBQXdCQyxLQUF4QixFQUErQkMsS0FBL0IsRUFBc0NDLEtBQXRDLEVBQTZDQyxLQUE3QztBQUNILFNBSkQsTUFJTyxJQUFJSixLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNwQkMsZUFBSyxJQUFJLEdBQVQ7QUFDQUMsZUFBSyxJQUFJLEdBQVQ7QUFDQUMsZUFBSyxJQUFJLEdBQVQ7QUFDQUMsZUFBSyxJQUFJLEdBQVQ7O0FBQ0EsZ0JBQUksQ0FBQ3pFLElBQUwsQ0FBVTNELE1BQVYsQ0FBaUJnSSxLQUFqQixFQUF3QkMsS0FBeEIsRUFBK0JDLEtBQS9CLEVBQXNDQyxLQUF0QyxFQUE2Q0MsS0FBN0M7QUFDSCxTQU5NLE1BTUE7QUFDSCxnQkFBSSxDQUFDekUsSUFBTCxDQUFVM0QsTUFBVixDQUFpQmdJLEtBQWpCLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQWxDLEVBQXVDLEdBQXZDO0FBQ0gsU0FsQitCLENBcUJoQzs7O0FBQ0EsY0FBSSxDQUFDbEUsTUFBTCxDQUFZQyxPQUFaLENBQW9CLFVBQUFvRCxLQUFLLEVBQUk7QUFDekJBLGVBQUssQ0FBQ25ILE1BQU47QUFDSCxTQUZELEVBdEJnQyxDQTBCaEM7OztBQUNBLGNBQUksQ0FBQzZELGFBQUwsQ0FBbUJFLE9BQW5CLENBQTJCLFVBQUFDLFlBQVksRUFBSTtBQUN2Q0Esc0JBQVksQ0FBQ2hFLE1BQWI7QUFDSCxTQUZEOztBQUlBLFlBQUlnSSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNiLGNBQUlBLEtBQUssR0FBRyxFQUFSLEdBQWEsRUFBakIsRUFBcUI7QUFDakIsa0JBQUksQ0FBQ3ZFLFlBQUwsQ0FBa0IxQyxHQUFsQixHQUF3QiwyQkFBeEI7QUFDSCxXQUZELE1BRU87QUFDSCxrQkFBSSxDQUFDMEMsWUFBTCxDQUFrQjFDLEdBQWxCLEdBQXdCLDRCQUF4QjtBQUNIO0FBQ0osU0FORCxNQU1PLElBQUlpSCxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNwQixnQkFBSSxDQUFDdkUsWUFBTCxDQUFrQjFDLEdBQWxCLEdBQXdCLGdDQUF4QjtBQUNILFNBRk0sTUFFQTtBQUNILGdCQUFJLENBQUMwQyxZQUFMLENBQWtCMUMsR0FBbEIsR0FBd0IsZ0NBQXhCO0FBQ0g7O0FBRUQsWUFBSWlILEtBQUssSUFBSSxHQUFULElBQWdCQSxLQUFLLEdBQUcsR0FBNUIsRUFBaUM7QUFDN0IsZ0JBQUksQ0FBQ3hGLE1BQUwsQ0FBWXRDLENBQVosSUFBaUIsQ0FBakI7QUFDQSxnQkFBSSxDQUFDc0MsTUFBTCxDQUFZckMsQ0FBWixJQUFpQixDQUFqQjtBQUVILFNBSkQsTUFJTyxJQUFJNkgsS0FBSyxJQUFJLEdBQVQsSUFBZ0JBLEtBQUssR0FBRyxHQUE1QixFQUFpQztBQUNwQyxnQkFBSSxDQUFDeEYsTUFBTCxDQUFZdEMsQ0FBWixJQUFpQixDQUFqQjtBQUNBLGdCQUFJLENBQUNzQyxNQUFMLENBQVlyQyxDQUFaLElBQWlCLENBQWpCO0FBQ0gsU0FITSxNQUdBLElBQUk2SCxLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxHQUFHLEdBQTVCLEVBQWlDO0FBQ3BDLGdCQUFJLENBQUN4RixNQUFMLENBQVl0QyxDQUFaLElBQWlCLENBQWpCO0FBQ0EsZ0JBQUksQ0FBQ3NDLE1BQUwsQ0FBWXJDLENBQVosSUFBaUIsR0FBakI7QUFDSCxTQUhNLE1BR0EsSUFBSTZILEtBQUssSUFBSSxHQUFULElBQWdCQSxLQUFLLEdBQUcsR0FBNUIsRUFBaUM7QUFDcEMsZ0JBQUksQ0FBQ3hGLE1BQUwsQ0FBWXRDLENBQVosSUFBaUIsQ0FBakI7QUFDSCxTQUZNLE1BRUEsSUFBSThILEtBQUssSUFBSSxHQUFULElBQWdCQSxLQUFLLEdBQUcsR0FBNUIsRUFBaUM7QUFDcEMsZ0JBQUksQ0FBQ3hGLE1BQUwsQ0FBWXRDLENBQVosSUFBaUIsQ0FBakI7QUFDQSxnQkFBSSxDQUFDc0MsTUFBTCxDQUFZckMsQ0FBWixJQUFpQixHQUFqQjtBQUNIOztBQUNELFlBQUk2SCxLQUFLLElBQUksR0FBYixFQUFrQjtBQUNkLGdCQUFJLENBQUN4RixNQUFMLENBQVk1QyxLQUFaLElBQXFCLEdBQXJCO0FBQ0EsZ0JBQUksQ0FBQzRDLE1BQUwsQ0FBWTNDLE1BQVosSUFBc0IsR0FBdEI7QUFDQSxnQkFBSSxDQUFDMkMsTUFBTCxDQUFZdEMsQ0FBWixJQUFpQixJQUFqQjtBQUNBLGdCQUFJLENBQUNzQyxNQUFMLENBQVlyQyxDQUFaLElBQWlCLElBQWpCO0FBQ0g7O0FBQ0QsY0FBSSxDQUFDaUgsVUFBTCxDQUFnQixNQUFJLENBQUMzRCxZQUFyQixFQUFtQyxNQUFJLENBQUNqQixNQUFMLENBQVl0QyxDQUEvQyxFQUFrRCxNQUFJLENBQUNzQyxNQUFMLENBQVlyQyxDQUE5RCxFQUFpRSxNQUFJLENBQUNxQyxNQUFMLENBQVk1QyxLQUE3RSxFQUFvRixNQUFJLENBQUM0QyxNQUFMLENBQVkzQyxNQUFoRztBQUNILE9BbEU0QixFQWtFMUIsRUFsRTBCLENBQTdCO0FBbUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2dCTDtBQUNBOztJQUVxQmlDLFE7QUFDakIsb0JBQVl1RyxVQUFaLEVBQXdCQyxPQUF4QixFQUFpQ0MsSUFBakMsRUFBdUNsSSxRQUF2QyxFQUFpREQsUUFBakQsRUFBMkRlLElBQTNELEVBQWlFWSxPQUFqRSxFQUEwRXlHLE9BQTFFLEVBQW1GQyxVQUFuRixFQUErRnJILFVBQS9GLEVBQTJHQyxTQUEzRyxFQUFzSEMsVUFBdEgsRUFBa0lDLGdCQUFsSSxFQUFvSkMsYUFBcEosRUFBbUtDLGdCQUFuSyxFQUFvTDtBQUFBOztBQUFBOztBQUNoTCxTQUFLNEcsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFFQSxTQUFLOUksTUFBTCxHQUFjRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZDtBQUVBLFNBQUtDLEdBQUwsR0FBVyxLQUFLRixNQUFMLENBQVlHLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFNBQUtILE1BQUwsQ0FBWUksS0FBWixHQUFvQixHQUFwQjtBQUNBLFNBQUtKLE1BQUwsQ0FBWUssTUFBWixHQUFxQixHQUFyQjtBQUVBLFNBQUs2SSxNQUFMLEdBQWMsS0FBZDtBQUVBLFNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtsSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS2UsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3dILFdBQUwsR0FBbUI1RyxPQUFuQjtBQUNBLFNBQUt5RyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtySCxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLFNBQUtzRixPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtrQyxJQUFMLEdBQVksQ0FBWjtBQUVBLFNBQUt2SCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUVBLFNBQUtvSCxRQUFMLEdBQWdCLElBQUl0SSxLQUFKLEVBQWhCO0FBQ0EsU0FBS3NJLFFBQUwsQ0FBYzlILEdBQWQsR0FBb0IsMEJBQXBCO0FBQ0EsU0FBSytILE9BQUwsR0FBZSxJQUFJdkksS0FBSixFQUFmO0FBQ0EsU0FBS3VJLE9BQUwsQ0FBYS9ILEdBQWIsR0FBbUIseUJBQW5CO0FBRUEsU0FBS2dJLFFBQUwsR0FBZ0IsSUFBSTNGLEtBQUosQ0FBVSx5QkFBVixDQUFoQjtBQUNBLFNBQUswQixLQUFMLEdBQWEsSUFBSTFCLEtBQUosQ0FBVSxzQkFBVixDQUFiO0FBQ0EsU0FBSzJGLFFBQUwsQ0FBYzFGLE1BQWQsR0FBdUIsR0FBdkI7QUFDQSxTQUFLeUIsS0FBTCxDQUFXekIsTUFBWCxHQUFvQixHQUFwQjtBQUVBLFNBQUsyRixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUdBeEUsVUFBTSxDQUFDbEYsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBQW1GLEtBQUssRUFBSTtBQUN4QyxVQUFJLEtBQUksQ0FBQ2dFLE1BQVQsRUFBaUI7QUFDYixZQUFJaEUsS0FBSyxDQUFDQyxHQUFOLElBQWEsR0FBYixJQUFvQkQsS0FBSyxDQUFDQyxHQUFOLElBQWEsU0FBckMsRUFBZ0Q7QUFDNUMsY0FBSSxLQUFJLENBQUNxRSxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGdCQUFJLENBQUMsS0FBSSxDQUFDeEgsYUFBTCxFQUFMLEVBQTJCLEtBQUksQ0FBQ3VILFFBQUwsQ0FBY25FLElBQWQ7QUFDM0IsaUJBQUksQ0FBQ29FLFFBQUw7O0FBQ0EsaUJBQUksQ0FBQ2hKLE1BQUw7QUFDSDtBQUNKLFNBTkQsTUFNTyxJQUFJMEUsS0FBSyxDQUFDQyxHQUFOLElBQWEsR0FBYixJQUFvQkQsS0FBSyxDQUFDQyxHQUFOLElBQWEsV0FBckMsRUFBa0Q7QUFDckQsY0FBSXVFLE1BQU0sR0FBRyxLQUFJLENBQUNYLElBQUwsSUFBYSxPQUFiLEdBQXVCLENBQXZCLEdBQTJCLENBQXhDOztBQUNBLGNBQUksS0FBSSxDQUFDUyxRQUFMLElBQWlCRSxNQUFyQixFQUE2QjtBQUN6QixnQkFBSSxDQUFDLEtBQUksQ0FBQzFILGFBQUwsRUFBTCxFQUEyQixLQUFJLENBQUN1SCxRQUFMLENBQWNuRSxJQUFkO0FBQzNCLGlCQUFJLENBQUNvRSxRQUFMOztBQUNBLGlCQUFJLENBQUNoSixNQUFMO0FBQ0g7QUFDSixTQVBNLE1BT0EsSUFBSTBFLEtBQUssQ0FBQ0MsR0FBTixJQUFhLE9BQWpCLEVBQTBCO0FBQzdCLGVBQUksQ0FBQ0csS0FBTCxDQUFXQSxLQUFYOztBQUNBLGVBQUksQ0FBQ0EsS0FBTCxDQUFXQyxXQUFYLEdBQXlCLENBQXpCO0FBQ0EsY0FBSSxDQUFDLEtBQUksQ0FBQ3ZELGFBQUwsRUFBTCxFQUEyQixLQUFJLENBQUNzRCxLQUFMLENBQVdGLElBQVg7QUFDM0IsZUFBSSxDQUFDcUUsU0FBTCxHQUFpQixJQUFqQjtBQUNILFNBTE0sTUFLQSxJQUFJdkUsS0FBSyxDQUFDQyxHQUFOLElBQWEsUUFBYixJQUF5QixLQUFJLENBQUM0RCxJQUFMLElBQWEsT0FBMUMsRUFBbUQ7QUFDdEQsZUFBSSxDQUFDWSxLQUFMO0FBQ0g7QUFDSjtBQUVKLEtBekJEO0FBMkJBLFNBQUszSixNQUFMLENBQVlELGdCQUFaLENBQTZCLFdBQTdCLEVBQTBDLFVBQUNtRixLQUFELEVBQVc7QUFHakQsVUFBSU8sU0FBUyxHQUFHLEtBQUksQ0FBQ3pGLE1BQUwsQ0FBWTBGLHFCQUFaLEVBQWhCOztBQUNBLFVBQUlDLE1BQU0sR0FBR1QsS0FBSyxDQUFDeEUsQ0FBTixHQUFVK0UsU0FBUyxDQUFDRyxJQUFqQztBQUNBLFVBQUlDLE1BQU0sR0FBR1gsS0FBSyxDQUFDdkUsQ0FBTixHQUFVOEUsU0FBUyxDQUFDSyxHQUFqQzs7QUFFQSxVQUFJSCxNQUFNLEdBQUcsR0FBVCxJQUFnQkEsTUFBTSxHQUFHLEdBQXpCLElBQWdDRSxNQUFNLEdBQUcsR0FBekMsSUFBZ0RBLE1BQU0sR0FBRyxHQUE3RCxFQUFrRTtBQUM5RCxhQUFJLENBQUM5RCxnQkFBTDs7QUFDQSxhQUFJLENBQUNELFVBQUwsR0FBa0IsQ0FBQyxLQUFJLENBQUNBLFVBQXhCOztBQUNBLGFBQUksQ0FBQ3RCLE1BQUw7QUFDSDtBQUNKLEtBWkQ7QUFjSDs7OztXQUVELHFCQUFZdUksSUFBWixFQUFrQmxJLFFBQWxCLEVBQTRCRCxRQUE1QixFQUFzQ3NHLE9BQXRDLEVBQStDa0MsSUFBL0MsRUFBcUQ7QUFDakQsV0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS2xJLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsV0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxXQUFLc0csT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS2tDLElBQUwsR0FBWUEsSUFBWjtBQUNIOzs7V0FFRCxpQkFBUTtBQUNKLFdBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS2hKLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzFDLE1BQUwsQ0FBWUksS0FBckMsRUFBNEMsS0FBS0osTUFBTCxDQUFZSyxNQUF4RDtBQUNBLFdBQUtMLE1BQUwsQ0FBWTRKLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0EsV0FBS0osU0FBTCxHQUFpQixLQUFqQjtBQUNIOzs7V0FFRCxnQkFBTztBQUFBOztBQUNILFdBQUtQLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBS2xKLE1BQUwsQ0FBWTRKLFNBQVosQ0FBc0JFLEdBQXRCLENBQTBCLFFBQTFCO0FBQ0EsV0FBS3RKLE1BQUw7QUFDQSxVQUFNNkIsSUFBSSxHQUFHa0YsV0FBVyxDQUFDLFlBQU07QUFDM0IsWUFBSSxNQUFJLENBQUNrQyxTQUFULEVBQW9CO0FBQ2hCLGNBQUksTUFBSSxDQUFDVixJQUFMLElBQWEsUUFBakIsRUFBMkI7QUFDdkIsZ0JBQUksTUFBSSxDQUFDUyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBRXBCO0FBQ0E7QUFDQSxvQkFBSSxDQUFDTCxXQUFMLENBQWlCLE1BQUksQ0FBQ3RJLFFBQXRCLEVBQWdDLE1BQUksQ0FBQ0QsUUFBckMsRUFBK0MsTUFBSSxDQUFDZSxJQUFwRDs7QUFDQSxvQkFBSSxDQUFDc0gsVUFBTDtBQUNILGFBTkQsTUFNTyxJQUFJLE1BQUksQ0FBQ08sUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUMzQixvQkFBSSxDQUFDNUgsVUFBTDtBQUVIO0FBQ0osV0FYRCxNQVdPLElBQUksTUFBSSxDQUFDbUgsSUFBTCxJQUFhLFVBQWpCLEVBQTZCO0FBQ2hDLGdCQUFJLE1BQUksQ0FBQ1MsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUNwQixrQkFBSSxNQUFJLENBQUM1SSxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLHNCQUFJLENBQUN1SSxXQUFMLENBQWlCLE1BQUksQ0FBQ3RJLFFBQUwsR0FBZ0IsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsTUFBSSxDQUFDYyxJQUE1QztBQUNILGVBRkQsTUFFTztBQUNILHNCQUFJLENBQUN3SCxXQUFMLENBQWlCLE1BQUksQ0FBQ3RJLFFBQXRCLEVBQWdDLE1BQUksQ0FBQ0QsUUFBTCxHQUFnQixDQUFoRCxFQUFtRCxNQUFJLENBQUNlLElBQXhEO0FBQ0g7O0FBRUQsb0JBQUksQ0FBQ3NILFVBQUw7QUFDSCxhQVJELE1BUU8sSUFBSSxNQUFJLENBQUNPLFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDM0Isb0JBQUksQ0FBQzVILFVBQUw7QUFFSDtBQUNKLFdBYk0sTUFhQSxJQUFJLE1BQUksQ0FBQ21ILElBQUwsSUFBYSxPQUFqQixFQUEwQjtBQUM3QixnQkFBSSxNQUFJLENBQUNTLFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsb0JBQUksQ0FBQ0csS0FBTDs7QUFDQSxvQkFBSSxDQUFDWCxPQUFMO0FBQ0gsYUFIRCxNQUdPLElBQUksTUFBSSxDQUFDUSxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQzNCLG9CQUFJLENBQUNMLFdBQUwsQ0FBaUIsTUFBSSxDQUFDdEksUUFBdEIsRUFBZ0MsTUFBSSxDQUFDRCxRQUFyQyxFQUErQyxNQUFJLENBQUNlLElBQXBEOztBQUNBLG9CQUFJLENBQUNzSCxVQUFMO0FBQ0gsYUFITSxNQUdBLElBQUksTUFBSSxDQUFDTyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQzNCLG9CQUFJLENBQUM1SCxVQUFMO0FBRUg7QUFDSjs7QUFDRCxnQkFBSSxDQUFDK0gsS0FBTDs7QUFDQTlDLHVCQUFhLENBQUN4RSxJQUFELENBQWI7QUFFSDtBQUVKLE9BM0N1QixFQTJDckIsRUEzQ3FCLENBQXhCO0FBNENIOzs7V0FFRCxrQkFBUztBQUNMO0FBQ0EsV0FBS25DLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzFDLE1BQUwsQ0FBWUksS0FBckMsRUFBNEMsS0FBS0osTUFBTCxDQUFZSyxNQUF4RDtBQUNBLFdBQUtILEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsWUFBckI7QUFDQSxXQUFLdkgsR0FBTCxDQUFTb0ksUUFBVCxDQUFrQixHQUFsQixFQUFzQixHQUF0QixFQUEwQixHQUExQixFQUE4QixHQUE5QixFQUpLLENBTUw7O0FBQ0EsV0FBS3BJLEdBQUwsQ0FBU2lJLElBQVQsR0FBZ0IsdUJBQWhCLENBUEssQ0FTTDs7QUFDQSxVQUFJLEtBQUtZLElBQUwsSUFBYSxRQUFqQixFQUEyQjtBQUN2QixhQUFLN0ksR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixjQUFyQjtBQUNBLGFBQUt2SCxHQUFMLENBQVNrSSxRQUFULENBQWtCLGNBQWxCLEVBQWtDLEdBQWxDLEVBQXVDLEdBQXZDO0FBQ0gsT0FIRCxNQUdPLElBQUksS0FBS1csSUFBTCxJQUFhLFVBQWpCLEVBQTZCO0FBQ2hDLGFBQUs3SSxHQUFMLENBQVN1SCxTQUFULEdBQXFCLGNBQXJCO0FBQ0EsYUFBS3ZILEdBQUwsQ0FBU2tJLFFBQVQsQ0FBa0IsaUJBQWxCLEVBQXFDLEdBQXJDLEVBQTBDLEdBQTFDO0FBQ0gsT0FITSxNQUdBLElBQUksS0FBS1csSUFBTCxJQUFhLE9BQWpCLEVBQTBCO0FBQzdCLGFBQUs3SSxHQUFMLENBQVN1SCxTQUFULEdBQXFCLGlCQUFyQjtBQUNBLGFBQUt2SCxHQUFMLENBQVNrSSxRQUFULENBQWtCLE9BQWxCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDO0FBQ0gsT0FuQkksQ0FxQkw7OztBQUNBLFdBQUtsSSxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCOztBQUVBLFVBQUksS0FBS3NCLElBQUwsSUFBYSxPQUFqQixFQUEwQjtBQUN0QixZQUFJLEtBQUtqSCxVQUFULEVBQXFCO0FBQ2pCLGVBQUs1QixHQUFMLENBQVNzQixTQUFULENBQW1CLEtBQUs2SCxRQUF4QixFQUFrQyxHQUFsQyxFQUF1QyxHQUF2QyxFQUE0QyxFQUE1QyxFQUFnRCxFQUFoRDtBQUNILFNBRkQsTUFFTztBQUNILGVBQUtuSixHQUFMLENBQVNzQixTQUFULENBQW1CLEtBQUs4SCxPQUF4QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0QyxFQUEyQyxFQUEzQyxFQUErQyxFQUEvQztBQUNIO0FBQ0osT0E5QkksQ0FpQ0w7OztBQUNBLFdBQUtwSixHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQixDQWxDSyxDQW9DTDs7QUFDQSxVQUFJLEtBQUtZLElBQUwsSUFBYSxRQUFqQixFQUEyQjtBQUN2QixhQUFLN0ksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixPQUFsQixFQUEyQixHQUEzQixFQUFnQyxHQUFoQztBQUNBLGFBQUtsSSxHQUFMLENBQVNrSSxRQUFULENBQWtCLFdBQWxCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBRnVCLENBSXZCOztBQUNBLFlBQUksS0FBS29CLFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEI7QUFDQSxlQUFLdEosR0FBTCxDQUFTNkosU0FBVDtBQUNBLGVBQUs3SixHQUFMLENBQVM4SixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSzlKLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVNnSyxTQUFUO0FBRUEsZUFBS2hLLEdBQUwsQ0FBU2lLLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxlQUFLakssR0FBTCxDQUFTa0ssV0FBVCxHQUF1QixTQUF2QjtBQUNBLGVBQUtsSyxHQUFMLENBQVNtSyxNQUFUO0FBRUEsZUFBS25LLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxlQUFLdkgsR0FBTCxDQUFTb0ssSUFBVCxHQWJvQixDQWVwQjs7QUFDQSxlQUFLcEssR0FBTCxDQUFTNkosU0FBVDtBQUNBLGVBQUs3SixHQUFMLENBQVM4SixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSzlKLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVNnSyxTQUFUO0FBRUEsZUFBS2hLLEdBQUwsQ0FBU2lLLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxlQUFLakssR0FBTCxDQUFTa0ssV0FBVCxHQUF1QixTQUF2QjtBQUNBLGVBQUtsSyxHQUFMLENBQVNtSyxNQUFUO0FBRUEsZUFBS25LLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxlQUFLdkgsR0FBTCxDQUFTb0ssSUFBVDtBQUNILFNBNUJELE1BNEJPO0FBQ0gsZUFBS3BLLEdBQUwsQ0FBUzZKLFNBQVQ7QUFDQSxlQUFLN0osR0FBTCxDQUFTOEosTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUs5SixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTZ0ssU0FBVDtBQUVBLGVBQUtoSyxHQUFMLENBQVNpSyxTQUFULEdBQXFCLENBQXJCO0FBQ0EsZUFBS2pLLEdBQUwsQ0FBU2tLLFdBQVQsR0FBdUIsU0FBdkI7QUFDQSxlQUFLbEssR0FBTCxDQUFTbUssTUFBVDtBQUVBLGVBQUtuSyxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsZUFBS3ZILEdBQUwsQ0FBU29LLElBQVQsR0FaRyxDQWNIOztBQUNBLGVBQUtwSyxHQUFMLENBQVM2SixTQUFUO0FBQ0EsZUFBSzdKLEdBQUwsQ0FBUzhKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLOUosR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBU2dLLFNBQVQ7QUFFQSxlQUFLaEssR0FBTCxDQUFTaUssU0FBVCxHQUFxQixDQUFyQjtBQUNBLGVBQUtqSyxHQUFMLENBQVNrSyxXQUFULEdBQXVCLFNBQXZCO0FBQ0EsZUFBS2xLLEdBQUwsQ0FBU21LLE1BQVQ7QUFFQSxlQUFLbkssR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUNBLGVBQUt2SCxHQUFMLENBQVNvSyxJQUFUO0FBQ0g7QUFDSixPQTdERCxNQTZETyxJQUFJLEtBQUt2QixJQUFMLElBQWEsVUFBakIsRUFBNkI7QUFDaEMsYUFBSzdJLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsWUFBckI7QUFDQSxhQUFLdkgsR0FBTCxDQUFTb0ksUUFBVCxDQUFrQixHQUFsQixFQUFzQixHQUF0QixFQUEwQixHQUExQixFQUE4QixHQUE5QjtBQUNBLGFBQUtwSSxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCOztBQUVBLFlBQUksS0FBS1AsT0FBVCxFQUFrQjtBQUNkO0FBQ0EsZUFBS2hILEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsY0FBckI7QUFDQSxlQUFLdkgsR0FBTCxDQUFTaUksSUFBVCxHQUFnQix1QkFBaEI7QUFDQSxlQUFLakksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixnQkFBbEIsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFKYyxDQU1kOztBQUNBLGVBQUtsSSxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQjtBQUNBLGVBQUtqSSxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCO0FBQ0g7O0FBQ0QsYUFBS3ZILEdBQUwsQ0FBU2tJLFFBQVQsaUJBQTJCLENBQUMsS0FBS2dCLElBQUwsR0FBVSxHQUFYLEVBQWdCZixRQUFoQixFQUEzQixHQUF5RCxHQUF6RCxFQUE4RCxHQUE5RDtBQUVBLGFBQUtuSSxHQUFMLENBQVNrSSxRQUFULENBQWtCLFlBQWxCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBQ0EsYUFBS2xJLEdBQUwsQ0FBU2tJLFFBQVQsQ0FBa0IsV0FBbEIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFsQmdDLENBb0JoQzs7QUFDQSxZQUFJLEtBQUtvQixRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCO0FBQ0EsZUFBS3RKLEdBQUwsQ0FBUzZKLFNBQVQ7QUFDQSxlQUFLN0osR0FBTCxDQUFTOEosTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUs5SixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTZ0ssU0FBVDtBQUVBLGVBQUtoSyxHQUFMLENBQVNpSyxTQUFULEdBQXFCLENBQXJCO0FBQ0EsZUFBS2pLLEdBQUwsQ0FBU2tLLFdBQVQsR0FBdUIsU0FBdkI7QUFDQSxlQUFLbEssR0FBTCxDQUFTbUssTUFBVDtBQUVBLGVBQUtuSyxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsZUFBS3ZILEdBQUwsQ0FBU29LLElBQVQsR0Fib0IsQ0FlcEI7O0FBQ0EsZUFBS3BLLEdBQUwsQ0FBUzZKLFNBQVQ7QUFDQSxlQUFLN0osR0FBTCxDQUFTOEosTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUs5SixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTZ0ssU0FBVDtBQUVBLGVBQUtoSyxHQUFMLENBQVNpSyxTQUFULEdBQXFCLENBQXJCO0FBQ0EsZUFBS2pLLEdBQUwsQ0FBU2tLLFdBQVQsR0FBdUIsU0FBdkI7QUFDQSxlQUFLbEssR0FBTCxDQUFTbUssTUFBVDtBQUVBLGVBQUtuSyxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsZUFBS3ZILEdBQUwsQ0FBU29LLElBQVQ7QUFDSCxTQTVCRCxNQTRCTztBQUNILGVBQUtwSyxHQUFMLENBQVM2SixTQUFUO0FBQ0EsZUFBSzdKLEdBQUwsQ0FBUzhKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLOUosR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBU2dLLFNBQVQ7QUFFQSxlQUFLaEssR0FBTCxDQUFTaUssU0FBVCxHQUFxQixDQUFyQjtBQUNBLGVBQUtqSyxHQUFMLENBQVNrSyxXQUFULEdBQXVCLFNBQXZCO0FBQ0EsZUFBS2xLLEdBQUwsQ0FBU21LLE1BQVQ7QUFFQSxlQUFLbkssR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUNBLGVBQUt2SCxHQUFMLENBQVNvSyxJQUFULEdBWkcsQ0FjSDs7QUFDQSxlQUFLcEssR0FBTCxDQUFTNkosU0FBVDtBQUNBLGVBQUs3SixHQUFMLENBQVM4SixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSzlKLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVNnSyxTQUFUO0FBRUEsZUFBS2hLLEdBQUwsQ0FBU2lLLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxlQUFLakssR0FBTCxDQUFTa0ssV0FBVCxHQUF1QixTQUF2QjtBQUNBLGVBQUtsSyxHQUFMLENBQVNtSyxNQUFUO0FBRUEsZUFBS25LLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxlQUFLdkgsR0FBTCxDQUFTb0ssSUFBVDtBQUNIO0FBQ0osT0E3RU0sTUE2RUEsSUFBSSxLQUFLdkIsSUFBTCxJQUFhLE9BQWpCLEVBQTBCO0FBQzdCLGFBQUs3SSxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFlBQXJCO0FBQ0EsYUFBS3ZILEdBQUwsQ0FBU29JLFFBQVQsQ0FBa0IsR0FBbEIsRUFBc0IsR0FBdEIsRUFBMEIsR0FBMUIsRUFBOEIsRUFBOUI7QUFDQSxhQUFLcEksR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUVBLGFBQUt2SCxHQUFMLENBQVNrSSxRQUFULENBQWtCLFFBQWxCLEVBQTRCLEdBQTVCLEVBQWlDLEdBQWpDO0FBQ0EsYUFBS2xJLEdBQUwsQ0FBU2tJLFFBQVQsQ0FBa0IsU0FBbEIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEM7QUFDQSxhQUFLbEksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixXQUFsQixFQUErQixHQUEvQixFQUFvQyxHQUFwQzs7QUFFQSxZQUFJLEtBQUtvQixRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGVBQUt0SixHQUFMLENBQVM2SixTQUFUO0FBQ0EsZUFBSzdKLEdBQUwsQ0FBUzhKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLOUosR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBU2dLLFNBQVQ7QUFFQSxlQUFLaEssR0FBTCxDQUFTaUssU0FBVCxHQUFxQixDQUFyQjtBQUNBLGVBQUtqSyxHQUFMLENBQVNrSyxXQUFULEdBQXVCLFNBQXZCO0FBQ0EsZUFBS2xLLEdBQUwsQ0FBU21LLE1BQVQ7QUFFQSxlQUFLbkssR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUNBLGVBQUt2SCxHQUFMLENBQVNvSyxJQUFULEdBWm9CLENBY3BCOztBQUNBLGVBQUtwSyxHQUFMLENBQVM2SixTQUFUO0FBQ0EsZUFBSzdKLEdBQUwsQ0FBUzhKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLOUosR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBU2dLLFNBQVQ7QUFFQSxlQUFLaEssR0FBTCxDQUFTaUssU0FBVCxHQUFxQixDQUFyQjtBQUNBLGVBQUtqSyxHQUFMLENBQVNrSyxXQUFULEdBQXVCLFNBQXZCO0FBQ0EsZUFBS2xLLEdBQUwsQ0FBU21LLE1BQVQ7QUFFQSxlQUFLbkssR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUNBLGVBQUt2SCxHQUFMLENBQVNvSyxJQUFUO0FBRUgsU0E1QkQsTUE0Qk8sSUFBSSxLQUFLZCxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQzNCO0FBQ0EsZUFBS3RKLEdBQUwsQ0FBUzZKLFNBQVQ7QUFDQSxlQUFLN0osR0FBTCxDQUFTOEosTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUs5SixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTZ0ssU0FBVDtBQUVBLGVBQUtoSyxHQUFMLENBQVNpSyxTQUFULEdBQXFCLENBQXJCO0FBQ0EsZUFBS2pLLEdBQUwsQ0FBU2tLLFdBQVQsR0FBdUIsU0FBdkI7QUFDQSxlQUFLbEssR0FBTCxDQUFTbUssTUFBVDtBQUVBLGVBQUtuSyxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsZUFBS3ZILEdBQUwsQ0FBU29LLElBQVQsR0FiMkIsQ0FlM0I7O0FBQ0EsZUFBS3BLLEdBQUwsQ0FBUzZKLFNBQVQ7QUFDQSxlQUFLN0osR0FBTCxDQUFTOEosTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUs5SixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTZ0ssU0FBVDtBQUVBLGVBQUtoSyxHQUFMLENBQVNpSyxTQUFULEdBQXFCLENBQXJCO0FBQ0EsZUFBS2pLLEdBQUwsQ0FBU2tLLFdBQVQsR0FBdUIsU0FBdkI7QUFDQSxlQUFLbEssR0FBTCxDQUFTbUssTUFBVDtBQUVBLGVBQUtuSyxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsZUFBS3ZILEdBQUwsQ0FBU29LLElBQVQ7QUFDSCxTQTVCTSxNQTRCQTtBQUNILGVBQUtwSyxHQUFMLENBQVM2SixTQUFUO0FBQ0EsZUFBSzdKLEdBQUwsQ0FBUzhKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLOUosR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSy9KLEdBQUwsQ0FBU2dLLFNBQVQ7QUFFQSxlQUFLaEssR0FBTCxDQUFTaUssU0FBVCxHQUFxQixDQUFyQjtBQUNBLGVBQUtqSyxHQUFMLENBQVNrSyxXQUFULEdBQXVCLFNBQXZCO0FBQ0EsZUFBS2xLLEdBQUwsQ0FBU21LLE1BQVQ7QUFFQSxlQUFLbkssR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUNBLGVBQUt2SCxHQUFMLENBQVNvSyxJQUFULEdBWkcsQ0FjSDs7QUFDQSxlQUFLcEssR0FBTCxDQUFTNkosU0FBVDtBQUNBLGVBQUs3SixHQUFMLENBQVM4SixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBQ0EsZUFBSzlKLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7QUFDQSxlQUFLL0osR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQUNBLGVBQUsvSixHQUFMLENBQVNnSyxTQUFUO0FBRUEsZUFBS2hLLEdBQUwsQ0FBU2lLLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxlQUFLakssR0FBTCxDQUFTa0ssV0FBVCxHQUF1QixTQUF2QjtBQUNBLGVBQUtsSyxHQUFMLENBQVNtSyxNQUFUO0FBRUEsZUFBS25LLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxlQUFLdkgsR0FBTCxDQUFTb0ssSUFBVDtBQUNIO0FBQ0o7QUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFhTDtBQUNBOztJQUVxQi9KLFE7QUFDakIsb0JBQVlQLE1BQVosRUFBb0JFLEdBQXBCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtxSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUsxSSxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBSzJJLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxTQUFLckUsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtzRSxRQUFMLEdBQWdCLE9BQWhCO0FBQ0EsU0FBS3hJLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLeUksVUFBTCxHQUFrQixDQUFDLFNBQUQsRUFBVyxTQUFYLEVBQXFCLFNBQXJCLEVBQStCLFNBQS9CLEVBQXlDLFNBQXpDLENBQWxCO0FBRUEsU0FBS2hKLElBQUwsR0FBYSxJQUFJRCw2Q0FBSixDQUFTLEtBQUsxQixNQUFkLEVBQXNCLEtBQUtFLEdBQTNCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DLEVBQXNDLEtBQUt5QixJQUEzQyxFQUFpRCxLQUFLbkIsTUFBTCxDQUFZZ0MsSUFBWixDQUFpQixJQUFqQixDQUFqRCxFQUF5RSxLQUFLb0ksS0FBOUUsRUFBcUYsS0FBS0osVUFBMUYsRUFBc0csS0FBS0ssZUFBTCxDQUFxQnJJLElBQXJCLENBQTBCLElBQTFCLENBQXRHLEVBQXVJLEtBQUtSLGFBQUwsQ0FBbUJRLElBQW5CLENBQXdCLElBQXhCLENBQXZJLEVBQXNLLEtBQUtzSSxlQUFMLENBQXFCdEksSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdEssQ0FBYjtBQUNBLFNBQUt1SSxJQUFMLEdBQVksSUFBWjtBQUVBLFNBQUtILEtBQUwsR0FBYSxJQUFJaEgsS0FBSixFQUFiO0FBQ0EsU0FBS2dILEtBQUwsQ0FBV3JKLEdBQVgsR0FBaUIsNEJBQWpCO0FBQ0EsU0FBS3FKLEtBQUwsQ0FBVy9HLE1BQVgsR0FBb0IsR0FBcEI7QUFFQSxTQUFLRyxRQUFMLEdBQWdCLENBQ1osNkJBRFksRUFFWiwwQkFGWSxDQUFoQixDQXBCcUIsQ0F5QnJCOztBQUNBLFNBQUtnSCxlQUFMLEdBQXVCL0YsTUFBTSxDQUFDb0IsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsaUJBQTVCLENBQXZCOztBQUNBLFFBQUksS0FBSzBFLGVBQUwsSUFBd0IsSUFBNUIsRUFBa0M7QUFDOUIsV0FBS0EsZUFBTCxHQUF1QixDQUF2QjtBQUNIOztBQUVELFNBQUt4RixZQUFMLEdBQW9CLFVBQUFOLEtBQUssRUFBSTtBQUN6QixVQUFJTyxTQUFTLEdBQUcsS0FBSSxDQUFDekYsTUFBTCxDQUFZMEYscUJBQVosRUFBaEI7O0FBQ0EsVUFBSUMsTUFBTSxHQUFHVCxLQUFLLENBQUN4RSxDQUFOLEdBQVUrRSxTQUFTLENBQUNHLElBQWpDO0FBQ0EsVUFBSUMsTUFBTSxHQUFHWCxLQUFLLENBQUN2RSxDQUFOLEdBQVU4RSxTQUFTLENBQUNLLEdBQWpDOztBQUVBLFdBQUssSUFBSW1GLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsWUFBSUMsU0FBUyxHQUFHRCxDQUFDLEdBQUcsR0FBcEI7O0FBQ0EsWUFBSXRGLE1BQU0sR0FBRyxNQUFNdUYsU0FBZixJQUE0QnZGLE1BQU0sR0FBRyxNQUFNdUYsU0FBM0MsSUFBd0RyRixNQUFNLEdBQUcsR0FBakUsSUFBd0VBLE1BQU0sR0FBRyxHQUFyRixFQUEwRjtBQUN0RixjQUFJLEtBQUksQ0FBQ21GLGVBQUwsSUFBd0IsQ0FBQyxLQUFJLENBQUNULFlBQUwsR0FBb0IsQ0FBckIsSUFBMEIsQ0FBMUIsR0FBOEJVLENBQTFELEVBQTZEO0FBQ3pELGlCQUFJLENBQUM3RSxVQUFMLEdBQWtCbkIsTUFBTSxDQUFDb0IsWUFBUCxDQUFvQkMsT0FBcEIsV0FBK0IsS0FBSSxDQUFDaUUsWUFBcEMsY0FBb0RVLENBQUMsR0FBRyxDQUF4RCxzQkFBNEUsQ0FBOUY7QUFDQSxpQkFBSSxDQUFDUCxRQUFMLEdBQWdCekYsTUFBTSxDQUFDb0IsWUFBUCxDQUFvQkMsT0FBcEIsV0FBK0IsS0FBSSxDQUFDaUUsWUFBcEMsY0FBb0RVLENBQUMsR0FBRyxDQUF4RCxtQkFBdUUsR0FBdkUsSUFBOEUsT0FBOUY7QUFDQSxpQkFBSSxDQUFDTixVQUFMLENBQWdCTSxDQUFoQixJQUFxQixrQkFBckI7QUFDSDtBQUVKLFNBUEQsTUFPTztBQUNILGVBQUksQ0FBQ04sVUFBTCxDQUFnQk0sQ0FBaEIsSUFBcUIsU0FBckI7QUFDSDtBQUNKOztBQUVELFVBQUl0RixNQUFNLEdBQUcsQ0FBVCxJQUFjQSxNQUFNLEdBQUcsR0FBdkIsSUFBOEJFLE1BQU0sR0FBRyxDQUF2QyxJQUE0Q0EsTUFBTSxHQUFHLEVBQXpELEVBQTZEO0FBQ3pELGFBQUksQ0FBQzNELFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFJLENBQUNBLFlBQUwsR0FBb0IsS0FBcEI7QUFDSDtBQUNKLEtBeEJEOztBQXlCQSxTQUFLbEMsTUFBTCxDQUFZRCxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxLQUFLeUYsWUFBL0M7O0FBRUEsU0FBSzJGLGFBQUwsR0FBcUIsVUFBQ2pHLEtBQUQsRUFBVztBQUM1QixVQUFJTyxTQUFTLEdBQUcsS0FBSSxDQUFDekYsTUFBTCxDQUFZMEYscUJBQVosRUFBaEI7O0FBQ0EsVUFBSUMsTUFBTSxHQUFHVCxLQUFLLENBQUN4RSxDQUFOLEdBQVUrRSxTQUFTLENBQUNHLElBQWpDO0FBQ0EsVUFBSUMsTUFBTSxHQUFHWCxLQUFLLENBQUN2RSxDQUFOLEdBQVU4RSxTQUFTLENBQUNLLEdBQWpDOztBQUVBLFdBQUssSUFBSW1GLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsWUFBSUMsU0FBUyxHQUFHRCxDQUFDLEdBQUcsR0FBcEI7O0FBQ0EsWUFBSXRGLE1BQU0sR0FBRyxNQUFNdUYsU0FBZixJQUE0QnZGLE1BQU0sR0FBRyxNQUFNdUYsU0FBM0MsSUFBd0RyRixNQUFNLEdBQUcsR0FBakUsSUFBd0VBLE1BQU0sR0FBRyxHQUFyRixFQUEwRjtBQUN0RixjQUFJLEtBQUksQ0FBQ21GLGVBQUwsSUFBd0IsQ0FBQyxLQUFJLENBQUNULFlBQUwsR0FBb0IsQ0FBckIsSUFBMEIsQ0FBMUIsR0FBOEJVLENBQTFELEVBQTZEO0FBQ3pEcEUseUJBQWEsQ0FBQyxLQUFJLENBQUNrRSxJQUFOLENBQWI7O0FBQ0EsaUJBQUksQ0FBQ3BKLElBQUwsQ0FBVVksT0FBVixDQUFrQixLQUFJLENBQUNnSSxZQUF2QixFQUFxQ1UsQ0FBQyxHQUFHLENBQXpDLEVBQTRDLEtBQUksQ0FBQ3RKLElBQWpEOztBQUNBLGlCQUFJLENBQUNBLElBQUwsQ0FBVW5CLE1BQVYsR0FIeUQsQ0FJekQ7QUFDQTs7QUFDSDtBQUVKO0FBQ0o7O0FBRUQsVUFBSW1GLE1BQU0sR0FBRyxHQUFULElBQWdCQSxNQUFNLEdBQUcsR0FBekIsSUFBZ0NFLE1BQU0sR0FBRyxFQUF6QyxJQUErQ0EsTUFBTSxHQUFHLEVBQTVELEVBQWdFO0FBQzVELGFBQUksQ0FBQ2lGLGVBQUw7QUFDSDs7QUFFRCxVQUFJbkYsTUFBTSxHQUFHLEdBQVQsSUFBZ0JBLE1BQU0sR0FBRyxHQUF6QixJQUFnQ0UsTUFBTSxHQUFHLEVBQXpDLElBQStDQSxNQUFNLEdBQUcsRUFBNUQsRUFBZ0U7QUFDNUQsYUFBSSxDQUFDZ0YsZUFBTDtBQUNIOztBQUVELFVBQUloRixNQUFNLEdBQUcsR0FBVCxJQUFnQkEsTUFBTSxHQUFHLEdBQTdCLEVBQWtDO0FBQzlCLFlBQUlGLE1BQU0sR0FBRyxHQUFULElBQWdCQSxNQUFNLEdBQUcsR0FBN0IsRUFBa0M7QUFDOUIsY0FBSSxLQUFJLENBQUM0RSxZQUFMLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLGlCQUFJLENBQUNBLFlBQUw7QUFDSCxXQUZELE1BRU87QUFDSCxpQkFBSSxDQUFDQSxZQUFMLEdBQW9CLEtBQUksQ0FBQ0UsU0FBekI7QUFDSDtBQUNKOztBQUNELFlBQUk5RSxNQUFNLEdBQUcsR0FBVCxJQUFnQkEsTUFBTSxHQUFHLEdBQTdCLEVBQWtDO0FBQzlCLGNBQUksS0FBSSxDQUFDNEUsWUFBTCxHQUFvQixLQUFJLENBQUNFLFNBQTdCLEVBQXdDO0FBQ3BDLGlCQUFJLENBQUNGLFlBQUw7QUFDSCxXQUZELE1BRU87QUFDSCxpQkFBSSxDQUFDQSxZQUFMLEdBQW9CLENBQXBCO0FBQ0g7QUFDSjtBQUNKLE9BMUMyQixDQTRDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNILEtBOUREOztBQStEQSxTQUFLdkssTUFBTCxDQUFZRCxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxLQUFLb0wsYUFBL0M7QUFDSDs7OztXQUVELDJCQUFrQjtBQUNkLFdBQUtySixVQUFMLEdBQWtCLENBQUMsS0FBS0EsVUFBeEI7O0FBRUEsVUFBSSxLQUFLQSxVQUFULEVBQXFCO0FBQ2pCLGFBQUs4SSxLQUFMLENBQVd0RixLQUFYO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS3NGLEtBQUwsQ0FBV3JGLFdBQVgsR0FBeUIsQ0FBekI7QUFDQSxhQUFLcUYsS0FBTCxDQUFXeEYsSUFBWDtBQUNIO0FBQ0o7OztXQUVELHlCQUFnQjtBQUNaLGFBQU8sS0FBS29GLFVBQVo7QUFDSDs7O1dBRUQsMkJBQWtCO0FBRWQsV0FBS0EsVUFBTCxHQUFrQixDQUFDLEtBQUtBLFVBQXhCO0FBQ0g7OztXQUVELDhCQUFxQjtBQUNqQixXQUFLUSxlQUFMLEdBQXVCL0YsTUFBTSxDQUFDb0IsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsaUJBQTVCLENBQXZCOztBQUNBLFVBQUksS0FBSzBFLGVBQUwsSUFBd0IsSUFBNUIsRUFBa0M7QUFDOUIsYUFBS0EsZUFBTCxHQUF1QixDQUF2QjtBQUNIO0FBQ0o7OztXQUVELDZCQUFvQjtBQUNoQixXQUFLaEwsTUFBTCxDQUFZRCxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxLQUFLb0wsYUFBL0M7QUFDQSxXQUFLbkwsTUFBTCxDQUFZRCxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxLQUFLeUYsWUFBL0M7QUFDSDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFFTCxXQUFLNEYsa0JBQUw7QUFDQSxXQUFLTCxJQUFMLEdBQVl4RCxXQUFXLENBQUMsWUFBTTtBQUMxQixjQUFJLENBQUNySCxHQUFMLENBQVN3QyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLE1BQUksQ0FBQzFDLE1BQUwsQ0FBWUksS0FBckMsRUFBNEMsTUFBSSxDQUFDSixNQUFMLENBQVlLLE1BQXhEOztBQUNBLGNBQUksQ0FBQ0wsTUFBTCxDQUFZcUgsS0FBWixDQUFrQkMsZUFBbEIsaUJBQTJDLE1BQUksQ0FBQ3RELFFBQUwsQ0FBYyxNQUFJLENBQUN1RyxZQUFMLEdBQW9CLENBQWxDLENBQTNDLE9BRjBCLENBSTFCOztBQUNBLGNBQUksQ0FBQ3JLLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxjQUFJLENBQUN2SCxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQjs7QUFDQSxjQUFJLENBQUNqSSxHQUFMLENBQVNrSSxRQUFULENBQWtCLGFBQWxCLEVBQWlDLEdBQWpDLEVBQXNDLEVBQXRDLEVBUDBCLENBWTFCO0FBQ0E7OztBQUNBLGNBQUksQ0FBQ2xJLEdBQUwsQ0FBU2lJLElBQVQsR0FBZ0IsdUJBQWhCOztBQUNBLGNBQUksQ0FBQ2pJLEdBQUwsQ0FBU2tJLFFBQVQsaUJBQTJCLE1BQUksQ0FBQ21DLFlBQWhDLEdBQWdELEdBQWhELEVBQXFELEdBQXJELEVBZjBCLENBaUIxQjtBQUNBOzs7QUFDQSxjQUFJLENBQUNySyxHQUFMLENBQVM2SixTQUFUOztBQUNBLGNBQUksQ0FBQzdKLEdBQUwsQ0FBUzhKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7O0FBQ0EsY0FBSSxDQUFDOUosR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjs7QUFDQSxjQUFJLENBQUMvSixHQUFMLENBQVMrSixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCOztBQUNBLGNBQUksQ0FBQy9KLEdBQUwsQ0FBU2dLLFNBQVQ7O0FBRUEsY0FBSSxDQUFDaEssR0FBTCxDQUFTaUssU0FBVCxHQUFxQixDQUFyQjtBQUNBLGNBQUksQ0FBQ2pLLEdBQUwsQ0FBU2tLLFdBQVQsR0FBdUIsU0FBdkI7O0FBQ0EsY0FBSSxDQUFDbEssR0FBTCxDQUFTbUssTUFBVDs7QUFFQSxjQUFJLENBQUNuSyxHQUFMLENBQVN1SCxTQUFULEdBQXFCLFNBQXJCOztBQUNBLGNBQUksQ0FBQ3ZILEdBQUwsQ0FBU29LLElBQVQsR0E5QjBCLENBZ0MxQjs7O0FBQ0EsY0FBSSxDQUFDcEssR0FBTCxDQUFTNkosU0FBVDs7QUFDQSxjQUFJLENBQUM3SixHQUFMLENBQVM4SixNQUFULENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCOztBQUNBLGNBQUksQ0FBQzlKLEdBQUwsQ0FBUytKLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUIsR0FBckI7O0FBQ0EsY0FBSSxDQUFDL0osR0FBTCxDQUFTK0osTUFBVCxDQUFnQixHQUFoQixFQUFxQixHQUFyQjs7QUFDQSxjQUFJLENBQUMvSixHQUFMLENBQVNnSyxTQUFUOztBQUVBLGNBQUksQ0FBQ2hLLEdBQUwsQ0FBU2lLLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxjQUFJLENBQUNqSyxHQUFMLENBQVNrSyxXQUFULEdBQXVCLFNBQXZCOztBQUNBLGNBQUksQ0FBQ2xLLEdBQUwsQ0FBU21LLE1BQVQ7O0FBRUEsY0FBSSxDQUFDbkssR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjs7QUFDQSxjQUFJLENBQUN2SCxHQUFMLENBQVNvSyxJQUFULEdBNUMwQixDQStDMUI7OztBQUNBLGFBQUssSUFBSVcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixjQUFJSSxTQUFTLEdBQUcsa0JBQWhCOztBQUNBLGNBQUksQ0FBQyxNQUFJLENBQUNkLFlBQUwsR0FBb0IsQ0FBckIsSUFBMEIsQ0FBMUIsR0FBOEJVLENBQTlCLElBQW1DLE1BQUksQ0FBQ0QsZUFBNUMsRUFBNkQ7QUFDekRLLHFCQUFTLEdBQUcsTUFBSSxDQUFDVixVQUFMLENBQWdCTSxDQUFoQixDQUFaO0FBQ0g7O0FBQ0QsY0FBSUMsU0FBUyxHQUFHRCxDQUFDLEdBQUcsR0FBcEI7QUFFQSxnQkFBSSxDQUFDL0ssR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixlQUFyQjs7QUFDQSxnQkFBSSxDQUFDdkgsR0FBTCxDQUFTb0ksUUFBVCxDQUFrQixNQUFNNEMsU0FBeEIsRUFBa0MsR0FBbEMsRUFBc0MsRUFBdEMsRUFBeUMsRUFBekM7O0FBQ0EsZ0JBQUksQ0FBQ2hMLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUI0RCxTQUFyQjs7QUFDQSxnQkFBSSxDQUFDbkwsR0FBTCxDQUFTb0ksUUFBVCxDQUFrQixNQUFNNEMsU0FBeEIsRUFBa0MsR0FBbEMsRUFBc0MsRUFBdEMsRUFBeUMsRUFBekM7O0FBQ0EsZ0JBQUksQ0FBQ2hMLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsWUFBckI7O0FBQ0EsZ0JBQUksQ0FBQ3ZILEdBQUwsQ0FBU2tJLFFBQVQsQ0FBa0IsQ0FBQzZDLENBQUMsR0FBRyxDQUFMLEVBQVE1QyxRQUFSLEVBQWxCLEVBQXNDLE1BQU02QyxTQUE1QyxFQUF1RCxHQUF2RDtBQUNILFNBN0R5QixDQStEMUI7OztBQUNBLFlBQUlJLFdBQVcsR0FBRyxJQUFJdkssS0FBSixFQUFsQjs7QUFDQSxZQUFJLE1BQUksQ0FBQ3lKLFVBQVQsRUFBcUI7QUFDakJjLHFCQUFXLENBQUMvSixHQUFaLEdBQWtCLDBCQUFsQjtBQUNILFNBRkQsTUFFTztBQUNIK0oscUJBQVcsQ0FBQy9KLEdBQVosR0FBa0IseUJBQWxCO0FBQ0g7O0FBQ0QsY0FBSSxDQUFDckIsR0FBTCxDQUFTc0IsU0FBVCxDQUFtQjhKLFdBQW5CLEVBQWdDLEdBQWhDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBdEUwQixDQXdFMUI7OztBQUNBLFlBQUlDLFdBQVcsR0FBRyxJQUFJeEssS0FBSixFQUFsQjs7QUFDQSxZQUFJLE1BQUksQ0FBQ2UsVUFBVCxFQUFxQjtBQUNqQnlKLHFCQUFXLENBQUNoSyxHQUFaLEdBQWtCLDBCQUFsQjtBQUNILFNBRkQsTUFFTztBQUNIZ0sscUJBQVcsQ0FBQ2hLLEdBQVosR0FBa0IseUJBQWxCO0FBQ0g7O0FBQ0QsY0FBSSxDQUFDckIsR0FBTCxDQUFTc0IsU0FBVCxDQUFtQitKLFdBQW5CLEVBQWdDLEdBQWhDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBL0UwQixDQWtGMUI7OztBQUNBLGNBQUksQ0FBQ3JMLEdBQUwsQ0FBU3VILFNBQVQsR0FBcUIsU0FBckI7QUFDQSxjQUFJLENBQUN2SCxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQjs7QUFDQSxjQUFJLENBQUNqSSxHQUFMLENBQVNrSSxRQUFULHNCQUFnQyxNQUFJLENBQUNzQyxRQUFyQyxHQUFpRCxHQUFqRCxFQUFzRCxHQUF0RDs7QUFDQSxjQUFJLENBQUN4SyxHQUFMLENBQVNrSSxRQUFULHdCQUFrQyxNQUFJLENBQUNoQyxVQUF2QyxHQUFxRCxHQUFyRCxFQUEwRCxHQUExRCxFQXRGMEIsQ0F3RjFCOzs7QUFFQSxjQUFJLENBQUNsRyxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQjs7QUFDQSxjQUFJLENBQUNqSSxHQUFMLENBQVNrSSxRQUFULENBQWtCLFVBQWxCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDOztBQUVBLFlBQUksTUFBSSxDQUFDbEcsWUFBVCxFQUF1QjtBQUNuQixnQkFBSSxDQUFDaEMsR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixpQkFBckI7O0FBQ0EsZ0JBQUksQ0FBQ3ZILEdBQUwsQ0FBU29JLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsTUFBSSxDQUFDdEksTUFBTCxDQUFZSSxLQUFsQyxFQUF5QyxNQUFJLENBQUNKLE1BQUwsQ0FBWUssTUFBckQ7O0FBRUEsZ0JBQUksQ0FBQ0gsR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixTQUFyQjtBQUNBLGdCQUFJLENBQUN2SCxHQUFMLENBQVNpSSxJQUFULEdBQWdCLHVCQUFoQjs7QUFDQSxnQkFBSSxDQUFDakksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixhQUFsQixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0Qzs7QUFDQSxnQkFBSSxDQUFDbEksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixjQUFsQixFQUFrQyxHQUFsQyxFQUF1QyxHQUF2Qzs7QUFDQSxnQkFBSSxDQUFDbEksR0FBTCxDQUFTa0ksUUFBVCxDQUFrQixhQUFsQixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0Qzs7QUFDQSxnQkFBSSxDQUFDbEksR0FBTCxDQUFTaUksSUFBVCxHQUFnQix1QkFBaEI7O0FBQ0EsZ0JBQUksQ0FBQ2pJLEdBQUwsQ0FBU2tJLFFBQVQsQ0FBa0IsdURBQWxCLEVBQTJFLEVBQTNFLEVBQStFLEdBQS9FOztBQUNBLGdCQUFJLENBQUNsSSxHQUFMLENBQVNrSSxRQUFULENBQWtCLG9EQUFsQixFQUF3RSxHQUF4RSxFQUE2RSxHQUE3RTtBQUNIO0FBQ0osT0ExR3NCLEVBMEdyQixFQTFHcUIsQ0FBdkI7QUE0R0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1FMLElBQU1vRCxRQUFRLEdBQUcsRUFBakI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsRUFBakI7O0lBRXFCaEssWTtBQUNqQix3QkFBWXpCLE1BQVosRUFBb0JFLEdBQXBCLEVBQXlCUSxDQUF6QixFQUE0QkMsQ0FBNUIsRUFBK0JOLE1BQS9CLEVBQXVDRCxLQUF2QyxFQUE4QztBQUFBOztBQUMxQyxTQUFLSixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLUSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLUCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OztXQUVELHNCQUFhWSxJQUFiLEVBQW1CQyxJQUFuQixFQUF5QjtBQUNyQixVQUFJRCxJQUFJLEdBQUd1SyxRQUFQLEdBQWtCLEtBQUs5SyxDQUF2QixJQUE0Qk8sSUFBSSxHQUFHdUssUUFBUCxHQUFrQixLQUFLOUssQ0FBTCxHQUFTLEtBQUtOLEtBQTVELElBQXFFYyxJQUFJLEdBQUd1SyxRQUFQLEdBQWtCLENBQWxCLEdBQXNCLEtBQUs5SyxDQUFoRyxJQUFxR08sSUFBSSxHQUFHdUssUUFBUCxHQUFrQixDQUFsQixHQUFzQixLQUFLOUssQ0FBTCxHQUFTLEtBQUtOLE1BQTdJLEVBQXFKO0FBQ2pKLGVBQU8sSUFBUDtBQUNIOztBQUNELGFBQU8sS0FBUDtBQUNIOzs7V0FFRCxzQkFBYVksSUFBYixFQUFtQkMsSUFBbkIsRUFBeUI7QUFDckIsVUFBSUEsSUFBSSxHQUFHdUssUUFBUCxHQUFrQixLQUFLOUssQ0FBdkIsSUFBNEJPLElBQUksR0FBRyxLQUFLUCxDQUFMLEdBQVMsS0FBS04sTUFBakQsSUFBMkRZLElBQUksR0FBR3VLLFFBQVAsR0FBa0IsQ0FBbEIsR0FBc0IsS0FBSzlLLENBQXRGLElBQTJGTyxJQUFJLEdBQUd1SyxRQUFQLEdBQWtCLENBQWxCLEdBQXNCLEtBQUs5SyxDQUFMLEdBQVMsS0FBS04sS0FBbkksRUFBMEk7QUFDdEksZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsYUFBTyxLQUFQO0FBQ0g7OztXQUVELGtCQUFTO0FBQ0wsV0FBS0YsR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixlQUFyQjtBQUNBLFdBQUt2SCxHQUFMLENBQVNvSSxRQUFULENBQWtCLEtBQUs1SCxDQUF2QixFQUEwQixLQUFLQyxDQUEvQixFQUFrQyxLQUFLUCxLQUF2QyxFQUE4QyxLQUFLQyxNQUFuRDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVCZ0J1RSxpQjtBQUNqQiw2QkFBWTVFLE1BQVosRUFBb0JFLEdBQXBCLEVBQXlCd0wsR0FBekIsRUFBOEJoTCxDQUE5QixFQUFpQ0MsQ0FBakMsRUFBb0NQLEtBQXBDLEVBQTJDQyxNQUEzQyxFQUFtRDtBQUFBOztBQUMvQyxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLd0wsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS2hMLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtQLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUVBLFNBQUs4RixHQUFMLEdBQVcsSUFBSXBGLEtBQUosRUFBWDtBQUVIOzs7O1dBRUQsa0JBQVM7QUFDTCxXQUFLb0YsR0FBTCxDQUFTNUUsR0FBVCxHQUFlLEtBQUttSyxHQUFwQjtBQUNBLFdBQUt4TCxHQUFMLENBQVNzQixTQUFULENBQW1CLEtBQUsyRSxHQUF4QixFQUE2QixLQUFLekYsQ0FBbEMsRUFBcUMsS0FBS0MsQ0FBMUMsRUFBNkMsS0FBS1AsS0FBbEQsRUFBeUQsS0FBS0MsTUFBOUQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqQmdCMkUsUztBQUNqQixxQkFBWWhGLE1BQVosRUFBb0JFLEdBQXBCLEVBQXlCeUwsT0FBekIsRUFBa0NqTCxDQUFsQyxFQUFxQ0MsQ0FBckMsRUFBd0M7QUFBQTs7QUFDcEMsU0FBS2tJLFVBQUwsR0FBa0I3SSxNQUFsQjtBQUNBLFNBQUs4SSxPQUFMLEdBQWU1SSxHQUFmO0FBRUEsU0FBS0YsTUFBTCxHQUFjRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLRixNQUFMLENBQVlHLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFNBQUtILE1BQUwsQ0FBWUksS0FBWixHQUFvQixHQUFwQjtBQUNBLFNBQUtKLE1BQUwsQ0FBWUssTUFBWixHQUFxQixHQUFyQjtBQUVBLFNBQUtzTCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLakwsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2lMLFNBQUwsR0FBaUIscUJBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLGlCQUFmO0FBRUEsUUFBSUMsS0FBSyxHQUFHLEtBQUtILE9BQUwsQ0FBYUksS0FBYixDQUFtQixHQUFuQixDQUFaO0FBQ0EsUUFBSUMsR0FBRyxHQUFHRixLQUFLLENBQUNuSCxNQUFoQjtBQUNBLFNBQUtzSCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsUUFBSXpELEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSTBELE9BQU8sR0FBRyxFQUFkOztBQUNBLFNBQUssSUFBSWpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdlLEdBQXBCLEVBQXlCZixDQUFDLEVBQTFCLEVBQThCO0FBQzFCekMsV0FBSyxJQUFJc0QsS0FBSyxDQUFDYixDQUFELENBQUwsQ0FBU3RHLE1BQWxCOztBQUNBLFVBQUk2RCxLQUFLLElBQUksRUFBYixFQUFpQjtBQUNiMEQsZUFBTyxDQUFDekgsSUFBUixDQUFhcUgsS0FBSyxDQUFDYixDQUFELENBQWxCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS2dCLFFBQUwsQ0FBY3hILElBQWQsQ0FBbUJ5SCxPQUFuQjtBQUNBQSxlQUFPLEdBQUcsRUFBVjtBQUNBMUQsYUFBSyxHQUFHLENBQVI7QUFDQXlDLFNBQUM7QUFDSjs7QUFDRHpDLFdBQUs7QUFDUjs7QUFDRCxTQUFLeUQsUUFBTCxDQUFjeEgsSUFBZCxDQUFtQnlILE9BQW5CO0FBQ0EsU0FBS3ZMLENBQUwsR0FBUyxLQUFLWCxNQUFMLENBQVlLLE1BQVosR0FBbUIsQ0FBbkIsR0FBdUIsS0FBSzRMLFFBQUwsQ0FBY3RILE1BQWQsR0FBdUIsQ0FBdkQ7QUFDSDs7OztXQUVELGtCQUFTO0FBQUE7O0FBQ0xVLGdCQUFVLENBQUUsWUFBTTtBQUNkd0IscUJBQWEsQ0FBQ3NGLFVBQUQsQ0FBYjs7QUFDQSxhQUFJLENBQUMzTCxNQUFMOztBQUNBNkUsa0JBQVUsQ0FBQyxZQUFNO0FBQ2IsZUFBSSxDQUFDK0csT0FBTDtBQUNILFNBRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxPQU5TLEVBTVAsSUFOTyxDQUFWO0FBT0EsVUFBSTVELEtBQUssR0FBRyxDQUFaO0FBQ0EsVUFBSTJELFVBQVUsR0FBRzVFLFdBQVcsQ0FBQyxZQUFNO0FBQy9CaUIsYUFBSztBQUNMLFlBQUk2RCxXQUFXLEdBQUc3RCxLQUFLLEdBQUcsR0FBMUI7QUFDQSxZQUFJOEQsU0FBUyxHQUFHOUQsS0FBSyxHQUFHLEdBQVIsR0FBYyxHQUE5QjtBQUNBLGFBQUksQ0FBQ29ELFNBQUwsOEJBQXFDUyxXQUFyQztBQUNBLGFBQUksQ0FBQ1IsT0FBTCx3QkFBNkJTLFNBQTdCOztBQUNBLGFBQUksQ0FBQzlMLE1BQUw7QUFDSCxPQVAyQixFQU96QixFQVB5QixDQUE1QjtBQVFIOzs7V0FFRCxtQkFBVTtBQUFBOztBQUNONkUsZ0JBQVUsQ0FBRSxZQUFNO0FBQ2R3QixxQkFBYSxDQUFDMEYsV0FBRCxDQUFiOztBQUNBLGNBQUksQ0FBQzVDLEtBQUw7QUFDSCxPQUhTLEVBR1AsSUFITyxDQUFWO0FBSUEsVUFBSW5CLEtBQUssR0FBRyxDQUFaO0FBQ0EsVUFBSStELFdBQVcsR0FBR2hGLFdBQVcsQ0FBQyxZQUFNO0FBQ2hDaUIsYUFBSztBQUNMLFlBQUk2RCxXQUFXLEdBQUcsSUFBSzdELEtBQUssR0FBRyxHQUEvQjtBQUNBLFlBQUk4RCxTQUFTLEdBQUcsTUFBTzlELEtBQUssR0FBRyxHQUFSLEdBQWMsR0FBckM7QUFDQSxjQUFJLENBQUNvRCxTQUFMLDhCQUFxQ1MsV0FBckM7QUFDQSxjQUFJLENBQUNSLE9BQUwsd0JBQTZCUyxTQUE3Qjs7QUFDQSxjQUFJLENBQUM5TCxNQUFMO0FBQ0gsT0FQNEIsRUFPMUIsRUFQMEIsQ0FBN0I7QUFTSDs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLUixNQUFMLENBQVk0SixTQUFaLENBQXNCRSxHQUF0QixDQUEwQixRQUExQjtBQUNBLFdBQUswQyxNQUFMO0FBQ0g7OztXQUVELGlCQUFRO0FBQ0osV0FBS3RNLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzFDLE1BQUwsQ0FBWUksS0FBckMsRUFBNEMsS0FBS0osTUFBTCxDQUFZSyxNQUF4RDtBQUNBLFdBQUtMLE1BQUwsQ0FBWTRKLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0g7OztXQUVELGtCQUFTO0FBRUwsV0FBSzNKLEdBQUwsQ0FBU3dDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzFDLE1BQUwsQ0FBWUksS0FBckMsRUFBNEMsS0FBS0osTUFBTCxDQUFZSyxNQUF4RCxFQUZLLENBSUw7O0FBQ0EsV0FBS0gsR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixnQkFBckI7QUFDQSxXQUFLdkgsR0FBTCxDQUFTb0ksUUFBVCxDQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixLQUFLdEksTUFBTCxDQUFZSSxLQUFsQyxFQUF5QyxLQUFLSixNQUFMLENBQVlLLE1BQXJEO0FBRUEsV0FBS0gsR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixLQUFLbUUsU0FBMUI7QUFDQSxXQUFLMUwsR0FBTCxDQUFTaUksSUFBVCxHQUFnQix1QkFBaEI7O0FBR0EsV0FBSyxJQUFJOEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLZ0IsUUFBTCxDQUFjdEgsTUFBbEMsRUFBMENzRyxDQUFDLEVBQTNDLEVBQWdEO0FBQzVDLFlBQUl3QixJQUFJLEdBQUcsS0FBS1IsUUFBTCxDQUFjaEIsQ0FBZCxFQUFpQnlCLElBQWpCLENBQXNCLEdBQXRCLENBQVg7QUFDQSxZQUFJQyxNQUFNLEdBQUcsQ0FBQyxNQUFNRixJQUFJLENBQUM5SCxNQUFMLEdBQWMsRUFBckIsSUFBeUIsQ0FBdEM7QUFDQSxhQUFLekUsR0FBTCxDQUFTa0ksUUFBVCxDQUFrQnFFLElBQWxCLEVBQXdCLEtBQUsvTCxDQUFMLEdBQVNpTSxNQUFqQyxFQUF5QyxLQUFLaE0sQ0FBTCxHQUFVc0ssQ0FBQyxHQUFHLEVBQXZELEVBQTRELEdBQTVEO0FBQ0g7QUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdMO0FBQUE7QUFBQTtBQUNPLElBQU1ySSxTQUFTLEdBQUcsQ0FDckI7QUFDQSxDQUNJO0FBQ0E7QUFDSVEsZ0JBQWMsRUFBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLENBRG5CO0FBRUlpQixlQUFhLEVBQUUsQ0FDWDtBQUNJM0QsS0FBQyxFQUFFLEVBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBRSwrQkFMWjtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQURXLEVBVVg7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUMsK0JBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FWVyxFQW1CWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQywrQkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQW5CVyxFQTRCWDtBQUNJcEUsS0FBQyxFQUFFLEVBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQywrQkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQTVCVyxDQUZuQjtBQXdDSVYsV0FBUyxFQUFFLENBQUMsR0FBRCxFQUFLLEVBQUwsQ0F4Q2Y7QUF5Q0lyQixTQUFPLEVBQUUsQ0FBQyxHQXpDZDtBQTBDSWdDLFdBQVMsRUFBRTtBQTFDZixDQUZKLEVBOENJO0FBQ0E7QUFDSTNCLGdCQUFjLEVBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxDQURuQjtBQUVJaUIsZUFBYSxFQUFFLENBQ1g7QUFDSTNELEtBQUMsRUFBRSxFQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUMsK0JBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FEVyxFQVVYO0FBQ0lwRSxLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsQ0FIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLDhCQUxYO0FBTUlHLFdBQU8sRUFBRSxFQU5iO0FBT0lDLGFBQVMsRUFBRTtBQVBmLEdBVlcsRUFtQlg7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsOEJBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FuQlcsRUE0Qlg7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsOEJBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0E1QlcsRUFxQ1g7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUMsK0JBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FyQ1csRUE4Q1g7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsOEJBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0E5Q1csRUF1RFg7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUMsZ0NBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0F2RFcsRUFnRVg7QUFDSXBFLEtBQUMsRUFBRSxFQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUMsK0JBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FoRVcsQ0FGbkI7QUE0RUlWLFdBQVMsRUFBRSxDQUFDLEdBQUQsRUFBSyxFQUFMLENBNUVmO0FBNkVJckIsU0FBTyxFQUFFLENBQUM7QUE3RWQsQ0EvQ0osRUE4SEk7QUFDQTtBQUNJSyxnQkFBYyxFQUFDLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FEbkI7QUFFSWlCLGVBQWEsRUFBRSxDQUNYO0FBQ0kzRCxLQUFDLEVBQUUsRUFEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsQ0FIWjtBQUlJRCxTQUFLLEVBQUUsR0FKWDtBQUtJc0UsVUFBTSxFQUFDLCtCQUxYO0FBTUlHLFdBQU8sRUFBRSxFQU5iO0FBT0lDLGFBQVMsRUFBRTtBQVBmLEdBRFcsRUFVWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFDLEdBRk47QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyw4QkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQVZXLEVBbUJYO0FBQ0lwRSxLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUMsR0FGTjtBQUdJTixVQUFNLEVBQUUsQ0FIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLDhCQUxYO0FBTUlHLFdBQU8sRUFBRSxFQU5iO0FBT0lDLGFBQVMsRUFBRTtBQVBmLEdBbkJXLEVBNEJYO0FBQ0lwRSxLQUFDLEVBQUUsRUFEUDtBQUVJQyxLQUFDLEVBQUMsR0FGTjtBQUdJTixVQUFNLEVBQUUsQ0FIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLDhCQUxYO0FBTUlHLFdBQU8sRUFBRSxFQU5iO0FBT0lDLGFBQVMsRUFBRTtBQVBmLEdBNUJXLEVBcUNYO0FBQ0lwRSxLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUMsR0FGTjtBQUdJTixVQUFNLEVBQUUsQ0FIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLDhCQUxYO0FBTUlHLFdBQU8sRUFBRSxFQU5iO0FBT0lDLGFBQVMsRUFBRTtBQVBmLEdBckNXLENBRm5CO0FBaURJVixXQUFTLEVBQUUsQ0FBQyxHQUFELEVBQUssR0FBTCxDQWpEZjtBQWtESXJCLFNBQU8sRUFBRSxDQUFDO0FBbERkLENBL0hKLEVBbUxJO0FBQ0E7QUFDSUssZ0JBQWMsRUFBQyxDQUFDLEVBQUQsRUFBSSxHQUFKLENBRG5CO0FBRUlpQixlQUFhLEVBQUUsQ0FDWDtBQUNJM0QsS0FBQyxFQUFFLEVBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyw4QkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQURXLEVBVVg7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsOEJBTFg7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FWVyxFQW1CWDtBQUNJcEUsS0FBQyxFQUFFLEVBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyw4QkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQW5CVyxFQTRCWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyw4QkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQTVCVyxFQXFDWDtBQUNJcEUsS0FBQyxFQUFFLEVBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyw4QkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQXJDVyxFQThDWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyw4QkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQTlDVyxFQXVEWDtBQUNJcEUsS0FBQyxFQUFFLEVBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyw4QkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQXZEVyxFQWdFWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEVBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQywrQkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQWhFVyxFQXlFWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQyxnQ0FMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQXpFVyxFQWtGWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQyxnQ0FMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQWxGVyxFQTJGWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQyxnQ0FMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQTNGVyxFQW9HWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQyxnQ0FMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQXBHVyxFQTZHWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLENBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQywrQkFMWDtBQU1JRyxXQUFPLEVBQUUsRUFOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQTdHVyxDQUZuQjtBQTBISVYsV0FBUyxFQUFFLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0ExSGY7QUEySElyQixTQUFPLEVBQUUsQ0FBQztBQTNIZCxDQXBMSixFQWlUSTtBQUNBO0FBQ0lLLGdCQUFjLEVBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxDQURuQjtBQUVJaUIsZUFBYSxFQUFFLENBQ1g7QUFDSTNELEtBQUMsRUFBRSxFQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxDQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUUsK0JBTFo7QUFNSUcsV0FBTyxFQUFFLEVBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FEVyxDQUZuQjtBQWFJVixXQUFTLEVBQUUsQ0FBQyxHQUFELEVBQUssR0FBTCxDQWJmO0FBY0lyQixTQUFPLEVBQUUsQ0FBQyxHQWRkO0FBZUlnQyxXQUFTLEVBQUU7QUFmZixDQWxUSixDQUZxQixFQXVVckI7QUFDQSxDQUNJO0FBQ0E7QUFDSTNCLGdCQUFjLEVBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxDQURuQjtBQUVJaUIsZUFBYSxFQUFFLENBQ1g7QUFDSTNELEtBQUMsRUFBRSxFQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUUscUNBTFo7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FEVyxFQVVYO0FBQ0lwRSxLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLHdDQUxYO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRSxFQVBmO0FBUUlrQixRQUFJLEVBQUUsSUFSVjtBQVNJRSxZQUFRLEVBQUU7QUFUZCxHQVZXLEVBcUJYO0FBQ0l4RixLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLHdDQUxYO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRSxFQVBmO0FBUUlrQixRQUFJLEVBQUUsSUFSVjtBQVNJRSxZQUFRLEVBQUU7QUFUZCxHQXJCVyxFQWdDWDtBQUNJeEYsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyx3Q0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUUsRUFQZjtBQVFJa0IsUUFBSSxFQUFFLElBUlY7QUFTSUUsWUFBUSxFQUFFO0FBVGQsR0FoQ1csRUEyQ1g7QUFDSXhGLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsd0NBTFg7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFLEVBUGY7QUFRSWtCLFFBQUksRUFBRSxJQVJWO0FBU0lFLFlBQVEsRUFBRTtBQVRkLEdBM0NXLEVBc0RYO0FBQ0l4RixLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLHdDQUxYO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRSxFQVBmO0FBUUlrQixRQUFJLEVBQUUsSUFSVjtBQVNJRSxZQUFRLEVBQUU7QUFUZCxHQXREVyxFQWlFWDtBQUNJeEYsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyx3Q0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUUsRUFQZjtBQVFJa0IsUUFBSSxFQUFFLElBUlY7QUFTSUUsWUFBUSxFQUFFO0FBVGQsR0FqRVcsRUE0RVg7QUFDSXhGLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUUscUNBTFo7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0E1RVcsQ0FGbkI7QUF5RklWLFdBQVMsRUFBRSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBekZmO0FBMEZJckIsU0FBTyxFQUFFLENBQUMsR0ExRmQ7QUEyRklnQyxXQUFTLEVBQUU7QUEzRmYsQ0FGSixFQStGSTtBQUNBO0FBQ0kzQixnQkFBYyxFQUFDLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FEbkI7QUFFSWlCLGVBQWEsRUFBRSxDQUNYO0FBQ0kzRCxLQUFDLEVBQUUsRUFEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsR0FKWDtBQUtJc0UsVUFBTSxFQUFFLHFDQUxaO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRTtBQVBmLEdBRFcsRUFVWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyx3Q0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUUsRUFQZjtBQVFJa0IsUUFBSSxFQUFFLElBUlY7QUFTSUUsWUFBUSxFQUFFO0FBVGQsR0FWVyxFQXFCWDtBQUNJeEYsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyx3Q0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUUsRUFQZjtBQVFJa0IsUUFBSSxFQUFFLElBUlY7QUFTSUUsWUFBUSxFQUFFO0FBVGQsR0FyQlcsRUFnQ1g7QUFDSXhGLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsd0NBTFg7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFLEVBUGY7QUFRSWtCLFFBQUksRUFBRSxJQVJWO0FBU0lFLFlBQVEsRUFBRTtBQVRkLEdBaENXLEVBMkNYO0FBQ0l4RixLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLHdDQUxYO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRSxFQVBmO0FBUUlrQixRQUFJLEVBQUUsSUFSVjtBQVNJRSxZQUFRLEVBQUU7QUFUZCxHQTNDVyxFQXNEWDtBQUNJeEYsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyx3Q0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUUsRUFQZjtBQVFJa0IsUUFBSSxFQUFFLElBUlY7QUFTSUUsWUFBUSxFQUFFO0FBVGQsR0F0RFcsRUFpRVg7QUFDSXhGLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsd0NBTFg7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFLEVBUGY7QUFRSWtCLFFBQUksRUFBRSxJQVJWO0FBU0lFLFlBQVEsRUFBRTtBQVRkLEdBakVXLEVBNEVYO0FBQ0l4RixLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsR0FKWDtBQUtJc0UsVUFBTSxFQUFFLHFDQUxaO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRTtBQVBmLEdBNUVXLENBRm5CO0FBeUZJVixXQUFTLEVBQUUsQ0FBQyxHQUFELEVBQUssR0FBTCxDQXpGZjtBQTBGSXJCLFNBQU8sRUFBRSxDQUFDLEdBMUZkO0FBMkZJZ0MsV0FBUyxFQUFFO0FBM0ZmLENBaEdKLEVBNkxJO0FBQ0E7QUFDSTNCLGdCQUFjLEVBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxDQURuQjtBQUVJaUIsZUFBYSxFQUFFLENBQ1g7QUFDSTNELEtBQUMsRUFBRSxFQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUUscUNBTFo7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0FEVyxFQVVYO0FBQ0lwRSxLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLHdDQUxYO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRSxFQVBmO0FBUUlrQixRQUFJLEVBQUUsSUFSVjtBQVNJRSxZQUFRLEVBQUU7QUFUZCxHQVZXLEVBcUJYO0FBQ0l4RixLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLHdDQUxYO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRSxFQVBmO0FBUUlrQixRQUFJLEVBQUUsSUFSVjtBQVNJRSxZQUFRLEVBQUU7QUFUZCxHQXJCVyxFQWdDWDtBQUNJeEYsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEVBSlg7QUFLSXNFLFVBQU0sRUFBQyx3Q0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUUsRUFQZjtBQVFJa0IsUUFBSSxFQUFFLElBUlY7QUFTSUUsWUFBUSxFQUFFO0FBVGQsR0FoQ1csRUEyQ1g7QUFDSXhGLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxHQUpYO0FBS0lzRSxVQUFNLEVBQUMscUNBTFg7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFO0FBUGYsR0EzQ1csRUFvRFg7QUFDSXBFLEtBQUMsRUFBRSxHQURQO0FBRUlDLEtBQUMsRUFBRSxHQUZQO0FBR0lOLFVBQU0sRUFBRSxFQUhaO0FBSUlELFNBQUssRUFBRSxFQUpYO0FBS0lzRSxVQUFNLEVBQUMsd0NBTFg7QUFNSUcsV0FBTyxFQUFFLENBTmI7QUFPSUMsYUFBUyxFQUFFLEVBUGY7QUFRSWtCLFFBQUksRUFBRSxJQVJWO0FBU0lFLFlBQVEsRUFBRTtBQVRkLEdBcERXLEVBK0RYO0FBQ0l4RixLQUFDLEVBQUUsR0FEUDtBQUVJQyxLQUFDLEVBQUUsR0FGUDtBQUdJTixVQUFNLEVBQUUsRUFIWjtBQUlJRCxTQUFLLEVBQUUsRUFKWDtBQUtJc0UsVUFBTSxFQUFDLHdDQUxYO0FBTUlHLFdBQU8sRUFBRSxDQU5iO0FBT0lDLGFBQVMsRUFBRSxFQVBmO0FBUUlrQixRQUFJLEVBQUUsSUFSVjtBQVNJRSxZQUFRLEVBQUU7QUFUZCxHQS9EVyxFQTBFWDtBQUNJeEYsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQyxxQ0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQTFFVyxFQW1GWDtBQUNJcEUsS0FBQyxFQUFFLENBRFA7QUFFSUMsS0FBQyxFQUFFLEdBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBQyxxQ0FMWDtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUU7QUFQZixHQW5GVyxFQTRGWDtBQUNJcEUsS0FBQyxFQUFFLEdBRFA7QUFFSUMsS0FBQyxFQUFFLEVBRlA7QUFHSU4sVUFBTSxFQUFFLEVBSFo7QUFJSUQsU0FBSyxFQUFFLEdBSlg7QUFLSXNFLFVBQU0sRUFBRSx5Q0FMWjtBQU1JRyxXQUFPLEVBQUUsQ0FOYjtBQU9JQyxhQUFTLEVBQUUsRUFQZjtBQVFJa0IsUUFBSSxFQUFFLElBUlY7QUFTSUUsWUFBUSxFQUFFO0FBVGQsR0E1RlcsQ0FGbkI7QUEwR0k5QixXQUFTLEVBQUUsQ0FBQyxHQUFELEVBQUssRUFBTCxDQTFHZjtBQTJHSXJCLFNBQU8sRUFBRSxDQUFDO0FBM0dkLENBOUxKLENBeFVxQixDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7O0lBR3FCa0QsWTs7Ozs7QUFDakIsd0JBQVlqRyxNQUFaLEVBQW9CRSxHQUFwQixFQUF5QlEsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCTixNQUEvQixFQUF1Q0QsS0FBdkMsRUFBOEM4RixRQUE5QyxFQUF3RHhCLE1BQXhELEVBQWdFM0IsT0FBaEUsRUFBeUU7QUFBQTs7QUFBQTs7QUFDckUsOEJBQU0vQyxNQUFOLEVBQWNFLEdBQWQsRUFBbUJRLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5Qk4sTUFBekIsRUFBaUNELEtBQWpDO0FBQ0EsVUFBSzhGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS3hCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUszQixPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLb0QsR0FBTCxHQUFXLElBQUlwRixLQUFKLEVBQVg7QUFDQSxVQUFLa0gsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFVBQUsyRSxTQUFMLEdBQWlCLENBQWpCLENBUHFFLENBT2pEOztBQVBpRDtBQVF4RTs7OztXQUVELGdCQUFPO0FBQUE7O0FBQ0hsRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLFdBQUtzQixTQUFMLEdBQWlCLElBQWpCO0FBQ0E1QyxnQkFBVSxDQUFFLFlBQU07QUFDZHdCLHFCQUFhLENBQUNnRyxZQUFELENBQWI7QUFDSCxPQUZTLEVBRVAsQ0FBQyxLQUFLN00sTUFBTCxDQUFZSyxNQUFaLEdBQXFCLEtBQUtNLENBQTFCLEdBQThCLEdBQS9CLElBQXNDLEVBQXRDLEdBQTJDLEtBQUt1RixRQUZ6QyxDQUFWO0FBR0EsVUFBSXNDLEtBQUssR0FBRyxDQUFaO0FBQ0EsVUFBTXFFLFlBQVksR0FBR3RGLFdBQVcsQ0FBQyxZQUFNO0FBQ25DLFlBQUlpQixLQUFLLEdBQUcsTUFBSSxDQUFDdEMsUUFBTCxHQUFjLEdBQTFCLEVBQStCO0FBQzNCLGdCQUFJLENBQUMwRyxTQUFMLElBQWtCLE1BQUksQ0FBQzdKLE9BQXZCO0FBQ0EsZ0JBQUksQ0FBQ3BDLENBQUwsSUFBVSxNQUFJLENBQUNpTSxTQUFmO0FBQ0g7O0FBQ0RwRSxhQUFLO0FBQ1IsT0FOK0IsRUFNN0IsRUFONkIsQ0FBaEM7QUFPSDs7O1dBRUQsa0JBQVM7QUFDTCxXQUFLdEksR0FBTCxDQUFTdUgsU0FBVCxHQUFxQixlQUFyQjtBQUNBLFdBQUt2SCxHQUFMLENBQVNvSSxRQUFULENBQWtCLEtBQUs1SCxDQUF2QixFQUEwQixLQUFLQyxDQUEvQixFQUFrQyxLQUFLUCxLQUF2QyxFQUE4QyxLQUFLQyxNQUFuRDtBQUNBLFdBQUs4RixHQUFMLENBQVM1RSxHQUFULEdBQWUsS0FBS21ELE1BQXBCO0FBQ0EsV0FBS3hFLEdBQUwsQ0FBU3NCLFNBQVQsQ0FBbUIsS0FBSzJFLEdBQXhCLEVBQTZCLEtBQUt6RixDQUFsQyxFQUFxQyxLQUFLQyxDQUExQyxFQUE2QyxLQUFLUCxLQUFsRCxFQUF5RCxLQUFLQyxNQUE5RDtBQUNIOzs7O0VBaENxQ29CLHFEOzs7Ozs7Ozs7Ozs7OztBQ0gxQztBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvV29ybGQxRG9vci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Xb3JsZDJEb29yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2Zvb3RzdGVwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2p1bXBTb3VuZC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21haW5wYWdlX2JnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL21lbnVCbGlwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2UubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2VNZW51Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90YWJJY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby93b3JsZDFNdXNpYy5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJCRy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMkxhcmdlV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVdlYWtQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlNtYWxsV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZ1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3NjcmlwdHMvaG9tZXBhZ2UnXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWFpblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIGxldCBnYW1lRnJhbWUgPSAwO1xuXG5cbiAgICBuZXcgSG9tZVBhZ2UoY2FudmFzLCBjdHgpLnJlbmRlcigpO1xuXG4gICAgXG5cblxufSk7XG4iLCIvL2ltYWdlcyBcbmltcG9ydCBydW5SaWdodEltYWdlMSBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUzLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUyLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUzLnBuZydcblxuaW1wb3J0IFBvcnRhbEZyYW1lMSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUxLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWUzIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTMucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU0LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTUgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNS5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU2IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTYucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNyBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU3LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTggZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lOC5wbmcnXG5cbmltcG9ydCBXb3JsZDFEb29yIGZyb20gJy4uL2Fzc2V0cy9Xb3JsZDFEb29yLnBuZydcbmltcG9ydCBXb3JsZDJEb29yIGZyb20gJy4uL2Fzc2V0cy9Xb3JsZDJEb29yLnBuZydcblxuXG5pbXBvcnQgbGFyZ2VQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgbWVkaXVtUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL21lZGl1bVBsYXRmb3JtLnBuZydcbmltcG9ydCBzbWFsbFBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZydcbmltcG9ydCB0aW55UGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3RpbnlQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCB3b3JsZDJMYXJnZVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJNZWRpdW1QbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlNtYWxsUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlRpbnlQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyVGlueVBsYXRmb3JtLnBuZydcblxuaW1wb3J0IHdvcmxkMkxhcmdlV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyTWVkaXVtV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlNtYWxsV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyVGlueVdlYWtQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCBpZGxlRnJhbWUgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZS5wbmcnXG5pbXBvcnQgaWRsZUZyYW1lMiBmcm9tICcuLi9hc3NldHMvaWRsZUZyYW1lMi5wbmcnXG5cbmltcG9ydCBCRyBmcm9tICcuLi9hc3NldHMvbWFpbnBhZ2VfYmcucG5nJ1xuaW1wb3J0IHRhYkljb24gZnJvbSAnLi4vYXNzZXRzL3RhYkljb24ucG5nJ1xuaW1wb3J0IHdvcmxkMkJHIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJCRy5wbmcnXG5pbXBvcnQgbXVzaWNPbiBmcm9tICcuLi9hc3NldHMvbXVzaWNPbi5wbmcnXG5pbXBvcnQgbXVzaWNPZmYgZnJvbSAnLi4vYXNzZXRzL211c2ljT2ZmLnBuZydcbmltcG9ydCBzb3VuZE9uIGZyb20gJy4uL2Fzc2V0cy9zb3VuZE9uLnBuZydcbmltcG9ydCBzb3VuZE9mZiBmcm9tICcuLi9hc3NldHMvc291bmRPZmYucG5nJ1xuXG5cbi8vYXVkaW9cbmltcG9ydCBXb3JsZDFNdXNpYyBmcm9tICcuLi9hc3NldHMvd29ybGQxTXVzaWMubXAzJ1xuaW1wb3J0IGp1bXBTb3VuZCBmcm9tICcuLi9hc3NldHMvanVtcFNvdW5kLm1wMydcbmltcG9ydCBmb290c3RlcCBmcm9tICcuLi9hc3NldHMvZm9vdHN0ZXAubXAzJ1xuaW1wb3J0IG1lbnVCbGlwIGZyb20gJy4uL2Fzc2V0cy9tZW51QmxpcC5tcDMnXG5pbXBvcnQgcGF1c2VNZW51IGZyb20gJy4uL2Fzc2V0cy9wYXVzZU1lbnUubXAzJ1xuaW1wb3J0IHBhdXNlIGZyb20gJy4uL2Fzc2V0cy9wYXVzZS5tcDMnIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGl0IGV4dGVuZHMgSW50ZXJhY3RhYmxle1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoLCBsZXZlbE51bSwgd29ybGROdW0pIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcblxuXG4gICAgICAgIHRoaXMuZXhpdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGZyYW1lTnVtLCB4UG9zID0gdGhpcy54LCB5UG9zID0gdGhpcy55LCB3aWR0aCA9IDYwLCBoZWlnaHQgPSA4MCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICBsZXQgcG9ydGFsRnJhbWUgPSBmcmFtZU51bSAlIDEyMDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW1hZ2VOdW0gPSBNYXRoLmZsb29yKHBvcnRhbEZyYW1lLzE1KSArIDE7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvUG9ydGFsRnJhbWUke2N1cnJlbnRJbWFnZU51bX0ucG5nYFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvV29ybGQke3RoaXMud29ybGROdW19RG9vci5wbmdgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tICcuL2ludGVyYWN0YWJsZSdcbmltcG9ydCBHYW1lTWVudSBmcm9tICcuL2dhbWVtZW51J1xuaW1wb3J0IEV4aXQgZnJvbSAnLi9leGl0J1xuXG5pbXBvcnQgeyBMZXZlbERhdGEgfSBmcm9tICcuL2xldmVsZGF0YSdcbmltcG9ydCBJbnRlcmFjdGFibGVJbWFnZSBmcm9tICcuL2ludGVyYWN0YWJsZUltYWdlJ1xuaW1wb3J0IExldmVsVGV4dCBmcm9tICcuL2xldmVsVGV4dCdcbmltcG9ydCBXZWFrUGxhdGZvcm0gZnJvbSAnLi93ZWFrUGxhdGZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZU51bSA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWxUaW1lID0gNjAwMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IEdhbWVNZW51KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgXCJmYWlsZWRcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUsIHRoaXMuc2V0RGF0YS5iaW5kKHRoaXMpLCB0aGlzLnRvZ2dsZVBhdXNlLmJpbmQodGhpcyksIHRoaXMucmVuZGVyLmJpbmQodGhpcyksIHRoaXMucmVuZGVySG9tZSwgdGhpcy5nYW1lTXVzaWMsIHRoaXMubXVzaWNNdXRlZCwgdGhpcy50b2dnbGVTb3VuZE11dGVkLCB0aGlzLmdldFNvdW5kTXV0ZWQsIHRoaXMudG9nZ2xlU291bmRNdXRlZCk7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXVzZVNvdW5kID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL3BhdXNlLm1wMycpXG4gICAgICAgIHRoaXMucGF1c2VTb3VuZC52b2x1bWUgPSAwLjI7XG5cbiAgICAgICAgLy8gcGxheWVyIG1vdmVtZW50IHNvdW5kc1xuICAgICAgICB0aGlzLmp1bXBTb3VuZCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9qdW1wU291bmQubXAzJylcbiAgICAgICAgdGhpcy5qdW1wU291bmQudm9sdW1lID0gMC42O1xuICAgICAgICB0aGlzLmZvb3RzdGVwID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2Zvb3RzdGVwLm1wMycpXG4gICAgICAgIHRoaXMuZm9vdHN0ZXAudm9sdW1lID0gMC42O1xuXG4gICAgICAgIHRoaXMud29ybGRCR3MgPSBbXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvbWFpbnBhZ2VfYmcucG5nJyxcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy93b3JsZDJCRy5wbmcnLFxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5wb3J0YWxTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAvLyBzZXQgZXhpdCBsb2NhdGlvblxuICAgICAgICB0aGlzLmV4aXQgPSBuZXcgRXhpdCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1swXSx0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMV0sNzAsNzAsIHRoaXMubGV2ZWxOdW0sIHRoaXMud29ybGROdW0pO1xuXG4gICAgICAgIC8vIHNldCBpbnRlcmFjdGFibGVzIGZvciB0aGlzIHN0YWdlIGZyb20gc2VlZCBkYXRhXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsRGF0YS5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUueCwgaW50ZXJhY3RhYmxlLnksIGludGVyYWN0YWJsZS5oZWlnaHQsIGludGVyYWN0YWJsZS53aWR0aCkpO1xuICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pbWdVcmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dCA9IG5ldyBMZXZlbFRleHQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQsIDE2MCwyMDApXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ2QnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IHRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScgfHwgZXZlbnQua2V5ID09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0gPSAtdGhpcy5WRUxPQ0lUWV9YO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZmFjZVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnICcgJiYgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgJiYgIXRoaXMuUGxheWVyLmlzSnVtcGluZyApIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLmp1bXBTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5pc0p1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgNjApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLnBhdXNlU291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcgfHwgZXZlbnQua2V5ID09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJyB8fCBldmVudC5rZXkgPT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5pc0p1bXBpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiAwICYmIG1vdXNlWCA8IDEyNSAmJiBtb3VzZVkgPiAwICYmIG1vdXNlWSA8IDQ1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBzZXRHYW1lKG5ld0dhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3R2FtZTtcbiAgICB9XG5cbiAgICBzZXREYXRhKHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSkge1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDUwLDUwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLndlYWspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgV2Vha1BsYXRmb3JtKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgsIGludGVyYWN0YWJsZS5kdXJhdGlvbiwgaW50ZXJhY3RhYmxlLmltZ1VybCwgdGhpcy5HUkFWSVRZKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUueCwgaW50ZXJhY3RhYmxlLnksIGludGVyYWN0YWJsZS5oZWlnaHQsIGludGVyYWN0YWJsZS53aWR0aCkpO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaW1nVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlSW1hZ2UodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUuaW1nVXJsLGludGVyYWN0YWJsZS54LGludGVyYWN0YWJsZS55IC0gaW50ZXJhY3RhYmxlLnlPZmZzZXQsaW50ZXJhY3RhYmxlLndpZHRoLGludGVyYWN0YWJsZS5pbWdIZWlnaHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBuZXcgTGV2ZWxUZXh0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0LCAxNjAsMjAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgdG9nZ2xlUGF1c2UoKXtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5wYXVzZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1BsYXllcihpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBpbmNyZW1lbnREZWF0aENvdW50KCkge1xuICAgICAgICBsZXQgZGVhdGhDb3VudCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19IGRlYXRoIGNvdW50YCk7XG4gICAgICAgIGlmIChkZWF0aENvdW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19IGRlYXRoIGNvdW50YCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19IGRlYXRoIGNvdW50YCwgcGFyc2VJbnQoZGVhdGhDb3VudCkgKyAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCZXN0VGltZSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBiZXN0IHRpbWVgKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sZXZlbFRpbWUpXG4gICAgICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19IGJlc3QgdGltZWAsIHRoaXMubGV2ZWxUaW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxUaW1lID4gY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19IGJlc3QgdGltZWAsIHRoaXMubGV2ZWxUaW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoZ2FtZUxvb3ApIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuXG4gICAgICAgIHRoaXMuaW5jcmVtZW50RGVhdGhDb3VudCgpO1xuXG5cbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiZmFpbGVkXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgfVxuXG4gICAgbGV2ZWxDb21wbGV0ZShnYW1lTG9vcCkge1xuICAgICAgICAvLyBzZXQgbmV3IGxldmVsc0NvbXBsZXRlZCBsb2NhbFN0b3JhZ2UgdmFyaWFibGVcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgcGFyc2VJbnQoY3VycmVudCkgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFuaW1hdGlvbiBhdCBlbmQgb2YgbGV2ZWwgNVxuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsNUFuaW1hdGlvbihnYW1lTG9vcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcClcbiAgICAgICAgICAgIGxldCBuZXdCZXN0ID0gdGhpcy5jaGVja0Jlc3RUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJjb21wbGV0ZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIG5ld0Jlc3QsIHRoaXMubGV2ZWxUaW1lKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBhdXNlR2FtZShnYW1lTG9vcCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJwYXVzZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoc2tpcCA9IGZhbHNlKXtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxUZXh0ICE9IFwiXCIgJiYgIXNraXApIHsgICAgXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5vcGVuKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLndvcmxkTnVtIC0gMV19KWBcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIueSA+IDUwMCB8fCB0aGlzLmxldmVsVGltZSA8PSA5OSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoZ2FtZUxvb3ApXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIodGhpcy5mcmFtZU51bSk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VzXG4gICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGRyYXcgcGxheWVyXG4gICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG5cblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBmcmFtZSBpbWFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLm1vdmluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLmZvb3RzdGVwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5QbGF5ZXIuZnJhbWVOdW0gLyAxMClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZU51bSAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgb2JzdGFjbGUgY29sbGlzaW9uXG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5mYWxsICYmICFpbnRlcmFjdGFibGUuaXNGYWxsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUuZmFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxsXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgPSBpbnRlcmFjdGFibGUueTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBsZXZlbCBmaW5pc2ggXG4gICAgICAgICAgICBpZiAodGhpcy5leGl0LmlzQ29sbGlkaW5nWCh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQuaXNDb2xsaWRpbmdZKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb21wbGV0ZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIG1vdmVtZW50IGJhc2Ugb24gcGxheWVyIGNvbGxpc2lvblxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSB0aGlzLlBsYXllci52ZWxvY2l0eVswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07ICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ID0gdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgLSA1OTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICAgICAgLy9sZXZlbCBpbmZvIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfWAsIDM2NCwgNTApO1xuXG4gICAgICAgICAgICAvLyB0aW1lclxuICAgICAgICAgICAgdGhpcy5sZXZlbFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KE1hdGguZmxvb3IodGhpcy5sZXZlbFRpbWUvMTAwKS50b1N0cmluZygpLCA3MDAsIDUwKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGNvbnRyb2xzIGhvdmVyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnY29udHJvbHMnLCAyMCwgMzApXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjcpJ1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnV0FTRCAtIE1vdmUnLCAyOTAsIDE3MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnU3BhY2UgLSBKdW1wJywgMjcwLCAyMTApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0VzYyAtIFBhdXNlJywgMzEwLCAyNTApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTJweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnVXNlZnVsIFRpcDogSG9sZGluZyB0aGUgYXJyb3cga2V5IGluIHRoZSBkaXJlY3Rpb24gb2YnLCA5MCwgMzEwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdhIHdhbGwgd2hpbGUgY29sbGlkaW5nIHdpdGggaXQgd2lsbCBzbG93IHlvdXIgZmFsbCcsIDExMCwgMzMwKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZnJhbWVOdW0gPSAodGhpcy5QbGF5ZXIuZnJhbWVOdW0gKyAxKSAlIDQwXG4gICAgICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gKHRoaXMucG9ydGFsRnJhbWUgKyAxKSAlIDgwO1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lTnVtKys7XG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gYW5pbWF0aW9uc1xuXG4gICAgbGV2ZWw1QW5pbWF0aW9uKGdhbWVMb29wKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmluaXNoV29ybGQpXG4gICAgICAgICAgICBsZXQgbmV3QmVzdCA9IHRoaXMuY2hlY2tCZXN0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiY29tcGxldGVcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCBuZXdCZXN0LCB0aGlzLmxldmVsVGltZSk7XG4gICAgICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgICAgICB9LCA0MDAwKVxuICAgICAgICB0aGlzLlBsYXllci54ID0gNDY5O1xuICAgICAgICB0aGlzLlBsYXllci55ID0gMjIxO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgZXhpdFggPSA1MDA7XG4gICAgICAgIGxldCBleGl0WSA9IDE4MDtcbiAgICAgICAgbGV0IGV4aXRXID0gNjA7XG4gICAgICAgIGxldCBleGl0SCA9IDgwO1xuICAgICAgICBsZXQgZmluaXNoV29ybGQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgZXhpdFggKz0gMC42O1xuICAgICAgICAgICAgICAgIGV4aXRZIC09IDAuNDtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCBleGl0WCwgZXhpdFksIGV4aXRXLCBleGl0SCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMjAwKSB7XG4gICAgICAgICAgICAgICAgZXhpdFggLT0gMC4zO1xuICAgICAgICAgICAgICAgIGV4aXRZIC09IDAuNDtcbiAgICAgICAgICAgICAgICBleGl0VyArPSAwLjY7XG4gICAgICAgICAgICAgICAgZXhpdEggKz0gMC44O1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIGV4aXRYLCBleGl0WSwgZXhpdFcsIGV4aXRIKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgNTMwLCAxMDAsIDEyMCwgMTYwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBkcmF3IGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2UucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBkcmF3IGludGVyYWN0YWJsZXMgXG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyMjUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyNzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAwLjU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDMwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMzI1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ID49IDMwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLndpZHRoIC09IDAuMztcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5oZWlnaHQgLT0gMC41O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMC4xNTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IDAuMjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG4gICAgICAgIH0sIDEwKVxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1haW5DYW52YXMsIG1haW5DdHgsIHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSwgc2V0RGF0YSwgdW5wYXVzZSwgcmVuZGVyR2FtZSwgcmVuZGVySG9tZSwgZ2FtZU11c2ljLCBtdXNpY011dGVkLCB0b2dnbGVTb3VuZE11dGVkLCBnZXRTb3VuZE11dGVkLCB0b2dnbGVNdXNpY011dGVkKXtcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzID0gbWFpbkNhbnZhcztcbiAgICAgICAgdGhpcy5tYWluQ3R4ID0gbWFpbkN0eDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWVudVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuc2V0R2FtZURhdGEgPSBzZXREYXRhO1xuICAgICAgICB0aGlzLnVucGF1c2UgPSB1bnBhdXNlO1xuICAgICAgICB0aGlzLnJlbmRlckdhbWUgPSByZW5kZXJHYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuXG4gICAgICAgIHRoaXMubmV3QmVzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgICAgIHRoaXMuZ2FtZU11c2ljID0gZ2FtZU11c2ljO1xuICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSBtdXNpY011dGVkO1xuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQgPSB0b2dnbGVTb3VuZE11dGVkO1xuICAgICAgICB0aGlzLmdldFNvdW5kTXV0ZWQgPSBnZXRTb3VuZE11dGVkO1xuICAgICAgICB0aGlzLnRvZ2dsZU11c2ljTXV0ZWQgPSB0b2dnbGVNdXNpY011dGVkO1xuXG4gICAgICAgIHRoaXMuc291bmRPZmYgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZE9mZi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPZmYucG5nJztcbiAgICAgICAgdGhpcy5zb3VuZE9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc291bmRPbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPbi5wbmcnO1xuXG4gICAgICAgIHRoaXMubWVudUJsaXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vbWVudUJsaXAubXAzJyk7XG4gICAgICAgIHRoaXMucGF1c2UgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vcGF1c2UubXAzJylcbiAgICAgICAgdGhpcy5tZW51QmxpcC52b2x1bWUgPSAwLjE7XG4gICAgICAgIHRoaXMucGF1c2Uudm9sdW1lID0gMC4yO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAxO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ3cnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5tZW51QmxpcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4TnVtID0gdGhpcy50eXBlID09IFwicGF1c2VcIiA/IDMgOiAyO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSBtYXhOdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMubWVudUJsaXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdXNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5wYXVzZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIkVzY2FwZVwiICYmIHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA1NDAgJiYgbW91c2VYIDwgNTcwICYmIG1vdXNlWSA+IDEzMCAmJiBtb3VzZVkgPCAxNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSAhdGhpcy5tdXNpY011dGVkO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldE1lbnVEYXRhKHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSwgbmV3QmVzdCwgdGltZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5uZXdCZXN0ID0gbmV3QmVzdDtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLm1haW5DYW52YXMsIHRoaXMubWFpbkN0eCwgdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0gKyAxLCAxLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0gKyAxLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobWVudSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGRyYXcgbWVudSBib3hcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMTAwLDQwMCwyMDApO1xuXG4gICAgICAgIC8vIHNldCBtZW51IGhlYWRlciBmb250XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgLy8gZHJhdyBtZW51IGhlYWRlclxuICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxldmVsIEZhaWxlZFwiLCAyNjAsIDE1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDI1NSwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBDb21wbGV0ZSFcIiwgMjI0LCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDg3LDI1NSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VcIiwgMzQ0LCAxNTApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdXRlIGJ1dHRvbiBzZXR1cFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVzaWNNdXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNvdW5kT2ZmLCA1NDAsIDEzMCwgMzAsIDIwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc291bmRPbiwgNTQwLCAxMzAsIDMwLCAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLy8gc2V0IG1lbnUgb3B0aW9uIGZvbnRcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgXG4gICAgICAgIC8vIGRyYXcgbWVudSBvcHRpb25zIGFuZCBhcnJvd3NcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJldHJ5XCIsIDM2MCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzIwLCAyNTApXG5cbiAgICAgICAgICAgIC8vIGRyYXcgc2VsZWN0ZWQgYXJyb3dzIGFyb3VuZCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDMwMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzIwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMDAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTIwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MDAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUyMCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU2MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDMwMCw0MDAsMTAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld0Jlc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBuZXcgaGlnaCBzY29yZSB0ZXh0XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLDI1NSwwKSc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTJweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk5ldyBCZXN0IFRpbWUhXCIsIDMxNiwgMjAwKVxuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgZmlsbHN0eWxlIGFuZCBmb250XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBUaW1lOiAkeyh0aGlzLnRpbWUvMTAwKS50b1N0cmluZygpfWAsIDI5MCwgMjI1KVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk5leHQgTGV2ZWxcIiwgMzAwLCAzMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTAsIDM1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI1MCwgMzUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjcwLCAzNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTAsIDMzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTUwLCAzNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzAsIDM0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1MCwgMzMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMzAwLDQwMCw0MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3VtZVwiLCAzNDQsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmVzdGFydFwiLCAzMzQsIDI1MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMxNCwgMzAwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI3NCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjk0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTM0LCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MTQsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUzNCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4NCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjY0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU0NCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTI0LCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDQsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjM0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIzNCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTc0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBhc3NldEltcG9ydHMgZnJvbSAnLi9hc3NldEltcG9ydHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcbiAgICAgICAgdGhpcy5zb3VuZE11dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1Xb3JsZHMgPSAyO1xuXG4gICAgICAgIHRoaXMuZGVhdGhDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYmVzdFRpbWUgPSBcIi0tOi0tXCJcbiAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZXZlbEZpbGxzID0gWycjZmZmZmZmJywnI2ZmZmZmZicsJyNmZmZmZmYnLCcjZmZmZmZmJywnI2ZmZmZmZiddXG5cbiAgICAgICAgdGhpcy5nYW1lID0gIG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMSwgMSwgdGhpcy5nYW1lLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLCB0aGlzLm11c2ljLCB0aGlzLnNvdW5kTXV0ZWQsIHRoaXMudG9nZ2xlTXV0ZVNvdW5kLmJpbmQodGhpcyksIHRoaXMuZ2V0U291bmRNdXRlZC5iaW5kKHRoaXMpLCB0aGlzLnRvZ2dsZU11dGVNdXNpYy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ob21lID0gbnVsbDtcblxuICAgICAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIHRoaXMubXVzaWMuc3JjID0gJ2Rpc3QvYXVkaW8vd29ybGQxTXVzaWMubXAzJztcbiAgICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICAvLyBnZXQgY3VycmVudCBudW1iZXIgb2YgbGV2ZWxzIGNvbXBsZXRlZFxuICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxzQ29tcGxldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzQ29tcGxldGVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVyID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbnZhc1BvcyA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LnggLSBjYW52YXNQb3MubGVmdDtcbiAgICAgICAgICAgIGxldCBtb3VzZVkgPSBldmVudC55IC0gY2FudmFzUG9zLnRvcDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYID4gMTAwICsgaW5jcmVtZW50ICYmIG1vdXNlWCA8IDE2NSArIGluY3JlbWVudCAmJiBtb3VzZVkgPiAzNDUgJiYgbW91c2VZIDwgNDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA+PSAodGhpcy5jdXJyZW50V29ybGQgLSAxKSAqIDUgKyBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYXRoQ291bnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5jdXJyZW50V29ybGR9LSR7aSArIDF9IGRlYXRoIGNvdW50YCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVzdFRpbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5jdXJyZW50V29ybGR9LSR7aSArIDF9IGJlc3QgdGltZWApLzEwMCB8fCBcIi0tOi0tXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRmlsbHNbaV0gPSAncmdiKDI1NSwxOTAsMjU1KSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRmlsbHNbaV0gPSAnI2ZmZmZmZidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiAwICYmIG1vdXNlWCA8IDEyNSAmJiBtb3VzZVkgPiAwICYmIG1vdXNlWSA8IDQ1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZUxpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDEwMCArIGluY3JlbWVudCAmJiBtb3VzZVggPCAxNjUgKyBpbmNyZW1lbnQgJiYgbW91c2VZID4gMzQ1ICYmIG1vdXNlWSA8IDQxNSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbHNDb21wbGV0ZWQgPj0gKHRoaXMuY3VycmVudFdvcmxkIC0gMSkgKiA1ICsgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhvbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2V0RGF0YSh0aGlzLmN1cnJlbnRXb3JsZCwgaSArIDEsIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuY2xpY2tMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNzMwICYmIG1vdXNlWCA8IDc3MCAmJiBtb3VzZVkgPiAzMCAmJiBtb3VzZVkgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZU11c2ljKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA2NjAgJiYgbW91c2VYIDwgNzAwICYmIG1vdXNlWSA+IDMwICYmIG1vdXNlWSA8IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlU291bmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWSA8IDI4MCAmJiBtb3VzZVkgPiAyNTApIHtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgMjQwICYmIG1vdXNlWCA+IDIxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZC0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSB0aGlzLm51bVdvcmxkcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgNTkwICYmIG1vdXNlWCA+IDU2MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPCB0aGlzLm51bVdvcmxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdW5jb21tZW50IGZvciBkZXYgb3B0aW9uc1xuICAgICAgICAgICAgLy8gaWYgKG1vdXNlWCA+IDAgJiYgbW91c2VYIDwgMjAgJiYgbW91c2VZID4gMCAmJiBtb3VzZVkgPCAyMCkge1xuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCAwKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKG1vdXNlWCA+IDAgJiYgbW91c2VYIDwgMjAgJiYgbW91c2VZID4gNDUwICYmIG1vdXNlWSA8IDUwMCkge1xuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCB0aGlzLm51bVdvcmxkcyAqIDUpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAobW91c2VYID4gNzUwICYmIG1vdXNlWCA8IDgwMCAmJiBtb3VzZVkgPiA0NTAgJiYgbW91c2VZIDwgNTAwKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpXG4gICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5udW1Xb3JsZHM7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA1OyBqKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpfS0ke2p9IGJlc3QgdGltZWAsIDApO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2l9LSR7an0gZGVhdGggY291bnRgLCAwKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmNsaWNrTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHRvZ2dsZU11dGVNdXNpYygpIHtcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcblxuICAgICAgICBpZiAodGhpcy5tdXNpY011dGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U291bmRNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRNdXRlZDtcbiAgICB9XG5cbiAgICB0b2dnbGVNdXRlU291bmQoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdW5kTXV0ZWQgPSAhdGhpcy5zb3VuZE11dGVkO1xuICAgIH1cblxuICAgIGdldExldmVsc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbGlja0xpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB0aGlzLmdldExldmVsc0NvbXBsZXRlZCgpO1xuICAgICAgICB0aGlzLmhvbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLmN1cnJlbnRXb3JsZCAtIDFdfSlgXG4gICAgXG4gICAgICAgICAgICAvL3RpdGxlXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ090aGVyd29ybGRzJywgMjI1LCA5MClcblxuICAgICAgICAgICAgXG5cbiAgICBcbiAgICAgICAgICAgIC8vIHdvcmxkIHNlbGVjdCAgICAgIFxuICAgICAgICAgICAgLy8gLS13b3JsZCBuYW1lXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyOHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFdvcmxkICR7dGhpcy5jdXJyZW50V29ybGR9YCwgMzAyLCAyODApXG5cbiAgICAgICAgICAgIC8vLS0gd29ybGQgY3ljbGluZyBhcnJvd3NcbiAgICAgICAgICAgIC8vLS0tLSByaWdodCBhcnJvd1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyODApO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU5MCwgMjY1KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDI1MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM0NDQ0NDQnO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAvLy0tLS0gbGVmdCBhcnJvd1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAyODApO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIxMCwgMjY1KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNDAsIDI1MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM0NDQ0NDQnO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vbGV2ZWwgc2VsZWN0IC0gMTMwcHggYmV0d2VlbiBsZXZlbFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsbENvbG9yID0gXCJyZ2IoMTIwLDEyMCwxMjApXCI7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRXb3JsZCAtIDEpICogNSArIGkgPD0gdGhpcy5sZXZlbHNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yID0gdGhpcy5sZXZlbEZpbGxzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDgwLDgwLDgwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAwICsgaW5jcmVtZW50LDM0NSw3MCw3MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTA1ICsgaW5jcmVtZW50LDM1MCw2MCw2MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KChpICsgMSkudG9TdHJpbmcoKSwgMTIyICsgaW5jcmVtZW50LCAzOTcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG11dGUgc291bmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgc291bmRCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBzb3VuZEJ1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZEJ1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc291bmRCdXR0b24sIDY2MCwgMzAsIDQwLCAzMCk7XG5cbiAgICAgICAgICAgIC8vIG11dGUgbXVzaWMgYnV0dG9uXG4gICAgICAgICAgICBsZXQgbXVzaWNCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobXVzaWNCdXR0b24sIDczMCwgMzAsIDQwLCAzMCk7XG5cblxuICAgICAgICAgICAgLy8gc3RhdHNcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJ1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBCZXN0IFRpbWU6ICR7dGhpcy5iZXN0VGltZX1gLCAyNDAsIDE2MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBEZWF0aCBDb3VudDogJHt0aGlzLmRlYXRoQ291bnR9YCwgMjYwLCAyMDApXG5cbiAgICAgICAgICAgIC8vIHNob3cvaGlkZSBjb250cm9sc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJjb250cm9sc1wiLCAyMCwgMzApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb250cm9scykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNyknXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZidcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdXQVNEIC0gTW92ZScsIDI5MCwgMTcwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTcGFjZSAtIEp1bXAnLCAyNzAsIDIxMClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnRXNjIC0gUGF1c2UnLCAzMTAsIDI1MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdVc2VmdWwgVGlwOiBIb2xkaW5nIHRoZSBhcnJvdyBrZXkgaW4gdGhlIGRpcmVjdGlvbiBvZicsIDkwLCAzMTApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2Egd2FsbCB3aGlsZSBjb2xsaWRpbmcgd2l0aCBpdCB3aWxsIHNsb3cgeW91ciBmYWxsJywgMTEwLCAzMzApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sMTApXG4gICAgICAgIFxuICAgIH1cblxuICAgIFxufVxuXG4iLCJjb25zdCBCVUZGRVJfWCA9IDE3O1xuY29uc3QgQlVGRkVSX1kgPSAzMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmdYKHhQb3MsIHlQb3MpIHtcbiAgICAgICAgaWYgKHhQb3MgKyBCVUZGRVJfWCA+IHRoaXMueCAmJiB4UG9zIC0gQlVGRkVSX1ggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHlQb3MgKyBCVUZGRVJfWSAtIDYgPiB0aGlzLnkgJiYgeVBvcyAtIEJVRkZFUl9ZICsgNiA8IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmdZKHhQb3MsIHlQb3MpIHtcbiAgICAgICAgaWYgKHlQb3MgKyBCVUZGRVJfWSA+IHRoaXMueSAmJiB5UG9zIDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgeFBvcyArIEJVRkZFUl9YIC0gNiA+IHRoaXMueCAmJiB4UG9zIC0gQlVGRkVSX1ggKyA2IDwgdGhpcy54ICsgdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGVJbWFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHVybCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxUZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgbWVzc2FnZSwgeCwgeSkge1xuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5tYWluQ3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtdGV4dFwiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwxKSc7XG4gICAgICAgIHRoaXMuYmdDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNiknXG5cbiAgICAgICAgbGV0IHdvcmRzID0gdGhpcy5tZXNzYWdlLnNwbGl0KFwiIFwiKVxuICAgICAgICBsZXQgbGVuID0gd29yZHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBzZWdtZW50ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ICs9IHdvcmRzW2ldLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAzMCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQucHVzaCh3b3Jkc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gW107XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpXG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodC8yIC0gdGhpcy5zZWdtZW50cy5sZW5ndGggKiA4O1xuICAgIH1cblxuICAgIGZhZGVJbigpIHtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW5Mb29wKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGZhZGVJbkxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgbGV0IHRleHRPcGFjaXR5ID0gY291bnQgLyAxMDA7XG4gICAgICAgICAgICBsZXQgYmdPcGFjaXR5ID0gY291bnQgKiAwLjYgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLnRleHRDb2xvciA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7dGV4dE9wYWNpdHl9KWA7XG4gICAgICAgICAgICB0aGlzLmJnQ29sb3IgPSBgcmdiYSgwLDAsMCwke2JnT3BhY2l0eX0pYFxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgZmFkZU91dCgpIHtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlT3V0TG9vcClcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGZhZGVPdXRMb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGxldCB0ZXh0T3BhY2l0eSA9IDEgLSAoY291bnQgLyAxMDApO1xuICAgICAgICAgICAgbGV0IGJnT3BhY2l0eSA9IDAuNiAtIChjb3VudCAqIDAuNiAvIDEwMCk7XG4gICAgICAgICAgICB0aGlzLnRleHRDb2xvciA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7dGV4dE9wYWNpdHl9KWA7XG4gICAgICAgICAgICB0aGlzLmJnQ29sb3IgPSBgcmdiYSgwLDAsMCwke2JnT3BhY2l0eX0pYFxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTApXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGRhcmtlbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwLDAuNilcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlZ21lbnRzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLnNlZ21lbnRzW2ldLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKDQ4MCAtIGxpbmUubGVuZ3RoICogMTYpLzI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChsaW5lLCB0aGlzLnggKyBvZmZzZXQsIHRoaXMueSArIChpICogMzApLCA0ODApO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG59IiwiXG4vL291dGVyIGFycmF5IGlzIHdvcmxkcywgaW5uZXIgYXJyYXkgaXMgbGV2ZWxEYXRhIG9iamVjdHNcbmV4cG9ydCBjb25zdCBMZXZlbERhdGEgPSBbXG4gICAgLy8gd29ybGQgMVxuICAgIFtcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAxXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIlRoaXMgaXMgdGhlIHN0b3J5IG9mIHNwYWNlbWFuLCBhIHJlc2lkZW50IG9mIHRoZSBjbG91ZCB3b3JsZCB3aG8gaGFzIGEgcGFzc2lvbiBmb3IgYWR2ZW50dXJlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgMlxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFsxMDAsNTRdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDNcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OjM4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgeTozNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeToyNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6MTQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNzIwLDQwMF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgNFxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbNTAsMzYwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs3NTAsNDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA1XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMjAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNTAwLDE4MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIk5vdyB0aGF0IHNwYWNlbWFuIGhhcyBzZWVuIGFsbCB0aGF0IGhpcyB3b3JsZCBoYXMgdG8gb2ZmZXIsIGhlIGJlZ2lucyBoaXMgam91cm5leSB0aHJvdWdoIG90aGVyd29ybGRzXCJcbiAgICAgICAgfVxuXG4gICAgXSxcbiAgICAvLyB3b3JsZCAyXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAyIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY3NSxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzcwMCw0MDBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMSxcbiAgICAgICAgICAgIGxldmVsVGV4dDogXCJTcGFjZW1hbiBmaW5kcyBoaW1zZWxmIGluIGFuIGFyaWQgbW91bnRhaW4gd29ybGQgd2l0aCBzdG9uZSBwbGF0Zm9ybXMuIFNvbWUgb2YgdGhlIHBsYXRmb3JtcyBzZWVtIHF1aXRlIG9sZC4uLlwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDIgbGV2ZWwgMlxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjc1LFxuICAgICAgICAgICAgICAgICAgICB5OiA0NTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNzAwLDQwMF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIlNwYWNlbWFuIGZpbmRzIGhpbXNlbGYgaW4gYW4gYXJpZCBtb3VudGFpbiB3b3JsZCB3aXRoIHN0b25lIHBsYXRmb3Jtcy4gU29tZSBvZiB0aGUgcGxhdGZvcm1zIHNlZW0gcXVpdGUgb2xkLi4uXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMiBsZXZlbCA0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzNzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA3NTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDcwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDIwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjIwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTYwLFxuICAgICAgICAgICAgICAgICAgICB5OiA3MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTGFyZ2VXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzYwMCwyMF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICB9LFxuICAgIF1cbl0iLCJpbXBvcnQgSW50ZXJhY3RhYmxlIGZyb20gXCIuL2ludGVyYWN0YWJsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYWtQbGF0Zm9ybSBleHRlbmRzIEludGVyYWN0YWJsZXtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgZHVyYXRpb24sIGltZ1VybCwgZ3Jhdml0eSkge1xuICAgICAgICBzdXBlcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBpbWdVcmw7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IGdyYXZpdHk7XG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMDsgLy8gcGl4ZWxzIHBlciBzZWNvbmRcbiAgICB9XG5cbiAgICBmYWxsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWQgZmxhbCBmdW5jdGlvblwiKVxuICAgICAgICB0aGlzLmlzRmFsbGluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocGxhdGZvcm1GYWxsKTtcbiAgICAgICAgfSwgKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMueSArIDEwMCkgKiAxMCArIHRoaXMuZHVyYXRpb24pXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtRmFsbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IHRoaXMuZHVyYXRpb24vMTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsU3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLmZhbGxTcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy5pbWdVcmw7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=