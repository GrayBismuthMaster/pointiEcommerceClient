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
                  "Access-Control-Allow-Origin": "*",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUzNVcGxvYWQuanMiXSwibmFtZXMiOlsidXNlUzNVcGxvYWQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJmaWxlIiwiczNTdGF0ZSIsInNldFMzU3RhdGUiLCJ1cGxvYWRUb1MzIiwic2lnbmVkUmVxdWVzdCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwidHlwZSIsImF4aW9zIiwicHV0IiwicmVzIiwiZm9ybWF0RmlsZW5hbWUiLCJmaWxlbmFtZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjbGVhbkZpbGVOYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibmV3RmlsZW5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUM7QUFDbkNDLFFBQUksRUFBRyxFQUQ0QjtBQUVuQ0MsUUFBSSxFQUFHO0FBRjRCLEdBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBSzdCLE1BQU1DLFVBQVU7QUFBQSxrVkFBRyxpQkFBT0gsSUFBUCxFQUFhSSxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxxQkFEUyxHQUNDO0FBQ1pDLHVCQUFPLEVBQUU7QUFDVCxrQ0FBZ0JOLElBQUksQ0FBQ08sSUFEWjtBQUVULGtEQUFpQyxjQUZ4QjtBQUdULGlEQUErQixHQUh0QjtBQUlULGtEQUFnQztBQUp2QjtBQURHLGVBREQ7QUFBQTtBQUFBLHFCQVNHQyw2Q0FBSyxDQUFDQyxHQUFOLENBQVVMLGFBQVYsRUFBeUJKLElBQXpCLEVBQStCSyxPQUEvQixDQVRIOztBQUFBO0FBU1RLLGlCQVRTO0FBQUEsK0NBVVJBLEdBVlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVlAsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFhQSxNQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLFFBQVEsRUFBSTtBQUMvQixRQUFNQyxJQUFJLEdBQUdDLDZDQUFNLEdBQUdDLE1BQVQsQ0FBZ0IsVUFBaEIsQ0FBYjtBQUNBLFFBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEdBQ2xCQyxRQURrQixDQUNULEVBRFMsRUFFbEJDLFNBRmtCLENBRVIsQ0FGUSxFQUVMLENBRkssQ0FBckI7QUFHQSxRQUFNQyxhQUFhLEdBQUdULFFBQVEsQ0FBQ1UsV0FBVCxHQUF1QkMsT0FBdkIsQ0FBK0IsWUFBL0IsRUFBNkMsR0FBN0MsQ0FBdEI7QUFDQSxRQUFNQyxXQUFXLG9CQUFhWCxJQUFiLGNBQXFCRyxZQUFyQixjQUFxQ0ssYUFBckMsQ0FBakI7QUFDQSxXQUFPRyxXQUFXLENBQUNKLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUIsRUFBekIsQ0FBUDtBQUNELEdBUkg7O0FBVUYsU0FBTztBQUNMbkIsV0FBTyxFQUFQQSxPQURLO0FBRUxDLGNBQVUsRUFBVkEsVUFGSztBQUdMUyxrQkFBYyxFQUFkQSxjQUhLO0FBSUxSLGNBQVUsRUFBVkE7QUFKSyxHQUFQO0FBTUQsQ0FsQ007O0dBQU1OLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbnVldm9wcm9kdWN0by5iNzQ5OGVkY2VlZTc2MmU5OWI2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVMzVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3MzU3RhdGUsIHNldFMzU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWUgOiBcIlwiLFxyXG4gICAgICAgIGZpbGUgOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVwbG9hZFRvUzMgPSBhc3luYyAoZmlsZSwgc2lnbmVkUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogZmlsZS50eXBlLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiA6IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIjogXCJPUFRJT05TLFBPU1QsR0VUXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KHNpZ25lZFJlcXVlc3QsIGZpbGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtYXRGaWxlbmFtZSA9IGZpbGVuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWU1NRERcIik7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tU3RyaW5nID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgICAgICAgLnN1YnN0cmluZygyLCA3KTtcclxuICAgICAgICBjb25zdCBjbGVhbkZpbGVOYW1lID0gZmlsZW5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgXCItXCIpO1xyXG4gICAgICAgIGNvbnN0IG5ld0ZpbGVuYW1lID0gYGltYWdlcy8ke2RhdGV9LSR7cmFuZG9tU3RyaW5nfS0ke2NsZWFuRmlsZU5hbWV9YDtcclxuICAgICAgICByZXR1cm4gbmV3RmlsZW5hbWUuc3Vic3RyaW5nKDAsIDYwKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gIHJldHVybiB7XHJcbiAgICBzM1N0YXRlLFxyXG4gICAgc2V0UzNTdGF0ZSxcclxuICAgIGZvcm1hdEZpbGVuYW1lLFxyXG4gICAgdXBsb2FkVG9TM1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9