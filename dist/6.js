webpackJsonp([6],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

var _AccountList = __webpack_require__(60);

var _AccountList2 = _interopRequireDefault(_AccountList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const accountList = {
	renderAccountList(list) {
		console.log('LIST', list);
		// Render account list
		if (!this.render(list)) {
			/**
    * If account list is not provided or is not rendered due to some reason,
    * get the account list first from store...
    */
			_emitter2.default.emit('onGetAccountList');
		}
	},

	onAccountList(list) {
		return this.render(list);
	},

	render(list) {
		if (list) {
			console.log(list);
			return (0, _AccountList2.default)(list);
		}

		return false;
	}
};

module.exports = {
	renderAccountList: accountList.renderAccountList.bind(accountList),
	onAccountList: accountList.onAccountList.bind(accountList)
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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dom__) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const accountList = {
	searchedKeyword: '',

	domRefs(ref) {
		let refs = {
			mount: '#createAccounts',
			accountClick: '.handleAccountClick',
			accountSearch: '#searchAccounts'
		};

		return refs[ref];
	},

	bindEvents() {
		$(this.domRefs('accountClick')).off('click');

		$(this.domRefs('accountClick')).on('click', function (e) {
			_emitter2.default.emit('onAccountDetails', $(e.target).attr('data-json'));
		});

		$(this.domRefs('accountSearch')).on('keyup', e => {
			var input = String.fromCharCode(e.keyCode);
			if (!/[a-zA-Z0-9-_ ]/.test(input)) {
				//$(`${this.domRefs('accountClick')} a`).hide();
				//return;
			}

			let keywordToSearch = e.target.value.trim().toLowerCase();

			if (keywordToSearch === '' || this.searchedKeyword === keywordToSearch) {
				console.log(keywordToSearch, this.searchedKeyword);
				$(`${this.domRefs('accountClick')} a`).show();
				return;
			}

			this.searchedKeyword = keywordToSearch;

			$(`${this.domRefs('accountClick')} a`).hide();
			$(`${this.domRefs('accountClick')} a`).each(function () {
				let currentKeyword = $(this).text().toLowerCase();

				if (currentKeyword.indexOf(keywordToSearch) >= 0) {
					console.log('sds', this);
					$(this).show();
				}
			});
		});
	},

	render(accountList) {
		let list = '';

		accountList.forEach((item, index) => {
			item.id = index;
			list += `<a href="#" class="list-group-item list-group-item-action" data-json='${JSON.stringify(item, null, 2)}'>${item.key}</a>`;
		});

		let panel = `
			<div class="card">
			  	<div class="header">
					<h2>Accounts</h2>
					<small></small>
				</div>

		    	<div class="body">
		    		<input type="text" class="custom-input form-control" placeholder="Search created accounts" id="${this.domRefs('accountSearch').replace(/.|#/, '')}"" />
		    		<br/>
		    		<div class="list-group list-group-flush scrollable-list ${this.domRefs('accountClick').replace(/.|#/, '')}">
			    		${list}
			    	</div>
				</div>
			</div>
		`;

		__dom__.render(panel, this.domRefs('mount'));

		this.bindEvents();
	}
};

exports.default = accountList.render.bind(accountList);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ })

});