module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./auth/auth.js":
/*!**********************!*\
  !*** ./auth/auth.js ***!
  \**********************/
/*! exports provided: getAccessToken, getUser, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

const ACCESS_TOKEN_KEY = 'token';
const API_URL = 'http://localhost:9000';
const ISSERVER = true;
function getAccessToken() {
  if (!ISSERVER) {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
}
function getUser() {
  if (!ISSERVER) {
    const token = getAccessToken();
    console.log("desde el getUser", token);

    if (!token) {
      return null;
    }

    return getUserFromToken(token);
  }
}
async function login(userId, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      password
    })
  });

  if (response.ok) {
    const {
      token
    } = await response.json();
    await localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return {
      id: userId
    };
  }

  return null;
}
function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function getUserFromToken(token) {
  if (!ISSERVER) {
    console.log("desde el getUserFromToken", token);
    const jwtPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
    console.log(jwtPayload.sub);
    return {
      usuario: {
        id: jwtPayload.sub
      }
    };
  }
}

/***/ }),

/***/ "./config/apollo.js":
/*!**************************!*\
  !*** ./config/apollo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/subscriptions */ "./node_modules/@apollo/client/link/subscriptions/subscriptions.cjs");
/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-ws */ "graphql-ws");
/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_ws__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth */ "./auth/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//http link permite conectarse con el servidor de apollo








const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
  uri: 'http://localhost:9000/graphql'
});
const wsLink = false ? undefined : null;

function isSubscription({
  query
}) {
  const definition = Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__["getMainDefinition"])(query);
  return definition.kind === graphql__WEBPACK_IMPORTED_MODULE_5__["Kind"].OPERATION_DEFINITION && definition.operation === graphql__WEBPACK_IMPORTED_MODULE_5__["OperationTypeNode"].SUBSCRIPTION;
}

const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__["setContext"])((_, {
  headers
}) => {
  //Leer el storage almacenado
  const token = localStorage.getItem('token');
  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? `Bearer ${token}` : ''
    })
  };
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
  сonnectToDevTools: true,
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"](),
  link: false ? undefined : null
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./context/pedidos/PedidoContext.js":
/*!******************************************!*\
  !*** ./context/pedidos/PedidoContext.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PedidoContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (PedidoContext);

/***/ }),

/***/ "./context/pedidos/PedidoReducer.js":
/*!******************************************!*\
  !*** ./context/pedidos/PedidoReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const PedidoReducer = (state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SELECCIONAR_CLIENTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cliente: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SELECCIONAR_PRODUCTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ACTUALIZAR_TOTAL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.productos.reduce((nuevoTotal, articulo) => nuevoTotal += articulo.precio * articulo.cantidad, 0)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PedidoReducer);

/***/ }),

/***/ "./context/pedidos/PedidoState.js":
/*!****************************************!*\
  !*** ./context/pedidos/PedidoState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PedidoContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PedidoContext */ "./context/pedidos/PedidoContext.js");
/* harmony import */ var _PedidoReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PedidoReducer */ "./context/pedidos/PedidoReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
var _jsxFileName = "D:\\Programming\\Trabajo\\Javascript\\MGRN\\EcommercePointi\\client\\context\\pedidos\\PedidoState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PedidoState = ({
  children
}) => {
  //State de Pedidos
  const initialState = {
    cliente: {},
    productos: [],
    total: 0
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_PedidoReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);

  const agregarCliente = cliente => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SELECCIONAR_CLIENTE"],
      payload: cliente
    });
  };

  const agregarProductos = productosSeleccionados => {
    console.log("productos seleccionados del state");
    console.log(state.productos);
    let nuevoState;

    if (state.productos.length > 0) {
      //Tomar del segundo arreglo, una copia para asignarlo al primero
      nuevoState = productosSeleccionados.map(producto => {
        const nuevoObjeto = state.productos.find(productoState => productoState.id === producto.id);
        return _objectSpread(_objectSpread({}, producto), nuevoObjeto);
      });
    } else {
      nuevoState = productosSeleccionados;
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SELECCIONAR_PRODUCTO"],
      payload: nuevoState
    });
  };

  const cantidadProductos = nuevoProducto => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CANTIDAD_PRODUCTOS"],
      payload: nuevoProducto
    });
  };

  const actualizarTotal = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["ACTUALIZAR_TOTAL"]
    });
  };

  return __jsx(_PedidoContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      cliente: state.cliente,
      productos: state.productos,
      total: state.total,
      agregarCliente,
      agregarProductos,
      cantidadProductos,
      actualizarTotal
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PedidoState);

/***/ }),

/***/ "./node_modules/@apollo/client/cache/cache.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/cache/cache.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var optimism = __webpack_require__(/*! optimism */ "optimism");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var trie = __webpack_require__(/*! @wry/trie */ "@wry/trie");
var context = __webpack_require__(/*! @wry/context */ "@wry/context");

var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = optimism.wrap(utilities.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function () { return updateResult = options.update(_this); }, optimisticId);
        return updateResult;
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = tslib.__rest(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = tslib.__rest(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    ApolloCache.prototype.updateQuery = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeQuery(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    ApolloCache.prototype.updateFragment = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeFragment(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    return ApolloCache;
}());

exports.Cache = void 0;
(function (Cache) {
})(exports.Cache || (exports.Cache = {}));

var MissingFieldError = (function () {
    function MissingFieldError(message, path, query, variables) {
        this.message = message;
        this.path = path;
        this.query = query;
        this.variables = variables;
    }
    return MissingFieldError;
}());

var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        if (id === void 0)
            id = _id;
        if (id !== void 0) {
            return "".concat(__typename, ":").concat((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false,
};
function normalizeConfig(config) {
    return utilities.compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return utilities.isReference(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (utilities.isNonNullObject(result)) {
        return isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if (utilities.isField(field) && utilities.shouldInclude(field, variables)) {
                    var key = utilities.resultKeyNameFromField(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return utilities.isNonNullObject(value) &&
        !utilities.isReference(value) &&
        !isArray(value);
}
function makeProcessedFieldsMerger() {
    return new utilities.DeepMerger;
}
var isArray = function (a) { return Array.isArray(a); };

var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
exports.EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return utilities.maybeDeepFreeze(utilities.isReference(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return utilities.isReference(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return utilities.makeReference(objOrIdOrRef);
            }
            if (utilities.isReference(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = utilities.makeReference(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return tslib.__assign({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if (utilities.isReference(older))
            older = older.__ref;
        if (utilities.isReference(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? globals.invariant(typeof dataId === "string", "store.merge expects a string ID") : globals.invariant(typeof dataId === "string", 1);
        var merged = new utilities.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = fieldNameFromStoreName(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: utilities.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || utilities.makeReference(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = fieldNameFromStoreName(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify(utilities.maybeDeepFreeze(fieldValue), tslib.__assign(tslib.__assign({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options, limit) {
        var evicted = false;
        if (options.id) {
            if (hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = tslib.__rest(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if (utilities.isReference(obj)) {
                    found_1[obj.__ref] = true;
                }
                if (utilities.isNonNullObject(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if (utilities.isNonNullObject(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());
var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? optimism.dep() : null;
        this.keyMaker = new trie.Trie(utilities.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        tslib.__extends(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new trie.Trie(utilities.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(exports.EntityStore || (exports.EntityStore = {}));
var Layer = (function (_super) {
    tslib.__extends(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!equality.equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return tslib.__assign(tslib.__assign({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return hasOwn.call(this.data, dataId) ? tslib.__assign(tslib.__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(exports.EntityStore));
var Stump = (function (_super) {
    tslib.__extends(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return equality.equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof exports.EntityStore && store.group.caching);
}

function shallowCopy(value) {
    if (utilities.isNonNullObject(value)) {
        return isArray(value)
            ? value.slice(0)
            : tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.pool = new trie.Trie(utilities.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return utilities.isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if (utilities.isNonNullObject(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if (utilities.isNonNullObject(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());
var canonicalStringify = Object.assign(function (value) {
    if (utilities.isNonNullObject(value)) {
        if (stringifyCanon === void 0) {
            resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify,
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
}

function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.config = utilities.compact(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: shouldCanonizeResults(config),
        });
        this.canon = config.canon || new ObjectCanon;
        this.executeSelectionSet = optimism.wrap(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return tslib.__assign(tslib.__assign({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(selectionSet, utilities.isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = optimism.wrap(function (options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(utilities.getQueryDefinition(query))), variables);
        var rootRef = utilities.makeReference(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: utilities.getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: canonicalStringify(variables),
                canonizeResults: canonizeResults,
                fragmentMap: utilities.createFragmentMap(utilities.getFragmentDefinitions(query)),
            },
        });
        var missing;
        if (execResult.missing) {
            missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
            if (!returnPartialData) {
                throw missing[0];
            }
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing: missing,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if (utilities.isReference(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object"),
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var objectsToMerge = [];
        var missing;
        var missingMerger = new utilities.DeepMerger();
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function handleMissing(result, resultName) {
            var _a;
            if (result.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[resultName] = result.missing, _a));
            }
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a, _b;
            if (!utilities.shouldInclude(selection, variables))
                return;
            if (utilities.isField(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = utilities.resultKeyNameFromField(selection);
                if (fieldValue === void 0) {
                    if (!utilities.addTypenameToDocument.added(selection)) {
                        missing = missingMerger.merge(missing, (_a = {},
                            _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(utilities.isReference(objectOrReference)
                                ? objectOrReference.__ref + " object"
                                : "object " + JSON.stringify(objectOrReference, null, 2)),
                            _a));
                    }
                }
                else if (isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }), resultName);
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: utilities.isReference(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }), resultName);
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
                }
            }
            else {
                var fragment = utilities.getFragmentFromSelection(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var result = utilities.mergeDeepArray(objectsToMerge);
        var finalResult = { result: result, missing: missing };
        var frozen = context.canonizeResults
            ? this.canon.admit(finalResult)
            : utilities.maybeDeepFreeze(finalResult);
        if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        var missingMerger = new utilities.DeepMerger();
        function handleMissing(childResult, i) {
            var _a;
            if (childResult.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
            }
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            if (isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: utilities.isReference(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());
function firstMissing(tree) {
    try {
        JSON.stringify(tree, function (_, value) {
            if (typeof value === "string")
                throw value;
            return value;
        });
    }
    catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if (utilities.isNonNullObject(value)) {
                __DEV__ ? globals.invariant(!utilities.isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : globals.invariant(!utilities.isReference(value), 5);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}

var cacheSlot = new context.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: optimism.dep(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}

var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
    var cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] ||
        (specifierInfoCache[cacheKey] = Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
        var extract = function (from, key) { return context.readField(key, from); };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
            var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
            if (extracted === void 0 &&
                object !== context.storeObject &&
                hasOwn.call(object, schemaKeyPath[0])) {
                extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            }
            __DEV__ ? globals.invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(object))) : globals.invariant(extracted !== void 0, 2);
            return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
    });
}
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = function (args, _a) {
        var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
        var collected = collectSpecifierPaths(specifier, function (keyPath) {
            var firstKey = keyPath[0];
            var firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && utilities.isNonEmptyArray(field.directives)) {
                    var directiveName_1 = firstKey.slice(1);
                    var d = field.directives.find(function (d) { return d.name.value === directiveName_1; });
                    var directiveArgs = d && utilities.argumentsObjectFromField(d, variables);
                    return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
                }
                return;
            }
            if (firstChar === "$") {
                var variableName = firstKey.slice(1);
                if (variables && hasOwn.call(variables, variableName)) {
                    var varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                return;
            }
            if (args) {
                return extractKeyPath(args, keyPath);
            }
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") {
            fieldName += ":" + suffix;
        }
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    var merger = new utilities.DeepMerger;
    return getSpecifierPaths(specifier).reduce(function (collected, path) {
        var _a;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            for (var i = path.length - 1; i >= 0; --i) {
                toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
            }
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function (s, i) {
            if (isArray(s)) {
                getSpecifierPaths(s).forEach(function (p) { return paths_1.push(currentPath_1.concat(p)); });
                currentPath_1.length = 0;
            }
            else {
                currentPath_1.push(s);
                if (!isArray(spec[i + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return isArray(obj)
            ? obj.map(function (child) { return reducer(child, key); })
            : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    if (utilities.isNonNullObject(value)) {
        if (isArray(value)) {
            return value.map(normalize);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), function (path) { return extractKeyPath(value, path); });
    }
    return value;
}

utilities.getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? utilities.argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = tslib.__assign({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, partialContext) {
        var _a;
        var policies = this;
        var typename = partialContext && (partialContext.typename ||
            ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = tslib.__assign(tslib.__assign({}, partialContext), { typename: typename, storeObject: storeObject, readField: partialContext && partialContext.readField || function () {
                var options = normalizeReadFieldOptions(arguments, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables,
                });
            } });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = tslib.__rest(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? globals.invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : globals.invariant(!old || old === which, 3);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = tslib.__rest(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && globals.invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? utilities.storeKeyNameFromField(fieldSpec.field, fieldSpec.variables)
                : utilities.getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === fieldNameFromStoreName(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(utilities.isReference(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getReadFunction = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: utilities.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function () {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") {
        options = {
            fieldName: fieldNameOrOptions,
            from: argc > 1 ? from : objectOrReference,
        };
    }
    else {
        options = tslib.__assign({}, fieldNameOrOptions);
        if (!hasOwn.call(options, "from")) {
            options.from = objectOrReference;
        }
    }
    if (__DEV__ && options.from === void 0) {
        __DEV__ && globals.invariant.warn("Undefined 'from' passed to readField with arguments ".concat(utilities.stringifyForDisplay(Array.from(readFieldArgs))));
    }
    if (void 0 === options.variables) {
        options.variables = variables;
    }
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (isArray(existing) || isArray(incoming)) {
            throw __DEV__ ? new globals.InvariantError("Cannot automatically merge arrays") : new globals.InvariantError(4);
        }
        if (utilities.isNonNullObject(existing) &&
            utilities.isNonNullObject(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if (utilities.isReference(existing) &&
                storeValueIsStoreObject(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if (storeValueIsStoreObject(existing) &&
                utilities.isReference(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if (storeValueIsStoreObject(existing) &&
                storeValueIsStoreObject(incoming)) {
                return tslib.__assign(tslib.__assign({}, existing), incoming);
            }
        }
        return incoming;
    };
}

function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) {
        context.flavors.set(key, flavored = (context.clientOnly === clientOnly &&
            context.deferred === deferred) ? context : tslib.__assign(tslib.__assign({}, context), { clientOnly: clientOnly, deferred: deferred }));
    }
    return flavored;
}
var StoreWriter = (function () {
    function StoreWriter(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = utilities.getOperationDefinition(query);
        var merger = makeProcessedFieldsMerger();
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(operationDefinition)), variables);
        var context = {
            store: store,
            written: Object.create(null),
            merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables: variables,
            varString: canonicalStringify(variables),
            fragmentMap: utilities.createFragmentMap(utilities.getFragmentDefinitions(query)),
            overwrite: !!overwrite,
            incomingById: new Map,
            clientOnly: false,
            deferred: false,
            flavors: new Map,
        };
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!utilities.isReference(ref)) {
            throw __DEV__ ? new globals.InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new globals.InvariantError(6);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var storeObject = _a.storeObject, mergeTree = _a.mergeTree, fieldNodeSet = _a.fieldNodeSet;
            var entityRef = utilities.makeReference(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if (utilities.isReference(applied)) {
                    return;
                }
                storeObject = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var fieldsWithSelectionSets_1 = Object.create(null);
                fieldNodeSet.forEach(function (field) {
                    if (field.selectionSet) {
                        fieldsWithSelectionSets_1[field.name.value] = true;
                    }
                });
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
                };
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var incoming = Object.create(null);
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incoming.__typename = typename;
        }
        var readField = function () {
            var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
            if (utilities.isReference(options.from)) {
                var info = context.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField(tslib.__assign(tslib.__assign({}, options), { from: info.storeObject }), context);
                    if (result_1 !== void 0) {
                        return result_1;
                    }
                }
            }
            return policies.readField(options, context);
        };
        var fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, context, typename).forEach(function (context, field) {
            var _a;
            var resultFieldKey = utilities.resultKeyNameFromField(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename: typename,
                    fieldName: field.name.value,
                    field: field,
                    variables: context.variables,
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, field.selectionSet
                    ? getContextFlavor(context, false, false)
                    : context, childTree);
                var childTypename = void 0;
                if (field.selectionSet &&
                    (utilities.isReference(incomingValue) ||
                        storeValueIsStoreObject(incomingValue))) {
                    childTypename = readField("__typename", incomingValue);
                }
                var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) {
                    childTree.info = {
                        field: field,
                        typename: typename,
                        merge: merge,
                    };
                }
                else {
                    maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                }
                incoming = context.merge(incoming, (_a = {},
                    _a[storeFieldName] = incomingValue,
                    _a));
            }
            else if (__DEV__ &&
                !context.clientOnly &&
                !context.deferred &&
                !utilities.addTypenameToDocument.added(field) &&
                !policies.getReadFunction(typename, field.name.value)) {
                __DEV__ && globals.invariant.error("Missing field '".concat(utilities.resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1000));
            }
        });
        try {
            var _b = policies.identify(result, {
                typename: typename,
                selectionSet: selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField: readField,
            }), id = _b[0], keyObject = _b[1];
            dataId = dataId || id;
            if (keyObject) {
                incoming = context.merge(incoming, keyObject);
            }
        }
        catch (e) {
            if (!dataId)
                throw e;
        }
        if ("string" === typeof dataId) {
            var dataRef = utilities.makeReference(dataId);
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0)
                return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
                return dataRef;
            }
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function (field) { return previous_1.fieldNodeSet.add(field); });
            }
            else {
                context.incomingById.set(dataId, {
                    storeObject: incoming,
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    fieldNodeSet: fieldNodeSet,
                });
            }
            return dataRef;
        }
        return incoming;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? utilities.cloneDeep(value) : value;
        }
        if (isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.flattenFields = function (selectionSet, result, context, typename) {
        if (typename === void 0) { typename = utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap); }
        var fieldMap = new Map();
        var policies = this.cache.policies;
        var limitingTrie = new trie.Trie(false);
        (function flatten(selectionSet, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet, inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited)
                return;
            visitedNode.visited = true;
            selectionSet.selections.forEach(function (selection) {
                if (!utilities.shouldInclude(selection, context.variables))
                    return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (!(clientOnly && deferred) &&
                    utilities.isNonEmptyArray(selection.directives)) {
                    selection.directives.forEach(function (dir) {
                        var name = dir.name.value;
                        if (name === "client")
                            clientOnly = true;
                        if (name === "defer") {
                            var args = utilities.argumentsObjectFromField(dir, context.variables);
                            if (!args || args.if !== false) {
                                deferred = true;
                            }
                        }
                    });
                }
                if (utilities.isField(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                }
                else {
                    var fragment = utilities.getFragmentFromSelection(selection, context.fragmentMap);
                    if (fragment &&
                        policies.fragmentMatches(fragment, typename, result, context.variables)) {
                        flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                    }
                }
            });
        })(selectionSet, context);
        return fieldMap;
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !utilities.isReference(incoming)) {
            var e_1 = (!isArray(incoming) &&
                (utilities.isReference(existing) || storeValueIsStoreObject(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [utilities.isReference(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    globals.invariant(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (isArray(i_1) ? i_1.slice(0) : tslib.__assign({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? tslib.__assign(tslib.__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if (utilities.isReference(existing))
        return;
    if (equality.equal(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!isArray(existing) &&
        !isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && globals.invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1000), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1000), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}

var InMemoryCache = (function (_super) {
    tslib.__extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = makeVar;
        _this.txCount = 0;
        _this.config = normalizeConfig(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new exports.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: shouldCanonizeResults(this.config),
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
        }));
        this.maybeBroadcastWatch = optimism.wrap(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (supportsResultCaching(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic: optimistic, rootId: rootId, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            recallCache(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                forgetCache(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        if (utilities.isReference(object))
            return object.__ref;
        try {
            return this.policies.identify(object)[0];
        }
        catch (e) {
            __DEV__ && globals.invariant.warn(e);
        }
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (hasOwn.call(options, "id")) {
                return false;
            }
            options = tslib.__assign(tslib.__assign({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function (options) {
        var _this = this;
        this.init();
        canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function (watch) { return _this.maybeBroadcastWatch.forget(watch); });
            this.watches.clear();
            forgetCache(this);
        }
        else {
            this.broadcastWatches();
        }
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                return updateResult = update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
        return updateResult;
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = utilities.addTypenameToDocument(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !equality.equal(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(ApolloCache));

exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.ApolloCache = ApolloCache;
exports.InMemoryCache = InMemoryCache;
exports.MissingFieldError = MissingFieldError;
exports.Policies = Policies;
exports.cacheSlot = cacheSlot;
exports.canonicalStringify = canonicalStringify;
exports.defaultDataIdFromObject = defaultDataIdFromObject;
exports.fieldNameFromStoreName = fieldNameFromStoreName;
exports.makeVar = makeVar;
//# sourceMappingURL=cache.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/core.cjs":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/core.cjs ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var core = __webpack_require__(/*! ../link/core */ "./node_modules/@apollo/client/link/core/core.cjs");
var http = __webpack_require__(/*! ../link/http */ "./node_modules/@apollo/client/link/http/http.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var cache = __webpack_require__(/*! ../cache */ "./node_modules/@apollo/client/cache/cache.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var errors = __webpack_require__(/*! ../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var utils = __webpack_require__(/*! ../link/utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.cjs");
var graphqlTag = __webpack_require__(/*! graphql-tag */ "graphql-tag");

var version = '3.6.9';

exports.NetworkStatus = void 0;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(exports.NetworkStatus || (exports.NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}

var assign = Object.assign, hasOwnProperty$1 = Object.hasOwnProperty;
var ObservableQuery = (function (_super) {
    tslib.__extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) {
                observer.error && observer.error(last.error);
            }
            else if (last && last.result) {
                observer.next && observer.next(last.result);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.queryInfo = queryInfo;
        _this.queryManager = queryManager;
        _this.isTornDown = false;
        var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
        var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? (fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy) : _f;
        _this.options = tslib.__assign(tslib.__assign({}, options), { initialFetchPolicy: initialFetchPolicy, fetchPolicy: fetchPolicy });
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = utilities.getOperationDefinition(_this.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "query", {
        get: function () {
            return this.queryManager.transform(this.options.query).document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            exports.NetworkStatus.ready;
        var result = tslib.__assign(tslib.__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        if (fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache' ||
            fetchPolicy === 'standby' ||
            this.queryManager.transform(this.options.query).hasForcedResolvers) ;
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
                result.data = diff.result;
            }
            if (equality.equal(result.data, {})) {
                result.data = void 0;
            }
            if (diff.complete) {
                delete result.partial;
                if (diff.complete &&
                    result.networkStatus === exports.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = exports.NetworkStatus.ready;
                    result.loading = false;
                }
            }
            else {
                result.partial = true;
            }
            if (__DEV__ &&
                !diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                logMissingFieldErrors(diff.missing);
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        return !this.last || !equality.equal(this.last.result, newResult);
    };
    ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
        var last = this.last;
        if (last &&
            last[key] &&
            (!variablesMustMatch || equality.equal(last.variables, this.variables))) {
            return last[key];
        }
    };
    ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var _a;
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-and-network') {
            reobserveOptions.fetchPolicy = fetchPolicy;
        }
        else if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (__DEV__ && variables && hasOwnProperty$1.call(variables, "variables")) {
            var queryDef = utilities.getQueryDefinition(this.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v) { return v.variable.name.value === "variables"; })) {
                __DEV__ && globals.invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
            }
        }
        if (variables && !equality.equal(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = tslib.__assign(tslib.__assign({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, exports.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = tslib.__assign(tslib.__assign({}, (fetchMoreOptions.query ? fetchMoreOptions : tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: tslib.__assign(tslib.__assign({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        var queryInfo = this.queryInfo;
        var originalNetworkStatus = queryInfo.networkStatus;
        queryInfo.networkStatus = exports.NetworkStatus.fetchMore;
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.observe();
        }
        var updatedQuerySet = new Set();
        return this.queryManager.fetchQuery(qid, combinedOptions, exports.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            _this.queryManager.removeQuery(qid);
            if (queryInfo.networkStatus === exports.NetworkStatus.fetchMore) {
                queryInfo.networkStatus = originalNetworkStatus;
            }
            _this.queryManager.cache.batch({
                update: function (cache) {
                    var updateQuery = fetchMoreOptions.updateQuery;
                    if (updateQuery) {
                        cache.updateQuery({
                            query: _this.query,
                            variables: _this.variables,
                            returnPartialData: true,
                            optimistic: false,
                        }, function (previous) { return updateQuery(previous, {
                            fetchMoreResult: fetchMoreResult.data,
                            variables: combinedOptions.variables,
                        }); });
                    }
                    else {
                        cache.writeQuery({
                            query: combinedOptions.query,
                            variables: combinedOptions.variables,
                            data: fetchMoreResult.data,
                        });
                    }
                },
                onWatchUpdated: function (watch) {
                    updatedQuerySet.add(watch.query);
                },
            });
            return fetchMoreResult;
        }).finally(function () {
            if (!updatedQuerySet.has(_this.query)) {
                reobserveCacheFirst(_this);
            }
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && globals.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if (equality.equal(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.options.initialFetchPolicy,
            variables: variables,
        }, exports.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.applyNextFetchPolicy = function (reason, options) {
        if (options.nextFetchPolicy) {
            var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
            if (fetchPolicy === "standby") ;
            else if (typeof options.nextFetchPolicy === "function") {
                options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
                    reason: reason,
                    options: options,
                    observable: this,
                    initialFetchPolicy: initialFetchPolicy,
                });
            }
            else if (reason === "variables-changed") {
                options.fetchPolicy = initialFetchPolicy;
            }
            else {
                options.fetchPolicy = options.nextFetchPolicy;
            }
        }
        return options.fetchPolicy;
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? globals.invariant(pollInterval, 'Attempted to start a polling query without a polling interval.') : globals.invariant(pollInterval, 10);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: "network-only",
                    }, exports.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
        if (variables === void 0) { variables = this.variables; }
        this.last = tslib.__assign(tslib.__assign({}, this.last), { result: this.queryManager.assumeImmutableResults
                ? newResult
                : utilities.cloneDeep(newResult), variables: variables });
        if (!utilities.isNonEmptyArray(newResult.errors)) {
            delete this.last.error;
        }
        return this.last;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === exports.NetworkStatus.refetch ||
            newNetworkStatus === exports.NetworkStatus.fetchMore ||
            newNetworkStatus === exports.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var oldFetchPolicy = this.options.fetchPolicy;
        var mergedOptions = utilities.compact(this.options, newOptions || {});
        var options = useDisposableConcast
            ? mergedOptions
            : assign(this.options, mergedOptions);
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !equality.equal(newOptions.variables, oldVariables) &&
                options.fetchPolicy !== "standby" &&
                options.fetchPolicy === oldFetchPolicy) {
                this.applyNextFetchPolicy("variables-changed", options);
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = exports.NetworkStatus.setVariables;
                }
            }
        }
        var variables = options.variables && tslib.__assign({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function (result) {
                _this.reportResult(result, variables);
            },
            error: function (error) {
                _this.reportError(error, variables);
            },
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) {
                this.concast.removeObserver(this.observer);
            }
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery.prototype.reportResult = function (result, variables) {
        var lastError = this.getLastError();
        if (lastError || this.isDifferentFromLastResult(result)) {
            if (lastError || !result.partial || this.options.returnPartialData) {
                this.updateLastResult(result, variables);
            }
            utilities.iterateObserversSafely(this.observers, 'next', result);
        }
    };
    ObservableQuery.prototype.reportError = function (error, variables) {
        var errorResult = tslib.__assign(tslib.__assign({}, this.getLastResult()), { error: error, errors: error.graphQLErrors, networkStatus: exports.NetworkStatus.error, loading: false });
        this.updateLastResult(errorResult, variables);
        utilities.iterateObserversSafely(this.observers, 'error', this.last.error = error);
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(utilities.Observable));
utilities.fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
    var _a = obsQuery.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
    if (fetchPolicy === "cache-and-network" ||
        fetchPolicy === "network-only") {
        return obsQuery.reobserve({
            fetchPolicy: "cache-first",
            nextFetchPolicy: function () {
                this.nextFetchPolicy = nextFetchPolicy;
                if (typeof nextFetchPolicy === "function") {
                    return nextFetchPolicy.apply(this, arguments);
                }
                return fetchPolicy;
            },
        });
    }
    return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && globals.invariant.error('Unhandled error', error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && missing) {
        __DEV__ && globals.invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
    }
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = utilities.mergeDeep(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = utilities.mergeDeep(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (tslib.__assign(tslib.__assign({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (utilities.hasDirectives(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return utilities.removeClientSetsFromDocument(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return tslib.__assign(tslib.__assign({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (tslib.__assign(tslib.__assign({}, variables), data.exportedVariables)); })];
                }
                return [2, tslib.__assign({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        graphql.visit(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: utilities.buildQueryFromSelectionSet(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return tslib.__generator(this, function (_b) {
                mainDefinition = utilities.getMainDefinition(document);
                fragments = utilities.getFragmentDefinitions(document);
                fragmentMap = utilities.createFragmentMap(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: tslib.__assign(tslib.__assign({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return tslib.__awaiter(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return tslib.__generator(this, function (_a) {
                        if (!utilities.shouldInclude(selection, variables)) {
                            return [2];
                        }
                        if (utilities.isField(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[utilities.resultKeyNameFromField(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (utilities.isInlineFragment(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(selection.name.value)) : globals.invariant(fragment, 9);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return utilities.mergeDeepArray(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = utilities.resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(cache.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                utilities.argumentsObjectFromField(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

var destructiveMethodCounts = new (utilities.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || exports.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== exports.NetworkStatus.loading &&
            !equality.equal(this.variables, query.variables)) {
            networkStatus = exports.NetworkStatus.setVariables;
        }
        if (!equality.equal(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && equality.equal(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        var _a;
        if (variables === void 0) { variables = this.variables; }
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !equality.equal(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                var diff = _this.getDiff();
                if (diff.fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    reobserveCacheFirst(oq);
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if (isNetworkRequestInFlight(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = tslib.__assign(tslib.__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !equality.equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            equality.equal(variables, lastWrite.variables) &&
            equality.equal(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = utilities.isNonEmptyArray(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: _this.document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = exports.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = exports.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());
function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !utilities.graphQLResultHasError(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, defaultOptions = _a.defaultOptions, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('QueryManager stopped while query was in flight') : new globals.InvariantError(11));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var _b, _c;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _d = _a.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _f = _a.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a.keepRootFields, context = _a.context;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mutationId, mutationStoreValue, self;
            return tslib.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        __DEV__ ? globals.invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : globals.invariant(mutation, 12);
                        __DEV__ ? globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', 13);
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_h.sent());
                        _h.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return utilities.asyncMap(self.getObservableFromLink(mutation, tslib.__assign(tslib.__assign({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if (utilities.graphQLResultHasError(result) && errorPolicy === 'none') {
                                        throw new errors.ApolloError({
                                            graphQLErrors: result.errors,
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = tslib.__assign({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        utilities.graphQLResultHasError(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        resolve(storeResult);
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof errors.ApolloError ? err : new errors.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && utilities.getOperationName(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = tslib.__assign(tslib.__assign({}, result), { data: diff.result });
                            }
                        }
                        update(cache, result, {
                            context: mutation.context,
                            variables: mutation.variables,
                        });
                    }
                    if (!skipCache && !mutation.keepRootFields) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult(tslib.__assign(tslib.__assign({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && globals.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = utilities.removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: utilities.hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: utilities.getDefaultValues(utilities.getOperationDefinition(transformed)),
                asQuery: tslib.__assign(tslib.__assign({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return tslib.__assign(tslib.__assign({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return tslib.__assign(tslib.__assign({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = tslib.__assign(tslib.__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: observable.query,
            observableQuery: observable,
            variables: observable.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? globals.invariant(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : globals.invariant(options.query, 14);
        __DEV__ ? globals.invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : globals.invariant(options.query.kind === 'Document', 15);
        __DEV__ ? globals.invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : globals.invariant(!options.returnPartialData, 16);
        __DEV__ ? globals.invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : globals.invariant(!options.pollInterval, 17);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function (options) {
        if (options === void 0) { options = {
            discardWatches: true,
        }; }
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('Store reset while query was in flight (not completed in link chain)') : new globals.InvariantError(18));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = exports.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset(options);
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if (utilities.isDocumentNode(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if (utilities.isNonNullObject(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" ||
                    (include === "active" && !oq.hasObservers())) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = utilities.makeUniqueId("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: tslib.__assign(tslib.__assign({}, options), { fetchPolicy: "network-only" }),
                });
                globals.invariant(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && globals.invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if (shouldWriteResult(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if (utilities.graphQLResultHasError(result)) {
                    throw new errors.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new utilities.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        if (this.queries.has(queryId)) {
            this.getQuery(queryId).stop();
            this.queries.delete(queryId);
        }
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: utilities.getOperationName(serverQuery) || void 0,
                context: this.prepareContext(tslib.__assign(tslib.__assign({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = cache.canonicalStringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new utilities.Concast([
                        core.execute(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new utilities.Concast([
                    core.execute(link, operation)
                ]);
            }
        }
        else {
            observable = new utilities.Concast([
                utilities.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = utilities.asyncMap(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return utilities.asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
            var hasErrors = utilities.isNonEmptyArray(result.errors);
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new errors.ApolloError({
                        graphQLErrors: result.errors,
                    }));
                }
                queryInfo.markResult(result, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: exports.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
                aqr.networkStatus = exports.NetworkStatus.error;
            }
            return aqr;
        }, function (networkError) {
            var error = errors.isApolloError(networkError)
                ? networkError
                : new errors.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = exports.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var defaults = this.defaultOptions.watchQuery;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            var concastSources = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
            if (normalized.fetchPolicy !== "standby" &&
                concastSources.length > 0 &&
                queryInfo.observableQuery) {
                queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
            }
            return concastSources;
        };
        var cleanupCancelFn = function () { return _this.fetchCancelFns.delete(queryId); };
        this.fetchCancelFns.set(queryId, function (reason) {
            cleanupCancelFn();
            setTimeout(function () { return concast.cancel(reason); });
        });
        var concast = new utilities.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.promise.then(cleanupCancelFn, cleanupCancelFn);
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? utilities.makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return result;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: this.transform(query).document,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || exports.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                !returnPartialData &&
                !equality.equal(data, {})) {
                logMissingFieldErrors(diff.missing);
            }
            var fromData = function (data) { return utilities.Observable.of(tslib.__assign({ data: data, loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === exports.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () { return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
            variables: variables,
            context: context,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
        }); };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            isNetworkRequestInFlight(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return tslib.__assign(tslib.__assign({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new http.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : core.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new globals.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new globals.InvariantError(7);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && globals.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = utilities.mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = utilities.mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? globals.invariant(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : globals.invariant(options.fetchPolicy !== 'cache-and-network', 8);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = utilities.mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return core.execute(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: false,
        }); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: true,
        }); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && globals.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

tsInvariant.setVerbosity(globals.DEV ? "log" : "silent");

exports.ApolloCache = cache.ApolloCache;
exports.Cache = cache.Cache;
exports.InMemoryCache = cache.InMemoryCache;
exports.MissingFieldError = cache.MissingFieldError;
exports.defaultDataIdFromObject = cache.defaultDataIdFromObject;
exports.makeVar = cache.makeVar;
exports.Observable = utilities.Observable;
exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.mergeOptions = utilities.mergeOptions;
exports.ApolloError = errors.ApolloError;
exports.isApolloError = errors.isApolloError;
exports.fromError = utils.fromError;
exports.fromPromise = utils.fromPromise;
exports.throwServerError = utils.throwServerError;
exports.toPromise = utils.toPromise;
exports.setLogVerbosity = tsInvariant.setVerbosity;
exports.disableExperimentalFragmentVariables = graphqlTag.disableExperimentalFragmentVariables;
exports.disableFragmentWarnings = graphqlTag.disableFragmentWarnings;
exports.enableExperimentalFragmentVariables = graphqlTag.enableExperimentalFragmentVariables;
exports.gql = graphqlTag.gql;
exports.resetCaches = graphqlTag.resetCaches;
exports.ApolloClient = ApolloClient;
exports.ObservableQuery = ObservableQuery;
for (var k in core) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in http) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = http[k];
}
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/errors/errors.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/errors/errors.cjs ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (utilities.isNonEmptyArray(err.graphQLErrors) || utilities.isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += "".concat(errorMessage, "\n");
        });
    }
    if (err.networkError) {
        message += "".concat(err.networkError.message, "\n");
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    tslib.__extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

exports.ApolloError = ApolloError;
exports.isApolloError = isApolloError;
//# sourceMappingURL=errors.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/core.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/core.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");

function passthrough(op, forward) {
    return (forward ? forward(op) : utilities.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    tslib.__extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return utilities.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || utilities.Observable.of()
                    : rightLink.request(operation) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || utilities.Observable.of()
                    : rightLink.request(operation, forward) || utilities.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(utils.createOperation(operation.context, utils.transformOperation(utils.validateOperation(operation)))) || utilities.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && globals.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || utilities.Observable.of(); }) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || utilities.Observable.of();
                }) || utilities.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new globals.InvariantError('request is not implemented') : new globals.InvariantError(19);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

var empty = ApolloLink.empty;

var from = ApolloLink.from;

var split = ApolloLink.split;

var concat = ApolloLink.concat;

var execute = ApolloLink.execute;

exports.ApolloLink = ApolloLink;
exports.concat = concat;
exports.empty = empty;
exports.execute = execute;
exports.from = from;
exports.split = split;
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/http.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/http.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function (response) { return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            throw parseError;
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            utils.throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
        }
        if (!Array.isArray(result) &&
            !hasOwnProperty.call(result, 'data') &&
            !hasOwnProperty.call(result, 'errors')) {
            utils.throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName, "'."));
        }
        return result;
    }); };
}

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new globals.InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new globals.InvariantError(21);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};

var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var defaultPrinter = function (ast, printer) { return printer(ast); };
function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, tslib.__spreadArray([operation,
        defaultPrinter], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function (config) {
        options = tslib.__assign(tslib.__assign(tslib.__assign({}, options), config.options), { headers: tslib.__assign(tslib.__assign({}, options.headers), headersToLowerCase(config.headers)) });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = tslib.__assign(tslib.__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = printer(query, graphql.print);
    return {
        options: options,
        body: body,
    };
}
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new globals.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new globals.InvariantError(20);
    }
};

var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};

var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = serializeFetchParameter(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = serializeFetchParameter(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}

var backupFetch = utilities.maybe(function () { return fetch; });
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = tslib.__rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
    if (__DEV__) {
        checkFetcher(preferredFetch || backupFetch);
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new core.ApolloLink(function (operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = tslib.__assign(tslib.__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = selectHttpOptionsAndBodyInternal(operation, print, fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            graphql.visit(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = tslib.__assign({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return utils.fromError(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = serializeFetchParameter(body, 'Payload');
            }
            catch (parseError) {
                return utils.fromError(parseError);
            }
        }
        return new utilities.Observable(function (observer) {
            var currentFetch = preferredFetch || utilities.maybe(function () { return fetch; }) || backupFetch;
            currentFetch(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(parseAndCheckHttpResponse(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};

var HttpLink = (function (_super) {
    tslib.__extends(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(core.ApolloLink));

exports.HttpLink = HttpLink;
exports.checkFetcher = checkFetcher;
exports.createHttpLink = createHttpLink;
exports.createSignalIfSupported = createSignalIfSupported;
exports.defaultPrinter = defaultPrinter;
exports.fallbackHttpConfig = fallbackHttpConfig;
exports.parseAndCheckHttpResponse = parseAndCheckHttpResponse;
exports.rewriteURIForGET = rewriteURIForGET;
exports.selectHttpOptionsAndBody = selectHttpOptionsAndBody;
exports.selectHttpOptionsAndBodyInternal = selectHttpOptionsAndBodyInternal;
exports.selectURI = selectURI;
exports.serializeFetchParameter = serializeFetchParameter;
//# sourceMappingURL=http.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/subscriptions/subscriptions.cjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/subscriptions/subscriptions.cjs ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var errors = __webpack_require__(/*! ../../errors */ "./node_modules/@apollo/client/errors/errors.cjs");

function isLikeCloseEvent(val) {
    return utilities.isNonNullObject(val) && 'code' in val && 'reason' in val;
}
var GraphQLWsLink = (function (_super) {
    tslib.__extends(GraphQLWsLink, _super);
    function GraphQLWsLink(client) {
        var _this = _super.call(this) || this;
        _this.client = client;
        return _this;
    }
    GraphQLWsLink.prototype.request = function (operation) {
        var _this = this;
        return new utilities.Observable(function (observer) {
            return _this.client.subscribe(tslib.__assign(tslib.__assign({}, operation), { query: graphql.print(operation.query) }), {
                next: observer.next.bind(observer),
                complete: observer.complete.bind(observer),
                error: function (err) {
                    if (err instanceof Error) {
                        return observer.error(err);
                    }
                    if (isLikeCloseEvent(err)) {
                        return observer.error(new Error("Socket closed with event ".concat(err.code, " ").concat(err.reason || "")));
                    }
                    return observer.error(new errors.ApolloError({
                        graphQLErrors: Array.isArray(err) ? err : [err],
                    }));
                },
            });
        });
    };
    return GraphQLWsLink;
}(core.ApolloLink));

exports.GraphQLWsLink = GraphQLWsLink;
//# sourceMappingURL=subscriptions.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/utils.cjs":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/utils.cjs ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");

function fromError(errorValue) {
    return new utilities.Observable(function (observer) {
        observer.error(errorValue);
    });
}

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    __DEV__ && globals.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}

function fromPromise(promise) {
    return new utilities.Observable(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}

var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new globals.InvariantError("illegal argument: ".concat(key)) : new globals.InvariantError(24);
        }
    }
    return operation;
}

function createOperation(starting, operation) {
    var context = tslib.__assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = tslib.__assign(tslib.__assign({}, context), next(context));
        }
        else {
            context = tslib.__assign(tslib.__assign({}, context), next);
        }
    };
    var getContext = function () { return (tslib.__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? utilities.getOperationName(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}

exports.createOperation = createOperation;
exports.fromError = fromError;
exports.fromPromise = fromPromise;
exports.throwServerError = throwServerError;
exports.toPromise = toPromise;
exports.transformOperation = transformOperation;
exports.validateOperation = validateOperation;
//# sourceMappingURL=utils.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/main.cjs":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/main.cjs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! ./core */ "./node_modules/@apollo/client/core/core.cjs");
var react = __webpack_require__(/*! ./react */ "./node_modules/@apollo/client/react/react.cjs");



for (var k in core) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in react) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = react[k];
}
//# sourceMappingURL=main.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/tslib/tslib.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/tslib/tslib.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/zen-observable-ts/index.cjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/zen-observable-ts/index.cjs ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.Observable = __webpack_require__(/*! zen-observable/index.js */ "zen-observable/index.js");


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/context.cjs":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/context.cjs ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var React = __webpack_require__(/*! react */ "react");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var contextKey = utilities.canUseSymbol
    ? Symbol.for('__APOLLO_CONTEXT__')
    : '__APOLLO_CONTEXT__';
function getApolloContext() {
    var context = React__namespace.createContext[contextKey];
    if (!context) {
        Object.defineProperty(React__namespace.createContext, contextKey, {
            value: context = React__namespace.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'ApolloContext';
    }
    return context;
}

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return (React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        __DEV__ ? globals.invariant(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.') : globals.invariant(context && context.client, 25);
        return props.children(context.client);
    }));
};

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return (React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? globals.invariant(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : globals.invariant(context.client, 26);
        return (React__namespace.createElement(ApolloContext.Provider, { value: context }, children));
    }));
};

exports.ApolloConsumer = ApolloConsumer;
exports.ApolloProvider = ApolloProvider;
exports.getApolloContext = getApolloContext;
exports.resetApolloContext = getApolloContext;
//# sourceMappingURL=context.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/hooks.cjs":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/hooks.cjs ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var React = __webpack_require__(/*! react */ "react");
var context = __webpack_require__(/*! ../context */ "./node_modules/@apollo/client/react/context/context.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "@wry/equality");
var core = __webpack_require__(/*! ../../core */ "./node_modules/@apollo/client/core/core.cjs");
var errors = __webpack_require__(/*! ../../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var parser = __webpack_require__(/*! ../parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function useApolloClient(override) {
    var context$1 = React.useContext(context.getApolloContext());
    var client = override || context$1.client;
    __DEV__ ? globals.invariant(!!client, 'Could not find "client" in the context or passed in as an option. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' +
        'instance in via options.') : globals.invariant(!!client, 29);
    return client;
}

var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = React__namespace[uSESKey];
var useSyncExternalStore = realHook || (function (subscribe, getSnapshot, getServerSnapshot) {
    var value = getSnapshot();
    if (__DEV__ &&
        !didWarnUncachedGetSnapshot &&
        value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        __DEV__ && globals.invariant.error('The result of getSnapshot should be cached to avoid an infinite loop');
    }
    var _a = React__namespace.useState({ inst: { value: value, getSnapshot: getSnapshot } }), inst = _a[0].inst, forceUpdate = _a[1];
    if (utilities.canUseLayoutEffect) {
        React__namespace.useLayoutEffect(function () {
            Object.assign(inst, { value: value, getSnapshot: getSnapshot });
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        }, [subscribe, value, getSnapshot]);
    }
    else {
        Object.assign(inst, { value: value, getSnapshot: getSnapshot });
    }
    React__namespace.useEffect(function () {
        if (checkIfSnapshotChanged(inst)) {
            forceUpdate({ inst: inst });
        }
        return subscribe(function handleStoreChange() {
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        });
    }, [subscribe]);
    return value;
});
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    }
    catch (_b) {
        return true;
    }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return useInternalState(useApolloClient(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
    var stateRef = React.useRef();
    if (!stateRef.current ||
        client !== stateRef.current.client ||
        query !== stateRef.current.query) {
        stateRef.current = new InternalState(client, query, stateRef.current);
    }
    var state = stateRef.current;
    var _a = React.useState(0); _a[0]; var setTick = _a[1];
    state.forceUpdate = function () {
        setTick(function (tick) { return tick + 1; });
    };
    return state;
}
var InternalState = (function () {
    function InternalState(client, query, previous) {
        this.client = client;
        this.query = query;
        this.asyncResolveFns = new Set();
        this.optionsToIgnoreOnce = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.ssrDisabledResult = utilities.maybeDeepFreeze({
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.loading,
        });
        this.skipStandbyResult = utilities.maybeDeepFreeze({
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.ready,
        });
        this.toQueryResultCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        parser.verifyDocumentType(query, parser.DocumentType.Query);
        var previousResult = previous && previous.result;
        var previousData = previousResult && previousResult.data;
        if (previousData) {
            this.previousData = previousData;
        }
    }
    InternalState.prototype.forceUpdate = function () {
        __DEV__ && globals.invariant.warn("Calling default no-op implementation of InternalState#forceUpdate");
    };
    InternalState.prototype.asyncUpdate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.asyncResolveFns.add(resolve);
            _this.optionsToIgnoreOnce.add(_this.watchQueryOptions);
            _this.forceUpdate();
        });
    };
    InternalState.prototype.useQuery = function (options) {
        var _this = this;
        this.renderPromises = React.useContext(context.getApolloContext()).renderPromises;
        this.useOptions(options);
        var obsQuery = this.useObservableQuery();
        var result = useSyncExternalStore(React.useCallback(function () {
            if (_this.renderPromises) {
                return function () { };
            }
            var onNext = function () {
                var previousResult = _this.result;
                var result = obsQuery.getCurrentResult();
                if (previousResult &&
                    previousResult.loading === result.loading &&
                    previousResult.networkStatus === result.networkStatus &&
                    equality.equal(previousResult.data, result.data)) {
                    return;
                }
                _this.setResult(result);
            };
            var onError = function (error) {
                var last = obsQuery["last"];
                subscription.unsubscribe();
                try {
                    obsQuery.resetLastResults();
                    subscription = obsQuery.subscribe(onNext, onError);
                }
                finally {
                    obsQuery["last"] = last;
                }
                if (!hasOwnProperty.call(error, 'graphQLErrors')) {
                    throw error;
                }
                var previousResult = _this.result;
                if (!previousResult ||
                    (previousResult && previousResult.loading) ||
                    !equality.equal(error, previousResult.error)) {
                    _this.setResult({
                        data: (previousResult && previousResult.data),
                        error: error,
                        loading: false,
                        networkStatus: core.NetworkStatus.error,
                    });
                }
            };
            var subscription = obsQuery.subscribe(onNext, onError);
            return function () { return subscription.unsubscribe(); };
        }, [
            obsQuery,
            this.renderPromises,
            this.client.disableNetworkFetches,
        ]), function () { return _this.getCurrentResult(); }, function () { return _this.getCurrentResult(); });
        this.unsafeHandlePartialRefetch(result);
        var queryResult = this.toQueryResult(result);
        if (!queryResult.loading && this.asyncResolveFns.size) {
            this.asyncResolveFns.forEach(function (resolve) { return resolve(queryResult); });
            this.asyncResolveFns.clear();
        }
        return queryResult;
    };
    InternalState.prototype.useOptions = function (options) {
        var _a;
        var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
        var currentWatchQueryOptions = this.watchQueryOptions;
        if (this.optionsToIgnoreOnce.has(currentWatchQueryOptions) ||
            !equality.equal(watchQueryOptions, currentWatchQueryOptions)) {
            this.watchQueryOptions = watchQueryOptions;
            if (currentWatchQueryOptions && this.observable) {
                this.optionsToIgnoreOnce.delete(currentWatchQueryOptions);
                this.observable.reobserve(this.getObsQueryOptions());
                this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
                this.result = void 0;
            }
        }
        this.onCompleted = options.onCompleted || InternalState.prototype.onCompleted;
        this.onError = options.onError || InternalState.prototype.onError;
        if ((this.renderPromises || this.client.disableNetworkFetches) &&
            this.queryHookOptions.ssr === false &&
            !this.queryHookOptions.skip) {
            this.result = this.ssrDisabledResult;
        }
        else if (this.queryHookOptions.skip ||
            this.watchQueryOptions.fetchPolicy === 'standby') {
            this.result = this.skipStandbyResult;
        }
        else if (this.result === this.ssrDisabledResult ||
            this.result === this.skipStandbyResult) {
            this.result = void 0;
        }
    };
    InternalState.prototype.getObsQueryOptions = function () {
        var toMerge = [];
        var globalDefaults = this.client.defaultOptions.watchQuery;
        if (globalDefaults)
            toMerge.push(globalDefaults);
        if (this.queryHookOptions.defaultOptions) {
            toMerge.push(this.queryHookOptions.defaultOptions);
        }
        toMerge.push(utilities.compact(this.observable && this.observable.options, this.watchQueryOptions));
        return toMerge.reduce(core.mergeOptions);
    };
    InternalState.prototype.createWatchQueryOptions = function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var skip = _a.skip; _a.ssr; _a.onCompleted; _a.onError; _a.displayName; _a.defaultOptions; var otherOptions = tslib.__rest(_a, ["skip", "ssr", "onCompleted", "onError", "displayName", "defaultOptions"]);
        var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
        if (this.renderPromises &&
            (watchQueryOptions.fetchPolicy === 'network-only' ||
                watchQueryOptions.fetchPolicy === 'cache-and-network')) {
            watchQueryOptions.fetchPolicy = 'cache-first';
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        if (skip) {
            var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
            Object.assign(watchQueryOptions, {
                initialFetchPolicy: initialFetchPolicy,
                fetchPolicy: 'standby',
            });
        }
        else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy =
                ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) ||
                    this.getDefaultFetchPolicy();
        }
        return watchQueryOptions;
    };
    InternalState.prototype.getDefaultFetchPolicy = function () {
        var _a, _b;
        return (((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) ||
            ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
            "cache-first");
    };
    InternalState.prototype.onCompleted = function (data) { };
    InternalState.prototype.onError = function (error) { };
    InternalState.prototype.useObservableQuery = function () {
        var obsQuery = this.observable =
            this.renderPromises
                && this.renderPromises.getSSRObservable(this.watchQueryOptions)
                || this.observable
                || this.client.watchQuery(this.getObsQueryOptions());
        this.obsQueryFields = React.useMemo(function () { return ({
            refetch: obsQuery.refetch.bind(obsQuery),
            reobserve: obsQuery.reobserve.bind(obsQuery),
            fetchMore: obsQuery.fetchMore.bind(obsQuery),
            updateQuery: obsQuery.updateQuery.bind(obsQuery),
            startPolling: obsQuery.startPolling.bind(obsQuery),
            stopPolling: obsQuery.stopPolling.bind(obsQuery),
            subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
        }); }, [obsQuery]);
        var ssrAllowed = !(this.queryHookOptions.ssr === false ||
            this.queryHookOptions.skip);
        if (this.renderPromises && ssrAllowed) {
            this.renderPromises.registerSSRObservable(obsQuery);
            if (obsQuery.getCurrentResult().loading) {
                this.renderPromises.addObservableQueryPromise(obsQuery);
            }
        }
        return obsQuery;
    };
    InternalState.prototype.setResult = function (nextResult) {
        var previousResult = this.result;
        if (previousResult && previousResult.data) {
            this.previousData = previousResult.data;
        }
        this.result = nextResult;
        this.forceUpdate();
        this.handleErrorOrCompleted(nextResult);
    };
    InternalState.prototype.handleErrorOrCompleted = function (result) {
        if (!result.loading) {
            if (result.error) {
                this.onError(result.error);
            }
            else if (result.data) {
                this.onCompleted(result.data);
            }
        }
    };
    InternalState.prototype.getCurrentResult = function () {
        if (!this.result) {
            this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
        }
        return this.result;
    };
    InternalState.prototype.toQueryResult = function (result) {
        var queryResult = this.toQueryResultCache.get(result);
        if (queryResult)
            return queryResult;
        var data = result.data; result.partial; var resultWithoutPartial = tslib.__rest(result, ["data", "partial"]);
        this.toQueryResultCache.set(result, queryResult = tslib.__assign(tslib.__assign(tslib.__assign({ data: data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
        if (!queryResult.error && utilities.isNonEmptyArray(result.errors)) {
            queryResult.error = new errors.ApolloError({ graphQLErrors: result.errors });
        }
        return queryResult;
    };
    InternalState.prototype.unsafeHandlePartialRefetch = function (result) {
        if (result.partial &&
            this.queryHookOptions.partialRefetch &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            this.observable.options.fetchPolicy !== 'cache-only') {
            Object.assign(result, {
                loading: true,
                networkStatus: core.NetworkStatus.refetch,
            });
            this.observable.refetch();
        }
    };
    return InternalState;
}());

var EAGER_METHODS = [
    'refetch',
    'reobserve',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
function useLazyQuery(query, options) {
    var internalState = useInternalState(useApolloClient(options && options.client), query);
    var execOptionsRef = React.useRef();
    var merged = execOptionsRef.current
        ? utilities.mergeOptions(options, execOptionsRef.current)
        : options;
    var useQueryResult = internalState.useQuery(tslib.__assign(tslib.__assign({}, merged), { skip: !execOptionsRef.current }));
    var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy ||
        internalState.getDefaultFetchPolicy();
    var result = Object.assign(useQueryResult, {
        called: !!execOptionsRef.current,
    });
    var eagerMethods = React.useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    internalState.forceUpdate();
                }
                return method.apply(this, arguments);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, []);
    Object.assign(result, eagerMethods);
    var execute = React.useCallback(function (executeOptions) {
        execOptionsRef.current = executeOptions ? tslib.__assign(tslib.__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
            fetchPolicy: initialFetchPolicy,
        };
        var promise = internalState
            .asyncUpdate()
            .then(function (queryResult) { return Object.assign(queryResult, eagerMethods); });
        promise.catch(function () { });
        return promise;
    }, []);
    return [execute, result];
}

function useMutation(mutation, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(mutation, parser.DocumentType.Mutation);
    var _a = React.useState({
        called: false,
        loading: false,
        client: client,
    }), result = _a[0], setResult = _a[1];
    var ref = React.useRef({
        result: result,
        mutationId: 0,
        isMounted: true,
        client: client,
        mutation: mutation,
        options: options,
    });
    {
        Object.assign(ref.current, { client: client, options: options, mutation: mutation });
    }
    var execute = React.useCallback(function (executeOptions) {
        if (executeOptions === void 0) { executeOptions = {}; }
        var _a = ref.current, client = _a.client, options = _a.options, mutation = _a.mutation;
        var baseOptions = tslib.__assign(tslib.__assign({}, options), { mutation: mutation });
        if (!ref.current.result.loading && !baseOptions.ignoreResults) {
            setResult(ref.current.result = {
                loading: true,
                error: void 0,
                data: void 0,
                called: true,
                client: client,
            });
        }
        var mutationId = ++ref.current.mutationId;
        var clientOptions = core.mergeOptions(baseOptions, executeOptions);
        return client.mutate(clientOptions).then(function (response) {
            var _a, _b, _c;
            var data = response.data, errors$1 = response.errors;
            var error = errors$1 && errors$1.length > 0
                ? new errors.ApolloError({ graphQLErrors: errors$1 })
                : void 0;
            if (mutationId === ref.current.mutationId &&
                !clientOptions.ignoreResults) {
                var result_1 = {
                    called: true,
                    loading: false,
                    data: data,
                    error: error,
                    client: client,
                };
                if (ref.current.isMounted && !equality.equal(ref.current.result, result_1)) {
                    setResult(ref.current.result = result_1);
                }
            }
            (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onCompleted) === null || _b === void 0 ? void 0 : _b.call(_a, response.data);
            (_c = executeOptions.onCompleted) === null || _c === void 0 ? void 0 : _c.call(executeOptions, response.data);
            return response;
        }).catch(function (error) {
            var _a, _b, _c, _d;
            if (mutationId === ref.current.mutationId &&
                ref.current.isMounted) {
                var result_2 = {
                    loading: false,
                    error: error,
                    data: void 0,
                    called: true,
                    client: client,
                };
                if (!equality.equal(ref.current.result, result_2)) {
                    setResult(ref.current.result = result_2);
                }
            }
            if (((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) || clientOptions.onError) {
                (_c = (_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onError) === null || _c === void 0 ? void 0 : _c.call(_b, error);
                (_d = executeOptions.onError) === null || _d === void 0 ? void 0 : _d.call(executeOptions, error);
                return { data: void 0, errors: error };
            }
            throw error;
        });
    }, []);
    var reset = React.useCallback(function () {
        setResult({ called: false, loading: false, client: client });
    }, []);
    React.useEffect(function () {
        ref.current.isMounted = true;
        return function () {
            ref.current.isMounted = false;
        };
    }, []);
    return [execute, tslib.__assign({ reset: reset }, result)];
}

function useSubscription(subscription, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(subscription, parser.DocumentType.Subscription);
    var _a = React.useState({
        loading: !(options === null || options === void 0 ? void 0 : options.skip),
        error: void 0,
        data: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables,
    }), result = _a[0], setResult = _a[1];
    var _b = React.useState(function () {
        if (options === null || options === void 0 ? void 0 : options.skip) {
            return null;
        }
        return client.subscribe({
            query: subscription,
            variables: options === null || options === void 0 ? void 0 : options.variables,
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            context: options === null || options === void 0 ? void 0 : options.context,
        });
    }), observable = _b[0], setObservable = _b[1];
    var canResetObservableRef = React.useRef(false);
    React.useEffect(function () {
        return function () {
            canResetObservableRef.current = true;
        };
    }, []);
    var ref = React.useRef({ client: client, subscription: subscription, options: options });
    React.useEffect(function () {
        var _a, _b, _c, _d;
        var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(options);
        }
        if (options === null || options === void 0 ? void 0 : options.skip) {
            if (!(options === null || options === void 0 ? void 0 : options.skip) !== !((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.skip) || canResetObservableRef.current) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
                setObservable(null);
                canResetObservableRef.current = false;
            }
        }
        else if ((shouldResubscribe !== false &&
            (client !== ref.current.client ||
                subscription !== ref.current.subscription ||
                (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
                !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) ||
                !equality.equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables))) ||
            canResetObservableRef.current) {
            setResult({
                loading: true,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables,
            });
            setObservable(client.subscribe({
                query: subscription,
                variables: options === null || options === void 0 ? void 0 : options.variables,
                fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
                context: options === null || options === void 0 ? void 0 : options.context,
            }));
            canResetObservableRef.current = false;
        }
        Object.assign(ref.current, { client: client, subscription: subscription, options: options });
    }, [client, subscription, options, canResetObservableRef.current]);
    React.useEffect(function () {
        if (!observable) {
            return;
        }
        var subscription = observable.subscribe({
            next: function (fetchResult) {
                var _a, _b;
                var result = {
                    loading: false,
                    data: fetchResult.data,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                };
                setResult(result);
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionData) === null || _b === void 0 ? void 0 : _b.call(_a, {
                    client: client,
                    subscriptionData: result
                });
            },
            error: function (error) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: error,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
            },
            complete: function () {
                var _a, _b;
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
            },
        });
        return function () {
            subscription.unsubscribe();
        };
    }, [observable]);
    return result;
}

function useReactiveVar(rv) {
    var value = rv();
    var setValue = React.useState(value)[1];
    React.useEffect(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}

exports.useApolloClient = useApolloClient;
exports.useLazyQuery = useLazyQuery;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useReactiveVar = useReactiveVar;
exports.useSubscription = useSubscription;
//# sourceMappingURL=hooks.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/parser.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/parser.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");

exports.DocumentType = void 0;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(exports.DocumentType || (exports.DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case exports.DocumentType.Query:
            name = 'Query';
            break;
        case exports.DocumentType.Mutation:
            name = 'Mutation';
            break;
        case exports.DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? globals.invariant(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : globals.invariant(!!document && !!document.kind, 30);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for (var _i = 0, _a = document.definitions; _i < _a.length; _i++) {
        var x = _a[_i];
        if (x.kind === 'FragmentDefinition') {
            fragments.push(x);
            continue;
        }
        if (x.kind === 'OperationDefinition') {
            switch (x.operation) {
                case 'query':
                    queries.push(x);
                    break;
                case 'mutation':
                    mutations.push(x);
                    break;
                case 'subscription':
                    subscriptions.push(x);
                    break;
            }
        }
    }
    __DEV__ ? globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 31);
    __DEV__ ? globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") +
        "subscriptions and ".concat(mutations.length, " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, 32);
    type = queries.length ? exports.DocumentType.Query : exports.DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = exports.DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? globals.invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") +
        "".concat(definitions.length, " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(definitions.length === 1, 33);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? globals.invariant(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") +
        "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : globals.invariant(operation.type === type, 34);
}

exports.operationName = operationName;
exports.parser = parser;
exports.verifyDocumentType = verifyDocumentType;
//# sourceMappingURL=parser.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/react.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/react/react.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var context = __webpack_require__(/*! ./context */ "./node_modules/@apollo/client/react/context/context.cjs");
var hooks = __webpack_require__(/*! ./hooks */ "./node_modules/@apollo/client/react/hooks/hooks.cjs");
var parser = __webpack_require__(/*! ./parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");



exports.ApolloConsumer = context.ApolloConsumer;
exports.ApolloProvider = context.ApolloProvider;
exports.getApolloContext = context.getApolloContext;
exports.resetApolloContext = context.resetApolloContext;
exports.DocumentType = parser.DocumentType;
exports.operationName = parser.operationName;
exports.parser = parser.parser;
for (var k in hooks) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = hooks[k];
}
//# sourceMappingURL=react.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/globals.cjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/globals.cjs ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.cjs");
var process$1 = __webpack_require__(/*! ts-invariant/process */ "./node_modules/ts-invariant/process/main.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");

function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}

var global$1 = (maybe(function () { return globalThis; }) ||
    maybe(function () { return window; }) ||
    maybe(function () { return self; }) ||
    maybe(function () { return global; }) ||
    maybe(function () { return maybe.constructor("return this")(); }));

var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(global$1, GLOBAL_KEY, {
            value: maybe(function () { return "development"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return global$1[GLOBAL_KEY];
    }
}
var DEV = getDEV();

function removeTemporaryGlobals() {
    return typeof graphql.Source === "function" ? process$1.remove() : process$1.remove();
}

function checkDEV() {
    __DEV__ ? tsInvariant.invariant("boolean" === typeof DEV, DEV) : tsInvariant.invariant("boolean" === typeof DEV, 36);
}
removeTemporaryGlobals();
checkDEV();

exports.InvariantError = tsInvariant.InvariantError;
exports.invariant = tsInvariant.invariant;
exports.DEV = DEV;
exports.checkDEV = checkDEV;
exports.global = global$1;
exports.maybe = maybe;
//# sourceMappingURL=globals.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/utilities.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/utilities.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ./globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var zenObservableTs = __webpack_require__(/*! zen-observable-ts */ "./node_modules/@apollo/client/node_modules/zen-observable-ts/index.cjs");
__webpack_require__(/*! symbol-observable */ "symbol-observable");

function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? globals.invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : globals.invariant(evaledValue !== void 0, 37);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    graphql.visit(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? globals.invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : globals.invariant(directiveArguments && directiveArguments.length === 1, 38);
            var ifArgument = directiveArguments[0];
            __DEV__ ? globals.invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @".concat(directiveName, " directive.")) : globals.invariant(ifArgument.name && ifArgument.name.value === 'if', 39);
            var ifValue = ifArgument.value;
            __DEV__ ? globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 40);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : '', ". ") +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new globals.InvariantError(41);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? globals.invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : globals.invariant(fragments.length === 1, 42);
        actualFragmentName = fragments[0].name.value;
    }
    var query = tslib.__assign(tslib.__assign({}, document), { definitions: tslib.__spreadArray([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions, true) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragment = fragmentMap && fragmentMap[selection.name.value];
            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : globals.invariant(fragment, 43);
            return fragment;
        }
        default:
            return null;
    }
}

function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return (isNonNullObject(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new globals.InvariantError("The inline argument \"".concat(name.value, "\" of kind \"").concat(value.kind, "\"") +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new globals.InvariantError(52);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives['connection']['key'], "(").concat(stringify(filteredArgs_1), ")");
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
            }
            else {
                completeFieldName += "@".concat(key);
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if (isNonNullObject(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}

function checkDocument(doc) {
    __DEV__ ? globals.invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc && doc.kind === 'Document', 44);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Schema type definitions not allowed in queries. Found: \"".concat(definition.kind, "\"")) : new globals.InvariantError(45);
        }
        return definition;
    });
    __DEV__ ? globals.invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : globals.invariant(operations.length <= 1, 46);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? globals.invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : globals.invariant(queryDef && queryDef.operation === 'query', 47);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? globals.invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc.kind === 'Document', 48);
    __DEV__ ? globals.invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : globals.invariant(doc.definitions.length <= 1, 49);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? globals.invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : globals.invariant(fragmentDef.kind === 'FragmentDefinition', 50);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new globals.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new globals.InvariantError(51);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}

function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}

var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(graphql.visit(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        filterInPlace(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        filterInPlace(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
    return graphql.visit(doc, {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (isField(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (isField(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return tslib.__assign(tslib.__assign({}, node), { selections: tslib.__spreadArray(tslib.__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && globals.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(graphql.visit(doc, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(graphql.visit(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((isField(selection) || isInlineFragment(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = graphql.visit(document, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = graphql.visit(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return isField(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, tslib.__spreadArray([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isNonNullObject(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                }
                else {
                    value = tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    };
    return DeepMerger;
}());

function concatPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming) {
            return existing ? tslib.__spreadArray(tslib.__spreadArray([], existing, true), incoming, true) : incoming;
        },
    };
}
function offsetLimitPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming, _a) {
            var args = _a.args;
            var merged = existing ? existing.slice(0) : [];
            if (incoming) {
                if (args) {
                    var _b = args.offset, offset = _b === void 0 ? 0 : _b;
                    for (var i = 0; i < incoming.length; ++i) {
                        merged[offset + i] = incoming[i];
                    }
                }
                else {
                    merged.push.apply(merged, incoming);
                }
            }
            return merged;
        },
    };
}
function relayStylePagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        read: function (existing, _a) {
            var canRead = _a.canRead, readField = _a.readField;
            if (!existing)
                return existing;
            var edges = [];
            var firstEdgeCursor = "";
            var lastEdgeCursor = "";
            existing.edges.forEach(function (edge) {
                if (canRead(readField("node", edge))) {
                    edges.push(edge);
                    if (edge.cursor) {
                        firstEdgeCursor = firstEdgeCursor || edge.cursor || "";
                        lastEdgeCursor = edge.cursor || lastEdgeCursor;
                    }
                }
            });
            var _b = existing.pageInfo || {}, startCursor = _b.startCursor, endCursor = _b.endCursor;
            return tslib.__assign(tslib.__assign({}, getExtras(existing)), { edges: edges, pageInfo: tslib.__assign(tslib.__assign({}, existing.pageInfo), { startCursor: startCursor || firstEdgeCursor, endCursor: endCursor || lastEdgeCursor }) });
        },
        merge: function (existing, incoming, _a) {
            var args = _a.args, isReference = _a.isReference, readField = _a.readField;
            if (!existing) {
                existing = makeEmptyData();
            }
            if (!incoming) {
                return existing;
            }
            var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
                if (isReference(edge = tslib.__assign({}, edge))) {
                    edge.cursor = readField("cursor", edge);
                }
                return edge;
            }) : [];
            if (incoming.pageInfo) {
                var pageInfo_1 = incoming.pageInfo;
                var startCursor = pageInfo_1.startCursor, endCursor = pageInfo_1.endCursor;
                var firstEdge = incomingEdges[0];
                var lastEdge = incomingEdges[incomingEdges.length - 1];
                if (firstEdge && startCursor) {
                    firstEdge.cursor = startCursor;
                }
                if (lastEdge && endCursor) {
                    lastEdge.cursor = endCursor;
                }
                var firstCursor = firstEdge && firstEdge.cursor;
                if (firstCursor && !startCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            startCursor: firstCursor,
                        },
                    });
                }
                var lastCursor = lastEdge && lastEdge.cursor;
                if (lastCursor && !endCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            endCursor: lastCursor,
                        },
                    });
                }
            }
            var prefix = existing.edges;
            var suffix = [];
            if (args && args.after) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.after; });
                if (index >= 0) {
                    prefix = prefix.slice(0, index + 1);
                }
            }
            else if (args && args.before) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.before; });
                suffix = index < 0 ? prefix : prefix.slice(index);
                prefix = [];
            }
            else if (incoming.edges) {
                prefix = [];
            }
            var edges = tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray([], prefix, true), incomingEdges, true), suffix, true);
            var pageInfo = tslib.__assign(tslib.__assign({}, incoming.pageInfo), existing.pageInfo);
            if (incoming.pageInfo) {
                var _b = incoming.pageInfo, hasPreviousPage = _b.hasPreviousPage, hasNextPage = _b.hasNextPage, startCursor = _b.startCursor, endCursor = _b.endCursor, extras = tslib.__rest(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);
                Object.assign(pageInfo, extras);
                if (!prefix.length) {
                    if (void 0 !== hasPreviousPage)
                        pageInfo.hasPreviousPage = hasPreviousPage;
                    if (void 0 !== startCursor)
                        pageInfo.startCursor = startCursor;
                }
                if (!suffix.length) {
                    if (void 0 !== hasNextPage)
                        pageInfo.hasNextPage = hasNextPage;
                    if (void 0 !== endCursor)
                        pageInfo.endCursor = endCursor;
                }
            }
            return tslib.__assign(tslib.__assign(tslib.__assign({}, getExtras(existing)), getExtras(incoming)), { edges: edges, pageInfo: pageInfo });
        },
    };
}
var getExtras = function (obj) { return tslib.__rest(obj, notExtras); };
var notExtras = ["edges", "pageInfo"];
function makeEmptyData() {
    return {
        edges: [],
        pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: "",
            endCursor: "",
        },
    };
}

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if (isNonNullObject(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        }
        catch (e) {
            if (e instanceof TypeError)
                return null;
            throw e;
        }
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}

function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}

function asyncMap(observable, mapFn, catchFn) {
    return new zenObservableTs.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

var canUseWeakMap = typeof WeakMap === 'function' &&
    globals.maybe(function () { return navigator.product; }) !== 'ReactNative';
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
var canUseDOM = typeof globals.maybe(function () { return window.document.createElement; }) === "function";
var usingJSDOM = globals.maybe(function () { return navigator.userAgent.indexOf("jsdom") >= 0; }) || false;
var canUseLayoutEffect = canUseDOM && !usingJSDOM;

function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: zenObservableTs.Observable });
    }
    if (canUseSymbol && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}

function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    tslib.__extends(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    iterateObserversSafely(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        setTimeout(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    iterateObserversSafely(_this.observers, "error", error);
                }
            },
            complete: function () {
                var sub = _this.sub;
                if (sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        if (sub)
                            setTimeout(function () { return sub.unsubscribe(); });
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        iterateObserversSafely(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new zenObservableTs.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast.prototype.removeObserver = function (observer, quietly) {
        if (this.observers.delete(observer) &&
            --this.addCount < 1 &&
            !quietly) {
            this.handlers.complete();
        }
    };
    Concast.prototype.cleanup = function (callback) {
        var _this = this;
        var called = false;
        var once = function () {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once,
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast;
}(zenObservableTs.Observable));
fixObservableSubclass(Concast);

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function graphQLResultHasError(result) {
    return (result.errors && result.errors.length > 0) || false;
}

function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}

var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

function stringifyForDisplay(value) {
    var undefId = makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}

function mergeOptions(defaults, options) {
    return compact(defaults, options, options.variables && {
        variables: tslib.__assign(tslib.__assign({}, (defaults && defaults.variables)), options.variables),
    });
}

exports.DEV = globals.DEV;
exports.maybe = globals.maybe;
exports.Observable = zenObservableTs.Observable;
exports.Concast = Concast;
exports.DeepMerger = DeepMerger;
exports.addTypenameToDocument = addTypenameToDocument;
exports.argumentsObjectFromField = argumentsObjectFromField;
exports.asyncMap = asyncMap;
exports.buildQueryFromSelectionSet = buildQueryFromSelectionSet;
exports.canUseDOM = canUseDOM;
exports.canUseLayoutEffect = canUseLayoutEffect;
exports.canUseSymbol = canUseSymbol;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseWeakSet = canUseWeakSet;
exports.checkDocument = checkDocument;
exports.cloneDeep = cloneDeep;
exports.compact = compact;
exports.concatPagination = concatPagination;
exports.createFragmentMap = createFragmentMap;
exports.fixObservableSubclass = fixObservableSubclass;
exports.getDefaultValues = getDefaultValues;
exports.getDirectiveNames = getDirectiveNames;
exports.getFragmentDefinition = getFragmentDefinition;
exports.getFragmentDefinitions = getFragmentDefinitions;
exports.getFragmentFromSelection = getFragmentFromSelection;
exports.getFragmentQueryDocument = getFragmentQueryDocument;
exports.getInclusionDirectives = getInclusionDirectives;
exports.getMainDefinition = getMainDefinition;
exports.getOperationDefinition = getOperationDefinition;
exports.getOperationName = getOperationName;
exports.getQueryDefinition = getQueryDefinition;
exports.getStoreKeyName = getStoreKeyName;
exports.getTypenameFromResult = getTypenameFromResult;
exports.graphQLResultHasError = graphQLResultHasError;
exports.hasClientExports = hasClientExports;
exports.hasDirectives = hasDirectives;
exports.isDocumentNode = isDocumentNode;
exports.isField = isField;
exports.isInlineFragment = isInlineFragment;
exports.isNonEmptyArray = isNonEmptyArray;
exports.isNonNullObject = isNonNullObject;
exports.isReference = isReference;
exports.iterateObserversSafely = iterateObserversSafely;
exports.makeReference = makeReference;
exports.makeUniqueId = makeUniqueId;
exports.maybeDeepFreeze = maybeDeepFreeze;
exports.mergeDeep = mergeDeep;
exports.mergeDeepArray = mergeDeepArray;
exports.mergeOptions = mergeOptions;
exports.offsetLimitPagination = offsetLimitPagination;
exports.relayStylePagination = relayStylePagination;
exports.removeArgumentsFromDocument = removeArgumentsFromDocument;
exports.removeClientSetsFromDocument = removeClientSetsFromDocument;
exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
exports.removeFragmentSpreadFromDocument = removeFragmentSpreadFromDocument;
exports.resultKeyNameFromField = resultKeyNameFromField;
exports.shouldInclude = shouldInclude;
exports.storeKeyNameFromField = storeKeyNameFromField;
exports.stringifyForDisplay = stringifyForDisplay;
exports.valueToObjectRepresentation = valueToObjectRepresentation;
//# sourceMappingURL=utilities.cjs.map


/***/ }),

/***/ "./node_modules/ts-invariant/lib/invariant.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/ts-invariant/node_modules/tslib/tslib.js");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    tslib.__extends(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
var invariant$1 = invariant;

exports.InvariantError = InvariantError;
exports["default"] = invariant$1;
exports.invariant = invariant;
exports.setVerbosity = setVerbosity;
//# sourceMappingURL=invariant.cjs.map


/***/ }),

/***/ "./node_modules/ts-invariant/node_modules/tslib/tslib.js":
/*!***************************************************************!*\
  !*** ./node_modules/ts-invariant/node_modules/tslib/tslib.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});


/***/ }),

/***/ "./node_modules/ts-invariant/process/main.cjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-invariant/process/main.cjs ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return global }) ||
  // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  maybe(function() { return maybe.constructor("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "development" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

exports.install = install;
exports.remove = remove;
//# sourceMappingURL=main.cjs.map


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/apollo */ "./config/apollo.js");
/* harmony import */ var _context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/pedidos/PedidoState */ "./context/pedidos/PedidoState.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Programming\\Trabajo\\Javascript\\MGRN\\EcommercePointi\\client\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 //import css for next



const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: _config_apollo__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: SELECCIONAR_CLIENTE, SELECCIONAR_PRODUCTO, CANTIDAD_PRODUCTOS, ACTUALIZAR_TOTAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECCIONAR_CLIENTE", function() { return SELECCIONAR_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECCIONAR_PRODUCTO", function() { return SELECCIONAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANTIDAD_PRODUCTOS", function() { return CANTIDAD_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_TOTAL", function() { return ACTUALIZAR_TOTAL; });
const SELECCIONAR_CLIENTE = 'SELECCIONAR_CLIENTE';
const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';
const CANTIDAD_PRODUCTOS = 'CANTIDAD_PRODUCTOS';
const ACTUALIZAR_TOTAL = 'ACTUALIZAR_TOTAL';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@wry/context":
/*!*******************************!*\
  !*** external "@wry/context" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/context");

/***/ }),

/***/ "@wry/equality":
/*!********************************!*\
  !*** external "@wry/equality" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/equality");

/***/ }),

/***/ "@wry/trie":
/*!****************************!*\
  !*** external "@wry/trie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/trie");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "graphql-ws":
/*!*****************************!*\
  !*** external "graphql-ws" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-ws");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "optimism":
/*!***************************!*\
  !*** external "optimism" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("optimism");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "symbol-observable":
/*!************************************!*\
  !*** external "symbol-observable" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("symbol-observable");

/***/ }),

/***/ "zen-observable/index.js":
/*!******************************************!*\
  !*** external "zen-observable/index.js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zen-observable/index.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXV0aC9hdXRoLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9hcG9sbG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9wZWRpZG9zL1BlZGlkb0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9wZWRpZG9zL1BlZGlkb1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9wZWRpZG9zL1BlZGlkb1N0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9jYWNoZS9jYWNoZS5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2NvcmUvY29yZS5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2Vycm9ycy9lcnJvcnMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL2NvcmUvY29yZS5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cC9odHRwLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbGluay9zdWJzY3JpcHRpb25zL3N1YnNjcmlwdGlvbnMuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL3V0aWxzL3V0aWxzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbWFpbi5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcG9sbG8vY2xpZW50L25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvbm9kZV9tb2R1bGVzL3plbi1vYnNlcnZhYmxlLXRzL2luZGV4LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvY29udGV4dC9jb250ZXh0LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvaG9va3MvaG9va3MuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9wYXJzZXIvcGFyc2VyLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3QvcmVhY3QuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC91dGlsaXRpZXMvZ2xvYmFscy9nbG9iYWxzLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzL3V0aWxpdGllcy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLWludmFyaWFudC9saWIvaW52YXJpYW50LmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtaW52YXJpYW50L3Byb2Nlc3MvbWFpbi5janMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2NvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd3J5L2VxdWFsaXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdyeS90cmllXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtd3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9wdGltaXNtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzeW1ib2wtb2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInplbi1vYnNlcnZhYmxlL2luZGV4LmpzXCIiXSwibmFtZXMiOlsiQUNDRVNTX1RPS0VOX0tFWSIsIkFQSV9VUkwiLCJJU1NFUlZFUiIsImdldEFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldFVzZXIiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyRnJvbVRva2VuIiwibG9naW4iLCJ1c2VySWQiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImpzb24iLCJzZXRJdGVtIiwiaWQiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiand0UGF5bG9hZCIsImp3dERlY29kZSIsInN1YiIsInVzdWFyaW8iLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwid3NMaW5rIiwiaXNTdWJzY3JpcHRpb24iLCJxdWVyeSIsImRlZmluaXRpb24iLCJnZXRNYWluRGVmaW5pdGlvbiIsImtpbmQiLCJLaW5kIiwiT1BFUkFUSU9OX0RFRklOSVRJT04iLCJvcGVyYXRpb24iLCJPcGVyYXRpb25UeXBlTm9kZSIsIlNVQlNDUklQVElPTiIsImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJhdXRob3JpemF0aW9uIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50Iiwi0YFvbm5lY3RUb0RldlRvb2xzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwibGluayIsInNwbGl0IiwiUGVkaWRvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQZWRpZG9SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VMRUNDSU9OQVJfQ0xJRU5URSIsImNsaWVudGUiLCJwYXlsb2FkIiwiU0VMRUNDSU9OQVJfUFJPRFVDVE8iLCJwcm9kdWN0b3MiLCJDQU5USURBRF9QUk9EVUNUT1MiLCJtYXAiLCJwcm9kdWN0byIsIkFDVFVBTElaQVJfVE9UQUwiLCJ0b3RhbCIsInJlZHVjZSIsIm51ZXZvVG90YWwiLCJhcnRpY3VsbyIsInByZWNpbyIsImNhbnRpZGFkIiwiUGVkaWRvU3RhdGUiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImFncmVnYXJDbGllbnRlIiwiYWdyZWdhclByb2R1Y3RvcyIsInByb2R1Y3Rvc1NlbGVjY2lvbmFkb3MiLCJudWV2b1N0YXRlIiwibGVuZ3RoIiwibnVldm9PYmpldG8iLCJmaW5kIiwicHJvZHVjdG9TdGF0ZSIsImNhbnRpZGFkUHJvZHVjdG9zIiwibnVldm9Qcm9kdWN0byIsImFjdHVhbGl6YXJUb3RhbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FB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QWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRiw4RkFBOEY7QUFDL0s7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QixHQUFHLHFCQUE1QjtBQUNBLE1BQU1HLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1FLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1HLGdCQUFnQixHQUFHLGtCQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5jb25zdCBBQ0NFU1NfVE9LRU5fS0VZID0gJ3Rva2VuJztcclxuY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjkwMDAnO1xyXG5jb25zdCBJU1NFUlZFUiA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjZXNzVG9rZW4oKSB7XHJcbiAgaWYoIUlTU0VSVkVSKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcigpIHtcclxuICBpZighSVNTRVJWRVIpIHtcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGVzZGUgZWwgZ2V0VXNlclwiLCB0b2tlbik7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldFVzZXJGcm9tVG9rZW4odG9rZW4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHVzZXJJZCwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2xvZ2luYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VySWQsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG4gIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSwgdG9rZW4pO1xyXG4gICAgcmV0dXJuIHsgaWQ6IHVzZXJJZCB9O1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBQ0NFU1NfVE9LRU5fS0VZKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlckZyb21Ub2tlbih0b2tlbikge1xyXG4gIGlmKCFJU1NFUlZFUil7XHJcbiAgICBjb25zb2xlLmxvZyhcImRlc2RlIGVsIGdldFVzZXJGcm9tVG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgY29uc3Qgand0UGF5bG9hZCA9IGp3dERlY29kZSh0b2tlbilcclxuICAgIGNvbnNvbGUubG9nKGp3dFBheWxvYWQuc3ViKTtcclxuICAgIHJldHVybiB7IHVzdWFyaW86e2lkOiBqd3RQYXlsb2FkLnN1Yn0gfTtcclxuXHJcbiAgfVxyXG59XHJcbiIsIi8vaHR0cCBsaW5rIHBlcm1pdGUgY29uZWN0YXJzZSBjb24gZWwgc2Vydmlkb3IgZGUgYXBvbGxvXHJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xyXG5pbXBvcnQge3NldENvbnRleHR9IGZyb20gJ2Fwb2xsby1saW5rLWNvbnRleHQnXHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUsIHNwbGl0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBHcmFwaFFMV3NMaW5rIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvbGluay9zdWJzY3JpcHRpb25zJztcclxuaW1wb3J0IHsgZ2V0TWFpbkRlZmluaXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudC91dGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBLaW5kLCBPcGVyYXRpb25UeXBlTm9kZSB9IGZyb20gJ2dyYXBocWwnO1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgYXMgY3JlYXRlV3NDbGllbnQgfSBmcm9tICdncmFwaHFsLXdzJztcclxuaW1wb3J0IHsgZ2V0QWNjZXNzVG9rZW4gfSBmcm9tICcuLi9hdXRoL2F1dGgnO1xyXG5cclxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xyXG4gICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2dyYXBocWwnLFxyXG4gIH0pO1xyXG4gIFxyXG5cclxuY29uc3Qgd3NMaW5rID1cclxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgXHJcbiAgICAgICAgP1xyXG5cclxuICAgIG5ldyBHcmFwaFFMV3NMaW5rKGNyZWF0ZVdzQ2xpZW50KHtcclxuICAgICAgICB1cmw6ICd3czovL2xvY2FsaG9zdDo5MDAwL2dyYXBocWwnLFxyXG4gICAgICAgIC8vIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7IGFjY2Vzc1Rva2VuOiBnZXRBY2Nlc3NUb2tlbigpIH0pLFxyXG4gICAgfSkpXHJcblxyXG4gICAgICAgIDpcclxuICAgIFxyXG4gICAgbnVsbFxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uKHsgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcclxuICAgIHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09IEtpbmQuT1BFUkFUSU9OX0RFRklOSVRJT05cclxuICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gT3BlcmF0aW9uVHlwZU5vZGUuU1VCU0NSSVBUSU9OO1xyXG59XHJcbiAgXHJcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXyx7aGVhZGVyc30pID0+IHtcclxuICAgIC8vTGVlciBlbCBzdG9yYWdlIGFsbWFjZW5hZG9cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICDRgW9ubmVjdFRvRGV2VG9vbHM6IHRydWUsXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuICAgIGxpbms6IFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICBcclxuICAgICAgICA/XHJcblxyXG4gICAgc3BsaXQoaXNTdWJzY3JpcHRpb24sIHdzTGluaywgYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSApXHJcblxyXG4gICAgICAgIDpcclxuXHJcbiAgICBudWxsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50IiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuY29uc3QgUGVkaWRvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGRlZmF1bHQgUGVkaWRvQ29udGV4dDsiLCJpbXBvcnQge1xyXG4gICAgU0VMRUNDSU9OQVJfQ0xJRU5URSxcclxuICAgIFNFTEVDQ0lPTkFSX1BST0RVQ1RPLFxyXG4gICAgQ0FOVElEQURfUFJPRFVDVE9TLCBcclxuICAgIEFDVFVBTElaQVJfVE9UQUxcclxufSBmcm9tICcuLi8uLi90eXBlcydcclxuXHJcbmNvbnN0IFBlZGlkb1JlZHVjZXIgPSAgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBTRUxFQ0NJT05BUl9DTElFTlRFIDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBcclxuICAgICAgICAgICAgICAgIGNsaWVudGUgOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTRUxFQ0NJT05BUl9QUk9EVUNUTyA6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3MgOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDQU5USURBRF9QUk9EVUNUT1MgOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdG9zIDogc3RhdGUucHJvZHVjdG9zLm1hcChwcm9kdWN0byA9PiBwcm9kdWN0by5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQgPyBwcm9kdWN0byA9IGFjdGlvbi5wYXlsb2FkIDogcHJvZHVjdG8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVFVBTElaQVJfVE9UQUwgOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWwgOiBzdGF0ZS5wcm9kdWN0b3MucmVkdWNlKChudWV2b1RvdGFsLCBhcnRpY3VsbykgPT4gbnVldm9Ub3RhbCArPSBhcnRpY3Vsby5wcmVjaW8gKiBhcnRpY3Vsby5jYW50aWRhZCwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQgOiBcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGVkaWRvUmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBlZGlkb0NvbnRleHQgZnJvbSAnLi9QZWRpZG9Db250ZXh0J1xyXG5pbXBvcnQgUGVkaWRvUmVkdWNlciBmcm9tICcuL1BlZGlkb1JlZHVjZXInXHJcbmltcG9ydCB7XHJcbiAgICBTRUxFQ0NJT05BUl9DTElFTlRFLFxyXG4gICAgU0VMRUNDSU9OQVJfUFJPRFVDVE8sXHJcbiAgICBDQU5USURBRF9QUk9EVUNUT1MsIFxyXG4gICAgQUNUVUFMSVpBUl9UT1RBTFxyXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xyXG5cclxuY29uc3QgUGVkaWRvU3RhdGUgPSAoe2NoaWxkcmVufSkgPT57XHJcbiAgICAvL1N0YXRlIGRlIFBlZGlkb3NcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBjbGllbnRlIDoge30sXHJcbiAgICAgICAgcHJvZHVjdG9zIDogW10sXHJcbiAgICAgICAgdG90YWwgOiAwXHJcbiAgICB9XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUGVkaWRvUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IGFncmVnYXJDbGllbnRlID0gKGNsaWVudGUpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZSA6IFNFTEVDQ0lPTkFSX0NMSUVOVEUsIFxyXG4gICAgICAgICAgICBwYXlsb2FkIDogY2xpZW50ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZ3JlZ2FyUHJvZHVjdG9zID0gKHByb2R1Y3Rvc1NlbGVjY2lvbmFkb3MpID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdG9zIHNlbGVjY2lvbmFkb3MgZGVsIHN0YXRlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUucHJvZHVjdG9zKTtcclxuICAgICAgICBsZXQgbnVldm9TdGF0ZTtcclxuICAgICAgICBpZihzdGF0ZS5wcm9kdWN0b3MubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIC8vVG9tYXIgZGVsIHNlZ3VuZG8gYXJyZWdsbywgdW5hIGNvcGlhIHBhcmEgYXNpZ25hcmxvIGFsIHByaW1lcm9cclxuICAgICAgICAgICAgbnVldm9TdGF0ZSA9IHByb2R1Y3Rvc1NlbGVjY2lvbmFkb3MubWFwKHByb2R1Y3RvID0+e1xyXG4gICAgICAgICAgICBjb25zdCBudWV2b09iamV0byA9IHN0YXRlLnByb2R1Y3Rvcy5maW5kKHByb2R1Y3RvU3RhdGUgPT4gcHJvZHVjdG9TdGF0ZS5pZCA9PT0gcHJvZHVjdG8uaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnByb2R1Y3RvLCAuLi5udWV2b09iamV0b307XHJcbiAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbnVldm9TdGF0ZSA9IHByb2R1Y3Rvc1NlbGVjY2lvbmFkb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZSA6IFNFTEVDQ0lPTkFSX1BST0RVQ1RPLFxyXG4gICAgICAgICAgICBwYXlsb2FkIDogbnVldm9TdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBjYW50aWRhZFByb2R1Y3RvcyA9IChudWV2b1Byb2R1Y3RvKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZSA6IENBTlRJREFEX1BST0RVQ1RPUyxcclxuICAgICAgICAgICAgcGF5bG9hZCA6IG51ZXZvUHJvZHVjdG9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3R1YWxpemFyVG90YWwgPSAoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZSA6IEFDVFVBTElaQVJfVE9UQUxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGVkaWRvQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2xpZW50ZSA6IHN0YXRlLmNsaWVudGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0b3MgOiBzdGF0ZS5wcm9kdWN0b3MsXHJcbiAgICAgICAgICAgICAgICB0b3RhbCA6IHN0YXRlLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgYWdyZWdhckNsaWVudGUsXHJcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyUHJvZHVjdG9zLFxyXG4gICAgICAgICAgICAgICAgY2FudGlkYWRQcm9kdWN0b3MsIFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsaXphclRvdGFsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QZWRpZG9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZWRpZG9TdGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgb3B0aW1pc20gPSByZXF1aXJlKCdvcHRpbWlzbScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcycpO1xudmFyIGVxdWFsaXR5ID0gcmVxdWlyZSgnQHdyeS9lcXVhbGl0eScpO1xudmFyIHRyaWUgPSByZXF1aXJlKCdAd3J5L3RyaWUnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnQHdyeS9jb250ZXh0Jyk7XG5cbnZhciBBcG9sbG9DYWNoZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMuZ2V0RnJhZ21lbnREb2MgPSBvcHRpbWlzbS53cmFwKHV0aWxpdGllcy5nZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQpO1xuICAgIH1cbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb3B0aW1pc3RpY0lkID0gdHlwZW9mIG9wdGlvbnMub3B0aW1pc3RpYyA9PT0gXCJzdHJpbmdcIiA/IG9wdGlvbnMub3B0aW1pc3RpYyA6XG4gICAgICAgICAgICBvcHRpb25zLm9wdGltaXN0aWMgPT09IGZhbHNlID8gbnVsbCA6IHZvaWQgMDtcbiAgICAgICAgdmFyIHVwZGF0ZVJlc3VsdDtcbiAgICAgICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkgeyByZXR1cm4gdXBkYXRlUmVzdWx0ID0gb3B0aW9ucy51cGRhdGUoX3RoaXMpOyB9LCBvcHRpbWlzdGljSWQpO1xuICAgICAgICByZXR1cm4gdXBkYXRlUmVzdWx0O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlY29yZE9wdGltaXN0aWNUcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgb3B0aW1pc3RpY0lkKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBvcHRpbWlzdGljSWQpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybURvY3VtZW50ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS5pZGVudGlmeSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLmdjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnRyYW5zZm9ybUZvckxpbmsgPSBmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlYWRRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9ICEhb3B0aW9ucy5vcHRpbWlzdGljOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHJvb3RJZDogb3B0aW9ucy5pZCB8fCAnUk9PVF9RVUVSWScsIG9wdGltaXN0aWM6IG9wdGltaXN0aWMgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLnJlYWRGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChvcHRpbWlzdGljID09PSB2b2lkIDApIHsgb3B0aW1pc3RpYyA9ICEhb3B0aW9ucy5vcHRpbWlzdGljOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHF1ZXJ5OiB0aGlzLmdldEZyYWdtZW50RG9jKG9wdGlvbnMuZnJhZ21lbnQsIG9wdGlvbnMuZnJhZ21lbnROYW1lKSwgcm9vdElkOiBvcHRpb25zLmlkLCBvcHRpbWlzdGljOiBvcHRpbWlzdGljIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS53cml0ZVF1ZXJ5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBpZCA9IF9hLmlkLCBkYXRhID0gX2EuZGF0YSwgb3B0aW9ucyA9IHRzbGliLl9fcmVzdChfYSwgW1wiaWRcIiwgXCJkYXRhXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBkYXRhSWQ6IGlkIHx8ICdST09UX1FVRVJZJyxcbiAgICAgICAgICAgIHJlc3VsdDogZGF0YSxcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2FjaGUucHJvdG90eXBlLndyaXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGlkID0gX2EuaWQsIGRhdGEgPSBfYS5kYXRhLCBmcmFnbWVudCA9IF9hLmZyYWdtZW50LCBmcmFnbWVudE5hbWUgPSBfYS5mcmFnbWVudE5hbWUsIG9wdGlvbnMgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcImlkXCIsIFwiZGF0YVwiLCBcImZyYWdtZW50XCIsIFwiZnJhZ21lbnROYW1lXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUoT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5nZXRGcmFnbWVudERvYyhmcmFnbWVudCwgZnJhZ21lbnROYW1lKSxcbiAgICAgICAgICAgIGRhdGFJZDogaWQsXG4gICAgICAgICAgICByZXN1bHQ6IGRhdGEsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIEFwb2xsb0NhY2hlLnByb3RvdHlwZS51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCB1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goe1xuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjYWNoZS5yZWFkUXVlcnkob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB1cGRhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSB2b2lkIDAgfHwgZGF0YSA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGRhdGE6IGRhdGEgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DYWNoZS5wcm90b3R5cGUudXBkYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgdXBkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhdGNoKHtcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY2FjaGUucmVhZEZyYWdtZW50KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdXBkYXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwIHx8IGRhdGEgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZUZyYWdtZW50KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBkYXRhOiBkYXRhIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFwb2xsb0NhY2hlO1xufSgpKTtcblxuZXhwb3J0cy5DYWNoZSA9IHZvaWQgMDtcbihmdW5jdGlvbiAoQ2FjaGUpIHtcbn0pKGV4cG9ydHMuQ2FjaGUgfHwgKGV4cG9ydHMuQ2FjaGUgPSB7fSkpO1xuXG52YXIgTWlzc2luZ0ZpZWxkRXJyb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1pc3NpbmdGaWVsZEVycm9yKG1lc3NhZ2UsIHBhdGgsIHF1ZXJ5LCB2YXJpYWJsZXMpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB9XG4gICAgcmV0dXJuIE1pc3NpbmdGaWVsZEVycm9yO1xufSgpKTtcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdChfYSwgY29udGV4dCkge1xuICAgIHZhciBfX3R5cGVuYW1lID0gX2EuX190eXBlbmFtZSwgaWQgPSBfYS5pZCwgX2lkID0gX2EuX2lkO1xuICAgIGlmICh0eXBlb2YgX190eXBlbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dC5rZXlPYmplY3QgPVxuICAgICAgICAgICAgICAgIGlkICE9PSB2b2lkIDAgPyB7IGlkOiBpZCB9IDpcbiAgICAgICAgICAgICAgICAgICAgX2lkICE9PSB2b2lkIDAgPyB7IF9pZDogX2lkIH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCA9PT0gdm9pZCAwKVxuICAgICAgICAgICAgaWQgPSBfaWQ7XG4gICAgICAgIGlmIChpZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX190eXBlbmFtZSwgXCI6XCIpLmNvbmNhdCgodHlwZW9mIGlkID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSA/IGlkIDogSlNPTi5zdHJpbmdpZnkoaWQpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFJZEZyb21PYmplY3Q6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0LFxuICAgIGFkZFR5cGVuYW1lOiB0cnVlLFxuICAgIHJlc3VsdENhY2hpbmc6IHRydWUsXG4gICAgY2Fub25pemVSZXN1bHRzOiBmYWxzZSxcbn07XG5mdW5jdGlvbiBub3JtYWxpemVDb25maWcoY29uZmlnKSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5jb21wYWN0KGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG59XG5mdW5jdGlvbiBzaG91bGRDYW5vbml6ZVJlc3VsdHMoY29uZmlnKSB7XG4gICAgdmFyIHZhbHVlID0gY29uZmlnLmNhbm9uaXplUmVzdWx0cztcbiAgICByZXR1cm4gdmFsdWUgPT09IHZvaWQgMCA/IGRlZmF1bHRDb25maWcuY2Fub25pemVSZXN1bHRzIDogdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRUeXBlbmFtZUZyb21TdG9yZU9iamVjdChzdG9yZSwgb2JqZWN0T3JSZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICA/IHN0b3JlLmdldChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgXCJfX3R5cGVuYW1lXCIpXG4gICAgICAgIDogb2JqZWN0T3JSZWZlcmVuY2UgJiYgb2JqZWN0T3JSZWZlcmVuY2UuX190eXBlbmFtZTtcbn1cbnZhciBUeXBlT3JGaWVsZE5hbWVSZWdFeHAgPSAvXltfYS16XVtfMC05YS16XSovaTtcbmZ1bmN0aW9uIGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICB2YXIgbWF0Y2ggPSBzdG9yZUZpZWxkTmFtZS5tYXRjaChUeXBlT3JGaWVsZE5hbWVSZWdFeHApO1xuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzBdIDogc3RvcmVGaWVsZE5hbWU7XG59XG5mdW5jdGlvbiBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KHNlbGVjdGlvblNldCwgcmVzdWx0LCB2YXJpYWJsZXMpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHJlc3VsdClcbiAgICAgICAgICAgID8gcmVzdWx0LmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBzZWxlY3Rpb25TZXRNYXRjaGVzUmVzdWx0KHNlbGVjdGlvblNldCwgaXRlbSwgdmFyaWFibGVzKTsgfSlcbiAgICAgICAgICAgIDogc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0ZpZWxkKGZpZWxkKSAmJiB1dGlsaXRpZXMuc2hvdWxkSW5jbHVkZShmaWVsZCwgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwocmVzdWx0LCBrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIWZpZWxkLnNlbGVjdGlvblNldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoZmllbGQuc2VsZWN0aW9uU2V0LCByZXN1bHRba2V5XSwgdmFyaWFibGVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpICYmXG4gICAgICAgICF1dGlsaXRpZXMuaXNSZWZlcmVuY2UodmFsdWUpICYmXG4gICAgICAgICFpc0FycmF5KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIG1ha2VQcm9jZXNzZWRGaWVsZHNNZXJnZXIoKSB7XG4gICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcjtcbn1cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH07XG5cbnZhciBERUxFVEUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGRlbE1vZGlmaWVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gREVMRVRFOyB9O1xudmFyIElOVkFMSURBVEUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZXhwb3J0cy5FbnRpdHlTdG9yZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRW50aXR5U3RvcmUocG9saWNpZXMsIGdyb3VwKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9saWNpZXMgPSBwb2xpY2llcztcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgICAgICB0aGlzLmRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJvb3RJZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLmdldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAob2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKSB7IHJldHVybiB1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvYmplY3RPclJlZmVyZW5jZSlcbiAgICAgICAgICAgID8gX3RoaXMuZ2V0KG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmLCBzdG9yZUZpZWxkTmFtZSlcbiAgICAgICAgICAgIDogb2JqZWN0T3JSZWZlcmVuY2UgJiYgb2JqZWN0T3JSZWZlcmVuY2Vbc3RvcmVGaWVsZE5hbWVdKTsgfTtcbiAgICAgICAgdGhpcy5jYW5SZWFkID0gZnVuY3Rpb24gKG9iak9yUmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iak9yUmVmKVxuICAgICAgICAgICAgICAgID8gX3RoaXMuaGFzKG9iak9yUmVmLl9fcmVmKVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG9iak9yUmVmID09PSBcIm9iamVjdFwiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvUmVmZXJlbmNlID0gZnVuY3Rpb24gKG9iak9ySWRPclJlZiwgbWVyZ2VJbnRvU3RvcmUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqT3JJZE9yUmVmID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKG9iak9ySWRPclJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iak9ySWRPclJlZikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqT3JJZE9yUmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlkID0gX3RoaXMucG9saWNpZXMuaWRlbnRpZnkob2JqT3JJZE9yUmVmKVswXTtcbiAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICAgIHZhciByZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShpZCk7XG4gICAgICAgICAgICAgICAgaWYgKG1lcmdlSW50b1N0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1lcmdlKGlkLCBvYmpPcklkT3JSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvb2t1cChkYXRhSWQsIHRydWUpICE9PSB2b2lkIDA7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGRhdGFJZCwgZmllbGROYW1lKSB7XG4gICAgICAgIHRoaXMuZ3JvdXAuZGVwZW5kKGRhdGFJZCwgZmllbGROYW1lKTtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSkge1xuICAgICAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICBpZiAoc3RvcmVPYmplY3QgJiYgaGFzT3duLmNhbGwoc3RvcmVPYmplY3QsIGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVPYmplY3RbZmllbGROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGROYW1lID09PSBcIl9fdHlwZW5hbWVcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcy5wb2xpY2llcy5yb290VHlwZW5hbWVzQnlJZCwgZGF0YUlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIExheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KGRhdGFJZCwgZmllbGROYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIChkYXRhSWQsIGRlcGVuZE9uRXhpc3RlbmNlKSB7XG4gICAgICAgIGlmIChkZXBlbmRPbkV4aXN0ZW5jZSlcbiAgICAgICAgICAgIHRoaXMuZ3JvdXAuZGVwZW5kKGRhdGFJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5sb29rdXAoZGF0YUlkLCBkZXBlbmRPbkV4aXN0ZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChvbGRlciwgbmV3ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGFJZDtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvbGRlcikpXG4gICAgICAgICAgICBvbGRlciA9IG9sZGVyLl9fcmVmO1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG5ld2VyKSlcbiAgICAgICAgICAgIG5ld2VyID0gbmV3ZXIuX19yZWY7XG4gICAgICAgIHZhciBleGlzdGluZyA9IHR5cGVvZiBvbGRlciA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyB0aGlzLmxvb2t1cChkYXRhSWQgPSBvbGRlcilcbiAgICAgICAgICAgIDogb2xkZXI7XG4gICAgICAgIHZhciBpbmNvbWluZyA9IHR5cGVvZiBuZXdlciA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyB0aGlzLmxvb2t1cChkYXRhSWQgPSBuZXdlcilcbiAgICAgICAgICAgIDogbmV3ZXI7XG4gICAgICAgIGlmICghaW5jb21pbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCh0eXBlb2YgZGF0YUlkID09PSBcInN0cmluZ1wiLCBcInN0b3JlLm1lcmdlIGV4cGVjdHMgYSBzdHJpbmcgSURcIikgOiBnbG9iYWxzLmludmFyaWFudCh0eXBlb2YgZGF0YUlkID09PSBcInN0cmluZ1wiLCAxKTtcbiAgICAgICAgdmFyIG1lcmdlZCA9IG5ldyB1dGlsaXRpZXMuRGVlcE1lcmdlcihzdG9yZU9iamVjdFJlY29uY2lsZXIpLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZyk7XG4gICAgICAgIHRoaXMuZGF0YVtkYXRhSWRdID0gbWVyZ2VkO1xuICAgICAgICBpZiAobWVyZ2VkICE9PSBleGlzdGluZykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVmc1tkYXRhSWRdO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXAuY2FjaGluZykge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZHNUb0RpcnR5XzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvRGlydHlfMS5fX2V4aXN0cyA9IDE7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5jb21pbmcpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmcgfHwgZXhpc3Rpbmdbc3RvcmVGaWVsZE5hbWVdICE9PSBtZXJnZWRbc3RvcmVGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb0RpcnR5XzFbc3RvcmVGaWVsZE5hbWVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgIT09IHN0b3JlRmllbGROYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV90aGlzLnBvbGljaWVzLmhhc0tleUFyZ3MobWVyZ2VkLl9fdHlwZW5hbWUsIGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb0RpcnR5XzFbZmllbGROYW1lXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVyZ2VkW3N0b3JlRmllbGROYW1lXSA9PT0gdm9pZCAwICYmICEoX3RoaXMgaW5zdGFuY2VvZiBMYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVyZ2VkW3N0b3JlRmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZHNUb0RpcnR5XzEuX190eXBlbmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9fdHlwZW5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXSA9PT0gbWVyZ2VkLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1RvRGlydHlfMS5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZHNUb0RpcnR5XzEpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkTmFtZSkgeyByZXR1cm4gX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBmaWVsZE5hbWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLm1vZGlmeSA9IGZ1bmN0aW9uIChkYXRhSWQsIGZpZWxkcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSB0aGlzLmxvb2t1cChkYXRhSWQpO1xuICAgICAgICBpZiAoc3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkRmllbGRzXzEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgdmFyIG5lZWRUb01lcmdlXzEgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBhbGxEZWxldGVkXzEgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHNoYXJlZERldGFpbHNfMSA9IHtcbiAgICAgICAgICAgICAgICBERUxFVEU6IERFTEVURSxcbiAgICAgICAgICAgICAgICBJTlZBTElEQVRFOiBJTlZBTElEQVRFLFxuICAgICAgICAgICAgICAgIGlzUmVmZXJlbmNlOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgdG9SZWZlcmVuY2U6IHRoaXMudG9SZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgY2FuUmVhZDogdGhpcy5jYW5SZWFkLFxuICAgICAgICAgICAgICAgIHJlYWRGaWVsZDogZnVuY3Rpb24gKGZpZWxkTmFtZU9yT3B0aW9ucywgZnJvbSkgeyByZXR1cm4gX3RoaXMucG9saWNpZXMucmVhZEZpZWxkKHR5cGVvZiBmaWVsZE5hbWVPck9wdGlvbnMgPT09IFwic3RyaW5nXCIgPyB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lT3JPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tIHx8IHV0aWxpdGllcy5tYWtlUmVmZXJlbmNlKGRhdGFJZCksXG4gICAgICAgICAgICAgICAgfSA6IGZpZWxkTmFtZU9yT3B0aW9ucywgeyBzdG9yZTogX3RoaXMgfSk7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZUZyb21TdG9yZU5hbWUoc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZFZhbHVlID0gc3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlID09PSB2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgbW9kaWZ5ID0gdHlwZW9mIGZpZWxkcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gZmllbGRzXG4gICAgICAgICAgICAgICAgICAgIDogZmllbGRzW3N0b3JlRmllbGROYW1lXSB8fCBmaWVsZHNbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobW9kaWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IG1vZGlmeSA9PT0gZGVsTW9kaWZpZXIgPyBERUxFVEUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5KHV0aWxpdGllcy5tYXliZURlZXBGcmVlemUoZmllbGRWYWx1ZSksIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBzaGFyZWREZXRhaWxzXzEpLCB7IGZpZWxkTmFtZTogZmllbGROYW1lLCBzdG9yZUZpZWxkTmFtZTogc3RvcmVGaWVsZE5hbWUsIHN0b3JhZ2U6IF90aGlzLmdldFN0b3JhZ2UoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkgfSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IElOVkFMSURBVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBERUxFVEUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGZpZWxkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzFbc3RvcmVGaWVsZE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZFRvTWVyZ2VfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsRGVsZXRlZF8xID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobmVlZFRvTWVyZ2VfMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVyZ2UoZGF0YUlkLCBjaGFuZ2VkRmllbGRzXzEpO1xuICAgICAgICAgICAgICAgIGlmIChhbGxEZWxldGVkXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2RhdGFJZF0gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2RhdGFJZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5kaXJ0eShkYXRhSWQsIFwiX19leGlzdHNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoZGF0YUlkLCBmaWVsZE5hbWUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgc3RvcmVPYmplY3QgPSB0aGlzLmxvb2t1cChkYXRhSWQpO1xuICAgICAgICBpZiAoc3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IHRoaXMuZ2V0RmllbGRWYWx1ZShzdG9yZU9iamVjdCwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lID0gZmllbGROYW1lICYmIGFyZ3NcbiAgICAgICAgICAgICAgICA/IHRoaXMucG9saWNpZXMuZ2V0U3RvcmVGaWVsZE5hbWUoeyB0eXBlbmFtZTogdHlwZW5hbWUsIGZpZWxkTmFtZTogZmllbGROYW1lLCBhcmdzOiBhcmdzIH0pXG4gICAgICAgICAgICAgICAgOiBmaWVsZE5hbWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RpZnkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSA/IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW3N0b3JlRmllbGROYW1lXSA9IGRlbE1vZGlmaWVyLFxuICAgICAgICAgICAgICAgIF9hKSA6IGRlbE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZXZpY3QgPSBmdW5jdGlvbiAob3B0aW9ucywgbGltaXQpIHtcbiAgICAgICAgdmFyIGV2aWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbCh0aGlzLmRhdGEsIG9wdGlvbnMuaWQpKSB7XG4gICAgICAgICAgICAgICAgZXZpY3RlZCA9IHRoaXMuZGVsZXRlKG9wdGlvbnMuaWQsIG9wdGlvbnMuZmllbGROYW1lLCBvcHRpb25zLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllciAmJiB0aGlzICE9PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGV2aWN0ZWQgPSB0aGlzLnBhcmVudC5ldmljdChvcHRpb25zLCBsaW1pdCkgfHwgZXZpY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZpZWxkTmFtZSB8fCBldmljdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5kaXJ0eShvcHRpb25zLmlkLCBvcHRpb25zLmZpZWxkTmFtZSB8fCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmljdGVkO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcGxhY2UobnVsbCk7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgdmFyIGV4dHJhUm9vdElkcyA9IFtdO1xuICAgICAgICB0aGlzLmdldFJvb3RJZFNldCgpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBpZiAoIWhhc093bi5jYWxsKF90aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkLCBpZCkpIHtcbiAgICAgICAgICAgICAgICBleHRyYVJvb3RJZHMucHVzaChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXh0cmFSb290SWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgb2JqLl9fTUVUQSA9IHsgZXh0cmFSb290SWRzOiBleHRyYVJvb3RJZHMuc29ydCgpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld0RhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgICAgIGlmICghKG5ld0RhdGEgJiYgaGFzT3duLmNhbGwobmV3RGF0YSwgZGF0YUlkKSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUoZGF0YUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdEYXRhKSB7XG4gICAgICAgICAgICB2YXIgX19NRVRBID0gbmV3RGF0YS5fX01FVEEsIHJlc3RfMSA9IHRzbGliLl9fcmVzdChuZXdEYXRhLCBbXCJfX01FVEFcIl0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzdF8xKS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tZXJnZShkYXRhSWQsIHJlc3RfMVtkYXRhSWRdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKF9fTUVUQSkge1xuICAgICAgICAgICAgICAgIF9fTUVUQS5leHRyYVJvb3RJZHMuZm9yRWFjaCh0aGlzLnJldGFpbiwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbiAocm9vdElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RJZHNbcm9vdElkXSA9ICh0aGlzLnJvb3RJZHNbcm9vdElkXSB8fCAwKSArIDE7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyb290SWQpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdElkc1tyb290SWRdID4gMCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gLS10aGlzLnJvb3RJZHNbcm9vdElkXTtcbiAgICAgICAgICAgIGlmICghY291bnQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdElkc1tyb290SWRdO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLmdldFJvb3RJZFNldCA9IGZ1bmN0aW9uIChpZHMpIHtcbiAgICAgICAgaWYgKGlkcyA9PT0gdm9pZCAwKSB7IGlkcyA9IG5ldyBTZXQoKTsgfVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJvb3RJZHMpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBMYXllcikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZ2V0Um9vdElkU2V0KGlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvbGljaWVzLnJvb3RUeXBlbmFtZXNCeUlkKS5mb3JFYWNoKGlkcy5hZGQsIGlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICB9O1xuICAgIEVudGl0eVN0b3JlLnByb3RvdHlwZS5nYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlkcyA9IHRoaXMuZ2V0Um9vdElkU2V0KCk7XG4gICAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgaWRzLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoc25hcHNob3QsIGlkKSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKF90aGlzLmZpbmRDaGlsZFJlZklkcyhpZCkpLmZvckVhY2goaWRzLmFkZCwgaWRzKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgc25hcHNob3RbaWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlkc1RvUmVtb3ZlID0gT2JqZWN0LmtleXMoc25hcHNob3QpO1xuICAgICAgICBpZiAoaWRzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgcm9vdF8xID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChyb290XzEgaW5zdGFuY2VvZiBMYXllcilcbiAgICAgICAgICAgICAgICByb290XzEgPSByb290XzEucGFyZW50O1xuICAgICAgICAgICAgaWRzVG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIHJvb3RfMS5kZWxldGUoaWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzVG9SZW1vdmU7XG4gICAgfTtcbiAgICBFbnRpdHlTdG9yZS5wcm90b3R5cGUuZmluZENoaWxkUmVmSWRzID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRoaXMucmVmcywgZGF0YUlkKSkge1xuICAgICAgICAgICAgdmFyIGZvdW5kXzEgPSB0aGlzLnJlZnNbZGF0YUlkXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB2YXIgcm9vdCA9IHRoaXMuZGF0YVtkYXRhSWRdO1xuICAgICAgICAgICAgaWYgKCFyb290KVxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF8xO1xuICAgICAgICAgICAgdmFyIHdvcmtTZXRfMSA9IG5ldyBTZXQoW3Jvb3RdKTtcbiAgICAgICAgICAgIHdvcmtTZXRfMS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRfMVtvYmouX19yZWZdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3Qob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrU2V0XzEuYWRkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVmc1tkYXRhSWRdO1xuICAgIH07XG4gICAgRW50aXR5U3RvcmUucHJvdG90eXBlLm1ha2VDYWNoZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAua2V5TWFrZXIubG9va3VwQXJyYXkoYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBFbnRpdHlTdG9yZTtcbn0oKSk7XG52YXIgQ2FjaGVHcm91cCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGVHcm91cChjYWNoaW5nLCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IG51bGw7IH1cbiAgICAgICAgdGhpcy5jYWNoaW5nID0gY2FjaGluZztcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzZXRDYWNoaW5nKCk7XG4gICAgfVxuICAgIENhY2hlR3JvdXAucHJvdG90eXBlLnJlc2V0Q2FjaGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kID0gdGhpcy5jYWNoaW5nID8gb3B0aW1pc20uZGVwKCkgOiBudWxsO1xuICAgICAgICB0aGlzLmtleU1ha2VyID0gbmV3IHRyaWUuVHJpZSh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCk7XG4gICAgfTtcbiAgICBDYWNoZUdyb3VwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5kKSB7XG4gICAgICAgICAgICB0aGlzLmQobWFrZURlcEtleShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSk7XG4gICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICBpZiAoZmllbGROYW1lICE9PSBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZChtYWtlRGVwS2V5KGRhdGFJZCwgZmllbGROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5kZXBlbmQoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhY2hlR3JvdXAucHJvdG90eXBlLmRpcnR5ID0gZnVuY3Rpb24gKGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZCkge1xuICAgICAgICAgICAgdGhpcy5kLmRpcnR5KG1ha2VEZXBLZXkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSksIHN0b3JlRmllbGROYW1lID09PSBcIl9fZXhpc3RzXCIgPyBcImZvcmdldFwiIDogXCJzZXREaXJ0eVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENhY2hlR3JvdXA7XG59KCkpO1xuZnVuY3Rpb24gbWFrZURlcEtleShkYXRhSWQsIHN0b3JlRmllbGROYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JlRmllbGROYW1lICsgJyMnICsgZGF0YUlkO1xufVxuZnVuY3Rpb24gbWF5YmVEZXBlbmRPbkV4aXN0ZW5jZU9mRW50aXR5KHN0b3JlLCBlbnRpdHlJZCkge1xuICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoc3RvcmUpKSB7XG4gICAgICAgIHN0b3JlLmdyb3VwLmRlcGVuZChlbnRpdHlJZCwgXCJfX2V4aXN0c1wiKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gKEVudGl0eVN0b3JlKSB7XG4gICAgdmFyIFJvb3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICB0c2xpYi5fX2V4dGVuZHMoUm9vdCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gUm9vdChfYSkge1xuICAgICAgICAgICAgdmFyIHBvbGljaWVzID0gX2EucG9saWNpZXMsIF9iID0gX2EucmVzdWx0Q2FjaGluZywgcmVzdWx0Q2FjaGluZyA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIHNlZWQgPSBfYS5zZWVkO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcG9saWNpZXMsIG5ldyBDYWNoZUdyb3VwKHJlc3VsdENhY2hpbmcpKSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuc3R1bXAgPSBuZXcgU3R1bXAoX3RoaXMpO1xuICAgICAgICAgICAgX3RoaXMuc3RvcmFnZVRyaWUgPSBuZXcgdHJpZS5UcmllKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwKTtcbiAgICAgICAgICAgIGlmIChzZWVkKVxuICAgICAgICAgICAgICAgIF90aGlzLnJlcGxhY2Uoc2VlZCk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgUm9vdC5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJJZCwgcmVwbGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHVtcC5hZGRMYXllcihsYXllcklkLCByZXBsYXkpO1xuICAgICAgICB9O1xuICAgICAgICBSb290LnByb3RvdHlwZS5yZW1vdmVMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBSb290LnByb3RvdHlwZS5nZXRTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVRyaWUubG9va3VwQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJvb3Q7XG4gICAgfShFbnRpdHlTdG9yZSkpO1xuICAgIEVudGl0eVN0b3JlLlJvb3QgPSBSb290O1xufSkoZXhwb3J0cy5FbnRpdHlTdG9yZSB8fCAoZXhwb3J0cy5FbnRpdHlTdG9yZSA9IHt9KSk7XG52YXIgTGF5ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhMYXllciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYXllcihpZCwgcGFyZW50LCByZXBsYXksIGdyb3VwKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBhcmVudC5wb2xpY2llcywgZ3JvdXApIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlkID0gaWQ7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMucmVwbGF5ID0gcmVwbGF5O1xuICAgICAgICBfdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgICAgICByZXBsYXkoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIExheWVyLnByb3RvdHlwZS5hZGRMYXllciA9IGZ1bmN0aW9uIChsYXllcklkLCByZXBsYXkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMYXllcihsYXllcklkLCB0aGlzLCByZXBsYXksIHRoaXMuZ3JvdXApO1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gKGxheWVySWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50LnJlbW92ZUxheWVyKGxheWVySWQpO1xuICAgICAgICBpZiAobGF5ZXJJZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXAuY2FjaGluZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoZGF0YUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvd25TdG9yZU9iamVjdCA9IF90aGlzLmRhdGFbZGF0YUlkXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudFN0b3JlT2JqZWN0ID0gcGFyZW50W1wibG9va3VwXCJdKGRhdGFJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50U3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZShkYXRhSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFvd25TdG9yZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBcIl9fZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyZW50U3RvcmVPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ3JvdXAuZGlydHkoZGF0YUlkLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvd25TdG9yZU9iamVjdCAhPT0gcGFyZW50U3RvcmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG93blN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXF1YWxpdHkuZXF1YWwob3duU3RvcmVPYmplY3Rbc3RvcmVGaWVsZE5hbWVdLCBwYXJlbnRTdG9yZU9iamVjdFtzdG9yZUZpZWxkTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdyb3VwLmRpcnR5KGRhdGFJZCwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHRoaXMucGFyZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYWRkTGF5ZXIodGhpcy5pZCwgdGhpcy5yZXBsYXkpO1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMucGFyZW50LnRvT2JqZWN0KCkpLCB0aGlzLmRhdGEpO1xuICAgIH07XG4gICAgTGF5ZXIucHJvdG90eXBlLmZpbmRDaGlsZFJlZklkcyA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgdmFyIGZyb21QYXJlbnQgPSB0aGlzLnBhcmVudC5maW5kQ2hpbGRSZWZJZHMoZGF0YUlkKTtcbiAgICAgICAgcmV0dXJuIGhhc093bi5jYWxsKHRoaXMuZGF0YSwgZGF0YUlkKSA/IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBmcm9tUGFyZW50KSwgX3N1cGVyLnByb3RvdHlwZS5maW5kQ2hpbGRSZWZJZHMuY2FsbCh0aGlzLCBkYXRhSWQpKSA6IGZyb21QYXJlbnQ7XG4gICAgfTtcbiAgICBMYXllci5wcm90b3R5cGUuZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHAgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgd2hpbGUgKHAucGFyZW50KVxuICAgICAgICAgICAgcCA9IHAucGFyZW50O1xuICAgICAgICByZXR1cm4gcC5nZXRTdG9yYWdlLmFwcGx5KHAsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gTGF5ZXI7XG59KGV4cG9ydHMuRW50aXR5U3RvcmUpKTtcbnZhciBTdHVtcCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKFN0dW1wLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN0dW1wKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiRW50aXR5U3RvcmUuU3R1bXBcIiwgcm9vdCwgZnVuY3Rpb24gKCkgeyB9LCBuZXcgQ2FjaGVHcm91cChyb290Lmdyb3VwLmNhY2hpbmcsIHJvb3QuZ3JvdXApKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTdHVtcC5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU3R1bXAucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQubWVyZ2UuYXBwbHkodGhpcy5wYXJlbnQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gU3R1bXA7XG59KExheWVyKSk7XG5mdW5jdGlvbiBzdG9yZU9iamVjdFJlY29uY2lsZXIoZXhpc3RpbmdPYmplY3QsIGluY29taW5nT2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBleGlzdGluZ1ZhbHVlID0gZXhpc3RpbmdPYmplY3RbcHJvcGVydHldO1xuICAgIHZhciBpbmNvbWluZ1ZhbHVlID0gaW5jb21pbmdPYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBlcXVhbGl0eS5lcXVhbChleGlzdGluZ1ZhbHVlLCBpbmNvbWluZ1ZhbHVlKSA/IGV4aXN0aW5nVmFsdWUgOiBpbmNvbWluZ1ZhbHVlO1xufVxuZnVuY3Rpb24gc3VwcG9ydHNSZXN1bHRDYWNoaW5nKHN0b3JlKSB7XG4gICAgcmV0dXJuICEhKHN0b3JlIGluc3RhbmNlb2YgZXhwb3J0cy5FbnRpdHlTdG9yZSAmJiBzdG9yZS5ncm91cC5jYWNoaW5nKTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0NvcHkodmFsdWUpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICA/IHZhbHVlLnNsaWNlKDApXG4gICAgICAgICAgICA6IHRzbGliLl9fYXNzaWduKHsgX19wcm90b19fOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpIH0sIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxudmFyIE9iamVjdENhbm9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RDYW5vbigpIHtcbiAgICAgICAgdGhpcy5rbm93biA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtTZXQgPyBXZWFrU2V0IDogU2V0KSgpO1xuICAgICAgICB0aGlzLnBvb2wgPSBuZXcgdHJpZS5UcmllKHV0aWxpdGllcy5jYW5Vc2VXZWFrTWFwKTtcbiAgICAgICAgdGhpcy5wYXNzZXMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmtleXNCeUpTT04gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZW1wdHkgPSB0aGlzLmFkbWl0KHt9KTtcbiAgICB9XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLmlzS25vd24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpICYmIHRoaXMua25vd24uaGFzKHZhbHVlKTtcbiAgICB9O1xuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBzaGFsbG93Q29weSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnBhc3Nlcy5zZXQoY29weSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JqZWN0Q2Fub24ucHJvdG90eXBlLmFkbWl0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsID0gdGhpcy5wYXNzZXMuZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbClcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWw7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgICAgICAgICAgc3dpdGNoIChwcm90bykge1xuICAgICAgICAgICAgICAgIGNhc2UgQXJyYXkucHJvdG90eXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmtub3duLmhhcyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJheSA9IHZhbHVlLm1hcCh0aGlzLmFkbWl0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnBvb2wubG9va3VwQXJyYXkoYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUuYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua25vd24uYWRkKG5vZGUuYXJyYXkgPSBhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgICAgICAgY2FzZSBPYmplY3QucHJvdG90eXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmtub3duLmhhcyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm90b18xID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFycmF5XzEgPSBbcHJvdG9fMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5zb3J0ZWRLZXlzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlfMS5wdXNoKGtleXMuanNvbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdFZhbHVlSW5kZXhfMSA9IGFycmF5XzEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnNvcnRlZC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5XzEucHVzaChfdGhpcy5hZG1pdCh2YWx1ZVtrZXldKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMucG9vbC5sb29rdXBBcnJheShhcnJheV8xKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLm9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ial8xID0gbm9kZS5vYmplY3QgPSBPYmplY3QuY3JlYXRlKHByb3RvXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rbm93bi5hZGQob2JqXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5zb3J0ZWQuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqXzFba2V5XSA9IGFycmF5XzFbZmlyc3RWYWx1ZUluZGV4XzEgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKG9ial8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5vYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9iamVjdENhbm9uLnByb3RvdHlwZS5zb3J0ZWRLZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5wb29sLmxvb2t1cEFycmF5KGtleXMpO1xuICAgICAgICBpZiAoIW5vZGUua2V5cykge1xuICAgICAgICAgICAga2V5cy5zb3J0KCk7XG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGtleXMpO1xuICAgICAgICAgICAgaWYgKCEobm9kZS5rZXlzID0gdGhpcy5rZXlzQnlKU09OLmdldChqc29uKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleXNCeUpTT04uc2V0KGpzb24sIG5vZGUua2V5cyA9IHsgc29ydGVkOiBrZXlzLCBqc29uOiBqc29uIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlLmtleXM7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0Q2Fub247XG59KCkpO1xudmFyIGNhbm9uaWNhbFN0cmluZ2lmeSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIGlmIChzdHJpbmdpZnlDYW5vbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXNldENhbm9uaWNhbFN0cmluZ2lmeSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW5vbmljYWwgPSBzdHJpbmdpZnlDYW5vbi5hZG1pdCh2YWx1ZSk7XG4gICAgICAgIHZhciBqc29uID0gc3RyaW5naWZ5Q2FjaGUuZ2V0KGNhbm9uaWNhbCk7XG4gICAgICAgIGlmIChqc29uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN0cmluZ2lmeUNhY2hlLnNldChjYW5vbmljYWwsIGpzb24gPSBKU09OLnN0cmluZ2lmeShjYW5vbmljYWwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbn0sIHtcbiAgICByZXNldDogcmVzZXRDYW5vbmljYWxTdHJpbmdpZnksXG59KTtcbnZhciBzdHJpbmdpZnlDYW5vbjtcbnZhciBzdHJpbmdpZnlDYWNoZTtcbmZ1bmN0aW9uIHJlc2V0Q2Fub25pY2FsU3RyaW5naWZ5KCkge1xuICAgIHN0cmluZ2lmeUNhbm9uID0gbmV3IE9iamVjdENhbm9uO1xuICAgIHN0cmluZ2lmeUNhY2hlID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG59XG5cbmZ1bmN0aW9uIGV4ZWNTZWxlY3Rpb25TZXRLZXlBcmdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvblNldCxcbiAgICAgICAgb3B0aW9ucy5vYmplY3RPclJlZmVyZW5jZSxcbiAgICAgICAgb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICBvcHRpb25zLmNvbnRleHQuY2Fub25pemVSZXN1bHRzLFxuICAgIF07XG59XG52YXIgU3RvcmVSZWFkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0b3JlUmVhZGVyKGNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmtub3duUmVzdWx0cyA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHV0aWxpdGllcy5jb21wYWN0KGNvbmZpZywge1xuICAgICAgICAgICAgYWRkVHlwZW5hbWU6IGNvbmZpZy5hZGRUeXBlbmFtZSAhPT0gZmFsc2UsXG4gICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IHNob3VsZENhbm9uaXplUmVzdWx0cyhjb25maWcpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW5vbiA9IGNvbmZpZy5jYW5vbiB8fCBuZXcgT2JqZWN0Q2Fub247XG4gICAgICAgIHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCA9IG9wdGltaXNtLndyYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBjYW5vbml6ZVJlc3VsdHMgPSBvcHRpb25zLmNvbnRleHQuY2Fub25pemVSZXN1bHRzO1xuICAgICAgICAgICAgdmFyIHBlZWtBcmdzID0gZXhlY1NlbGVjdGlvblNldEtleUFyZ3Mob3B0aW9ucyk7XG4gICAgICAgICAgICBwZWVrQXJnc1szXSA9ICFjYW5vbml6ZVJlc3VsdHM7XG4gICAgICAgICAgICB2YXIgb3RoZXIgPSAoX2EgPSBfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KS5wZWVrLmFwcGx5KF9hLCBwZWVrQXJncyk7XG4gICAgICAgICAgICBpZiAob3RoZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2Fub25pemVSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3RoZXIpLCB7IHJlc3VsdDogX3RoaXMuY2Fub24uYWRtaXQob3RoZXIucmVzdWx0KSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF5YmVEZXBlbmRPbkV4aXN0ZW5jZU9mRW50aXR5KG9wdGlvbnMuY29udGV4dC5zdG9yZSwgb3B0aW9ucy5lbmNsb3NpbmdSZWYuX19yZWYpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmV4ZWNTZWxlY3Rpb25TZXRJbXBsKG9wdGlvbnMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXg6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIGtleUFyZ3M6IGV4ZWNTZWxlY3Rpb25TZXRLZXlBcmdzLFxuICAgICAgICAgICAgbWFrZUNhY2hlS2V5OiBmdW5jdGlvbiAoc2VsZWN0aW9uU2V0LCBwYXJlbnQsIGNvbnRleHQsIGNhbm9uaXplUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoY29udGV4dC5zdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuc3RvcmUubWFrZUNhY2hlS2V5KHNlbGVjdGlvblNldCwgdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHBhcmVudCkgPyBwYXJlbnQuX19yZWYgOiBwYXJlbnQsIGNvbnRleHQudmFyU3RyaW5nLCBjYW5vbml6ZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZVN1YlNlbGVjdGVkQXJyYXkgPSBvcHRpbWlzbS53cmFwKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBtYXliZURlcGVuZE9uRXhpc3RlbmNlT2ZFbnRpdHkob3B0aW9ucy5jb250ZXh0LnN0b3JlLCBvcHRpb25zLmVuY2xvc2luZ1JlZi5fX3JlZik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZXhlY1N1YlNlbGVjdGVkQXJyYXlJbXBsKG9wdGlvbnMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXg6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIGFycmF5ID0gX2EuYXJyYXksIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1Jlc3VsdENhY2hpbmcoY29udGV4dC5zdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuc3RvcmUubWFrZUNhY2hlS2V5KGZpZWxkLCBhcnJheSwgY29udGV4dC52YXJTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5yZXNldENhbm9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbm9uID0gbmV3IE9iamVjdENhbm9uO1xuICAgIH07XG4gICAgU3RvcmVSZWFkZXIucHJvdG90eXBlLmRpZmZRdWVyeUFnYWluc3RTdG9yZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc3RvcmUgPSBfYS5zdG9yZSwgcXVlcnkgPSBfYS5xdWVyeSwgX2IgPSBfYS5yb290SWQsIHJvb3RJZCA9IF9iID09PSB2b2lkIDAgPyAnUk9PVF9RVUVSWScgOiBfYiwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBfYyA9IF9hLnJldHVyblBhcnRpYWxEYXRhLCByZXR1cm5QYXJ0aWFsRGF0YSA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gX2EuY2Fub25pemVSZXN1bHRzLCBjYW5vbml6ZVJlc3VsdHMgPSBfZCA9PT0gdm9pZCAwID8gdGhpcy5jb25maWcuY2Fub25pemVSZXN1bHRzIDogX2Q7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXMuY29uZmlnLmNhY2hlLnBvbGljaWVzO1xuICAgICAgICB2YXJpYWJsZXMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdXRpbGl0aWVzLmdldERlZmF1bHRWYWx1ZXModXRpbGl0aWVzLmdldFF1ZXJ5RGVmaW5pdGlvbihxdWVyeSkpKSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIHJvb3RSZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShyb290SWQpO1xuICAgICAgICB2YXIgZXhlY1Jlc3VsdCA9IHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldCh7XG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHV0aWxpdGllcy5nZXRNYWluRGVmaW5pdGlvbihxdWVyeSkuc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgb2JqZWN0T3JSZWZlcmVuY2U6IHJvb3RSZWYsXG4gICAgICAgICAgICBlbmNsb3NpbmdSZWY6IHJvb3RSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgICAgICBwb2xpY2llczogcG9saWNpZXMsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgdmFyU3RyaW5nOiBjYW5vbmljYWxTdHJpbmdpZnkodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IGNhbm9uaXplUmVzdWx0cyxcbiAgICAgICAgICAgICAgICBmcmFnbWVudE1hcDogdXRpbGl0aWVzLmNyZWF0ZUZyYWdtZW50TWFwKHV0aWxpdGllcy5nZXRGcmFnbWVudERlZmluaXRpb25zKHF1ZXJ5KSksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1pc3Npbmc7XG4gICAgICAgIGlmIChleGVjUmVzdWx0Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgIG1pc3NpbmcgPSBbbmV3IE1pc3NpbmdGaWVsZEVycm9yKGZpcnN0TWlzc2luZyhleGVjUmVzdWx0Lm1pc3NpbmcpLCBleGVjUmVzdWx0Lm1pc3NpbmcsIHF1ZXJ5LCB2YXJpYWJsZXMpXTtcbiAgICAgICAgICAgIGlmICghcmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBtaXNzaW5nWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN1bHQ6IGV4ZWNSZXN1bHQucmVzdWx0LFxuICAgICAgICAgICAgY29tcGxldGU6ICFtaXNzaW5nLFxuICAgICAgICAgICAgbWlzc2luZzogbWlzc2luZyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5pc0ZyZXNoID0gZnVuY3Rpb24gKHJlc3VsdCwgcGFyZW50LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhjb250ZXh0LnN0b3JlKSAmJlxuICAgICAgICAgICAgdGhpcy5rbm93blJlc3VsdHMuZ2V0KHJlc3VsdCkgPT09IHNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuZXhlY3V0ZVNlbGVjdGlvblNldC5wZWVrKHNlbGVjdGlvblNldCwgcGFyZW50LCBjb250ZXh0LCB0aGlzLmNhbm9uLmlzS25vd24ocmVzdWx0KSk7XG4gICAgICAgICAgICBpZiAobGF0ZXN0ICYmIHJlc3VsdCA9PT0gbGF0ZXN0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFN0b3JlUmVhZGVyLnByb3RvdHlwZS5leGVjU2VsZWN0aW9uU2V0SW1wbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VsZWN0aW9uU2V0ID0gX2Euc2VsZWN0aW9uU2V0LCBvYmplY3RPclJlZmVyZW5jZSA9IF9hLm9iamVjdE9yUmVmZXJlbmNlLCBlbmNsb3NpbmdSZWYgPSBfYS5lbmNsb3NpbmdSZWYsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKSAmJlxuICAgICAgICAgICAgIWNvbnRleHQucG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbb2JqZWN0T3JSZWZlcmVuY2UuX19yZWZdICYmXG4gICAgICAgICAgICAhY29udGV4dC5zdG9yZS5oYXMob2JqZWN0T3JSZWZlcmVuY2UuX19yZWYpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogdGhpcy5jYW5vbi5lbXB0eSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBcIkRhbmdsaW5nIHJlZmVyZW5jZSB0byBtaXNzaW5nIFwiLmNvbmNhdChvYmplY3RPclJlZmVyZW5jZS5fX3JlZiwgXCIgb2JqZWN0XCIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFyaWFibGVzID0gY29udGV4dC52YXJpYWJsZXMsIHBvbGljaWVzID0gY29udGV4dC5wb2xpY2llcywgc3RvcmUgPSBjb250ZXh0LnN0b3JlO1xuICAgICAgICB2YXIgdHlwZW5hbWUgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKG9iamVjdE9yUmVmZXJlbmNlLCBcIl9fdHlwZW5hbWVcIik7XG4gICAgICAgIHZhciBvYmplY3RzVG9NZXJnZSA9IFtdO1xuICAgICAgICB2YXIgbWlzc2luZztcbiAgICAgICAgdmFyIG1pc3NpbmdNZXJnZXIgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFkZFR5cGVuYW1lICYmXG4gICAgICAgICAgICB0eXBlb2YgdHlwZW5hbWUgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICFwb2xpY2llcy5yb290SWRzQnlUeXBlbmFtZVt0eXBlbmFtZV0pIHtcbiAgICAgICAgICAgIG9iamVjdHNUb01lcmdlLnB1c2goeyBfX3R5cGVuYW1lOiB0eXBlbmFtZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaXNzaW5nKHJlc3VsdCwgcmVzdWx0TmFtZSkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5taXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZyA9IG1pc3NpbmdNZXJnZXIubWVyZ2UobWlzc2luZywgKF9hID0ge30sIF9hW3Jlc3VsdE5hbWVdID0gcmVzdWx0Lm1pc3NpbmcsIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd29ya1NldCA9IG5ldyBTZXQoc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMpO1xuICAgICAgICB3b3JrU2V0LmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBwb2xpY2llcy5yZWFkRmllbGQoe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IHNlbGVjdGlvbi5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBvYmplY3RPclJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0TmFtZSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQuYWRkZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZyA9IG1pc3NpbmdNZXJnZXIubWVyZ2UobWlzc2luZywgKF9hID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbcmVzdWx0TmFtZV0gPSBcIkNhbid0IGZpbmQgZmllbGQgJ1wiLmNvbmNhdChzZWxlY3Rpb24ubmFtZS52YWx1ZSwgXCInIG9uIFwiKS5jb25jYXQodXRpbGl0aWVzLmlzUmVmZXJlbmNlKG9iamVjdE9yUmVmZXJlbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9iamVjdE9yUmVmZXJlbmNlLl9fcmVmICsgXCIgb2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm9iamVjdCBcIiArIEpTT04uc3RyaW5naWZ5KG9iamVjdE9yUmVmZXJlbmNlLCBudWxsLCAyKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KGZpZWxkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBoYW5kbGVNaXNzaW5nKF90aGlzLmV4ZWN1dGVTdWJTZWxlY3RlZEFycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheTogZmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfSksIHJlc3VsdE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc2VsZWN0aW9uLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5jYW5vbml6ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBfdGhpcy5jYW5vbi5wYXNzKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDogc2VsZWN0aW9uLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jbG9zaW5nUmVmOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZmllbGRWYWx1ZSkgPyBmaWVsZFZhbHVlIDogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgfSksIHJlc3VsdE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHNUb01lcmdlLnB1c2goKF9iID0ge30sIF9iW3Jlc3VsdE5hbWVdID0gZmllbGRWYWx1ZSwgX2IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB1dGlsaXRpZXMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uKHNlbGVjdGlvbiwgY29udGV4dC5mcmFnbWVudE1hcCk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50ICYmIHBvbGljaWVzLmZyYWdtZW50TWF0Y2hlcyhmcmFnbWVudCwgdHlwZW5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2god29ya1NldC5hZGQsIHdvcmtTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHQgPSB1dGlsaXRpZXMubWVyZ2VEZWVwQXJyYXkob2JqZWN0c1RvTWVyZ2UpO1xuICAgICAgICB2YXIgZmluYWxSZXN1bHQgPSB7IHJlc3VsdDogcmVzdWx0LCBtaXNzaW5nOiBtaXNzaW5nIH07XG4gICAgICAgIHZhciBmcm96ZW4gPSBjb250ZXh0LmNhbm9uaXplUmVzdWx0c1xuICAgICAgICAgICAgPyB0aGlzLmNhbm9uLmFkbWl0KGZpbmFsUmVzdWx0KVxuICAgICAgICAgICAgOiB1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKGZpbmFsUmVzdWx0KTtcbiAgICAgICAgaWYgKGZyb3plbi5yZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMua25vd25SZXN1bHRzLnNldChmcm96ZW4ucmVzdWx0LCBzZWxlY3Rpb25TZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm96ZW47XG4gICAgfTtcbiAgICBTdG9yZVJlYWRlci5wcm90b3R5cGUuZXhlY1N1YlNlbGVjdGVkQXJyYXlJbXBsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCBhcnJheSA9IF9hLmFycmF5LCBlbmNsb3NpbmdSZWYgPSBfYS5lbmNsb3NpbmdSZWYsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xuICAgICAgICB2YXIgbWlzc2luZztcbiAgICAgICAgdmFyIG1pc3NpbmdNZXJnZXIgPSBuZXcgdXRpbGl0aWVzLkRlZXBNZXJnZXIoKTtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWlzc2luZyhjaGlsZFJlc3VsdCwgaSkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGNoaWxkUmVzdWx0Lm1pc3NpbmcpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nID0gbWlzc2luZ01lcmdlci5tZXJnZShtaXNzaW5nLCAoX2EgPSB7fSwgX2FbaV0gPSBjaGlsZFJlc3VsdC5taXNzaW5nLCBfYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUmVzdWx0LnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICBhcnJheSA9IGFycmF5LmZpbHRlcihjb250ZXh0LnN0b3JlLmNhblJlYWQpO1xuICAgICAgICB9XG4gICAgICAgIGFycmF5ID0gYXJyYXkubWFwKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU3ViU2VsZWN0ZWRBcnJheSh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXk6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGVuY2xvc2luZ1JlZjogZW5jbG9zaW5nUmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIH0pLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZC5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlTWlzc2luZyhfdGhpcy5leGVjdXRlU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBmaWVsZC5zZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE9yUmVmZXJlbmNlOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBlbmNsb3NpbmdSZWY6IHV0aWxpdGllcy5pc1JlZmVyZW5jZShpdGVtKSA/IGl0ZW0gOiBlbmNsb3NpbmdSZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgfSksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgICAgICBhc3NlcnRTZWxlY3Rpb25TZXRGb3JJZFZhbHVlKGNvbnRleHQuc3RvcmUsIGZpZWxkLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3VsdDogY29udGV4dC5jYW5vbml6ZVJlc3VsdHMgPyB0aGlzLmNhbm9uLmFkbWl0KGFycmF5KSA6IGFycmF5LFxuICAgICAgICAgICAgbWlzc2luZzogbWlzc2luZyxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBTdG9yZVJlYWRlcjtcbn0oKSk7XG5mdW5jdGlvbiBmaXJzdE1pc3NpbmcodHJlZSkge1xuICAgIHRyeSB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRyZWUsIGZ1bmN0aW9uIChfLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICB0aHJvdyB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5mdW5jdGlvbiBhc3NlcnRTZWxlY3Rpb25TZXRGb3JJZFZhbHVlKHN0b3JlLCBmaWVsZCwgZmllbGRWYWx1ZSkge1xuICAgIGlmICghZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgIHZhciB3b3JrU2V0XzEgPSBuZXcgU2V0KFtmaWVsZFZhbHVlXSk7XG4gICAgICAgIHdvcmtTZXRfMS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vbk51bGxPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCF1dGlsaXRpZXMuaXNSZWZlcmVuY2UodmFsdWUpLCBcIk1pc3Npbmcgc2VsZWN0aW9uIHNldCBmb3Igb2JqZWN0IG9mIHR5cGUgXCIuY29uY2F0KGdldFR5cGVuYW1lRnJvbVN0b3JlT2JqZWN0KHN0b3JlLCB2YWx1ZSksIFwiIHJldHVybmVkIGZvciBxdWVyeSBmaWVsZCBcIikuY29uY2F0KGZpZWxkLm5hbWUudmFsdWUpKSA6IGdsb2JhbHMuaW52YXJpYW50KCF1dGlsaXRpZXMuaXNSZWZlcmVuY2UodmFsdWUpLCA1KTtcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHZhbHVlKS5mb3JFYWNoKHdvcmtTZXRfMS5hZGQsIHdvcmtTZXRfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudmFyIGNhY2hlU2xvdCA9IG5ldyBjb250ZXh0LlNsb3QoKTtcbnZhciBjYWNoZUluZm9NYXAgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gZ2V0Q2FjaGVJbmZvKGNhY2hlKSB7XG4gICAgdmFyIGluZm8gPSBjYWNoZUluZm9NYXAuZ2V0KGNhY2hlKTtcbiAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgY2FjaGVJbmZvTWFwLnNldChjYWNoZSwgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhcnM6IG5ldyBTZXQsXG4gICAgICAgICAgICBkZXA6IG9wdGltaXNtLmRlcCgpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBmb3JnZXRDYWNoZShjYWNoZSkge1xuICAgIGdldENhY2hlSW5mbyhjYWNoZSkudmFycy5mb3JFYWNoKGZ1bmN0aW9uIChydikgeyByZXR1cm4gcnYuZm9yZ2V0Q2FjaGUoY2FjaGUpOyB9KTtcbn1cbmZ1bmN0aW9uIHJlY2FsbENhY2hlKGNhY2hlKSB7XG4gICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS52YXJzLmZvckVhY2goZnVuY3Rpb24gKHJ2KSB7IHJldHVybiBydi5hdHRhY2hDYWNoZShjYWNoZSk7IH0pO1xufVxuZnVuY3Rpb24gbWFrZVZhcih2YWx1ZSkge1xuICAgIHZhciBjYWNoZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgcnYgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBjYWNoZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS5kZXAuZGlydHkocnYpO1xuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3QoY2FjaGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBvbGRMaXN0ZW5lcnMgPSBBcnJheS5mcm9tKGxpc3RlbmVycyk7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcih2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNhY2hlID0gY2FjaGVTbG90LmdldFZhbHVlKCk7XG4gICAgICAgICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2goY2FjaGUpO1xuICAgICAgICAgICAgICAgIGdldENhY2hlSW5mbyhjYWNoZSkuZGVwKHJ2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBydi5vbk5leHRDaGFuZ2UgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBhdHRhY2ggPSBydi5hdHRhY2hDYWNoZSA9IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICBjYWNoZXMuYWRkKGNhY2hlKTtcbiAgICAgICAgZ2V0Q2FjaGVJbmZvKGNhY2hlKS52YXJzLmFkZChydik7XG4gICAgICAgIHJldHVybiBydjtcbiAgICB9O1xuICAgIHJ2LmZvcmdldENhY2hlID0gZnVuY3Rpb24gKGNhY2hlKSB7IHJldHVybiBjYWNoZXMuZGVsZXRlKGNhY2hlKTsgfTtcbiAgICByZXR1cm4gcnY7XG59XG5mdW5jdGlvbiBicm9hZGNhc3QoY2FjaGUpIHtcbiAgICBpZiAoY2FjaGUuYnJvYWRjYXN0V2F0Y2hlcykge1xuICAgICAgICBjYWNoZS5icm9hZGNhc3RXYXRjaGVzKCk7XG4gICAgfVxufVxuXG52YXIgc3BlY2lmaWVySW5mb0NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGxvb2t1cFNwZWNpZmllckluZm8oc3BlYykge1xuICAgIHZhciBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KHNwZWMpO1xuICAgIHJldHVybiBzcGVjaWZpZXJJbmZvQ2FjaGVbY2FjaGVLZXldIHx8XG4gICAgICAgIChzcGVjaWZpZXJJbmZvQ2FjaGVbY2FjaGVLZXldID0gT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5mdW5jdGlvbiBrZXlGaWVsZHNGbkZyb21TcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gICAgdmFyIGluZm8gPSBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWNpZmllcik7XG4gICAgcmV0dXJuIGluZm8ua2V5RmllbGRzRm4gfHwgKGluZm8ua2V5RmllbGRzRm4gPSBmdW5jdGlvbiAob2JqZWN0LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBleHRyYWN0ID0gZnVuY3Rpb24gKGZyb20sIGtleSkgeyByZXR1cm4gY29udGV4dC5yZWFkRmllbGQoa2V5LCBmcm9tKTsgfTtcbiAgICAgICAgdmFyIGtleU9iamVjdCA9IGNvbnRleHQua2V5T2JqZWN0ID0gY29sbGVjdFNwZWNpZmllclBhdGhzKHNwZWNpZmllciwgZnVuY3Rpb24gKHNjaGVtYUtleVBhdGgpIHtcbiAgICAgICAgICAgIHZhciBleHRyYWN0ZWQgPSBleHRyYWN0S2V5UGF0aChjb250ZXh0LnN0b3JlT2JqZWN0LCBzY2hlbWFLZXlQYXRoLCBleHRyYWN0KTtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWQgPT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgICAgIG9iamVjdCAhPT0gY29udGV4dC5zdG9yZU9iamVjdCAmJlxuICAgICAgICAgICAgICAgIGhhc093bi5jYWxsKG9iamVjdCwgc2NoZW1hS2V5UGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgICBleHRyYWN0ZWQgPSBleHRyYWN0S2V5UGF0aChvYmplY3QsIHNjaGVtYUtleVBhdGgsIGV4dHJhY3RLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGV4dHJhY3RlZCAhPT0gdm9pZCAwLCBcIk1pc3NpbmcgZmllbGQgJ1wiLmNvbmNhdChzY2hlbWFLZXlQYXRoLmpvaW4oJy4nKSwgXCInIHdoaWxlIGV4dHJhY3Rpbmcga2V5RmllbGRzIGZyb20gXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShvYmplY3QpKSkgOiBnbG9iYWxzLmludmFyaWFudChleHRyYWN0ZWQgIT09IHZvaWQgMCwgMik7XG4gICAgICAgICAgICByZXR1cm4gZXh0cmFjdGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGNvbnRleHQudHlwZW5hbWUsIFwiOlwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoa2V5T2JqZWN0KSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllcikge1xuICAgIHZhciBpbmZvID0gbG9va3VwU3BlY2lmaWVySW5mbyhzcGVjaWZpZXIpO1xuICAgIHJldHVybiBpbmZvLmtleUFyZ3NGbiB8fCAoaW5mby5rZXlBcmdzRm4gPSBmdW5jdGlvbiAoYXJncywgX2EpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gX2EuZmllbGQsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgZmllbGROYW1lID0gX2EuZmllbGROYW1lO1xuICAgICAgICB2YXIgY29sbGVjdGVkID0gY29sbGVjdFNwZWNpZmllclBhdGhzKHNwZWNpZmllciwgZnVuY3Rpb24gKGtleVBhdGgpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdEtleSA9IGtleVBhdGhbMF07XG4gICAgICAgICAgICB2YXIgZmlyc3RDaGFyID0gZmlyc3RLZXkuY2hhckF0KDApO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2hhciA9PT0gXCJAXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQgJiYgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShmaWVsZC5kaXJlY3RpdmVzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aXZlTmFtZV8xID0gZmlyc3RLZXkuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gZmllbGQuZGlyZWN0aXZlcy5maW5kKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUudmFsdWUgPT09IGRpcmVjdGl2ZU5hbWVfMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3RpdmVBcmdzID0gZCAmJiB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGQsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVBcmdzICYmIGV4dHJhY3RLZXlQYXRoKGRpcmVjdGl2ZUFyZ3MsIGtleVBhdGguc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RDaGFyID09PSBcIiRcIikge1xuICAgICAgICAgICAgICAgIHZhciB2YXJpYWJsZU5hbWUgPSBmaXJzdEtleS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVzICYmIGhhc093bi5jYWxsKHZhcmlhYmxlcywgdmFyaWFibGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFyS2V5UGF0aCA9IGtleVBhdGguc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhcktleVBhdGhbMF0gPSB2YXJpYWJsZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHRyYWN0S2V5UGF0aCh2YXJpYWJsZXMsIHZhcktleVBhdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHRyYWN0S2V5UGF0aChhcmdzLCBrZXlQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzdWZmaXggPSBKU09OLnN0cmluZ2lmeShjb2xsZWN0ZWQpO1xuICAgICAgICBpZiAoYXJncyB8fCBzdWZmaXggIT09IFwie31cIikge1xuICAgICAgICAgICAgZmllbGROYW1lICs9IFwiOlwiICsgc3VmZml4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb2xsZWN0U3BlY2lmaWVyUGF0aHMoc3BlY2lmaWVyLCBleHRyYWN0b3IpIHtcbiAgICB2YXIgbWVyZ2VyID0gbmV3IHV0aWxpdGllcy5EZWVwTWVyZ2VyO1xuICAgIHJldHVybiBnZXRTcGVjaWZpZXJQYXRocyhzcGVjaWZpZXIpLnJlZHVjZShmdW5jdGlvbiAoY29sbGVjdGVkLCBwYXRoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHRvTWVyZ2UgPSBleHRyYWN0b3IocGF0aCk7XG4gICAgICAgIGlmICh0b01lcmdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdG9NZXJnZSA9IChfYSA9IHt9LCBfYVtwYXRoW2ldXSA9IHRvTWVyZ2UsIF9hKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbGxlY3RlZCA9IG1lcmdlci5tZXJnZShjb2xsZWN0ZWQsIHRvTWVyZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0ZWQ7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5mdW5jdGlvbiBnZXRTcGVjaWZpZXJQYXRocyhzcGVjKSB7XG4gICAgdmFyIGluZm8gPSBsb29rdXBTcGVjaWZpZXJJbmZvKHNwZWMpO1xuICAgIGlmICghaW5mby5wYXRocykge1xuICAgICAgICB2YXIgcGF0aHNfMSA9IGluZm8ucGF0aHMgPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRQYXRoXzEgPSBbXTtcbiAgICAgICAgc3BlYy5mb3JFYWNoKGZ1bmN0aW9uIChzLCBpKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShzKSkge1xuICAgICAgICAgICAgICAgIGdldFNwZWNpZmllclBhdGhzKHMpLmZvckVhY2goZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhdGhzXzEucHVzaChjdXJyZW50UGF0aF8xLmNvbmNhdChwKSk7IH0pO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoXzEubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoXzEucHVzaChzKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQXJyYXkoc3BlY1tpICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhzXzEucHVzaChjdXJyZW50UGF0aF8xLnNsaWNlKDApKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdGhfMS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpbmZvLnBhdGhzO1xufVxuZnVuY3Rpb24gZXh0cmFjdEtleShvYmplY3QsIGtleSkge1xuICAgIHJldHVybiBvYmplY3Rba2V5XTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RLZXlQYXRoKG9iamVjdCwgcGF0aCwgZXh0cmFjdCkge1xuICAgIGV4dHJhY3QgPSBleHRyYWN0IHx8IGV4dHJhY3RLZXk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShwYXRoLnJlZHVjZShmdW5jdGlvbiByZWR1Y2VyKG9iaiwga2V5KSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KG9iailcbiAgICAgICAgICAgID8gb2JqLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHJlZHVjZXIoY2hpbGQsIGtleSk7IH0pXG4gICAgICAgICAgICA6IG9iaiAmJiBleHRyYWN0KG9iaiwga2V5KTtcbiAgICB9LCBvYmplY3QpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAobm9ybWFsaXplKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdFNwZWNpZmllclBhdGhzKE9iamVjdC5rZXlzKHZhbHVlKS5zb3J0KCksIGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBleHRyYWN0S2V5UGF0aCh2YWx1ZSwgcGF0aCk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbnV0aWxpdGllcy5nZXRTdG9yZUtleU5hbWUuc2V0U3RyaW5naWZ5KGNhbm9uaWNhbFN0cmluZ2lmeSk7XG5mdW5jdGlvbiBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYy5hcmdzICE9PSB2b2lkIDAgPyBzcGVjLmFyZ3MgOlxuICAgICAgICBzcGVjLmZpZWxkID8gdXRpbGl0aWVzLmFyZ3VtZW50c09iamVjdEZyb21GaWVsZChzcGVjLmZpZWxkLCBzcGVjLnZhcmlhYmxlcykgOiBudWxsO1xufVxudmFyIG51bGxLZXlGaWVsZHNGbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZvaWQgMDsgfTtcbnZhciBzaW1wbGVLZXlBcmdzRm4gPSBmdW5jdGlvbiAoX2FyZ3MsIGNvbnRleHQpIHsgcmV0dXJuIGNvbnRleHQuZmllbGROYW1lOyB9O1xudmFyIG1lcmdlVHJ1ZUZuID0gZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgX2EpIHtcbiAgICB2YXIgbWVyZ2VPYmplY3RzID0gX2EubWVyZ2VPYmplY3RzO1xuICAgIHJldHVybiBtZXJnZU9iamVjdHMoZXhpc3RpbmcsIGluY29taW5nKTtcbn07XG52YXIgbWVyZ2VGYWxzZUZuID0gZnVuY3Rpb24gKF8sIGluY29taW5nKSB7IHJldHVybiBpbmNvbWluZzsgfTtcbnZhciBQb2xpY2llcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9saWNpZXMoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnR5cGVQb2xpY2llcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMudG9CZUFkZGVkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5zdXBlcnR5cGVNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZnV6enlTdWJ0eXBlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yb290SWRzQnlUeXBlbmFtZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucm9vdFR5cGVuYW1lc0J5SWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLnVzaW5nUG9zc2libGVUeXBlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRzbGliLl9fYXNzaWduKHsgZGF0YUlkRnJvbU9iamVjdDogZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfSwgY29uZmlnKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuY29uZmlnLmNhY2hlO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIlF1ZXJ5XCIpO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIk11dGF0aW9uXCIpO1xuICAgICAgICB0aGlzLnNldFJvb3RUeXBlbmFtZShcIlN1YnNjcmlwdGlvblwiKTtcbiAgICAgICAgaWYgKGNvbmZpZy5wb3NzaWJsZVR5cGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBvc3NpYmxlVHlwZXMoY29uZmlnLnBvc3NpYmxlVHlwZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcudHlwZVBvbGljaWVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFR5cGVQb2xpY2llcyhjb25maWcudHlwZVBvbGljaWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQb2xpY2llcy5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0LCBwYXJ0aWFsQ29udGV4dCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXM7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IHBhcnRpYWxDb250ZXh0ICYmIChwYXJ0aWFsQ29udGV4dC50eXBlbmFtZSB8fFxuICAgICAgICAgICAgKChfYSA9IHBhcnRpYWxDb250ZXh0LnN0b3JlT2JqZWN0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuX190eXBlbmFtZSkpIHx8IG9iamVjdC5fX3R5cGVuYW1lO1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHRoaXMucm9vdFR5cGVuYW1lc0J5SWQuUk9PVF9RVUVSWSkge1xuICAgICAgICAgICAgcmV0dXJuIFtcIlJPT1RfUVVFUllcIl07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0b3JlT2JqZWN0ID0gcGFydGlhbENvbnRleHQgJiYgcGFydGlhbENvbnRleHQuc3RvcmVPYmplY3QgfHwgb2JqZWN0O1xuICAgICAgICB2YXIgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBwYXJ0aWFsQ29udGV4dCksIHsgdHlwZW5hbWU6IHR5cGVuYW1lLCBzdG9yZU9iamVjdDogc3RvcmVPYmplY3QsIHJlYWRGaWVsZDogcGFydGlhbENvbnRleHQgJiYgcGFydGlhbENvbnRleHQucmVhZEZpZWxkIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMoYXJndW1lbnRzLCBzdG9yZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvbGljaWVzLnJlYWRGaWVsZChvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiBwb2xpY2llcy5jYWNoZVtcImRhdGFcIl0sXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICB2YXIgaWQ7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0eXBlbmFtZSAmJiB0aGlzLmdldFR5cGVQb2xpY3kodHlwZW5hbWUpO1xuICAgICAgICB2YXIga2V5Rm4gPSBwb2xpY3kgJiYgcG9saWN5LmtleUZuIHx8IHRoaXMuY29uZmlnLmRhdGFJZEZyb21PYmplY3Q7XG4gICAgICAgIHdoaWxlIChrZXlGbikge1xuICAgICAgICAgICAgdmFyIHNwZWNpZmllck9ySWQgPSBrZXlGbihvYmplY3QsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc3BlY2lmaWVyT3JJZCkpIHtcbiAgICAgICAgICAgICAgICBrZXlGbiA9IGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihzcGVjaWZpZXJPcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gc3BlY2lmaWVyT3JJZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZCA9IGlkID8gU3RyaW5nKGlkKSA6IHZvaWQgMDtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQua2V5T2JqZWN0ID8gW2lkLCBjb250ZXh0LmtleU9iamVjdF0gOiBbaWRdO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmFkZFR5cGVQb2xpY2llcyA9IGZ1bmN0aW9uICh0eXBlUG9saWNpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXModHlwZVBvbGljaWVzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gdHlwZVBvbGljaWVzW3R5cGVuYW1lXSwgcXVlcnlUeXBlID0gX2EucXVlcnlUeXBlLCBtdXRhdGlvblR5cGUgPSBfYS5tdXRhdGlvblR5cGUsIHN1YnNjcmlwdGlvblR5cGUgPSBfYS5zdWJzY3JpcHRpb25UeXBlLCBpbmNvbWluZyA9IHRzbGliLl9fcmVzdChfYSwgW1wicXVlcnlUeXBlXCIsIFwibXV0YXRpb25UeXBlXCIsIFwic3Vic2NyaXB0aW9uVHlwZVwiXSk7XG4gICAgICAgICAgICBpZiAocXVlcnlUeXBlKVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJvb3RUeXBlbmFtZShcIlF1ZXJ5XCIsIHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Um9vdFR5cGVuYW1lKFwiTXV0YXRpb25cIiwgdHlwZW5hbWUpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvblR5cGUpXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Um9vdFR5cGVuYW1lKFwiU3Vic2NyaXB0aW9uXCIsIHR5cGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChfdGhpcy50b0JlQWRkZWQsIHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRvQmVBZGRlZFt0eXBlbmFtZV0ucHVzaChpbmNvbWluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50b0JlQWRkZWRbdHlwZW5hbWVdID0gW2luY29taW5nXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUudXBkYXRlVHlwZVBvbGljeSA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgaW5jb21pbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gdGhpcy5nZXRUeXBlUG9saWN5KHR5cGVuYW1lKTtcbiAgICAgICAgdmFyIGtleUZpZWxkcyA9IGluY29taW5nLmtleUZpZWxkcywgZmllbGRzID0gaW5jb21pbmcuZmllbGRzO1xuICAgICAgICBmdW5jdGlvbiBzZXRNZXJnZShleGlzdGluZywgbWVyZ2UpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLm1lcmdlID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgbWVyZ2UgPT09IFwiZnVuY3Rpb25cIiA/IG1lcmdlIDpcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2UgPT09IHRydWUgPyBtZXJnZVRydWVGbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZSA9PT0gZmFsc2UgPyBtZXJnZUZhbHNlRm4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLm1lcmdlO1xuICAgICAgICB9XG4gICAgICAgIHNldE1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZy5tZXJnZSk7XG4gICAgICAgIGV4aXN0aW5nLmtleUZuID1cbiAgICAgICAgICAgIGtleUZpZWxkcyA9PT0gZmFsc2UgPyBudWxsS2V5RmllbGRzRm4gOlxuICAgICAgICAgICAgICAgIGlzQXJyYXkoa2V5RmllbGRzKSA/IGtleUZpZWxkc0ZuRnJvbVNwZWNpZmllcihrZXlGaWVsZHMpIDpcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGtleUZpZWxkcyA9PT0gXCJmdW5jdGlvblwiID8ga2V5RmllbGRzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuO1xuICAgICAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZyA9IF90aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBpbmNvbWluZyA9IGZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5jb21pbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5yZWFkID0gaW5jb21pbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5QXJncyA9IGluY29taW5nLmtleUFyZ3MsIHJlYWQgPSBpbmNvbWluZy5yZWFkLCBtZXJnZSA9IGluY29taW5nLm1lcmdlO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlBcmdzID09PSBmYWxzZSA/IHNpbXBsZUtleUFyZ3NGbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBcnJheShrZXlBcmdzKSA/IGtleUFyZ3NGbkZyb21TcGVjaWZpZXIoa2V5QXJncykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Yga2V5QXJncyA9PT0gXCJmdW5jdGlvblwiID8ga2V5QXJncyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5rZXlGbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWFkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnJlYWQgPSByZWFkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldE1lcmdlKGV4aXN0aW5nLCBtZXJnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZy5yZWFkICYmIGV4aXN0aW5nLm1lcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmtleUZuID0gZXhpc3Rpbmcua2V5Rm4gfHwgc2ltcGxlS2V5QXJnc0ZuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuc2V0Um9vdFR5cGVuYW1lID0gZnVuY3Rpb24gKHdoaWNoLCB0eXBlbmFtZSkge1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHZvaWQgMCkgeyB0eXBlbmFtZSA9IHdoaWNoOyB9XG4gICAgICAgIHZhciByb290SWQgPSBcIlJPT1RfXCIgKyB3aGljaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB2YXIgb2xkID0gdGhpcy5yb290VHlwZW5hbWVzQnlJZFtyb290SWRdO1xuICAgICAgICBpZiAodHlwZW5hbWUgIT09IG9sZCkge1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCFvbGQgfHwgb2xkID09PSB3aGljaCwgXCJDYW5ub3QgY2hhbmdlIHJvb3QgXCIuY29uY2F0KHdoaWNoLCBcIiBfX3R5cGVuYW1lIG1vcmUgdGhhbiBvbmNlXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KCFvbGQgfHwgb2xkID09PSB3aGljaCwgMyk7XG4gICAgICAgICAgICBpZiAob2xkKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb3RJZHNCeVR5cGVuYW1lW29sZF07XG4gICAgICAgICAgICB0aGlzLnJvb3RJZHNCeVR5cGVuYW1lW3R5cGVuYW1lXSA9IHJvb3RJZDtcbiAgICAgICAgICAgIHRoaXMucm9vdFR5cGVuYW1lc0J5SWRbcm9vdElkXSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuYWRkUG9zc2libGVUeXBlcyA9IGZ1bmN0aW9uIChwb3NzaWJsZVR5cGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudXNpbmdQb3NzaWJsZVR5cGVzID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmtleXMocG9zc2libGVUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoc3VwZXJ0eXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5nZXRTdXBlcnR5cGVTZXQoc3VwZXJ0eXBlLCB0cnVlKTtcbiAgICAgICAgICAgIHBvc3NpYmxlVHlwZXNbc3VwZXJ0eXBlXS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ2V0U3VwZXJ0eXBlU2V0KHN1YnR5cGUsIHRydWUpLmFkZChzdXBlcnR5cGUpO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHN1YnR5cGUubWF0Y2goVHlwZU9yRmllbGROYW1lUmVnRXhwKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoWzBdICE9PSBzdWJ0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZ1enp5U3VidHlwZXMuc2V0KHN1YnR5cGUsIG5ldyBSZWdFeHAoc3VidHlwZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRUeXBlUG9saWN5ID0gZnVuY3Rpb24gKHR5cGVuYW1lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghaGFzT3duLmNhbGwodGhpcy50eXBlUG9saWNpZXMsIHR5cGVuYW1lKSkge1xuICAgICAgICAgICAgdmFyIHBvbGljeV8xID0gdGhpcy50eXBlUG9saWNpZXNbdHlwZW5hbWVdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHBvbGljeV8xLmZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB2YXIgc3VwZXJ0eXBlcyA9IHRoaXMuc3VwZXJ0eXBlTWFwLmdldCh0eXBlbmFtZSk7XG4gICAgICAgICAgICBpZiAoc3VwZXJ0eXBlcyAmJiBzdXBlcnR5cGVzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBzdXBlcnR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHN1cGVydHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5nZXRUeXBlUG9saWN5KHN1cGVydHlwZSksIGZpZWxkcyA9IF9hLmZpZWxkcywgcmVzdCA9IHRzbGliLl9fcmVzdChfYSwgW1wiZmllbGRzXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwb2xpY3lfMSwgcmVzdCk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocG9saWN5XzEuZmllbGRzLCBmaWVsZHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpbmJveCA9IHRoaXMudG9CZUFkZGVkW3R5cGVuYW1lXTtcbiAgICAgICAgaWYgKGluYm94ICYmIGluYm94Lmxlbmd0aCkge1xuICAgICAgICAgICAgaW5ib3guc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKHBvbGljeSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVR5cGVQb2xpY3kodHlwZW5hbWUsIHBvbGljeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50eXBlUG9saWNpZXNbdHlwZW5hbWVdO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldEZpZWxkUG9saWN5ID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBmaWVsZE5hbWUsIGNyZWF0ZUlmTWlzc2luZykge1xuICAgICAgICBpZiAodHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZFBvbGljaWVzID0gdGhpcy5nZXRUeXBlUG9saWN5KHR5cGVuYW1lKS5maWVsZHM7XG4gICAgICAgICAgICByZXR1cm4gZmllbGRQb2xpY2llc1tmaWVsZE5hbWVdIHx8IChjcmVhdGVJZk1pc3NpbmcgJiYgKGZpZWxkUG9saWNpZXNbZmllbGROYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFN1cGVydHlwZVNldCA9IGZ1bmN0aW9uIChzdWJ0eXBlLCBjcmVhdGVJZk1pc3NpbmcpIHtcbiAgICAgICAgdmFyIHN1cGVydHlwZVNldCA9IHRoaXMuc3VwZXJ0eXBlTWFwLmdldChzdWJ0eXBlKTtcbiAgICAgICAgaWYgKCFzdXBlcnR5cGVTZXQgJiYgY3JlYXRlSWZNaXNzaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN1cGVydHlwZU1hcC5zZXQoc3VidHlwZSwgc3VwZXJ0eXBlU2V0ID0gbmV3IFNldCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXJ0eXBlU2V0O1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmZyYWdtZW50TWF0Y2hlcyA9IGZ1bmN0aW9uIChmcmFnbWVudCwgdHlwZW5hbWUsIHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZnJhZ21lbnQudHlwZUNvbmRpdGlvbilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIXR5cGVuYW1lKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgc3VwZXJ0eXBlID0gZnJhZ21lbnQudHlwZUNvbmRpdGlvbi5uYW1lLnZhbHVlO1xuICAgICAgICBpZiAodHlwZW5hbWUgPT09IHN1cGVydHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy51c2luZ1Bvc3NpYmxlVHlwZXMgJiZcbiAgICAgICAgICAgIHRoaXMuc3VwZXJ0eXBlTWFwLmhhcyhzdXBlcnR5cGUpKSB7XG4gICAgICAgICAgICB2YXIgdHlwZW5hbWVTdXBlcnR5cGVTZXQgPSB0aGlzLmdldFN1cGVydHlwZVNldCh0eXBlbmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgd29ya1F1ZXVlXzEgPSBbdHlwZW5hbWVTdXBlcnR5cGVTZXRdO1xuICAgICAgICAgICAgdmFyIG1heWJlRW5xdWV1ZV8xID0gZnVuY3Rpb24gKHN1YnR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJ0eXBlU2V0ID0gX3RoaXMuZ2V0U3VwZXJ0eXBlU2V0KHN1YnR5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0eXBlU2V0ICYmXG4gICAgICAgICAgICAgICAgICAgIHN1cGVydHlwZVNldC5zaXplICYmXG4gICAgICAgICAgICAgICAgICAgIHdvcmtRdWV1ZV8xLmluZGV4T2Yoc3VwZXJ0eXBlU2V0KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya1F1ZXVlXzEucHVzaChzdXBlcnR5cGVTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbmVlZFRvQ2hlY2tGdXp6eVN1YnR5cGVzID0gISEocmVzdWx0ICYmIHRoaXMuZnV6enlTdWJ0eXBlcy5zaXplKTtcbiAgICAgICAgICAgIHZhciBjaGVja2luZ0Z1enp5U3VidHlwZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29ya1F1ZXVlXzEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwZXJ0eXBlU2V0ID0gd29ya1F1ZXVlXzFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN1cGVydHlwZVNldC5oYXMoc3VwZXJ0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGVuYW1lU3VwZXJ0eXBlU2V0LmhhcyhzdXBlcnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tpbmdGdXp6eVN1YnR5cGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiSW5mZXJyaW5nIHN1YnR5cGUgXCIuY29uY2F0KHR5cGVuYW1lLCBcIiBvZiBzdXBlcnR5cGUgXCIpLmNvbmNhdChzdXBlcnR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lU3VwZXJ0eXBlU2V0LmFkZChzdXBlcnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdXBlcnR5cGVTZXQuZm9yRWFjaChtYXliZUVucXVldWVfMSk7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRUb0NoZWNrRnV6enlTdWJ0eXBlcyAmJlxuICAgICAgICAgICAgICAgICAgICBpID09PSB3b3JrUXVldWVfMS5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldE1hdGNoZXNSZXN1bHQoZnJhZ21lbnQuc2VsZWN0aW9uU2V0LCByZXN1bHQsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZFRvQ2hlY2tGdXp6eVN1YnR5cGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNraW5nRnV6enlTdWJ0eXBlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnV6enlTdWJ0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWdFeHAsIGZ1enp5U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSB0eXBlbmFtZS5tYXRjaChyZWdFeHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzBdID09PSB0eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlRW5xdWV1ZV8xKGZ1enp5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5oYXNLZXlBcmdzID0gZnVuY3Rpb24gKHR5cGVuYW1lLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gISEocG9saWN5ICYmIHBvbGljeS5rZXlGbik7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUuZ2V0U3RvcmVGaWVsZE5hbWUgPSBmdW5jdGlvbiAoZmllbGRTcGVjKSB7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IGZpZWxkU3BlYy50eXBlbmFtZSwgZmllbGROYW1lID0gZmllbGRTcGVjLmZpZWxkTmFtZTtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kodHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWU7XG4gICAgICAgIHZhciBrZXlGbiA9IHBvbGljeSAmJiBwb2xpY3kua2V5Rm47XG4gICAgICAgIGlmIChrZXlGbiAmJiB0eXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZFNwZWMuZmllbGQgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGZpZWxkU3BlYy52YXJpYWJsZXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKGZpZWxkU3BlYyk7XG4gICAgICAgICAgICB3aGlsZSAoa2V5Rm4pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWVyT3JTdHJpbmcgPSBrZXlGbihhcmdzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShzcGVjaWZpZXJPclN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5Rm4gPSBrZXlBcmdzRm5Gcm9tU3BlY2lmaWVyKHNwZWNpZmllck9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlRmllbGROYW1lID0gc3BlY2lmaWVyT3JTdHJpbmcgfHwgZmllbGROYW1lO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0b3JlRmllbGROYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHN0b3JlRmllbGROYW1lID0gZmllbGRTcGVjLmZpZWxkXG4gICAgICAgICAgICAgICAgPyB1dGlsaXRpZXMuc3RvcmVLZXlOYW1lRnJvbUZpZWxkKGZpZWxkU3BlYy5maWVsZCwgZmllbGRTcGVjLnZhcmlhYmxlcylcbiAgICAgICAgICAgICAgICA6IHV0aWxpdGllcy5nZXRTdG9yZUtleU5hbWUoZmllbGROYW1lLCBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKGZpZWxkU3BlYykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZUZpZWxkTmFtZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSlcbiAgICAgICAgICAgID8gc3RvcmVGaWVsZE5hbWVcbiAgICAgICAgICAgIDogZmllbGROYW1lICsgXCI6XCIgKyBzdG9yZUZpZWxkTmFtZTtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5yZWFkRmllbGQgPSBmdW5jdGlvbiAob3B0aW9ucywgY29udGV4dCkge1xuICAgICAgICB2YXIgb2JqZWN0T3JSZWZlcmVuY2UgPSBvcHRpb25zLmZyb207XG4gICAgICAgIGlmICghb2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBuYW1lT3JGaWVsZCA9IG9wdGlvbnMuZmllbGQgfHwgb3B0aW9ucy5maWVsZE5hbWU7XG4gICAgICAgIGlmICghbmFtZU9yRmllbGQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChvcHRpb25zLnR5cGVuYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IGNvbnRleHQuc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmplY3RPclJlZmVyZW5jZSwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVuYW1lKVxuICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZW5hbWUgPSB0eXBlbmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSB0aGlzLmdldFN0b3JlRmllbGROYW1lKG9wdGlvbnMpO1xuICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHZhciBleGlzdGluZyA9IGNvbnRleHQuc3RvcmUuZ2V0RmllbGRWYWx1ZShvYmplY3RPclJlZmVyZW5jZSwgc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICB2YXIgcG9saWN5ID0gdGhpcy5nZXRGaWVsZFBvbGljeShvcHRpb25zLnR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgdmFyIHJlYWQgPSBwb2xpY3kgJiYgcG9saWN5LnJlYWQ7XG4gICAgICAgIGlmIChyZWFkKSB7XG4gICAgICAgICAgICB2YXIgcmVhZE9wdGlvbnMgPSBtYWtlRmllbGRGdW5jdGlvbk9wdGlvbnModGhpcywgb2JqZWN0T3JSZWZlcmVuY2UsIG9wdGlvbnMsIGNvbnRleHQsIGNvbnRleHQuc3RvcmUuZ2V0U3RvcmFnZSh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0T3JSZWZlcmVuY2UpXG4gICAgICAgICAgICAgICAgPyBvYmplY3RPclJlZmVyZW5jZS5fX3JlZlxuICAgICAgICAgICAgICAgIDogb2JqZWN0T3JSZWZlcmVuY2UsIHN0b3JlRmllbGROYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVTbG90LndpdGhWYWx1ZSh0aGlzLmNhY2hlLCByZWFkLCBbZXhpc3RpbmcsIHJlYWRPcHRpb25zXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH07XG4gICAgUG9saWNpZXMucHJvdG90eXBlLmdldFJlYWRGdW5jdGlvbiA9IGZ1bmN0aW9uICh0eXBlbmFtZSwgZmllbGROYW1lKSB7XG4gICAgICAgIHZhciBwb2xpY3kgPSB0aGlzLmdldEZpZWxkUG9saWN5KHR5cGVuYW1lLCBmaWVsZE5hbWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHBvbGljeSAmJiBwb2xpY3kucmVhZDtcbiAgICB9O1xuICAgIFBvbGljaWVzLnByb3RvdHlwZS5nZXRNZXJnZUZ1bmN0aW9uID0gZnVuY3Rpb24gKHBhcmVudFR5cGVuYW1lLCBmaWVsZE5hbWUsIGNoaWxkVHlwZW5hbWUpIHtcbiAgICAgICAgdmFyIHBvbGljeSA9IHRoaXMuZ2V0RmllbGRQb2xpY3kocGFyZW50VHlwZW5hbWUsIGZpZWxkTmFtZSwgZmFsc2UpO1xuICAgICAgICB2YXIgbWVyZ2UgPSBwb2xpY3kgJiYgcG9saWN5Lm1lcmdlO1xuICAgICAgICBpZiAoIW1lcmdlICYmIGNoaWxkVHlwZW5hbWUpIHtcbiAgICAgICAgICAgIHBvbGljeSA9IHRoaXMuZ2V0VHlwZVBvbGljeShjaGlsZFR5cGVuYW1lKTtcbiAgICAgICAgICAgIG1lcmdlID0gcG9saWN5ICYmIHBvbGljeS5tZXJnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2U7XG4gICAgfTtcbiAgICBQb2xpY2llcy5wcm90b3R5cGUucnVuTWVyZ2VGdW5jdGlvbiA9IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hLCBjb250ZXh0LCBzdG9yYWdlKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IF9hLmZpZWxkLCB0eXBlbmFtZSA9IF9hLnR5cGVuYW1lLCBtZXJnZSA9IF9hLm1lcmdlO1xuICAgICAgICBpZiAobWVyZ2UgPT09IG1lcmdlVHJ1ZUZuKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFrZU1lcmdlT2JqZWN0c0Z1bmN0aW9uKGNvbnRleHQuc3RvcmUpKGV4aXN0aW5nLCBpbmNvbWluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lcmdlID09PSBtZXJnZUZhbHNlRm4pIHtcbiAgICAgICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGV4dC5vdmVyd3JpdGUpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIG1ha2VGaWVsZEZ1bmN0aW9uT3B0aW9ucyh0aGlzLCB2b2lkIDAsIHsgdHlwZW5hbWU6IHR5cGVuYW1lLCBmaWVsZE5hbWU6IGZpZWxkLm5hbWUudmFsdWUsIGZpZWxkOiBmaWVsZCwgdmFyaWFibGVzOiBjb250ZXh0LnZhcmlhYmxlcyB9LCBjb250ZXh0LCBzdG9yYWdlIHx8IE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbiAgICB9O1xuICAgIHJldHVybiBQb2xpY2llcztcbn0oKSk7XG5mdW5jdGlvbiBtYWtlRmllbGRGdW5jdGlvbk9wdGlvbnMocG9saWNpZXMsIG9iamVjdE9yUmVmZXJlbmNlLCBmaWVsZFNwZWMsIGNvbnRleHQsIHN0b3JhZ2UpIHtcbiAgICB2YXIgc3RvcmVGaWVsZE5hbWUgPSBwb2xpY2llcy5nZXRTdG9yZUZpZWxkTmFtZShmaWVsZFNwZWMpO1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVGcm9tU3RvcmVOYW1lKHN0b3JlRmllbGROYW1lKTtcbiAgICB2YXIgdmFyaWFibGVzID0gZmllbGRTcGVjLnZhcmlhYmxlcyB8fCBjb250ZXh0LnZhcmlhYmxlcztcbiAgICB2YXIgX2EgPSBjb250ZXh0LnN0b3JlLCB0b1JlZmVyZW5jZSA9IF9hLnRvUmVmZXJlbmNlLCBjYW5SZWFkID0gX2EuY2FuUmVhZDtcbiAgICByZXR1cm4ge1xuICAgICAgICBhcmdzOiBhcmdzRnJvbUZpZWxkU3BlY2lmaWVyKGZpZWxkU3BlYyksXG4gICAgICAgIGZpZWxkOiBmaWVsZFNwZWMuZmllbGQgfHwgbnVsbCxcbiAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgIHN0b3JlRmllbGROYW1lOiBzdG9yZUZpZWxkTmFtZSxcbiAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgIGlzUmVmZXJlbmNlOiB1dGlsaXRpZXMuaXNSZWZlcmVuY2UsXG4gICAgICAgIHRvUmVmZXJlbmNlOiB0b1JlZmVyZW5jZSxcbiAgICAgICAgc3RvcmFnZTogc3RvcmFnZSxcbiAgICAgICAgY2FjaGU6IHBvbGljaWVzLmNhY2hlLFxuICAgICAgICBjYW5SZWFkOiBjYW5SZWFkLFxuICAgICAgICByZWFkRmllbGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2xpY2llcy5yZWFkRmllbGQobm9ybWFsaXplUmVhZEZpZWxkT3B0aW9ucyhhcmd1bWVudHMsIG9iamVjdE9yUmVmZXJlbmNlLCB2YXJpYWJsZXMpLCBjb250ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2VPYmplY3RzOiBtYWtlTWVyZ2VPYmplY3RzRnVuY3Rpb24oY29udGV4dC5zdG9yZSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMocmVhZEZpZWxkQXJncywgb2JqZWN0T3JSZWZlcmVuY2UsIHZhcmlhYmxlcykge1xuICAgIHZhciBmaWVsZE5hbWVPck9wdGlvbnMgPSByZWFkRmllbGRBcmdzWzBdLCBmcm9tID0gcmVhZEZpZWxkQXJnc1sxXSwgYXJnYyA9IHJlYWRGaWVsZEFyZ3MubGVuZ3RoO1xuICAgIHZhciBvcHRpb25zO1xuICAgIGlmICh0eXBlb2YgZmllbGROYW1lT3JPcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZU9yT3B0aW9ucyxcbiAgICAgICAgICAgIGZyb206IGFyZ2MgPiAxID8gZnJvbSA6IG9iamVjdE9yUmVmZXJlbmNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHt9LCBmaWVsZE5hbWVPck9wdGlvbnMpO1xuICAgICAgICBpZiAoIWhhc093bi5jYWxsKG9wdGlvbnMsIFwiZnJvbVwiKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mcm9tID0gb2JqZWN0T3JSZWZlcmVuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKF9fREVWX18gJiYgb3B0aW9ucy5mcm9tID09PSB2b2lkIDApIHtcbiAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiVW5kZWZpbmVkICdmcm9tJyBwYXNzZWQgdG8gcmVhZEZpZWxkIHdpdGggYXJndW1lbnRzIFwiLmNvbmNhdCh1dGlsaXRpZXMuc3RyaW5naWZ5Rm9yRGlzcGxheShBcnJheS5mcm9tKHJlYWRGaWVsZEFyZ3MpKSkpO1xuICAgIH1cbiAgICBpZiAodm9pZCAwID09PSBvcHRpb25zLnZhcmlhYmxlcykge1xuICAgICAgICBvcHRpb25zLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5mdW5jdGlvbiBtYWtlTWVyZ2VPYmplY3RzRnVuY3Rpb24oc3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VPYmplY3RzKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICBpZiAoaXNBcnJheShleGlzdGluZykgfHwgaXNBcnJheShpbmNvbWluZykpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIkNhbm5vdCBhdXRvbWF0aWNhbGx5IG1lcmdlIGFycmF5c1wiKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb25OdWxsT2JqZWN0KGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgdXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChpbmNvbWluZykpIHtcbiAgICAgICAgICAgIHZhciBlVHlwZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoZXhpc3RpbmcsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIHZhciBpVHlwZSA9IHN0b3JlLmdldEZpZWxkVmFsdWUoaW5jb21pbmcsIFwiX190eXBlbmFtZVwiKTtcbiAgICAgICAgICAgIHZhciB0eXBlc0RpZmZlciA9IGVUeXBlICYmIGlUeXBlICYmIGVUeXBlICE9PSBpVHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlc0RpZmZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmNvbWluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICAgICAgc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUubWVyZ2UoZXhpc3RpbmcuX19yZWYsIGluY29taW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RvcmVWYWx1ZUlzU3RvcmVPYmplY3QoZXhpc3RpbmcpICYmXG4gICAgICAgICAgICAgICAgdXRpbGl0aWVzLmlzUmVmZXJlbmNlKGluY29taW5nKSkge1xuICAgICAgICAgICAgICAgIHN0b3JlLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZy5fX3JlZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSAmJlxuICAgICAgICAgICAgICAgIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGluY29taW5nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhpc3RpbmcpLCBpbmNvbWluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHRGbGF2b3IoY29udGV4dCwgY2xpZW50T25seSwgZGVmZXJyZWQpIHtcbiAgICB2YXIga2V5ID0gXCJcIi5jb25jYXQoY2xpZW50T25seSkuY29uY2F0KGRlZmVycmVkKTtcbiAgICB2YXIgZmxhdm9yZWQgPSBjb250ZXh0LmZsYXZvcnMuZ2V0KGtleSk7XG4gICAgaWYgKCFmbGF2b3JlZCkge1xuICAgICAgICBjb250ZXh0LmZsYXZvcnMuc2V0KGtleSwgZmxhdm9yZWQgPSAoY29udGV4dC5jbGllbnRPbmx5ID09PSBjbGllbnRPbmx5ICYmXG4gICAgICAgICAgICBjb250ZXh0LmRlZmVycmVkID09PSBkZWZlcnJlZCkgPyBjb250ZXh0IDogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGNsaWVudE9ubHk6IGNsaWVudE9ubHksIGRlZmVycmVkOiBkZWZlcnJlZCB9KSk7XG4gICAgfVxuICAgIHJldHVybiBmbGF2b3JlZDtcbn1cbnZhciBTdG9yZVdyaXRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmVXcml0ZXIoY2FjaGUsIHJlYWRlcikge1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMucmVhZGVyID0gcmVhZGVyO1xuICAgIH1cbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUud3JpdGVUb1N0b3JlID0gZnVuY3Rpb24gKHN0b3JlLCBfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgcmVzdWx0ID0gX2EucmVzdWx0LCBkYXRhSWQgPSBfYS5kYXRhSWQsIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgb3ZlcndyaXRlID0gX2Eub3ZlcndyaXRlO1xuICAgICAgICB2YXIgb3BlcmF0aW9uRGVmaW5pdGlvbiA9IHV0aWxpdGllcy5nZXRPcGVyYXRpb25EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgdmFyIG1lcmdlciA9IG1ha2VQcm9jZXNzZWRGaWVsZHNNZXJnZXIoKTtcbiAgICAgICAgdmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHV0aWxpdGllcy5nZXREZWZhdWx0VmFsdWVzKG9wZXJhdGlvbkRlZmluaXRpb24pKSwgdmFyaWFibGVzKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgICAgICB3cml0dGVuOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VyLm1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICB2YXJTdHJpbmc6IGNhbm9uaWNhbFN0cmluZ2lmeSh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgZnJhZ21lbnRNYXA6IHV0aWxpdGllcy5jcmVhdGVGcmFnbWVudE1hcCh1dGlsaXRpZXMuZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhxdWVyeSkpLFxuICAgICAgICAgICAgb3ZlcndyaXRlOiAhIW92ZXJ3cml0ZSxcbiAgICAgICAgICAgIGluY29taW5nQnlJZDogbmV3IE1hcCxcbiAgICAgICAgICAgIGNsaWVudE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgZGVmZXJyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZmxhdm9yczogbmV3IE1hcCxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlZiA9IHRoaXMucHJvY2Vzc1NlbGVjdGlvblNldCh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCB8fCBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgZGF0YUlkOiBkYXRhSWQsXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IG9wZXJhdGlvbkRlZmluaXRpb24uc2VsZWN0aW9uU2V0LFxuICAgICAgICAgICAgbWVyZ2VUcmVlOiB7IG1hcDogbmV3IE1hcCB9LFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzUmVmZXJlbmNlKHJlZikpIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIkNvdWxkIG5vdCBpZGVudGlmeSBvYmplY3QgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDYpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuaW5jb21pbmdCeUlkLmZvckVhY2goZnVuY3Rpb24gKF9hLCBkYXRhSWQpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZU9iamVjdCA9IF9hLnN0b3JlT2JqZWN0LCBtZXJnZVRyZWUgPSBfYS5tZXJnZVRyZWUsIGZpZWxkTm9kZVNldCA9IF9hLmZpZWxkTm9kZVNldDtcbiAgICAgICAgICAgIHZhciBlbnRpdHlSZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShkYXRhSWQpO1xuICAgICAgICAgICAgaWYgKG1lcmdlVHJlZSAmJiBtZXJnZVRyZWUubWFwLnNpemUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXBwbGllZCA9IF90aGlzLmFwcGx5TWVyZ2VzKG1lcmdlVHJlZSwgZW50aXR5UmVmLCBzdG9yZU9iamVjdCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShhcHBsaWVkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlT2JqZWN0ID0gYXBwbGllZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX0RFVl9fICYmICFjb250ZXh0Lm92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZHNXaXRoU2VsZWN0aW9uU2V0c18xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgICAgICBmaWVsZE5vZGVTZXQuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzV2l0aFNlbGVjdGlvblNldHNfMVtmaWVsZC5uYW1lLnZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzU2VsZWN0aW9uU2V0XzEgPSBmdW5jdGlvbiAoc3RvcmVGaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkc1dpdGhTZWxlY3Rpb25TZXRzXzFbZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSldID09PSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGhhc01lcmdlRnVuY3Rpb25fMSA9IGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRUcmVlID0gbWVyZ2VUcmVlICYmIG1lcmdlVHJlZS5tYXAuZ2V0KHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oY2hpbGRUcmVlICYmIGNoaWxkVHJlZS5pbmZvICYmIGNoaWxkVHJlZS5pbmZvLm1lcmdlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzU2VsZWN0aW9uU2V0XzEoc3RvcmVGaWVsZE5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaGFzTWVyZ2VGdW5jdGlvbl8xKHN0b3JlRmllbGROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybkFib3V0RGF0YUxvc3MoZW50aXR5UmVmLCBzdG9yZU9iamVjdCwgc3RvcmVGaWVsZE5hbWUsIGNvbnRleHQuc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yZS5tZXJnZShkYXRhSWQsIHN0b3JlT2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0b3JlLnJldGFpbihyZWYuX19yZWYpO1xuICAgICAgICByZXR1cm4gcmVmO1xuICAgIH07XG4gICAgU3RvcmVXcml0ZXIucHJvdG90eXBlLnByb2Nlc3NTZWxlY3Rpb25TZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGFJZCA9IF9hLmRhdGFJZCwgcmVzdWx0ID0gX2EucmVzdWx0LCBzZWxlY3Rpb25TZXQgPSBfYS5zZWxlY3Rpb25TZXQsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBtZXJnZVRyZWUgPSBfYS5tZXJnZVRyZWU7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXMuY2FjaGUucG9saWNpZXM7XG4gICAgICAgIHZhciBpbmNvbWluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciB0eXBlbmFtZSA9IChkYXRhSWQgJiYgcG9saWNpZXMucm9vdFR5cGVuYW1lc0J5SWRbZGF0YUlkXSkgfHxcbiAgICAgICAgICAgIHV0aWxpdGllcy5nZXRUeXBlbmFtZUZyb21SZXN1bHQocmVzdWx0LCBzZWxlY3Rpb25TZXQsIGNvbnRleHQuZnJhZ21lbnRNYXApIHx8XG4gICAgICAgICAgICAoZGF0YUlkICYmIGNvbnRleHQuc3RvcmUuZ2V0KGRhdGFJZCwgXCJfX3R5cGVuYW1lXCIpKTtcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiB0eXBlbmFtZSkge1xuICAgICAgICAgICAgaW5jb21pbmcuX190eXBlbmFtZSA9IHR5cGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWFkRmllbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVJlYWRGaWVsZE9wdGlvbnMoYXJndW1lbnRzLCBpbmNvbWluZywgY29udGV4dC52YXJpYWJsZXMpO1xuICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShvcHRpb25zLmZyb20pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSBjb250ZXh0LmluY29taW5nQnlJZC5nZXQob3B0aW9ucy5mcm9tLl9fcmVmKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzEgPSBwb2xpY2llcy5yZWFkRmllbGQodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZyb206IGluZm8uc3RvcmVPYmplY3QgfSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0XzEgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdF8xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvbGljaWVzLnJlYWRGaWVsZChvcHRpb25zLCBjb250ZXh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGZpZWxkTm9kZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5mbGF0dGVuRmllbGRzKHNlbGVjdGlvblNldCwgcmVzdWx0LCBjb250ZXh0LCB0eXBlbmFtZSkuZm9yRWFjaChmdW5jdGlvbiAoY29udGV4dCwgZmllbGQpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciByZXN1bHRGaWVsZEtleSA9IHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdFtyZXN1bHRGaWVsZEtleV07XG4gICAgICAgICAgICBmaWVsZE5vZGVTZXQuYWRkKGZpZWxkKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlRmllbGROYW1lID0gcG9saWNpZXMuZ2V0U3RvcmVGaWVsZE5hbWUoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGQubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbnRleHQudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZFRyZWUgPSBnZXRDaGlsZE1lcmdlVHJlZShtZXJnZVRyZWUsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21pbmdWYWx1ZSA9IF90aGlzLnByb2Nlc3NGaWVsZFZhbHVlKHZhbHVlLCBmaWVsZCwgZmllbGQuc2VsZWN0aW9uU2V0XG4gICAgICAgICAgICAgICAgICAgID8gZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBmYWxzZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIDogY29udGV4dCwgY2hpbGRUcmVlKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRUeXBlbmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaW5jb21pbmdWYWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGluY29taW5nVmFsdWUpKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFR5cGVuYW1lID0gcmVhZEZpZWxkKFwiX190eXBlbmFtZVwiLCBpbmNvbWluZ1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlID0gcG9saWNpZXMuZ2V0TWVyZ2VGdW5jdGlvbih0eXBlbmFtZSwgZmllbGQubmFtZS52YWx1ZSwgY2hpbGRUeXBlbmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1lcmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVHJlZS5pbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW5hbWU6IHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IG1lcmdlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVSZWN5Y2xlQ2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluY29taW5nID0gY29udGV4dC5tZXJnZShpbmNvbWluZywgKF9hID0ge30sXG4gICAgICAgICAgICAgICAgICAgIF9hW3N0b3JlRmllbGROYW1lXSA9IGluY29taW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfX0RFVl9fICYmXG4gICAgICAgICAgICAgICAgIWNvbnRleHQuY2xpZW50T25seSAmJlxuICAgICAgICAgICAgICAgICFjb250ZXh0LmRlZmVycmVkICYmXG4gICAgICAgICAgICAgICAgIXV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQuYWRkZWQoZmllbGQpICYmXG4gICAgICAgICAgICAgICAgIXBvbGljaWVzLmdldFJlYWRGdW5jdGlvbih0eXBlbmFtZSwgZmllbGQubmFtZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKFwiTWlzc2luZyBmaWVsZCAnXCIuY29uY2F0KHV0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKSwgXCInIHdoaWxlIHdyaXRpbmcgcmVzdWx0IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSkuc3Vic3RyaW5nKDAsIDEwMDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBwb2xpY2llcy5pZGVudGlmeShyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlbmFtZTogdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiBzZWxlY3Rpb25TZXQsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IGNvbnRleHQuZnJhZ21lbnRNYXAsXG4gICAgICAgICAgICAgICAgc3RvcmVPYmplY3Q6IGluY29taW5nLFxuICAgICAgICAgICAgICAgIHJlYWRGaWVsZDogcmVhZEZpZWxkLFxuICAgICAgICAgICAgfSksIGlkID0gX2JbMF0sIGtleU9iamVjdCA9IF9iWzFdO1xuICAgICAgICAgICAgZGF0YUlkID0gZGF0YUlkIHx8IGlkO1xuICAgICAgICAgICAgaWYgKGtleU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGluY29taW5nID0gY29udGV4dC5tZXJnZShpbmNvbWluZywga2V5T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhSWQpXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGRhdGFJZCkge1xuICAgICAgICAgICAgdmFyIGRhdGFSZWYgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZShkYXRhSWQpO1xuICAgICAgICAgICAgdmFyIHNldHMgPSBjb250ZXh0LndyaXR0ZW5bZGF0YUlkXSB8fCAoY29udGV4dC53cml0dGVuW2RhdGFJZF0gPSBbXSk7XG4gICAgICAgICAgICBpZiAoc2V0cy5pbmRleE9mKHNlbGVjdGlvblNldCkgPj0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVJlZjtcbiAgICAgICAgICAgIHNldHMucHVzaChzZWxlY3Rpb25TZXQpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZGVyICYmIHRoaXMucmVhZGVyLmlzRnJlc2gocmVzdWx0LCBkYXRhUmVmLCBzZWxlY3Rpb25TZXQsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNfMSA9IGNvbnRleHQuaW5jb21pbmdCeUlkLmdldChkYXRhSWQpO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzXzEpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c18xLnN0b3JlT2JqZWN0ID0gY29udGV4dC5tZXJnZShwcmV2aW91c18xLnN0b3JlT2JqZWN0LCBpbmNvbWluZyk7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfMS5tZXJnZVRyZWUgPSBtZXJnZU1lcmdlVHJlZXMocHJldmlvdXNfMS5tZXJnZVRyZWUsIG1lcmdlVHJlZSk7XG4gICAgICAgICAgICAgICAgZmllbGROb2RlU2V0LmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiBwcmV2aW91c18xLmZpZWxkTm9kZVNldC5hZGQoZmllbGQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuaW5jb21pbmdCeUlkLnNldChkYXRhSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVPYmplY3Q6IGluY29taW5nLFxuICAgICAgICAgICAgICAgICAgICBtZXJnZVRyZWU6IG1lcmdlVHJlZUlzRW1wdHkobWVyZ2VUcmVlKSA/IHZvaWQgMCA6IG1lcmdlVHJlZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGROb2RlU2V0OiBmaWVsZE5vZGVTZXQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YVJlZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUucHJvY2Vzc0ZpZWxkVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZpZWxkLCBjb250ZXh0LCBtZXJnZVRyZWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFmaWVsZC5zZWxlY3Rpb25TZXQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfX0RFVl9fID8gdXRpbGl0aWVzLmNsb25lRGVlcCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5wcm9jZXNzRmllbGRWYWx1ZShpdGVtLCBmaWVsZCwgY29udGV4dCwgZ2V0Q2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBpKSk7XG4gICAgICAgICAgICAgICAgbWF5YmVSZWN5Y2xlQ2hpbGRNZXJnZVRyZWUobWVyZ2VUcmVlLCBpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2VsZWN0aW9uU2V0KHtcbiAgICAgICAgICAgIHJlc3VsdDogdmFsdWUsXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IGZpZWxkLnNlbGVjdGlvblNldCxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICBtZXJnZVRyZWU6IG1lcmdlVHJlZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdG9yZVdyaXRlci5wcm90b3R5cGUuZmxhdHRlbkZpZWxkcyA9IGZ1bmN0aW9uIChzZWxlY3Rpb25TZXQsIHJlc3VsdCwgY29udGV4dCwgdHlwZW5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVuYW1lID09PSB2b2lkIDApIHsgdHlwZW5hbWUgPSB1dGlsaXRpZXMuZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBjb250ZXh0LmZyYWdtZW50TWFwKTsgfVxuICAgICAgICB2YXIgZmllbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBwb2xpY2llcyA9IHRoaXMuY2FjaGUucG9saWNpZXM7XG4gICAgICAgIHZhciBsaW1pdGluZ1RyaWUgPSBuZXcgdHJpZS5UcmllKGZhbHNlKTtcbiAgICAgICAgKGZ1bmN0aW9uIGZsYXR0ZW4oc2VsZWN0aW9uU2V0LCBpbmhlcml0ZWRDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgdmlzaXRlZE5vZGUgPSBsaW1pdGluZ1RyaWUubG9va3VwKHNlbGVjdGlvblNldCwgaW5oZXJpdGVkQ29udGV4dC5jbGllbnRPbmx5LCBpbmhlcml0ZWRDb250ZXh0LmRlZmVycmVkKTtcbiAgICAgICAgICAgIGlmICh2aXNpdGVkTm9kZS52aXNpdGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZpc2l0ZWROb2RlLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsaXRpZXMuc2hvdWxkSW5jbHVkZShzZWxlY3Rpb24sIGNvbnRleHQudmFyaWFibGVzKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRPbmx5ID0gaW5oZXJpdGVkQ29udGV4dC5jbGllbnRPbmx5LCBkZWZlcnJlZCA9IGluaGVyaXRlZENvbnRleHQuZGVmZXJyZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCEoY2xpZW50T25seSAmJiBkZWZlcnJlZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShzZWxlY3Rpb24uZGlyZWN0aXZlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGRpci5uYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xpZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50T25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJkZWZlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkKGRpciwgY29udGV4dC52YXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXJncyB8fCBhcmdzLmlmICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxpdGllcy5pc0ZpZWxkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nID0gZmllbGRNYXAuZ2V0KHNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50T25seSA9IGNsaWVudE9ubHkgJiYgZXhpc3RpbmcuY2xpZW50T25seTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkID0gZGVmZXJyZWQgJiYgZXhpc3RpbmcuZGVmZXJyZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGRNYXAuc2V0KHNlbGVjdGlvbiwgZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBjbGllbnRPbmx5LCBkZWZlcnJlZCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdXRpbGl0aWVzLmdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGNvbnRleHQuZnJhZ21lbnRNYXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljaWVzLmZyYWdtZW50TWF0Y2hlcyhmcmFnbWVudCwgdHlwZW5hbWUsIHJlc3VsdCwgY29udGV4dC52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuKGZyYWdtZW50LnNlbGVjdGlvblNldCwgZ2V0Q29udGV4dEZsYXZvcihjb250ZXh0LCBjbGllbnRPbmx5LCBkZWZlcnJlZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKHNlbGVjdGlvblNldCwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiBmaWVsZE1hcDtcbiAgICB9O1xuICAgIFN0b3JlV3JpdGVyLnByb3RvdHlwZS5hcHBseU1lcmdlcyA9IGZ1bmN0aW9uIChtZXJnZVRyZWUsIGV4aXN0aW5nLCBpbmNvbWluZywgY29udGV4dCwgZ2V0U3RvcmFnZUFyZ3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobWVyZ2VUcmVlLm1hcC5zaXplICYmICF1dGlsaXRpZXMuaXNSZWZlcmVuY2UoaW5jb21pbmcpKSB7XG4gICAgICAgICAgICB2YXIgZV8xID0gKCFpc0FycmF5KGluY29taW5nKSAmJlxuICAgICAgICAgICAgICAgICh1dGlsaXRpZXMuaXNSZWZlcmVuY2UoZXhpc3RpbmcpIHx8IHN0b3JlVmFsdWVJc1N0b3JlT2JqZWN0KGV4aXN0aW5nKSkpID8gZXhpc3RpbmcgOiB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgaV8xID0gaW5jb21pbmc7XG4gICAgICAgICAgICBpZiAoZV8xICYmICFnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgIGdldFN0b3JhZ2VBcmdzID0gW3V0aWxpdGllcy5pc1JlZmVyZW5jZShlXzEpID8gZV8xLl9fcmVmIDogZV8xXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGFuZ2VkRmllbGRzXzE7XG4gICAgICAgICAgICB2YXIgZ2V0VmFsdWVfMSA9IGZ1bmN0aW9uIChmcm9tLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkoZnJvbSlcbiAgICAgICAgICAgICAgICAgICAgPyAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIgPyBmcm9tW25hbWVdIDogdm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRleHQuc3RvcmUuZ2V0RmllbGRWYWx1ZShmcm9tLCBTdHJpbmcobmFtZSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1lcmdlVHJlZS5tYXAuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRUcmVlLCBzdG9yZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBlVmFsID0gZ2V0VmFsdWVfMShlXzEsIHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgaVZhbCA9IGdldFZhbHVlXzEoaV8xLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaVZhbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgICAgICBnZXRTdG9yYWdlQXJncy5wdXNoKHN0b3JlRmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFWYWwgPSBfdGhpcy5hcHBseU1lcmdlcyhjaGlsZFRyZWUsIGVWYWwsIGlWYWwsIGNvbnRleHQsIGdldFN0b3JhZ2VBcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAoYVZhbCAhPT0gaVZhbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzEgPSBjaGFuZ2VkRmllbGRzXzEgfHwgbmV3IE1hcDtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEZpZWxkc18xLnNldChzdG9yZUZpZWxkTmFtZSwgYVZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnZXRTdG9yYWdlQXJncykge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLmludmFyaWFudChnZXRTdG9yYWdlQXJncy5wb3AoKSA9PT0gc3RvcmVGaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNoYW5nZWRGaWVsZHNfMSkge1xuICAgICAgICAgICAgICAgIGluY29taW5nID0gKGlzQXJyYXkoaV8xKSA/IGlfMS5zbGljZSgwKSA6IHRzbGliLl9fYXNzaWduKHt9LCBpXzEpKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkRmllbGRzXzEuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jb21pbmdbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWVyZ2VUcmVlLmluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlLnBvbGljaWVzLnJ1bk1lcmdlRnVuY3Rpb24oZXhpc3RpbmcsIGluY29taW5nLCBtZXJnZVRyZWUuaW5mbywgY29udGV4dCwgZ2V0U3RvcmFnZUFyZ3MgJiYgKF9hID0gY29udGV4dC5zdG9yZSkuZ2V0U3RvcmFnZS5hcHBseShfYSwgZ2V0U3RvcmFnZUFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jb21pbmc7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmVXcml0ZXI7XG59KCkpO1xudmFyIGVtcHR5TWVyZ2VUcmVlUG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0Q2hpbGRNZXJnZVRyZWUoX2EsIG5hbWUpIHtcbiAgICB2YXIgbWFwID0gX2EubWFwO1xuICAgIGlmICghbWFwLmhhcyhuYW1lKSkge1xuICAgICAgICBtYXAuc2V0KG5hbWUsIGVtcHR5TWVyZ2VUcmVlUG9vbC5wb3AoKSB8fCB7IG1hcDogbmV3IE1hcCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcC5nZXQobmFtZSk7XG59XG5mdW5jdGlvbiBtZXJnZU1lcmdlVHJlZXMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAobGVmdCA9PT0gcmlnaHQgfHwgIXJpZ2h0IHx8IG1lcmdlVHJlZUlzRW1wdHkocmlnaHQpKVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICBpZiAoIWxlZnQgfHwgbWVyZ2VUcmVlSXNFbXB0eShsZWZ0KSlcbiAgICAgICAgcmV0dXJuIHJpZ2h0O1xuICAgIHZhciBpbmZvID0gbGVmdC5pbmZvICYmIHJpZ2h0LmluZm8gPyB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbGVmdC5pbmZvKSwgcmlnaHQuaW5mbykgOiBsZWZ0LmluZm8gfHwgcmlnaHQuaW5mbztcbiAgICB2YXIgbmVlZFRvTWVyZ2VNYXBzID0gbGVmdC5tYXAuc2l6ZSAmJiByaWdodC5tYXAuc2l6ZTtcbiAgICB2YXIgbWFwID0gbmVlZFRvTWVyZ2VNYXBzID8gbmV3IE1hcCA6XG4gICAgICAgIGxlZnQubWFwLnNpemUgPyBsZWZ0Lm1hcCA6IHJpZ2h0Lm1hcDtcbiAgICB2YXIgbWVyZ2VkID0geyBpbmZvOiBpbmZvLCBtYXA6IG1hcCB9O1xuICAgIGlmIChuZWVkVG9NZXJnZU1hcHMpIHtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1JpZ2h0S2V5c18xID0gbmV3IFNldChyaWdodC5tYXAua2V5cygpKTtcbiAgICAgICAgbGVmdC5tYXAuZm9yRWFjaChmdW5jdGlvbiAobGVmdFRyZWUsIGtleSkge1xuICAgICAgICAgICAgbWVyZ2VkLm1hcC5zZXQoa2V5LCBtZXJnZU1lcmdlVHJlZXMobGVmdFRyZWUsIHJpZ2h0Lm1hcC5nZXQoa2V5KSkpO1xuICAgICAgICAgICAgcmVtYWluaW5nUmlnaHRLZXlzXzEuZGVsZXRlKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1haW5pbmdSaWdodEtleXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIG1lcmdlZC5tYXAuc2V0KGtleSwgbWVyZ2VNZXJnZVRyZWVzKHJpZ2h0Lm1hcC5nZXQoa2V5KSwgbGVmdC5tYXAuZ2V0KGtleSkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWQ7XG59XG5mdW5jdGlvbiBtZXJnZVRyZWVJc0VtcHR5KHRyZWUpIHtcbiAgICByZXR1cm4gIXRyZWUgfHwgISh0cmVlLmluZm8gfHwgdHJlZS5tYXAuc2l6ZSk7XG59XG5mdW5jdGlvbiBtYXliZVJlY3ljbGVDaGlsZE1lcmdlVHJlZShfYSwgbmFtZSkge1xuICAgIHZhciBtYXAgPSBfYS5tYXA7XG4gICAgdmFyIGNoaWxkVHJlZSA9IG1hcC5nZXQobmFtZSk7XG4gICAgaWYgKGNoaWxkVHJlZSAmJiBtZXJnZVRyZWVJc0VtcHR5KGNoaWxkVHJlZSkpIHtcbiAgICAgICAgZW1wdHlNZXJnZVRyZWVQb29sLnB1c2goY2hpbGRUcmVlKTtcbiAgICAgICAgbWFwLmRlbGV0ZShuYW1lKTtcbiAgICB9XG59XG52YXIgd2FybmluZ3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiB3YXJuQWJvdXREYXRhTG9zcyhleGlzdGluZ1JlZiwgaW5jb21pbmdPYmosIHN0b3JlRmllbGROYW1lLCBzdG9yZSkge1xuICAgIHZhciBnZXRDaGlsZCA9IGZ1bmN0aW9uIChvYmpPclJlZikge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdG9yZS5nZXRGaWVsZFZhbHVlKG9iak9yUmVmLCBzdG9yZUZpZWxkTmFtZSk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY2hpbGQgPT09IFwib2JqZWN0XCIgJiYgY2hpbGQ7XG4gICAgfTtcbiAgICB2YXIgZXhpc3RpbmcgPSBnZXRDaGlsZChleGlzdGluZ1JlZik7XG4gICAgaWYgKCFleGlzdGluZylcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBpbmNvbWluZyA9IGdldENoaWxkKGluY29taW5nT2JqKTtcbiAgICBpZiAoIWluY29taW5nKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKHV0aWxpdGllcy5pc1JlZmVyZW5jZShleGlzdGluZykpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXF1YWxpdHkuZXF1YWwoZXhpc3RpbmcsIGluY29taW5nKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChPYmplY3Qua2V5cyhleGlzdGluZykuZXZlcnkoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc3RvcmUuZ2V0RmllbGRWYWx1ZShpbmNvbWluZywga2V5KSAhPT0gdm9pZCAwOyB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwYXJlbnRUeXBlID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShleGlzdGluZ1JlZiwgXCJfX3R5cGVuYW1lXCIpIHx8XG4gICAgICAgIHN0b3JlLmdldEZpZWxkVmFsdWUoaW5jb21pbmdPYmosIFwiX190eXBlbmFtZVwiKTtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZShzdG9yZUZpZWxkTmFtZSk7XG4gICAgdmFyIHR5cGVEb3ROYW1lID0gXCJcIi5jb25jYXQocGFyZW50VHlwZSwgXCIuXCIpLmNvbmNhdChmaWVsZE5hbWUpO1xuICAgIGlmICh3YXJuaW5ncy5oYXModHlwZURvdE5hbWUpKVxuICAgICAgICByZXR1cm47XG4gICAgd2FybmluZ3MuYWRkKHR5cGVEb3ROYW1lKTtcbiAgICB2YXIgY2hpbGRUeXBlbmFtZXMgPSBbXTtcbiAgICBpZiAoIWlzQXJyYXkoZXhpc3RpbmcpICYmXG4gICAgICAgICFpc0FycmF5KGluY29taW5nKSkge1xuICAgICAgICBbZXhpc3RpbmcsIGluY29taW5nXS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgdmFyIHR5cGVuYW1lID0gc3RvcmUuZ2V0RmllbGRWYWx1ZShjaGlsZCwgXCJfX3R5cGVuYW1lXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlbmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgICFjaGlsZFR5cGVuYW1lcy5pbmNsdWRlcyh0eXBlbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFR5cGVuYW1lcy5wdXNoKHR5cGVuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkNhY2hlIGRhdGEgbWF5IGJlIGxvc3Qgd2hlbiByZXBsYWNpbmcgdGhlIFwiLmNvbmNhdChmaWVsZE5hbWUsIFwiIGZpZWxkIG9mIGEgXCIpLmNvbmNhdChwYXJlbnRUeXBlLCBcIiBvYmplY3QuXFxuXFxuVG8gYWRkcmVzcyB0aGlzIHByb2JsZW0gKHdoaWNoIGlzIG5vdCBhIGJ1ZyBpbiBBcG9sbG8gQ2xpZW50KSwgXCIpLmNvbmNhdChjaGlsZFR5cGVuYW1lcy5sZW5ndGhcbiAgICAgICAgPyBcImVpdGhlciBlbnN1cmUgYWxsIG9iamVjdHMgb2YgdHlwZSBcIiArXG4gICAgICAgICAgICBjaGlsZFR5cGVuYW1lcy5qb2luKFwiIGFuZCBcIikgKyBcIiBoYXZlIGFuIElEIG9yIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uLCBvciBcIlxuICAgICAgICA6IFwiXCIsIFwiZGVmaW5lIGEgY3VzdG9tIG1lcmdlIGZ1bmN0aW9uIGZvciB0aGUgXCIpLmNvbmNhdCh0eXBlRG90TmFtZSwgXCIgZmllbGQsIHNvIEluTWVtb3J5Q2FjaGUgY2FuIHNhZmVseSBtZXJnZSB0aGVzZSBvYmplY3RzOlxcblxcbiAgZXhpc3Rpbmc6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmcpLnNsaWNlKDAsIDEwMDApLCBcIlxcbiAgaW5jb21pbmc6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoaW5jb21pbmcpLnNsaWNlKDAsIDEwMDApLCBcIlxcblxcbkZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZXNlIG9wdGlvbnMsIHBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbjpcXG5cXG4gICogRW5zdXJpbmcgZW50aXR5IG9iamVjdHMgaGF2ZSBJRHM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2dlbmVyYXRpbmctdW5pcXVlLWlkZW50aWZpZXJzXFxuICAqIERlZmluaW5nIGN1c3RvbSBtZXJnZSBmdW5jdGlvbnM6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL21lcmdpbmctbm9uLW5vcm1hbGl6ZWQtb2JqZWN0c1xcblwiKSk7XG59XG5cbnZhciBJbk1lbW9yeUNhY2hlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoSW5NZW1vcnlDYWNoZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUNhY2hlKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud2F0Y2hlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgX3RoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICBfdGhpcy5tYWtlVmFyID0gbWFrZVZhcjtcbiAgICAgICAgX3RoaXMudHhDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLmNvbmZpZyA9IG5vcm1hbGl6ZUNvbmZpZyhjb25maWcpO1xuICAgICAgICBfdGhpcy5hZGRUeXBlbmFtZSA9ICEhX3RoaXMuY29uZmlnLmFkZFR5cGVuYW1lO1xuICAgICAgICBfdGhpcy5wb2xpY2llcyA9IG5ldyBQb2xpY2llcyh7XG4gICAgICAgICAgICBjYWNoZTogX3RoaXMsXG4gICAgICAgICAgICBkYXRhSWRGcm9tT2JqZWN0OiBfdGhpcy5jb25maWcuZGF0YUlkRnJvbU9iamVjdCxcbiAgICAgICAgICAgIHBvc3NpYmxlVHlwZXM6IF90aGlzLmNvbmZpZy5wb3NzaWJsZVR5cGVzLFxuICAgICAgICAgICAgdHlwZVBvbGljaWVzOiBfdGhpcy5jb25maWcudHlwZVBvbGljaWVzLFxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290U3RvcmUgPSB0aGlzLmRhdGEgPSBuZXcgZXhwb3J0cy5FbnRpdHlTdG9yZS5Sb290KHtcbiAgICAgICAgICAgIHBvbGljaWVzOiB0aGlzLnBvbGljaWVzLFxuICAgICAgICAgICAgcmVzdWx0Q2FjaGluZzogdGhpcy5jb25maWcucmVzdWx0Q2FjaGluZyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSByb290U3RvcmUuc3R1bXA7XG4gICAgICAgIHRoaXMucmVzZXRSZXN1bHRDYWNoZSgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVzZXRSZXN1bHRDYWNoZSA9IGZ1bmN0aW9uIChyZXNldFJlc3VsdElkZW50aXRpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHByZXZpb3VzUmVhZGVyID0gdGhpcy5zdG9yZVJlYWRlcjtcbiAgICAgICAgdGhpcy5zdG9yZVdyaXRlciA9IG5ldyBTdG9yZVdyaXRlcih0aGlzLCB0aGlzLnN0b3JlUmVhZGVyID0gbmV3IFN0b3JlUmVhZGVyKHtcbiAgICAgICAgICAgIGNhY2hlOiB0aGlzLFxuICAgICAgICAgICAgYWRkVHlwZW5hbWU6IHRoaXMuYWRkVHlwZW5hbWUsXG4gICAgICAgICAgICByZXN1bHRDYWNoZU1heFNpemU6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIGNhbm9uaXplUmVzdWx0czogc2hvdWxkQ2Fub25pemVSZXN1bHRzKHRoaXMuY29uZmlnKSxcbiAgICAgICAgICAgIGNhbm9uOiByZXNldFJlc3VsdElkZW50aXRpZXNcbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogcHJldmlvdXNSZWFkZXIgJiYgcHJldmlvdXNSZWFkZXIuY2Fub24sXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoID0gb3B0aW1pc20ud3JhcChmdW5jdGlvbiAoYywgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdFdhdGNoKGMsIG9wdGlvbnMpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXg6IHRoaXMuY29uZmlnLnJlc3VsdENhY2hlTWF4U2l6ZSxcbiAgICAgICAgICAgIG1ha2VDYWNoZUtleTogZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSBjLm9wdGltaXN0aWMgPyBfdGhpcy5vcHRpbWlzdGljRGF0YSA6IF90aGlzLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzUmVzdWx0Q2FjaGluZyhzdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGltaXN0aWMgPSBjLm9wdGltaXN0aWMsIHJvb3RJZCA9IGMucm9vdElkLCB2YXJpYWJsZXMgPSBjLnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLm1ha2VDYWNoZUtleShjLnF1ZXJ5LCBjLmNhbGxiYWNrLCBjYW5vbmljYWxTdHJpbmdpZnkoeyBvcHRpbWlzdGljOiBvcHRpbWlzdGljLCByb290SWQ6IHJvb3RJZCwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5ldyBTZXQoW1xuICAgICAgICAgICAgdGhpcy5kYXRhLmdyb3VwLFxuICAgICAgICAgICAgdGhpcy5vcHRpbWlzdGljRGF0YS5ncm91cCxcbiAgICAgICAgXSkuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHsgcmV0dXJuIGdyb3VwLnJlc2V0Q2FjaGluZygpOyB9KTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgaWYgKGRhdGEpXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVwbGFjZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5leHRyYWN0ID0gZnVuY3Rpb24gKG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkuZXh0cmFjdCgpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEsIHJldHVyblBhcnRpYWxEYXRhID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVJlYWRlci5kaWZmUXVlcnlBZ2FpbnN0U3RvcmUodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHN0b3JlOiBvcHRpb25zLm9wdGltaXN0aWMgPyB0aGlzLm9wdGltaXN0aWNEYXRhIDogdGhpcy5kYXRhLCBjb25maWc6IHRoaXMuY29uZmlnLCByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEgfSkpLnJlc3VsdCB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdGaWVsZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlV3JpdGVyLndyaXRlVG9TdG9yZSh0aGlzLmRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUubW9kaWZ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKG9wdGlvbnMsIFwiaWRcIikgJiYgIW9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmUgPSBvcHRpb25zLm9wdGltaXN0aWNcbiAgICAgICAgICAgID8gdGhpcy5vcHRpbWlzdGljRGF0YVxuICAgICAgICAgICAgOiB0aGlzLmRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5tb2RpZnkob3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIiwgb3B0aW9ucy5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKCEtLXRoaXMudHhDb3VudCAmJiBvcHRpb25zLmJyb2FkY2FzdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlUmVhZGVyLmRpZmZRdWVyeUFnYWluc3RTdG9yZSh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgc3RvcmU6IG9wdGlvbnMub3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEsIHJvb3RJZDogb3B0aW9ucy5pZCB8fCBcIlJPT1RfUVVFUllcIiwgY29uZmlnOiB0aGlzLmNvbmZpZyB9KSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uICh3YXRjaCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMud2F0Y2hlcy5zaXplKSB7XG4gICAgICAgICAgICByZWNhbGxDYWNoZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhdGNoZXMuYWRkKHdhdGNoKTtcbiAgICAgICAgaWYgKHdhdGNoLmltbWVkaWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKHdhdGNoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLndhdGNoZXMuZGVsZXRlKHdhdGNoKSAmJiAhX3RoaXMud2F0Y2hlcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgZm9yZ2V0Q2FjaGUoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubWF5YmVCcm9hZGNhc3RXYXRjaC5mb3JnZXQod2F0Y2gpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuZ2MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBjYW5vbmljYWxTdHJpbmdpZnkucmVzZXQoKTtcbiAgICAgICAgdmFyIGlkcyA9IHRoaXMub3B0aW1pc3RpY0RhdGEuZ2MoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgIXRoaXMudHhDb3VudCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzZXRSZXN1bHRDYWNoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRSZXN1bHRDYWNoZShvcHRpb25zLnJlc2V0UmVzdWx0SWRlbnRpdGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnJlc2V0UmVzdWx0SWRlbnRpdGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVSZWFkZXIucmVzZXRDYW5vbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbiAocm9vdElkLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIHJldHVybiAob3B0aW1pc3RpYyA/IHRoaXMub3B0aW1pc3RpY0RhdGEgOiB0aGlzLmRhdGEpLnJldGFpbihyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChyb290SWQsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpbWlzdGljID8gdGhpcy5vcHRpbWlzdGljRGF0YSA6IHRoaXMuZGF0YSkucmVsZWFzZShyb290SWQpO1xuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuaWRlbnRpZnkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNSZWZlcmVuY2Uob2JqZWN0KSlcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuX19yZWY7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb2xpY2llcy5pZGVudGlmeShvYmplY3QpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLmV2aWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmlkKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob3B0aW9ucywgXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgaWQ6IFwiUk9PVF9RVUVSWVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICArK3RoaXMudHhDb3VudDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGltaXN0aWNEYXRhLmV2aWN0KG9wdGlvbnMsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoIS0tdGhpcy50eENvdW50ICYmIG9wdGlvbnMuYnJvYWRjYXN0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBjYW5vbmljYWxTdHJpbmdpZnkucmVzZXQoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kaXNjYXJkV2F0Y2hlcykge1xuICAgICAgICAgICAgdGhpcy53YXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKHdhdGNoKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoLmZvcmdldCh3YXRjaCk7IH0pO1xuICAgICAgICAgICAgdGhpcy53YXRjaGVzLmNsZWFyKCk7XG4gICAgICAgICAgICBmb3JnZXRDYWNoZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnJlbW92ZU9wdGltaXN0aWMgPSBmdW5jdGlvbiAoaWRUb1JlbW92ZSkge1xuICAgICAgICB2YXIgbmV3T3B0aW1pc3RpY0RhdGEgPSB0aGlzLm9wdGltaXN0aWNEYXRhLnJlbW92ZUxheWVyKGlkVG9SZW1vdmUpO1xuICAgICAgICBpZiAobmV3T3B0aW1pc3RpY0RhdGEgIT09IHRoaXMub3B0aW1pc3RpY0RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSBuZXdPcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cGRhdGUgPSBvcHRpb25zLnVwZGF0ZSwgX2EgPSBvcHRpb25zLm9wdGltaXN0aWMsIG9wdGltaXN0aWMgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hLCByZW1vdmVPcHRpbWlzdGljID0gb3B0aW9ucy5yZW1vdmVPcHRpbWlzdGljLCBvbldhdGNoVXBkYXRlZCA9IG9wdGlvbnMub25XYXRjaFVwZGF0ZWQ7XG4gICAgICAgIHZhciB1cGRhdGVSZXN1bHQ7XG4gICAgICAgIHZhciBwZXJmb3JtID0gZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgZGF0YSA9IF9hLmRhdGEsIG9wdGltaXN0aWNEYXRhID0gX2Eub3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICArK190aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gX3RoaXMub3B0aW1pc3RpY0RhdGEgPSBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVJlc3VsdCA9IHVwZGF0ZShfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAtLV90aGlzLnR4Q291bnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW1pc3RpY0RhdGEgPSBvcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFscmVhZHlEaXJ0eSA9IG5ldyBTZXQoKTtcbiAgICAgICAgaWYgKG9uV2F0Y2hVcGRhdGVkICYmICF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcyh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGlydHkuYWRkKHdhdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW1pc3RpYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW1pc3RpY0RhdGEgPSB0aGlzLm9wdGltaXN0aWNEYXRhLmFkZExheWVyKG9wdGltaXN0aWMsIHBlcmZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdGltaXN0aWMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwZXJmb3JtKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwZXJmb3JtKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZW1vdmVPcHRpbWlzdGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGltaXN0aWNEYXRhID0gdGhpcy5vcHRpbWlzdGljRGF0YS5yZW1vdmVMYXllcihyZW1vdmVPcHRpbWlzdGljKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25XYXRjaFVwZGF0ZWQgJiYgYWxyZWFkeURpcnR5LnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0V2F0Y2hlcyh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgb25XYXRjaFVwZGF0ZWQ6IGZ1bmN0aW9uICh3YXRjaCwgZGlmZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb25XYXRjaFVwZGF0ZWQuY2FsbCh0aGlzLCB3YXRjaCwgZGlmZik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RGlydHkuZGVsZXRlKHdhdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICAgICAgaWYgKGFscmVhZHlEaXJ0eS5zaXplKSB7XG4gICAgICAgICAgICAgICAgYWxyZWFkeURpcnR5LmZvckVhY2goZnVuY3Rpb24gKHdhdGNoKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoLmRpcnR5KHdhdGNoKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdFdhdGNoZXMob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVwZGF0ZVJlc3VsdDtcbiAgICB9O1xuICAgIEluTWVtb3J5Q2FjaGUucHJvdG90eXBlLnBlcmZvcm1UcmFuc2FjdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGUsIG9wdGltaXN0aWNJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXRjaCh7XG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IG9wdGltaXN0aWNJZCB8fCAob3B0aW1pc3RpY0lkICE9PSBudWxsKSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS50cmFuc2Zvcm1Eb2N1bWVudCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICBpZiAodGhpcy5hZGRUeXBlbmFtZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlLmdldChkb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHV0aWxpdGllcy5hZGRUeXBlbmFtZVRvRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZW5hbWVEb2N1bWVudENhY2hlLnNldChkb2N1bWVudCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVuYW1lRG9jdW1lbnRDYWNoZS5zZXQocmVzdWx0LCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfTtcbiAgICBJbk1lbW9yeUNhY2hlLnByb3RvdHlwZS5icm9hZGNhc3RXYXRjaGVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnR4Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBfdGhpcy5tYXliZUJyb2FkY2FzdFdhdGNoKGMsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5NZW1vcnlDYWNoZS5wcm90b3R5cGUuYnJvYWRjYXN0V2F0Y2ggPSBmdW5jdGlvbiAoYywgb3B0aW9ucykge1xuICAgICAgICB2YXIgbGFzdERpZmYgPSBjLmxhc3REaWZmO1xuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuZGlmZihjKTtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChjLm9wdGltaXN0aWMgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5vcHRpbWlzdGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZGlmZi5mcm9tT3B0aW1pc3RpY1RyYW5zYWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uV2F0Y2hVcGRhdGVkICYmXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vbldhdGNoVXBkYXRlZC5jYWxsKHRoaXMsIGMsIGRpZmYsIGxhc3REaWZmKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXN0RGlmZiB8fCAhZXF1YWxpdHkuZXF1YWwobGFzdERpZmYucmVzdWx0LCBkaWZmLnJlc3VsdCkpIHtcbiAgICAgICAgICAgIGMuY2FsbGJhY2soYy5sYXN0RGlmZiA9IGRpZmYsIGxhc3REaWZmKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEluTWVtb3J5Q2FjaGU7XG59KEFwb2xsb0NhY2hlKSk7XG5cbmV4cG9ydHMuaXNSZWZlcmVuY2UgPSB1dGlsaXRpZXMuaXNSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VSZWZlcmVuY2UgPSB1dGlsaXRpZXMubWFrZVJlZmVyZW5jZTtcbmV4cG9ydHMuQXBvbGxvQ2FjaGUgPSBBcG9sbG9DYWNoZTtcbmV4cG9ydHMuSW5NZW1vcnlDYWNoZSA9IEluTWVtb3J5Q2FjaGU7XG5leHBvcnRzLk1pc3NpbmdGaWVsZEVycm9yID0gTWlzc2luZ0ZpZWxkRXJyb3I7XG5leHBvcnRzLlBvbGljaWVzID0gUG9saWNpZXM7XG5leHBvcnRzLmNhY2hlU2xvdCA9IGNhY2hlU2xvdDtcbmV4cG9ydHMuY2Fub25pY2FsU3RyaW5naWZ5ID0gY2Fub25pY2FsU3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0RGF0YUlkRnJvbU9iamVjdCA9IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0O1xuZXhwb3J0cy5maWVsZE5hbWVGcm9tU3RvcmVOYW1lID0gZmllbGROYW1lRnJvbVN0b3JlTmFtZTtcbmV4cG9ydHMubWFrZVZhciA9IG1ha2VWYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWNoZS5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uL2xpbmsvY29yZScpO1xudmFyIGh0dHAgPSByZXF1aXJlKCcuLi9saW5rL2h0dHAnKTtcbnZhciBlcXVhbGl0eSA9IHJlcXVpcmUoJ0B3cnkvZXF1YWxpdHknKTtcbnZhciBjYWNoZSA9IHJlcXVpcmUoJy4uL2NhY2hlJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzJyk7XG52YXIgZXJyb3JzID0gcmVxdWlyZSgnLi4vZXJyb3JzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2xpbmsvdXRpbHMnKTtcbnZhciB0c0ludmFyaWFudCA9IHJlcXVpcmUoJ3RzLWludmFyaWFudCcpO1xudmFyIGdyYXBocWxUYWcgPSByZXF1aXJlKCdncmFwaHFsLXRhZycpO1xuXG52YXIgdmVyc2lvbiA9ICczLjYuOSc7XG5cbmV4cG9ydHMuTmV0d29ya1N0YXR1cyA9IHZvaWQgMDtcbihmdW5jdGlvbiAoTmV0d29ya1N0YXR1cykge1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcImxvYWRpbmdcIl0gPSAxXSA9IFwibG9hZGluZ1wiO1xuICAgIE5ldHdvcmtTdGF0dXNbTmV0d29ya1N0YXR1c1tcInNldFZhcmlhYmxlc1wiXSA9IDJdID0gXCJzZXRWYXJpYWJsZXNcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJmZXRjaE1vcmVcIl0gPSAzXSA9IFwiZmV0Y2hNb3JlXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVmZXRjaFwiXSA9IDRdID0gXCJyZWZldGNoXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicG9sbFwiXSA9IDZdID0gXCJwb2xsXCI7XG4gICAgTmV0d29ya1N0YXR1c1tOZXR3b3JrU3RhdHVzW1wicmVhZHlcIl0gPSA3XSA9IFwicmVhZHlcIjtcbiAgICBOZXR3b3JrU3RhdHVzW05ldHdvcmtTdGF0dXNbXCJlcnJvclwiXSA9IDhdID0gXCJlcnJvclwiO1xufSkoZXhwb3J0cy5OZXR3b3JrU3RhdHVzIHx8IChleHBvcnRzLk5ldHdvcmtTdGF0dXMgPSB7fSkpO1xuZnVuY3Rpb24gaXNOZXR3b3JrUmVxdWVzdEluRmxpZ2h0KG5ldHdvcmtTdGF0dXMpIHtcbiAgICByZXR1cm4gbmV0d29ya1N0YXR1cyA/IG5ldHdvcmtTdGF0dXMgPCA3IDogZmFsc2U7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduLCBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0Lmhhc093blByb3BlcnR5O1xudmFyIE9ic2VydmFibGVRdWVyeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKE9ic2VydmFibGVRdWVyeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlUXVlcnkoX2EpIHtcbiAgICAgICAgdmFyIHF1ZXJ5TWFuYWdlciA9IF9hLnF1ZXJ5TWFuYWdlciwgcXVlcnlJbmZvID0gX2EucXVlcnlJbmZvLCBvcHRpb25zID0gX2Eub3B0aW9ucztcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBzdWJPYnNlcnZlciA9IG9ic2VydmVyLl9zdWJzY3JpcHRpb24uX29ic2VydmVyO1xuICAgICAgICAgICAgICAgIGlmIChzdWJPYnNlcnZlciAmJiAhc3ViT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViT2JzZXJ2ZXIuZXJyb3IgPSBkZWZhdWx0U3Vic2NyaXB0aW9uT2JzZXJ2ZXJFcnJvckNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XG4gICAgICAgICAgICB2YXIgZmlyc3QgPSAhX3RoaXMub2JzZXJ2ZXJzLnNpemU7XG4gICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gX3RoaXMubGFzdDtcbiAgICAgICAgICAgIGlmIChsYXN0ICYmIGxhc3QuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvciAmJiBvYnNlcnZlci5lcnJvcihsYXN0LmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3QgJiYgbGFzdC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0ICYmIG9ic2VydmVyLm5leHQobGFzdC5yZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVvYnNlcnZlKCkuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpICYmICFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50ZWFyRG93blF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICBfdGhpcy5xdWVyeUluZm8gPSBxdWVyeUluZm87XG4gICAgICAgIF90aGlzLnF1ZXJ5TWFuYWdlciA9IHF1ZXJ5TWFuYWdlcjtcbiAgICAgICAgX3RoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICB2YXIgX2IgPSBxdWVyeU1hbmFnZXIuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSwgX2MgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgX2QgPSBfYy5mZXRjaFBvbGljeSwgZGVmYXVsdEZldGNoUG9saWN5ID0gX2QgPT09IHZvaWQgMCA/IFwiY2FjaGUtZmlyc3RcIiA6IF9kO1xuICAgICAgICB2YXIgX2UgPSBvcHRpb25zLmZldGNoUG9saWN5LCBmZXRjaFBvbGljeSA9IF9lID09PSB2b2lkIDAgPyBkZWZhdWx0RmV0Y2hQb2xpY3kgOiBfZSwgX2YgPSBvcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSwgaW5pdGlhbEZldGNoUG9saWN5ID0gX2YgPT09IHZvaWQgMCA/IChmZXRjaFBvbGljeSA9PT0gXCJzdGFuZGJ5XCIgPyBkZWZhdWx0RmV0Y2hQb2xpY3kgOiBmZXRjaFBvbGljeSkgOiBfZjtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBpbml0aWFsRmV0Y2hQb2xpY3k6IGluaXRpYWxGZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3k6IGZldGNoUG9saWN5IH0pO1xuICAgICAgICBfdGhpcy5xdWVyeUlkID0gcXVlcnlJbmZvLnF1ZXJ5SWQgfHwgcXVlcnlNYW5hZ2VyLmdlbmVyYXRlUXVlcnlJZCgpO1xuICAgICAgICB2YXIgb3BEZWYgPSB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihfdGhpcy5xdWVyeSk7XG4gICAgICAgIF90aGlzLnF1ZXJ5TmFtZSA9IG9wRGVmICYmIG9wRGVmLm5hbWUgJiYgb3BEZWYubmFtZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZSwgXCJxdWVyeVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnRyYW5zZm9ybSh0aGlzLm9wdGlvbnMucXVlcnkpLmRvY3VtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUsIFwidmFyaWFibGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhcmlhYmxlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vYnNlcnZlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLnJlbW92ZVF1ZXJ5KF90aGlzLnF1ZXJ5SWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiAoc2F2ZUFzTGFzdFJlc3VsdCkge1xuICAgICAgICBpZiAoc2F2ZUFzTGFzdFJlc3VsdCA9PT0gdm9pZCAwKSB7IHNhdmVBc0xhc3RSZXN1bHQgPSB0cnVlOyB9XG4gICAgICAgIHZhciBsYXN0UmVzdWx0ID0gdGhpcy5nZXRMYXN0UmVzdWx0KHRydWUpO1xuICAgICAgICB2YXIgbmV0d29ya1N0YXR1cyA9IHRoaXMucXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHxcbiAgICAgICAgICAgIChsYXN0UmVzdWx0ICYmIGxhc3RSZXN1bHQubmV0d29ya1N0YXR1cykgfHxcbiAgICAgICAgICAgIGV4cG9ydHMuTmV0d29ya1N0YXR1cy5yZWFkeTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBsYXN0UmVzdWx0KSwgeyBsb2FkaW5nOiBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyksIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMgfSk7XG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2E7XG4gICAgICAgIGlmIChmZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnIHx8XG4gICAgICAgICAgICBmZXRjaFBvbGljeSA9PT0gJ3N0YW5kYnknIHx8XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5TWFuYWdlci50cmFuc2Zvcm0odGhpcy5vcHRpb25zLnF1ZXJ5KS5oYXNGb3JjZWRSZXNvbHZlcnMpIDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IHRoaXMucXVlcnlJbmZvLmdldERpZmYoKTtcbiAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlIHx8IHRoaXMub3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXF1YWxpdHkuZXF1YWwocmVzdWx0LmRhdGEsIHt9KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LnBhcnRpYWw7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUgJiZcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5ldHdvcmtTdGF0dXMgPT09IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIChmZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWZpcnN0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1vbmx5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcnRpYWwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fREVWX18gJiZcbiAgICAgICAgICAgICAgICAhZGlmZi5jb21wbGV0ZSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLm9wdGlvbnMucGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmRhdGEgJiZcbiAgICAgICAgICAgICAgICAhcmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nTWlzc2luZ0ZpZWxkRXJyb3JzKGRpZmYubWlzc2luZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNhdmVBc0xhc3RSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmlzRGlmZmVyZW50RnJvbUxhc3RSZXN1bHQgPSBmdW5jdGlvbiAobmV3UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5sYXN0IHx8ICFlcXVhbGl0eS5lcXVhbCh0aGlzLmxhc3QucmVzdWx0LCBuZXdSZXN1bHQpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0ID0gZnVuY3Rpb24gKGtleSwgdmFyaWFibGVzTXVzdE1hdGNoKSB7XG4gICAgICAgIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICAgICAgICBpZiAobGFzdCAmJlxuICAgICAgICAgICAgbGFzdFtrZXldICYmXG4gICAgICAgICAgICAoIXZhcmlhYmxlc011c3RNYXRjaCB8fCBlcXVhbGl0eS5lcXVhbChsYXN0LnZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3Rba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5nZXRMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKHZhcmlhYmxlc011c3RNYXRjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYXN0KFwicmVzdWx0XCIsIHZhcmlhYmxlc011c3RNYXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmdldExhc3RFcnJvciA9IGZ1bmN0aW9uICh2YXJpYWJsZXNNdXN0TWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdChcImVycm9yXCIsIHZhcmlhYmxlc011c3RNYXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlc2V0TGFzdFJlc3VsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxhc3Q7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXNldFF1ZXJ5U3RvcmVFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnJlc2V0RXJyb3JzKHRoaXMucXVlcnlJZCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlZmV0Y2ggPSBmdW5jdGlvbiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHJlb2JzZXJ2ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb2xsSW50ZXJ2YWw6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSB7XG4gICAgICAgICAgICByZW9ic2VydmVPcHRpb25zLmZldGNoUG9saWN5ID0gZmV0Y2hQb2xpY3k7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgIHJlb2JzZXJ2ZU9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnbm8tY2FjaGUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy5mZXRjaFBvbGljeSA9ICduZXR3b3JrLW9ubHknO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fICYmIHZhcmlhYmxlcyAmJiBoYXNPd25Qcm9wZXJ0eSQxLmNhbGwodmFyaWFibGVzLCBcInZhcmlhYmxlc1wiKSkge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5RGVmID0gdXRpbGl0aWVzLmdldFF1ZXJ5RGVmaW5pdGlvbih0aGlzLnF1ZXJ5KTtcbiAgICAgICAgICAgIHZhciB2YXJzID0gcXVlcnlEZWYudmFyaWFibGVEZWZpbml0aW9ucztcbiAgICAgICAgICAgIGlmICghdmFycyB8fCAhdmFycy5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LnZhcmlhYmxlLm5hbWUudmFsdWUgPT09IFwidmFyaWFibGVzXCI7IH0pKSB7XG4gICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiQ2FsbGVkIHJlZmV0Y2goXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlcyksIFwiKSBmb3IgcXVlcnkgXCIpLmNvbmNhdCgoKF9hID0gcXVlcnlEZWYubmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCBKU09OLnN0cmluZ2lmeShxdWVyeURlZiksIFwiLCB3aGljaCBkb2VzIG5vdCBkZWNsYXJlIGEgJHZhcmlhYmxlcyB2YXJpYWJsZS5cXG5EaWQgeW91IG1lYW4gdG8gY2FsbCByZWZldGNoKHZhcmlhYmxlcykgaW5zdGVhZCBvZiByZWZldGNoKHsgdmFyaWFibGVzIH0pP1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhcmlhYmxlcyAmJiAhZXF1YWxpdHkuZXF1YWwodGhpcy5vcHRpb25zLnZhcmlhYmxlcywgdmFyaWFibGVzKSkge1xuICAgICAgICAgICAgcmVvYnNlcnZlT3B0aW9ucy52YXJpYWJsZXMgPSB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCB2YXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVlcnlJbmZvLnJlc2V0TGFzdFdyaXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZShyZW9ic2VydmVPcHRpb25zLCBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLmZldGNoTW9yZSA9IGZ1bmN0aW9uIChmZXRjaE1vcmVPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjb21iaW5lZE9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgKGZldGNoTW9yZU9wdGlvbnMucXVlcnkgPyBmZXRjaE1vcmVPcHRpb25zIDogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIHsgcXVlcnk6IHRoaXMucXVlcnkgfSksIGZldGNoTW9yZU9wdGlvbnMpLCB7IHZhcmlhYmxlczogdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy52YXJpYWJsZXMpLCBmZXRjaE1vcmVPcHRpb25zLnZhcmlhYmxlcykgfSkpKSwgeyBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiIH0pO1xuICAgICAgICB2YXIgcWlkID0gdGhpcy5xdWVyeU1hbmFnZXIuZ2VuZXJhdGVRdWVyeUlkKCk7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJ5SW5mbztcbiAgICAgICAgdmFyIG9yaWdpbmFsTmV0d29ya1N0YXR1cyA9IHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzO1xuICAgICAgICBxdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5mZXRjaE1vcmU7XG4gICAgICAgIGlmIChjb21iaW5lZE9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXBkYXRlZFF1ZXJ5U2V0ID0gbmV3IFNldCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuZmV0Y2hRdWVyeShxaWQsIGNvbWJpbmVkT3B0aW9ucywgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSkudGhlbihmdW5jdGlvbiAoZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICBfdGhpcy5xdWVyeU1hbmFnZXIucmVtb3ZlUXVlcnkocWlkKTtcbiAgICAgICAgICAgIGlmIChxdWVyeUluZm8ubmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzID0gb3JpZ2luYWxOZXR3b3JrU3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMucXVlcnlNYW5hZ2VyLmNhY2hlLmJhdGNoKHtcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBmZXRjaE1vcmVPcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnVwZGF0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogX3RoaXMucXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBfdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocHJldmlvdXMpIHsgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0OiBmZXRjaE1vcmVSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGNvbWJpbmVkT3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogY29tYmluZWRPcHRpb25zLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogY29tYmluZWRPcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZXRjaE1vcmVSZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbldhdGNoVXBkYXRlZDogZnVuY3Rpb24gKHdhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVyeVNldC5hZGQod2F0Y2gucXVlcnkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE1vcmVSZXN1bHQ7XG4gICAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF1cGRhdGVkUXVlcnlTZXQuaGFzKF90aGlzLnF1ZXJ5KSkge1xuICAgICAgICAgICAgICAgIHJlb2JzZXJ2ZUNhY2hlRmlyc3QoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3Vic2NyaWJlVG9Nb3JlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMucXVlcnlNYW5hZ2VyXG4gICAgICAgICAgICAuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBvcHRpb25zLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlUXVlcnkgPSBvcHRpb25zLnVwZGF0ZVF1ZXJ5O1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVRdWVyeSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVRdWVyeShmdW5jdGlvbiAocHJldmlvdXMsIF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFyaWFibGVzID0gX2EudmFyaWFibGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVF1ZXJ5KHByZXZpb3VzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YTogc3Vic2NyaXB0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoJ1VuaGFuZGxlZCBHcmFwaFFMIHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnN1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlb2JzZXJ2ZShuZXdPcHRpb25zKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc2V0VmFyaWFibGVzID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICBpZiAoZXF1YWxpdHkuZXF1YWwodGhpcy52YXJpYWJsZXMsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5zaXplXG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlc3VsdCgpXG4gICAgICAgICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW9ic2VydmUoe1xuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IHRoaXMub3B0aW9ucy5pbml0aWFsRmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgfSwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnNldFZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZVF1ZXJ5ID0gZnVuY3Rpb24gKG1hcEZuKSB7XG4gICAgICAgIHZhciBxdWVyeU1hbmFnZXIgPSB0aGlzLnF1ZXJ5TWFuYWdlcjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHF1ZXJ5TWFuYWdlci5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLm9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgfSkucmVzdWx0O1xuICAgICAgICB2YXIgbmV3UmVzdWx0ID0gbWFwRm4ocmVzdWx0LCB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMudmFyaWFibGVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdCkge1xuICAgICAgICAgICAgcXVlcnlNYW5hZ2VyLmNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLm9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICAgICAgZGF0YTogbmV3UmVzdWx0LFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdGhpcy52YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlci5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3RhcnRQb2xsaW5nID0gZnVuY3Rpb24gKHBvbGxJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMucG9sbEludGVydmFsID0gcG9sbEludGVydmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuc3RvcFBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wb2xsSW50ZXJ2YWwgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuYXBwbHlOZXh0RmV0Y2hQb2xpY3kgPSBmdW5jdGlvbiAocmVhc29uLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm5leHRGZXRjaFBvbGljeSkge1xuICAgICAgICAgICAgdmFyIF9hID0gb3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYSA9PT0gdm9pZCAwID8gXCJjYWNoZS1maXJzdFwiIDogX2EsIF9iID0gb3B0aW9ucy5pbml0aWFsRmV0Y2hQb2xpY3ksIGluaXRpYWxGZXRjaFBvbGljeSA9IF9iID09PSB2b2lkIDAgPyBmZXRjaFBvbGljeSA6IF9iO1xuICAgICAgICAgICAgaWYgKGZldGNoUG9saWN5ID09PSBcInN0YW5kYnlcIikgO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMubmV4dEZldGNoUG9saWN5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gb3B0aW9ucy5uZXh0RmV0Y2hQb2xpY3koZmV0Y2hQb2xpY3ksIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxGZXRjaFBvbGljeTogaW5pdGlhbEZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVhc29uID09PSBcInZhcmlhYmxlcy1jaGFuZ2VkXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID0gaW5pdGlhbEZldGNoUG9saWN5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9IG9wdGlvbnMubmV4dEZldGNoUG9saWN5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZldGNoUG9saWN5O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChvcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnNldE9ic2VydmFibGVRdWVyeSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLmZldGNoUXVlcnlPYnNlcnZhYmxlKHRoaXMucXVlcnlJZCwgb3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnVwZGF0ZVBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5TWFuYWdlci5zc3JNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgcG9sbGluZ0luZm8gPSBfYS5wb2xsaW5nSW5mbywgcG9sbEludGVydmFsID0gX2Eub3B0aW9ucy5wb2xsSW50ZXJ2YWw7XG4gICAgICAgIGlmICghcG9sbEludGVydmFsKSB7XG4gICAgICAgICAgICBpZiAocG9sbGluZ0luZm8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocG9sbGluZ0luZm8udGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucG9sbGluZ0luZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvbGxpbmdJbmZvICYmXG4gICAgICAgICAgICBwb2xsaW5nSW5mby5pbnRlcnZhbCA9PT0gcG9sbEludGVydmFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KHBvbGxJbnRlcnZhbCwgJ0F0dGVtcHRlZCB0byBzdGFydCBhIHBvbGxpbmcgcXVlcnkgd2l0aG91dCBhIHBvbGxpbmcgaW50ZXJ2YWwuJykgOiBnbG9iYWxzLmludmFyaWFudChwb2xsSW50ZXJ2YWwsIDEwKTtcbiAgICAgICAgdmFyIGluZm8gPSBwb2xsaW5nSW5mbyB8fCAodGhpcy5wb2xsaW5nSW5mbyA9IHt9KTtcbiAgICAgICAgaW5mby5pbnRlcnZhbCA9IHBvbGxJbnRlcnZhbDtcbiAgICAgICAgdmFyIG1heWJlRmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucG9sbGluZ0luZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChfdGhpcy5xdWVyeUluZm8ubmV0d29ya1N0YXR1cykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVvYnNlcnZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBcIm5ldHdvcmstb25seVwiLFxuICAgICAgICAgICAgICAgICAgICB9LCBleHBvcnRzLk5ldHdvcmtTdGF0dXMucG9sbCkudGhlbihwb2xsLCBwb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZm8gPSBfdGhpcy5wb2xsaW5nSW5mbztcbiAgICAgICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGluZm8udGltZW91dCk7XG4gICAgICAgICAgICAgICAgaW5mby50aW1lb3V0ID0gc2V0VGltZW91dChtYXliZUZldGNoLCBpbmZvLmludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcG9sbCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS51cGRhdGVMYXN0UmVzdWx0ID0gZnVuY3Rpb24gKG5ld1Jlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZXMgPT09IHZvaWQgMCkgeyB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlczsgfVxuICAgICAgICB0aGlzLmxhc3QgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdGhpcy5sYXN0KSwgeyByZXN1bHQ6IHRoaXMucXVlcnlNYW5hZ2VyLmFzc3VtZUltbXV0YWJsZVJlc3VsdHNcbiAgICAgICAgICAgICAgICA/IG5ld1Jlc3VsdFxuICAgICAgICAgICAgICAgIDogdXRpbGl0aWVzLmNsb25lRGVlcChuZXdSZXN1bHQpLCB2YXJpYWJsZXM6IHZhcmlhYmxlcyB9KTtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNOb25FbXB0eUFycmF5KG5ld1Jlc3VsdC5lcnJvcnMpKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sYXN0LmVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3Q7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnJlb2JzZXJ2ZSA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCBuZXdOZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IGZhbHNlO1xuICAgICAgICB2YXIgdXNlRGlzcG9zYWJsZUNvbmNhc3QgPSBuZXdOZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCB8fFxuICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmZldGNoTW9yZSB8fFxuICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9PT0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnBvbGw7XG4gICAgICAgIHZhciBvbGRWYXJpYWJsZXMgPSB0aGlzLm9wdGlvbnMudmFyaWFibGVzO1xuICAgICAgICB2YXIgb2xkRmV0Y2hQb2xpY3kgPSB0aGlzLm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gdXRpbGl0aWVzLmNvbXBhY3QodGhpcy5vcHRpb25zLCBuZXdPcHRpb25zIHx8IHt9KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB1c2VEaXNwb3NhYmxlQ29uY2FzdFxuICAgICAgICAgICAgPyBtZXJnZWRPcHRpb25zXG4gICAgICAgICAgICA6IGFzc2lnbih0aGlzLm9wdGlvbnMsIG1lcmdlZE9wdGlvbnMpO1xuICAgICAgICBpZiAoIXVzZURpc3Bvc2FibGVDb25jYXN0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvbGxpbmcoKTtcbiAgICAgICAgICAgIGlmIChuZXdPcHRpb25zICYmXG4gICAgICAgICAgICAgICAgbmV3T3B0aW9ucy52YXJpYWJsZXMgJiZcbiAgICAgICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwobmV3T3B0aW9ucy52YXJpYWJsZXMsIG9sZFZhcmlhYmxlcykgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ICE9PSBcInN0YW5kYnlcIiAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09IG9sZEZldGNoUG9saWN5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseU5leHRGZXRjaFBvbGljeShcInZhcmlhYmxlcy1jaGFuZ2VkXCIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdOZXR3b3JrU3RhdHVzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TmV0d29ya1N0YXR1cyA9IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5zZXRWYXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBvcHRpb25zLnZhcmlhYmxlcyAmJiB0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICB2YXIgY29uY2FzdCA9IHRoaXMuZmV0Y2gob3B0aW9ucywgbmV3TmV0d29ya1N0YXR1cyk7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBvcnRSZXN1bHQocmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXBvcnRFcnJvcihlcnJvciwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdXNlRGlzcG9zYWJsZUNvbmNhc3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNhc3QgJiYgdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2FzdC5yZW1vdmVPYnNlcnZlcih0aGlzLm9ic2VydmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29uY2FzdCA9IGNvbmNhc3Q7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uY2FzdC5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgIHJldHVybiBjb25jYXN0LnByb21pc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0UmVzdWx0KHRoaXMuZ2V0Q3VycmVudFJlc3VsdChmYWxzZSksIHRoaXMudmFyaWFibGVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUucmVwb3J0UmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBsYXN0RXJyb3IgPSB0aGlzLmdldExhc3RFcnJvcigpO1xuICAgICAgICBpZiAobGFzdEVycm9yIHx8IHRoaXMuaXNEaWZmZXJlbnRGcm9tTGFzdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgICAgICBpZiAobGFzdEVycm9yIHx8ICFyZXN1bHQucGFydGlhbCB8fCB0aGlzLm9wdGlvbnMucmV0dXJuUGFydGlhbERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxhc3RSZXN1bHQocmVzdWx0LCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXRpbGl0aWVzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkodGhpcy5vYnNlcnZlcnMsICduZXh0JywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVF1ZXJ5LnByb3RvdHlwZS5yZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBlcnJvclJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmdldExhc3RSZXN1bHQoKSksIHsgZXJyb3I6IGVycm9yLCBlcnJvcnM6IGVycm9yLmdyYXBoUUxFcnJvcnMsIG5ldHdvcmtTdGF0dXM6IGV4cG9ydHMuTmV0d29ya1N0YXR1cy5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdFJlc3VsdChlcnJvclJlc3VsdCwgdmFyaWFibGVzKTtcbiAgICAgICAgdXRpbGl0aWVzLml0ZXJhdGVPYnNlcnZlcnNTYWZlbHkodGhpcy5vYnNlcnZlcnMsICdlcnJvcicsIHRoaXMubGFzdC5lcnJvciA9IGVycm9yKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVRdWVyeS5wcm90b3R5cGUuaGFzT2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMuc2l6ZSA+IDA7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlUXVlcnkucHJvdG90eXBlLnRlYXJEb3duUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVG9ybkRvd24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNvbmNhc3QgJiYgdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5jb25jYXN0LnJlbW92ZU9ic2VydmVyKHRoaXMub2JzZXJ2ZXIpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uY2FzdDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuc3RvcFF1ZXJ5KHRoaXMucXVlcnlJZCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaXNUb3JuRG93biA9IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVF1ZXJ5O1xufSh1dGlsaXRpZXMuT2JzZXJ2YWJsZSkpO1xudXRpbGl0aWVzLmZpeE9ic2VydmFibGVTdWJjbGFzcyhPYnNlcnZhYmxlUXVlcnkpO1xuZnVuY3Rpb24gcmVvYnNlcnZlQ2FjaGVGaXJzdChvYnNRdWVyeSkge1xuICAgIHZhciBfYSA9IG9ic1F1ZXJ5Lm9wdGlvbnMsIGZldGNoUG9saWN5ID0gX2EuZmV0Y2hQb2xpY3ksIG5leHRGZXRjaFBvbGljeSA9IF9hLm5leHRGZXRjaFBvbGljeTtcbiAgICBpZiAoZmV0Y2hQb2xpY3kgPT09IFwiY2FjaGUtYW5kLW5ldHdvcmtcIiB8fFxuICAgICAgICBmZXRjaFBvbGljeSA9PT0gXCJuZXR3b3JrLW9ubHlcIikge1xuICAgICAgICByZXR1cm4gb2JzUXVlcnkucmVvYnNlcnZlKHtcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBcImNhY2hlLWZpcnN0XCIsXG4gICAgICAgICAgICBuZXh0RmV0Y2hQb2xpY3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRGZXRjaFBvbGljeSA9IG5leHRGZXRjaFBvbGljeTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5leHRGZXRjaFBvbGljeSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0RmV0Y2hQb2xpY3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUG9saWN5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvYnNRdWVyeS5yZW9ic2VydmUoKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRTdWJzY3JpcHRpb25PYnNlcnZlckVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKCdVbmhhbmRsZWQgZXJyb3InLCBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjayk7XG59XG5mdW5jdGlvbiBsb2dNaXNzaW5nRmllbGRFcnJvcnMobWlzc2luZykge1xuICAgIGlmIChfX0RFVl9fICYmIG1pc3NpbmcpIHtcbiAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC5kZWJ1ZyhcIk1pc3NpbmcgY2FjaGUgcmVzdWx0IGZpZWxkczogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KG1pc3NpbmcpKSwgbWlzc2luZyk7XG4gICAgfVxufVxuXG52YXIgTG9jYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxTdGF0ZShfYSkge1xuICAgICAgICB2YXIgY2FjaGUgPSBfYS5jYWNoZSwgY2xpZW50ID0gX2EuY2xpZW50LCByZXNvbHZlcnMgPSBfYS5yZXNvbHZlcnMsIGZyYWdtZW50TWF0Y2hlciA9IF9hLmZyYWdtZW50TWF0Y2hlcjtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhZ21lbnRNYXRjaGVyKGZyYWdtZW50TWF0Y2hlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYWRkUmVzb2x2ZXJzID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc29sdmVycyA9IHRoaXMucmVzb2x2ZXJzIHx8IHt9O1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNvbHZlcnMpKSB7XG4gICAgICAgICAgICByZXNvbHZlcnMuZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZXJHcm91cCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmVycyA9IHV0aWxpdGllcy5tZXJnZURlZXAoX3RoaXMucmVzb2x2ZXJzLCByZXNvbHZlckdyb3VwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlcnMgPSB1dGlsaXRpZXMubWVyZ2VEZWVwKHRoaXMucmVzb2x2ZXJzLCByZXNvbHZlcnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5zZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJzID0ge307XG4gICAgICAgIHRoaXMuYWRkUmVzb2x2ZXJzKHJlc29sdmVycyk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5nZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVycyB8fCB7fTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnJ1blJlc29sdmVycyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZG9jdW1lbnQgPSBfYS5kb2N1bWVudCwgcmVtb3RlUmVzdWx0ID0gX2EucmVtb3RlUmVzdWx0LCBjb250ZXh0ID0gX2EuY29udGV4dCwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBfYiA9IF9hLm9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXMucmVzb2x2ZURvY3VtZW50KGRvY3VtZW50LCByZW1vdGVSZXN1bHQuZGF0YSwgY29udGV4dCwgdmFyaWFibGVzLCB0aGlzLmZyYWdtZW50TWF0Y2hlciwgb25seVJ1bkZvcmNlZFJlc29sdmVycykudGhlbihmdW5jdGlvbiAobG9jYWxSZXN1bHQpIHsgcmV0dXJuICh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgcmVtb3RlUmVzdWx0KSwgeyBkYXRhOiBsb2NhbFJlc3VsdC5yZXN1bHQgfSkpOyB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgcmVtb3RlUmVzdWx0XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNldEZyYWdtZW50TWF0Y2hlciA9IGZ1bmN0aW9uIChmcmFnbWVudE1hdGNoZXIpIHtcbiAgICAgICAgdGhpcy5mcmFnbWVudE1hdGNoZXIgPSBmcmFnbWVudE1hdGNoZXI7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5nZXRGcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyYWdtZW50TWF0Y2hlcjtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmNsaWVudFF1ZXJ5ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaGFzRGlyZWN0aXZlcyhbJ2NsaWVudCddLCBkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdmVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNlcnZlclF1ZXJ5ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiB1dGlsaXRpZXMucmVtb3ZlQ2xpZW50U2V0c0Zyb21Eb2N1bWVudChkb2N1bWVudCk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5wcmVwYXJlQ29udGV4dCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLCBnZXRDYWNoZUtleTogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5pZGVudGlmeShvYmopO1xuICAgICAgICAgICAgfSB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLmFkZEV4cG9ydGVkVmFyaWFibGVzID0gZnVuY3Rpb24gKGRvY3VtZW50LCB2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHt9OyB9XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVEb2N1bWVudChkb2N1bWVudCwgdGhpcy5idWlsZFJvb3RWYWx1ZUZyb21DYWNoZShkb2N1bWVudCwgdmFyaWFibGVzKSB8fCB7fSwgdGhpcy5wcmVwYXJlQ29udGV4dChjb250ZXh0KSwgdmFyaWFibGVzKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHZhcmlhYmxlcyksIGRhdGEuZXhwb3J0ZWRWYXJpYWJsZXMpKTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRzbGliLl9fYXNzaWduKHt9LCB2YXJpYWJsZXMpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExvY2FsU3RhdGUucHJvdG90eXBlLnNob3VsZEZvcmNlUmVzb2x2ZXJzID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBmb3JjZVJlc29sdmVycyA9IGZhbHNlO1xuICAgICAgICBncmFwaHFsLnZpc2l0KGRvY3VtZW50LCB7XG4gICAgICAgICAgICBEaXJlY3RpdmU6IHtcbiAgICAgICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZS52YWx1ZSA9PT0gJ2NsaWVudCcgJiYgbm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlUmVzb2x2ZXJzID0gbm9kZS5hcmd1bWVudHMuc29tZShmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAnYWx3YXlzJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcudmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnLnZhbHVlLnZhbHVlID09PSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VSZXNvbHZlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JhcGhxbC5CUkVBSztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcmNlUmVzb2x2ZXJzO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUuYnVpbGRSb290VmFsdWVGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5kaWZmKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB1dGlsaXRpZXMuYnVpbGRRdWVyeUZyb21TZWxlY3Rpb25TZXQoZG9jdW1lbnQpLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICB9KS5yZXN1bHQ7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlRG9jdW1lbnQgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHJvb3RWYWx1ZSwgY29udGV4dCwgdmFyaWFibGVzLCBmcmFnbWVudE1hdGNoZXIsIG9ubHlSdW5Gb3JjZWRSZXNvbHZlcnMpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHt9OyB9XG4gICAgICAgIGlmIChmcmFnbWVudE1hdGNoZXIgPT09IHZvaWQgMCkgeyBmcmFnbWVudE1hdGNoZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9OyB9XG4gICAgICAgIGlmIChvbmx5UnVuRm9yY2VkUmVzb2x2ZXJzID09PSB2b2lkIDApIHsgb25seVJ1bkZvcmNlZFJlc29sdmVycyA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYWluRGVmaW5pdGlvbiwgZnJhZ21lbnRzLCBmcmFnbWVudE1hcCwgZGVmaW5pdGlvbk9wZXJhdGlvbiwgZGVmYXVsdE9wZXJhdGlvblR5cGUsIF9hLCBjYWNoZSwgY2xpZW50LCBleGVjQ29udGV4dDtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBtYWluRGVmaW5pdGlvbiA9IHV0aWxpdGllcy5nZXRNYWluRGVmaW5pdGlvbihkb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRzID0gdXRpbGl0aWVzLmdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwID0gdXRpbGl0aWVzLmNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cyk7XG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbk9wZXJhdGlvbiA9IG1haW5EZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5vcGVyYXRpb247XG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZXJhdGlvblR5cGUgPSBkZWZpbml0aW9uT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gZGVmaW5pdGlvbk9wZXJhdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uT3BlcmF0aW9uLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgICAgIDogJ1F1ZXJ5JztcbiAgICAgICAgICAgICAgICBfYSA9IHRoaXMsIGNhY2hlID0gX2EuY2FjaGUsIGNsaWVudCA9IF9hLmNsaWVudDtcbiAgICAgICAgICAgICAgICBleGVjQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRNYXA6IGZyYWdtZW50TWFwLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY2FjaGU6IGNhY2hlLCBjbGllbnQ6IGNsaWVudCB9KSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3BlcmF0aW9uVHlwZTogZGVmYXVsdE9wZXJhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydGVkVmFyaWFibGVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogb25seVJ1bkZvcmNlZFJlc29sdmVycyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KG1haW5EZWZpbml0aW9uLnNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFZhcmlhYmxlczogZXhlY0NvbnRleHQuZXhwb3J0ZWRWYXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgIH0pOyB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb2NhbFN0YXRlLnByb3RvdHlwZS5yZXNvbHZlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gKHNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnRNYXAsIGNvbnRleHQsIHZhcmlhYmxlcywgcmVzdWx0c1RvTWVyZ2UsIGV4ZWN1dGU7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50TWFwID0gZXhlY0NvbnRleHQuZnJhZ21lbnRNYXAsIGNvbnRleHQgPSBleGVjQ29udGV4dC5jb250ZXh0LCB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1RvTWVyZ2UgPSBbcm9vdFZhbHVlXTtcbiAgICAgICAgICAgICAgICBleGVjdXRlID0gZnVuY3Rpb24gKHNlbGVjdGlvbikgeyByZXR1cm4gdHNsaWIuX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhZ21lbnQsIHR5cGVDb25kaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXRpbGl0aWVzLnNob3VsZEluY2x1ZGUoc2VsZWN0aW9uLCB2YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCB0aGlzLnJlc29sdmVGaWVsZChzZWxlY3Rpb24sIHJvb3RWYWx1ZSwgZXhlY0NvbnRleHQpLnRoZW4oZnVuY3Rpb24gKGZpZWxkUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkUmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNUb01lcmdlLnB1c2goKF9hID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hW3V0aWxpdGllcy5yZXN1bHRLZXlOYW1lRnJvbUZpZWxkKHNlbGVjdGlvbildID0gZmllbGRSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlsaXRpZXMuaXNJbmxpbmVGcmFnbWVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnQsIFwiTm8gZnJhZ21lbnQgbmFtZWQgXCIuY29uY2F0KHNlbGVjdGlvbi5uYW1lLnZhbHVlKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQgJiYgZnJhZ21lbnQudHlwZUNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVDb25kaXRpb24gPSBmcmFnbWVudC50eXBlQ29uZGl0aW9uLm5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4ZWNDb250ZXh0LmZyYWdtZW50TWF0Y2hlcihyb290VmFsdWUsIHR5cGVDb25kaXRpb24sIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZyYWdtZW50LnNlbGVjdGlvblNldCwgcm9vdFZhbHVlLCBleGVjQ29udGV4dCkudGhlbihmdW5jdGlvbiAoZnJhZ21lbnRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzVG9NZXJnZS5wdXNoKGZyYWdtZW50UmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIFByb21pc2UuYWxsKHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLm1hcChleGVjdXRlKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLm1lcmdlRGVlcEFycmF5KHJlc3VsdHNUb01lcmdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZUZpZWxkID0gZnVuY3Rpb24gKGZpZWxkLCByb290VmFsdWUsIGV4ZWNDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YXJpYWJsZXMsIGZpZWxkTmFtZSwgYWxpYXNlZEZpZWxkTmFtZSwgYWxpYXNVc2VkLCBkZWZhdWx0UmVzdWx0LCByZXN1bHRQcm9taXNlLCByZXNvbHZlclR5cGUsIHJlc29sdmVyTWFwLCByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSBleGVjQ29udGV4dC52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gZmllbGQubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkRmllbGROYW1lID0gdXRpbGl0aWVzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgICAgIGFsaWFzVXNlZCA9IGZpZWxkTmFtZSAhPT0gYWxpYXNlZEZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0UmVzdWx0ID0gcm9vdFZhbHVlW2FsaWFzZWRGaWVsZE5hbWVdIHx8IHJvb3RWYWx1ZVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIHJlc3VsdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZGVmYXVsdFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGVjQ29udGV4dC5vbmx5UnVuRm9yY2VkUmVzb2x2ZXJzIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkRm9yY2VSZXNvbHZlcnMoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyVHlwZSA9IHJvb3RWYWx1ZS5fX3R5cGVuYW1lIHx8IGV4ZWNDb250ZXh0LmRlZmF1bHRPcGVyYXRpb25UeXBlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlck1hcCA9IHRoaXMucmVzb2x2ZXJzICYmIHRoaXMucmVzb2x2ZXJzW3Jlc29sdmVyVHlwZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlck1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlc29sdmVyTWFwW2FsaWFzVXNlZCA/IGZpZWxkTmFtZSA6IGFsaWFzZWRGaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNhY2hlLmNhY2hlU2xvdC53aXRoVmFsdWUodGhpcy5jYWNoZSwgcmVzb2x2ZSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxpdGllcy5hcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNDb250ZXh0LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZmllbGQ6IGZpZWxkLCBmcmFnbWVudE1hcDogZXhlY0NvbnRleHQuZnJhZ21lbnRNYXAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByZXN1bHRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7IHJlc3VsdCA9IGRlZmF1bHRSZXN1bHQ7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnZXhwb3J0JyAmJiBkaXJlY3RpdmUuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmcubmFtZS52YWx1ZSA9PT0gJ2FzJyAmJiBhcmcudmFsdWUua2luZCA9PT0gJ1N0cmluZ1ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjQ29udGV4dC5leHBvcnRlZFZhcmlhYmxlc1thcmcudmFsdWUudmFsdWVdID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgcmVzdWx0LCBleGVjQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmVTZWxlY3Rpb25TZXQoZmllbGQuc2VsZWN0aW9uU2V0LCByZXN1bHQsIGV4ZWNDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTG9jYWxTdGF0ZS5wcm90b3R5cGUucmVzb2x2ZVN1YlNlbGVjdGVkQXJyYXkgPSBmdW5jdGlvbiAoZmllbGQsIHJlc3VsdCwgZXhlY0NvbnRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU3ViU2VsZWN0ZWRBcnJheShmaWVsZCwgaXRlbSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpZWxkLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlU2VsZWN0aW9uU2V0KGZpZWxkLnNlbGVjdGlvblNldCwgaXRlbSwgZXhlY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gTG9jYWxTdGF0ZTtcbn0oKSk7XG5cbnZhciBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cyA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuZnVuY3Rpb24gd3JhcERlc3RydWN0aXZlQ2FjaGVNZXRob2QoY2FjaGUsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgb3JpZ2luYWwgPSBjYWNoZVttZXRob2ROYW1lXTtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FjaGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5zZXQoY2FjaGUsIChkZXN0cnVjdGl2ZU1ldGhvZENvdW50cy5nZXQoY2FjaGUpICsgMSkgJSAxZTE1KTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbE5vdGlmeVRpbWVvdXQoaW5mbykge1xuICAgIGlmIChpbmZvW1wibm90aWZ5VGltZW91dFwiXSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaW5mb1tcIm5vdGlmeVRpbWVvdXRcIl0pO1xuICAgICAgICBpbmZvW1wibm90aWZ5VGltZW91dFwiXSA9IHZvaWQgMDtcbiAgICB9XG59XG52YXIgUXVlcnlJbmZvID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeUluZm8ocXVlcnlNYW5hZ2VyLCBxdWVyeUlkKSB7XG4gICAgICAgIGlmIChxdWVyeUlkID09PSB2b2lkIDApIHsgcXVlcnlJZCA9IHF1ZXJ5TWFuYWdlci5nZW5lcmF0ZVF1ZXJ5SWQoKTsgfVxuICAgICAgICB0aGlzLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFJlcXVlc3RJZCA9IDE7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUXVlcnkgPSBudWxsO1xuICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlID0gcXVlcnlNYW5hZ2VyLmNhY2hlO1xuICAgICAgICBpZiAoIWRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmhhcyhjYWNoZSkpIHtcbiAgICAgICAgICAgIGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLnNldChjYWNoZSwgMCk7XG4gICAgICAgICAgICB3cmFwRGVzdHJ1Y3RpdmVDYWNoZU1ldGhvZChjYWNoZSwgXCJldmljdFwiKTtcbiAgICAgICAgICAgIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBcIm1vZGlmeVwiKTtcbiAgICAgICAgICAgIHdyYXBEZXN0cnVjdGl2ZUNhY2hlTWV0aG9kKGNhY2hlLCBcInJlc2V0XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgbmV0d29ya1N0YXR1cyA9IHF1ZXJ5Lm5ldHdvcmtTdGF0dXMgfHwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7XG4gICAgICAgIGlmICh0aGlzLnZhcmlhYmxlcyAmJlxuICAgICAgICAgICAgdGhpcy5uZXR3b3JrU3RhdHVzICE9PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZyAmJlxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKHRoaXMudmFyaWFibGVzLCBxdWVyeS52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLnNldFZhcmlhYmxlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVxdWFsaXR5LmVxdWFsKHF1ZXJ5LnZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3REaWZmID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICBncmFwaFFMRXJyb3JzOiB0aGlzLmdyYXBoUUxFcnJvcnMgfHwgW10sXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBuZXR3b3JrU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHF1ZXJ5Lm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5zZXRPYnNlcnZhYmxlUXVlcnkocXVlcnkub2JzZXJ2YWJsZVF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkubGFzdFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0UmVxdWVzdElkID0gcXVlcnkubGFzdFJlcXVlc3RJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbE5vdGlmeVRpbWVvdXQodGhpcyk7XG4gICAgICAgIHRoaXMubGFzdERpZmYgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUuZ2V0RGlmZiA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXREaWZmT3B0aW9ucyh2YXJpYWJsZXMpO1xuICAgICAgICBpZiAodGhpcy5sYXN0RGlmZiAmJiBlcXVhbGl0eS5lcXVhbChvcHRpb25zLCB0aGlzLmxhc3REaWZmLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0RGlmZi5kaWZmO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlV2F0Y2godGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgb3EgPSB0aGlzLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgaWYgKG9xICYmIG9xLm9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09IFwibm8tY2FjaGVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgY29tcGxldGU6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmNhY2hlLmRpZmYob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdERpZmYoZGlmZiwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBkaWZmO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS51cGRhdGVMYXN0RGlmZiA9IGZ1bmN0aW9uIChkaWZmLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubGFzdERpZmYgPSBkaWZmID8ge1xuICAgICAgICAgICAgZGlmZjogZGlmZixcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwgdGhpcy5nZXREaWZmT3B0aW9ucygpLFxuICAgICAgICB9IDogdm9pZCAwO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5nZXREaWZmT3B0aW9ucyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodmFyaWFibGVzID09PSB2b2lkIDApIHsgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmRvY3VtZW50LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIG9wdGltaXN0aWM6IHRydWUsXG4gICAgICAgICAgICBjYW5vbml6ZVJlc3VsdHM6IChfYSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3B0aW9ucy5jYW5vbml6ZVJlc3VsdHMsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNldERpZmYgPSBmdW5jdGlvbiAoZGlmZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb2xkRGlmZiA9IHRoaXMubGFzdERpZmYgJiYgdGhpcy5sYXN0RGlmZi5kaWZmO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhc3REaWZmKGRpZmYpO1xuICAgICAgICBpZiAoIXRoaXMuZGlydHkgJiZcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChvbGREaWZmICYmIG9sZERpZmYucmVzdWx0LCBkaWZmICYmIGRpZmYucmVzdWx0KSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm90aWZ5VGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubm90aWZ5KCk7IH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNldE9ic2VydmFibGVRdWVyeSA9IGZ1bmN0aW9uIChvcSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3EgPT09IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5vcUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUodGhpcy5vcUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmFibGVRdWVyeSA9IG9xO1xuICAgICAgICBpZiAob3EpIHtcbiAgICAgICAgICAgIG9xW1wicXVlcnlJbmZvXCJdID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFkZCh0aGlzLm9xTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBfdGhpcy5nZXREaWZmKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuZnJvbU9wdGltaXN0aWNUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBvcVtcIm9ic2VydmVcIl0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlb2JzZXJ2ZUNhY2hlRmlyc3Qob3EpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3FMaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNhbmNlbE5vdGlmeVRpbWVvdXQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZE5vdGlmeSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoX3RoaXMpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNob3VsZE5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5IHx8ICF0aGlzLmxpc3RlbmVycy5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodCh0aGlzLm5ldHdvcmtTdGF0dXMpICYmXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gdGhpcy5vYnNlcnZhYmxlUXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1vbmx5XCIgJiZcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1hbmQtbmV0d29ya1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCA9IFF1ZXJ5SW5mby5wcm90b3R5cGUuY2FuY2VsO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICAgICAgdmFyIG9xID0gdGhpcy5vYnNlcnZhYmxlUXVlcnk7XG4gICAgICAgICAgICBpZiAob3EpXG4gICAgICAgICAgICAgICAgb3Euc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS51cGRhdGVXYXRjaCA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHZhcmlhYmxlcyA9PT0gdm9pZCAwKSB7IHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzOyB9XG4gICAgICAgIHZhciBvcSA9IHRoaXMub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICBpZiAob3EgJiYgb3Eub3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhdGNoT3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCB0aGlzLmdldERpZmZPcHRpb25zKHZhcmlhYmxlcykpLCB7IHdhdGNoZXI6IHRoaXMsIGNhbGxiYWNrOiBmdW5jdGlvbiAoZGlmZikgeyByZXR1cm4gX3RoaXMuc2V0RGlmZihkaWZmKTsgfSB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RXYXRjaCB8fFxuICAgICAgICAgICAgIWVxdWFsaXR5LmVxdWFsKHdhdGNoT3B0aW9ucywgdGhpcy5sYXN0V2F0Y2gpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLmNhY2hlLndhdGNoKHRoaXMubGFzdFdhdGNoID0gd2F0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlJbmZvLnByb3RvdHlwZS5yZXNldExhc3RXcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYXN0V3JpdGUgPSB2b2lkIDA7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLnNob3VsZFdyaXRlID0gZnVuY3Rpb24gKHJlc3VsdCwgdmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBsYXN0V3JpdGUgPSB0aGlzLmxhc3RXcml0ZTtcbiAgICAgICAgcmV0dXJuICEobGFzdFdyaXRlICYmXG4gICAgICAgICAgICBsYXN0V3JpdGUuZG1Db3VudCA9PT0gZGVzdHJ1Y3RpdmVNZXRob2RDb3VudHMuZ2V0KHRoaXMuY2FjaGUpICYmXG4gICAgICAgICAgICBlcXVhbGl0eS5lcXVhbCh2YXJpYWJsZXMsIGxhc3RXcml0ZS52YXJpYWJsZXMpICYmXG4gICAgICAgICAgICBlcXVhbGl0eS5lcXVhbChyZXN1bHQuZGF0YSwgbGFzdFdyaXRlLnJlc3VsdC5kYXRhKSk7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0LCBvcHRpb25zLCBjYWNoZVdyaXRlQmVoYXZpb3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5ncmFwaFFMRXJyb3JzID0gdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuZXJyb3JzKSA/IHJlc3VsdC5lcnJvcnMgOiBbXTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBpZiAob3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25vLWNhY2hlJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXN0RGlmZih7IHJlc3VsdDogcmVzdWx0LmRhdGEsIGNvbXBsZXRlOiB0cnVlIH0sIHRoaXMuZ2V0RGlmZk9wdGlvbnMob3B0aW9ucy52YXJpYWJsZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYWNoZVdyaXRlQmVoYXZpb3IgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIG9wdGlvbnMuZXJyb3JQb2xpY3kpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wZXJmb3JtVHJhbnNhY3Rpb24oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zaG91bGRXcml0ZShyZXN1bHQsIG9wdGlvbnMudmFyaWFibGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IF90aGlzLmRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBjYWNoZVdyaXRlQmVoYXZpb3IgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RXcml0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRtQ291bnQ6IGRlc3RydWN0aXZlTWV0aG9kQ291bnRzLmdldChfdGhpcy5jYWNoZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhc3REaWZmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdERpZmYuZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhID0gX3RoaXMubGFzdERpZmYuZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWZmT3B0aW9ucyA9IF90aGlzLmdldERpZmZPcHRpb25zKG9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBjYWNoZS5kaWZmKGRpZmZPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVXYXRjaChvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlTGFzdERpZmYoZGlmZiwgZGlmZk9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZi5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSBkaWZmLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V3JpdGUgPSB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5SW5mby5wcm90b3R5cGUubWFya1JlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5ldHdvcmtFcnJvciA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHk7XG4gICAgfTtcbiAgICBRdWVyeUluZm8ucHJvdG90eXBlLm1hcmtFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZXJyb3I7XG4gICAgICAgIHRoaXMubGFzdFdyaXRlID0gdm9pZCAwO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIGlmIChlcnJvci5ncmFwaFFMRXJyb3JzKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoUUxFcnJvcnMgPSBlcnJvci5ncmFwaFFMRXJyb3JzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvci5uZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMubmV0d29ya0Vycm9yID0gZXJyb3IubmV0d29ya0Vycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9O1xuICAgIHJldHVybiBRdWVyeUluZm87XG59KCkpO1xuZnVuY3Rpb24gc2hvdWxkV3JpdGVSZXN1bHQocmVzdWx0LCBlcnJvclBvbGljeSkge1xuICAgIGlmIChlcnJvclBvbGljeSA9PT0gdm9pZCAwKSB7IGVycm9yUG9saWN5ID0gXCJub25lXCI7IH1cbiAgICB2YXIgaWdub3JlRXJyb3JzID0gZXJyb3JQb2xpY3kgPT09IFwiaWdub3JlXCIgfHxcbiAgICAgICAgZXJyb3JQb2xpY3kgPT09IFwiYWxsXCI7XG4gICAgdmFyIHdyaXRlV2l0aEVycm9ycyA9ICF1dGlsaXRpZXMuZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCk7XG4gICAgaWYgKCF3cml0ZVdpdGhFcnJvcnMgJiYgaWdub3JlRXJyb3JzICYmIHJlc3VsdC5kYXRhKSB7XG4gICAgICAgIHdyaXRlV2l0aEVycm9ycyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZVdpdGhFcnJvcnM7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUXVlcnlNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeU1hbmFnZXIoX2EpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gX2EuY2FjaGUsIGxpbmsgPSBfYS5saW5rLCBkZWZhdWx0T3B0aW9ucyA9IF9hLmRlZmF1bHRPcHRpb25zLCBfYiA9IF9hLnF1ZXJ5RGVkdXBsaWNhdGlvbiwgcXVlcnlEZWR1cGxpY2F0aW9uID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIG9uQnJvYWRjYXN0ID0gX2Eub25Ccm9hZGNhc3QsIF9jID0gX2Euc3NyTW9kZSwgc3NyTW9kZSA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBfZCA9IF9hLmNsaWVudEF3YXJlbmVzcywgY2xpZW50QXdhcmVuZXNzID0gX2QgPT09IHZvaWQgMCA/IHt9IDogX2QsIGxvY2FsU3RhdGUgPSBfYS5sb2NhbFN0YXRlLCBhc3N1bWVJbW11dGFibGVSZXN1bHRzID0gX2EuYXNzdW1lSW1tdXRhYmxlUmVzdWx0cztcbiAgICAgICAgdGhpcy5jbGllbnRBd2FyZW5lc3MgPSB7fTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUNhY2hlID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha01hcCA/IFdlYWtNYXAgOiBNYXApKCk7XG4gICAgICAgIHRoaXMucXVlcnlJZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLnJlcXVlc3RJZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLm11dGF0aW9uSWRDb3VudGVyID0gMTtcbiAgICAgICAgdGhpcy5pbkZsaWdodExpbmtPYnNlcnZhYmxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnMgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5xdWVyeURlZHVwbGljYXRpb24gPSBxdWVyeURlZHVwbGljYXRpb247XG4gICAgICAgIHRoaXMuY2xpZW50QXdhcmVuZXNzID0gY2xpZW50QXdhcmVuZXNzO1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUgPSBsb2NhbFN0YXRlIHx8IG5ldyBMb2NhbFN0YXRlKHsgY2FjaGU6IGNhY2hlIH0pO1xuICAgICAgICB0aGlzLnNzck1vZGUgPSBzc3JNb2RlO1xuICAgICAgICB0aGlzLmFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSAhIWFzc3VtZUltbXV0YWJsZVJlc3VsdHM7XG4gICAgICAgIGlmICgodGhpcy5vbkJyb2FkY2FzdCA9IG9uQnJvYWRjYXN0KSkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvblN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfaW5mbywgcXVlcnlJZCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbmNlbFBlbmRpbmdGZXRjaGVzKF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcignUXVlcnlNYW5hZ2VyIHN0b3BwZWQgd2hpbGUgcXVlcnkgd2FzIGluIGZsaWdodCcpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMTEpKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuY2FuY2VsUGVuZGluZ0ZldGNoZXMgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5mZXRjaENhbmNlbEZucy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5jZWwpIHsgcmV0dXJuIGNhbmNlbChlcnJvcik7IH0pO1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLmNsZWFyKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLm11dGF0ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IsIF9jO1xuICAgICAgICB2YXIgbXV0YXRpb24gPSBfYS5tdXRhdGlvbiwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBvcHRpbWlzdGljUmVzcG9uc2UgPSBfYS5vcHRpbWlzdGljUmVzcG9uc2UsIHVwZGF0ZVF1ZXJpZXMgPSBfYS51cGRhdGVRdWVyaWVzLCBfZCA9IF9hLnJlZmV0Y2hRdWVyaWVzLCByZWZldGNoUXVlcmllcyA9IF9kID09PSB2b2lkIDAgPyBbXSA6IF9kLCBfZSA9IF9hLmF3YWl0UmVmZXRjaFF1ZXJpZXMsIGF3YWl0UmVmZXRjaFF1ZXJpZXMgPSBfZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZSwgdXBkYXRlV2l0aFByb3h5Rm4gPSBfYS51cGRhdGUsIG9uUXVlcnlVcGRhdGVkID0gX2Eub25RdWVyeVVwZGF0ZWQsIF9mID0gX2EuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2YgPT09IHZvaWQgMCA/ICgoX2IgPSB0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZldGNoUG9saWN5KSB8fCBcIm5ldHdvcmstb25seVwiIDogX2YsIF9nID0gX2EuZXJyb3JQb2xpY3ksIGVycm9yUG9saWN5ID0gX2cgPT09IHZvaWQgMCA/ICgoX2MgPSB0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmVycm9yUG9saWN5KSB8fCBcIm5vbmVcIiA6IF9nLCBrZWVwUm9vdEZpZWxkcyA9IF9hLmtlZXBSb290RmllbGRzLCBjb250ZXh0ID0gX2EuY29udGV4dDtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG11dGF0aW9uSWQsIG11dGF0aW9uU3RvcmVWYWx1ZSwgc2VsZjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2gpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9oLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChtdXRhdGlvbiwgJ211dGF0aW9uIG9wdGlvbiBpcyByZXF1aXJlZC4gWW91IG11c3Qgc3BlY2lmeSB5b3VyIEdyYXBoUUwgZG9jdW1lbnQgaW4gdGhlIG11dGF0aW9uIG9wdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KG11dGF0aW9uLCAxMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3kgPT09ICduby1jYWNoZScsIFwiTXV0YXRpb25zIHN1cHBvcnQgb25seSAnbmV0d29yay1vbmx5JyBvciAnbm8tY2FjaGUnIGZldGNoUG9saWN5IHN0cmluZ3MuIFRoZSBkZWZhdWx0IGBuZXR3b3JrLW9ubHlgIGJlaGF2aW9yIGF1dG9tYXRpY2FsbHkgd3JpdGVzIG11dGF0aW9uIHJlc3VsdHMgdG8gdGhlIGNhY2hlLiBQYXNzaW5nIGBuby1jYWNoZWAgc2tpcHMgdGhlIGNhY2hlIHdyaXRlLlwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGZldGNoUG9saWN5ID09PSAnbmV0d29yay1vbmx5JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ID09PSAnbm8tY2FjaGUnLCAxMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkID0gdGhpcy5nZW5lcmF0ZU11dGF0aW9uSWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uID0gdGhpcy50cmFuc2Zvcm0obXV0YXRpb24pLmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobXV0YXRpb24sIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudHJhbnNmb3JtKG11dGF0aW9uKS5oYXNDbGllbnRFeHBvcnRzKSByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmxvY2FsU3RhdGUuYWRkRXhwb3J0ZWRWYXJpYWJsZXMobXV0YXRpb24sIHZhcmlhYmxlcywgY29udGV4dCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSAoX2guc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25TdG9yZVZhbHVlID0gdGhpcy5tdXRhdGlvblN0b3JlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubXV0YXRpb25TdG9yZVttdXRhdGlvbklkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb246IG11dGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrTXV0YXRpb25PcHRpbWlzdGljKG9wdGltaXN0aWNSZXNwb25zZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbklkOiBtdXRhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlcmllczogdXBkYXRlUXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcFJvb3RGaWVsZHM6IGtlZXBSb290RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbGl0aWVzLmFzeW5jTWFwKHNlbGYuZ2V0T2JzZXJ2YWJsZUZyb21MaW5rKG11dGF0aW9uLCB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgY29udGV4dCksIHsgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljUmVzcG9uc2UgfSksIHZhcmlhYmxlcywgZmFsc2UpLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpICYmIGVycm9yUG9saWN5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvblN0b3JlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblN0b3JlVmFsdWUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVSZXN1bHQgPSB0c2xpYi5fX2Fzc2lnbih7fSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmZXRjaFF1ZXJpZXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzID0gcmVmZXRjaFF1ZXJpZXMoc3RvcmVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yUG9saWN5ID09PSAnaWdub3JlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxpdGllcy5ncmFwaFFMUmVzdWx0SGFzRXJyb3Ioc3RvcmVSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlUmVzdWx0LmVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLm1hcmtNdXRhdGlvblJlc3VsdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25JZDogbXV0YXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHN0b3JlUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JQb2xpY3k6IGVycm9yUG9saWN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVXaXRoUHJveHlGbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVRdWVyaWVzOiB1cGRhdGVRdWVyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0UmVmZXRjaFF1ZXJpZXM6IGF3YWl0UmVmZXRjaFF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IHJlZmV0Y2hRdWVyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU9wdGltaXN0aWM6IG9wdGltaXN0aWNSZXNwb25zZSA/IG11dGF0aW9uSWQgOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25RdWVyeVVwZGF0ZWQ6IG9uUXVlcnlVcGRhdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBSb290RmllbGRzOiBrZWVwUm9vdEZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHN0b3JlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzdG9yZVJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb25TdG9yZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uU3RvcmVWYWx1ZS5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWNSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhY2hlLnJlbW92ZU9wdGltaXN0aWMobXV0YXRpb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIgaW5zdGFuY2VvZiBlcnJvcnMuQXBvbGxvRXJyb3IgPyBlcnIgOiBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUubWFya011dGF0aW9uUmVzdWx0ID0gZnVuY3Rpb24gKG11dGF0aW9uLCBjYWNoZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoY2FjaGUgPT09IHZvaWQgMCkgeyBjYWNoZSA9IHRoaXMuY2FjaGU7IH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IG11dGF0aW9uLnJlc3VsdDtcbiAgICAgICAgdmFyIGNhY2hlV3JpdGVzID0gW107XG4gICAgICAgIHZhciBza2lwQ2FjaGUgPSBtdXRhdGlvbi5mZXRjaFBvbGljeSA9PT0gXCJuby1jYWNoZVwiO1xuICAgICAgICBpZiAoIXNraXBDYWNoZSAmJiBzaG91bGRXcml0ZVJlc3VsdChyZXN1bHQsIG11dGF0aW9uLmVycm9yUG9saWN5KSkge1xuICAgICAgICAgICAgY2FjaGVXcml0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX01VVEFUSU9OJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogbXV0YXRpb24uZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBtdXRhdGlvbi52YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVRdWVyaWVzXzEgPSBtdXRhdGlvbi51cGRhdGVRdWVyaWVzO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZVF1ZXJpZXNfMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVF1ZXJ5ID0gX2Eub2JzZXJ2YWJsZVF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlOYW1lID0gb2JzZXJ2YWJsZVF1ZXJ5ICYmIG9ic2VydmFibGVRdWVyeS5xdWVyeU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnlOYW1lIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHVwZGF0ZVF1ZXJpZXNfMSwgcXVlcnlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVyID0gdXBkYXRlUXVlcmllc18xW3F1ZXJ5TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF90aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpLCBkb2N1bWVudCA9IF9iLmRvY3VtZW50LCB2YXJpYWJsZXMgPSBfYi52YXJpYWJsZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYyA9IGNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KSwgY3VycmVudFF1ZXJ5UmVzdWx0ID0gX2MucmVzdWx0LCBjb21wbGV0ZSA9IF9jLmNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGUgJiYgY3VycmVudFF1ZXJ5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFF1ZXJ5UmVzdWx0ID0gdXBkYXRlcihjdXJyZW50UXVlcnlSZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZTogZG9jdW1lbnQgJiYgdXRpbGl0aWVzLmdldE9wZXJhdGlvbk5hbWUoZG9jdW1lbnQpIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFF1ZXJ5UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVXcml0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbmV4dFF1ZXJ5UmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSWQ6ICdST09UX1FVRVJZJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZVdyaXRlcy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5yZWZldGNoUXVlcmllcyB8fFxuICAgICAgICAgICAgbXV0YXRpb24udXBkYXRlIHx8XG4gICAgICAgICAgICBtdXRhdGlvbi5vblF1ZXJ5VXBkYXRlZCB8fFxuICAgICAgICAgICAgbXV0YXRpb24ucmVtb3ZlT3B0aW1pc3RpYykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdHNfMSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5yZWZldGNoUXVlcmllcyh7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FjaGU6IGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVXcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAod3JpdGUpIHsgcmV0dXJuIGNhY2hlLndyaXRlKHdyaXRlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IG11dGF0aW9uLnVwZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IGNhY2hlLmRpZmYoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJST09UX01VVEFUSU9OXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBfdGhpcy50cmFuc2Zvcm0obXV0YXRpb24uZG9jdW1lbnQpLmFzUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHJlc3VsdCksIHsgZGF0YTogZGlmZi5yZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKGNhY2hlLCByZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBtdXRhdGlvbi5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogbXV0YXRpb24udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwQ2FjaGUgJiYgIW11dGF0aW9uLmtlZXBSb290RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5tb2RpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnUk9PVF9NVVRBVElPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBfYS5maWVsZE5hbWUsIERFTEVURSA9IF9hLkRFTEVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gXCJfX3R5cGVuYW1lXCIgPyB2YWx1ZSA6IERFTEVURTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IG11dGF0aW9uLnJlZmV0Y2hRdWVyaWVzLFxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbW92ZU9wdGltaXN0aWM6IG11dGF0aW9uLnJlbW92ZU9wdGltaXN0aWMsXG4gICAgICAgICAgICAgICAgb25RdWVyeVVwZGF0ZWQ6IG11dGF0aW9uLm9uUXVlcnlVcGRhdGVkIHx8IG51bGwsXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdHNfMS5wdXNoKHJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmF3YWl0UmVmZXRjaFF1ZXJpZXMgfHwgbXV0YXRpb24ub25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0c18xKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc3VsdDsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5tYXJrTXV0YXRpb25PcHRpbWlzdGljID0gZnVuY3Rpb24gKG9wdGltaXN0aWNSZXNwb25zZSwgbXV0YXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB0eXBlb2Ygb3B0aW1pc3RpY1Jlc3BvbnNlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gb3B0aW1pc3RpY1Jlc3BvbnNlKG11dGF0aW9uLnZhcmlhYmxlcylcbiAgICAgICAgICAgIDogb3B0aW1pc3RpY1Jlc3BvbnNlO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWNvcmRPcHRpbWlzdGljVHJhbnNhY3Rpb24oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1hcmtNdXRhdGlvblJlc3VsdCh0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbXV0YXRpb24pLCB7IHJlc3VsdDogeyBkYXRhOiBkYXRhIH0gfSksIGNhY2hlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBtdXRhdGlvbi5tdXRhdGlvbklkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkLCBvcHRpb25zLCBuZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnlPYnNlcnZhYmxlKHF1ZXJ5SWQsIG9wdGlvbnMsIG5ldHdvcmtTdGF0dXMpLnByb21pc2U7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFF1ZXJ5U3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICBzdG9yZVtxdWVyeUlkXSA9IHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IGluZm8udmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGluZm8ubmV0d29ya1N0YXR1cyxcbiAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGluZm8ubmV0d29ya0Vycm9yLFxuICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IGluZm8uZ3JhcGhRTEVycm9ycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlc2V0RXJyb3JzID0gZnVuY3Rpb24gKHF1ZXJ5SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5SW5mbyA9IHRoaXMucXVlcmllcy5nZXQocXVlcnlJZCk7XG4gICAgICAgIGlmIChxdWVyeUluZm8pIHtcbiAgICAgICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBxdWVyeUluZm8uZ3JhcGhRTEVycm9ycyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtQ2FjaGUgPSB0aGlzLnRyYW5zZm9ybUNhY2hlO1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUNhY2hlLmhhcyhkb2N1bWVudCkpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IHRoaXMuY2FjaGUudHJhbnNmb3JtRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgdmFyIGZvckxpbmsgPSB1dGlsaXRpZXMucmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudCh0aGlzLmNhY2hlLnRyYW5zZm9ybUZvckxpbmsodHJhbnNmb3JtZWQpKTtcbiAgICAgICAgICAgIHZhciBjbGllbnRRdWVyeSA9IHRoaXMubG9jYWxTdGF0ZS5jbGllbnRRdWVyeSh0cmFuc2Zvcm1lZCk7XG4gICAgICAgICAgICB2YXIgc2VydmVyUXVlcnkgPSBmb3JMaW5rICYmIHRoaXMubG9jYWxTdGF0ZS5zZXJ2ZXJRdWVyeShmb3JMaW5rKTtcbiAgICAgICAgICAgIHZhciBjYWNoZUVudHJ5XzEgPSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHRyYW5zZm9ybWVkLFxuICAgICAgICAgICAgICAgIGhhc0NsaWVudEV4cG9ydHM6IHV0aWxpdGllcy5oYXNDbGllbnRFeHBvcnRzKHRyYW5zZm9ybWVkKSxcbiAgICAgICAgICAgICAgICBoYXNGb3JjZWRSZXNvbHZlcnM6IHRoaXMubG9jYWxTdGF0ZS5zaG91bGRGb3JjZVJlc29sdmVycyh0cmFuc2Zvcm1lZCksXG4gICAgICAgICAgICAgICAgY2xpZW50UXVlcnk6IGNsaWVudFF1ZXJ5LFxuICAgICAgICAgICAgICAgIHNlcnZlclF1ZXJ5OiBzZXJ2ZXJRdWVyeSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFyczogdXRpbGl0aWVzLmdldERlZmF1bHRWYWx1ZXModXRpbGl0aWVzLmdldE9wZXJhdGlvbkRlZmluaXRpb24odHJhbnNmb3JtZWQpKSxcbiAgICAgICAgICAgICAgICBhc1F1ZXJ5OiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgdHJhbnNmb3JtZWQpLCB7IGRlZmluaXRpb25zOiB0cmFuc2Zvcm1lZC5kZWZpbml0aW9ucy5tYXAoZnVuY3Rpb24gKGRlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZi5raW5kID09PSBcIk9wZXJhdGlvbkRlZmluaXRpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZi5vcGVyYXRpb24gIT09IFwicXVlcnlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZGVmKSwgeyBvcGVyYXRpb246IFwicXVlcnlcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgICAgICAgICAgICAgIH0pIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jICYmICF0cmFuc2Zvcm1DYWNoZS5oYXMoZG9jKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQoZG9jLCBjYWNoZUVudHJ5XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGQoZG9jdW1lbnQpO1xuICAgICAgICAgICAgYWRkKHRyYW5zZm9ybWVkKTtcbiAgICAgICAgICAgIGFkZChjbGllbnRRdWVyeSk7XG4gICAgICAgICAgICBhZGQoc2VydmVyUXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQoZG9jdW1lbnQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHZhcmlhYmxlcykge1xuICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIHRoaXMudHJhbnNmb3JtKGRvY3VtZW50KS5kZWZhdWx0VmFycyksIHZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLndhdGNoUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHZhcmlhYmxlczogdGhpcy5nZXRWYXJpYWJsZXMob3B0aW9ucy5xdWVyeSwgb3B0aW9ucy52YXJpYWJsZXMpIH0pO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0aW9ucy5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcXVlcnlJbmZvID0gbmV3IFF1ZXJ5SW5mbyh0aGlzKTtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5TWFuYWdlcjogdGhpcyxcbiAgICAgICAgICAgIHF1ZXJ5SW5mbzogcXVlcnlJbmZvLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcmllcy5zZXQob2JzZXJ2YWJsZS5xdWVyeUlkLCBxdWVyeUluZm8pO1xuICAgICAgICBxdWVyeUluZm8uaW5pdCh7XG4gICAgICAgICAgICBkb2N1bWVudDogb2JzZXJ2YWJsZS5xdWVyeSxcbiAgICAgICAgICAgIG9ic2VydmFibGVRdWVyeTogb2JzZXJ2YWJsZSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogb2JzZXJ2YWJsZS52YXJpYWJsZXMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucywgcXVlcnlJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocXVlcnlJZCA9PT0gdm9pZCAwKSB7IHF1ZXJ5SWQgPSB0aGlzLmdlbmVyYXRlUXVlcnlJZCgpOyB9XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LCAncXVlcnkgb3B0aW9uIGlzIHJlcXVpcmVkLiBZb3UgbXVzdCBzcGVjaWZ5IHlvdXIgR3JhcGhRTCBkb2N1bWVudCAnICtcbiAgICAgICAgICAgICdpbiB0aGUgcXVlcnkgb3B0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeSwgMTQpO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQob3B0aW9ucy5xdWVyeS5raW5kID09PSAnRG9jdW1lbnQnLCAnWW91IG11c3Qgd3JhcCB0aGUgcXVlcnkgc3RyaW5nIGluIGEgXCJncWxcIiB0YWcuJykgOiBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLnF1ZXJ5LmtpbmQgPT09ICdEb2N1bWVudCcsIDE1KTtcbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KCFvcHRpb25zLnJldHVyblBhcnRpYWxEYXRhLCAncmV0dXJuUGFydGlhbERhdGEgb3B0aW9uIG9ubHkgc3VwcG9ydGVkIG9uIHdhdGNoUXVlcnkuJykgOiBnbG9iYWxzLmludmFyaWFudCghb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgMTYpO1xuICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAncG9sbEludGVydmFsIG9wdGlvbiBvbmx5IHN1cHBvcnRlZCBvbiB3YXRjaFF1ZXJ5LicpIDogZ2xvYmFscy5pbnZhcmlhbnQoIW9wdGlvbnMucG9sbEludGVydmFsLCAxNyk7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkocXVlcnlJZCwgb3B0aW9ucykuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdG9wUXVlcnkocXVlcnlJZCk7IH0pO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZVF1ZXJ5SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5xdWVyeUlkQ291bnRlcisrKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVSZXF1ZXN0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RJZENvdW50ZXIrKztcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVNdXRhdGlvbklkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMubXV0YXRpb25JZENvdW50ZXIrKyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeUluU3RvcmUgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICB0aGlzLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RRdWVyaWVzKCk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeUluU3RvcmVOb0Jyb2FkY2FzdCA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLnF1ZXJpZXMuZ2V0KHF1ZXJ5SWQpO1xuICAgICAgICBpZiAocXVlcnlJbmZvKVxuICAgICAgICAgICAgcXVlcnlJbmZvLnN0b3AoKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuY2xlYXJTdG9yZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRpc2NhcmRXYXRjaGVzOiB0cnVlLFxuICAgICAgICB9OyB9XG4gICAgICAgIHRoaXMuY2FuY2VsUGVuZGluZ0ZldGNoZXMoX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdTdG9yZSByZXNldCB3aGlsZSBxdWVyeSB3YXMgaW4gZmxpZ2h0IChub3QgY29tcGxldGVkIGluIGxpbmsgY2hhaW4pJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigxOCkpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnlJbmZvKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlJbmZvLm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5uZXR3b3JrU3RhdHVzID0gZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25TdG9yZSkge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvblN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZXNldChvcHRpb25zKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMgPSBmdW5jdGlvbiAoaW5jbHVkZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5jbHVkZSA9PT0gdm9pZCAwKSB7IGluY2x1ZGUgPSBcImFjdGl2ZVwiOyB9XG4gICAgICAgIHZhciBxdWVyaWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgcXVlcnlOYW1lc0FuZERvY3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBsZWdhY3lRdWVyeU9wdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGluY2x1ZGUpKSB7XG4gICAgICAgICAgICBpbmNsdWRlLmZvckVhY2goZnVuY3Rpb24gKGRlc2MpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc2MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KGRlc2MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbGl0aWVzLmlzRG9jdW1lbnROb2RlKGRlc2MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5TmFtZXNBbmREb2NzLnNldChfdGhpcy50cmFuc2Zvcm0oZGVzYykuZG9jdW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdChkZXNjKSAmJiBkZXNjLnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2FjeVF1ZXJ5T3B0aW9ucy5hZGQoZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICB2YXIgb3EgPSBfYS5vYnNlcnZhYmxlUXVlcnksIGRvY3VtZW50ID0gX2EuZG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAob3EpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZSA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWVyaWVzLnNldChxdWVyeUlkLCBvcSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5TmFtZSA9IG9xLnF1ZXJ5TmFtZSwgZmV0Y2hQb2xpY3kgPSBvcS5vcHRpb25zLmZldGNoUG9saWN5O1xuICAgICAgICAgICAgICAgIGlmIChmZXRjaFBvbGljeSA9PT0gXCJzdGFuZGJ5XCIgfHxcbiAgICAgICAgICAgICAgICAgICAgKGluY2x1ZGUgPT09IFwiYWN0aXZlXCIgJiYgIW9xLmhhc09ic2VydmVycygpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlID09PSBcImFjdGl2ZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIChxdWVyeU5hbWUgJiYgcXVlcnlOYW1lc0FuZERvY3MuaGFzKHF1ZXJ5TmFtZSkpIHx8XG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudCAmJiBxdWVyeU5hbWVzQW5kRG9jcy5oYXMoZG9jdW1lbnQpKSkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyaWVzLnNldChxdWVyeUlkLCBvcSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU5hbWVzQW5kRG9jcy5zZXQocXVlcnlOYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3Muc2V0KGRvY3VtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGVnYWN5UXVlcnlPcHRpb25zLnNpemUpIHtcbiAgICAgICAgICAgIGxlZ2FjeVF1ZXJ5T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5SWQgPSB1dGlsaXRpZXMubWFrZVVuaXF1ZUlkKFwibGVnYWN5T25lVGltZVF1ZXJ5XCIpO1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeUluZm8gPSBfdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5pbml0KHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IG9wdGlvbnMucXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG9xID0gbmV3IE9ic2VydmFibGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5TWFuYWdlcjogX3RoaXMsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5SW5mbzogcXVlcnlJbmZvLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZmV0Y2hQb2xpY3k6IFwibmV0d29yay1vbmx5XCIgfSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFscy5pbnZhcmlhbnQob3EucXVlcnlJZCA9PT0gcXVlcnlJZCk7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLnNldE9ic2VydmFibGVRdWVyeShvcSk7XG4gICAgICAgICAgICAgICAgcXVlcmllcy5zZXQocXVlcnlJZCwgb3EpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fREVWX18gJiYgcXVlcnlOYW1lc0FuZERvY3Muc2l6ZSkge1xuICAgICAgICAgICAgcXVlcnlOYW1lc0FuZERvY3MuZm9yRWFjaChmdW5jdGlvbiAoaW5jbHVkZWQsIG5hbWVPckRvYykge1xuICAgICAgICAgICAgICAgIGlmICghaW5jbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiVW5rbm93biBxdWVyeSBcIi5jb25jYXQodHlwZW9mIG5hbWVPckRvYyA9PT0gXCJzdHJpbmdcIiA/IFwibmFtZWQgXCIgOiBcIlwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkobmFtZU9yRG9jLCBudWxsLCAyKSwgXCIgcmVxdWVzdGVkIGluIHJlZmV0Y2hRdWVyaWVzIG9wdGlvbnMuaW5jbHVkZSBhcnJheVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJpZXM7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IGZ1bmN0aW9uIChpbmNsdWRlU3RhbmRieSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaW5jbHVkZVN0YW5kYnkgPT09IHZvaWQgMCkgeyBpbmNsdWRlU3RhbmRieSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlUXVlcnlQcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLmdldE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGVTdGFuZGJ5ID8gXCJhbGxcIiA6IFwiYWN0aXZlXCIpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmFibGVRdWVyeSwgcXVlcnlJZCkge1xuICAgICAgICAgICAgdmFyIGZldGNoUG9saWN5ID0gb2JzZXJ2YWJsZVF1ZXJ5Lm9wdGlvbnMuZmV0Y2hQb2xpY3k7XG4gICAgICAgICAgICBvYnNlcnZhYmxlUXVlcnkucmVzZXRMYXN0UmVzdWx0cygpO1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVTdGFuZGJ5IHx8XG4gICAgICAgICAgICAgICAgKGZldGNoUG9saWN5ICE9PSBcInN0YW5kYnlcIiAmJlxuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeSAhPT0gXCJjYWNoZS1vbmx5XCIpKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVF1ZXJ5UHJvbWlzZXMucHVzaChvYnNlcnZhYmxlUXVlcnkucmVmZXRjaCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpLnNldERpZmYobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9ic2VydmFibGVRdWVyeVByb21pc2VzKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc2V0T2JzZXJ2YWJsZVF1ZXJ5ID0gZnVuY3Rpb24gKG9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICB0aGlzLmdldFF1ZXJ5KG9ic2VydmFibGVRdWVyeS5xdWVyeUlkKS5zZXRPYnNlcnZhYmxlUXVlcnkob2JzZXJ2YWJsZVF1ZXJ5KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuc3RhcnRHcmFwaFFMU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBxdWVyeSA9IF9hLnF1ZXJ5LCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5LCBlcnJvclBvbGljeSA9IF9hLmVycm9yUG9saWN5LCB2YXJpYWJsZXMgPSBfYS52YXJpYWJsZXMsIF9iID0gX2EuY29udGV4dCwgY29udGV4dCA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xuICAgICAgICBxdWVyeSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5kb2N1bWVudDtcbiAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMocXVlcnksIHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBtYWtlT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRPYnNlcnZhYmxlRnJvbUxpbmsocXVlcnksIGNvbnRleHQsIHZhcmlhYmxlcykubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmV0Y2hQb2xpY3kgIT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFdyaXRlUmVzdWx0KHJlc3VsdCwgZXJyb3JQb2xpY3kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWNoZS53cml0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUlkOiAnUk9PVF9TVUJTQ1JJUFRJT04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXRpbGl0aWVzLmdyYXBoUUxSZXN1bHRIYXNFcnJvcihyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZVByb21pc2VfMSA9IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhxdWVyeSwgdmFyaWFibGVzLCBjb250ZXh0KS50aGVuKG1ha2VPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVByb21pc2VfMS50aGVuKGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7IHJldHVybiBzdWIgPSBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7IH0sIG9ic2VydmVyLmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ViICYmIHN1Yi51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ha2VPYnNlcnZhYmxlKHZhcmlhYmxlcyk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLnN0b3BRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuc3RvcFF1ZXJ5Tm9Ccm9hZGNhc3QocXVlcnlJZCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5zdG9wUXVlcnlOb0Jyb2FkY2FzdCA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuc3RvcFF1ZXJ5SW5TdG9yZU5vQnJvYWRjYXN0KHF1ZXJ5SWQpO1xuICAgICAgICB0aGlzLnJlbW92ZVF1ZXJ5KHF1ZXJ5SWQpO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeUlkKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hDYW5jZWxGbnMuZGVsZXRlKHF1ZXJ5SWQpO1xuICAgICAgICBpZiAodGhpcy5xdWVyaWVzLmhhcyhxdWVyeUlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZGVsZXRlKHF1ZXJ5SWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmJyb2FkY2FzdFF1ZXJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQnJvYWRjYXN0KVxuICAgICAgICAgICAgdGhpcy5vbkJyb2FkY2FzdCgpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5mbykgeyByZXR1cm4gaW5mby5ub3RpZnkoKTsgfSk7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldExvY2FsU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsU3RhdGU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldE9ic2VydmFibGVGcm9tTGluayA9IGZ1bmN0aW9uIChxdWVyeSwgY29udGV4dCwgdmFyaWFibGVzLCBkZWR1cGxpY2F0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGRlZHVwbGljYXRpb24gPT09IHZvaWQgMCkgeyBkZWR1cGxpY2F0aW9uID0gKF9hID0gY29udGV4dCA9PT0gbnVsbCB8fCBjb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZXh0LnF1ZXJ5RGVkdXBsaWNhdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5xdWVyeURlZHVwbGljYXRpb247IH1cbiAgICAgICAgdmFyIG9ic2VydmFibGU7XG4gICAgICAgIHZhciBzZXJ2ZXJRdWVyeSA9IHRoaXMudHJhbnNmb3JtKHF1ZXJ5KS5zZXJ2ZXJRdWVyeTtcbiAgICAgICAgaWYgKHNlcnZlclF1ZXJ5KSB7XG4gICAgICAgICAgICB2YXIgX2IgPSB0aGlzLCBpbkZsaWdodExpbmtPYnNlcnZhYmxlc18xID0gX2IuaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXMsIGxpbmsgPSBfYi5saW5rO1xuICAgICAgICAgICAgdmFyIG9wZXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBxdWVyeTogc2VydmVyUXVlcnksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZTogdXRpbGl0aWVzLmdldE9wZXJhdGlvbk5hbWUoc2VydmVyUXVlcnkpIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLnByZXBhcmVDb250ZXh0KHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBmb3JjZUZldGNoOiAhZGVkdXBsaWNhdGlvbiB9KSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29udGV4dCA9IG9wZXJhdGlvbi5jb250ZXh0O1xuICAgICAgICAgICAgaWYgKGRlZHVwbGljYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgYnlWYXJpYWJsZXNfMSA9IGluRmxpZ2h0TGlua09ic2VydmFibGVzXzEuZ2V0KHNlcnZlclF1ZXJ5KSB8fCBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMS5zZXQoc2VydmVyUXVlcnksIGJ5VmFyaWFibGVzXzEpO1xuICAgICAgICAgICAgICAgIHZhciB2YXJKc29uXzEgPSBjYWNoZS5jYW5vbmljYWxTdHJpbmdpZnkodmFyaWFibGVzKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlID0gYnlWYXJpYWJsZXNfMS5nZXQodmFySnNvbl8xKTtcbiAgICAgICAgICAgICAgICBpZiAoIW9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNhc3QgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgY29yZS5leGVjdXRlKGxpbmssIG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIGJ5VmFyaWFibGVzXzEuc2V0KHZhckpzb25fMSwgb2JzZXJ2YWJsZSA9IGNvbmNhc3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25jYXN0LmNsZWFudXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5VmFyaWFibGVzXzEuZGVsZXRlKHZhckpzb25fMSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVZhcmlhYmxlc18xLnNpemUgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5GbGlnaHRMaW5rT2JzZXJ2YWJsZXNfMS5kZWxldGUoc2VydmVyUXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlID0gbmV3IHV0aWxpdGllcy5Db25jYXN0KFtcbiAgICAgICAgICAgICAgICAgICAgY29yZS5leGVjdXRlKGxpbmssIG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSBuZXcgdXRpbGl0aWVzLkNvbmNhc3QoW1xuICAgICAgICAgICAgICAgIHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKHsgZGF0YToge30gfSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMucHJlcGFyZUNvbnRleHQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsaWVudFF1ZXJ5ID0gdGhpcy50cmFuc2Zvcm0ocXVlcnkpLmNsaWVudFF1ZXJ5O1xuICAgICAgICBpZiAoY2xpZW50UXVlcnkpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB1dGlsaXRpZXMuYXN5bmNNYXAob2JzZXJ2YWJsZSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sb2NhbFN0YXRlLnJ1blJlc29sdmVycyh7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50OiBjbGllbnRRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlUmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBRdWVyeU1hbmFnZXIucHJvdG90eXBlLmdldFJlc3VsdHNGcm9tTGluayA9IGZ1bmN0aW9uIChxdWVyeUluZm8sIGNhY2hlV3JpdGVCZWhhdmlvciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgcmVxdWVzdElkID0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQgPSB0aGlzLmdlbmVyYXRlUmVxdWVzdElkKCk7XG4gICAgICAgIHJldHVybiB1dGlsaXRpZXMuYXN5bmNNYXAodGhpcy5nZXRPYnNlcnZhYmxlRnJvbUxpbmsocXVlcnlJbmZvLmRvY3VtZW50LCBvcHRpb25zLmNvbnRleHQsIG9wdGlvbnMudmFyaWFibGVzKSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIGhhc0Vycm9ycyA9IHV0aWxpdGllcy5pc05vbkVtcHR5QXJyYXkocmVzdWx0LmVycm9ycyk7XG4gICAgICAgICAgICBpZiAocmVxdWVzdElkID49IHF1ZXJ5SW5mby5sYXN0UmVxdWVzdElkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0Vycm9ycyAmJiBvcHRpb25zLmVycm9yUG9saWN5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBxdWVyeUluZm8ubWFya0Vycm9yKG5ldyBlcnJvcnMuQXBvbGxvRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya1Jlc3VsdChyZXN1bHQsIG9wdGlvbnMsIGNhY2hlV3JpdGVCZWhhdmlvcik7XG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm1hcmtSZWFkeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFxciA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGhhc0Vycm9ycyAmJiBvcHRpb25zLmVycm9yUG9saWN5ICE9PSBcImlnbm9yZVwiKSB7XG4gICAgICAgICAgICAgICAgYXFyLmVycm9ycyA9IHJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICAgICAgYXFyLm5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXFyO1xuICAgICAgICB9LCBmdW5jdGlvbiAobmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBlcnJvcnMuaXNBcG9sbG9FcnJvcihuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgICAgICAgPyBuZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICA6IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBuZXR3b3JrRXJyb3I6IG5ldHdvcmtFcnJvciB9KTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0SWQgPj0gcXVlcnlJbmZvLmxhc3RSZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgICAgICBxdWVyeUluZm8ubWFya0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZmV0Y2hRdWVyeU9ic2VydmFibGUgPSBmdW5jdGlvbiAocXVlcnlJZCwgb3B0aW9ucywgbmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobmV0d29ya1N0YXR1cyA9PT0gdm9pZCAwKSB7IG5ldHdvcmtTdGF0dXMgPSBleHBvcnRzLk5ldHdvcmtTdGF0dXMubG9hZGluZzsgfVxuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnRyYW5zZm9ybShvcHRpb25zLnF1ZXJ5KS5kb2N1bWVudDtcbiAgICAgICAgdmFyIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKHF1ZXJ5LCBvcHRpb25zLnZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBxdWVyeUluZm8gPSB0aGlzLmdldFF1ZXJ5KHF1ZXJ5SWQpO1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnk7XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMuZmV0Y2hQb2xpY3ksIGZldGNoUG9saWN5ID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHRzICYmIGRlZmF1bHRzLmZldGNoUG9saWN5IHx8IFwiY2FjaGUtZmlyc3RcIiA6IF9hLCBfYiA9IG9wdGlvbnMuZXJyb3JQb2xpY3ksIGVycm9yUG9saWN5ID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRzICYmIGRlZmF1bHRzLmVycm9yUG9saWN5IHx8IFwibm9uZVwiIDogX2IsIF9jID0gb3B0aW9ucy5yZXR1cm5QYXJ0aWFsRGF0YSwgcmV0dXJuUGFydGlhbERhdGEgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgX2QgPSBvcHRpb25zLm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSwgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2QsIF9lID0gb3B0aW9ucy5jb250ZXh0LCBjb250ZXh0ID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2U7XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogZmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICBlcnJvclBvbGljeTogZXJyb3JQb2xpY3ksXG4gICAgICAgICAgICByZXR1cm5QYXJ0aWFsRGF0YTogcmV0dXJuUGFydGlhbERhdGEsXG4gICAgICAgICAgICBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U6IG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVZhcmlhYmxlcyA9IGZ1bmN0aW9uICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICAgICAgdmFyIGNvbmNhc3RTb3VyY2VzID0gX3RoaXMuZmV0Y2hRdWVyeUJ5UG9saWN5KHF1ZXJ5SW5mbywgbm9ybWFsaXplZCwgbmV0d29ya1N0YXR1cyk7XG4gICAgICAgICAgICBpZiAobm9ybWFsaXplZC5mZXRjaFBvbGljeSAhPT0gXCJzdGFuZGJ5XCIgJiZcbiAgICAgICAgICAgICAgICBjb25jYXN0U291cmNlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgcXVlcnlJbmZvLm9ic2VydmFibGVRdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5mby5vYnNlcnZhYmxlUXVlcnlbXCJhcHBseU5leHRGZXRjaFBvbGljeVwiXShcImFmdGVyLWZldGNoXCIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNhc3RTb3VyY2VzO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY2xlYW51cENhbmNlbEZuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZmV0Y2hDYW5jZWxGbnMuZGVsZXRlKHF1ZXJ5SWQpOyB9O1xuICAgICAgICB0aGlzLmZldGNoQ2FuY2VsRm5zLnNldChxdWVyeUlkLCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBjbGVhbnVwQ2FuY2VsRm4oKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uY2FzdC5jYW5jZWwocmVhc29uKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29uY2FzdCA9IG5ldyB1dGlsaXRpZXMuQ29uY2FzdCh0aGlzLnRyYW5zZm9ybShub3JtYWxpemVkLnF1ZXJ5KS5oYXNDbGllbnRFeHBvcnRzXG4gICAgICAgICAgICA/IHRoaXMubG9jYWxTdGF0ZS5hZGRFeHBvcnRlZFZhcmlhYmxlcyhub3JtYWxpemVkLnF1ZXJ5LCBub3JtYWxpemVkLnZhcmlhYmxlcywgbm9ybWFsaXplZC5jb250ZXh0KS50aGVuKGZyb21WYXJpYWJsZXMpXG4gICAgICAgICAgICA6IGZyb21WYXJpYWJsZXMobm9ybWFsaXplZC52YXJpYWJsZXMpKTtcbiAgICAgICAgY29uY2FzdC5wcm9taXNlLnRoZW4oY2xlYW51cENhbmNlbEZuLCBjbGVhbnVwQ2FuY2VsRm4pO1xuICAgICAgICByZXR1cm4gY29uY2FzdDtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucmVmZXRjaFF1ZXJpZXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHVwZGF0ZUNhY2hlID0gX2EudXBkYXRlQ2FjaGUsIGluY2x1ZGUgPSBfYS5pbmNsdWRlLCBfYiA9IF9hLm9wdGltaXN0aWMsIG9wdGltaXN0aWMgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgX2MgPSBfYS5yZW1vdmVPcHRpbWlzdGljLCByZW1vdmVPcHRpbWlzdGljID0gX2MgPT09IHZvaWQgMCA/IG9wdGltaXN0aWMgPyB1dGlsaXRpZXMubWFrZVVuaXF1ZUlkKFwicmVmZXRjaFF1ZXJpZXNcIikgOiB2b2lkIDAgOiBfYywgb25RdWVyeVVwZGF0ZWQgPSBfYS5vblF1ZXJ5VXBkYXRlZDtcbiAgICAgICAgdmFyIGluY2x1ZGVkUXVlcmllc0J5SWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmIChpbmNsdWRlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9ic2VydmFibGVRdWVyaWVzKGluY2x1ZGUpLmZvckVhY2goZnVuY3Rpb24gKG9xLCBxdWVyeUlkKSB7XG4gICAgICAgICAgICAgICAgaW5jbHVkZWRRdWVyaWVzQnlJZC5zZXQocXVlcnlJZCwge1xuICAgICAgICAgICAgICAgICAgICBvcTogb3EsXG4gICAgICAgICAgICAgICAgICAgIGxhc3REaWZmOiBfdGhpcy5nZXRRdWVyeShxdWVyeUlkKS5nZXREaWZmKCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXA7XG4gICAgICAgIGlmICh1cGRhdGVDYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5iYXRjaCh7XG4gICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGVDYWNoZSxcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljOiBvcHRpbWlzdGljICYmIHJlbW92ZU9wdGltaXN0aWMgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVtb3ZlT3B0aW1pc3RpYzogcmVtb3ZlT3B0aW1pc3RpYyxcbiAgICAgICAgICAgICAgICBvbldhdGNoVXBkYXRlZDogZnVuY3Rpb24gKHdhdGNoLCBkaWZmLCBsYXN0RGlmZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3EgPSB3YXRjaC53YXRjaGVyIGluc3RhbmNlb2YgUXVlcnlJbmZvICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXRjaC53YXRjaGVyLm9ic2VydmFibGVRdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLmRlbGV0ZShvcS5xdWVyeUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb25RdWVyeVVwZGF0ZWQob3EsIGRpZmYsIGxhc3REaWZmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9xLnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQob3EsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZFF1ZXJpZXNCeUlkLnNldChvcS5xdWVyeUlkLCB7IG9xOiBvcSwgbGFzdERpZmY6IGxhc3REaWZmLCBkaWZmOiBkaWZmIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlZFF1ZXJpZXNCeUlkLnNpemUpIHtcbiAgICAgICAgICAgIGluY2x1ZGVkUXVlcmllc0J5SWQuZm9yRWFjaChmdW5jdGlvbiAoX2EsIHF1ZXJ5SWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3EgPSBfYS5vcSwgbGFzdERpZmYgPSBfYS5sYXN0RGlmZiwgZGlmZiA9IF9hLmRpZmY7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAob25RdWVyeVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IG9xW1wicXVlcnlJbmZvXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZiA9IGluZm8uZ2V0RGlmZigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9uUXVlcnlVcGRhdGVkKG9xLCBkaWZmLCBsYXN0RGlmZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghb25RdWVyeVVwZGF0ZWQgfHwgcmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9xLnJlZmV0Y2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQob3EsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChxdWVyeUlkLmluZGV4T2YoXCJsZWdhY3lPbmVUaW1lUXVlcnlcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdG9wUXVlcnlOb0Jyb2FkY2FzdChxdWVyeUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtb3ZlT3B0aW1pc3RpYykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5yZW1vdmVPcHRpbWlzdGljKHJlbW92ZU9wdGltaXN0aWMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gICAgUXVlcnlNYW5hZ2VyLnByb3RvdHlwZS5mZXRjaFF1ZXJ5QnlQb2xpY3kgPSBmdW5jdGlvbiAocXVlcnlJbmZvLCBfYSwgbmV0d29ya1N0YXR1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgdmFyaWFibGVzID0gX2EudmFyaWFibGVzLCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5LCByZWZldGNoV3JpdGVQb2xpY3kgPSBfYS5yZWZldGNoV3JpdGVQb2xpY3ksIGVycm9yUG9saWN5ID0gX2EuZXJyb3JQb2xpY3ksIHJldHVyblBhcnRpYWxEYXRhID0gX2EucmV0dXJuUGFydGlhbERhdGEsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgPSBfYS5ub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U7XG4gICAgICAgIHZhciBvbGROZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXM7XG4gICAgICAgIHF1ZXJ5SW5mby5pbml0KHtcbiAgICAgICAgICAgIGRvY3VtZW50OiB0aGlzLnRyYW5zZm9ybShxdWVyeSkuZG9jdW1lbnQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IG5ldHdvcmtTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVhZENhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcXVlcnlJbmZvLmdldERpZmYodmFyaWFibGVzKTsgfTtcbiAgICAgICAgdmFyIHJlc3VsdHNGcm9tQ2FjaGUgPSBmdW5jdGlvbiAoZGlmZiwgbmV0d29ya1N0YXR1cykge1xuICAgICAgICAgICAgaWYgKG5ldHdvcmtTdGF0dXMgPT09IHZvaWQgMCkgeyBuZXR3b3JrU3RhdHVzID0gcXVlcnlJbmZvLm5ldHdvcmtTdGF0dXMgfHwgZXhwb3J0cy5OZXR3b3JrU3RhdHVzLmxvYWRpbmc7IH1cbiAgICAgICAgICAgIHZhciBkYXRhID0gZGlmZi5yZXN1bHQ7XG4gICAgICAgICAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAgICAgICAgICFyZXR1cm5QYXJ0aWFsRGF0YSAmJlxuICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChkYXRhLCB7fSkpIHtcbiAgICAgICAgICAgICAgICBsb2dNaXNzaW5nRmllbGRFcnJvcnMoZGlmZi5taXNzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcm9tRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZih0c2xpYi5fX2Fzc2lnbih7IGRhdGE6IGRhdGEsIGxvYWRpbmc6IGlzTmV0d29ya1JlcXVlc3RJbkZsaWdodChuZXR3b3JrU3RhdHVzKSwgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyB9LCAoZGlmZi5jb21wbGV0ZSA/IG51bGwgOiB7IHBhcnRpYWw6IHRydWUgfSkpKTsgfTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIF90aGlzLnRyYW5zZm9ybShxdWVyeSkuaGFzRm9yY2VkUmVzb2x2ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxvY2FsU3RhdGUucnVuUmVzb2x2ZXJzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVSZXN1bHQ6IHsgZGF0YTogZGF0YSB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgb25seVJ1bkZvcmNlZFJlc29sdmVyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZCkgeyByZXR1cm4gZnJvbURhdGEocmVzb2x2ZWQuZGF0YSB8fCB2b2lkIDApOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcm9tRGF0YShkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhY2hlV3JpdGVCZWhhdmlvciA9IGZldGNoUG9saWN5ID09PSBcIm5vLWNhY2hlXCIgPyAwIDpcbiAgICAgICAgICAgIChuZXR3b3JrU3RhdHVzID09PSBleHBvcnRzLk5ldHdvcmtTdGF0dXMucmVmZXRjaCAmJlxuICAgICAgICAgICAgICAgIHJlZmV0Y2hXcml0ZVBvbGljeSAhPT0gXCJtZXJnZVwiKSA/IDFcbiAgICAgICAgICAgICAgICA6IDI7XG4gICAgICAgIHZhciByZXN1bHRzRnJvbUxpbmsgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRSZXN1bHRzRnJvbUxpbmsocXVlcnlJbmZvLCBjYWNoZVdyaXRlQmVoYXZpb3IsIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogdmFyaWFibGVzLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSxcbiAgICAgICAgICAgIGVycm9yUG9saWN5OiBlcnJvclBvbGljeSxcbiAgICAgICAgfSk7IH07XG4gICAgICAgIHZhciBzaG91bGROb3RpZnkgPSBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UgJiZcbiAgICAgICAgICAgIHR5cGVvZiBvbGROZXR3b3JrU3RhdHVzID09PSBcIm51bWJlclwiICYmXG4gICAgICAgICAgICBvbGROZXR3b3JrU3RhdHVzICE9PSBuZXR3b3JrU3RhdHVzICYmXG4gICAgICAgICAgICBpc05ldHdvcmtSZXF1ZXN0SW5GbGlnaHQobmV0d29ya1N0YXR1cyk7XG4gICAgICAgIHN3aXRjaCAoZmV0Y2hQb2xpY3kpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYXNlIFwiY2FjaGUtZmlyc3RcIjoge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmID0gcmVhZENhY2hlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tQ2FjaGUoZGlmZiwgcXVlcnlJbmZvLm1hcmtSZWFkeSgpKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblBhcnRpYWxEYXRhIHx8IHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLWFuZC1uZXR3b3JrXCI6IHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IHJlYWRDYWNoZSgpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmNvbXBsZXRlIHx8IHJldHVyblBhcnRpYWxEYXRhIHx8IHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShkaWZmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNGcm9tTGluaygpLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNhY2hlLW9ubHlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKHJlYWRDYWNoZSgpLCBxdWVyeUluZm8ubWFya1JlYWR5KCkpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjYXNlIFwibmV0d29yay1vbmx5XCI6XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21DYWNoZShyZWFkQ2FjaGUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUxpbmsoKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyZXN1bHRzRnJvbUxpbmsoKV07XG4gICAgICAgICAgICBjYXNlIFwibm8tY2FjaGVcIjpcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTm90aWZ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzRnJvbUNhY2hlKHF1ZXJ5SW5mby5nZXREaWZmKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c0Zyb21MaW5rKCksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbcmVzdWx0c0Zyb21MaW5rKCldO1xuICAgICAgICAgICAgY2FzZSBcInN0YW5kYnlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUuZ2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnlJZCkge1xuICAgICAgICBpZiAocXVlcnlJZCAmJiAhdGhpcy5xdWVyaWVzLmhhcyhxdWVyeUlkKSkge1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLnNldChxdWVyeUlkLCBuZXcgUXVlcnlJbmZvKHRoaXMsIHF1ZXJ5SWQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLmdldChxdWVyeUlkKTtcbiAgICB9O1xuICAgIFF1ZXJ5TWFuYWdlci5wcm90b3R5cGUucHJlcGFyZUNvbnRleHQgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgICAgICB2YXIgbmV3Q29udGV4dCA9IHRoaXMubG9jYWxTdGF0ZS5wcmVwYXJlQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBuZXdDb250ZXh0KSwgeyBjbGllbnRBd2FyZW5lc3M6IHRoaXMuY2xpZW50QXdhcmVuZXNzIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5TWFuYWdlcjtcbn0oKSk7XG5cbnZhciBoYXNTdWdnZXN0ZWREZXZ0b29scyA9IGZhbHNlO1xudmFyIEFwb2xsb0NsaWVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBvbGxvQ2xpZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB2YXIgdXJpID0gb3B0aW9ucy51cmksIGNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscywgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycywgY2FjaGUgPSBvcHRpb25zLmNhY2hlLCBfYSA9IG9wdGlvbnMuc3NyTW9kZSwgc3NyTW9kZSA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3NyRm9yY2VGZXRjaERlbGF5LCBzc3JGb3JjZUZldGNoRGVsYXkgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IG9wdGlvbnMuY29ubmVjdFRvRGV2VG9vbHMsIGNvbm5lY3RUb0RldlRvb2xzID0gX2MgPT09IHZvaWQgMCA/IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAhd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fICYmXG4gICAgICAgICAgICBfX0RFVl9fIDogX2MsIF9kID0gb3B0aW9ucy5xdWVyeURlZHVwbGljYXRpb24sIHF1ZXJ5RGVkdXBsaWNhdGlvbiA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIGRlZmF1bHRPcHRpb25zID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucywgX2UgPSBvcHRpb25zLmFzc3VtZUltbXV0YWJsZVJlc3VsdHMsIGFzc3VtZUltbXV0YWJsZVJlc3VsdHMgPSBfZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZSwgcmVzb2x2ZXJzID0gb3B0aW9ucy5yZXNvbHZlcnMsIHR5cGVEZWZzID0gb3B0aW9ucy50eXBlRGVmcywgZnJhZ21lbnRNYXRjaGVyID0gb3B0aW9ucy5mcmFnbWVudE1hdGNoZXIsIGNsaWVudEF3YXJlbmVzc05hbWUgPSBvcHRpb25zLm5hbWUsIGNsaWVudEF3YXJlbmVzc1ZlcnNpb24gPSBvcHRpb25zLnZlcnNpb247XG4gICAgICAgIHZhciBsaW5rID0gb3B0aW9ucy5saW5rO1xuICAgICAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgICAgIGxpbmsgPSB1cmlcbiAgICAgICAgICAgICAgICA/IG5ldyBodHRwLkh0dHBMaW5rKHsgdXJpOiB1cmksIGNyZWRlbnRpYWxzOiBjcmVkZW50aWFscywgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgIDogY29yZS5BcG9sbG9MaW5rLmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWNoZSkge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiVG8gaW5pdGlhbGl6ZSBBcG9sbG8gQ2xpZW50LCB5b3UgbXVzdCBzcGVjaWZ5IGEgJ2NhY2hlJyBwcm9wZXJ0eSBcIiArXG4gICAgICAgICAgICAgICAgXCJpbiB0aGUgb3B0aW9ucyBvYmplY3QuIFxcblwiICtcbiAgICAgICAgICAgICAgICBcIkZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlzaXQ6IGh0dHBzOi8vZ28uYXBvbGxvLmRldi9jL2RvY3NcIikgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig3KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzID0gc3NyTW9kZSB8fCBzc3JGb3JjZUZldGNoRGVsYXkgPiAwO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVkdXBsaWNhdGlvbiA9IHF1ZXJ5RGVkdXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMudHlwZURlZnMgPSB0eXBlRGVmcztcbiAgICAgICAgaWYgKHNzckZvcmNlRmV0Y2hEZWxheSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiAoX3RoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzID0gZmFsc2UpOyB9LCBzc3JGb3JjZUZldGNoRGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2F0Y2hRdWVyeSA9IHRoaXMud2F0Y2hRdWVyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm11dGF0ZSA9IHRoaXMubXV0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXRTdG9yZSA9IHRoaXMucmVzZXRTdG9yZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlRmV0Y2hPYnNlcnZhYmxlUXVlcmllcyA9IHRoaXMucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzLmJpbmQodGhpcyk7XG4gICAgICAgIGlmIChjb25uZWN0VG9EZXZUb29scyAmJiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgd2luZG93Ll9fQVBPTExPX0NMSUVOVF9fID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc1N1Z2dlc3RlZERldnRvb2xzICYmIF9fREVWX18pIHtcbiAgICAgICAgICAgIGhhc1N1Z2dlc3RlZERldnRvb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudCAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy50b3AgPT09IHdpbmRvdy5zZWxmICYmXG4gICAgICAgICAgICAgICAgIXdpbmRvdy5fX0FQT0xMT19ERVZUT09MU19HTE9CQUxfSE9PS19fKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdiA9IHdpbmRvdy5uYXZpZ2F0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHVhID0gbmF2ICYmIG5hdi51c2VyQWdlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKFwiQ2hyb21lL1wiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwb2xsby1jbGllbnQtZGV2ZWxvcGVyLXQvamRra25ra2JlYmJhcGlsZ29lY2NjaWdsa2ZibWJuZm1cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh1YS5pbmRleE9mKFwiRmlyZWZveC9cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJodHRwczovL2FkZG9ucy5tb3ppbGxhLm9yZy9lbi1VUy9maXJlZm94L2FkZG9uL2Fwb2xsby1kZXZlbG9wZXItdG9vbHMvXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmxvZyhcIkRvd25sb2FkIHRoZSBBcG9sbG8gRGV2VG9vbHMgZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwZXJpZW5jZTogXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUgPSBuZXcgTG9jYWxTdGF0ZSh7XG4gICAgICAgICAgICBjYWNoZTogY2FjaGUsXG4gICAgICAgICAgICBjbGllbnQ6IHRoaXMsXG4gICAgICAgICAgICByZXNvbHZlcnM6IHJlc29sdmVycyxcbiAgICAgICAgICAgIGZyYWdtZW50TWF0Y2hlcjogZnJhZ21lbnRNYXRjaGVyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIgPSBuZXcgUXVlcnlNYW5hZ2VyKHtcbiAgICAgICAgICAgIGNhY2hlOiB0aGlzLmNhY2hlLFxuICAgICAgICAgICAgbGluazogdGhpcy5saW5rLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgICAgICBxdWVyeURlZHVwbGljYXRpb246IHF1ZXJ5RGVkdXBsaWNhdGlvbixcbiAgICAgICAgICAgIHNzck1vZGU6IHNzck1vZGUsXG4gICAgICAgICAgICBjbGllbnRBd2FyZW5lc3M6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjbGllbnRBd2FyZW5lc3NOYW1lLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IGNsaWVudEF3YXJlbmVzc1ZlcnNpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9jYWxTdGF0ZTogdGhpcy5sb2NhbFN0YXRlLFxuICAgICAgICAgICAgYXNzdW1lSW1tdXRhYmxlUmVzdWx0czogYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyxcbiAgICAgICAgICAgIG9uQnJvYWRjYXN0OiBjb25uZWN0VG9EZXZUb29scyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGV2VG9vbHNIb29rQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGV2VG9vbHNIb29rQ2Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcmllczogX3RoaXMucXVlcnlNYW5hZ2VyLmdldFF1ZXJ5U3RvcmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IF90aGlzLnF1ZXJ5TWFuYWdlci5tdXRhdGlvblN0b3JlIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFXaXRoT3B0aW1pc3RpY1Jlc3VsdHM6IF90aGlzLmNhY2hlLmV4dHJhY3QodHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gOiB2b2lkIDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLnN0b3AoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud2F0Y2hRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1dGlsaXRpZXMubWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMud2F0Y2hRdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzICYmXG4gICAgICAgICAgICAob3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ25ldHdvcmstb25seScgfHxcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZldGNoUG9saWN5ID09PSAnY2FjaGUtYW5kLW5ldHdvcmsnKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBmZXRjaFBvbGljeTogJ2NhY2hlLWZpcnN0JyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIud2F0Y2hRdWVyeShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyeSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHV0aWxpdGllcy5tZXJnZU9wdGlvbnModGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyeSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wdGlvbnMuZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1hbmQtbmV0d29yaycsICdUaGUgY2FjaGUtYW5kLW5ldHdvcmsgZmV0Y2hQb2xpY3kgZG9lcyBub3Qgd29yayB3aXRoIGNsaWVudC5xdWVyeSwgYmVjYXVzZSAnICtcbiAgICAgICAgICAgICdjbGllbnQucXVlcnkgY2FuIG9ubHkgcmV0dXJuIGEgc2luZ2xlIHJlc3VsdC4gUGxlYXNlIHVzZSBjbGllbnQud2F0Y2hRdWVyeSAnICtcbiAgICAgICAgICAgICd0byByZWNlaXZlIG11bHRpcGxlIHJlc3VsdHMgZnJvbSB0aGUgY2FjaGUgYW5kIHRoZSBuZXR3b3JrLCBvciBjb25zaWRlciAnICtcbiAgICAgICAgICAgICd1c2luZyBhIGRpZmZlcmVudCBmZXRjaFBvbGljeSwgc3VjaCBhcyBjYWNoZS1maXJzdCBvciBuZXR3b3JrLW9ubHkuJykgOiBnbG9iYWxzLmludmFyaWFudChvcHRpb25zLmZldGNoUG9saWN5ICE9PSAnY2FjaGUtYW5kLW5ldHdvcmsnLCA4KTtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZU5ldHdvcmtGZXRjaGVzICYmIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiAnY2FjaGUtZmlyc3QnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5xdWVyeShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdXRpbGl0aWVzLm1lcmdlT3B0aW9ucyh0aGlzLmRlZmF1bHRPcHRpb25zLm11dGF0ZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLm11dGF0ZShvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNYW5hZ2VyLnN0YXJ0R3JhcGhRTFN1YnNjcmlwdGlvbihvcHRpb25zKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKG9wdGltaXN0aWMgPT09IHZvaWQgMCkgeyBvcHRpbWlzdGljID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUucmVhZFF1ZXJ5KG9wdGlvbnMsIG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWFkRnJhZ21lbnQgPSBmdW5jdGlvbiAob3B0aW9ucywgb3B0aW1pc3RpYykge1xuICAgICAgICBpZiAob3B0aW1pc3RpYyA9PT0gdm9pZCAwKSB7IG9wdGltaXN0aWMgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZWFkRnJhZ21lbnQob3B0aW9ucywgb3B0aW1pc3RpYyk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLndyaXRlUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhY2hlLndyaXRlUXVlcnkob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucXVlcnlNYW5hZ2VyLmJyb2FkY2FzdFF1ZXJpZXMoKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUud3JpdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2FjaGUud3JpdGVGcmFnbWVudChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5xdWVyeU1hbmFnZXIuYnJvYWRjYXN0UXVlcmllcygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5fX2FjdGlvbkhvb2tGb3JEZXZUb29scyA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB0aGlzLmRldlRvb2xzSG9va0NiID0gY2I7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLl9fcmVxdWVzdFJhdyA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmV4ZWN1dGUodGhpcy5saW5rLCBwYXlsb2FkKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVzZXRTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5xdWVyeU1hbmFnZXIuY2xlYXJTdG9yZSh7XG4gICAgICAgICAgICBkaXNjYXJkV2F0Y2hlczogZmFsc2UsXG4gICAgICAgIH0pOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcy5tYXAoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMoKTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmNsZWFyU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucXVlcnlNYW5hZ2VyLmNsZWFyU3RvcmUoe1xuICAgICAgICAgICAgZGlzY2FyZFdhdGNoZXM6IHRydWUsXG4gICAgICAgIH0pOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5hbGwoX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5tYXAoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KSk7IH0pO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5vblJlc2V0U3RvcmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5yZXNldFN0b3JlQ2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTdG9yZUNhbGxiYWNrcyA9IF90aGlzLnJlc2V0U3RvcmVDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYjsgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLm9uQ2xlYXJTdG9yZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhclN0b3JlQ2FsbGJhY2tzID0gX3RoaXMuY2xlYXJTdG9yZUNhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNiOyB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUucmVGZXRjaE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGVTdGFuZGJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TWFuYWdlci5yZUZldGNoT2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZVN0YW5kYnkpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZWZldGNoUXVlcmllcyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBtYXAgPSB0aGlzLnF1ZXJ5TWFuYWdlci5yZWZldGNoUXVlcmllcyhvcHRpb25zKTtcbiAgICAgICAgdmFyIHF1ZXJpZXMgPSBbXTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCwgb2JzUXVlcnkpIHtcbiAgICAgICAgICAgIHF1ZXJpZXMucHVzaChvYnNRdWVyeSk7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHQgPSBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgICAgICAgcmVzdWx0LnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgICAgICByZXN1bHQucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQuZGVidWcoXCJJbiBjbGllbnQucmVmZXRjaFF1ZXJpZXMsIFByb21pc2UuYWxsIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBlcnJvciBcIi5jb25jYXQoZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmdldE9ic2VydmFibGVRdWVyaWVzID0gZnVuY3Rpb24gKGluY2x1ZGUpIHtcbiAgICAgICAgaWYgKGluY2x1ZGUgPT09IHZvaWQgMCkgeyBpbmNsdWRlID0gXCJhY3RpdmVcIjsgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1hbmFnZXIuZ2V0T2JzZXJ2YWJsZVF1ZXJpZXMoaW5jbHVkZSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAob3B0aW1pc3RpYykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5leHRyYWN0KG9wdGltaXN0aWMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5yZXN0b3JlID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5yZXN0b3JlKHNlcmlhbGl6ZWRTdGF0ZSk7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLmFkZFJlc29sdmVycyA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0YXRlLmFkZFJlc29sdmVycyhyZXNvbHZlcnMpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRSZXNvbHZlcnMgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdGF0ZS5zZXRSZXNvbHZlcnMocmVzb2x2ZXJzKTtcbiAgICB9O1xuICAgIEFwb2xsb0NsaWVudC5wcm90b3R5cGUuZ2V0UmVzb2x2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0YXRlLmdldFJlc29sdmVycygpO1xuICAgIH07XG4gICAgQXBvbGxvQ2xpZW50LnByb3RvdHlwZS5zZXRMb2NhbFN0YXRlRnJhZ21lbnRNYXRjaGVyID0gZnVuY3Rpb24gKGZyYWdtZW50TWF0Y2hlcikge1xuICAgICAgICB0aGlzLmxvY2FsU3RhdGUuc2V0RnJhZ21lbnRNYXRjaGVyKGZyYWdtZW50TWF0Y2hlcik7XG4gICAgfTtcbiAgICBBcG9sbG9DbGllbnQucHJvdG90eXBlLnNldExpbmsgPSBmdW5jdGlvbiAobmV3TGluaykge1xuICAgICAgICB0aGlzLmxpbmsgPSB0aGlzLnF1ZXJ5TWFuYWdlci5saW5rID0gbmV3TGluaztcbiAgICB9O1xuICAgIHJldHVybiBBcG9sbG9DbGllbnQ7XG59KCkpO1xuXG50c0ludmFyaWFudC5zZXRWZXJib3NpdHkoZ2xvYmFscy5ERVYgPyBcImxvZ1wiIDogXCJzaWxlbnRcIik7XG5cbmV4cG9ydHMuQXBvbGxvQ2FjaGUgPSBjYWNoZS5BcG9sbG9DYWNoZTtcbmV4cG9ydHMuQ2FjaGUgPSBjYWNoZS5DYWNoZTtcbmV4cG9ydHMuSW5NZW1vcnlDYWNoZSA9IGNhY2hlLkluTWVtb3J5Q2FjaGU7XG5leHBvcnRzLk1pc3NpbmdGaWVsZEVycm9yID0gY2FjaGUuTWlzc2luZ0ZpZWxkRXJyb3I7XG5leHBvcnRzLmRlZmF1bHREYXRhSWRGcm9tT2JqZWN0ID0gY2FjaGUuZGVmYXVsdERhdGFJZEZyb21PYmplY3Q7XG5leHBvcnRzLm1ha2VWYXIgPSBjYWNoZS5tYWtlVmFyO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gdXRpbGl0aWVzLk9ic2VydmFibGU7XG5leHBvcnRzLmlzUmVmZXJlbmNlID0gdXRpbGl0aWVzLmlzUmVmZXJlbmNlO1xuZXhwb3J0cy5tYWtlUmVmZXJlbmNlID0gdXRpbGl0aWVzLm1ha2VSZWZlcmVuY2U7XG5leHBvcnRzLm1lcmdlT3B0aW9ucyA9IHV0aWxpdGllcy5tZXJnZU9wdGlvbnM7XG5leHBvcnRzLkFwb2xsb0Vycm9yID0gZXJyb3JzLkFwb2xsb0Vycm9yO1xuZXhwb3J0cy5pc0Fwb2xsb0Vycm9yID0gZXJyb3JzLmlzQXBvbGxvRXJyb3I7XG5leHBvcnRzLmZyb21FcnJvciA9IHV0aWxzLmZyb21FcnJvcjtcbmV4cG9ydHMuZnJvbVByb21pc2UgPSB1dGlscy5mcm9tUHJvbWlzZTtcbmV4cG9ydHMudGhyb3dTZXJ2ZXJFcnJvciA9IHV0aWxzLnRocm93U2VydmVyRXJyb3I7XG5leHBvcnRzLnRvUHJvbWlzZSA9IHV0aWxzLnRvUHJvbWlzZTtcbmV4cG9ydHMuc2V0TG9nVmVyYm9zaXR5ID0gdHNJbnZhcmlhbnQuc2V0VmVyYm9zaXR5O1xuZXhwb3J0cy5kaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBncmFwaHFsVGFnLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbmV4cG9ydHMuZGlzYWJsZUZyYWdtZW50V2FybmluZ3MgPSBncmFwaHFsVGFnLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzO1xuZXhwb3J0cy5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGdyYXBocWxUYWcuZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM7XG5leHBvcnRzLmdxbCA9IGdyYXBocWxUYWcuZ3FsO1xuZXhwb3J0cy5yZXNldENhY2hlcyA9IGdyYXBocWxUYWcucmVzZXRDYWNoZXM7XG5leHBvcnRzLkFwb2xsb0NsaWVudCA9IEFwb2xsb0NsaWVudDtcbmV4cG9ydHMuT2JzZXJ2YWJsZVF1ZXJ5ID0gT2JzZXJ2YWJsZVF1ZXJ5O1xuZm9yICh2YXIgayBpbiBjb3JlKSB7XG4gICAgaWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGNvcmVba107XG59XG5mb3IgKHZhciBrIGluIGh0dHApIHtcbiAgICBpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBleHBvcnRzW2tdID0gaHR0cFtrXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xucmVxdWlyZSgnLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMnKTtcblxuZnVuY3Rpb24gaXNBcG9sbG9FcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyLmhhc093blByb3BlcnR5KCdncmFwaFFMRXJyb3JzJyk7XG59XG52YXIgZ2VuZXJhdGVFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcbiAgICBpZiAodXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShlcnIuZ3JhcGhRTEVycm9ycykgfHwgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShlcnIuY2xpZW50RXJyb3JzKSkge1xuICAgICAgICB2YXIgZXJyb3JzID0gKGVyci5ncmFwaFFMRXJyb3JzIHx8IFtdKVxuICAgICAgICAgICAgLmNvbmNhdChlcnIuY2xpZW50RXJyb3JzIHx8IFtdKTtcbiAgICAgICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3JcbiAgICAgICAgICAgICAgICA/IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA6ICdFcnJvciBtZXNzYWdlIG5vdCBmb3VuZC4nO1xuICAgICAgICAgICAgbWVzc2FnZSArPSBcIlwiLmNvbmNhdChlcnJvck1lc3NhZ2UsIFwiXFxuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVyci5uZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgbWVzc2FnZSArPSBcIlwiLmNvbmNhdChlcnIubmV0d29ya0Vycm9yLm1lc3NhZ2UsIFwiXFxuXCIpO1xuICAgIH1cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXG4kLywgJycpO1xuICAgIHJldHVybiBtZXNzYWdlO1xufTtcbnZhciBBcG9sbG9FcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEFwb2xsb0Vycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFwb2xsb0Vycm9yKF9hKSB7XG4gICAgICAgIHZhciBncmFwaFFMRXJyb3JzID0gX2EuZ3JhcGhRTEVycm9ycywgY2xpZW50RXJyb3JzID0gX2EuY2xpZW50RXJyb3JzLCBuZXR3b3JrRXJyb3IgPSBfYS5uZXR3b3JrRXJyb3IsIGVycm9yTWVzc2FnZSA9IF9hLmVycm9yTWVzc2FnZSwgZXh0cmFJbmZvID0gX2EuZXh0cmFJbmZvO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlcnJvck1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmdyYXBoUUxFcnJvcnMgPSBncmFwaFFMRXJyb3JzIHx8IFtdO1xuICAgICAgICBfdGhpcy5jbGllbnRFcnJvcnMgPSBjbGllbnRFcnJvcnMgfHwgW107XG4gICAgICAgIF90aGlzLm5ldHdvcmtFcnJvciA9IG5ldHdvcmtFcnJvciB8fCBudWxsO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyb3JNZXNzYWdlIHx8IGdlbmVyYXRlRXJyb3JNZXNzYWdlKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZXh0cmFJbmZvID0gZXh0cmFJbmZvO1xuICAgICAgICBfdGhpcy5fX3Byb3RvX18gPSBBcG9sbG9FcnJvci5wcm90b3R5cGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEFwb2xsb0Vycm9yO1xufShFcnJvcikpO1xuXG5leHBvcnRzLkFwb2xsb0Vycm9yID0gQXBvbGxvRXJyb3I7XG5leHBvcnRzLmlzQXBvbGxvRXJyb3IgPSBpc0Fwb2xsb0Vycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIHBhc3N0aHJvdWdoKG9wLCBmb3J3YXJkKSB7XG4gICAgcmV0dXJuIChmb3J3YXJkID8gZm9yd2FyZChvcCkgOiB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpKTtcbn1cbmZ1bmN0aW9uIHRvTGluayhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nID8gbmV3IEFwb2xsb0xpbmsoaGFuZGxlcikgOiBoYW5kbGVyO1xufVxuZnVuY3Rpb24gaXNUZXJtaW5hdGluZyhsaW5rKSB7XG4gICAgcmV0dXJuIGxpbmsucmVxdWVzdC5sZW5ndGggPD0gMTtcbn1cbnZhciBMaW5rRXJyb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhMaW5rRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlua0Vycm9yKG1lc3NhZ2UsIGxpbmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIExpbmtFcnJvcjtcbn0oRXJyb3IpKTtcbnZhciBBcG9sbG9MaW5rID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcG9sbG9MaW5rKHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QpXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIH1cbiAgICBBcG9sbG9MaW5rLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTsgfSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmZyb20gPSBmdW5jdGlvbiAobGlua3MpIHtcbiAgICAgICAgaWYgKGxpbmtzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBBcG9sbG9MaW5rLmVtcHR5KCk7XG4gICAgICAgIHJldHVybiBsaW5rcy5tYXAodG9MaW5rKS5yZWR1Y2UoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHguY29uY2F0KHkpOyB9KTtcbiAgICB9O1xuICAgIEFwb2xsb0xpbmsuc3BsaXQgPSBmdW5jdGlvbiAodGVzdCwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgdmFyIGxlZnRMaW5rID0gdG9MaW5rKGxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRMaW5rID0gdG9MaW5rKHJpZ2h0IHx8IG5ldyBBcG9sbG9MaW5rKHBhc3N0aHJvdWdoKSk7XG4gICAgICAgIGlmIChpc1Rlcm1pbmF0aW5nKGxlZnRMaW5rKSAmJiBpc1Rlcm1pbmF0aW5nKHJpZ2h0TGluaykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3Qob3BlcmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICA/IGxlZnRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpXG4gICAgICAgICAgICAgICAgICAgIDogcmlnaHRMaW5rLnJlcXVlc3Qob3BlcmF0aW9uKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0KG9wZXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgPyBsZWZ0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKVxuICAgICAgICAgICAgICAgICAgICA6IHJpZ2h0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmV4ZWN1dGUgPSBmdW5jdGlvbiAobGluaywgb3BlcmF0aW9uKSB7XG4gICAgICAgIHJldHVybiAobGluay5yZXF1ZXN0KHV0aWxzLmNyZWF0ZU9wZXJhdGlvbihvcGVyYXRpb24uY29udGV4dCwgdXRpbHMudHJhbnNmb3JtT3BlcmF0aW9uKHV0aWxzLnZhbGlkYXRlT3BlcmF0aW9uKG9wZXJhdGlvbikpKSkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKSk7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLmNvbmNhdCA9IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIHZhciBmaXJzdExpbmsgPSB0b0xpbmsoZmlyc3QpO1xuICAgICAgICBpZiAoaXNUZXJtaW5hdGluZyhmaXJzdExpbmspKSB7XG4gICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4obmV3IExpbmtFcnJvcihcIllvdSBhcmUgY2FsbGluZyBjb25jYXQgb24gYSB0ZXJtaW5hdGluZyBsaW5rLCB3aGljaCB3aWxsIGhhdmUgbm8gZWZmZWN0XCIsIGZpcnN0TGluaykpO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TGluaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dExpbmsgPSB0b0xpbmsoc2Vjb25kKTtcbiAgICAgICAgaWYgKGlzVGVybWluYXRpbmcobmV4dExpbmspKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdExpbmsucmVxdWVzdChvcGVyYXRpb24sIGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gbmV4dExpbmsucmVxdWVzdChvcCkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTsgfSkgfHwgdXRpbGl0aWVzLk9ic2VydmFibGUub2YoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZpcnN0TGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0TGluay5yZXF1ZXN0KG9wLCBmb3J3YXJkKSB8fCB1dGlsaXRpZXMuT2JzZXJ2YWJsZS5vZigpO1xuICAgICAgICAgICAgICAgIH0pIHx8IHV0aWxpdGllcy5PYnNlcnZhYmxlLm9mKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwb2xsb0xpbmsucHJvdG90eXBlLnNwbGl0ID0gZnVuY3Rpb24gKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmNhdChBcG9sbG9MaW5rLnNwbGl0KHRlc3QsIGxlZnQsIHJpZ2h0IHx8IG5ldyBBcG9sbG9MaW5rKHBhc3N0aHJvdWdoKSkpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsb0xpbmsuY29uY2F0KHRoaXMsIG5leHQpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdyZXF1ZXN0IGlzIG5vdCBpbXBsZW1lbnRlZCcpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMTkpO1xuICAgIH07XG4gICAgQXBvbGxvTGluay5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgb2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG9ic2VydmVyICYmIG9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfTtcbiAgICBBcG9sbG9MaW5rLnByb3RvdHlwZS5zZXRPbkVycm9yID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHRoaXMub25FcnJvciA9IGZuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBBcG9sbG9MaW5rO1xufSgpKTtcblxudmFyIGVtcHR5ID0gQXBvbGxvTGluay5lbXB0eTtcblxudmFyIGZyb20gPSBBcG9sbG9MaW5rLmZyb207XG5cbnZhciBzcGxpdCA9IEFwb2xsb0xpbmsuc3BsaXQ7XG5cbnZhciBjb25jYXQgPSBBcG9sbG9MaW5rLmNvbmNhdDtcblxudmFyIGV4ZWN1dGUgPSBBcG9sbG9MaW5rLmV4ZWN1dGU7XG5cbmV4cG9ydHMuQXBvbGxvTGluayA9IEFwb2xsb0xpbms7XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuZXhlY3V0ZSA9IGV4ZWN1dGU7XG5leHBvcnRzLmZyb20gPSBmcm9tO1xuZXhwb3J0cy5zcGxpdCA9IHNwbGl0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uL2NvcmUnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2Uob3BlcmF0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIC50ZXh0KClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGJvZHlUZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShib2R5VGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdmFyIHBhcnNlRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICBwYXJzZUVycm9yLm5hbWUgPSAnU2VydmVyUGFyc2VFcnJvcic7XG4gICAgICAgICAgICBwYXJzZUVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICBwYXJzZUVycm9yLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgICBwYXJzZUVycm9yLmJvZHlUZXh0ID0gYm9keVRleHQ7XG4gICAgICAgICAgICB0aHJvdyBwYXJzZUVycm9yO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgICAgdXRpbHMudGhyb3dTZXJ2ZXJFcnJvcihyZXNwb25zZSwgcmVzdWx0LCBcIlJlc3BvbnNlIG5vdCBzdWNjZXNzZnVsOiBSZWNlaXZlZCBzdGF0dXMgY29kZSBcIi5jb25jYXQocmVzcG9uc2Uuc3RhdHVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3VsdCkgJiZcbiAgICAgICAgICAgICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwgJ2RhdGEnKSAmJlxuICAgICAgICAgICAgIWhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCAnZXJyb3JzJykpIHtcbiAgICAgICAgICAgIHV0aWxzLnRocm93U2VydmVyRXJyb3IocmVzcG9uc2UsIHJlc3VsdCwgXCJTZXJ2ZXIgcmVzcG9uc2Ugd2FzIG1pc3NpbmcgZm9yIHF1ZXJ5ICdcIi5jb25jYXQoQXJyYXkuaXNBcnJheShvcGVyYXRpb25zKVxuICAgICAgICAgICAgICAgID8gb3BlcmF0aW9ucy5tYXAoZnVuY3Rpb24gKG9wKSB7IHJldHVybiBvcC5vcGVyYXRpb25OYW1lOyB9KVxuICAgICAgICAgICAgICAgIDogb3BlcmF0aW9ucy5vcGVyYXRpb25OYW1lLCBcIicuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pOyB9O1xufVxuXG52YXIgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocCwgbGFiZWwpIHtcbiAgICB2YXIgc2VyaWFsaXplZDtcbiAgICB0cnkge1xuICAgICAgICBzZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkocCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHZhciBwYXJzZUVycm9yID0gX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiTmV0d29yayByZXF1ZXN0IGZhaWxlZC4gXCIuY29uY2F0KGxhYmVsLCBcIiBpcyBub3Qgc2VyaWFsaXphYmxlOiBcIikuY29uY2F0KGUubWVzc2FnZSkpIDogbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoMjEpO1xuICAgICAgICBwYXJzZUVycm9yLnBhcnNlRXJyb3IgPSBlO1xuICAgICAgICB0aHJvdyBwYXJzZUVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbn07XG5cbnZhciBkZWZhdWx0SHR0cE9wdGlvbnMgPSB7XG4gICAgaW5jbHVkZVF1ZXJ5OiB0cnVlLFxuICAgIGluY2x1ZGVFeHRlbnNpb25zOiBmYWxzZSxcbn07XG52YXIgZGVmYXVsdEhlYWRlcnMgPSB7XG4gICAgYWNjZXB0OiAnKi8qJyxcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbn07XG52YXIgZmFsbGJhY2tIdHRwQ29uZmlnID0ge1xuICAgIGh0dHA6IGRlZmF1bHRIdHRwT3B0aW9ucyxcbiAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyxcbiAgICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbn07XG52YXIgZGVmYXVsdFByaW50ZXIgPSBmdW5jdGlvbiAoYXN0LCBwcmludGVyKSB7IHJldHVybiBwcmludGVyKGFzdCk7IH07XG5mdW5jdGlvbiBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkob3BlcmF0aW9uLCBmYWxsYmFja0NvbmZpZykge1xuICAgIHZhciBjb25maWdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgY29uZmlnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgY29uZmlncy51bnNoaWZ0KGZhbGxiYWNrQ29uZmlnKTtcbiAgICByZXR1cm4gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwuYXBwbHkodm9pZCAwLCB0c2xpYi5fX3NwcmVhZEFycmF5KFtvcGVyYXRpb24sXG4gICAgICAgIGRlZmF1bHRQcmludGVyXSwgY29uZmlncywgZmFsc2UpKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsKG9wZXJhdGlvbiwgcHJpbnRlcikge1xuICAgIHZhciBjb25maWdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgY29uZmlnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICB2YXIgaHR0cCA9IHt9O1xuICAgIGNvbmZpZ3MuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIG9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIGNvbmZpZy5vcHRpb25zKSwgeyBoZWFkZXJzOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucy5oZWFkZXJzKSwgaGVhZGVyc1RvTG93ZXJDYXNlKGNvbmZpZy5oZWFkZXJzKSkgfSk7XG4gICAgICAgIGlmIChjb25maWcuY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY3JlZGVudGlhbHMgPSBjb25maWcuY3JlZGVudGlhbHM7XG4gICAgICAgIH1cbiAgICAgICAgaHR0cCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBodHRwKSwgY29uZmlnLmh0dHApO1xuICAgIH0pO1xuICAgIHZhciBvcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUsIGV4dGVuc2lvbnMgPSBvcGVyYXRpb24uZXh0ZW5zaW9ucywgdmFyaWFibGVzID0gb3BlcmF0aW9uLnZhcmlhYmxlcywgcXVlcnkgPSBvcGVyYXRpb24ucXVlcnk7XG4gICAgdmFyIGJvZHkgPSB7IG9wZXJhdGlvbk5hbWU6IG9wZXJhdGlvbk5hbWUsIHZhcmlhYmxlczogdmFyaWFibGVzIH07XG4gICAgaWYgKGh0dHAuaW5jbHVkZUV4dGVuc2lvbnMpXG4gICAgICAgIGJvZHkuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG4gICAgaWYgKGh0dHAuaW5jbHVkZVF1ZXJ5KVxuICAgICAgICBib2R5LnF1ZXJ5ID0gcHJpbnRlcihxdWVyeSwgZ3JhcGhxbC5wcmludCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgYm9keTogYm9keSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaGVhZGVyc1RvTG93ZXJDYXNlKGhlYWRlcnMpIHtcbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgICB2YXIgbm9ybWFsaXplZF8xID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgT2JqZWN0LmtleXMoT2JqZWN0KGhlYWRlcnMpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkXzFbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGhlYWRlcnNbbmFtZV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplZF8xO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVycztcbn1cblxudmFyIGNoZWNrRmV0Y2hlciA9IGZ1bmN0aW9uIChmZXRjaGVyKSB7XG4gICAgaWYgKCFmZXRjaGVyICYmIHR5cGVvZiBmZXRjaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiXFxuXFxcImZldGNoXFxcIiBoYXMgbm90IGJlZW4gZm91bmQgZ2xvYmFsbHkgYW5kIG5vIGZldGNoZXIgaGFzIGJlZW4gY29uZmlndXJlZC4gVG8gZml4IHRoaXMsIGluc3RhbGwgYSBmZXRjaCBwYWNrYWdlIChsaWtlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2Nyb3NzLWZldGNoKSwgaW5zdGFudGlhdGUgdGhlIGZldGNoZXIsIGFuZCBwYXNzIGl0IGludG8geW91ciBIdHRwTGluayBjb25zdHJ1Y3Rvci4gRm9yIGV4YW1wbGU6XFxuXFxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xcbiAgbGluazogbmV3IEh0dHBMaW5rKHsgdXJpOiAnL2dyYXBocWwnLCBmZXRjaCB9KVxcbn0pO1xcbiAgICBcIikgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcigyMCk7XG4gICAgfVxufTtcblxudmFyIGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgQWJvcnRDb250cm9sbGVyID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuIHsgY29udHJvbGxlcjogZmFsc2UsIHNpZ25hbDogZmFsc2UgfTtcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG4gICAgcmV0dXJuIHsgY29udHJvbGxlcjogY29udHJvbGxlciwgc2lnbmFsOiBzaWduYWwgfTtcbn07XG5cbnZhciBzZWxlY3RVUkkgPSBmdW5jdGlvbiAob3BlcmF0aW9uLCBmYWxsYmFja1VSSSkge1xuICAgIHZhciBjb250ZXh0ID0gb3BlcmF0aW9uLmdldENvbnRleHQoKTtcbiAgICB2YXIgY29udGV4dFVSSSA9IGNvbnRleHQudXJpO1xuICAgIGlmIChjb250ZXh0VVJJKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0VVJJO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZmFsbGJhY2tVUkkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrVVJJKG9wZXJhdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tVUkkgfHwgJy9ncmFwaHFsJztcbiAgICB9XG59O1xuXG5mdW5jdGlvbiByZXdyaXRlVVJJRm9yR0VUKGNob3NlblVSSSwgYm9keSkge1xuICAgIHZhciBxdWVyeVBhcmFtcyA9IFtdO1xuICAgIHZhciBhZGRRdWVyeVBhcmFtID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMucHVzaChcIlwiLmNvbmNhdChrZXksIFwiPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkpO1xuICAgIH07XG4gICAgaWYgKCdxdWVyeScgaW4gYm9keSkge1xuICAgICAgICBhZGRRdWVyeVBhcmFtKCdxdWVyeScsIGJvZHkucXVlcnkpO1xuICAgIH1cbiAgICBpZiAoYm9keS5vcGVyYXRpb25OYW1lKSB7XG4gICAgICAgIGFkZFF1ZXJ5UGFyYW0oJ29wZXJhdGlvbk5hbWUnLCBib2R5Lm9wZXJhdGlvbk5hbWUpO1xuICAgIH1cbiAgICBpZiAoYm9keS52YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRWYXJpYWJsZXMgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkVmFyaWFibGVzID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoYm9keS52YXJpYWJsZXMsICdWYXJpYWJsZXMgbWFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBhcnNlRXJyb3I6IHBhcnNlRXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBhZGRRdWVyeVBhcmFtKCd2YXJpYWJsZXMnLCBzZXJpYWxpemVkVmFyaWFibGVzKTtcbiAgICB9XG4gICAgaWYgKGJvZHkuZXh0ZW5zaW9ucykge1xuICAgICAgICB2YXIgc2VyaWFsaXplZEV4dGVuc2lvbnMgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkRXh0ZW5zaW9ucyA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHkuZXh0ZW5zaW9ucywgJ0V4dGVuc2lvbnMgbWFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBhcnNlRXJyb3I6IHBhcnNlRXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICBhZGRRdWVyeVBhcmFtKCdleHRlbnNpb25zJywgc2VyaWFsaXplZEV4dGVuc2lvbnMpO1xuICAgIH1cbiAgICB2YXIgZnJhZ21lbnQgPSAnJywgcHJlRnJhZ21lbnQgPSBjaG9zZW5VUkk7XG4gICAgdmFyIGZyYWdtZW50U3RhcnQgPSBjaG9zZW5VUkkuaW5kZXhPZignIycpO1xuICAgIGlmIChmcmFnbWVudFN0YXJ0ICE9PSAtMSkge1xuICAgICAgICBmcmFnbWVudCA9IGNob3NlblVSSS5zdWJzdHIoZnJhZ21lbnRTdGFydCk7XG4gICAgICAgIHByZUZyYWdtZW50ID0gY2hvc2VuVVJJLnN1YnN0cigwLCBmcmFnbWVudFN0YXJ0KTtcbiAgICB9XG4gICAgdmFyIHF1ZXJ5UGFyYW1zUHJlZml4ID0gcHJlRnJhZ21lbnQuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcbiAgICB2YXIgbmV3VVJJID0gcHJlRnJhZ21lbnQgKyBxdWVyeVBhcmFtc1ByZWZpeCArIHF1ZXJ5UGFyYW1zLmpvaW4oJyYnKSArIGZyYWdtZW50O1xuICAgIHJldHVybiB7IG5ld1VSSTogbmV3VVJJIH07XG59XG5cbnZhciBiYWNrdXBGZXRjaCA9IHV0aWxpdGllcy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaDsgfSk7XG52YXIgY3JlYXRlSHR0cExpbmsgPSBmdW5jdGlvbiAobGlua09wdGlvbnMpIHtcbiAgICBpZiAobGlua09wdGlvbnMgPT09IHZvaWQgMCkgeyBsaW5rT3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gbGlua09wdGlvbnMudXJpLCB1cmkgPSBfYSA9PT0gdm9pZCAwID8gJy9ncmFwaHFsJyA6IF9hLCBwcmVmZXJyZWRGZXRjaCA9IGxpbmtPcHRpb25zLmZldGNoLCBfYiA9IGxpbmtPcHRpb25zLnByaW50LCBwcmludCA9IF9iID09PSB2b2lkIDAgPyBkZWZhdWx0UHJpbnRlciA6IF9iLCBpbmNsdWRlRXh0ZW5zaW9ucyA9IGxpbmtPcHRpb25zLmluY2x1ZGVFeHRlbnNpb25zLCB1c2VHRVRGb3JRdWVyaWVzID0gbGlua09wdGlvbnMudXNlR0VURm9yUXVlcmllcywgX2MgPSBsaW5rT3B0aW9ucy5pbmNsdWRlVW51c2VkVmFyaWFibGVzLCBpbmNsdWRlVW51c2VkVmFyaWFibGVzID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIHJlcXVlc3RPcHRpb25zID0gdHNsaWIuX19yZXN0KGxpbmtPcHRpb25zLCBbXCJ1cmlcIiwgXCJmZXRjaFwiLCBcInByaW50XCIsIFwiaW5jbHVkZUV4dGVuc2lvbnNcIiwgXCJ1c2VHRVRGb3JRdWVyaWVzXCIsIFwiaW5jbHVkZVVudXNlZFZhcmlhYmxlc1wiXSk7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY2hlY2tGZXRjaGVyKHByZWZlcnJlZEZldGNoIHx8IGJhY2t1cEZldGNoKTtcbiAgICB9XG4gICAgdmFyIGxpbmtDb25maWcgPSB7XG4gICAgICAgIGh0dHA6IHsgaW5jbHVkZUV4dGVuc2lvbnM6IGluY2x1ZGVFeHRlbnNpb25zIH0sXG4gICAgICAgIG9wdGlvbnM6IHJlcXVlc3RPcHRpb25zLmZldGNoT3B0aW9ucyxcbiAgICAgICAgY3JlZGVudGlhbHM6IHJlcXVlc3RPcHRpb25zLmNyZWRlbnRpYWxzLFxuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBjb3JlLkFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICB2YXIgY2hvc2VuVVJJID0gc2VsZWN0VVJJKG9wZXJhdGlvbiwgdXJpKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBvcGVyYXRpb24uZ2V0Q29udGV4dCgpO1xuICAgICAgICB2YXIgY2xpZW50QXdhcmVuZXNzSGVhZGVycyA9IHt9O1xuICAgICAgICBpZiAoY29udGV4dC5jbGllbnRBd2FyZW5lc3MpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGNvbnRleHQuY2xpZW50QXdhcmVuZXNzLCBuYW1lXzEgPSBfYS5uYW1lLCB2ZXJzaW9uID0gX2EudmVyc2lvbjtcbiAgICAgICAgICAgIGlmIChuYW1lXzEpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBd2FyZW5lc3NIZWFkZXJzWydhcG9sbG9ncmFwaHFsLWNsaWVudC1uYW1lJ10gPSBuYW1lXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGNsaWVudEF3YXJlbmVzc0hlYWRlcnNbJ2Fwb2xsb2dyYXBocWwtY2xpZW50LXZlcnNpb24nXSA9IHZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHRIZWFkZXJzID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNsaWVudEF3YXJlbmVzc0hlYWRlcnMpLCBjb250ZXh0LmhlYWRlcnMpO1xuICAgICAgICB2YXIgY29udGV4dENvbmZpZyA9IHtcbiAgICAgICAgICAgIGh0dHA6IGNvbnRleHQuaHR0cCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGNvbnRleHQuZmV0Y2hPcHRpb25zLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IGNvbnRleHQuY3JlZGVudGlhbHMsXG4gICAgICAgICAgICBoZWFkZXJzOiBjb250ZXh0SGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9iID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWwob3BlcmF0aW9uLCBwcmludCwgZmFsbGJhY2tIdHRwQ29uZmlnLCBsaW5rQ29uZmlnLCBjb250ZXh0Q29uZmlnKSwgb3B0aW9ucyA9IF9iLm9wdGlvbnMsIGJvZHkgPSBfYi5ib2R5O1xuICAgICAgICBpZiAoYm9keS52YXJpYWJsZXMgJiYgIWluY2x1ZGVVbnVzZWRWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHZhciB1bnVzZWROYW1lc18xID0gbmV3IFNldChPYmplY3Qua2V5cyhib2R5LnZhcmlhYmxlcykpO1xuICAgICAgICAgICAgZ3JhcGhxbC52aXNpdChvcGVyYXRpb24ucXVlcnksIHtcbiAgICAgICAgICAgICAgICBWYXJpYWJsZTogZnVuY3Rpb24gKG5vZGUsIF9rZXksIHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5raW5kICE9PSAnVmFyaWFibGVEZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW51c2VkTmFtZXNfMS5kZWxldGUobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh1bnVzZWROYW1lc18xLnNpemUpIHtcbiAgICAgICAgICAgICAgICBib2R5LnZhcmlhYmxlcyA9IHRzbGliLl9fYXNzaWduKHt9LCBib2R5LnZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgdW51c2VkTmFtZXNfMS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBib2R5LnZhcmlhYmxlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udHJvbGxlcjtcbiAgICAgICAgaWYgKCFvcHRpb25zLnNpZ25hbCkge1xuICAgICAgICAgICAgdmFyIF9jID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQoKSwgX2NvbnRyb2xsZXIgPSBfYy5jb250cm9sbGVyLCBzaWduYWwgPSBfYy5zaWduYWw7XG4gICAgICAgICAgICBjb250cm9sbGVyID0gX2NvbnRyb2xsZXI7XG4gICAgICAgICAgICBpZiAoY29udHJvbGxlcilcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNpZ25hbCA9IHNpZ25hbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmaW5pdGlvbklzTXV0YXRpb24gPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIGQub3BlcmF0aW9uID09PSAnbXV0YXRpb24nO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodXNlR0VURm9yUXVlcmllcyAmJlxuICAgICAgICAgICAgIW9wZXJhdGlvbi5xdWVyeS5kZWZpbml0aW9ucy5zb21lKGRlZmluaXRpb25Jc011dGF0aW9uKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICB2YXIgX2QgPSByZXdyaXRlVVJJRm9yR0VUKGNob3NlblVSSSwgYm9keSksIG5ld1VSSSA9IF9kLm5ld1VSSSwgcGFyc2VFcnJvciA9IF9kLnBhcnNlRXJyb3I7XG4gICAgICAgICAgICBpZiAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaG9zZW5VUkkgPSBuZXdVUkk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGJvZHksICdQYXlsb2FkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mcm9tRXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyB1dGlsaXRpZXMuT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RmV0Y2ggPSBwcmVmZXJyZWRGZXRjaCB8fCB1dGlsaXRpZXMubWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2g7IH0pIHx8IGJhY2t1cEZldGNoO1xuICAgICAgICAgICAgY3VycmVudEZldGNoKGNob3NlblVSSSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24uc2V0Q29udGV4dCh7IHJlc3BvbnNlOiByZXNwb25zZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2Uob3BlcmF0aW9uKSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChlcnIucmVzdWx0ICYmIGVyci5yZXN1bHQuZXJyb3JzICYmIGVyci5yZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGVyci5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbnZhciBIdHRwTGluayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEh0dHBMaW5rLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEh0dHBMaW5rKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY3JlYXRlSHR0cExpbmsob3B0aW9ucykucmVxdWVzdCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEh0dHBMaW5rO1xufShjb3JlLkFwb2xsb0xpbmspKTtcblxuZXhwb3J0cy5IdHRwTGluayA9IEh0dHBMaW5rO1xuZXhwb3J0cy5jaGVja0ZldGNoZXIgPSBjaGVja0ZldGNoZXI7XG5leHBvcnRzLmNyZWF0ZUh0dHBMaW5rID0gY3JlYXRlSHR0cExpbms7XG5leHBvcnRzLmNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQ7XG5leHBvcnRzLmRlZmF1bHRQcmludGVyID0gZGVmYXVsdFByaW50ZXI7XG5leHBvcnRzLmZhbGxiYWNrSHR0cENvbmZpZyA9IGZhbGxiYWNrSHR0cENvbmZpZztcbmV4cG9ydHMucGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZSA9IHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2U7XG5leHBvcnRzLnJld3JpdGVVUklGb3JHRVQgPSByZXdyaXRlVVJJRm9yR0VUO1xuZXhwb3J0cy5zZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHk7XG5leHBvcnRzLnNlbGVjdEh0dHBPcHRpb25zQW5kQm9keUludGVybmFsID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5SW50ZXJuYWw7XG5leHBvcnRzLnNlbGVjdFVSSSA9IHNlbGVjdFVSSTtcbmV4cG9ydHMuc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uL2NvcmUnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuLi8uLi9lcnJvcnMnKTtcblxuZnVuY3Rpb24gaXNMaWtlQ2xvc2VFdmVudCh2YWwpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzTm9uTnVsbE9iamVjdCh2YWwpICYmICdjb2RlJyBpbiB2YWwgJiYgJ3JlYXNvbicgaW4gdmFsO1xufVxudmFyIEdyYXBoUUxXc0xpbmsgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliLl9fZXh0ZW5kcyhHcmFwaFFMV3NMaW5rLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdyYXBoUUxXc0xpbmsoY2xpZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBHcmFwaFFMV3NMaW5rLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IHV0aWxpdGllcy5PYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNsaWVudC5zdWJzY3JpYmUodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG9wZXJhdGlvbiksIHsgcXVlcnk6IGdyYXBocWwucHJpbnQob3BlcmF0aW9uLnF1ZXJ5KSB9KSwge1xuICAgICAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGlrZUNsb3NlRXZlbnQoZXJyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcihcIlNvY2tldCBjbG9zZWQgd2l0aCBldmVudCBcIi5jb25jYXQoZXJyLmNvZGUsIFwiIFwiKS5jb25jYXQoZXJyLnJlYXNvbiB8fCBcIlwiKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvcihuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IEFycmF5LmlzQXJyYXkoZXJyKSA/IGVyciA6IFtlcnJdLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBHcmFwaFFMV3NMaW5rO1xufShjb3JlLkFwb2xsb0xpbmspKTtcblxuZXhwb3J0cy5HcmFwaFFMV3NMaW5rID0gR3JhcGhRTFdzTGluaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmlwdGlvbnMuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xuXG5mdW5jdGlvbiBmcm9tRXJyb3IoZXJyb3JWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yVmFsdWUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b1Byb21pc2Uob2JzZXJ2YWJsZSkge1xuICAgIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX19ERVZfXyAmJiBnbG9iYWxzLmludmFyaWFudC53YXJuKFwiUHJvbWlzZSBXcmFwcGVyIGRvZXMgbm90IHN1cHBvcnQgbXVsdGlwbGUgcmVzdWx0cyBmcm9tIE9ic2VydmFibGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZnJvbVByb21pc2UocHJvbWlzZSkge1xuICAgIHJldHVybiBuZXcgdXRpbGl0aWVzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbn1cblxudmFyIHRocm93U2VydmVyRXJyb3IgPSBmdW5jdGlvbiAocmVzcG9uc2UsIHJlc3VsdCwgbWVzc2FnZSkge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvci5uYW1lID0gJ1NlcnZlckVycm9yJztcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgZXJyb3IucmVzdWx0ID0gcmVzdWx0O1xuICAgIHRocm93IGVycm9yO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVPcGVyYXRpb24ob3BlcmF0aW9uKSB7XG4gICAgdmFyIE9QRVJBVElPTl9GSUVMRFMgPSBbXG4gICAgICAgICdxdWVyeScsXG4gICAgICAgICdvcGVyYXRpb25OYW1lJyxcbiAgICAgICAgJ3ZhcmlhYmxlcycsXG4gICAgICAgICdleHRlbnNpb25zJyxcbiAgICAgICAgJ2NvbnRleHQnLFxuICAgIF07XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVtfaV07XG4gICAgICAgIGlmIChPUEVSQVRJT05fRklFTERTLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcImlsbGVnYWwgYXJndW1lbnQ6IFwiLmNvbmNhdChrZXkpKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDI0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcGVyYXRpb24oc3RhcnRpbmcsIG9wZXJhdGlvbikge1xuICAgIHZhciBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24oe30sIHN0YXJ0aW5nKTtcbiAgICB2YXIgc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29udGV4dCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBjb250ZXh0KSwgbmV4dChjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpLCBuZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodHNsaWIuX19hc3NpZ24oe30sIGNvbnRleHQpKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3BlcmF0aW9uLCAnc2V0Q29udGV4dCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBzZXRDb250ZXh0LFxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcGVyYXRpb24sICdnZXRDb250ZXh0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGdldENvbnRleHQsXG4gICAgfSk7XG4gICAgcmV0dXJuIG9wZXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciB0cmFuc2Zvcm1lZE9wZXJhdGlvbiA9IHtcbiAgICAgICAgdmFyaWFibGVzOiBvcGVyYXRpb24udmFyaWFibGVzIHx8IHt9LFxuICAgICAgICBleHRlbnNpb25zOiBvcGVyYXRpb24uZXh0ZW5zaW9ucyB8fCB7fSxcbiAgICAgICAgb3BlcmF0aW9uTmFtZTogb3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUsXG4gICAgICAgIHF1ZXJ5OiBvcGVyYXRpb24ucXVlcnksXG4gICAgfTtcbiAgICBpZiAoIXRyYW5zZm9ybWVkT3BlcmF0aW9uLm9wZXJhdGlvbk5hbWUpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRPcGVyYXRpb24ub3BlcmF0aW9uTmFtZSA9XG4gICAgICAgICAgICB0eXBlb2YgdHJhbnNmb3JtZWRPcGVyYXRpb24ucXVlcnkgIT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyB1dGlsaXRpZXMuZ2V0T3BlcmF0aW9uTmFtZSh0cmFuc2Zvcm1lZE9wZXJhdGlvbi5xdWVyeSkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkT3BlcmF0aW9uO1xufVxuXG5leHBvcnRzLmNyZWF0ZU9wZXJhdGlvbiA9IGNyZWF0ZU9wZXJhdGlvbjtcbmV4cG9ydHMuZnJvbUVycm9yID0gZnJvbUVycm9yO1xuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IGZyb21Qcm9taXNlO1xuZXhwb3J0cy50aHJvd1NlcnZlckVycm9yID0gdGhyb3dTZXJ2ZXJFcnJvcjtcbmV4cG9ydHMudG9Qcm9taXNlID0gdG9Qcm9taXNlO1xuZXhwb3J0cy50cmFuc2Zvcm1PcGVyYXRpb24gPSB0cmFuc2Zvcm1PcGVyYXRpb247XG5leHBvcnRzLnZhbGlkYXRlT3BlcmF0aW9uID0gdmFsaWRhdGVPcGVyYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnLi9jb3JlJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCcuL3JlYWN0Jyk7XG5cblxuXG5mb3IgKHZhciBrIGluIGNvcmUpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGNvcmVba107XG59XG5mb3IgKHZhciBrIGluIHJlYWN0KSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIGV4cG9ydHNba10gPSByZWFjdFtrXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY2pzLm1hcFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBnbG9iYWwsIGRlZmluZSwgU3lzdGVtLCBSZWZsZWN0LCBQcm9taXNlICovXHJcbnZhciBfX2V4dGVuZHM7XHJcbnZhciBfX2Fzc2lnbjtcclxudmFyIF9fcmVzdDtcclxudmFyIF9fZGVjb3JhdGU7XHJcbnZhciBfX3BhcmFtO1xyXG52YXIgX19tZXRhZGF0YTtcclxudmFyIF9fYXdhaXRlcjtcclxudmFyIF9fZ2VuZXJhdG9yO1xyXG52YXIgX19leHBvcnRTdGFyO1xyXG52YXIgX192YWx1ZXM7XHJcbnZhciBfX3JlYWQ7XHJcbnZhciBfX3NwcmVhZDtcclxudmFyIF9fc3ByZWFkQXJyYXlzO1xyXG52YXIgX19zcHJlYWRBcnJheTtcclxudmFyIF9fYXdhaXQ7XHJcbnZhciBfX2FzeW5jR2VuZXJhdG9yO1xyXG52YXIgX19hc3luY0RlbGVnYXRvcjtcclxudmFyIF9fYXN5bmNWYWx1ZXM7XHJcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdDtcclxudmFyIF9faW1wb3J0U3RhcjtcclxudmFyIF9faW1wb3J0RGVmYXVsdDtcclxudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ7XHJcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xyXG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEluO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nO1xyXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuICAgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHR5cGVvZiB0aGlzID09PSBcIm9iamVjdFwiID8gdGhpcyA6IHt9O1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFwidHNsaWJcIiwgW1wiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHsgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihleHBvcnRzKSkpOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihtb2R1bGUuZXhwb3J0cykpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoY3JlYXRlRXhwb3J0ZXIocm9vdCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhwb3J0ZXIoZXhwb3J0cywgcHJldmlvdXMpIHtcclxuICAgICAgICBpZiAoZXhwb3J0cyAhPT0gcm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCB2KSB7IHJldHVybiBleHBvcnRzW2lkXSA9IHByZXZpb3VzID8gcHJldmlvdXMoaWQsIHYpIDogdjsgfTtcclxuICAgIH1cclxufSlcclxuKGZ1bmN0aW9uIChleHBvcnRlcikge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3Jlc3QgPSBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgICAgIHZhciB0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fZGVjb3JhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgICAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICAgICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgICAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3BhcmFtID0gZnVuY3Rpb24gKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX21ldGFkYXRhID0gZnVuY3Rpb24gKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hd2FpdGVyID0gZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fZ2VuZXJhdG9yID0gZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgICAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX19leHBvcnRTdGFyID0gZnVuY3Rpb24obSwgbykge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxuICAgIH07XHJcblxyXG4gICAgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbiAgICB9KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICAgICAgb1trMl0gPSBtW2tdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX192YWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICAgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcmVhZCA9IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgICBfX3NwcmVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgICBfX3NwcmVhZEFycmF5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fc3ByZWFkQXJyYXkgPSBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcclxuICAgICAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2F3YWl0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxuICAgIH07XHJcblxyXG4gICAgX19hc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICAgICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7ICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgICAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXN5bmNEZWxlZ2F0b3IgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBpLCBwO1xyXG4gICAgICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX2FzeW5jVmFsdWVzID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICAgICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgICAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgICAgICByZXR1cm4gY29va2VkO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG4gICAgfSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICAgICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2ltcG9ydFN0YXIgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgX19pbXBvcnREZWZhdWx0ID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgICAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgICAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICAgICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRJbiA9IGZ1bmN0aW9uIChzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnRlcihcIl9fZXh0ZW5kc1wiLCBfX2V4dGVuZHMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2Fzc2lnblwiLCBfX2Fzc2lnbik7XHJcbiAgICBleHBvcnRlcihcIl9fcmVzdFwiLCBfX3Jlc3QpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2RlY29yYXRlXCIsIF9fZGVjb3JhdGUpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3BhcmFtXCIsIF9fcGFyYW0pO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ldGFkYXRhXCIsIF9fbWV0YWRhdGEpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0ZXJcIiwgX19hd2FpdGVyKTtcclxuICAgIGV4cG9ydGVyKFwiX19nZW5lcmF0b3JcIiwgX19nZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2V4cG9ydFN0YXJcIiwgX19leHBvcnRTdGFyKTtcclxuICAgIGV4cG9ydGVyKFwiX19jcmVhdGVCaW5kaW5nXCIsIF9fY3JlYXRlQmluZGluZyk7XHJcbiAgICBleHBvcnRlcihcIl9fdmFsdWVzXCIsIF9fdmFsdWVzKTtcclxuICAgIGV4cG9ydGVyKFwiX19yZWFkXCIsIF9fcmVhZCk7XHJcbiAgICBleHBvcnRlcihcIl9fc3ByZWFkXCIsIF9fc3ByZWFkKTtcclxuICAgIGV4cG9ydGVyKFwiX19zcHJlYWRBcnJheXNcIiwgX19zcHJlYWRBcnJheXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3NwcmVhZEFycmF5XCIsIF9fc3ByZWFkQXJyYXkpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0XCIsIF9fYXdhaXQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jR2VuZXJhdG9yXCIsIF9fYXN5bmNHZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jRGVsZWdhdG9yXCIsIF9fYXN5bmNEZWxlZ2F0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jVmFsdWVzXCIsIF9fYXN5bmNWYWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ha2VUZW1wbGF0ZU9iamVjdFwiLCBfX21ha2VUZW1wbGF0ZU9iamVjdCk7XHJcbiAgICBleHBvcnRlcihcIl9faW1wb3J0U3RhclwiLCBfX2ltcG9ydFN0YXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2ltcG9ydERlZmF1bHRcIiwgX19pbXBvcnREZWZhdWx0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZEdldFwiLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZFNldFwiLCBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZEluXCIsIF9fY2xhc3NQcml2YXRlRmllbGRJbik7XHJcbn0pO1xyXG4iLCJleHBvcnRzLk9ic2VydmFibGUgPSByZXF1aXJlKFwiemVuLW9ic2VydmFibGUvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBpZiAoZSkge1xuICAgICAgICBmb3IgKHZhciBrIGluIGUpIHtcbiAgICAgICAgICAgIG5ba10gPSBlW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5bXCJkZWZhdWx0XCJdID0gZTtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShuKTtcbn1cblxudmFyIFJlYWN0X19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UoUmVhY3QpO1xuXG52YXIgY29udGV4dEtleSA9IHV0aWxpdGllcy5jYW5Vc2VTeW1ib2xcbiAgICA/IFN5bWJvbC5mb3IoJ19fQVBPTExPX0NPTlRFWFRfXycpXG4gICAgOiAnX19BUE9MTE9fQ09OVEVYVF9fJztcbmZ1bmN0aW9uIGdldEFwb2xsb0NvbnRleHQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSBSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUNvbnRleHRbY29udGV4dEtleV07XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUNvbnRleHQsIGNvbnRleHRLZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiBjb250ZXh0ID0gUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVDb250ZXh0KHt9KSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dC5kaXNwbGF5TmFtZSA9ICdBcG9sbG9Db250ZXh0JztcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBBcG9sbG9Db25zdW1lciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiAoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChjb250ZXh0ICYmIGNvbnRleHQuY2xpZW50LCAnQ291bGQgbm90IGZpbmQgXCJjbGllbnRcIiBpbiB0aGUgY29udGV4dCBvZiBBcG9sbG9Db25zdW1lci4gJyArXG4gICAgICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQgJiYgY29udGV4dC5jbGllbnQsIDI1KTtcbiAgICAgICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKGNvbnRleHQuY2xpZW50KTtcbiAgICB9KSk7XG59O1xuXG52YXIgQXBvbGxvUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xpZW50ID0gX2EuY2xpZW50LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgIHJldHVybiAoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIGlmIChjbGllbnQgJiYgY29udGV4dC5jbGllbnQgIT09IGNsaWVudCkge1xuICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHsgY2xpZW50OiBjbGllbnQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCAnQXBvbGxvUHJvdmlkZXIgd2FzIG5vdCBwYXNzZWQgYSBjbGllbnQgaW5zdGFuY2UuIE1ha2UgJyArXG4gICAgICAgICAgICAnc3VyZSB5b3UgcGFzcyBpbiB5b3VyIGNsaWVudCB2aWEgdGhlIFwiY2xpZW50XCIgcHJvcC4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGNvbnRleHQuY2xpZW50LCAyNik7XG4gICAgICAgIHJldHVybiAoUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHQgfSwgY2hpbGRyZW4pKTtcbiAgICB9KSk7XG59O1xuXG5leHBvcnRzLkFwb2xsb0NvbnN1bWVyID0gQXBvbGxvQ29uc3VtZXI7XG5leHBvcnRzLkFwb2xsb1Byb3ZpZGVyID0gQXBvbGxvUHJvdmlkZXI7XG5leHBvcnRzLmdldEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0O1xuZXhwb3J0cy5yZXNldEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC5janMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBnbG9iYWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2dsb2JhbHMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJy4uL2NvbnRleHQnKTtcbnZhciB0c2xpYiA9IHJlcXVpcmUoJ3RzbGliJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzJyk7XG52YXIgZXF1YWxpdHkgPSByZXF1aXJlKCdAd3J5L2VxdWFsaXR5Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL2NvcmUnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuLi8uLi9lcnJvcnMnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BOYW1lc3BhY2UoZSkge1xuICAgIGlmIChlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGlmIChlKSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gZSkge1xuICAgICAgICAgICAgbltrXSA9IGVba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgbltcImRlZmF1bHRcIl0gPSBlO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxuXG52YXIgUmVhY3RfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShSZWFjdCk7XG5cbmZ1bmN0aW9uIHVzZUFwb2xsb0NsaWVudChvdmVycmlkZSkge1xuICAgIHZhciBjb250ZXh0JDEgPSBSZWFjdC51c2VDb250ZXh0KGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgY2xpZW50ID0gb3ZlcnJpZGUgfHwgY29udGV4dCQxLmNsaWVudDtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoISFjbGllbnQsICdDb3VsZCBub3QgZmluZCBcImNsaWVudFwiIGluIHRoZSBjb250ZXh0IG9yIHBhc3NlZCBpbiBhcyBhbiBvcHRpb24uICcgK1xuICAgICAgICAnV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYW4gPEFwb2xsb1Byb3ZpZGVyPiwgb3IgcGFzcyBhbiBBcG9sbG9DbGllbnQgJyArXG4gICAgICAgICdpbnN0YW5jZSBpbiB2aWEgb3B0aW9ucy4nKSA6IGdsb2JhbHMuaW52YXJpYW50KCEhY2xpZW50LCAyOSk7XG4gICAgcmV0dXJuIGNsaWVudDtcbn1cblxudmFyIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gZmFsc2U7XG52YXIgdVNFU0tleSA9IFwidXNlU3luY0V4dGVybmFsU3RvcmVcIjtcbnZhciByZWFsSG9vayA9IFJlYWN0X19uYW1lc3BhY2VbdVNFU0tleV07XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUgPSByZWFsSG9vayB8fCAoZnVuY3Rpb24gKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0U25hcHNob3QoKTtcbiAgICBpZiAoX19ERVZfXyAmJlxuICAgICAgICAhZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgJiZcbiAgICAgICAgdmFsdWUgIT09IGdldFNuYXBzaG90KCkpIHtcbiAgICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSB0cnVlO1xuICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50LmVycm9yKCdUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCcpO1xuICAgIH1cbiAgICB2YXIgX2EgPSBSZWFjdF9fbmFtZXNwYWNlLnVzZVN0YXRlKHsgaW5zdDogeyB2YWx1ZTogdmFsdWUsIGdldFNuYXBzaG90OiBnZXRTbmFwc2hvdCB9IH0pLCBpbnN0ID0gX2FbMF0uaW5zdCwgZm9yY2VVcGRhdGUgPSBfYVsxXTtcbiAgICBpZiAodXRpbGl0aWVzLmNhblVzZUxheW91dEVmZmVjdCkge1xuICAgICAgICBSZWFjdF9fbmFtZXNwYWNlLnVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGluc3QsIHsgdmFsdWU6IHZhbHVlLCBnZXRTbmFwc2hvdDogZ2V0U25hcHNob3QgfSk7XG4gICAgICAgICAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgICAgICAgICAgIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGluc3QsIHsgdmFsdWU6IHZhbHVlLCBnZXRTbmFwc2hvdDogZ2V0U25hcHNob3QgfSk7XG4gICAgfVxuICAgIFJlYWN0X19uYW1lc3BhY2UudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgICAgIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlKGZ1bmN0aW9uIGhhbmRsZVN0b3JlQ2hhbmdlKCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtzdWJzY3JpYmVdKTtcbiAgICByZXR1cm4gdmFsdWU7XG59KTtcbmZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZSwgZ2V0U25hcHNob3QgPSBfYS5nZXRTbmFwc2hvdDtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IGdldFNuYXBzaG90KCk7XG4gICAgfVxuICAgIGNhdGNoIChfYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiB1c2VRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IH1cbiAgICByZXR1cm4gdXNlSW50ZXJuYWxTdGF0ZSh1c2VBcG9sbG9DbGllbnQob3B0aW9ucy5jbGllbnQpLCBxdWVyeSkudXNlUXVlcnkob3B0aW9ucyk7XG59XG5mdW5jdGlvbiB1c2VJbnRlcm5hbFN0YXRlKGNsaWVudCwgcXVlcnkpIHtcbiAgICB2YXIgc3RhdGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgICBpZiAoIXN0YXRlUmVmLmN1cnJlbnQgfHxcbiAgICAgICAgY2xpZW50ICE9PSBzdGF0ZVJlZi5jdXJyZW50LmNsaWVudCB8fFxuICAgICAgICBxdWVyeSAhPT0gc3RhdGVSZWYuY3VycmVudC5xdWVyeSkge1xuICAgICAgICBzdGF0ZVJlZi5jdXJyZW50ID0gbmV3IEludGVybmFsU3RhdGUoY2xpZW50LCBxdWVyeSwgc3RhdGVSZWYuY3VycmVudCk7XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9IHN0YXRlUmVmLmN1cnJlbnQ7XG4gICAgdmFyIF9hID0gUmVhY3QudXNlU3RhdGUoMCk7IF9hWzBdOyB2YXIgc2V0VGljayA9IF9hWzFdO1xuICAgIHN0YXRlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaWNrKGZ1bmN0aW9uICh0aWNrKSB7IHJldHVybiB0aWNrICsgMTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gc3RhdGU7XG59XG52YXIgSW50ZXJuYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50ZXJuYWxTdGF0ZShjbGllbnQsIHF1ZXJ5LCBwcmV2aW91cykge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzeW5jUmVzb2x2ZUZucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zVG9JZ25vcmVPbmNlID0gbmV3ICh1dGlsaXRpZXMuY2FuVXNlV2Vha1NldCA/IFdlYWtTZXQgOiBTZXQpKCk7XG4gICAgICAgIHRoaXMuc3NyRGlzYWJsZWRSZXN1bHQgPSB1dGlsaXRpZXMubWF5YmVEZWVwRnJlZXplKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgbmV0d29ya1N0YXR1czogY29yZS5OZXR3b3JrU3RhdHVzLmxvYWRpbmcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNraXBTdGFuZGJ5UmVzdWx0ID0gdXRpbGl0aWVzLm1heWJlRGVlcEZyZWV6ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBjb3JlLk5ldHdvcmtTdGF0dXMucmVhZHksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvUXVlcnlSZXN1bHRDYWNoZSA9IG5ldyAodXRpbGl0aWVzLmNhblVzZVdlYWtNYXAgPyBXZWFrTWFwIDogTWFwKSgpO1xuICAgICAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKHF1ZXJ5LCBwYXJzZXIuRG9jdW1lbnRUeXBlLlF1ZXJ5KTtcbiAgICAgICAgdmFyIHByZXZpb3VzUmVzdWx0ID0gcHJldmlvdXMgJiYgcHJldmlvdXMucmVzdWx0O1xuICAgICAgICB2YXIgcHJldmlvdXNEYXRhID0gcHJldmlvdXNSZXN1bHQgJiYgcHJldmlvdXNSZXN1bHQuZGF0YTtcbiAgICAgICAgaWYgKHByZXZpb3VzRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEgPSBwcmV2aW91c0RhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9fREVWX18gJiYgZ2xvYmFscy5pbnZhcmlhbnQud2FybihcIkNhbGxpbmcgZGVmYXVsdCBuby1vcCBpbXBsZW1lbnRhdGlvbiBvZiBJbnRlcm5hbFN0YXRlI2ZvcmNlVXBkYXRlXCIpO1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuYXN5bmNVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgX3RoaXMuYXN5bmNSZXNvbHZlRm5zLmFkZChyZXNvbHZlKTtcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnNUb0lnbm9yZU9uY2UuYWRkKF90aGlzLndhdGNoUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUudXNlUXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlbmRlclByb21pc2VzID0gUmVhY3QudXNlQ29udGV4dChjb250ZXh0LmdldEFwb2xsb0NvbnRleHQoKSkucmVuZGVyUHJvbWlzZXM7XG4gICAgICAgIHRoaXMudXNlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdmFyIG9ic1F1ZXJ5ID0gdGhpcy51c2VPYnNlcnZhYmxlUXVlcnkoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5yZW5kZXJQcm9taXNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25OZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IF90aGlzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb2JzUXVlcnkuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1Jlc3VsdCAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5sb2FkaW5nID09PSByZXN1bHQubG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5uZXR3b3JrU3RhdHVzID09PSByZXN1bHQubmV0d29ya1N0YXR1cyAmJlxuICAgICAgICAgICAgICAgICAgICBlcXVhbGl0eS5lcXVhbChwcmV2aW91c1Jlc3VsdC5kYXRhLCByZXN1bHQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gb2JzUXVlcnlbXCJsYXN0XCJdO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic1F1ZXJ5LnJlc2V0TGFzdFJlc3VsdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gb2JzUXVlcnkuc3Vic2NyaWJlKG9uTmV4dCwgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBvYnNRdWVyeVtcImxhc3RcIl0gPSBsYXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwoZXJyb3IsICdncmFwaFFMRXJyb3JzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IF90aGlzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZpb3VzUmVzdWx0IHx8XG4gICAgICAgICAgICAgICAgICAgIChwcmV2aW91c1Jlc3VsdCAmJiBwcmV2aW91c1Jlc3VsdC5sb2FkaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAhZXF1YWxpdHkuZXF1YWwoZXJyb3IsIHByZXZpb3VzUmVzdWx0LmVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHByZXZpb3VzUmVzdWx0ICYmIHByZXZpb3VzUmVzdWx0LmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBjb3JlLk5ldHdvcmtTdGF0dXMuZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gb2JzUXVlcnkuc3Vic2NyaWJlKG9uTmV4dCwgb25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgIH0sIFtcbiAgICAgICAgICAgIG9ic1F1ZXJ5LFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9taXNlcyxcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmRpc2FibGVOZXR3b3JrRmV0Y2hlcyxcbiAgICAgICAgXSksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmdldEN1cnJlbnRSZXN1bHQoKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZ2V0Q3VycmVudFJlc3VsdCgpOyB9KTtcbiAgICAgICAgdGhpcy51bnNhZmVIYW5kbGVQYXJ0aWFsUmVmZXRjaChyZXN1bHQpO1xuICAgICAgICB2YXIgcXVlcnlSZXN1bHQgPSB0aGlzLnRvUXVlcnlSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgaWYgKCFxdWVyeVJlc3VsdC5sb2FkaW5nICYmIHRoaXMuYXN5bmNSZXNvbHZlRm5zLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNSZXNvbHZlRm5zLmZvckVhY2goZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUocXVlcnlSZXN1bHQpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNSZXNvbHZlRm5zLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5UmVzdWx0O1xuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUudXNlT3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHdhdGNoUXVlcnlPcHRpb25zID0gdGhpcy5jcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyh0aGlzLnF1ZXJ5SG9va09wdGlvbnMgPSBvcHRpb25zKTtcbiAgICAgICAgdmFyIGN1cnJlbnRXYXRjaFF1ZXJ5T3B0aW9ucyA9IHRoaXMud2F0Y2hRdWVyeU9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNUb0lnbm9yZU9uY2UuaGFzKGN1cnJlbnRXYXRjaFF1ZXJ5T3B0aW9ucykgfHxcbiAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbCh3YXRjaFF1ZXJ5T3B0aW9ucywgY3VycmVudFdhdGNoUXVlcnlPcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy53YXRjaFF1ZXJ5T3B0aW9ucyA9IHdhdGNoUXVlcnlPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRXYXRjaFF1ZXJ5T3B0aW9ucyAmJiB0aGlzLm9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNUb0lnbm9yZU9uY2UuZGVsZXRlKGN1cnJlbnRXYXRjaFF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlLnJlb2JzZXJ2ZSh0aGlzLmdldE9ic1F1ZXJ5T3B0aW9ucygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YSA9ICgoX2EgPSB0aGlzLnJlc3VsdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGEpIHx8IHRoaXMucHJldmlvdXNEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Db21wbGV0ZWQgPSBvcHRpb25zLm9uQ29tcGxldGVkIHx8IEludGVybmFsU3RhdGUucHJvdG90eXBlLm9uQ29tcGxldGVkO1xuICAgICAgICB0aGlzLm9uRXJyb3IgPSBvcHRpb25zLm9uRXJyb3IgfHwgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUub25FcnJvcjtcbiAgICAgICAgaWYgKCh0aGlzLnJlbmRlclByb21pc2VzIHx8IHRoaXMuY2xpZW50LmRpc2FibGVOZXR3b3JrRmV0Y2hlcykgJiZcbiAgICAgICAgICAgIHRoaXMucXVlcnlIb29rT3B0aW9ucy5zc3IgPT09IGZhbHNlICYmXG4gICAgICAgICAgICAhdGhpcy5xdWVyeUhvb2tPcHRpb25zLnNraXApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5zc3JEaXNhYmxlZFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnF1ZXJ5SG9va09wdGlvbnMuc2tpcCB8fFxuICAgICAgICAgICAgdGhpcy53YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ3N0YW5kYnknKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuc2tpcFN0YW5kYnlSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZXN1bHQgPT09IHRoaXMuc3NyRGlzYWJsZWRSZXN1bHQgfHxcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID09PSB0aGlzLnNraXBTdGFuZGJ5UmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUuZ2V0T2JzUXVlcnlPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9NZXJnZSA9IFtdO1xuICAgICAgICB2YXIgZ2xvYmFsRGVmYXVsdHMgPSB0aGlzLmNsaWVudC5kZWZhdWx0T3B0aW9ucy53YXRjaFF1ZXJ5O1xuICAgICAgICBpZiAoZ2xvYmFsRGVmYXVsdHMpXG4gICAgICAgICAgICB0b01lcmdlLnB1c2goZ2xvYmFsRGVmYXVsdHMpO1xuICAgICAgICBpZiAodGhpcy5xdWVyeUhvb2tPcHRpb25zLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgICB0b01lcmdlLnB1c2godGhpcy5xdWVyeUhvb2tPcHRpb25zLmRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0b01lcmdlLnB1c2godXRpbGl0aWVzLmNvbXBhY3QodGhpcy5vYnNlcnZhYmxlICYmIHRoaXMub2JzZXJ2YWJsZS5vcHRpb25zLCB0aGlzLndhdGNoUXVlcnlPcHRpb25zKSk7XG4gICAgICAgIHJldHVybiB0b01lcmdlLnJlZHVjZShjb3JlLm1lcmdlT3B0aW9ucyk7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5jcmVhdGVXYXRjaFF1ZXJ5T3B0aW9ucyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2I7XG4gICAgICAgIGlmIChfYSA9PT0gdm9pZCAwKSB7IF9hID0ge307IH1cbiAgICAgICAgdmFyIHNraXAgPSBfYS5za2lwOyBfYS5zc3I7IF9hLm9uQ29tcGxldGVkOyBfYS5vbkVycm9yOyBfYS5kaXNwbGF5TmFtZTsgX2EuZGVmYXVsdE9wdGlvbnM7IHZhciBvdGhlck9wdGlvbnMgPSB0c2xpYi5fX3Jlc3QoX2EsIFtcInNraXBcIiwgXCJzc3JcIiwgXCJvbkNvbXBsZXRlZFwiLCBcIm9uRXJyb3JcIiwgXCJkaXNwbGF5TmFtZVwiLCBcImRlZmF1bHRPcHRpb25zXCJdKTtcbiAgICAgICAgdmFyIHdhdGNoUXVlcnlPcHRpb25zID0gT2JqZWN0LmFzc2lnbihvdGhlck9wdGlvbnMsIHsgcXVlcnk6IHRoaXMucXVlcnkgfSk7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlclByb21pc2VzICYmXG4gICAgICAgICAgICAod2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICdjYWNoZS1hbmQtbmV0d29yaycpKSB7XG4gICAgICAgICAgICB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSA9ICdjYWNoZS1maXJzdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3YXRjaFF1ZXJ5T3B0aW9ucy52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHdhdGNoUXVlcnlPcHRpb25zLnZhcmlhYmxlcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChza2lwKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSB3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSwgZmV0Y2hQb2xpY3kgPSBfYyA9PT0gdm9pZCAwID8gdGhpcy5nZXREZWZhdWx0RmV0Y2hQb2xpY3koKSA6IF9jLCBfZCA9IHdhdGNoUXVlcnlPcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSwgaW5pdGlhbEZldGNoUG9saWN5ID0gX2QgPT09IHZvaWQgMCA/IGZldGNoUG9saWN5IDogX2Q7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHdhdGNoUXVlcnlPcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbEZldGNoUG9saWN5OiBpbml0aWFsRmV0Y2hQb2xpY3ksXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICdzdGFuZGJ5JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF3YXRjaFF1ZXJ5T3B0aW9ucy5mZXRjaFBvbGljeSkge1xuICAgICAgICAgICAgd2F0Y2hRdWVyeU9wdGlvbnMuZmV0Y2hQb2xpY3kgPVxuICAgICAgICAgICAgICAgICgoX2IgPSB0aGlzLm9ic2VydmFibGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vcHRpb25zLmluaXRpYWxGZXRjaFBvbGljeSkgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREZWZhdWx0RmV0Y2hQb2xpY3koKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2F0Y2hRdWVyeU9wdGlvbnM7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5nZXREZWZhdWx0RmV0Y2hQb2xpY3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiAoKChfYSA9IHRoaXMucXVlcnlIb29rT3B0aW9ucy5kZWZhdWx0T3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZldGNoUG9saWN5KSB8fFxuICAgICAgICAgICAgKChfYiA9IHRoaXMuY2xpZW50LmRlZmF1bHRPcHRpb25zLndhdGNoUXVlcnkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mZXRjaFBvbGljeSkgfHxcbiAgICAgICAgICAgIFwiY2FjaGUtZmlyc3RcIik7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uIChkYXRhKSB7IH07XG4gICAgSW50ZXJuYWxTdGF0ZS5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikgeyB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLnVzZU9ic2VydmFibGVRdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic1F1ZXJ5ID0gdGhpcy5vYnNlcnZhYmxlID1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvbWlzZXNcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnJlbmRlclByb21pc2VzLmdldFNTUk9ic2VydmFibGUodGhpcy53YXRjaFF1ZXJ5T3B0aW9ucylcbiAgICAgICAgICAgICAgICB8fCB0aGlzLm9ic2VydmFibGVcbiAgICAgICAgICAgICAgICB8fCB0aGlzLmNsaWVudC53YXRjaFF1ZXJ5KHRoaXMuZ2V0T2JzUXVlcnlPcHRpb25zKCkpO1xuICAgICAgICB0aGlzLm9ic1F1ZXJ5RmllbGRzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgcmVmZXRjaDogb2JzUXVlcnkucmVmZXRjaC5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgICAgIHJlb2JzZXJ2ZTogb2JzUXVlcnkucmVvYnNlcnZlLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICAgICAgZmV0Y2hNb3JlOiBvYnNRdWVyeS5mZXRjaE1vcmUuYmluZChvYnNRdWVyeSksXG4gICAgICAgICAgICB1cGRhdGVRdWVyeTogb2JzUXVlcnkudXBkYXRlUXVlcnkuYmluZChvYnNRdWVyeSksXG4gICAgICAgICAgICBzdGFydFBvbGxpbmc6IG9ic1F1ZXJ5LnN0YXJ0UG9sbGluZy5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgICAgIHN0b3BQb2xsaW5nOiBvYnNRdWVyeS5zdG9wUG9sbGluZy5iaW5kKG9ic1F1ZXJ5KSxcbiAgICAgICAgICAgIHN1YnNjcmliZVRvTW9yZTogb2JzUXVlcnkuc3Vic2NyaWJlVG9Nb3JlLmJpbmQob2JzUXVlcnkpLFxuICAgICAgICB9KTsgfSwgW29ic1F1ZXJ5XSk7XG4gICAgICAgIHZhciBzc3JBbGxvd2VkID0gISh0aGlzLnF1ZXJ5SG9va09wdGlvbnMuc3NyID09PSBmYWxzZSB8fFxuICAgICAgICAgICAgdGhpcy5xdWVyeUhvb2tPcHRpb25zLnNraXApO1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJQcm9taXNlcyAmJiBzc3JBbGxvd2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb21pc2VzLnJlZ2lzdGVyU1NST2JzZXJ2YWJsZShvYnNRdWVyeSk7XG4gICAgICAgICAgICBpZiAob2JzUXVlcnkuZ2V0Q3VycmVudFJlc3VsdCgpLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb21pc2VzLmFkZE9ic2VydmFibGVRdWVyeVByb21pc2Uob2JzUXVlcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNRdWVyeTtcbiAgICB9O1xuICAgIEludGVybmFsU3RhdGUucHJvdG90eXBlLnNldFJlc3VsdCA9IGZ1bmN0aW9uIChuZXh0UmVzdWx0KSB7XG4gICAgICAgIHZhciBwcmV2aW91c1Jlc3VsdCA9IHRoaXMucmVzdWx0O1xuICAgICAgICBpZiAocHJldmlvdXNSZXN1bHQgJiYgcHJldmlvdXNSZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0RhdGEgPSBwcmV2aW91c1Jlc3VsdC5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQobmV4dFJlc3VsdCk7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5oYW5kbGVFcnJvck9yQ29tcGxldGVkID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZWQocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQodGhpcy5yZXN1bHQgPSB0aGlzLm9ic2VydmFibGUuZ2V0Q3VycmVudFJlc3VsdCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS50b1F1ZXJ5UmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB2YXIgcXVlcnlSZXN1bHQgPSB0aGlzLnRvUXVlcnlSZXN1bHRDYWNoZS5nZXQocmVzdWx0KTtcbiAgICAgICAgaWYgKHF1ZXJ5UmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5UmVzdWx0O1xuICAgICAgICB2YXIgZGF0YSA9IHJlc3VsdC5kYXRhOyByZXN1bHQucGFydGlhbDsgdmFyIHJlc3VsdFdpdGhvdXRQYXJ0aWFsID0gdHNsaWIuX19yZXN0KHJlc3VsdCwgW1wiZGF0YVwiLCBcInBhcnRpYWxcIl0pO1xuICAgICAgICB0aGlzLnRvUXVlcnlSZXN1bHRDYWNoZS5zZXQocmVzdWx0LCBxdWVyeVJlc3VsdCA9IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHsgZGF0YTogZGF0YSB9LCByZXN1bHRXaXRob3V0UGFydGlhbCksIHRoaXMub2JzUXVlcnlGaWVsZHMpLCB7IGNsaWVudDogdGhpcy5jbGllbnQsIG9ic2VydmFibGU6IHRoaXMub2JzZXJ2YWJsZSwgdmFyaWFibGVzOiB0aGlzLm9ic2VydmFibGUudmFyaWFibGVzLCBjYWxsZWQ6ICF0aGlzLnF1ZXJ5SG9va09wdGlvbnMuc2tpcCwgcHJldmlvdXNEYXRhOiB0aGlzLnByZXZpb3VzRGF0YSB9KSk7XG4gICAgICAgIGlmICghcXVlcnlSZXN1bHQuZXJyb3IgJiYgdXRpbGl0aWVzLmlzTm9uRW1wdHlBcnJheShyZXN1bHQuZXJyb3JzKSkge1xuICAgICAgICAgICAgcXVlcnlSZXN1bHQuZXJyb3IgPSBuZXcgZXJyb3JzLkFwb2xsb0Vycm9yKHsgZ3JhcGhRTEVycm9yczogcmVzdWx0LmVycm9ycyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnlSZXN1bHQ7XG4gICAgfTtcbiAgICBJbnRlcm5hbFN0YXRlLnByb3RvdHlwZS51bnNhZmVIYW5kbGVQYXJ0aWFsUmVmZXRjaCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5wYXJ0aWFsICYmXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5SG9va09wdGlvbnMucGFydGlhbFJlZmV0Y2ggJiZcbiAgICAgICAgICAgICFyZXN1bHQubG9hZGluZyAmJlxuICAgICAgICAgICAgKCFyZXN1bHQuZGF0YSB8fCBPYmplY3Qua2V5cyhyZXN1bHQuZGF0YSkubGVuZ3RoID09PSAwKSAmJlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlLm9wdGlvbnMuZmV0Y2hQb2xpY3kgIT09ICdjYWNoZS1vbmx5Jykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IGNvcmUuTmV0d29ya1N0YXR1cy5yZWZldGNoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGUucmVmZXRjaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSW50ZXJuYWxTdGF0ZTtcbn0oKSk7XG5cbnZhciBFQUdFUl9NRVRIT0RTID0gW1xuICAgICdyZWZldGNoJyxcbiAgICAncmVvYnNlcnZlJyxcbiAgICAnZmV0Y2hNb3JlJyxcbiAgICAndXBkYXRlUXVlcnknLFxuICAgICdzdGFydFBvbGxpbmcnLFxuICAgICdzdWJzY3JpYmVUb01vcmUnLFxuXTtcbmZ1bmN0aW9uIHVzZUxhenlRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBpbnRlcm5hbFN0YXRlID0gdXNlSW50ZXJuYWxTdGF0ZSh1c2VBcG9sbG9DbGllbnQob3B0aW9ucyAmJiBvcHRpb25zLmNsaWVudCksIHF1ZXJ5KTtcbiAgICB2YXIgZXhlY09wdGlvbnNSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgICB2YXIgbWVyZ2VkID0gZXhlY09wdGlvbnNSZWYuY3VycmVudFxuICAgICAgICA/IHV0aWxpdGllcy5tZXJnZU9wdGlvbnMob3B0aW9ucywgZXhlY09wdGlvbnNSZWYuY3VycmVudClcbiAgICAgICAgOiBvcHRpb25zO1xuICAgIHZhciB1c2VRdWVyeVJlc3VsdCA9IGludGVybmFsU3RhdGUudXNlUXVlcnkodHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIG1lcmdlZCksIHsgc2tpcDogIWV4ZWNPcHRpb25zUmVmLmN1cnJlbnQgfSkpO1xuICAgIHZhciBpbml0aWFsRmV0Y2hQb2xpY3kgPSB1c2VRdWVyeVJlc3VsdC5vYnNlcnZhYmxlLm9wdGlvbnMuaW5pdGlhbEZldGNoUG9saWN5IHx8XG4gICAgICAgIGludGVybmFsU3RhdGUuZ2V0RGVmYXVsdEZldGNoUG9saWN5KCk7XG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24odXNlUXVlcnlSZXN1bHQsIHtcbiAgICAgICAgY2FsbGVkOiAhIWV4ZWNPcHRpb25zUmVmLmN1cnJlbnQsXG4gICAgfSk7XG4gICAgdmFyIGVhZ2VyTWV0aG9kcyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWFnZXJNZXRob2RzID0ge307XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHJlc3VsdFtrZXldO1xuICAgICAgICAgICAgZWFnZXJNZXRob2RzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFleGVjT3B0aW9uc1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWNPcHRpb25zUmVmLmN1cnJlbnQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFN0YXRlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgRUFHRVJfTUVUSE9EU18xID0gRUFHRVJfTUVUSE9EUzsgX2kgPCBFQUdFUl9NRVRIT0RTXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gRUFHRVJfTUVUSE9EU18xW19pXTtcbiAgICAgICAgICAgIF9sb29wXzEoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWFnZXJNZXRob2RzO1xuICAgIH0sIFtdKTtcbiAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwgZWFnZXJNZXRob2RzKTtcbiAgICB2YXIgZXhlY3V0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChleGVjdXRlT3B0aW9ucykge1xuICAgICAgICBleGVjT3B0aW9uc1JlZi5jdXJyZW50ID0gZXhlY3V0ZU9wdGlvbnMgPyB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZXhlY3V0ZU9wdGlvbnMpLCB7IGZldGNoUG9saWN5OiBleGVjdXRlT3B0aW9ucy5mZXRjaFBvbGljeSB8fCBpbml0aWFsRmV0Y2hQb2xpY3kgfSkgOiB7XG4gICAgICAgICAgICBmZXRjaFBvbGljeTogaW5pdGlhbEZldGNoUG9saWN5LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGludGVybmFsU3RhdGVcbiAgICAgICAgICAgIC5hc3luY1VwZGF0ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocXVlcnlSZXN1bHQpIHsgcmV0dXJuIE9iamVjdC5hc3NpZ24ocXVlcnlSZXN1bHQsIGVhZ2VyTWV0aG9kcyk7IH0pO1xuICAgICAgICBwcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2V4ZWN1dGUsIHJlc3VsdF07XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKG11dGF0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNsaWVudCA9IHVzZUFwb2xsb0NsaWVudChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2xpZW50KTtcbiAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKG11dGF0aW9uLCBwYXJzZXIuRG9jdW1lbnRUeXBlLk11dGF0aW9uKTtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGNhbGxlZDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICB9KSwgcmVzdWx0ID0gX2FbMF0sIHNldFJlc3VsdCA9IF9hWzFdO1xuICAgIHZhciByZWYgPSBSZWFjdC51c2VSZWYoe1xuICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgbXV0YXRpb25JZDogMCxcbiAgICAgICAgaXNNb3VudGVkOiB0cnVlLFxuICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgbXV0YXRpb246IG11dGF0aW9uLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIH0pO1xuICAgIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyZWYuY3VycmVudCwgeyBjbGllbnQ6IGNsaWVudCwgb3B0aW9uczogb3B0aW9ucywgbXV0YXRpb246IG11dGF0aW9uIH0pO1xuICAgIH1cbiAgICB2YXIgZXhlY3V0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChleGVjdXRlT3B0aW9ucykge1xuICAgICAgICBpZiAoZXhlY3V0ZU9wdGlvbnMgPT09IHZvaWQgMCkgeyBleGVjdXRlT3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfYSA9IHJlZi5jdXJyZW50LCBjbGllbnQgPSBfYS5jbGllbnQsIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBtdXRhdGlvbiA9IF9hLm11dGF0aW9uO1xuICAgICAgICB2YXIgYmFzZU9wdGlvbnMgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgbXV0YXRpb246IG11dGF0aW9uIH0pO1xuICAgICAgICBpZiAoIXJlZi5jdXJyZW50LnJlc3VsdC5sb2FkaW5nICYmICFiYXNlT3B0aW9ucy5pZ25vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVmLmN1cnJlbnQucmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBkYXRhOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG11dGF0aW9uSWQgPSArK3JlZi5jdXJyZW50Lm11dGF0aW9uSWQ7XG4gICAgICAgIHZhciBjbGllbnRPcHRpb25zID0gY29yZS5tZXJnZU9wdGlvbnMoYmFzZU9wdGlvbnMsIGV4ZWN1dGVPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5tdXRhdGUoY2xpZW50T3B0aW9ucykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhLCBlcnJvcnMkMSA9IHJlc3BvbnNlLmVycm9ycztcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9ycyQxICYmIGVycm9ycyQxLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IG5ldyBlcnJvcnMuQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiBlcnJvcnMkMSB9KVxuICAgICAgICAgICAgICAgIDogdm9pZCAwO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uSWQgPT09IHJlZi5jdXJyZW50Lm11dGF0aW9uSWQgJiZcbiAgICAgICAgICAgICAgICAhY2xpZW50T3B0aW9ucy5pZ25vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50LmlzTW91bnRlZCAmJiAhZXF1YWxpdHkuZXF1YWwocmVmLmN1cnJlbnQucmVzdWx0LCByZXN1bHRfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHJlc3VsdF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25Db21wbGV0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIChfYyA9IGV4ZWN1dGVPcHRpb25zLm9uQ29tcGxldGVkKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChleGVjdXRlT3B0aW9ucywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uSWQgPT09IHJlZi5jdXJyZW50Lm11dGF0aW9uSWQgJiZcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICghZXF1YWxpdHkuZXF1YWwocmVmLmN1cnJlbnQucmVzdWx0LCByZXN1bHRfMikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlZi5jdXJyZW50LnJlc3VsdCA9IHJlc3VsdF8yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vbkVycm9yKSB8fCBjbGllbnRPcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSAoX2IgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub25FcnJvcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwoX2IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAoX2QgPSBleGVjdXRlT3B0aW9ucy5vbkVycm9yKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChleGVjdXRlT3B0aW9ucywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHZvaWQgMCwgZXJyb3JzOiBlcnJvciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVzZXQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFJlc3VsdCh7IGNhbGxlZDogZmFsc2UsIGxvYWRpbmc6IGZhbHNlLCBjbGllbnQ6IGNsaWVudCB9KTtcbiAgICB9LCBbXSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LmlzTW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2V4ZWN1dGUsIHRzbGliLl9fYXNzaWduKHsgcmVzZXQ6IHJlc2V0IH0sIHJlc3VsdCldO1xufVxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCBvcHRpb25zKSB7XG4gICAgdmFyIGNsaWVudCA9IHVzZUFwb2xsb0NsaWVudChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2xpZW50KTtcbiAgICBwYXJzZXIudmVyaWZ5RG9jdW1lbnRUeXBlKHN1YnNjcmlwdGlvbiwgcGFyc2VyLkRvY3VtZW50VHlwZS5TdWJzY3JpcHRpb24pO1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCksXG4gICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgIH0pLCByZXN1bHQgPSBfYVswXSwgc2V0UmVzdWx0ID0gX2FbMV07XG4gICAgdmFyIF9iID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBzdWJzY3JpcHRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5LFxuICAgICAgICAgICAgY29udGV4dDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgIH0pO1xuICAgIH0pLCBvYnNlcnZhYmxlID0gX2JbMF0sIHNldE9ic2VydmFibGUgPSBfYlsxXTtcbiAgICB2YXIgY2FuUmVzZXRPYnNlcnZhYmxlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKHsgY2xpZW50OiBjbGllbnQsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgdmFyIHNob3VsZFJlc3Vic2NyaWJlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNob3VsZFJlc3Vic2NyaWJlO1xuICAgICAgICBpZiAodHlwZW9mIHNob3VsZFJlc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzaG91bGRSZXN1YnNjcmliZSA9ICEhc2hvdWxkUmVzdWJzY3JpYmUob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5za2lwKSB7XG4gICAgICAgICAgICBpZiAoIShvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2tpcCkgIT09ICEoKF9hID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNraXApIHx8IGNhblJlc2V0T2JzZXJ2YWJsZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldE9ic2VydmFibGUobnVsbCk7XG4gICAgICAgICAgICAgICAgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoc2hvdWxkUmVzdWJzY3JpYmUgIT09IGZhbHNlICYmXG4gICAgICAgICAgICAoY2xpZW50ICE9PSByZWYuY3VycmVudC5jbGllbnQgfHxcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gIT09IHJlZi5jdXJyZW50LnN1YnNjcmlwdGlvbiB8fFxuICAgICAgICAgICAgICAgIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmV0Y2hQb2xpY3kpICE9PSAoKF9iID0gcmVmLmN1cnJlbnQub3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZldGNoUG9saWN5KSB8fFxuICAgICAgICAgICAgICAgICEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNraXApICE9PSAhKChfYyA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5za2lwKSB8fFxuICAgICAgICAgICAgICAgICFlcXVhbGl0eS5lcXVhbChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFyaWFibGVzLCAoX2QgPSByZWYuY3VycmVudC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudmFyaWFibGVzKSkpIHx8XG4gICAgICAgICAgICBjYW5SZXNldE9ic2VydmFibGVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICBlcnJvcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0T2JzZXJ2YWJsZShjbGllbnQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBxdWVyeTogc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZldGNoUG9saWN5LFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FuUmVzZXRPYnNlcnZhYmxlUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHJlZi5jdXJyZW50LCB7IGNsaWVudDogY2xpZW50LCBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiwgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICB9LCBbY2xpZW50LCBzdWJzY3JpcHRpb24sIG9wdGlvbnMsIGNhblJlc2V0T2JzZXJ2YWJsZVJlZi5jdXJyZW50XSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChmZXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZldGNoUmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vblN1YnNjcmlwdGlvbkRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhOiByZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YXJpYWJsZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHJlZi5jdXJyZW50Lm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vblN1YnNjcmlwdGlvbkNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtvYnNlcnZhYmxlXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdXNlUmVhY3RpdmVWYXIocnYpIHtcbiAgICB2YXIgdmFsdWUgPSBydigpO1xuICAgIHZhciBzZXRWYWx1ZSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlKVsxXTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvYmFibHlTYW1lVmFsdWUgPSBydigpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHByb2JhYmx5U2FtZVZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZShwcm9iYWJseVNhbWVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcnYub25OZXh0Q2hhbmdlKHNldFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VBcG9sbG9DbGllbnQgPSB1c2VBcG9sbG9DbGllbnQ7XG5leHBvcnRzLnVzZUxhenlRdWVyeSA9IHVzZUxhenlRdWVyeTtcbmV4cG9ydHMudXNlTXV0YXRpb24gPSB1c2VNdXRhdGlvbjtcbmV4cG9ydHMudXNlUXVlcnkgPSB1c2VRdWVyeTtcbmV4cG9ydHMudXNlUmVhY3RpdmVWYXIgPSB1c2VSZWFjdGl2ZVZhcjtcbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZ2xvYmFscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9nbG9iYWxzJyk7XG5cbmV4cG9ydHMuRG9jdW1lbnRUeXBlID0gdm9pZCAwO1xuKGZ1bmN0aW9uIChEb2N1bWVudFR5cGUpIHtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiUXVlcnlcIl0gPSAwXSA9IFwiUXVlcnlcIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiTXV0YXRpb25cIl0gPSAxXSA9IFwiTXV0YXRpb25cIjtcbiAgICBEb2N1bWVudFR5cGVbRG9jdW1lbnRUeXBlW1wiU3Vic2NyaXB0aW9uXCJdID0gMl0gPSBcIlN1YnNjcmlwdGlvblwiO1xufSkoZXhwb3J0cy5Eb2N1bWVudFR5cGUgfHwgKGV4cG9ydHMuRG9jdW1lbnRUeXBlID0ge30pKTtcbnZhciBjYWNoZSA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIG9wZXJhdGlvbk5hbWUodHlwZSkge1xuICAgIHZhciBuYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGV4cG9ydHMuRG9jdW1lbnRUeXBlLlF1ZXJ5OlxuICAgICAgICAgICAgbmFtZSA9ICdRdWVyeSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBleHBvcnRzLkRvY3VtZW50VHlwZS5NdXRhdGlvbjpcbiAgICAgICAgICAgIG5hbWUgPSAnTXV0YXRpb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZXhwb3J0cy5Eb2N1bWVudFR5cGUuU3Vic2NyaXB0aW9uOlxuICAgICAgICAgICAgbmFtZSA9ICdTdWJzY3JpcHRpb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gcGFyc2VyKGRvY3VtZW50KSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChkb2N1bWVudCk7XG4gICAgaWYgKGNhY2hlZClcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB2YXIgdmFyaWFibGVzLCB0eXBlLCBuYW1lO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgXCJBcmd1bWVudCBvZiBcIi5jb25jYXQoZG9jdW1lbnQsIFwiIHBhc3NlZCB0byBwYXJzZXIgd2FzIG5vdCBhIHZhbGlkIEdyYXBoUUwgXCIpICtcbiAgICAgICAgXCJEb2N1bWVudE5vZGUuIFlvdSBtYXkgbmVlZCB0byB1c2UgJ2dyYXBocWwtdGFnJyBvciBhbm90aGVyIG1ldGhvZCBcIiArXG4gICAgICAgIFwidG8gY29udmVydCB5b3VyIG9wZXJhdGlvbiBpbnRvIGEgZG9jdW1lbnRcIikgOiBnbG9iYWxzLmludmFyaWFudCghIWRvY3VtZW50ICYmICEhZG9jdW1lbnQua2luZCwgMzApO1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICB2YXIgcXVlcmllcyA9IFtdO1xuICAgIHZhciBtdXRhdGlvbnMgPSBbXTtcbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkb2N1bWVudC5kZWZpbml0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHggPSBfYVtfaV07XG4gICAgICAgIGlmICh4LmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nKSB7XG4gICAgICAgICAgICBmcmFnbWVudHMucHVzaCh4KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4LmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgc3dpdGNoICh4Lm9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllcy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9ucy5wdXNoKHgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdWJzY3JpcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudCghZnJhZ21lbnRzLmxlbmd0aCB8fFxuICAgICAgICAocXVlcmllcy5sZW5ndGggfHwgbXV0YXRpb25zLmxlbmd0aCB8fCBzdWJzY3JpcHRpb25zLmxlbmd0aCksIFwiUGFzc2luZyBvbmx5IGEgZnJhZ21lbnQgdG8gJ2dyYXBocWwnIGlzIG5vdCB5ZXQgc3VwcG9ydGVkLiBcIiArXG4gICAgICAgIFwiWW91IG11c3QgaW5jbHVkZSBhIHF1ZXJ5LCBzdWJzY3JpcHRpb24gb3IgbXV0YXRpb24gYXMgd2VsbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KCFmcmFnbWVudHMubGVuZ3RoIHx8XG4gICAgICAgIChxdWVyaWVzLmxlbmd0aCB8fCBtdXRhdGlvbnMubGVuZ3RoIHx8IHN1YnNjcmlwdGlvbnMubGVuZ3RoKSwgMzEpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChxdWVyaWVzLmxlbmd0aCArIG11dGF0aW9ucy5sZW5ndGggKyBzdWJzY3JpcHRpb25zLmxlbmd0aCA8PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIGEgcXVlcnksIHN1YnNjcmlwdGlvbiwgb3IgYSBtdXRhdGlvbiBwZXIgSE9DLiBcIiArXG4gICAgICAgIFwiXCIuY29uY2F0KGRvY3VtZW50LCBcIiBoYWQgXCIpLmNvbmNhdChxdWVyaWVzLmxlbmd0aCwgXCIgcXVlcmllcywgXCIpLmNvbmNhdChzdWJzY3JpcHRpb25zLmxlbmd0aCwgXCIgXCIpICtcbiAgICAgICAgXCJzdWJzY3JpcHRpb25zIGFuZCBcIi5jb25jYXQobXV0YXRpb25zLmxlbmd0aCwgXCIgbXV0YXRpb25zLiBcIikgK1xuICAgICAgICBcIllvdSBjYW4gdXNlICdjb21wb3NlJyB0byBqb2luIG11bHRpcGxlIG9wZXJhdGlvbiB0eXBlcyB0byBhIGNvbXBvbmVudFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KHF1ZXJpZXMubGVuZ3RoICsgbXV0YXRpb25zLmxlbmd0aCArIHN1YnNjcmlwdGlvbnMubGVuZ3RoIDw9IDEsIDMyKTtcbiAgICB0eXBlID0gcXVlcmllcy5sZW5ndGggPyBleHBvcnRzLkRvY3VtZW50VHlwZS5RdWVyeSA6IGV4cG9ydHMuRG9jdW1lbnRUeXBlLk11dGF0aW9uO1xuICAgIGlmICghcXVlcmllcy5sZW5ndGggJiYgIW11dGF0aW9ucy5sZW5ndGgpXG4gICAgICAgIHR5cGUgPSBleHBvcnRzLkRvY3VtZW50VHlwZS5TdWJzY3JpcHRpb247XG4gICAgdmFyIGRlZmluaXRpb25zID0gcXVlcmllcy5sZW5ndGhcbiAgICAgICAgPyBxdWVyaWVzXG4gICAgICAgIDogbXV0YXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgPyBtdXRhdGlvbnNcbiAgICAgICAgICAgIDogc3Vic2NyaXB0aW9ucztcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCBcInJlYWN0LWFwb2xsbyBvbmx5IHN1cHBvcnRzIG9uZSBkZWZpbml0aW9uIHBlciBIT0MuIFwiLmNvbmNhdChkb2N1bWVudCwgXCIgaGFkIFwiKSArXG4gICAgICAgIFwiXCIuY29uY2F0KGRlZmluaXRpb25zLmxlbmd0aCwgXCIgZGVmaW5pdGlvbnMuIFwiKSArXG4gICAgICAgIFwiWW91IGNhbiB1c2UgJ2NvbXBvc2UnIHRvIGpvaW4gbXVsdGlwbGUgb3BlcmF0aW9uIHR5cGVzIHRvIGEgY29tcG9uZW50XCIpIDogZ2xvYmFscy5pbnZhcmlhbnQoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAxLCAzMyk7XG4gICAgdmFyIGRlZmluaXRpb24gPSBkZWZpbml0aW9uc1swXTtcbiAgICB2YXJpYWJsZXMgPSBkZWZpbml0aW9uLnZhcmlhYmxlRGVmaW5pdGlvbnMgfHwgW107XG4gICAgaWYgKGRlZmluaXRpb24ubmFtZSAmJiBkZWZpbml0aW9uLm5hbWUua2luZCA9PT0gJ05hbWUnKSB7XG4gICAgICAgIG5hbWUgPSBkZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuYW1lID0gJ2RhdGEnO1xuICAgIH1cbiAgICB2YXIgcGF5bG9hZCA9IHsgbmFtZTogbmFtZSwgdHlwZTogdHlwZSwgdmFyaWFibGVzOiB2YXJpYWJsZXMgfTtcbiAgICBjYWNoZS5zZXQoZG9jdW1lbnQsIHBheWxvYWQpO1xuICAgIHJldHVybiBwYXlsb2FkO1xufVxuZnVuY3Rpb24gdmVyaWZ5RG9jdW1lbnRUeXBlKGRvY3VtZW50LCB0eXBlKSB7XG4gICAgdmFyIG9wZXJhdGlvbiA9IHBhcnNlcihkb2N1bWVudCk7XG4gICAgdmFyIHJlcXVpcmVkT3BlcmF0aW9uTmFtZSA9IG9wZXJhdGlvbk5hbWUodHlwZSk7XG4gICAgdmFyIHVzZWRPcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZShvcGVyYXRpb24udHlwZSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbi50eXBlID09PSB0eXBlLCBcIlJ1bm5pbmcgYSBcIi5jb25jYXQocmVxdWlyZWRPcGVyYXRpb25OYW1lLCBcIiByZXF1aXJlcyBhIGdyYXBocWwgXCIpICtcbiAgICAgICAgXCJcIi5jb25jYXQocmVxdWlyZWRPcGVyYXRpb25OYW1lLCBcIiwgYnV0IGEgXCIpLmNvbmNhdCh1c2VkT3BlcmF0aW9uTmFtZSwgXCIgd2FzIHVzZWQgaW5zdGVhZC5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQob3BlcmF0aW9uLnR5cGUgPT09IHR5cGUsIDM0KTtcbn1cblxuZXhwb3J0cy5vcGVyYXRpb25OYW1lID0gb3BlcmF0aW9uTmFtZTtcbmV4cG9ydHMucGFyc2VyID0gcGFyc2VyO1xuZXhwb3J0cy52ZXJpZnlEb2N1bWVudFR5cGUgPSB2ZXJpZnlEb2N1bWVudFR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZXIuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5yZXF1aXJlKCcuLi91dGlsaXRpZXMvZ2xvYmFscycpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcbnZhciBob29rcyA9IHJlcXVpcmUoJy4vaG9va3MnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcicpO1xuXG5cblxuZXhwb3J0cy5BcG9sbG9Db25zdW1lciA9IGNvbnRleHQuQXBvbGxvQ29uc3VtZXI7XG5leHBvcnRzLkFwb2xsb1Byb3ZpZGVyID0gY29udGV4dC5BcG9sbG9Qcm92aWRlcjtcbmV4cG9ydHMuZ2V0QXBvbGxvQ29udGV4dCA9IGNvbnRleHQuZ2V0QXBvbGxvQ29udGV4dDtcbmV4cG9ydHMucmVzZXRBcG9sbG9Db250ZXh0ID0gY29udGV4dC5yZXNldEFwb2xsb0NvbnRleHQ7XG5leHBvcnRzLkRvY3VtZW50VHlwZSA9IHBhcnNlci5Eb2N1bWVudFR5cGU7XG5leHBvcnRzLm9wZXJhdGlvbk5hbWUgPSBwYXJzZXIub3BlcmF0aW9uTmFtZTtcbmV4cG9ydHMucGFyc2VyID0gcGFyc2VyLnBhcnNlcjtcbmZvciAodmFyIGsgaW4gaG9va3MpIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgZXhwb3J0c1trXSA9IGhvb2tzW2tdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QuY2pzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNJbnZhcmlhbnQgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQnKTtcbnZhciBwcm9jZXNzJDEgPSByZXF1aXJlKCd0cy1pbnZhcmlhbnQvcHJvY2VzcycpO1xudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XG5cbmZ1bmN0aW9uIG1heWJlKHRodW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRodW5rKCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkgeyB9XG59XG5cbnZhciBnbG9iYWwkMSA9IChtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBnbG9iYWxUaGlzOyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdzsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmOyB9KSB8fFxuICAgIG1heWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdsb2JhbDsgfSkgfHxcbiAgICBtYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBtYXliZS5jb25zdHJ1Y3RvcihcInJldHVybiB0aGlzXCIpKCk7IH0pKTtcblxudmFyIF9fID0gXCJfX1wiO1xudmFyIEdMT0JBTF9LRVkgPSBbX18sIF9fXS5qb2luKFwiREVWXCIpO1xuZnVuY3Rpb24gZ2V0REVWKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKF9fREVWX18pO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCQxLCBHTE9CQUxfS0VZLCB7XG4gICAgICAgICAgICB2YWx1ZTogbWF5YmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7IH0pICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ2xvYmFsJDFbR0xPQkFMX0tFWV07XG4gICAgfVxufVxudmFyIERFViA9IGdldERFVigpO1xuXG5mdW5jdGlvbiByZW1vdmVUZW1wb3JhcnlHbG9iYWxzKCkge1xuICAgIHJldHVybiB0eXBlb2YgZ3JhcGhxbC5Tb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MkMS5yZW1vdmUoKSA6IHByb2Nlc3MkMS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tERVYoKSB7XG4gICAgX19ERVZfXyA/IHRzSW52YXJpYW50LmludmFyaWFudChcImJvb2xlYW5cIiA9PT0gdHlwZW9mIERFViwgREVWKSA6IHRzSW52YXJpYW50LmludmFyaWFudChcImJvb2xlYW5cIiA9PT0gdHlwZW9mIERFViwgMzYpO1xufVxucmVtb3ZlVGVtcG9yYXJ5R2xvYmFscygpO1xuY2hlY2tERVYoKTtcblxuZXhwb3J0cy5JbnZhcmlhbnRFcnJvciA9IHRzSW52YXJpYW50LkludmFyaWFudEVycm9yO1xuZXhwb3J0cy5pbnZhcmlhbnQgPSB0c0ludmFyaWFudC5pbnZhcmlhbnQ7XG5leHBvcnRzLkRFViA9IERFVjtcbmV4cG9ydHMuY2hlY2tERVYgPSBjaGVja0RFVjtcbmV4cG9ydHMuZ2xvYmFsID0gZ2xvYmFsJDE7XG5leHBvcnRzLm1heWJlID0gbWF5YmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGdsb2JhbHMgPSByZXF1aXJlKCcuL2dsb2JhbHMnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB6ZW5PYnNlcnZhYmxlVHMgPSByZXF1aXJlKCd6ZW4tb2JzZXJ2YWJsZS10cycpO1xucmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxuZnVuY3Rpb24gc2hvdWxkSW5jbHVkZShfYSwgdmFyaWFibGVzKSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBfYS5kaXJlY3RpdmVzO1xuICAgIGlmICghZGlyZWN0aXZlcyB8fCAhZGlyZWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBnZXRJbmNsdXNpb25EaXJlY3RpdmVzKGRpcmVjdGl2ZXMpLmV2ZXJ5KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gX2EuZGlyZWN0aXZlLCBpZkFyZ3VtZW50ID0gX2EuaWZBcmd1bWVudDtcbiAgICAgICAgdmFyIGV2YWxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmIChpZkFyZ3VtZW50LnZhbHVlLmtpbmQgPT09ICdWYXJpYWJsZScpIHtcbiAgICAgICAgICAgIGV2YWxlZFZhbHVlID0gdmFyaWFibGVzICYmIHZhcmlhYmxlc1tpZkFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICAgICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KGV2YWxlZFZhbHVlICE9PSB2b2lkIDAsIFwiSW52YWxpZCB2YXJpYWJsZSByZWZlcmVuY2VkIGluIEBcIi5jb25jYXQoZGlyZWN0aXZlLm5hbWUudmFsdWUsIFwiIGRpcmVjdGl2ZS5cIikpIDogZ2xvYmFscy5pbnZhcmlhbnQoZXZhbGVkVmFsdWUgIT09IHZvaWQgMCwgMzcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZhbGVkVmFsdWUgPSBpZkFyZ3VtZW50LnZhbHVlLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3RpdmUubmFtZS52YWx1ZSA9PT0gJ3NraXAnID8gIWV2YWxlZFZhbHVlIDogZXZhbGVkVmFsdWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVOYW1lcyhyb290KSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZ3JhcGhxbC52aXNpdChyb290LCB7XG4gICAgICAgIERpcmVjdGl2ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2gobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZXM7XG59XG5mdW5jdGlvbiBoYXNEaXJlY3RpdmVzKG5hbWVzLCByb290KSB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZU5hbWVzKHJvb3QpLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG5hbWVzLmluZGV4T2YobmFtZSkgPiAtMTsgfSk7XG59XG5mdW5jdGlvbiBoYXNDbGllbnRFeHBvcnRzKGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIChkb2N1bWVudCAmJlxuICAgICAgICBoYXNEaXJlY3RpdmVzKFsnY2xpZW50J10sIGRvY3VtZW50KSAmJlxuICAgICAgICBoYXNEaXJlY3RpdmVzKFsnZXhwb3J0J10sIGRvY3VtZW50KSk7XG59XG5mdW5jdGlvbiBpc0luY2x1c2lvbkRpcmVjdGl2ZShfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLm5hbWUudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnc2tpcCcgfHwgdmFsdWUgPT09ICdpbmNsdWRlJztcbn1cbmZ1bmN0aW9uIGdldEluY2x1c2lvbkRpcmVjdGl2ZXMoZGlyZWN0aXZlcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoZGlyZWN0aXZlcyAmJiBkaXJlY3RpdmVzLmxlbmd0aCkge1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKCFpc0luY2x1c2lvbkRpcmVjdGl2ZShkaXJlY3RpdmUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmVBcmd1bWVudHMgPSBkaXJlY3RpdmUuYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZU5hbWUgPSBkaXJlY3RpdmUubmFtZS52YWx1ZTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkaXJlY3RpdmVBcmd1bWVudHMgJiYgZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSwgXCJJbmNvcnJlY3QgbnVtYmVyIG9mIGFyZ3VtZW50cyBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChkaXJlY3RpdmVBcmd1bWVudHMgJiYgZGlyZWN0aXZlQXJndW1lbnRzLmxlbmd0aCA9PT0gMSwgMzgpO1xuICAgICAgICAgICAgdmFyIGlmQXJndW1lbnQgPSBkaXJlY3RpdmVBcmd1bWVudHNbMF07XG4gICAgICAgICAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoaWZBcmd1bWVudC5uYW1lICYmIGlmQXJndW1lbnQubmFtZS52YWx1ZSA9PT0gJ2lmJywgXCJJbnZhbGlkIGFyZ3VtZW50IGZvciB0aGUgQFwiLmNvbmNhdChkaXJlY3RpdmVOYW1lLCBcIiBkaXJlY3RpdmUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGlmQXJndW1lbnQubmFtZSAmJiBpZkFyZ3VtZW50Lm5hbWUudmFsdWUgPT09ICdpZicsIDM5KTtcbiAgICAgICAgICAgIHZhciBpZlZhbHVlID0gaWZBcmd1bWVudC52YWx1ZTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChpZlZhbHVlICYmXG4gICAgICAgICAgICAgICAgKGlmVmFsdWUua2luZCA9PT0gJ1ZhcmlhYmxlJyB8fCBpZlZhbHVlLmtpbmQgPT09ICdCb29sZWFuVmFsdWUnKSwgXCJBcmd1bWVudCBmb3IgdGhlIEBcIi5jb25jYXQoZGlyZWN0aXZlTmFtZSwgXCIgZGlyZWN0aXZlIG11c3QgYmUgYSB2YXJpYWJsZSBvciBhIGJvb2xlYW4gdmFsdWUuXCIpKSA6IGdsb2JhbHMuaW52YXJpYW50KGlmVmFsdWUgJiZcbiAgICAgICAgICAgICAgICAoaWZWYWx1ZS5raW5kID09PSAnVmFyaWFibGUnIHx8IGlmVmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZScpLCA0MCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGRpcmVjdGl2ZTogZGlyZWN0aXZlLCBpZkFyZ3VtZW50OiBpZkFyZ3VtZW50IH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnRRdWVyeURvY3VtZW50KGRvY3VtZW50LCBmcmFnbWVudE5hbWUpIHtcbiAgICB2YXIgYWN0dWFsRnJhZ21lbnROYW1lID0gZnJhZ21lbnROYW1lO1xuICAgIHZhciBmcmFnbWVudHMgPSBbXTtcbiAgICBkb2N1bWVudC5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKFwiRm91bmQgYSBcIi5jb25jYXQoZGVmaW5pdGlvbi5vcGVyYXRpb24sIFwiIG9wZXJhdGlvblwiKS5jb25jYXQoZGVmaW5pdGlvbi5uYW1lID8gXCIgbmFtZWQgJ1wiLmNvbmNhdChkZWZpbml0aW9uLm5hbWUudmFsdWUsIFwiJ1wiKSA6ICcnLCBcIi4gXCIpICtcbiAgICAgICAgICAgICAgICAnTm8gb3BlcmF0aW9ucyBhcmUgYWxsb3dlZCB3aGVuIHVzaW5nIGEgZnJhZ21lbnQgYXMgYSBxdWVyeS4gT25seSBmcmFnbWVudHMgYXJlIGFsbG93ZWQuJykgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0MSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgIGZyYWdtZW50cy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBhY3R1YWxGcmFnbWVudE5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCBcIkZvdW5kIFwiLmNvbmNhdChmcmFnbWVudHMubGVuZ3RoLCBcIiBmcmFnbWVudHMuIGBmcmFnbWVudE5hbWVgIG11c3QgYmUgcHJvdmlkZWQgd2hlbiB0aGVyZSBpcyBub3QgZXhhY3RseSAxIGZyYWdtZW50LlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudHMubGVuZ3RoID09PSAxLCA0Mik7XG4gICAgICAgIGFjdHVhbEZyYWdtZW50TmFtZSA9IGZyYWdtZW50c1swXS5uYW1lLnZhbHVlO1xuICAgIH1cbiAgICB2YXIgcXVlcnkgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgZG9jdW1lbnQpLCB7IGRlZmluaXRpb25zOiB0c2xpYi5fX3NwcmVhZEFycmF5KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBraW5kOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhY3R1YWxGcmFnbWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgZG9jdW1lbnQuZGVmaW5pdGlvbnMsIHRydWUpIH0pO1xuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50TWFwKGZyYWdtZW50cykge1xuICAgIGlmIChmcmFnbWVudHMgPT09IHZvaWQgMCkgeyBmcmFnbWVudHMgPSBbXTsgfVxuICAgIHZhciBzeW1UYWJsZSA9IHt9O1xuICAgIGZyYWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgICBzeW1UYWJsZVtmcmFnbWVudC5uYW1lLnZhbHVlXSA9IGZyYWdtZW50O1xuICAgIH0pO1xuICAgIHJldHVybiBzeW1UYWJsZTtcbn1cbmZ1bmN0aW9uIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKSB7XG4gICAgc3dpdGNoIChzZWxlY3Rpb24ua2luZCkge1xuICAgICAgICBjYXNlICdJbmxpbmVGcmFnbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgICAgICBjYXNlICdGcmFnbWVudFNwcmVhZCc6IHtcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGZyYWdtZW50TWFwICYmIGZyYWdtZW50TWFwW3NlbGVjdGlvbi5uYW1lLnZhbHVlXTtcbiAgICAgICAgICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgXCJObyBmcmFnbWVudCBuYW1lZCBcIi5jb25jYXQoc2VsZWN0aW9uLm5hbWUudmFsdWUsIFwiLlwiKSkgOiBnbG9iYWxzLmludmFyaWFudChmcmFnbWVudCwgNDMpO1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBtYWtlUmVmZXJlbmNlKGlkKSB7XG4gICAgcmV0dXJuIHsgX19yZWY6IFN0cmluZyhpZCkgfTtcbn1cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlKG9iaikge1xuICAgIHJldHVybiBCb29sZWFuKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLl9fcmVmID09PSAnc3RyaW5nJyk7XG59XG5mdW5jdGlvbiBpc0RvY3VtZW50Tm9kZSh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICB2YWx1ZS5raW5kID09PSBcIkRvY3VtZW50XCIgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZS5kZWZpbml0aW9ucykpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnU3RyaW5nVmFsdWUnO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Jvb2xlYW5WYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0ludFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdJbnRWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0Zsb2F0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0Zsb2F0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNWYXJpYWJsZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnVmFyaWFibGUnO1xufVxuZnVuY3Rpb24gaXNPYmplY3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnT2JqZWN0VmFsdWUnO1xufVxuZnVuY3Rpb24gaXNMaXN0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUua2luZCA9PT0gJ0xpc3RWYWx1ZSc7XG59XG5mdW5jdGlvbiBpc0VudW1WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5raW5kID09PSAnRW51bVZhbHVlJztcbn1cbmZ1bmN0aW9uIGlzTnVsbFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmtpbmQgPT09ICdOdWxsVmFsdWUnO1xufVxuZnVuY3Rpb24gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09iaiwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcykge1xuICAgIGlmIChpc0ludFZhbHVlKHZhbHVlKSB8fCBpc0Zsb2F0VmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IE51bWJlcih2YWx1ZS52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQm9vbGVhblZhbHVlKHZhbHVlKSB8fCBpc1N0cmluZ1ZhbHVlKHZhbHVlKSkge1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIG5lc3RlZEFyZ09ial8xID0ge307XG4gICAgICAgIHZhbHVlLmZpZWxkcy5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdPYmpfMSwgb2JqLm5hbWUsIG9iai52YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IG5lc3RlZEFyZ09ial8xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZhcmlhYmxlKHZhbHVlKSkge1xuICAgICAgICB2YXIgdmFyaWFibGVWYWx1ZSA9ICh2YXJpYWJsZXMgfHwge30pW3ZhbHVlLm5hbWUudmFsdWVdO1xuICAgICAgICBhcmdPYmpbbmFtZS52YWx1ZV0gPSB2YXJpYWJsZVZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0xpc3RWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gdmFsdWUudmFsdWVzLm1hcChmdW5jdGlvbiAobGlzdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmVzdGVkQXJnQXJyYXlPYmogPSB7fTtcbiAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihuZXN0ZWRBcmdBcnJheU9iaiwgbmFtZSwgbGlzdFZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG5lc3RlZEFyZ0FycmF5T2JqW25hbWUudmFsdWVdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNFbnVtVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIGFyZ09ialtuYW1lLnZhbHVlXSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc051bGxWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgYXJnT2JqW25hbWUudmFsdWVdID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IF9fREVWX18gPyBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcihcIlRoZSBpbmxpbmUgYXJndW1lbnQgXFxcIlwiLmNvbmNhdChuYW1lLnZhbHVlLCBcIlxcXCIgb2Yga2luZCBcXFwiXCIpLmNvbmNhdCh2YWx1ZS5raW5kLCBcIlxcXCJcIikgK1xuICAgICAgICAgICAgJ2lzIG5vdCBzdXBwb3J0ZWQuIFVzZSB2YXJpYWJsZXMgaW5zdGVhZCBvZiBpbmxpbmUgYXJndW1lbnRzIHRvICcgK1xuICAgICAgICAgICAgJ292ZXJjb21lIHRoaXMgbGltaXRhdGlvbi4nKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDUyKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdG9yZUtleU5hbWVGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIHZhciBkaXJlY3RpdmVzT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuZGlyZWN0aXZlcykge1xuICAgICAgICBkaXJlY3RpdmVzT2JqID0ge307XG4gICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSA9IHt9O1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkaXJlY3RpdmVzT2JqW2RpcmVjdGl2ZS5uYW1lLnZhbHVlXSwgbmFtZSwgdmFsdWUsIHZhcmlhYmxlcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYXJnT2JqID0gbnVsbDtcbiAgICBpZiAoZmllbGQuYXJndW1lbnRzICYmIGZpZWxkLmFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgYXJnT2JqID0ge307XG4gICAgICAgIGZpZWxkLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihhcmdPYmosIG5hbWUsIHZhbHVlLCB2YXJpYWJsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFN0b3JlS2V5TmFtZShmaWVsZC5uYW1lLnZhbHVlLCBhcmdPYmosIGRpcmVjdGl2ZXNPYmopO1xufVxudmFyIEtOT1dOX0RJUkVDVElWRVMgPSBbXG4gICAgJ2Nvbm5lY3Rpb24nLFxuICAgICdpbmNsdWRlJyxcbiAgICAnc2tpcCcsXG4gICAgJ2NsaWVudCcsXG4gICAgJ3Jlc3QnLFxuICAgICdleHBvcnQnLFxuXTtcbnZhciBnZXRTdG9yZUtleU5hbWUgPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uIChmaWVsZE5hbWUsIGFyZ3MsIGRpcmVjdGl2ZXMpIHtcbiAgICBpZiAoYXJncyAmJlxuICAgICAgICBkaXJlY3RpdmVzICYmXG4gICAgICAgIGRpcmVjdGl2ZXNbJ2Nvbm5lY3Rpb24nXSAmJlxuICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2tleSddKSB7XG4gICAgICAgIGlmIChkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddICYmXG4gICAgICAgICAgICBkaXJlY3RpdmVzWydjb25uZWN0aW9uJ11bJ2ZpbHRlciddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJLZXlzID0gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgID8gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydmaWx0ZXInXVxuICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICBmaWx0ZXJLZXlzLnNvcnQoKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEFyZ3NfMSA9IHt9O1xuICAgICAgICAgICAgZmlsdGVyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFyZ3NfMVtrZXldID0gYXJnc1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXSwgXCIoXCIpLmNvbmNhdChzdHJpbmdpZnkoZmlsdGVyZWRBcmdzXzEpLCBcIilcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlc1snY29ubmVjdGlvbiddWydrZXknXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY29tcGxldGVGaWVsZE5hbWUgPSBmaWVsZE5hbWU7XG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkQXJncyA9IHN0cmluZ2lmeShhcmdzKTtcbiAgICAgICAgY29tcGxldGVGaWVsZE5hbWUgKz0gXCIoXCIuY29uY2F0KHN0cmluZ2lmaWVkQXJncywgXCIpXCIpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhkaXJlY3RpdmVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChLTk9XTl9ESVJFQ1RJVkVTLmluZGV4T2Yoa2V5KSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXNba2V5XSAmJiBPYmplY3Qua2V5cyhkaXJlY3RpdmVzW2tleV0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiQFwiLmNvbmNhdChrZXksIFwiKFwiKS5jb25jYXQoc3RyaW5naWZ5KGRpcmVjdGl2ZXNba2V5XSksIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRmllbGROYW1lICs9IFwiQFwiLmNvbmNhdChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBsZXRlRmllbGROYW1lO1xufSwge1xuICAgIHNldFN0cmluZ2lmeTogZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gc3RyaW5naWZ5O1xuICAgICAgICBzdHJpbmdpZnkgPSBzO1xuICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfSxcbn0pO1xudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIGRlZmF1bHRTdHJpbmdpZnkodmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHN0cmluZ2lmeVJlcGxhY2VyKTtcbn07XG5mdW5jdGlvbiBzdHJpbmdpZnlSZXBsYWNlcihfa2V5LCB2YWx1ZSkge1xuICAgIGlmIChpc05vbk51bGxPYmplY3QodmFsdWUpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IE9iamVjdC5rZXlzKHZhbHVlKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChjb3B5LCBrZXkpIHtcbiAgICAgICAgICAgIGNvcHlba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBhcmd1bWVudHNPYmplY3RGcm9tRmllbGQoZmllbGQsIHZhcmlhYmxlcykge1xuICAgIGlmIChmaWVsZC5hcmd1bWVudHMgJiYgZmllbGQuYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYXJnT2JqXzEgPSB7fTtcbiAgICAgICAgZmllbGQuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uKGFyZ09ial8xLCBuYW1lLCB2YWx1ZSwgdmFyaWFibGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcmdPYmpfMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiByZXN1bHRLZXlOYW1lRnJvbUZpZWxkKGZpZWxkKSB7XG4gICAgcmV0dXJuIGZpZWxkLmFsaWFzID8gZmllbGQuYWxpYXMudmFsdWUgOiBmaWVsZC5uYW1lLnZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0VHlwZW5hbWVGcm9tUmVzdWx0KHJlc3VsdCwgc2VsZWN0aW9uU2V0LCBmcmFnbWVudE1hcCkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0Ll9fdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuX190eXBlbmFtZTtcbiAgICB9XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHNlbGVjdGlvblNldC5zZWxlY3Rpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gX2FbX2ldO1xuICAgICAgICBpZiAoaXNGaWVsZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbcmVzdWx0S2V5TmFtZUZyb21GaWVsZChzZWxlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0eXBlbmFtZSA9IGdldFR5cGVuYW1lRnJvbVJlc3VsdChyZXN1bHQsIGdldEZyYWdtZW50RnJvbVNlbGVjdGlvbihzZWxlY3Rpb24sIGZyYWdtZW50TWFwKS5zZWxlY3Rpb25TZXQsIGZyYWdtZW50TWFwKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZW5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNGaWVsZChzZWxlY3Rpb24pIHtcbiAgICByZXR1cm4gc2VsZWN0aW9uLmtpbmQgPT09ICdGaWVsZCc7XG59XG5mdW5jdGlvbiBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikge1xuICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0lubGluZUZyYWdtZW50Jztcbn1cblxuZnVuY3Rpb24gY2hlY2tEb2N1bWVudChkb2MpIHtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZG9jICYmIGRvYy5raW5kID09PSAnRG9jdW1lbnQnLCBcIkV4cGVjdGluZyBhIHBhcnNlZCBHcmFwaFFMIGRvY3VtZW50LiBQZXJoYXBzIHlvdSBuZWVkIHRvIHdyYXAgdGhlIHF1ZXJ5IHN0cmluZyBpbiBhIFxcXCJncWxcXFwiIHRhZz8gaHR0cDovL2RvY3MuYXBvbGxvc3RhY2suY29tL2Fwb2xsby1jbGllbnQvY29yZS5odG1sI2dxbFwiKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYyAmJiBkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgNDQpO1xuICAgIHZhciBvcGVyYXRpb25zID0gZG9jLmRlZmluaXRpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbic7IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKGRlZmluaXRpb24ua2luZCAhPT0gJ09wZXJhdGlvbkRlZmluaXRpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBfX0RFVl9fID8gbmV3IGdsb2JhbHMuSW52YXJpYW50RXJyb3IoXCJTY2hlbWEgdHlwZSBkZWZpbml0aW9ucyBub3QgYWxsb3dlZCBpbiBxdWVyaWVzLiBGb3VuZDogXFxcIlwiLmNvbmNhdChkZWZpbml0aW9uLmtpbmQsIFwiXFxcIlwiKSkgOiBuZXcgZ2xvYmFscy5JbnZhcmlhbnRFcnJvcig0NSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfSk7XG4gICAgX19ERVZfXyA/IGdsb2JhbHMuaW52YXJpYW50KG9wZXJhdGlvbnMubGVuZ3RoIDw9IDEsIFwiQW1iaWd1b3VzIEdyYXBoUUwgZG9jdW1lbnQ6IGNvbnRhaW5zIFwiLmNvbmNhdChvcGVyYXRpb25zLmxlbmd0aCwgXCIgb3BlcmF0aW9uc1wiKSkgOiBnbG9iYWxzLmludmFyaWFudChvcGVyYXRpb25zLmxlbmd0aCA8PSAxLCA0Nik7XG4gICAgcmV0dXJuIGRvYztcbn1cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbkRlZmluaXRpb24oZG9jKSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2MpO1xuICAgIHJldHVybiBkb2MuZGVmaW5pdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7IHJldHVybiBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJzsgfSlbMF07XG59XG5mdW5jdGlvbiBnZXRPcGVyYXRpb25OYW1lKGRvYykge1xuICAgIHJldHVybiAoZG9jLmRlZmluaXRpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb24ua2luZCA9PT0gJ09wZXJhdGlvbkRlZmluaXRpb24nICYmIGRlZmluaXRpb24ubmFtZTtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lm5hbWUudmFsdWU7IH0pWzBdIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnREZWZpbml0aW9ucyhkb2MpIHtcbiAgICByZXR1cm4gZG9jLmRlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoZGVmaW5pdGlvbikgeyByZXR1cm4gZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJzsgfSk7XG59XG5mdW5jdGlvbiBnZXRRdWVyeURlZmluaXRpb24oZG9jKSB7XG4gICAgdmFyIHF1ZXJ5RGVmID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbihkb2MpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChxdWVyeURlZiAmJiBxdWVyeURlZi5vcGVyYXRpb24gPT09ICdxdWVyeScsICdNdXN0IGNvbnRhaW4gYSBxdWVyeSBkZWZpbml0aW9uLicpIDogZ2xvYmFscy5pbnZhcmlhbnQocXVlcnlEZWYgJiYgcXVlcnlEZWYub3BlcmF0aW9uID09PSAncXVlcnknLCA0Nyk7XG4gICAgcmV0dXJuIHF1ZXJ5RGVmO1xufVxuZnVuY3Rpb24gZ2V0RnJhZ21lbnREZWZpbml0aW9uKGRvYykge1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgXCJFeHBlY3RpbmcgYSBwYXJzZWQgR3JhcGhRTCBkb2N1bWVudC4gUGVyaGFwcyB5b3UgbmVlZCB0byB3cmFwIHRoZSBxdWVyeSBzdHJpbmcgaW4gYSBcXFwiZ3FsXFxcIiB0YWc/IGh0dHA6Ly9kb2NzLmFwb2xsb3N0YWNrLmNvbS9hcG9sbG8tY2xpZW50L2NvcmUuaHRtbCNncWxcIikgOiBnbG9iYWxzLmludmFyaWFudChkb2Mua2luZCA9PT0gJ0RvY3VtZW50JywgNDgpO1xuICAgIF9fREVWX18gPyBnbG9iYWxzLmludmFyaWFudChkb2MuZGVmaW5pdGlvbnMubGVuZ3RoIDw9IDEsICdGcmFnbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgZGVmaW5pdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGRvYy5kZWZpbml0aW9ucy5sZW5ndGggPD0gMSwgNDkpO1xuICAgIHZhciBmcmFnbWVudERlZiA9IGRvYy5kZWZpbml0aW9uc1swXTtcbiAgICBfX0RFVl9fID8gZ2xvYmFscy5pbnZhcmlhbnQoZnJhZ21lbnREZWYua2luZCA9PT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicsICdNdXN0IGJlIGEgZnJhZ21lbnQgZGVmaW5pdGlvbi4nKSA6IGdsb2JhbHMuaW52YXJpYW50KGZyYWdtZW50RGVmLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nLCA1MCk7XG4gICAgcmV0dXJuIGZyYWdtZW50RGVmO1xufVxuZnVuY3Rpb24gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnlEb2MpIHtcbiAgICBjaGVja0RvY3VtZW50KHF1ZXJ5RG9jKTtcbiAgICB2YXIgZnJhZ21lbnREZWZpbml0aW9uO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBxdWVyeURvYy5kZWZpbml0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGRlZmluaXRpb24gPSBfYVtfaV07XG4gICAgICAgIGlmIChkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJykge1xuICAgICAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRlZmluaXRpb24ub3BlcmF0aW9uO1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3F1ZXJ5JyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ211dGF0aW9uJyB8fFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJyAmJiAhZnJhZ21lbnREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBmcmFnbWVudERlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFnbWVudERlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50RGVmaW5pdGlvbjtcbiAgICB9XG4gICAgdGhyb3cgX19ERVZfXyA/IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKCdFeHBlY3RlZCBhIHBhcnNlZCBHcmFwaFFMIHF1ZXJ5IHdpdGggYSBxdWVyeSwgbXV0YXRpb24sIHN1YnNjcmlwdGlvbiwgb3IgYSBmcmFnbWVudC4nKSA6IG5ldyBnbG9iYWxzLkludmFyaWFudEVycm9yKDUxKTtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZXMoZGVmaW5pdGlvbikge1xuICAgIHZhciBkZWZhdWx0VmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgZGVmcyA9IGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi52YXJpYWJsZURlZmluaXRpb25zO1xuICAgIGlmIChkZWZzICYmIGRlZnMubGVuZ3RoKSB7XG4gICAgICAgIGRlZnMuZm9yRWFjaChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICBpZiAoZGVmLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlVG9PYmplY3RSZXByZXNlbnRhdGlvbihkZWZhdWx0VmFsdWVzLCBkZWYudmFyaWFibGUubmFtZSwgZGVmLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVySW5QbGFjZShhcnJheSwgdGVzdCwgY29udGV4dCkge1xuICAgIHZhciB0YXJnZXQgPSAwO1xuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGkpIHtcbiAgICAgICAgaWYgKHRlc3QuY2FsbCh0aGlzLCBlbGVtLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIGFycmF5W3RhcmdldCsrXSA9IGVsZW07XG4gICAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcbiAgICBhcnJheS5sZW5ndGggPSB0YXJnZXQ7XG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG52YXIgVFlQRU5BTUVfRklFTEQgPSB7XG4gICAga2luZDogJ0ZpZWxkJyxcbiAgICBuYW1lOiB7XG4gICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdfX3R5cGVuYW1lJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzRW1wdHkob3AsIGZyYWdtZW50cykge1xuICAgIHJldHVybiBvcC5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24ua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJyAmJlxuICAgICAgICAgICAgaXNFbXB0eShmcmFnbWVudHNbc2VsZWN0aW9uLm5hbWUudmFsdWVdLCBmcmFnbWVudHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbnVsbElmRG9jSXNFbXB0eShkb2MpIHtcbiAgICByZXR1cm4gaXNFbXB0eShnZXRPcGVyYXRpb25EZWZpbml0aW9uKGRvYykgfHwgZ2V0RnJhZ21lbnREZWZpbml0aW9uKGRvYyksIGNyZWF0ZUZyYWdtZW50TWFwKGdldEZyYWdtZW50RGVmaW5pdGlvbnMoZG9jKSkpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGRvYztcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiBkaXJlY3RpdmVNYXRjaGVyKGRpcmVjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHJldHVybiAoZGlyLm5hbWUgJiYgZGlyLm5hbWUgPT09IGRpcmVjdGl2ZS5uYW1lLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgIChkaXIudGVzdCAmJiBkaXIudGVzdChkaXJlY3RpdmUpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoZGlyZWN0aXZlcywgZG9jKSB7XG4gICAgdmFyIHZhcmlhYmxlc0luVXNlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgdmFyaWFibGVzVG9SZW1vdmUgPSBbXTtcbiAgICB2YXIgZnJhZ21lbnRTcHJlYWRzSW5Vc2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSA9IFtdO1xuICAgIHZhciBtb2RpZmllZERvYyA9IG51bGxJZkRvY0lzRW1wdHkoZ3JhcGhxbC52aXNpdChkb2MsIHtcbiAgICAgICAgVmFyaWFibGU6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSwgX2tleSwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5raW5kICE9PSAnVmFyaWFibGVEZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNJblVzZVtub2RlLm5hbWUudmFsdWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGaWVsZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZXMgJiYgbm9kZS5kaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG91bGRSZW1vdmVGaWVsZCA9IGRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZGlyZWN0aXZlKSB7IHJldHVybiBkaXJlY3RpdmUucmVtb3ZlOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUZpZWxkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGlyZWN0aXZlcy5zb21lKGdldERpcmVjdGl2ZU1hdGNoZXIoZGlyZWN0aXZlcykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFyZ3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZy52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNUb1JlbW92ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcmcudmFsdWUubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KG5vZGUuc2VsZWN0aW9uU2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc1RvUmVtb3ZlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZnJhZy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRnJhZ21lbnRTcHJlYWQ6IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50U3ByZWFkc0luVXNlW25vZGUubmFtZS52YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgRGlyZWN0aXZlOiB7XG4gICAgICAgICAgICBlbnRlcjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0RGlyZWN0aXZlTWF0Y2hlcihkaXJlY3RpdmVzKShub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pKTtcbiAgICBpZiAobW9kaWZpZWREb2MgJiZcbiAgICAgICAgZmlsdGVySW5QbGFjZSh2YXJpYWJsZXNUb1JlbW92ZSwgZnVuY3Rpb24gKHYpIHsgcmV0dXJuICEhdi5uYW1lICYmICF2YXJpYWJsZXNJblVzZVt2Lm5hbWVdOyB9KS5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQodmFyaWFibGVzVG9SZW1vdmUsIG1vZGlmaWVkRG9jKTtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkRG9jICYmXG4gICAgICAgIGZpbHRlckluUGxhY2UoZnJhZ21lbnRTcHJlYWRzVG9SZW1vdmUsIGZ1bmN0aW9uIChmcykgeyByZXR1cm4gISFmcy5uYW1lICYmICFmcmFnbWVudFNwcmVhZHNJblVzZVtmcy5uYW1lXTsgfSlcbiAgICAgICAgICAgIC5sZW5ndGgpIHtcbiAgICAgICAgbW9kaWZpZWREb2MgPSByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChmcmFnbWVudFNwcmVhZHNUb1JlbW92ZSwgbW9kaWZpZWREb2MpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG52YXIgYWRkVHlwZW5hbWVUb0RvY3VtZW50ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbiAoZG9jKSB7XG4gICAgcmV0dXJuIGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIFNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlLCBfa2V5LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9ucyA9IG5vZGUuc2VsZWN0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2tpcCA9IHNlbGVjdGlvbnMuc29tZShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXNGaWVsZChzZWxlY3Rpb24pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uLm5hbWUudmFsdWUgPT09ICdfX3R5cGVuYW1lJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5uYW1lLnZhbHVlLmxhc3RJbmRleE9mKCdfXycsIDApID09PSAwKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNraXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmllbGQoZmllbGQpICYmXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpcmVjdGl2ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUudmFsdWUgPT09ICdleHBvcnQnOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgc2VsZWN0aW9uczogdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBzZWxlY3Rpb25zLCB0cnVlKSwgW1RZUEVOQU1FX0ZJRUxEXSwgZmFsc2UpIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn0sIHtcbiAgICBhZGRlZDogZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmaWVsZCA9PT0gVFlQRU5BTUVfRklFTEQ7XG4gICAgfSxcbn0pO1xudmFyIGNvbm5lY3Rpb25SZW1vdmVDb25maWcgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xuICAgICAgICB2YXIgd2lsbFJlbW92ZSA9IGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY29ubmVjdGlvbic7XG4gICAgICAgIGlmICh3aWxsUmVtb3ZlKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGl2ZS5hcmd1bWVudHMgfHxcbiAgICAgICAgICAgICAgICAhZGlyZWN0aXZlLmFyZ3VtZW50cy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lLnZhbHVlID09PSAna2V5JzsgfSkpIHtcbiAgICAgICAgICAgICAgICBfX0RFVl9fICYmIGdsb2JhbHMuaW52YXJpYW50Lndhcm4oJ1JlbW92aW5nIGFuIEBjb25uZWN0aW9uIGRpcmVjdGl2ZSBldmVuIHRob3VnaCBpdCBkb2VzIG5vdCBoYXZlIGEga2V5LiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1lvdSBtYXkgd2FudCB0byB1c2UgdGhlIGtleSBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBhIHN0b3JlIGtleS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2lsbFJlbW92ZTtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlbW92ZUNvbm5lY3Rpb25EaXJlY3RpdmVGcm9tRG9jdW1lbnQoZG9jKSB7XG4gICAgcmV0dXJuIHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQoW2Nvbm5lY3Rpb25SZW1vdmVDb25maWddLCBjaGVja0RvY3VtZW50KGRvYykpO1xufVxuZnVuY3Rpb24gZ2V0QXJndW1lbnRNYXRjaGVyKGNvbmZpZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcmd1bWVudE1hdGNoZXIoYXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5zb21lKGZ1bmN0aW9uIChhQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnQudmFsdWUgJiZcbiAgICAgICAgICAgICAgICBhcmd1bWVudC52YWx1ZS5raW5kID09PSAnVmFyaWFibGUnICYmXG4gICAgICAgICAgICAgICAgYXJndW1lbnQudmFsdWUubmFtZSAmJlxuICAgICAgICAgICAgICAgIChhQ29uZmlnLm5hbWUgPT09IGFyZ3VtZW50LnZhbHVlLm5hbWUudmFsdWUgfHxcbiAgICAgICAgICAgICAgICAgICAgKGFDb25maWcudGVzdCAmJiBhQ29uZmlnLnRlc3QoYXJndW1lbnQpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQoY29uZmlnLCBkb2MpIHtcbiAgICB2YXIgYXJnTWF0Y2hlciA9IGdldEFyZ3VtZW50TWF0Y2hlcihjb25maWcpO1xuICAgIHJldHVybiBudWxsSWZEb2NJc0VtcHR5KGdyYXBocWwudmlzaXQoZG9jLCB7XG4gICAgICAgIE9wZXJhdGlvbkRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgdmFyaWFibGVEZWZpbml0aW9uczogbm9kZS52YXJpYWJsZURlZmluaXRpb25zID8gbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAodmFyRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWNvbmZpZy5zb21lKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZy5uYW1lID09PSB2YXJEZWYudmFyaWFibGUubmFtZS52YWx1ZTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pIDogW10gfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGaWVsZDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNob3VsZFJlbW92ZUZpZWxkID0gY29uZmlnLnNvbWUoZnVuY3Rpb24gKGFyZ0NvbmZpZykgeyByZXR1cm4gYXJnQ29uZmlnLnJlbW92ZTsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFJlbW92ZUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdNYXRjaENvdW50XzEgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXJndW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdNYXRjaGVyKGFyZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnTWF0Y2hDb3VudF8xICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoQ291bnRfMSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBBcmd1bWVudDoge1xuICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ01hdGNoZXIobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KSk7XG59XG5mdW5jdGlvbiByZW1vdmVGcmFnbWVudFNwcmVhZEZyb21Eb2N1bWVudChjb25maWcsIGRvYykge1xuICAgIGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zb21lKGZ1bmN0aW9uIChkZWYpIHsgcmV0dXJuIGRlZi5uYW1lID09PSBub2RlLm5hbWUudmFsdWU7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbElmRG9jSXNFbXB0eShncmFwaHFsLnZpc2l0KGRvYywge1xuICAgICAgICBGcmFnbWVudFNwcmVhZDogeyBlbnRlcjogZW50ZXIgfSxcbiAgICAgICAgRnJhZ21lbnREZWZpbml0aW9uOiB7IGVudGVyOiBlbnRlciB9LFxuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGdldEFsbEZyYWdtZW50U3ByZWFkc0Zyb21TZWxlY3Rpb25TZXQoc2VsZWN0aW9uU2V0KSB7XG4gICAgdmFyIGFsbEZyYWdtZW50cyA9IFtdO1xuICAgIHNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoKGlzRmllbGQoc2VsZWN0aW9uKSB8fCBpc0lubGluZUZyYWdtZW50KHNlbGVjdGlvbikpICYmXG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgICAgICBnZXRBbGxGcmFnbWVudFNwcmVhZHNGcm9tU2VsZWN0aW9uU2V0KHNlbGVjdGlvbi5zZWxlY3Rpb25TZXQpLmZvckVhY2goZnVuY3Rpb24gKGZyYWcpIHsgcmV0dXJuIGFsbEZyYWdtZW50cy5wdXNoKGZyYWcpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3Rpb24ua2luZCA9PT0gJ0ZyYWdtZW50U3ByZWFkJykge1xuICAgICAgICAgICAgYWxsRnJhZ21lbnRzLnB1c2goc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxGcmFnbWVudHM7XG59XG5mdW5jdGlvbiBidWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldChkb2N1bWVudCkge1xuICAgIHZhciBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24oZG9jdW1lbnQpO1xuICAgIHZhciBkZWZpbml0aW9uT3BlcmF0aW9uID0gZGVmaW5pdGlvbi5vcGVyYXRpb247XG4gICAgaWYgKGRlZmluaXRpb25PcGVyYXRpb24gPT09ICdxdWVyeScpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH1cbiAgICB2YXIgbW9kaWZpZWREb2MgPSBncmFwaHFsLnZpc2l0KGRvY3VtZW50LCB7XG4gICAgICAgIE9wZXJhdGlvbkRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbm9kZSksIHsgb3BlcmF0aW9uOiAncXVlcnknIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWREb2M7XG59XG5mdW5jdGlvbiByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY2hlY2tEb2N1bWVudChkb2N1bWVudCk7XG4gICAgdmFyIG1vZGlmaWVkRG9jID0gcmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudChbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChkaXJlY3RpdmUpIHsgcmV0dXJuIGRpcmVjdGl2ZS5uYW1lLnZhbHVlID09PSAnY2xpZW50JzsgfSxcbiAgICAgICAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLCBkb2N1bWVudCk7XG4gICAgaWYgKG1vZGlmaWVkRG9jKSB7XG4gICAgICAgIG1vZGlmaWVkRG9jID0gZ3JhcGhxbC52aXNpdChtb2RpZmllZERvYywge1xuICAgICAgICAgICAgRnJhZ21lbnREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVHlwZW5hbWVPbmx5ID0gbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzRmllbGQoc2VsZWN0aW9uKSAmJiBzZWxlY3Rpb24ubmFtZS52YWx1ZSA9PT0gJ19fdHlwZW5hbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUeXBlbmFtZU9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGlmaWVkRG9jO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gbWVyZ2VEZWVwKCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEZWVwQXJyYXkoc291cmNlcyk7XG59XG5mdW5jdGlvbiBtZXJnZURlZXBBcnJheShzb3VyY2VzKSB7XG4gICAgdmFyIHRhcmdldCA9IHNvdXJjZXNbMF0gfHwge307XG4gICAgdmFyIGNvdW50ID0gc291cmNlcy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICB2YXIgbWVyZ2VyID0gbmV3IERlZXBNZXJnZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtZXJnZXIubWVyZ2UodGFyZ2V0LCBzb3VyY2VzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxudmFyIGRlZmF1bHRSZWNvbmNpbGVyID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzLm1lcmdlKHRhcmdldFtwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xufTtcbnZhciBEZWVwTWVyZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWVwTWVyZ2VyKHJlY29uY2lsZXIpIHtcbiAgICAgICAgaWYgKHJlY29uY2lsZXIgPT09IHZvaWQgMCkgeyByZWNvbmNpbGVyID0gZGVmYXVsdFJlY29uY2lsZXI7IH1cbiAgICAgICAgdGhpcy5yZWNvbmNpbGVyID0gcmVjb25jaWxlcjtcbiAgICAgICAgdGhpcy5pc09iamVjdCA9IGlzTm9uTnVsbE9iamVjdDtcbiAgICAgICAgdGhpcy5wYXN0Q29waWVzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBEZWVwTWVyZ2VyLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29udGV4dCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29udGV4dFtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHNvdXJjZSkgJiYgaXNOb25OdWxsT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBzb3VyY2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHRhcmdldFtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlW3NvdXJjZUtleV0gIT09IHRhcmdldFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMucmVjb25jaWxlci5hcHBseShfdGhpcywgdHNsaWIuX19zcHJlYWRBcnJheShbdGFyZ2V0LCBzb3VyY2UsIHNvdXJjZUtleV0sIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF90aGlzLnNoYWxsb3dDb3B5Rm9yTWVyZ2UodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3RoaXMuc2hhbGxvd0NvcHlGb3JNZXJnZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlS2V5XSA9IHNvdXJjZVtzb3VyY2VLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH07XG4gICAgRGVlcE1lcmdlci5wcm90b3R5cGUuc2hhbGxvd0NvcHlGb3JNZXJnZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3RDb3BpZXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0c2xpYi5fX2Fzc2lnbih7IF9fcHJvdG9fXzogT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSB9LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFzdENvcGllcy5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBEZWVwTWVyZ2VyO1xufSgpKTtcblxuZnVuY3Rpb24gY29uY2F0UGFnaW5hdGlvbihrZXlBcmdzKSB7XG4gICAgaWYgKGtleUFyZ3MgPT09IHZvaWQgMCkgeyBrZXlBcmdzID0gZmFsc2U7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBrZXlBcmdzLFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZykge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nID8gdHNsaWIuX19zcHJlYWRBcnJheSh0c2xpYi5fX3NwcmVhZEFycmF5KFtdLCBleGlzdGluZywgdHJ1ZSksIGluY29taW5nLCB0cnVlKSA6IGluY29taW5nO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiBvZmZzZXRMaW1pdFBhZ2luYXRpb24oa2V5QXJncykge1xuICAgIGlmIChrZXlBcmdzID09PSB2b2lkIDApIHsga2V5QXJncyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczoga2V5QXJncyxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcsIF9hKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IF9hLmFyZ3M7XG4gICAgICAgICAgICB2YXIgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xuICAgICAgICAgICAgaWYgKGluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gYXJncy5vZmZzZXQsIG9mZnNldCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZFtvZmZzZXQgKyBpXSA9IGluY29taW5nW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWQucHVzaC5hcHBseShtZXJnZWQsIGluY29taW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiByZWxheVN0eWxlUGFnaW5hdGlvbihrZXlBcmdzKSB7XG4gICAgaWYgKGtleUFyZ3MgPT09IHZvaWQgMCkgeyBrZXlBcmdzID0gZmFsc2U7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBrZXlBcmdzLFxuICAgICAgICByZWFkOiBmdW5jdGlvbiAoZXhpc3RpbmcsIF9hKSB7XG4gICAgICAgICAgICB2YXIgY2FuUmVhZCA9IF9hLmNhblJlYWQsIHJlYWRGaWVsZCA9IF9hLnJlYWRGaWVsZDtcbiAgICAgICAgICAgIGlmICghZXhpc3RpbmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgdmFyIGVkZ2VzID0gW107XG4gICAgICAgICAgICB2YXIgZmlyc3RFZGdlQ3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBsYXN0RWRnZUN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICBleGlzdGluZy5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhblJlYWQocmVhZEZpZWxkKFwibm9kZVwiLCBlZGdlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVkZ2UuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEVkZ2VDdXJzb3IgPSBmaXJzdEVkZ2VDdXJzb3IgfHwgZWRnZS5jdXJzb3IgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFZGdlQ3Vyc29yID0gZWRnZS5jdXJzb3IgfHwgbGFzdEVkZ2VDdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBfYiA9IGV4aXN0aW5nLnBhZ2VJbmZvIHx8IHt9LCBzdGFydEN1cnNvciA9IF9iLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBfYi5lbmRDdXJzb3I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGdldEV4dHJhcyhleGlzdGluZykpLCB7IGVkZ2VzOiBlZGdlcywgcGFnZUluZm86IHRzbGliLl9fYXNzaWduKHRzbGliLl9fYXNzaWduKHt9LCBleGlzdGluZy5wYWdlSW5mbyksIHsgc3RhcnRDdXJzb3I6IHN0YXJ0Q3Vyc29yIHx8IGZpcnN0RWRnZUN1cnNvciwgZW5kQ3Vyc29yOiBlbmRDdXJzb3IgfHwgbGFzdEVkZ2VDdXJzb3IgfSkgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBfYSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBfYS5hcmdzLCBpc1JlZmVyZW5jZSA9IF9hLmlzUmVmZXJlbmNlLCByZWFkRmllbGQgPSBfYS5yZWFkRmllbGQ7XG4gICAgICAgICAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcgPSBtYWtlRW1wdHlEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWluY29taW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluY29taW5nRWRnZXMgPSBpbmNvbWluZy5lZGdlcyA/IGluY29taW5nLmVkZ2VzLm1hcChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZmVyZW5jZShlZGdlID0gdHNsaWIuX19hc3NpZ24oe30sIGVkZ2UpKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGdlLmN1cnNvciA9IHJlYWRGaWVsZChcImN1cnNvclwiLCBlZGdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgICAgICB9KSA6IFtdO1xuICAgICAgICAgICAgaWYgKGluY29taW5nLnBhZ2VJbmZvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VJbmZvXzEgPSBpbmNvbWluZy5wYWdlSW5mbztcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRDdXJzb3IgPSBwYWdlSW5mb18xLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBwYWdlSW5mb18xLmVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RFZGdlID0gaW5jb21pbmdFZGdlc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEVkZ2UgPSBpbmNvbWluZ0VkZ2VzW2luY29taW5nRWRnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0RWRnZSAmJiBzdGFydEN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdEVkZ2UuY3Vyc29yID0gc3RhcnRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsYXN0RWRnZSAmJiBlbmRDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdEVkZ2UuY3Vyc29yID0gZW5kQ3Vyc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RDdXJzb3IgPSBmaXJzdEVkZ2UgJiYgZmlyc3RFZGdlLmN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RDdXJzb3IgJiYgIXN0YXJ0Q3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nID0gbWVyZ2VEZWVwKGluY29taW5nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0Q3Vyc29yOiBmaXJzdEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGFzdEN1cnNvciA9IGxhc3RFZGdlICYmIGxhc3RFZGdlLmN1cnNvcjtcbiAgICAgICAgICAgICAgICBpZiAobGFzdEN1cnNvciAmJiAhZW5kQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY29taW5nID0gbWVyZ2VEZWVwKGluY29taW5nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEN1cnNvcjogbGFzdEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBleGlzdGluZy5lZGdlcztcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBbXTtcbiAgICAgICAgICAgIGlmIChhcmdzICYmIGFyZ3MuYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwcmVmaXguZmluZEluZGV4KGZ1bmN0aW9uIChlZGdlKSB7IHJldHVybiBlZGdlLmN1cnNvciA9PT0gYXJncy5hZnRlcjsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gcHJlZml4LnNsaWNlKDAsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJncyAmJiBhcmdzLmJlZm9yZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHByZWZpeC5maW5kSW5kZXgoZnVuY3Rpb24gKGVkZ2UpIHsgcmV0dXJuIGVkZ2UuY3Vyc29yID09PSBhcmdzLmJlZm9yZTsgfSk7XG4gICAgICAgICAgICAgICAgc3VmZml4ID0gaW5kZXggPCAwID8gcHJlZml4IDogcHJlZml4LnNsaWNlKGluZGV4KTtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluY29taW5nLmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZWRnZXMgPSB0c2xpYi5fX3NwcmVhZEFycmF5KHRzbGliLl9fc3ByZWFkQXJyYXkodHNsaWIuX19zcHJlYWRBcnJheShbXSwgcHJlZml4LCB0cnVlKSwgaW5jb21pbmdFZGdlcywgdHJ1ZSksIHN1ZmZpeCwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgcGFnZUluZm8gPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgaW5jb21pbmcucGFnZUluZm8pLCBleGlzdGluZy5wYWdlSW5mbyk7XG4gICAgICAgICAgICBpZiAoaW5jb21pbmcucGFnZUluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBpbmNvbWluZy5wYWdlSW5mbywgaGFzUHJldmlvdXNQYWdlID0gX2IuaGFzUHJldmlvdXNQYWdlLCBoYXNOZXh0UGFnZSA9IF9iLmhhc05leHRQYWdlLCBzdGFydEN1cnNvciA9IF9iLnN0YXJ0Q3Vyc29yLCBlbmRDdXJzb3IgPSBfYi5lbmRDdXJzb3IsIGV4dHJhcyA9IHRzbGliLl9fcmVzdChfYiwgW1wiaGFzUHJldmlvdXNQYWdlXCIsIFwiaGFzTmV4dFBhZ2VcIiwgXCJzdGFydEN1cnNvclwiLCBcImVuZEN1cnNvclwiXSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwYWdlSW5mbywgZXh0cmFzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaGFzUHJldmlvdXNQYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8uaGFzUHJldmlvdXNQYWdlID0gaGFzUHJldmlvdXNQYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBzdGFydEN1cnNvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLnN0YXJ0Q3Vyc29yID0gc3RhcnRDdXJzb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3VmZml4Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBoYXNOZXh0UGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmhhc05leHRQYWdlID0gaGFzTmV4dFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGVuZEN1cnNvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvLmVuZEN1cnNvciA9IGVuZEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24odHNsaWIuX19hc3NpZ24oe30sIGdldEV4dHJhcyhleGlzdGluZykpLCBnZXRFeHRyYXMoaW5jb21pbmcpKSwgeyBlZGdlczogZWRnZXMsIHBhZ2VJbmZvOiBwYWdlSW5mbyB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxudmFyIGdldEV4dHJhcyA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHRzbGliLl9fcmVzdChvYmosIG5vdEV4dHJhcyk7IH07XG52YXIgbm90RXh0cmFzID0gW1wiZWRnZXNcIiwgXCJwYWdlSW5mb1wiXTtcbmZ1bmN0aW9uIG1ha2VFbXB0eURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRnZXM6IFtdLFxuICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc05leHRQYWdlOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRDdXJzb3I6IFwiXCIsXG4gICAgICAgICAgICBlbmRDdXJzb3I6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICAgIHJldHVybiBjbG9uZURlZXBIZWxwZXIodmFsdWUpO1xufVxuZnVuY3Rpb24gY2xvbmVEZWVwSGVscGVyKHZhbCwgc2Vlbikge1xuICAgIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IEFycmF5XVwiOiB7XG4gICAgICAgICAgICBzZWVuID0gc2VlbiB8fCBuZXcgTWFwO1xuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHZhbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uZ2V0KHZhbCk7XG4gICAgICAgICAgICB2YXIgY29weV8xID0gdmFsLnNsaWNlKDApO1xuICAgICAgICAgICAgc2Vlbi5zZXQodmFsLCBjb3B5XzEpO1xuICAgICAgICAgICAgY29weV8xLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29weV8xW2ldID0gY2xvbmVEZWVwSGVscGVyKGNoaWxkLCBzZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHlfMTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiW29iamVjdCBPYmplY3RdXCI6IHtcbiAgICAgICAgICAgIHNlZW4gPSBzZWVuIHx8IG5ldyBNYXA7XG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXModmFsKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5nZXQodmFsKTtcbiAgICAgICAgICAgIHZhciBjb3B5XzIgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpKTtcbiAgICAgICAgICAgIHNlZW4uc2V0KHZhbCwgY29weV8yKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY29weV8yW2tleV0gPSBjbG9uZURlZXBIZWxwZXIodmFsW2tleV0sIHNlZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29weV8yO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZSh2YWx1ZSkge1xuICAgIHZhciB3b3JrU2V0ID0gbmV3IFNldChbdmFsdWVdKTtcbiAgICB3b3JrU2V0LmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoaXNOb25OdWxsT2JqZWN0KG9iaikgJiYgc2hhbGxvd0ZyZWV6ZShvYmopID09PSBvYmopIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc05vbk51bGxPYmplY3Qob2JqW25hbWVdKSlcbiAgICAgICAgICAgICAgICAgICAgd29ya1NldC5hZGQob2JqW25hbWVdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gc2hhbGxvd0ZyZWV6ZShvYmopIHtcbiAgICBpZiAoX19ERVZfXyAmJiAhT2JqZWN0LmlzRnJvemVuKG9iaikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIE9iamVjdC5mcmVlemUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBtYXliZURlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgZGVlcEZyZWV6ZShvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KG9ic2VydmVycywgbWV0aG9kLCBhcmd1bWVudCkge1xuICAgIHZhciBvYnNlcnZlcnNXaXRoTWV0aG9kID0gW107XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9icykgeyByZXR1cm4gb2JzW21ldGhvZF0gJiYgb2JzZXJ2ZXJzV2l0aE1ldGhvZC5wdXNoKG9icyk7IH0pO1xuICAgIG9ic2VydmVyc1dpdGhNZXRob2QuZm9yRWFjaChmdW5jdGlvbiAob2JzKSB7IHJldHVybiBvYnNbbWV0aG9kXShhcmd1bWVudCk7IH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY01hcChvYnNlcnZhYmxlLCBtYXBGbiwgY2F0Y2hGbikge1xuICAgIHJldHVybiBuZXcgemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBuZXh0ID0gb2JzZXJ2ZXIubmV4dCwgZXJyb3IgPSBvYnNlcnZlci5lcnJvciwgY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZTtcbiAgICAgICAgdmFyIGFjdGl2ZUNhbGxiYWNrQ291bnQgPSAwO1xuICAgICAgICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBwcm9taXNlUXVldWUgPSB7XG4gICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUoY2FsbGJhY2soKSk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gbWFrZUNhbGxiYWNrKGV4YW1pbmVyLCBkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgaWYgKGV4YW1pbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgKythY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm90aCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4YW1pbmVyKGFyZyk7IH07XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VRdWV1ZSA9IHByb21pc2VRdWV1ZS50aGVuKGJvdGgsIGJvdGgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1hY3RpdmVDYWxsYmFja0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCAmJiBuZXh0LmNhbGwob2JzZXJ2ZXIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYWN0aXZlQ2FsbGJhY2tDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoY2F1Z2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvci5jYWxsKG9ic2VydmVyLCBjYXVnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGRlbGVnYXRlICYmIGRlbGVnYXRlLmNhbGwob2JzZXJ2ZXIsIGFyZyk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhbmRsZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBtYWtlQ2FsbGJhY2sobWFwRm4sIG5leHQpLFxuICAgICAgICAgICAgZXJyb3I6IG1ha2VDYWxsYmFjayhjYXRjaEZuLCBlcnJvciksXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVDYWxsYmFja0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlLmNhbGwob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBzdWIgPSBvYnNlcnZhYmxlLnN1YnNjcmliZShoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1Yi51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0pO1xufVxuXG52YXIgY2FuVXNlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IucHJvZHVjdDsgfSkgIT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgY2FuVXNlV2Vha1NldCA9IHR5cGVvZiBXZWFrU2V0ID09PSAnZnVuY3Rpb24nO1xudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJztcbnZhciBjYW5Vc2VET00gPSB0eXBlb2YgZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudDsgfSkgPT09IFwiZnVuY3Rpb25cIjtcbnZhciB1c2luZ0pTRE9NID0gZ2xvYmFscy5tYXliZShmdW5jdGlvbiAoKSB7IHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJqc2RvbVwiKSA+PSAwOyB9KSB8fCBmYWxzZTtcbnZhciBjYW5Vc2VMYXlvdXRFZmZlY3QgPSBjYW5Vc2VET00gJiYgIXVzaW5nSlNET007XG5cbmZ1bmN0aW9uIGZpeE9ic2VydmFibGVTdWJjbGFzcyhzdWJjbGFzcykge1xuICAgIGZ1bmN0aW9uIHNldChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YmNsYXNzLCBrZXksIHsgdmFsdWU6IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlIH0pO1xuICAgIH1cbiAgICBpZiAoY2FuVXNlU3ltYm9sICYmIFN5bWJvbC5zcGVjaWVzKSB7XG4gICAgICAgIHNldChTeW1ib2wuc3BlY2llcyk7XG4gICAgfVxuICAgIHNldChcIkBAc3BlY2llc1wiKTtcbiAgICByZXR1cm4gc3ViY2xhc3M7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZUxpa2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbn1cbnZhciBDb25jYXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYi5fX2V4dGVuZHMoQ29uY2FzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25jYXN0KHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpOyB9O1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIF90aGlzLmFkZENvdW50ID0gMDtcbiAgICAgICAgX3RoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIF90aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgX3RoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuaGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXRlc3QgPSBbXCJuZXh0XCIsIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVPYnNlcnZlcnNTYWZlbHkoX3RoaXMub2JzZXJ2ZXJzLCBcIm5leHRcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfdGhpcy5zdWI7XG4gICAgICAgICAgICAgICAgaWYgKHN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN1YiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdCA9IFtcImVycm9yXCIsIGVycm9yXTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZU9ic2VydmVyc1NhZmVseShfdGhpcy5vYnNlcnZlcnMsIFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfdGhpcy5zdWI7XG4gICAgICAgICAgICAgICAgaWYgKHN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5zb3VyY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzdWIudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmxhdGVzdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxhdGVzdFswXSA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKF90aGlzLmxhdGVzdFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5KF90aGlzLm9ic2VydmVycywgXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1Byb21pc2VMaWtlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAob2JzKSB7IHJldHVybiBfdGhpcy5zdWIgPSBvYnMuc3Vic2NyaWJlKF90aGlzLmhhbmRsZXJzKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdWIgPSB2YWx1ZS5zdWJzY3JpYmUoX3RoaXMuaGFuZGxlcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2FuY2VsID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgX3RoaXMucmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICBfdGhpcy5zb3VyY2VzID0gW107XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVycy5jb21wbGV0ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5wcm9taXNlLmNhdGNoKGZ1bmN0aW9uIChfKSB7IH0pO1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgc291cmNlcyA9IFtuZXcgemVuT2JzZXJ2YWJsZVRzLk9ic2VydmFibGUoc291cmNlcyldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2VMaWtlKHNvdXJjZXMpKSB7XG4gICAgICAgICAgICBzb3VyY2VzLnRoZW4oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7IHJldHVybiBfdGhpcy5zdGFydChpdGVyYWJsZSk7IH0sIF90aGlzLmhhbmRsZXJzLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0KHNvdXJjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoc291cmNlcykge1xuICAgICAgICBpZiAodGhpcy5zdWIgIT09IHZvaWQgMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gQXJyYXkuZnJvbShzb3VyY2VzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUuZGVsaXZlckxhc3RNZXNzYWdlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxhdGVzdCkge1xuICAgICAgICAgICAgdmFyIG5leHRPckVycm9yID0gdGhpcy5sYXRlc3RbMF07XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gb2JzZXJ2ZXJbbmV4dE9yRXJyb3JdO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKG9ic2VydmVyLCB0aGlzLmxhdGVzdFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdWIgPT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBuZXh0T3JFcnJvciA9PT0gXCJuZXh0XCIgJiZcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5vYnNlcnZlcnMuaGFzKG9ic2VydmVyKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxpdmVyTGFzdE1lc3NhZ2Uob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgICAgICsrdGhpcy5hZGRDb3VudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uY2FzdC5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIHF1aWV0bHkpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcikgJiZcbiAgICAgICAgICAgIC0tdGhpcy5hZGRDb3VudCA8IDEgJiZcbiAgICAgICAgICAgICFxdWlldGx5KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbmNhc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgb25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICBuZXh0OiBvbmNlLFxuICAgICAgICAgICAgZXJyb3I6IG9uY2UsXG4gICAgICAgICAgICBjb21wbGV0ZTogb25jZSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5hZGRDb3VudDtcbiAgICAgICAgdGhpcy5hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgICAgIHRoaXMuYWRkQ291bnQgPSBjb3VudDtcbiAgICB9O1xuICAgIHJldHVybiBDb25jYXN0O1xufSh6ZW5PYnNlcnZhYmxlVHMuT2JzZXJ2YWJsZSkpO1xuZml4T2JzZXJ2YWJsZVN1YmNsYXNzKENvbmNhc3QpO1xuXG5mdW5jdGlvbiBpc05vbkVtcHR5QXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gZ3JhcGhRTFJlc3VsdEhhc0Vycm9yKHJlc3VsdCkge1xuICAgIHJldHVybiAocmVzdWx0LmVycm9ycyAmJiByZXN1bHQuZXJyb3JzLmxlbmd0aCA+IDApIHx8IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb21wYWN0KCkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JqZWN0c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoIW9iailcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgcHJlZml4Q291bnRzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gbWFrZVVuaXF1ZUlkKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IHByZWZpeENvdW50cy5nZXQocHJlZml4KSB8fCAxO1xuICAgIHByZWZpeENvdW50cy5zZXQocHJlZml4LCBjb3VudCArIDEpO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiOlwiKS5jb25jYXQoY291bnQsIFwiOlwiKS5jb25jYXQoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMikpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlGb3JEaXNwbGF5KHZhbHVlKSB7XG4gICAgdmFyIHVuZGVmSWQgPSBtYWtlVW5pcXVlSWQoXCJzdHJpbmdpZnlGb3JEaXNwbGF5XCIpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB2b2lkIDAgPyB1bmRlZklkIDogdmFsdWU7XG4gICAgfSkuc3BsaXQoSlNPTi5zdHJpbmdpZnkodW5kZWZJZCkpLmpvaW4oXCI8dW5kZWZpbmVkPlwiKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbXBhY3QoZGVmYXVsdHMsIG9wdGlvbnMsIG9wdGlvbnMudmFyaWFibGVzICYmIHtcbiAgICAgICAgdmFyaWFibGVzOiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgKGRlZmF1bHRzICYmIGRlZmF1bHRzLnZhcmlhYmxlcykpLCBvcHRpb25zLnZhcmlhYmxlcyksXG4gICAgfSk7XG59XG5cbmV4cG9ydHMuREVWID0gZ2xvYmFscy5ERVY7XG5leHBvcnRzLm1heWJlID0gZ2xvYmFscy5tYXliZTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IHplbk9ic2VydmFibGVUcy5PYnNlcnZhYmxlO1xuZXhwb3J0cy5Db25jYXN0ID0gQ29uY2FzdDtcbmV4cG9ydHMuRGVlcE1lcmdlciA9IERlZXBNZXJnZXI7XG5leHBvcnRzLmFkZFR5cGVuYW1lVG9Eb2N1bWVudCA9IGFkZFR5cGVuYW1lVG9Eb2N1bWVudDtcbmV4cG9ydHMuYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkID0gYXJndW1lbnRzT2JqZWN0RnJvbUZpZWxkO1xuZXhwb3J0cy5hc3luY01hcCA9IGFzeW5jTWFwO1xuZXhwb3J0cy5idWlsZFF1ZXJ5RnJvbVNlbGVjdGlvblNldCA9IGJ1aWxkUXVlcnlGcm9tU2VsZWN0aW9uU2V0O1xuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007XG5leHBvcnRzLmNhblVzZUxheW91dEVmZmVjdCA9IGNhblVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMuY2FuVXNlU3ltYm9sID0gY2FuVXNlU3ltYm9sO1xuZXhwb3J0cy5jYW5Vc2VXZWFrTWFwID0gY2FuVXNlV2Vha01hcDtcbmV4cG9ydHMuY2FuVXNlV2Vha1NldCA9IGNhblVzZVdlYWtTZXQ7XG5leHBvcnRzLmNoZWNrRG9jdW1lbnQgPSBjaGVja0RvY3VtZW50O1xuZXhwb3J0cy5jbG9uZURlZXAgPSBjbG9uZURlZXA7XG5leHBvcnRzLmNvbXBhY3QgPSBjb21wYWN0O1xuZXhwb3J0cy5jb25jYXRQYWdpbmF0aW9uID0gY29uY2F0UGFnaW5hdGlvbjtcbmV4cG9ydHMuY3JlYXRlRnJhZ21lbnRNYXAgPSBjcmVhdGVGcmFnbWVudE1hcDtcbmV4cG9ydHMuZml4T2JzZXJ2YWJsZVN1YmNsYXNzID0gZml4T2JzZXJ2YWJsZVN1YmNsYXNzO1xuZXhwb3J0cy5nZXREZWZhdWx0VmFsdWVzID0gZ2V0RGVmYXVsdFZhbHVlcztcbmV4cG9ydHMuZ2V0RGlyZWN0aXZlTmFtZXMgPSBnZXREaXJlY3RpdmVOYW1lcztcbmV4cG9ydHMuZ2V0RnJhZ21lbnREZWZpbml0aW9uID0gZ2V0RnJhZ21lbnREZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRGcmFnbWVudERlZmluaXRpb25zID0gZ2V0RnJhZ21lbnREZWZpbml0aW9ucztcbmV4cG9ydHMuZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uID0gZ2V0RnJhZ21lbnRGcm9tU2VsZWN0aW9uO1xuZXhwb3J0cy5nZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQgPSBnZXRGcmFnbWVudFF1ZXJ5RG9jdW1lbnQ7XG5leHBvcnRzLmdldEluY2x1c2lvbkRpcmVjdGl2ZXMgPSBnZXRJbmNsdXNpb25EaXJlY3RpdmVzO1xuZXhwb3J0cy5nZXRNYWluRGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uO1xuZXhwb3J0cy5nZXRPcGVyYXRpb25EZWZpbml0aW9uID0gZ2V0T3BlcmF0aW9uRGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0T3BlcmF0aW9uTmFtZSA9IGdldE9wZXJhdGlvbk5hbWU7XG5leHBvcnRzLmdldFF1ZXJ5RGVmaW5pdGlvbiA9IGdldFF1ZXJ5RGVmaW5pdGlvbjtcbmV4cG9ydHMuZ2V0U3RvcmVLZXlOYW1lID0gZ2V0U3RvcmVLZXlOYW1lO1xuZXhwb3J0cy5nZXRUeXBlbmFtZUZyb21SZXN1bHQgPSBnZXRUeXBlbmFtZUZyb21SZXN1bHQ7XG5leHBvcnRzLmdyYXBoUUxSZXN1bHRIYXNFcnJvciA9IGdyYXBoUUxSZXN1bHRIYXNFcnJvcjtcbmV4cG9ydHMuaGFzQ2xpZW50RXhwb3J0cyA9IGhhc0NsaWVudEV4cG9ydHM7XG5leHBvcnRzLmhhc0RpcmVjdGl2ZXMgPSBoYXNEaXJlY3RpdmVzO1xuZXhwb3J0cy5pc0RvY3VtZW50Tm9kZSA9IGlzRG9jdW1lbnROb2RlO1xuZXhwb3J0cy5pc0ZpZWxkID0gaXNGaWVsZDtcbmV4cG9ydHMuaXNJbmxpbmVGcmFnbWVudCA9IGlzSW5saW5lRnJhZ21lbnQ7XG5leHBvcnRzLmlzTm9uRW1wdHlBcnJheSA9IGlzTm9uRW1wdHlBcnJheTtcbmV4cG9ydHMuaXNOb25OdWxsT2JqZWN0ID0gaXNOb25OdWxsT2JqZWN0O1xuZXhwb3J0cy5pc1JlZmVyZW5jZSA9IGlzUmVmZXJlbmNlO1xuZXhwb3J0cy5pdGVyYXRlT2JzZXJ2ZXJzU2FmZWx5ID0gaXRlcmF0ZU9ic2VydmVyc1NhZmVseTtcbmV4cG9ydHMubWFrZVJlZmVyZW5jZSA9IG1ha2VSZWZlcmVuY2U7XG5leHBvcnRzLm1ha2VVbmlxdWVJZCA9IG1ha2VVbmlxdWVJZDtcbmV4cG9ydHMubWF5YmVEZWVwRnJlZXplID0gbWF5YmVEZWVwRnJlZXplO1xuZXhwb3J0cy5tZXJnZURlZXAgPSBtZXJnZURlZXA7XG5leHBvcnRzLm1lcmdlRGVlcEFycmF5ID0gbWVyZ2VEZWVwQXJyYXk7XG5leHBvcnRzLm1lcmdlT3B0aW9ucyA9IG1lcmdlT3B0aW9ucztcbmV4cG9ydHMub2Zmc2V0TGltaXRQYWdpbmF0aW9uID0gb2Zmc2V0TGltaXRQYWdpbmF0aW9uO1xuZXhwb3J0cy5yZWxheVN0eWxlUGFnaW5hdGlvbiA9IHJlbGF5U3R5bGVQYWdpbmF0aW9uO1xuZXhwb3J0cy5yZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQgPSByZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUNsaWVudFNldHNGcm9tRG9jdW1lbnQgPSByZW1vdmVDbGllbnRTZXRzRnJvbURvY3VtZW50O1xuZXhwb3J0cy5yZW1vdmVDb25uZWN0aW9uRGlyZWN0aXZlRnJvbURvY3VtZW50ID0gcmVtb3ZlQ29ubmVjdGlvbkRpcmVjdGl2ZUZyb21Eb2N1bWVudDtcbmV4cG9ydHMucmVtb3ZlRGlyZWN0aXZlc0Zyb21Eb2N1bWVudCA9IHJlbW92ZURpcmVjdGl2ZXNGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlbW92ZUZyYWdtZW50U3ByZWFkRnJvbURvY3VtZW50ID0gcmVtb3ZlRnJhZ21lbnRTcHJlYWRGcm9tRG9jdW1lbnQ7XG5leHBvcnRzLnJlc3VsdEtleU5hbWVGcm9tRmllbGQgPSByZXN1bHRLZXlOYW1lRnJvbUZpZWxkO1xuZXhwb3J0cy5zaG91bGRJbmNsdWRlID0gc2hvdWxkSW5jbHVkZTtcbmV4cG9ydHMuc3RvcmVLZXlOYW1lRnJvbUZpZWxkID0gc3RvcmVLZXlOYW1lRnJvbUZpZWxkO1xuZXhwb3J0cy5zdHJpbmdpZnlGb3JEaXNwbGF5ID0gc3RyaW5naWZ5Rm9yRGlzcGxheTtcbmV4cG9ydHMudmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uID0gdmFsdWVUb09iamVjdFJlcHJlc2VudGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbGl0aWVzLmNqcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcblxudmFyIGdlbmVyaWNNZXNzYWdlID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCI7XG52YXIgX2EgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YsIHNldFByb3RvdHlwZU9mID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XG4gICAgb2JqLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBvYmo7XG59IDogX2E7XG52YXIgSW52YXJpYW50RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWIuX19leHRlbmRzKEludmFyaWFudEVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludmFyaWFudEVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IHZvaWQgMCkgeyBtZXNzYWdlID0gZ2VuZXJpY01lc3NhZ2U7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZW9mIG1lc3NhZ2UgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgID8gZ2VuZXJpY01lc3NhZ2UgKyBcIjogXCIgKyBtZXNzYWdlICsgXCIgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9pbnZhcmlhbnQtcGFja2FnZXMpXCJcbiAgICAgICAgICAgIDogbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZnJhbWVzVG9Qb3AgPSAxO1xuICAgICAgICBfdGhpcy5uYW1lID0gZ2VuZXJpY01lc3NhZ2U7XG4gICAgICAgIHNldFByb3RvdHlwZU9mKF90aGlzLCBJbnZhcmlhbnRFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnZhcmlhbnRFcnJvcjtcbn0oRXJyb3IpKTtcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgSW52YXJpYW50RXJyb3IobWVzc2FnZSk7XG4gICAgfVxufVxudmFyIHZlcmJvc2l0eUxldmVscyA9IFtcImRlYnVnXCIsIFwibG9nXCIsIFwid2FyblwiLCBcImVycm9yXCIsIFwic2lsZW50XCJdO1xudmFyIHZlcmJvc2l0eUxldmVsID0gdmVyYm9zaXR5TGV2ZWxzLmluZGV4T2YoXCJsb2dcIik7XG5mdW5jdGlvbiB3cmFwQ29uc29sZU1ldGhvZChuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZlcmJvc2l0eUxldmVscy5pbmRleE9mKG5hbWUpID49IHZlcmJvc2l0eUxldmVsKSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGNvbnNvbGUubG9nIGlmIHRoaXMgaG9zdCBlbnZpcm9ubWVudCBoYXBwZW5zIG5vdCB0byBwcm92aWRlXG4gICAgICAgICAgICAvLyBhbGwgdGhlIGNvbnNvbGUuKiBtZXRob2RzIHdlIG5lZWQuXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gY29uc29sZVtuYW1lXSB8fCBjb25zb2xlLmxvZztcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4oZnVuY3Rpb24gKGludmFyaWFudCkge1xuICAgIGludmFyaWFudC5kZWJ1ZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZGVidWdcIik7XG4gICAgaW52YXJpYW50LmxvZyA9IHdyYXBDb25zb2xlTWV0aG9kKFwibG9nXCIpO1xuICAgIGludmFyaWFudC53YXJuID0gd3JhcENvbnNvbGVNZXRob2QoXCJ3YXJuXCIpO1xuICAgIGludmFyaWFudC5lcnJvciA9IHdyYXBDb25zb2xlTWV0aG9kKFwiZXJyb3JcIik7XG59KShpbnZhcmlhbnQgfHwgKGludmFyaWFudCA9IHt9KSk7XG5mdW5jdGlvbiBzZXRWZXJib3NpdHkobGV2ZWwpIHtcbiAgICB2YXIgb2xkID0gdmVyYm9zaXR5TGV2ZWxzW3ZlcmJvc2l0eUxldmVsXTtcbiAgICB2ZXJib3NpdHlMZXZlbCA9IE1hdGgubWF4KDAsIHZlcmJvc2l0eUxldmVscy5pbmRleE9mKGxldmVsKSk7XG4gICAgcmV0dXJuIG9sZDtcbn1cbnZhciBpbnZhcmlhbnQkMSA9IGludmFyaWFudDtcblxuZXhwb3J0cy5JbnZhcmlhbnRFcnJvciA9IEludmFyaWFudEVycm9yO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBpbnZhcmlhbnQkMTtcbmV4cG9ydHMuaW52YXJpYW50ID0gaW52YXJpYW50O1xuZXhwb3J0cy5zZXRWZXJib3NpdHkgPSBzZXRWZXJib3NpdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnZhcmlhbnQuY2pzLm1hcFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBnbG9iYWwsIGRlZmluZSwgU3lzdGVtLCBSZWZsZWN0LCBQcm9taXNlICovXHJcbnZhciBfX2V4dGVuZHM7XHJcbnZhciBfX2Fzc2lnbjtcclxudmFyIF9fcmVzdDtcclxudmFyIF9fZGVjb3JhdGU7XHJcbnZhciBfX3BhcmFtO1xyXG52YXIgX19tZXRhZGF0YTtcclxudmFyIF9fYXdhaXRlcjtcclxudmFyIF9fZ2VuZXJhdG9yO1xyXG52YXIgX19leHBvcnRTdGFyO1xyXG52YXIgX192YWx1ZXM7XHJcbnZhciBfX3JlYWQ7XHJcbnZhciBfX3NwcmVhZDtcclxudmFyIF9fc3ByZWFkQXJyYXlzO1xyXG52YXIgX19zcHJlYWRBcnJheTtcclxudmFyIF9fYXdhaXQ7XHJcbnZhciBfX2FzeW5jR2VuZXJhdG9yO1xyXG52YXIgX19hc3luY0RlbGVnYXRvcjtcclxudmFyIF9fYXN5bmNWYWx1ZXM7XHJcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdDtcclxudmFyIF9faW1wb3J0U3RhcjtcclxudmFyIF9faW1wb3J0RGVmYXVsdDtcclxudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ7XHJcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0O1xyXG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEluO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nO1xyXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuICAgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHR5cGVvZiB0aGlzID09PSBcIm9iamVjdFwiID8gdGhpcyA6IHt9O1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFwidHNsaWJcIiwgW1wiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHsgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihleHBvcnRzKSkpOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihtb2R1bGUuZXhwb3J0cykpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoY3JlYXRlRXhwb3J0ZXIocm9vdCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhwb3J0ZXIoZXhwb3J0cywgcHJldmlvdXMpIHtcclxuICAgICAgICBpZiAoZXhwb3J0cyAhPT0gcm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCB2KSB7IHJldHVybiBleHBvcnRzW2lkXSA9IHByZXZpb3VzID8gcHJldmlvdXMoaWQsIHYpIDogdjsgfTtcclxuICAgIH1cclxufSlcclxuKGZ1bmN0aW9uIChleHBvcnRlcikge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3Jlc3QgPSBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgICAgIHZhciB0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fZGVjb3JhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgICAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICAgICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgICAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3BhcmFtID0gZnVuY3Rpb24gKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX21ldGFkYXRhID0gZnVuY3Rpb24gKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hd2FpdGVyID0gZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fZ2VuZXJhdG9yID0gZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgICAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX19leHBvcnRTdGFyID0gZnVuY3Rpb24obSwgbykge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxuICAgIH07XHJcblxyXG4gICAgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbiAgICB9KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICAgICAgb1trMl0gPSBtW2tdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX192YWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICAgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICAgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcmVhZCA9IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgICBfX3NwcmVhZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgICBfX3NwcmVhZEFycmF5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fc3ByZWFkQXJyYXkgPSBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcclxuICAgICAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2F3YWl0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxuICAgIH07XHJcblxyXG4gICAgX19hc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICAgICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7ICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgICAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXN5bmNEZWxlZ2F0b3IgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBpLCBwO1xyXG4gICAgICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX2FzeW5jVmFsdWVzID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICAgICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgICAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgICAgICByZXR1cm4gY29va2VkO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG4gICAgfSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICAgICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2ltcG9ydFN0YXIgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgX19pbXBvcnREZWZhdWx0ID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgICAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgICAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICAgICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRJbiA9IGZ1bmN0aW9uIChzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgICAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnRlcihcIl9fZXh0ZW5kc1wiLCBfX2V4dGVuZHMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2Fzc2lnblwiLCBfX2Fzc2lnbik7XHJcbiAgICBleHBvcnRlcihcIl9fcmVzdFwiLCBfX3Jlc3QpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2RlY29yYXRlXCIsIF9fZGVjb3JhdGUpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3BhcmFtXCIsIF9fcGFyYW0pO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ldGFkYXRhXCIsIF9fbWV0YWRhdGEpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0ZXJcIiwgX19hd2FpdGVyKTtcclxuICAgIGV4cG9ydGVyKFwiX19nZW5lcmF0b3JcIiwgX19nZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2V4cG9ydFN0YXJcIiwgX19leHBvcnRTdGFyKTtcclxuICAgIGV4cG9ydGVyKFwiX19jcmVhdGVCaW5kaW5nXCIsIF9fY3JlYXRlQmluZGluZyk7XHJcbiAgICBleHBvcnRlcihcIl9fdmFsdWVzXCIsIF9fdmFsdWVzKTtcclxuICAgIGV4cG9ydGVyKFwiX19yZWFkXCIsIF9fcmVhZCk7XHJcbiAgICBleHBvcnRlcihcIl9fc3ByZWFkXCIsIF9fc3ByZWFkKTtcclxuICAgIGV4cG9ydGVyKFwiX19zcHJlYWRBcnJheXNcIiwgX19zcHJlYWRBcnJheXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3NwcmVhZEFycmF5XCIsIF9fc3ByZWFkQXJyYXkpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0XCIsIF9fYXdhaXQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jR2VuZXJhdG9yXCIsIF9fYXN5bmNHZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jRGVsZWdhdG9yXCIsIF9fYXN5bmNEZWxlZ2F0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jVmFsdWVzXCIsIF9fYXN5bmNWYWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ha2VUZW1wbGF0ZU9iamVjdFwiLCBfX21ha2VUZW1wbGF0ZU9iamVjdCk7XHJcbiAgICBleHBvcnRlcihcIl9faW1wb3J0U3RhclwiLCBfX2ltcG9ydFN0YXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2ltcG9ydERlZmF1bHRcIiwgX19pbXBvcnREZWZhdWx0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZEdldFwiLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZFNldFwiLCBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KTtcclxuICAgIGV4cG9ydGVyKFwiX19jbGFzc1ByaXZhdGVGaWVsZEluXCIsIF9fY2xhc3NQcml2YXRlRmllbGRJbik7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIG1heWJlKHRodW5rKSB7XG4gIHRyeSB7IHJldHVybiB0aHVuaygpIH0gY2F0Y2ggKF8pIHt9XG59XG5cbnZhciBzYWZlR2xvYmFsID0gKFxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIGdsb2JhbFRoaXMgfSkgfHxcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiB3aW5kb3cgfSkgfHxcbiAgbWF5YmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmIH0pIHx8XG4gIG1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2xvYmFsIH0pIHx8XG4gIC8vIFdlIGRvbid0IGV4cGVjdCB0aGUgRnVuY3Rpb24gY29uc3RydWN0b3IgZXZlciB0byBiZSBpbnZva2VkIGF0IHJ1bnRpbWUsIGFzXG4gIC8vIGxvbmcgYXMgYXQgbGVhc3Qgb25lIG9mIGdsb2JhbFRoaXMsIHdpbmRvdywgc2VsZiwgb3IgZ2xvYmFsIGlzIGRlZmluZWQsIHNvXG4gIC8vIHdlIGFyZSB1bmRlciBubyBvYmxpZ2F0aW9uIHRvIG1ha2UgaXQgZWFzeSBmb3Igc3RhdGljIGFuYWx5c2lzIHRvb2xzIHRvXG4gIC8vIGRldGVjdCBzeW50YWN0aWMgdXNhZ2Ugb2YgdGhlIEZ1bmN0aW9uIGNvbnN0cnVjdG9yLiBJZiB5b3UgdGhpbmsgeW91IGNhblxuICAvLyBpbXByb3ZlIHlvdXIgc3RhdGljIGFuYWx5c2lzIHRvIGRldGVjdCB0aGlzIG9iZnVzY2F0aW9uLCB0aGluayBhZ2Fpbi4gVGhpc1xuICAvLyBpcyBhbiBhcm1zIHJhY2UgeW91IGNhbm5vdCB3aW4sIGF0IGxlYXN0IG5vdCBpbiBKYXZhU2NyaXB0LlxuICBtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIG1heWJlLmNvbnN0cnVjdG9yKFwicmV0dXJuIHRoaXNcIikoKSB9KVxuKTtcblxudmFyIG5lZWRUb1JlbW92ZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbnN0YWxsKCkge1xuICBpZiAoc2FmZUdsb2JhbCAmJlxuICAgICAgIW1heWJlKGZ1bmN0aW9uKCkgeyByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSkgJiZcbiAgICAgICFtYXliZShmdW5jdGlvbigpIHsgcmV0dXJuIHByb2Nlc3MgfSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2FmZUdsb2JhbCwgXCJwcm9jZXNzXCIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGVudjoge1xuICAgICAgICAgIC8vIFRoaXMgZGVmYXVsdCBuZWVkcyB0byBiZSBcInByb2R1Y3Rpb25cIiBpbnN0ZWFkIG9mIFwiZGV2ZWxvcG1lbnRcIiwgdG9cbiAgICAgICAgICAvLyBhdm9pZCB0aGUgcHJvYmxlbSBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL3B1bGwvMjg5NFxuICAgICAgICAgIC8vIHdpbGwgZXZlbnR1YWxseSBzb2x2ZSwgb25jZSBtZXJnZWQgYW5kIHJlbGVhc2VkLlxuICAgICAgICAgIE5PREVfRU5WOiBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBMZXQgYW55b25lIGVsc2UgY2hhbmdlIGdsb2JhbC5wcm9jZXNzIGFzIHRoZXkgc2VlIGZpdCwgYnV0IGhpZGUgaXQgZnJvbVxuICAgICAgLy8gT2JqZWN0LmtleXMoZ2xvYmFsKSBlbnVtZXJhdGlvbi5cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG4gICAgbmVlZFRvUmVtb3ZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyBDYWxsIGluc3RhbGwoKSBhdCBsZWFzdCBvbmNlLCB3aGVuIHRoaXMgbW9kdWxlIGlzIGltcG9ydGVkLlxuaW5zdGFsbCgpO1xuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGlmIChuZWVkVG9SZW1vdmUpIHtcbiAgICBkZWxldGUgc2FmZUdsb2JhbC5wcm9jZXNzO1xuICAgIG5lZWRUb1JlbW92ZSA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGluc3RhbGw7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY2pzLm1hcFxuIiwiaW1wb3J0IHtBcG9sbG9Qcm92aWRlcn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NvbmZpZy9hcG9sbG8nXHJcbmltcG9ydCBQZWRpZG9TdGF0ZSBmcm9tICcuLi9jb250ZXh0L3BlZGlkb3MvUGVkaWRvU3RhdGUnO1xyXG4vL2ltcG9ydCBjc3MgZm9yIG5leHRcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICAgICAgPFBlZGlkb1N0YXRlPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+ICAgIFxyXG4gICAgICAgICAgICA8L1BlZGlkb1N0YXRlPiBcclxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJleHBvcnQgY29uc3QgU0VMRUNDSU9OQVJfQ0xJRU5URSA9ICdTRUxFQ0NJT05BUl9DTElFTlRFJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDQ0lPTkFSX1BST0RVQ1RPID0gJ1NFTEVDQ0lPTkFSX1BST0RVQ1RPJztcclxuZXhwb3J0IGNvbnN0IENBTlRJREFEX1BST0RVQ1RPUyA9ICdDQU5USURBRF9QUk9EVUNUT1MnO1xyXG5leHBvcnQgY29uc3QgQUNUVUFMSVpBUl9UT1RBTCA9ICdBQ1RVQUxJWkFSX1RPVEFMJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdyeS9lcXVhbGl0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd3J5L3RyaWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtd3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9wdGltaXNtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN5bWJvbC1vYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInplbi1vYnNlcnZhYmxlL2luZGV4LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=