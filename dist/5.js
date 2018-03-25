webpackJsonp([5],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Alerts = __webpack_require__(72);

var _Alerts2 = _interopRequireDefault(_Alerts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const alerts = {
	onAlertSuccess(message) {
		_Alerts2.default.render(message, 'success');
	},

	onAlertError(message) {
		_Alerts2.default.render(message, 'error');
	}
};

module.exports = {
	onAlertSuccess: alerts.onAlertSuccess
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	toHTML(data) {
		if (typeof data === 'string') {
			return $(data);
		}

		if (data.html) {
			return $(data.html);
		}

		return null;
	},

	render(data, templateId) {
		let html = this.toHTML(data);
		$(templateId).html(html);
	}
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dom__) {

const alerts = {
	types: {
		'success': 'alert-success',
		'error': 'alert-danger'
	},

	timerConfig: {
		timer: null,
		alertDisplaysTill: 5000 // milliseconds
	},

	domRefs(ref) {
		let refs = {
			mount: $('#alert')
		};

		return refs[ref];
	},

	alertExists() {
		return this.timerConfig.timer !== null || this.domRefs('mount').hasClass('alert');
	},

	clearAlert() {
		clearTimeout(this.timerConfig.timer);
		this.timerConfig.timer = null;
		this.domRefs('mount').removeClass().addClass('hide');
		console.log('Clear alert');
	},

	alertTimer() {
		this.timerConfig.timer = setTimeout(() => {
			this.clearAlert();
		}, this.timerConfig.alertDisplaysTill);
	},

	render(message, type) {
		if (!this.types[type]) {
			this.clearAlert();
			return;
		}

		// Check if alert is already there
		if (this.alertExists()) {
			this.clearAlert();
		}

		__dom__.render(`<div>${message}</div>`, this.domRefs('mount'));

		this.domRefs('mount').addClass(`alert ${this.types[type]}`).removeClass('hide');

		this.alertTimer();
	}
};

module.exports = {
	render: alerts.render.bind(alerts)
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ })

});