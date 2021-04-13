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

        var newBest = _this4.checkBestTime();

        _this4.menu.setMenuData("complete", _this4.worldNum, _this4.levelNum, newBest, _this4.levelTime);

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
    key: "timeText",
    value: function timeText() {
      var timeString = (this.time / 100).toString();
      var split = timeString.split(".");
      var formatted = split[0] + ":" + split[1];
      return formatted;
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

        this.ctx.fillText("Time: ".concat(this.timeText()), 290, 225);
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

          _this2.ctx.fillText((i + 1).toString(), 120 + increment, 397);
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

        _this2.ctx.drawImage(musicButton, 730, 30, 40, 30); // show/hide controls


        _this2.ctx.fillStyle = '#ffffff';
        _this2.ctx.font = "12px 'Press Start 2P'";

        _this2.ctx.fillText("controls", 20, 30);

        if (_this2.showControls) {
          _this2.ctx.fillStyle = 'rgba(0,0,0,0.7)';

          _this2.ctx.fillRect(0, 0, _this2.canvas.width, _this2.canvas.height);

          _this2.ctx.fillStyle = '#ffffff';
          _this2.ctx.font = "20px 'Press Start 2P'";

          _this2.ctx.fillText('WASD - Move', 290, 210);

          _this2.ctx.fillText('Space - Jump', 270, 250);

          _this2.ctx.fillText('Esc - Pause', 310, 290);
        } // stats


        _this2.ctx.font = "20px 'Press Start 2P'";

        _this2.ctx.fillText("Best Time: ".concat(_this2.bestTime), 240, 160);

        _this2.ctx.fillText("Death Count: ".concat(_this2.deathCount), 260, 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlTWVudS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT2ZmLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGFiSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQxTXVzaWMubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJUaW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Fzc2V0SW1wb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW50ZXJhY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xldmVsVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbGRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvd2Vha1BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWVGcmFtZSIsIkhvbWVQYWdlIiwicmVuZGVyIiwiRXhpdCIsIngiLCJ5IiwibGV2ZWxOdW0iLCJ3b3JsZE51bSIsImV4aXRJbWFnZSIsIkltYWdlIiwiZnJhbWVOdW0iLCJ4UG9zIiwieVBvcyIsInBvcnRhbEZyYW1lIiwiY3VycmVudEltYWdlTnVtIiwiTWF0aCIsImZsb29yIiwic3JjIiwiZHJhd0ltYWdlIiwiSW50ZXJhY3RhYmxlIiwiR2FtZSIsImdhbWUiLCJyZW5kZXJIb21lIiwiZ2FtZU11c2ljIiwibXVzaWNNdXRlZCIsInRvZ2dsZVNvdW5kTXV0ZWQiLCJnZXRTb3VuZE11dGVkIiwidG9nZ2xlTXVzaWNNdXRlZCIsImxldmVsVGltZSIsInBhdXNlZCIsIm1lbnUiLCJHYW1lTWVudSIsInNldERhdGEiLCJiaW5kIiwidG9nZ2xlUGF1c2UiLCJjbGVhclJlY3QiLCJsZXZlbERhdGEiLCJMZXZlbERhdGEiLCJWRUxPQ0lUWV9YIiwiR1JBVklUWSIsImdyYXZpdHkiLCJQbGF5ZXIiLCJ2ZWxvY2l0eSIsImlzSnVtcGluZyIsImNhbkp1bXAiLCJwbGF5ZXJTdGFydFBvcyIsImZhY2VSaWdodCIsIm1vdmluZyIsImNvbGxpZGluZ1giLCJjb2xsaWRpbmdZIiwiZ3JvdW5kZWQiLCJjb2xsaXNpb25zdXJmYWNlWSIsInBhdXNlU291bmQiLCJBdWRpbyIsInZvbHVtZSIsImp1bXBTb3VuZCIsImZvb3RzdGVwIiwid29ybGRCR3MiLCJwbGF5ZXJTcHJpdGUiLCJwb3J0YWxTcHJpdGUiLCJleGl0IiwiZmluaXNoUG9zIiwiaW50ZXJhY3RhYmxlcyIsImltYWdlcyIsImZvckVhY2giLCJpbnRlcmFjdGFibGUiLCJwdXNoIiwiaW1nVXJsIiwibGVuZ3RoIiwiSW50ZXJhY3RhYmxlSW1hZ2UiLCJ5T2Zmc2V0IiwiaW1nSGVpZ2h0IiwibGV2ZWxUZXh0IiwiTGV2ZWxUZXh0Iiwid2luZG93IiwiZXZlbnQiLCJrZXkiLCJwbGF5Iiwic2V0VGltZW91dCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJuZXdHYW1lIiwid2VhayIsIldlYWtQbGF0Zm9ybSIsImltZyIsImRlYXRoQ291bnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInBhcnNlSW50IiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lTG9vcCIsImNsZWFySW50ZXJ2YWwiLCJpbmNyZW1lbnREZWF0aENvdW50Iiwic2V0TWVudURhdGEiLCJvcGVuIiwibGV2ZWw1QW5pbWF0aW9uIiwibmV3QmVzdCIsImNoZWNrQmVzdFRpbWUiLCJza2lwIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZXRJbnRlcnZhbCIsInBhdXNlR2FtZSIsImZpbGxTdHlsZSIsImdhbWVPdmVyIiwiaW1hZ2UiLCJkcmF3UGxheWVyIiwiY3VyckZyYW1lIiwiaXNDb2xsaWRpbmdYIiwiaXNDb2xsaWRpbmdZIiwiZmFsbCIsImxldmVsQ29tcGxldGUiLCJmb250IiwiZmlsbFRleHQiLCJ0b1N0cmluZyIsImZpbmlzaFdvcmxkIiwiY291bnQiLCJleGl0WCIsImV4aXRZIiwiZXhpdFciLCJleGl0SCIsIm1haW5DYW52YXMiLCJtYWluQ3R4IiwidHlwZSIsInVucGF1c2UiLCJyZW5kZXJHYW1lIiwiYWN0aXZlIiwic2V0R2FtZURhdGEiLCJ0aW1lIiwic291bmRPZmYiLCJzb3VuZE9uIiwibWVudUJsaXAiLCJzZWxlY3RlZCIsInN1Ym1pdHRlZCIsIm1heE51bSIsImNsb3NlIiwiY2FudmFzUG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibW91c2VYIiwibGVmdCIsIm1vdXNlWSIsInRvcCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRpbWVTdHJpbmciLCJzcGxpdCIsImZvcm1hdHRlZCIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsIiwidGltZVRleHQiLCJjdXJyZW50V29ybGQiLCJzb3VuZE11dGVkIiwibnVtV29ybGRzIiwiYmVzdFRpbWUiLCJzaG93Q29udHJvbHMiLCJsZXZlbEZpbGxzIiwibXVzaWMiLCJ0b2dnbGVNdXRlU291bmQiLCJ0b2dnbGVNdXRlTXVzaWMiLCJob21lIiwibGV2ZWxzQ29tcGxldGVkIiwibW92ZUxpc3RlbmVyIiwiaSIsImluY3JlbWVudCIsImNsaWNrTGlzdGVuZXIiLCJnZXRMZXZlbHNDb21wbGV0ZWQiLCJmaWxsQ29sb3IiLCJzb3VuZEJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiQlVGRkVSX1giLCJCVUZGRVJfWSIsInVybCIsIm1lc3NhZ2UiLCJ0ZXh0Q29sb3IiLCJiZ0NvbG9yIiwid29yZHMiLCJsZW4iLCJzZWdtZW50cyIsInNlZ21lbnQiLCJmYWRlSW5Mb29wIiwiZmFkZU91dCIsInRleHRPcGFjaXR5IiwiYmdPcGFjaXR5IiwiZmFkZU91dExvb3AiLCJmYWRlSW4iLCJsaW5lIiwiam9pbiIsIm9mZnNldCIsImR1cmF0aW9uIiwiZmFsbFNwZWVkIiwicGxhdGZvcm1GYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHdGQUF5QixFOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFlLG9GQUFxQixFOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFBZSxxRkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQWUsc0ZBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0F0QztBQUFlLHFGQUFzQixFOzs7Ozs7Ozs7Ozs7QUNBckM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQWUscUZBQXNCLEU7Ozs7Ozs7Ozs7OztBQ0FyQztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSx5RkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSwwRkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQTFDO0FBQWUsMEZBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0ExQztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBZSx3RkFBeUIsRTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQWUsdUZBQXdC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QUNtTSxTQUFMLEdBQWlCLElBQTNCO0FBQ0g7O0FBQ0RqRixhQUFLO0FBQ1IsT0FOK0IsRUFNN0IsRUFONkIsQ0FBaEM7QUFPSDs7O1dBRUQsa0JBQVM7QUFDTCxXQUFLM0gsR0FBTCxDQUFTOEcsU0FBVCxHQUFxQixlQUFyQjtBQUNBLFdBQUs5RyxHQUFMLENBQVMySixRQUFULENBQWtCLEtBQUtuSixDQUF2QixFQUEwQixLQUFLQyxDQUEvQixFQUFrQyxLQUFLUCxLQUF2QyxFQUE4QyxLQUFLQyxNQUFuRDtBQUNBLFdBQUtxRixHQUFMLENBQVNuRSxHQUFULEdBQWUsS0FBS2tELE1BQXBCO0FBQ0EsV0FBS3ZFLEdBQUwsQ0FBU3NCLFNBQVQsQ0FBbUIsS0FBS2tFLEdBQXhCLEVBQTZCLEtBQUtoRixDQUFsQyxFQUFxQyxLQUFLQyxDQUExQyxFQUE2QyxLQUFLUCxLQUFsRCxFQUF5RCxLQUFLQyxNQUE5RDtBQUNIOzs7O0VBOUJxQ29CLHFEOzs7Ozs7Ozs7Ozs7OztBQ0gxQztBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvV29ybGQxRG9vci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Xb3JsZDJEb29yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2Zvb3RzdGVwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2p1bXBTb3VuZC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21haW5wYWdlX2JnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL21lbnVCbGlwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2UubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2VNZW51Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90YWJJY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby93b3JsZDFNdXNpYy5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJCRy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMkxhcmdlV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVdlYWtQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlNtYWxsV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZ1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3NjcmlwdHMvaG9tZXBhZ2UnXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWFpblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIGxldCBnYW1lRnJhbWUgPSAwO1xuXG5cbiAgICBuZXcgSG9tZVBhZ2UoY2FudmFzLCBjdHgpLnJlbmRlcigpO1xuXG4gICAgXG5cblxufSk7XG4iLCIvL2ltYWdlcyBcbmltcG9ydCBydW5SaWdodEltYWdlMSBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUzLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UyIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUyLnBuZydcbmltcG9ydCBydW5MZWZ0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9ydW5MZWZ0RnJhbWUzLnBuZydcblxuaW1wb3J0IFBvcnRhbEZyYW1lMSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUxLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWUzIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTMucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU0LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTUgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNS5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU2IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTYucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNyBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU3LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTggZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lOC5wbmcnXG5cbmltcG9ydCBXb3JsZDFEb29yIGZyb20gJy4uL2Fzc2V0cy9Xb3JsZDFEb29yLnBuZydcbmltcG9ydCBXb3JsZDJEb29yIGZyb20gJy4uL2Fzc2V0cy9Xb3JsZDJEb29yLnBuZydcblxuXG5pbXBvcnQgbGFyZ2VQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgbWVkaXVtUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL21lZGl1bVBsYXRmb3JtLnBuZydcbmltcG9ydCBzbWFsbFBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZydcbmltcG9ydCB0aW55UGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3RpbnlQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCB3b3JsZDJMYXJnZVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJNZWRpdW1QbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlNtYWxsUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlRpbnlQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyVGlueVBsYXRmb3JtLnBuZydcblxuaW1wb3J0IHdvcmxkMkxhcmdlV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyTWVkaXVtV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlNtYWxsV2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyVGlueVdlYWtQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCBpZGxlRnJhbWUgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZS5wbmcnXG5pbXBvcnQgaWRsZUZyYW1lMiBmcm9tICcuLi9hc3NldHMvaWRsZUZyYW1lMi5wbmcnXG5cbmltcG9ydCBCRyBmcm9tICcuLi9hc3NldHMvbWFpbnBhZ2VfYmcucG5nJ1xuaW1wb3J0IHRhYkljb24gZnJvbSAnLi4vYXNzZXRzL3RhYkljb24ucG5nJ1xuaW1wb3J0IHdvcmxkMkJHIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJCRy5wbmcnXG5pbXBvcnQgbXVzaWNPbiBmcm9tICcuLi9hc3NldHMvbXVzaWNPbi5wbmcnXG5pbXBvcnQgbXVzaWNPZmYgZnJvbSAnLi4vYXNzZXRzL211c2ljT2ZmLnBuZydcbmltcG9ydCBzb3VuZE9uIGZyb20gJy4uL2Fzc2V0cy9zb3VuZE9uLnBuZydcbmltcG9ydCBzb3VuZE9mZiBmcm9tICcuLi9hc3NldHMvc291bmRPZmYucG5nJ1xuXG5cbi8vYXVkaW9cbmltcG9ydCBXb3JsZDFNdXNpYyBmcm9tICcuLi9hc3NldHMvd29ybGQxTXVzaWMubXAzJ1xuaW1wb3J0IGp1bXBTb3VuZCBmcm9tICcuLi9hc3NldHMvanVtcFNvdW5kLm1wMydcbmltcG9ydCBmb290c3RlcCBmcm9tICcuLi9hc3NldHMvZm9vdHN0ZXAubXAzJ1xuaW1wb3J0IG1lbnVCbGlwIGZyb20gJy4uL2Fzc2V0cy9tZW51QmxpcC5tcDMnXG5pbXBvcnQgcGF1c2VNZW51IGZyb20gJy4uL2Fzc2V0cy9wYXVzZU1lbnUubXAzJ1xuaW1wb3J0IHBhdXNlIGZyb20gJy4uL2Fzc2V0cy9wYXVzZS5tcDMnIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGl0IGV4dGVuZHMgSW50ZXJhY3RhYmxle1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoLCBsZXZlbE51bSwgd29ybGROdW0pIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcblxuXG4gICAgICAgIHRoaXMuZXhpdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGZyYW1lTnVtLCB4UG9zID0gdGhpcy54LCB5UG9zID0gdGhpcy55LCB3aWR0aCA9IDYwLCBoZWlnaHQgPSA4MCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICBsZXQgcG9ydGFsRnJhbWUgPSBmcmFtZU51bSAlIDEyMDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW1hZ2VOdW0gPSBNYXRoLmZsb29yKHBvcnRhbEZyYW1lLzE1KSArIDE7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvUG9ydGFsRnJhbWUke2N1cnJlbnRJbWFnZU51bX0ucG5nYFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHhQb3MsIHlQb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4aXRJbWFnZS5zcmMgPSBgZGlzdC9pbWFnZXMvV29ybGQke3RoaXMud29ybGROdW19RG9vci5wbmdgXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5leGl0SW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tICcuL2ludGVyYWN0YWJsZSdcbmltcG9ydCBHYW1lTWVudSBmcm9tICcuL2dhbWVtZW51J1xuaW1wb3J0IEV4aXQgZnJvbSAnLi9leGl0J1xuXG5pbXBvcnQgeyBMZXZlbERhdGEgfSBmcm9tICcuL2xldmVsZGF0YSdcbmltcG9ydCBJbnRlcmFjdGFibGVJbWFnZSBmcm9tICcuL2ludGVyYWN0YWJsZUltYWdlJ1xuaW1wb3J0IExldmVsVGV4dCBmcm9tICcuL2xldmVsVGV4dCdcbmltcG9ydCBXZWFrUGxhdGZvcm0gZnJvbSAnLi93ZWFrUGxhdGZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgR2FtZU1lbnUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSwgdGhpcy5zZXREYXRhLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXJIb21lLCB0aGlzLmdhbWVNdXNpYywgdGhpcy5tdXNpY011dGVkLCB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQsIHRoaXMuZ2V0U291bmRNdXRlZCwgdGhpcy50b2dnbGVTb3VuZE11dGVkKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhdXNlU291bmQgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vcGF1c2UubXAzJylcbiAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICAvLyBwbGF5ZXIgbW92ZW1lbnQgc291bmRzXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2p1bXBTb3VuZC5tcDMnKVxuICAgICAgICB0aGlzLmp1bXBTb3VuZC52b2x1bWUgPSAwLjY7XG4gICAgICAgIHRoaXMuZm9vdHN0ZXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vZm9vdHN0ZXAubXAzJylcbiAgICAgICAgdGhpcy5mb290c3RlcC52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnBvcnRhbFNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIC8vIHNldCBleGl0IGxvY2F0aW9uXG4gICAgICAgIHRoaXMuZXhpdCA9IG5ldyBFeGl0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzBdLHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1sxXSw3MCw3MCwgdGhpcy5sZXZlbE51bSwgdGhpcy53b3JsZE51bSk7XG5cbiAgICAgICAgLy8gc2V0IGludGVyYWN0YWJsZXMgZm9yIHRoaXMgc3RhZ2UgZnJvbSBzZWVkIGRhdGFcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IEludGVyYWN0YWJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoKSk7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlSW1hZ2UodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUuaW1nVXJsLGludGVyYWN0YWJsZS54LGludGVyYWN0YWJsZS55IC0gaW50ZXJhY3RhYmxlLnlPZmZzZXQsaW50ZXJhY3RhYmxlLndpZHRoLGludGVyYWN0YWJsZS5pbWdIZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IHRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IC10aGlzLlZFTE9DSVRZX1g7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5mYWNlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJyAmJiB0aGlzLlBsYXllci5ncm91bmRlZCAmJiAhdGhpcy5QbGF5ZXIuaXNKdW1waW5nICkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA2MClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2VTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZXRHYW1lKG5ld0dhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3R2FtZTtcbiAgICB9XG5cbiAgICBzZXREYXRhKHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSkge1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDUwLDUwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLndlYWspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgV2Vha1BsYXRmb3JtKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgsIDEwMDAsIGludGVyYWN0YWJsZS5pbWdVcmwsIHRoaXMuR1JBVklUWSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIHRvZ2dsZVBhdXNlKCl7XG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgaW5jcmVtZW50RGVhdGhDb3VudCgpIHtcbiAgICAgICAgbGV0IGRlYXRoQ291bnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBkZWF0aCBjb3VudGApO1xuICAgICAgICBpZiAoZGVhdGhDb3VudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBkZWF0aCBjb3VudGAsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBkZWF0aCBjb3VudGAsIHBhcnNlSW50KGRlYXRoQ291bnQpICsgMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmVzdFRpbWUoKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gYmVzdCB0aW1lYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGV2ZWxUaW1lKVxuICAgICAgICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBiZXN0IHRpbWVgLCB0aGlzLmxldmVsVGltZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxldmVsVGltZSA+IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBiZXN0IHRpbWVgLCB0aGlzLmxldmVsVGltZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKGdhbWVMb29wKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcblxuICAgICAgICB0aGlzLmluY3JlbWVudERlYXRoQ291bnQoKTtcblxuXG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cblxuICAgIGxldmVsQ29tcGxldGUoZ2FtZUxvb3ApIHtcbiAgICAgICAgLy8gc2V0IG5ldyBsZXZlbHNDb21wbGV0ZWQgbG9jYWxTdG9yYWdlIHZhcmlhYmxlXG4gICAgICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGV2ZWxzQ29tcGxldGVkXCIpO1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGV2ZWxzQ29tcGxldGVkXCIsIHBhcnNlSW50KGN1cnJlbnQpICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbmltYXRpb24gYXQgZW5kIG9mIGxldmVsIDVcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxOdW0gPT0gNSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbDVBbmltYXRpb24oZ2FtZUxvb3ApO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApXG4gICAgICAgICAgICBsZXQgbmV3QmVzdCA9IHRoaXMuY2hlY2tCZXN0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiY29tcGxldGVcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCBuZXdCZXN0LCB0aGlzLmxldmVsVGltZSk7XG4gICAgICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwYXVzZUdhbWUoZ2FtZUxvb3ApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcClcbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwicGF1c2VcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKHNraXAgPSBmYWxzZSl7XG4gICAgICAgIGlmICh0aGlzLmxldmVsVGV4dCAhPSBcIlwiICYmICFza2lwKSB7ICAgIFxuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQub3BlbigpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMud29ybGRCR3NbdGhpcy53b3JsZE51bSAtIDFdfSlgXG4gICAgICAgIGNvbnN0IGdhbWVMb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUdhbWUoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcblxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLnkgPiA1MDAgfHwgdGhpcy5sZXZlbFRpbWUgPD0gMTEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcihnYW1lTG9vcClcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIGRyYXcgZXhpdFxuICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcih0aGlzLmZyYW1lTnVtKTtcblxuICAgICAgICAgICAgLy8gZHJhdyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLnJlbmRlcigpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gZHJhdyBwbGF5ZXJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BsYXllcih0aGlzLnBsYXllclNwcml0ZSwgdGhpcy5QbGF5ZXIueCwgdGhpcy5QbGF5ZXIueSwgdGhpcy5QbGF5ZXIud2lkdGgsIHRoaXMuUGxheWVyLmhlaWdodClcblxuXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIGZyYW1lIGltYWdlXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIubW92aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMuZm9vdHN0ZXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyckZyYW1lID0gTWF0aC5mbG9vcih0aGlzLlBsYXllci5mcmFtZU51bSAvIDEwKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZmFjZVJpZ2h0KSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyckZyYW1lID09IDAgfHwgY3VyckZyYW1lID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lTnVtICUgNDAgPiAyMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcblxuICAgIFxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBvYnN0YWNsZSBjb2xsaXNpb25cbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1kgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWCh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChpbnRlcmFjdGFibGUgaW5zdGFuY2VvZiBXZWFrUGxhdGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGludGVyYWN0YWJsZS5mYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9LCBpbnRlcmFjdGFibGUuZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1kodGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1kgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZID0gaW50ZXJhY3RhYmxlLnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUgaW5zdGFuY2VvZiBXZWFrUGxhdGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS5mYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIGxldmVsIGZpbmlzaCBcbiAgICAgICAgICAgIGlmICh0aGlzLmV4aXQuaXNDb2xsaWRpbmdYKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5pc0NvbGxpZGluZ1kodGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbENvbXBsZXRlKGdhbWVMb29wKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgbW92ZW1lbnQgYmFzZSBvbiBwbGF5ZXIgY29sbGlzaW9uXG4gICAgICAgICAgICBpZiAoIXRoaXMuUGxheWVyLmNvbGxpZGluZ1gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuUGxheWVyLmNvbGxpZGluZ1kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSB0aGlzLkdSQVZJVFk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSB0aGlzLlBsYXllci52ZWxvY2l0eVsxXTsgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgPSB0aGlzLlBsYXllci5jb2xsaXNpb25zdXJmYWNlWSAtIDU5O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSB0aGlzLkdSQVZJVFk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSB0aGlzLlBsYXllci52ZWxvY2l0eVsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgICAgICAvL2xldmVsIGluZm8gXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19YCwgMzY0LCA1MCk7XG5cbiAgICAgICAgICAgIC8vIHRpbWVyXG4gICAgICAgICAgICB0aGlzLmxldmVsVGltZS0tO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoTWF0aC5mbG9vcih0aGlzLmxldmVsVGltZS8xMDApLnRvU3RyaW5nKCksIDcwMCwgNTApO1xuICAgIFxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aGlzLlBsYXllci5mcmFtZU51bSA9ICh0aGlzLlBsYXllci5mcmFtZU51bSArIDEpICUgNDBcbiAgICAgICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAodGhpcy5wb3J0YWxGcmFtZSArIDEpICUgODA7XG5cbiAgICAgICAgICAgIHRoaXMuZnJhbWVOdW0rKztcbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMClcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIGFuaW1hdGlvbnNcblxuICAgIGxldmVsNUFuaW1hdGlvbihnYW1lTG9vcCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZpbmlzaFdvcmxkKVxuICAgICAgICAgICAgbGV0IG5ld0Jlc3QgPSB0aGlzLmNoZWNrQmVzdFRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImNvbXBsZXRlXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgbmV3QmVzdCwgdGhpcy5sZXZlbFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICAgICAgfSwgNDAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGV4aXRYID0gNTAwO1xuICAgICAgICBsZXQgZXhpdFkgPSAxODA7XG4gICAgICAgIGxldCBleGl0VyA9IDYwO1xuICAgICAgICBsZXQgZXhpdEggPSA4MDtcbiAgICAgICAgbGV0IGZpbmlzaFdvcmxkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgICAgLy8gZHJhdyBleGl0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGV4aXRYICs9IDAuNjtcbiAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgZXhpdFgsIGV4aXRZLCBleGl0VywgZXhpdEgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgIGV4aXRYIC09IDAuMztcbiAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgZXhpdFcgKz0gMC42O1xuICAgICAgICAgICAgICAgIGV4aXRIICs9IDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCBleGl0WCwgZXhpdFksIGV4aXRXLCBleGl0SCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIDUzMCwgMTAwLCAxMjAsIDE2MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gZHJhdyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLnJlbmRlcigpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gZHJhdyBpbnRlcmFjdGFibGVzIFxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCAxMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSA0MCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjI1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjc1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMC41O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAzMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDMyNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci53aWR0aCAtPSAwLjM7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaGVpZ2h0IC09IDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDAuMTU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSAwLjI1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMucGxheWVyU3ByaXRlLCB0aGlzLlBsYXllci54LCB0aGlzLlBsYXllci55LCB0aGlzLlBsYXllci53aWR0aCwgdGhpcy5QbGF5ZXIuaGVpZ2h0KVxuICAgICAgICB9LCAxMClcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluQ2FudmFzLCBtYWluQ3R4LCB0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHNldERhdGEsIHVucGF1c2UsIHJlbmRlckdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCl7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IG1haW5DYW52YXM7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IG1haW5DdHg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnNldEdhbWVEYXRhID0gc2V0RGF0YTtcbiAgICAgICAgdGhpcy51bnBhdXNlID0gdW5wYXVzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJHYW1lID0gcmVuZGVyR2FtZTtcbiAgICAgICAgdGhpcy5yZW5kZXJIb21lID0gcmVuZGVySG9tZTtcblxuICAgICAgICB0aGlzLm5ld0Jlc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcblxuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLnNvdW5kT2ZmID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc291bmRPZmYuc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT2ZmLnBuZyc7XG4gICAgICAgIHRoaXMuc291bmRPbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNvdW5kT24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT24ucG5nJztcblxuICAgICAgICB0aGlzLm1lbnVCbGlwID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL21lbnVCbGlwLm1wMycpO1xuICAgICAgICB0aGlzLnBhdXNlID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL3BhdXNlLm1wMycpXG4gICAgICAgIHRoaXMubWVudUJsaXAudm9sdW1lID0gMC4xO1xuICAgICAgICB0aGlzLnBhdXNlLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gMTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICd3Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLm1lbnVCbGlwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAncycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heE51bSA9IHRoaXMudHlwZSA9PSBcInBhdXNlXCIgPyAzIDogMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gbWF4TnVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLm1lbnVCbGlwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2UucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIiAmJiB0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNTQwICYmIG1vdXNlWCA8IDU3MCAmJiBtb3VzZVkgPiAxMzAgJiYgbW91c2VZIDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRNZW51RGF0YSh0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIG5ld0Jlc3QsIHRpbWUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMubmV3QmVzdCA9IG5ld0Jlc3Q7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zdCBtZW51ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5tYWluQ2FudmFzLCB0aGlzLm1haW5DdHgsIHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtICsgMSwgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtICsgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1lbnUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgdGltZVRleHQoKSB7XG4gICAgICAgIGxldCB0aW1lU3RyaW5nID0gKHRoaXMudGltZS8xMDApLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBzcGxpdCA9IHRpbWVTdHJpbmcuc3BsaXQoXCIuXCIpXG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBzcGxpdFswXSArIFwiOlwiICsgc3BsaXRbMV07XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDEwMCw0MDAsMjAwKTtcblxuICAgICAgICAvLyBzZXQgbWVudSBoZWFkZXIgZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIC8vIGRyYXcgbWVudSBoZWFkZXJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBGYWlsZWRcIiwgMjYwLCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgQ29tcGxldGUhXCIsIDIyNCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCw4NywyNTUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlXCIsIDM0NCwgMTUwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXV0ZSBidXR0b24gc2V0dXBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zb3VuZE9mZiwgNTQwLCAxMzAsIDMwLCAyMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNvdW5kT24sIDU0MCwgMTMwLCAzMCwgMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vIHNldCBtZW51IG9wdGlvbiBmb250XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgIFxuICAgICAgICAvLyBkcmF3IG1lbnUgb3B0aW9ucyBhbmQgYXJyb3dzXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXRyeVwiLCAzNjAsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMyMCwgMjUwKVxuXG4gICAgICAgICAgICAvLyBkcmF3IHNlbGVjdGVkIGFycm93cyBhcm91bmQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygzMDAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMyMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzAwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUyMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTAwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MjAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDIwMCwzMDAsNDAwLDEwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdCZXN0KSB7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGhpZ2ggc2NvcmUgdGV4dFxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwyNTUsMCknO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJOZXcgQmVzdCBUaW1lIVwiLCAzMTYsIDIwMClcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGZpbGxzdHlsZSBhbmQgZm9udFxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgVGltZTogJHt0aGlzLnRpbWVUZXh0KCl9YCwgMjkwLCAyMjUpXG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTmV4dCBMZXZlbFwiLCAzMDAsIDMwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMxMCwgMzUwKVxuXG4gICAgICAgICAgICAvLyBkcmF3IHNlbGVjdGVkIGFycm93cyBhcm91bmQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNDAsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2MCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjQwLCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU2MCwgMzAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQwLCAyOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDI4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjUwLCAzNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNzAsIDM0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI1MCwgMzMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NTAsIDM1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUzMCwgMzQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTUwLCAzMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDIwMCwzMDAsNDAwLDQwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmVzdW1lXCIsIDM0NCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXN0YXJ0XCIsIDMzNCwgMjUwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzE0LCAzMDApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjc0LCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyOTQsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI3NCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MzQsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUxNCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTM0LCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI2NCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjg0LCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjQsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTQ0LCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MjQsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0NCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyMzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjM0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU3NCwgMzAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTU0LCAyOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NzQsIDI4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGFzc2V0SW1wb3J0cyBmcm9tICcuL2Fzc2V0SW1wb3J0cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSAxO1xuICAgICAgICB0aGlzLnNvdW5kTXV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm51bVdvcmxkcyA9IDI7XG5cbiAgICAgICAgdGhpcy5kZWF0aENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5iZXN0VGltZSA9IFwiLS06LS1cIlxuICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxldmVsRmlsbHMgPSBbJyNmZmZmZmYnLCcjZmZmZmZmJywnI2ZmZmZmZicsJyNmZmZmZmYnLCcjZmZmZmZmJ11cblxuICAgICAgICB0aGlzLmdhbWUgPSAgbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAxLCAxLCB0aGlzLmdhbWUsIHRoaXMucmVuZGVyLmJpbmQodGhpcyksIHRoaXMubXVzaWMsIHRoaXMuc291bmRNdXRlZCwgdGhpcy50b2dnbGVNdXRlU291bmQuYmluZCh0aGlzKSwgdGhpcy5nZXRTb3VuZE11dGVkLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlTXV0ZU11c2ljLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmhvbWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubXVzaWMgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgdGhpcy5tdXNpYy5zcmMgPSAnZGlzdC9hdWRpby93b3JsZDFNdXNpYy5tcDMnO1xuICAgICAgICB0aGlzLm11c2ljLnZvbHVtZSA9IDAuNjtcblxuICAgICAgICB0aGlzLndvcmxkQkdzID0gW1xuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL21haW5wYWdlX2JnLnBuZycsXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvd29ybGQyQkcucG5nJyxcbiAgICAgICAgXVxuXG4gICAgICAgIC8vIGdldCBjdXJyZW50IG51bWJlciBvZiBsZXZlbHMgY29tcGxldGVkXG4gICAgICAgIHRoaXMubGV2ZWxzQ29tcGxldGVkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGV2ZWxzQ29tcGxldGVkXCIpO1xuICAgICAgICBpZiAodGhpcy5sZXZlbHNDb21wbGV0ZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3ZlTGlzdGVuZXIgPSBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuICAgICAgICAgICAgICAgIGlmIChtb3VzZVggPiAxMDAgKyBpbmNyZW1lbnQgJiYgbW91c2VYIDwgMTY1ICsgaW5jcmVtZW50ICYmIG1vdXNlWSA+IDM0NSAmJiBtb3VzZVkgPCA0MTUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxzQ29tcGxldGVkID49ICh0aGlzLmN1cnJlbnRXb3JsZCAtIDEpICogNSArIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhdGhDb3VudCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLmN1cnJlbnRXb3JsZH0tJHtpICsgMX0gZGVhdGggY291bnRgKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXN0VGltZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLmN1cnJlbnRXb3JsZH0tJHtpICsgMX0gYmVzdCB0aW1lYCkvMTAwIHx8IFwiLS06LS1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxGaWxsc1tpXSA9ICdyZ2IoMjU1LDE5MCwyNTUpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxGaWxsc1tpXSA9ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDAgJiYgbW91c2VYIDwgMTI1ICYmIG1vdXNlWSA+IDAgJiYgbW91c2VZIDwgNDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlTGlzdGVuZXIpO1xuXG4gICAgICAgIHRoaXMuY2xpY2tMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbnZhc1BvcyA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LnggLSBjYW52YXNQb3MubGVmdDtcbiAgICAgICAgICAgIGxldCBtb3VzZVkgPSBldmVudC55IC0gY2FudmFzUG9zLnRvcDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYID4gMTAwICsgaW5jcmVtZW50ICYmIG1vdXNlWCA8IDE2NSArIGluY3JlbWVudCAmJiBtb3VzZVkgPiAzNDUgJiYgbW91c2VZIDwgNDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA+PSAodGhpcy5jdXJyZW50V29ybGQgLSAxKSAqIDUgKyBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaG9tZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zZXREYXRhKHRoaXMuY3VycmVudFdvcmxkLCBpICsgMSwgdGhpcy5nYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbGlja0xpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA3MzAgJiYgbW91c2VYIDwgNzcwICYmIG1vdXNlWSA+IDMwICYmIG1vdXNlWSA8IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlTXVzaWMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDY2MCAmJiBtb3VzZVggPCA3MDAgJiYgbW91c2VZID4gMzAgJiYgbW91c2VZIDwgNjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU11dGVTb3VuZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VZIDwgMjgwICYmIG1vdXNlWSA+IDI1MCkge1xuICAgICAgICAgICAgICAgIGlmIChtb3VzZVggPCAyNDAgJiYgbW91c2VYID4gMjEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXb3JsZCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkLS07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IHRoaXMubnVtV29ybGRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtb3VzZVggPCA1OTAgJiYgbW91c2VYID4gNTYwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRXb3JsZCA8IHRoaXMubnVtV29ybGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1bmNvbW1lbnQgZm9yIGRldiBvcHRpb25zXG4gICAgICAgICAgICAvLyBpZiAobW91c2VYID4gMCAmJiBtb3VzZVggPCAyMCAmJiBtb3VzZVkgPiAwICYmIG1vdXNlWSA8IDIwKSB7XG4gICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGV2ZWxzQ29tcGxldGVkXCIsIDApO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAobW91c2VYID4gMCAmJiBtb3VzZVggPCAyMCAmJiBtb3VzZVkgPiA0NTAgJiYgbW91c2VZIDwgNTAwKSB7XG4gICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGV2ZWxzQ29tcGxldGVkXCIsIHRoaXMubnVtV29ybGRzICogNSk7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmIChtb3VzZVggPiA3NTAgJiYgbW91c2VYIDwgODAwICYmIG1vdXNlWSA+IDQ1MCAmJiBtb3VzZVkgPCA1MDApIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImhlcmVcIilcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLm51bVdvcmxkczsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDU7IGorKykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2l9LSR7an0gYmVzdCB0aW1lYCwgMCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aX0tJHtqfSBkZWF0aCBjb3VudGAsIDApO1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuY2xpY2tMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdG9nZ2xlTXV0ZU11c2ljKCkge1xuICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSAhdGhpcy5tdXNpY011dGVkO1xuXG4gICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTb3VuZE11dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VuZE11dGVkO1xuICAgIH1cblxuICAgIHRvZ2dsZU11dGVTb3VuZCgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc291bmRNdXRlZCA9ICF0aGlzLnNvdW5kTXV0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0TGV2ZWxzQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxzQ29tcGxldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzQ29tcGxldGVkID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmNsaWNrTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdmVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHRoaXMuZ2V0TGV2ZWxzQ29tcGxldGVkKCk7XG4gICAgICAgIHRoaXMuaG9tZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLndvcmxkQkdzW3RoaXMuY3VycmVudFdvcmxkIC0gMV19KWBcbiAgICBcbiAgICAgICAgICAgIC8vdGl0bGVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnT3RoZXJ3b3JsZHMnLCAyMjUsIDkwKVxuXG4gICAgICAgICAgICBcblxuICAgIFxuICAgICAgICAgICAgLy8gd29ybGQgc2VsZWN0ICAgICAgXG4gICAgICAgICAgICAvLyAtLXdvcmxkIG5hbWVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI4cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgV29ybGQgJHt0aGlzLmN1cnJlbnRXb3JsZH1gLCAzMDIsIDI4MClcblxuICAgICAgICAgICAgLy8tLSB3b3JsZCBjeWNsaW5nIGFycm93c1xuICAgICAgICAgICAgLy8tLS0tIHJpZ2h0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI4MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTkwLCAyNjUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjUwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vLS0tLSBsZWZ0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNDAsIDI4MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjEwLCAyNjUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMjUwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy9sZXZlbCBzZWxlY3QgLSAxMzBweCBiZXR3ZWVuIGxldmVsXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBmaWxsQ29sb3IgPSBcInJnYigxMjAsMTIwLDEyMClcIjtcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuY3VycmVudFdvcmxkIC0gMSkgKiA1ICsgaSA8PSB0aGlzLmxldmVsc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSB0aGlzLmxldmVsRmlsbHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoODAsODAsODApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDAgKyBpbmNyZW1lbnQsMzQ1LDcwLDcwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDUgKyBpbmNyZW1lbnQsMzUwLDYwLDYwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoKGkgKyAxKS50b1N0cmluZygpLCAxMjAgKyBpbmNyZW1lbnQsIDM5NylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbXV0ZSBzb3VuZCBidXR0b25cbiAgICAgICAgICAgIGxldCBzb3VuZEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc291bmRNdXRlZCkge1xuICAgICAgICAgICAgICAgIHNvdW5kQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9mZi5wbmcnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdW5kQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9uLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShzb3VuZEJ1dHRvbiwgNjYwLCAzMCwgNDAsIDMwKTtcblxuICAgICAgICAgICAgLy8gbXV0ZSBtdXNpYyBidXR0b25cbiAgICAgICAgICAgIGxldCBtdXNpY0J1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubXVzaWNNdXRlZCkge1xuICAgICAgICAgICAgICAgIG11c2ljQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9tdXNpY09mZi5wbmcnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG11c2ljQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9tdXNpY09uLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShtdXNpY0J1dHRvbiwgNzMwLCAzMCwgNDAsIDMwKTtcblxuXG4gICAgICAgICAgICAvLyBzaG93L2hpZGUgY29udHJvbHNcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJ1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTJweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiY29udHJvbHNcIiwgMjAsIDMwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjcpJ1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnV0FTRCAtIE1vdmUnLCAyOTAsIDIxMClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnU3BhY2UgLSBKdW1wJywgMjcwLCAyNTApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0VzYyAtIFBhdXNlJywgMzEwLCAyOTApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHN0YXRzXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYEJlc3QgVGltZTogJHt0aGlzLmJlc3RUaW1lfWAsIDI0MCwgMTYwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYERlYXRoIENvdW50OiAke3RoaXMuZGVhdGhDb3VudH1gLCAyNjAsIDIwMClcbiAgICAgICAgfSwxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG59XG5cbiIsImNvbnN0IEJVRkZFUl9YID0gMTc7XG5jb25zdCBCVUZGRVJfWSA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1goeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeFBvcyArIEJVRkZFUl9YID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeVBvcyArIEJVRkZFUl9ZIC0gNiA+IHRoaXMueSAmJiB5UG9zIC0gQlVGRkVSX1kgKyA2IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1koeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeVBvcyArIEJVRkZFUl9ZID4gdGhpcy55ICYmIHlQb3MgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiB4UG9zICsgQlVGRkVSX1ggLSA2ID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCArIDYgPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZUltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgdXJsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFRleHQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBtZXNzYWdlLCB4LCB5KSB7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLm1haW5DdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy10ZXh0XCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gJ3JnYmEoMCwwLDAsMC42KSdcblxuICAgICAgICBsZXQgd29yZHMgPSB0aGlzLm1lc3NhZ2Uuc3BsaXQoXCIgXCIpXG4gICAgICAgIGxldCBsZW4gPSB3b3Jkcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IHNlZ21lbnQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY291bnQgKz0gd29yZHNbaV0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDMwKSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudC5wdXNoKHdvcmRzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudClcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0LzIgLSB0aGlzLnNlZ21lbnRzLmxlbmd0aCAqIDg7XG4gICAgfVxuXG4gICAgZmFkZUluKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbkxvb3ApXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgZmFkZUluTG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSBjb3VudCAvIDEwMDtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSBjb3VudCAqIDAuNiAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gYHJnYmEoMjU1LDI1NSwyNTUsJHt0ZXh0T3BhY2l0eX0pYDtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IGByZ2JhKDAsMCwwLCR7YmdPcGFjaXR5fSlgXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICBmYWRlT3V0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVPdXRMb29wKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9LCAxMDAwKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgZmFkZU91dExvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgbGV0IHRleHRPcGFjaXR5ID0gMSAtIChjb3VudCAvIDEwMCk7XG4gICAgICAgICAgICBsZXQgYmdPcGFjaXR5ID0gMC42IC0gKGNvdW50ICogMC42IC8gMTAwKTtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gYHJnYmEoMjU1LDI1NSwyNTUsJHt0ZXh0T3BhY2l0eX0pYDtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IGByZ2JhKDAsMCwwLCR7YmdPcGFjaXR5fSlgXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLmZhZGVJbigpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gZGFya2VuIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDAsMC42KVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMudGV4dENvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VnbWVudHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMuc2VnbWVudHNbaV0uam9pbihcIiBcIilcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAoNDgwIC0gbGluZS5sZW5ndGggKiAxNikvMjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGxpbmUsIHRoaXMueCArIG9mZnNldCwgdGhpcy55ICsgKGkgKiAzMCksIDQ4MCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbn0iLCJcbi8vb3V0ZXIgYXJyYXkgaXMgd29ybGRzLCBpbm5lciBhcnJheSBpcyBsZXZlbERhdGEgb2JqZWN0c1xuZXhwb3J0IGNvbnN0IExldmVsRGF0YSA9IFtcbiAgICAvLyB3b3JsZCAxXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiVGhpcyBpcyB0aGUgc3Rvcnkgb2Ygc3BhY2VtYW4sIGEgcmVzaWRlbnQgb2YgdGhlIGNsb3VkIHdvcmxkIHdobyBoYXMgYSBwYXNzaW9uIGZvciBhZHZlbnR1cmUuXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMyMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1NF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgM1xuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6MzgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjgwLFxuICAgICAgICAgICAgICAgICAgICB5OjM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OjI2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgeToxNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs3MjAsNDAwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOls1MCwzNjBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTUwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzc1MCw0NTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDVcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwyMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MDAsMTgwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiTm93IHRoYXQgc3BhY2VtYW4gaGFzIHNlZW4gYWxsIHRoYXQgaGlzIHdvcmxkIGhhcyB0byBvZmZlciwgaGUgYmVnaW5zIGhpcyBqb3VybmV5IHRocm91Z2ggb3RoZXJ3b3JsZHNcIlxuICAgICAgICB9XG5cbiAgICBdLFxuICAgIC8vIHdvcmxkIDJcbiAgICBbXG4gICAgICAgIC8vIHdvcmxkIDIgbGV2ZWwgMVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMyNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMjAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIlNwYWNlbWFuIGZpbmRzIGhpbXNlbGYgaW4gYW4gYXJpZCBtb3VudGFpbiB3b3JsZCB3aXRoIHN0b25lIHBsYXRmb3Jtcy4gU29tZSBvZiB0aGUgcGxhdGZvcm1zIHNlZW0gcXVpdGUgb2xkLi4uXCJcbiAgICAgICAgfSxcbiAgICBdXG5dIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFrUGxhdGZvcm0gZXh0ZW5kcyBJbnRlcmFjdGFibGV7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGR1cmF0aW9uLCBpbWdVcmwsIGdyYXZpdHkpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuZmFsbFNwZWVkID0gMDsgLy8gcGl4ZWxzIHBlciBzZWNvbmRcbiAgICB9XG5cbiAgICBmYWxsKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHBsYXRmb3JtRmFsbCk7XG4gICAgICAgIH0sICh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnkpICogMTAgKyB0aGlzLmR1cmF0aW9uKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUZhbGwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiB0aGlzLmR1cmF0aW9uIC8gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGxTcGVlZCArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuZmFsbFNwZWVkIC8gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy5pbWdVcmw7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=