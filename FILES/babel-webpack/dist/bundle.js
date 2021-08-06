/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game.js */ \"./src/js/modules/game.js\");\n // INIT GAME\n\n(0,_modules_game_js__WEBPACK_IMPORTED_MODULE_0__.start)();\n\n//# sourceURL=webpack://babel-webpack/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/feed.js":
/*!********************************!*\
  !*** ./src/js/modules/feed.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/js/modules/game.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Feed = {\n  add: function add() {\n    Feed.remove();\n    var ground = _game_js__WEBPACK_IMPORTED_MODULE_0__.default.ground,\n        feed = _game_js__WEBPACK_IMPORTED_MODULE_0__.default.feed,\n        speed = _game_js__WEBPACK_IMPORTED_MODULE_0__.default.speed;\n    var $gameGround = document.getElementById('game');\n    var x = Math.ceil(Math.random() * ground.x);\n    var y = Math.ceil(Math.random() * ground.y);\n    _game_js__WEBPACK_IMPORTED_MODULE_0__.default.setProps({\n      feed: _objectSpread(_objectSpread({}, feed), {}, {\n        x: x,\n        y: y\n      })\n    });\n    var $feed = document.createElement('div');\n    $feed.style.width = feed.size + 'px';\n    $feed.style.height = feed.size + 'px';\n    $feed.style.background = 'red';\n    $feed.style.position = 'relative';\n    $feed.id = 'feed';\n    $feed.style.left = x - speed + 'px';\n    $feed.style.top = y - speed + 'px';\n    $gameGround.append($feed);\n  },\n  remove: function remove() {\n    var $feed = document.getElementById('feed');\n\n    if ($feed) {\n      $feed.remove();\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);\n\n//# sourceURL=webpack://babel-webpack/./src/js/modules/feed.js?");

/***/ }),

/***/ "./src/js/modules/game.js":
/*!********************************!*\
  !*** ./src/js/modules/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _feed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.js */ \"./src/js/modules/feed.js\");\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake.js */ \"./src/js/modules/snake.js\");\n\n\nvar Game = {\n  score: 0,\n  pontuation: 5,\n  direction: 'right',\n  speed: 5,\n  core: null,\n  ground: {\n    x: 500,\n    y: 500\n  },\n  snake: {\n    size: 25,\n    x: 0,\n    y: 0\n  },\n  feed: {\n    size: 25,\n    x: 0,\n    y: 0\n  },\n  setProps: function setProps(props) {\n    Object.keys(props).map(function (key) {\n      Game[key] = props[key];\n    });\n  },\n  checkGameOver: function checkGameOver() {\n    var snake = Game.snake,\n        ground = Game.ground,\n        core = Game.core;\n    var minGround = 0;\n\n    if (snake.x < minGround || snake.x > ground.x || snake.y < minGround || snake.y > ground.y) {\n      alert('GAME OVER');\n      clearInterval(core);\n      return false;\n    }\n  },\n  checkColision: function checkColision() {\n    var snake = Game.snake,\n        feed = Game.feed;\n    var isCollide = !(snake.y + snake.size < feed.y || snake.y > feed.y + feed.size || snake.x + snake.size < feed.x || snake.x > feed.x + feed.size);\n\n    if (isCollide) {\n      _feed_js__WEBPACK_IMPORTED_MODULE_0__.default.add();\n      Game.updateScore();\n      Game.updateSpeed();\n    }\n  },\n  updateScore: function updateScore() {\n    var score = Game.score,\n        pontuation = Game.pontuation;\n    score += pontuation;\n    var $score = document.getElementById('score');\n    $score.innerText = \"Pontua\\xE7\\xE3o: \".concat(score);\n    Game.setProps({\n      score: score\n    });\n  },\n  updateSpeed: function updateSpeed() {\n    var speed = Game.speed;\n    speed += 1;\n    var $speed = document.getElementById('speed');\n    $speed.innerText = \"Velocidade: \".concat(speed);\n    Game.setProps({\n      speed: speed\n    });\n  }\n};\nvar start = function start() {\n  _feed_js__WEBPACK_IMPORTED_MODULE_0__.default.add();\n  Game.setProps({\n    core: setInterval(function () {\n      _snake_js__WEBPACK_IMPORTED_MODULE_1__.default.move();\n    }, 50)\n  });\n  document.addEventListener('keydown', function (event) {\n    _snake_js__WEBPACK_IMPORTED_MODULE_1__.default.updateDirection(event.key);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://babel-webpack/./src/js/modules/game.js?");

/***/ }),

/***/ "./src/js/modules/snake.js":
/*!*********************************!*\
  !*** ./src/js/modules/snake.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/js/modules/game.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Snake = {\n  move: function move() {\n    var $snake = document.getElementById('snake');\n    var x = parseInt($snake.style.left) || 0;\n    var y = parseInt($snake.style.top) || 0;\n\n    switch (_game_js__WEBPACK_IMPORTED_MODULE_0__.default.direction) {\n      case 'up':\n        $snake.style.top = y - _game_js__WEBPACK_IMPORTED_MODULE_0__.default.speed + 'px';\n        break;\n\n      case 'right':\n        $snake.style.left = x + _game_js__WEBPACK_IMPORTED_MODULE_0__.default.speed + 'px';\n        break;\n\n      case 'down':\n        $snake.style.top = y + _game_js__WEBPACK_IMPORTED_MODULE_0__.default.speed + 'px';\n        break;\n\n      case 'left':\n        $snake.style.left = x - _game_js__WEBPACK_IMPORTED_MODULE_0__.default.speed + 'px';\n        break;\n    }\n\n    _game_js__WEBPACK_IMPORTED_MODULE_0__.default.checkGameOver($snake);\n    _game_js__WEBPACK_IMPORTED_MODULE_0__.default.checkColision();\n    Snake.updatePosition(x, y);\n  },\n  updatePosition: function updatePosition(x, y) {\n    _game_js__WEBPACK_IMPORTED_MODULE_0__.default.setProps({\n      snake: _objectSpread(_objectSpread({}, _game_js__WEBPACK_IMPORTED_MODULE_0__.default.snake), {}, {\n        x: x,\n        y: y\n      })\n    });\n  },\n  updateDirection: function updateDirection(direction) {\n    _game_js__WEBPACK_IMPORTED_MODULE_0__.default.setProps({\n      direction: direction.replace('Arrow', '').toLowerCase()\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);\n\n//# sourceURL=webpack://babel-webpack/./src/js/modules/snake.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;