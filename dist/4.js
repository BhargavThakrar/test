webpackJsonp([4],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Modal = __webpack_require__(71);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const modal = {
	render(content) {
		_Modal2.default.render(content);
	},

	unMount() {
		_Modal2.default.unMount();
	}
};

module.exports = {
	render: modal.render,
	unMount: modal.unMount
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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dom__) {

const modal = {
	domRefs(ref) {
		let refs = {
			mount: '#modal'
		};

		return refs[ref];
	},

	render(content) {
		let header = content.header,
		    body = content.body,
		    footer = content.footer,
		    bindEvents = content.bindEvents;


		footer = !footer ? '' : footer;

		let structure = `
			<div id="myModal" class="modal" role="dialog">
			    <div class="modal-dialog">
			        <!-- Modal content-->
			        <div class="modal-content">
			            <div class="modal-header">
			                <button type="button" class="close" data-dismiss="modal">&times;</button>
			                <h4 class="modal-title">${header}</h4>
			            </div>
			            <div class="modal-body">${body}</div>
			            <div class="modal-footer">
			            	${footer}
			                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			            </div>
			        </div>
			    </div>
			</div>
		`;

		__dom__.render(structure, this.domRefs('mount'));

		if (typeof bindEvents === 'function') {
			bindEvents();
		}

		this.open();
	},

	open() {
		$('#myModal').modal();
	},

	unMount() {
		$('#myModal').modal('hide');
	}
};

module.exports = {
	render: modal.render.bind(modal),
	unMount: modal.unMount
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ })

});