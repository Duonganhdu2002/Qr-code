"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/scan2/page",{

/***/ "(app-pages-browser)/./src/app/scan2/page.tsx":
/*!********************************!*\
  !*** ./src/app/scan2/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst BarcodeScanPage = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initQuagga = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                if (videoRef.current) {\n                    videoRef.current.srcObject = stream;\n                }\n                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().init({\n                    inputStream: {\n                        name: \"Live\",\n                        type: \"LiveStream\",\n                        target: videoRef.current\n                    },\n                    decoder: {\n                        readers: [\n                            \"ean_reader\"\n                        ]\n                    }\n                }, (err)=>{\n                    if (err) {\n                        console.error(err);\n                        return;\n                    }\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().start();\n                });\n                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().onDetected((data)=>{\n                    console.log(\"Barcode detected:\", data.codeResult.code);\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        initQuagga();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Barcode Scanner\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: videoRef,\n                className: \"w-full max-w-md mx-auto mt-8\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BarcodeScanPage, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = BarcodeScanPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarcodeScanPage);\nvar _c;\n$RefreshReg$(_c, \"BarcodeScanPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFHeEMsTUFBTUksa0JBQTRCOztJQUNoQyxNQUFNQyxXQUFXSCw2Q0FBTUEsQ0FBbUI7SUFFMUNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQUVDLE9BQU87Z0JBQUs7Z0JBR3ZFLElBQUlOLFNBQVNPLE9BQU8sRUFBRTtvQkFDcEJQLFNBQVNPLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHTjtnQkFDL0I7Z0JBRUFKLDhEQUFXLENBQ1Q7b0JBQ0VZLGFBQWE7d0JBQ1hDLE1BQU07d0JBQ05DLE1BQU07d0JBQ05DLFFBQVFiLFNBQVNPLE9BQU87b0JBQzFCO29CQUNBTyxTQUFTO3dCQUNQQyxTQUFTOzRCQUFDO3lCQUFhO29CQUN6QjtnQkFDRixHQUNBLENBQUNDO29CQUNDLElBQUlBLEtBQUs7d0JBQ1BDLFFBQVFDLEtBQUssQ0FBQ0Y7d0JBQ2Q7b0JBQ0Y7b0JBQ0FsQiwrREFBWTtnQkFDZDtnQkFHRkEsb0VBQWlCLENBQUMsQ0FBQ3VCO29CQUNqQkosUUFBUUssR0FBRyxDQUFDLHFCQUFxQkQsS0FBS0UsVUFBVSxDQUFDQyxJQUFJO2dCQUN2RDtZQUNGLEVBQUUsT0FBT04sT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBakI7UUFFQSxPQUFPO1lBQ0xILDhEQUFXO1FBQ2I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzRCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNyQjtnQkFBTXVCLEtBQUs3QjtnQkFBVTJCLFdBQVU7Ozs7Ozs7Ozs7OztBQUd0QztHQXRETTVCO0tBQUFBO0FBd0ROLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3g/NDM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFF1YWdnYSBmcm9tIFwiQGVyaWNibGFkZS9xdWFnZ2EyXCI7XHJcblxyXG5cclxuY29uc3QgQmFyY29kZVNjYW5QYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGluaXRRdWFnZ2EgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUXVhZ2dhLmluaXQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlucHV0U3RyZWFtOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ0xpdmUnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdMaXZlU3RyZWFtJyxcclxuICAgICAgICAgICAgICB0YXJnZXQ6IHZpZGVvUmVmLmN1cnJlbnQhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWNvZGVyOiB7XHJcbiAgICAgICAgICAgICAgcmVhZGVyczogWydlYW5fcmVhZGVyJ10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBRdWFnZ2Euc3RhcnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBRdWFnZ2Eub25EZXRlY3RlZCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0JhcmNvZGUgZGV0ZWN0ZWQ6JywgZGF0YS5jb2RlUmVzdWx0LmNvZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFjY2Vzc2luZyBjYW1lcmE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRRdWFnZ2EoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBRdWFnZ2Euc3RvcCgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5CYXJjb2RlIFNjYW5uZXI8L2gxPlxyXG4gICAgICA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIG14LWF1dG8gbXQtOFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZVNjYW5QYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJRdWFnZ2EiLCJCYXJjb2RlU2NhblBhZ2UiLCJ2aWRlb1JlZiIsImluaXRRdWFnZ2EiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImN1cnJlbnQiLCJzcmNPYmplY3QiLCJpbml0IiwiaW5wdXRTdHJlYW0iLCJuYW1lIiwidHlwZSIsInRhcmdldCIsImRlY29kZXIiLCJyZWFkZXJzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhcnQiLCJvbkRldGVjdGVkIiwiZGF0YSIsImxvZyIsImNvZGVSZXN1bHQiLCJjb2RlIiwic3RvcCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});