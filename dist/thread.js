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
/******/ 	__webpack_require__.p = "https://rawgit.com/BhargavThakrar/test/master/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _browsers = __webpack_require__(1);

var _browsers2 = _interopRequireDefault(_browsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let instance = null;

class BrowserMessaging {
	constructor() {
		if (!instance) {
			instance = this;
		}

		return instance;
	}

	setBrowser(browser) {
		this.browser = browser;
		return this;
	}

	execute(method, ...args) {
		console.log('action click', this.browser);
		if (typeof _browsers2.default.getInstance(this.browser)[method] === 'function') {
			_browsers2.default.getInstance(this.browser)[method](...args);
		}
	}

	fromPageToBackground(...args) {
		this.execute('fromPageToBackground', ...args);
	}

	removeAllCookies(...args) {
		this.execute('removeAllCookies', ...args);
	}

	attachMessageListener(...args) {
		this.execute('attachMessageListener', ...args);
	}

	removeMessageListener(...args) {
		this.execute('removeMessageListener', ...args);
	}

	attachBrowserActionClickListener(...args) {
		this.execute('attachBrowserActionClickListener', ...args);
	}

	createTab(...args) {
		this.execute('createTab', ...args);
	}

	executeScript(...args) {
		this.execute('executeScript', ...args);
	}

	removeTab(...args) {
		this.execute('removeTab', ...args);
	}
}

exports.default = BrowserMessaging;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _chrome = __webpack_require__(2);

var _chrome2 = _interopRequireDefault(_chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BrowserFactory {
	static getInstance(browser) {
		switch (browser) {
			case 'chrome':
				return new _chrome2.default();
			default:
				return {};
		}
	}
}

exports.default = BrowserFactory;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
let instance = null;

class Chrome {
	constructor() {
		if (!instance) {
			instance = this;
		}

		return instance;
	}

	fromPageToBackground(message) {
		chrome.runtime.sendMessage(message);
	}

	removeAllCookies(options = {}, callback = null) {
		chrome.cookies.getAll(Object.assign({}, options), allCookies => {
			console.log('allCookies s', allCookies);
			allCookies.forEach(cookie => {
				this.removeCookie(cookie);
			});

			if (callback) {
				callback();
			}
		});
	}

	removeCookie(cookie) {
		console.log('cookie s', cookie);
		chrome.cookies.remove({ "url": "https://paypal.com/", "name": cookie.name });
	}

	attachMessageListener(listener) {
		chrome.runtime.onMessage.addListener(listener);
	}

	attachBrowserActionClickListener(listener) {
		chrome.browserAction.onClicked.addListener(listener);
	}

	removeMessageListener(listener) {
		chrome.runtime.onMessage.removeListener(listener);
	}

	createTab(opts, callback) {
		chrome.tabs.create(opts, tab => {
			if (callback) {
				callback(tab);
			}
		});
	}

	executeScript(tabId, opts, callback) {
		chrome.tabs.executeScript(tabId, opts, () => {
			if (callback) {
				callback();
			}
		});
	}

	removeTab(tabId) {
		chrome.tabs.remove(tabId);
	}
}

exports.default = Chrome;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _browserMessaging = __webpack_require__(0);

var _browserMessaging2 = _interopRequireDefault(_browserMessaging);

var _supportedBackgroundActions = __webpack_require__(4);

var _supportedBackgroundActions2 = _interopRequireDefault(_supportedBackgroundActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let browserMessaging = new _browserMessaging2.default().setBrowser('chrome');

setTimeout(function () {
	console.log(__FROM_BT__, typeof __FROM_BT__);

	var message = __FROM_BT__;

	message.signature.headers = new Headers(message.signature.headers);

	console.log('started');
	fetch(message.url, message.signature).then(res => res.json()).catch(error => {
		browserMessaging.fromPageToBackground({
			action: _supportedBackgroundActions2.default.API_RESPONSE,
			error: error
		});
	}).then(response => {
		console.log('FROM THREAD', response);

		let message = {
			action: _supportedBackgroundActions2.default.API_RESPONSE
		};

		if (response.errorCode) {
			message.error = response;
		} else {
			message.success = response;
		}

		browserMessaging.fromPageToBackground(message);
	});
}, 1000);

// chrome.runtime.onMessage.addListener(listener);

// function listener(message, sender, sendResponse) {

// 	if(message === 'ping') {
// 		return sendResponse('pong');
// 	}

// 	message.signature.headers = new Headers(message.signature.headers);

// 	console.log('started');
// 	fetch(message.url, message.signature)
// 	.then(res => res.json())
// 	.catch(error => {
// 		sendResponse({
// 			action: 'apiResponse',
// 			error: error
// 		});
// 	})
// 	.then(response => {
// 		sendResponse({
// 			action: 'apiResponse',
// 			success: response
// 		});
// 	});

//     //chrome.runtime.onMessage.removeListener(listener);
// }

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	'API_CALL': 'apiCall',
	'API_RESPONSE': 'apiResponse',
	'LOGIN_PAYPAL': 'loginPaypal'
};

/***/ })

/******/ });