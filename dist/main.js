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
        console.log("game.js");

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
      this.active = false;
      this.menu.setMenuData("failed", this.worldNum, this.levelNum);
      this.menu.open();
    }
  }, {
    key: "levelComplete",
    value: function levelComplete(gameLoop) {
      // set new levelsCompleted localStorage variable
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
        console.log("levelText.js");
        e.preventDefault();
        _this.active = false;
        clearTimeout(_this.textTimeout);
        clearTimeout(_this.fadeTimeout);
        clearInterval(_this.fadeInLoop);
        clearInterval(_this.fadeOutLoop);

        _this.close();
      }
    });
  }

  _createClass(LevelText, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL290aGVyd29ybGRzX3RpdGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlTWVudS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGVldG1ldGFsYmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc21hbGxQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZE9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RhYkljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGlueVBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMU11c2ljLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMkJHLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMkxhcmdlUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTGFyZ2VXZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTWVkaXVtV2Vha1BsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyU21hbGxXZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyVGlueVBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hc3NldEltcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbnRlcmFjdGFibGVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGV2ZWxkYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dlYWtQbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lRnJhbWUiLCJIb21lUGFnZSIsInJlbmRlciIsIkV4aXQiLCJ4IiwieSIsImxldmVsTnVtIiwid29ybGROdW0iLCJleGl0SW1hZ2UiLCJJbWFnZSIsImZyYW1lTnVtIiwieFBvcyIsInlQb3MiLCJwb3J0YWxGcmFtZSIsImN1cnJlbnRJbWFnZU51bSIsIk1hdGgiLCJmbG9vciIsInNyYyIsImRyYXdJbWFnZSIsIkludGVyYWN0YWJsZSIsIkdhbWUiLCJnYW1lIiwicmVuZGVySG9tZSIsImdhbWVNdXNpYyIsIm11c2ljTXV0ZWQiLCJ0b2dnbGVTb3VuZE11dGVkIiwiZ2V0U291bmRNdXRlZCIsInRvZ2dsZU11c2ljTXV0ZWQiLCJzaG93Q29udHJvbHMiLCJsZXZlbFRpbWUiLCJwYXVzZWQiLCJtZW51IiwiR2FtZU1lbnUiLCJzZXREYXRhIiwiYmluZCIsInRvZ2dsZVBhdXNlIiwiYWN0aXZlIiwiY2xlYXJSZWN0IiwibGV2ZWxEYXRhIiwiTGV2ZWxEYXRhIiwiVkVMT0NJVFlfWCIsIkdSQVZJVFkiLCJncmF2aXR5IiwiUGxheWVyIiwidmVsb2NpdHkiLCJpc0p1bXBpbmciLCJjYW5KdW1wIiwicGxheWVyU3RhcnRQb3MiLCJmYWNlUmlnaHQiLCJtb3ZpbmciLCJjb2xsaWRpbmdYIiwiY29sbGlkaW5nWSIsImdyb3VuZGVkIiwiY29sbGlzaW9uc3VyZmFjZVkiLCJwYXVzZVNvdW5kIiwiQXVkaW8iLCJ2b2x1bWUiLCJqdW1wU291bmQiLCJmb290c3RlcCIsIndvcmxkQkdzIiwicGxheWVyU3ByaXRlIiwicG9ydGFsU3ByaXRlIiwiZXhpdCIsImZpbmlzaFBvcyIsImludGVyYWN0YWJsZXMiLCJpbWFnZXMiLCJmb3JFYWNoIiwiaW50ZXJhY3RhYmxlIiwicHVzaCIsImltZ1VybCIsImxlbmd0aCIsIkludGVyYWN0YWJsZUltYWdlIiwieU9mZnNldCIsImltZ0hlaWdodCIsImxldmVsVGV4dCIsIkxldmVsVGV4dCIsIndpbmRvdyIsImV2ZW50Iiwia2V5IiwidGFyZ2V0IiwiYm9keSIsInByZXZlbnREZWZhdWx0IiwicGxheSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicGF1c2UiLCJjdXJyZW50VGltZSIsIm1vdmVMaXN0ZW5lciIsImNhbnZhc1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1vdXNlWCIsImxlZnQiLCJtb3VzZVkiLCJ0b3AiLCJuZXdHYW1lIiwid2VhayIsIldlYWtQbGF0Zm9ybSIsImR1cmF0aW9uIiwiaW1nIiwiZGVhdGhDb3VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicGFyc2VJbnQiLCJjdXJyZW50IiwiZ2FtZUxvb3AiLCJjbGVhckludGVydmFsIiwiaW5jcmVtZW50RGVhdGhDb3VudCIsInNldE1lbnVEYXRhIiwib3BlbiIsImxldmVsNUFuaW1hdGlvbiIsIm5ld0Jlc3QiLCJjaGVja0Jlc3RUaW1lIiwic2tpcCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic2V0SW50ZXJ2YWwiLCJwYXVzZUdhbWUiLCJmaWxsU3R5bGUiLCJnYW1lT3ZlciIsImltYWdlIiwiZHJhd1BsYXllciIsImN1cnJGcmFtZSIsImlzQ29sbGlkaW5nWCIsImlzQ29sbGlkaW5nWSIsImZhbGwiLCJpc0ZhbGxpbmciLCJsZXZlbENvbXBsZXRlIiwiZm9udCIsImZpbGxUZXh0IiwidG9TdHJpbmciLCJmaWxsUmVjdCIsImZpbmlzaFdvcmxkIiwiY291bnQiLCJleGl0WCIsImV4aXRZIiwiZXhpdFciLCJleGl0SCIsIm1haW5DYW52YXMiLCJtYWluQ3R4IiwidHlwZSIsInVucGF1c2UiLCJyZW5kZXJHYW1lIiwic2V0R2FtZURhdGEiLCJ0aW1lIiwic291bmRPZmYiLCJzb3VuZE9uIiwibWVudUJsaXAiLCJzZWxlY3RlZCIsInN1Ym1pdHRlZCIsIm1heE51bSIsImNsb3NlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsIiwiY3VycmVudFdvcmxkIiwic291bmRNdXRlZCIsIm51bVdvcmxkcyIsImJlc3RUaW1lIiwibGV2ZWxGaWxscyIsIm11c2ljIiwidG9nZ2xlTXV0ZVNvdW5kIiwidG9nZ2xlTXV0ZU11c2ljIiwiaG9tZSIsImxldmVsc0NvbXBsZXRlZCIsImkiLCJpbmNyZW1lbnQiLCJjbGlja0xpc3RlbmVyIiwic2V0SW5hY3RpdmUiLCJnZXRMZXZlbHNDb21wbGV0ZWQiLCJmaWxsQ29sb3IiLCJzb3VuZEJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiQlVGRkVSX1giLCJCVUZGRVJfWSIsInVybCIsIm1lc3NhZ2UiLCJ0ZXh0Q29sb3IiLCJiZ0NvbG9yIiwidGV4dFRpbWVvdXQiLCJmYWRlSW5Mb29wIiwiZmFkZU91dExvb3AiLCJmYWRlVGltZW91dCIsIndvcmRzIiwic3BsaXQiLCJsZW4iLCJzZWdtZW50cyIsInNlZ21lbnQiLCJlIiwiY2xlYXJUaW1lb3V0IiwiZmFkZU91dCIsInRleHRPcGFjaXR5IiwiYmdPcGFjaXR5IiwiZmFkZUluIiwibGluZSIsImpvaW4iLCJvZmZzZXQiLCJmYWxsU3BlZWQiLCJwbGF0Zm9ybUZhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtR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S3pFLEdBQUwsQ0FBU3NCLFNBQVQsQ0FBbUIsS0FBS2lGLEdBQXhCLEVBQTZCLEtBQUsvRixDQUFsQyxFQUFxQyxLQUFLQyxDQUExQyxFQUE2QyxLQUFLUCxLQUFsRCxFQUF5RCxLQUFLQyxNQUE5RDtBQUNIOzs7O0VBaENxQ29CLHFEOzs7Ozs7Ozs7Ozs7OztBQ0gxQztBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvV29ybGQxRG9vci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Xb3JsZDJEb29yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2Zvb3RzdGVwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL2p1bXBTb3VuZC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21haW5wYWdlX2JnLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL21lbnVCbGlwLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL211c2ljT24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvb3RoZXJ3b3JsZHNfdGl0bGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2UubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vcGF1c2VNZW51Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1blJpZ2h0RnJhbWUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NoZWV0bWV0YWxiZy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NvdW5kT2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NvdW5kT24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvdGFiSWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90aW55UGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vd29ybGQxTXVzaWMubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvd29ybGQyQkcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJTbWFsbFdlYWtQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmdcIjsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9zY3JpcHRzL2hvbWVwYWdlJ1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1haW5cIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjYW52YXMud2lkdGggPSA4MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcbiAgICBsZXQgZ2FtZUZyYW1lID0gMDtcblxuXG4gICAgbmV3IEhvbWVQYWdlKGNhbnZhcywgY3R4KS5yZW5kZXIoKTtcblxuICAgIFxuXG5cbn0pO1xuIiwiLy9pbWFnZXMgXG5pbXBvcnQgb3RoZXJ3b3JsZHNUaXRsZSBmcm9tICcuLi9hc3NldHMvb3RoZXJ3b3JsZHNfdGl0bGUucG5nJ1xuaW1wb3J0IG1lIGZyb20gJy4uL2Fzc2V0cy9tZS5wbmcnXG5pbXBvcnQgc21iZyBmcm9tICcuLi9hc3NldHMvc2hlZXRtZXRhbGJnLnBuZydcblxuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUyLnBuZydcbmltcG9ydCBydW5SaWdodEltYWdlMyBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTMucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTMucG5nJ1xuXG5pbXBvcnQgUG9ydGFsRnJhbWUxIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lMiBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTMgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU0IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTYgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU3IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lOCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZydcblxuaW1wb3J0IFdvcmxkMURvb3IgZnJvbSAnLi4vYXNzZXRzL1dvcmxkMURvb3IucG5nJ1xuaW1wb3J0IFdvcmxkMkRvb3IgZnJvbSAnLi4vYXNzZXRzL1dvcmxkMkRvb3IucG5nJ1xuXG5cbmltcG9ydCBsYXJnZVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9sYXJnZVBsYXRmb3JtLnBuZydcbmltcG9ydCBtZWRpdW1QbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbWVkaXVtUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHNtYWxsUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3NtYWxsUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHRpbnlQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvdGlueVBsYXRmb3JtLnBuZydcblxuaW1wb3J0IHdvcmxkMkxhcmdlUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMkxhcmdlUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMk1lZGl1bVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyU21hbGxQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyVGlueVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJ1xuXG5pbXBvcnQgd29ybGQyTGFyZ2VXZWFrUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMkxhcmdlV2Vha1BsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJNZWRpdW1XZWFrUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMk1lZGl1bVdlYWtQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyU21hbGxXZWFrUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMlNtYWxsV2Vha1BsYXRmb3JtLnBuZydcbmltcG9ydCB3b3JsZDJUaW55V2Vha1BsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZydcblxuaW1wb3J0IGlkbGVGcmFtZSBmcm9tICcuLi9hc3NldHMvaWRsZUZyYW1lLnBuZydcbmltcG9ydCBpZGxlRnJhbWUyIGZyb20gJy4uL2Fzc2V0cy9pZGxlRnJhbWUyLnBuZydcblxuaW1wb3J0IEJHIGZyb20gJy4uL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmcnXG5pbXBvcnQgdGFiSWNvbiBmcm9tICcuLi9hc3NldHMvdGFiSWNvbi5wbmcnXG5pbXBvcnQgd29ybGQyQkcgZnJvbSAnLi4vYXNzZXRzL3dvcmxkMkJHLnBuZydcbmltcG9ydCBtdXNpY09uIGZyb20gJy4uL2Fzc2V0cy9tdXNpY09uLnBuZydcbmltcG9ydCBtdXNpY09mZiBmcm9tICcuLi9hc3NldHMvbXVzaWNPZmYucG5nJ1xuaW1wb3J0IHNvdW5kT24gZnJvbSAnLi4vYXNzZXRzL3NvdW5kT24ucG5nJ1xuaW1wb3J0IHNvdW5kT2ZmIGZyb20gJy4uL2Fzc2V0cy9zb3VuZE9mZi5wbmcnXG5cblxuLy9hdWRpb1xuaW1wb3J0IFdvcmxkMU11c2ljIGZyb20gJy4uL2Fzc2V0cy93b3JsZDFNdXNpYy5tcDMnXG5pbXBvcnQganVtcFNvdW5kIGZyb20gJy4uL2Fzc2V0cy9qdW1wU291bmQubXAzJ1xuaW1wb3J0IGZvb3RzdGVwIGZyb20gJy4uL2Fzc2V0cy9mb290c3RlcC5tcDMnXG5pbXBvcnQgbWVudUJsaXAgZnJvbSAnLi4vYXNzZXRzL21lbnVCbGlwLm1wMydcbmltcG9ydCBwYXVzZU1lbnUgZnJvbSAnLi4vYXNzZXRzL3BhdXNlTWVudS5tcDMnXG5pbXBvcnQgcGF1c2UgZnJvbSAnLi4vYXNzZXRzL3BhdXNlLm1wMyciLCJpbXBvcnQgSW50ZXJhY3RhYmxlIGZyb20gXCIuL2ludGVyYWN0YWJsZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4aXQgZXh0ZW5kcyBJbnRlcmFjdGFibGV7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGxldmVsTnVtLCB3b3JsZE51bSkge1xuICAgICAgICBzdXBlcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuXG5cbiAgICAgICAgdGhpcy5leGl0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoZnJhbWVOdW0sIHhQb3MgPSB0aGlzLngsIHlQb3MgPSB0aGlzLnksIHdpZHRoID0gNjAsIGhlaWdodCA9IDgwKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgIGxldCBwb3J0YWxGcmFtZSA9IGZyYW1lTnVtICUgMTIwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbWFnZU51bSA9IE1hdGguZmxvb3IocG9ydGFsRnJhbWUvMTUpICsgMTtcbiAgICAgICAgICAgIHRoaXMuZXhpdEltYWdlLnNyYyA9IGBkaXN0L2ltYWdlcy9Qb3J0YWxGcmFtZSR7Y3VycmVudEltYWdlTnVtfS5wbmdgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmV4aXRJbWFnZSwgeFBvcywgeVBvcywgd2lkdGgsIGhlaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhpdEltYWdlLnNyYyA9IGBkaXN0L2ltYWdlcy9Xb3JsZCR7dGhpcy53b3JsZE51bX1Eb29yLnBuZ2BcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmV4aXRJbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgSW50ZXJhY3RhYmxlIGZyb20gJy4vaW50ZXJhY3RhYmxlJ1xuaW1wb3J0IEdhbWVNZW51IGZyb20gJy4vZ2FtZW1lbnUnXG5pbXBvcnQgRXhpdCBmcm9tICcuL2V4aXQnXG5cbmltcG9ydCB7IExldmVsRGF0YSB9IGZyb20gJy4vbGV2ZWxkYXRhJ1xuaW1wb3J0IEludGVyYWN0YWJsZUltYWdlIGZyb20gJy4vaW50ZXJhY3RhYmxlSW1hZ2UnXG5pbXBvcnQgTGV2ZWxUZXh0IGZyb20gJy4vbGV2ZWxUZXh0J1xuaW1wb3J0IFdlYWtQbGF0Zm9ybSBmcm9tICcuL3dlYWtQbGF0Zm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSwgcmVuZGVySG9tZSwgZ2FtZU11c2ljLCBtdXNpY011dGVkLCB0b2dnbGVTb3VuZE11dGVkLCBnZXRTb3VuZE11dGVkLCB0b2dnbGVNdXNpY011dGVkKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucmVuZGVySG9tZSA9IHJlbmRlckhvbWU7XG4gICAgICAgIHRoaXMuZ2FtZU11c2ljID0gZ2FtZU11c2ljO1xuICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSBtdXNpY011dGVkO1xuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQgPSB0b2dnbGVTb3VuZE11dGVkO1xuICAgICAgICB0aGlzLmdldFNvdW5kTXV0ZWQgPSBnZXRTb3VuZE11dGVkO1xuICAgICAgICB0aGlzLnRvZ2dsZU11c2ljTXV0ZWQgPSB0b2dnbGVNdXNpY011dGVkO1xuICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgR2FtZU1lbnUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSwgdGhpcy5zZXREYXRhLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXJIb21lLCB0aGlzLmdhbWVNdXNpYywgdGhpcy5tdXNpY011dGVkLCB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQsIHRoaXMuZ2V0U291bmRNdXRlZCwgdGhpcy50b2dnbGVTb3VuZE11dGVkKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhdXNlU291bmQgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vcGF1c2UubXAzJylcbiAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICAvLyBwbGF5ZXIgbW92ZW1lbnQgc291bmRzXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2p1bXBTb3VuZC5tcDMnKVxuICAgICAgICB0aGlzLmp1bXBTb3VuZC52b2x1bWUgPSAwLjY7XG4gICAgICAgIHRoaXMuZm9vdHN0ZXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vZm9vdHN0ZXAubXAzJylcbiAgICAgICAgdGhpcy5mb290c3RlcC52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnBvcnRhbFNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIC8vIHNldCBleGl0IGxvY2F0aW9uXG4gICAgICAgIHRoaXMuZXhpdCA9IG5ldyBFeGl0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzBdLHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1sxXSw3MCw3MCwgdGhpcy5sZXZlbE51bSwgdGhpcy53b3JsZE51bSk7XG5cbiAgICAgICAgLy8gc2V0IGludGVyYWN0YWJsZXMgZm9yIHRoaXMgc3RhZ2UgZnJvbSBzZWVkIGRhdGFcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IEludGVyYWN0YWJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoKSk7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlSW1hZ2UodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUuaW1nVXJsLGludGVyYWN0YWJsZS54LGludGVyYWN0YWJsZS55IC0gaW50ZXJhY3RhYmxlLnlPZmZzZXQsaW50ZXJhY3RhYmxlLndpZHRoLGludGVyYWN0YWJsZS5pbWdIZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcgfHwgZXZlbnQua2V5ID09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gdGhpcy5WRUxPQ0lUWV9YO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZmFjZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJyB8fCBldmVudC5rZXkgPT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IC10aGlzLlZFTE9DSVRZX1g7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5mYWNlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJykge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZ3JvdW5kZWQgJiYgIXRoaXMuUGxheWVyLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLmp1bXBTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdIC09IDU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSwgNjApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIiAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZS5qc1wiKVxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VTb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5wYXVzZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ2QnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScgfHwgZXZlbnQua2V5ID09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVyID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbnZhc1BvcyA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LnggLSBjYW52YXNQb3MubGVmdDtcbiAgICAgICAgICAgIGxldCBtb3VzZVkgPSBldmVudC55IC0gY2FudmFzUG9zLnRvcDtcblxuICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDAgJiYgbW91c2VYIDwgMTI1ICYmIG1vdXNlWSA+IDAgJiYgbW91c2VZIDwgNDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHNldEdhbWUobmV3R2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXdHYW1lO1xuICAgIH1cblxuICAgIHNldEluYWN0aXZlKCl7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0RGF0YSh3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUpIHtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZnJhbWVOdW0gPSAwO1xuICAgICAgICB0aGlzLmxldmVsVGltZSA9IDYwMDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gMDtcblxuICAgICAgICAvLyBzZXQgZXhpdCBsb2NhdGlvblxuICAgICAgICB0aGlzLmV4aXQgPSBuZXcgRXhpdCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1swXSx0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMV0sNTAsNTAsIHRoaXMubGV2ZWxOdW0sIHRoaXMud29ybGROdW0pO1xuXG4gICAgICAgIC8vIHNldCBpbnRlcmFjdGFibGVzIGZvciB0aGlzIHN0YWdlIGZyb20gc2VlZCBkYXRhXG4gICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsRGF0YS5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUud2Vhaykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5wdXNoKG5ldyBXZWFrUGxhdGZvcm0odGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUueCwgaW50ZXJhY3RhYmxlLnksIGludGVyYWN0YWJsZS5oZWlnaHQsIGludGVyYWN0YWJsZS53aWR0aCwgaW50ZXJhY3RhYmxlLmR1cmF0aW9uLCBpbnRlcmFjdGFibGUuaW1nVXJsLCB0aGlzLkdSQVZJVFkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IEludGVyYWN0YWJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pbWdVcmwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVJbWFnZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS5pbWdVcmwsaW50ZXJhY3RhYmxlLngsaW50ZXJhY3RhYmxlLnkgLSBpbnRlcmFjdGFibGUueU9mZnNldCxpbnRlcmFjdGFibGUud2lkdGgsaW50ZXJhY3RhYmxlLmltZ0hlaWdodCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dCA9IG5ldyBMZXZlbFRleHQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQsIDE2MCwyMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICB0b2dnbGVQYXVzZSgpe1xuICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIGluY3JlbWVudERlYXRoQ291bnQoKSB7XG4gICAgICAgIGxldCBkZWF0aENvdW50ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gZGVhdGggY291bnRgKTtcbiAgICAgICAgaWYgKGRlYXRoQ291bnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gZGVhdGggY291bnRgLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gZGVhdGggY291bnRgLCBwYXJzZUludChkZWF0aENvdW50KSArIDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0Jlc3RUaW1lKCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLndvcmxkTnVtfS0ke3RoaXMubGV2ZWxOdW19IGJlc3QgdGltZWApO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxldmVsVGltZSlcbiAgICAgICAgaWYgKGN1cnJlbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gYmVzdCB0aW1lYCwgdGhpcy5sZXZlbFRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZXZlbFRpbWUgPiBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMud29ybGROdW19LSR7dGhpcy5sZXZlbE51bX0gYmVzdCB0aW1lYCwgdGhpcy5sZXZlbFRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihnYW1lTG9vcCkge1xuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcCk7XG5cbiAgICAgICAgdGhpcy5pbmNyZW1lbnREZWF0aENvdW50KCk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiZmFpbGVkXCIsdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSk7XG4gICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgfVxuXG4gICAgbGV2ZWxDb21wbGV0ZShnYW1lTG9vcCkge1xuICAgICAgICAvLyBzZXQgbmV3IGxldmVsc0NvbXBsZXRlZCBsb2NhbFN0b3JhZ2UgdmFyaWFibGVcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgcGFyc2VJbnQoY3VycmVudCkgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFuaW1hdGlvbiBhdCBlbmQgb2YgbGV2ZWwgNVxuICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsNUFuaW1hdGlvbihnYW1lTG9vcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcClcbiAgICAgICAgICAgIGxldCBuZXdCZXN0ID0gdGhpcy5jaGVja0Jlc3RUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJjb21wbGV0ZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIG5ld0Jlc3QsIHRoaXMubGV2ZWxUaW1lKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBhdXNlR2FtZShnYW1lTG9vcCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJwYXVzZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoc2tpcCA9IGZhbHNlKXtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxUZXh0ICE9IFwiXCIgJiYgIXNraXApIHsgICAgXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5vcGVuKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLndvcmxkTnVtIC0gMV19KWBcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIueSA+IDUwMCB8fCB0aGlzLmxldmVsVGltZSA8PSA5OSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoZ2FtZUxvb3ApXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIodGhpcy5mcmFtZU51bSk7XG5cbiAgICAgICAgICAgIC8vIGRyYXcgaW1hZ2VzXG4gICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIGRyYXcgcGxheWVyXG4gICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG5cblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBmcmFtZSBpbWFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLm1vdmluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5ncm91bmRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLmZvb3RzdGVwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5QbGF5ZXIuZnJhbWVOdW0gLyAxMClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGxheWVyLmZhY2VSaWdodCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckZyYW1lID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJGcmFtZSA9PSAwIHx8IGN1cnJGcmFtZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5MZWZ0RnJhbWUzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZU51bSAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICBcbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgb2JzdGFjbGUgY29sbGlzaW9uXG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdZID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1godGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmlzQ29sbGlkaW5nWSh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5mYWxsICYmICFpbnRlcmFjdGFibGUuaXNGYWxsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUuZmFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxsXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgPSBpbnRlcmFjdGFibGUueTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBsZXZlbCBmaW5pc2ggXG4gICAgICAgICAgICBpZiAodGhpcy5leGl0LmlzQ29sbGlkaW5nWCh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQuaXNDb2xsaWRpbmdZKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb21wbGV0ZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIG1vdmVtZW50IGJhc2Ugb24gcGxheWVyIGNvbGxpc2lvblxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSB0aGlzLlBsYXllci52ZWxvY2l0eVswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07ICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ID0gdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgLSA1OTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICAgICAgLy9sZXZlbCBpbmZvIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfWAsIDM2NCwgNTApO1xuXG4gICAgICAgICAgICAvLyB0aW1lclxuICAgICAgICAgICAgdGhpcy5sZXZlbFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KE1hdGguZmxvb3IodGhpcy5sZXZlbFRpbWUvMTAwKS50b1N0cmluZygpLCA3MDAsIDUwKTtcbiAgICBcbiAgICAgICAgICAgIC8vIGNvbnRyb2xzIGhvdmVyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnY29udHJvbHMnLCAyMCwgMzApXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjcpJ1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnV0FTRCAtIE1vdmUnLCAyOTAsIDE3MClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnU3BhY2UgLSBKdW1wJywgMjcwLCAyMTApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0VzYyAtIFBhdXNlJywgMzEwLCAyNTApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTJweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnVXNlZnVsIFRpcDogSG9sZGluZyB0aGUgYXJyb3cga2V5IGluIHRoZSBkaXJlY3Rpb24gb2YnLCA5MCwgMzEwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdhIHdhbGwgd2hpbGUgY29sbGlkaW5nIHdpdGggaXQgd2lsbCBzbG93IHlvdXIgZmFsbCcsIDExMCwgMzMwKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZnJhbWVOdW0gPSAodGhpcy5QbGF5ZXIuZnJhbWVOdW0gKyAxKSAlIDQwXG4gICAgICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gKHRoaXMucG9ydGFsRnJhbWUgKyAxKSAlIDgwO1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lTnVtKys7XG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gYW5pbWF0aW9uc1xuXG4gICAgbGV2ZWw1QW5pbWF0aW9uKGdhbWVMb29wKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmluaXNoV29ybGQpXG4gICAgICAgICAgICBsZXQgbmV3QmVzdCA9IHRoaXMuY2hlY2tCZXN0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiY29tcGxldGVcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCBuZXdCZXN0LCB0aGlzLmxldmVsVGltZSk7XG4gICAgICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgICAgICB9LCA0MDAwKVxuICAgICAgICB0aGlzLlBsYXllci54ID0gNDY5O1xuICAgICAgICB0aGlzLlBsYXllci55ID0gMjIxO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgZXhpdFggPSA1MDA7XG4gICAgICAgIGxldCBleGl0WSA9IDE4MDtcbiAgICAgICAgbGV0IGV4aXRXID0gNjA7XG4gICAgICAgIGxldCBleGl0SCA9IDgwO1xuICAgICAgICBsZXQgZmluaXNoV29ybGQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGV4aXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgZXhpdFggKz0gMC42O1xuICAgICAgICAgICAgICAgIGV4aXRZIC09IDAuNDtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCBleGl0WCwgZXhpdFksIGV4aXRXLCBleGl0SCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMjAwKSB7XG4gICAgICAgICAgICAgICAgZXhpdFggLT0gMC4zO1xuICAgICAgICAgICAgICAgIGV4aXRZIC09IDAuNDtcbiAgICAgICAgICAgICAgICBleGl0VyArPSAwLjY7XG4gICAgICAgICAgICAgICAgZXhpdEggKz0gMC44O1xuICAgICAgICAgICAgICAgIHRoaXMuZXhpdC5yZW5kZXIoY291bnQsIGV4aXRYLCBleGl0WSwgZXhpdFcsIGV4aXRIKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgNTMwLCAxMDAsIDEyMCwgMTYwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBkcmF3IGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2UucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBkcmF3IGludGVyYWN0YWJsZXMgXG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUucG5nXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyMjUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyNzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSAtPSAwLjU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDMwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gMjAwICYmIGNvdW50IDwgMzI1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ID49IDMwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLndpZHRoIC09IDAuMztcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5oZWlnaHQgLT0gMC41O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMC4xNTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IDAuMjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG4gICAgICAgIH0sIDEwKVxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1haW5DYW52YXMsIG1haW5DdHgsIHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSwgc2V0RGF0YSwgdW5wYXVzZSwgcmVuZGVyR2FtZSwgcmVuZGVySG9tZSwgZ2FtZU11c2ljLCBtdXNpY011dGVkLCB0b2dnbGVTb3VuZE11dGVkLCBnZXRTb3VuZE11dGVkLCB0b2dnbGVNdXNpY011dGVkKXtcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzID0gbWFpbkNhbnZhcztcbiAgICAgICAgdGhpcy5tYWluQ3R4ID0gbWFpbkN0eDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtbWVudVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuc2V0R2FtZURhdGEgPSBzZXREYXRhO1xuICAgICAgICB0aGlzLnVucGF1c2UgPSB1bnBhdXNlO1xuICAgICAgICB0aGlzLnJlbmRlckdhbWUgPSByZW5kZXJHYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuXG4gICAgICAgIHRoaXMubmV3QmVzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgICAgIHRoaXMuZ2FtZU11c2ljID0gZ2FtZU11c2ljO1xuICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSBtdXNpY011dGVkO1xuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQgPSB0b2dnbGVTb3VuZE11dGVkO1xuICAgICAgICB0aGlzLmdldFNvdW5kTXV0ZWQgPSBnZXRTb3VuZE11dGVkO1xuICAgICAgICB0aGlzLnRvZ2dsZU11c2ljTXV0ZWQgPSB0b2dnbGVNdXNpY011dGVkO1xuXG4gICAgICAgIHRoaXMuc291bmRPZmYgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZE9mZi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPZmYucG5nJztcbiAgICAgICAgdGhpcy5zb3VuZE9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc291bmRPbi5zcmMgPSAnZGlzdC9pbWFnZXMvc291bmRPbi5wbmcnO1xuXG4gICAgICAgIHRoaXMubWVudUJsaXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vbWVudUJsaXAubXAzJyk7XG4gICAgICAgIHRoaXMucGF1c2UgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vcGF1c2UubXAzJylcbiAgICAgICAgdGhpcy5tZW51QmxpcC52b2x1bWUgPSAwLjE7XG4gICAgICAgIHRoaXMucGF1c2Uudm9sdW1lID0gMC4yO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAxO1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ3cnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5tZW51QmxpcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnIHx8IGV2ZW50LmtleSA9PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4TnVtID0gdGhpcy50eXBlID09IFwicGF1c2VcIiA/IDMgOiAyO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSBtYXhOdW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMubWVudUJsaXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdXNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5wYXVzZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSBcIkVzY2FwZVwiICYmIHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA1NDAgJiYgbW91c2VYIDwgNTcwICYmIG1vdXNlWSA+IDEzMCAmJiBtb3VzZVkgPCAxNTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSAhdGhpcy5tdXNpY011dGVkO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldE1lbnVEYXRhKHR5cGUsIHdvcmxkTnVtLCBsZXZlbE51bSwgbmV3QmVzdCwgdGltZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5uZXdCZXN0ID0gbmV3QmVzdDtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLm1haW5DYW52YXMsIHRoaXMubWFpbkN0eCwgdGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy53b3JsZE51bSA9PSAyKSB7IC8vQ0hBTkdFIFRISVMgV0hFTiBNQUtFIE1PUkUgV09STERTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSArIDEsIDEsIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0gKyAxLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobWVudSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGRyYXcgbWVudSBib3hcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMTAwLDQwMCwyMDApO1xuXG4gICAgICAgIC8vIHNldCBtZW51IGhlYWRlciBmb250XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgLy8gZHJhdyBtZW51IGhlYWRlclxuICAgICAgICBpZiAodGhpcy50eXBlID09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxldmVsIEZhaWxlZFwiLCAyNjAsIDE1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDI1NSwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBDb21wbGV0ZSFcIiwgMjI0LCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDg3LDI1NSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VcIiwgMzQ0LCAxNTApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdXRlIGJ1dHRvbiBzZXR1cFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVzaWNNdXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNvdW5kT2ZmLCA1NDAsIDEzMCwgMzAsIDIwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc291bmRPbiwgNTQwLCAxMzAsIDMwLCAyMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLy8gc2V0IG1lbnUgb3B0aW9uIGZvbnRcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgXG4gICAgICAgIC8vIGRyYXcgbWVudSBvcHRpb25zIGFuZCBhcnJvd3NcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJldHJ5XCIsIDM2MCwgMjAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJNYWluIE1lbnVcIiwgMzIwLCAyNTApXG5cbiAgICAgICAgICAgIC8vIGRyYXcgc2VsZWN0ZWQgYXJyb3dzIGFyb3VuZCBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDMwMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzIwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygzMDAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTIwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MDAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUyMCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU2MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTQwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NjAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDMwMCw0MDAsMTAwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld0Jlc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBuZXcgaGlnaCBzY29yZSB0ZXh0XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigwLDI1NSwwKSc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTJweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk5ldyBCZXN0IFRpbWUhXCIsIDMxNiwgMjAwKVxuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgZmlsbHN0eWxlIGFuZCBmb250XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCAnUHJlc3MgU3RhcnQgMlAnXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBUaW1lOiAkeyh0aGlzLnRpbWUvMTAwKS50b1N0cmluZygpfWAsIDI5MCwgMjI1KVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk5leHQgTGV2ZWxcIiwgMzAwLCAzMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTAsIDM1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI1MCwgMzUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjcwLCAzNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTAsIDMzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTUwLCAzNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzAsIDM0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1MCwgMzMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMzAwLDQwMCw0MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3VtZVwiLCAzNDQsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmVzdGFydFwiLCAzMzQsIDI1MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMxNCwgMzAwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI3NCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjk0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTM0LCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MTQsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUzNCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4NCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjY0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU0NCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTI0LCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDQsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjM0LCAzMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTQsIDI5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDIzNCwgMjgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTc0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBhc3NldEltcG9ydHMgZnJvbSAnLi9hc3NldEltcG9ydHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcbiAgICAgICAgdGhpcy5zb3VuZE11dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1Xb3JsZHMgPSAyO1xuXG4gICAgICAgIHRoaXMuZGVhdGhDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYmVzdFRpbWUgPSBcIi0tOi0tXCJcbiAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZXZlbEZpbGxzID0gWycjZmZmZmZmJywnI2ZmZmZmZicsJyNmZmZmZmYnLCcjZmZmZmZmJywnI2ZmZmZmZiddXG5cbiAgICAgICAgdGhpcy5nYW1lID0gIG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMSwgMSwgdGhpcy5nYW1lLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLCB0aGlzLm11c2ljLCB0aGlzLnNvdW5kTXV0ZWQsIHRoaXMudG9nZ2xlTXV0ZVNvdW5kLmJpbmQodGhpcyksIHRoaXMuZ2V0U291bmRNdXRlZC5iaW5kKHRoaXMpLCB0aGlzLnRvZ2dsZU11dGVNdXNpYy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ob21lID0gbnVsbDtcblxuICAgICAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIHRoaXMubXVzaWMuc3JjID0gJ2Rpc3QvYXVkaW8vd29ybGQxTXVzaWMubXAzJztcbiAgICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICAvLyBnZXQgY3VycmVudCBudW1iZXIgb2YgbGV2ZWxzIGNvbXBsZXRlZFxuICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxzQ29tcGxldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzQ29tcGxldGVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVyID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbnZhc1BvcyA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LnggLSBjYW52YXNQb3MubGVmdDtcbiAgICAgICAgICAgIGxldCBtb3VzZVkgPSBldmVudC55IC0gY2FudmFzUG9zLnRvcDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gaSAqIDEzMDtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYID4gMTAwICsgaW5jcmVtZW50ICYmIG1vdXNlWCA8IDE2NSArIGluY3JlbWVudCAmJiBtb3VzZVkgPiAzNDUgJiYgbW91c2VZIDwgNDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA+PSAodGhpcy5jdXJyZW50V29ybGQgLSAxKSAqIDUgKyBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYXRoQ291bnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5jdXJyZW50V29ybGR9LSR7aSArIDF9IGRlYXRoIGNvdW50YCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVzdFRpbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5jdXJyZW50V29ybGR9LSR7aSArIDF9IGJlc3QgdGltZWApLzEwMCB8fCBcIi0tOi0tXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRmlsbHNbaV0gPSAncmdiKDI1NSwxOTAsMjU1KSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRmlsbHNbaV0gPSAnI2ZmZmZmZidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiAwICYmIG1vdXNlWCA8IDEyNSAmJiBtb3VzZVkgPiAwICYmIG1vdXNlWSA8IDQ1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZUxpc3RlbmVyKTtcblxuICAgICAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3VzZVggPSBldmVudC54IC0gY2FudmFzUG9zLmxlZnQ7XG4gICAgICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQueSAtIGNhbnZhc1Bvcy50b3A7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDEwMCArIGluY3JlbWVudCAmJiBtb3VzZVggPCAxNjUgKyBpbmNyZW1lbnQgJiYgbW91c2VZID4gMzQ1ICYmIG1vdXNlWSA8IDQxNSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbHNDb21wbGV0ZWQgPj0gKHRoaXMuY3VycmVudFdvcmxkIC0gMSkgKiA1ICsgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhvbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2V0RGF0YSh0aGlzLmN1cnJlbnRXb3JsZCwgaSArIDEsIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuY2xpY2tMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNzMwICYmIG1vdXNlWCA8IDc3MCAmJiBtb3VzZVkgPiAzMCAmJiBtb3VzZVkgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZU11c2ljKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA2NjAgJiYgbW91c2VYIDwgNzAwICYmIG1vdXNlWSA+IDMwICYmIG1vdXNlWSA8IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlU291bmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWSA8IDI4MCAmJiBtb3VzZVkgPiAyNTApIHtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgMjQwICYmIG1vdXNlWCA+IDIxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZC0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSB0aGlzLm51bVdvcmxkcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgNTkwICYmIG1vdXNlWCA+IDU2MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPCB0aGlzLm51bVdvcmxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdW5jb21tZW50IGZvciBkZXYgb3B0aW9uc1xuICAgICAgICAgICAgLy8gaWYgKG1vdXNlWCA+IDAgJiYgbW91c2VYIDwgMjAgJiYgbW91c2VZID4gMCAmJiBtb3VzZVkgPCAyMCkge1xuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCAwKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKG1vdXNlWCA+IDAgJiYgbW91c2VYIDwgMjAgJiYgbW91c2VZID4gNDUwICYmIG1vdXNlWSA8IDUwMCkge1xuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCB0aGlzLm51bVdvcmxkcyAqIDUpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAobW91c2VYID4gNzUwICYmIG1vdXNlWCA8IDgwMCAmJiBtb3VzZVkgPiA0NTAgJiYgbW91c2VZIDwgNTAwKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpXG4gICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5udW1Xb3JsZHM7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA1OyBqKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpfS0ke2p9IGJlc3QgdGltZWAsIDApO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2l9LSR7an0gZGVhdGggY291bnRgLCAwKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmNsaWNrTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHRvZ2dsZU11dGVNdXNpYygpIHtcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcblxuICAgICAgICBpZiAodGhpcy5tdXNpY011dGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U291bmRNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRNdXRlZDtcbiAgICB9XG5cbiAgICB0b2dnbGVNdXRlU291bmQoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdW5kTXV0ZWQgPSAhdGhpcy5zb3VuZE11dGVkO1xuICAgIH1cblxuICAgIGdldExldmVsc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbGlja0xpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5nYW1lLnNldEluYWN0aXZlKCk7XG4gICAgICAgIHRoaXMuZ2V0TGV2ZWxzQ29tcGxldGVkKCk7XG4gICAgICAgIHRoaXMuaG9tZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLndvcmxkQkdzW3RoaXMuY3VycmVudFdvcmxkIC0gMV19KWBcbiAgICBcbiAgICAgICAgICAgIC8vdGl0bGVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnT3RoZXJ3b3JsZHMnLCAyMjUsIDkwKVxuXG4gICAgICAgICAgICBcblxuICAgIFxuICAgICAgICAgICAgLy8gd29ybGQgc2VsZWN0ICAgICAgXG4gICAgICAgICAgICAvLyAtLXdvcmxkIG5hbWVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI4cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgV29ybGQgJHt0aGlzLmN1cnJlbnRXb3JsZH1gLCAzMDIsIDI4MClcblxuICAgICAgICAgICAgLy8tLSB3b3JsZCBjeWNsaW5nIGFycm93c1xuICAgICAgICAgICAgLy8tLS0tIHJpZ2h0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI4MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTkwLCAyNjUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjUwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vLS0tLSBsZWZ0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNDAsIDI4MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjEwLCAyNjUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMjUwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy9sZXZlbCBzZWxlY3QgLSAxMzBweCBiZXR3ZWVuIGxldmVsXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBmaWxsQ29sb3IgPSBcInJnYigxMjAsMTIwLDEyMClcIjtcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuY3VycmVudFdvcmxkIC0gMSkgKiA1ICsgaSA8PSB0aGlzLmxldmVsc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSB0aGlzLmxldmVsRmlsbHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoODAsODAsODApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDAgKyBpbmNyZW1lbnQsMzQ1LDcwLDcwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDUgKyBpbmNyZW1lbnQsMzUwLDYwLDYwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwKVwiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoKGkgKyAxKS50b1N0cmluZygpLCAxMjIgKyBpbmNyZW1lbnQsIDM5NylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbXV0ZSBzb3VuZCBidXR0b25cbiAgICAgICAgICAgIGxldCBzb3VuZEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc291bmRNdXRlZCkge1xuICAgICAgICAgICAgICAgIHNvdW5kQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9mZi5wbmcnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdW5kQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9zb3VuZE9uLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShzb3VuZEJ1dHRvbiwgNjYwLCAzMCwgNDAsIDMwKTtcblxuICAgICAgICAgICAgLy8gbXV0ZSBtdXNpYyBidXR0b25cbiAgICAgICAgICAgIGxldCBtdXNpY0J1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubXVzaWNNdXRlZCkge1xuICAgICAgICAgICAgICAgIG11c2ljQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9tdXNpY09mZi5wbmcnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG11c2ljQnV0dG9uLnNyYyA9ICdkaXN0L2ltYWdlcy9tdXNpY09uLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShtdXNpY0J1dHRvbiwgNzMwLCAzMCwgNDAsIDMwKTtcblxuXG4gICAgICAgICAgICAvLyBzdGF0c1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYEJlc3QgVGltZTogJHt0aGlzLmJlc3RUaW1lfWAsIDI0MCwgMTYwKVxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYERlYXRoIENvdW50OiAke3RoaXMuZGVhdGhDb3VudH1gLCAyNjAsIDIwMClcblxuICAgICAgICAgICAgLy8gc2hvdy9oaWRlIGNvbnRyb2xzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImNvbnRyb2xzXCIsIDIwLCAzMClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbnRyb2xzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC43KSdcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1dBU0QgLSBNb3ZlJywgMjkwLCAxNzApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1NwYWNlIC0gSnVtcCcsIDI3MCwgMjEwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdFc2MgLSBQYXVzZScsIDMxMCwgMjUwKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjEycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1VzZWZ1bCBUaXA6IEhvbGRpbmcgdGhlIGFycm93IGtleSBpbiB0aGUgZGlyZWN0aW9uIG9mJywgOTAsIDMxMClcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnYSB3YWxsIHdoaWxlIGNvbGxpZGluZyB3aXRoIGl0IHdpbGwgc2xvdyB5b3VyIGZhbGwnLCAxMTAsIDMzMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG59XG5cbiIsImNvbnN0IEJVRkZFUl9YID0gMTc7XG5jb25zdCBCVUZGRVJfWSA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1goeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeFBvcyArIEJVRkZFUl9YID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeVBvcyArIEJVRkZFUl9ZIC0gNiA+IHRoaXMueSAmJiB5UG9zIC0gQlVGRkVSX1kgKyA2IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1koeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeVBvcyArIEJVRkZFUl9ZID4gdGhpcy55ICYmIHlQb3MgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiB4UG9zICsgQlVGRkVSX1ggLSA2ID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCArIDYgPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZUltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgdXJsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFRleHQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBtZXNzYWdlLCB4LCB5KSB7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLm1haW5DdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy10ZXh0XCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gJ3JnYmEoMCwwLDAsMC42KSdcblxuICAgICAgICB0aGlzLnRleHRUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mYWRlSW5Mb29wID0gbnVsbDtcbiAgICAgICAgdGhpcy5mYWRlT3V0TG9vcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmFkZVRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdvcmRzID0gdGhpcy5tZXNzYWdlLnNwbGl0KFwiIFwiKVxuICAgICAgICBsZXQgbGVuID0gd29yZHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBzZWdtZW50ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ICs9IHdvcmRzW2ldLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAzMCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQucHVzaCh3b3Jkc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gW107XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpXG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodC8yIC0gdGhpcy5zZWdtZW50cy5sZW5ndGggKiA4O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFRleHQuanNcIilcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50ZXh0VGltZW91dClcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mYWRlVGltZW91dClcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZmFkZUluTG9vcClcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZmFkZU91dExvb3ApXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZhZGVJbigpIHtcbiAgICAgICAgdGhpcy50ZXh0VGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5mYWRlSW5Mb29wKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZmFkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZmFkZUluTG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSBjb3VudCAvIDEwMDtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSBjb3VudCAqIDAuNiAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMudGV4dENvbG9yID0gYHJnYmEoMjU1LDI1NSwyNTUsJHt0ZXh0T3BhY2l0eX0pYDtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IGByZ2JhKDAsMCwwLCR7YmdPcGFjaXR5fSlgXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICBmYWRlT3V0KCkge1xuICAgICAgICB0aGlzLnRleHRUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZhZGVPdXRMb29wKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5mYWRlT3V0TG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSAxIC0gKGNvdW50IC8gMTAwKTtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSAwLjYgLSAoY291bnQgKiAwLjYgLyAxMDApO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBgcmdiYSgyNTUsMjU1LDI1NSwke3RleHRPcGFjaXR5fSlgO1xuICAgICAgICAgICAgdGhpcy5iZ0NvbG9yID0gYHJnYmEoMCwwLDAsJHtiZ09wYWNpdHl9KWBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGRhcmtlbiBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDAsMCwwLDAuNilcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlZ21lbnRzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLnNlZ21lbnRzW2ldLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKDQ4MCAtIGxpbmUubGVuZ3RoICogMTYpLzI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChsaW5lLCB0aGlzLnggKyBvZmZzZXQsIHRoaXMueSArIChpICogMzApLCA0ODApO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICB9XG59IiwiXG4vL291dGVyIGFycmF5IGlzIHdvcmxkcywgaW5uZXIgYXJyYXkgaXMgbGV2ZWxEYXRhIG9iamVjdHNcbmV4cG9ydCBjb25zdCBMZXZlbERhdGEgPSBbXG4gICAgLy8gd29ybGQgMVxuICAgIFtcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAxXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIlRoaXMgaXMgdGhlIHN0b3J5IG9mIHNwYWNlbWFuLCBhIHJlc2lkZW50IG9mIHRoZSBjbG91ZCB3b3JsZCB3aG8gaGFzIGEgcGFzc2lvbiBmb3IgYWR2ZW50dXJlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgMlxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFsxMDAsNTRdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDNcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB5OjM4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgeTozNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeToyNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6MTQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNzIwLDQwMF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgNFxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbNTAsMzYwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs3NTAsNDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA1XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMjAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvbGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNTAwLDE4MF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICAgICAgbGV2ZWxUZXh0OiBcIk5vdyB0aGF0IHNwYWNlbWFuIGhhcyBzZWVuIGFsbCB0aGF0IGhpcyB3b3JsZCBoYXMgdG8gb2ZmZXIsIGhlIGJlZ2lucyBoaXMgam91cm5leSB0aHJvdWdoIG90aGVyd29ybGRzXCJcbiAgICAgICAgfVxuXG4gICAgXSxcbiAgICAvLyB3b3JsZCAyXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAyIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY3NSxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzcwMCw0MDBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMSxcbiAgICAgICAgICAgIGxldmVsVGV4dDogXCJTcGFjZW1hbiBmaW5kcyBoaW1zZWxmIGluIGFuIGFyaWQgbW91bnRhaW4gd29ybGQgd2l0aCBzdG9uZSBwbGF0Zm9ybXMuIFNvbWUgb2YgdGhlIHBsYXRmb3JtcyBzZWVtIHF1aXRlIG9sZC4uLlwiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDIgbGV2ZWwgMlxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMjAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ3MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzcwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxOTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMzAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA3MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDM1LFxuICAgICAgICAgICAgICAgICAgICB5OiA3MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyOTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyVGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTkwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyODAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUxMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMjUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMjIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTkwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDI5MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTkwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE5MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQzNSxcbiAgICAgICAgICAgICAgICAgICAgeTogMTMwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDI5MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MTAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJUaW55V2Vha1BsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDogJ2Rpc3QvaW1hZ2VzL3dvcmxkMkxhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAzMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNzAwLDQyMF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xLFxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAyIGxldmVsIDNcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDM3MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDc1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvd29ybGQyVGlueVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0NzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlRpbnlXZWFrUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2VhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDcwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVdlYWtQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3ZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbNjAwLDIwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6ICdBcyB5b3UgZGVsdmUgZGVlcGVyIGludG8gdGhlIHJ1aW5zLCB0aGUgcGxhdGZvcm1zIGFyZSBvbGRlciBhbmQgd2Vha2VyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDIwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy93b3JsZDJMYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMzBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzUwMCwxODBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwyMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MDAsMTgwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgIH1cbiAgICBdXG5dIiwiaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmFjdGFibGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFrUGxhdGZvcm0gZXh0ZW5kcyBJbnRlcmFjdGFibGV7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgsIGR1cmF0aW9uLCBpbWdVcmwsIGdyYXZpdHkpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmlzRmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhbGxTcGVlZCA9IDA7IC8vIHBpeGVscyBwZXIgc2Vjb25kXG4gICAgfVxuXG4gICAgZmFsbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGVkIGZsYWwgZnVuY3Rpb25cIilcbiAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHBsYXRmb3JtRmFsbCk7XG4gICAgICAgIH0sICh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnkgKyAxMDApICogMTAgKyB0aGlzLmR1cmF0aW9uKVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUZhbGwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiB0aGlzLmR1cmF0aW9uLzEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFsbFNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5mYWxsU3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9LCAxMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMClcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMuaW1nVXJsO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9