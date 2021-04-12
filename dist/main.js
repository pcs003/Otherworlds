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
          _this2.interactables.push(new _weakPlatform__WEBPACK_IMPORTED_MODULE_6__["default"](_this2.canvas, _this2.ctx, interactable.x, interactable.y, interactable.height, interactable.width, 1000, interactable.imgUrl, _this2.GRAVITY));
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
            _this3.Player.collidingX = true; // if (interactable instanceof WeakPlatform) {
            //     setTimeout(() => {
            //         interactable.fall();
            //     }, interactable.duration)
            // }
          }

          if (interactable.isCollidingY(_this3.Player.x + _this3.Player.width / 2 + _this3.Player.velocity[0], _this3.Player.y + _this3.Player.height / 2 + _this3.Player.velocity[1])) {
            _this3.Player.collidingY = true;
            _this3.Player.grounded = true;
            _this3.Player.collisionsurfaceY = interactable.y;

            if (interactable instanceof _weakPlatform__WEBPACK_IMPORTED_MODULE_6__["default"]) {
              interactable.fall();
            }
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
    } // animations

  }, {
    key: "level5Animation",
    value: function level5Animation(gameLoop) {
      var _this4 = this;

      clearInterval(gameLoop);
      setTimeout(function () {
        _this4.interactables = [];
        clearInterval(finishWorld);

        _this4.menu.setMenuData("complete", _this4.worldNum, _this4.levelNum);

        _this4.menu.open();
      }, 4000);
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
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this), this.music, this.soundMuted, this.toggleMuteSound.bind(this), this.getSoundMuted.bind(this), this.toggleMuteMusic.bind(this));
    this.home = null;
    this.music = new Audio();
    this.music.src = 'dist/audio/world1Music.mp3';
    this.music.volume = 0.6;
    this.worldBGs = ['dist/images/mainpage_bg.png', 'dist/images/world2BG.png'];
    this.levelsCompleted = window.localStorage.getItem("levelsCompleted");

    if (this.levelsCompleted == null) {
      this.levelsCompleted = 0;
    }

    this.canvas.addEventListener('mousedown', function (event) {
      var canvasPos = canvas.getBoundingClientRect();
      var mouseX = event.x - canvasPos.left;
      var mouseY = event.y - canvasPos.top;

      for (var i = 0; i < 5; i++) {
        var increment = i * 130;

        if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
          if (_this.levelsCompleted >= (_this.currentWorld - 1) * 5 + i) {
            clearInterval(_this.home);

            _this.game.setData(_this.currentWorld, i + 1, _this.game);

            _this.game.render();
          }
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
      } // uncomment for dev options


      if (mouseX > 0 && mouseX < 20 && mouseY > 0 && mouseY < 20) {
        window.localStorage.setItem("levelsCompleted", 0);

        _this.render();
      }

      if (mouseX > 0 && mouseX < 20 && mouseY > 450 && mouseY < 500) {
        window.localStorage.setItem("levelsCompleted", _this.numWorlds * 5);

        _this.render();
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
    key: "getLevelsCompleted",
    value: function getLevelsCompleted() {
      this.levelsCompleted = window.localStorage.getItem("levelsCompleted");

      if (this.levelsCompleted == null) {
        this.levelsCompleted = 0;
      }
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
          var fillColor = "rgb(120,120,120)";

          if ((_this2.currentWorld - 1) * 5 + i <= _this2.levelsCompleted) {
            fillColor = "rgb(240,240,240)";
          }

          var increment = i * 130;
          _this2.ctx.fillStyle = "rgb(80,80,80)";

          _this2.ctx.fillRect(100 + increment, 345, 70, 70);

          _this2.ctx.fillStyle = fillColor;

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
    x: 80,
    y: 420,
    height: 30,
    width: 640,
    imgUrl: 'dist/images/world2LargePlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 500,
    y: 300,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }, {
    x: 325,
    y: 200,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true
  }, {
    x: 80,
    y: 110,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
  }],
  finishPos: [100, 50],
  gravity: -0.1,
  levelText: "Spaceman finds himself in an arid mountain world with stone platforms. Some of the platforms seem quite old..."
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
    _this.fallSpeed = 0; // pixels per second

    return _this;
  }

  _createClass(WeakPlatform, [{
    key: "fall",
    value: function fall() {
      var _this2 = this;

      setTimeout(function () {
        clearInterval(platformFall);
      }, (this.canvas.height - this.y) * 10 + this.duration);
      var count = 0;
      var platformFall = setInterval(function () {
        if (count > _this2.duration / 10) {
          _this2.fallSpeed += _this2.gravity;
          _this2.y -= _this2.fallSpeed / 1000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlTWVudS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT2ZmLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGFiSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQxTXVzaWMubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJUaW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Fzc2V0SW1wb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW50ZXJhY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xldmVsVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbGRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvd2Vha1BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWVGcmFtZSIsIkhvbWVQYWdlIiwicmVuZGVyIiwiRXhpdCIsIngiLCJ5IiwibGV2ZWxOdW0iLCJ3b3JsZE51bSIsImV4aXRJbWFnZSIsIkltYWdlIiwiZnJhbWVOdW0iLCJ4UG9zIiwieVBvcyIsInBvcnRhbEZyYW1lIiwiY3VycmVudEltYWdlTnVtIiwiTWF0aCIsImZsb29yIiwic3JjIiwiZHJhd0ltYWdlIiwiSW50ZXJhY3RhYmxlIiwiR2FtZSIsImdhbWUiLCJyZW5kZXJIb21lIiwiZ2FtZU11c2ljIiwibXVzaWNNdXRlZCIsInRvZ2dsZVNvdW5kTXV0ZWQiLCJnZXRTb3VuZE11dGVkIiwidG9nZ2xlTXVzaWNNdXRlZCIsImxldmVsVGltZSIsInBhdXNlZCIsIm1lbnUiLCJHYW1lTWVudSIsInNldERhdGEiLCJiaW5kIiwidG9nZ2xlUGF1c2UiLCJjbGVhclJlY3QiLCJsZXZlbERhdGEiLCJMZXZlbERhdGEiLCJWRUxPQ0lUWV9YIiwiR1JBVklUWSIsImdyYXZpdHkiLCJQbGF5ZXIiLCJ2ZWxvY2l0eSIsImlzSnVtcGluZyIsImNhbkp1bXAiLCJwbGF5ZXJTdGFydFBvcyIsImZhY2VSaWdodCIsIm1vdmluZyIsImNvbGxpZGluZ1giLCJjb2xsaWRpbmdZIiwiZ3JvdW5kZWQiLCJjb2xsaXNpb25zdXJmYWNlWSIsInBhdXNlU291bmQiLCJBdWRpbyIsInZvbHVtZSIsImp1bXBTb3VuZCIsImZvb3RzdGVwIiwid29ybGRCR3MiLCJwbGF5ZXJTcHJpdGUiLCJwb3J0YWxTcHJpdGUiLCJleGl0IiwiZmluaXNoUG9zIiwiaW50ZXJhY3RhYmxlcyIsImltYWdlcyIsImZvckVhY2giLCJpbnRlcmFjdGFibGUiLCJwdXNoIiwiaW1nVXJsIiwibGVuZ3RoIiwiSW50ZXJhY3RhYmxlSW1hZ2UiLCJ5T2Zmc2V0IiwiaW1nSGVpZ2h0IiwibGV2ZWxUZXh0IiwiTGV2ZWxUZXh0Iiwid2luZG93IiwiZXZlbnQiLCJrZXkiLCJwbGF5Iiwic2V0VGltZW91dCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJuZXdHYW1lIiwid2VhayIsIldlYWtQbGF0Zm9ybSIsImltZyIsImdhbWVMb29wIiwiY2xlYXJJbnRlcnZhbCIsInNldE1lbnVEYXRhIiwib3BlbiIsImN1cnJlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInBhcnNlSW50IiwibGV2ZWw1QW5pbWF0aW9uIiwic2tpcCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic2V0SW50ZXJ2YWwiLCJwYXVzZUdhbWUiLCJmaWxsU3R5bGUiLCJnYW1lT3ZlciIsImltYWdlIiwiZHJhd1BsYXllciIsImN1cnJGcmFtZSIsImlzQ29sbGlkaW5nWCIsImlzQ29sbGlkaW5nWSIsImZhbGwiLCJsZXZlbENvbXBsZXRlIiwiZm9udCIsImZpbGxUZXh0IiwidG9TdHJpbmciLCJmaW5pc2hXb3JsZCIsImNvdW50IiwiZXhpdFgiLCJleGl0WSIsImV4aXRXIiwiZXhpdEgiLCJtYWluQ2FudmFzIiwibWFpbkN0eCIsInR5cGUiLCJ1bnBhdXNlIiwicmVuZGVyR2FtZSIsImFjdGl2ZSIsInNldEdhbWVEYXRhIiwic291bmRPZmYiLCJzb3VuZE9uIiwibWVudUJsaXAiLCJzZWxlY3RlZCIsInN1Ym1pdHRlZCIsIm1heE51bSIsImNsb3NlIiwiY2FudmFzUG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibW91c2VYIiwibGVmdCIsIm1vdXNlWSIsInRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsIiwiY3VycmVudFdvcmxkIiwic291bmRNdXRlZCIsIm51bVdvcmxkcyIsIm11c2ljIiwidG9nZ2xlTXV0ZVNvdW5kIiwidG9nZ2xlTXV0ZU11c2ljIiwiaG9tZSIsImxldmVsc0NvbXBsZXRlZCIsImkiLCJpbmNyZW1lbnQiLCJnZXRMZXZlbHNDb21wbGV0ZWQiLCJmaWxsQ29sb3IiLCJzb3VuZEJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiQlVGRkVSX1giLCJCVUZGRVJfWSIsInVybCIsIm1lc3NhZ2UiLCJ0ZXh0Q29sb3IiLCJiZ0NvbG9yIiwid29yZHMiLCJzcGxpdCIsImxlbiIsInNlZ21lbnRzIiwic2VnbWVudCIsImZhZGVJbkxvb3AiLCJmYWRlT3V0IiwidGV4dE9wYWNpdHkiLCJiZ09wYWNpdHkiLCJmYWRlT3V0TG9vcCIsImZhZGVJbiIsImxpbmUiLCJqb2luIiwib2Zmc2V0IiwiZHVyYXRpb24iLCJmYWxsU3BlZWQiLCJwbGF0Zm9ybUZhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHNGQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBdEM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLHFGQUFzQixFOzs7Ozs7Ozs7Ozs7QUNBckM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUscUZBQXNCLEU7Ozs7Ozs7Ozs7OztBQ0FyQztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSx1RkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQXZDO0FBQWUsMEZBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0ExQztBQUFlLG9GQUFxQixFOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLGlGQUFrQixFOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBZSxxRkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUsMEZBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0ExQztBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLG9GQUFxQixFOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFBZSxtRkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQW5DO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx1RkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQXZDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLCtGQUFnQyxFOzs7Ozs7Ozs7Ozs7QUNBL0M7QUFBZSxtR0FBb0MsRTs7Ozs7Ozs7Ozs7O0FDQW5EO0FBQWUsZ0dBQWlDLEU7Ozs7Ozs7Ozs7OztBQ0FoRDtBQUFlLG9HQUFxQyxFOzs7Ozs7Ozs7Ozs7QUNBcEQ7QUFBZSwrRkFBZ0MsRTs7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O0FBUGlEO0FBUXhFOzs7O1dBRUQsZ0JBQU87QUFBQTs7QUFDSDNHLGdCQUFVLENBQUUsWUFBTTtBQUNkUSxxQkFBYSxDQUFDb0csWUFBRCxDQUFiO0FBQ0gsT0FGUyxFQUVQLENBQUMsS0FBS2hNLE1BQUwsQ0FBWUssTUFBWixHQUFxQixLQUFLTSxDQUEzQixJQUFnQyxFQUFoQyxHQUFxQyxLQUFLbUwsUUFGbkMsQ0FBVjtBQUdBLFVBQUl2RSxLQUFLLEdBQUcsQ0FBWjtBQUNBLFVBQU15RSxZQUFZLEdBQUd4RixXQUFXLENBQUMsWUFBTTtBQUNuQyxZQUFJZSxLQUFLLEdBQUcsTUFBSSxDQUFDdUUsUUFBTCxHQUFnQixFQUE1QixFQUFnQztBQUM1QixnQkFBSSxDQUFDQyxTQUFMLElBQWtCLE1BQUksQ0FBQ2pKLE9BQXZCO0FBQ0EsZ0JBQUksQ0FBQ25DLENBQUwsSUFBVSxNQUFJLENBQUNvTCxTQUFMLEdBQWlCLElBQTNCO0FBQ0g7O0FBQ0R4RSxhQUFLO0FBQ1IsT0FOK0IsRUFNN0IsRUFONkIsQ0FBaEM7QUFPSDs7O1dBRUQsa0JBQVM7QUFDTCxXQUFLckgsR0FBTCxDQUFTd0csU0FBVCxHQUFxQixlQUFyQjtBQUNBLFdBQUt4RyxHQUFMLENBQVNpSixRQUFULENBQWtCLEtBQUt6SSxDQUF2QixFQUEwQixLQUFLQyxDQUEvQixFQUFrQyxLQUFLUCxLQUF2QyxFQUE4QyxLQUFLQyxNQUFuRDtBQUNBLFdBQUtxRixHQUFMLENBQVNuRSxHQUFULEdBQWUsS0FBS2tELE1BQXBCO0FBQ0EsV0FBS3ZFLEdBQUwsQ0FBU3NCLFNBQVQsQ0FBbUIsS0FBS2tFLEdBQXhCLEVBQTZCLEtBQUtoRixDQUFsQyxFQUFxQyxLQUFLQyxDQUExQyxFQUE2QyxLQUFLUCxLQUFsRCxFQUF5RCxLQUFLQyxNQUE5RDtBQUNIOzs7O0VBOUJxQ29CLHFEOzs7Ozs7Ozs7Ozs7OztBQ0gxQztBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvV29ybGQxRG9vci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Xb3JsZDJEb29yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2Zvb3RzdGVwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2p1bXBTb3VuZC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21haW5wYWdlX2JnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL21lbnVCbGlwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2UubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2VNZW51Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90YWJJY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby93b3JsZDFNdXNpYy5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJCRy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMkxhcmdlV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVdlYWtQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlNtYWxsV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZ1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3NjcmlwdHMvaG9tZXBhZ2UnXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWFpblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIGxldCBnYW1lRnJhbWUgPSAwO1xuXG5cbiAgICBuZXcgSG9tZVBhZ2UoY2FudmFzLCBjdHgpLnJlbmRlcigpO1xuXG4gICAgXG5cblxufSk7XG4iLCIvL2ltYWdlcyBcbmltcG9ydCBydW5SaWdodEltYWdlMSBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUzLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUyLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUzLnBuZydcblxuaW1wb3J0IFBvcnRhbEZyYW1lMSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUxLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWUzIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTMucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU0LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTUgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNS5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU2IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTYucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNyBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU3LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTggZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lOC5wbmcnXG5cbmltcG9ydCBXb3JsZDFEb29yIGZyb20gJy4uL2Fzc2V0cy9Xb3JsZDFEb29yLnBuZydcbmltcG9ydCBXb3JsZDJEb29yIGZyb20gJy4uL2Fzc2V0cy9Xb3JsZDJEb29yLnBuZydcblxuXG5pbXBvcnQgbGFyZ2VQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgbWVkaXVtUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL21lZGl1bVBsYXRmb3JtLnBuZydcbmltcG9ydCBzbWFsbFBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZydcbmltcG9ydCB0aW55UGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3RpbnlQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCB3b3JsZDJMYXJnZVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJNZWRpdW1QbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlNtYWxsUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlRpbnlQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyVGlueVBsYXRmb3JtLnBuZydcblxuaW1wb3J0IHdvcmxkMkxhcmdlV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyTWVkaXVtV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlNtYWxsV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyVGlueVdlYWtQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCBpZGxlRnJhbWUgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZS5wbmcnXG5pbXBvcnQgaWRsZUZyYW1lMiBmcm9tICcuLi9hc3NldHMvaWRsZUZyYW1lMi5wbmcnXG5cbmltcG9ydCBCRyBmcm9tICcuLi9hc3NldHMvbWFpbnBhZ2VfYmcucG5nJ1xuaW1wb3J0IHRhYkljb24gZnJvbSAnLi4vYXNzZXRzL3RhYkljb24ucG5nJ1xuaW1wb3J0IHdvcmxkMkJHIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJCRy5wbmcnXG5pbXBvcnQgbXVzaWNPbiBmcm9tICcuLi9hc3NldHMvbXVzaWNPbi5wbmcnXG5pbXBvcnQgbXVzaWNPZmYgZnJvbSAnLi4vYXNzZXRzL211c2ljT2ZmLnBuZydcbmltcG9ydCBzb3VuZE9uIGZyb20gJy4uL2Fzc2V0cy9zb3VuZE9uLnBuZydcbmltcG9ydCBzb3VuZE9mZiBmcm9tICcuLi9hc3NldHMvc291bmRPZmYucG5nJ1xuXG5cbi8vYXVkaW9cbmltcG9ydCBXb3JsZDFNdXNpYyBmcm9tICcuLi9hc3NldHMvd29ybGQxTXVzaWMubXAzJ1xuaW1wb3J0IGp1bXBTb3VuZCBmcm9tICcuLi9hc3NldHMvanVtcFNvdW5kLm1wMydcbmltcG9ydCBmb290c3RlcCBmcm9tICcuLi9hc3NldHMvZm9vdHN0ZXAubXAzJ1xuaW1wb3J0IG1lbnVCbGlwIGZyb20gJy4uL2Fzc2V0cy9tZW51QmxpcC5tcDMnXG5pbXBvcnQgcGF1c2VNZW51IGZyb20gJy4uL2Fzc2V0cy9wYXVzZU1lbnUubXAzJ1xuaW1wb3J0IHBhdXNlIGZyb20gJy4uL2Fzc2V0cy9wYXVzZS5tcDMnIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGl0IGV4dGVuZHMgSW50ZXJhY3RhYmxle1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoLCBsZXZlbE51bSwgd29ybGROdW0pIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcblxuXG4gICAgICAgIHRoaXMuZXhpdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGZyYW1lTnVtLCB4UG9zID0gdGhpcy54LCB5UG9zID0gdGhpcy55LCB3aWR0aCA9IDYwLCBoZWlnaHQgPSA4MCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICBsZXQgcG9ydGFsRnJhbWUgPSBmcmFtZU51bSAlIDEyMDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW1hZ2VOdW0gPSBNYXRoLmZsb29yKHBvcnRhbEZyYW1lLzE1KSArIDE7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvUG9ydGFsRnJhbWUke2N1cnJlbnRJbWFnZU51bX0ucG5nYFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvV29ybGQke3RoaXMud29ybGROdW19RG9vci5wbmdgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tICcuL2ludGVyYWN0YWJsZSdcbmltcG9ydCBHYW1lTWVudSBmcm9tICcuL2dhbWVtZW51J1xuaW1wb3J0IEV4aXQgZnJvbSAnLi9leGl0J1xuXG5pbXBvcnQgeyBMZXZlbERhdGEgfSBmcm9tICcuL2xldmVsZGF0YSdcbmltcG9ydCBJbnRlcmFjdGFibGVJbWFnZSBmcm9tICcuL2ludGVyYWN0YWJsZUltYWdlJ1xuaW1wb3J0IExldmVsVGV4dCBmcm9tICcuL2xldmVsVGV4dCdcbmltcG9ydCBXZWFrUGxhdGZvcm0gZnJvbSAnLi93ZWFrUGxhdGZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgR2FtZU1lbnUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSwgdGhpcy5zZXREYXRhLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXJIb21lLCB0aGlzLmdhbWVNdXNpYywgdGhpcy5tdXNpY011dGVkLCB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQsIHRoaXMuZ2V0U291bmRNdXRlZCwgdGhpcy50b2dnbGVTb3VuZE11dGVkKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhdXNlU291bmQgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vcGF1c2UubXAzJylcbiAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICAvLyBwbGF5ZXIgbW92ZW1lbnQgc291bmRzXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2p1bXBTb3VuZC5tcDMnKVxuICAgICAgICB0aGlzLmp1bXBTb3VuZC52b2x1bWUgPSAwLjY7XG4gICAgICAgIHRoaXMuZm9vdHN0ZXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vZm9vdHN0ZXAubXAzJylcbiAgICAgICAgdGhpcy5mb290c3RlcC52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnBvcnRhbFNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIC8vIHNldCBleGl0IGxvY2F0aW9uXG4gICAgICAgIHRoaXMuZXhpdCA9IG5ldyBFeGl0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzBdLHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1sxXSw3MCw3MCwgdGhpcy5sZXZlbE51bSwgdGhpcy53b3JsZE51bSk7XG5cbiAgICAgICAgLy8gc2V0IGludGVyYWN0YWJsZXMgZm9yIHRoaXMgc3RhZ2UgZnJvbSBzZWVkIGRhdGFcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IEludGVyYWN0YWJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoKSk7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlSW1hZ2UodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUuaW1nVXJsLGludGVyYWN0YWJsZS54LGludGVyYWN0YWJsZS55IC0gaW50ZXJhY3RhYmxlLnlPZmZzZXQsaW50ZXJhY3RhYmxlLndpZHRoLGludGVyYWN0YWJsZS5pbWdIZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IHRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IC10aGlzLlZFTE9DSVRZX1g7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5mYWNlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJyAmJiB0aGlzLlBsYXllci5ncm91bmRlZCAmJiAhdGhpcy5QbGF5ZXIuaXNKdW1waW5nICkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA2MClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2VTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZXRHYW1lKG5ld0dhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3R2FtZTtcbiAgICB9XG5cbiAgICBzZXREYXRhKHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSkge1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDUwLDUwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLndlYWspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgV2Vha1BsYXRmb3JtKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgsIDEwMDAsIGludGVyYWN0YWJsZS5pbWdVcmwsIHRoaXMuR1JBVklUWSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIHRvZ2dsZVBhdXNlKCl7XG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoZ2FtZUxvb3ApIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJmYWlsZWRcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICB9XG5cbiAgICBsZXZlbENvbXBsZXRlKGdhbWVMb29wKSB7XG4gICAgICAgIC8vIHNldCBuZXcgbGV2ZWxzQ29tcGxldGVkIGxvY2FsU3RvcmFnZSB2YXJpYWJsZVxuICAgICAgICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiKTtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCBwYXJzZUludChjdXJyZW50KSArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGV2ZWxzQ29tcGxldGVkXCIsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYW5pbWF0aW9uIGF0IGVuZCBvZiBsZXZlbCA1XG4gICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWw1QW5pbWF0aW9uKGdhbWVMb29wKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiY29tcGxldGVcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBhdXNlR2FtZShnYW1lTG9vcCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJwYXVzZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoc2tpcCA9IGZhbHNlKXtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxUZXh0ICE9IFwiXCIgJiYgIXNraXApIHsgICAgXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5vcGVuKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLndvcmxkTnVtIC0gMV19KWBcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIueSA+IDUwMCB8fCB0aGlzLmxldmVsVGltZSA8PSAxMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGdhbWVMb29wKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBleGl0XG4gICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKHRoaXMuZnJhbWVOdW0pO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2UucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBkcmF3IHBsYXllclxuICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMucGxheWVyU3ByaXRlLCB0aGlzLlBsYXllci54LCB0aGlzLlBsYXllci55LCB0aGlzLlBsYXllci53aWR0aCwgdGhpcy5QbGF5ZXIuaGVpZ2h0KVxuXG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgZnJhbWUgaW1hZ2VcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5tb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5mb290c3RlcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyRnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuUGxheWVyLmZyYW1lTnVtIC8gMTApXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyckZyYW1lID09IDAgfHwgY3VyckZyYW1lID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZmFjZVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVOdW0gJSA0MCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuXG4gICAgXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIG9ic3RhY2xlIGNvbGxpc2lvblxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaXNDb2xsaWRpbmdYKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGludGVyYWN0YWJsZSBpbnN0YW5jZW9mIFdlYWtQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaW50ZXJhY3RhYmxlLmZhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sIGludGVyYWN0YWJsZS5kdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgPSBpbnRlcmFjdGFibGUueTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZSBpbnN0YW5jZW9mIFdlYWtQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLmZhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgbGV2ZWwgZmluaXNoIFxuICAgICAgICAgICAgaWYgKHRoaXMuZXhpdC5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsQ29tcGxldGUoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBtb3ZlbWVudCBiYXNlIG9uIHBsYXllciBjb2xsaXNpb25cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdOyAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSA9IHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZIC0gNTk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgICAgIC8vbGV2ZWwgaW5mbyBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX1gLCAzNjQsIDUwKTtcblxuICAgICAgICAgICAgLy8gdGltZXJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUaW1lLS07XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChNYXRoLmZsb29yKHRoaXMubGV2ZWxUaW1lLzEwMCkudG9TdHJpbmcoKSwgNzAwLCA1MCk7XG4gICAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmZyYW1lTnVtID0gKHRoaXMuUGxheWVyLmZyYW1lTnVtICsgMSkgJSA0MFxuICAgICAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9ICh0aGlzLnBvcnRhbEZyYW1lICsgMSkgJSA4MDtcblxuICAgICAgICAgICAgdGhpcy5mcmFtZU51bSsrO1xuICAgICAgICAgICAgXG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gYW5pbWF0aW9uc1xuXG4gICAgbGV2ZWw1QW5pbWF0aW9uKGdhbWVMb29wKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmluaXNoV29ybGQpXG4gICAgICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJjb21wbGV0ZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICAgICAgfSwgNDAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGV4aXRYID0gNTAwO1xuICAgICAgICBsZXQgZXhpdFkgPSAxODA7XG4gICAgICAgIGxldCBleGl0VyA9IDYwO1xuICAgICAgICBsZXQgZXhpdEggPSA4MDtcbiAgICAgICAgbGV0IGZpbmlzaFdvcmxkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgICAgLy8gZHJhdyBleGl0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGV4aXRYICs9IDAuNjtcbiAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgZXhpdFgsIGV4aXRZLCBleGl0VywgZXhpdEgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgIGV4aXRYIC09IDAuMztcbiAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgZXhpdFcgKz0gMC42O1xuICAgICAgICAgICAgICAgIGV4aXRIICs9IDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCBleGl0WCwgZXhpdFksIGV4aXRXLCBleGl0SCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIDUzMCwgMTAwLCAxMjAsIDE2MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gZHJhdyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLnJlbmRlcigpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gZHJhdyBpbnRlcmFjdGFibGVzIFxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCAxMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSA0MCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjI1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjc1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMC41O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAzMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDMyNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci53aWR0aCAtPSAwLjM7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaGVpZ2h0IC09IDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDAuMTU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSAwLjI1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMucGxheWVyU3ByaXRlLCB0aGlzLlBsYXllci54LCB0aGlzLlBsYXllci55LCB0aGlzLlBsYXllci53aWR0aCwgdGhpcy5QbGF5ZXIuaGVpZ2h0KVxuICAgICAgICB9LCAxMClcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluQ2FudmFzLCBtYWluQ3R4LCB0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHNldERhdGEsIHVucGF1c2UsIHJlbmRlckdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCl7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IG1haW5DYW52YXM7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IG1haW5DdHg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnNldEdhbWVEYXRhID0gc2V0RGF0YTtcbiAgICAgICAgdGhpcy51bnBhdXNlID0gdW5wYXVzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJHYW1lID0gcmVuZGVyR2FtZTtcbiAgICAgICAgdGhpcy5yZW5kZXJIb21lID0gcmVuZGVySG9tZTtcblxuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLnNvdW5kT2ZmID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc291bmRPZmYuc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT2ZmLnBuZyc7XG4gICAgICAgIHRoaXMuc291bmRPbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNvdW5kT24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT24ucG5nJztcblxuICAgICAgICB0aGlzLm1lbnVCbGlwID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL21lbnVCbGlwLm1wMycpO1xuICAgICAgICB0aGlzLnBhdXNlID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL3BhdXNlLm1wMycpXG4gICAgICAgIHRoaXMubWVudUJsaXAudm9sdW1lID0gMC4xO1xuICAgICAgICB0aGlzLnBhdXNlLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gMTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICd3Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLm1lbnVCbGlwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAncycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heE51bSA9IHRoaXMudHlwZSA9PSBcInBhdXNlXCIgPyAzIDogMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gbWF4TnVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLm1lbnVCbGlwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2UucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIiAmJiB0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNTQwICYmIG1vdXNlWCA8IDU3MCAmJiBtb3VzZVkgPiAxMzAgJiYgbW91c2VZIDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRNZW51RGF0YSh0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0pIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zdCBtZW51ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5tYWluQ2FudmFzLCB0aGlzLm1haW5DdHgsIHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtICsgMSwgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtICsgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1lbnUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDEwMCw0MDAsMjAwKTtcblxuICAgICAgICAvLyBzZXQgbWVudSBoZWFkZXIgZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIC8vIGRyYXcgbWVudSBoZWFkZXJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBGYWlsZWRcIiwgMjYwLCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgQ29tcGxldGUhXCIsIDIyNCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCw4NywyNTUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlXCIsIDM0NCwgMTUwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXV0ZSBidXR0b24gc2V0dXBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zb3VuZE9mZiwgNTQwLCAxMzAsIDMwLCAyMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNvdW5kT24sIDU0MCwgMTMwLCAzMCwgMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vIHNldCBtZW51IG9wdGlvbiBmb250XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgIFxuICAgICAgICAvLyBkcmF3IG1lbnUgb3B0aW9ucyBhbmQgYXJyb3dzXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXRyeVwiLCAzNjAsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMyMCwgMjUwKVxuXG4gICAgICAgICAgICAvLyBkcmF3IHNlbGVjdGVkIGFycm93cyBhcm91bmQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygzMDAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMyMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzAwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUyMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTAwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MjAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk5leHQgTGV2ZWxcIiwgMzAwLCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTAsIDI1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjcwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTUwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMzAwLDQwMCw0MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3VtZVwiLCAzNDQsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmVzdGFydFwiLCAzMzQsIDI1MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMxNCwgMzAwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI3NCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjk0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTM0LCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MTQsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUzNCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4NCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjY0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU0NCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTI0LCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDQsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjM0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIzNCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTc0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBhc3NldEltcG9ydHMgZnJvbSAnLi9hc3NldEltcG9ydHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcbiAgICAgICAgdGhpcy5zb3VuZE11dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1Xb3JsZHMgPSAyO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9ICBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDEsIDEsIHRoaXMuZ2FtZSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5tdXNpYywgdGhpcy5zb3VuZE11dGVkLCB0aGlzLnRvZ2dsZU11dGVTb3VuZC5iaW5kKHRoaXMpLCB0aGlzLmdldFNvdW5kTXV0ZWQuYmluZCh0aGlzKSwgdGhpcy50b2dnbGVNdXRlTXVzaWMuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuaG9tZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygpO1xuICAgICAgICB0aGlzLm11c2ljLnNyYyA9ICdkaXN0L2F1ZGlvL3dvcmxkMU11c2ljLm1wMyc7XG4gICAgICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC42O1xuXG4gICAgICAgIHRoaXMud29ybGRCR3MgPSBbXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvbWFpbnBhZ2VfYmcucG5nJyxcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy93b3JsZDJCRy5wbmcnLFxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LnggLSBjYW52YXNQb3MubGVmdDtcbiAgICAgICAgICAgIGxldCBtb3VzZVkgPSBldmVudC55IC0gY2FudmFzUG9zLnRvcDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYID4gMTAwICsgaW5jcmVtZW50ICYmIG1vdXNlWCA8IDE2NSArIGluY3JlbWVudCAmJiBtb3VzZVkgPiAzNDUgJiYgbW91c2VZIDwgNDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA+PSAodGhpcy5jdXJyZW50V29ybGQgLSAxKSAqIDUgKyBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaG9tZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zZXREYXRhKHRoaXMuY3VycmVudFdvcmxkLCBpICsgMSwgdGhpcy5nYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDczMCAmJiBtb3VzZVggPCA3NzAgJiYgbW91c2VZID4gMzAgJiYgbW91c2VZIDwgNjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU11dGVNdXNpYygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNjYwICYmIG1vdXNlWCA8IDcwMCAmJiBtb3VzZVkgPiAzMCAmJiBtb3VzZVkgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZVNvdW5kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVkgPCAyNzAgJiYgbW91c2VZID4gMjQwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA8IDI0MCAmJiBtb3VzZVggPiAyMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmxkID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gdGhpcy5udW1Xb3JsZHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA8IDU5MCAmJiBtb3VzZVggPiA1NjApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmxkIDwgdGhpcy5udW1Xb3JsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVuY29tbWVudCBmb3IgZGV2IG9wdGlvbnNcbiAgICAgICAgICAgIGlmIChtb3VzZVggPiAwICYmIG1vdXNlWCA8IDIwICYmIG1vdXNlWSA+IDAgJiYgbW91c2VZIDwgMjApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiAwICYmIG1vdXNlWCA8IDIwICYmIG1vdXNlWSA+IDQ1MCAmJiBtb3VzZVkgPCA1MDApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgdGhpcy5udW1Xb3JsZHMgKiA1KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZU11dGVNdXNpYygpIHtcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcblxuICAgICAgICBpZiAodGhpcy5tdXNpY011dGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U291bmRNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRNdXRlZDtcbiAgICB9XG5cbiAgICB0b2dnbGVNdXRlU291bmQoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdW5kTXV0ZWQgPSAhdGhpcy5zb3VuZE11dGVkO1xuICAgIH1cblxuICAgIGdldExldmVsc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZ2V0TGV2ZWxzQ29tcGxldGVkKCk7XG4gICAgICAgIHRoaXMuaG9tZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLndvcmxkQkdzW3RoaXMuY3VycmVudFdvcmxkIC0gMV19KWBcbiAgICBcbiAgICAgICAgICAgIC8vdGl0bGVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnT3RoZXJ3b3JsZHMnLCAyMjUsIDkwKVxuXG4gICAgICAgICAgICAvL2NvbnRyb2xzXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1dBU0QgLSBNb3ZlJywgMzIzLCAxNDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnU3BhY2UgLSBKdW1wJywgMzA5LCAxNzApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnRXNjIC0gUGF1c2UnLCAzMzcsIDIwMClcblxuICAgIFxuICAgICAgICAgICAgLy8gd29ybGQgc2VsZWN0ICAgICAgXG4gICAgICAgICAgICAvLyAtLXdvcmxkIG5hbWVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI4cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgV29ybGQgJHt0aGlzLmN1cnJlbnRXb3JsZH1gLCAzMDIsIDI3MClcblxuICAgICAgICAgICAgLy8tLSB3b3JsZCBjeWNsaW5nIGFycm93c1xuICAgICAgICAgICAgLy8tLS0tIHJpZ2h0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI3MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTkwLCAyNTUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjQwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vLS0tLSBsZWZ0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNDAsIDI3MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjEwLCAyNTUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMjQwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy9sZXZlbCBzZWxlY3QgLSAxMzBweCBiZXR3ZWVuIGxldmVsXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBmaWxsQ29sb3IgPSBcInJnYigxMjAsMTIwLDEyMClcIjtcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuY3VycmVudFdvcmxkIC0gMSkgKiA1ICsgaSA8PSB0aGlzLmxldmVsc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBcInJnYigyNDAsMjQwLDI0MClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYig4MCw4MCw4MClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwMCArIGluY3JlbWVudCwzNDUsNzAsNzApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwNSArIGluY3JlbWVudCwzNTAsNjAsNjApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgoaSArIDEpLnRvU3RyaW5nKCksIDEyMCArIGluY3JlbWVudCwgMzk3KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtdXRlIHNvdW5kIGJ1dHRvblxuICAgICAgICAgICAgbGV0IHNvdW5kQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VuZE11dGVkKSB7XG4gICAgICAgICAgICAgICAgc291bmRCdXR0b24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT2ZmLnBuZydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291bmRCdXR0b24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT24ucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNvdW5kQnV0dG9uLCA2NjAsIDMwLCA0MCwgMzApO1xuXG4gICAgICAgICAgICAvL211dGUgbXVzaWMgYnV0dG9uXG4gICAgICAgICAgICBsZXQgbXVzaWNCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobXVzaWNCdXR0b24sIDczMCwgMzAsIDQwLCAzMCk7XG5cbiAgICAgICAgfSwxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG59XG5cbiIsImNvbnN0IEJVRkZFUl9YID0gMTc7XG5jb25zdCBCVUZGRVJfWSA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1goeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeFBvcyArIEJVRkZFUl9YID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeVBvcyArIEJVRkZFUl9ZIC0gNiA+IHRoaXMueSAmJiB5UG9zIC0gQlVGRkVSX1kgKyA2IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1koeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeVBvcyArIEJVRkZFUl9ZID4gdGhpcy55ICYmIHlQb3MgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiB4UG9zICsgQlVGRkVSX1ggLSA2ID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCArIDYgPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZUltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgdXJsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFRleHQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBtZXNzYWdlLCB4LCB5KSB7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLm1haW5DdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy10ZXh0XCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gJ3JnYmEoMCwwLDAsMC42KSdcblxuICAgICAgICBsZXQgd29yZHMgPSB0aGlzLm1lc3NhZ2Uuc3BsaXQoXCIgXCIpXG4gICAgICAgIGxldCBsZW4gPSB3b3Jkcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IHNlZ21lbnQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY291bnQgKz0gd29yZHNbaV0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDMwKSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudC5wdXNoKHdvcmRzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudClcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0LzIgLSB0aGlzLnNlZ21lbnRzLmxlbmd0aCAqIDg7XG4gICAgfVxuXG4gICAgZmFkZUluKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbkxvb3ApXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgZmFkZUluTG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSBjb3VudCAvIDEwMDtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSBjb3VudCAqIDAuNiAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gYHJnYmEoMjU1LDI1NSwyNTUsJHt0ZXh0T3BhY2l0eX0pYDtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IGByZ2JhKDAsMCwwLCR7YmdPcGFjaXR5fSlgXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICBmYWRlT3V0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVPdXRMb29wKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9LCAxMDAwKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgZmFkZU91dExvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgbGV0IHRleHRPcGFjaXR5ID0gMSAtIChjb3VudCAvIDEwMCk7XG4gICAgICAgICAgICBsZXQgYmdPcGFjaXR5ID0gMC42IC0gKGNvdW50ICogMC42IC8gMTAwKTtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gYHJnYmEoMjU1LDI1NSwyNTUsJHt0ZXh0T3BhY2l0eX0pYDtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IGByZ2JhKDAsMCwwLCR7YmdPcGFjaXR5fSlgXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLmZhZGVJbigpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gZGFya2VuIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDAsMC42KVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMudGV4dENvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VnbWVudHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMuc2VnbWVudHNbaV0uam9pbihcIiBcIilcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAoNDgwIC0gbGluZS5sZW5ndGggKiAxNikvMjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGxpbmUsIHRoaXMueCArIG9mZnNldCwgdGhpcy55ICsgKGkgKiAzMCksIDQ4MCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbn0iLCJcbi8vb3V0ZXIgYXJyYXkgaXMgd29ybGRzLCBpbm5lciBhcnJheSBpcyBsZXZlbERhdGEgb2JqZWN0c1xuZXhwb3J0IGNvbnN0IExldmVsRGF0YSA9IFtcbiAgICAvLyB3b3JsZCAxXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiVGhpcyBpcyB0aGUgc3Rvcnkgb2Ygc3BhY2VtYW4sIGEgcmVzaWRlbnQgb2YgdGhlIGNsb3VkIHdvcmxkIHdobyBoYXMgYSBwYXNzaW9uIGZvciBhZHZlbnR1cmUuXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMyMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1NF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgM1xuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6MzgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjgwLFxuICAgICAgICAgICAgICAgICAgICB5OjM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OjI2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgeToxNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs3MjAsNDAwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOls1MCwzNjBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTUwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzc1MCw0NTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDVcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwyMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MDAsMTgwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiTm93IHRoYXQgc3BhY2VtYW4gaGFzIHNlZW4gYWxsIHRoYXQgaGlzIHdvcmxkIGhhcyB0byBvZmZlciwgaGUgYmVnaW5zIGhpcyBqb3VybmV5IHRocm91Z2ggb3RoZXJ3b3JsZHNcIlxuICAgICAgICB9XG5cbiAgICBdLFxuICAgIC8vIHdvcmxkIDJcbiAgICBbXG4gICAgICAgIC8vIHdvcmxkIDIgbGV2ZWwgMVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMyNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIlNwYWNlbWFuIGZpbmRzIGhpbXNlbGYgaW4gYW4gYXJpZCBtb3VudGFpbiB3b3JsZCB3aXRoIHN0b25lIHBsYXRmb3Jtcy4gU29tZSBvZiB0aGUgcGxhdGZvcm1zIHNlZW0gcXVpdGUgb2xkLi4uXCJcbiAgICAgICAgfSxcbiAgICBdXG5dIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFrUGxhdGZvcm0gZXh0ZW5kcyBJbnRlcmFjdGFibGV7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGR1cmF0aW9uLCBpbWdVcmwsIGdyYXZpdHkpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMDsgLy8gcGl4ZWxzIHBlciBzZWNvbmRcbiAgICB9XG5cbiAgICBmYWxsKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHBsYXRmb3JtRmFsbCk7XG4gICAgICAgIH0sICh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnkpICogMTAgKyB0aGlzLmR1cmF0aW9uKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUZhbGwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiB0aGlzLmR1cmF0aW9uIC8gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuZmFsbFNwZWVkIC8gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy5pbWdVcmw7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=