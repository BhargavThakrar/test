webpackJsonp([7],{

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const remove = {
	onRemove(accountInfo) {
		_emitter2.default.emit('onDelete', accountInfo.id);
	},

	onRemoved(accountInfo) {
		alert(`Account (no: ${accountInfo.accountNumber}) removed from the list`);

		_emitter2.default.emit('closeModal');
	}
};

module.exports = {
	onRemove: remove.onRemove,
	onRemoved: remove.onRemoved
};

/***/ })

});