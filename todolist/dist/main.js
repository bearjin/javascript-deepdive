/*!
 * 
 *         Build Date: 2022. 8. 17. 오후 3:25:42
 *         Commit Version: cdab155
 * 
 *         Author: bearjin
 * 
 *       
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"header,\\nfooter,\\nsection,\\narticle,\\naside,\\nnav,\\nhgroup,\\ndetails,\\nmenu,\\nfigure,\\nfigcaption {\\n  display: block; }\\n\\nhtml,\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nol,\\nul,\\ndiv,\\nli,\\ndl,\\ndt,\\ndd,\\nform,\\niframe,\\np,\\na,\\nspan,\\nblockquote,\\ni,\\nfigure,\\nfieldset,\\nimg,\\ntable,\\nth,\\ntd,\\ninput,\\ntextarea,\\nselect,\\ncaption,\\nbutton,\\npre,\\nsmall {\\n  padding: 0;\\n  margin: 0; }\\n\\nhtml,\\nbody {\\n  min-height: 100%; }\\n\\nbody {\\n  font-family: \\\"SF Pro Display\\\", system-ui, sans-serif;\\n  font-size: 14px;\\n  line-height: 1.5;\\n  color: #0a0f18; }\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit; }\\n\\nol,\\nul {\\n  list-style: none; }\\n\\nfieldset {\\n  border: 0 solid transparent; }\\n\\nimg {\\n  border: none;\\n  line-height: 0;\\n  vertical-align: top; }\\n\\ntable {\\n  border-collapse: collapse; }\\n\\ntable,\\nth,\\ntd {\\n  border-spacing: 0; }\\n\\ninput,\\ntextarea,\\nselect {\\n  border: 0;\\n  border-radius: 0;\\n  font-family: inherit;\\n  color: #0a0f18;\\n  vertical-align: middle;\\n  outline: none; }\\n\\ncaption {\\n  visibility: hidden;\\n  width: 0;\\n  height: 0;\\n  font-size: 0;\\n  line-height: 0; }\\n\\nbutton {\\n  appearance: none;\\n  border: 0;\\n  background: none;\\n  font-family: inherit;\\n  font-size: inherit;\\n  cursor: pointer;\\n  line-height: 1.5; }\\n\\nbutton::-moz-focus-inner {\\n  padding: 0;\\n  border: 0; }\\n\\nem {\\n  font-style: normal; }\\n\\na {\\n  color: #0a0f18;\\n  text-decoration: none; }\\n\\n.todoList__wrap {\\n  display: flex;\\n  justify-content: center;\\n  max-width: 1280px;\\n  margin-top: 50px; }\\n\\n.todoList__area + .todoList__area {\\n  margin-left: 50px; }\\n\\n.todoList__header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.todoList__title {\\n  font-size: 30px;\\n  text-align: center; }\\n\\n.todoList__list {\\n  width: 260px;\\n  margin-top: 15px; }\\n\\n.todoList__item {\\n  overflow: hidden;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  height: 40px;\\n  padding: 0 10px;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 8px 1px; }\\n  .todoList__item + .todoList__item {\\n    margin-top: 15px; }\\n  .todoList__item:hover .todoList__delete {\\n    display: block; }\\n  .todoList__item--done .todoList__check:checked + .todoList__label {\\n    color: #a9a9a9;\\n    text-decoration: line-through; }\\n  .todoList__item--complete .todoList__input {\\n    color: #ddd;\\n    text-decoration: line-through; }\\n\\n.todoList__label {\\n  width: 100%;\\n  cursor: pointer; }\\n\\n.todoList__input {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #fff; }\\n\\n.todoList__add {\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  width: 100%;\\n  height: 30px;\\n  padding: 0 10px 0 28px;\\n  margin-top: 15px;\\n  border-radius: 4px;\\n  color: #bbb;\\n  text-align: left; }\\n  .todoList__add:hover {\\n    background-color: #f0f0f0; }\\n  .todoList__add::before, .todoList__add::after {\\n    position: absolute;\\n    left: 8px;\\n    width: 12px;\\n    height: 1px;\\n    background-color: #bbb;\\n    content: \\\"\\\"; }\\n  .todoList__add::before {\\n    transform: rotate(90deg); }\\n\\n.todoList__check {\\n  margin-right: 10px; }\\n\\n.todoList__delete {\\n  display: none;\\n  height: 30px;\\n  padding: 0 5px;\\n  margin-left: 10px;\\n  border: 1px solid #bbb;\\n  border-radius: 6px;\\n  font-size: 10px;\\n  color: black; }\\n\\n.todoList__badge {\\n  display: inline-flex;\\n  padding: 5px 10px;\\n  border-radius: 6px;\\n  color: #fff; }\\n  .todoList__badge--do {\\n    background-color: #6bce97; }\\n  .todoList__badge--doing {\\n    background-color: #000; }\\n  .todoList__badge--complete {\\n    background-color: #004fd3; }\\n\\n.todoList__reset {\\n  visibility: hidden;\\n  padding: 3px 5px;\\n  border-radius: 6px;\\n  background-color: #ff6363;\\n  font-size: 12px;\\n  color: #fff; }\\n  .todoList__reset--active {\\n    visibility: visible; }\\n\\n.todoList__count {\\n  visibility: hidden;\\n  font-weight: 700;\\n  color: #ababab; }\\n  .todoList__count--active {\\n    visibility: visible; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar TodoContainer = /*#__PURE__*/function () {\n  function TodoContainer(area, type) {\n    _classCallCheck(this, TodoContainer);\n\n    this.todoItems = [];\n    this.id = 0;\n    this.area = document.querySelector(area);\n    this.type = type;\n    this.initArea();\n  }\n\n  _createClass(TodoContainer, [{\n    key: \"createNewItem\",\n    value: function createNewItem() {\n      this.id++;\n      this.todoItems.push({\n        id: this.id,\n        text: \"\",\n        isDone: false,\n        isComplete: false\n      });\n    }\n  }, {\n    key: \"deleteItem\",\n    value: function deleteItem(id) {\n      this.todoItems = this.todoItems.filter(function (item) {\n        return item.id !== id;\n      });\n    }\n  }, {\n    key: \"changeDoneItem\",\n    value: function changeDoneItem(id, text) {\n      this.todoItems.forEach(function (item) {\n        if (item.id === id) {\n          item.text = text;\n          item.isDone = true;\n        }\n      });\n    }\n  }, {\n    key: \"changeCompleteItem\",\n    value: function changeCompleteItem(id, isComplete) {\n      this.todoItems.forEach(function (item) {\n        if (item.id === id) {\n          item.isComplete = isComplete;\n        }\n      });\n    }\n  }, {\n    key: \"makeList\",\n    value: function makeList() {\n      var _this = this;\n\n      var $list = this.area.querySelector(\".todoList__list\");\n      var $count = this.area.querySelector(\".todoList__count\");\n      var $resetBtn = this.area.querySelector(\".todoList__reset\");\n      $list.innerHTML = \"\";\n      this.todoItems.forEach(function (_ref) {\n        var id = _ref.id,\n            text = _ref.text,\n            isDone = _ref.isDone,\n            isComplete = _ref.isComplete;\n        $list.appendChild(_this.makeItem(id, text, isDone, isComplete));\n      });\n      $count.innerText = this.todoItems.length;\n      $count.classList.add(\"todoList__count--active\");\n      $resetBtn.classList.add(\"todoList__reset--active\");\n    }\n  }, {\n    key: \"resetList\",\n    value: function resetList() {\n      var $list = this.area.querySelector(\".todoList__list\");\n      var $count = this.area.querySelector(\".todoList__count\");\n      var $resetBtn = this.area.querySelector(\".todoList__reset\");\n      $list.innerHTML = \"\";\n      this.todoItems = [];\n      this.id = 0;\n      $count.innerText = this.todoItems.length;\n      $count.classList.remove(\"todoList__count--active\");\n      $resetBtn.classList.remove(\"todoList__reset--active\");\n    }\n  }, {\n    key: \"makeItem\",\n    value: function makeItem(id, text, isDone, isComplete) {\n      var _this2 = this;\n\n      var $item = document.createElement(\"li\");\n      var $input = document.createElement(\"input\");\n      var $label = document.createElement(\"label\");\n      var $button = document.createElement(\"button\");\n      $item.className = \"todoList__item\";\n\n      if (isDone) {\n        $item.classList.add(\"todoList__item--done\");\n        $input.type = \"checkbox\";\n        $input.className = \"todoList__check\";\n        $input.id = \"todo-\".concat(this.type, \"-\").concat(id);\n        $input.checked = isComplete;\n        $input.addEventListener(\"change\", function (event) {\n          var isComplete = event.target.checked;\n\n          _this2.changeCompleteItem(id, isComplete);\n\n          _this2.makeList(_this2.todoItems);\n        });\n        $label.setAttribute(\"for\", \"todo-\".concat(this.type, \"-\").concat(id));\n        $label.className = \"todoList__label\";\n        $label.textContent = text;\n      } else {\n        $input.type = \"text\";\n        $input.className = \"todoList__input\";\n        $input.placeholder = \"텍스트를 입력하세요\";\n        $input.addEventListener(\"change\", function (event) {\n          var text = event.target.value;\n\n          _this2.changeDoneItem(id, text);\n\n          _this2.makeList(_this2.todoItems);\n        });\n      }\n\n      $button.type = \"button\";\n      $button.className = \"todoList__delete\";\n      $button.textContent = \"Delete\";\n      $button.addEventListener(\"click\", function () {\n        _this2.deleteItem(id);\n\n        _this2.makeList(_this2.todoItems);\n      });\n      $item.appendChild($input);\n      if (isDone) $item.appendChild($label);\n      $item.appendChild($button);\n      return $item;\n    }\n  }, {\n    key: \"initArea\",\n    value: function initArea() {\n      var _this3 = this;\n\n      var $header = document.createElement(\"div\");\n      var $count = document.createElement(\"span\");\n      var $badge = document.createElement(\"span\");\n      var $list = document.createElement(\"ul\");\n      var $createBtn = document.createElement(\"button\");\n      var $resetBtn = document.createElement(\"button\");\n      $header.className = \"todoList__header\";\n      $count.className = \"todoList__count\";\n      $badge.className = \"todoList__badge\";\n      $badge.classList.add(\"todoList__badge--\".concat(this.type));\n      $badge.textContent = this.type === \"do\" ? \"😆 Do\" : this.type === \"complete\" ? \"🥳 Complete\" : this.type === \"doing\" ? \"😎 Doing\" : null;\n      $list.className = \"todoList__list\";\n      $createBtn.className = \"todoList__add\";\n      $createBtn.textContent = \"Create new item\";\n      $createBtn.addEventListener(\"click\", function () {\n        _this3.createNewItem();\n\n        _this3.makeList();\n      });\n      $resetBtn.className = \"todoList__reset\";\n      $resetBtn.textContent = \"😇 Delete all items\";\n      $resetBtn.addEventListener(\"click\", function () {\n        _this3.resetList();\n      });\n      $header.appendChild($badge);\n      $header.appendChild($count);\n      $header.appendChild($resetBtn);\n      this.area.appendChild($header);\n      this.area.appendChild($list);\n      this.area.appendChild($createBtn);\n    }\n  }]);\n\n  return TodoContainer;\n}();\n\nvar doArea = new TodoContainer(\"#todoListDo\", \"do\");\nvar doingArea = new TodoContainer(\"#todoListDoing\", \"doing\");\nvar completeArea = new TodoContainer(\"#todoListComplete\", \"complete\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });