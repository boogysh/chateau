/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/chateau/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 156);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(114);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_use_sync_external_store_shim__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_use_sync_external_store_shim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_use_sync_external_store_shim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_use_sync_external_store_shim_with_selector__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_use_sync_external_store_shim_with_selector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_use_sync_external_store_shim_with_selector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_reactBatchedUpdates__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_batch__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hooks_useSelector__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_connect__ = __webpack_require__(29);
/* unused harmony reexport batch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exports__ = __webpack_require__(106);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__exports__, "Provider")) __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_6__exports__["Provider"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__exports__, "useSelector")) __webpack_require__.d(__webpack_exports__, "useSelector", function() { return __WEBPACK_IMPORTED_MODULE_6__exports__["useSelector"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__exports__, "useDispatch")) __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return __WEBPACK_IMPORTED_MODULE_6__exports__["useDispatch"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__exports__, "connect")) __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_6__exports__["connect"]; });
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__hooks_useSelector__["a" /* initializeUseSelector */])(__WEBPACK_IMPORTED_MODULE_1_use_sync_external_store_shim_with_selector__["useSyncExternalStoreWithSelector"]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__components_connect__["a" /* initializeConnect */])(__WEBPACK_IMPORTED_MODULE_0_use_sync_external_store_shim__["useSyncExternalStore"]); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_batch__["a" /* setBatch */])(__WEBPACK_IMPORTED_MODULE_2__utils_reactBatchedUpdates__["a" /* unstable_batchedUpdates */]);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const ReactReduxContext = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createContext"])(null);
/* harmony export (immutable) */ __webpack_exports__["a"] = ReactReduxContext;


if (false) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReactReduxContext);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserRouter; });
/* unused harmony export Form */
/* unused harmony export HashRouter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NavLink; });
/* unused harmony export ScrollRestoration */
/* unused harmony export UNSAFE_useScrollRestoration */
/* unused harmony export createBrowserRouter */
/* unused harmony export createHashRouter */
/* unused harmony export createSearchParams */
/* unused harmony export unstable_HistoryRouter */
/* unused harmony export useBeforeUnload */
/* unused harmony export useFetcher */
/* unused harmony export useFetchers */
/* unused harmony export useFormAction */
/* unused harmony export useLinkClickHandler */
/* unused harmony export useSearchParams */
/* unused harmony export useSubmit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(40);
/* unused harmony reexport AbortedDeferredError */
/* unused harmony reexport Await */
/* unused harmony reexport MemoryRouter */
/* unused harmony reexport Navigate */
/* unused harmony reexport NavigationType */
/* unused harmony reexport Outlet */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1_react_router__["a"]; });
/* unused harmony reexport Router */
/* unused harmony reexport RouterProvider */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_react_router__["b"]; });
/* unused harmony reexport UNSAFE_DataRouterContext */
/* unused harmony reexport UNSAFE_DataRouterStateContext */
/* unused harmony reexport UNSAFE_LocationContext */
/* unused harmony reexport UNSAFE_NavigationContext */
/* unused harmony reexport UNSAFE_RouteContext */
/* unused harmony reexport UNSAFE_enhanceManualRouteObjects */
/* unused harmony reexport createMemoryRouter */
/* unused harmony reexport createPath */
/* unused harmony reexport createRoutesFromChildren */
/* unused harmony reexport createRoutesFromElements */
/* unused harmony reexport defer */
/* unused harmony reexport generatePath */
/* unused harmony reexport isRouteErrorResponse */
/* unused harmony reexport json */
/* unused harmony reexport matchPath */
/* unused harmony reexport matchRoutes */
/* unused harmony reexport parsePath */
/* unused harmony reexport redirect */
/* unused harmony reexport renderMatches */
/* unused harmony reexport resolvePath */
/* unused harmony reexport useActionData */
/* unused harmony reexport useAsyncError */
/* unused harmony reexport useAsyncValue */
/* unused harmony reexport useHref */
/* unused harmony reexport useInRouterContext */
/* unused harmony reexport useLoaderData */
/* unused harmony reexport useLocation */
/* unused harmony reexport useMatch */
/* unused harmony reexport useMatches */
/* unused harmony reexport useNavigate */
/* unused harmony reexport useNavigation */
/* unused harmony reexport useNavigationType */
/* unused harmony reexport useOutlet */
/* unused harmony reexport useOutletContext */
/* unused harmony reexport useParams */
/* unused harmony reexport useResolvedPath */
/* unused harmony reexport useRevalidator */
/* unused harmony reexport useRouteError */
/* unused harmony reexport useRouteLoaderData */
/* unused harmony reexport useRoutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remix_run_router__ = __webpack_require__(9);
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);

  for (let key of defaultSearchParams.keys()) {
    if (!searchParams.has(key)) {
      defaultSearchParams.getAll(key).forEach(value => {
        searchParams.append(key, value);
      });
    }
  }

  return searchParams;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
      _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative"];
//#region Routers
////////////////////////////////////////////////////////////////////////////////

function createBrowserRouter(routes, opts) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["a" /* createRouter */])({
    basename: opts == null ? void 0 : opts.basename,
    history: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["b" /* createBrowserHistory */])({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["c" /* UNSAFE_enhanceManualRouteObjects */])(routes)
  }).initialize();
}
function createHashRouter(routes, opts) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["a" /* createRouter */])({
    basename: opts == null ? void 0 : opts.basename,
    history: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["c" /* createHashHistory */])({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["c" /* UNSAFE_enhanceManualRouteObjects */])(routes)
  }).initialize();
}

function parseHydrationData() {
  var _window;

  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;

  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }

  return state;
}

function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};

  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new __WEBPACK_IMPORTED_MODULE_2__remix_run_router__["d" /* ErrorResponse */](val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
      // because we don't serialize SSR stack traces for security reasons

      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }

  return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */


function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = __WEBPACK_IMPORTED_MODULE_0_react__["useRef"]();

  if (historyRef.current == null) {
    historyRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["b" /* createBrowserHistory */])({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = __WEBPACK_IMPORTED_MODULE_0_react__["useState"]({
    action: history.action,
    location: history.location
  });
  __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"](() => history.listen(setState), [history]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["d" /* Router */], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = __WEBPACK_IMPORTED_MODULE_0_react__["useRef"]();

  if (historyRef.current == null) {
    historyRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["c" /* createHashHistory */])({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = __WEBPACK_IMPORTED_MODULE_0_react__["useState"]({
    action: history.action,
    location: history.location
  });
  __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"](() => history.listen(setState), [history]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["d" /* Router */], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */

function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = __WEBPACK_IMPORTED_MODULE_0_react__["useState"]({
    action: history.action,
    location: history.location
  });
  __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"](() => history.listen(setState), [history]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["d" /* Router */], {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (false) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
/**
 * The public API for rendering a history-aware <a>.
 */

const Link = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["forwardRef"](function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["e" /* useHref */])(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", _extends({}, rest, {
      href: href,
      onClick: reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (false) {
  Link.displayName = "Link";
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["forwardRef"](function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["f" /* useResolvedPath */])(to, {
    relative: rest.relative
  });
  let location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["g" /* useLocation */])();
  let routerState = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1_react_router__["h" /* UNSAFE_DataRouterStateContext */]);
  let {
    navigator
  } = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1_react_router__["i" /* UNSAFE_NavigationContext */]);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});

if (false) {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["forwardRef"]((props, ref) => {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FormImpl, _extends({}, props, {
    ref: ref
  }));
});

if (false) {
  Form.displayName = "Form";
}

const FormImpl = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["forwardRef"]((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative
    });
  };

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});

if (false) {
  FormImpl.displayName = "FormImpl";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */


function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}

if (false) {
  ScrollRestoration.displayName = "ScrollRestoration";
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////


var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1_react_router__["j" /* UNSAFE_DataRouterContext */]);
  !ctx ?  false ? invariant(false, getDataRouterConsoleError(hookName)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1_react_router__["h" /* UNSAFE_DataRouterStateContext */]);
  !state ?  false ? invariant(false, getDataRouterConsoleError(hookName)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["k" /* useNavigate */])();
  let location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["g" /* useLocation */])();
  let path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["f" /* useResolvedPath */])(to, {
    relative
  });
  return __WEBPACK_IMPORTED_MODULE_0_react__["useCallback"](event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["l" /* createPath */])(location) === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["l" /* createPath */])(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : void 0;
  let defaultSearchParamsRef = __WEBPACK_IMPORTED_MODULE_0_react__["useRef"](createSearchParams(defaultInit));
  let location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["g" /* useLocation */])();
  let searchParams = __WEBPACK_IMPORTED_MODULE_0_react__["useMemo"](() => getSearchParamsForLocation(location.search, defaultSearchParamsRef.current), [location.search]);
  let navigate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["k" /* useNavigate */])();
  let setSearchParams = __WEBPACK_IMPORTED_MODULE_0_react__["useCallback"]((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */

function useSubmit() {
  return useSubmitImpl();
}

function useSubmitImpl(fetcherKey, routeId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return __WEBPACK_IMPORTED_MODULE_0_react__["useCallback"](function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(routeId != null) ?  false ? invariant(false, "No routeId available for useFetcher()") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}

function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1_react_router__["i" /* UNSAFE_NavigationContext */]);
  let routeContext = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1_react_router__["m" /* UNSAFE_RouteContext */]);
  !routeContext ?  false ? invariant(false, "useFormAction must be used inside a RouteContext") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
  let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  let path = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["f" /* useResolvedPath */])(action ? action : ".", {
    relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927


  let location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["g" /* useLocation */])();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions


  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["f" /* joinPaths */])([basename, path.pathname]);
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["l" /* createPath */])(path);
}

function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["forwardRef"]((props, ref) => {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](FormImpl, _extends({}, props, {
      ref: ref,
      fetcherKey: fetcherKey,
      routeId: routeId
    }));
  });

  if (false) {
    FetcherForm.displayName = "fetcher.Form";
  }

  return FetcherForm;
}

let fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */

function useFetcher() {
  var _route$matches;

  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = __WEBPACK_IMPORTED_MODULE_0_react__["useContext"](__WEBPACK_IMPORTED_MODULE_1_react_router__["m" /* UNSAFE_RouteContext */]);
  !route ?  false ? invariant(false, "useFetcher must be used inside a RouteContext") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ?  false ? invariant(false, "useFetcher can only be used on routes that contain a unique \"id\"") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
  let [fetcherKey] = __WEBPACK_IMPORTED_MODULE_0_react__["useState"](() => String(++fetcherId));
  let [Form] = __WEBPACK_IMPORTED_MODULE_0_react__["useState"](() => {
    !routeId ?  false ? invariant(false, "No routeId available for fetcher.Form()") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = __WEBPACK_IMPORTED_MODULE_0_react__["useState"](() => href => {
    !router ?  false ? invariant(false, "No router available for fetcher.load()") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
    !routeId ?  false ? invariant(false, "No routeId available for fetcher.load()") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__remix_run_router__["e" /* invariant */])(false) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitImpl(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = __WEBPACK_IMPORTED_MODULE_0_react__["useMemo"](() => _extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  __WEBPACK_IMPORTED_MODULE_0_react__["useEffect"](() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No fetcher available to clean up from useFetcher()");
        return;
      }

      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */

function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */

function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["g" /* useLocation */])();
  let matches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["n" /* useMatches */])();
  let navigation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["o" /* useNavigation */])(); // Trigger manual scroll restoration while we're active

  __WEBPACK_IMPORTED_MODULE_0_react__["useEffect"](() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []); // Save positions on unload

  useBeforeUnload(__WEBPACK_IMPORTED_MODULE_0_react__["useCallback"](() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }

    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches])); // Read in any saved scroll locations

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"](() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);

        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {// no-op, use default empty object
      }
    }, [storageKey]); // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks

    __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"](() => {
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, getKey]); // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"](() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      } // been here before, scroll to it


      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      } // try to scroll to the hash


      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));

        if (el) {
          el.scrollIntoView();
          return;
        }
      } // Opt out of scroll reset if this link requested it


      if (preventScrollReset === true) {
        return;
      } // otherwise go to the top on new locations


      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */


function useBeforeUnload(callback) {
  __WEBPACK_IMPORTED_MODULE_0_react__["useEffect"](() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Utils
////////////////////////////////////////////////////////////////////////////////

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} //#endregion


//# sourceMappingURL=index.js.map


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashLink; });
/* unused harmony export NavHashLink */
/* unused harmony export genericHashLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(3);




/*! *****************************************************************************
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var hashFragment = '';
var observer = null;
var asyncTimerId = null;
var scrollFunction = null;
function reset() {
    hashFragment = '';
    if (observer !== null)
        observer.disconnect();
    if (asyncTimerId !== null) {
        window.clearTimeout(asyncTimerId);
        asyncTimerId = null;
    }
}
function isInteractiveElement(element) {
    var formTags = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
    var linkTags = ['A', 'AREA'];
    return ((formTags.includes(element.tagName) && !element.hasAttribute('disabled')) ||
        (linkTags.includes(element.tagName) && element.hasAttribute('href')));
}
function getElAndScroll() {
    var element = null;
    if (hashFragment === '#') {
        // use document.body instead of document.documentElement because of a bug in smoothscroll-polyfill in safari
        // see https://github.com/iamdustan/smoothscroll/issues/138
        // while smoothscroll-polyfill is not included, it is the recommended way to implement smoothscroll
        // in browsers that don't natively support el.scrollIntoView({ behavior: 'smooth' })
        element = document.body;
    }
    else {
        // check for element with matching id before assume '#top' is the top of the document
        // see https://html.spec.whatwg.org/multipage/browsing-the-web.html#target-element
        var id = hashFragment.replace('#', '');
        element = document.getElementById(id);
        if (element === null && hashFragment === '#top') {
            // see above comment for why document.body instead of document.documentElement
            element = document.body;
        }
    }
    if (element !== null) {
        scrollFunction(element);
        // update focus to where the page is scrolled to
        // unfortunately this doesn't work in safari (desktop and iOS) when blur() is called
        var originalTabIndex = element.getAttribute('tabindex');
        if (originalTabIndex === null && !isInteractiveElement(element)) {
            element.setAttribute('tabindex', -1);
        }
        element.focus({ preventScroll: true });
        if (originalTabIndex === null && !isInteractiveElement(element)) {
            // for some reason calling blur() in safari resets the focus region to where it was previously,
            // if blur() is not called it works in safari, but then are stuck with default focus styles
            // on an element that otherwise might never had focus styles applied, so not an option
            element.blur();
            element.removeAttribute('tabindex');
        }
        reset();
        return true;
    }
    return false;
}
function hashLinkScroll(timeout) {
    // Push onto callback queue so it runs after the DOM is updated
    window.setTimeout(function () {
        if (getElAndScroll() === false) {
            if (observer === null) {
                observer = new MutationObserver(getElAndScroll);
            }
            observer.observe(document, {
                attributes: true,
                childList: true,
                subtree: true,
            });
            // if the element doesn't show up in specified timeout or 10 seconds, stop checking
            asyncTimerId = window.setTimeout(function () {
                reset();
            }, timeout || 10000);
        }
    }, 0);
}
function genericHashLink(As) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.forwardRef(function (props, ref) {
        var linkHash = '';
        if (typeof props.to === 'string' && props.to.includes('#')) {
            linkHash = "#" + props.to.split('#').slice(1).join('#');
        }
        else if (typeof props.to === 'object' &&
            typeof props.to.hash === 'string') {
            linkHash = props.to.hash;
        }
        var passDownProps = {};
        if (As === __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* NavLink */]) {
            passDownProps.isActive = function (match, location) {
                return match && match.isExact && location.hash === linkHash;
            };
        }
        function handleClick(e) {
            reset();
            hashFragment = props.elementId ? "#" + props.elementId : linkHash;
            if (props.onClick)
                props.onClick(e);
            if (hashFragment !== '' &&
                // ignore non-vanilla click events, same as react-router
                // below logic adapted from react-router: https://github.com/ReactTraining/react-router/blob/fc91700e08df8147bd2bb1be19a299cbb14dbcaa/packages/react-router-dom/modules/Link.js#L43-L48
                !e.defaultPrevented && // onClick prevented default
                e.button === 0 && // ignore everything but left clicks
                (!props.target || props.target === '_self') && // let browser handle "target=_blank" etc
                !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) // ignore clicks with modifier keys
            ) {
                scrollFunction =
                    props.scroll ||
                        (function (el) {
                            return props.smooth
                                ? el.scrollIntoView({ behavior: 'smooth' })
                                : el.scrollIntoView();
                        });
                hashLinkScroll(props.timeout);
            }
        }
        var filteredProps = __rest(props, ["scroll", "smooth", "timeout", "elementId"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(As, __assign({}, passDownProps, filteredProps, { onClick: handleClick, ref: ref }), props.children));
    });
}
var HashLink = genericHashLink(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Link */]);
var NavHashLink = genericHashLink(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* NavLink */]);
if (false) {
    HashLink.displayName = 'HashLink';
    NavHashLink.displayName = 'NavHashLink';
    var propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
        scroll: PropTypes.func,
        timeout: PropTypes.number,
        elementId: PropTypes.string,
        to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    };
    HashLink.propTypes = propTypes;
    NavHashLink.propTypes = propTypes;
}


//# sourceMappingURL=react-router-hash-link.esm.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Banner;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_icons_chateau_f3_png__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_icons_chateau_f3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_icons_chateau_f3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_ext_entree_chateau_jpg__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_ext_entree_chateau_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_images_ext_entree_chateau_jpg__);


// import "../../style.css"


function Banner() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "header",
    { id: "header" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "bg-header" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "titre" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_1__assets_icons_chateau_f3_png___default.a, alt: "icon chateau" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h1",
        { className: "banner_h1" },
        "Chateau de Fontainebleau"
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h2",
      null,
      "Petit guide d'un bellifontain pour faciliter votre visite"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "banner_solde" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "-5%"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h4",
        null,
        "CODE5"
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      null,
      "Buga Victor"
    )
  );
}

// export default function Banner() {
//   return (
//     <header id="header">
//       <div className="bg-header"></div>
//       <div className="bg_img_wrapper">
//         <img src={img} alt="entrée chateau" className="banner_img" />
//       </div>
//       <div className="titre">
//         <img src={iconChateau} alt="icon chateau" />
//         <h1 className="banner_h1">Chateau de Fontainebleau</h1>
//       </div>
//       <h2>Petit guide d'un bellifontain pour faciliter votre visite</h2>
//       <p>Buga Victor</p>
//     </header>
//   );
// }

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = unsafeStringify;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(8);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* unused harmony default export */ var _unused_webpack_default_export = (stringify);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regex_js__ = __webpack_require__(148);


function validate(uuid) {
  return typeof uuid === 'string' && __WEBPACK_IMPORTED_MODULE_0__regex_js__["a" /* default */].test(uuid);
}

/* harmony default export */ __webpack_exports__["a"] = (validate);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return AbortedDeferredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ErrorResponse; });
/* unused harmony export IDLE_FETCHER */
/* unused harmony export IDLE_NAVIGATION */
/* unused harmony export UNSAFE_convertRoutesToDataRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPathContributingMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRouter; });
/* unused harmony export createStaticHandler */
/* unused harmony export defer */
/* unused harmony export generatePath */
/* unused harmony export getStaticContextFromError */
/* unused harmony export getToPathname */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isRouteErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return joinPaths; });
/* unused harmony export json */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return matchRoutes; });
/* unused harmony export normalizePathname */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parsePath; });
/* unused harmony export redirect */
/* unused harmony export resolvePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return resolveTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return stripBasename; });
/* unused harmony export warning */
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;

  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }

  function getCurrentLocation() {
    return entries[index];
  }

  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }

    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }

  let history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return getCurrentLocation();
    },

    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },

    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },

    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation
        });
      }
    },

    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation
        });
      }
    },

    go(delta) {
      action = Action.Pop;
      index = clampIndex(index + delta);

      if (listener) {
        listener({
          action,
          location: getCurrentLocation()
        });
      }
    },

    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }

  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";

    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }

  function validateHashLocation(location, to) {
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }

  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

function warning$1(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location) {
  return {
    usr: location.state,
    key: location.key
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}
function createClientSideURL(location) {
  // window.location.origin is "null" (the literal string value) in Firefox
  // under certain conditions, notably when serving from a local HTML file
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
  let base = typeof window !== "undefined" && typeof window.location !== "undefined" && window.location.origin !== "null" ? window.location.origin : window.location.href;
  let href = typeof location === "string" ? location : createPath(location);
  invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
  return new URL(href, base);
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;

  function handlePop() {
    action = Action.Pop;

    if (listener) {
      listener({
        action,
        location: history.location
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    let historyState = getHistoryState(location);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location
      });
    }
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createClientSideURL(typeof to === "string" ? to : createPath(to));
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router


function convertRoutesToDataRoutes(routes, parentPath, allIds) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  if (allIds === void 0) {
    allIds = new Set();
  }

  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!allIds.has(id), "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    allIds.add(id);

    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        id
      });

      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : undefined
      });

      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant( // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };

  routes.forEach((route, index) => {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */


function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  let required = first.replace(/\?$/, "");

  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }

  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push(...restExploded);
  } // for absolute paths, ensure `/` instead of empty segment


  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */


function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }

  let path = originalPath;

  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }

  return path.replace(/^:(\w+)/g, (_, key) => {
    invariant(params[key] != null, "Missing \":" + key + "\" param");
    return params[key];
  }).replace(/\/:(\w+)/g, (_, key) => {
    invariant(params[key] != null, "Missing \":" + key + "\" param");
    return "/" + params[key];
  }).replace(/(\/?)\*/, (_, prefix, __, str) => {
    const star = "*";

    if (params[star] == null) {
      // If no splat was provided, trim the trailing slash _unless_ it's
      // the entire path
      return str === "/*" ? "/" : "";
    } // Apply the splat


    return "" + prefix + params[star];
  });
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */

function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * @private
 */

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */

const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data) {
    this.pendingKeys = new Set();
    this.subscriber = undefined;
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();

    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));

    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
  }

  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }

    this.pendingKeys.add(key); // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject

    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values

    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }

  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }

    this.pendingKeys.delete(key);

    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }

    const subscriber = this.subscriber;

    if (error) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      subscriber && subscriber(false);
      return Promise.reject(error);
    }

    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    subscriber && subscriber(false);
    return data;
  }

  subscribe(fn) {
    this.subscriber = fn;
  }

  cancel() {
    this.controller.abort();
    this.pendingKeys.forEach((v, k) => this.pendingKeys.delete(k));
    let subscriber = this.subscriber;
    subscriber && subscriber(true);
  }

  async resolveData(signal) {
    let aborted = false;

    if (!this.done) {
      let onAbort = () => this.cancel();

      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);

          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }

    return aborted;
  }

  get done() {
    return this.pendingKeys.size === 0;
  }

  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }

}

function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}

function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }

  if (value._error) {
    throw value._error;
  }

  return value._data;
}

function defer(data) {
  return new DeferredData(data);
}
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */

const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }

  let responseInit = init;

  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }

  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class ErrorResponse {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }

    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;

    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response throw from an action/loader
 */

function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const isServer = !isBrowser; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */

function createRouter(init) {
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let dataRoutes = convertRoutesToDataRoutes(init.routes); // Cleanup function for history

  let unlistenHistory = null; // Externally-provided functions to call on all state changes

  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;

  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }

  let initialized = !initialMatches.some(m => m.route.loader) || init.hydrationData != null;
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  let pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  let pendingPreventScrollReset = false; // AbortController for the active navigation

  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  let fetchControllers = new Map(); // Track loads based on the order in which they started

  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  let activeDeferreds = new Map(); // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location
      } = _ref;
      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history

    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }

    return router;
  } // Clean up a router and it's side effects


  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }

    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
  } // Subscribe to state updates for the router


  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  } // Update our state and notify the calling context of the change


  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState


  function completeNavigation(location, newState) {
    var _location$state;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;

    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes


    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      // Don't restore on submission navigations
      restoreScrollPosition: state.navigation.formData ? false : getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset: pendingPreventScrollReset
    }));

    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars


    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission


  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }

    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(to, opts);
    let location = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history

    location = _extends({}, location, init.history.encodeLocation(location));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;

    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }

    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    return await startNavigation(historyAction, location, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round


  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation


    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes


    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation


  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion

    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(dataRoutes, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes); // Cancel all pending deferred on 404s since we don't keep any routes

      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    } // Short circuit if it's only a hash change


    if (isHashChangeOnly(state.location, location)) {
      completeNavigation(location, {
        matches
      });
      return;
    } // Create a controller/Request for this navigation


    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;

    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });

      if (actionOutput.shortCircuited) {
        return;
      }

      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;

      let navigation = _extends({
        state: "loading",
        location
      }, opts.submission);

      loadingNavigation = navigation; // Create a GET request for the loaders

      request = new Request(request.url, {
        signal: request.signal
      });
    } // Call loaders


    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);

    if (shortCircuited) {
      return;
    } // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation


    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors


  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads(); // Put us in a submitting state

    let navigation = _extends({
      state: "submitting",
      location
    }, submission);

    updateState({
      navigation
    }); // Call our action and get the result

    let result;
    let actionMatch = getTargetMatch(matches, location);

    if (!actionMatch.route.action) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, router.basename);

      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }

    if (isRedirectResult(result)) {
      let replace;

      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }

      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again

      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }

      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }

    if (isDeferredResult(result)) {
      throw new Error("defer() is not supported in actions");
    }

    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.


  async function handleLoaders(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation;

    if (!loadingNavigation) {
      let navigation = _extends({
        state: "loading",
        location,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      }, submission);

      loadingNavigation = navigation;
    } // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available


    let activeSubmission = submission ? submission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
      formMethod: loadingNavigation.formMethod,
      formAction: loadingNavigation.formAction,
      formData: loadingNavigation.formData,
      formEncType: loadingNavigation.formEncType
    } : undefined;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches); // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op

    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}));
      return {
        shortCircuited: true
      };
    } // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)


    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(_ref2 => {
        let [key] = _ref2;
        let fetcher = state.fetchers.get(key);
        let revalidatingFetcher = {
          state: "loading",
          data: fetcher && fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }

    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(_ref3 => {
      let [key] = _ref3;
      return fetchControllers.set(key, pendingNavigationController);
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    } // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation


    revalidatingFetchers.forEach(_ref4 => {
      let [key] = _ref4;
      return fetchControllers.delete(key);
    }); // If any loaders returned a redirect Response, start a new REPLACE navigation

    let redirect = findRedirect(results);

    if (redirect) {
      await startRedirectNavigation(state, redirect, {
        replace
      });
      return {
        shortCircuited: true
      };
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends({
      loaderData,
      errors
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }

  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key


  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }

    if (fetchControllers.has(key)) abortFetcher(key);
    let matches = matchRoutes(dataRoutes, href, init.basename);

    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }

    let {
      path,
      submission
    } = normalizeNavigateOptions(href, opts, true);
    let match = getTargetMatch(matches, path);

    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations


    fetchLoadMatches.set(key, [path, match, matches]);
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation


  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);

    if (!match.route.action) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    } // Put this fetcher into it's submitting state


    let existingFetcher = state.fetchers.get(key);

    let fetcher = _extends({
      state: "submitting"
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the action for the fetcher

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, router.basename);

    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }

      return;
    }

    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);

      let loadingFetcher = _extends({
        state: "loading"
      }, submission, {
        data: undefined,
        " _hasFetcherDoneAnything ": true
      });

      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return startRedirectNavigation(state, actionResult, {
        isFetchActionRedirect: true
      });
    } // Process any non-redirect errors thrown


    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }

    if (isDeferredResult(actionResult)) {
      invariant(false, "defer() is not supported in actions");
    } // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation


    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(nextLocation, abortController.signal);
    let matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);

    let loadFetcher = _extends({
      state: "loading",
      data: actionResult.data
    }, submission, {
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, {
      [match.route.id]: actionResult.data
    }, undefined, // No need to send through errors since we short circuit above
    fetchLoadMatches); // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data

    revalidatingFetchers.filter(_ref5 => {
      let [staleKey] = _ref5;
      return staleKey !== key;
    }).forEach(_ref6 => {
      let [staleKey] = _ref6;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = {
        state: "loading",
        data: existingFetcher && existingFetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(staleKey, revalidatingFetcher);
      fetchControllers.set(staleKey, abortController);
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

    if (abortController.signal.aborted) {
      return;
    }

    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(_ref7 => {
      let [staleKey] = _ref7;
      return fetchControllers.delete(staleKey);
    });
    let redirect = findRedirect(results);

    if (redirect) {
      return startRedirectNavigation(state, redirect);
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    let doneFetcher = {
      state: "idle",
      data: actionResult.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data

    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

    let loadingFetcher = _extends({
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the loader for this fetcher route match

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, router.basename); // Deferred isn't supported or fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens

    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    } // We can delete this so long as we weren't aborted by ou our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers


    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }

    if (fetchRequest.signal.aborted) {
      return;
    } // If the loader threw a redirect Response, start a new REPLACE navigation


    if (isRedirectResult(result)) {
      await startRedirectNavigation(state, result);
      return;
    } // Process any non-redirect errors thrown


    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?

      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }

    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

    let doneFetcher = {
      state: "idle",
      data: result.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */


  async function startRedirectNavigation(state, redirect, _temp) {
    var _window;

    let {
      submission,
      replace,
      isFetchActionRedirect
    } = _temp === void 0 ? {} : _temp;

    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }

    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
    _extends({
      _isRedirect: true
    }, isFetchActionRedirect ? {
      _isFetchActionRedirect: true
    } : {}));
    invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an external redirect that goes to a new origin

    if (typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
      let newOrigin = createClientSideURL(redirect.location).origin;

      if (window.location.origin !== newOrigin) {
        if (replace) {
          window.location.replace(redirect.location);
        } else {
          window.location.assign(redirect.location);
        }

        return;
      }
    } // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled


    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push; // Use the incoming submission if provided, fallback on the active one in
    // state.navigation

    let {
      formMethod,
      formAction,
      formEncType,
      formData
    } = state.navigation;

    if (!submission && formMethod && formAction && formData && formEncType) {
      submission = {
        formMethod,
        formAction,
        formEncType,
        formData
      };
    } // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location


    if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, submission, {
          formAction: redirect.location
        })
      });
    } else {
      // Otherwise, we kick off a new loading navigation, preserving the
      // submission info for the duration of this navigation
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: submission ? submission.formMethod : undefined,
          formAction: submission ? submission.formAction : undefined,
          formEncType: submission ? submission.formEncType : undefined,
          formData: submission ? submission.formData : undefined
        }
      });
    }
  }

  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, router.basename)), ...fetchersToLoad.map(_ref8 => {
      let [, href, match, fetchMatches] = _ref8;
      return callLoaderOrAction("loader", createClientSideRequest(href, request.signal), match, fetchMatches, router.basename);
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(_ref9 => {
      let [,, match] = _ref9;
      return match;
    }), fetcherResults, request.signal, true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }

  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }

  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }

  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }

  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }

  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        data: fetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  function markFetchRedirectsDone() {
    let doneKeys = [];

    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);

      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }

    markFetchersDone(doneKeys);
  }

  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];

    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);

        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }

    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }

  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component


  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;

    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available


    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);

      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }

    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }

  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }

  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];

      if (typeof y === "number") {
        return y;
      }
    }

    return null;
  }

  router = {
    get basename() {
      return init.basename;
    },

    get state() {
      return state;
    },

    get routes() {
      return dataRoutes;
    },

    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let dataRoutes = convertRoutesToDataRoutes(routes);
  let basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */

  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }

    let result = await queryImpl(request, location, matches, requestContext);

    if (isResponse(result)) {
      return result;
    } // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location


    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */


  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);

    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let result = await queryImpl(request, location, matches, requestContext, match);

    if (isResponse(result)) {
      return result;
    }

    let error = result.errors ? Object.values(result.errors)[0] : undefined;

    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    } // Pick off the right state value to return


    let routeData = [result.actionData, result.loaderData].find(v => v);
    return Object.values(routeData || {})[0];
  }

  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");

    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }

      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }

        return e.response;
      } // Redirects are always returned since they don't propagate to catch
      // boundaries


      if (isRedirectResponse(e)) {
        return e;
      }

      throw e;
    }
  }

  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;

    if (!actionMatch.route.action) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, basename, true, isRouteRequest, requestContext);

      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted");
      }
    }

    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }

    if (isDeferredResult(result)) {
      throw new Error("defer() is not supported in actions");
    }

    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }

      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      }); // action status codes take precedence over loader status codes

      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    } // Create a GET request for the loaders


    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }

  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }

    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader); // Short circuit if we have no loaders to run (query())

    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {}
      };
    }

    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, basename, true, isRouteRequest, requestContext))]);

    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    }

    let executedLoaders = new Set();
    results.forEach((result, i) => {
      executedLoaders.add(matchesToLoad[i].route.id); // Can't do anything with these without the Remix side of things, so just
      // cancel them for now

      if (isDeferredResult(result)) {
        result.deferredData.cancel();
      }
    }); // Process and commit output from loaders

    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError); // Add a null for any non-loader matches for proper revalidation on the client

    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches
    });
  }

  return {
    dataRoutes,
    query,
    queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });

  return newContext;
}

function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params


function normalizeNavigateOptions(to, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }

  let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }

  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations


  let submission;

  if (opts.formData) {
    submission = {
      formMethod: opts.formMethod || "get",
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };

    if (isMutationMethod(submission.formMethod)) {
      return {
        path,
        submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions


  let parsedPath = parsePath(path);

  try {
    let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
    // navigation GET submissions which run all loaders), we need to preserve
    // any incoming ?index params

    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
      searchParams.append("index", "");
    }

    parsedPath.search = "?" + searchParams;
  } catch (e) {
    return {
      path,
      error: getInternalRouterError(400)
    };
  }

  return {
    path: createPath(parsedPath),
    submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them


function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;

  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);

    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }

  return boundaryMatches;
}

function getMatchesToLoad(state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined; // Pick navigation matches that are net-new or qualify for revalidation

  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => match.route.loader != null && (isNewLoader(state.loaderData, state.matches[index], match) || // If this route had a pending deferred cancelled it must be revalidated
  cancelledDeferredRoutes.some(id => id === match.route.id) || shouldRevalidateLoader(state.location, state.matches[index], submission, location, match, isRevalidationRequired, actionResult))); // Pick fetcher.loads that need to be revalidated

  let revalidatingFetchers = [];
  fetchLoadMatches && fetchLoadMatches.forEach((_ref10, key) => {
    let [href, match, fetchMatches] = _ref10;

    // This fetcher was cancelled from a prior action submission - force reload
    if (cancelledFetcherLoads.includes(key)) {
      revalidatingFetchers.push([key, href, match, fetchMatches]);
    } else if (isRevalidationRequired) {
      let shouldRevalidate = shouldRevalidateLoader(href, match, submission, href, match, isRevalidationRequired, actionResult);

      if (shouldRevalidate) {
        revalidatingFetchers.push([key, href, match, fetchMatches]);
      }
    }
  });
  return [navigationMatches, revalidatingFetchers];
}

function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = // [a] -> [a, b]
  !currentMatch || // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}

function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}

function shouldRevalidateLoader(currentLocation, currentMatch, submission, location, match, isRevalidationRequired, actionResult) {
  let currentUrl = createClientSideURL(currentLocation);
  let currentParams = currentMatch.params;
  let nextUrl = createClientSideURL(location);
  let nextParams = match.params; // This is the default implementation as to when we revalidate.  If the route
  // provides it's own implementation, then we give them full control but
  // provide this value so they can leverage it if needed after they check
  // their own specific use cases
  // Note that fetchers always provide the same current/next locations so the
  // URL-based checks here don't apply to fetcher shouldRevalidate calls

  let defaultShouldRevalidate = isNewRouteInstance(currentMatch, match) || // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
  currentUrl.search !== nextUrl.search || // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired;

  if (match.route.shouldRevalidate) {
    let routeChoice = match.route.shouldRevalidate(_extends({
      currentUrl,
      currentParams,
      nextUrl,
      nextParams
    }, submission, {
      actionResult,
      defaultShouldRevalidate
    }));

    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }

  return defaultShouldRevalidate;
}

async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
  if (basename === void 0) {
    basename = "/";
  }

  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }

  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }

  let resultType;
  let result; // Setup a promise we can race against so that abort signals short circuit

  let reject;
  let abortPromise = new Promise((_, r) => reject = r);

  let onReject = () => reject();

  request.signal.addEventListener("abort", onReject);

  try {
    let handler = match.route[type];
    invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
    result = await Promise.race([handler({
      request,
      params: match.params,
      context: requestContext
    }), abortPromise]);
    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    request.signal.removeEventListener("abort", onReject);
  }

  if (isResponse(result)) {
    let status = result.status; // Process redirects

    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      let isAbsolute = /^[a-z+]+:\/\//i.test(location) || location.startsWith("//"); // Support relative routing in internal redirects

      if (!isAbsolute) {
        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
        invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

        if (basename) {
          let path = resolvedLocation.pathname;
          resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
        }

        location = createPath(resolvedLocation);
      } // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account


      if (isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }

      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown


    if (isRouteRequest) {
      // eslint-disable-next-line no-throw-literal
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }

    let data;
    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }

    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }

    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }

  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }

  if (result instanceof DeferredData) {
    return {
      type: ResultType.deferred,
      deferredData: result
    };
  }

  return {
    type: ResultType.data,
    data: result
  };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)


function createClientSideRequest(location, signal, submission) {
  let url = createClientSideURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };

  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType,
      formData
    } = submission;
    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


  return new Request(url, init);
}

function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    invariant(typeof value === "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", ' + 'please use "multipart/form-data" instead.');
    searchParams.append(key, value);
  }

  return searchParams;
}

function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }

      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route


      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else if (isDeferredResult(result)) {
      activeDeferreds && activeDeferreds.set(id, result.deferredData);
      loaderData[id] = result.deferredData.data; // TODO: Add statusCode/headers once we wire up streaming in Remix
    } else {
      loaderData[id] = result.data; // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.

      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }

  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}

function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let [key,, match] = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match.route.id);

      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }

      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      throw new Error("Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      throw new Error("Unhandled fetcher deferred data");
    } else {
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  return {
    loaderData,
    errors
  };
}

function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);

  for (let match of matches) {
    let id = match.route.id;

    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined) {
      mergedLoaderData[id] = loaderData[id];
    }

    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }

  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match


function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}

function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}

function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";

  if (status === 400) {
    statusText = "Bad Request";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else {
      errorMessage = "Cannot submit binary form data using GET";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }

  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match


function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];

    if (isRedirectResult(result)) {
      return result;
    }
  }
}

function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}

function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}

function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}

function isErrorResult(result) {
  return result.type === ResultType.error;
}

function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}

function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}

function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }

  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}

function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}

function isValidMethod(method) {
  return validRequestMethods.has(method);
}

function isMutationMethod(method) {
  return validMutationMethods.has(method);
}

async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}

async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }

  let aborted = await result.deferredData.resolveData(signal);

  if (aborted) {
    return;
  }

  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }

  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}

function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up


function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}

function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;

  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)


  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion


//# sourceMappingURL=router.js.map


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__error_css__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





function Error500() {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    setTimeout(function () {
      setShow(true);
    }, 200);
  }, []);
  return show && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'main_error' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'h1_error' },
      '500'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      { className: 'h2_error' },
      'Oups! Probl\xE8me server!'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
      { to: '/', className: 'link_error' },
      'Retournez sur la page d\'accueil'
    )
  );
}
/* harmony default export */ __webpack_exports__["a"] = (Error500);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appartements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return introduction; });
var appartements = {
    chambreEmpreur: " D'abord bibliothèque particulière de l'Empereur, cette pièce fut transformée en petite chambre à coucher sur l'ordre de son occupant. L'Empereur y fit placer le petit lit en fer avec couronnement en bronze doré, et les rideaux verts, couleur de prédilection de l'Empire. Le grand bureau plat en acajou, avec ornements de bronze ciselé et doré par Jacob, permettait à l'Empereur d'alterner, durant ses nuits, courts sommeils et séances de travail. A côté du lit, à droite, une porte dérobée conduit à l'escalier d'acajou que Napoléon empruntait pour descendre dans la bibliothèque de ses Petits Appartements.",
    chambre_coucher: "Il s'agit de la pièce la plus importante de l'appartement. Installée dans l'ancien « cabinet à la poudre » de Louis XVI (servant à la toilette), cette chambre d'apparat richement remeublée en 1808, s'orne d'un lit sculpté et doré, flanqué de colonnes avec frontons présentant les figures de la Noblesse et de la Gloire, de l'Abondance et de la Justice. Les portes et les panneaux du lambris sont dorés et ornés de Victoires, rehaussant la prestance de la chambre impériale. C'est pourtant dans cet écrin de son ancienne Majesté que, la nuit du 12 au 13 avril 1814, Napoléon aurait tenté de s'empoisonner suite à son abdication. Secouru, il aurait repris ses sens et, étonné de vivre, se serait exclamé : « Dieu ne le veut pas ! »",
    chambre_pape: "Après les Grands Appartements des souverains, cet appartement d'invités riche de onze salles est l'espace d'habitation le plus somptueux du palais. Il résulte, depuis 1804, de la réunion en une seule enfilade de deux appartements construits dans des corps de bâtiments accolés. S'il conserve l'appellation d'appartement du Pape depuis les deux séjours qu'y effectua Pie VII en 1804 et en 1812-1814, c'est bien en double appartement princier du Second Empire qu'il est aujourd'hui présenté."
};
var parc = {
    porte_doree: "La porte Dorée remplaça, en 1528, une porte médiévale installée au même emplacement. Sa superposition de loggias, aux voûtes reposant sur des colonnes angulaires, ainsi que son ordonnance de pilastres et de frontons, en fait l'un des ouvrages architecturaux les plus novateurs des premiers remaniements de Fontainebleau par François Ier. D'un aspect tenant à la fois du châtelet médiéval français et des résidences des princes italiens, elle témoignait du souhait du roi de magnifier l'entrée de sa résidence rénovée. Ouvrant directement sur la cour ovale par un porche d'entrée orné des fresques de Primatice, cette porte resta, durant des siècles, l'entrée principale du château.",
    etang_carpes: "Ouvrant sur le midi, l'étang aux carpes doit son nom aux fameuses carpes dont la présence à Fontainebleau est attestée depuis Henri IV. À l'est, les eaux de l'étang sont retenues par une digue que l'on nomma « chaussée de l'étang » avant qu'elle ne fût rebaptisée «allée de Maintenon ». Dès le XVIe siècle, la pièce d'eau de 6 hectares, créée au Moyen-Âge pour drainer l'eau des jardins, servit de cadre aux somptueuses festivités nautiques de la cour des Valois. Le pavillon à pans fut édifié par Louis Le Vau sous Louis XIV, en 1662, et restauré en 1807, lors des aménagements préalables à la création du jardin anglais. Il fut construit à peu près dans l'alignement du grand canal et du Grand Parterre, ouvrant une large perspective vers l'est.",
    cour_dHonneur: "Fermée sur trois côtés et regardant à l'ouest sur la ville depuis la destruction de la quatrième aile et la création d'une grille en 1809-1810, cette « grande basse cour » au plan régulier du XVIe siècle s'est progressivement imposée comme la cour principale du château. Appelée « cour du Cheval Blanc » depuis l'installation, au XVIe siècle, d'un cheval de plâtre en son centre, elle est bordée à l'est par l'emblématique aile de l'escalier en Fer-à-cheval rythmée par cinq pavillons dont la construction s'est étalée du XVIe au XIXe siècle. Au nord, l'aile des Ministres, édifiée dans les années 1530 porte haut les chiffres de François Ier et sa salamandre. Face à elle, l'aile Louis XV, plus haute, arbore des façades de brique et de pierre maintenant l'harmonie colorée de la cour. Cette aile Louis XV fut édifiée dès 1739 sur les décombres de la galerie d'Ulysse afin d'y abriter des logements de cour, et sa construction ne s'acheva que dans les années 1773-1774. Depuis les adieux de Napoléon Ier à sa vieille garde, le 20 avril 1814, cette cour devenue la vue la plus célèbre du château de Fontainebleau, est aussi appelée « cour des adieux ».",
    canal_parc: "Étendu au-delà du dénivelé du bassin des Cascades, le parc marquait autrefois à l'est les limites du domaine royal. Depuis le village d'Avon, il était traversé par la principale voie d'accès au château. Sa configuration actuelle, l'organisation du réseau de cascatelles et d'allées en étoile, résulte de la création, sous Henri IV, d'un grand canal long de près de 1200 mètres (1606-1609) pour 40 mètres de large. Planté initialement de plus de soixante mille arbres où croissaient les rangées de peupliers blancs, les chênes et les arbres fruitiers, ce « parc fermé » et son canal étaient la fierté du roi, qui en suivit le chantier. En 1609, il fallut plus d'une semaine pour le remplir et, dès l'automne, le roi y naviguait.",
    grand_parterre: "La création du Grand Parterre de 1660 à 1664 - le plus vaste d'Europe, avec ses 14 hectares - par André Le Nôtre et Louis Le Vau, témoigne de la clarification de l'espace voulue par Louis XIV à Fontainebleau. Les broderies de buis de ce jardin à la française ont disparu sous Louis XV. Subsistent le tracé général des compartiments d'herbe, les bassins ornés de statues, dont celui des Cascades (XVIIe et XIXe siècles), regardant à l'est vers le Canal d'Henri IV. Depuis 1817, une large vasque, dite « le pot bouillant », prend place en son centre tandis qu'au midi, du côté de la forêt, le rond d'eau est orné d'une statue du Tibre. Quatre sphinges en grès, déesses léonines sculptées par Lespagnandelle en 1664, marquent depuis Louis XIV la frontière entre le Parterre et le parc.",
    jardin_dianne: "Ancien jardin réservé de la Reine, il est bordé des espaces les plus intimes des souveraines (Petits Appartements de l'Impératrice, boudoir Turc de Marie-Antoinette). En effet, ce jardin était, jusqu'au XIXe siècle, fermé par des bâtiments dont la destruction, suivie de l'achat d'une bande de terrain complémentaire, a permis l'agrandissement du côté de la ville. Réaménagé en jardin paysager à l'Anglaise, planté d'arbres remarquables tels qu'un catalpa ou un tulipier de Virginie, il tire son nom d'une fontaine ornée d'une statue de Diane chasseresse. Seule survivante des riches fontaines créées sous Henri IV, elle est positionnée au centre d'un bassin circulaire à gradins. Sur la partie basse d'un piédestal présentant en majesté la déesse armée de son carquois, quatre têtes de cerfs en bronze, exécutés par Pierre Biard, ainsi que quatre chiens, rappellent que Fontainebleau était considéré comme le « temple de Diane », château de chasse prisé par les souverains."
};
var introduction = {
    le_plus_meuble: "Situé aux portes de Paris et à la lisière de l'une des plus belles forêts d'Europe, le château de Fontainebleau, résidence de 34 rois et de 2 empereurs, fût le témoin d'événements historiques tout comme celui de la vie de cour et de l'intimité des souverains. Avec plus de 1500 pièces déployées au coeur de 130 hectares de parc et jardins, il est le seul château royal et impérial habité continuellement pendant 8 siècles. Rois et reines, empereurs et impératrices se sont attachés à embellir le château de Fontainebleau, offrant à ce vaste palais, salons, galeries et jardins aux décors aussi variés qu'exceptionnels.",
    patrimoine: "Inscrit au patrimoine mondial de l'Unesco depuis 1981, le château de Fontainebleau fut habité par tous les souverains du 12ème au 19ème siècle et le plus meublé des châteaux royaux français.",
    emblematique: "Le château de Fontainebleau est l'un des châteaux les plus emblématiques de l'histoire de France. Aucun autre château n'a été habité autant en continu que le château de Fontainebleau. Ses plus de huit siècles à héberger l'essentiel des rois de France ont fait du château de Fontainebleau l'un des incontournables des visites historiques dans l'Hexagone. Avec ses quelques 400 000 visiteurs annuels, le château de Fontainebleau continue de fasciner ceux à la recherche d'immersion dans l'histoire.",
    appartements: "Ses appartements privés et le musée qui lui est dédié incarnent aujourd'hui ce passé impérial. Fontainebleau présente à la fois des chefs d'œuvre de la Renaissance commandés par François Ier, les intérieurs raffinés de Marie-Antoinette, l'appartement d'apparat de Napoléon Ier, le goût de Napoléon III et Eugénie… Résidence de chasse et de villégiature, témoin de la vie de cour des souverains, officielle et intime, Fontainebleau incarne, mieux qu'ailleurs, l'art de vivre à la française.",
    vie_au_chateau: "La vie au château de Fontainebleau sous le Premier Empire est étroitement liée à l'ascension et à la chute de l'Aigle. Il imprime sa propre marque dans « la vraie demeure des Rois ». Napoléon est en effet le grand restaurateur du château de Fontainebleau qu'il remeuble intégralement au lendemain de la Révolution durant laquelle cette ancienne résidence des souverains a connu dépeçages et ventes des collections, comme les autres propriétés de la Couronne.",
    origines: "Les origines précises du château ne sont pas connues. Le nom de Fontainebleau apparaît pour la première fois en 1137. Il accueille les rois capétiens qui le construisent et l'améliorent de règne en règne au coeur de la forêt de Bière, principalement pour s'y adonner à la chasse. Louis VII est le premier roi dont la présence est confirmée à Fontainebleau.",
    saint_louis: "Saint Louis aimait chasser à Fontainebleau et prier dans le monastère de Fontainebleau. Les deux seront liés, puis fusionnés et donneront naissance à l'architecture atypique des châteaux d'aujourd'hui où l'enceinte castrale et les bâtiments religieux sont souvent imbriqués.",
    guerre_cent_ans: " A la guerre de cent ans, la cour délaisse le nord de la France pour se réfugier dans le Val de Loire. Le château est alors abandonné et tombe en ruines jusqu'en 1527, date à laquelle François 1er tombe amoureux des restes de cette bâtisse médiévale.",
    francois_premier: "François 1er décide de rebâtir Fontainebleau et en fait un chantier monumental à partir des fondations initiales. Le palais devient la résidence favorite des rois Valois, de François 1er à son petit fils Charles IX.",
    charles_ix: "Le règne de Charles IX marque les derniers grands travaux qui font de Fontainebleau un château complet de la Renaissance. Mais les guerres de religion finissent par marquer le château qui se délabre de nouveau."
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MSG; });
var FN = {
  adviceLength: "Prénom doit contenir entre 3 et 25 caractéres",
  adviceContent: "Prénom contient que des majuscules et minuscules"
};
var LN = {
  adviceLength: "Nom doit contenir entre 3 et 25 caractéres",
  adviceContent: "Nom contient que des majuscules et minuscules"
};
var ADDRESS = {
  adviceContent: "Adresse commence par des chiffres suivis par des lettres"
};
var CITY = {
  adviceLength: "Ville doit contenir entre 3 et 25 caractéres",
  adviceContent: "Ville contient que des majuscules et minuscules"
};
var EMAIL = {
  adviceLength: "Email doit contenir entre 5 et 25 caractéres",
  adviceContent: "Email incorrect. Ex: pierre@gmail.com où pierre.dubois@gmail.com"
};
var TEL = {
  adviceLength: "Telephone doit contenir entre 10 et 13 caractéres",
  adviceContent: "Telephone incorrect. Ex: 0123456789 où Ex: 0033123456789"
};
var MSG = {
  adviceLength: "Message doit contenir minimum 10 caractéres",
  adviceContent: "Message contient des caractères non reconnus"

};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UseFetch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//  import { useParams } from 'react-router-dom'

function UseFetch(url) {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  //   const { id } = useParams()

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
    setTimeout(function () {
      var fetchData = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          var response, _data;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return fetch(url);

                case 3:
                  response = _context.sent;
                  _context.next = 6;
                  return response.json();

                case 6:
                  _data = _context.sent;

                  setData(_data);
                  //  ||
                  //   data.find((product) => product.id === id && setData(product))
                  _context.next = 14;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);
                  setError(true);

                case 14:
                  _context.prev = 14;

                  setLoading(false);
                  return _context.finish(14);

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 10, 14, 17]]);
        }));

        return function fetchData() {
          return _ref.apply(this, arguments);
        };
      }();

      if (!url) return;
      setLoading(true);

      fetchData();
    }, 300);

    //   }, [url, id])
  }, [url]);
  return { isLoading: isLoading, data: data, error: error };
}

// useEffect(() => {
//   if (!url) return
//   setLoading(true)
//   async function fetchData() {
//     try {
//       const response = await fetch(url)
//       const data = await response.json()
//       setData(data)
//       //  ||
//       //   data.find((product) => product.id === id && setData(product))
//     } catch (err) {
//       console.log(err)
//       setError(true)
//     } finally {
//       setLoading(false)
//     }
//   }
//   fetchData()
// //   }, [url, id])
// }, [url])
// return { isLoading, data, error }
// }

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createInvalidArgFactory;
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v1_js__ = __webpack_require__(150);
/* unused harmony reexport v1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__v3_js__ = __webpack_require__(151);
/* unused harmony reexport v3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__v4_js__ = __webpack_require__(152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__v4_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__v5_js__ = __webpack_require__(153);
/* unused harmony reexport v5 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nil_js__ = __webpack_require__(147);
/* unused harmony reexport NIL */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__version_js__ = __webpack_require__(154);
/* unused harmony reexport version */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validate_js__ = __webpack_require__(8);
/* unused harmony reexport validate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stringify_js__ = __webpack_require__(7);
/* unused harmony reexport stringify */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parse_js__ = __webpack_require__(43);
/* unused harmony reexport parse */










/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _typeof;
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_css__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



function Loader() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { className: 'loader_container' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'loader' })
  );
}
/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OrderList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hooks_useFetch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_Error500__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_loader_loader__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nanoid__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dropDown_dropDownOrderList__ = __webpack_require__(61);

//import env from "react-dotenv";




//import { v4 as uuidv4 } from "uuid";



function OrderList(props) {
  //   const { email } = useSelector((state) => state.cartReducer);
  var _UseFetch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hooks_useFetch__["a" /* UseFetch */])(
  //`http://localhost:4000/api/commandes`
  "https:chateau-back-hk2hbrmct-boogysh.vercel.app/api/commandes/"
  //`${env.API_HOST}/api/commandes`
  ),
      data = _UseFetch.data,
      isLoading = _UseFetch.isLoading,
      error = _UseFetch.error;

  if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__errors_Error500__["a" /* default */], null);

  return isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_common_loader_loader__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { className: props.isClosed ? "orderList" : "orderList hidden" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h2",
      { className: "orderList_h2" },
      "La liste des vos commandes:"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "button",
      { onClick: props.closeOrderList, className: "orderList_btn_close" },
      "x"
    ),
    data.map(function (order) {
      // const EMAIL = email === order.clientInfo.email;
      var EMAIL = props.email === order.clientInfo.email;

      return EMAIL && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "orderList_wrapper" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_dropDown_dropDownOrderList__["a" /* default */], {
          title: "Commande Nr: " + order._id + " " + order.createdAt.slice(0, 10) + " " + "" + " " + order.createdAt.slice(11, 19) + " ",
          content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "h4",
              { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_nanoid__["a" /* nanoid */])() },
              "Email : " + order.clientInfo.email
            ),
            order.orderInfo.map(function (item, index) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_nanoid__["a" /* nanoid */])() },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "h4",
                  { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_nanoid__["a" /* nanoid */])() },
                  "Cartes : " + item.id + " - " + item.qty
                )
              );
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "h4",
              { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_nanoid__["a" /* nanoid */])() },
              "Prix total de la commande : " + order.totalPrice + " \u20AC"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "h4",
              { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_nanoid__["a" /* nanoid */])() },
              "Commande effectu\xE9 le: " + order.createdAt.slice(0, 10) + "  \xE0 : " + order.createdAt.slice(11, 19)
            )
          )
        })
      );
    })
  );
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOLDE; });
/* unused harmony export DECREASE */
/* unused harmony export INCREASE */
/* unused harmony export CLEAR_CART */
/* unused harmony export GET_TOTAL */
/* unused harmony export GET_AMOUNT */
// export const ADD_CART = "ADD_CART"
//export const REMOVE = "REMOVE"
// export const REMOVE_ITEM = "REMOVE_ITEM"

var SOLDE = "SOLDE";

var DECREASE = "DECREASE";
var INCREASE = "INCREASE";
var CLEAR_CART = "CLEAR_CART";
var GET_TOTAL = "GET_TOTAL";
var GET_AMOUNT = "GET_AMOUNT";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export random */
/* unused harmony export customRandom */
/* unused harmony export customAlphabet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nanoid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url_alphabet_index_js__ = __webpack_require__(90);
/* unused harmony reexport urlAlphabet */

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(52);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('not a function');
  }
  this._45 = 0;
  this._81 = 0;
  this._65 = null;
  this._54 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._10 = null;
Promise._97 = null;
Promise._61 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
};
function handle(self, deferred) {
  while (self._81 === 3) {
    self = self._65;
  }
  if (Promise._10) {
    Promise._10(self);
  }
  if (self._81 === 0) {
    if (self._45 === 0) {
      self._45 = 1;
      self._54 = deferred;
      return;
    }
    if (self._45 === 1) {
      self._45 = 2;
      self._54 = [self._54, deferred];
      return;
    }
    self._54.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._81 === 1) {
        resolve(deferred.promise, self._65);
      } else {
        reject(deferred.promise, self._65);
      }
      return;
    }
    var ret = tryCallOne(cb, self._65);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._81 = 3;
      self._65 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._81 = 1;
  self._65 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._81 = 2;
  self._65 = newValue;
  if (Promise._97) {
    Promise._97(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._45 === 1) {
    handle(self, self._54);
    self._54 = null;
  }
  if (self._45 === 2) {
    for (var i = 0; i < self._54.length; i++) {
      handle(self, self._54[i]);
    }
    self._54 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  })
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(98);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_is__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connect_selectorFactory__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connect_mapDispatchToProps__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__connect_mapStateToProps__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connect_mergeProps__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_Subscription__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_useIsomorphicLayoutEffect__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_shallowEqual__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_warning__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Context__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_useSyncExternalStore__ = __webpack_require__(38);


const _excluded = ["reactReduxForwardedRef"];

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = __WEBPACK_IMPORTED_MODULE_14__utils_useSyncExternalStore__["a" /* notInitialized */];
const initializeConnect = fn => {
  useSyncExternalStore = fn;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = initializeConnect;
 // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = [null, 0];
const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_useIsomorphicLayoutEffect__["a" /* useIsomorphicLayoutEffect */])(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = __WEBPACK_IMPORTED_MODULE_11__utils_shallowEqual__["a" /* default */],
  areStatePropsEqual = __WEBPACK_IMPORTED_MODULE_11__utils_shallowEqual__["a" /* default */],
  areMergedPropsEqual = __WEBPACK_IMPORTED_MODULE_11__utils_shallowEqual__["a" /* default */],
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = __WEBPACK_IMPORTED_MODULE_13__Context__["a" /* ReactReduxContext */]
} = {}) {
  if (false) {
    if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      warning('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
    }
  }

  const Context = context;
  const initMapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__connect_mapStateToProps__["a" /* mapStateToPropsFactory */])(mapStateToProps);
  const initMapDispatchToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__connect_mapDispatchToProps__["a" /* mapDispatchToPropsFactory */])(mapDispatchToProps);
  const initMergeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__connect_mergeProps__["a" /* mergePropsFactory */])(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if (false) {
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_is__["isContextConsumer"])( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {
        throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
      } // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__connect_selectorFactory__["a" /* default */])(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_Subscription__["a" /* createSubscription */])(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])();
      const lastWrapperProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(wrapperProps);
      const childPropsFromStoreUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])();
      const renderIsScheduled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
      const isProcessingDispatch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
      const isMounted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
      const latestSubscriptionCallbackError = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])();
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_useIsomorphicLayoutEffect__["a" /* useIsomorphicLayoutEffect */])(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_useIsomorphicLayoutEffect__["a" /* useIsomorphicLayoutEffect */])(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(WrappedComponent, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = __WEBPACK_IMPORTED_MODULE_3_react___default.a.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = __WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Connect, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(forwarded, WrappedComponent);
    }

    return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ __webpack_exports__["b"] = (connect);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(39);

function wrapMapToPropsConstant( // * Note:
//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useReduxContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Context__ = __webpack_require__(2);



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
function useReduxContext() {
  const contextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_1__components_Context__["a" /* ReactReduxContext */]);

  if (false) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createSelectorHook */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useReduxContext__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Context__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_useSyncExternalStore__ = __webpack_require__(38);




let useSyncExternalStoreWithSelector = __WEBPACK_IMPORTED_MODULE_3__utils_useSyncExternalStore__["a" /* notInitialized */];
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = initializeUseSelector;


const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = __WEBPACK_IMPORTED_MODULE_2__components_Context__["a" /* ReactReduxContext */]) {
  const useReduxContext = context === __WEBPACK_IMPORTED_MODULE_2__components_Context__["a" /* ReactReduxContext */] ? __WEBPACK_IMPORTED_MODULE_1__useReduxContext__["a" /* useReduxContext */] : () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useContext"])(context);
  return function useSelector(selector, equalityFn = refEquality) {
    if (false) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }

      if (typeof selector !== 'function') {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }

      if (typeof equalityFn !== 'function') {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }

    const {
      store,
      subscription,
      getServerState
    } = useReduxContext();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useDebugValue"])(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();
/* harmony export (immutable) */ __webpack_exports__["b"] = useSelector;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createStoreHook;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Context__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useReduxContext__ = __webpack_require__(31);



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = __WEBPACK_IMPORTED_MODULE_1__components_Context__["a" /* ReactReduxContext */]) {
  const useReduxContext = // @ts-ignore
  context === __WEBPACK_IMPORTED_MODULE_1__components_Context__["a" /* ReactReduxContext */] ? __WEBPACK_IMPORTED_MODULE_2__useReduxContext__["a" /* useReduxContext */] : () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useContext"])(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();
/* harmony export (immutable) */ __webpack_exports__["a"] = useStore;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSubscription;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__batch__ = __webpack_require__(35);
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__batch__["b" /* getBatch */])();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch;
/* harmony export (immutable) */ __webpack_exports__["a"] = setBatch;
 // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;
/* harmony export (immutable) */ __webpack_exports__["b"] = getBatch;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
/* unused harmony export canUseDOM */

const useIsomorphicLayoutEffect = canUseDOM ? __WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"] : __WEBPACK_IMPORTED_MODULE_0_react__["useEffect"];
/* harmony export (immutable) */ __webpack_exports__["a"] = useIsomorphicLayoutEffect;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const notInitialized = () => {
  throw new Error('uSES not initialized!');
};
/* harmony export (immutable) */ __webpack_exports__["a"] = notInitialized;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlainObject__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(15);


function verifyPlainObject(value, displayName, methodName) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isPlainObject__["a" /* default */])(value)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
  }
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Await */
/* unused harmony export MemoryRouter */
/* unused harmony export Navigate */
/* unused harmony export Outlet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Router; });
/* unused harmony export RouterProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DataRouterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DataRouterStateContext; });
/* unused harmony export UNSAFE_LocationContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NavigationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return RouteContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return enhanceManualRouteObjects; });
/* unused harmony export createMemoryRouter */
/* unused harmony export createRoutesFromChildren */
/* unused harmony export createRoutesFromElements */
/* unused harmony export renderMatches */
/* unused harmony export useActionData */
/* unused harmony export useAsyncError */
/* unused harmony export useAsyncValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useHref; });
/* unused harmony export useInRouterContext */
/* unused harmony export useLoaderData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useLocation; });
/* unused harmony export useMatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return useMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return useNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return useNavigation; });
/* unused harmony export useNavigationType */
/* unused harmony export useOutlet */
/* unused harmony export useOutletContext */
/* unused harmony export useParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useResolvedPath; });
/* unused harmony export useRevalidator */
/* unused harmony export useRouteError */
/* unused harmony export useRouteLoaderData */
/* unused harmony export useRoutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__remix_run_router__ = __webpack_require__(9);
/* unused harmony reexport AbortedDeferredError */
/* unused harmony reexport NavigationType */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__remix_run_router__["g"]; });
/* unused harmony reexport defer */
/* unused harmony reexport generatePath */
/* unused harmony reexport isRouteErrorResponse */
/* unused harmony reexport json */
/* unused harmony reexport matchPath */
/* unused harmony reexport matchRoutes */
/* unused harmony reexport parsePath */
/* unused harmony reexport redirect */
/* unused harmony reexport resolvePath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
// dispatch for CommonJS interop named imports.

const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = __WEBPACK_IMPORTED_MODULE_1_react__;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  if (false) {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that " + "does not support useSyncExternalStore. The " + "use-sync-external-store shim will not work correctly. Upgrade " + "to a newer pre-release.");
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  const value = getSnapshot();

  if (false) {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();

      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  }); // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    }

    const handleStoreChange = () => {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;

  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

/**
 * Inlined into the react-router repo since use-sync-external-store does not
 * provide a UMD-compatible package, so we need this to be able to distribute
 * UMD react-router bundles
 */
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
const useSyncExternalStore = "useSyncExternalStore" in __WEBPACK_IMPORTED_MODULE_1_react__ ? (module => module.useSyncExternalStore)(__WEBPACK_IMPORTED_MODULE_1_react__) : shim;

const DataRouterContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"](null);

if (false) {
  DataRouterContext.displayName = "DataRouter";
}

const DataRouterStateContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"](null);

if (false) {
  DataRouterStateContext.displayName = "DataRouterState";
}

const AwaitContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"](null);

if (false) {
  AwaitContext.displayName = "Await";
}

const NavigationContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"](null);

if (false) {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"](null);

if (false) {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"]({
  outlet: null,
  matches: []
});

if (false) {
  RouteContext.displayName = "Route";
}

const RouteErrorContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"](null);

if (false) {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ?  false ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  let {
    basename,
    navigator
  } = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["f" /* joinPaths */])([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ?  false ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  return __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */

function useNavigationType() {
  return __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ?  false ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  let {
    pathname
  } = useLocation();
  return __WEBPACK_IMPORTED_MODULE_1_react__["useMemo"](() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["h" /* matchPath */])(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  !useInRouterContext() ?  false ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  let {
    basename,
    navigator
  } = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](NavigationContext);
  let {
    matches
  } = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["i" /* UNSAFE_getPathContributingMatches */])(matches).map(match => match.pathnameBase));
  let activeRef = __WEBPACK_IMPORTED_MODULE_1_react__["useRef"](false);
  __WEBPACK_IMPORTED_MODULE_1_react__["useEffect"](() => {
    activeRef.current = true;
  });
  let navigate = __WEBPACK_IMPORTED_MODULE_1_react__["useCallback"](function (to, options) {
    if (options === void 0) {
      options = {};
    }

     false ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["j" /* resolveTo */])(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["f" /* joinPaths */])([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createContext"](null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */

function useOutletContext() {
  return __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */

function useOutlet(context) {
  let outlet = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */

function useParams() {
  let {
    matches
  } = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["i" /* UNSAFE_getPathContributingMatches */])(matches).map(match => match.pathnameBase));
  return __WEBPACK_IMPORTED_MODULE_1_react__["useMemo"](() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["j" /* resolveTo */])(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  false ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  let {
    navigator
  } = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](NavigationContext);
  let dataRouterStateContext = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](DataRouterStateContext);
  let {
    matches: parentMatches
  } = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (false) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["k" /* parsePath */])(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["l" /* matchRoutes */])(routes, {
    pathname: remainingPathname
  });

  if (false) {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") : void 0;
  }

  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["f" /* joinPaths */])([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["f" /* joinPaths */])([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.


  if (locationArg && renderedMatches) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: __WEBPACK_IMPORTED_MODULE_0__remix_run_router__["m" /* Action */].Pop
      }
    }, renderedMatches);
  }

  return renderedMatches;
}

function DefaultErrorElement() {
  let error = useRouteError();
  let message = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["n" /* isRouteErrorResponse */])(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h2", null, "Unhandled Thrown Error!"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("pre", {
    style: preStyles
  }, stack) : null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("code", {
    style: codeStyles
  }, "errorElement"), " props on\xA0", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("code", {
    style: codeStyles
  }, "<Route>")));
}

class RenderErrorBoundary extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    } // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.


    return {
      error: props.error || state.error,
      location: state.location
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }

  render() {
    return this.state.error ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }

}

function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](RouteContext.Provider, {
    value: routeContext
  }, children);
}

function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }

  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ?  false ? invariant(false, "Could not find a matching route for the current errors: " + errors) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    let errorElement = dataRouterState ? match.route.errorElement || /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](DefaultErrorElement, null) : null;
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));

    let getChildren = () => /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](RenderedRoute, {
      match: match,
      routeContext: {
        outlet,
        matches
      }
    }, error ? errorElement : match.route.element !== undefined ? match.route.element : outlet); // Only wrap in an error boundary within data router usages when we have an
    // errorElement on this route.  Otherwise let it bubble up to an ancestor
    // errorElement


    return dataRouterState && (match.route.errorElement || index === 0) ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](DataRouterContext);
  !ctx ?  false ? invariant(false, getDataRouterConsoleError(hookName)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](DataRouterStateContext);
  !state ?  false ? invariant(false, getDataRouterConsoleError(hookName)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  return state;
}

function useRouteContext(hookName) {
  let route = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteContext);
  !route ?  false ? invariant(false, getDataRouterConsoleError(hookName)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  return route;
}

function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  false ? invariant(false, hookName + " can only be used on routes that contain a unique \"id\"") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */


function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */

function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */

function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return __WEBPACK_IMPORTED_MODULE_1_react__["useMemo"](() => matches.map(match => {
    let {
      pathname,
      params
    } = match; // Note: This structure matches that created by createUseMatchesMatch
    // in the @remix-run/router , so if you change this please also change
    // that :)  Eventually we'll DRY this up

    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */

function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);

  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }

  return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */

function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */

function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteContext);
  !route ?  false ? invariant(false, "useActionData must be used inside a RouteContext") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;

  let error = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  } // Otherwise look for errors from our data router state


  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */

function useAsyncValue() {
  let value = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](AwaitContext);
  return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */

function useAsyncError() {
  let value = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](AwaitContext);
  return value == null ? void 0 : value._error;
}
const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     false ? warning(false, message) : void 0;
  }
}

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router
  } = _ref;
  // Sync router state to our component state to force re-renders
  let state = useSyncExternalStore(router.subscribe, () => router.state, // We have to provide this so React@18 doesn't complain during hydration,
  // but we pass our serialized hydration data into the router so state here
  // is already synced with what the server saw
  () => router.state);
  let navigator = __WEBPACK_IMPORTED_MODULE_1_react__["useMemo"](() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/"; // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](DataRouterContext.Provider, {
    value: {
      router,
      navigator,
      static: false,
      // Do we need this?
      basename
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Router, {
    basename: router.basename,
    location: router.state.location,
    navigationType: router.state.historyAction,
    navigator: navigator
  }, router.state.initialized ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Routes, null) : fallbackElement))), null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref2) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref2;
  let historyRef = __WEBPACK_IMPORTED_MODULE_1_react__["useRef"]();

  if (historyRef.current == null) {
    historyRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["o" /* createMemoryHistory */])({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = __WEBPACK_IMPORTED_MODULE_1_react__["useState"]({
    action: history.action,
    location: history.location
  });
  __WEBPACK_IMPORTED_MODULE_1_react__["useLayoutEffect"](() => history.listen(setState), [history]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref3) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref3;
  !useInRouterContext() ?  false ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
   false ? warning(!React.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
  let dataRouterState = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](DataRouterStateContext);
  let navigate = useNavigate();
  __WEBPACK_IMPORTED_MODULE_1_react__["useEffect"](() => {
    // Avoid kicking off multiple navigations if we're in the middle of a
    // data-router navigation, since components get re-rendered when we enter
    // a submitting/loading state
    if (dataRouterState && dataRouterState.navigation.state !== "idle") {
      return;
    }

    navigate(to, {
      replace,
      state,
      relative
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
   false ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = __WEBPACK_IMPORTED_MODULE_0__remix_run_router__["m" /* Action */].Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ?  false ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = __WEBPACK_IMPORTED_MODULE_1_react__["useMemo"](() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["k" /* parsePath */])(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = __WEBPACK_IMPORTED_MODULE_1_react__["useMemo"](() => {
    let trailingPathname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["p" /* stripBasename */])(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   false ? warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = __WEBPACK_IMPORTED_MODULE_1_react__["useContext"](DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
  // directly.  If we have children, then we're in a descendant tree and we
  // need to use child routes.

  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}

/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref6) {
  let {
    children,
    errorElement,
    resolve
  } = _ref6;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](ResolveAwait, null, children));
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

const neverSettledPromise = new Promise(() => {});

class AwaitErrorBoundary extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }

  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;

    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings

      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }

    if (status === AwaitRenderStatus.error && promise._error instanceof __WEBPACK_IMPORTED_MODULE_0__remix_run_router__["q" /* AbortedDeferredError */]) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }

    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }

    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }

    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](AwaitContext.Provider, {
        value: promise,
        children: children
      });
    } // Throw to the suspense boundary


    throw promise;
  }

}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */


function ResolveAwait(_ref7) {
  let {
    children
  } = _ref7;
  let data = useAsyncValue();

  if (typeof children === "function") {
    return children(data);
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null, children);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */


function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  let routes = [];
  __WEBPACK_IMPORTED_MODULE_1_react__["Children"].forEach(children, (element, index) => {
    if (! /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react__["isValidElement"](element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === __WEBPACK_IMPORTED_MODULE_1_react__["Fragment"]) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }

    !(element.type === Route) ?  false ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
    !(!element.props.index || !element.props.children) ?  false ? invariant(false, "An index route cannot have child routes.") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["e" /* invariant */])(false) : void 0;
    let treePath = [...parentPath, index];
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}
/**
 * @private
 * Walk the route tree and add hasErrorBoundary if it's not provided, so that
 * users providing manual route arrays can just specify errorElement
 */

function enhanceManualRouteObjects(routes) {
  return routes.map(route => {
    let routeClone = _extends({}, route);

    if (routeClone.hasErrorBoundary == null) {
      routeClone.hasErrorBoundary = routeClone.errorElement != null;
    }

    if (routeClone.children) {
      routeClone.children = enhanceManualRouteObjects(routeClone.children);
    }

    return routeClone;
  });
}

function createMemoryRouter(routes, opts) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["a" /* createRouter */])({
    basename: opts == null ? void 0 : opts.basename,
    history: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__remix_run_router__["o" /* createMemoryHistory */])({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes: enhanceManualRouteObjects(routes)
  }).initialize();
} ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tickets.b5c3ed87.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(142);
} else {
  module.exports = require('../cjs/use-sync-external-store-shim.development.js');
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(8);


function parse(uuid) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = v35;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stringify_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_js__ = __webpack_require__(43);



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
/* unused harmony export DNS */

const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* unused harmony export URL */

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parse_js__["a" /* default */])(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stringify_js__["a" /* unsafeStringify */])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_client__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_css__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__(78);







var root = __WEBPACK_IMPORTED_MODULE_1_react_dom_client___default.a.createRoot(document.getElementById("root"));
root.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
  { store: __WEBPACK_IMPORTED_MODULE_5__redux_store__["a" /* default */] },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */], null)
));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(94).enable();
  window.Promise = __webpack_require__(93);
}

// fetch() polyfill for making API calls.
__webpack_require__(155);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(91);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _defineProperty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toPropertyKey_js__ = __webpack_require__(51);

function _defineProperty(obj, key, value) {
  key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toPropertyKey_js__["a" /* default */])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectSpread2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__ = __webpack_require__(48);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _toPrimitive;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeof_js__ = __webpack_require__(19);

function _toPrimitive(input, hint) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__typeof_js__["a" /* default */])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__typeof_js__["a" /* default */])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _toPropertyKey;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeof_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toPrimitive_js__ = __webpack_require__(50);


function _toPropertyKey(arg) {
  var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toPrimitive_js__["a" /* default */])(arg, "string");
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__typeof_js__["a" /* default */])(key) === "symbol" ? key : String(key);
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_errors_Error404__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_HomePage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_common_header__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_common_footer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cart_CartPage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_orderPage_jsx__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_order_orderPageConfirmation__ = __webpack_require__(75);









//import Banner from "./components/home/banner";

function App() {
  return (
    //  <Router basename="/chateau/">
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react_router_dom__["a" /* BrowserRouter */],
      { basename: "/chateau/" },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_common_header__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react_router_dom__["b" /* Routes */],
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["c" /* Route */], { path: "/", element: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_home_HomePage__["a" /* default */], null) }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["c" /* Route */], { path: "/panier", element: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_cart_CartPage__["a" /* default */], null) }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["c" /* Route */], { path: "/commande", element: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_order_orderPage_jsx__["a" /* default */], null) }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["c" /* Route */], { path: "/commande/:id", element: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_order_orderPageConfirmation__["a" /* default */], null) }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["c" /* Route */], { path: "*", element: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_errors_Error404__["a" /* default */], null) })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_common_footer__["a" /* default */], null)
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Cart;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_hash_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_tickets_png__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_icons_tickets_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_icons_tickets_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cartCard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_action__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asideCart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_uuid__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_orderList__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_banner__ = __webpack_require__(6);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






// import { DELETE, ADD} from "../../redux/action";






function Cart() {
  var _useSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["useSelector"])(function (state) {
    return state.cartReducer;
  }),
      carts = _useSelector.carts,
      solde = _useSelector.solde,
      codeSolde = _useSelector.codeSolde,
      inputCodeSolde = _useSelector.inputCodeSolde,
      findEmail = _useSelector.findEmail;

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      totalPrice = _useState4[0],
      setTotalPrice = _useState4[1];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    setData(carts);
  }, [carts]);

  //------- Price without solde----------------------
  var totals = function totals() {
    var totalPrice = 0;
    data.map(function (e) {
      // console.log(totalPrice);
      return totalPrice = e.price * e.qty + totalPrice;
    });
    setTotalPrice(totalPrice);
  };
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    totals();
  }, [totals]);

  //-------CART OPERATIONS--------------------------------
  var dispatch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["useDispatch"])();
  // delete one card
  var delet = function delet(id) {
    // dispatch(DELETE(id));
    dispatch({
      type: "REMOVE_CARD",
      payload: id
    });
  };
  // incr cart
  var increment = function increment(item) {
    // dispatch(ADD(item));
    if (item.qty <= 99) {
      dispatch({
        type: "ADD_ITEM",
        payload: item
      });
    }
  };
  var decrement = function decrement(item) {
    // dispatch(ADD(item));
    dispatch({
      type: "REMOVE_ITEM",
      payload: item
    });
  };
  //-------------------------------------------------------
  //Set the class "emty" to the empty cart
  var cartEmpty = data.length === 0;
  var emty = "";
  data.length === 0 ? emty = "emty" : emty = "";

  //-------Solde-----------------
  var soldePrice = function soldePrice(e) {
    dispatch({
      type: "INPUT_CODE_SOLDE",
      payload: e.target.value
    });
    if (codeSolde === e.target.value) {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_action__["a" /* SOLDE_AMOUNT */])(totalPrice, 5, e)); //5percents
    } else {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_action__["a" /* SOLDE_AMOUNT */])(totalPrice, 0)); //expected payload: 0
      //   type: "SOLDE",
      //   payload: 0,
      // });
    }
  };
  var btnSolde = function btnSolde() {
    var updatePayload = totalPrice * 5 / 100;
    if (codeSolde === inputCodeSolde) {
      dispatch({
        type: "SOLDE",
        payload: updatePayload
      });
    } else {
      dispatch({
        type: "SOLDE",
        payload: 0
      });
    }
  };
  //-----///  PRICE & SOLDE = total price///---------
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    var orderPrice = totalPrice - solde;
    dispatch({
      type: "PRICE",
      payload: orderPrice
    });
  }, [totalPrice, solde]);
  //--------------------------------------

  //----------------------------------
  var createOrderDetails = function createOrderDetails() {
    dispatch({
      type: "ORDER_DETAILS",
      payload: carts
    });
  };
  // const [isClosed, setIsClosed] = useState("hidden");
  // const closeOrderList = () => {
  //   setIsClosed(isClosed === "hidden" ? "" : "hidden");
  // };
  // const openOrderList = () => {
  //   setIsClosed("");
  // };

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isClosed = _useState6[0],
      setIsClosed = _useState6[1];

  var closeOrderList = function closeOrderList() {
    setIsClosed(!isClosed);
  };
  var openOrderList = function openOrderList() {
    setIsClosed(true);
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "main",
    { id: "main_cart" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__home_banner__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "section",
      { id: "panier" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        { id: "h3_cart" },
        "R\xE9capitulatif de mon panier"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "container_page_panier" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_panier_and_aside" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "container_panier " + emty },
            cartEmpty && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "emty_content" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h4",
                { className: "cart_empty_h3" },
                "Votre panier est vide"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_router_hash_link__["a" /* HashLink */],
                { smooth: true, to: "/#tarifs", className: "cart_nav_item" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "tickets" },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                    className: "tickets_img",
                    src: __WEBPACK_IMPORTED_MODULE_3__assets_icons_tickets_png___default.a,
                    alt: "tickets"
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h4",
                { className: "cart_empty_h3" },
                "Voir les tarifs"
              )
            ),
            data.map(function (item) {
              // Price for one type of cards
              var priceCard = item.qty * item.price;
              //Then quantity=1, disable the button "-" :
              var dsbl = "";
              item.qty === 1 ? dsbl = "dsbl" : dsbl = "";
              //Then codeSolde inserted, disable the buttons "-" and "+"
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__cartCard__["a" /* default */], {
                key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_uuid__["a" /* v4 */])(),
                src: item.img,
                title: item.title,
                priceUnite: item.price,
                changeQty: item.qty,
                changePrice: priceCard,
                deleteCard: function deleteCard() {
                  return delet(item.id);
                },
                incr: function incr() {
                  return increment(item);
                },
                decr: function decr() {
                  return decrement(item);
                },
                dsblDecr: dsbl
              });
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__asideCart__["a" /* default */], {
            finalPrice: totalPrice - solde,
            totalPrice: totalPrice,
            solde: soldePrice,
            soldeTotal: solde,
            btnSolde: btnSolde,
            createOrderDetails: createOrderDetails,
            openOrderList: openOrderList
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__order_orderList__["a" /* default */], {
          email: findEmail,
          closeOrderList: closeOrderList,
          isClosed: isClosed
        })
      ),
      console.log("findEmail:", findEmail)
    )
  );
}
var mapStateToProps = function mapStateToProps(state) {
  return {
    amount: state.amount
  };
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(Cart);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AsideCart;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_cartes_bancaires_cb_jpg__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_cartes_bancaires_cb_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_cartes_bancaires_cb_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_cartes_bancaires_master_jpg__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_cartes_bancaires_master_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_cartes_bancaires_master_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_cartes_bancaires_visa_jpg__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_cartes_bancaires_visa_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_cartes_bancaires_visa_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_cartes_bancaires_paypal_jpg__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_cartes_bancaires_paypal_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_cartes_bancaires_paypal_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_cartes_bancaires_american_express_jpg__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_cartes_bancaires_american_express_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_cartes_bancaires_american_express_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_icons_search_png__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_icons_search_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_icons_search_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_hash_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_data_data_adviceClient__ = __webpack_require__(12);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();














function AsideCart(props) {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      isEmailToFind = _useState2[0],
      setEmailToFind = _useState2[1];

  console.log(isEmailToFind);
  var dispatch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["useDispatch"])();

  var matchEmailToFind = function matchEmailToFind(e) {
    var val = e.target.value;
    var EMAIL_ErrMsg = document.getElementById("orderFindErrorMsg");
    var matched = val.match(/[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g);
    if (val.length === 0) {
      EMAIL_ErrMsg.innerHTML = "";
    } else if (val.length < 3 || val.length > 25) {
      EMAIL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_9__order_data_data_adviceClient__["e" /* EMAIL */].adviceLength;
      setEmailToFind("");
    } else if (matched) {
      EMAIL_ErrMsg.innerHTML = "";
      setEmailToFind(val);
      dispatch({
        type: "FIND_EMAIL",
        payload: val
      });
    } else if (!matched) {
      EMAIL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_9__order_data_data_adviceClient__["e" /* EMAIL */].adviceContent;
      setEmailToFind("");
    }
    dispatch({
      type: "FIND_EMAIL",
      payload: val
    });
  };
  // const dispatchFindEmail= ()=>{
  //   dispatch({
  //     type: "FIND_EMAIL",
  //     payload: isEmailToFind,
  //   });
  //   // window.location.reload()
  // }
  var carts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["useSelector"])(function (state) {
    return state.cartReducer.carts;
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "aside",
    { id: "total" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "total" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h4",
        null,
        "Total"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        { className: "total_p" },
        props.finalPrice,
        " \u20AC/t.t.c."
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "sous_total" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h5",
        null,
        "Sous-total"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        null,
        props.totalPrice,
        " \u20AC/t.t.c."
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "remise" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h5",
        null,
        "Remise"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        null,
        props.soldeTotal,
        " \u20AC/t.t.c."
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "bon_reduction_container" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "bon_reduction" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          onChange: props.solde,
          className: "remise_input",
          type: "text",
          name: "remise",
          id: "remise",
          placeholder: "Code de reduction"
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "button",
          { className: "bon_reduction_btn", onClick: props.btnSolde },
          "Verifier"
        )
      )
    ),
    carts.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8_react_router_hash_link__["a" /* HashLink */],
      {
        onClick: props.createOrderDetails,
        smooth: true,
        to: "/commande#orderForm",
        className: "payment_link"
      },
      "CONTINUER"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h5",
      null,
      "NOUS ACCEPTON:"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "cartes_payments" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_2__assets_cartes_bancaires_cb_jpg___default.a, alt: "carte_cb" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_3__assets_cartes_bancaires_master_jpg___default.a, alt: "mastercard" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_4__assets_cartes_bancaires_visa_jpg___default.a, alt: "visa" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_5__assets_cartes_bancaires_paypal_jpg___default.a, alt: "pay_pal" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_6__assets_cartes_bancaires_american_express_jpg___default.a, alt: "american_express" })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "separe_aside" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "orderFind_container" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h5",
        null,
        "Cherceher vos commandes:"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "orderFind" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "orderFind_p" },
          "SAISIR VOTRE ADRESSE E-MAIL :"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          "Voir les commandes de: bugavictor86@gmail.com"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "orderFind_email_container" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            type: "text",
            onChange: matchEmailToFind,
            className: "orderFind_email",
            placeholder: "Votre email"
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            { onClick: props.openOrderList, className: "orderFind_btn" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              src: __WEBPACK_IMPORTED_MODULE_7__assets_icons_search_png___default.a,
              alt: "search",
              className: "orderFind_btn_searchPng"
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "orderFindErrorMsg", className: "error" })
      )
    )
  );
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CartCard;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_icons_corbeille_png__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_icons_corbeille_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_icons_corbeille_png__);



function CartCard(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "article_cart_container" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "article_cart_img", src: props.src, alt: "Carte " + props.title }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "article_cart" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_cart_h3_and_price" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_cart_h3" },
          props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          { className: "article_cart_span" },
          props.changePrice,
          " \u20AC"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        { className: "article_priceUnity" },
        props.priceUnite,
        " \u20AC / unit\xE9 "
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "cart_card_qty_and_delete" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          onClick: props.deleteCard,
          id: "corbeille_" + props.title,
          className: "delete",

          src: __WEBPACK_IMPORTED_MODULE_1__assets_icons_corbeille_png___default.a,
          alt: "image_corbeille"
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "cart_card_qty" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            {
              className: "btn_decr " + props.dsblDecr,
              onClick: props.decr
            },
            "-"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { className: "card_qty" },
            props.changeQty
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            { className: "btn_incr", onClick: props.incr },
            "+"
          )
        )
      )
    )
  );
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "footer",
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      { className: "footer_p" },
      "Projet d'apprentissage \xA9"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      { className: "footer_p" },
      "Source: https://www.chateaudefontainebleau.fr"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "footer_flex" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        { className: "footer_p" },
        "Site officiel du:"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          className: "footer_a",
          target: "blank",
          href: "https://www.chateaudefontainebleau.fr/"
        },
        "Chateau de Fontainebleau"
      )
    )
  );
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderBurger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headerBurger_css__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headerBurger_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__headerBurger_css__);



function HeaderBurger(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "button",
    {
      className: props.animation ? "menu_toggle menu_anim" : "menu_toggle",
      onClick: props.toggle
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "burger_container" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "burger_element" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "burger_element" }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "burger_element" })
    )
  );
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_header_burger_HeaderBurger__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_icons_tickets_png__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_icons_tickets_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_icons_tickets_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_style_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_style_css__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();


//import { Link } from "react-router-dom";





//import iconCart from "../../assets/icons/shopping-bag.png";




function Header() {
  var dataCart = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["useSelector"])(function (state) {
    return state.cartReducer.carts;
  });

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      quantity = _useState2[0],
      setQuantity = _useState2[1];

  var totals = function totals() {
    var quantity = 0;
    dataCart.map(function (e) {
      return quantity = e.qty + quantity;
    });
    setQuantity(quantity);
  };

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    totals();
  }, [totals]);

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];
  //const [isAnimated, setAnimated] = useState("");


  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAnimated = _useState6[0],
      setAnimated = _useState6[1];

  var toggleNav = function toggleNav() {
    setIsOpen(!isOpen);
    //setAnimated(isAnimated === "menu_anim" ? "" : "menu_anim");
    setAnimated(!isAnimated);
  };
  //-------------HIDE-NAVBAR-ON-SCROLL-----------------------------
  document.addEventListener("DOMContentLoaded", function () {
    var el_autohide = document.querySelector(".autohide");
    // add padding-top to bady (if necessary)
    var navbar_height = document.querySelector("#nav").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";

    if (el_autohide) {
      var last_scroll_top = 0;
      window.addEventListener("scroll", function () {
        var scroll_top = window.scrollY;
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove("scrolled-down");
          el_autohide.classList.add("scrolled-up");
        } else {
          el_autohide.classList.remove("scrolled-up");
          el_autohide.classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
      // window.addEventListener
    }
    // if
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "container_header" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "nav",
      { id: "nav", className: "autohide" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_common_header_burger_HeaderBurger__["a" /* default */], { toggle: toggleNav, animation: isAnimated }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: isOpen ? "menu active " : "menu" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          { smooth: true, to: "/#accueil", className: "nav_item" },
          "Accueil"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          { smooth: true, to: "/#appartements", className: "nav_item" },
          "Les chambres"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          { smooth: true, to: "/#parc", className: "nav_item" },
          "Le parc"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          { smooth: true, to: "/#tarifs", className: "nav_item" },
          "Tarifs"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          { smooth: true, to: "/#horaires", className: "nav_item" },
          "Horaires"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          { smooth: true, to: "/#contact", className: "nav_item" },
          "Contact"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          {
            smooth: true,
            to: "/panier#panier",
            className: "nav_item shopping-cart-link"
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "shopping-cart" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "shopping_cart_img", src: __WEBPACK_IMPORTED_MODULE_4__assets_icons_tickets_png___default.a, alt: "panier" }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "h5",
              { className: "shopping-cart_h5" },
              quantity
            )
          )
        )
      )
    )
  );
}
var mapStateToProps = function mapStateToProps(state) {
  return {
    amount: state.amount
  };
};
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Header);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DropDownContent(_ref) {
  var content = _ref.content,
      classContent = _ref.classContent,
      display = _ref.display;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'body_content ' + display },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classContent },
      content
    )
  );
}
/* harmony default export */ __webpack_exports__["a"] = (DropDownContent);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropDownTitle__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropDownContentOrderList__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropDown_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropDown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dropDown_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropDownTitle_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropDownTitle_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dropDownTitle_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropDownContent_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropDownContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dropDownContent_css__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();








function DropDown(_ref) {
  var title = _ref.title,
      content = _ref.content;

  // TOGGLE
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])('hidden'),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])('arrow_content'),
      _useState4 = _slicedToArray(_useState3, 2),
      topArrow = _useState4[0],
      setTopArrow = _useState4[1];

  var toggleContent = function toggleContent() {
    setIsOpen(isOpen === 'hidden' ? '' : 'hidden');
    setTopArrow(topArrow === 'arrow_content' ? 'arrow_content rotate' : 'arrow_content');
  };
  // SET CLASSES

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])('p_content'),
      _useState6 = _slicedToArray(_useState5, 2),
      currentClassContent = _useState6[0],
      setClassContent = _useState6[1];

  var _useState7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])('h3_DD'),
      _useState8 = _slicedToArray(_useState7, 2),
      currentClassTitle = _useState8[0],
      setClassTitle = _useState8[1];

  var href = window.location.href.includes('/apropos');
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (href) setClassContent('p_content_about') || setClassTitle('h3_DD_about');else setClassContent(currentClassContent) || setClassTitle('h3_DD');
  }, [currentClassContent, currentClassTitle, href]);
  //  DROPDOWN
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'dropDown_content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__dropDownTitle__["a" /* default */], {
      title: title,
      classTitle: '' + currentClassTitle,
      toggle: toggleContent,
      arrow: topArrow
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__dropDownContentOrderList__["a" /* default */], {
      display: '' + isOpen,
      content: content,
      classContent: '' + currentClassContent
    })
  );
}
DropDown.defaultProps = {
  content: 'Content is not available'
};
/* harmony default export */ __webpack_exports__["a"] = (DropDown);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_dropDown_arrowBottomBlack_png__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_dropDown_arrowBottomBlack_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_dropDown_arrowBottomBlack_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropDownTitle_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropDownTitle_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dropDownTitle_css__);





function DropDownTitle(_ref) {
  var toggle = _ref.toggle,
      title = _ref.title,
      classTitle = _ref.classTitle,
      arrow = _ref.arrow;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'title_content' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_uuid__["a" /* v4 */])(), className: classTitle },
      title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { className: 'DD_btn', onClick: toggle },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: arrow, src: __WEBPACK_IMPORTED_MODULE_1__assets_dropDown_arrowBottomBlack_png___default.a, alt: 'arrow dropdown' })
    )
  );
}
/* harmony default export */ __webpack_exports__["a"] = (DropDownTitle);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__error_css__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





function Error() {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    setTimeout(function () {
      setShow(true);
    }, 400);
  }, []);
  return show && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'main_error' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'h1_error' },
      '404'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      { className: 'h2_error' },
      'Oups! La page que ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'br' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
      ),
      ' vous demandez n\'existe pas'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
      { to: '/', className: 'link_error' },
      'Retournez sur la page d\'accueil'
    )
  );
}
/* harmony default export */ __webpack_exports__["a"] = (Error);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Home;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__presentation__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__introduction__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apparements__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parc__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tarifs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__horaires__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_style_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_style_css__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();














function Home() {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var msgConfirm = function msgConfirm() {
    setShowModal(true);
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "main",
    { id: "accueil" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__banner__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container_page" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__presentation__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__introduction__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__apparements__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__parc__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__tarifs__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__horaires__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__contact__["a" /* default */], { msgConfirm: msgConfirm })
    ),
    showModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__modal__["a" /* default */], { content: "Votre message a bien été envoyé!" })
  );
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Apparements;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_home__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_int_int_napoleon_jpg__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_int_int_napoleon_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_images_int_int_napoleon_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_int_int_napoleon_2_jpg__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_int_int_napoleon_2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_images_int_int_napoleon_2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_images_int_int_pape_jpg__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_images_int_int_pape_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_images_int_int_pape_jpg__);






function Apparements() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { id: "appartements", className: "appartements" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h2",
      { id: "appartements_h2" },
      "Les grands appartements"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "Petite chambre \xE0 coucher de l'Empereur"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_1__data_home__["b" /* appartements */].chambreEmpreur
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_2__assets_images_int_int_napoleon_jpg___default.a,
          className: "article_a petite_chambre",
          "aria-label": "petite_chambre"
        },
        ""
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content column_reverse" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_3__assets_images_int_int_napoleon_2_jpg___default.a,
          className: "article_a chambre_a_coucher",
          "aria-label": "chambre_a_coucher"
        },
        ""
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "Chambre \xE0 coucher de l'Empereur"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_1__data_home__["b" /* appartements */].chambre_coucher
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "L'appartement du pape"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_1__data_home__["b" /* appartements */].chambre_pape
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_4__assets_images_int_int_pape_jpg___default.a,
          className: "article_a chambre_pape",
          "aria-label": "petite_chambre"
        },
        ""
      )
    )
  );
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Contact;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__ = __webpack_require__(12);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();


//import { HashLink } from "react-router-hash-link";


//import env from "react-dotenv";

function Contact(props) {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      isFN = _useState2[0],
      setFN = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isLN = _useState4[0],
      setLN = _useState4[1];

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isTel = _useState6[0],
      setTel = _useState6[1];

  var _useState7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      isEmail = _useState8[0],
      setEmail = _useState8[1];

  var _useState9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      isMsg = _useState10[0],
      setMsg = _useState10[1];

  var contactMsg = {
    firstName: "" + isFN,
    lastName: "" + isLN,
    tel: "" + isTel,
    email: "" + isEmail,
    messageTxt: "" + isMsg
  };
  console.log("contactMsg:", contactMsg);
  console.log("isTel:", isTel, isFN, isLN, isEmail);

  //----------------------------
  var matchFirstName = function matchFirstName(e) {
    var val = e.target.value;
    var FN_ErrMsg = document.getElementById("contactFirstNameErrorMsg");
    var matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) FN_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      FN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["a" /* FN */].adviceLength;
      setFN("");
    } else if (matched) {
      FN_ErrMsg.innerHTML = "";
      setFN(val);
    } else if (!matched) {
      FN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["a" /* FN */].adviceContent;
      setFN("");
    }
  };
  var matchLastName = function matchLastName(e) {
    var val = e.target.value;
    var LN_ErrMsg = document.getElementById("contactLastNameErrorMsg");
    var matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) LN_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      LN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["b" /* LN */].adviceLength;
      setLN("");
    } else if (matched) {
      LN_ErrMsg.innerHTML = "";
      setLN(val);
    } else if (!matched) {
      LN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["b" /* LN */].adviceContent;
      setLN("");
    }
  };
  var matchEmail = function matchEmail(e) {
    var val = e.target.value;
    var EMAIL_ErrMsg = document.getElementById("contactEmailErrorMsg");
    var matched = val.match(/[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g);
    if (val.length === 0) EMAIL_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      EMAIL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["e" /* EMAIL */].adviceLength;
      setEmail("");
    } else if (matched) {
      EMAIL_ErrMsg.innerHTML = "";
      setEmail(val);
    } else if (!matched) {
      EMAIL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["e" /* EMAIL */].adviceContent;
      setEmail("");
    }
  };
  var matchTel = function matchTel(e) {
    var val = e.target.value;
    var TEL_ErrMsg = document.getElementById("contactTelErrorMsg");
    // const matched = val.match(/^[a-z A-Z]{3,25}$/);
    var matched = val.match(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/);
    // 0123456789
    // 01 23 45 67 89
    // 01.23.45.67.89
    // 0123 45.67.89
    // 0033 123-456-789
    // +33-1.23.45.67.89
    // +33 - 123 456 789
    // +33(0) 123 456 789
    // +33 (0)123 45 67 89
    // +33 (0)1 2345-6789
    // +33(0) - 123456789
    if (val.length === 0) TEL_ErrMsg.innerHTML = "";else if (val.length < 10 || val.length > 13) {
      TEL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["f" /* TEL */].adviceLength;
      setTel("");
    } else if (matched) {
      TEL_ErrMsg.innerHTML = "";
      setTel(val);
    } else if (!matched) {
      TEL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["f" /* TEL */].adviceContent;
      setTel("");
    }
  };
  var matchMessage = function matchMessage(e) {
    var val = e.target.value;
    var MSG_ErrMsg = document.getElementById("contactMessageErrorMsg");
    // const matched = val.match(/^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?| ]*$/);
    var matched = val.match(/^[a-zA-Z0-9~!@#$%^&*()`{};':,./<>?|"+£¤áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]+$/);
    if (val.length === 0) MSG_ErrMsg.innerHTML = "";else if (val.length < 10) {
      MSG_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["g" /* MSG */].adviceLength;
      setMsg("");
    } else if (matched) {
      MSG_ErrMsg.innerHTML = "";
      setMsg(val);
    } else if (!matched) {
      MSG_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_2__order_data_data_adviceClient__["g" /* MSG */].adviceContent;
      setMsg("");
    }
  };
  //----------------------------

  var messagePost = function messagePost() {
    // e.preventDefault();
    if (isFN, isLN, isEmail, isTel, isMsg) {
      //fetch("http://localhost:4000/api/messages/", {
      fetch("https:chateau-back-hk2hbrmct-boogysh.vercel.app/api/messages/", {
        // fetch(`${env.API_HOST}/api/messages/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactMsg)
      });
      props.msgConfirm();
    }
    // window.location.href("/");
  };
  // console.log(env.API_HOST)

  //-----------------------------
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { className: "contact", id: "contact" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h4",
      null,
      "Contactez nous..."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container-form" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "form",
        { method: "post" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "FN_and_LN" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "label",
            { htmlFor: "prenom" },
            "Pr\xE9nom"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "container_input_p" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              onChange: matchFirstName,
              className: "contact_input",
              type: "text",
              name: "prenom",
              placeholder: "Pr\xE9nom",
              id: "prenom",
              required: true
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { role: "img", "aria-label": "star", className: "star" },
              "\u2606"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "contactFirstNameErrorMsg", className: "error" }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "label",
            { htmlFor: "nom" },
            "Nom"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "container_input_p" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              onChange: matchLastName,
              className: "contact_input",
              type: "text",
              placeholder: "Nom",
              name: "nom",
              id: "nom",
              required: true
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { role: "img", "aria-label": "star", className: "star" },
              "\u2606"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "contactLastNameErrorMsg", className: "error" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "email" },
          "Email"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            onChange: matchEmail,
            className: "contact_input",
            type: "email",
            placeholder: "Email"
            // name="email"
            , id: "email"
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "contactEmailErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "tel" },
          "T\xE9l\xE9phone:"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            onChange: matchTel,
            className: "contact_input",
            type: "tel",
            placeholder: "Telephone",
            name: "tel",
            id: "tel",
            required: true
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "contactTelErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
            id: "txt",
            onChange: matchMessage,
            placeholder: "Votre message",
            required: true
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "contactMessageErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "p_star" },
          "Les \xE9l\xE9ments avec \"",
          " ",
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { className: "star_2", role: "img", "aria-label": "star" },
            "\u2606"
          ),
          " ",
          "\" sont obligatoires \xE0 remplir."
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
          { to: "/" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            { onClick: messagePost },
            "Envoyer"
          )
        )
      )
    )
  );
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Horaires;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function Horaires() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { id: "horaires" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "bg_horaires" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "horaire" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h2",
        null,
        "Horaires d'ouverture"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "Le ch\xE2teau"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        null,
        "Le ch\xE2teau est ouvert tous les jours,",
        " ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "strong",
          null,
          "sauf le mardi, le 1er janvier, le 1er mai et le 25 d\xE9cembre."
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "strong",
          null,
          "D'octobre \xE0 mars:"
        ),
        " 9h30 \xE0 17h (dernier acc\xE8s \xE0 16h15)."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "strong",
          null,
          "D'avril \xE0 septembre"
        ),
        " :9h30 \xE0 18h (dernier acc\xE8s \xE0 17h15)."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "Le parc"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        null,
        "Le parc et les jardins sont ouverts, dans les conditions habituelles, gratuitement."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h3",
        null,
        "Plan d'acces:"
      )
    )
  );
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Accueil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_home__ = __webpack_require__(11);


function Accueil() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { id: "introduction" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h2",
      null,
      "Le ch\xE2teau de Fontainebleau"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { id: "article_accueil" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "article",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          null,
          "Le plus meubl\xE9 des ch\xE2teau royaux fran\xE7ais"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].le_plus_meuble
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].patrimoine
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].emblematique
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].appartements
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].vie_au_chateau
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "source" },
          "Soure: www.fontainebleau-tourisme.com/"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "aside",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            null,
            "Les Origines"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            null,
            __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].origines
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            null,
            __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].saint_louis
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            null,
            __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].guerre_cent_ans
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            null,
            __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].francois_premier
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            null,
            __WEBPACK_IMPORTED_MODULE_1__data_home__["c" /* introduction */].charles_ix
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            { className: "source" },
            "Source: www.chateaudeharoue.fr/le-chateau-de-fontainebleau/"
          )
        )
      )
    )
  );
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = modal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



function modal(props) {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var closeModal = function closeModal() {
    setShow(false);
    window.location.reload();
    // window.location.href = "/";
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: show ? "modal_container" : "modal_container hidden" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "modal" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h2",
        { className: "modal_h2" },
        props.content
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        { onClick: closeModal, className: "modal_btn", id: "modal_btn" },
        "x"
      )
    )
  );
}

// import React, { useState } from "react";

// export default function modal() {
//   const [show, setShow] = useState(true);
//   const [url, setUrl] = useState("https://www.youtube.com/embed/8UHfxxTPgCc");

//   const closeModal = () => {
//     setShow(false);
//     setUrl(null);
//   };

//   return (
//     <div className={show ? "modal_container" : "modal_container hidden"}>
//       <div className="modal">
//         <iframe
//           id="video_chateau"
//           src={url}
//           title="chateau-de-fontainebleau"
//           allow="accelerometer; autoplay; encrypted-media; web-share; fullscreen;picture-in-picture; gyroscope;"
//           allowscriptaccess="always"
//           // autoPlay="play"
//         ></iframe>
//         <button onClick={closeModal} className="modal_btn" id="modal_btn">
//           x
//         </button>
//       </div>
//     </div>
//   );
// }

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Parc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_ext_porte_doree_jpg__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_ext_porte_doree_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_images_ext_porte_doree_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_ext_ext_1_jpg__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_ext_ext_1_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_images_ext_ext_1_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_ext_ext_3_jpg__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_ext_ext_3_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_images_ext_ext_3_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_images_ext_canal_jpg__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_images_ext_canal_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_images_ext_canal_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_images_ext_parterre_jpg__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_images_ext_parterre_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_images_ext_parterre_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_images_ext_jardin_diane_jpg__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_images_ext_jardin_diane_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_images_ext_jardin_diane_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_home__ = __webpack_require__(11);









function Parc() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { id: "parc" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h2",
      { className: "parc_h2" },
      "Decouvrez le parc du Ch\xE2teau, 130 hectares de bonheur avec acc\xE8s libre"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "parallax_parc" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "La porte Dor\xE9e"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_7__data_home__["a" /* parc */].porte_doree
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_1__assets_images_ext_porte_doree_jpg___default.a,
          className: "article_a la_porte_doree",
          "aria-label": "La porte Dor\xE9e"
        },
        ""
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content column_reverse" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_2__assets_images_ext_ext_1_jpg___default.a,
          className: "article_a la_porte_doree",
          "aria-label": "L'\xE9tang aux Carpes"
        },
        ""
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "L'\xE9tang aux Carpes"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_7__data_home__["a" /* parc */].etang_carpes
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "La cour d'Honneur"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_7__data_home__["a" /* parc */].cour_dHonneur
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_3__assets_images_ext_ext_3_jpg___default.a,
          className: "article_a cour_dHonneur",
          "aria-label": "La cour d'Honneur"
        },
        ""
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content column_reverse" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_4__assets_images_ext_canal_jpg___default.a,
          className: "article_a canal_du_parc",
          "aria-label": "Le canal du parc"
        },
        ""
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "Le canal du parc"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_7__data_home__["a" /* parc */].canal_parc
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "Le grand Parterre"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_7__data_home__["a" /* parc */].grand_parterre
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_5__assets_images_ext_parterre_jpg___default.a,
          className: "article_a parterre",
          "aria-label": "Le grand Parterre"
        },
        ""
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "article",
      { className: "article_content column_reverse" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        {
          href: __WEBPACK_IMPORTED_MODULE_6__assets_images_ext_jardin_diane_jpg___default.a,
          className: "article_a jardin_diane",
          "aria-label": "Le jardin de Diane"
        },
        ""
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "article_txt" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "article_h3" },
          "Le jardin de Diane"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "article_p" },
          __WEBPACK_IMPORTED_MODULE_7__data_home__["a" /* parc */].jardin_dianne
        )
      )
    )
  );
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Presentation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_site_original_napoleon_jpg__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_site_original_napoleon_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_images_site_original_napoleon_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_site_original_porteBois_jpg__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_site_original_porteBois_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_images_site_original_porteBois_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_site_original_ext_jpg__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_site_original_ext_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_images_site_original_ext_jpg__);





function Presentation() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container_presentaion" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "presentation" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          { className: "container_presentaion_h3" },
          "Un voyage au coeur de l'histoire"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "napoleon" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "overflow_hidden" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "napoleon_img", src: __WEBPACK_IMPORTED_MODULE_1__assets_images_site_original_napoleon_jpg___default.a, alt: "napoleon" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            { className: "napoleon_h3 right350" },
            "\xC0 la rencontre de Napol\xE9on Ier"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "presentation" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "porteBois" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "overflow_hidden" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
              className: "porteBois_img",
              src: __WEBPACK_IMPORTED_MODULE_2__assets_images_site_original_porteBois_jpg___default.a,
              alt: "porte sculpt\xE9e"
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            { className: "napoleon_h3 left350" },
            "la demeure des rois"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "parc_ext" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "overflow_hidden" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "parc_ext_img", src: __WEBPACK_IMPORTED_MODULE_3__assets_images_site_original_ext_jpg___default.a, alt: "parc" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            { className: "napoleon_h3 left300" },
            "une source d'inspiration"
          )
        )
      )
    )
  );
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Tarifs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hooks_useFetch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_loader_loader__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors_Error500__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid__ = __webpack_require__(16);


//import { ADD } from "../../redux/action";






function Tarifs() {
  var _UseFetch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__hooks_useFetch__["a" /* UseFetch */])("https://boogysh.github.io/chateau-api/dataCartCard.json"),
      data = _UseFetch.data,
      isLoading = _UseFetch.isLoading,
      error = _UseFetch.error;

  if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__errors_Error500__["a" /* default */], null);

  var dispatch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["useDispatch"])();
  var addToCartFunc = function addToCartFunc(e) {
    // dispatch(ADD(e));
    dispatch({
      type: "ADD_CART",
      payload: e
    });
  };
  return isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_loader_loader__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { className: "tarifs", id: "tarifs" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      null,
      "Nos tarifs..."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container-cartes" },
      data.map(function (items) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "cartes", id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_uuid__["a" /* v4 */])(), key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_uuid__["a" /* v4 */])() },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            null,
            items.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { className: "price" },
            items.price,
            "\u20AC"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { role: "img", "aria-label": "v" },
                items.li_1
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                " Visite du ch\xE2teau"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { role: "img", "aria-label": "x" },
                items.li_2
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                " Spectacle au ch\xE2teau"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { role: "img", "aria-label": "x" },
                items.li_3
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                " Visite de la ville"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { role: "img", "aria-label": "x" },
                items.li_4
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                " Restaurant tipique d'exeption"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { role: "img", "aria-label": "x" },
                items.li_5
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                "Visite sur plusieurs jours"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "li",
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { role: "img", "aria-label": "x" },
                items.li_6
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                "Acc\xE8s \xE0 des lieux exclusifs"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            { className: "cartes_btn", onClick: function onClick() {
                return addToCartFunc(items);
              } },
            "Ajouter au panier"
          )
        );
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "button",
      { className: "btn_to_cart" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
        { smooth: true, to: "/panier#panier", id: "valide_panier" },
        "Voir le panier"
      )
    )
  );
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OrderForm;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__ = __webpack_require__(4);


//import Banner from "../../components/home/banner";

function OrderForm(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    { className: "contact", id: "contact" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h4",
      null,
      "Valider votre commande..."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container-form" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "form",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "prenom" },
          "Pr\xE9nom"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            className: "contact_input"
            //   onChange={(e) => matchFirstName(e)}
            , onChange: props.matchFirstName
            // type="text"
            , name: "prenom",
            placeholder: "Pr\xE9nom",
            id: "prenom",
            required: true
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "firstNameErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "nom" },
          "Nom"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            className: "contact_input",
            onChange: props.matchLastName,
            type: "text",
            placeholder: "Nom",
            name: "nom",
            id: "nom",
            required: true
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "lastNameErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "lastName" },
          "Adresse"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            className: "contact_input",
            onChange: props.matchAddress,
            type: "text",
            placeholder: "Adresse",
            id: "adress"
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "addressErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "ville" },
          "Ville:"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            className: "contact_input"
            //   onChange={(e) => matchCity(e)}
            , onChange: props.matchCity,
            type: "text",
            placeholder: "Ville",
            id: "city",
            required: true
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "cityErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          { htmlFor: "email" },
          "Email:"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container_input_p" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
            className: "contact_input"
            //   onChange={(e) => matchEmail(e)}
            , onChange: props.matchEmail
            // type="email"
            , placeholder: "Email",
            id: "email",
            required: true
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { role: "img", "aria-label": "star", className: "star" },
            "\u2606"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { id: "emailErrorMsg", className: "error" }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "p_star" },
          "Les \xE9l\xE9ments avec \"",
          " ",
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "span",
            { className: "star_2", role: "img", "aria-label": "star" },
            "\u2606"
          ),
          " ",
          "\" sont obligatoires \xE0 remplir."
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_hash_link__["a" /* HashLink */],
          { smooth: true, to: "/commande/confirmation" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "button",
            {
              onClick: props.submit //&& (() => resetInputs()) !!! contact empty
              , className: "orderForm_btn"
            },
            "Valider"
          )
        )
      )
    )
  );
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OrderPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderForm__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_banner__ = __webpack_require__(6);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();


//import { useEffect } from "react";

//import OrderPageConfiramation from "./orderPageConfirmation";



//import { nanoid } from "nanoid";

//import env from "react-dotenv";

function OrderPage() {
  var _useSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["useSelector"])(function (state) {
    return state.cartReducer;
  }),
      orderDetails = _useSelector.orderDetails,
      totalPrice = _useSelector.totalPrice;

  var dispatch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["useDispatch"])();
  //----------------------------
  // add logic orderForm

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      isFN = _useState2[0],
      setFN = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      isLN = _useState4[0],
      setLN = _useState4[1];

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      isAddress = _useState6[0],
      setAddress = _useState6[1];

  var _useState7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      isCity = _useState8[0],
      setCity = _useState8[1];

  var _useState9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      isEmail = _useState10[0],
      setEmail = _useState10[1];

  var client = {
    firstName: "" + isFN,
    lastName: "" + isLN,
    address: "" + isAddress,
    city: "" + isCity,
    email: "" + isEmail
  };
  //----------------------------
  var matchFirstName = function matchFirstName(e) {
    var val = e.target.value;
    var FN_ErrMsg = document.getElementById("firstNameErrorMsg");
    var matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) FN_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      FN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["a" /* FN */].adviceLength;
      setFN("");
    } else if (matched) {
      FN_ErrMsg.innerHTML = "";
      setFN(val);
    } else if (!matched) {
      FN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["a" /* FN */].adviceContent;
      setFN("");
    }
  };
  var matchLastName = function matchLastName(e) {
    var val = e.target.value;
    var LN_ErrMsg = document.getElementById("lastNameErrorMsg");
    var matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) LN_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      LN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["b" /* LN */].adviceLength;
      setLN("");
    } else if (matched) {
      LN_ErrMsg.innerHTML = "";
      setLN(val);
    } else if (!matched) {
      LN_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["b" /* LN */].adviceContent;
      setLN("");
    }
  };
  var matchAddress = function matchAddress(e) {
    var val = e.target.value;
    var ADDRESS_ErrMsg = document.getElementById("addressErrorMsg");
    // const matched = val.match(/^[a-z A-Z]{3,25}$/);
    var matched = val.match(/^[0-9]{1,3}[a-z A-Z]{0,1} [a-z A-Z]{3,35}$/);
    if (val.length === 0) ADDRESS_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      ADDRESS_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["c" /* ADDRESS */].adviceContent;
      setAddress("");
    } else if (matched) {
      ADDRESS_ErrMsg.innerHTML = "";
      setAddress(val);
    } else if (!matched) {
      ADDRESS_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["c" /* ADDRESS */].adviceContent;
      setAddress("");
    }
  };
  var matchCity = function matchCity(e) {
    var val = e.target.value;
    var CITY_ErrMsg = document.getElementById("cityErrorMsg");
    var matched = val.match(/^[a-z A-Z]{3,25}$/);
    if (val.length === 0) CITY_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      CITY_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["d" /* CITY */].adviceLength;
      setCity("");
    } else if (matched) {
      CITY_ErrMsg.innerHTML = "";
      setCity(val);
    } else if (!matched) {
      CITY_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["d" /* CITY */].adviceContent;
      setCity("");
    }
  };
  var matchEmail = function matchEmail(e) {
    var val = e.target.value;
    var EMAIL_ErrMsg = document.getElementById("emailErrorMsg");
    var matched = val.match(/[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g);
    if (val.length === 0) EMAIL_ErrMsg.innerHTML = "";else if (val.length < 3 || val.length > 25) {
      EMAIL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["e" /* EMAIL */].adviceLength;
      setEmail("");
    } else if (matched) {
      EMAIL_ErrMsg.innerHTML = "";
      setEmail(val);
    } else if (!matched) {
      EMAIL_ErrMsg.innerHTML = __WEBPACK_IMPORTED_MODULE_1__data_data_adviceClient__["e" /* EMAIL */].adviceContent;
      setEmail("");
    }
  };
  //-----------------------------

  var orderInfo = [];

  orderDetails.map(function (item) {
    var orderInfoItem = {
      id: item.id,
      qty: item.qty
    };
    return orderInfo.push(orderInfoItem);
  });

  // TO submit POST
  var order = {
    // id: nanoid(),
    clientInfo: client,
    orderInfo: orderInfo,
    totalPrice: totalPrice
  };
  var orderPost = function orderPost() {
    // createOrderNr()

    // fetch("http://localhost:4000/api/commandes/", {
    //fetch(`${env.API_HOST}/api/commandes/`, {
    fetch("https:chateau-back-hk2hbrmct-boogysh.vercel.app/api/commandes/", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });
    dispatch({
      type: "EMAIL",
      payload: client.email
    });
    dispatch({
      type: "CLEAN_CART",
      payload: []
    });
    dispatch({
      type: "SOLDE",
      payload: 0
    });
    // window.location.reload()

    // window.location.href = "/commande/confirmation";
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "main",
    { id: "orderPage" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__home_banner__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container_page" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__orderForm__["a" /* default */], {
        id: "orderForm",
        submit: orderPost,
        matchFirstName: matchFirstName,
        matchLastName: matchLastName,
        matchAddress: matchAddress,
        matchCity: matchCity,
        matchEmail: matchEmail
      })
    )
  );
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OrderPageConfirmation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orderList__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_banner__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errors_Error500__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hooks_useFetch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nanoid__ = __webpack_require__(26);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






//import Loader from "../common/loader/loader";


//import env from "react-dotenv";


function OrderPageConfirmation() {
  // const { data, error } = UseFetch(`${env.API_HOST}/api/commandes`);
  var _UseFetch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__hooks_useFetch__["a" /* UseFetch */])("https:chateau-back-hk2hbrmct-boogysh.vercel.app/api/commandes/"),
      data = _UseFetch.data,
      error = _UseFetch.error;

  if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__errors_Error500__["a" /* default */], null);

  var _useSelector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["useSelector"])(function (state) {
    return state.cartReducer;
  }),
      email = _useSelector.email;

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    setTimeout(function () {
      setShow(true);
    }, 1000);
  }, [show]);
  //----------------------------------------------

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isClosed = _useState4[0],
      setIsClosed = _useState4[1];

  var closeOrderList = function closeOrderList() {
    setIsClosed(!isClosed);
  };
  var redirectHome = function redirectHome() {
    window.location.href = "/";
  };

  return show && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "main",
    { id: "orderPageConfirmation" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__home_banner__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "container_page container_page_OrderPageConfirmation" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "orderPageConfirmation_content" },
        data.map(function (order, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h1",
            { key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_nanoid__["a" /* nanoid */])(), className: "orderPageConfirmation_h1" },
            "Commande valid\xE9e! Votre num\xE9ro de commande: ",
            order._id
          );
        }).slice(0, 1),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "orderPageConfirmation_content_p" },
          "Pour savoir plus sur votre commande garder ce num\xE9ro."
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "orderPageConfirmation_content_p" },
          "Vous pouvez, \xE9galement chercher vos commandes avec votre email."
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__orderList__["a" /* default */], {
        email: email,
        closeOrderList: closeOrderList && redirectHome,
        isClosed: isClosed
      })
    )
  );
}

/* <div id="order">
        <h2 className="order_h2">Commande Nr: {id}</h2>
        <h3>Le prix de la commande: {totalPrice} €</h3>
        {orderDetails.map((item) => {
          return (
            <h3 key={uuidv4()}>
              Cartes {item.id}: {item.qty}
            </h3>
          );
        })}
      </div> */

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOLDE_AMOUNT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(22);
// import { ADD_CART, REMOVE, REMOVE_ITEM } from "./type"


var SOLDE_AMOUNT = function SOLDE_AMOUNT(totalPrice, pourcents) {

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__type__["a" /* SOLDE */],
    payload: totalPrice * pourcents / 100
  };
};

// export const ADD = (item) => {
//   return {
//     type: ADD_CART,
//     payload: item,
//   }
// }
// export const DELETE = (id) => {
//   return {
//     type: REMOVE,
//     payload: id,
//   }
// }
// export const REMOVE_INT = (item) => {
//   return {
//     type: REMOVE_ITEM,
//     payload: item,
//   }
// }

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(22);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import { ADD_CART, REMOVE, REMOVE_ITEM } from "./type";


var initialStore = {
  carts: [],
  solde: 0,
  codeSolde: "CODE5", //must be process.env.CODE_SOLDE
  inputCodeSolde: "",
  clientInfo: [],
  totalPrice: 0, // to display on OrderPage
  orderDetails: [],
  email: "",
  findEmail: ""
};
// reducer
function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStore;
  var action = arguments[1];

  switch (action.type) {
    case "FIND_EMAIL":
      return Object.assign({}, state, {
        findEmail: action.payload
      });

    case "EMAIL":
      return Object.assign({}, state, {
        email: action.payload
      });

    case "ORDER_DETAILS":
      return Object.assign({}, state, {
        orderDetails: action.payload
      });

    case "PRICE":
      return Object.assign({}, state, {
        totalPrice: action.payload
      });
    case "CLIENT_INFO":
      return Object.assign({}, state, {
        clientInfo: action.payload
      });
    case __WEBPACK_IMPORTED_MODULE_0__type__["a" /* SOLDE */]:
      return Object.assign({}, state, {
        solde: action.payload
        //-------------------------------
      });
    case "CODE_SOLDE":
      return Object.assign({}, state, {
        codeSolde: action.payload
      });
    case "INPUT_CODE_SOLDE":
      return Object.assign({}, state, {
        inputCodeSolde: action.payload
      });

    case "ADD_CART":
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // }

      // const itemIndex = state.carts.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.carts[itemIndex].qty += 1;
      // }
      // else {
      //   const temp = { ...action.payload, qty: 1  };
      //   return {
      //     ...state,
      //     carts: [...state.carts, temp],
      //   };
      // }

      var itemIndex = state.carts.findIndex(function (item) {
        return item.id === action.payload.id;
      });
      if (itemIndex >= 0) {
        // state.carts[itemIndex].qty += 1;
        state.carts[itemIndex].qty += 0;
      } else {
        var temp = Object.assign({}, action.payload, { qty: 1 });
        return Object.assign({}, state, {
          carts: [].concat(_toConsumableArray(state.carts), [temp])
        });
      }
      break;

    case "ADD_ITEM":
      var itemIndex_incr = state.carts.findIndex(function (item) {
        return item.id === action.payload.id;
      });
      if (state.carts[itemIndex_incr].qty >= 1) {
        state.carts[itemIndex_incr].qty += 1;
        // const add_item = (state.carts[itemIndex_incr].qty += 1);
        // console.log([...state.carts, add_item]);
        return Object.assign({}, state, {
          carts: [].concat(_toConsumableArray(state.carts))
        });
      }
      break;

    case "REMOVE_CARD":
      // DELETE ONE CARD, type of
      var data = state.carts.filter(function (el) {
        return el.id !== action.payload;
      });
      return Object.assign({}, state, {
        carts: data
      });
    case "CLEAN_CART":
      // DELETE ALL CART
      return Object.assign({}, state, {
        carts: []
      });

    case "REMOVE_ITEM":
      var itemIndex_desc = state.carts.findIndex(function (item) {
        return item.id === action.payload.id;
      });
      if (state.carts[itemIndex_desc].qty >= 2) {
        var delete_item = state.carts[itemIndex_desc].qty -= 1;
        console.log([].concat(_toConsumableArray(state.carts), [delete_item]));
        return Object.assign({}, state, {
          carts: [].concat(_toConsumableArray(state.carts))
        });
      }
      // else if (state.carts[itemIndex_desc].qty === 1) {
      //   const data = state.carts.filter((el) => el.id !== action.payload.id);
      //   return {
      //     ...state,
      //     carts: data,
      //   };
      // }
      break;

    default: //doo nothing
  }
  return state;
}
/* harmony default export */ __webpack_exports__["a"] = (cartReducer);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartReducer__ = __webpack_require__(77);



var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* combineReducers */])({
  cartReducer: __WEBPACK_IMPORTED_MODULE_1__cartReducer__["a" /* default */]
});

var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* createStore */])(rootReducer);

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(80);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),
/* 82 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at Module.load (node:internal/modules/cjs/loader:1037:32)\n    at Module._load (node:internal/modules/cjs/loader:878:12)\n    at Module.require (node:internal/modules/cjs/loader:1061:19)\n    at require (node:internal/modules/cjs/helpers:103:18)\n    at Object.<anonymous> (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\webpack\\lib\\NormalModule.js:192:19\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\D\\PROJET_N_0_Buga_VIctor\\chateau-app\\node_modules\\postcss-loader\\lib\\index.js:173:16\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(89);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(88);
} else {
  module.exports = require('./cjs/react-is.development.js');
}


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
/* unused harmony export urlAlphabet */



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(27);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._81 = 1;
  p._65 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._81 === 3) {
            val = val._65;
          }
          if (val._81 === 1) return res(i, val._65);
          if (val._81 === 2) reject(val._65);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(27);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._10 = null;
  Promise._97 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._10 = function (promise) {
    if (
      promise._81 === 2 && // IS REJECTED
      rejections[promise._72]
    ) {
      if (rejections[promise._72].logged) {
        onHandled(promise._72);
      } else {
        clearTimeout(rejections[promise._72].timeout);
      }
      delete rejections[promise._72];
    }
  };
  Promise._97 = function (promise, err) {
    if (promise._45 === 0) { // not yet handled
      promise._72 = id++;
      rejections[promise._72] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._72),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(97);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(95)();
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),ca=__webpack_require__(117);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(28);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Context__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Subscription__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_useIsomorphicLayoutEffect__ = __webpack_require__(37);





function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(() => {
    const subscription = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_Subscription__["a" /* createSubscription */])(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined
    };
  }, [store, serverState]);
  const previousState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(() => store.getState(), [store]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_useIsomorphicLayoutEffect__["a" /* useIsomorphicLayoutEffect */])(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || __WEBPACK_IMPORTED_MODULE_1__Context__["a" /* ReactReduxContext */]; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ __webpack_exports__["a"] = (Provider);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapDispatchToPropsFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_bindActionCreators__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invalidArgFactory__ = __webpack_require__(14);



function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(dispatch => // @ts-ignore
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_bindActionCreators__["a" /* default */])(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__invalidArgFactory__["a" /* createInvalidArgFactory */])(mapDispatchToProps, 'mapDispatchToProps');
}

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapStateToPropsFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invalidArgFactory__ = __webpack_require__(14);


function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__invalidArgFactory__["a" /* createInvalidArgFactory */])(mapStateToProps, 'mapStateToProps');
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* harmony export (immutable) */ __webpack_exports__["a"] = mergePropsFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_verifyPlainObject__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invalidArgFactory__ = __webpack_require__(14);



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__invalidArgFactory__["a" /* createInvalidArgFactory */])(mergeProps, 'mergeProps');
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__verifySubselectors__ = __webpack_require__(105);

const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref,
      options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
  }

  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(15);


function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, 'mapStateToProps');
  verify(mapDispatchToProps, 'mapDispatchToProps');
  verify(mergeProps, 'mergeProps');
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Context__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hooks_useDispatch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hooks_useSelector__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hooks_useStore__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_shallowEqual__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__(108);
/* unused harmony namespace reexport */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport ReactReduxContext */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connect__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return __WEBPACK_IMPORTED_MODULE_3__hooks_useDispatch__["a"]; });
/* unused harmony reexport createDispatchHook */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return __WEBPACK_IMPORTED_MODULE_4__hooks_useSelector__["b"]; });
/* unused harmony reexport createSelectorHook */
/* unused harmony reexport useStore */
/* unused harmony reexport createStoreHook */
/* unused harmony reexport shallowEqual */










/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createDispatchHook */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Context__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useStore__ = __webpack_require__(33);


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = __WEBPACK_IMPORTED_MODULE_0__components_Context__["a" /* ReactReduxContext */]) {
  const useStore = // @ts-ignore
  context === __WEBPACK_IMPORTED_MODULE_0__components_Context__["a" /* ReactReduxContext */] ? __WEBPACK_IMPORTED_MODULE_1__useStore__["a" /* useStore */] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__useStore__["b" /* createStoreHook */])(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();
/* harmony export (immutable) */ __webpack_exports__["a"] = useDispatch;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPlainObject;
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  let baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_react_dom__, "unstable_batchedUpdates")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_dom__["unstable_batchedUpdates"]; });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(112);
} else {
  module.exports = require('./cjs/react-is.development.js');
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __DO_NOT_USE__ActionTypes */
/* unused harmony export applyMiddleware */
/* unused harmony export bindActionCreators */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combineReducers; });
/* unused harmony export compose */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createStore; });
/* unused harmony export legacy_createStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__ = __webpack_require__(49);


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectSpread2__["a" /* default */])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119).setImmediate))

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(116);
} else {
  module.exports = require('./cjs/scheduler.development.js');
}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(92)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(118);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/american_express.36e82cfe.jpg";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cb.14784cb4.jpg";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/master.a47f017d.jpg";

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/visa.f564cfed.jpg";

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAxLTI4VDE2OjI0OjI1KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMS0yOFQxOToxMDo1NiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMS0yOFQxOToxMDo1NiswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiYzQ2ZDBlNy01YzMzLWY5NGMtYWE2OS0yMDZlMGIyOTZjMTciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxN2JmZDgyYi1mMWRjLTAzNDItYmUxNy0xZTVmMjA3ZTFhY2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjQ3Zjk4OS03NTk3LWRmNDYtYWMxMi1mZDZiN2RhODI1YTUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmNDdmOTg5LTc1OTctZGY0Ni1hYzEyLWZkNmI3ZGE4MjVhNSIgc3RFdnQ6d2hlbj0iMjAyMy0wMS0yOFQxNjoyNDoyNSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYzQ2ZDBlNy01YzMzLWY5NGMtYWE2OS0yMDZlMGIyOTZjMTciIHN0RXZ0OndoZW49IjIwMjMtMDEtMjhUMTk6MTA6NTYrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6aSM1MAAAAiklEQVRIie3RSw7AIAgE0HL/Q9vPwrSUz4CtiQmsZd6o1FrbZg8VWuj6KBH9ZZzAFd4tht6v/UWLR56ESu88Ar/yDosQNAuLWRKqHg7Caob2p6OwuWuhWdjd8dAoDJ1FUDQMLoeiXmjoGyKoBcNgBkVhu3kC9WC/dRLVYKzxAMphvC1HZ06hha6L7o9am8fpBKGnAAAAAElFTkSuQmCC"

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/chateau_f3.651d045e.png";

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/canal.4ae686ac.jpg";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/entree_chateau.1a642d95.jpg";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ext_1.3dfe694b.jpg";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ext_3.d8a4dcf9.jpg";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jardin_diane.d3761f08.jpg";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/parterre.9cd94a37.jpg";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/porte_doree.d76aa557.jpg";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/int_napoleon.5ba93eba.jpg";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/int_napoleon_2.64939538.jpg";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/int_pape.46f34dfd.jpg";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ext.c4cd5e51.jpg";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/napoleon.837ee0ee.jpg";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/porteBois.f5e8d77f.jpg";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(0);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(0),n=__webpack_require__(42);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(143);
} else {
  module.exports = require('../cjs/use-sync-external-store-shim/with-selector.development.js');
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["a"] = (md5);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ __webpack_exports__["a"] = ({
  randomUUID
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ('00000000-0000-0000-0000-000000000000');

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["a"] = (sha1);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rng_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringify_js__ = __webpack_require__(7);

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_0__rng_js__["a" /* default */])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stringify_js__["a" /* unsafeStringify */])(b);
}

/* unused harmony default export */ var _unused_webpack_default_export = (v1);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md5_js__ = __webpack_require__(145);


const v3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */])('v3', 0x30, __WEBPACK_IMPORTED_MODULE_1__md5_js__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (v3);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__native_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rng_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stringify_js__ = __webpack_require__(7);




function v4(options, buf, offset) {
  if (__WEBPACK_IMPORTED_MODULE_0__native_js__["a" /* default */].randomUUID && !buf && !options) {
    return __WEBPACK_IMPORTED_MODULE_0__native_js__["a" /* default */].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || __WEBPACK_IMPORTED_MODULE_1__rng_js__["a" /* default */])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__stringify_js__["a" /* unsafeStringify */])(rnds);
}

/* harmony default export */ __webpack_exports__["a"] = (v4);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__v35_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sha1_js__ = __webpack_require__(149);


const v5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__v35_js__["a" /* default */])('v5', 0x50, __WEBPACK_IMPORTED_MODULE_1__sha1_js__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (v5);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_js__ = __webpack_require__(8);


function version(uuid) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__validate_js__["a" /* default */])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

/* unused harmony default export */ var _unused_webpack_default_export = (version);

/***/ }),
/* 155 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
module.exports = __webpack_require__(46);


/***/ })
/******/ ]);
//# sourceMappingURL=main.6da6fa44.js.map