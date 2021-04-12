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
/* harmony import */ var _assets_idleFrame_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/idleFrame.png */ "./src/assets/idleFrame.png");
/* harmony import */ var _assets_idleFrame2_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/idleFrame2.png */ "./src/assets/idleFrame2.png");
/* harmony import */ var _assets_mainpage_bg_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/mainpage_bg.png */ "./src/assets/mainpage_bg.png");
/* harmony import */ var _assets_tabIcon_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/tabIcon.png */ "./src/assets/tabIcon.png");
/* harmony import */ var _assets_world2BG_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/world2BG.png */ "./src/assets/world2BG.png");
/* harmony import */ var _assets_musicOn_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/musicOn.png */ "./src/assets/musicOn.png");
/* harmony import */ var _assets_musicOff_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/musicOff.png */ "./src/assets/musicOff.png");
/* harmony import */ var _assets_soundOn_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/soundOn.png */ "./src/assets/soundOn.png");
/* harmony import */ var _assets_soundOff_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/soundOff.png */ "./src/assets/soundOff.png");
/* harmony import */ var _assets_world1Music_mp3__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/world1Music.mp3 */ "./src/assets/world1Music.mp3");
/* harmony import */ var _assets_jumpSound_mp3__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/jumpSound.mp3 */ "./src/assets/jumpSound.mp3");
/* harmony import */ var _assets_footstep_mp3__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/footstep.mp3 */ "./src/assets/footstep.mp3");
/* harmony import */ var _assets_menuBlip_mp3__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/menuBlip.mp3 */ "./src/assets/menuBlip.mp3");
/* harmony import */ var _assets_pauseMenu_mp3__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/pauseMenu.mp3 */ "./src/assets/pauseMenu.mp3");
/* harmony import */ var _assets_pause_mp3__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/pause.mp3 */ "./src/assets/pause.mp3");
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
        _this2.interactables.push(new _interactable__WEBPACK_IMPORTED_MODULE_0__["default"](_this2.canvas, _this2.ctx, interactable.x, interactable.y, interactable.height, interactable.width));

        if (interactable.imgUrl.length > 0) {
          _this2.images.push(new _interactableImage__WEBPACK_IMPORTED_MODULE_4__["default"](_this2.canvas, _this2.ctx, interactable.imgUrl, interactable.x, interactable.y - interactable.yOffset, interactable.width, interactable.imgHeight));
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
      var _this3 = this;

      var current = window.localStorage.getItem("levelsCompleted");

      if (current) {
        window.localStorage.setItem("levelsCompleted", parseInt(current) + 1);
      } else {
        window.localStorage.setItem("levelsCompleted", 1);
      }

      console.log(window.localStorage.getItem("levelsCompleted"));

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
      }

      if (mouseX > 0 && mouseX < 20 && mouseY > 0 && mouseY < 20) {
        window.localStorage.setItem("levelsCompleted", 0);

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
    x: 300,
    y: 200,
    height: 20,
    width: 100,
    imgUrl: 'dist/images/world2SmallPlatform.png',
    yOffset: 0,
    imgHeight: 20
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1dvcmxkMURvb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvV29ybGQyRG9vci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb290c3RlcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pZGxlRnJhbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWRsZUZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qdW1wU291bmQubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYWlucGFnZV9iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tZW51QmxpcC5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tdXNpY09uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BhdXNlTWVudS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5MZWZ0RnJhbWUxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcnVuTGVmdEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ydW5SaWdodEZyYW1lMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zbWFsbFBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT2ZmLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kT24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGFiSWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90aW55UGxhdGZvcm0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQxTXVzaWMubXAzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dvcmxkMlRpbnlQbGF0Zm9ybS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Fzc2V0SW1wb3J0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9leGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW50ZXJhY3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ludGVyYWN0YWJsZUltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xldmVsVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9sZXZlbGRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZUZyYW1lIiwiSG9tZVBhZ2UiLCJyZW5kZXIiLCJFeGl0IiwieCIsInkiLCJsZXZlbE51bSIsIndvcmxkTnVtIiwiZXhpdEltYWdlIiwiSW1hZ2UiLCJmcmFtZU51bSIsInhQb3MiLCJ5UG9zIiwicG9ydGFsRnJhbWUiLCJjdXJyZW50SW1hZ2VOdW0iLCJNYXRoIiwiZmxvb3IiLCJzcmMiLCJkcmF3SW1hZ2UiLCJJbnRlcmFjdGFibGUiLCJHYW1lIiwiZ2FtZSIsInJlbmRlckhvbWUiLCJnYW1lTXVzaWMiLCJtdXNpY011dGVkIiwidG9nZ2xlU291bmRNdXRlZCIsImdldFNvdW5kTXV0ZWQiLCJ0b2dnbGVNdXNpY011dGVkIiwibGV2ZWxUaW1lIiwicGF1c2VkIiwibWVudSIsIkdhbWVNZW51Iiwic2V0RGF0YSIsImJpbmQiLCJ0b2dnbGVQYXVzZSIsImNsZWFyUmVjdCIsImxldmVsRGF0YSIsIkxldmVsRGF0YSIsIlZFTE9DSVRZX1giLCJHUkFWSVRZIiwiZ3Jhdml0eSIsIlBsYXllciIsInZlbG9jaXR5IiwiaXNKdW1waW5nIiwiY2FuSnVtcCIsInBsYXllclN0YXJ0UG9zIiwiZmFjZVJpZ2h0IiwibW92aW5nIiwiY29sbGlkaW5nWCIsImNvbGxpZGluZ1kiLCJncm91bmRlZCIsImNvbGxpc2lvbnN1cmZhY2VZIiwicGF1c2VTb3VuZCIsIkF1ZGlvIiwidm9sdW1lIiwianVtcFNvdW5kIiwiZm9vdHN0ZXAiLCJ3b3JsZEJHcyIsInBsYXllclNwcml0ZSIsInBvcnRhbFNwcml0ZSIsImV4aXQiLCJmaW5pc2hQb3MiLCJpbnRlcmFjdGFibGVzIiwiaW1hZ2VzIiwiZm9yRWFjaCIsImludGVyYWN0YWJsZSIsInB1c2giLCJpbWdVcmwiLCJsZW5ndGgiLCJJbnRlcmFjdGFibGVJbWFnZSIsInlPZmZzZXQiLCJpbWdIZWlnaHQiLCJsZXZlbFRleHQiLCJMZXZlbFRleHQiLCJ3aW5kb3ciLCJldmVudCIsImtleSIsInBsYXkiLCJzZXRUaW1lb3V0IiwicGF1c2UiLCJjdXJyZW50VGltZSIsIm5ld0dhbWUiLCJpbWciLCJnYW1lTG9vcCIsImNsZWFySW50ZXJ2YWwiLCJzZXRNZW51RGF0YSIsIm9wZW4iLCJjdXJyZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJmaW5pc2hXb3JsZCIsImNvdW50IiwiZXhpdFgiLCJleGl0WSIsImV4aXRXIiwiZXhpdEgiLCJzZXRJbnRlcnZhbCIsImltYWdlIiwiZHJhd1BsYXllciIsInNraXAiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInBhdXNlR2FtZSIsImZpbGxTdHlsZSIsImdhbWVPdmVyIiwiY3VyckZyYW1lIiwiaXNDb2xsaWRpbmdYIiwiaXNDb2xsaWRpbmdZIiwibGV2ZWxDb21wbGV0ZSIsImZvbnQiLCJmaWxsVGV4dCIsInRvU3RyaW5nIiwibWFpbkNhbnZhcyIsIm1haW5DdHgiLCJ0eXBlIiwidW5wYXVzZSIsInJlbmRlckdhbWUiLCJhY3RpdmUiLCJzZXRHYW1lRGF0YSIsInNvdW5kT2ZmIiwic291bmRPbiIsIm1lbnVCbGlwIiwic2VsZWN0ZWQiLCJzdWJtaXR0ZWQiLCJtYXhOdW0iLCJjbG9zZSIsImNhbnZhc1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1vdXNlWCIsImxlZnQiLCJtb3VzZVkiLCJ0b3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZmlsbCIsImN1cnJlbnRXb3JsZCIsInNvdW5kTXV0ZWQiLCJudW1Xb3JsZHMiLCJtdXNpYyIsInRvZ2dsZU11dGVTb3VuZCIsInRvZ2dsZU11dGVNdXNpYyIsImhvbWUiLCJsZXZlbHNDb21wbGV0ZWQiLCJpIiwiaW5jcmVtZW50IiwiZ2V0TGV2ZWxzQ29tcGxldGVkIiwiZmlsbENvbG9yIiwic291bmRCdXR0b24iLCJtdXNpY0J1dHRvbiIsIkJVRkZFUl9YIiwiQlVGRkVSX1kiLCJ1cmwiLCJtZXNzYWdlIiwidGV4dENvbG9yIiwiYmdDb2xvciIsIndvcmRzIiwic3BsaXQiLCJsZW4iLCJzZWdtZW50cyIsInNlZ21lbnQiLCJmYWRlSW5Mb29wIiwiZmFkZU91dCIsInRleHRPcGFjaXR5IiwiYmdPcGFjaXR5IiwiZmFkZU91dExvb3AiLCJmYWRlSW4iLCJqb2luIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Qb3J0YWxGcmFtZTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvUG9ydGFsRnJhbWU3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1BvcnRhbEZyYW1lOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9Xb3JsZDFEb29yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL1dvcmxkMkRvb3IucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vZm9vdHN0ZXAubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaWRsZUZyYW1lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vanVtcFNvdW5kLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbWFpbnBhZ2VfYmcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYXVkaW8vbWVudUJsaXAubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbXVzaWNPZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbXVzaWNPbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9wYXVzZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9hdWRpby9wYXVzZU1lbnUubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuTGVmdEZyYW1lMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ydW5MZWZ0RnJhbWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3J1bkxlZnRGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcnVuUmlnaHRGcmFtZTMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb3VuZE9mZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb3VuZE9uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RhYkljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvdGlueVBsYXRmb3JtLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2F1ZGlvL3dvcmxkMU11c2ljLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMkJHLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3dvcmxkMkxhcmdlUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvd29ybGQyTWVkaXVtUGxhdGZvcm0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZDJUaW55UGxhdGZvcm0ucG5nXCI7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vc2NyaXB0cy9ob21lcGFnZSdcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1tYWluXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY2FudmFzLndpZHRoID0gODAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gICAgbGV0IGdhbWVGcmFtZSA9IDA7XG5cblxuICAgIG5ldyBIb21lUGFnZShjYW52YXMsIGN0eCkucmVuZGVyKCk7XG5cbiAgICBcblxuXG59KTtcbiIsIi8vaW1hZ2VzIFxuaW1wb3J0IHJ1blJpZ2h0SW1hZ2UxIGZyb20gJy4uL2Fzc2V0cy9ydW5SaWdodEZyYW1lMS5wbmcnXG5pbXBvcnQgcnVuUmlnaHRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1blJpZ2h0RnJhbWUyLnBuZydcbmltcG9ydCBydW5SaWdodEltYWdlMyBmcm9tICcuLi9hc3NldHMvcnVuUmlnaHRGcmFtZTMucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTEucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTIucG5nJ1xuaW1wb3J0IHJ1bkxlZnRJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL3J1bkxlZnRGcmFtZTMucG5nJ1xuXG5pbXBvcnQgUG9ydGFsRnJhbWUxIGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTEucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lMiBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWUyLnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTMgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lMy5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU0IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTQucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lNSBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU1LnBuZydcbmltcG9ydCBQb3J0YWxGcmFtZTYgZnJvbSAnLi4vYXNzZXRzL1BvcnRhbEZyYW1lNi5wbmcnXG5pbXBvcnQgUG9ydGFsRnJhbWU3IGZyb20gJy4uL2Fzc2V0cy9Qb3J0YWxGcmFtZTcucG5nJ1xuaW1wb3J0IFBvcnRhbEZyYW1lOCBmcm9tICcuLi9hc3NldHMvUG9ydGFsRnJhbWU4LnBuZydcblxuaW1wb3J0IFdvcmxkMURvb3IgZnJvbSAnLi4vYXNzZXRzL1dvcmxkMURvb3IucG5nJ1xuaW1wb3J0IFdvcmxkMkRvb3IgZnJvbSAnLi4vYXNzZXRzL1dvcmxkMkRvb3IucG5nJ1xuXG5cbmltcG9ydCBsYXJnZVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy9sYXJnZVBsYXRmb3JtLnBuZydcbmltcG9ydCBtZWRpdW1QbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvbWVkaXVtUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHNtYWxsUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3NtYWxsUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHRpbnlQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvdGlueVBsYXRmb3JtLnBuZydcblxuaW1wb3J0IHdvcmxkMkxhcmdlUGxhdGZvcm0gZnJvbSAnLi4vYXNzZXRzL3dvcmxkMkxhcmdlUGxhdGZvcm0ucG5nJ1xuaW1wb3J0IHdvcmxkMk1lZGl1bVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJNZWRpdW1QbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyU21hbGxQbGF0Zm9ybSBmcm9tICcuLi9hc3NldHMvd29ybGQyU21hbGxQbGF0Zm9ybS5wbmcnXG5pbXBvcnQgd29ybGQyVGlueVBsYXRmb3JtIGZyb20gJy4uL2Fzc2V0cy93b3JsZDJUaW55UGxhdGZvcm0ucG5nJ1xuXG5pbXBvcnQgaWRsZUZyYW1lIGZyb20gJy4uL2Fzc2V0cy9pZGxlRnJhbWUucG5nJ1xuaW1wb3J0IGlkbGVGcmFtZTIgZnJvbSAnLi4vYXNzZXRzL2lkbGVGcmFtZTIucG5nJ1xuXG5pbXBvcnQgQkcgZnJvbSAnLi4vYXNzZXRzL21haW5wYWdlX2JnLnBuZydcbmltcG9ydCB0YWJJY29uIGZyb20gJy4uL2Fzc2V0cy90YWJJY29uLnBuZydcbmltcG9ydCB3b3JsZDJCRyBmcm9tICcuLi9hc3NldHMvd29ybGQyQkcucG5nJ1xuaW1wb3J0IG11c2ljT24gZnJvbSAnLi4vYXNzZXRzL211c2ljT24ucG5nJ1xuaW1wb3J0IG11c2ljT2ZmIGZyb20gJy4uL2Fzc2V0cy9tdXNpY09mZi5wbmcnXG5pbXBvcnQgc291bmRPbiBmcm9tICcuLi9hc3NldHMvc291bmRPbi5wbmcnXG5pbXBvcnQgc291bmRPZmYgZnJvbSAnLi4vYXNzZXRzL3NvdW5kT2ZmLnBuZydcblxuXG4vL2F1ZGlvXG5pbXBvcnQgV29ybGQxTXVzaWMgZnJvbSAnLi4vYXNzZXRzL3dvcmxkMU11c2ljLm1wMydcbmltcG9ydCBqdW1wU291bmQgZnJvbSAnLi4vYXNzZXRzL2p1bXBTb3VuZC5tcDMnXG5pbXBvcnQgZm9vdHN0ZXAgZnJvbSAnLi4vYXNzZXRzL2Zvb3RzdGVwLm1wMydcbmltcG9ydCBtZW51QmxpcCBmcm9tICcuLi9hc3NldHMvbWVudUJsaXAubXAzJ1xuaW1wb3J0IHBhdXNlTWVudSBmcm9tICcuLi9hc3NldHMvcGF1c2VNZW51Lm1wMydcbmltcG9ydCBwYXVzZSBmcm9tICcuLi9hc3NldHMvcGF1c2UubXAzJyIsImltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSBcIi4vaW50ZXJhY3RhYmxlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhpdCBleHRlbmRzIEludGVyYWN0YWJsZXtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgbGV2ZWxOdW0sIHdvcmxkTnVtKSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG5cblxuICAgICAgICB0aGlzLmV4aXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcihmcmFtZU51bSwgeFBvcyA9IHRoaXMueCwgeVBvcyA9IHRoaXMueSwgd2lkdGggPSA2MCwgaGVpZ2h0ID0gODApIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxOdW0gPT0gNSkge1xuICAgICAgICAgICAgbGV0IHBvcnRhbEZyYW1lID0gZnJhbWVOdW0gJSAxMjA7XG4gICAgICAgICAgICBsZXQgY3VycmVudEltYWdlTnVtID0gTWF0aC5mbG9vcihwb3J0YWxGcmFtZS8xNSkgKyAxO1xuICAgICAgICAgICAgdGhpcy5leGl0SW1hZ2Uuc3JjID0gYGRpc3QvaW1hZ2VzL1BvcnRhbEZyYW1lJHtjdXJyZW50SW1hZ2VOdW19LnBuZ2BcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZXhpdEltYWdlLCB4UG9zLCB5UG9zLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leGl0SW1hZ2Uuc3JjID0gYGRpc3QvaW1hZ2VzL1dvcmxkJHt0aGlzLndvcmxkTnVtfURvb3IucG5nYFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZXhpdEltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSAnLi9pbnRlcmFjdGFibGUnXG5pbXBvcnQgR2FtZU1lbnUgZnJvbSAnLi9nYW1lbWVudSdcbmltcG9ydCBFeGl0IGZyb20gJy4vZXhpdCdcblxuaW1wb3J0IHsgTGV2ZWxEYXRhIH0gZnJvbSAnLi9sZXZlbGRhdGEnXG5pbXBvcnQgSW50ZXJhY3RhYmxlSW1hZ2UgZnJvbSAnLi9pbnRlcmFjdGFibGVJbWFnZSdcbmltcG9ydCBMZXZlbFRleHQgZnJvbSAnLi9sZXZlbFRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlbmRlckhvbWUgPSByZW5kZXJIb21lO1xuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgR2FtZU1lbnUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSwgdGhpcy5zZXREYXRhLmJpbmQodGhpcyksIHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy5yZW5kZXJIb21lLCB0aGlzLmdhbWVNdXNpYywgdGhpcy5tdXNpY011dGVkLCB0aGlzLnRvZ2dsZVNvdW5kTXV0ZWQsIHRoaXMuZ2V0U291bmRNdXRlZCwgdGhpcy50b2dnbGVTb3VuZE11dGVkKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGdldCBzZWVkIGRhdGEgZm9yIGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBMZXZlbERhdGFbdGhpcy53b3JsZE51bSAtIDFdW3RoaXMubGV2ZWxOdW0gLSAxXVxuXG4gICAgICAgIHRoaXMuVkVMT0NJVFlfWCA9IDM7XG4gICAgICAgIHRoaXMuR1JBVklUWSA9IHRoaXMubGV2ZWxEYXRhLmdyYXZpdHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLlBsYXllciA9IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiBbMCwwXSxcbiAgICAgICAgICAgIGlzSnVtcGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYW5KdW1wOiBmYWxzZSxcbiAgICAgICAgICAgIHg6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzBdLFxuICAgICAgICAgICAgeTogdGhpcy5sZXZlbERhdGEucGxheWVyU3RhcnRQb3NbMV0sXG4gICAgICAgICAgICB3aWR0aDogMzQsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZnJhbWVOdW06IDAsXG4gICAgICAgICAgICBmYWNlUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaWRpbmdZOiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnN1cmZhY2VZOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhdXNlU291bmQgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vcGF1c2UubXAzJylcbiAgICAgICAgdGhpcy5wYXVzZVNvdW5kLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICAvLyBwbGF5ZXIgbW92ZW1lbnQgc291bmRzXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL2p1bXBTb3VuZC5tcDMnKVxuICAgICAgICB0aGlzLmp1bXBTb3VuZC52b2x1bWUgPSAwLjY7XG4gICAgICAgIHRoaXMuZm9vdHN0ZXAgPSBuZXcgQXVkaW8oJ2Rpc3QvYXVkaW8vZm9vdHN0ZXAubXAzJylcbiAgICAgICAgdGhpcy5mb290c3RlcC52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHRoaXMucG9ydGFsRnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnBvcnRhbFNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIC8vIHNldCBleGl0IGxvY2F0aW9uXG4gICAgICAgIHRoaXMuZXhpdCA9IG5ldyBFeGl0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzBdLHRoaXMubGV2ZWxEYXRhLmZpbmlzaFBvc1sxXSw3MCw3MCwgdGhpcy5sZXZlbE51bSwgdGhpcy53b3JsZE51bSk7XG5cbiAgICAgICAgLy8gc2V0IGludGVyYWN0YWJsZXMgZm9yIHRoaXMgc3RhZ2UgZnJvbSBzZWVkIGRhdGFcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhLmludGVyYWN0YWJsZXMuZm9yRWFjaChpbnRlcmFjdGFibGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLnB1c2gobmV3IEludGVyYWN0YWJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS54LCBpbnRlcmFjdGFibGUueSwgaW50ZXJhY3RhYmxlLmhlaWdodCwgaW50ZXJhY3RhYmxlLndpZHRoKSk7XG4gICAgICAgICAgICBpZiAoaW50ZXJhY3RhYmxlLmltZ1VybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlSW1hZ2UodGhpcy5jYW52YXMsIHRoaXMuY3R4LCBpbnRlcmFjdGFibGUuaW1nVXJsLGludGVyYWN0YWJsZS54LGludGVyYWN0YWJsZS55IC0gaW50ZXJhY3RhYmxlLnlPZmZzZXQsaW50ZXJhY3RhYmxlLndpZHRoLGludGVyYWN0YWJsZS5pbWdIZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YS5sZXZlbFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gbmV3IExldmVsVGV4dCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCwgMTYwLDIwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IHRoaXMuVkVMT0NJVFlfWDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmZhY2VSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVswXSA9IC10aGlzLlZFTE9DSVRZX1g7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5mYWNlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJyAmJiB0aGlzLlBsYXllci5ncm91bmRlZCAmJiAhdGhpcy5QbGF5ZXIuaXNKdW1waW5nICkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIuaXNKdW1waW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA2MClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlU291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2VTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcgJykge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmlzSnVtcGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZXRHYW1lKG5ld0dhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3R2FtZTtcbiAgICB9XG5cbiAgICBzZXREYXRhKHdvcmxkTnVtLCBsZXZlbE51bSwgZ2FtZSkge1xuICAgICAgICB0aGlzLndvcmxkTnVtID0gd29ybGROdW07XG4gICAgICAgIHRoaXMubGV2ZWxOdW0gPSBsZXZlbE51bTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbFRpbWUgPSA2MDAwO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBnZXQgc2VlZCBkYXRhIGZvciBjdXJyZW50IGxldmVsXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gTGV2ZWxEYXRhW3RoaXMud29ybGROdW0gLSAxXVt0aGlzLmxldmVsTnVtIC0gMV1cblxuICAgICAgICB0aGlzLlZFTE9DSVRZX1ggPSAzO1xuICAgICAgICB0aGlzLkdSQVZJVFkgPSB0aGlzLmxldmVsRGF0YS5ncmF2aXR5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eTogWzAsMF0sXG4gICAgICAgICAgICBpc0p1bXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY2FuSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB4OiB0aGlzLmxldmVsRGF0YS5wbGF5ZXJTdGFydFBvc1swXSxcbiAgICAgICAgICAgIHk6IHRoaXMubGV2ZWxEYXRhLnBsYXllclN0YXJ0UG9zWzFdLFxuICAgICAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGZyYW1lTnVtOiAwLFxuICAgICAgICAgICAgZmFjZVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxpZGluZ1g6IGZhbHNlLFxuICAgICAgICAgICAgY29sbGlkaW5nWTogZmFsc2UsXG4gICAgICAgICAgICBncm91bmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xsaXNpb25zdXJmYWNlWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcmFtZSA9IDA7XG5cbiAgICAgICAgLy8gc2V0IGV4aXQgbG9jYXRpb25cbiAgICAgICAgdGhpcy5leGl0ID0gbmV3IEV4aXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmxldmVsRGF0YS5maW5pc2hQb3NbMF0sdGhpcy5sZXZlbERhdGEuZmluaXNoUG9zWzFdLDUwLDUwLCB0aGlzLmxldmVsTnVtLCB0aGlzLndvcmxkTnVtKTtcblxuICAgICAgICAvLyBzZXQgaW50ZXJhY3RhYmxlcyBmb3IgdGhpcyBzdGFnZSBmcm9tIHNlZWQgZGF0YVxuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgaW50ZXJhY3RhYmxlLngsIGludGVyYWN0YWJsZS55LCBpbnRlcmFjdGFibGUuaGVpZ2h0LCBpbnRlcmFjdGFibGUud2lkdGgpKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaW1nVXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVJbWFnZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIGludGVyYWN0YWJsZS5pbWdVcmwsaW50ZXJhY3RhYmxlLngsaW50ZXJhY3RhYmxlLnkgLSBpbnRlcmFjdGFibGUueU9mZnNldCxpbnRlcmFjdGFibGUud2lkdGgsaW50ZXJhY3RhYmxlLmltZ0hlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhLmxldmVsVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQgPSBuZXcgTGV2ZWxUZXh0KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5sZXZlbERhdGEubGV2ZWxUZXh0LCAxNjAsMjAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgdG9nZ2xlUGF1c2UoKXtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5wYXVzZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1BsYXllcihpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBnYW1lT3ZlcihnYW1lTG9vcCkge1xuICAgICAgICB0aGlzLmludGVyYWN0YWJsZXMgPSBbXTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lTG9vcCk7XG4gICAgICAgIHRoaXMubWVudS5zZXRNZW51RGF0YShcImZhaWxlZFwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cblxuICAgIGxldmVsQ29tcGxldGUoZ2FtZUxvb3ApIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIiwgcGFyc2VJbnQoY3VycmVudCkgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIikpXG4gICAgICAgIGlmICh0aGlzLmxldmVsTnVtID09IDUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmluaXNoV29ybGQpXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiY29tcGxldGVcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgICAgICAgICAgfSwgNDAwMClcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBsZXQgZXhpdFggPSA1MDA7XG4gICAgICAgICAgICBsZXQgZXhpdFkgPSAxODA7XG4gICAgICAgICAgICBsZXQgZXhpdFcgPSA2MDtcbiAgICAgICAgICAgIGxldCBleGl0SCA9IDgwO1xuICAgICAgICAgICAgbGV0IGZpbmlzaFdvcmxkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGRyYXcgZXhpdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICBleGl0WCArPSAwLjY7XG4gICAgICAgICAgICAgICAgICAgIGV4aXRZIC09IDAuNDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgZXhpdFgsIGV4aXRZLCBleGl0VywgZXhpdEgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpdFggLT0gMC4zO1xuICAgICAgICAgICAgICAgICAgICBleGl0WSAtPSAwLjQ7XG4gICAgICAgICAgICAgICAgICAgIGV4aXRXICs9IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgZXhpdEggKz0gMC44O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKGNvdW50LCBleGl0WCwgZXhpdFksIGV4aXRXLCBleGl0SCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGl0LnJlbmRlcihjb3VudCwgNTMwLCAxMDAsIDEyMCwgMTYwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgLy8gZHJhdyBpbWFnZXNcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGludGVyYWN0YWJsZXMgXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzLmZvckVhY2goaW50ZXJhY3RhYmxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50IDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIDQwID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL2lkbGVGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDIyNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgLT0gMjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyNTApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55IC09IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAyNzUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55IC09IDAuNTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID49IDIwMCAmJiBjb3VudCA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci54ICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSAyMDAgJiYgY291bnQgPCAzMjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ICs9IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci53aWR0aCAtPSAwLjM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmhlaWdodCAtPSAwLjU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnggKz0gMC4xNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueSArPSAwLjI1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIodGhpcy5wbGF5ZXJTcHJpdGUsIHRoaXMuUGxheWVyLngsIHRoaXMuUGxheWVyLnksIHRoaXMuUGxheWVyLndpZHRoLCB0aGlzLlBsYXllci5oZWlnaHQpXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVzID0gW107XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICAgICAgdGhpcy5tZW51LnNldE1lbnVEYXRhKFwiY29tcGxldGVcIix0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBhdXNlR2FtZShnYW1lTG9vcCkge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKVxuICAgICAgICB0aGlzLm1lbnUuc2V0TWVudURhdGEoXCJwYXVzZVwiLHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0pO1xuICAgICAgICB0aGlzLm1lbnUub3BlbigpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoc2tpcCA9IGZhbHNlKXtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxUZXh0ICE9IFwiXCIgJiYgIXNraXApIHsgICAgXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5vcGVuKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy53b3JsZEJHc1t0aGlzLndvcmxkTnVtIC0gMV19KWBcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMClcIlxuXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIueSA+IDUwMCB8fCB0aGlzLmxldmVsVGltZSA8PSAxMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGdhbWVMb29wKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gZHJhdyBleGl0XG4gICAgICAgICAgICB0aGlzLmV4aXQucmVuZGVyKHRoaXMuZnJhbWVOdW0pO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2UucmVuZGVyKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBkcmF3IHBsYXllclxuICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKHRoaXMucGxheWVyU3ByaXRlLCB0aGlzLlBsYXllci54LCB0aGlzLlBsYXllci55LCB0aGlzLlBsYXllci53aWR0aCwgdGhpcy5QbGF5ZXIuaGVpZ2h0KVxuXG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBwbGF5ZXIgZnJhbWUgaW1hZ2VcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5tb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kTXV0ZWQoKSkgdGhpcy5mb290c3RlcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyRnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuUGxheWVyLmZyYW1lTnVtIC8gMTApXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlBsYXllci5mYWNlUmlnaHQpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyckZyYW1lID09IDAgfHwgY3VyckZyYW1lID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUxLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJGcmFtZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9ydW5SaWdodEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuUmlnaHRGcmFtZTMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyRnJhbWUgPT0gMCB8fCBjdXJyRnJhbWUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyRnJhbWUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcnVuTGVmdEZyYW1lMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuZmFjZVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1blJpZ2h0RnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3J1bkxlZnRGcmFtZTIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVOdW0gJSA0MCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiZGlzdC9pbWFnZXMvaWRsZUZyYW1lLnBuZ1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCJkaXN0L2ltYWdlcy9pZGxlRnJhbWUyLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuXG4gICAgXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIG9ic3RhY2xlIGNvbGxpc2lvblxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY29sbGlkaW5nWSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlcy5mb3JFYWNoKGludGVyYWN0YWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLnJlbmRlcigpO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGFibGUuaXNDb2xsaWRpbmdYKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5jb2xsaWRpbmdYID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0YWJsZS5pc0NvbGxpZGluZ1kodGhpcy5QbGF5ZXIueCArIHRoaXMuUGxheWVyLndpZHRoLzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVswXSwgdGhpcy5QbGF5ZXIueSArIHRoaXMuUGxheWVyLmhlaWdodC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpZGluZ1kgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllci5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLmNvbGxpc2lvbnN1cmZhY2VZID0gaW50ZXJhY3RhYmxlLnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gaGFuZGxlIHBsYXllciBsZXZlbCBmaW5pc2ggXG4gICAgICAgICAgICBpZiAodGhpcy5leGl0LmlzQ29sbGlkaW5nWCh0aGlzLlBsYXllci54ICsgdGhpcy5QbGF5ZXIud2lkdGgvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzBdLCB0aGlzLlBsYXllci55ICsgdGhpcy5QbGF5ZXIuaGVpZ2h0LzIgKyB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQuaXNDb2xsaWRpbmdZKHRoaXMuUGxheWVyLnggKyB0aGlzLlBsYXllci53aWR0aC8yICsgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMF0sIHRoaXMuUGxheWVyLnkgKyB0aGlzLlBsYXllci5oZWlnaHQvMiArIHRoaXMuUGxheWVyLnZlbG9jaXR5WzFdKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb21wbGV0ZShnYW1lTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBoYW5kbGUgcGxheWVyIG1vdmVtZW50IGJhc2Ugb24gcGxheWVyIGNvbGxpc2lvblxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIueCArPSB0aGlzLlBsYXllci52ZWxvY2l0eVswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLlBsYXllci5jb2xsaWRpbmdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07ICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci55ID0gdGhpcy5QbGF5ZXIuY29sbGlzaW9uc3VyZmFjZVkgLSA1OTtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllci52ZWxvY2l0eVsxXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXIuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV0gLT0gdGhpcy5HUkFWSVRZO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyLnkgKz0gdGhpcy5QbGF5ZXIudmVsb2NpdHlbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCAnUHJlc3MgU3RhcnQgMlAnXCJcblxuICAgICAgICAgICAgLy9sZXZlbCBpbmZvIFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7dGhpcy53b3JsZE51bX0tJHt0aGlzLmxldmVsTnVtfWAsIDM2NCwgNTApO1xuXG4gICAgICAgICAgICAvLyB0aW1lclxuICAgICAgICAgICAgdGhpcy5sZXZlbFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KE1hdGguZmxvb3IodGhpcy5sZXZlbFRpbWUvMTAwKS50b1N0cmluZygpLCA3MDAsIDUwKTtcbiAgICBcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuZnJhbWVOdW0gPSAodGhpcy5QbGF5ZXIuZnJhbWVOdW0gKyAxKSAlIDQwXG4gICAgICAgICAgICB0aGlzLnBvcnRhbEZyYW1lID0gKHRoaXMucG9ydGFsRnJhbWUgKyAxKSAlIDgwO1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lTnVtKys7XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgICAgIFxuICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluQ2FudmFzLCBtYWluQ3R4LCB0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0sIGdhbWUsIHNldERhdGEsIHVucGF1c2UsIHJlbmRlckdhbWUsIHJlbmRlckhvbWUsIGdhbWVNdXNpYywgbXVzaWNNdXRlZCwgdG9nZ2xlU291bmRNdXRlZCwgZ2V0U291bmRNdXRlZCwgdG9nZ2xlTXVzaWNNdXRlZCl7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IG1haW5DYW52YXM7XG4gICAgICAgIHRoaXMubWFpbkN0eCA9IG1haW5DdHg7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLW1lbnVcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMud29ybGROdW0gPSB3b3JsZE51bTtcbiAgICAgICAgdGhpcy5sZXZlbE51bSA9IGxldmVsTnVtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnNldEdhbWVEYXRhID0gc2V0RGF0YTtcbiAgICAgICAgdGhpcy51bnBhdXNlID0gdW5wYXVzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJHYW1lID0gcmVuZGVyR2FtZTtcbiAgICAgICAgdGhpcy5yZW5kZXJIb21lID0gcmVuZGVySG9tZTtcblxuICAgICAgICB0aGlzLmdhbWVNdXNpYyA9IGdhbWVNdXNpYztcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gbXVzaWNNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkID0gdG9nZ2xlU291bmRNdXRlZDtcbiAgICAgICAgdGhpcy5nZXRTb3VuZE11dGVkID0gZ2V0U291bmRNdXRlZDtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpY011dGVkID0gdG9nZ2xlTXVzaWNNdXRlZDtcblxuICAgICAgICB0aGlzLnNvdW5kT2ZmID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc291bmRPZmYuc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT2ZmLnBuZyc7XG4gICAgICAgIHRoaXMuc291bmRPbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNvdW5kT24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT24ucG5nJztcblxuICAgICAgICB0aGlzLm1lbnVCbGlwID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL21lbnVCbGlwLm1wMycpO1xuICAgICAgICB0aGlzLnBhdXNlID0gbmV3IEF1ZGlvKCdkaXN0L2F1ZGlvL3BhdXNlLm1wMycpXG4gICAgICAgIHRoaXMubWVudUJsaXAudm9sdW1lID0gMC4xO1xuICAgICAgICB0aGlzLnBhdXNlLnZvbHVtZSA9IDAuMjtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gMTtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICd3Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLm1lbnVCbGlwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAncycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heE51bSA9IHRoaXMudHlwZSA9PSBcInBhdXNlXCIgPyAzIDogMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT0gbWF4TnVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRNdXRlZCgpKSB0aGlzLm1lbnVCbGlwLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2UucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXVzZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRTb3VuZE11dGVkKCkpIHRoaXMucGF1c2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJFc2NhcGVcIiAmJiB0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgY2FudmFzUG9zID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNTQwICYmIG1vdXNlWCA8IDU3MCAmJiBtb3VzZVkgPiAxMzAgJiYgbW91c2VZIDwgMTUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTb3VuZE11dGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRNZW51RGF0YSh0eXBlLCB3b3JsZE51bSwgbGV2ZWxOdW0pIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy53b3JsZE51bSA9IHdvcmxkTnVtO1xuICAgICAgICB0aGlzLmxldmVsTnVtID0gbGV2ZWxOdW07XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBjb25zdCBtZW51ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5tYWluQ2FudmFzLCB0aGlzLm1haW5DdHgsIHRoaXMud29ybGROdW0sIHRoaXMubGV2ZWxOdW0sIHRoaXMuZ2FtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy53b3JsZE51bSwgdGhpcy5sZXZlbE51bSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbE51bSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtICsgMSwgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtICsgMSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLndvcmxkTnVtLCB0aGlzLmxldmVsTnVtLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1lbnUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMjAwLDEwMCw0MDAsMjAwKTtcblxuICAgICAgICAvLyBzZXQgbWVudSBoZWFkZXIgZm9udFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuXG4gICAgICAgIC8vIGRyYXcgbWVudSBoZWFkZXJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImZhaWxlZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsMCwwKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMZXZlbCBGYWlsZWRcIiwgMjYwLCAxNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwyNTUsMClcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTGV2ZWwgQ29tcGxldGUhXCIsIDIyNCwgMTUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCw4NywyNTUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlXCIsIDM0NCwgMTUwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXV0ZSBidXR0b24gc2V0dXBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zb3VuZE9mZiwgNTQwLCAxMzAsIDMwLCAyMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNvdW5kT24sIDU0MCwgMTMwLCAzMCwgMjApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vIHNldCBtZW51IG9wdGlvbiBmb250XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgIFxuICAgICAgICAvLyBkcmF3IG1lbnUgb3B0aW9ucyBhbmQgYXJyb3dzXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJSZXRyeVwiLCAzNjAsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMyMCwgMjUwKVxuXG4gICAgICAgICAgICAvLyBkcmF3IHNlbGVjdGVkIGFycm93cyBhcm91bmQgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygzMDAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDMyMCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMzAwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUyMCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTAwLCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MjAsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjYwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyODAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI2MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk5leHQgTGV2ZWxcIiwgMzAwLCAyMDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk1haW4gTWVudVwiLCAzMTAsIDI1MClcblxuICAgICAgICAgICAgLy8gZHJhdyBzZWxlY3RlZCBhcnJvd3MgYXJvdW5kIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IDEpIHtcbiAgICAgICAgICAgICAgICAvL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMjQwLCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNjAsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU0MCwgMTkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTYwLCAxODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI1MCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjcwLCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNTAsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTUwLCAyNTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MzAsIDI0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU1MCwgMjMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgyMDAsMzAwLDQwMCw0MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlJlc3VtZVwiLCAzNDQsIDIwMClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUmVzdGFydFwiLCAzMzQsIDI1MClcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTWFpbiBNZW51XCIsIDMxNCwgMzAwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDI3NCwgMjAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjk0LCAxOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbygyNzQsIDE4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTM0LCAyMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1MTQsIDE5MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDUzNCwgMTgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2JmMDBmZic7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNjQsIDI1MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI4NCwgMjQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjY0LCAyMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU0NCwgMjUwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTI0LCAyNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NDQsIDIzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyMzQsIDMwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI1NCwgMjkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjM0LCAyODApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjYmYwMGZmJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDU3NCwgMzAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTU0LCAyOTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyg1NzQsIDI4MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNiZjAwZmYnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IGFzc2V0SW1wb3J0cyBmcm9tICcuL2Fzc2V0SW1wb3J0cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSAxO1xuICAgICAgICB0aGlzLnNvdW5kTXV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm11c2ljTXV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm51bVdvcmxkcyA9IDI7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gIG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMSwgMSwgdGhpcy5nYW1lLCB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLCB0aGlzLm11c2ljLCB0aGlzLnNvdW5kTXV0ZWQsIHRoaXMudG9nZ2xlTXV0ZVNvdW5kLmJpbmQodGhpcyksIHRoaXMuZ2V0U291bmRNdXRlZC5iaW5kKHRoaXMpLCB0aGlzLnRvZ2dsZU11dGVNdXNpYy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ob21lID0gbnVsbDtcblxuICAgICAgICB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIHRoaXMubXVzaWMuc3JjID0gJ2Rpc3QvYXVkaW8vd29ybGQxTXVzaWMubXAzJztcbiAgICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSAwLjY7XG5cbiAgICAgICAgdGhpcy53b3JsZEJHcyA9IFtcbiAgICAgICAgICAgICdkaXN0L2ltYWdlcy9tYWlucGFnZV9iZy5wbmcnLFxuICAgICAgICAgICAgJ2Rpc3QvaW1hZ2VzL3dvcmxkMkJHLnBuZycsXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxzQ29tcGxldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzQ29tcGxldGVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGxldCBjYW52YXNQb3MgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgbW91c2VYID0gZXZlbnQueCAtIGNhbnZhc1Bvcy5sZWZ0O1xuICAgICAgICAgICAgbGV0IG1vdXNlWSA9IGV2ZW50LnkgLSBjYW52YXNQb3MudG9wO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmNyZW1lbnQgPSBpICogMTMwO1xuICAgICAgICAgICAgICAgIGlmIChtb3VzZVggPiAxMDAgKyBpbmNyZW1lbnQgJiYgbW91c2VYIDwgMTY1ICsgaW5jcmVtZW50ICYmIG1vdXNlWSA+IDM0NSAmJiBtb3VzZVkgPCA0MTUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxzQ29tcGxldGVkID49ICh0aGlzLmN1cnJlbnRXb3JsZCAtIDEpICogNSArIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ob21lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNldERhdGEodGhpcy5jdXJyZW50V29ybGQsIGkgKyAxLCB0aGlzLmdhbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobW91c2VYID4gNzMwICYmIG1vdXNlWCA8IDc3MCAmJiBtb3VzZVkgPiAzMCAmJiBtb3VzZVkgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZU11c2ljKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb3VzZVggPiA2NjAgJiYgbW91c2VYIDwgNzAwICYmIG1vdXNlWSA+IDMwICYmIG1vdXNlWSA8IDYwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlU291bmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWSA8IDI3MCAmJiBtb3VzZVkgPiAyNDApIHtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgMjQwICYmIG1vdXNlWCA+IDIxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JsZC0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQgPSB0aGlzLm51bVdvcmxkcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobW91c2VYIDwgNTkwICYmIG1vdXNlWCA+IDU2MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50V29ybGQgPCB0aGlzLm51bVdvcmxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50V29ybGQrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdvcmxkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1vdXNlWCA+IDAgJiYgbW91c2VYIDwgMjAgJiYgbW91c2VZID4gMCAmJiBtb3VzZVkgPCAyMCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsc0NvbXBsZXRlZFwiLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZU11dGVNdXNpYygpIHtcbiAgICAgICAgdGhpcy5tdXNpY011dGVkID0gIXRoaXMubXVzaWNNdXRlZDtcblxuICAgICAgICBpZiAodGhpcy5tdXNpY011dGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U291bmRNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRNdXRlZDtcbiAgICB9XG5cbiAgICB0b2dnbGVNdXRlU291bmQoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvdW5kTXV0ZWQgPSAhdGhpcy5zb3VuZE11dGVkO1xuICAgIH1cblxuICAgIGdldExldmVsc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5sZXZlbHNDb21wbGV0ZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbHNDb21wbGV0ZWRcIik7XG4gICAgICAgIGlmICh0aGlzLmxldmVsc0NvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsc0NvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZ2V0TGV2ZWxzQ29tcGxldGVkKCk7XG4gICAgICAgIHRoaXMuaG9tZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLndvcmxkQkdzW3RoaXMuY3VycmVudFdvcmxkIC0gMV19KWBcbiAgICBcbiAgICAgICAgICAgIC8vdGl0bGVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMycHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnT3RoZXJ3b3JsZHMnLCAyMjUsIDkwKVxuXG4gICAgICAgICAgICAvL2NvbnRyb2xzXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNHB4ICdQcmVzcyBTdGFydCAyUCdcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1dBU0QgLSBNb3ZlJywgMzIzLCAxNDApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnU3BhY2UgLSBKdW1wJywgMzA5LCAxNzApXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnRXNjIC0gUGF1c2UnLCAzMzcsIDIwMClcblxuICAgIFxuICAgICAgICAgICAgLy8gd29ybGQgc2VsZWN0ICAgICAgXG4gICAgICAgICAgICAvLyAtLXdvcmxkIG5hbWVcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI4cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgV29ybGQgJHt0aGlzLmN1cnJlbnRXb3JsZH1gLCAzMDIsIDI3MClcblxuICAgICAgICAgICAgLy8tLSB3b3JsZCBjeWNsaW5nIGFycm93c1xuICAgICAgICAgICAgLy8tLS0tIHJpZ2h0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1NjAsIDI3MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oNTkwLCAyNTUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDU2MCwgMjQwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vLS0tLSBsZWZ0IGFycm93XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygyNDAsIDI3MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oMjEwLCAyNTUpO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKDI0MCwgMjQwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzQ0NDQ0NCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy9sZXZlbCBzZWxlY3QgLSAxMzBweCBiZXR3ZWVuIGxldmVsXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBmaWxsQ29sb3IgPSBcInJnYigxMjAsMTIwLDEyMClcIjtcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuY3VycmVudFdvcmxkIC0gMSkgKiA1ICsgaSA8PSB0aGlzLmxldmVsc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBcInJnYigyNDAsMjQwLDI0MClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGluY3JlbWVudCA9IGkgKiAxMzA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYig4MCw4MCw4MClcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwMCArIGluY3JlbWVudCwzNDUsNzAsNzApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwNSArIGluY3JlbWVudCwzNTAsNjAsNjApXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoMCwwLDApXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgoaSArIDEpLnRvU3RyaW5nKCksIDEyMCArIGluY3JlbWVudCwgMzk3KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtdXRlIHNvdW5kIGJ1dHRvblxuICAgICAgICAgICAgbGV0IHNvdW5kQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VuZE11dGVkKSB7XG4gICAgICAgICAgICAgICAgc291bmRCdXR0b24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT2ZmLnBuZydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291bmRCdXR0b24uc3JjID0gJ2Rpc3QvaW1hZ2VzL3NvdW5kT24ucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNvdW5kQnV0dG9uLCA2NjAsIDMwLCA0MCwgMzApO1xuXG4gICAgICAgICAgICAvL211dGUgbXVzaWMgYnV0dG9uXG4gICAgICAgICAgICBsZXQgbXVzaWNCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljTXV0ZWQpIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPZmYucG5nJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtdXNpY0J1dHRvbi5zcmMgPSAnZGlzdC9pbWFnZXMvbXVzaWNPbi5wbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobXVzaWNCdXR0b24sIDczMCwgMzAsIDQwLCAzMCk7XG5cbiAgICAgICAgfSwxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG59XG5cbiIsImNvbnN0IEJVRkZFUl9YID0gMTc7XG5jb25zdCBCVUZGRVJfWSA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1goeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeFBvcyArIEJVRkZFUl9YID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeVBvcyArIEJVRkZFUl9ZIC0gNiA+IHRoaXMueSAmJiB5UG9zIC0gQlVGRkVSX1kgKyA2IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpZGluZ1koeFBvcywgeVBvcykge1xuICAgICAgICBpZiAoeVBvcyArIEJVRkZFUl9ZID4gdGhpcy55ICYmIHlQb3MgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiB4UG9zICsgQlVGRkVSX1ggLSA2ID4gdGhpcy54ICYmIHhQb3MgLSBCVUZGRVJfWCArIDYgPCB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0YWJsZUltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgdXJsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFRleHQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBtZXNzYWdlLCB4LCB5KSB7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLm1haW5DdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy10ZXh0XCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gJ3JnYmEoMCwwLDAsMC42KSdcblxuICAgICAgICBsZXQgd29yZHMgPSB0aGlzLm1lc3NhZ2Uuc3BsaXQoXCIgXCIpXG4gICAgICAgIGxldCBsZW4gPSB3b3Jkcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IHNlZ21lbnQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGNvdW50ICs9IHdvcmRzWzBdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAzMCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQucHVzaCh3b3Jkc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gW107XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudClcbiAgICB9XG5cbiAgICBmYWRlSW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUluTG9vcClcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWRlSW5Mb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGxldCB0ZXh0T3BhY2l0eSA9IGNvdW50IC8gMTAwO1xuICAgICAgICAgICAgbGV0IGJnT3BhY2l0eSA9IGNvdW50ICogMC42IC8gMTAwO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBgcmdiYSgyNTUsMjU1LDI1NSwke3RleHRPcGFjaXR5fSlgO1xuICAgICAgICAgICAgdGhpcy5iZ0NvbG9yID0gYHJnYmEoMCwwLDAsJHtiZ09wYWNpdHl9KWBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwKVxuICAgIH1cblxuICAgIGZhZGVPdXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZU91dExvb3ApXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBmYWRlT3V0TG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBsZXQgdGV4dE9wYWNpdHkgPSAxIC0gKGNvdW50IC8gMTAwKTtcbiAgICAgICAgICAgIGxldCBiZ09wYWNpdHkgPSAwLjYgLSAoY291bnQgKiAwLjYgLyAxMDApO1xuICAgICAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSBgcmdiYSgyNTUsMjU1LDI1NSwke3RleHRPcGFjaXR5fSlgO1xuICAgICAgICAgICAgdGhpcy5iZ0NvbG9yID0gYHJnYmEoMCwwLDAsJHtiZ09wYWNpdHl9KWBcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBkYXJrZW4gYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigwLDAsMCwwLjYpXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy50ZXh0Q29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE2cHggJ1ByZXNzIFN0YXJ0IDJQJ1wiXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VnbWVudHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnNlZ21lbnRzW2ldLmpvaW4oXCIgXCIpLCB0aGlzLngsIHRoaXMueSArIChpICogMzApLCA0ODApXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbn0iLCJcbi8vb3V0ZXIgYXJyYXkgaXMgd29ybGRzLCBpbm5lciBhcnJheSBpcyBsZXZlbERhdGEgb2JqZWN0c1xuZXhwb3J0IGNvbnN0IExldmVsRGF0YSA9IFtcbiAgICAvLyB3b3JsZCAxXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3NtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiVGhpcyBpcyB0aGUgc3Rvcnkgb2Ygc3BhY2VtYW4sIGEgcmVzaWRlbnQgb2YgdGhlIGNsb3VkIHdvcmxkIHdobyBoYXMgYSBwYXNzaW9uIGZvciBhZHZlbnR1cmUuXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCAyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOlsxMDAsMzAwXSxcbiAgICAgICAgICAgIGludGVyYWN0YWJsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjgwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0NjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2NjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDE2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDMyMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNjAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL2xhcmdlUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzEwMCw1NF0sXG4gICAgICAgICAgICBncmF2aXR5OiAtMC4xXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHdvcmxkIDEgbGV2ZWwgM1xuICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXJTdGFydFBvczpbMTAwLDMwMF0sXG4gICAgICAgICAgICBpbnRlcmFjdGFibGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA4MCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDIwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvc21hbGxQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6MzgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogMjgwLFxuICAgICAgICAgICAgICAgICAgICB5OjM2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDgwLFxuICAgICAgICAgICAgICAgICAgICB5OjI2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgeToxNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3RpbnlQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxNCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs3MjAsNDAwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd29ybGQgMSBsZXZlbCA0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllclN0YXJ0UG9zOls1MCwzNjBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMjgwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTYwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy90aW55UGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTQsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvdGlueVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE0LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDE2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogNjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMTQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNTUwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9tZWRpdW1QbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL21lZGl1bVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDY1MCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybDonZGlzdC9pbWFnZXMvbWVkaXVtUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMTgsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA0MjAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy9zbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDIwXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbmlzaFBvczogWzc1MCw0NTBdLFxuICAgICAgICAgICAgZ3Jhdml0eTogLTAuMVxuICAgICAgICB9LFxuICAgICAgICAvLyB3b3JsZCAxIGxldmVsIDVcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwyMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDI4MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6ICdkaXN0L2ltYWdlcy9sYXJnZVBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaW5pc2hQb3M6IFs1MDAsMTgwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjEsXG4gICAgICAgICAgICBsZXZlbFRleHQ6IFwiTm93IHRoYXQgc3BhY2VtYW4gaGFzIHNlZW4gYWxsIHRoYXQgaGlzIHdvcmxkIGhhcyB0byBvZmZlciwgaGUgYmVnaW5zIGhpcyBqb3VybmV5IHRocm91Z2ggb3RoZXIgd29ybGRzXCJcbiAgICAgICAgfVxuXG4gICAgXSxcbiAgICAvLyB3b3JsZCAyXG4gICAgW1xuICAgICAgICAvLyB3b3JsZCAyIGxldmVsIDFcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyU3RhcnRQb3M6WzEwMCwzMDBdLFxuICAgICAgICAgICAgaW50ZXJhY3RhYmxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDQyMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiAnZGlzdC9pbWFnZXMvd29ybGQyTGFyZ2VQbGF0Zm9ybS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBpbWdVcmw6J2Rpc3QvaW1hZ2VzL3dvcmxkMlNtYWxsUGxhdGZvcm0ucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiAyMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDExMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsOidkaXN0L2ltYWdlcy93b3JsZDJTbWFsbFBsYXRmb3JtLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogMjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmluaXNoUG9zOiBbMTAwLDUwXSxcbiAgICAgICAgICAgIGdyYXZpdHk6IC0wLjFcbiAgICAgICAgfSxcbiAgICBdXG5dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==