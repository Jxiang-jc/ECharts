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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/echarts */ \"./src/js/echarts.js\");\n\r\n// 引入封装好的js\r\n\r\n_js_echarts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init()\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/echarts.js":
/*!***************************!*\
  !*** ./src/js/echarts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n// common JS\r\nconst echarts = __webpack_require__(/*! echarts */ \"echarts\")\r\n\r\n// ES Module\r\n\r\n// 上面两个区别可看 https://www.cnblogs.com/liaojie970/p/7376682.html\r\n\r\nconst saleChart = {\r\n\r\n    init() {\r\n        this.initialSaleChart()\r\n    },\r\n\r\n    // 初始化图表\r\n    initialSaleChart() {\r\n        // 获取图表容器\r\n        let main = document.getElementById('main')\r\n\r\n        // 图表实例\r\n        let myChart = echarts.init(main)\r\n\r\n        // 获取数据\r\n        this.getSaleData(myChart)\r\n    },\r\n\r\n    // 异步获取数据\r\n    getSaleData(myChart) {\r\n        // 打包以后json文件不能放在最外面, 不然会报错. 所以我放进文件夹里面去了\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get('./json/data.json')\r\n            .done(res => {\r\n                console.log(res)\r\n                this.creatOption(myChart, res)\r\n            })\r\n    },\r\n\r\n    // 接到图标实例, 数据\r\n    creatOption(chart, res) {\r\n\r\n        // 默认配置\r\n        let options = {\r\n            title: {\r\n                text: 'ECharts实例'\r\n            },\r\n            tooltip: {},\r\n            xAxis: {\r\n                data: []\r\n            },\r\n            yAxis: [{\r\n                type: 'value'\r\n            }],\r\n            series: [{\r\n                name: '销量',\r\n                type: 'bar',\r\n                data: []\r\n            }]\r\n        }\r\n        console.log('res', res)\r\n        // 通过数据更新配置\r\n        let newOption = Object.assign({}, options, {\r\n            xAxis: {\r\n                data: res.cat\r\n            },\r\n            series: [{\r\n                // 根据名字对应到相应的系列\r\n                name: '销量',\r\n                type: 'bar',\r\n                data: res.data\r\n            }]\r\n        })\r\n\r\n        console.log('newOption: ', newOption)\r\n\r\n        // 为echarts对象加载数据\r\n        chart.setOption(newOption)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (saleChart);\n\n//# sourceURL=webpack:///./src/js/echarts.js?");

/***/ }),

/***/ "echarts":
/*!**************************!*\
  !*** external "echarts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = echarts;\n\n//# sourceURL=webpack:///external_%22echarts%22?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });