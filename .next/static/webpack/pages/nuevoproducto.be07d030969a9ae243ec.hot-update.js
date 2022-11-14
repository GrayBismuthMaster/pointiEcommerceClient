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
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  }, uploadedImages.map(function (image) {})))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm9wcm9kdWN0by5qcyJdLCJuYW1lcyI6WyJOVUVWT19QUk9EVUNUTyIsImdxbCIsIk9CVEVORVJfUFJPRFVDVE9TIiwiUzNVUExPQUQiLCJOdWV2b1Byb2R1Y3RvIiwidXNlQWRkTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImNsYXNzU3RhdGVCRyIsInNldENsYXNzU3RhdGVCRyIsInVzZVMzVXBsb2FkIiwiczNTdGF0ZSIsInNldFMzU3RhdGUiLCJmb3JtYXRGaWxlbmFtZSIsInVwbG9hZFRvUzMiLCJ1c2VNdXRhdGlvbiIsInNpZ25TMyIsInVwbG9hZGVkSW1hZ2VzIiwic2V0VXBsb2FkZWRJbWFnZXMiLCJ1cGRhdGUiLCJjYWNoZSIsIm51ZXZvUHJvZHVjdG8iLCJkYXRhIiwicmVhZFF1ZXJ5IiwicXVlcnkiLCJvYnRlbmVyUHJvZHVjdG9zIiwiY29uc29sZSIsImxvZyIsIndyaXRlUXVlcnkiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibm9tYnJlIiwiZXhpc3RlbmNpYSIsInByZWNpbyIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsInBvc2l0aXZlIiwiaW50ZWdlciIsIm9uU3VibWl0IiwidmFsb3JlcyIsIndpbmRvdyIsInVuZGVmaW5lZCIsInZhcmlhYmxlcyIsImZpbGVuYW1lIiwiZmlsZSIsIm5hbWUiLCJmaWxldHlwZSIsInR5cGUiLCJyZXNwb25zZSIsInNpZ25lZFJlcXVlc3QiLCJ1cmwiLCJyZXNVcGxvYWQiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0Iiwid3JhcHBlclJlZiIsInVzZVJlZiIsImhhbmRsZURyYWdFbnRlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyb3AiLCJkYXRhVHJhbnNmZXIiLCJuZXdGaWxlIiwiZmlsZXMiLCJzZXRGaWVsZFZhbHVlIiwidXBkYXRlZExpc3QiLCJvbkZpbGVEcm9wIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInZhbHVlcyIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQywyREFBSCxtQkFBcEI7QUFVQSxJQUFNQyxpQkFBaUIsR0FBR0QsMkRBQUgsb0JBQXZCO0FBVUEsSUFBTUUsUUFBUSxHQUFHRiwyREFBSCxvQkFBZDs7QUFRQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFHeEI7QUFId0IsdUJBSURDLHFFQUFhLEVBSlo7QUFBQSxNQUloQkMsVUFKZ0Isa0JBSWhCQSxVQUpnQixFQUt4Qjs7O0FBTHdCLGtCQU1nQkMsc0RBQVEsQ0FBQyxLQUFELENBTnhCO0FBQUEsTUFNakJDLFlBTmlCO0FBQUEsTUFNSEMsZUFORyxpQkFReEI7OztBQVJ3QixxQkFTbUNDLHVFQUFXLEVBVDlDO0FBQUEsTUFTaEJDLE9BVGdCLGdCQVNoQkEsT0FUZ0I7QUFBQSxNQVNQQyxVQVRPLGdCQVNQQSxVQVRPO0FBQUEsTUFTS0MsY0FUTCxnQkFTS0EsY0FUTDtBQUFBLE1BU3FCQyxVQVRyQixnQkFTcUJBLFVBVHJCLEVBVXBCOzs7QUFWb0IscUJBV0hDLG1FQUFXLENBQUNaLFFBQUQsQ0FYUjtBQUFBO0FBQUEsTUFXYmEsTUFYYSxxQkFheEI7OztBQWJ3QixtQkFjb0JULHNEQUFRLENBQUMsRUFBRCxDQWQ1QjtBQUFBLE1BY2pCVSxjQWRpQjtBQUFBLE1BY0RDLGlC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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZEO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTdELHNCQUZKLEVBR0k7QUFBRyxhQUFTLEVBQUMsMENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FISixDQURKLEVBTUk7QUFBTyxNQUFFLEVBQUMsZUFBVjtBQUEwQixRQUFJLEVBQUMsTUFBL0I7QUFBc0MsYUFBUyxFQUFDLFFBQWhEO0FBQXlELFlBQVEsRUFBRWlFLFVBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQUZKLENBOUVKLEVBMkZJO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxhQUFTLEVBQUMsOEVBRmQ7QUFHSSxTQUFLLEVBQUMsa0JBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGSixDQURKLEVBa0dJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3hELGNBQWMsQ0FBQ2dFLEdBQWYsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFTLENBRTVCLENBRkEsQ0FETCxDQWxHSixDQURKLENBRlIsQ0FERjtBQStHRCxDQW5TRDs7R0FBTTlFLGE7VUFJcUJDLDZELEVBS29DSywrRCxFQUV0Q0ssMkQsRUFNR0EsMkQsRUFpQlRlLGdEOzs7S0FsQ2IxQixhO0FBcVNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9udWV2b3Byb2R1Y3RvLmJlMDdkMDMwOTY5YTlhZTI0M2VjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7Z3FsLCB1c2VNdXRhdGlvbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQWRkTWVzc2FnZSwgdXNlTWVzc2FnZXMgfSBmcm9tICcuLi9ncmFwaHFsL2hvb2tzJztcclxuaW1wb3J0IHsgdXNlUzNVcGxvYWQgfSBmcm9tICcuLi9ob29rcy91c2VTM1VwbG9hZCc7XHJcblxyXG5jb25zdCBOVUVWT19QUk9EVUNUTyA9IGdxbGBcclxuICAgIG11dGF0aW9uIG51ZXZvUHJvZHVjdG8oJGlucHV0IDogUHJvZHVjdG9JbnB1dCl7XHJcbiAgICAgICAgbnVldm9Qcm9kdWN0byhpbnB1dCA6ICRpbnB1dCl7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICBleGlzdGVuY2lhXHJcbiAgICAgICAgICAgIHByZWNpb1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5jb25zdCBPQlRFTkVSX1BST0RVQ1RPUyA9IGdxbGBcclxuICAgIHF1ZXJ5IG9idGVuZXJQcm9kdWN0b3N7XHJcbiAgICAgICAgb2J0ZW5lclByb2R1Y3Rvc3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgIHByZWNpb1xyXG4gICAgICAgICAgICBleGlzdGVuY2lhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFMzVVBMT0FEID0gZ3FsYFxyXG4gIG11dGF0aW9uKCRmaWxlbmFtZTogU3RyaW5nISwgJGZpbGV0eXBlOiBTdHJpbmchKSB7XHJcbiAgICBzaWduUzMoZmlsZW5hbWU6ICRmaWxlbmFtZSwgZmlsZXR5cGU6ICRmaWxldHlwZSkge1xyXG4gICAgICB1cmxcclxuICAgICAgc2lnbmVkUmVxdWVzdFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgTnVldm9Qcm9kdWN0byA9ICgpID0+IHtcclxuICAgIFxyXG5cclxuICAgIC8vQ1VTVE9NSE9PSyBQQVJBIE1FTlNBSkUgREUgTlVFVk8gUFJPRFVDVE8gQUdSRUdBRE9cclxuICAgIGNvbnN0IHsgYWRkTWVzc2FnZSB9ID0gdXNlQWRkTWVzc2FnZSgpO1xyXG4gICAgLy9DQU1CSU8gREUgU09NQlJBIFBBUkEgRFJBRyBBTkQgRFJPUFxyXG4gICAgY29uc3QgW2NsYXNzU3RhdGVCRywgc2V0Q2xhc3NTdGF0ZUJHXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgLy9DVVNUT00gSE9PSyBQQVJBIFMzIFVQTE9BRFxyXG4gICAgY29uc3QgeyBzM1N0YXRlLCBzZXRTM1N0YXRlLCBmb3JtYXRGaWxlbmFtZSwgdXBsb2FkVG9TM30gPSB1c2VTM1VwbG9hZCgpO1xyXG4gICAgICAgIC8vbXV0YXRpb25cclxuICAgICAgICBjb25zdCBbc2lnblMzXSA9IHVzZU11dGF0aW9uKFMzVVBMT0FEKTtcclxuXHJcbiAgICAvL0VTVEFET1MgREUgSU1BR0VORVMgU1VCSURBU1xyXG4gICAgY29uc3QgW3VwbG9hZGVkSW1hZ2VzLCBzZXRVcGxvYWRlZEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy9NdXRhdGlvblxyXG4gICAgY29uc3QgW251ZXZvUHJvZHVjdG9dID0gdXNlTXV0YXRpb24oTlVFVk9fUFJPRFVDVE8sIHtcclxuICAgICAgICB1cGRhdGUoY2FjaGUse2RhdGE6e251ZXZvUHJvZHVjdG99fSl7XHJcbiAgICAgICAgICAgIC8vT0J0ZW5lciBvYmpldG8gZGUgY2FjaGVcclxuICAgICAgICAgICAgY29uc3Qge29idGVuZXJQcm9kdWN0b3N9ID0gY2FjaGUucmVhZFF1ZXJ5KHtxdWVyeTogT0JURU5FUl9QUk9EVUNUT1N9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPYnRlbmVyIHByb2R1Y3RvcyBkZXNkZSB1cGRhdGVcIiwgb2J0ZW5lclByb2R1Y3Rvcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9SZWVzY3JpYmlyIGNhY2hlXHJcbiAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnkgOiBPQlRFTkVSX1BST0RVQ1RPUyxcclxuICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2J0ZW5lclByb2R1Y3RvcyA6IFsuLi5vYnRlbmVyUHJvZHVjdG9zICwgbnVldm9Qcm9kdWN0b11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL0Zvcm11bGFyaW8gcGFyYSBudWV2b3MgcHJvZHVjdG9zXHJcbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6e1xyXG4gICAgICAgICAgICBub21icmUgOiAnJyxcclxuICAgICAgICAgICAgZXhpc3RlbmNpYTogJycsXHJcbiAgICAgICAgICAgIHByZWNpbyA6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hIDogWXVwLm9iamVjdCh7XHJcbiAgICAgICAgICAgIG5vbWJyZSA6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIG5vbWJyZSBkZWwgcHJvZHVjdG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgZXhpc3RlbmNpYSA6IFl1cC5udW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdBZ3JlZ2EgbGEgY2FudGlkYWQgZGlzcG9uaWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zaXRpdmUoJ05vIHNlIGFjZXB0YW4gbsO6bWVyb3MgbmVnYXRpdm9zJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnRlZ2VyKCdMYSBleGlzdGVuY2lhIGRlYmVuIHNlciBlbnRlcm9zJyksXHJcbiAgICAgICAgICAgIHByZWNpbyA6IFl1cC5udW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHByZWNpbyBlcyBvYmxpZ2F0b3JpbycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3NpdGl2ZSgnIExvcyBuw7ptZXJvcyBkZWJlbiBzZXIgcG9zaXRpdm9zJylcclxuICAgICAgICB9KSxcclxuICAgICAgICBvblN1Ym1pdCA6IGFzeW5jIHZhbG9yZXMgPT57XHJcbiAgICAgICAgICAgICBjb25zdCB7bm9tYnJlLCBleGlzdGVuY2lhLCBwcmVjaW99ID0gdmFsb3JlcztcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgaWYod2luZG93ICE9PSB1bmRlZmluZWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vVVBMT0FEIEZJTEUgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2lnblMzKHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGZvcm1hdEZpbGVuYW1lKHMzU3RhdGUuZmlsZS5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXR5cGU6IHMzU3RhdGUuZmlsZS50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzaWduZWRSZXF1ZXN0LCB1cmwgfSA9IHJlc3BvbnNlLmRhdGEuc2lnblMzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzVXBsb2FkID0gYXdhaXQgdXBsb2FkVG9TMyhzM1N0YXRlLmZpbGUsIHNpZ25lZFJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTUFVFU1RBIERFIFMzXCIsIHJlc1VwbG9hZCwgXCJVUkxcIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgIC8vRU5EIFVQTE9BRCBGSUxFIFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IGFkZE1lc3NhZ2UoYFNlIGFncmVnw7MgZWwgcHJvZHVjdG8gJHtub21icmV9YCk7XHJcbiAgICAgICAgICAgICAgIC8vIC8vIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBhZGRNZXNzYWdlKGBTZSBhZ3JlZ8OzIGVsIHByb2R1Y3RvICR7bm9tYnJlfWApO1xyXG4gICAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcIk1lbnNhamUgZGVzZGUgb25TdWJtaXRcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgIC8vIC8vIGlmKG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvL01FTlNBSkUgREUgTlVFVk8gUFJPRFVDVE8gQUdSRUdBRE9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2R1Y3RvID0gYXdhaXQgbnVldm9Qcm9kdWN0byh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFyaWFibGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpbnB1dCA6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGV4aXN0ZW5jaWEsIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJlY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0byBkZXNkZSBudWV2byBQcm9kdWN0b1wiLCBwcm9kdWN0byk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAnQ3JlYWRvJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAnU2UgY3Jlw7MgZWwgcHJvZHVjdG8gY29ycmVjdGFtZW50ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICkudGhlbihhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBhd2FpdCByb3V0ZXIucHVzaCgnL3Byb2R1Y3RvcycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9ICBcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy9FVkVOVE9TIFBBUkEgRUwgVVBMT0FEIERFIExPUyBBUkNISVZPU1xyXG4gICAgICAgIC8vRVNUQURPIERFIExBIExJU1RBIERFIElNQUdFTkVTXHJcbiAgICAgICAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgICAgIC8vUkVGRVJFTkNJQVxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnYmctYmxhY2stODAwJylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRyYWdlYWRvIGVuY2ltYVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyB3cmFwcGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmctYmxhY2stODAwJylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRlamFcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyB3cmFwcGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImJnLWJsYWNrLTgwMFwiKVxyXG4gICAgICAgIHNldENsYXNzU3RhdGVCRyh0cnVlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRlamFcIik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gd3JhcHBlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWJsYWNrLTgwMCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIpXHJcbiAgICAgICAgbGV0IG5ld0ZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcclxuICAgICAgICBzZXRTM1N0YXRlKHsuLi5zM1N0YXRlLCBmaWxlIDogbmV3RmlsZSwgbmFtZSA6IG5ld0ZpbGUubmFtZX0pO1xyXG5cclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImZpbGVcIiwgbmV3RmlsZSk7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaXN0ID0gWy4uLmZpbGVMaXN0LCBuZXdGaWxlXTtcclxuICAgICAgICAgICAgc2V0RmlsZUxpc3QodXBkYXRlZExpc3QpO1xyXG4gICAgICAgICAgICAvLyBvbkZpbGVDaGFuZ2UodXBkYXRlZExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDbGFzc1N0YXRlQkcoZmFsc2UpO1xyXG4gICAgICAgIHNldFVwbG9hZGVkSW1hZ2VzKFsuLi51cGxvYWRlZEltYWdlcywge25hbWUgOiBuZXdGaWxlLm5hbWV9XSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25GaWxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZSBkZWpvIGFjYVwiKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgc2V0UzNTdGF0ZSh7Li4uczNTdGF0ZSwgZmlsZSA6IG5ld0ZpbGUsIG5hbWUgOiBuZXdGaWxlLm5hbWV9KTtcclxuICAgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZShcImZpbGVcIiwgbmV3RmlsZSk7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaXN0ID0gWy4uLmZpbGVMaXN0LCBuZXdGaWxlXTtcclxuICAgICAgICAgICAgc2V0RmlsZUxpc3QodXBkYXRlZExpc3QpO1xyXG4gICAgICAgICAgICAvLyBvbkZpbGVDaGFuZ2UodXBkYXRlZExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lID0gXCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktODAwIGZvbnQtbGlnaHQgXCI+Q3JlYXIgbnVldm8gcHJvZHVjdG88L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWF4LXctbGcnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbWQgcHgtOCBwdC02IHBiLTggbWItNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VudGVyPXsoZSk9PntlLnByZXZlbnREZWZhdWx0KCk7ZS5zdG9wUHJvcGFnYXRpb24oKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZz17KGUpPT57ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcFByb3BhZ2F0aW9uKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKTtlLnN0b3BQcm9wYWdhdGlvbigpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKTtlLnN0b3BQcm9wYWdhdGlvbigpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMicgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmEgcmV2aXNhbmRvIGVsIGNhbWJpbyBxdWUgc2UgaGFnYSB5IGxvIGNvbG9jYSBlbiBlbCBlc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmb3JtaWsudmFsdWVzLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5ub21icmUgJiYgZm9ybWlrLmVycm9ycy5ub21icmUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLXJlZC0xMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7Zm9ybWlrLmVycm9ycy5ub21icmV9PC9wPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yJyBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbnRpZGFkIERpc3BvbmlibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhpc3RlbmNpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhbnRpZGFkIERpc3BvbmlibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ZhIHJldmlzYW5kbyBlbCBjYW1iaW8gcXVlIHNlIGhhZ2EgeSBsbyBjb2xvY2EgZW4gZWwgZXN0YWRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Zm9ybWlrLnZhbHVlcy5leGlzdGVuY2lhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmV4aXN0ZW5jaWEgJiYgZm9ybWlrLmVycm9ycy5leGlzdGVuY2lhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1yZWQtMTAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2Zvcm1pay5lcnJvcnMuZXhpc3RlbmNpYX08L3A+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTInIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJlY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByZWNpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZWNpbyBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmEgcmV2aXNhbmRvIGVsIGNhbWJpbyBxdWUgc2UgaGFnYSB5IGxvIGNvbG9jYSBlbiBlbCBlc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmb3JtaWsudmFsdWVzLnByZWNpb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5wcmVjaW8gJiYgZm9ybWlrLmVycm9ycy5wcmVjaW8gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLXJlZC0xMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7Zm9ybWlrLmVycm9ycy5wcmVjaW99PC9wPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsXCIgb25DaGFuZ2U9e29uRmlsZURyb3B9IHJlZj17d3JhcHBlclJlZn0gb25EcmFnRW50ZXI9eyhlKT0+aGFuZGxlRHJhZ0VudGVyKGUpfSBvbkRyYWdPdmVyPXsoZSk9PmhhbmRsZURyYWdPdmVyKGUpfSBvbkRyYWdMZWF2ZT17KGUpPT5oYW5kbGVEcmFnTGVhdmUoZSl9IG9uRHJvcD17KGUpPT5oYW5kbGVEcm9wKGUpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHJvcHpvbmUtZmlsZVwiIGNsYXNzTmFtZT17Y2xhc3NTdGF0ZUJHID8gXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC02NCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGJvcmRlci1kYXNoZWQgY3Vyc29yLXBvaW50ZXIgZGFyazpob3ZlcjpiZy1icmF5LTgwMCBkYXJrOmJnLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6aG92ZXI6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDAgYmctZ3JheS04MDBcIiA6IFwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtNjQgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBib3JkZXItZGFzaGVkIGN1cnNvci1wb2ludGVyIGRhcms6aG92ZXI6YmctYnJheS04MDAgZGFyazpiZy1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmhvdmVyOmJvcmRlci1ncmF5LTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LTUgcGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1iLTMgdy0xMCBoLTEwIHRleHQtZ3JheS00MDBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNyAxNmE0IDQgMCAwMS0uODgtNy45MDNBNSA1IDAgMTExNS45IDZMMTYgNmE1IDUgMCAwMTEgOS45TTE1IDEzbC0zLTNtMCAwbC0zIDNtMy0zdjEyXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj48c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q2xpY2sgdG8gdXBsb2FkPC9zcGFuPiBvciBkcmFnIGFuZCBkcm9wPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+U1ZHLCBQTkcsIEpQRyBvciBHSUYgKE1BWC4gODAweDQwMHB4KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJkcm9wem9uZS1maWxlXCIgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJoaWRkZW5cIiBvbkNoYW5nZT17b25GaWxlRHJvcH0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktODAwIHctZnVsbCBtdC01IHAtMiB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmb250LWJvbGQgaG92ZXI6YmctZ3JheS05MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFncmVnYXIgUHJvZHVjdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBsb2FkZWRJbWFnZXMubWFwKChpbWFnZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVldm9Qcm9kdWN0byJdLCJzb3VyY2VSb290IjoiIn0=