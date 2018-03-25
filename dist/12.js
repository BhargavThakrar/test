webpackJsonp([12],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _browserMessaging = __webpack_require__(0);

var _browserMessaging2 = _interopRequireDefault(_browserMessaging);

var _supportedBackgroundActions = __webpack_require__(4);

var _supportedBackgroundActions2 = _interopRequireDefault(_supportedBackgroundActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const login = {
	onLogin(accountInfo) {
		// Before login, log put any open sessions
		this.onLogout(this.dologin.bind(this, accountInfo));
	},

	dologin(accountInfo) {
		let emailAddress = accountInfo.emailAddress,
		    password = accountInfo.password,
		    flowUrl = accountInfo.flowUrl;


		new _browserMessaging2.default().fromPageToBackground({
			action: _supportedBackgroundActions2.default.LOGIN_PAYPAL,
			url: flowUrl,
			emailAddress: emailAddress,
			password: password
		});
	},

	onLogout(callback) {
		new _browserMessaging2.default().removeAllCookies({ domain: "paypal.com" }, callback);
		// chrome.cookies.getAll({domain: "paypal.com"}, (allCookies) => {
		// 	console.log('allCookies', allCookies);
		// 	allCookies.forEach(cookie => {
		// 		this.removeCookie(cookie);
		// 	});
		// 	if(callback) {
		// 		callback();
		// 	}
		//       });
	}

};

module.exports = {
	onLogin: login.onLogin.bind(login)
};

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

});