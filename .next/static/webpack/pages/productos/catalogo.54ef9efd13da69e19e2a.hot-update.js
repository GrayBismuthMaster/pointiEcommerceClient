webpackHotUpdate_N_E("pages/productos/catalogo",{

/***/ "./pages/productos/catalogo.js":
/*!*************************************!*\
  !*** ./pages/productos/catalogo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_Producto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Producto */ "./components/Producto.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "D:\\Programming\\Trabajo\\Javascript\\MGRN\\EcommercePointi\\client\\pages\\productos\\catalogo.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query obtenerProductos{\n        obtenerProductos{\n            id\n            nombre\n            precio\n            existencia,\n            imagen\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var OBTENER_PRODUCTOS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var productos_catalogo = function productos_catalogo() {
  _s();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(OBTENER_PRODUCTOS),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) return "cargando";
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Productos Catalogo"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/nuevoproducto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "bg-blue-800 py-2 px-5 mt-5 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "Nuevo Producto")), __jsx("div", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "text-2xl font-bold tracking-tight text-gray-900",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Customers also purchased"), __jsx("div", {
    className: "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, data.obtenerProductos.map(function (product) {
    return __jsx("div", {
      key: product.id,
      className: "group relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: product.imagen,
      alt: "Gorra",
      className: "h-full w-full object-cover object-center lg:h-full lg:w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: "mt-4 flex justify-between",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "text-sm text-gray-700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: product.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 33
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "absolute inset-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 33
      }
    }), product.name)), __jsx("p", {
      className: "mt-1 text-sm text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, product.color || "rojo")), __jsx("p", {
      className: "text-sm font-medium text-gray-900",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, product.price || "50")));
  }))))));
};

_s(productos_catalogo, "RsAoF0jGW8x/4pnnopXB/YWtfZ8=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

/* harmony default export */ __webpack_exports__["default"] = (productos_catalogo);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zL2NhdGFsb2dvLmpzIl0sIm5hbWVzIjpbIk9CVEVORVJfUFJPRFVDVE9TIiwiZ3FsIiwicHJvZHVjdG9zX2NhdGFsb2dvIiwidXNlUXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9idGVuZXJQcm9kdWN0b3MiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJpbWFnZW4iLCJocmVmIiwibmFtZSIsImNvbG9yIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsMERBQUgsbUJBQXZCOztBQVdBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUNFQywrREFBUSxDQUFDSCxpQkFBRCxDQURWO0FBQUEsTUFDdEJJLElBRHNCLGFBQ3RCQSxJQURzQjtBQUFBLE1BQ2hCQyxPQURnQixhQUNoQkEsT0FEZ0I7QUFBQSxNQUNQQyxLQURPLGFBQ1BBLEtBRE87O0FBRTdCLE1BQUlELE9BQUosRUFBYSxPQUFPLFVBQVA7QUFDYkUsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQSxTQUNJLG1FQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFHLG1DQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBRUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsK0dBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixDQUZKLEVBTUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREosRUFHSTtBQUFLLGFBQVMsRUFBQyxpRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NBLElBQUksQ0FBQ0ssZ0JBQUwsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUNDLE9BQUQ7QUFBQSxXQUN2QjtBQUFLLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxFQUFsQjtBQUFzQixlQUFTLEVBQUMsZ0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFLLGVBQVMsRUFBQyw0SEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDQSxTQUFHLEVBQUVELE9BQU8sQ0FBQ0UsTUFEYjtBQUVBLFNBQUcsRUFBRSxPQUZMO0FBR0EsZUFBUyxFQUFDLDhEQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURBLEVBUUE7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxVQUFJLEVBQUVGLE9BQU8sQ0FBQ0csSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQU0scUJBQVksTUFBbEI7QUFBeUIsZUFBUyxFQUFDLGtCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsRUFFQ0gsT0FBTyxDQUFDSSxJQUZULENBREosQ0FEQSxFQU9BO0FBQUcsZUFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkNKLE9BQU8sQ0FBQ0ssS0FBUixJQUFpQixNQUE1RCxDQVBBLENBREosRUFVSTtBQUFHLGVBQVMsRUFBQyxtQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtETCxPQUFPLENBQUNNLEtBQVIsSUFBaUIsSUFBbkUsQ0FWSixDQVJBLENBRHVCO0FBQUEsR0FBMUIsQ0FERCxDQUhKLENBREEsQ0FOSixDQURKLENBREo7QUFzRUgsQ0ExRUQ7O0dBQU1mLGtCO1VBQzZCQyx1RDs7O0FBMkVwQkQsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdG9zL2NhdGFsb2dvLjU0ZWY5ZWZkMTNkYTY5ZTE5ZTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQge2dxbCwgdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgUHJvZHVjdG8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0byc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBPQlRFTkVSX1BST0RVQ1RPUyA9IGdxbGBcclxuICAgIHF1ZXJ5IG9idGVuZXJQcm9kdWN0b3N7XHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3Rvc3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgIHByZWNpb1xyXG4gICAgICAgICAgICBleGlzdGVuY2lhLFxyXG4gICAgICAgICAgICBpbWFnZW5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgcHJvZHVjdG9zX2NhdGFsb2dvID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yfSA9IHVzZVF1ZXJ5KE9CVEVORVJfUFJPRFVDVE9TKTtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gXCJjYXJnYW5kb1wiO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gXCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktODAwIGZvbnQtbGlnaHRcIj5Qcm9kdWN0b3MgQ2F0YWxvZ288L2gxPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL251ZXZvcHJvZHVjdG8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYmctYmx1ZS04MDAgcHktMiBweC01IG10LTUgaW5saW5lLWJsb2NrIHRleHQtd2hpdGUgcm91bmRlZCB0ZXh0LXNtIGhvdmVyOmJnLWdyYXktODAwIG1iLTMgdXBwZXJjYXNlIGZvbnQtYm9sZCc+TnVldm8gUHJvZHVjdG88L2E+ICBcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPkN1c3RvbWVycyBhbHNvIHB1cmNoYXNlZDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm9idGVuZXJQcm9kdWN0b3MubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLTgwIGFzcGVjdC13LTEgYXNwZWN0LWgtMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYmctZ3JheS0yMDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NSBsZzphc3BlY3Qtbm9uZSBsZzpoLTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcIkdvcnJhXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGxnOmgtZnVsbCBsZzp3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9kdWN0LmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+e3Byb2R1Y3QuY29sb3IgfHwgXCJyb2pvXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57cHJvZHVjdC5wcmljZSB8fCBcIjUwXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlLWF1dG8gc2hhZG93LW1kIG10LTEwIHctZnVsbCB3LWxnJz5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdiZy1ncmF5LTgwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3ctMS81IHB5LTInPk5vbWJyZSBQcm9kdWN0bzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3ctMS81IHB5LTInPkNhbnRpZGFkIFByb2R1Y3RvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndy0xLzUgcHktMic+UHJlY2lvPC90aD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3ctMS81IHB5LTInPkVsaW1pbmFyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndy0xLzUgcHktMic+RWRpdGFyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub2J0ZW5lclByb2R1Y3Rvcy5tYXAocHJvZHVjdG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0byA9IHtwcm9kdWN0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+ICovfVxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0b3NfY2F0YWxvZ28iXSwic291cmNlUm9vdCI6IiJ9