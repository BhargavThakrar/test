webpackJsonp([13],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	getFlowUrl(accountInfo) {
		console.log('IN KYC FLOW');
		console.log(accountInfo);

		let loginUrl = accountInfo.loginUrl,
		    siteUrl = accountInfo.siteUrl,
		    entryPoint = encodeURIComponent(`${siteUrl}/policy/hub/kyc`);


		accountInfo.flowUrl = `${loginUrl}?returnUri=${entryPoint}`;

		_emitter2.default.emit('onFlowUrl', accountInfo);
	}
};

/***/ })

});