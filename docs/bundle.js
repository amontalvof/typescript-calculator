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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n    box-sizing: border-box;\\n    font-family: Gotham Rounded, sans-serif;\\n    font-weight: normal;\\n}\\n\\nbody {\\n    padding: 0;\\n    margin: 0;\\n    background: linear-gradient(to right, #00aaff, #00ff6c);\\n}\\n\\n.calculator-grid {\\n    display: grid;\\n    justify-content: center;\\n    align-content: center;\\n    min-height: 100vh;\\n    grid-template-columns: repeat(4, 100px);\\n    grid-template-rows: minmax(120px, auto) repeat(5, 100px);\\n}\\n\\n.calculator-grid > button {\\n    cursor: pointer;\\n    font-size: 2rem;\\n    border: 1px solid white;\\n    outline: none;\\n    background-color: rgba(255, 255, 255, 0.75);\\n}\\n\\n.calculator-grid > button:hover {\\n    background-color: rgba(255, 255, 255, 0.9);\\n}\\n\\n.span-two {\\n    grid-column: span 2;\\n}\\n\\n.output {\\n    grid-column: 1 / -1;\\n    background-color: rgba(0, 0, 0, 0.75);\\n    display: flex;\\n    align-items: flex-end;\\n    justify-content: space-around;\\n    flex-direction: column;\\n    padding: 10px;\\n    word-wrap: break-word;\\n    word-break: break-all;\\n}\\n\\n.output .previous-operand {\\n    color: rgba(255, 255, 255, 0.75);\\n    font-size: 1.5rem;\\n}\\n\\n.output .current-operand {\\n    color: white;\\n    font-size: 2.5rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://typescript-calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberButtons\": () => (/* binding */ numberButtons),\n/* harmony export */   \"operationButtons\": () => (/* binding */ operationButtons),\n/* harmony export */   \"equalsButton\": () => (/* binding */ equalsButton),\n/* harmony export */   \"deleteButton\": () => (/* binding */ deleteButton),\n/* harmony export */   \"allClearButton\": () => (/* binding */ allClearButton),\n/* harmony export */   \"previousOperandTextElement\": () => (/* binding */ previousOperandTextElement),\n/* harmony export */   \"currentOperandTextElement\": () => (/* binding */ currentOperandTextElement)\n/* harmony export */ });\n/* harmony import */ var _modules_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/listeners */ \"./src/modules/listeners/index.ts\");\n/* harmony import */ var _modules_helpers_clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers/clear */ \"./src/modules/helpers/clear.ts\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\nvar numberButtons = document.querySelectorAll('[data-number]');\nvar operationButtons = document.querySelectorAll('[data-operation]');\nvar equalsButton = document.querySelector('[data-equals]');\nvar deleteButton = document.querySelector('[data-delete]');\nvar allClearButton = document.querySelector('[data-all-clear]');\nvar previousOperandTextElement = document.querySelector('[data-previous-operand]');\nvar currentOperandTextElement = document.querySelector('[data-current-operand]');\ndocument.addEventListener('DOMContentLoaded', function () {\n    (0,_modules_helpers_clear__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_modules_listeners__WEBPACK_IMPORTED_MODULE_0__.numberButtonsListener)();\n    (0,_modules_listeners__WEBPACK_IMPORTED_MODULE_0__.operationButtonsListener)();\n    (0,_modules_listeners__WEBPACK_IMPORTED_MODULE_0__.equalsButtonListener)();\n    (0,_modules_listeners__WEBPACK_IMPORTED_MODULE_0__.allClearButtonListener)();\n    (0,_modules_listeners__WEBPACK_IMPORTED_MODULE_0__.deleteButtonListener)();\n});\n\n\n//# sourceURL=webpack://typescript-calculator/./src/index.ts?");

/***/ }),

/***/ "./src/modules/helpers/appendNumber.ts":
/*!*********************************************!*\
  !*** ./src/modules/helpers/appendNumber.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./src/modules/state.ts\");\n\nvar appendNumber = function (number) {\n    if (number === '.' && _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand.includes('.'))\n        return;\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand.toString() + number.toString();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendNumber);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/helpers/appendNumber.ts?");

/***/ }),

/***/ "./src/modules/helpers/chooseOperation.ts":
/*!************************************************!*\
  !*** ./src/modules/helpers/chooseOperation.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _compute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute */ \"./src/modules/helpers/compute.ts\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/modules/state.ts\");\n\n\nvar chooseOperation = function (operation) {\n    if (_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentOperand === '')\n        return;\n    if (_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].previousOperand !== '') {\n        (0,_compute__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].operation = operation;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].previousOperand = _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentOperand;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentOperand = '';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseOperation);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/helpers/chooseOperation.ts?");

/***/ }),

/***/ "./src/modules/helpers/clear.ts":
/*!**************************************!*\
  !*** ./src/modules/helpers/clear.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./src/modules/state.ts\");\n\nvar clear = function () {\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = '';\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].previousOperand = '';\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operation = undefined;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/helpers/clear.ts?");

/***/ }),

/***/ "./src/modules/helpers/compute.ts":
/*!****************************************!*\
  !*** ./src/modules/helpers/compute.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./src/modules/state.ts\");\n\nvar compute = function () {\n    var computation;\n    var prev = parseFloat(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].previousOperand);\n    var current = parseFloat(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand);\n    if (isNaN(prev) || isNaN(current))\n        return;\n    switch (_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operation) {\n        case '+':\n            computation = prev + current;\n            break;\n        case '-':\n            computation = prev - current;\n            break;\n        case '*':\n            computation = prev * current;\n            break;\n        case '÷':\n            computation = prev / current;\n            break;\n        default:\n            return;\n    }\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = computation.toString();\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].operation = undefined;\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].previousOperand = '';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compute);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/helpers/compute.ts?");

/***/ }),

/***/ "./src/modules/helpers/delete.ts":
/*!***************************************!*\
  !*** ./src/modules/helpers/delete.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./src/modules/state.ts\");\n\nvar deleteAction = function () {\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentOperand.toString().slice(0, -1);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteAction);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/helpers/delete.ts?");

/***/ }),

/***/ "./src/modules/helpers/getDisplayNumber.ts":
/*!*************************************************!*\
  !*** ./src/modules/helpers/getDisplayNumber.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getDisplayNumber = function (number) {\n    var stringNumber = number.toString();\n    var integerDigits = parseFloat(stringNumber.split('.')[0]);\n    var decimalDigits = stringNumber.split('.')[1];\n    var integerDisplay;\n    if (isNaN(integerDigits)) {\n        integerDisplay = '';\n    }\n    else {\n        integerDisplay = integerDigits.toLocaleString('en', {\n            maximumFractionDigits: 0,\n        });\n    }\n    if (decimalDigits != null) {\n        return \"\".concat(integerDisplay, \".\").concat(decimalDigits);\n    }\n    else {\n        return integerDisplay;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDisplayNumber);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/helpers/getDisplayNumber.ts?");

/***/ }),

/***/ "./src/modules/helpers/updateDisplay.ts":
/*!**********************************************!*\
  !*** ./src/modules/helpers/updateDisplay.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./src/index.ts\");\n/* harmony import */ var _getDisplayNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDisplayNumber */ \"./src/modules/helpers/getDisplayNumber.ts\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ \"./src/modules/state.ts\");\n\n\n\nvar updateDisplay = function () {\n    ___WEBPACK_IMPORTED_MODULE_0__.currentOperandTextElement.innerText = (0,_getDisplayNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentOperand);\n    if (_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].operation != null) {\n        ___WEBPACK_IMPORTED_MODULE_0__.previousOperandTextElement.innerText = \"\".concat((0,_getDisplayNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].previousOperand), \" \").concat(_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].operation);\n    }\n    else {\n        ___WEBPACK_IMPORTED_MODULE_0__.previousOperandTextElement.innerText = '';\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDisplay);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/helpers/updateDisplay.ts?");

/***/ }),

/***/ "./src/modules/listeners/allClearButtonListener.ts":
/*!*********************************************************!*\
  !*** ./src/modules/listeners/allClearButtonListener.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./src/index.ts\");\n/* harmony import */ var _helpers_clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clear */ \"./src/modules/helpers/clear.ts\");\n/* harmony import */ var _helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateDisplay */ \"./src/modules/helpers/updateDisplay.ts\");\n\n\n\nvar allClearButtonListener = function () {\n    ___WEBPACK_IMPORTED_MODULE_0__.allClearButton.addEventListener('click', function (button) {\n        (0,_helpers_clear__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allClearButtonListener);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/listeners/allClearButtonListener.ts?");

/***/ }),

/***/ "./src/modules/listeners/deleteButtonListener.ts":
/*!*******************************************************!*\
  !*** ./src/modules/listeners/deleteButtonListener.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./src/index.ts\");\n/* harmony import */ var _helpers_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/delete */ \"./src/modules/helpers/delete.ts\");\n/* harmony import */ var _helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateDisplay */ \"./src/modules/helpers/updateDisplay.ts\");\n\n\n\nvar deleteButtonListener = function () {\n    ___WEBPACK_IMPORTED_MODULE_0__.deleteButton.addEventListener('click', function (button) {\n        (0,_helpers_delete__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteButtonListener);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/listeners/deleteButtonListener.ts?");

/***/ }),

/***/ "./src/modules/listeners/equalsButtonListener.ts":
/*!*******************************************************!*\
  !*** ./src/modules/listeners/equalsButtonListener.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./src/index.ts\");\n/* harmony import */ var _helpers_compute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/compute */ \"./src/modules/helpers/compute.ts\");\n/* harmony import */ var _helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateDisplay */ \"./src/modules/helpers/updateDisplay.ts\");\n\n\n\nvar equalsButtonListener = function () {\n    ___WEBPACK_IMPORTED_MODULE_0__.equalsButton.addEventListener('click', function (button) {\n        (0,_helpers_compute__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalsButtonListener);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/listeners/equalsButtonListener.ts?");

/***/ }),

/***/ "./src/modules/listeners/index.ts":
/*!****************************************!*\
  !*** ./src/modules/listeners/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allClearButtonListener\": () => (/* reexport safe */ _allClearButtonListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"deleteButtonListener\": () => (/* reexport safe */ _deleteButtonListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"equalsButtonListener\": () => (/* reexport safe */ _equalsButtonListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"numberButtonsListener\": () => (/* reexport safe */ _numberButtonsListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"operationButtonsListener\": () => (/* reexport safe */ _operationButtonsListener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _allClearButtonListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allClearButtonListener */ \"./src/modules/listeners/allClearButtonListener.ts\");\n/* harmony import */ var _deleteButtonListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteButtonListener */ \"./src/modules/listeners/deleteButtonListener.ts\");\n/* harmony import */ var _equalsButtonListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equalsButtonListener */ \"./src/modules/listeners/equalsButtonListener.ts\");\n/* harmony import */ var _numberButtonsListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberButtonsListener */ \"./src/modules/listeners/numberButtonsListener.ts\");\n/* harmony import */ var _operationButtonsListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operationButtonsListener */ \"./src/modules/listeners/operationButtonsListener.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/listeners/index.ts?");

/***/ }),

/***/ "./src/modules/listeners/numberButtonsListener.ts":
/*!********************************************************!*\
  !*** ./src/modules/listeners/numberButtonsListener.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./src/index.ts\");\n/* harmony import */ var _helpers_appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/appendNumber */ \"./src/modules/helpers/appendNumber.ts\");\n/* harmony import */ var _helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateDisplay */ \"./src/modules/helpers/updateDisplay.ts\");\n\n\n\nvar numberButtonsListener = function () {\n    ___WEBPACK_IMPORTED_MODULE_0__.numberButtons.forEach(function (button) {\n        button.addEventListener('click', function () {\n            (0,_helpers_appendNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(button.innerText);\n            (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        });\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numberButtonsListener);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/listeners/numberButtonsListener.ts?");

/***/ }),

/***/ "./src/modules/listeners/operationButtonsListener.ts":
/*!***********************************************************!*\
  !*** ./src/modules/listeners/operationButtonsListener.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ \"./src/index.ts\");\n/* harmony import */ var _helpers_chooseOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/chooseOperation */ \"./src/modules/helpers/chooseOperation.ts\");\n/* harmony import */ var _helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateDisplay */ \"./src/modules/helpers/updateDisplay.ts\");\n\n\n\nvar operationButtonsListener = function () {\n    ___WEBPACK_IMPORTED_MODULE_0__.operationButtons.forEach(function (button) {\n        button.addEventListener('click', function () {\n            (0,_helpers_chooseOperation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(button.innerText);\n            (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        });\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (operationButtonsListener);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/listeners/operationButtonsListener.ts?");

/***/ }),

/***/ "./src/modules/state.ts":
/*!******************************!*\
  !*** ./src/modules/state.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar state = {\n    currentOperand: '',\n    previousOperand: '',\n    operation: undefined,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n\n//# sourceURL=webpack://typescript-calculator/./src/modules/state.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;