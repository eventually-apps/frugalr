webpackHotUpdate("app",{

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! exports provided: setTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTitle\", function() { return setTitle; });\nfunction setTitle(title) {\n  document.title = title;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3V0aWxzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy50cz8zNmMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/utils.ts\n");

/***/ }),

/***/ "./src/router/router-permission.ts":
/*!*****************************************!*\
  !*** ./src/router/router-permission.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router/router */ \"./src/router/router.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\n\n\n_router_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].beforeEach(function (to, from, next) {\n  // route guards.\n  next();\n  Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"setTitle\"])(to.meta.title);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL3JvdXRlci1wZXJtaXNzaW9uLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9yb3V0ZXItcGVybWlzc2lvbi50cz9jMTE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3V0ZXIgZnJvbSAnQC9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBzZXRUaXRsZSB9IGZyb20gJ0AvbGliL3V0aWxzJztcblxucm91dGVyLmJlZm9yZUVhY2goKHRvOiBSb3V0ZSwgZnJvbTogUm91dGUsIG5leHQ6IGFueSkgPT4ge1xuICAgIC8vIHJvdXRlIGd1YXJkcy5cbiAgICBuZXh0KCk7XG5cbiAgICBzZXRUaXRsZSh0by5tZXRhLnRpdGxlKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router/router-permission.ts\n");

/***/ })

})