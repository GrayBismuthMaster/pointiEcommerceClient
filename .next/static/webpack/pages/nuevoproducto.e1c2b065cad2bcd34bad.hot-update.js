webpackHotUpdate_N_E("pages/nuevoproducto",{

/***/ "./pages/nuevoproducto.js":
/*!********************************!*\
  !*** ./pages/nuevoproducto.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _graphql_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../graphql/hooks */ "./graphql/hooks.js");
/* harmony import */ var _hooks_useS3Upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/useS3Upload */ "./hooks/useS3Upload.js");







var _this = undefined,
    _jsxFileName = "D:\\Programming\\Trabajo\\Javascript\\MGRN\\EcommercePointi\\client\\pages\\nuevoproducto.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation($filename: String!, $filetype: String!) {\n    signS3(filename: $filename, filetype: $filetype) {\n      url\n      signedRequest\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    query obtenerProductos{\n        obtenerProductos{\n            id\n            nombre\n            precio\n            existencia\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    mutation nuevoProducto($input : ProductoInput){\n        nuevoProducto(input : $input){\n            id\n            nombre\n            existencia\n            precio\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var NUEVO_PRODUCTO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["gql"])(_templateObject());
var OBTENER_PRODUCTOS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["gql"])(_templateObject2());
var S3UPLOAD = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["gql"])(_templateObject3());

var NuevoProducto = function NuevoProducto() {
  _s();

  //CUSTOMHOOK PARA MENSAJE DE NUEVO PRODUCTO AGREGADO
  var _useAddMessage = Object(_graphql_hooks__WEBPACK_IMPORTED_MODULE_14__["useAddMessage"])(),
      addMessage = _useAddMessage.addMessage; //CAMBIO DE SOMBRA PARA DRAG AND DROP


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      classStateBG = _useState[0],
      setClassStateBG = _useState[1]; //CUSTOM HOOK PARA S3 UPLOAD


  var _useS3Upload = Object(_hooks_useS3Upload__WEBPACK_IMPORTED_MODULE_15__["useS3Upload"])(),
      s3State = _useS3Upload.s3State,
      setS3State = _useS3Upload.setS3State,
      formatFilename = _useS3Upload.formatFilename,
      uploadToS3 = _useS3Upload.uploadToS3; //mutation


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(S3UPLOAD),
      _useMutation2 = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMutation, 1),
      signS3 = _useMutation2[0]; //ESTADOS DE IMAGENES SUBIDAS


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      uploadedImages = _useState2[0],
      setUploadedImages = _useState2[1]; //Mutation


  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(NUEVO_PRODUCTO, {
    update: function update(cache, _ref) {
      var nuevoProducto = _ref.data.nuevoProducto;

      //OBtener objeto de cache
      var _cache$readQuery = cache.readQuery({
        query: OBTENER_PRODUCTOS
      }),
          obtenerProductos = _cache$readQuery.obtenerProductos;

      console.log("Obtener productos desde update", obtenerProductos); //Reescribir cache

      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: [].concat(Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(obtenerProductos), [nuevoProducto])
        }
      });
    }
  }),
      _useMutation4 = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMutation3, 1),
      nuevoProducto = _useMutation4[0]; //Formulario para nuevos productos


  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"])({
    initialValues: {
      nombre: '',
      existencia: '',
      precio: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_10__["object"]({
      nombre: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().required('El nombre del producto es obligatorio'),
      existencia: yup__WEBPACK_IMPORTED_MODULE_10__["number"]().required('Agrega la cantidad disponible').positive('No se aceptan números negativos').integer('La existencia deben ser enteros'),
      precio: yup__WEBPACK_IMPORTED_MODULE_10__["number"]().required('El precio es obligatorio').positive(' Los números deben ser positivos')
    }),
    onSubmit: function () {
      var _onSubmit = Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(valores) {
        var nombre, existencia, precio, response, _response$data$signS, signedRequest, url, resUpload;

        return D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nombre = valores.nombre, existencia = valores.existencia, precio = valores.precio;

                if (!(window !== undefined)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 4;
                return signS3({
                  variables: {
                    filename: formatFilename(s3State.file.name),
                    filetype: s3State.file.type
                  }
                });

              case 4:
                response = _context.sent;
                _response$data$signS = response.data.signS3, signedRequest = _response$data$signS.signedRequest, url = _response$data$signS.url;
                _context.next = 8;
                return uploadToS3(s3State.file, signedRequest);

              case 8:
                resUpload = _context.sent;
                console.log("RESPUESTA DE S3", resUpload, "URL", url); //END UPLOAD FILE 

                if (!url) {
                  _context.next = 14;
                  break;
                }

                _context.next = 13;
                return addMessage("Se agreg\xF3 el producto ".concat(nombre));

              case 13:
                if (message.id !== undefined) {}

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }); //EVENTOS PARA EL UPLOAD DE LOS ARCHIVOS
  //ESTADO DE LA LISTA DE IMAGENES

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      fileList = _useState3[0],
      setFileList = _useState3[1]; //REFERENCIA


  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null);

  var handleDragEnter = function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation(); // console.log(e);

    wrapperRef.current.classList.add('bg-black-800'); // console.log("Drageado encima");
  };

  var handleDragLeave = function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation(); // console.log(e);
    // wrapperRef.current.classList.remove('bg-black-800')
    // console.log("Deja");
  };

  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation(); // console.log(e);
    // wrapperRef.current.classList.add("bg-black-800")

    setClassStateBG(true); // console.log("Deja");
  };

  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation(); // console.log(e);
    // wrapperRef.current.classList.remove('bg-black-800')

    console.log(e.dataTransfer);
    var newFile = e.dataTransfer.files[0];
    setS3State(_objectSpread(_objectSpread({}, s3State), {}, {
      file: newFile,
      name: newFile.name
    }));
    formik.setFieldValue("file", newFile);

    if (newFile) {
      var updatedList = [].concat(Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(fileList), [newFile]);
      setFileList(updatedList); // onFileChange(updatedList);
    }

    setClassStateBG(false);
    setUploadedImages([].concat(Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(uploadedImages), [{
      name: newFile.name
    }]));
  };

  var onFileDrop = function onFileDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Se dejo aca");
    var newFile = e.target.files[0];
    setS3State(_objectSpread(_objectSpread({}, s3State), {}, {
      file: newFile,
      name: newFile.name
    }));
    formik.setFieldValue("file", newFile);

    if (newFile) {
      var updatedList = [].concat(Object(D_Programming_Trabajo_Javascript_MGRN_EcommercePointi_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(fileList), [newFile]);
      setFileList(updatedList); // onFileChange(updatedList);
    }
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, "Crear nuevo producto"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4",
    onSubmit: formik.handleSubmit,
    onDragEnter: function onDragEnter(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    onDrag: function onDrag(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    onDragEnd: function onDragEnd(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 33
    }
  }, "Nombre"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "nombre",
    type: "text",
    placeholder: "Nombre" //Va revisando el cambio que se haga y lo coloca en el estado
    ,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.nombre,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 33
    }
  })), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 35
    }
  }, " ", formik.errors.nombre)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 33
    }
  }, "Cantidad Disponible"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "existencia",
    type: "number",
    placeholder: "Cantidad Disponible" //Va revisando el cambio que se haga y lo coloca en el estado
    ,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.existencia,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 33
    }
  })), formik.touched.existencia && formik.errors.existencia ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 35
    }
  }, " ", formik.errors.existencia)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, "Precio"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "precio",
    type: "number",
    placeholder: "Precio Producto" //Va revisando el cambio que se haga y lo coloca en el estado
    ,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.precio,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 33
    }
  })), formik.touched.precio && formik.errors.precio ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 35
    }
  }, " ", formik.errors.precio)) : null, __jsx("div", {
    className: "flex justify-center items-center w-full",
    onChange: onFileDrop,
    ref: wrapperRef,
    onDragEnter: function onDragEnter(e) {
      return handleDragEnter(e);
    },
    onDragOver: function onDragOver(e) {
      return handleDragOver(e);
    },
    onDragLeave: function onDragLeave(e) {
      return handleDragLeave(e);
    },
    onDrop: function onDrop(e) {
      return handleDrop(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "dropzone-file",
    className: classStateBG ? "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-gray-800" : "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center items-center pt-5 pb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 33
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    className: "mb-3 w-10 h-10 text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 37
    }
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 191
    }
  })), __jsx("p", {
    className: "mb-2 text-sm text-gray-500 dark:text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "font-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 98
    }
  }, "Click to upload"), " or drag and drop"), __jsx("p", {
    className: "text-xs text-gray-500 dark:text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 37
    }
  }, "SVG, PNG, JPG or GIF (MAX. 800x400px)")), __jsx("input", {
    id: "dropzone-file",
    type: "file",
    className: "hidden",
    onChange: onFileDrop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 33
    }
  }))), __jsx("input", {
    type: "submit",
    className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
    value: "Agregar Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 21
    }
  }, uploadedImages.map(function (image) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, image.name);
  })))));
};

_s(NuevoProducto, "5at62MEKqz2e1CzNQjv7PIJmxyE=", false, function () {
  return [_graphql_hooks__WEBPACK_IMPORTED_MODULE_14__["useAddMessage"], _hooks_useS3Upload__WEBPACK_IMPORTED_MODULE_15__["useS3Upload"], _apollo_client__WEBPACK_IMPORTED_MODULE_11__["useMutation"], _apollo_client__WEBPACK_IMPORTED_MODULE_11__["useMutation"], formik__WEBPACK_IMPORTED_MODULE_9__["useFormik"]];
});

_c = NuevoProducto;
/* harmony default export */ __webpack_exports__["default"] = (NuevoProducto);

var _c;

$RefreshReg$(_c, "NuevoProducto");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm9wcm9kdWN0by5qcyJdLCJuYW1lcyI6WyJOVUVWT19QUk9EVUNUTyIsImdxbCIsIk9CVEVORVJfUFJPRFVDVE9TIiwiUzNVUExPQUQiLCJOdWV2b1Byb2R1Y3RvIiwidXNlQWRkTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImNsYXNzU3RhdGVCRyIsInNldENsYXNzU3RhdGVCRyIsInVzZVMzVXBsb2FkIiwiczNTdGF0ZSIsInNldFMzU3RhdGUiLCJmb3JtYXRGaWxlbmFtZSIsInVwbG9hZFRvUzMiLCJ1c2VNdXRhdGlvbiIsInNpZ25TMyIsInVwbG9hZGVkSW1hZ2VzIiwic2V0VXBsb2FkZWRJbWFnZXMiLCJ1cGRhdGUiLCJjYWNoZSIsIm51ZXZvUHJvZHVjdG8iLCJkYXRhIiwicmVhZFF1ZXJ5IiwicXVlcnkiLCJvYnRlbmVyUHJvZHVjdG9zIiwiY29uc29sZSIsImxvZyIsIndyaXRlUXVlcnkiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibm9tYnJlIiwiZXhpc3RlbmNpYSIsInByZWNpbyIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsInBvc2l0aXZlIiwiaW50ZWdlciIsIm9uU3VibWl0IiwidmFsb3JlcyIsIndpbmRvdyIsInVuZGVmaW5lZCIsInZhcmlhYmxlcyIsImZpbGVuYW1lIiwiZmlsZSIsIm5hbWUiLCJmaWxldHlwZSIsInR5cGUiLCJyZXNwb25zZSIsInNpZ25lZFJlcXVlc3QiLCJ1cmwiLCJyZXNVcGxvYWQiLCJtZXNzYWdlIiwiaWQiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0Iiwid3JhcHBlclJlZiIsInVzZVJlZiIsImhhbmRsZURyYWdFbnRlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyb3AiLCJkYXRhVHJhbnNmZXIiLCJuZXdGaWxlIiwiZmlsZXMiLCJzZXRGaWVsZFZhbHVlIiwidXBkYXRlZExpc3QiLCJvbkZpbGVEcm9wIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInZhbHVlcyIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQywyREFBSCxtQkFBcEI7QUFVQSxJQUFNQyxpQkFBaUIsR0FBR0QsMkRBQUgsb0JBQXZCO0FBVUEsSUFBTUUsUUFBUSxHQUFHRiwyREFBSCxvQkFBZDs7QUFRQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFHeEI7QUFId0IsdUJBSURDLHFFQUFhLEVBSlo7QUFBQSxNQUloQkMsVUFKZ0Isa0JBSWhCQSxVQUpnQixFQUt4Qjs7O0FBTHdCLGtCQU1nQkMsc0RBQVEsQ0FBQyxLQUFELENBTnhCO0FBQUEsTUFNakJDLFlBTmlCO0FBQUEsTUFNSEMsZUFORyxpQkFReEI7OztBQVJ3QixxQkFTbUNDLHVFQUFXLEVBVDlDO0FBQUEsTUFTaEJDLE9BVGdCLGdCQVNoQkEsT0FUZ0I7QUFBQSxNQVNQQyxVQVRPLGdCQVNQQSxVQVRPO0FBQUEsTUFTS0MsY0FUTCxnQkFTS0EsY0FUTDtBQUFBLE1BU3FCQyxVQVRyQixnQkFTcUJBLFVBVHJCLEVBVXBCOzs7QUFWb0IscUJBV0hDLG1FQUFXLENBQUNaLFFBQUQsQ0FYUjtBQUFBO0FBQUEsTUFXYmEsTUFYYSxxQkFheEI7OztBQWJ3QixtQkFjb0JULHNEQUFRLENBQUMsRUFBRCxDQWQ1QjtBQUFBLE1BY2pCVSxjQWRp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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2RDtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE3RCxzQkFGSixFQUdJO0FBQUcsYUFBUyxFQUFDLDBDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBSEosQ0FESixFQU1JO0FBQU8sTUFBRSxFQUFDLGVBQVY7QUFBMEIsUUFBSSxFQUFDLE1BQS9CO0FBQXNDLGFBQVMsRUFBQyxRQUFoRDtBQUF5RCxZQUFRLEVBQUVtRSxVQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FGSixDQTlFSixFQTJGSTtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksYUFBUyxFQUFDLDhFQUZkO0FBR0ksU0FBSyxFQUFDLGtCQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzRkosQ0FESixFQWtHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0sxRCxjQUFjLENBQUNrRSxHQUFmLENBQW1CLFVBQUNDLEtBQUQsRUFBUztBQUN6QixXQUNJLG1FQUNLQSxLQUFLLENBQUNyQyxJQURYLENBREo7QUFLSCxHQU5BLENBREwsQ0FsR0osQ0FESixDQUZSLENBREY7QUFtSEQsQ0EvUUQ7O0dBQU0zQyxhO1VBSXFCQyw2RCxFQUtvQ0ssK0QsRUFFdENLLDJELEVBTUdBLDJELEVBaUJUZSxnRDs7O0tBbENiMUIsYTtBQWlSU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbnVldm9wcm9kdWN0by5lMWMyYjA2NWNhZDJiY2QzNGJhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQge2dxbCwgdXNlTXV0YXRpb259IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUFkZE1lc3NhZ2UsIHVzZU1lc3NhZ2VzIH0gZnJvbSAnLi4vZ3JhcGhxbC9ob29rcyc7XHJcbmltcG9ydCB7IHVzZVMzVXBsb2FkIH0gZnJvbSAnLi4vaG9va3MvdXNlUzNVcGxvYWQnO1xyXG5cclxuY29uc3QgTlVFVk9fUFJPRFVDVE8gPSBncWxgXHJcbiAgICBtdXRhdGlvbiBudWV2b1Byb2R1Y3RvKCRpbnB1dCA6IFByb2R1Y3RvSW5wdXQpe1xyXG4gICAgICAgIG51ZXZvUHJvZHVjdG8oaW5wdXQgOiAkaW5wdXQpe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgZXhpc3RlbmNpYVxyXG4gICAgICAgICAgICBwcmVjaW9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgT0JURU5FUl9QUk9EVUNUT1MgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlbmVyUHJvZHVjdG9ze1xyXG4gICAgICAgIG9idGVuZXJQcm9kdWN0b3N7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICBwcmVjaW9cclxuICAgICAgICAgICAgZXhpc3RlbmNpYVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5jb25zdCBTM1VQTE9BRCA9IGdxbGBcclxuICBtdXRhdGlvbigkZmlsZW5hbWU6IFN0cmluZyEsICRmaWxldHlwZTogU3RyaW5nISkge1xyXG4gICAgc2lnblMzKGZpbGVuYW1lOiAkZmlsZW5hbWUsIGZpbGV0eXBlOiAkZmlsZXR5cGUpIHtcclxuICAgICAgdXJsXHJcbiAgICAgIHNpZ25lZFJlcXVlc3RcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IE51ZXZvUHJvZHVjdG8gPSAoKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICAvL0NVU1RPTUhPT0sgUEFSQSBNRU5TQUpFIERFIE5VRVZPIFBST0RVQ1RPIEFHUkVHQURPXHJcbiAgICBjb25zdCB7IGFkZE1lc3NhZ2UgfSA9IHVzZUFkZE1lc3NhZ2UoKTtcclxuICAgIC8vQ0FNQklPIERFIFNPTUJSQSBQQVJBIERSQUcgQU5EIERST1BcclxuICAgIGNvbnN0IFtjbGFzc1N0YXRlQkcsIHNldENsYXNzU3RhdGVCR10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIC8vQ1VTVE9NIEhPT0sgUEFSQSBTMyBVUExPQURcclxuICAgIGNvbnN0IHsgczNTdGF0ZSwgc2V0UzNTdGF0ZSwgZm9ybWF0RmlsZW5hbWUsIHVwbG9hZFRvUzN9ID0gdXNlUzNVcGxvYWQoKTtcclxuICAgICAgICAvL211dGF0aW9uXHJcbiAgICAgICAgY29uc3QgW3NpZ25TM10gPSB1c2VNdXRhdGlvbihTM1VQTE9BRCk7XHJcblxyXG4gICAgLy9FU1RBRE9TIERFIElNQUdFTkVTIFNVQklEQVNcclxuICAgIGNvbnN0IFt1cGxvYWRlZEltYWdlcywgc2V0VXBsb2FkZWRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vTXV0YXRpb25cclxuICAgIGNvbnN0IFtudWV2b1Byb2R1Y3RvXSA9IHVzZU11dGF0aW9uKE5VRVZPX1BST0RVQ1RPLCB7XHJcbiAgICAgICAgdXBkYXRlKGNhY2hlLHtkYXRhOntudWV2b1Byb2R1Y3RvfX0pe1xyXG4gICAgICAgICAgICAvL09CdGVuZXIgb2JqZXRvIGRlIGNhY2hlXHJcbiAgICAgICAgICAgIGNvbnN0IHtvYnRlbmVyUHJvZHVjdG9zfSA9IGNhY2hlLnJlYWRRdWVyeSh7cXVlcnk6IE9CVEVORVJfUFJPRFVDVE9TfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT2J0ZW5lciBwcm9kdWN0b3MgZGVzZGUgdXBkYXRlXCIsIG9idGVuZXJQcm9kdWN0b3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vUmVlc2NyaWJpciBjYWNoZVxyXG4gICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5IDogT0JURU5FUl9QUk9EVUNUT1MsXHJcbiAgICAgICAgICAgICAgICBkYXRhIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9idGVuZXJQcm9kdWN0b3MgOiBbLi4ub2J0ZW5lclByb2R1Y3RvcyAsIG51ZXZvUHJvZHVjdG9dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9Gb3JtdWxhcmlvIHBhcmEgbnVldm9zIHByb2R1Y3Rvc1xyXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOntcclxuICAgICAgICAgICAgbm9tYnJlIDogJycsXHJcbiAgICAgICAgICAgIGV4aXN0ZW5jaWE6ICcnLFxyXG4gICAgICAgICAgICBwcmVjaW8gOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYSA6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICBub21icmUgOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBub21icmUgZGVsIHByb2R1Y3RvIGVzIG9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgICAgIGV4aXN0ZW5jaWEgOiBZdXAubnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnQWdyZWdhIGxhIGNhbnRpZGFkIGRpc3BvbmlibGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc2l0aXZlKCdObyBzZSBhY2VwdGFuIG7Dum1lcm9zIG5lZ2F0aXZvcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW50ZWdlcignTGEgZXhpc3RlbmNpYSBkZWJlbiBzZXIgZW50ZXJvcycpLFxyXG4gICAgICAgICAgICBwcmVjaW8gOiBZdXAubnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBwcmVjaW8gZXMgb2JsaWdhdG9yaW8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zaXRpdmUoJyBMb3MgbsO6bWVyb3MgZGViZW4gc2VyIHBvc2l0aXZvcycpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgb25TdWJtaXQgOiBhc3luYyB2YWxvcmVzID0+e1xyXG4gICAgICAgICAgICAgY29uc3Qge25vbWJyZSwgZXhpc3RlbmNpYSwgcHJlY2lvfSA9IHZhbG9yZXM7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1VQTE9BRCBGSUxFIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNpZ25TMyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBmb3JtYXRGaWxlbmFtZShzM1N0YXRlLmZpbGUubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGV0eXBlOiBzM1N0YXRlLmZpbGUudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2lnbmVkUmVxdWVzdCwgdXJsIH0gPSByZXNwb25zZS5kYXRhLnNpZ25TMztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc1VwbG9hZCA9IGF3YWl0IHVwbG9hZFRvUzMoczNTdGF0ZS5maWxlLCBzaWduZWRSZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BVRVNUQSBERSBTM1wiLCByZXNVcGxvYWQsIFwiVVJMXCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICAvL0VORCBVUExPQUQgRklMRSBcclxuICAgICAgICAgICAgICAgIGlmKHVybCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYWRkTWVzc2FnZShgU2UgYWdyZWfDsyBlbCBwcm9kdWN0byAke25vbWJyZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLmlkICE9PSB1bmRlZmluZWQpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBhZGRNZXNzYWdlKGBTZSBhZ3JlZ8OzIGVsIHByb2R1Y3RvICR7bm9tYnJlfWApO1xyXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1lbnNhamUgZGVzZGUgb25TdWJtaXRcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL0VWRU5UT1MgUEFSQSBFTCBVUExPQUQgREUgTE9TIEFSQ0hJVk9TXHJcbiAgICAgICAgLy9FU1RBRE8gREUgTEEgTElTVEEgREUgSU1BR0VORVNcclxuICAgICAgICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAgICAgLy9SRUZFUkVOQ0lBXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdiZy1ibGFjay04MDAnKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRHJhZ2VhZG8gZW5jaW1hXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vIHdyYXBwZXJSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ibGFjay04MDAnKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGVqYVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vIHdyYXBwZXJSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiYmctYmxhY2stODAwXCIpXHJcbiAgICAgICAgc2V0Q2xhc3NTdGF0ZUJHKHRydWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGVqYVwiKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyB3cmFwcGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmctYmxhY2stODAwJylcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2ZlcilcclxuICAgICAgICBsZXQgbmV3RmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgICAgIHNldFMzU3RhdGUoey4uLnMzU3RhdGUsIGZpbGUgOiBuZXdGaWxlLCBuYW1lIDogbmV3RmlsZS5uYW1lfSk7XHJcblxyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZmlsZVwiLCBuZXdGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpc3QgPSBbLi4uZmlsZUxpc3QsIG5ld0ZpbGVdO1xyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdCh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgICAgIC8vIG9uRmlsZUNoYW5nZSh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENsYXNzU3RhdGVCRyhmYWxzZSk7XHJcbiAgICAgICAgc2V0VXBsb2FkZWRJbWFnZXMoWy4uLnVwbG9hZGVkSW1hZ2VzLCB7bmFtZSA6IG5ld0ZpbGUubmFtZX1dKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkZpbGVEcm9wID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlIGRlam8gYWNhXCIpO1xyXG4gICAgICAgIGNvbnN0IG5ld0ZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBzZXRTM1N0YXRlKHsuLi5zM1N0YXRlLCBmaWxlIDogbmV3RmlsZSwgbmFtZSA6IG5ld0ZpbGUubmFtZX0pO1xyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZmlsZVwiLCBuZXdGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpc3QgPSBbLi4uZmlsZUxpc3QsIG5ld0ZpbGVdO1xyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdCh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgICAgIC8vIG9uRmlsZUNoYW5nZSh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWUgPSBcInRleHQtMnhsIHRleHQtZ3JheS04MDAgZm9udC1saWdodCBcIj5DcmVhciBudWV2byBwcm9kdWN0bzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LTUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1sZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi00J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRW50ZXI9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKTtlLnN0b3BQcm9wYWdhdGlvbigpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnPXsoZSk9PntlLnByZXZlbnREZWZhdWx0KCk7ZS5zdG9wUHJvcGFnYXRpb24oKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUpPT57ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcFByb3BhZ2F0aW9uKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpPT57ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcFByb3BhZ2F0aW9uKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yJyBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYSByZXZpc2FuZG8gZWwgY2FtYmlvIHF1ZSBzZSBoYWdhIHkgbG8gY29sb2NhIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2Zvcm1pay52YWx1ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm5vbWJyZSAmJiBmb3JtaWsuZXJyb3JzLm5vbWJyZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctcmVkLTEwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtmb3JtaWsuZXJyb3JzLm5vbWJyZX08L3A+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTInIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FudGlkYWQgRGlzcG9uaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGlzdGVuY2lhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FudGlkYWQgRGlzcG9uaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmEgcmV2aXNhbmRvIGVsIGNhbWJpbyBxdWUgc2UgaGFnYSB5IGxvIGNvbG9jYSBlbiBlbCBlc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmb3JtaWsudmFsdWVzLmV4aXN0ZW5jaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZXhpc3RlbmNpYSAmJiBmb3JtaWsuZXJyb3JzLmV4aXN0ZW5jaWEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLXJlZC0xMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7Zm9ybWlrLmVycm9ycy5leGlzdGVuY2lhfTwvcD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMicgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJlY2lvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJlY2lvIFByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYSByZXZpc2FuZG8gZWwgY2FtYmlvIHF1ZSBzZSBoYWdhIHkgbG8gY29sb2NhIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2Zvcm1pay52YWx1ZXMucHJlY2lvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLnByZWNpbyAmJiBmb3JtaWsuZXJyb3JzLnByZWNpbyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctcmVkLTEwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtmb3JtaWsuZXJyb3JzLnByZWNpb308L3A+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIiBvbkNoYW5nZT17b25GaWxlRHJvcH0gcmVmPXt3cmFwcGVyUmVmfSBvbkRyYWdFbnRlcj17KGUpPT5oYW5kbGVEcmFnRW50ZXIoZSl9IG9uRHJhZ092ZXI9eyhlKT0+aGFuZGxlRHJhZ092ZXIoZSl9IG9uRHJhZ0xlYXZlPXsoZSk9PmhhbmRsZURyYWdMZWF2ZShlKX0gb25Ecm9wPXsoZSk9PmhhbmRsZURyb3AoZSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkcm9wem9uZS1maWxlXCIgY2xhc3NOYW1lPXtjbGFzc1N0YXRlQkcgPyBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLTY0IGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgYm9yZGVyLWRhc2hlZCBjdXJzb3ItcG9pbnRlciBkYXJrOmhvdmVyOmJnLWJyYXktODAwIGRhcms6YmctZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpob3Zlcjpib3JkZXItZ3JheS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBiZy1ncmF5LTgwMFwiIDogXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC02NCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGJvcmRlci1kYXNoZWQgY3Vyc29yLXBvaW50ZXIgZGFyazpob3ZlcjpiZy1icmF5LTgwMCBkYXJrOmJnLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6aG92ZXI6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtNSBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWItMyB3LTEwIGgtMTAgdGV4dC1ncmF5LTQwMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk03IDE2YTQgNCAwIDAxLS44OC03LjkwM0E1IDUgMCAxMTE1LjkgNkwxNiA2YTUgNSAwIDAxMSA5LjlNMTUgMTNsLTMtM20wIDBsLTMgM20zLTN2MTJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DbGljayB0byB1cGxvYWQ8L3NwYW4+IG9yIGRyYWcgYW5kIGRyb3A8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5TVkcsIFBORywgSlBHIG9yIEdJRiAoTUFYLiA4MDB4NDAwcHgpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRyb3B6b25lLWZpbGVcIiB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImhpZGRlblwiIG9uQ2hhbmdlPXtvbkZpbGVEcm9wfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS04MDAgdy1mdWxsIG10LTUgcC0yIHRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTkwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGxvYWRlZEltYWdlcy5tYXAoKGltYWdlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2UubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdWV2b1Byb2R1Y3RvIl0sInNvdXJjZVJvb3QiOiIifQ==