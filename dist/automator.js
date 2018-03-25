/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		15: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "https://raw.githubusercontent.com/BhargavThakrar/test/master/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    _callbacks: {},

    on(event, fn) {
        (this._callbacks[event] || (this._callbacks[event] = [])).push(fn);
    },

    emit(event, ...args) {
        if (this._callbacks[event] && this._callbacks[event].length > 0) {
            this._callbacks[event].forEach(callbakcs => callbakcs.apply(null, args));
        }
    },

    off(event, fn = null) {
        if (!this._callbacks[event]) {
            return;
        }

        if (fn) {
            delete this._callbacks[event];
            return;
        }

        let _callbacks = this._callbacks[event];

        _callbacks.forEach((callbacks, index) => {
            if (callbacks === fn) {
                _callbacks.splice(i, 1);
            }
        });
    }
};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	'Dexter': [{
		name: 'CIP',
		code: 'Dexter_CIP'
	}, {
		name: 'KYC',
		code: 'Dexter_KYC'
	}, {
		name: 'Zero Balance',
		code: 'Dexter_ZB'
	}]
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

var _handlers = __webpack_require__(16);

var _browserMessaging = __webpack_require__(0);

var _browserMessaging2 = _interopRequireDefault(_browserMessaging);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _browserMessaging2.default().setBrowser('chrome');

// Register some onLoad event handlers...
(0, _handlers.register)();

// Render app component
_App2.default.render();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = {
	render() {
		_emitter2.default.emit('renderAccountList');
		_emitter2.default.emit('renderAddForm');
		_emitter2.default.emit('renderDevConsole');
	}
};

module.exports = {
	render: app.render.bind(app)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.register = undefined;

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

var _routes = __webpack_require__(17);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _on = routes => {
	for (let event in routes) {
		let hand = routes[event];

		if (typeof hand !== 'function') {
			console.error('Unable to register one of the routes', hand);
			continue;
		}

		_emitter2.default.on(event, hand);
	}
};

const register = exports.register = () => {
	for (let route in _routes2.default) {
		_on(_routes2.default[route]);
	}
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _account = __webpack_require__(18);

var _account2 = _interopRequireDefault(_account);

var _devConsole = __webpack_require__(19);

var _devConsole2 = _interopRequireDefault(_devConsole);

var _flows = __webpack_require__(20);

var _flows2 = _interopRequireDefault(_flows);

var _form = __webpack_require__(23);

var _form2 = _interopRequireDefault(_form);

var _modal = __webpack_require__(24);

var _modal2 = _interopRequireDefault(_modal);

var _alerts = __webpack_require__(25);

var _alerts2 = _interopRequireDefault(_alerts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	account: _account2.default,
	devConsole: _devConsole2.default,
	flows: _flows2.default,
	form: _form2.default,
	modal: _modal2.default,
	alerts: _alerts2.default
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	onFlowUrl: accountInfo => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 7)).then(account => account.onFlowUrl(accountInfo)),
	onSave: accountInfo => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(persistence => persistence.onSave(accountInfo)),
	onGetAccountList: () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(persistence => persistence.onLoad()),
	onDelete: id => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(persistence => persistence.onDelete(id)),
	onLogin: accountInfo => __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 30)).then(login => login.onLogin(accountInfo)),
	onShare: accountInfo => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 8)).then(share => share.onShare(accountInfo)),
	onCopied: () => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 8)).then(share => share.onCopied()),
	onRemove: accountInfo => __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 9)).then(remove => remove.onRemove(accountInfo)),
	onRemoved: accountInfo => __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 9)).then(remove => remove.onRemoved(accountInfo)),
	onFormPrefill: accountInfo => __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 31)).then(formPrefill => formPrefill.onFormPrefill(accountInfo)),
	renderAccountList: list => __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 10)).then(accountList => accountList.renderAccountList(list)),
	onAccountList: list => __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 10)).then(accountList => accountList.onAccountList(list)),
	onAccountDetails: accountInfo => __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 32)).then(accountDetails => accountDetails.render(accountInfo))
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	renderDevConsole: () => __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 33)).then(devConsole => devConsole.prepareConsole())
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _supportedFlows = __webpack_require__(6);

var _supportedFlows2 = _interopRequireDefault(_supportedFlows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let routes = {};

for (let client in _supportedFlows2.default) {
	try {
		client = client.toLowerCase();
		let clientHandlers = __webpack_require__(21)(`./${client}/handlers/flows`);
		console.log('clientHandlers', clientHandlers);
		routes = Object.assign(routes, clientHandlers);
	} catch (e) {
		console.error(`Unable to register client handler for client ${client}`, e);
	}
}
console.log(routes);
exports.default = routes;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dexter/handlers/flows": 22
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 21;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	onDexter_CIP_Flow: accountInfo => __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 34)).then(cip => cip.getFlowUrl(accountInfo)),
	onDexter_KYC_Flow: accountInfo => __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 35)).then(kyc => kyc.getFlowUrl(accountInfo)),
	onDexter_ZB_Flow: accountInfo => __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 36)).then(zeroBalance => zeroBalance.getFlowUrl(accountInfo))
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	renderAddForm: () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 11)).then(form => form.renderAddForm()),
	renderEditForm: data => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 11)).then(form => form.renderEditForm(data)),
	onSubmit: data => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 7)).then(account => account.onSubmit(data))
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	openModal: content => __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 12)).then(modal => modal.render(content)),
	closeModal: () => __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 12)).then(modal => modal.unMount())
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	onAlertSuccess: message => __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 13)).then(alerts => alerts.onAlertSuccess(message)),
	onAlertError: message => __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 13)).then(alerts => alerts.onAlertError(message))
};

/***/ })
/******/ ]);