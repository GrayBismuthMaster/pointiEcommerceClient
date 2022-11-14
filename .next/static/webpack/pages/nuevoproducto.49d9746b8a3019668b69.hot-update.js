webpackHotUpdate_N_E("pages/nuevoproducto",{

/***/ "./hooks/useS3Upload.js":
/*!******************************!*\
  !*** ./hooks/useS3Upload.js ***!
  \******************************/
/*! exports provided: useS3Upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useS3Upload", function() { return useS3Upload; });
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);



var _s = $RefreshSig$();




var useS3Upload = function useS3Upload() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    file: ""
  }),
      s3State = _useState[0],
      setS3State = _useState[1];

  var uploadToS3 = /*#__PURE__*/function () {
    var _ref = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file, signedRequest) {
      var options, res;
      return D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                headers: {
                  "Content-Type": file.type,
                  "Access-Control-Allow-Headers": "Content-Type",
                  "Access-Control-Allow-Origin": "https://www.example.com",
                  "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3__["default"].put(signedRequest, file, options);

            case 3:
              res = _context.sent;
              return _context.abrupt("return", res);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadToS3(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var formatFilename = function formatFilename(filename) {
    var date = moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYYMMDD");
    var randomString = Math.random().toString(36).substring(2, 7);
    var cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
    var newFilename = "images/".concat(date, "-").concat(randomString, "-").concat(cleanFileName);
    return newFilename.substring(0, 60);
  };

  return {
    s3State: s3State,
    setS3State: setS3State,
    formatFilename: formatFilename,
    uploadToS3: uploadToS3
  };
};

_s(useS3Upload, "dtIqyDL00nqLXwMghUpeK2k8B2M=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUzNVcGxvYWQuanMiXSwibmFtZXMiOlsidXNlUzNVcGxvYWQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJmaWxlIiwiczNTdGF0ZSIsInNldFMzU3RhdGUiLCJ1cGxvYWRUb1MzIiwic2lnbmVkUmVxdWVzdCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwidHlwZSIsImF4aW9zIiwicHV0IiwicmVzIiwiZm9ybWF0RmlsZW5hbWUiLCJmaWxlbmFtZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjbGVhbkZpbGVOYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibmV3RmlsZW5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUM7QUFDbkNDLFFBQUksRUFBRyxFQUQ0QjtBQUVuQ0MsUUFBSSxFQUFHO0FBRjRCLEdBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBSzdCLE1BQU1DLFVBQVU7QUFBQSxrVkFBRyxpQkFBT0gsSUFBUCxFQUFhSSxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxxQkFEUyxHQUNDO0FBQ1pDLHVCQUFPLEVBQUU7QUFDVCxrQ0FBZ0JOLElBQUksQ0FBQ08sSUFEWjtBQUVULGtEQUFpQyxjQUZ4QjtBQUdULGlEQUErQix5QkFIdEI7QUFJVCxrREFBZ0M7QUFKdkI7QUFERyxlQUREO0FBQUE7QUFBQSxxQkFTR0MsNkNBQUssQ0FBQ0MsR0FBTixDQUFVTCxhQUFWLEVBQXlCSixJQUF6QixFQUErQkssT0FBL0IsQ0FUSDs7QUFBQTtBQVNUSyxpQkFUUztBQUFBLCtDQVVSQSxHQVZROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZQLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBYUEsTUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxRQUFRLEVBQUk7QUFDL0IsUUFBTUMsSUFBSSxHQUFHQyw2Q0FBTSxHQUFHQyxNQUFULENBQWdCLFVBQWhCLENBQWI7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxHQUNsQkMsUUFEa0IsQ0FDVCxFQURTLEVBRWxCQyxTQUZrQixDQUVSLENBRlEsRUFFTCxDQUZLLENBQXJCO0FBR0EsUUFBTUMsYUFBYSxHQUFHVCxRQUFRLENBQUNVLFdBQVQsR0FBdUJDLE9BQXZCLENBQStCLFlBQS9CLEVBQTZDLEdBQTdDLENBQXRCO0FBQ0EsUUFBTUMsV0FBVyxvQkFBYVgsSUFBYixjQUFxQkcsWUFBckIsY0FBcUNLLGFBQXJDLENBQWpCO0FBQ0EsV0FBT0csV0FBVyxDQUFDSixTQUFaLENBQXNCLENBQXRCLEVBQXlCLEVBQXpCLENBQVA7QUFDRCxHQVJIOztBQVVGLFNBQU87QUFDTG5CLFdBQU8sRUFBUEEsT0FESztBQUVMQyxjQUFVLEVBQVZBLFVBRks7QUFHTFMsa0JBQWMsRUFBZEEsY0FISztBQUlMUixjQUFVLEVBQVZBO0FBSkssR0FBUDtBQU1ELENBbENNOztHQUFNTixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL251ZXZvcHJvZHVjdG8uNDlkOTc0NmI4YTMwMTk2NjhiNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTM1VwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzM1N0YXRlLCBzZXRTM1N0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lIDogXCJcIixcclxuICAgICAgICBmaWxlIDogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1cGxvYWRUb1MzID0gYXN5bmMgKGZpbGUsIHNpZ25lZFJlcXVlc3QpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IGZpbGUudHlwZSxcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIgOiBcIkNvbnRlbnQtVHlwZVwiLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcImh0dHBzOi8vd3d3LmV4YW1wbGUuY29tXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIk9QVElPTlMsUE9TVCxHRVRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoc2lnbmVkUmVxdWVzdCwgZmlsZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1hdEZpbGVuYW1lID0gZmlsZW5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZTU1ERFwiKTtcclxuICAgICAgICBjb25zdCByYW5kb21TdHJpbmcgPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAudG9TdHJpbmcoMzYpXHJcbiAgICAgICAgICAuc3Vic3RyaW5nKDIsIDcpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuRmlsZU5hbWUgPSBmaWxlbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XS9nLCBcIi1cIik7XHJcbiAgICAgICAgY29uc3QgbmV3RmlsZW5hbWUgPSBgaW1hZ2VzLyR7ZGF0ZX0tJHtyYW5kb21TdHJpbmd9LSR7Y2xlYW5GaWxlTmFtZX1gO1xyXG4gICAgICAgIHJldHVybiBuZXdGaWxlbmFtZS5zdWJzdHJpbmcoMCwgNjApO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHMzU3RhdGUsXHJcbiAgICBzZXRTM1N0YXRlLFxyXG4gICAgZm9ybWF0RmlsZW5hbWUsXHJcbiAgICB1cGxvYWRUb1MzXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=