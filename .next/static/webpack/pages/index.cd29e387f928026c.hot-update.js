"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction MyButton() {\n    var handleClick = function handleClick() {\n        {\n            count + 1;\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref[0], useCount = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        children: [\n            \"Clicked \",\n            count\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(MyButton, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = MyButton;\nfunction MyApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Buttons That Count\"\n            }, void 0, false, {\n                fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyButton, {}, void 0, false, {\n                fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyButton, {}, void 0, false, {\n                fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_c1 = MyApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"MyButton\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQzs7QUFFakMsU0FBU0MsUUFBUSxHQUFHO1FBR1RDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFJO1FBQ3RCO1lBQUNDLEtBQUssR0FBRyxDQUFDO1NBQUM7S0FDWjs7SUFKSCxJQUEwQkgsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5QkcsS0FBSyxHQUFjSCxHQUFXLEdBQXpCLEVBQUVJLFFBQVEsR0FBSUosR0FBVyxHQUFmO0lBTXBCLHFCQUNFLDhEQUFDSyxRQUFNO1FBQUNDLE9BQU8sRUFBRUosV0FBVzs7WUFBRSxVQUNwQjtZQUFDQyxLQUFLOzs7Ozs7WUFDUCxDQUNUO0NBQ0g7R0FaUUYsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBYUYsU0FBU00sS0FBSyxHQUFHO0lBQzlCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDSiw4REFBQ0MsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O29CQUFLOzBCQUMzQiw4REFBQ1IsUUFBUTs7OztvQkFBRzswQkFDWiw4REFBQ0EsUUFBUTs7OztvQkFBRzs7Ozs7O1lBQ04sQ0FDTjtDQUNIO0FBUnVCTSxNQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuICAgICAgXG5mdW5jdGlvbiBNeUJ1dHRvbigpIHtcbmNvbnN0IFtjb3VudCwgdXNlQ291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2sgKCkge1xuICAgIHtjb3VudCArIDF9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgQ2xpY2tlZCB7Y291bnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCgpIHtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgPGgxPkJ1dHRvbnMgVGhhdCBDb3VudDwvaDE+XG4gICAgPE15QnV0dG9uIC8+XG4gICAgPE15QnV0dG9uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG4gICAgXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNeUJ1dHRvbiIsImhhbmRsZUNsaWNrIiwiY291bnQiLCJ1c2VDb3VudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJNeUFwcCIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});