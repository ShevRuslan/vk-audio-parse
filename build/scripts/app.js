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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scripts/app.js":
/*!****************************!*\
  !*** ./app/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ParseVKAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ParseVKAudio */ \"./app/scripts/modules/ParseVKAudio.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  window.parse = new _modules_ParseVKAudio__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    element: document.querySelector(\"._audio_page__audio_rows_list\")\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9hcHAuanM/YTdiNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJwYXJzZSIsIlBhcnNlVktBdWRpbyIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsREMsUUFBTSxDQUFDQyxLQUFQLEdBQWUsSUFBSUMsNkRBQUosQ0FBaUI7QUFDOUJDLFdBQU8sRUFBRUwsUUFBUSxDQUFDTSxhQUFULENBQXVCLCtCQUF2QjtBQURxQixHQUFqQixDQUFmO0FBR0QsQ0FKRCIsImZpbGUiOiIuL2FwcC9zY3JpcHRzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZVZLQXVkaW8gZnJvbSBcIi4vbW9kdWxlcy9QYXJzZVZLQXVkaW9cIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIHdpbmRvdy5wYXJzZSA9IG5ldyBQYXJzZVZLQXVkaW8oe1xyXG4gICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5fYXVkaW9fcGFnZV9fYXVkaW9fcm93c19saXN0XCIpLFxyXG4gIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/scripts/app.js\n");

/***/ }),

/***/ "./app/scripts/modules/ParseVKAudio.js":
/*!*********************************************!*\
  !*** ./app/scripts/modules/ParseVKAudio.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(_ref) {\n    var element = _ref.element;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);\n\n    this.element = element;\n    this.audio = [];\n    this.time = {\n      minutes: 0,\n      seconds: 0\n    };\n    this.observer = null;\n    this.height = window.innerHeight;\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{\n    key: \"getAudio\",\n    value: function getAudio(params) {\n      if ((params === null || params === void 0 ? void 0 : params.length) <= 100) {\n        this.parseAudio(params);\n        console.log(\"MAKE OBSERVE!\");\n        window.scrollBy(0, 10000);\n      }\n    }\n  }, {\n    key: \"parseAudio\",\n    value: function parseAudio(elements) {\n      var _this = this;\n\n      elements.forEach(function (element) {\n        var audio = element !== null && element !== void 0 && element.addedNodes ? element.addedNodes[0] : element;\n        var name = audio.querySelector(\".audio_row__title_inner\").textContent;\n        var time = audio.querySelector(\".audio_row__duration\").textContent;\n\n        if (time != \"\") {\n          _this.audio.push({\n            name: name,\n            time: time\n          });\n\n          var arrayTime = time.split(\":\");\n          _this.time.minutes += +arrayTime[0];\n          _this.time.seconds += +arrayTime[1] + arrayTime[0] * 60;\n        }\n      });\n    }\n  }, {\n    key: \"getMinuteFromSeconds\",\n    value: function getMinuteFromSeconds(sec) {\n      var minute = Math.floor(sec / 60);\n      var seconds = sec - minute * 60;\n      return {\n        minute: minute,\n        seconds: seconds\n      };\n    }\n  }, {\n    key: \"getHoursFromMinute\",\n    value: function getHoursFromMinute(min) {\n      var hour = Math.floor(min / 60);\n      var minutes = min - hour * 60;\n      return {\n        hour: hour,\n        minutes: minutes\n      };\n    }\n  }, {\n    key: \"createObserve\",\n    value: function createObserve() {\n      var _this2 = this;\n\n      this.observer = new MutationObserver(function (params) {\n        return _this2.getAudio(params);\n      });\n      this.observer.observe(this.element, {\n        childList: true,\n        // наблюдать за непосредственными детьми\n        characterDataOldValue: false // передавать старое значение в колбэк\n\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.parseAudio(this.element.querySelectorAll(\".audio_row\"));\n      this.createObserve();\n      window.scrollBy(0, 10000);\n    }\n  }, {\n    key: \"getInformation\",\n    value: function getInformation() {\n      console.table(this.audio);\n      console.log(\"\\u041E\\u0431\\u0449\\u0435\\u0435 \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043C\\u0438\\u043D\\u0443\\u0442:\".concat(this.time.minutes, \", \\u041E\\u0431\\u0449\\u0435\\u0435 \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0441\\u0435\\u043A\\u0443\\u043D\\u0434:\").concat(this.time.seconds));\n\n      var _this$getMinuteFromSe = this.getMinuteFromSeconds(this.time.seconds),\n          minute = _this$getMinuteFromSe.minute,\n          seconds = _this$getMinuteFromSe.seconds;\n\n      var _this$getHoursFromMin = this.getHoursFromMinute(minute),\n          hour = _this$getHoursFromMin.hour,\n          minutes = _this$getHoursFromMin.minutes;\n\n      console.log(\"\".concat(hour, \":\").concat(minutes, \":\").concat(seconds));\n    }\n  }]);\n\n  return _default;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9tb2R1bGVzL1BhcnNlVktBdWRpby5qcz9mMmYxIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJhdWRpbyIsInRpbWUiLCJtaW51dGVzIiwic2Vjb25kcyIsIm9ic2VydmVyIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbml0IiwicGFyYW1zIiwibGVuZ3RoIiwicGFyc2VBdWRpbyIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxCeSIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImFkZGVkTm9kZXMiLCJuYW1lIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicHVzaCIsImFycmF5VGltZSIsInNwbGl0Iiwic2VjIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwibWluIiwiaG91ciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJnZXRBdWRpbyIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhT2xkVmFsdWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlT2JzZXJ2ZSIsInRhYmxlIiwiZ2V0TWludXRlRnJvbVNlY29uZHMiLCJnZXRIb3Vyc0Zyb21NaW51dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDRSwwQkFBeUI7QUFBQSxRQUFYQSxPQUFXLFFBQVhBLE9BQVc7O0FBQUE7O0FBQ3ZCLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZO0FBQ1ZDLGFBQU8sRUFBRSxDQURDO0FBRVZDLGFBQU8sRUFBRTtBQUZDLEtBQVo7QUFJQSxTQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxNQUFNLENBQUNDLFdBQXJCO0FBQ0EsU0FBS0MsSUFBTDtBQUNEOzs7O1dBQ0Qsa0JBQVNDLE1BQVQsRUFBaUI7QUFDZixVQUFJLENBQUFBLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEs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RCxnSkFBb0YsS0FBS0QsSUFBTCxDQUFVRSxPQUE5Rjs7QUFGZSxrQ0FHYSxLQUFLbUMsb0JBQUwsQ0FBMEIsS0FBS3JDLElBQUwsQ0FBVUUsT0FBcEMsQ0FIYjtBQUFBLFVBR1BzQixNQUhPLHlCQUdQQSxNQUhPO0FBQUEsVUFHQ3RCLE9BSEQseUJBR0NBLE9BSEQ7O0FBQUEsa0NBSVcsS0FBS29DLGtCQUFMLENBQXdCZCxNQUF4QixDQUpYO0FBQUEsVUFJUEksSUFKTyx5QkFJUEEsSUFKTztBQUFBLFVBSUQzQixPQUpDLHlCQUlEQSxPQUpDOztBQUtmVSxhQUFPLENBQUNDLEdBQVIsV0FBZWdCLElBQWYsY0FBdUIzQixPQUF2QixjQUFrQ0MsT0FBbEM7QUFDRCIsImZpbGUiOiIuL2FwcC9zY3JpcHRzL21vZHVsZXMvUGFyc2VWS0F1ZGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5hdWRpbyA9IFtdO1xyXG4gICAgdGhpcy50aW1lID0ge1xyXG4gICAgICBtaW51dGVzOiAwLFxyXG4gICAgICBzZWNvbmRzOiAwLFxyXG4gICAgfTtcclxuICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgZ2V0QXVkaW8ocGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zPy5sZW5ndGggPD0gMTAwKSB7XHJcbiAgICAgIHRoaXMucGFyc2VBdWRpbyhwYXJhbXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk1BS0UgT0JTRVJWRSFcIik7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxMDAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhcnNlQXVkaW8oZWxlbWVudHMpIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgYXVkaW8gPSBlbGVtZW50Py5hZGRlZE5vZGVzID8gZWxlbWVudC5hZGRlZE5vZGVzWzBdIDogZWxlbWVudDtcclxuICAgICAgY29uc3QgbmFtZSA9IGF1ZGlvLnF1ZXJ5U2VsZWN0b3IoXCIuYXVkaW9fcm93X190aXRsZV9pbm5lclwiKS50ZXh0Q29udGVudDtcclxuICAgICAgY29uc3QgdGltZSA9IGF1ZGlvLnF1ZXJ5U2VsZWN0b3IoXCIuYXVkaW9fcm93X19kdXJhdGlvblwiKS50ZXh0Q29udGVudDtcclxuICAgICAgaWYgKHRpbWUgIT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucHVzaCh7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgdGltZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhcnJheVRpbWUgPSB0aW1lLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICB0aGlzLnRpbWUubWludXRlcyArPSArYXJyYXlUaW1lWzBdO1xyXG4gICAgICAgIHRoaXMudGltZS5zZWNvbmRzICs9ICthcnJheVRpbWVbMV0gKyBhcnJheVRpbWVbMF0gKiA2MDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldE1pbnV0ZUZyb21TZWNvbmRzKHNlYykge1xyXG4gICAgbGV0IG1pbnV0ZSA9IE1hdGguZmxvb3Ioc2VjIC8gNjApO1xyXG4gICAgbGV0IHNlY29uZHMgPSBzZWMgLSBtaW51dGUgKiA2MDtcclxuICAgIHJldHVybiB7IG1pbnV0ZSwgc2Vjb25kcyB9O1xyXG4gIH1cclxuICBnZXRIb3Vyc0Zyb21NaW51dGUobWluKSB7XHJcbiAgICBsZXQgaG91ciA9IE1hdGguZmxvb3IobWluIC8gNjApO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSBtaW4gLSBob3VyICogNjA7XHJcbiAgICByZXR1cm4geyBob3VyLCBtaW51dGVzIH07XHJcbiAgfVxyXG4gIGNyZWF0ZU9ic2VydmUoKSB7XHJcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHBhcmFtcykgPT4gdGhpcy5nZXRBdWRpbyhwYXJhbXMpKTtcclxuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgY2hpbGRMaXN0OiB0cnVlLCAvLyDQvdCw0LHQu9GO0LTQsNGC0Ywg0LfQsCDQvdC10L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90YvQvNC4INC00LXRgtGM0LzQuFxyXG4gICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IGZhbHNlLCAvLyDQv9C10YDQtdC00LDQstCw0YLRjCDRgdGC0LDRgNC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiDQutC+0LvQsdGN0LpcclxuICAgIH0pO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5wYXJzZUF1ZGlvKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmF1ZGlvX3Jvd1wiKSk7XHJcbiAgICB0aGlzLmNyZWF0ZU9ic2VydmUoKTtcclxuICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAxMDAwMCk7XHJcbiAgfVxyXG4gIGdldEluZm9ybWF0aW9uKCkge1xyXG4gICAgY29uc29sZS50YWJsZSh0aGlzLmF1ZGlvKTtcclxuICAgIGNvbnNvbGUubG9nKGDQntCx0YnQtdC1INC60L7Qu9C40YfQtdGB0YLQstC+INC80LjQvdGD0YI6JHt0aGlzLnRpbWUubWludXRlc30sINCe0LHRidC10LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQtdC60YPQvdC0OiR7dGhpcy50aW1lLnNlY29uZHN9YCk7XHJcbiAgICBjb25zdCB7IG1pbnV0ZSwgc2Vjb25kcyB9ID0gdGhpcy5nZXRNaW51dGVGcm9tU2Vjb25kcyh0aGlzLnRpbWUuc2Vjb25kcyk7XHJcbiAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZXMgfSA9IHRoaXMuZ2V0SG91cnNGcm9tTWludXRlKG1pbnV0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtob3VyfToke21pbnV0ZXN9OiR7c2Vjb25kc31gKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/scripts/modules/ParseVKAudio.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcz85NzBiIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNDLFdBQW5DLEVBQWdEO0FBQzlDLE1BQUksRUFBRUQsUUFBUSxZQUFZQyxXQUF0QixDQUFKLEVBQXdDO0FBQ3RDLFVBQU0sSUFBSUMsU0FBSixDQUFjLG1DQUFkLENBQU47QUFDRDtBQUNGOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLGVBQWpCO0FBQ0FJLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsSUFBNEJELE1BQU0sQ0FBQ0MsT0FBbkMsRUFBNENELE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxVQUFmLEdBQTRCLElBQXhFIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/classCallCheck.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcz81YmMzIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX19lc01vZHVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsaUJBQVQsQ0FBMkJDLE1BQTNCLEVBQW1DQyxLQUFuQyxFQUEwQztBQUN4QyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBSUUsVUFBVSxHQUFHSCxLQUFLLENBQUNDLENBQUQsQ0FBdEI7QUFDQUUsY0FBVSxDQUFDQyxVQUFYLEdBQXdCRCxVQUFVLENBQUNDLFVBQVgsSUFBeUIsS0FBakQ7QUFDQUQsY0FBVSxDQUFDRSxZQUFYLEdBQTBCLElBQTFCO0FBQ0EsUUFBSSxXQUFXRixVQUFmLEVBQTJCQSxVQUFVLENBQUNHLFFBQVgsR0FBc0IsSUFBdEI7QUFDM0JDLFVBQU0sQ0FBQ0MsY0FBUCxDQUFzQlQsTUFBdEIsRUFBOEJJLFVBQVUsQ0FBQ00sR0FBekMsRUFBOENOLFVBQTlDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTTyxZQUFULENBQXNCQyxXQUF0QixFQUFtQ0MsVUFBbkMsRUFBK0NDLFdBQS9DLEVBQTREO0FBQzFELE1BQUlELFVBQUosRUFBZ0JkLGlCQUFpQixDQUFDYSxXQUFXLENBQUNHLFNBQWIsRUFBd0JGLFVBQXhCLENBQWpCO0FBQ2hCLE1BQUlDLFdBQUosRUFBaUJmLGlCQUFpQixDQUFDYSxXQUFELEVBQWNFLFdBQWQsQ0FBakI7QUFDakIsU0FBT0YsV0FBUDtBQUNEOztBQUVESSxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLFlBQWpCO0FBQ0FLLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsSUFBNEJELE1BQU0sQ0FBQ0MsT0FBbkMsRUFBNENELE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxVQUFmLEdBQTRCLElBQXhFIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/createClass.js\n");

/***/ })

/******/ });