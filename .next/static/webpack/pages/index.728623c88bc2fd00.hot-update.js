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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction MyButton(param) {\n    var count = param.count, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        children: [\n            \"Clicked \",\n            count,\n            \" times\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = MyButton;\nfunction MyApp() {\n    var handleClick = function handleClick() {\n        setCount(count + 1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref[0], setCount = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Buttons That Count\"\n            }, void 0, false, {\n                fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyButton, {\n                count: count,\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyButton, {\n                count: count,\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyButton, {\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bretthughes/workspace/foundations/inclass/react/intro-to-react/pages/index.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(MyApp, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = MyApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"MyButton\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQzs7QUFFakMsU0FBU0MsUUFBUSxDQUFDLEtBQWtCLEVBQUU7UUFBbEJDLEtBQUssR0FBUCxLQUFrQixDQUFoQkEsS0FBSyxFQUFFQyxPQUFPLEdBQWhCLEtBQWtCLENBQVRBLE9BQU87SUFFaEMscUJBQ0UsOERBQUNDLFFBQU07UUFBQ0QsT0FBTyxFQUFFQSxPQUFPOztZQUFFLFVBQ2hCO1lBQUNELEtBQUs7WUFBQyxRQUNqQjs7Ozs7O1lBQVMsQ0FDVDtDQUNIO0FBUFFELEtBQUFBLFFBQVE7QUFRRixTQUFTSSxLQUFLLEdBQUc7UUFJckJDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFJO1FBQ3RCQyxRQUFRLENBQUNMLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNyQjs7SUFKRCxJQUEwQkYsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5QkUsS0FBSyxHQUFjRixHQUFXLEdBQXpCLEVBQUVPLFFBQVEsR0FBSVAsR0FBVyxHQUFmO0lBTXRCLHFCQUNFLDhEQUFDUSxLQUFHOzswQkFDSiw4REFBQ0MsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O29CQUFLOzBCQUMzQiw4REFBQ1IsUUFBUTtnQkFBQ0MsS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxPQUFPLEVBQUVHLFdBQVc7Ozs7O29CQUFHOzBCQUMvQyw4REFBQ0wsUUFBUTtnQkFBQ0MsS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxPQUFPLEVBQUVHLFdBQVc7Ozs7O29CQUFHOzBCQUMvQyw4REFBQ0wsUUFBUTtnQkFBQ0UsT0FBTyxFQUFFRyxXQUFXOzs7OztvQkFBRzs7Ozs7O1lBQzNCLENBQ047Q0FDSDtHQWhCdUJELEtBQUs7QUFBTEEsTUFBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbiAgICAgIFxuZnVuY3Rpb24gTXlCdXR0b24oeyBjb3VudCwgb25DbGljayB9KSB7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgQ2xpY2tlZCB7Y291bnR9IHRpbWVzXG4gICAgPC9idXR0b24+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCgpIHtcblxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrICgpIHtcbiAgICBzZXRDb3VudChjb3VudCArIDEpO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgPGgxPkJ1dHRvbnMgVGhhdCBDb3VudDwvaDE+XG4gICAgPE15QnV0dG9uIGNvdW50PXtjb3VudH0gb25DbGljaz17aGFuZGxlQ2xpY2t9Lz5cbiAgICA8TXlCdXR0b24gY291bnQ9e2NvdW50fSBvbkNsaWNrPXtoYW5kbGVDbGlja30vPlxuICAgIDxNeUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30vPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuICAgIFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXlCdXR0b24iLCJjb3VudCIsIm9uQ2xpY2siLCJidXR0b24iLCJNeUFwcCIsImhhbmRsZUNsaWNrIiwic2V0Q291bnQiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});