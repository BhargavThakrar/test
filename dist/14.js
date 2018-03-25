webpackJsonp([14],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import API from '../../../lib/api';

// Events.on('load', (data) => console.log('event fired', data));

// Events.emit('load', 'Awesome!!');

module.exports = {
	getFlowUrl(accountInfo) {
		console.log('IN CIP FLOW');
		console.log(accountInfo);

		let loginUrl = accountInfo.loginUrl,
		    siteUrl = accountInfo.siteUrl,
		    entryPoint = encodeURIComponent(`${siteUrl}/policy/hub/cip`);


		accountInfo.flowUrl = `${loginUrl}?returnUri=${entryPoint}`;
		console.log('FROM CIP', accountInfo);
		_emitter2.default.emit('onFlowUrl', accountInfo);
	}

};

/***/ })

});