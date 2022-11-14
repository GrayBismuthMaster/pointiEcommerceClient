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
  //Mutation


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
                  _context.next = 10;
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
                // await addMessage(`Se agregó el producto ${nombre}`);
                // // const message = await addMessage(`Se agregó el producto ${nombre}`);
                // // console.log("Mensaje desde onSubmit", message);
                // // if(message.id !== undefined){
                // try{
                //         //MENSAJE DE NUEVO PRODUCTO AGREGADO
                //         const producto = await nuevoProducto({
                //             variables : {
                //                 input : {
                //                     nombre,
                //                     existencia, 
                //                     precio
                //                 }
                //             }
                //         })
                //         console.log("Producto desde nuevo Producto", producto);
                //         Swal.fire(
                //             'Creado',
                //             'Se creó el producto correctamente',
                //             'success',
                //             ).then(async ()=>{
                //                 await router.push('/productos');
                //             }
                //         )
                // }
                // catch (error){
                //     console.log(error)
                // }  
                // }

              case 10:
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      fileList = _useState2[0],
      setFileList = _useState2[1]; //REFERENCIA


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
      lineNumber: 221,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, "Crear nuevo producto"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 225,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 237,
      columnNumber: 33
    }
  })), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 35
    }
  }, " ", formik.errors.nombre)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
      lineNumber: 260,
      columnNumber: 33
    }
  })), formik.touched.existencia && formik.errors.existencia ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 35
    }
  }, " ", formik.errors.existencia)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 283,
      columnNumber: 33
    }
  })), formik.touched.precio && formik.errors.precio ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
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
      lineNumber: 303,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "dropzone-file",
    className: classStateBG ? "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-gray-800" : "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center items-center pt-5 pb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
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
      lineNumber: 307,
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
      lineNumber: 307,
      columnNumber: 191
    }
  })), __jsx("p", {
    className: "mb-2 text-sm text-gray-500 dark:text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "font-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 98
    }
  }, "Click to upload"), " or drag and drop"), __jsx("p", {
    className: "text-xs text-gray-500 dark:text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 311,
      columnNumber: 33
    }
  }))), __jsx("input", {
    type: "submit",
    className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
    value: "Agregar Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  })))));
};

_s(NuevoProducto, "Dlp8PRaca7raIxcGv4M2/FzRyME=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm9wcm9kdWN0by5qcyJdLCJuYW1lcyI6WyJOVUVWT19QUk9EVUNUTyIsImdxbCIsIk9CVEVORVJfUFJPRFVDVE9TIiwiUzNVUExPQUQiLCJOdWV2b1Byb2R1Y3RvIiwidXNlQWRkTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImNsYXNzU3RhdGVCRyIsInNldENsYXNzU3RhdGVCRyIsInVzZVMzVXBsb2FkIiwiczNTdGF0ZSIsInNldFMzU3RhdGUiLCJmb3JtYXRGaWxlbmFtZSIsInVwbG9hZFRvUzMiLCJ1c2VNdXRhdGlvbiIsInNpZ25TMyIsInVwZGF0ZSIsImNhY2hlIiwibnVldm9Qcm9kdWN0byIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIm9idGVuZXJQcm9kdWN0b3MiLCJjb25zb2xlIiwibG9nIiwid3JpdGVRdWVyeSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJub21icmUiLCJleGlzdGVuY2lhIiwicHJlY2lvIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwicG9zaXRpdmUiLCJpbnRlZ2VyIiwib25TdWJtaXQiLCJ2YWxvcmVzIiwid2luZG93IiwidW5kZWZpbmVkIiwidmFyaWFibGVzIiwiZmlsZW5hbWUiLCJmaWxlIiwibmFtZSIsImZpbGV0eXBlIiwidHlwZSIsInJlc3BvbnNlIiwic2lnbmVkUmVxdWVzdCIsInVybCIsInJlc1VwbG9hZCIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJ3cmFwcGVyUmVmIiwidXNlUmVmIiwiaGFuZGxlRHJhZ0VudGVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJvcCIsImRhdGFUcmFuc2ZlciIsIm5ld0ZpbGUiLCJmaWxlcyIsInNldEZpZWxkVmFsdWUiLCJ1cGRhdGVkTGlzdCIsIm9uRmlsZURyb3AiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidmFsdWVzIiwidG91Y2hlZCIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQywyREFBSCxtQkFBcEI7QUFVQSxJQUFNQyxpQkFBaUIsR0FBR0QsMkRBQUgsb0JBQXZCO0FBVUEsSUFBTUUsUUFBUSxHQUFHRiwyREFBSCxvQkFBZDs7QUFRQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFHeEI7QUFId0IsdUJBSURDLHFFQUFhLEVBSlo7QUFBQSxNQUloQkMsVUFKZ0Isa0JBSWhCQSxVQUpnQixFQUt4Qjs7O0FBTHdCLGtCQU1nQkMsc0RBQVEsQ0FBQyxLQUFELENBTnhCO0FBQUEsTUFNakJDLFlBTmlCO0FBQUEsTUFNSEMsZUFORyxpQkFReEI7OztBQVJ3QixxQkFTbUNDLHVFQUFXLEVBVDlDO0FBQUEsTUFTaEJDLE9BVGdCLGdCQVNoQkEsT0FUZ0I7QUFBQSxNQVNQQyxVQVRPLGdCQVNQQSxVQVRPO0FBQUEsTUFTS0MsY0FUTCxnQkFTS0EsY0FUTDtBQUFBLE1BU3FCQyxVQVRyQixnQkFTcUJBLFVBVHJCLEVBVXBCOzs7QUFWb0IscUJBV0hDLG1FQUFXLENBQUNaLFFBQUQsQ0FYUjtBQUFBO0FBQUEsTUFXYmEsTUFYYSxxQkFheEI7QUFHQTs7O0FBaEJ3QixzQkFpQkFELG1FQUFXLENBQUNmLGNBQUQsRUFBaUI7QUFDaERpQixVQURnRCxrQkFDekNDLEtBRHlDLFFBQ1o7QUFBQSxVQUFoQkMsYUFBZ0IsUUFBdEJDLElBQXNCLENBQWhCRCxhQUFn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TUFBL0I7QUFBc0MsYUFBUyxFQUFDLFFBQWhEO0FBQXlELFlBQVEsRUFBRStELFVBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQUZKLENBOUVKLEVBMkZJO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxhQUFTLEVBQUMsOEVBRmQ7QUFHSSxTQUFLLEVBQUMsa0JBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGSixDQURKLENBREosQ0FGUixDQURGO0FBMEdELENBOVJEOztHQUFNbkUsYTtVQUlxQkMsNkQsRUFLb0NLLCtELEVBRXRDSywyRCxFQU1HQSwyRCxFQWlCVGEsZ0Q7OztLQWxDYnhCLGE7QUFnU1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL251ZXZvcHJvZHVjdG8uMjU1OTEyZGFhYmU5YzViODUzMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHtncWwsIHVzZU11dGF0aW9ufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VBZGRNZXNzYWdlLCB1c2VNZXNzYWdlcyB9IGZyb20gJy4uL2dyYXBocWwvaG9va3MnO1xyXG5pbXBvcnQgeyB1c2VTM1VwbG9hZCB9IGZyb20gJy4uL2hvb2tzL3VzZVMzVXBsb2FkJztcclxuXHJcbmNvbnN0IE5VRVZPX1BST0RVQ1RPID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gbnVldm9Qcm9kdWN0bygkaW5wdXQgOiBQcm9kdWN0b0lucHV0KXtcclxuICAgICAgICBudWV2b1Byb2R1Y3RvKGlucHV0IDogJGlucHV0KXtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgIGV4aXN0ZW5jaWFcclxuICAgICAgICAgICAgcHJlY2lvXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbmNvbnN0IE9CVEVORVJfUFJPRFVDVE9TID0gZ3FsYFxyXG4gICAgcXVlcnkgb2J0ZW5lclByb2R1Y3Rvc3tcclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9ze1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgcHJlY2lvXHJcbiAgICAgICAgICAgIGV4aXN0ZW5jaWFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgUzNVUExPQUQgPSBncWxgXHJcbiAgbXV0YXRpb24oJGZpbGVuYW1lOiBTdHJpbmchLCAkZmlsZXR5cGU6IFN0cmluZyEpIHtcclxuICAgIHNpZ25TMyhmaWxlbmFtZTogJGZpbGVuYW1lLCBmaWxldHlwZTogJGZpbGV0eXBlKSB7XHJcbiAgICAgIHVybFxyXG4gICAgICBzaWduZWRSZXF1ZXN0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBOdWV2b1Byb2R1Y3RvID0gKCkgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgLy9DVVNUT01IT09LIFBBUkEgTUVOU0FKRSBERSBOVUVWTyBQUk9EVUNUTyBBR1JFR0FET1xyXG4gICAgY29uc3QgeyBhZGRNZXNzYWdlIH0gPSB1c2VBZGRNZXNzYWdlKCk7XHJcbiAgICAvL0NBTUJJTyBERSBTT01CUkEgUEFSQSBEUkFHIEFORCBEUk9QXHJcbiAgICBjb25zdCBbY2xhc3NTdGF0ZUJHLCBzZXRDbGFzc1N0YXRlQkddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICAvL0NVU1RPTSBIT09LIFBBUkEgUzMgVVBMT0FEXHJcbiAgICBjb25zdCB7IHMzU3RhdGUsIHNldFMzU3RhdGUsIGZvcm1hdEZpbGVuYW1lLCB1cGxvYWRUb1MzfSA9IHVzZVMzVXBsb2FkKCk7XHJcbiAgICAgICAgLy9tdXRhdGlvblxyXG4gICAgICAgIGNvbnN0IFtzaWduUzNdID0gdXNlTXV0YXRpb24oUzNVUExPQUQpO1xyXG5cclxuICAgIC8vRVNUQURPUyBERSBJTUFHRU5FUyBTVUJJREFTXHJcbiAgICBcclxuXHJcbiAgICAvL011dGF0aW9uXHJcbiAgICBjb25zdCBbbnVldm9Qcm9kdWN0b10gPSB1c2VNdXRhdGlvbihOVUVWT19QUk9EVUNUTywge1xyXG4gICAgICAgIHVwZGF0ZShjYWNoZSx7ZGF0YTp7bnVldm9Qcm9kdWN0b319KXtcclxuICAgICAgICAgICAgLy9PQnRlbmVyIG9iamV0byBkZSBjYWNoZVxyXG4gICAgICAgICAgICBjb25zdCB7b2J0ZW5lclByb2R1Y3Rvc30gPSBjYWNoZS5yZWFkUXVlcnkoe3F1ZXJ5OiBPQlRFTkVSX1BST0RVQ1RPU30pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9idGVuZXIgcHJvZHVjdG9zIGRlc2RlIHVwZGF0ZVwiLCBvYnRlbmVyUHJvZHVjdG9zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL1JlZXNjcmliaXIgY2FjaGVcclxuICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSA6IE9CVEVORVJfUFJPRFVDVE9TLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnRlbmVyUHJvZHVjdG9zIDogWy4uLm9idGVuZXJQcm9kdWN0b3MgLCBudWV2b1Byb2R1Y3RvXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vRm9ybXVsYXJpbyBwYXJhIG51ZXZvcyBwcm9kdWN0b3NcclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczp7XHJcbiAgICAgICAgICAgIG5vbWJyZSA6ICcnLFxyXG4gICAgICAgICAgICBleGlzdGVuY2lhOiAnJyxcclxuICAgICAgICAgICAgcHJlY2lvIDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWEgOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgbm9tYnJlIDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgbm9tYnJlIGRlbCBwcm9kdWN0byBlcyBvYmxpZ2F0b3JpbycpLFxyXG4gICAgICAgICAgICBleGlzdGVuY2lhIDogWXVwLm51bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0FncmVnYSBsYSBjYW50aWRhZCBkaXNwb25pYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3NpdGl2ZSgnTm8gc2UgYWNlcHRhbiBuw7ptZXJvcyBuZWdhdGl2b3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmludGVnZXIoJ0xhIGV4aXN0ZW5jaWEgZGViZW4gc2VyIGVudGVyb3MnKSxcclxuICAgICAgICAgICAgcHJlY2lvIDogWXVwLm51bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgcHJlY2lvIGVzIG9ibGlnYXRvcmlvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc2l0aXZlKCcgTG9zIG7Dum1lcm9zIGRlYmVuIHNlciBwb3NpdGl2b3MnKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uU3VibWl0IDogYXN5bmMgdmFsb3JlcyA9PntcclxuICAgICAgICAgICAgIGNvbnN0IHtub21icmUsIGV4aXN0ZW5jaWEsIHByZWNpb30gPSB2YWxvcmVzO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBpZih3aW5kb3cgIT09IHVuZGVmaW5lZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9VUExPQUQgRklMRSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWduUzMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogZm9ybWF0RmlsZW5hbWUoczNTdGF0ZS5maWxlLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxldHlwZTogczNTdGF0ZS5maWxlLnR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNpZ25lZFJlcXVlc3QsIHVybCB9ID0gcmVzcG9uc2UuZGF0YS5zaWduUzM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNVcGxvYWQgPSBhd2FpdCB1cGxvYWRUb1MzKHMzU3RhdGUuZmlsZSwgc2lnbmVkUmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVNQVUVTVEEgREUgUzNcIiwgcmVzVXBsb2FkLCBcIlVSTFwiLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgLy9FTkQgVVBMT0FEIEZJTEUgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgYWRkTWVzc2FnZShgU2UgYWdyZWfDsyBlbCBwcm9kdWN0byAke25vbWJyZX1gKTtcclxuICAgICAgICAgICAgICAgLy8gLy8gY29uc3QgbWVzc2FnZSA9IGF3YWl0IGFkZE1lc3NhZ2UoYFNlIGFncmVnw7MgZWwgcHJvZHVjdG8gJHtub21icmV9YCk7XHJcbiAgICAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwiTWVuc2FqZSBkZXNkZSBvblN1Ym1pdFwiLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgLy8gLy8gaWYobWVzc2FnZS5pZCAhPT0gdW5kZWZpbmVkKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vTUVOU0FKRSBERSBOVUVWTyBQUk9EVUNUTyBBR1JFR0FET1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvZHVjdG8gPSBhd2FpdCBudWV2b1Byb2R1Y3RvKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YXJpYWJsZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlucHV0IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZXhpc3RlbmNpYSwgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcmVjaW9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3RvIGRlc2RlIG51ZXZvIFByb2R1Y3RvXCIsIHByb2R1Y3RvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICdDcmVhZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICdTZSBjcmXDsyBlbCBwcm9kdWN0byBjb3JyZWN0YW1lbnRlJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKS50aGVuKGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGF3YWl0IHJvdXRlci5wdXNoKCcvcHJvZHVjdG9zJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gIFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvL0VWRU5UT1MgUEFSQSBFTCBVUExPQUQgREUgTE9TIEFSQ0hJVk9TXHJcbiAgICAgICAgLy9FU1RBRE8gREUgTEEgTElTVEEgREUgSU1BR0VORVNcclxuICAgICAgICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAgICAgLy9SRUZFUkVOQ0lBXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdiZy1ibGFjay04MDAnKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRHJhZ2VhZG8gZW5jaW1hXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vIHdyYXBwZXJSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ibGFjay04MDAnKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGVqYVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vIHdyYXBwZXJSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiYmctYmxhY2stODAwXCIpXHJcbiAgICAgICAgc2V0Q2xhc3NTdGF0ZUJHKHRydWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGVqYVwiKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyB3cmFwcGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmctYmxhY2stODAwJylcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2ZlcilcclxuICAgICAgICBsZXQgbmV3RmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgICAgIHNldFMzU3RhdGUoey4uLnMzU3RhdGUsIGZpbGUgOiBuZXdGaWxlLCBuYW1lIDogbmV3RmlsZS5uYW1lfSk7XHJcblxyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZmlsZVwiLCBuZXdGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpc3QgPSBbLi4uZmlsZUxpc3QsIG5ld0ZpbGVdO1xyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdCh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgICAgIC8vIG9uRmlsZUNoYW5nZSh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENsYXNzU3RhdGVCRyhmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uRmlsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2UgZGVqbyBhY2FcIik7XHJcbiAgICAgICAgY29uc3QgbmV3RmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIHNldFMzU3RhdGUoey4uLnMzU3RhdGUsIGZpbGUgOiBuZXdGaWxlLCBuYW1lIDogbmV3RmlsZS5uYW1lfSk7XHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJmaWxlXCIsIG5ld0ZpbGUpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlzdCA9IFsuLi5maWxlTGlzdCwgbmV3RmlsZV07XHJcbiAgICAgICAgICAgIHNldEZpbGVMaXN0KHVwZGF0ZWRMaXN0KTtcclxuICAgICAgICAgICAgLy8gb25GaWxlQ2hhbmdlKHVwZGF0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwidGV4dC0yeGwgdGV4dC1ncmF5LTgwMCBmb250LWxpZ2h0IFwiPkNyZWFyIG51ZXZvIHByb2R1Y3RvPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXQtNSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LWxnJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXdoaXRlIHJvdW5kZWQgc2hhZG93LW1kIHB4LTggcHQtNiBwYi04IG1iLTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbnRlcj17KGUpPT57ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcFByb3BhZ2F0aW9uKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWc9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKTtlLnN0b3BQcm9wYWdhdGlvbigpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSk9PntlLnByZXZlbnREZWZhdWx0KCk7ZS5zdG9wUHJvcGFnYXRpb24oKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoZSk9PntlLnByZXZlbnREZWZhdWx0KCk7ZS5zdG9wUHJvcGFnYXRpb24oKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTInIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhIHJldmlzYW5kbyBlbCBjYW1iaW8gcXVlIHNlIGhhZ2EgeSBsbyBjb2xvY2EgZW4gZWwgZXN0YWRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Zm9ybWlrLnZhbHVlcy5ub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQubm9tYnJlICYmIGZvcm1pay5lcnJvcnMubm9tYnJlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1yZWQtMTAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2Zvcm1pay5lcnJvcnMubm9tYnJlfTwvcD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMicgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW50aWRhZCBEaXNwb25pYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4aXN0ZW5jaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYW50aWRhZCBEaXNwb25pYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYSByZXZpc2FuZG8gZWwgY2FtYmlvIHF1ZSBzZSBoYWdhIHkgbG8gY29sb2NhIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2Zvcm1pay52YWx1ZXMuZXhpc3RlbmNpYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5leGlzdGVuY2lhICYmIGZvcm1pay5lcnJvcnMuZXhpc3RlbmNpYSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctcmVkLTEwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtmb3JtaWsuZXJyb3JzLmV4aXN0ZW5jaWF9PC9wPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yJyBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZWNpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVjaW8gUHJvZHVjdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhIHJldmlzYW5kbyBlbCBjYW1iaW8gcXVlIHNlIGhhZ2EgeSBsbyBjb2xvY2EgZW4gZWwgZXN0YWRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Zm9ybWlrLnZhbHVlcy5wcmVjaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQucHJlY2lvICYmIGZvcm1pay5lcnJvcnMucHJlY2lvID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1yZWQtMTAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2Zvcm1pay5lcnJvcnMucHJlY2lvfTwvcD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbFwiIG9uQ2hhbmdlPXtvbkZpbGVEcm9wfSByZWY9e3dyYXBwZXJSZWZ9IG9uRHJhZ0VudGVyPXsoZSk9PmhhbmRsZURyYWdFbnRlcihlKX0gb25EcmFnT3Zlcj17KGUpPT5oYW5kbGVEcmFnT3ZlcihlKX0gb25EcmFnTGVhdmU9eyhlKT0+aGFuZGxlRHJhZ0xlYXZlKGUpfSBvbkRyb3A9eyhlKT0+aGFuZGxlRHJvcChlKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRyb3B6b25lLWZpbGVcIiBjbGFzc05hbWU9e2NsYXNzU3RhdGVCRyA/IFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtNjQgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBib3JkZXItZGFzaGVkIGN1cnNvci1wb2ludGVyIGRhcms6aG92ZXI6YmctYnJheS04MDAgZGFyazpiZy1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmhvdmVyOmJvcmRlci1ncmF5LTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGJnLWdyYXktODAwXCIgOiBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLTY0IGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgYm9yZGVyLWRhc2hlZCBjdXJzb3ItcG9pbnRlciBkYXJrOmhvdmVyOmJnLWJyYXktODAwIGRhcms6YmctZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpob3Zlcjpib3JkZXItZ3JheS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwifSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwdC01IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJtYi0zIHctMTAgaC0xMCB0ZXh0LWdyYXktNDAwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTcgMTZhNCA0IDAgMDEtLjg4LTcuOTAzQTUgNSAwIDExMTUuOSA2TDE2IDZhNSA1IDAgMDExIDkuOU0xNSAxM2wtMy0zbTAgMGwtMyAzbTMtM3YxMlwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkNsaWNrIHRvIHVwbG9hZDwvc3Bhbj4gb3IgZHJhZyBhbmQgZHJvcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlNWRywgUE5HLCBKUEcgb3IgR0lGIChNQVguIDgwMHg0MDBweCk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZHJvcHpvbmUtZmlsZVwiIHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCIgb25DaGFuZ2U9e29uRmlsZURyb3B9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTgwMCB3LWZ1bGwgbXQtNSBwLTIgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIGhvdmVyOmJnLWdyYXktOTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJBZ3JlZ2FyIFByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51ZXZvUHJvZHVjdG8iXSwic291cmNlUm9vdCI6IiJ9