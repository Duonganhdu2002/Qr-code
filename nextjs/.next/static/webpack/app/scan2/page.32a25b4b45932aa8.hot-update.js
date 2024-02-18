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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const startCamera = async ()=>{\n            try {\n                // Lấy stream từ camera\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                // Tạo và cấu hình phần tử <video>\n                const videoElement = document.createElement(\"video\");\n                videoElement.srcObject = stream;\n                videoElement.play();\n                // Thay thế phần tử <video> hiện tại bằng phần tử mới\n                // if (videoRef.current) {\n                //   videoRef.current.replaceWith(videoElement);\n                // }\n                // document.body.appendChild(videoElement);\n                if (videoRef.current) {\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().init({\n                        inputStream: {\n                            name: \"Live\",\n                            type: \"LiveStream\",\n                            target: videoElement\n                        },\n                        decoder: {\n                            readers: [\n                                \"ean_reader\",\n                                \"code_128_reader\",\n                                \"code_39_reader\"\n                            ]\n                        }\n                    }, (err)=>{\n                        if (err) {\n                            console.error(\"Error initializing Quagga:\", err);\n                            return;\n                        }\n                        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().start();\n                    });\n                }\n                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().onDetected((data)=>{\n                    setUserCode(data.codeResult.code);\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        startCamera();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n        };\n    }, []);\n    const handleReset = ()=>{\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] mx-auto flex mb-36 mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: userCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center font-semibold text-3xl\",\n                            children: \"Result\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold\",\n                            children: userCode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleReset,\n                                className: \"text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-2\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4McBknLaRejctzrE4poeBguDGfo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFFeEMsTUFBTUssT0FBaUI7O0lBQ3JCLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQWdCO0lBRXhERixnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGNBQWM7WUFDbEIsSUFBSTtnQkFDRix1QkFBdUI7Z0JBQ3ZCLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQ3ZEQyxPQUFPO2dCQUNUO2dCQUVBLGtDQUFrQztnQkFDbEMsTUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDO2dCQUM1Q0YsYUFBYUcsU0FBUyxHQUFHUjtnQkFDekJLLGFBQWFJLElBQUk7Z0JBRWpCLHFEQUFxRDtnQkFDckQsMEJBQTBCO2dCQUMxQixnREFBZ0Q7Z0JBQ2hELElBQUk7Z0JBRUosMkNBQTJDO2dCQUczQyxJQUFJYixTQUFTYyxPQUFPLEVBQUU7b0JBQ3BCaEIsOERBQVcsQ0FDVDt3QkFDRWtCLGFBQWE7NEJBQ1hDLE1BQU07NEJBQ05DLE1BQU07NEJBQ05DLFFBQVFWO3dCQUNWO3dCQUNBVyxTQUFTOzRCQUNQQyxTQUFTO2dDQUFDO2dDQUFjO2dDQUFtQjs2QkFBaUI7d0JBQzlEO29CQUNGLEdBQ0EsQ0FBQ0M7d0JBQ0MsSUFBSUEsS0FBSzs0QkFDUEMsUUFBUUMsS0FBSyxDQUFDLDhCQUE4QkY7NEJBQzVDO3dCQUNGO3dCQUNBeEIsK0RBQVk7b0JBQ2Q7Z0JBRUo7Z0JBRUFBLG9FQUFpQixDQUFDLENBQUM2QjtvQkFDakJ6QixZQUFZeUIsS0FBS0MsVUFBVSxDQUFDQyxJQUFJO2dCQUNsQztZQUNGLEVBQUUsT0FBT0wsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBckI7UUFFQSxPQUFPO1lBQ0xMLDhEQUFXO1FBQ2I7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNaUMsY0FBYztRQUNsQkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzVCO29CQUFNNkIsS0FBS3JDOzs7Ozs7Ozs7OzswQkFFZCw4REFBQ21DO2dCQUFJQyxXQUFVOzBCQUNabkMsMEJBQ0MsOERBQUNrQzs7c0NBQ0MsOERBQUNHOzRCQUFFRixXQUFVO3NDQUFxQzs7Ozs7O3NDQUNsRCw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQ1ZuQzs7Ozs7O3NDQUVILDhEQUFDa0M7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNHO2dDQUNDQyxTQUFTVDtnQ0FDVEssV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBM0ZNckM7S0FBQUE7QUE2Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zY2FuMi9wYWdlLnRzeD80MzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUXVhZ2dhIGZyb20gXCJAZXJpY2JsYWRlL3F1YWdnYTJcIjtcclxuXHJcbmNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFt1c2VyQ29kZSwgc2V0VXNlckNvZGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydENhbWVyYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBM4bqleSBzdHJlYW0gdOG7qyBjYW1lcmFcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVOG6oW8gdsOgIGPhuqV1IGjDrG5oIHBo4bqnbiB04butIDx2aWRlbz5cclxuICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XHJcbiAgICAgICAgdmlkZW9FbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xyXG5cclxuICAgICAgICAvLyBUaGF5IHRo4bq/IHBo4bqnbiB04butIDx2aWRlbz4gaGnhu4duIHThuqFpIGLhurFuZyBwaOG6p24gdOG7rSBt4bubaVxyXG4gICAgICAgIC8vIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgLy8gICB2aWRlb1JlZi5jdXJyZW50LnJlcGxhY2VXaXRoKHZpZGVvRWxlbWVudCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZpZGVvRWxlbWVudCk7XHJcblxyXG5cclxuICAgICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgUXVhZ2dhLmluaXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpbnB1dFN0cmVhbToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJMaXZlXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxpdmVTdHJlYW1cIixcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdmlkZW9FbGVtZW50LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGVjb2Rlcjoge1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyczogW1wiZWFuX3JlYWRlclwiLCBcImNvZGVfMTI4X3JlYWRlclwiLCBcImNvZGVfMzlfcmVhZGVyXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5pdGlhbGl6aW5nIFF1YWdnYTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBRdWFnZ2Eub25EZXRlY3RlZCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0VXNlckNvZGUoZGF0YS5jb2RlUmVzdWx0LmNvZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgY2FtZXJhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRDYW1lcmEoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBRdWFnZ2Euc3RvcCgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gbXgtYXV0byBmbGV4IG1iLTM2IG10LTE2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cclxuICAgICAgICA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cclxuICAgICAgICB7dXNlckNvZGUgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB0ZXh0LTN4bFwiPlJlc3VsdDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbXQtMjAgYmctZ3JheS0xMDAgcm91bmRlZC1tZCB3LWZpdCBweC02IG14LWF1dG8gcHktMiBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAge3VzZXJDb2RlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBteS0yMFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tZCBweS0yIHB4LTEyIGJvcmRlci1bMXB4XSBtdC0yNCBib3JkZXItc2xhdGUtNDAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJRdWFnZ2EiLCJQYWdlIiwidmlkZW9SZWYiLCJ1c2VyQ29kZSIsInNldFVzZXJDb2RlIiwic3RhcnRDYW1lcmEiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsInZpZGVvRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyY09iamVjdCIsInBsYXkiLCJjdXJyZW50IiwiaW5pdCIsImlucHV0U3RyZWFtIiwibmFtZSIsInR5cGUiLCJ0YXJnZXQiLCJkZWNvZGVyIiwicmVhZGVycyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXJ0Iiwib25EZXRlY3RlZCIsImRhdGEiLCJjb2RlUmVzdWx0IiwiY29kZSIsInN0b3AiLCJoYW5kbGVSZXNldCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});