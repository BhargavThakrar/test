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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import allowedOrigins from './config/allowedOrigins';

function listener(message) {
	//setTimeout(() => {
	chrome.extension.onRequest.removeListener(listener);

	console.log('message.signature', message.signature);

	message.signature.headers = new Headers(message.signature.headers);

	console.log('started');
	fetch(message.url, message.signature).then(res => res.json()).catch(error => {
		chrome.runtime.sendMessage({
			action: 'apiResponse',
			error: error
		});
	}).then(response => {
		chrome.runtime.sendMessage({
			action: 'apiResponse',
			success: response
		});
	});
	//}, 5000);
}

chrome.runtime.onMessage.addListener(listener);

// var tid = setInterval( function () {
//     if ( document.readyState !== 'complete' ) return;
//     clearInterval( tid );       

//     start();

// }, 100 );

// window.onload = function() {
// 	start();
// }

start();

function start() {

	if ( /*allowedOrigins.indexOf(document.location.origin) >= 0*/true) {
		alert('here');
		window.history.pushState("Automtor wrker thread initiated", "Automator Wroker Thread (AWT)", "automator-worker-thread");

		document.title = 'Automator Worker Threaqd...';

		document.body.style.backgroundColor = '#E9E9E9';

		document.body.innerHTML = '<div id="spinner" style="position: fixed;top:50%;left:50%;color:#1f91f3;font-size:80px;"></div>';

		setTimeout(() => {
			console.log('asking for info');
			chrome.runtime.sendMessage({
				action: 'apiDetails'
			});
		}, 8000);

		var counter = 0;
		setInterval(function () {
			counter++;

			if (counter == 6) {
				counter = 0;
				document.getElementById('spinner').innerHTML = '.';
			} else {
				document.getElementById('spinner').innerHTML += '.';
			}
		}, 500);
	}
}

/***/ })

/******/ });