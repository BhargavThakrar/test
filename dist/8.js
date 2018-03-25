webpackJsonp([8],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fieldConfig = __webpack_require__(44);

var _fieldConfig2 = _interopRequireDefault(_fieldConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formPrefill = {
	onFormPrefill(accountInfo) {
		this.startPrefilling(_fieldConfig2.default, accountInfo);
		console.log(_fieldConfig2.default);
	},

	startPrefilling(formFields, accountInfo) {
		formFields.forEach(fields => this.iterate(fields, accountInfo));
	},

	iterate(field, accountInfo) {
		if (!field.fields) {
			return this.insertValues(field, accountInfo);
		}

		this.iterate(field.fields, accountInfo);
	},

	insertValues(fields, accountInfo) {
		fields.forEach(field => {
			if (accountInfo[field.name]) {
				field.value = accountInfo[field.name];
			}
		});
	}
};

module.exports = {
	onFormPrefill: formPrefill.onFormPrefill.bind(formPrefill)
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	STAGE_NAME: "msmaster.qa.paypal.com",
	LOGIN_PATH: "/signin",
	LOGIN_SITE_URL: "https://www.msmaster.qa.paypal.com",
	SITE_URL: "https://www.msmaster.qa.paypal.com"
};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
	name: 'Unites States',
	code: 'US'
}, {
	name: 'India',
	code: 'US'
}];

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(40);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    sesctionTitle: 'Prerequisites',
    type: 'section',
    fields: [{
        name: 'flow',
        label: 'Flow',
        type: 'select',
        defaultValue: 'CIP',
        options: __webpack_require__(6)
    }, {
        name: 'loginUrl',
        label: 'Login Url',
        defaultValue: `${_constants2.default.LOGIN_SITE_URL}${_constants2.default.LOGIN_PATH}`,
        type: 'input'
    }, {
        name: 'siteUrl',
        label: 'Site Url',
        defaultValue: _constants2.default.SITE_URL,
        type: 'input'
    }, {
        name: 'dologin',
        label: 'Do Login',
        type: 'checkbox',
        defaultValue: true,
        value: true
    }]
};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [__webpack_require__(43), __webpack_require__(45), __webpack_require__(48), __webpack_require__(49)];

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(40);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    sesctionTitle: 'Account Information',
    type: 'section',
    fields: [{
        name: 'accountType',
        label: 'Account Type',
        type: 'select',
        options: __webpack_require__(46)
    }, {
        name: 'country',
        label: 'Country',
        type: 'select',
        options: __webpack_require__(41)
    }, {
        name: 'currency',
        label: 'Currency',
        type: 'select',
        options: __webpack_require__(47)
    }, {
        name: 'stage',
        label: 'Stage',
        type: 'input',
        defaultValue: _constants2.default.STAGE_NAME
    }]
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
	name: 'personal',
	code: 'personal'
}, {
	name: 'business',
	code: 'business'
}, {
	name: 'premier',
	code: 'premier'
}];

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
	name: 'Unites States Dollars',
	code: 'USD'
}, {
	name: 'Indian Rupee',
	code: 'INR'
}];

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    sesctionTitle: 'Custom Account Information',
    type: 'section',
    fields: [{
        name: 'firstName',
        label: 'First Name',
        type: 'input'
    }, {
        name: 'lastName',
        label: 'Last Name',
        type: 'input'
    }, {
        name: 'emailPrefix',
        label: 'Email Prefix',
        type: 'input'
    }, {
        name: 'citizenship',
        label: 'Citizenship',
        type: 'select',
        options: __webpack_require__(41)
    }, {
        name: 'password',
        label: 'Password',
        type: 'input',
        defaultValue: 'stage2@qa'
    }, {
        name: 'homeAddress1',
        label: 'Street Address 1',
        type: 'input'
    }, {
        name: 'homeAddress2',
        label: 'Street Address 2',
        type: 'input'
    }, {
        name: 'homeCity',
        label: 'City',
        type: 'input'
    }, {
        name: 'homeState',
        label: 'State',
        type: 'input'
    }, {
        name: 'homeCountry',
        label: 'Country',
        type: 'input'
    }, {
        name: 'homeZip',
        label: 'Zip',
        type: 'input'
    }]
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    sesctionTitle: 'Business Information',
    type: 'section',
    fields: [{
        name: 'businessName',
        label: 'Business Name',
        type: 'input'
    }, {
        name: 'bizState',
        label: 'Business State',
        type: 'input'
    }, {
        name: 'businessType',
        label: 'Business Type',
        type: 'input',
        value: 'Partnership'
    }]
};

/***/ })

});