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

/***/ "./src/assets/me.png":
/*!***************************!*\
  !*** ./src/assets/me.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/me.png");

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

/***/ "./src/assets/otherworlds_title.png":
/*!******************************************!*\
  !*** ./src/assets/otherworlds_title.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/otherworlds_title.png");

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

/***/ "./src/assets/sheetmetalbg.png":
/*!*************************************!*\
  !*** ./src/assets/sheetmetalbg.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/sheetmetalbg.png");

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
/* harmony import */ var _assets_otherworlds_title_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/otherworlds_title.png */ "./src/assets/otherworlds_title.png");
/* harmony import */ var _assets_me_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/me.png */ "./src/assets/me.png");
/* harmony import */ var _assets_sheetmetalbg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sheetmetalbg.png */ "./src/assets/sheetmetalbg.png");
/* harmony import */ var _assets_runRightFrame1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/runRightFrame1.png */ "./src/assets/runRightFrame1.png");
/* harmony import */ var _assets_runRightFrame2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/runRightFrame2.png */ "./src/assets/runRightFrame2.png");
/* harmony import */ var _assets_runRightFrame3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/runRightFrame3.png */ "./src/assets/runRightFrame3.png");
/* harmony import */ var _assets_runLeftFrame1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/runLeftFrame1.png */ "./src/assets/runLeftFrame1.png");
/* harmony import */ var _assets_runLeftFrame2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/runLeftFrame2.png */ "./src/assets/runLeftFrame2.png");
/* harmony import */ var _assets_runLeftFrame3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/runLeftFrame3.png */ "./src/assets/runLeftFrame3.png");
/* harmony import */ var _assets_PortalFrame1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/PortalFrame1.png */ "./src/assets/PortalFrame1.png");
/* harmony import */ var _assets_PortalFrame2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/PortalFrame2.png */ "./src/assets/PortalFrame2.png");
/* harmony import */ var _assets_PortalFrame3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/PortalFrame3.png */ "./src/assets/PortalFrame3.png");
/* harmony import */ var _assets_PortalFrame4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/PortalFrame4.png */ "./src/assets/PortalFrame4.png");
/* harmony import */ var _assets_PortalFrame5_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/PortalFrame5.png */ "./src/assets/PortalFrame5.png");
/* harmony import */ var _assets_PortalFrame6_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/PortalFrame6.png */ "./src/assets/PortalFrame6.png");
/* harmony import */ var _assets_PortalFrame7_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/PortalFrame7.png */ "./src/assets/PortalFrame7.png");
/* harmony import */ var _assets_PortalFrame8_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/PortalFrame8.png */ "./src/assets/PortalFrame8.png");
/* harmony import */ var _assets_World1Door_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/World1Door.png */ "./src/assets/World1Door.png");
/* harmony import */ var _assets_World2Door_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/World2Door.png */ "./src/assets/World2Door.png");
/* harmony import */ var _assets_largePlatform_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/largePlatform.png */ "./src/assets/largePlatform.png");
/* harmony import */ var _assets_mediumPlatform_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/mediumPlatform.png */ "./src/assets/mediumPlatform.png");
/* harmony import */ var _assets_smallPlatform_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/smallPlatform.png */ "./src/assets/smallPlatform.png");
/* harmony import */ var _assets_tinyPlatform_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/tinyPlatform.png */ "./src/assets/tinyPlatform.png");
/* harmony import */ var _assets_world2LargePlatform_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/world2LargePlatform.png */ "./src/assets/world2LargePlatform.png");
/* harmony import */ var _assets_world2MediumPlatform_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/world2MediumPlatform.png */ "./src/assets/world2MediumPlatform.png");
/* harmony import */ var _assets_world2SmallPlatform_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/world2SmallPlatform.png */ "./src/assets/world2SmallPlatform.png");
/* harmony import */ var _assets_world2TinyPlatform_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/world2TinyPlatform.png */ "./src/assets/world2TinyPlatform.png");
/* harmony import */ var _assets_world2LargeWeakPlatform_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/world2LargeWeakPlatform.png */ "./src/assets/world2LargeWeakPlatform.png");
/* harmony import */ var _assets_world2MediumWeakPlatform_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/world2MediumWeakPlatform.png */ "./src/assets/world2MediumWeakPlatform.png");
/* harmony import */ var _assets_world2SmallWeakPlatform_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/world2SmallWeakPlatform.png */ "./src/assets/world2SmallWeakPlatform.png");
/* harmony import */ var _assets_world2TinyWeakPlatform_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/world2TinyWeakPlatform.png */ "./src/assets/world2TinyWeakPlatform.png");
/* harmony import */ var _assets_idleFrame_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/idleFrame.png */ "./src/assets/idleFrame.png");
/* harmony import */ var _assets_idleFrame2_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/idleFrame2.png */ "./src/assets/idleFrame2.png");
/* harmony import */ var _assets_mainpage_bg_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/mainpage_bg.png */ "./src/assets/mainpage_bg.png");
/* harmony import */ var _assets_tabIcon_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/tabIcon.png */ "./src/assets/tabIcon.png");
/* harmony import */ var _assets_world2BG_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/world2BG.png */ "./src/assets/world2BG.png");
/* harmony import */ var _assets_musicOn_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/musicOn.png */ "./src/assets/musicOn.png");
/* harmony import */ var _assets_musicOff_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/musicOff.png */ "./src/assets/musicOff.png");
/* harmony import */ var _assets_soundOn_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/soundOn.png */ "./src/assets/soundOn.png");
/* harmony import */ var _assets_soundOff_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../assets/soundOff.png */ "./src/assets/soundOff.png");
/* harmony import */ var _assets_world1Music_mp3__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../assets/world1Music.mp3 */ "./src/assets/world1Music.mp3");
/* harmony import */ var _assets_jumpSound_mp3__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../assets/jumpSound.mp3 */ "./src/assets/jumpSound.mp3");
/* harmony import */ var _assets_footstep_mp3__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../assets/footstep.mp3 */ "./src/assets/footstep.mp3");
/* harmony import */ var _assets_menuBlip_mp3__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../assets/menuBlip.mp3 */ "./src/assets/menuBlip.mp3");
/* harmony import */ var _assets_pauseMenu_mp3__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../assets/pauseMenu.mp3 */ "./src/assets/pauseMenu.mp3");
/* harmony import */ var _assets_pause_mp3__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../assets/pause.mp3 */ "./src/assets/pause.mp3");
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
    this.active = false;
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
      } else if (event.key == ' ') {
        if (event.target == document.body) {
          event.preventDefault();
        }

        if (_this.Player.grounded && !_this.Player.isJumping) {
          if (!_this.getSoundMuted()) _this.jumpSound.play();
          _this.Player.velocity[1] -= 5;
          _this.Player.isJumping = true;
          _this.Player.grounded = false;
          setTimeout(function () {
            _this.Player.isJumping = false;
          }, 60);
        }
      } else if (event.key == "Escape" && _this.active) {
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
        if (event.target == document.body) {
          event.preventDefault();
        }

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
    key: "setInactive",
    value: function setInactive() {
      this.active = false;
    }
  }, {
    key: "setData",
    value: function setData(worldNum, levelNum, game) {
      var _this2 = this;

      this.worldNum = worldNum;
      this.levelNum = levelNum;
      this.game = game;
      this.active = true;
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
    key: "clearLevelText",
    value: function clearLevelText() {
      if (this.levelText != "") {
        this.levelText.stopText();
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver(gameLoop) {
      this.clearLevelText();
      this.interactables = [];
      clearInterval(gameLoop);
      this.incrementDeathCount();
      this.active = false;
      this.menu.setMenuData("failed", this.worldNum, this.levelNum);
      this.menu.open();
    }
  }, {
    key: "levelComplete",
    value: function levelComplete(gameLoop) {
      this.clearLevelText(); // set new levelsCompleted localStorage variable

      this.active = false;
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
                if (_this2.worldNum == 2) {
                  //CHANGE THIS WHEN MAKE MORE WORLDS
                  _this2.renderHome(true);
                } else {
                  _this2.setGameData(_this2.worldNum + 1, 1, _this2.game);
                }
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

      this.game.setInactive();
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
    var _this = this;

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
    this.textTimeout = null;
    this.fadeInLoop = null;
    this.fadeOutLoop = null;
    this.fadeTimeout = null;
    this.active = false;
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
    window.addEventListener("keydown", function (e) {
      if (e.key == "Escape" && _this.active) {
        e.preventDefault();

        _this.stopText();
      }
    });
  }

  _createClass(LevelText, [{
    key: "stopText",
    value: function stopText() {
      this.active = false;
      clearTimeout(this.textTimeout);
      clearTimeout(this.fadeTimeout);
      clearInterval(this.fadeInLoop);
      clearInterval(this.fadeOutLoop);
      this.close();
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      var _this2 = this;

      this.textTimeout = setTimeout(function () {
        clearInterval(_this2.fadeInLoop);

        _this2.render();

        _this2.fadeTimeout = setTimeout(function () {
          _this2.fadeOut();
        }, 3000);
      }, 1000);
      var count = 0;
      this.fadeInLoop = setInterval(function () {
        count++;
        var textOpacity = count / 100;
        var bgOpacity = count * 0.6 / 100;
        _this2.textColor = "rgba(255,255,255,".concat(textOpacity, ")");
        _this2.bgColor = "rgba(0,0,0,".concat(bgOpacity, ")");

        _this2.render();
      }, 10);
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this3 = this;

      this.textTimeout = setTimeout(function () {
        clearInterval(_this3.fadeOutLoop);

        _this3.close();

        _this3.active = false;
      }, 1000);
      var count = 0;
      this.fadeOutLoop = setInterval(function () {
        count++;
        var textOpacity = 1 - count / 100;
        var bgOpacity = 0.6 - count * 0.6 / 100;
        _this3.textColor = "rgba(255,255,255,".concat(textOpacity, ")");
        _this3.bgColor = "rgba(0,0,0,".concat(bgOpacity, ")");

        _this3.render();
      }, 10);
    }
  }, {
    key: "open",
    value: function open() {
      this.active = true;
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
    duration: 2000
  }, {
    x: 300,
    y: 350,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 2000
  }, {
    x: 400,
    y: 300,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 2000
  }, {
    x: 500,
    y: 250,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 2000
  }, {
    x: 600,
    y: 200,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 2000
  }, {
    x: 700,
    y: 150,
    height: 20,
    width: 50,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 20,
    weak: true,
    duration: 2000
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
  playerStartPos: [200, 300],
  interactables: [{
    x: 100,
    y: 470,
    height: 30,
    width: 700,
    imgUrl: 'dist/images/world2LargePlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 370,
    height: 30,
    width: 700,
    imgUrl: 'dist/images/world2LargePlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 340,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 310,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 280,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 250,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 220,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 190,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 160,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 130,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 100,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 70,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 100,
    y: 40,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 435,
    y: 40,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 435,
    y: 70,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 400,
    y: 280,
    height: 30,
    width: 100,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 30,
    weak: true,
    duration: 2000
  }, {
    x: 290,
    y: 280,
    height: 30,
    width: 100,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 190,
    y: 280,
    height: 30,
    width: 100,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 510,
    y: 280,
    height: 30,
    width: 400,
    imgUrl: 'dist/images/world2MediumPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 435,
    y: 250,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 435,
    y: 220,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 400,
    y: 190,
    height: 30,
    width: 100,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 30,
    weak: true,
    duration: 2000
  }, {
    x: 290,
    y: 190,
    height: 30,
    width: 100,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 510,
    y: 190,
    height: 30,
    width: 200,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 435,
    y: 160,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 435,
    y: 130,
    height: 30,
    width: 30,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 400,
    y: 100,
    height: 30,
    width: 100,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 30,
    weak: true,
    duration: 2000
  }, {
    x: 290,
    y: 100,
    height: 30,
    width: 100,
    imgUrl: 'dist/images/world2TinyPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 510,
    y: 100,
    height: 30,
    width: 400,
    imgUrl: 'dist/images/world2MediumPlatform.png',
    yOffset: 0,
    imgHeight: 30
  }, {
    x: 130,
    y: 180,
    height: 30,
    width: 60,
    imgUrl: 'dist/images/world2TinyWeakPlatform.png',
    yOffset: 0,
    imgHeight: 30,
    weak: true,
    duration: 2000
  }, {
    x: 100,
    y: 10,
    height: 30,
    width: 500,
    imgUrl: 'dist/images/world2LargePlatform.png',
    yOffset: 0,
    imgHeight: 30
  }],
  finishPos: [700, 420],
  gravity: -0.1
}, // world 2 level 3
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
  gravity: -0.1,
  levelText: 'As you delve deeper into the ruins, the platforms are older and weaker'
}, {
  playerStartPos: [100, 200],
  interactables: [{
    x: 80,
    y: 280,
    height: 30,
    width: 640,
    imgUrl: 'dist/images/world2LargePlatform.png',
    yOffset: 0,
    imgHeight: 30
  }],
  finishPos: [500, 180],
  gravity: -0.1
}, {
  playerStartPos: [100, 200],
  interactables: [{
    x: 80,
    y: 280,
    height: 30,
    width: 640,
    imgUrl: 'dist/images/world2LargePlatform.png',
    yOffset: 0,
    imgHeight: 30
  }],
  finishPos: [500, 180],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL290aGVyd29ybGRzX3RpdGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlTWVudS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGVldG1ldGFsYmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RhYkljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGlueVBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMU11c2ljLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMkJHLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMkxhcmdlUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTGFyZ2VXZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTWVkaXVtV2Vha1BsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyU21hbGxXZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyVGlueVBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hc3NldEltcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbnRlcmFjdGFibGVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGV2ZWxkYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dlYWtQbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lRnJhbWUiLCJIb21lUGFnZSIsInJlbmRlciIsIkV4aXQiLCJ4IiwieSIsImxldmVsTnVtIiwid29ybGROdW0iLCJleGl0SW1hZ2UiLCJJbWFnZSIsImZyYW1lTnVtIiwieFBvcyIsInlQb3MiLCJwb3J0YWxGcmFtZSIsImN1cnJlbnRJbWFnZU51bSIsIk1hdGgiLCJmbG9vciIsInNyYyIsImRyYXdJbWFnZSIsIkludGVyYWN0YWJsZSIsIkdhbWUiLCJnYW1lIiwicmVuZGVySG9tZSIsImdhbWVNdXNpYyIsIm11c2ljTXV0ZWQiLCJ0b2dnbGVTb3VuZE11dGVkIiwiZ2V0U291bmRNdXRlZCIsInRvZ2dsZU11c2ljTXV0ZWQiLCJzaG93Q29udHJvbHMiLCJsZXZlbFRpbWUiLCJwYXVzZWQiLCJtZW51IiwiR2FtZU1lbnUiLCJzZXREYXRhIiwiYmluZCIsInRvZ2dsZVBhdXNlIiwiYWN0aXZlIiwiY2xlYXJSZWN0IiwibGV2ZWxEYXRhIiwiTGV2ZWxEYXRhIiwiVkVMT0NJVFlfWCIsIkdSQVZJVFkiLCJncmF2aXR5IiwiUGxheWVyIiwidmVsb2NpdHkiLCJpc0p1bXBpbmciLCJjYW5KdW1wIiwicGxheWVyU3RhcnRQb3MiLCJmYWNlUmlnaHQiLCJtb3ZpbmciLCJjb2xsaWRpbmdYIiwiY29sbGlkaW5nWSIsImdyb3VuZGVkIiwiY29sbGlzaW9uc3VyZmFjZVkiLCJwYXVzZVNvdW5kIiwiQXVkaW8iLCJ2b2x1bWUiLCJqdW1wU291bmQiLCJmb290c3RlcCIsIndvcmxkQkdzIiwicGxheWVyU3ByaXRlIiwicG9ydGFsU3ByaXRlIiwiZXhpdCIsImZpbmlzaFBvcyIsImludGVyYWN0YWJsZXMiLCJpbWFnZXMiLCJmb3JFYWNoIiwiaW50ZXJhY3RhYmxlIiwicHVzaCIsImltZ1VybCIsImxlbmd0aCIsIkludGVyYWN0YWJsZUltYWdlIiwieU9mZnNldCIsImltZ0hlaWdodCIsImxldmVsVGV4dCIsIkxldmVsVGV4dCIsIndpbmRvdyIsImV2ZW50Iiwia2V5IiwidGFyZ2V0IiwiYm9keSIsInByZXZlbnREZWZhdWx0IiwicGxheSIsInNldFRpbWVvdXQiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwibW92ZUxpc3RlbmVyIiwiY2FudmFzUG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibW91c2VYIiwibGVmdCIsIm1vdXNlWSIsInRvcCIsIm5ld0dhbWUiLCJ3ZWFrIiwiV2Vha1BsYXRmb3JtIiwiZHVyYXRpb24iLCJpbWciLCJkZWF0aENvdW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJwYXJzZUludCIsImN1cnJlbnQiLCJzdG9wVGV4dCIsImdhbWVMb29wIiwiY2xlYXJMZXZlbFRleHQiLCJjbGVhckludGVydmFsIiwiaW5jcmVtZW50RGVhdGhDb3VudCIsInNldE1lbnVEYXRhIiwib3BlbiIsImxldmVsNUFuaW1hdGlvbiIsIm5ld0Jlc3QiLCJjaGVja0Jlc3RUaW1lIiwic2tpcCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic2V0SW50ZXJ2YWwiLCJwYXVzZUdhbWUiLCJmaWxsU3R5bGUiLCJnYW1lT3ZlciIsImltYWdlIiwiZHJhd1BsYXllciIsImN1cnJGcmFtZSIsImlzQ29sbGlkaW5nWCIsImlzQ29sbGlkaW5nWSIsImZhbGwiLCJpc0ZhbGxpbmciLCJsZXZlbENvbXBsZXRlIiwiZm9udCIsImZpbGxUZXh0IiwidG9TdHJpbmciLCJmaWxsUmVjdCIsImZpbmlzaFdvcmxkIiwiY291bnQiLCJleGl0WCIsImV4aXRZIiwiZXhpdFciLCJleGl0SCIsIm1haW5DYW52YXMiLCJtYWluQ3R4IiwidHlwZSIsInVucGF1c2UiLCJyZW5kZXJHYW1lIiwic2V0R2FtZURhdGEiLCJ0aW1lIiwic291bmRPZmYiLCJzb3VuZE9uIiwibWVudUJsaXAiLCJzZWxlY3RlZCIsInN1Ym1pdHRlZCIsIm1heE51bSIsImNsb3NlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsIiwiY3VycmVudFdvcmxkIiwic291bmRNdXRlZCIsIm51bVdvcmxkcyIsImJlc3RUaW1lIiwibGV2ZWxGaWxscyIsIm11c2ljIiwidG9nZ2xlTXV0ZVNvdW5kIiwidG9nZ2xlTXV0ZU11c2ljIiwiaG9tZSIsImxldmVsc0NvbXBsZXRlZCIsImkiLCJpbmNyZW1lbnQiLCJjbGlja0xpc3RlbmVyIiwic2V0SW5hY3RpdmUiLCJnZXRMZXZlbHNDb21wbGV0ZWQiLCJmaWxsQ29sb3IiLCJzb3VuZEJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiQlVGRkVSX1giLCJCVUZGRVJfWSIsInVybCIsIm1lc3NhZ2UiLCJ0ZXh0Q29sb3IiLCJiZ0NvbG9yIiwidGV4dFRpbWVvdXQiLCJmYWRlSW5Mb29wIiwiZmFkZU91dExvb3AiLCJmYWRlVGltZW91dCIsIndvcmRzIiwic3BsaXQiLCJsZW4iLCJzZWdtZW50cyIsInNlZ21lbnQiLCJlIiwiY2xlYXJUaW1lb3V0IiwiZmFkZU91dCIsInRleHRPcGFjaXR5IiwiYmdPcGFjaXR5IiwiZmFkZUluIiwibGluZSIsImpvaW4iLCJvZmZzZXQiLCJmYWxsU3BlZWQiLCJwbGF0Zm9ybUZhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7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QUtDLENBQTFDLEVBQTZDLEtBQUtQLEtBQWxELEVBQXlELEtBQUtDLE1BQTlEO0FBQ0g7Ozs7RUEvQnFDb0IscUQ7Ozs7Ozs7Ozs7Ozs7O0FDSDFDO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Xb3JsZDFEb29yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1dvcmxkMkRvb3IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vZm9vdHN0ZXAubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaWRsZUZyYW1lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vanVtcFNvdW5kLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbWFpbnBhZ2VfYmcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vbWVudUJsaXAubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbXVzaWNPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbXVzaWNPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9vdGhlcndvcmxkc190aXRsZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9wYXVzZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9wYXVzZU1lbnUubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2hlZXRtZXRhbGJnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc291bmRPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90YWJJY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby93b3JsZDFNdXNpYy5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJCRy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMkxhcmdlV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMk1lZGl1bVdlYWtQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlNtYWxsV2Vha1BsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZ1wiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3NjcmlwdHMvaG9tZXBhZ2UnXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWFpblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIGxldCBnYW1lRnJhbWUgPSAwO1xuXG5cbiAgICBuZXcgSG9tZVBhZ2UoY2FudmFzLCBjdHgpLnJlbmRlcigpO1xuXG4gICAgXG5cblxufSk7XG4iLCIvL2ltYWdlcyBcbmltcG9ydCBvdGhlcndvcmxkc1RpdGxlIGZyb20gJy4uL2Fzc2V0cy9vdGhlcndvcmxkc190aXRsZS5wbmcnXG5pbXBvcnQgbWUgZnJvbSAnLi4vYXNzZXRzL21lLnBuZydcbmltcG9ydCBzbWJnIGZyb20gJy4uL2Fzc2V0cy9zaGVldG1ldGFsYmcucG5nJ1xuXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUxLnBuZydcbmltcG9ydCBydW5SaWdodEltYWdlMiBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTIucG5nJ1xuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UzIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMSBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMS5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMiBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMi5wbmcnXG5pbXBvcnQgcnVuTGVmdEltYWdlMyBmcm9tICcuLi9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmcnXG5cbmltcG9ydCBQb3J0YWxGcmFtZTEgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMS5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWUyIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTIucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lMyBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUzLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTQgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNC5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU1IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTUucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNiBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU2LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTcgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNy5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU4IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTgucG5nJ1xuXG5pbXBvcnQgV29ybGQxRG9vciBmcm9tICcuLi9hc3NldHMvV29ybGQxRG9vci5wbmcnXG5pbXBvcnQgV29ybGQyRG9vciBmcm9tICcuLi9hc3NldHMvV29ybGQyRG9vci5wbmcnXG5cblxuaW1wb3J0IGxhcmdlUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL2xhcmdlUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IG1lZGl1bVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmcnXG5pbXBvcnQgc21hbGxQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgdGlueVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nJ1xuXG5pbXBvcnQgd29ybGQyTGFyZ2VQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyTWVkaXVtUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMk1lZGl1bVBsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJTbWFsbFBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJUaW55UGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnXG5cbmltcG9ydCB3b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyTGFyZ2VXZWFrUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMk1lZGl1bVdlYWtQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyTWVkaXVtV2Vha1BsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyU21hbGxXZWFrUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMlRpbnlXZWFrUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJ1xuXG5pbXBvcnQgaWRsZUZyYW1lIGZyb20gJy4uL2Fzc2V0cy9pZGxlRnJhbWUucG5nJ1xuaW1wb3J0IGlkbGVGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZTIucG5nJ1xuXG5pbXBvcnQgQkcgZnJvbSAnLi4vYXNzZXRzL21haW5wYWdlX2JnLnBuZydcbmltcG9ydCB0YWJJY29uIGZyb20gJy4uL2Fzc2V0cy90YWJJY29uLnBuZydcbmltcG9ydCB3b3JsZDJCRyBmcm9tICcuLi9hc3NldHMvd29ybGQyQkcucG5nJ1xuaW1wb3J0IG11c2ljT24gZnJvbSAnLi4vYXNzZXRzL211c2ljT24ucG5nJ1xuaW1wb3J0IG11c2ljT2ZmIGZyb20gJy4uL2Fzc2V0cy9tdXNpY09mZi5wbmcnXG5pbXBvcnQgc291bmRPbiBmcm9tICcuLi9hc3NldHMvc291bmRPbi5wbmcnXG5pbXBvcnQgc291bmRPZmYgZnJvbSAnLi4vYXNzZXRzL3NvdW5kT2ZmLnBuZydcblxuXG4vL2F1ZGlvXG5pbXBvcnQgV29ybGQxTXVzaWMgZnJvbSAnLi4vYXNzZXRzL3dvcmxkMU11c2ljLm1wMydcbmltcG9ydCBqdW1wU291bmQgZnJvbSAnLi4vYXNzZXRzL2p1bXBTb3VuZC5tcDMnXG5pbXBvcnQgZm9vdHN0ZXAgZnJvbSAnLi4vYXNzZXRzL2Zvb3RzdGVwLm1wMydcbmltcG9ydCBtZW51QmxpcCBmcm9tICcuLi9hc3NldHMvbWVudUJsaXAubXAzJ1xuaW1wb3J0IHBhdXNlTWVudSBmcm9tICcuLi9hc3NldHMvcGF1c2VNZW51Lm1wMydcbmltcG9ydCBwYXVzZSBmcm9tICcuLi9hc3NldHMvcGF1c2UubXAzJyIsImltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSBcIi4vaW50ZXJhY3RhYmxlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhpdCBleHRlbmRzIEludGVyYWN0YWJsZXtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgbGV2ZWxOdW0sIHdvcmxkTnVtKSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG5cblxuICAgICAgICB0aGlzLmV4aXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcihmcmFtZU51bSwgeFBvcyA9IHRoaXMueCwgeVBvcyA9IHRoaXMueSwgd2lkdGggPSA2MCwgaGVpZ2h0ID0gODApIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxOdW0gPT0gNSkge1xuICAgICAgICAgICAgbGV0IHBvcnRhbEZyYW1lID0gZnJhbWVOdW0gJSAxMjA7XG4gICAgICAgICAgICBsZXQgY3VycmVudEltYWdlTnVtID0gTWF0aC5mbG9vcihwb3J0YWxGcmFtZS8xNSkgKyAxO1xuICAgICAgICAgICAgdGhpcy5leGl0SW1hZ2Uuc3JjID0gYGRpc3QvaW1hZ2VzL1BvcnRhbEZyYW1lJHtjdXJyZW50SW1hZ2VOdW19LnBuZ2BcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZXhpdEltYWdlLCB4UG9zLCB5UG9zLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leGl0SW1hZ2Uuc3JjID0gYGRpc3QvaW1hZ2VzL1dvcmxkJHt0aGlzLndvcmxkTnVtfURvb3IucG5nYFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZXhpdEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSAnLi9pbnRlcmFjdGFibGUnXG5pbXBvcnQgR2FtZU1lbnUgZnJvbSAnLi9nYW1lbWVudSdcbmltcG9ydCBFeGl0IGZyb20gJy4vZXhpdCdcblxuaW1wb3J0IHsgTGV2ZWxEYXRhIH0gZnJvbSAnLi9sZXZlbGRhdGEnXG5pbXBvcnQgSW50ZXJhY3RhYmxlSW1hZ2UgZnJvbSAnLi9pbnRlcmFjdGFibGVJbWFnZSdcbmltcG9ydCBMZXZlbFRleHQgZnJvbSAnLi9sZXZlbFRleHQnXG5pbXBvcnQgV2Vha1BsYXRmb3JtIGZyb20gJy4vd2Vha1BsYXRmb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgd29ybGROdW0sIGxldmVsTnVtLCBnYW1lLCByZW5kZXJIb21lLCBnYW1lTXVzaWMsIG11c2ljTXV0ZWQsIHRvZ2dsZVNvdW5kTXV0ZWQsIGdldFNvdW5kTXV0ZWQsIHRvZ2dsZU11c2ljTXV0ZWQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5yZW5kZXJIb21lID0gcmVuZGVySG9tZTtcbiAgICAgICAgdGhpcy5nYW1lTXVzaWMgPSBnYW1lTXVzaWM7XG4gICAgICAgIHRoaXMubXVzaWNNdXRlZCA9IG11c2ljTXV0ZWQ7XG4gICAgICAgIHRoaXMudG9nZ2xlU291bmRNdXRlZCA9IHRvZ2dsZVNvdW5kTXV0ZWQ7XG4gICAgICAgIHRoaXMuZ2V0U291bmRNdXRlZCA9IGdldFNvdW5kTXV0ZWQ7XG4gICAgICAgIHRoaXMudG9nZ2xlTXVzaWNNdXRlZCA9IHRvZ2dsZU11c2ljTXV0ZWQ7XG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVOdW0gPSAwO1xuICAgICAgICB0aGlzLmxldmVsVGltZSA9IDYwMDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBHYW1lTWVudSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIFwiZmFpbGVkXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lLCB0aGlzLnNldERhdGEuYmluZCh0aGlzKSwgdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLCB0aGlzLnJlbmRlckhvbWUsIHRoaXMuZ2FtZU11c2ljLCB0aGlzLm11c2ljTXV0ZWQsIHRoaXMudG9nZ2xlU291bmRNdXRlZCwgdGhpcy5nZXRTb3VuZE11dGVkLCB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gZ2V0IHNlZWQgZGF0YSBmb3IgY3VycmVudCBsZXZlbFxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IExldmVsRGF0YVt0aGlzLndvcmxkTnVtIC0gMV1bdGhpcy5sZXZlbE51bSAtIDFdXG5cbiAgICAgICAgdGhpcy5WRUxPQ0lUWV9YID0gMztcbiAgICAgICAgdGhpcy5HUkFWSVRZID0gdGhpcy5sZXZlbERhdGEuZ3Jhdml0eTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuUGxheWVyID0ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IFswLDBdLFxuICAgICAgICAgICAgaXNKdW1waW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkp1bXA6IGZhbHNlLFxuICAgICAgICAgICAgeDogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMF0sXG4gICAgICAgICAgICB5OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1sxXSxcbiAgICAgICAgICAgIHdpZHRoOiAzNCxcbiAgICAgICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgICAgICBmcmFtZU51bTogMCxcbiAgICAgICAgICAgIGZhY2VSaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIG1vdmluZzogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdYOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1k6IGZhbHNlLFxuICAgICAgICAgICAgZ3JvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlzaW9uc3VyZmFjZVk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGF1c2VTb3VuZCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9wYXVzZS5tcDMnKVxuICAgICAgICB0aGlzLnBhdXNlU291bmQudm9sdW1lID0gMC4yO1xuXG4gICAgICAgIC8vIHBsYXllciBtb3ZlbWVudCBzb3VuZHNcbiAgICAgICAgdGhpcy5qdW1wU291bmQgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vanVtcFNvdW5kLm1wMycpXG4gICAgICAgIHRoaXMuanVtcFNvdW5kLnZvbHVtZSA9IDAuNjtcbiAgICAgICAgdGhpcy5mb290c3RlcCA9IG5ldyBBdWRpbygnZGlzdC9hdWRpby9mb290c3RlcC5tcDMnKVxuICAgICAgICB0aGlzLmZvb3RzdGVwLnZvbHVtZSA9IDAuNjtcblxuICAgICAgICB0aGlzLndvcmxkQkdzID0gW1xuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL21haW5wYWdlX2JnLnBuZycsXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvd29ybGQyQkcucG5nJyxcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG4gICAgICAgIHRoaXMucG9ydGFsU3ByaXRlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDcwLDcwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaW1nVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVJbWFnZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS5pbWdVcmwsaW50ZXJhY3RhYmxlLngsaW50ZXJhY3RhYmxlLnkgLSBpbnRlcmFjdGFibGUueU9mZnNldCxpbnRlcmFjdGFibGUud2lkdGgsaW50ZXJhY3RhYmxlLmltZ0hlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBuZXcgTGV2ZWxUZXh0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0LCAxNjAsMjAwKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJyB8fCBldmVudC5rZXkgPT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0gPSB0aGlzLlZFTE9DSVRZX1g7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5mYWNlUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2EnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gLXRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5ncm91bmRlZCAmJiAhdGhpcy5QbGF5ZXIuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5pc0p1bXBpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LCA2MClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIkVzY2FwZVwiICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLnBhdXNlU291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcgfHwgZXZlbnQua2V5ID09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJyB8fCBldmVudC5rZXkgPT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tb3ZlTGlzdGVuZXIgPSBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gMCAmJiBtb3VzZVggPCAxMjUgJiYgbW91c2VZID4gMCAmJiBtb3VzZVkgPCA0NSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdmVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgc2V0R2FtZShuZXdHYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ld0dhbWU7XG4gICAgfVxuXG4gICAgc2V0SW5hY3RpdmUoKXtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXREYXRhKHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSkge1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5mcmFtZU51bSA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWxUaW1lID0gNjAwMDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gZ2V0IHNlZWQgZGF0YSBmb3IgY3VycmVudCBsZXZlbFxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IExldmVsRGF0YVt0aGlzLndvcmxkTnVtIC0gMV1bdGhpcy5sZXZlbE51bSAtIDFdXG5cbiAgICAgICAgdGhpcy5WRUxPQ0lUWV9YID0gMztcbiAgICAgICAgdGhpcy5HUkFWSVRZID0gdGhpcy5sZXZlbERhdGEuZ3Jhdml0eTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuUGxheWVyID0ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IFswLDBdLFxuICAgICAgICAgICAgaXNKdW1waW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkp1bXA6IGZhbHNlLFxuICAgICAgICAgICAgeDogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMF0sXG4gICAgICAgICAgICB5OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1sxXSxcbiAgICAgICAgICAgIHdpZHRoOiAzNCxcbiAgICAgICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgICAgICBmcmFtZU51bTogMCxcbiAgICAgICAgICAgIGZhY2VSaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIG1vdmluZzogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdYOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1k6IGZhbHNlLFxuICAgICAgICAgICAgZ3JvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlzaW9uc3VyZmFjZVk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAwO1xuXG4gICAgICAgIC8vIHNldCBleGl0IGxvY2F0aW9uXG4gICAgICAgIHRoaXMuZXhpdCA9IG5ldyBFeGl0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzBdLHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1sxXSw1MCw1MCwgdGhpcy5sZXZlbE51bSwgdGhpcy53b3JsZE51bSk7XG5cbiAgICAgICAgLy8gc2V0IGludGVyYWN0YWJsZXMgZm9yIHRoaXMgc3RhZ2UgZnJvbSBzZWVkIGRhdGFcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS53ZWFrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IFdlYWtQbGF0Zm9ybSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoLCBpbnRlcmFjdGFibGUuZHVyYXRpb24sIGludGVyYWN0YWJsZS5pbWdVcmwsIHRoaXMuR1JBVklUWSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gobmV3IEludGVyYWN0YWJsZUltYWdlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLmltZ1VybCxpbnRlcmFjdGFibGUueCxpbnRlcmFjdGFibGUueSAtIGludGVyYWN0YWJsZS55T2Zmc2V0LGludGVyYWN0YWJsZS53aWR0aCxpbnRlcmFjdGFibGUuaW1nSGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIHRvZ2dsZVBhdXNlKCl7XG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgaW5jcmVtZW50RGVhdGhDb3VudCgpIHtcbiAgICAgICAgbGV0IGRlYXRoQ291bnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBkZWF0aCBjb3VudGApO1xuICAgICAgICBpZiAoZGVhdGhDb3VudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBkZWF0aCBjb3VudGAsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfSBkZWF0aCBjb3VudGAsIHBhcnNlSW50KGRlYXRoQ291bnQpICsgMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmVzdFRpbWUoKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gYmVzdCB0aW1lYCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gYmVzdCB0aW1lYCwgdGhpcy5sZXZlbFRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZXZlbFRpbWUgPiBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gYmVzdCB0aW1lYCwgdGhpcy5sZXZlbFRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhckxldmVsVGV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxUZXh0ICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0LnN0b3BUZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcihnYW1lTG9vcCkge1xuICAgICAgICB0aGlzLmNsZWFyTGV2ZWxUZXh0KCk7XG5cbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuXG4gICAgICAgIHRoaXMuaW5jcmVtZW50RGVhdGhDb3VudCgpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cblxuICAgIGxldmVsQ29tcGxldGUoZ2FtZUxvb3ApIHtcbiAgICAgICAgdGhpcy5jbGVhckxldmVsVGV4dCgpO1xuICAgICAgICAvLyBzZXQgbmV3IGxldmVsc0NvbXBsZXRlZCBsb2NhbFN0b3JhZ2UgdmFyaWFibGVcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgcGFyc2VJbnQoY3VycmVudCkgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFuaW1hdGlvbiBhdCBlbmQgb2YgbGV2ZWwgNVxuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsNUFuaW1hdGlvbihnYW1lTG9vcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcClcbiAgICAgICAgICAgIGxldCBuZXdCZXN0ID0gdGhpcy5jaGVja0Jlc3RUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJjb21wbGV0ZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIG5ld0Jlc3QsIHRoaXMubGV2ZWxUaW1lKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBhdXNlR2FtZShnYW1lTG9vcCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJwYXVzZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoc2tpcCA9IGZhbHNlKXtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxUZXh0ICE9IFwiXCIgJiYgIXNraXApIHsgICAgXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5vcGVuKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLndvcmxkTnVtIC0gMV19KWBcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIueSA+IDUwMCB8fCB0aGlzLmxldmVsVGltZSA8PSA5OSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoZ2FtZUxvb3ApXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIodGhpcy5mcmFtZU51bSk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VzXG4gICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGRyYXcgcGxheWVyXG4gICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG5cblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBmcmFtZSBpbWFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLm1vdmluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLmZvb3RzdGVwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5QbGF5ZXIuZnJhbWVOdW0gLyAxMClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZU51bSAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgb2JzdGFjbGUgY29sbGlzaW9uXG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5mYWxsICYmICFpbnRlcmFjdGFibGUuaXNGYWxsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUuZmFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1kgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZID0gaW50ZXJhY3RhYmxlLnk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgbGV2ZWwgZmluaXNoIFxuICAgICAgICAgICAgaWYgKHRoaXMuZXhpdC5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsQ29tcGxldGUoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBtb3ZlbWVudCBiYXNlIG9uIHBsYXllciBjb2xsaXNpb25cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdOyAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSA9IHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZIC0gNTk7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IHRoaXMuR1JBVklUWTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgICAgIC8vbGV2ZWwgaW5mbyBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX1gLCAzNjQsIDUwKTtcblxuICAgICAgICAgICAgLy8gdGltZXJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUaW1lLS07XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChNYXRoLmZsb29yKHRoaXMubGV2ZWxUaW1lLzEwMCkudG9TdHJpbmcoKSwgNzAwLCA1MCk7XG4gICAgXG4gICAgICAgICAgICAvLyBjb250cm9scyBob3ZlclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2NvbnRyb2xzJywgMjAsIDMwKVxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbnRyb2xzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC43KSdcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1dBU0QgLSBNb3ZlJywgMjkwLCAxNzApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1NwYWNlIC0gSnVtcCcsIDI3MCwgMjEwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdFc2MgLSBQYXVzZScsIDMxMCwgMjUwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1VzZWZ1bCBUaXA6IEhvbGRpbmcgdGhlIGFycm93IGtleSBpbiB0aGUgZGlyZWN0aW9uIG9mJywgOTAsIDMxMClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnYSB3YWxsIHdoaWxlIGNvbGxpZGluZyB3aXRoIGl0IHdpbGwgc2xvdyB5b3VyIGZhbGwnLCAxMTAsIDMzMClcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHRoaXMuUGxheWVyLmZyYW1lTnVtID0gKHRoaXMuUGxheWVyLmZyYW1lTnVtICsgMSkgJSA0MFxuICAgICAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9ICh0aGlzLnBvcnRhbEZyYW1lICsgMSkgJSA4MDtcblxuICAgICAgICAgICAgdGhpcy5mcmFtZU51bSsrO1xuICAgICAgICB9LCAxMClcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIGFuaW1hdGlvbnNcblxuICAgIGxldmVsNUFuaW1hdGlvbihnYW1lTG9vcCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZpbmlzaFdvcmxkKVxuICAgICAgICAgICAgbGV0IG5ld0Jlc3QgPSB0aGlzLmNoZWNrQmVzdFRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImNvbXBsZXRlXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgbmV3QmVzdCwgdGhpcy5sZXZlbFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5tZW51Lm9wZW4oKTtcbiAgICAgICAgfSwgNDAwMClcbiAgICAgICAgdGhpcy5QbGF5ZXIueCA9IDQ2OTtcbiAgICAgICAgdGhpcy5QbGF5ZXIueSA9IDIyMTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGV4aXRYID0gNTAwO1xuICAgICAgICBsZXQgZXhpdFkgPSAxODA7XG4gICAgICAgIGxldCBleGl0VyA9IDYwO1xuICAgICAgICBsZXQgZXhpdEggPSA4MDtcbiAgICAgICAgbGV0IGZpbmlzaFdvcmxkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgICAgLy8gZHJhdyBleGl0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGV4aXRYICs9IDAuNjtcbiAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgZXhpdFgsIGV4aXRZLCBleGl0VywgZXhpdEgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgIGV4aXRYIC09IDAuMztcbiAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgZXhpdFcgKz0gMC42O1xuICAgICAgICAgICAgICAgIGV4aXRIICs9IDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCBleGl0WCwgZXhpdFksIGV4aXRXLCBleGl0SCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIDUzMCwgMTAwLCAxMjAsIDE2MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gZHJhdyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLnJlbmRlcigpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gZHJhdyBpbnRlcmFjdGFibGVzIFxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCAxMDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSA0MCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjI1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMjc1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMC41O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAzMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDMyNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci53aWR0aCAtPSAwLjM7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaGVpZ2h0IC09IDAuNTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDAuMTU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSAwLjI1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMucGxheWVyU3ByaXRlLCB0aGlzLlBsYXllci54LCB0aGlzLlBsYXllci55LCB0aGlzLlBsYXllci53aWR0aCwgdGhpcy5QbGF5ZXIuaGVpZ2h0KVxuICAgICAgICB9LCAxMClcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluQ2FudmFzLCBtYWluQ3R4LCB0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHNldERhdGEsIHVucGF1c2UsIHJlbmRlckdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCl7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IG1haW5DYW52YXM7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IG1haW5DdHg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnNldEdhbWVEYXRhID0gc2V0RGF0YTtcbiAgICAgICAgdGhpcy51bnBhdXNlID0gdW5wYXVzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJHYW1lID0gcmVuZGVyR2FtZTtcbiAgICAgICAgdGhpcy5yZW5kZXJIb21lID0gcmVuZGVySG9tZTtcblxuICAgICAgICB0aGlzLm5ld0Jlc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcblxuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLnNvdW5kT2ZmID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc291bmRPZmYuc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT2ZmLnBuZyc7XG4gICAgICAgIHRoaXMuc291bmRPbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNvdW5kT24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT24ucG5nJztcblxuICAgICAgICB0aGlzLm1lbnVCbGlwID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL21lbnVCbGlwLm1wMycpO1xuICAgICAgICB0aGlzLnBhdXNlID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL3BhdXNlLm1wMycpXG4gICAgICAgIHRoaXMubWVudUJsaXAudm9sdW1lID0gMC4xO1xuICAgICAgICB0aGlzLnBhdXNlLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gMTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICd3JyB8fCBldmVudC5rZXkgPT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkICE9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMubWVudUJsaXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdzJyB8fCBldmVudC5rZXkgPT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heE51bSA9IHRoaXMudHlwZSA9PSBcInBhdXNlXCIgPyAzIDogMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gbWF4TnVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLm1lbnVCbGlwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2UucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIiAmJiB0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNTQwICYmIG1vdXNlWCA8IDU3MCAmJiBtb3VzZVkgPiAxMzAgJiYgbW91c2VZIDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRNZW51RGF0YSh0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIG5ld0Jlc3QsIHRpbWUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMubmV3QmVzdCA9IG5ld0Jlc3Q7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zdCBtZW51ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5tYWluQ2FudmFzLCB0aGlzLm1haW5DdHgsIHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMud29ybGROdW0gPT0gMikgeyAvL0NIQU5HRSBUSElTIFdIRU4gTUFLRSBNT1JFIFdPUkxEU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0gKyAxLCAxLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtICsgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1lbnUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDEwMCw0MDAsMjAwKTtcblxuICAgICAgICAvLyBzZXQgbWVudSBoZWFkZXIgZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIC8vIGRyYXcgbWVudSBoZWFkZXJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBGYWlsZWRcIiwgMjYwLCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgQ29tcGxldGUhXCIsIDIyNCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCw4NywyNTUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlXCIsIDM0NCwgMTUwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXV0ZSBidXR0b24gc2V0dXBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zb3VuZE9mZiwgNTQwLCAxMzAsIDMwLCAyMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNvdW5kT24sIDU0MCwgMTMwLCAzMCwgMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vIHNldCBtZW51IG9wdGlvbiBmb250XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgIFxuICAgICAgICAvLyBkcmF3IG1lbnUgb3B0aW9ucyBhbmQgYXJyb3dzXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXRyeVwiLCAzNjAsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMyMCwgMjUwKVxuXG4gICAgICAgICAgICAvLyBkcmF3IHNlbGVjdGVkIGFycm93cyBhcm91bmQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygzMDAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMyMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzAwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUyMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTAwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MjAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDIwMCwzMDAsNDAwLDEwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdCZXN0KSB7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGhpZ2ggc2NvcmUgdGV4dFxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwyNTUsMCknO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJOZXcgQmVzdCBUaW1lIVwiLCAzMTYsIDIwMClcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGZpbGxzdHlsZSBhbmQgZm9udFxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgVGltZTogJHsodGhpcy50aW1lLzEwMCkudG9TdHJpbmcoKX1gLCAyOTAsIDIyNSlcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJOZXh0IExldmVsXCIsIDMwMCwgMzAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzEwLCAzNTApXG5cbiAgICAgICAgICAgIC8vIGRyYXcgc2VsZWN0ZWQgYXJyb3dzIGFyb3VuZCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI0MCwgMzAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjYwLCAyOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNDAsIDI4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDAsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNTAsIDM1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI3MCwgMzQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjUwLCAzMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU1MCwgMzUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTMwLCAzNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NTAsIDMzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDMwMCw0MDAsNDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXN1bWVcIiwgMzQ0LCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3RhcnRcIiwgMzM0LCAyNTApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTQsIDMwMClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNzQsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI5NCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjc0LCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUzNCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTE0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjY0LCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODQsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2NCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NDQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUyNCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQ0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDIzNCwgMzAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjU0LCAyOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyMzQsIDI4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTc0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU3NCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgYXNzZXRJbXBvcnRzIGZyb20gJy4vYXNzZXRJbXBvcnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IDE7XG4gICAgICAgIHRoaXMuc291bmRNdXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubXVzaWNNdXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubnVtV29ybGRzID0gMjtcblxuICAgICAgICB0aGlzLmRlYXRoQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmJlc3RUaW1lID0gXCItLTotLVwiXG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGV2ZWxGaWxscyA9IFsnI2ZmZmZmZicsJyNmZmZmZmYnLCcjZmZmZmZmJywnI2ZmZmZmZicsJyNmZmZmZmYnXVxuXG4gICAgICAgIHRoaXMuZ2FtZSA9ICBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDEsIDEsIHRoaXMuZ2FtZSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5tdXNpYywgdGhpcy5zb3VuZE11dGVkLCB0aGlzLnRvZ2dsZU11dGVTb3VuZC5iaW5kKHRoaXMpLCB0aGlzLmdldFNvdW5kTXV0ZWQuYmluZCh0aGlzKSwgdGhpcy50b2dnbGVNdXRlTXVzaWMuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuaG9tZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbygpO1xuICAgICAgICB0aGlzLm11c2ljLnNyYyA9ICdkaXN0L2F1ZGlvL3dvcmxkMU11c2ljLm1wMyc7XG4gICAgICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC42O1xuXG4gICAgICAgIHRoaXMud29ybGRCR3MgPSBbXG4gICAgICAgICAgICAnZGlzdC9pbWFnZXMvbWFpbnBhZ2VfYmcucG5nJyxcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy93b3JsZDJCRy5wbmcnLFxuICAgICAgICBdXG5cbiAgICAgICAgLy8gZ2V0IGN1cnJlbnQgbnVtYmVyIG9mIGxldmVscyBjb21wbGV0ZWRcbiAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVMaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDEwMCArIGluY3JlbWVudCAmJiBtb3VzZVggPCAxNjUgKyBpbmNyZW1lbnQgJiYgbW91c2VZID4gMzQ1ICYmIG1vdXNlWSA8IDQxNSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbHNDb21wbGV0ZWQgPj0gKHRoaXMuY3VycmVudFdvcmxkIC0gMSkgKiA1ICsgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWF0aENvdW50ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuY3VycmVudFdvcmxkfS0ke2kgKyAxfSBkZWF0aCBjb3VudGApIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlc3RUaW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuY3VycmVudFdvcmxkfS0ke2kgKyAxfSBiZXN0IHRpbWVgKS8xMDAgfHwgXCItLTotLVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbEZpbGxzW2ldID0gJ3JnYigyNTUsMTkwLDI1NSknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbEZpbGxzW2ldID0gJyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gMCAmJiBtb3VzZVggPCAxMjUgJiYgbW91c2VZID4gMCAmJiBtb3VzZVkgPCA0NSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdmVMaXN0ZW5lcik7XG5cbiAgICAgICAgdGhpcy5jbGlja0xpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuICAgICAgICAgICAgICAgIGlmIChtb3VzZVggPiAxMDAgKyBpbmNyZW1lbnQgJiYgbW91c2VYIDwgMTY1ICsgaW5jcmVtZW50ICYmIG1vdXNlWSA+IDM0NSAmJiBtb3VzZVkgPCA0MTUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxzQ29tcGxldGVkID49ICh0aGlzLmN1cnJlbnRXb3JsZCAtIDEpICogNSArIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ob21lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNldERhdGEodGhpcy5jdXJyZW50V29ybGQsIGkgKyAxLCB0aGlzLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmNsaWNrTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDczMCAmJiBtb3VzZVggPCA3NzAgJiYgbW91c2VZID4gMzAgJiYgbW91c2VZIDwgNjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU11dGVNdXNpYygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNjYwICYmIG1vdXNlWCA8IDcwMCAmJiBtb3VzZVkgPiAzMCAmJiBtb3VzZVkgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZVNvdW5kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVkgPCAyODAgJiYgbW91c2VZID4gMjUwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA8IDI0MCAmJiBtb3VzZVggPiAyMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmxkID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gdGhpcy5udW1Xb3JsZHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA8IDU5MCAmJiBtb3VzZVggPiA1NjApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFdvcmxkIDwgdGhpcy5udW1Xb3JsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkKys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVuY29tbWVudCBmb3IgZGV2IG9wdGlvbnNcbiAgICAgICAgICAgIC8vIGlmIChtb3VzZVggPiAwICYmIG1vdXNlWCA8IDIwICYmIG1vdXNlWSA+IDAgJiYgbW91c2VZIDwgMjApIHtcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgMCk7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmIChtb3VzZVggPiAwICYmIG1vdXNlWCA8IDIwICYmIG1vdXNlWSA+IDQ1MCAmJiBtb3VzZVkgPCA1MDApIHtcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgdGhpcy5udW1Xb3JsZHMgKiA1KTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKG1vdXNlWCA+IDc1MCAmJiBtb3VzZVggPCA4MDAgJiYgbW91c2VZID4gNDUwICYmIG1vdXNlWSA8IDUwMCkge1xuICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMubnVtV29ybGRzOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gNTsgaisrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aX0tJHtqfSBiZXN0IHRpbWVgLCAwKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpfS0ke2p9IGRlYXRoIGNvdW50YCwgMCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbGlja0xpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB0b2dnbGVNdXRlTXVzaWMoKSB7XG4gICAgICAgIHRoaXMubXVzaWNNdXRlZCA9ICF0aGlzLm11c2ljTXV0ZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNNdXRlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNvdW5kTXV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdW5kTXV0ZWQ7XG4gICAgfVxuXG4gICAgdG9nZ2xlTXV0ZVNvdW5kKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb3VuZE11dGVkID0gIXRoaXMuc291bmRNdXRlZDtcbiAgICB9XG5cbiAgICBnZXRMZXZlbHNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxzQ29tcGxldGVkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGV2ZWxzQ29tcGxldGVkXCIpO1xuICAgICAgICBpZiAodGhpcy5sZXZlbHNDb21wbGV0ZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuY2xpY2tMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zZXRJbmFjdGl2ZSgpO1xuICAgICAgICB0aGlzLmdldExldmVsc0NvbXBsZXRlZCgpO1xuICAgICAgICB0aGlzLmhvbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLmN1cnJlbnRXb3JsZCAtIDFdfSlgXG4gICAgXG4gICAgICAgICAgICAvL3RpdGxlXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ090aGVyd29ybGRzJywgMjI1LCA5MClcblxuICAgICAgICAgICAgXG5cbiAgICBcbiAgICAgICAgICAgIC8vIHdvcmxkIHNlbGVjdCAgICAgIFxuICAgICAgICAgICAgLy8gLS13b3JsZCBuYW1lXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyOHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFdvcmxkICR7dGhpcy5jdXJyZW50V29ybGR9YCwgMzAyLCAyODApXG5cbiAgICAgICAgICAgIC8vLS0gd29ybGQgY3ljbGluZyBhcnJvd3NcbiAgICAgICAgICAgIC8vLS0tLSByaWdodCBhcnJvd1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTYwLCAyODApO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU5MCwgMjY1KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDI1MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM0NDQ0NDQnO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAvLy0tLS0gbGVmdCBhcnJvd1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAyODApO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIxMCwgMjY1KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNDAsIDI1MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyM0NDQ0NDQnO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vbGV2ZWwgc2VsZWN0IC0gMTMwcHggYmV0d2VlbiBsZXZlbFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsbENvbG9yID0gXCJyZ2IoMTIwLDEyMCwxMjApXCI7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRXb3JsZCAtIDEpICogNSArIGkgPD0gdGhpcy5sZXZlbHNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yID0gdGhpcy5sZXZlbEZpbGxzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDgwLDgwLDgwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAwICsgaW5jcmVtZW50LDM0NSw3MCw3MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTA1ICsgaW5jcmVtZW50LDM1MCw2MCw2MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KChpICsgMSkudG9TdHJpbmcoKSwgMTIyICsgaW5jcmVtZW50LCAzOTcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG11dGUgc291bmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgc291bmRCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBzb3VuZEJ1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZEJ1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc291bmRCdXR0b24sIDY2MCwgMzAsIDQwLCAzMCk7XG5cbiAgICAgICAgICAgIC8vIG11dGUgbXVzaWMgYnV0dG9uXG4gICAgICAgICAgICBsZXQgbXVzaWNCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobXVzaWNCdXR0b24sIDczMCwgMzAsIDQwLCAzMCk7XG5cblxuICAgICAgICAgICAgLy8gc3RhdHNcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJ1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBCZXN0IFRpbWU6ICR7dGhpcy5iZXN0VGltZX1gLCAyNDAsIDE2MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBEZWF0aCBDb3VudDogJHt0aGlzLmRlYXRoQ291bnR9YCwgMjYwLCAyMDApXG5cbiAgICAgICAgICAgIC8vIHNob3cvaGlkZSBjb250cm9sc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJjb250cm9sc1wiLCAyMCwgMzApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb250cm9scykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNyknXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZidcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdXQVNEIC0gTW92ZScsIDI5MCwgMTcwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTcGFjZSAtIEp1bXAnLCAyNzAsIDIxMClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnRXNjIC0gUGF1c2UnLCAzMTAsIDI1MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxMnB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdVc2VmdWwgVGlwOiBIb2xkaW5nIHRoZSBhcnJvdyBrZXkgaW4gdGhlIGRpcmVjdGlvbiBvZicsIDkwLCAzMTApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2Egd2FsbCB3aGlsZSBjb2xsaWRpbmcgd2l0aCBpdCB3aWxsIHNsb3cgeW91ciBmYWxsJywgMTEwLCAzMzApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sMTApXG4gICAgICAgIFxuICAgIH1cblxuICAgIFxufVxuXG4iLCJjb25zdCBCVUZGRVJfWCA9IDE3O1xuY29uc3QgQlVGRkVSX1kgPSAzMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmdYKHhQb3MsIHlQb3MpIHtcbiAgICAgICAgaWYgKHhQb3MgKyBCVUZGRVJfWCA+IHRoaXMueCAmJiB4UG9zIC0gQlVGRkVSX1ggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmIHlQb3MgKyBCVUZGRVJfWSAtIDYgPiB0aGlzLnkgJiYgeVBvcyAtIEJVRkZFUl9ZICsgNiA8IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRpbmdZKHhQb3MsIHlQb3MpIHtcbiAgICAgICAgaWYgKHlQb3MgKyBCVUZGRVJfWSA+IHRoaXMueSAmJiB5UG9zIDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgeFBvcyArIEJVRkZFUl9YIC0gNiA+IHRoaXMueCAmJiB4UG9zIC0gQlVGRkVSX1ggKyA2IDwgdGhpcy54ICsgdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGVJbWFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHVybCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxUZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgbWVzc2FnZSwgeCwgeSkge1xuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5tYWluQ3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtdGV4dFwiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gODAwO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwxKSc7XG4gICAgICAgIHRoaXMuYmdDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNiknXG5cbiAgICAgICAgdGhpcy50ZXh0VGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmFkZUluTG9vcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmFkZU91dExvb3AgPSBudWxsO1xuICAgICAgICB0aGlzLmZhZGVUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3b3JkcyA9IHRoaXMubWVzc2FnZS5zcGxpdChcIiBcIilcbiAgICAgICAgbGV0IGxlbiA9IHdvcmRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgc2VnbWVudCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb3VudCArPSB3b3Jkc1tpXS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gMzApIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LnB1c2god29yZHNbaV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgICAgc2VnbWVudCA9IFtdO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KVxuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQvMiAtIHRoaXMuc2VnbWVudHMubGVuZ3RoICogODtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCJFc2NhcGVcIiAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RvcFRleHQoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRleHRUaW1lb3V0KVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWRlVGltZW91dClcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZhZGVJbkxvb3ApXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5mYWRlT3V0TG9vcClcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGZhZGVJbigpIHtcbiAgICAgICAgdGhpcy50ZXh0VGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5mYWRlSW5Mb29wKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZmFkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZmFkZUluTG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSBjb3VudCAvIDEwMDtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSBjb3VudCAqIDAuNiAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gYHJnYmEoMjU1LDI1NSwyNTUsJHt0ZXh0T3BhY2l0eX0pYDtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IGByZ2JhKDAsMCwwLCR7YmdPcGFjaXR5fSlgXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICBmYWRlT3V0KCkge1xuICAgICAgICB0aGlzLnRleHRUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZhZGVPdXRMb29wKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5mYWRlT3V0TG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSAxIC0gKGNvdW50IC8gMTAwKTtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSAwLjYgLSAoY291bnQgKiAwLjYgLyAxMDApO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBgcmdiYSgyNTUsMjU1LDI1NSwke3RleHRPcGFjaXR5fSlgO1xuICAgICAgICAgICAgdGhpcy5iZ0NvbG9yID0gYHJnYmEoMCwwLDAsJHtiZ09wYWNpdHl9KWBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGRhcmtlbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwLDAuNilcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlZ21lbnRzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLnNlZ21lbnRzW2ldLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKDQ4MCAtIGxpbmUubGVuZ3RoICogMTYpLzI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChsaW5lLCB0aGlzLnggKyBvZmZzZXQsIHRoaXMueSArIChpICogMzApLCA0ODApO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG59IiwiXG4vL291dGVyIGFycmF5IGlzIHdvcmxkcywgaW5uZXIgYXJyYXkgaXMgbGV2ZWxEYXRhIG9iamVjdHNcbmV4cG9ydCBjb25zdCBMZXZlbERhdGEgPSBbXG4gICAgLy8gd29ybGQgMVxuICAgIFtcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAxXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIlRoaXMgaXMgdGhlIHN0b3J5IG9mIHNwYWNlbWFuLCBhIHJlc2lkZW50IG9mIHRoZSBjbG91ZCB3b3JsZCB3aG8gaGFzIGEgcGFzc2lvbiBmb3IgYWR2ZW50dXJlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgMlxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFsxMDAsNTRdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDNcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OjM4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgeTozNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeToyNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6MTQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNzIwLDQwMF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgNFxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbNTAsMzYwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs3NTAsNDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA1XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMjAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNTAwLDE4MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIk5vdyB0aGF0IHNwYWNlbWFuIGhhcyBzZWVuIGFsbCB0aGF0IGhpcyB3b3JsZCBoYXMgdG8gb2ZmZXIsIGhlIGJlZ2lucyBoaXMgam91cm5leSB0aHJvdWdoIG90aGVyd29ybGRzXCJcbiAgICAgICAgfVxuXG4gICAgXSxcbiAgICAvLyB3b3JsZCAyXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAyIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY3NSxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzcwMCw0MDBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMSxcbiAgICAgICAgICAgIGxldmVsVGV4dDogXCJTcGFjZW1hbiBmaW5kcyBoaW1zZWxmIGluIGFuIGFyaWQgbW91bnRhaW4gd29ybGQgd2l0aCBzdG9uZSBwbGF0Zm9ybXMuIFNvbWUgb2YgdGhlIHBsYXRmb3JtcyBzZWVtIHF1aXRlIG9sZC4uLlwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDIgbGV2ZWwgMlxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMjAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ3MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzcwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxOTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMzAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA3MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDM1LFxuICAgICAgICAgICAgICAgICAgICB5OiA3MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyOTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTkwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUxMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMjUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMjIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTkwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDI5MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTkwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE5MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMTMwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDI5MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMkxhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNzAwLDQyMF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAyIGxldmVsIDNcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDM3MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDc1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0NzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDcwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNjAwLDIwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6ICdBcyB5b3UgZGVsdmUgZGVlcGVyIGludG8gdGhlIHJ1aW5zLCB0aGUgcGxhdGZvcm1zIGFyZSBvbGRlciBhbmQgd2Vha2VyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDIwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzUwMCwxODBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwyMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MDAsMTgwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgIH1cbiAgICBdXG5dIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFrUGxhdGZvcm0gZXh0ZW5kcyBJbnRlcmFjdGFibGV7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGR1cmF0aW9uLCBpbWdVcmwsIGdyYXZpdHkpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmlzRmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDA7IC8vIHBpeGVscyBwZXIgc2Vjb25kXG4gICAgfVxuXG4gICAgZmFsbCgpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHBsYXRmb3JtRmFsbCk7XG4gICAgICAgIH0sICh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnkgKyAxMDApICogMTAgKyB0aGlzLmR1cmF0aW9uKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUZhbGwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiB0aGlzLmR1cmF0aW9uLzEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFsbFNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5mYWxsU3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9LCAxMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuaW1nVXJsO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9