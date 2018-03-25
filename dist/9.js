webpackJsonp([9],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DevConsole = __webpack_require__(62);

var _DevConsole2 = _interopRequireDefault(_DevConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const devConsole = {
	prepareConsole() {
		_DevConsole2.default.render();
	}
};

module.exports = {
	prepareConsole: devConsole.prepareConsole
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

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loadData = exports.saveData = undefined;

var _storageFactory = __webpack_require__(54);

var _storageFactory2 = _interopRequireDefault(_storageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getType = type => {
	return type ? type : 'localStorage';
};

const saveData = exports.saveData = (key, data, type = null) => {
	/**
  * Getting the storage instance from storage factory based on storage type passed in the argument
  */
	const storageInstance = _storageFactory2.default.getStorageInstance(getType(type));

	storageInstance.save(key, data);
};

const loadData = exports.loadData = (key, type = null) => {
	/**
  * Getting the storage instance from storage factory based on storage type passed in the argument
  */
	const storageInstance = _storageFactory2.default.getStorageInstance(getType(type));

	return storageInstance.load(key);
};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storage = __webpack_require__(55);

/**
 * Storage factory will return the instance of desired storage class
 *
 * Reason it is designed this way is because:
 * First, addition of new storage implementations becomes easier with less effort
 * Second, our storage class can be easily unit tested
 *
 * Note: I have not written any test cases for storage class.
 * But, it can be done by using mocking libraries like sinon.js
 */
class StorageFactory {
  static getStorageInstance(type) {
    switch (type) {
      case 'localStorage':
        return new _storage.LocalStorage();
    }
  }
}

exports.default = StorageFactory;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorage = undefined;

var _localStorage = __webpack_require__(56);

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LocalStorage = _localStorage2.default; /**
                                                * This will export all the available storage classes.
                                                * Whenever a new storage class needs to be implemented, we need to export it from here.
                                                *
                                                * For now only localStorage class is exposed which uses browser localstorage
                                                */

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * This is singleton localstorage class,
 *
 * The reason it is singleton because, storing the redux state is subscribed to the actions,
 * which could be dispatched every now and then.
 * Hence, we don't want to instantiate this little class again and again.
 */

let instance = null;

class LocalStorage {
	constructor() {
		if (!instance) {
			instance = this;
		}

		return instance;
	}

	load(key) {
		try {
			const storedState = localStorage.getItem(key);

			if (storedState === null) {
				return undefined;
			}

			return JSON.parse(storedState);
		} catch (e) {
			return undefined;
		}
	}

	save(key, data) {
		try {
			localStorage.setItem(key, JSON.stringify(data));
		} catch (e) {
			// Dont return anything
		}
	}
}

exports.default = LocalStorage;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dom__) {

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

var _persistence = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const devConsole = {
	editor: null,

	storeKey: 'jscode',

	domRefs(ref) {
		let refs = {
			mount: '#devConsole'
		};

		return refs[ref];
	},

	bindEvents() {
		$('#jscoderun').on('click', e => {
			let jscode = this.editor.getValue();

			(0, _persistence.saveData)(this.storeKey, jscode);

			let scriptData = eval(jscode);
			console.log(scriptData);

			_emitter2.default.emit('onSubmit', scriptData);
		});
	},

	render() {
		let _console = `
			<div class="card">
			  	<div class="header">
					<h2>Dev Console</h2>
					<small></small>
				</div>

		    	<div class="body">
		    		<textarea id="jscode" />
		    		<button id="jscoderun" class="consoleBtn">Run</button>
				</div>
			</div>
		`;

		__dom__.render(_console, this.domRefs('mount'));

		let savedJsCode = (0, _persistence.loadData)(this.storeKey);

		// CM OPTIONS
		let cm_opt = {
			tabSize: 2,
			//gutter: true,
			//lineNumbers: true,
			mode: 'javascript'

			// onChange: function (instance, changes) {
			//     render();
			// }
		};
		console.log(cm_opt);
		this.editor = CodeMirror.fromTextArea(document.getElementById('jscode'), cm_opt);

		if (savedJsCode) {
			this.editor.setValue(savedJsCode);
		}

		this.bindEvents();
	}
};

module.exports = {
	render: devConsole.render.bind(devConsole)
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ })

});