"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/peek-readable";
exports.ids = ["vendor-chunks/peek-readable"];
exports.modules = {

/***/ "(ssr)/./node_modules/peek-readable/lib/Deferred.js":
/*!****************************************************!*\
  !*** ./node_modules/peek-readable/lib/Deferred.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.Deferred = void 0;\nclass Deferred {\n    constructor(){\n        this.resolve = ()=>null;\n        this.reject = ()=>null;\n        this.promise = new Promise((resolve, reject)=>{\n            this.reject = reject;\n            this.resolve = resolve;\n        });\n    }\n}\nexports.Deferred = Deferred;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvRGVmZXJyZWQuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELGdCQUFnQixHQUFHLEtBQUs7QUFDeEIsTUFBTUU7SUFDRkMsYUFBYztRQUNWLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQU07UUFDckIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBTTtRQUNwQixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJQyxRQUFRLENBQUNILFNBQVNDO1lBQ2pDLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNkLElBQUksQ0FBQ0QsT0FBTyxHQUFHQTtRQUNuQjtJQUNKO0FBQ0o7QUFDQUosZ0JBQWdCLEdBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXItY29kZS8uL25vZGVfbW9kdWxlcy9wZWVrLXJlYWRhYmxlL2xpYi9EZWZlcnJlZC5qcz9hYmFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRGVmZXJyZWQgPSB2b2lkIDA7XHJcbmNsYXNzIERlZmVycmVkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSA9ICgpID0+IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWplY3QgPSAoKSA9PiBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EZWZlcnJlZCA9IERlZmVycmVkO1xyXG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJEZWZlcnJlZCIsImNvbnN0cnVjdG9yIiwicmVzb2x2ZSIsInJlamVjdCIsInByb21pc2UiLCJQcm9taXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/peek-readable/lib/Deferred.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/peek-readable/lib/EndOfFileStream.js":
/*!***********************************************************!*\
  !*** ./node_modules/peek-readable/lib/EndOfFileStream.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.EndOfStreamError = exports.defaultMessages = void 0;\nexports.defaultMessages = \"End-Of-Stream\";\n/**\r\n * Thrown on read operation of the end of file or stream has been reached\r\n */ class EndOfStreamError extends Error {\n    constructor(){\n        super(exports.defaultMessages);\n    }\n}\nexports.EndOfStreamError = EndOfStreamError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvRW5kT2ZGaWxlU3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCx3QkFBd0IsR0FBR0EsdUJBQXVCLEdBQUcsS0FBSztBQUMxREEsdUJBQXVCLEdBQUc7QUFDMUI7O0NBRUMsR0FDRCxNQUFNRSx5QkFBeUJFO0lBQzNCQyxhQUFjO1FBQ1YsS0FBSyxDQUFDTCxRQUFRRyxlQUFlO0lBQ2pDO0FBQ0o7QUFDQUgsd0JBQXdCLEdBQUdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXItY29kZS8uL25vZGVfbW9kdWxlcy9wZWVrLXJlYWRhYmxlL2xpYi9FbmRPZkZpbGVTdHJlYW0uanM/Zjc3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkVuZE9mU3RyZWFtRXJyb3IgPSBleHBvcnRzLmRlZmF1bHRNZXNzYWdlcyA9IHZvaWQgMDtcclxuZXhwb3J0cy5kZWZhdWx0TWVzc2FnZXMgPSAnRW5kLU9mLVN0cmVhbSc7XHJcbi8qKlxyXG4gKiBUaHJvd24gb24gcmVhZCBvcGVyYXRpb24gb2YgdGhlIGVuZCBvZiBmaWxlIG9yIHN0cmVhbSBoYXMgYmVlbiByZWFjaGVkXHJcbiAqL1xyXG5jbGFzcyBFbmRPZlN0cmVhbUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoZXhwb3J0cy5kZWZhdWx0TWVzc2FnZXMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRW5kT2ZTdHJlYW1FcnJvciA9IEVuZE9mU3RyZWFtRXJyb3I7XHJcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkVuZE9mU3RyZWFtRXJyb3IiLCJkZWZhdWx0TWVzc2FnZXMiLCJFcnJvciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/peek-readable/lib/EndOfFileStream.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/peek-readable/lib/StreamReader.js":
/*!********************************************************!*\
  !*** ./node_modules/peek-readable/lib/StreamReader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.StreamReader = exports.EndOfStreamError = void 0;\nconst EndOfFileStream_1 = __webpack_require__(/*! ./EndOfFileStream */ \"(ssr)/./node_modules/peek-readable/lib/EndOfFileStream.js\");\nconst Deferred_1 = __webpack_require__(/*! ./Deferred */ \"(ssr)/./node_modules/peek-readable/lib/Deferred.js\");\nvar EndOfFileStream_2 = __webpack_require__(/*! ./EndOfFileStream */ \"(ssr)/./node_modules/peek-readable/lib/EndOfFileStream.js\");\nObject.defineProperty(exports, \"EndOfStreamError\", ({\n    enumerable: true,\n    get: function() {\n        return EndOfFileStream_2.EndOfStreamError;\n    }\n}));\nconst maxStreamReadSize = 1 * 1024 * 1024; // Maximum request length on read-stream operation\nclass StreamReader {\n    constructor(s){\n        this.s = s;\n        /**\r\n         * Deferred used for postponed read request (as not data is yet available to read)\r\n         */ this.deferred = null;\n        this.endOfStream = false;\n        /**\r\n         * Store peeked data\r\n         * @type {Array}\r\n         */ this.peekQueue = [];\n        if (!s.read || !s.once) {\n            throw new Error(\"Expected an instance of stream.Readable\");\n        }\n        this.s.once(\"end\", ()=>this.reject(new EndOfFileStream_1.EndOfStreamError()));\n        this.s.once(\"error\", (err)=>this.reject(err));\n        this.s.once(\"close\", ()=>this.reject(new Error(\"Stream closed\")));\n    }\n    /**\r\n     * Read ahead (peek) from stream. Subsequent read or peeks will return the same data\r\n     * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in\r\n     * @param offset - Offset target\r\n     * @param length - Number of bytes to read\r\n     * @returns Number of bytes peeked\r\n     */ async peek(uint8Array, offset, length) {\n        const bytesRead = await this.read(uint8Array, offset, length);\n        this.peekQueue.push(uint8Array.subarray(offset, offset + bytesRead)); // Put read data back to peek buffer\n        return bytesRead;\n    }\n    /**\r\n     * Read chunk from stream\r\n     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in\r\n     * @param offset - Offset target\r\n     * @param length - Number of bytes to read\r\n     * @returns Number of bytes read\r\n     */ async read(buffer, offset, length) {\n        if (length === 0) {\n            return 0;\n        }\n        if (this.peekQueue.length === 0 && this.endOfStream) {\n            throw new EndOfFileStream_1.EndOfStreamError();\n        }\n        let remaining = length;\n        let bytesRead = 0;\n        // consume peeked data first\n        while(this.peekQueue.length > 0 && remaining > 0){\n            const peekData = this.peekQueue.pop(); // Front of queue\n            if (!peekData) throw new Error(\"peekData should be defined\");\n            const lenCopy = Math.min(peekData.length, remaining);\n            buffer.set(peekData.subarray(0, lenCopy), offset + bytesRead);\n            bytesRead += lenCopy;\n            remaining -= lenCopy;\n            if (lenCopy < peekData.length) {\n                // remainder back to queue\n                this.peekQueue.push(peekData.subarray(lenCopy));\n            }\n        }\n        // continue reading from stream if required\n        while(remaining > 0 && !this.endOfStream){\n            const reqLen = Math.min(remaining, maxStreamReadSize);\n            const chunkLen = await this.readFromStream(buffer, offset + bytesRead, reqLen);\n            bytesRead += chunkLen;\n            if (chunkLen < reqLen) break;\n            remaining -= chunkLen;\n        }\n        return bytesRead;\n    }\n    /**\r\n     * Read chunk from stream\r\n     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in\r\n     * @param offset Offset target\r\n     * @param length Number of bytes to read\r\n     * @returns Number of bytes read\r\n     */ async readFromStream(buffer, offset, length) {\n        const readBuffer = this.s.read(length);\n        if (readBuffer) {\n            buffer.set(readBuffer, offset);\n            return readBuffer.length;\n        } else {\n            const request = {\n                buffer,\n                offset,\n                length,\n                deferred: new Deferred_1.Deferred()\n            };\n            this.deferred = request.deferred;\n            this.s.once(\"readable\", ()=>{\n                this.readDeferred(request);\n            });\n            return request.deferred.promise;\n        }\n    }\n    /**\r\n     * Process deferred read request\r\n     * @param request Deferred read request\r\n     */ readDeferred(request) {\n        const readBuffer = this.s.read(request.length);\n        if (readBuffer) {\n            request.buffer.set(readBuffer, request.offset);\n            request.deferred.resolve(readBuffer.length);\n            this.deferred = null;\n        } else {\n            this.s.once(\"readable\", ()=>{\n                this.readDeferred(request);\n            });\n        }\n    }\n    reject(err) {\n        this.endOfStream = true;\n        if (this.deferred) {\n            this.deferred.reject(err);\n            this.deferred = null;\n        }\n    }\n}\nexports.StreamReader = StreamReader;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvU3RyZWFtUmVhZGVyLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCxvQkFBb0IsR0FBR0Esd0JBQXdCLEdBQUcsS0FBSztBQUN2RCxNQUFNSSxvQkFBb0JDLG1CQUFPQSxDQUFDLG9GQUFtQjtBQUNyRCxNQUFNQyxhQUFhRCxtQkFBT0EsQ0FBQyxzRUFBWTtBQUN2QyxJQUFJRSxvQkFBb0JGLG1CQUFPQSxDQUFDLG9GQUFtQjtBQUNuRFAsb0RBQW1EO0lBQUVVLFlBQVk7SUFBTUMsS0FBSztRQUFjLE9BQU9GLGtCQUFrQkosZ0JBQWdCO0lBQUU7QUFBRSxDQUFDLEVBQUM7QUFDekksTUFBTU8sb0JBQW9CLElBQUksT0FBTyxNQUFNLGtEQUFrRDtBQUM3RixNQUFNUjtJQUNGUyxZQUFZQyxDQUFDLENBQUU7UUFDWCxJQUFJLENBQUNBLENBQUMsR0FBR0E7UUFDVDs7U0FFQyxHQUNELElBQUksQ0FBQ0MsUUFBUSxHQUFHO1FBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHO1FBQ25COzs7U0FHQyxHQUNELElBQUksQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDSCxFQUFFSSxJQUFJLElBQUksQ0FBQ0osRUFBRUssSUFBSSxFQUFFO1lBQ3BCLE1BQU0sSUFBSUMsTUFBTTtRQUNwQjtRQUNBLElBQUksQ0FBQ04sQ0FBQyxDQUFDSyxJQUFJLENBQUMsT0FBTyxJQUFNLElBQUksQ0FBQ0UsTUFBTSxDQUFDLElBQUlmLGtCQUFrQkQsZ0JBQWdCO1FBQzNFLElBQUksQ0FBQ1MsQ0FBQyxDQUFDSyxJQUFJLENBQUMsU0FBU0csQ0FBQUEsTUFBTyxJQUFJLENBQUNELE1BQU0sQ0FBQ0M7UUFDeEMsSUFBSSxDQUFDUixDQUFDLENBQUNLLElBQUksQ0FBQyxTQUFTLElBQU0sSUFBSSxDQUFDRSxNQUFNLENBQUMsSUFBSUQs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RztRQUNwQixPQUNLO1lBQ0QsSUFBSSxDQUFDRCxDQUFDLENBQUNLLElBQUksQ0FBQyxZQUFZO2dCQUNwQixJQUFJLENBQUN5QixZQUFZLENBQUNGO1lBQ3RCO1FBQ0o7SUFDSjtJQUNBckIsT0FBT0MsR0FBRyxFQUFFO1FBQ1IsSUFBSSxDQUFDTixXQUFXLEdBQUc7UUFDbkIsSUFBSSxJQUFJLENBQUNELFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQ0EsUUFBUSxDQUFDTSxNQUFNLENBQUNDO1lBQ3JCLElBQUksQ0FBQ1AsUUFBUSxHQUFHO1FBQ3BCO0lBQ0o7QUFDSjtBQUNBYixvQkFBb0IsR0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xci1jb2RlLy4vbm9kZV9tb2R1bGVzL3BlZWstcmVhZGFibGUvbGliL1N0cmVhbVJlYWRlci5qcz8wMWI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU3RyZWFtUmVhZGVyID0gZXhwb3J0cy5FbmRPZlN0cmVhbUVycm9yID0gdm9pZCAwO1xyXG5jb25zdCBFbmRPZkZpbGVTdHJlYW1fMSA9IHJlcXVpcmUoXCIuL0VuZE9mRmlsZVN0cmVhbVwiKTtcclxuY29uc3QgRGVmZXJyZWRfMSA9IHJlcXVpcmUoXCIuL0RlZmVycmVkXCIpO1xyXG52YXIgRW5kT2ZGaWxlU3RyZWFtXzIgPSByZXF1aXJlKFwiLi9FbmRPZkZpbGVTdHJlYW1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVuZE9mU3RyZWFtRXJyb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVuZE9mRmlsZVN0cmVhbV8yLkVuZE9mU3RyZWFtRXJyb3I7IH0gfSk7XHJcbmNvbnN0IG1heFN0cmVhbVJlYWRTaXplID0gMSAqIDEwMjQgKiAxMDI0OyAvLyBNYXhpbXVtIHJlcXVlc3QgbGVuZ3RoIG9uIHJlYWQtc3RyZWFtIG9wZXJhdGlvblxyXG5jbGFzcyBTdHJlYW1SZWFkZXIge1xyXG4gICAgY29uc3RydWN0b3Iocykge1xyXG4gICAgICAgIHRoaXMucyA9IHM7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmZXJyZWQgdXNlZCBmb3IgcG9zdHBvbmVkIHJlYWQgcmVxdWVzdCAoYXMgbm90IGRhdGEgaXMgeWV0IGF2YWlsYWJsZSB0byByZWFkKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGVmZXJyZWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW5kT2ZTdHJlYW0gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9yZSBwZWVrZWQgZGF0YVxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnBlZWtRdWV1ZSA9IFtdO1xyXG4gICAgICAgIGlmICghcy5yZWFkIHx8ICFzLm9uY2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBzdHJlYW0uUmVhZGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zLm9uY2UoJ2VuZCcsICgpID0+IHRoaXMucmVqZWN0KG5ldyBFbmRPZkZpbGVTdHJlYW1fMS5FbmRPZlN0cmVhbUVycm9yKCkpKTtcclxuICAgICAgICB0aGlzLnMub25jZSgnZXJyb3InLCBlcnIgPT4gdGhpcy5yZWplY3QoZXJyKSk7XHJcbiAgICAgICAgdGhpcy5zLm9uY2UoJ2Nsb3NlJywgKCkgPT4gdGhpcy5yZWplY3QobmV3IEVycm9yKCdTdHJlYW0gY2xvc2VkJykpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhaGVhZCAocGVlaykgZnJvbSBzdHJlYW0uIFN1YnNlcXVlbnQgcmVhZCBvciBwZWVrcyB3aWxsIHJldHVybiB0aGUgc2FtZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdWludDhBcnJheSAtIFVpbnQ4QXJyYXkgKG9yIEJ1ZmZlcikgdG8gc3RvcmUgZGF0YSByZWFkIGZyb20gc3RyZWFtIGluXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IC0gT2Zmc2V0IHRhcmdldFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCAtIE51bWJlciBvZiBieXRlcyB0byByZWFkXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgYnl0ZXMgcGVla2VkXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHBlZWsodWludDhBcnJheSwgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBieXRlc1JlYWQgPSBhd2FpdCB0aGlzLnJlYWQodWludDhBcnJheSwgb2Zmc2V0LCBsZW5ndGgpO1xyXG4gICAgICAgIHRoaXMucGVla1F1ZXVlLnB1c2godWludDhBcnJheS5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIGJ5dGVzUmVhZCkpOyAvLyBQdXQgcmVhZCBkYXRhIGJhY2sgdG8gcGVlayBidWZmZXJcclxuICAgICAgICByZXR1cm4gYnl0ZXNSZWFkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIGNodW5rIGZyb20gc3RyZWFtXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIC0gVGFyZ2V0IFVpbnQ4QXJyYXkgKG9yIEJ1ZmZlcikgdG8gc3RvcmUgZGF0YSByZWFkIGZyb20gc3RyZWFtIGluXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IC0gT2Zmc2V0IHRhcmdldFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCAtIE51bWJlciBvZiBieXRlcyB0byByZWFkXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgYnl0ZXMgcmVhZFxyXG4gICAgICovXHJcbiAgICBhc3luYyByZWFkKGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZWVrUXVldWUubGVuZ3RoID09PSAwICYmIHRoaXMuZW5kT2ZTdHJlYW0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVuZE9mRmlsZVN0cmVhbV8xLkVuZE9mU3RyZWFtRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZyA9IGxlbmd0aDtcclxuICAgICAgICBsZXQgYnl0ZXNSZWFkID0gMDtcclxuICAgICAgICAvLyBjb25zdW1lIHBlZWtlZCBkYXRhIGZpcnN0XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVla1F1ZXVlLmxlbmd0aCA+IDAgJiYgcmVtYWluaW5nID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwZWVrRGF0YSA9IHRoaXMucGVla1F1ZXVlLnBvcCgpOyAvLyBGcm9udCBvZiBxdWV1ZVxyXG4gICAgICAgICAgICBpZiAoIXBlZWtEYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwZWVrRGF0YSBzaG91bGQgYmUgZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBsZW5Db3B5ID0gTWF0aC5taW4ocGVla0RhdGEubGVuZ3RoLCByZW1haW5pbmcpO1xyXG4gICAgICAgICAgICBidWZmZXIuc2V0KHBlZWtEYXRhLnN1YmFycmF5KDAsIGxlbkNvcHkpLCBvZmZzZXQgKyBieXRlc1JlYWQpO1xyXG4gICAgICAgICAgICBieXRlc1JlYWQgKz0gbGVuQ29weTtcclxuICAgICAgICAgICAgcmVtYWluaW5nIC09IGxlbkNvcHk7XHJcbiAgICAgICAgICAgIGlmIChsZW5Db3B5IDwgcGVla0RhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1haW5kZXIgYmFjayB0byBxdWV1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZWVrUXVldWUucHVzaChwZWVrRGF0YS5zdWJhcnJheShsZW5Db3B5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29udGludWUgcmVhZGluZyBmcm9tIHN0cmVhbSBpZiByZXF1aXJlZFxyXG4gICAgICAgIHdoaWxlIChyZW1haW5pbmcgPiAwICYmICF0aGlzLmVuZE9mU3RyZWFtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcUxlbiA9IE1hdGgubWluKHJlbWFpbmluZywgbWF4U3RyZWFtUmVhZFNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBjaHVua0xlbiA9IGF3YWl0IHRoaXMucmVhZEZyb21TdHJlYW0oYnVmZmVyLCBvZmZzZXQgKyBieXRlc1JlYWQsIHJlcUxlbik7XHJcbiAgICAgICAgICAgIGJ5dGVzUmVhZCArPSBjaHVua0xlbjtcclxuICAgICAgICAgICAgaWYgKGNodW5rTGVuIDwgcmVxTGVuKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIHJlbWFpbmluZyAtPSBjaHVua0xlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ5dGVzUmVhZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBjaHVuayBmcm9tIHN0cmVhbVxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUYXJnZXQgVWludDhBcnJheSAob3IgQnVmZmVyKSB0byBzdG9yZSBkYXRhIHJlYWQgZnJvbSBzdHJlYW0gaW5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IHRhcmdldFxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBOdW1iZXIgb2YgYnl0ZXMgdG8gcmVhZFxyXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIGJ5dGVzIHJlYWRcclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVhZEZyb21TdHJlYW0oYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRCdWZmZXIgPSB0aGlzLnMucmVhZChsZW5ndGgpO1xyXG4gICAgICAgIGlmIChyZWFkQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5zZXQocmVhZEJ1ZmZlciwgb2Zmc2V0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRCdWZmZXIubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcixcclxuICAgICAgICAgICAgICAgIG9mZnNldCxcclxuICAgICAgICAgICAgICAgIGxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkOiBuZXcgRGVmZXJyZWRfMS5EZWZlcnJlZCgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZGVmZXJyZWQgPSByZXF1ZXN0LmRlZmVycmVkO1xyXG4gICAgICAgICAgICB0aGlzLnMub25jZSgncmVhZGFibGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWREZWZlcnJlZChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LmRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzIGRlZmVycmVkIHJlYWQgcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgRGVmZXJyZWQgcmVhZCByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHJlYWREZWZlcnJlZChyZXF1ZXN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVhZEJ1ZmZlciA9IHRoaXMucy5yZWFkKHJlcXVlc3QubGVuZ3RoKTtcclxuICAgICAgICBpZiAocmVhZEJ1ZmZlcikge1xyXG4gICAgICAgICAgICByZXF1ZXN0LmJ1ZmZlci5zZXQocmVhZEJ1ZmZlciwgcmVxdWVzdC5vZmZzZXQpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LmRlZmVycmVkLnJlc29sdmUocmVhZEJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucy5vbmNlKCdyZWFkYWJsZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZERlZmVycmVkKHJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWplY3QoZXJyKSB7XHJcbiAgICAgICAgdGhpcy5lbmRPZlN0cmVhbSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmZXJyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyZWFtUmVhZGVyID0gU3RyZWFtUmVhZGVyO1xyXG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJTdHJlYW1SZWFkZXIiLCJFbmRPZlN0cmVhbUVycm9yIiwiRW5kT2ZGaWxlU3RyZWFtXzEiLCJyZXF1aXJlIiwiRGVmZXJyZWRfMSIsIkVuZE9mRmlsZVN0cmVhbV8yIiwiZW51bWVyYWJsZSIsImdldCIsIm1heFN0cmVhbVJlYWRTaXplIiwiY29uc3RydWN0b3IiLCJzIiwiZGVmZXJyZWQiLCJlbmRPZlN0cmVhbSIsInBlZWtRdWV1ZSIsInJlYWQiLCJvbmNlIiwiRXJyb3IiLCJyZWplY3QiLCJlcnIiLCJwZWVrIiwidWludDhBcnJheSIsIm9mZnNldCIsImxlbmd0aCIsImJ5dGVzUmVhZCIsInB1c2giLCJzdWJhcnJheSIsImJ1ZmZlciIsInJlbWFpbmluZyIsInBlZWtEYXRhIiwicG9wIiwibGVuQ29weSIsIk1hdGgiLCJtaW4iLCJzZXQiLCJyZXFMZW4iLCJjaHVua0xlbiIsInJlYWRGcm9tU3RyZWFtIiwicmVhZEJ1ZmZlciIsInJlcXVlc3QiLCJEZWZlcnJlZCIsInJlYWREZWZlcnJlZCIsInByb21pc2UiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/peek-readable/lib/StreamReader.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/peek-readable/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/peek-readable/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.StreamReader = exports.EndOfStreamError = void 0;\nvar EndOfFileStream_1 = __webpack_require__(/*! ./EndOfFileStream */ \"(ssr)/./node_modules/peek-readable/lib/EndOfFileStream.js\");\nObject.defineProperty(exports, \"EndOfStreamError\", ({\n    enumerable: true,\n    get: function() {\n        return EndOfFileStream_1.EndOfStreamError;\n    }\n}));\nvar StreamReader_1 = __webpack_require__(/*! ./StreamReader */ \"(ssr)/./node_modules/peek-readable/lib/StreamReader.js\");\nObject.defineProperty(exports, \"StreamReader\", ({\n    enumerable: true,\n    get: function() {\n        return StreamReader_1.StreamReader;\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELG9CQUFvQixHQUFHQSx3QkFBd0IsR0FBRyxLQUFLO0FBQ3ZELElBQUlJLG9CQUFvQkMsbUJBQU9BLENBQUMsb0ZBQW1CO0FBQ25EUCxvREFBbUQ7SUFBRVEsWUFBWTtJQUFNQyxLQUFLO1FBQWMsT0FBT0gsa0JBQWtCRCxnQkFBZ0I7SUFBRTtBQUFFLENBQUMsRUFBQztBQUN6SSxJQUFJSyxpQkFBaUJILG1CQUFPQSxDQUFDLDhFQUFnQjtBQUM3Q1AsZ0RBQStDO0lBQUVRLFlBQVk7SUFBTUMsS0FBSztRQUFjLE9BQU9DLGVBQWVOLFlBQVk7SUFBRTtBQUFFLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3FyLWNvZGUvLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvaW5kZXguanM/ODVkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlN0cmVhbVJlYWRlciA9IGV4cG9ydHMuRW5kT2ZTdHJlYW1FcnJvciA9IHZvaWQgMDtcclxudmFyIEVuZE9mRmlsZVN0cmVhbV8xID0gcmVxdWlyZShcIi4vRW5kT2ZGaWxlU3RyZWFtXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFbmRPZlN0cmVhbUVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBFbmRPZkZpbGVTdHJlYW1fMS5FbmRPZlN0cmVhbUVycm9yOyB9IH0pO1xyXG52YXIgU3RyZWFtUmVhZGVyXzEgPSByZXF1aXJlKFwiLi9TdHJlYW1SZWFkZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN0cmVhbVJlYWRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3RyZWFtUmVhZGVyXzEuU3RyZWFtUmVhZGVyOyB9IH0pO1xyXG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJTdHJlYW1SZWFkZXIiLCJFbmRPZlN0cmVhbUVycm9yIiwiRW5kT2ZGaWxlU3RyZWFtXzEiLCJyZXF1aXJlIiwiZW51bWVyYWJsZSIsImdldCIsIlN0cmVhbVJlYWRlcl8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/peek-readable/lib/index.js\n");

/***/ })

};
;