// [AIV]  TimerList build version: 1.0.1  
 var timerlist =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @ignore
 */
var ERROR_MESSAGE = ['name must be a string', 'callback must be a function', 'delay must be a number'];

var TimerList = function () {

    /**
     * @constructor
     * @example
     * const TimerList = require('timerlist');
     * const timer = new TimerList();
     * timer.setTimeout('myTimer', ()=>{
     *      console.log('my timer is running');
     * }, 1000);
     */
    function TimerList() {
        _classCallCheck(this, TimerList);

        this.timers = {
            timeout: {},
            interval: {}
        };
    }

    /**
     * Get max number delay (approximately 24.8 days)
     * @returns {number}
     */


    _createClass(TimerList, [{
        key: '_createTimer',


        /**
         * Create timer
         * @param params {Object}
         * @private
         * @ignore
         */
        value: function _createTimer(params) {
            if (typeof params.name !== 'string') throw new Error(ERROR_MESSAGE[0]);

            if (typeof params.callback !== 'function') throw new Error(ERROR_MESSAGE[1]);

            if (typeof params.delay !== 'number') throw new Error(ERROR_MESSAGE[2]);

            params.args.unshift(params.callback, params.delay);

            if (params.type === 'timeout') {

                if (this.getTimeout(params.name)) this.clearTimeout(params.name);

                this.timers.timeout[params.name] = setTimeout.apply(this, params.args);
            } else {

                if (this.getInterval(params.name)) this.clearInterval(params.name);

                this.timers.interval[params.name] = setInterval.apply(this, params.args);
            }
        }

        /**
         * Set timeout
         * @param name {string} timer name
         * @param callback {Function} callback function
         * @param delay=0 {number} delay interval
         * @param args {...args} optional arguments
         * @example
         * timer.setTimeout('my timer', myListener, 1000);
         */

    }, {
        key: 'setTimeout',
        value: function setTimeout(name, callback) {
            for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                args[_key - 3] = arguments[_key];
            }

            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            this._createTimer({
                type: 'timeout',
                name: name,
                callback: callback,
                delay: delay,
                args: args
            });
        }

        /**
         * Set interval
         * @param name {string} timer name
         * @param callback {Function} callback function
         * @param delay=0 {number} delay interval
         * @param args {...args} optional arguments
         * @example
         * timer.setInterval('my timer', myListener, 1000);
         */

    }, {
        key: 'setInterval',
        value: function setInterval(name, callback) {
            for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
                args[_key2 - 3] = arguments[_key2];
            }

            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            this._createTimer({
                type: 'interval',
                name: name,
                callback: callback,
                delay: delay,
                args: args
            });
        }

        /**
         * Check if a timeout was called
         * @param name {string} timer name
         * @returns {boolean}
         */

    }, {
        key: 'isTimeoutCalled',
        value: function isTimeoutCalled(name) {
            return this.timers.timeout[name]._called;
        }

        /**
         * Check if an interval was called
         * @param name {string} timer name
         * @returns {boolean}
         */

    }, {
        key: 'isIntervalCalled',
        value: function isIntervalCalled(name) {
            return this.timers.interval[name]._called;
        }

        /**
         * Get all timers
         * @returns {{timeout: {}, interval: {}}|*}
         */

    }, {
        key: 'getTimers',
        value: function getTimers() {
            return this.timers;
        }

        /**
         * Destroy all timers
         */

    }, {
        key: 'clearAll',
        value: function clearAll() {
            for (var i in this.timers.timeout) {
                if (this.timers.timeout.hasOwnProperty(i)) this.clearTimeout(this.timers.timeout[i]);
            }
            for (var _i in this.timers.interval) {
                if (this.timers.interval.hasOwnProperty(_i)) this.clearTimeout(this.timers.interval[_i]);
            }
        }

        /**
         * Get timer timeout reference
         * @param name {string} timer name
         * @returns {*}
         */

    }, {
        key: 'getTimeout',
        value: function getTimeout(name) {
            return this.timers.timeout[name];
        }

        /**
         * Get timer interval reference
         * @param name {string} timer name
         * @returns {*}
         */

    }, {
        key: 'getInterval',
        value: function getInterval(name) {
            return this.timers.interval[name];
        }

        /**
         * Destroy a timeout
         * @param name {string} timer name
         */

    }, {
        key: 'clearTimeout',
        value: function (_clearTimeout) {
            function clearTimeout(_x) {
                return _clearTimeout.apply(this, arguments);
            }

            clearTimeout.toString = function () {
                return _clearTimeout.toString();
            };

            return clearTimeout;
        }(function (name) {
            clearTimeout(this.timers.timeout[name]);
            delete this.timers.timeout[name];
        })

        /**
         * Destroy an interval
         * @param name {string} timer name
         */

    }, {
        key: 'clearInterval',
        value: function (_clearInterval) {
            function clearInterval(_x2) {
                return _clearInterval.apply(this, arguments);
            }

            clearInterval.toString = function () {
                return _clearInterval.toString();
            };

            return clearInterval;
        }(function (name) {
            clearInterval(this.timers.interval[name]);
            delete this.timers.interval[name];
        })
    }], [{
        key: 'maxDelay',
        value: function maxDelay() {
            return 2147483647;
        }
    }]);

    return TimerList;
}();

module.exports = TimerList;
module.exports._ERROR_MESSAGE = ERROR_MESSAGE;

/***/ })
/******/ ]); 