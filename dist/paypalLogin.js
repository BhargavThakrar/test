/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// import MessageHelper from '../../lib/MessageHelper';

// MessageHelper.messageListener(listener);

// window.onload = function() {
//     MessageHelper.sendToBackground({ui: 'paypalLogin', type: 'init'});
// }

// function process(response) {

// 	if(!response || response === null) {
// 		return;
// 	}

// 	document.getElementById('email').value = response;
// 	//document.getElementById('password').value = "stage2@qa";

// 	//document.querySelector('form').submit();
// 	document.getElementById('btnNext').click();

// 	var timer = setInterval(function() {
//         var done = document.getElementsByClassName('transitioning')[0].classList.contains('hide');

//         if(done) {
//             clearInterval(timer);
//             document.getElementById('password').value = "stage2@qa";

//             document.querySelector('form').submit();
//         }
//     }, 1000);
// }

// function listener(response, sender, sendResponse) {
//     switch(response.obj.type) {
//         case 'init':
//             process(response.data.email);
//             break;
//     }
// }

var credentials = getParameterByName('bt');

setTimeout(function () {
    __dologin();
}, 3000);

function __dologin() {
    if (credentials) {
        try {
            var object = JSON.parse(credentials);

            document.getElementById('email').value = object.emailAddress;

            if (document.getElementById('splitPassword') && document.getElementById('splitPassword').classList.contains('hide')) {
                //console.log('here');
                document.getElementById('btnNext').click();

                var timer = setInterval(function () {
                    var done = document.getElementsByClassName('transitioning')[0].classList.contains('hide');

                    if (done) {
                        clearInterval(timer);
                        document.getElementById('password').value = object.password;

                        document.querySelector('form').submit();
                    }
                }, 1000);
            } else {
                document.getElementById('password').value = object.password;
                document.querySelector('form').submit();
            }
        } catch (e) {
            console.log('Invalid Credentials Params', e);
        }
    }
}

/***/ })

/******/ });