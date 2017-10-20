(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("glamorous"), require("react"), require("prop-types"), require("polished"), require("react-motion"), require("react-router"), require("react-dom"), require("glamor"));
	else if(typeof define === 'function' && define.amd)
		define(["glamorous", "react", "prop-types", "polished", "react-motion", "react-router", "react-dom", "glamor"], factory);
	else if(typeof exports === 'object')
		exports["PusherUI"] = factory(require("glamorous"), require("react"), require("prop-types"), require("polished"), require("react-motion"), require("react-router"), require("react-dom"), require("glamor"));
	else
		root["PusherUI"] = factory(root["glamorous"], root["react"], root["prop-types"], root["polished"], root["react-motion"], root["react-router"], root["react-dom"], root["glamor"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_82__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.download = exports.copyToClipboard = exports.colorVariant = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.InlineBlock = exports.Inline = exports.Flex = exports.Block = exports.insertGlobalBaseStyles = exports.Tooltip = exports.Toast = exports.Textarea = exports.Portal = exports.Modal = exports.Link = exports.Label = exports.Input = exports.InlineCode = exports.icons = exports.IconSet = exports.Icon = exports.Dialog = exports.Code = exports.Checkbox = exports.Card = exports.Button = exports.Aux = exports.Alert = exports.theme = undefined;

var _iconSet = __webpack_require__(10);

Object.defineProperty(exports, 'icons', {
  enumerable: true,
  get: function get() {
    return _iconSet.icons;
  }
});

var _layout = __webpack_require__(18);

Object.defineProperty(exports, 'Block', {
  enumerable: true,
  get: function get() {
    return _layout.Block;
  }
});
Object.defineProperty(exports, 'Flex', {
  enumerable: true,
  get: function get() {
    return _layout.Flex;
  }
});
Object.defineProperty(exports, 'Inline', {
  enumerable: true,
  get: function get() {
    return _layout.Inline;
  }
});
Object.defineProperty(exports, 'InlineBlock', {
  enumerable: true,
  get: function get() {
    return _layout.InlineBlock;
  }
});

var _typography = __webpack_require__(19);

Object.defineProperty(exports, 'H1', {
  enumerable: true,
  get: function get() {
    return _typography.H1;
  }
});
Object.defineProperty(exports, 'H2', {
  enumerable: true,
  get: function get() {
    return _typography.H2;
  }
});
Object.defineProperty(exports, 'H3', {
  enumerable: true,
  get: function get() {
    return _typography.H3;
  }
});
Object.defineProperty(exports, 'H4', {
  enumerable: true,
  get: function get() {
    return _typography.H4;
  }
});
Object.defineProperty(exports, 'H5', {
  enumerable: true,
  get: function get() {
    return _typography.H5;
  }
});
Object.defineProperty(exports, 'H6', {
  enumerable: true,
  get: function get() {
    return _typography.H6;
  }
});
Object.defineProperty(exports, 'P', {
  enumerable: true,
  get: function get() {
    return _typography.P;
  }
});

var _utils = __webpack_require__(20);

Object.defineProperty(exports, 'colorVariant', {
  enumerable: true,
  get: function get() {
    return _utils.colorVariant;
  }
});
Object.defineProperty(exports, 'copyToClipboard', {
  enumerable: true,
  get: function get() {
    return _utils.copyToClipboard;
  }
});
Object.defineProperty(exports, 'download', {
  enumerable: true,
  get: function get() {
    return _utils.download;
  }
});

var _theme2 = __webpack_require__(21);

var _theme = _interopRequireWildcard(_theme2);

var _alert = __webpack_require__(22);

var _alert2 = _interopRequireDefault(_alert);

var _aux = __webpack_require__(23);

var _aux2 = _interopRequireDefault(_aux);

var _button = __webpack_require__(24);

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__(25);

var _card2 = _interopRequireDefault(_card);

var _checkbox = __webpack_require__(26);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _code = __webpack_require__(27);

var _code2 = _interopRequireDefault(_code);

var _dialog = __webpack_require__(69);

var _dialog2 = _interopRequireDefault(_dialog);

var _icon = __webpack_require__(70);

var _icon2 = _interopRequireDefault(_icon);

var _iconSet2 = _interopRequireDefault(_iconSet);

var _inlineCode = __webpack_require__(71);

var _inlineCode2 = _interopRequireDefault(_inlineCode);

var _input = __webpack_require__(16);

var _input2 = _interopRequireDefault(_input);

var _label = __webpack_require__(72);

var _label2 = _interopRequireDefault(_label);

var _link = __webpack_require__(73);

var _link2 = _interopRequireDefault(_link);

var _modal = __webpack_require__(75);

var _modal2 = _interopRequireDefault(_modal);

var _portal = __webpack_require__(76);

var _portal2 = _interopRequireDefault(_portal);

var _textarea = __webpack_require__(78);

var _textarea2 = _interopRequireDefault(_textarea);

var _toast = __webpack_require__(79);

var _toast2 = _interopRequireDefault(_toast);

var _tooltip = __webpack_require__(80);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _base = __webpack_require__(81);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.theme = _theme;
exports.Alert = _alert2.default;
exports.Aux = _aux2.default;
exports.Button = _button2.default;
exports.Card = _card2.default;
exports.Checkbox = _checkbox2.default;
exports.Code = _code2.default;
exports.Dialog = _dialog2.default;
exports.Icon = _icon2.default;
exports.IconSet = _iconSet2.default;
exports.InlineCode = _inlineCode2.default;
exports.Input = _input2.default;
exports.Label = _label2.default;
exports.Link = _link2.default;
exports.Modal = _modal2.default;
exports.Portal = _portal2.default;
exports.Textarea = _textarea2.default;
exports.Toast = _toast2.default;
exports.Tooltip = _tooltip2.default;
exports.insertGlobalBaseStyles = _base2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = exports.icons = ['account', 'account-outline', 'add-circle-outline', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'check', 'close', 'copy', 'delete', 'documentation', 'download', 'error', 'expand', 'filter', 'info-circle-outline', 'plus', 'pusher-logo', 'pusher-logo-text', 'search', 'success', 'warning'];

function IconSet() {
  return _react2.default.createElement(
    'svg',
    { style: { display: 'none' } },
    _react2.default.createElement(
      'symbol',
      { id: 'icon:account', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:account-outline', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:add-circle-outline', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:caret-left', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' }),
        _react2.default.createElement('path', { d: 'M0-.5h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:caret-down', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' }),
        _react2.default.createElement('path', { d: 'M0-.75h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:caret-right', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' }),
        _react2.default.createElement('path', { d: 'M0-.25h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:caret-up', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:check', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:close', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:copy', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:delete', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:documentation', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:download', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:error', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:expand', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:filter', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:info-circle-outline', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:plus', viewBox: '0 0 12 16' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M12 9H7v5H5V9H0V7h5V2h2v5h5z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:pusher-logo', viewBox: '0 0 59 80' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396' }),
        _react2.default.createElement('path', { d: 'M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761' }),
        _react2.default.createElement('path', { d: 'M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:pusher-logo-text', viewBox: '0 0 120 37' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M23.4196429,3.26418269 C19.8125,1.53870192 16.1607143,3.63774038 14.2410714,6.06586538 C13.0714286,7.64903846 12.4196429,10.3084135 12.5089286,14.0884615 C12.2767857,19.4961538 14.7053571,27.4742788 14.7053571,27.4742788 L19.6696429,26.1668269 L16.9553571,33.0242788 L18.1696429,33.8603365 L22.7589286,22.7603365 L18.5446429,23.9254808 C18.5446429,23.9254808 16.3482143,19.1670673 17.1875,12.7365385 C17.5625,8.44951923 19.7589286,6.02139423 21.9196429,6.43942308 C24.1160714,7.08870192 25.0535714,10.7264423 23.0892857,13.4836538 C21.125,16.2319712 17.9375,17.4949519 17.9375,17.4949519 L18.125,19.1759615 C18.125,19.1759615 27.9553571,15.9117788 27.3035714,7.98701923 C27.0714286,6.15480769 25.7142857,4.29591346 23.4196429,3.26418269 L23.4196429,3.26418269 Z M7.97321429,29.1997596 C7.97321429,29.1997596 5.21428571,21.8353365 5.02678571,14.6932692 C4.83928571,12.4074519 4.69642857,5.0875 7.50892857,3.82451923 C8.02678571,2.98846154 8.82142857,2.37475962 8.82142857,2.37475962 C8.82142857,2.37475962 1.70535714,1.81442308 2.08035714,14.8266827 C2.78571429,23.5430288 4.51785714,27.5543269 4.51785714,27.5543269 L0.0714285714,28.7639423 L7.27678571,34.3584135 L7.79464286,33.1487981 L3.91071429,30.3026442 L7.97321429,29.1997596 L7.97321429,29.1997596 Z M14.0982143,28.4971154 C10.4017857,15.7694712 11.1964286,9.33004808 12.9732143,5.50552885 C14.9821429,1.21850962 17.8392857,2.38365385 17.8392857,2.38365385 C17.8392857,2.38365385 18.9642857,1.92115385 20.2232143,1.92115385 C20.3125,1.503125 15.2589286,-2.13461538 10.0178571,2.01009615 C1.63392857,9.28557692 9.08035714,29.7600962 9.08035714,29.7600962 L5.75892857,30.6495192 L14.1875,36.9466346 L18.3571429,27.2963942 L14.0982143,28.4971154 L14.0982143,28.4971154 Z M17.9910714,12.3629808 L17.8035714,13.9995192 C17.8035714,13.9995192 22.4375,11.6247596 21.4553571,7.09759615 C20.9375,7.14206731 19.8125,7.746875 19.6339286,7.93365385 C20.0446429,11.0555288 17.9910714,12.3629808 17.9910714,12.3629808 L17.9910714,12.3629808 Z M116.4375,20.2432697 C118.875,19.407212 119.991072,17.3971158 119.991072,14.8800485 C119.991072,13.2435101 119.473214,11.6158659 118.258929,10.4507216 C116.946429,9.14326969 115.026786,8.91201969 113.294643,8.91201969 L107.491072,8.91201969 L107.491072,27.5632216 L110.205357,27.5632216 L110.205357,18.9358178 L110.25,18.9358178 L116.428572,27.5632216 L119.848214,27.5632216 L114.607143,20.6168274 C115.223214,20.6168274 115.875,20.4745197 116.4375,20.2432697 L116.4375,20.2432697 Z M110.214286,18.5622601 L110.214286,11.429087 L113.116072,11.429087 C115.267857,11.429087 117.285714,12.5497601 117.285714,14.9245197 C117.285714,17.9129812 114.571429,18.5622601 112.133929,18.5622601 L110.214286,18.5622601 L110.214286,18.5622601 Z M94.0625001,27.5632216 L104.125,27.5632216 L104.125,25.0461543 L96.7767859,25.0461543 L96.7767859,19.3983178 L104.125,19.3983178 L104.125,16.8812505 L96.7767859,16.8812505 L96.7767859,11.429087 L104.125,11.429087 L104.125,8.91201969 L94.0625001,8.91201969 L94.0625001,27.5632216 L94.0625001,27.5632216 Z M87.5089287,16.979087 L79.7857144,16.979087 L79.7857144,8.91201969 L77.0714287,8.91201969 L77.0714287,27.5632216 L79.7857144,27.5632216 L79.7857144,19.4516832 L87.5089287,19.4516832 L87.5089287,27.5632216 L90.2232144,27.5632216 L90.2232144,8.91201969 L87.5089287,8.91201969 L87.5089287,16.979087 L87.5089287,16.979087 Z M65.9732144,13.6170678 C65.9732144,12.2651447 67.0982144,11.0555293 68.4553573,11.0555293 C70.0982144,11.0555293 71.0803573,12.1317312 71.0803573,13.7593755 L73.794643,13.7593755 C73.794643,10.5841351 71.544643,8.58293315 68.4553573,8.58293315 C65.5982144,8.58293315 63.2142859,10.7264428 63.2142859,13.6704332 C63.2142859,17.3081735 65.5535716,18.1442312 68.4553573,19.2649043 C70.0000001,19.869712 71.4553573,20.3411062 71.4553573,22.297837 C71.4553573,24.1122601 70.3303573,25.4730774 68.4553573,25.4730774 C66.4910716,25.4730774 65.4107144,23.9343755 65.4107144,22.1110582 L62.6964287,22.1110582 C62.6964287,25.4730774 65.0357144,27.9901447 68.4553573,27.9901447 C71.7767859,27.9901447 74.2142859,25.7043274 74.2142859,22.3512024 C74.2142859,15.2091351 65.9732144,17.5838947 65.9732144,13.6170678 L65.9732144,13.6170678 Z M57.357143,21.4528851 C57.357143,23.6942312 56.1428573,25.419712 53.8035716,25.419712 C51.4642859,25.419712 50.2500001,23.6942312 50.2500001,21.4528851 L50.2500001,8.91201969 L47.5357144,8.91201969 L47.5357144,21.5507216 C47.5357144,23.3651447 48.0535716,25.0906255 49.4553573,26.3536062 C50.6250001,27.4298082 52.2142859,27.9367793 53.8125001,27.9367793 C55.4017859,27.9367793 57.0000001,27.4209139 58.169643,26.3536062 C59.5714287,25.1439908 60.0892859,23.3651447 60.0892859,21.5507216 L60.0892859,8.91201969 L57.3750001,8.91201969 L57.3750001,21.4528851 L57.357143,21.4528851 L57.357143,21.4528851 Z M38.3035716,8.91201969 L32.8750001,8.91201969 L32.8750001,27.5632216 L35.5892859,27.5632216 L35.5892859,20.1987985 L38.2589287,20.1987985 C41.9553573,20.1987985 44.857143,18.5177889 44.857143,14.5598562 C44.9107144,10.5841351 42.0000001,8.91201969 38.3035716,8.91201969 L38.3035716,8.91201969 Z M38.3035716,17.7262024 L35.6339287,17.7262024 L35.6339287,11.429087 L38.3035716,11.429087 C40.3660716,11.429087 42.1875001,12.2651447 42.1875001,14.6043274 C42.1875001,16.9346159 40.3660716,17.7262024 38.3035716,17.7262024 L38.3035716,17.7262024 Z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:search', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:success', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z' })
      )
    ),
    _react2.default.createElement(
      'symbol',
      { id: 'icon:warning', viewBox: '0 0 24 24' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z' })
      )
    )
  );
}

exports.default = IconSet;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(13);
var defined = __webpack_require__(14);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputStyles = exports.inputStyles = [_extends({
  position: 'relative',
  boxSizing: 'border-box',
  height: (0, _polished.rem)(40)
}, (0, _polished.padding)((0, _polished.rem)(12), (0, _polished.rem)(18)), {
  fontFamily: 'inherit',
  fontSize: (0, _polished.rem)(16),
  outline: 'none'
}, (0, _polished.transitions)('border-color .18s ease', 'color .18s ease'), {
  '::placeholder': {
    fontFamily: 'inherit'
  },
  '::selection': {
    color: '#fff'
  }
}), function (_ref) {
  var theme = _ref.theme,
      error = _ref.error,
      raised = _ref.raised;
  return {
    color: error ? theme.negativeColor : theme.primaryTextColor,
    border: raised ? 'none' : '1px solid ' + (error ? theme.negativeColor : 'transparent'),
    borderRadius: theme.borderRadius1,
    backgroundColor: raised ? theme.white : theme.lightGreyColor,
    boxShadow: raised && theme.boxShadow1,
    '::placeholder': {
      color: theme.tertiaryTextColor
    },
    '::selection': {
      backgroundColor: error ? theme.negativeColor : theme.primaryColor
    },
    ':focus': {
      caretColor: error ? theme.negativeColor : theme.primaryColor,
      boxShadow: '0 0 0 2px ' + (0, _polished.transparentize)(0.7, error ? theme.negativeColor : theme.primaryColor)
    },
    '&[type="password"]': {
      lineHeight: 1
    },
    '&[disabled]': {
      backgroundColor: theme.darkGreyColor,
      border: '1px solid ' + theme.darkGreyColor,
      color: theme.tertiaryTextColor,
      userSelect: 'none',
      cursor: 'not-allowed'
    }
  };
}];

var InputContainer = (0, _glamorous2.default)('input', {
  propsAreCssOverrides: true,
  filterProps: ['error', 'raised', 'label']
}).withConfig({
  displayName: 'input__InputContainer'
}).apply(undefined, inputStyles);

function Input(props) {
  if (props.label) {
    return _react2.default.createElement(
      _index.Label,
      { error: props.error },
      props.label,
      _react2.default.createElement(InputContainer, _extends({}, props, {
        value: props.value == null ? '' : props.value
      }))
    );
  }
  return _react2.default.createElement(InputContainer, _extends({}, props, { value: props.value == null ? '' : props.value }));
}

Input.propTypes = {
  error: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired
};

Input.defaultProps = {
  error: false,
  label: ''
};

exports.default = Input;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineBlock = exports.Inline = exports.Flex = exports.Block = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = {
  propsAreCssOverrides: true
};

var gutterStyles = function gutterStyles(props) {
  var cssRule = {
    column: 'marginBottom',
    row: 'marginRight'
  }[props.flexDirection];
  return {
    '> :not(:last-child)': _defineProperty({}, cssRule, (0, _polished.rem)(props.gutter || 0))
  };
};

var Block = exports.Block = (0, _glamorous2.default)('div', options).withConfig({
  displayName: 'layout__Block'
})({
  display: 'block'
});

var Flex = exports.Flex = (0, _glamorous2.default)('div', _extends({}, options, {
  filterProps: ['gutter']
})).withConfig({
  displayName: 'layout__Flex'
})({
  display: 'flex'
}, gutterStyles);

Flex.defaultProps = {
  flexDirection: 'row'
};

Flex.propTypes = {
  gutter: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

var Inline = exports.Inline = (0, _glamorous2.default)('div', options).withConfig({
  displayName: 'layout__Inline'
})({
  display: 'inline'
});

var InlineBlock = exports.InlineBlock = (0, _glamorous2.default)('div', options).withConfig({
  displayName: 'layout__InlineBlock'
})({
  display: 'inline-block'
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = exports.H1 = _glamorous2.default.H1;
var H2 = exports.H2 = _glamorous2.default.H2;
var H3 = exports.H3 = _glamorous2.default.H3;
var H4 = exports.H4 = _glamorous2.default.H4;
var H5 = exports.H5 = _glamorous2.default.H5;
var H6 = exports.H6 = _glamorous2.default.H6;
var P = exports.P = _glamorous2.default.P;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorVariant = colorVariant;
exports.copyToClipboard = copyToClipboard;
exports.download = download;
// eslint-disable-next-line import/prefer-default-export
function colorVariant(props) {
  if (props.primary) {
    return props.theme.primaryColor;
  }
  if (props.warning) {
    return props.theme.warningColor;
  }
  if (props.danger) {
    return props.theme.negativeColor;
  }
  if (props.success) {
    return props.theme.positiveColor;
  }
  return props.theme.whiteColor;
}

function copyToClipboard(text) {
  var scrollTop = document.scrollingElement.scrollTop;

  var textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  // Reset the scroll position to the initial value, since appending to the
  // document may change the scroll position.
  window.scrollTo(0, scrollTop);
}

function download(text, filename) {
  var element = document.createElement('a');
  var content = encodeURIComponent(text);
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + content);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createFontNames = function createFontNames(fonts) {
  return fonts.map(function (name) {
    return name.match(/\s/) ? '"' + name + '"' : name;
  }).join(', ');
};

var systemFontFamilies = createFontNames(['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']);

var systemMonoFontFamilies = createFontNames(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace']);

/* Global defaults */
var fontSize = exports.fontSize = 16;
var fontFamily = exports.fontFamily = 'Roboto, ' + systemFontFamilies;
var monoFontFamily = exports.monoFontFamily = '"Roboto Mono", ' + systemMonoFontFamilies;
var backgroundColor1 = exports.backgroundColor1 = '#f7f9fa';

/* General colors */
var whiteColor = exports.whiteColor = '#fff';
var blackColor = exports.blackColor = '#1e1e1e';
var darkGreyColor = exports.darkGreyColor = '#dfe0e2';
var lightGreyColor = exports.lightGreyColor = '#eff4f7';
var lightLightGreyColor = exports.lightLightGreyColor = '#f7f9fa';
var disabledColor = exports.disabledColor = '#dfe0e2';

/* Variant colors (primary, success, etc) */
var primaryColor = exports.primaryColor = '#006eff';
var negativeColor = exports.negativeColor = '#ff455c';
var positiveColor = exports.positiveColor = '#00D08D';
var warningColor = exports.warningColor = '#ffaf1c';

/* Typography colors */
var primaryTextColor = exports.primaryTextColor = '#2b303b';
var secondaryTextColor = exports.secondaryTextColor = '#60646c';
var tertiaryTextColor = exports.tertiaryTextColor = '#95979d';

/* Scale */
var zIndex0 = exports.zIndex0 = 0;
var zIndex1 = exports.zIndex1 = 1;
var zIndex2 = exports.zIndex2 = 2;

/* Misc */
var borderRadius1 = exports.borderRadius1 = 2;
var boxShadow1 = exports.boxShadow1 = '0 1px 2px 0 rgba(50, 52, 58, 0.15)';
var boxShadow2 = exports.boxShadow2 = '0 1px 4px 0 rgba(50, 52, 58, 0.14)';
var boxShadow3 = exports.boxShadow3 = '0 1px 4px 1px rgba(50, 52, 58, 0.13)';

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (0, _glamorous2.default)(_index.Flex.withProps({
  flexDirection: 'row',
  alignItems: 'center',
  gutter: 12
}), { filterProps: ['primary', 'warning', 'danger', 'success'] }).withConfig({
  displayName: 'alert__Container'
})(_extends({}, (0, _polished.padding)((0, _polished.rem)(12), (0, _polished.rem)(18))), function (props) {
  return {
    backgroundColor: (0, _polished.rgba)((0, _index.colorVariant)(props), 0.15),
    borderRadius: props.theme.borderRadius1
  };
});

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dismissed: false
    }, _this.dismiss = function () {
      _this.setState({ dismissed: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      if (this.state.dismissed) {
        return null;
      }

      var iconName = 'info-circle-outline';
      if (this.props.warning) {
        iconName = 'warning';
      } else if (this.props.danger) {
        iconName = 'error';
      } else if (this.props.success) {
        iconName = 'success';
      }

      var _props = this.props,
          children = _props.children,
          dismiss = _props.dismiss,
          other = _objectWithoutProperties(_props, ['children', 'dismiss']);

      return _react2.default.createElement(
        Container,
        other,
        _react2.default.createElement(_index.Icon, { name: iconName, color: 'inherit', size: 18 }),
        _react2.default.createElement(
          _index.Block,
          null,
          children
        ),
        dismiss && _react2.default.createElement(_index.Icon, { name: 'close', size: '18', color: 'inherit', onClick: this.dismiss })
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  children: _propTypes2.default.node.isRequired,
  dismiss: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  success: _propTypes2.default.bool
};
Alert.defaultProps = {
  dismiss: false,
  primary: false,
  warning: false,
  danger: false,
  success: false
};
exports.default = Alert;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Aux = function Aux(_ref) {
  var children = _ref.children;
  return children;
};

Aux.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Aux;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _polished = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorVariant(props) {
  var color = props.theme.primaryColor;
  var backgroundColor = 'transparent';
  var borderColor = props.theme.primaryColor;

  if (props.primary) {
    color = props.theme.whiteColor;
    if (props.success) {
      backgroundColor = props.theme.positiveColor;
      borderColor = props.theme.positiveColor;
    } else if (props.danger) {
      backgroundColor = props.theme.negativeColor;
      borderColor = props.theme.negativeColor;
    } else if (props.warning) {
      backgroundColor = props.theme.warningColor;
      borderColor = props.theme.warningColor;
    } else {
      backgroundColor = props.theme.primaryColor;
      borderColor = props.theme.primaryColor;
    }
  } else if (props.success) {
    color = props.theme.positiveColor;
    borderColor = props.theme.positiveColor;
  } else if (props.danger) {
    color = props.theme.negativeColor;
    borderColor = props.theme.negativeColor;
  } else if (props.warning) {
    color = props.theme.warningColor;
    borderColor = props.theme.warningColor;
  }
  return { color: color, backgroundColor: backgroundColor, borderColor: borderColor };
}

var Button = (0, _glamorous2.default)('button', {
  propsAreCssOverrides: true,
  filterProps: ['primary', 'success', 'warning', 'danger']
}).withConfig({
  displayName: 'button__Button'
})({
  position: 'relative',
  display: 'inline-block',
  margin: 0,
  padding: (0, _polished.rem)(12) + ' ' + (0, _polished.rem)(18),
  fontFamily: 'inherit',
  fontSize: 'inherit',
  textAlign: 'center',
  textDecoration: 'none',
  lineHeight: 1,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  backgroundColor: 'transparent',
  transition: 'color .18s ease, background-color .18s ease, border-color .18s ease'
}, function (props) {
  var _colorVariant = colorVariant(props),
      color = _colorVariant.color,
      backgroundColor = _colorVariant.backgroundColor,
      borderColor = _colorVariant.borderColor;

  return {
    color: color,
    backgroundColor: backgroundColor,
    border: '1px solid ' + borderColor,
    borderRadius: props.theme.borderRadius1,

    '&:hover': {
      cursor: 'pointer',
      color: (0, _polished.darken)(0.05, color)
    },

    '&:active': {
      color: props.primary ? color : props.theme.whiteColor,
      backgroundColor: props.primary ? (0, _polished.darken)(0.1, backgroundColor) : color
    },

    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px ' + (0, _polished.transparentize)(0.7, borderColor)
    },

    '&[disabled]': {
      backgroundColor: props.theme.disabledColor,
      color: props.theme.tertiaryTextColor,
      borderColor: 'transparent',
      cursor: 'not-allowed',

      '&:before': {
        border: '2px solid ' + props.theme.tertiaryTextColor
      }
    }
  };
});

Button.propTypes = {
  children: _propTypes2.default.node,
  to: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  danger: _propTypes2.default.bool
};

exports.default = Button;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = (0, _glamorous2.default)(_index.Flex).withConfig({
  displayName: 'card__Card'
})({
  flexDirection: 'column',
  padding: (0, _polished.rem)(20),
  backgroundColor: '#fff'
}, function (props) {
  return {
    boxShadow: props.theme.boxShadow1,
    borderRadius: props.theme.borderRadius1
  };
});

exports.default = Card;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Square = (0, _glamorous2.default)(_index.InlineBlock, {
  filterProps: ['checked', 'disabled']
}).withConfig({
  displayName: 'checkbox__Square'
})({
  width: (0, _polished.rem)(20),
  height: (0, _polished.rem)(20),
  border: '1px solid',
  borderRadius: (0, _polished.rem)(2)
}, function (props) {
  return {
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    borderColor: props.disabled ? props.theme.disabledColor : props.theme.primaryColor
  };
});

var Checkmark = function Checkmark(props) {
  return _react2.default.createElement(
    Square,
    _extends({
      position: 'relative',
      role: 'checkbox',
      'aria-checked': props.checked ? 'true' : 'false'
    }, props),
    props.checked && _react2.default.createElement(_index.Icon, {
      name: 'check',
      size: 20,
      color: props.disabled ? _index.theme.disabledColor : _index.theme.primaryColor,
      position: 'absolute'
    })
  );
};

Checkmark.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool
};

Checkmark.defaultProps = {
  disabled: false
};

var Checkbox = function Checkbox(props) {
  var error = props.error,
      onToggle = props.onToggle,
      checked = props.checked,
      disabled = props.disabled,
      label = props.label;

  return _react2.default.createElement(
    _index.Label,
    {
      error: error,
      onClick: !disabled && onToggle,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none'
    },
    _react2.default.createElement(Checkmark, { checked: checked, disabled: disabled, marginRight: (0, _polished.rem)(12) }),
    _react2.default.createElement(
      _index.InlineBlock,
      null,
      label
    )
  );
};

Checkbox.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  label: _propTypes2.default.string.isRequired,
  onToggle: _propTypes2.default.func // eslint-disable-line react/require-default-props
};

Checkbox.defaultProps = {
  disabled: false,
  error: false
};

exports.default = Checkbox;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _light = __webpack_require__(28);

var _light2 = _interopRequireDefault(_light);

var _java = __webpack_require__(62);

var _java2 = _interopRequireDefault(_java);

var _javascript = __webpack_require__(63);

var _javascript2 = _interopRequireDefault(_javascript);

var _swift = __webpack_require__(64);

var _swift2 = _interopRequireDefault(_swift);

var _xml = __webpack_require__(65);

var _xml2 = _interopRequireDefault(_xml);

var _ruby = __webpack_require__(66);

var _ruby2 = _interopRequireDefault(_ruby);

var _bash = __webpack_require__(67);

var _bash2 = _interopRequireDefault(_bash);

var _githubGist = __webpack_require__(68);

var _githubGist2 = _interopRequireDefault(_githubGist);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Note: All imported languages from highlight.js and syntax themes
// should be listed as externals in the build configuration.

(0, _light.registerLanguage)('plaintext', function () {
  return {};
});
(0, _light.registerLanguage)('html', _xml2.default);
(0, _light.registerLanguage)('java', _java2.default);
(0, _light.registerLanguage)('javascript', _javascript2.default);
(0, _light.registerLanguage)('swift', _swift2.default);
(0, _light.registerLanguage)('bash', _bash2.default);
(0, _light.registerLanguage)('ruby', _ruby2.default);

var CodeContainer = (0, _glamorous2.default)(_index.Block).withConfig({
  displayName: 'code__CodeContainer'
})({
  fontSize: (0, _polished.rem)(14),
  '& pre': {
    margin: 0,
    padding: (0, _polished.rem)(12) + ' !important'
  },
  '& code': {
    whiteSpace: 'pre'
  }
}, function (props) {
  return {
    '& pre': {
      backgroundColor: props.theme.lightLightGreyColor + ' !important',
      borderRadius: props.theme.borderRadius1,
      borderTopRightRadius: props.menu ? 0 : props.theme.borderRadius,
      borderTopLeftRadius: props.menu ? 0 : props.theme.borderRadius
    },
    '& code': {
      fontFamily: props.theme.monoFontFamily
    }
  };
});

var LanguageMenu = (0, _glamorous2.default)(_index.Flex).withConfig({
  displayName: 'code__LanguageMenu'
})({
  justifyContent: 'space-between',
  padding: (0, _polished.rem)(12),
  fontSize: (0, _polished.rem)(14),
  userSelect: 'none'
}, function (props) {
  return {
    backgroundColor: props.theme.lightGreyColor,
    borderTopRightRadius: props.theme.borderRadius1,
    borderTopLeftRadius: props.theme.borderRadius1
  };
});

var languageMap = {
  plaintext: 'Plaintext',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript',
  swift: 'Swift',
  ruby: 'Ruby',
  bash: 'Bash'
};

var Code = function (_Component) {
  _inherits(Code, _Component);

  function Code(props) {
    _classCallCheck(this, Code);

    var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));

    _this.copy = function () {
      var codes = _this.root.querySelectorAll('code');
      // Select the last adjacent code element so that it works properly whether
      // we show line numbers or not (line numbers are rendered in a separate
      // code element).
      var codeBlock = codes[codes.length - 1];
      (0, _index.copyToClipboard)(codeBlock.innerText);
      _this.setState({ copyText: 'Copied!' });
      _this.updateCopyTextTimeout = setTimeout(function () {
        _this.setState({ copyText: Code.defaultProps.copyText });
      }, 2000);
      if (_this.props.onCopy) {
        _this.props.onCopy(_this.props, _this.state);
      }
    };

    _this.state = {
      copyText: props.copyText
    };
    return _this;
  }

  _createClass(Code, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var copyText = nextProps.copyText;

      if (copyText !== this.state.nextProps) {
        this.setState({ copyText: copyText });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.updateCopyTextTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          language = _props.language,
          label = _props.label,
          menu = _props.menu,
          copyText = _props.copyText,
          other = _objectWithoutProperties(_props, ['language', 'label', 'menu', 'copyText']);

      return _react2.default.createElement(
        CodeContainer,
        { menu: menu, innerRef: function innerRef(c) {
            return _this2.root = c;
          } },
        menu && _react2.default.createElement(
          LanguageMenu,
          null,
          label || languageMap[language],
          _react2.default.createElement(
            _index.Tooltip,
            { text: this.state.copyText, position: 'right' },
            _react2.default.createElement(_index.Icon, { name: 'copy', size: '16', onClick: this.copy })
          )
        ),
        _react2.default.createElement(_light2.default, other)
      );
    }
  }]);

  return Code;
}(_react.Component);

Code.defaultProps = {
  style: _githubGist2.default,
  menu: false,
  copyText: 'Copy to clipboard'
};
Code.propTypes = {
  children: _propTypes2.default.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  language: _propTypes2.default.oneOf(['plaintext', 'html', 'java', 'javascript', 'swift', 'ruby', 'bash']),
  menu: _propTypes2.default.bool,
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  copyText: _propTypes2.default.string,
  onCopy: _propTypes2.default.func, // eslint-disable-line react/require-default-props
  label: _propTypes2.default.string // eslint-disable-line react/require-default-props
};
exports.default = Code;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerLanguage = undefined;

var _highlight = __webpack_require__(29);

var _highlight2 = _interopRequireDefault(_highlight);

var _core = __webpack_require__(60);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerLanguage = exports.registerLanguage = _core2.default.registerLanguage;
exports.default = (0, _highlight2.default)(_core2.default, {});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(57);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = function (lowlight, defaultStyle) {
  return function SyntaxHighlighter(_ref5) {
    var language = _ref5.language,
        children = _ref5.children,
        _ref5$style = _ref5.style,
        style = _ref5$style === undefined ? defaultStyle : _ref5$style,
        _ref5$customStyle = _ref5.customStyle,
        customStyle = _ref5$customStyle === undefined ? {} : _ref5$customStyle,
        _ref5$codeTagProps = _ref5.codeTagProps,
        codeTagProps = _ref5$codeTagProps === undefined ? {} : _ref5$codeTagProps,
        _ref5$useInlineStyles = _ref5.useInlineStyles,
        useInlineStyles = _ref5$useInlineStyles === undefined ? true : _ref5$useInlineStyles,
        _ref5$showLineNumbers = _ref5.showLineNumbers,
        showLineNumbers = _ref5$showLineNumbers === undefined ? false : _ref5$showLineNumbers,
        _ref5$startingLineNum = _ref5.startingLineNumber,
        startingLineNumber = _ref5$startingLineNum === undefined ? 1 : _ref5$startingLineNum,
        lineNumberContainerStyle = _ref5.lineNumberContainerStyle,
        lineNumberStyle = _ref5.lineNumberStyle,
        wrapLines = _ref5.wrapLines,
        _ref5$lineStyle = _ref5.lineStyle,
        lineStyle = _ref5$lineStyle === undefined ? {} : _ref5$lineStyle,
        renderer = _ref5.renderer,
        _ref5$PreTag = _ref5.PreTag,
        PreTag = _ref5$PreTag === undefined ? 'pre' : _ref5$PreTag,
        _ref5$CodeTag = _ref5.CodeTag,
        CodeTag = _ref5$CodeTag === undefined ? 'code' : _ref5$CodeTag,
        rest = (0, _objectWithoutProperties3.default)(_ref5, ['language', 'children', 'style', 'customStyle', 'codeTagProps', 'useInlineStyles', 'showLineNumbers', 'startingLineNumber', 'lineNumberContainerStyle', 'lineNumberStyle', 'wrapLines', 'lineStyle', 'renderer', 'PreTag', 'CodeTag']);

    /* 
     * some custom renderers rely on individual row elements so we need to turn wrapLines on 
     * if renderer is provided and wrapLines is undefined
    */
    wrapLines = renderer && wrapLines === undefined ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var codeTree = language && !!lowlight.getLanguage(language) ? lowlight.highlight(language, children) : lowlight.highlightAuto(children);
    if (codeTree.language === null) {
      codeTree.value = [{ type: 'text', value: children }];
    }
    var defaultPreStyle = style.hljs || { backgroundColor: '#fff' };
    var preProps = useInlineStyles ? (0, _assign2.default)({}, rest, { style: (0, _assign2.default)({}, defaultPreStyle, customStyle) }) : (0, _assign2.default)({}, rest, { className: 'hljs' });

    var tree = wrapLines ? wrapLinesInSpan(codeTree, lineStyle) : codeTree.value;
    var lineNumbers = showLineNumbers ? _react2.default.createElement(LineNumbers, {
      containerStyle: lineNumberContainerStyle,
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: children
    }) : null;
    return _react2.default.createElement(
      PreTag,
      preProps,
      lineNumbers,
      _react2.default.createElement(
        CodeTag,
        codeTagProps,
        renderer({ rows: tree, stylesheet: style, useInlineStyles: useInlineStyles })
      )
    );
  };
};

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _createElement = __webpack_require__(58);

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}

function getLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;

  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return _react2.default.createElement(
      'span',
      {
        key: 'line-' + i,
        className: 'react-syntax-highlighter-line-number',
        style: typeof style === 'function' ? style(number) : style
      },
      number + '\n'
    );
  });
}

function LineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === undefined ? { float: 'left', paddingRight: '10px' } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === undefined ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;

  return _react2.default.createElement(
    'code',
    { style: containerStyle },
    getLineNumbers({
      lines: codeString.replace(/\n$/, '').split('\n'),
      style: numberStyle,
      startingLineNumber: startingLineNumber
    })
  );
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineStyle = _ref3.lineStyle,
      _ref3$className = _ref3.className,
      className = _ref3$className === undefined ? [] : _ref3$className;

  return {
    type: 'element',
    tagName: 'span',
    properties: {
      className: className,
      style: typeof lineStyle === 'function' ? lineStyle(lineNumber) : lineStyle
    },
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }
  return newTree;
}

function wrapLinesInSpan(codeTree, lineStyle) {
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      (function () {
        var splitValue = value.split('\n');
        splitValue.forEach(function (text, i) {
          var lineNumber = newTree.length + 1;
          var newChild = { type: 'text', value: text + '\n' };
          if (i === 0) {
            var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({ children: [newChild], className: node.properties.className }));
            newTree.push(createLineElement({ children: _children, lineNumber: lineNumber, lineStyle: lineStyle }));
          } else if (i === splitValue.length - 1) {
            var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
            if (stringChild) {
              var lastLineInPreviousSpan = { type: 'text', value: '' + text };
              var newElem = createLineElement({ children: [lastLineInPreviousSpan], className: node.properties.className });
              tree.splice(index + 1, 0, newElem);
            } else {
              newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineStyle: lineStyle }));
            }
          } else {
            newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineStyle: lineStyle }));
          }
        });
        lastLineBreakIndex = index;
      })();
    }
    index++;
  };

  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      newTree.push(createLineElement({ children: children, lineNumber: newTree.length + 1, lineStyle: lineStyle }));
    }
  }
  return newTree;
}

function defaultRenderer(_ref4) {
  var rows = _ref4.rows,
      stylesheet = _ref4.stylesheet,
      useInlineStyles = _ref4.useInlineStyles;

  return rows.map(function (node, i) {
    return (0, _createElement2.default)({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: 'code-segement' + i
    });
  });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(11).Object.assign;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(32);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(42) });


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(11);
var ctx = __webpack_require__(33);
var hide = __webpack_require__(35);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(36);
var createDesc = __webpack_require__(41);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(37);
var IE8_DOM_DEFINE = __webpack_require__(38);
var toPrimitive = __webpack_require__(40);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(43);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(55);
var toObject = __webpack_require__(56);
var IObject = __webpack_require__(13);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(44);
var enumBugKeys = __webpack_require__(53);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(45);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(47)(false);
var IE_PROTO = __webpack_require__(50)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(48);
var toAbsoluteIndex = __webpack_require__(49);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(51)('keys');
var uid = __webpack_require__(52);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

exports.createStyleObject = createStyleObject;
exports.createClassNameString = createClassNameString;
exports.createChildren = createChildren;
exports.default = createElement;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments[2];

  return classNames.reduce(function (styleObject, className) {
    return (0, _extends3.default)({}, styleObject, stylesheet[className]);
  }, elementStyle);
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: 'code-segment-' + childrenCount + '-' + i
      });
    });
  };
}

function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props = useInlineStyles ? {
      style: createStyleObject(properties.className, (0, _assign2.default)({}, properties.style, style), stylesheet)
    } : { className: createClassNameString(properties.className) };
    var children = childrenCreator(node.children);
    return _react2.default.createElement(
      TagName,
      (0, _extends3.default)({ key: key }, props),
      children
    );
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var high = __webpack_require__(61);

/* The lowlight interface, which has to be compatible
 * with highlight.js, as this object is passed to
 * highlight.js syntaxes. */

function High() {}

High.prototype = high;

/* Expose. */
var low = new High(); // Ha!

module.exports = low;

low.highlight = highlight;
low.highlightAuto = autoHighlight;
low.registerLanguage = registerLanguage;
low.getLanguage = getLanguage;

var inherit = high.inherit;
var own = {}.hasOwnProperty;

var DEFAULT_PREFIX = 'hljs-';
var KEY_INSENSITIVE = 'case_insensitive';
var KEY_CACHED_VARIANTS = 'cached_variants';
var EMPTY = '';

var C_SPACE = ' ';
var C_PIPE = '|';

var T_ELEMENT = 'element';
var T_TEXT = 'text';
var T_SPAN = 'span';

/* Maps of syntaxes. */
var languageNames = [];
var languages = {};
var aliases = {};

/* Highlighting with language detection.  Accepts a string
 * with the code to highlight.  Returns an object with the
 * following properties:
 *
 * - language (detected language)
 * - relevance (int)
 * - value (an HTML string with highlighting markup)
 * - secondBest (object with the same structure for
 *   second-best heuristically detected language, may
 *   be absent) */
function autoHighlight(value, options) {
  var settings = options || {};
  var prefix = settings.prefix;
  var subset = settings.subset || languageNames;
  var length = subset.length;
  var index = -1;
  var result;
  var secondBest;
  var current;
  var name;

  if (prefix === null || prefix === undefined) {
    prefix = DEFAULT_PREFIX;
  }

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for value, got `' + value + '`');
  }

  secondBest = normalize({});
  result = normalize({});

  while (++index < length) {
    name = subset[index];

    if (!getLanguage(name)) {
      continue;
    }

    current = normalize(coreHighlight(name, value, false, prefix));

    current.language = name;

    if (current.relevance > secondBest.relevance) {
      secondBest = current;
    }

    if (current.relevance > result.relevance) {
      secondBest = result;
      result = current;
    }
  }

  if (secondBest.language) {
    result.secondBest = secondBest;
  }

  return result;
}

/* Highlighting `value` in the language `language`. */
function highlight(language, value, options) {
  var settings = options || {};
  var prefix = settings.prefix;

  if (prefix === null || prefix === undefined) {
    prefix = DEFAULT_PREFIX;
  }

  return normalize(coreHighlight(language, value, true, prefix));
}

/* Register a language. */
function registerLanguage(name, syntax) {
  var lang = languages[name] = syntax(low);
  var values = lang.aliases;
  var length = values && values.length;
  var index = -1;

  languageNames.push(name);

  while (++index < length) {
    aliases[values[index]] = name;
  }
}

/* Core highlighting function.  Accepts a language name, or
 * an alias, and a string with the code to highlight.
 * Returns an object with the following properties: */
function coreHighlight(name, value, ignore, prefix, continuation) {
  var continuations = {};
  var stack = [];
  var modeBuffer = EMPTY;
  var relevance = 0;
  var language;
  var top;
  var current;
  var currentChildren;
  var offset;
  var count;
  var match;
  var children;

  if (typeof name !== 'string') {
    throw new Error('Expected `string` for name, got `' + name + '`');
  }

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for value, got `' + value + '`');
  }

  language = getLanguage(name);
  current = top = continuation || language;
  currentChildren = children = [];

  if (!language) {
    throw new Error('Unknown language: `' + name + '` is not registered');
  }

  compileLanguage(language);

  try {
    offset = top.terminators.lastIndex = 0;
    match = top.terminators.exec(value);

    while (match) {
      count = processLexeme(value.substring(offset, match.index), match[0]);
      offset = top.terminators.lastIndex = match.index + count;
      match = top.terminators.exec(value);
    }

    processLexeme(value.substr(offset));
    current = top;

    while (current.parent) {
      if (current.className) {
        pop();
      }

      current = current.parent;
    }

    return {
      relevance: relevance,
      value: currentChildren,
      language: name,
      top: top
    };
  } catch (err) {
    /* istanbul ignore if - Catch-all  */
    if (err.message.indexOf('Illegal') === -1) {
      throw err;
    }

    return {relevance: 0, value: addText(value, [])};
  }

  /* Process a lexeme.  Returns next position. */
  function processLexeme(buffer, lexeme) {
    var newMode;
    var endMode;
    var origin;

    modeBuffer += buffer;

    if (lexeme === undefined) {
      addSiblings(processBuffer(), currentChildren);

      return 0;
    }

    newMode = subMode(lexeme, top);

    if (newMode) {
      addSiblings(processBuffer(), currentChildren);

      startNewMode(newMode, lexeme);

      return newMode.returnBegin ? 0 : lexeme.length;
    }

    endMode = endOfMode(top, lexeme);

    if (endMode) {
      origin = top;

      if (!(origin.returnEnd || origin.excludeEnd)) {
        modeBuffer += lexeme;
      }

      addSiblings(processBuffer(), currentChildren);

      /* Close open modes. */
      do {
        if (top.className) {
          pop();
        }

        relevance += top.relevance;
        top = top.parent;
      } while (top !== endMode.parent);

      if (origin.excludeEnd) {
        addText(lexeme, currentChildren);
      }

      modeBuffer = EMPTY;

      if (endMode.starts) {
        startNewMode(endMode.starts, EMPTY);
      }

      return origin.returnEnd ? 0 : lexeme.length;
    }

    if (isIllegal(lexeme, top)) {
      throw new Error(
        'Illegal lexeme "' + lexeme + '" for mode "' +
        (top.className || '<unnamed>') + '"'
      );
    }

    /* Parser should not reach this point as all
     * types of lexemes should be caught earlier,
     * but if it does due to some bug make sure it
     * advances at least one character forward to
     * prevent infinite looping. */
    modeBuffer += lexeme;

    return lexeme.length || /* istanbul ignore next */ 1;
  }

  /* Start a new mode with a `lexeme` to process. */
  function startNewMode(mode, lexeme) {
    var node;

    if (mode.className) {
      node = build(mode.className, []);
    }

    if (mode.returnBegin) {
      modeBuffer = EMPTY;
    } else if (mode.excludeBegin) {
      addText(lexeme, currentChildren);

      modeBuffer = EMPTY;
    } else {
      modeBuffer = lexeme;
    }

    /* Enter a new mode. */
    if (node) {
      currentChildren.push(node);
      stack.push(currentChildren);
      currentChildren = node.children;
    }

    top = Object.create(mode, {parent: {value: top}});
  }

  /* Process the buffer. */
  function processBuffer() {
    var result = top.subLanguage === undefined ? processKeywords() : processSubLanguage();
    modeBuffer = EMPTY;
    return result;
  }

  /* Process a sublanguage (returns a list of nodes). */
  function processSubLanguage() {
    var explicit = typeof top.subLanguage === 'string';
    var subvalue;

    /* istanbul ignore if - support non-loaded sublanguages */
    if (explicit && !languages[top.subLanguage]) {
      return addText(modeBuffer, []);
    }

    if (explicit) {
      subvalue = coreHighlight(
        top.subLanguage,
        modeBuffer,
        true,
        prefix,
        continuations[top.subLanguage]
      );
    } else {
      subvalue = autoHighlight(modeBuffer, {
        subset: top.subLanguage.length ? top.subLanguage : undefined,
        prefix: prefix
      });
    }

    /* Counting embedded language score towards the
     * host language may be disabled with zeroing the
     * containing mode relevance.  Usecase in point is
     * Markdown that allows XML everywhere and makes
     * every XML snippet to have a much larger Markdown
     * score. */
    if (top.relevance > 0) {
      relevance += subvalue.relevance;
    }

    if (explicit) {
      continuations[top.subLanguage] = subvalue.top;
    }

    return [build(subvalue.language, subvalue.value, true)];
  }

  /* Process keywords. Returns nodes. */
  function processKeywords() {
    var nodes = [];
    var lastIndex;
    var keyword;
    var node;
    var submatch;

    if (!top.keywords) {
      return addText(modeBuffer, nodes);
    }

    lastIndex = 0;

    top.lexemesRe.lastIndex = 0;

    keyword = top.lexemesRe.exec(modeBuffer);

    while (keyword) {
      addText(modeBuffer.substring(lastIndex, keyword.index), nodes);

      submatch = keywordMatch(top, keyword);

      if (submatch) {
        relevance += submatch[1];

        node = build(submatch[0], []);

        nodes.push(node);

        addText(keyword[0], node.children);
      } else {
        addText(keyword[0], nodes);
      }

      lastIndex = top.lexemesRe.lastIndex;
      keyword = top.lexemesRe.exec(modeBuffer);
    }

    addText(modeBuffer.substr(lastIndex), nodes);

    return nodes;
  }

  /* Add siblings. */
  function addSiblings(siblings, nodes) {
    var length = siblings.length;
    var index = -1;
    var sibling;

    while (++index < length) {
      sibling = siblings[index];

      if (sibling.type === T_TEXT) {
        addText(sibling.value, nodes);
      } else {
        nodes.push(sibling);
      }
    }
  }

  /* Add a text. */
  function addText(value, nodes) {
    var tail;

    if (value) {
      tail = nodes[nodes.length - 1];

      if (tail && tail.type === T_TEXT) {
        tail.value += value;
      } else {
        nodes.push(buildText(value));
      }
    }

    return nodes;
  }

  /* Build a text. */
  function buildText(value) {
    return {type: T_TEXT, value: value};
  }

  /* Build a span. */
  function build(name, contents, noPrefix) {
    return {
      type: T_ELEMENT,
      tagName: T_SPAN,
      properties: {
        className: [(noPrefix ? EMPTY : prefix) + name]
      },
      children: contents
    };
  }

  /* Check if the first word in `keywords` is a keyword. */
  function keywordMatch(mode, keywords) {
    var keyword = keywords[0];

    if (language[KEY_INSENSITIVE]) {
      keyword = keyword.toLowerCase();
    }

    return own.call(mode.keywords, keyword) && mode.keywords[keyword];
  }

  /* Check if `lexeme` is illegal according to `mode`. */
  function isIllegal(lexeme, mode) {
    return !ignore && test(mode.illegalRe, lexeme);
  }

  /* Check if `lexeme` ends `mode`. */
  function endOfMode(mode, lexeme) {
    if (test(mode.endRe, lexeme)) {
      while (mode.endsParent && mode.parent) {
        mode = mode.parent;
      }
      return mode;
    }

    if (mode.endsWithParent) {
      return endOfMode(mode.parent, lexeme);
    }
  }

  /* Check a sub-mode. */
  function subMode(lexeme, mode) {
    var values = mode.contains;
    var length = values.length;
    var index = -1;

    while (++index < length) {
      if (test(values[index].beginRe, lexeme)) {
        return values[index];
      }
    }
  }

  /* Exit the current context. */
  function pop() {
    /* istanbul ignore next - removed in hljs 9.3 */
    currentChildren = stack.pop() || children;
  }
}

function expandMode(mode) {
  if (mode.variants && !mode[KEY_CACHED_VARIANTS]) {
    mode[KEY_CACHED_VARIANTS] = mode.variants.map(function (variant) {
      return inherit(mode, {variants: null}, variant);
    });
  }

  return mode[KEY_CACHED_VARIANTS] || (mode.endsWithParent && [inherit(mode)]) || [mode];
}

/* Compile a language. */
function compileLanguage(language) {
  compileMode(language);

  /* Compile a language mode, optionally with a parent. */
  function compileMode(mode, parent) {
    var compiledKeywords = {};
    var terminators;

    if (mode.compiled) {
      return;
    }

    mode.compiled = true;

    mode.keywords = mode.keywords || mode.beginKeywords;

    if (mode.keywords) {
      if (typeof mode.keywords === 'string') {
        flatten('keyword', mode.keywords);
      } else {
        Object.keys(mode.keywords).forEach(function (className) {
          flatten(className, mode.keywords[className]);
        });
      }

      mode.keywords = compiledKeywords;
    }

    mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

    if (parent) {
      if (mode.beginKeywords) {
        mode.begin = '\\b(' + mode.beginKeywords.split(C_SPACE).join(C_PIPE) + ')\\b';
      }

      if (!mode.begin) {
        mode.begin = /\B|\b/;
      }

      mode.beginRe = langRe(mode.begin);

      if (!mode.end && !mode.endsWithParent) {
        mode.end = /\B|\b/;
      }

      if (mode.end) {
        mode.endRe = langRe(mode.end);
      }

      mode.terminatorEnd = source(mode.end) || EMPTY;

      if (mode.endsWithParent && parent.terminatorEnd) {
        mode.terminatorEnd += (mode.end ? C_PIPE : EMPTY) + parent.terminatorEnd;
      }
    }

    if (mode.illegal) {
      mode.illegalRe = langRe(mode.illegal);
    }

    if (mode.relevance === undefined) {
      mode.relevance = 1;
    }

    if (!mode.contains) {
      mode.contains = [];
    }

    mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
      return expandMode(c === 'self' ? mode : c);
    }));

    mode.contains.forEach(function (c) {
      compileMode(c, mode);
    });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    terminators =
      mode.contains.map(function (c) {
        return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
      })
      .concat([mode.terminatorEnd, mode.illegal])
      .map(source)
      .filter(Boolean);

    mode.terminators = terminators.length ?
      langRe(terminators.join(C_PIPE), true) :
      {exec: execNoop};

    /* Flatten a classname. */
    function flatten(className, value) {
      var pairs;
      var pair;
      var index;
      var length;

      if (language[KEY_INSENSITIVE]) {
        value = value.toLowerCase();
      }

      pairs = value.split(C_SPACE);
      length = pairs.length;
      index = -1;

      while (++index < length) {
        pair = pairs[index].split(C_PIPE);

        compiledKeywords[pair[0]] = [
          className,
          pair[1] ? Number(pair[1]) : 1
        ];
      }
    }
  }

  /* Create a regex for `value`. */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language[KEY_INSENSITIVE] ? 'i' : '') +
      (global ? 'g' : '')
    );
  }

  /* Get the source of an expression or string. */
  function source(re) {
    return (re && re.source) || re;
  }
}

/* Normalize a syntax result. */
function normalize(result) {
  return {
    relevance: result.relevance || 0,
    language: result.language || null,
    value: result.value || []
  };
}

/* Check if `expression` matches `lexeme`. */
function test(expression, lexeme) {
  var match = expression && expression.exec(lexeme);
  return match && match.index === 0;
}

/* No-op exec. */
function execNoop() {
  return null;
}

/* Get a language by `name`. */
function getLanguage(name) {
  name = name.toLowerCase();

  return languages[name] || languages[aliases[name]];
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(true) {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.hljs;
      });
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i]

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }
    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_mode(c === 'self' ? mode : c)
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return '';
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var JAVA_IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';
  var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
  var KEYWORDS =
    'false synchronized int abstract float private char boolean static null if const ' +
    'for true while long strictfp finally protected import native final void ' +
    'enum else break transient catch instanceof byte super volatile case assert short ' +
    'package default double public try this switch continue throws protected public private ' +
    'module requires exports do';

  // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html
  var JAVA_NUMBER_RE = '\\b' +
    '(' +
      '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
      '|' +
      '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
      '|' +
      '(' +
        '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' +
        '|' +
        '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' +
      ')' +
      '([eE][-+]?\\d+)?' + // octal, decimal, float
    ')' +
    '[lLfF]?';
  var JAVA_NUMBER_MODE = {
    className: 'number',
    begin: JAVA_NUMBER_RE,
    relevance: 0
  };

  return {
    aliases: ['jsp'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance : 0,
          contains : [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/, relevance: 0
            },
            {
              className : 'doctag',
              begin : '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
        keywords: 'class interface',
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: 'new throw return else',
        relevance: 0
      },
      {
        className: 'function',
        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
            relevance: 0,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_NUMBER_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      JAVA_NUMBER_MODE,
      {
        className: 'meta', begin: '@[A-Za-z]+'
      }
    ]
  };
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var EXPRESSIONS;
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // E4X / JSX
            begin: /</, end: /(\/\w+|\w+\/)>/,
            subLanguage: 'xml',
            contains: [
              {begin: /<\w+\s*\/>/, skip: true},
              {
                begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                contains: [
                  {begin: /<\w+\s*\/>/, skip: true},
                  'self'
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var SWIFT_KEYWORDS = {
      keyword: '__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity ' +
        'break case catch class continue convenience default defer deinit didSet do ' +
        'dynamic dynamicType else enum extension fallthrough false fileprivate final for func ' +
        'get guard if import in indirect infix init inout internal is lazy left let ' +
        'mutating nil none nonmutating open operator optional override postfix precedence ' +
        'prefix private protocol Protocol public repeat required rethrows return ' +
        'right self Self set static struct subscript super switch throw throws true ' +
        'try try! try? Type typealias unowned var weak where while willSet',
      literal: 'true false nil',
      built_in: 'abs advance alignof alignofValue anyGenerator assert assertionFailure ' +
        'bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC ' +
        'bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros ' +
        'debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords ' +
        'enumerate equal fatalError filter find getBridgedObjectiveCType getVaList ' +
        'indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC ' +
        'isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare ' +
        'map max maxElement min minElement numericCast overlaps partition posix ' +
        'precondition preconditionFailure print println quickSort readLine reduce reflect ' +
        'reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split ' +
        'startsWith stride strideof strideofValue swap toString transcode ' +
        'underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap ' +
        'unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer ' +
        'withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers ' +
        'withUnsafePointer withUnsafePointers withVaList zip'
    };

  var TYPE = {
    className: 'type',
    begin: '\\b[A-Z][\\w\u00C0-\u02B8\']*',
    relevance: 0
  };
  var BLOCK_COMMENT = hljs.COMMENT(
    '/\\*',
    '\\*/',
    {
      contains: ['self']
    }
  );
  var SUBST = {
    className: 'subst',
    begin: /\\\(/, end: '\\)',
    keywords: SWIFT_KEYWORDS,
    contains: [] // assigned later
  };
  var NUMBERS = {
      className: 'number',
      begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
      relevance: 0
  };
  var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    contains: [SUBST, hljs.BACKSLASH_ESCAPE]
  });
  SUBST.contains = [NUMBERS];

  return {
    keywords: SWIFT_KEYWORDS,
    contains: [
      QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      BLOCK_COMMENT,
      TYPE,
      NUMBERS,
      {
        className: 'function',
        beginKeywords: 'func', end: '{', excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: /[A-Za-z$_][0-9A-Za-z$_]*/
          }),
          {
            begin: /</, end: />/
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/, endsParent: true,
            keywords: SWIFT_KEYWORDS,
            contains: [
              'self',
              NUMBERS,
              QUOTE_STRING_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              {begin: ':'} // relevance booster
            ],
            illegal: /["']/
          }
        ],
        illegal: /\[|%/
      },
      {
        className: 'class',
        beginKeywords: 'struct protocol class extension enum',
        keywords: SWIFT_KEYWORDS,
        end: '\\{',
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})
        ]
      },
      {
        className: 'meta', // @attributes
        begin: '(@warn_unused_result|@exported|@lazy|@noescape|' +
                  '@NSCopying|@NSManaged|@objc|@convention|@required|' +
                  '@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|' +
                  '@infix|@prefix|@postfix|@autoclosure|@testable|@available|' +
                  '@nonobjc|@NSApplicationMain|@UIApplicationMain)'

      },
      {
        beginKeywords: 'import', end: /$/,
        contains: [hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT]
      }
    ]
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/},
              {begin: /'/, end: /'/},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<!DOCTYPE', end: '>',
        relevance: 10,
        contains: [{begin: '\\[', end: '\\]'}]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      {
        begin: /<\?(php)?/, end: /\?>/,
        subLanguage: 'php',
        contains: [{begin: '/\\*', end: '\\*/', skip: true}]
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>|$)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>|$)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
        }
      },
      {
        className: 'meta',
        variants: [
          {begin: /<\?xml/, end: /\?>/, relevance: 10},
          {begin: /<\?\w+/, end: /\?>/}
        ]
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var RUBY_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  var RUBY_KEYWORDS = {
    keyword:
      'and then defined module in return redo if BEGIN retry end for self when ' +
      'next until do begin unless END rescue else break undef not super class case ' +
      'require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
    literal:
      'true false nil'
  };
  var YARDOCTAG = {
    className: 'doctag',
    begin: '@[A-Za-z]+'
  };
  var IRB_OBJECT = {
    begin: '#<', end: '>'
  };
  var COMMENT_MODES = [
    hljs.COMMENT(
      '#',
      '$',
      {
        contains: [YARDOCTAG]
      }
    ),
    hljs.COMMENT(
      '^\\=begin',
      '^\\=end',
      {
        contains: [YARDOCTAG],
        relevance: 10
      }
    ),
    hljs.COMMENT('^__END__', '\\n$')
  ];
  var SUBST = {
    className: 'subst',
    begin: '#\\{', end: '}',
    keywords: RUBY_KEYWORDS
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [
      {begin: /'/, end: /'/},
      {begin: /"/, end: /"/},
      {begin: /`/, end: /`/},
      {begin: '%[qQwWx]?\\(', end: '\\)'},
      {begin: '%[qQwWx]?\\[', end: '\\]'},
      {begin: '%[qQwWx]?{', end: '}'},
      {begin: '%[qQwWx]?<', end: '>'},
      {begin: '%[qQwWx]?/', end: '/'},
      {begin: '%[qQwWx]?%', end: '%'},
      {begin: '%[qQwWx]?-', end: '-'},
      {begin: '%[qQwWx]?\\|', end: '\\|'},
      {
        // \B in the beginning suppresses recognition of ?-sequences where ?
        // is the last character of a preceding identifier, as in: `func?4`
        begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
      },
      {
        begin: /<<(-?)\w+$/, end: /^\s*\w+$/,
      }
    ]
  };
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)', endsParent: true,
    keywords: RUBY_KEYWORDS
  };

  var RUBY_DEFAULT_CONTAINS = [
    STRING,
    IRB_OBJECT,
    {
      className: 'class',
      beginKeywords: 'class module', end: '$|;',
      illegal: /=/,
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
        {
          begin: '<\\s*',
          contains: [{
            begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE
          }]
        }
      ].concat(COMMENT_MODES)
    },
    {
      className: 'function',
      beginKeywords: 'def', end: '$|;',
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {begin: RUBY_METHOD_RE}),
        PARAMS
      ].concat(COMMENT_MODES)
    },
    {
      // swallow namespace qualifiers before symbols
      begin: hljs.IDENT_RE + '::'
    },
    {
      className: 'symbol',
      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
      relevance: 0
    },
    {
      className: 'symbol',
      begin: ':(?!\\s)',
      contains: [STRING, {begin: RUBY_METHOD_RE}],
      relevance: 0
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0
    },
    {
      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' // variables
    },
    {
      className: 'params',
      begin: /\|/, end: /\|/,
      keywords: RUBY_KEYWORDS
    },
    { // regexp container
      begin: '(' + hljs.RE_STARTERS_RE + '|unless)\\s*',
      keywords: 'unless',
      contains: [
        IRB_OBJECT,
        {
          className: 'regexp',
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          illegal: /\n/,
          variants: [
            {begin: '/', end: '/[a-z]*'},
            {begin: '%r{', end: '}[a-z]*'},
            {begin: '%r\\(', end: '\\)[a-z]*'},
            {begin: '%r!', end: '![a-z]*'},
            {begin: '%r\\[', end: '\\][a-z]*'}
          ]
        }
      ].concat(COMMENT_MODES),
      relevance: 0
    }
  ].concat(COMMENT_MODES);

  SUBST.contains = RUBY_DEFAULT_CONTAINS;
  PARAMS.contains = RUBY_DEFAULT_CONTAINS;

  var SIMPLE_PROMPT = "[>?]>";
  var DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+>";
  var RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>";

  var IRB_DEFAULT = [
    {
      begin: /^\s*=>/,
      starts: {
        end: '$', contains: RUBY_DEFAULT_CONTAINS
      }
    },
    {
      className: 'meta',
      begin: '^('+SIMPLE_PROMPT+"|"+DEFAULT_PROMPT+'|'+RVM_PROMPT+')',
      starts: {
        end: '$', contains: RUBY_DEFAULT_CONTAINS
      }
    }
  ];

  return {
    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
    keywords: RUBY_KEYWORDS,
    illegal: /\/\*/,
    contains: COMMENT_MODES.concat(IRB_DEFAULT).concat(RUBY_DEFAULT_CONTAINS)
  };
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var VAR = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };

  return {
    aliases: ['sh', 'zsh'],
    lexemes: /\b-?[a-z\._]+\b/,
    keywords: {
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp',
      _:
        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
    },
    contains: [
      {
        className: 'meta',
        begin: /^#![^\n]+sh\s*$/,
        relevance: 10
      },
      {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
        relevance: 0
      },
      hljs.HASH_COMMENT_MODE,
      QUOTE_STRING,
      APOS_STRING,
      VAR
    ]
  };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "hljs": {
        "display": "block",
        "background": "white",
        "padding": "0.5em",
        "color": "#333333",
        "overflowX": "auto"
    },
    "hljs-comment": {
        "color": "#969896"
    },
    "hljs-meta": {
        "color": "#969896"
    },
    "hljs-string": {
        "color": "#df5000"
    },
    "hljs-variable": {
        "color": "#df5000"
    },
    "hljs-template-variable": {
        "color": "#df5000"
    },
    "hljs-strong": {
        "color": "#df5000"
    },
    "hljs-emphasis": {
        "color": "#df5000"
    },
    "hljs-quote": {
        "color": "#df5000"
    },
    "hljs-keyword": {
        "color": "#a71d5d"
    },
    "hljs-selector-tag": {
        "color": "#a71d5d"
    },
    "hljs-type": {
        "color": "#a71d5d"
    },
    "hljs-literal": {
        "color": "#0086b3"
    },
    "hljs-symbol": {
        "color": "#0086b3"
    },
    "hljs-bullet": {
        "color": "#0086b3"
    },
    "hljs-attribute": {
        "color": "#0086b3"
    },
    "hljs-section": {
        "color": "#63a35c"
    },
    "hljs-name": {
        "color": "#63a35c"
    },
    "hljs-tag": {
        "color": "#333333"
    },
    "hljs-title": {
        "color": "#795da3"
    },
    "hljs-attr": {
        "color": "#795da3"
    },
    "hljs-selector-id": {
        "color": "#795da3"
    },
    "hljs-selector-class": {
        "color": "#795da3"
    },
    "hljs-selector-attr": {
        "color": "#795da3"
    },
    "hljs-selector-pseudo": {
        "color": "#795da3"
    },
    "hljs-addition": {
        "color": "#55a532",
        "backgroundColor": "#eaffea"
    },
    "hljs-deletion": {
        "color": "#bd2c00",
        "backgroundColor": "#ffecec"
    },
    "hljs-link": {
        "textDecoration": "underline"
    }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (0, _glamorous2.default)(_index.Flex).withConfig({
  displayName: 'dialog__Container'
})({
  flexDirection: 'column',
  position: 'relative',
  top: '15vh',
  minWidth: (0, _polished.rem)(450),
  maxWidth: (0, _polished.rem)(552),
  padding: (0, _polished.rem)(24)
}, function (props) {
  return {
    backgroundColor: props.theme.whiteColor,
    borderRadius: props.theme.borderRadius1,
    boxShadow: props.theme.boxShadow3
  };
});

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          title = _props.title,
          danger = _props.danger,
          onConfirm = _props.onConfirm,
          onCancel = _props.onCancel,
          canConfirm = _props.canConfirm,
          confirmText = _props.confirmText,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'title', 'danger', 'onConfirm', 'onCancel', 'canConfirm', 'confirmText', 'children']);

      return _react2.default.createElement(
        _index.Portal,
        _extends({}, props, { withBackdrop: true, isInstant: true }),
        _react2.default.createElement(
          _index.Flex,
          {
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: '1',
            'data-root': true
          },
          _react2.default.createElement(
            Container,
            { className: className, gutter: 24 },
            _react2.default.createElement(
              _index.Flex,
              { flexDirection: 'column', gutter: 24 },
              title && _react2.default.createElement(
                _index.H1,
                null,
                title
              ),
              children,
              _react2.default.createElement(
                _index.Flex,
                { justifyContent: 'space-between', gutter: 24 },
                _react2.default.createElement(
                  _index.Button,
                  {
                    onClick: onConfirm,
                    danger: danger,
                    primary: true,
                    disabled: !canConfirm
                  },
                  confirmText
                ),
                _react2.default.createElement(
                  _index.Button,
                  { onClick: onCancel, secondary: true },
                  'Cancel'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  children: _propTypes2.default.node.isRequired,
  isOpen: _propTypes2.default.bool,
  title: _propTypes2.default.string.isRequired,
  confirmText: _propTypes2.default.string.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onConfirm: _propTypes2.default.func.isRequired,
  canConfirm: _propTypes2.default.bool,
  danger: _propTypes2.default.bool,
  className: _propTypes2.default.string // eslint-disable-line react/require-default-props
};
Dialog.defaultProps = {
  isOpen: false,
  canConfirm: true,
  danger: false
};
exports.default = Dialog;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _iconSet = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SVG = (0, _glamorous2.default)('svg', { propsAreCssOverrides: true }).withConfig({
  displayName: 'icon__SVG'
})({
  fill: 'currentcolor',
  verticalAlign: 'middle'
}, function (_ref) {
  var width = _ref.width,
      height = _ref.height;
  return {
    minWidth: width,
    minHeight: height
  };
});

function Icon(props) {
  var name = props.name,
      size = props.size,
      other = _objectWithoutProperties(props, ['name', 'size']);

  if (_iconSet.icons.indexOf(name) === -1) {
    // eslint-disable-next-line no-console
    console.warn(name + ' not found in iconset; no-op');
    return null;
  }

  var width = size;
  var height = size;
  if (typeof size === 'string' && size.indexOf('x') > -1) {
    var _size$split = size.split('x');

    var _size$split2 = _slicedToArray(_size$split, 2);

    width = _size$split2[0];
    height = _size$split2[1];
  }

  return _react2.default.createElement(
    SVG,
    _extends({}, other, { width: width, height: height }),
    _react2.default.createElement('use', { xlinkHref: '#icon:' + name })
  );
}

var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

SVG.propTypes = {
  color: _propTypes2.default.string.isRequired,
  width: stringOrNumber.isRequired,
  height: stringOrNumber.isRequired
};

SVG.defaultProps = {
  color: 'inherit',
  width: 24,
  height: 24
};

Icon.propTypes = {
  name: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  size: stringOrNumber
};

Icon.defaultProps = {
  color: 'inherit',
  size: 24
};

exports.default = Icon;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineCode = (0, _glamorous2.default)('code', { propsAreCssOverrides: true }).withConfig({
  displayName: 'inline-code__InlineCode'
})(_extends({
  fontSize: (0, _polished.rem)(14)
}, (0, _polished.padding)((0, _polished.rem)(1), (0, _polished.rem)(3), (0, _polished.rem)(3))), function (_ref) {
  var theme = _ref.theme;
  return {
    fontFamily: theme.monoFontFamily,
    backgroundColor: theme.lightGreyColor,
    borderRadius: theme.borderRadius1
  };
});

exports.default = InlineCode;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = (0, _glamorous2.default)('label', {
  propsAreCssOverrides: true,
  filterProps: ['error']
}).withConfig({
  displayName: 'label__Label'
})({
  display: 'flex',
  flexDirection: 'column',
  fontSize: (0, _polished.rem)(12),
  letterSpacing: (0, _polished.rem)(1),
  textTransform: 'uppercase',
  '& input, textarea': {
    marginTop: (0, _polished.rem)(6)
  }
}, function (_ref) {
  var error = _ref.error,
      theme = _ref.theme;
  return {
    color: error ? theme.negativeColor : theme.tertiaryTextColor
  };
});

exports.default = Label;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(74);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RouterLink = (0, _glamorous2.default)(_reactRouter.Link, {
  propsAreCssOverrides: true,
  filterProps: ['external']
}).withConfig({
  displayName: 'link__RouterLink'
})({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}, function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.primaryColor
  };
});

var Link = function Link(props) {
  var external = props.external,
      rest = _objectWithoutProperties(props, ['external']);

  if (external) {
    return _react2.default.createElement(RouterLink, _extends({ target: '_blank', rel: 'noopener noreferrer' }, rest));
  }
  return _react2.default.createElement(RouterLink, props);
};

Link.propTypes = {
  to: _propTypes2.default.string.isRequired,
  external: _propTypes2.default.bool
};

Link.defaultProps = {
  external: false
};

exports.default = Link;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var boxShadow = '\n  0 16px 24px 2px rgba(0, 0, 0, .14),\n  0  6px 30px 5px rgba(0, 0, 0, .12),\n  0  8px 10px -5px rgba(0, 0, 0, .4)\n';

var Container = (0, _glamorous2.default)(_index.Flex).withConfig({
  displayName: 'modal__Container'
})({
  flexDirection: 'column',
  position: 'relative',
  padding: 10,
  borderRadius: 2,
  backgroundColor: '#fff',
  boxShadow: boxShadow
});

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          children = _props.children,
          withBackdrop = _props.withBackdrop,
          dismissOnClickInside = _props.dismissOnClickInside,
          onClickOutside = _props.onClickOutside,
          rest = _objectWithoutProperties(_props, ['isOpen', 'children', 'withBackdrop', 'dismissOnClickInside', 'onClickOutside']);

      return _react2.default.createElement(
        _index.Portal,
        {
          isOpen: isOpen,
          withBackdrop: withBackdrop,
          dismissOnClickInside: dismissOnClickInside,
          onClickOutside: onClickOutside
        },
        _react2.default.createElement(
          _index.Flex,
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
          _react2.default.createElement(
            Container,
            rest,
            children
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  isOpen: _propTypes2.default.bool,
  withBackdrop: _propTypes2.default.bool,
  dismissOnClickInside: _propTypes2.default.bool,
  onClickOutside: _propTypes2.default.func // eslint-disable-line react/require-default-props
};
Modal.defaultProps = {
  isOpen: false,
  withBackdrop: false,
  dismissOnClickInside: false
};
exports.default = Modal;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(77);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = (0, _glamorous2.default)(_index.Flex).withConfig({
  displayName: 'portal__Container'
})({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  opacity: 0,
  transition: 'opacity ease-out .18s'
}, function (props) {
  return {
    zIndex: props.theme.zIndex2,
    backgroundColor: props.withBackdrop ? 'rgba(0, 0, 0, .2)' : 'transparent',
    opacity: props.isInstant && 1,
    pointerEvents: props.clickThrough && 'none'
  };
});

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      // True when clicking on the portal and not on the rendered children,
      // unless the root of the rendered children has data-root set.
      if (event.currentTarget.children[0] === event.target || event.target.getAttribute('data-root')) {
        _this.unrenderPortal();
      }

      if (_this.props.dismissOnClickInside && event.currentTarget.contains(event.target)) {
        _this.unrenderPortal();
      }
    }, _this.unrenderPortal = function () {
      if (!_this.dismissing && !_this.rootContainer) {
        return;
      }

      if (_this.props.onClickOutside) {
        _this.props.onClickOutside();
      }

      if (!_this.dismissing && _this.rootContainer) {
        _this.dismissing = true;
        _this.container.style.opacity = 0;
        setTimeout(function () {
          (0, _reactDom.unmountComponentAtNode)(_this.rootContainer);
          if (_this.props.withBackdrop) {
            document.body.style.overflow = 'auto';
          }
          document.body.removeChild(_this.rootContainer);
          _this.rootContainer = null;
          _this.dismissing = false;
        }, _this.props.isInstant ? 0 : 200);
      }
    }, _this.renderContainer = function () {
      var _this$props = _this.props,
          withBackdrop = _this$props.withBackdrop,
          isInstant = _this$props.isInstant,
          clickThrough = _this$props.clickThrough;

      return _react2.default.createElement(
        Container,
        {
          innerRef: function innerRef(c) {
            return _this.container = c;
          },
          clickThrough: clickThrough,
          isInstant: isInstant,
          withBackdrop: withBackdrop
        },
        typeof _this.props.children === 'function' ? _this.props.children() : _this.props.children
      );
    }, _this.renderPortal = function () {
      if (!_this.props.isOpen) {
        return;
      }

      if (_this.rootContainer) {
        return (0, _reactDom.unstable_renderSubtreeIntoContainer)(_this, _this.renderContainer(), _this.rootContainer);
      }

      if (_this.props.uniqueId && document.getElementById(_this.props.uniqueId)) {
        _this.rootContainer = document.getElementById(_this.props.uniqueId);
      } else {
        _this.rootContainer = document.createElement('div');
        if (_this.props.uniqueId) {
          _this.rootContainer.id = _this.props.uniqueId;
        }
        if (_this.props.withBackdrop) {
          document.body.style.overflow = 'hidden';
        }
        document.body.appendChild(_this.rootContainer);
      }

      if (!_this.props.isInstant) {
        // Apply opacity to the modal to trigger a transition.
        setTimeout(function () {
          return _this.container.style.opacity = 1;
        }, 50);
      }

      if (_this.props.children) {
        (0, _reactDom.unstable_renderSubtreeIntoContainer)(_this, _this.renderContainer(), _this.rootContainer);
      }

      if (_this.props.onClickOutside) {
        _this.rootContainer.addEventListener('click', _this.onClick);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.dismissing) {
        if (this.props.isOpen) {
          this.renderPortal();
        } else {
          this.unrenderPortal();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Tear down the portal if the parent component stops rendering it.
      // This can be made configurable if a persistent modal is required.
      this.unrenderPortal();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  clickThrough: _propTypes2.default.bool,
  dismissOnClickInside: _propTypes2.default.bool,
  isInstant: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  withBackdrop: _propTypes2.default.bool,
  onClickOutside: _propTypes2.default.func, // eslint-disable-line react/require-default-props
  uniqueId: _propTypes2.default.string // eslint-disable-line react/require-default-props
};
Portal.defaultProps = {
  clickThrough: false,
  dismissOnClickInside: false,
  isInstant: false,
  isOpen: false,
  withBackdrop: false
};
exports.default = Portal;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _index = __webpack_require__(3);

var _input = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = (0, _glamorous2.default)('textarea', {
  propsAreCssOverrides: true,
  filterProps: ['error', 'raised', 'label']
}).withConfig({
  displayName: 'textarea__Container'
})(_input.inputStyles, {
  height: 'inherit'
});

function Textarea(props) {
  if (props.label) {
    return _react2.default.createElement(
      _index.Label,
      { error: props.error },
      props.label,
      _react2.default.createElement(Container, _extends({}, props, { value: props.value == null ? '' : props.value }))
    );
  }
  return _react2.default.createElement(Container, _extends({}, props, { value: props.value == null ? '' : props.value }));
}

Textarea.propTypes = {
  error: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired
};

Textarea.defaultProps = {
  error: false,
  label: ''
};

exports.default = Textarea;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = __webpack_require__(17);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = exports.options = {
  propsAreCssOverrides: true,
  filterProps: ['id', 'dismiss', 'onDismiss', 'text', 'timeout', 'primary', 'success', 'warning', 'danger']
};

var Container = (0, _glamorous2.default)('div', options).withConfig({
  displayName: 'toast__Container'
})(_extends({
  maxWidth: (0, _polished.rem)(360),
  margin: (0, _polished.rem)(6)
}, (0, _polished.padding)((0, _polished.rem)(12), (0, _polished.rem)(18)), {
  pointerEvents: 'auto',
  borderRadius: 2,
  fontWeight: 500,
  cursor: 'pointer'
}), function (props) {
  var variant = (0, _index.colorVariant)(props);
  return {
    boxShadow: props.theme.boxShadow3,
    color: variant === props.theme.whiteColor ? props.theme.primaryTextColor : props.theme.whiteColor,
    backgroundColor: variant,
    borderRadius: props.theme.borderRadius1
  };
});

var Toast = function (_Component) {
  _inherits(Toast, _Component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      x: 100,
      opacity: 0
    }, _this.timeouts = [], _this.dismiss = function (event) {
      _this.timeouts.forEach(clearTimeout);

      _this.setState({
        x: event ? 0 : 100,
        opacity: 0
      });

      // Remove the toast from the DOM after animating for subsequent toasts to
      // appear in the initial position or when multiple toasts are visible.
      if (_this.props.onDismiss) {
        _this.timeouts.push(setTimeout(function () {
          _this.props.onDismiss({ id: _this.props.id });
        }, 600));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Show the toast by sliding it in and making it visible.
      this.setState({ isOpen: true, x: 0, opacity: 1 });
      if (this.props.timeout) {
        this.timeouts.push(setTimeout(this.dismiss, this.props.timeout));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timeouts.forEach(clearTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          text = _props.text,
          other = _objectWithoutProperties(_props, ['text']);

      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            x: (0, _reactMotion.spring)(this.state.x),
            opacity: (0, _reactMotion.spring)(this.state.opacity)
          }
        },
        function (_ref2) {
          var x = _ref2.x,
              opacity = _ref2.opacity;
          return _react2.default.createElement(
            Container,
            _extends({
              onClick: _this2.dismiss,
              style: {
                opacity: opacity,
                WebkitTransform: 'translate3d(' + x + '%, 0, 0)',
                transform: 'translate3d(' + x + '%, 0, 0)'
              }
            }, other),
            text,
            _this2.props.dismiss && _react2.default.createElement(_index.Icon, {
              name: 'close',
              color: 'inherit',
              size: '18',
              marginLeft: (0, _polished.rem)(12),
              float: 'right'
            })
          );
        }
      );
    }
  }]);

  return Toast;
}(_react.Component);

Toast.propTypes = {
  id: _propTypes2.default.number, // eslint-disable-line react/require-default-props
  dismiss: _propTypes2.default.bool, // eslint-disable-line react/require-default-props
  onDismiss: _propTypes2.default.func, // eslint-disable-line react/require-default-props
  text: _propTypes2.default.string.isRequired,
  timeout: _propTypes2.default.number,
  primary: _propTypes2.default.bool,
  success: _propTypes2.default.bool,
  warning: _propTypes2.default.bool,
  danger: _propTypes2.default.bool
};
Toast.defaultProps = {
  timeout: 0,
  primary: false,
  success: false,
  warning: false,
  danger: false
};
exports.default = Toast;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = __webpack_require__(17);

var _glamorous = __webpack_require__(0);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _polished = __webpack_require__(4);

var _index = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tooltipStyles = function tooltipStyles(props) {
  if (props.position === 'top') {
    return {
      top: '100%',
      left: '50%',
      marginLeft: '-5px',
      borderTop: 'solid 5px ' + props.theme.primaryColor,
      borderBottom: 'none'
    };
  } else if (props.position === 'right') {
    return {
      top: '50%',
      left: '-5px',
      marginTop: '-5px',
      borderRight: 'solid 5px ' + props.theme.primaryColor,
      borderLeft: 'none'
    };
  } else if (props.position === 'bottom') {
    return {
      top: '-5px',
      left: '50%',
      marginLeft: '-5px',
      borderBottom: 'solid 5px ' + props.theme.primaryColor,
      borderTop: 'none'
    };
  } else if (props.position === 'left') {
    return {
      top: '50%',
      left: '100%',
      marginTop: '-5px',
      borderRight: 'none'
    };
  }
  return {};
};

var TooltipBubble = (0, _glamorous2.default)('div').withConfig({
  displayName: 'tooltip__TooltipBubble'
})(_extends({
  position: 'absolute'
}, (0, _polished.padding)((0, _polished.rem)(6), (0, _polished.rem)(12)), {
  fontSize: (0, _polished.rem)(14),
  textAlign: 'center',
  whiteSpace: 'nowrap',
  transition: 'opacity .18s',
  '&::after': {
    content: '',
    position: 'absolute',
    width: 0,
    height: 0,
    border: 'solid 5px transparent'
  }
}), function (props) {
  var backgroundColor = (0, _index.colorVariant)(props);
  if (backgroundColor === props.theme.whiteColor) {
    backgroundColor = props.theme.primaryColor;
  }
  return {
    color: props.theme.whiteColor,
    backgroundColor: backgroundColor,
    borderRadius: props.theme.borderRadius1,
    zIndex: props.visible ? props.theme.zIndex1 : props.theme.zIndex0,
    opacity: props.visible ? 1 : 0,
    '&::after': _extends({}, tooltipStyles(props))
  };
});

var sharedPropTypes = {
  position: _propTypes2.default.oneOf(['top', 'left', 'bottom', 'right'])
};

TooltipBubble.propTypes = _extends({}, sharedPropTypes, {
  visible: _propTypes2.default.bool
});

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.onMouseEnter = function () {
      _this.hovering = true;
      setTimeout(function () {
        if (!_this.props.isOpen && _this.hovering) {
          _this.setState(_extends({ isOpen: true }, _this.calculateOffsets()));
        }
      }, _this.props.timeout);
    };

    _this.onMouseLeave = function () {
      _this.hovering = false;
      if (!_this.props.isOpen) {
        _this.setState({ isOpen: false });
      }
    };

    _this.calculateOffsets = function () {
      var offsetWidth = (_this.child.offsetWidth - _this.tooltip.offsetWidth) / 2;
      var offsetHeight = (_this.child.offsetHeight - _this.tooltip.offsetHeight) / 2;

      switch (_this.props.position) {
        case 'right':
          return {
            x: 10,
            y: 0,
            offsetLeft: _this.child.offsetWidth,
            offsetTop: offsetHeight
          };
        case 'bottom':
          return {
            x: 0,
            y: 10,
            offsetLeft: offsetWidth,
            offsetTop: _this.child.offsetHeight
          };
        case 'left':
          return {
            x: -10,
            y: 0,
            offsetLeft: -_this.tooltip.offsetWidth,
            offsetTop: offsetHeight
          };
        default:
          return {
            x: 0,
            y: -10,
            offsetLeft: offsetWidth,
            offsetTop: -_this.tooltip.offsetHeight
          };
      }
    };

    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var offsets = this.calculateOffsets();
      offsets.offsetLeft += offsets.x;
      offsets.offsetTop += offsets.y;
      this.setState(_extends({}, offsets));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _index.Block,
        { position: 'relative' },
        _react2.default.createElement(
          _reactMotion.Motion,
          {
            style: {
              x: (0, _reactMotion.spring)(this.state.isOpen ? this.state.x : 0),
              y: (0, _reactMotion.spring)(this.state.isOpen ? this.state.y : 0)
            }
          },
          function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            return _react2.default.createElement(
              TooltipBubble,
              {
                innerRef: function innerRef(c) {
                  return _this2.tooltip = c;
                },
                position: _this2.props.position,
                visible: _this2.state.isOpen || _this2.props.isOpen,
                success: _this2.props.success,
                warning: _this2.props.warning,
                danger: _this2.props.danger,
                style: {
                  left: _this2.state.offsetLeft,
                  top: _this2.state.offsetTop,
                  WebkitTransform: 'translate3d(' + x + 'px, ' + y + 'px, 0)',
                  transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)'
                }
              },
              _this2.props.text
            );
          }
        ),
        _react2.default.createElement(
          _index.Inline,
          {
            cursor: 'pointer',
            innerRef: function innerRef(c) {
              return _this2.child = c;
            },
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
          },
          this.props.children
        )
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.propTypes = _extends({}, sharedPropTypes, {
  children: _propTypes2.default.node.isRequired,
  isOpen: _propTypes2.default.bool,
  timeout: _propTypes2.default.number,
  text: _propTypes2.default.string.isRequired
});
Tooltip.defaultProps = {
  position: 'top',
  timeout: 80,
  isOpen: false
};
exports.default = Tooltip;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertGlobalBaseStyles;

var _glamor = __webpack_require__(82);

function insertGlobalBaseStyles(theme) {
  _glamor.css.global('html, body', {
    width: '100%',
    minHeight: '100vh',
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    color: theme.primaryTextColor,
    backgroundColor: theme.backgroundColor1,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  });

  _glamor.css.global('*', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0
  });
}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_82__;

/***/ })
/******/ ]);
});