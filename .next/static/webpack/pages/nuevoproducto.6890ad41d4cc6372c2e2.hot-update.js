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
      signS3 = _useMutation2[0]; //Mutation


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
                    filetype: sfile.type
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
      lineNumber: 218,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, "Crear nuevo producto"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
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
      lineNumber: 222,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
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
      lineNumber: 234,
      columnNumber: 33
    }
  })), formik.touched.nombre && formik.errors.nombre ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 35
    }
  }, " ", formik.errors.nombre)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
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
      lineNumber: 257,
      columnNumber: 33
    }
  })), formik.touched.existencia && formik.errors.existencia ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 35
    }
  }, " ", formik.errors.existencia)) : null, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 25
    }
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "nombre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
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
      lineNumber: 280,
      columnNumber: 33
    }
  })), formik.touched.precio && formik.errors.precio ? __jsx("div", {
    className: "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 35
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
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
      lineNumber: 300,
      columnNumber: 25
    }
  }, __jsx("label", {
    htmlFor: "dropzone-file",
    className: classStateBG ? "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-gray-800" : "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center items-center pt-5 pb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
      lineNumber: 304,
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
      lineNumber: 304,
      columnNumber: 191
    }
  })), __jsx("p", {
    className: "mb-2 text-sm text-gray-500 dark:text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "font-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 98
    }
  }, "Click to upload"), " or drag and drop"), __jsx("p", {
    className: "text-xs text-gray-500 dark:text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
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
      lineNumber: 308,
      columnNumber: 33
    }
  }))), __jsx("input", {
    type: "submit",
    className: "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900",
    value: "Agregar Producto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbnVldm9wcm9kdWN0by5qcyJdLCJuYW1lcyI6WyJOVUVWT19QUk9EVUNUTyIsImdxbCIsIk9CVEVORVJfUFJPRFVDVE9TIiwiUzNVUExPQUQiLCJOdWV2b1Byb2R1Y3RvIiwidXNlQWRkTWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImNsYXNzU3RhdGVCRyIsInNldENsYXNzU3RhdGVCRyIsInVzZVMzVXBsb2FkIiwiczNTdGF0ZSIsInNldFMzU3RhdGUiLCJmb3JtYXRGaWxlbmFtZSIsInVwbG9hZFRvUzMiLCJ1c2VNdXRhdGlvbiIsInNpZ25TMyIsInVwZGF0ZSIsImNhY2hlIiwibnVldm9Qcm9kdWN0byIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIm9idGVuZXJQcm9kdWN0b3MiLCJjb25zb2xlIiwibG9nIiwid3JpdGVRdWVyeSIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJub21icmUiLCJleGlzdGVuY2lhIiwicHJlY2lvIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwicG9zaXRpdmUiLCJpbnRlZ2VyIiwib25TdWJtaXQiLCJ2YWxvcmVzIiwid2luZG93IiwidW5kZWZpbmVkIiwidmFyaWFibGVzIiwiZmlsZW5hbWUiLCJmaWxlIiwibmFtZSIsImZpbGV0eXBlIiwic2ZpbGUiLCJ0eXBlIiwicmVzcG9uc2UiLCJzaWduZWRSZXF1ZXN0IiwidXJsIiwicmVzVXBsb2FkIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsIndyYXBwZXJSZWYiLCJ1c2VSZWYiLCJoYW5kbGVEcmFnRW50ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcm9wIiwiZGF0YVRyYW5zZmVyIiwibmV3RmlsZSIsImZpbGVzIiwic2V0RmllbGRWYWx1ZSIsInVwZGF0ZWRMaXN0Iiwib25GaWxlRHJvcCIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ2YWx1ZXMiLCJ0b3VjaGVkIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDJEQUFILG1CQUFwQjtBQVVBLElBQU1DLGlCQUFpQixHQUFHRCwyREFBSCxvQkFBdkI7QUFVQSxJQUFNRSxRQUFRLEdBQUdGLDJEQUFILG9CQUFkOztBQVFBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUd4QjtBQUh3Qix1QkFJREMscUVBQWEsRUFKWjtBQUFBLE1BSWhCQyxVQUpnQixrQkFJaEJBLFVBSmdCLEVBS3hCOzs7QUFMd0Isa0JBTWdCQyxzREFBUSxDQUFDLEtBQUQsQ0FOeEI7QUFBQSxNQU1qQkMsWUFOaUI7QUFBQSxNQU1IQyxlQU5HLGlCQVF4Qjs7O0FBUndCLHFCQVNtQ0MsdUVBQVcsRUFUOUM7QUFBQSxNQVNoQkMsT0FUZ0IsZ0JBU2hCQSxPQVRnQjtBQUFBLE1BU1BDLFVBVE8sZ0JBU1BBLFVBVE87QUFBQSxNQVNLQyxjQVRMLGdCQVNLQSxjQVRMO0FBQUEsTUFTcUJDLFVBVHJCLGdCQVNxQkEsVUFUckIsRUFVcEI7OztBQVZvQixxQkFXSEMsbUVBQVcsQ0FBQ1osUUFBRCxDQVhSO0FBQUE7QUFBQSxNQVdiYSxNQVhhLHFCQWN4Qjs7O0FBZHdCLHNCQWVBRCxtRUFBVyxDQUFDZixjQUFELEVBQWlCO0FBQ2hEaUIsVUFEZ0Qsa0JBQ3pDQyxLQUR5QyxRQUNaO0FBQUEsVUFBaEJDLGFBQWdCLFFBQXRCQyxJQUFzQixDQUFoQkQsYUFB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O0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxhQUFTLEVBQUMsOEVBRmQ7QUFHSSxTQUFLLEVBQUMsa0JBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGSixDQURKLENBREosQ0FGUixDQURGO0FBMEdELENBM1JEOztHQUFNcEUsYTtVQUlxQkMsNkQsRUFLb0NLLCtELEVBRXRDSywyRCxFQUlHQSwyRCxFQWlCVGEsZ0Q7OztLQWhDYnhCLGE7QUE2UlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL251ZXZvcHJvZHVjdG8uNjg5MGFkNDFkNGNjNjM3MmMyZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHtncWwsIHVzZU11dGF0aW9ufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VBZGRNZXNzYWdlLCB1c2VNZXNzYWdlcyB9IGZyb20gJy4uL2dyYXBocWwvaG9va3MnO1xyXG5pbXBvcnQgeyB1c2VTM1VwbG9hZCB9IGZyb20gJy4uL2hvb2tzL3VzZVMzVXBsb2FkJztcclxuXHJcbmNvbnN0IE5VRVZPX1BST0RVQ1RPID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gbnVldm9Qcm9kdWN0bygkaW5wdXQgOiBQcm9kdWN0b0lucHV0KXtcclxuICAgICAgICBudWV2b1Byb2R1Y3RvKGlucHV0IDogJGlucHV0KXtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgIGV4aXN0ZW5jaWFcclxuICAgICAgICAgICAgcHJlY2lvXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbmNvbnN0IE9CVEVORVJfUFJPRFVDVE9TID0gZ3FsYFxyXG4gICAgcXVlcnkgb2J0ZW5lclByb2R1Y3Rvc3tcclxuICAgICAgICBvYnRlbmVyUHJvZHVjdG9ze1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgcHJlY2lvXHJcbiAgICAgICAgICAgIGV4aXN0ZW5jaWFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgUzNVUExPQUQgPSBncWxgXHJcbiAgbXV0YXRpb24oJGZpbGVuYW1lOiBTdHJpbmchLCAkZmlsZXR5cGU6IFN0cmluZyEpIHtcclxuICAgIHNpZ25TMyhmaWxlbmFtZTogJGZpbGVuYW1lLCBmaWxldHlwZTogJGZpbGV0eXBlKSB7XHJcbiAgICAgIHVybFxyXG4gICAgICBzaWduZWRSZXF1ZXN0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBOdWV2b1Byb2R1Y3RvID0gKCkgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgLy9DVVNUT01IT09LIFBBUkEgTUVOU0FKRSBERSBOVUVWTyBQUk9EVUNUTyBBR1JFR0FET1xyXG4gICAgY29uc3QgeyBhZGRNZXNzYWdlIH0gPSB1c2VBZGRNZXNzYWdlKCk7XHJcbiAgICAvL0NBTUJJTyBERSBTT01CUkEgUEFSQSBEUkFHIEFORCBEUk9QXHJcbiAgICBjb25zdCBbY2xhc3NTdGF0ZUJHLCBzZXRDbGFzc1N0YXRlQkddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICAvL0NVU1RPTSBIT09LIFBBUkEgUzMgVVBMT0FEXHJcbiAgICBjb25zdCB7IHMzU3RhdGUsIHNldFMzU3RhdGUsIGZvcm1hdEZpbGVuYW1lLCB1cGxvYWRUb1MzfSA9IHVzZVMzVXBsb2FkKCk7XHJcbiAgICAgICAgLy9tdXRhdGlvblxyXG4gICAgICAgIGNvbnN0IFtzaWduUzNdID0gdXNlTXV0YXRpb24oUzNVUExPQUQpO1xyXG5cclxuXHJcbiAgICAvL011dGF0aW9uXHJcbiAgICBjb25zdCBbbnVldm9Qcm9kdWN0b10gPSB1c2VNdXRhdGlvbihOVUVWT19QUk9EVUNUTywge1xyXG4gICAgICAgIHVwZGF0ZShjYWNoZSx7ZGF0YTp7bnVldm9Qcm9kdWN0b319KXtcclxuICAgICAgICAgICAgLy9PQnRlbmVyIG9iamV0byBkZSBjYWNoZVxyXG4gICAgICAgICAgICBjb25zdCB7b2J0ZW5lclByb2R1Y3Rvc30gPSBjYWNoZS5yZWFkUXVlcnkoe3F1ZXJ5OiBPQlRFTkVSX1BST0RVQ1RPU30pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9idGVuZXIgcHJvZHVjdG9zIGRlc2RlIHVwZGF0ZVwiLCBvYnRlbmVyUHJvZHVjdG9zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL1JlZXNjcmliaXIgY2FjaGVcclxuICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeSA6IE9CVEVORVJfUFJPRFVDVE9TLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA6IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnRlbmVyUHJvZHVjdG9zIDogWy4uLm9idGVuZXJQcm9kdWN0b3MgLCBudWV2b1Byb2R1Y3RvXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vRm9ybXVsYXJpbyBwYXJhIG51ZXZvcyBwcm9kdWN0b3NcclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczp7XHJcbiAgICAgICAgICAgIG5vbWJyZSA6ICcnLFxyXG4gICAgICAgICAgICBleGlzdGVuY2lhOiAnJyxcclxuICAgICAgICAgICAgcHJlY2lvIDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWEgOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgbm9tYnJlIDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgbm9tYnJlIGRlbCBwcm9kdWN0byBlcyBvYmxpZ2F0b3JpbycpLFxyXG4gICAgICAgICAgICBleGlzdGVuY2lhIDogWXVwLm51bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0FncmVnYSBsYSBjYW50aWRhZCBkaXNwb25pYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3NpdGl2ZSgnTm8gc2UgYWNlcHRhbiBuw7ptZXJvcyBuZWdhdGl2b3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmludGVnZXIoJ0xhIGV4aXN0ZW5jaWEgZGViZW4gc2VyIGVudGVyb3MnKSxcclxuICAgICAgICAgICAgcHJlY2lvIDogWXVwLm51bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgcHJlY2lvIGVzIG9ibGlnYXRvcmlvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc2l0aXZlKCcgTG9zIG7Dum1lcm9zIGRlYmVuIHNlciBwb3NpdGl2b3MnKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uU3VibWl0IDogYXN5bmMgdmFsb3JlcyA9PntcclxuICAgICAgICAgICAgIGNvbnN0IHtub21icmUsIGV4aXN0ZW5jaWEsIHByZWNpb30gPSB2YWxvcmVzO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBpZih3aW5kb3cgIT09IHVuZGVmaW5lZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9VUExPQUQgRklMRSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWduUzMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogZm9ybWF0RmlsZW5hbWUoczNTdGF0ZS5maWxlLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxldHlwZTogc2ZpbGUudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2lnbmVkUmVxdWVzdCwgdXJsIH0gPSByZXNwb25zZS5kYXRhLnNpZ25TMztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc1VwbG9hZCA9IGF3YWl0IHVwbG9hZFRvUzMoczNTdGF0ZS5maWxlLCBzaWduZWRSZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BVRVNUQSBERSBTM1wiLCByZXNVcGxvYWQsIFwiVVJMXCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICAvL0VORCBVUExPQUQgRklMRSBcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBhZGRNZXNzYWdlKGBTZSBhZ3JlZ8OzIGVsIHByb2R1Y3RvICR7bm9tYnJlfWApO1xyXG4gICAgICAgICAgICAgICAvLyAvLyBjb25zdCBtZXNzYWdlID0gYXdhaXQgYWRkTWVzc2FnZShgU2UgYWdyZWfDsyBlbCBwcm9kdWN0byAke25vbWJyZX1gKTtcclxuICAgICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJNZW5zYWplIGRlc2RlIG9uU3VibWl0XCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAvLyAvLyBpZihtZXNzYWdlLmlkICE9PSB1bmRlZmluZWQpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy9NRU5TQUpFIERFIE5VRVZPIFBST0RVQ1RPIEFHUkVHQURPXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwcm9kdWN0byA9IGF3YWl0IG51ZXZvUHJvZHVjdG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhcmlhYmxlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaW5wdXQgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBleGlzdGVuY2lhLCBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByZWNpb1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdG8gZGVzZGUgbnVldm8gUHJvZHVjdG9cIiwgcHJvZHVjdG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ0NyZWFkbycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ1NlIGNyZcOzIGVsIHByb2R1Y3RvIGNvcnJlY3RhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICApLnRoZW4oYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goJy9wcm9kdWN0b3MnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSAgXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vRVZFTlRPUyBQQVJBIEVMIFVQTE9BRCBERSBMT1MgQVJDSElWT1NcclxuICAgICAgICAvL0VTVEFETyBERSBMQSBMSVNUQSBERSBJTUFHRU5FU1xyXG4gICAgICAgIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgICAgICAvL1JFRkVSRU5DSUFcclxuICAgICAgICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2JnLWJsYWNrLTgwMCcpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJEcmFnZWFkbyBlbmNpbWFcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gd3JhcHBlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWJsYWNrLTgwMCcpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJEZWphXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgLy8gd3JhcHBlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJiZy1ibGFjay04MDBcIilcclxuICAgICAgICBzZXRDbGFzc1N0YXRlQkcodHJ1ZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJEZWphXCIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vIHdyYXBwZXJSZWYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ibGFjay04MDAnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YVRyYW5zZmVyKVxyXG4gICAgICAgIGxldCBuZXdGaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XHJcbiAgICAgICAgc2V0UzNTdGF0ZSh7Li4uczNTdGF0ZSwgZmlsZSA6IG5ld0ZpbGUsIG5hbWUgOiBuZXdGaWxlLm5hbWV9KTtcclxuXHJcbiAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJmaWxlXCIsIG5ld0ZpbGUpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlzdCA9IFsuLi5maWxlTGlzdCwgbmV3RmlsZV07XHJcbiAgICAgICAgICAgIHNldEZpbGVMaXN0KHVwZGF0ZWRMaXN0KTtcclxuICAgICAgICAgICAgLy8gb25GaWxlQ2hhbmdlKHVwZGF0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2xhc3NTdGF0ZUJHKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25GaWxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZSBkZWpvIGFjYVwiKTtcclxuICAgICAgICBjb25zdCBuZXdGaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKFwiZmlsZVwiLCBuZXdGaWxlKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpc3QgPSBbLi4uZmlsZUxpc3QsIG5ld0ZpbGVdO1xyXG4gICAgICAgICAgICBzZXRGaWxlTGlzdCh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgICAgIC8vIG9uRmlsZUNoYW5nZSh1cGRhdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWUgPSBcInRleHQtMnhsIHRleHQtZ3JheS04MDAgZm9udC1saWdodCBcIj5DcmVhciBudWV2byBwcm9kdWN0bzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LTUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1sZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi00J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRW50ZXI9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKTtlLnN0b3BQcm9wYWdhdGlvbigpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnPXsoZSk9PntlLnByZXZlbnREZWZhdWx0KCk7ZS5zdG9wUHJvcGFnYXRpb24oKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUpPT57ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcFByb3BhZ2F0aW9uKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpPT57ZS5wcmV2ZW50RGVmYXVsdCgpO2Uuc3RvcFByb3BhZ2F0aW9uKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yJyBodG1sRm9yPVwibm9tYnJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYSByZXZpc2FuZG8gZWwgY2FtYmlvIHF1ZSBzZSBoYWdhIHkgbG8gY29sb2NhIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2Zvcm1pay52YWx1ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm5vbWJyZSAmJiBmb3JtaWsuZXJyb3JzLm5vbWJyZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctcmVkLTEwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtmb3JtaWsuZXJyb3JzLm5vbWJyZX08L3A+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTInIGh0bWxGb3I9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FudGlkYWQgRGlzcG9uaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGlzdGVuY2lhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FudGlkYWQgRGlzcG9uaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVmEgcmV2aXNhbmRvIGVsIGNhbWJpbyBxdWUgc2UgaGFnYSB5IGxvIGNvbG9jYSBlbiBlbCBlc3RhZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmb3JtaWsudmFsdWVzLmV4aXN0ZW5jaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZXhpc3RlbmNpYSAmJiBmb3JtaWsuZXJyb3JzLmV4aXN0ZW5jaWEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLXJlZC0xMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7Zm9ybWlrLmVycm9ycy5leGlzdGVuY2lhfTwvcD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMicgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJlY2lvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJlY2lvIFByb2R1Y3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WYSByZXZpc2FuZG8gZWwgY2FtYmlvIHF1ZSBzZSBoYWdhIHkgbG8gY29sb2NhIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2Zvcm1pay52YWx1ZXMucHJlY2lvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLnByZWNpbyAmJiBmb3JtaWsuZXJyb3JzLnByZWNpbyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctcmVkLTEwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtmb3JtaWsuZXJyb3JzLnByZWNpb308L3A+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIiBvbkNoYW5nZT17b25GaWxlRHJvcH0gcmVmPXt3cmFwcGVyUmVmfSBvbkRyYWdFbnRlcj17KGUpPT5oYW5kbGVEcmFnRW50ZXIoZSl9IG9uRHJhZ092ZXI9eyhlKT0+aGFuZGxlRHJhZ092ZXIoZSl9IG9uRHJhZ0xlYXZlPXsoZSk9PmhhbmRsZURyYWdMZWF2ZShlKX0gb25Ecm9wPXsoZSk9PmhhbmRsZURyb3AoZSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkcm9wem9uZS1maWxlXCIgY2xhc3NOYW1lPXtjbGFzc1N0YXRlQkcgPyBcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLTY0IGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgYm9yZGVyLWRhc2hlZCBjdXJzb3ItcG9pbnRlciBkYXJrOmhvdmVyOmJnLWJyYXktODAwIGRhcms6YmctZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpob3Zlcjpib3JkZXItZ3JheS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBiZy1ncmF5LTgwMFwiIDogXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC02NCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGJvcmRlci1kYXNoZWQgY3Vyc29yLXBvaW50ZXIgZGFyazpob3ZlcjpiZy1icmF5LTgwMCBkYXJrOmJnLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6aG92ZXI6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6YmctZ3JheS02MDBcIn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtNSBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWItMyB3LTEwIGgtMTAgdGV4dC1ncmF5LTQwMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk03IDE2YTQgNCAwIDAxLS44OC03LjkwM0E1IDUgMCAxMTE1LjkgNkwxNiA2YTUgNSAwIDAxMSA5LjlNMTUgMTNsLTMtM20wIDBsLTMgM20zLTN2MTJcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DbGljayB0byB1cGxvYWQ8L3NwYW4+IG9yIGRyYWcgYW5kIGRyb3A8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5TVkcsIFBORywgSlBHIG9yIEdJRiAoTUFYLiA4MDB4NDAwcHgpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRyb3B6b25lLWZpbGVcIiB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImhpZGRlblwiIG9uQ2hhbmdlPXtvbkZpbGVEcm9wfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS04MDAgdy1mdWxsIG10LTUgcC0yIHRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTkwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQWdyZWdhciBQcm9kdWN0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdWV2b1Byb2R1Y3RvIl0sInNvdXJjZVJvb3QiOiIifQ==