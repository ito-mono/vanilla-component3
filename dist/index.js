function un(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xr = { exports: {} }, tr = {}, Qr = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function sn() {
  if (Ct)
    return O;
  Ct = 1;
  var n = Symbol.for("react.element"), i = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), R = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), q = Symbol.iterator;
  function Z(a) {
    return a === null || typeof a != "object" ? null : (a = q && a[q] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, he = Object.assign, ze = {};
  function le(a, f, C) {
    this.props = a, this.context = f, this.refs = ze, this.updater = C || oe;
  }
  le.prototype.isReactComponent = {}, le.prototype.setState = function(a, f) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, f, "setState");
  }, le.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function fe() {
  }
  fe.prototype = le.prototype;
  function K(a, f, C) {
    this.props = a, this.context = f, this.refs = ze, this.updater = C || oe;
  }
  var Ee = K.prototype = new fe();
  Ee.constructor = K, he(Ee, le.prototype), Ee.isPureReactComponent = !0;
  var de = Array.isArray, X = Object.prototype.hasOwnProperty, ae = { current: null }, ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function be(a, f, C) {
    var A, S = {}, U = null, V = null;
    if (f != null)
      for (A in f.ref !== void 0 && (V = f.ref), f.key !== void 0 && (U = "" + f.key), f)
        X.call(f, A) && !ye.hasOwnProperty(A) && (S[A] = f[A]);
    var F = arguments.length - 2;
    if (F === 1)
      S.children = C;
    else if (1 < F) {
      for (var I = Array(F), ee = 0; ee < F; ee++)
        I[ee] = arguments[ee + 2];
      S.children = I;
    }
    if (a && a.defaultProps)
      for (A in F = a.defaultProps, F)
        S[A] === void 0 && (S[A] = F[A]);
    return { $$typeof: n, type: a, key: U, ref: V, props: S, _owner: ae.current };
  }
  function Te(a, f) {
    return { $$typeof: n, type: a.type, key: f, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function je(a) {
    return typeof a == "object" && a !== null && a.$$typeof === n;
  }
  function Xe(a) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(C) {
      return f[C];
    });
  }
  var ke = /\/+/g;
  function ie(a, f) {
    return typeof a == "object" && a !== null && a.key != null ? Xe("" + a.key) : f.toString(36);
  }
  function ue(a, f, C, A, S) {
    var U = typeof a;
    (U === "undefined" || U === "boolean") && (a = null);
    var V = !1;
    if (a === null)
      V = !0;
    else
      switch (U) {
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case n:
            case i:
              V = !0;
          }
      }
    if (V)
      return V = a, S = S(V), a = A === "" ? "." + ie(V, 0) : A, de(S) ? (C = "", a != null && (C = a.replace(ke, "$&/") + "/"), ue(S, f, C, "", function(ee) {
        return ee;
      })) : S != null && (je(S) && (S = Te(S, C + (!S.key || V && V.key === S.key ? "" : ("" + S.key).replace(ke, "$&/") + "/") + a)), f.push(S)), 1;
    if (V = 0, A = A === "" ? "." : A + ":", de(a))
      for (var F = 0; F < a.length; F++) {
        U = a[F];
        var I = A + ie(U, F);
        V += ue(U, f, C, I, S);
      }
    else if (I = Z(a), typeof I == "function")
      for (a = I.call(a), F = 0; !(U = a.next()).done; )
        U = U.value, I = A + ie(U, F++), V += ue(U, f, C, I, S);
    else if (U === "object")
      throw f = String(a), Error("Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function re(a, f, C) {
    if (a == null)
      return a;
    var A = [], S = 0;
    return ue(a, A, "", "", function(U) {
      return f.call(C, U, S++);
    }), A;
  }
  function pe(a) {
    if (a._status === -1) {
      var f = a._result;
      f = f(), f.then(function(C) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = C);
      }, function(C) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = C);
      }), a._status === -1 && (a._status = 0, a._result = f);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  }
  var y = { current: null }, me = { transition: null }, xe = { ReactCurrentDispatcher: y, ReactCurrentBatchConfig: me, ReactCurrentOwner: ae };
  return O.Children = { map: re, forEach: function(a, f, C) {
    re(a, function() {
      f.apply(this, arguments);
    }, C);
  }, count: function(a) {
    var f = 0;
    return re(a, function() {
      f++;
    }), f;
  }, toArray: function(a) {
    return re(a, function(f) {
      return f;
    }) || [];
  }, only: function(a) {
    if (!je(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, O.Component = le, O.Fragment = p, O.Profiler = _, O.PureComponent = K, O.StrictMode = l, O.Suspense = k, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, O.cloneElement = function(a, f, C) {
    if (a == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var A = he({}, a.props), S = a.key, U = a.ref, V = a._owner;
    if (f != null) {
      if (f.ref !== void 0 && (U = f.ref, V = ae.current), f.key !== void 0 && (S = "" + f.key), a.type && a.type.defaultProps)
        var F = a.type.defaultProps;
      for (I in f)
        X.call(f, I) && !ye.hasOwnProperty(I) && (A[I] = f[I] === void 0 && F !== void 0 ? F[I] : f[I]);
    }
    var I = arguments.length - 2;
    if (I === 1)
      A.children = C;
    else if (1 < I) {
      F = Array(I);
      for (var ee = 0; ee < I; ee++)
        F[ee] = arguments[ee + 2];
      A.children = F;
    }
    return { $$typeof: n, type: a.type, key: S, ref: U, props: A, _owner: V };
  }, O.createContext = function(a) {
    return a = { $$typeof: R, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: g, _context: a }, a.Consumer = a;
  }, O.createElement = be, O.createFactory = function(a) {
    var f = be.bind(null, a);
    return f.type = a, f;
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(a) {
    return { $$typeof: H, render: a };
  }, O.isValidElement = je, O.lazy = function(a) {
    return { $$typeof: D, _payload: { _status: -1, _result: a }, _init: pe };
  }, O.memo = function(a, f) {
    return { $$typeof: z, type: a, compare: f === void 0 ? null : f };
  }, O.startTransition = function(a) {
    var f = me.transition;
    me.transition = {};
    try {
      a();
    } finally {
      me.transition = f;
    }
  }, O.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, O.useCallback = function(a, f) {
    return y.current.useCallback(a, f);
  }, O.useContext = function(a) {
    return y.current.useContext(a);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(a) {
    return y.current.useDeferredValue(a);
  }, O.useEffect = function(a, f) {
    return y.current.useEffect(a, f);
  }, O.useId = function() {
    return y.current.useId();
  }, O.useImperativeHandle = function(a, f, C) {
    return y.current.useImperativeHandle(a, f, C);
  }, O.useInsertionEffect = function(a, f) {
    return y.current.useInsertionEffect(a, f);
  }, O.useLayoutEffect = function(a, f) {
    return y.current.useLayoutEffect(a, f);
  }, O.useMemo = function(a, f) {
    return y.current.useMemo(a, f);
  }, O.useReducer = function(a, f, C) {
    return y.current.useReducer(a, f, C);
  }, O.useRef = function(a) {
    return y.current.useRef(a);
  }, O.useState = function(a) {
    return y.current.useState(a);
  }, O.useSyncExternalStore = function(a, f, C) {
    return y.current.useSyncExternalStore(a, f, C);
  }, O.useTransition = function() {
    return y.current.useTransition();
  }, O.version = "18.2.0", O;
}
var ar = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ar.exports;
var Pt;
function cn() {
  return Pt || (Pt = 1, function(n, i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", l = Symbol.for("react.element"), _ = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), z = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ze = Symbol.for("react.offscreen"), le = Symbol.iterator, fe = "@@iterator";
      function K(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = le && e[le] || e[fe];
        return typeof r == "function" ? r : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {
        transition: null
      }, X = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ye = {}, be = null;
      function Te(e) {
        be = e;
      }
      ye.setExtraStackFrame = function(e) {
        be = e;
      }, ye.getCurrentStack = null, ye.getStackAddendum = function() {
        var e = "";
        be && (e += be);
        var r = ye.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var je = !1, Xe = !1, ke = !1, ie = !1, ue = !1, re = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: de,
        ReactCurrentOwner: ae
      };
      re.ReactDebugCurrentFrame = ye, re.ReactCurrentActQueue = X;
      function pe(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
            o[u - 1] = arguments[u];
          me("warn", e, o);
        }
      }
      function y(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
            o[u - 1] = arguments[u];
          me("error", e, o);
        }
      }
      function me(e, r, o) {
        {
          var u = re.ReactDebugCurrentFrame, c = u.getStackAddendum();
          c !== "" && (r += "%s", o = o.concat([c]));
          var m = o.map(function(h) {
            return String(h);
          });
          m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
        }
      }
      var xe = {};
      function a(e, r) {
        {
          var o = e.constructor, u = o && (o.displayName || o.name) || "ReactClass", c = u + "." + r;
          if (xe[c])
            return;
          y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, u), xe[c] = !0;
        }
      }
      var f = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, o) {
          a(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, o, u) {
          a(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, o, u) {
          a(e, "setState");
        }
      }, C = Object.assign, A = {};
      Object.freeze(A);
      function S(e, r, o) {
        this.props = e, this.context = r, this.refs = A, this.updater = o || f;
      }
      S.prototype.isReactComponent = {}, S.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, S.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var U = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, V = function(e, r) {
          Object.defineProperty(S.prototype, e, {
            get: function() {
              pe("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var F in U)
          U.hasOwnProperty(F) && V(F, U[F]);
      }
      function I() {
      }
      I.prototype = S.prototype;
      function ee(e, r, o) {
        this.props = e, this.context = r, this.refs = A, this.updater = o || f;
      }
      var Re = ee.prototype = new I();
      Re.constructor = ee, C(Re, S.prototype), Re.isPureReactComponent = !0;
      function jr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var or = Array.isArray;
      function Ye(e) {
        return or(e);
      }
      function kr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o;
        }
      }
      function Be(e) {
        try {
          return Ae(e), !1;
        } catch {
          return !0;
        }
      }
      function Ae(e) {
        return "" + e;
      }
      function De(e) {
        if (Be(e))
          return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(e)), Ae(e);
      }
      function ur(e, r, o) {
        var u = e.displayName;
        if (u)
          return u;
        var c = r.displayName || r.name || "";
        return c !== "" ? o + "(" + c + ")" : o;
      }
      function Ie(e) {
        return e.displayName || "Context";
      }
      function ge(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case g:
            return "Fragment";
          case _:
            return "Portal";
          case H:
            return "Profiler";
          case R:
            return "StrictMode";
          case q:
            return "Suspense";
          case Z:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case z:
              var r = e;
              return Ie(r) + ".Consumer";
            case k:
              var o = e;
              return Ie(o._context) + ".Provider";
            case D:
              return ur(e, e.render, "ForwardRef");
            case oe:
              var u = e.displayName || null;
              return u !== null ? u : ge(e.type) || "Memo";
            case he: {
              var c = e, m = c._payload, h = c._init;
              try {
                return ge(h(m));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Me = Object.prototype.hasOwnProperty, Je = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, cr, We;
      We = {};
      function Qe(e) {
        if (Me.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ce(e) {
        if (Me.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function xr(e, r) {
        var o = function() {
          sr || (sr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function lr(e, r) {
        var o = function() {
          cr || (cr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
      function fr(e) {
        if (typeof e.ref == "string" && ae.current && e.__self && ae.current.stateNode !== e.__self) {
          var r = ge(ae.current.type);
          We[r] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var $e = function(e, r, o, u, c, m, h) {
        var E = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: l,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: o,
          props: h,
          // Record the component responsible for creating this element.
          _owner: m
        };
        return E._store = {}, Object.defineProperty(E._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(E, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.defineProperty(E, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
      };
      function Ar(e, r, o) {
        var u, c = {}, m = null, h = null, E = null, j = null;
        if (r != null) {
          Qe(r) && (h = r.ref, fr(r)), Ce(r) && (De(r.key), m = "" + r.key), E = r.__self === void 0 ? null : r.__self, j = r.__source === void 0 ? null : r.__source;
          for (u in r)
            Me.call(r, u) && !Je.hasOwnProperty(u) && (c[u] = r[u]);
        }
        var N = arguments.length - 2;
        if (N === 1)
          c.children = o;
        else if (N > 1) {
          for (var Y = Array(N), B = 0; B < N; B++)
            Y[B] = arguments[B + 2];
          Object.freeze && Object.freeze(Y), c.children = Y;
        }
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (u in W)
            c[u] === void 0 && (c[u] = W[u]);
        }
        if (m || h) {
          var Q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && xr(c, Q), h && lr(c, Q);
        }
        return $e(e, m, h, E, j, ae.current, c);
      }
      function Dr(e, r) {
        var o = $e(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return o;
      }
      function Ir(e, r, o) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var u, c = C({}, e.props), m = e.key, h = e.ref, E = e._self, j = e._source, N = e._owner;
        if (r != null) {
          Qe(r) && (h = r.ref, N = ae.current), Ce(r) && (De(r.key), m = "" + r.key);
          var Y;
          e.type && e.type.defaultProps && (Y = e.type.defaultProps);
          for (u in r)
            Me.call(r, u) && !Je.hasOwnProperty(u) && (r[u] === void 0 && Y !== void 0 ? c[u] = Y[u] : c[u] = r[u]);
        }
        var B = arguments.length - 2;
        if (B === 1)
          c.children = o;
        else if (B > 1) {
          for (var W = Array(B), Q = 0; Q < B; Q++)
            W[Q] = arguments[Q + 2];
          c.children = W;
        }
        return $e(e.type, m, h, E, j, N, c);
      }
      function Pe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === l;
      }
      var dr = ".", Mr = ":";
      function $r(e) {
        var r = /[=:]/g, o = {
          "=": "=0",
          ":": "=2"
        }, u = e.replace(r, function(c) {
          return o[c];
        });
        return "$" + u;
      }
      var He = !1, pr = /\/+/g;
      function _e(e) {
        return e.replace(pr, "$&/");
      }
      function Fe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (De(e.key), $r("" + e.key)) : r.toString(36);
      }
      function we(e, r, o, u, c) {
        var m = typeof e;
        (m === "undefined" || m === "boolean") && (e = null);
        var h = !1;
        if (e === null)
          h = !0;
        else
          switch (m) {
            case "string":
            case "number":
              h = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case l:
                case _:
                  h = !0;
              }
          }
        if (h) {
          var E = e, j = c(E), N = u === "" ? dr + Fe(E, 0) : u;
          if (Ye(j)) {
            var Y = "";
            N != null && (Y = _e(N) + "/"), we(j, r, Y, "", function(on) {
              return on;
            });
          } else
            j != null && (Pe(j) && (j.key && (!E || E.key !== j.key) && De(j.key), j = Dr(
              j,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              o + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (j.key && (!E || E.key !== j.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                _e("" + j.key) + "/"
              ) : "") + N
            )), r.push(j));
          return 1;
        }
        var B, W, Q = 0, ne = u === "" ? dr : u + Mr;
        if (Ye(e))
          for (var Pr = 0; Pr < e.length; Pr++)
            B = e[Pr], W = ne + Fe(B, Pr), Q += we(B, r, o, W, c);
        else {
          var Gr = K(e);
          if (typeof Gr == "function") {
            var _t = e;
            Gr === _t.entries && (He || pe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), He = !0);
            for (var nn = Gr.call(_t), Et, an = 0; !(Et = nn.next()).done; )
              B = Et.value, W = ne + Fe(B, an++), Q += we(B, r, o, W, c);
          } else if (m === "object") {
            var Rt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Rt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Rt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Q;
      }
      function Ne(e, r, o) {
        if (e == null)
          return e;
        var u = [], c = 0;
        return we(e, u, "", "", function(m) {
          return r.call(o, m, c++);
        }), u;
      }
      function Fr(e) {
        var r = 0;
        return Ne(e, function() {
          r++;
        }), r;
      }
      function vr(e, r, o) {
        Ne(e, function() {
          r.apply(this, arguments);
        }, o);
      }
      function Nr(e) {
        return Ne(e, function(r) {
          return r;
        }) || [];
      }
      function hr(e) {
        if (!Pe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function yr(e) {
        var r = {
          $$typeof: z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: k,
          _context: r
        };
        var o = !1, u = !1, c = !1;
        {
          var m = {
            $$typeof: z,
            _context: r
          };
          Object.defineProperties(m, {
            Provider: {
              get: function() {
                return u || (u = !0, y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(h) {
                r.Provider = h;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(h) {
                r._currentValue = h;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(h) {
                r._currentValue2 = h;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(h) {
                r._threadCount = h;
              }
            },
            Consumer: {
              get: function() {
                return o || (o = !0, y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(h) {
                c || (pe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", h), c = !0);
              }
            }
          }), r.Consumer = m;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Le = -1, Ze = 0, er = 1, Lr = 2;
      function Ur(e) {
        if (e._status === Le) {
          var r = e._result, o = r();
          if (o.then(function(m) {
            if (e._status === Ze || e._status === Le) {
              var h = e;
              h._status = er, h._result = m;
            }
          }, function(m) {
            if (e._status === Ze || e._status === Le) {
              var h = e;
              h._status = Lr, h._result = m;
            }
          }), e._status === Le) {
            var u = e;
            u._status = Ze, u._result = o;
          }
        }
        if (e._status === er) {
          var c = e._result;
          return c === void 0 && y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Vr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Le,
          _result: e
        }, o = {
          $$typeof: he,
          _payload: r,
          _init: Ur
        };
        {
          var u, c;
          Object.defineProperties(o, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(m) {
                y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = m, Object.defineProperty(o, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(m) {
                y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = m, Object.defineProperty(o, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return o;
      }
      function zr(e) {
        e != null && e.$$typeof === oe ? y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? y("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && y("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: D,
          render: e
        };
        {
          var o;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(u) {
              o = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function s(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === g || e === H || ue || e === R || e === q || e === Z || ie || e === ze || je || Xe || ke || typeof e == "object" && e !== null && (e.$$typeof === he || e.$$typeof === oe || e.$$typeof === k || e.$$typeof === z || e.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function d(e, r) {
        s(e) || y("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var o = {
          $$typeof: oe,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var u;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return u;
            },
            set: function(c) {
              u = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return o;
      }
      function v() {
        var e = Ee.current;
        return e === null && y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function x(e) {
        var r = v();
        if (e._context !== void 0) {
          var o = e._context;
          o.Consumer === e ? y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : o.Provider === e && y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function M(e) {
        var r = v();
        return r.useState(e);
      }
      function T(e, r, o) {
        var u = v();
        return u.useReducer(e, r, o);
      }
      function w(e) {
        var r = v();
        return r.useRef(e);
      }
      function te(e, r) {
        var o = v();
        return o.useEffect(e, r);
      }
      function J(e, r) {
        var o = v();
        return o.useInsertionEffect(e, r);
      }
      function G(e, r) {
        var o = v();
        return o.useLayoutEffect(e, r);
      }
      function se(e, r) {
        var o = v();
        return o.useCallback(e, r);
      }
      function Oe(e, r) {
        var o = v();
        return o.useMemo(e, r);
      }
      function mr(e, r, o) {
        var u = v();
        return u.useImperativeHandle(e, r, o);
      }
      function ve(e, r) {
        {
          var o = v();
          return o.useDebugValue(e, r);
        }
      }
      function It() {
        var e = v();
        return e.useTransition();
      }
      function Mt(e) {
        var r = v();
        return r.useDeferredValue(e);
      }
      function $t() {
        var e = v();
        return e.useId();
      }
      function Ft(e, r, o) {
        var u = v();
        return u.useSyncExternalStore(e, r, o);
      }
      var rr = 0, et, rt, tt, nt, at, it, ot;
      function ut() {
      }
      ut.__reactDisabledLog = !0;
      function Nt() {
        {
          if (rr === 0) {
            et = console.log, rt = console.info, tt = console.warn, nt = console.error, at = console.group, it = console.groupCollapsed, ot = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ut,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          rr++;
        }
      }
      function Lt() {
        {
          if (rr--, rr === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: C({}, e, {
                value: et
              }),
              info: C({}, e, {
                value: rt
              }),
              warn: C({}, e, {
                value: tt
              }),
              error: C({}, e, {
                value: nt
              }),
              group: C({}, e, {
                value: at
              }),
              groupCollapsed: C({}, e, {
                value: it
              }),
              groupEnd: C({}, e, {
                value: ot
              })
            });
          }
          rr < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Yr = re.ReactCurrentDispatcher, Br;
      function gr(e, r, o) {
        {
          if (Br === void 0)
            try {
              throw Error();
            } catch (c) {
              var u = c.stack.trim().match(/\n( *(at )?)/);
              Br = u && u[1] || "";
            }
          return `
` + Br + e;
        }
      }
      var Jr = !1, br;
      {
        var Ut = typeof WeakMap == "function" ? WeakMap : Map;
        br = new Ut();
      }
      function st(e, r) {
        if (!e || Jr)
          return "";
        {
          var o = br.get(e);
          if (o !== void 0)
            return o;
        }
        var u;
        Jr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var m;
        m = Yr.current, Yr.current = null, Nt();
        try {
          if (r) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (ne) {
                u = ne;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (ne) {
                u = ne;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ne) {
              u = ne;
            }
            e();
          }
        } catch (ne) {
          if (ne && u && typeof ne.stack == "string") {
            for (var E = ne.stack.split(`
`), j = u.stack.split(`
`), N = E.length - 1, Y = j.length - 1; N >= 1 && Y >= 0 && E[N] !== j[Y]; )
              Y--;
            for (; N >= 1 && Y >= 0; N--, Y--)
              if (E[N] !== j[Y]) {
                if (N !== 1 || Y !== 1)
                  do
                    if (N--, Y--, Y < 0 || E[N] !== j[Y]) {
                      var B = `
` + E[N].replace(" at new ", " at ");
                      return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && br.set(e, B), B;
                    }
                  while (N >= 1 && Y >= 0);
                break;
              }
          }
        } finally {
          Jr = !1, Yr.current = m, Lt(), Error.prepareStackTrace = c;
        }
        var W = e ? e.displayName || e.name : "", Q = W ? gr(W) : "";
        return typeof e == "function" && br.set(e, Q), Q;
      }
      function Vt(e, r, o) {
        return st(e, !1);
      }
      function zt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function _r(e, r, o) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return st(e, zt(e));
        if (typeof e == "string")
          return gr(e);
        switch (e) {
          case q:
            return gr("Suspense");
          case Z:
            return gr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case D:
              return Vt(e.render);
            case oe:
              return _r(e.type, r, o);
            case he: {
              var u = e, c = u._payload, m = u._init;
              try {
                return _r(m(c), r, o);
              } catch {
              }
            }
          }
        return "";
      }
      var ct = {}, lt = re.ReactDebugCurrentFrame;
      function Er(e) {
        if (e) {
          var r = e._owner, o = _r(e.type, e._source, r ? r.type : null);
          lt.setExtraStackFrame(o);
        } else
          lt.setExtraStackFrame(null);
      }
      function Yt(e, r, o, u, c) {
        {
          var m = Function.call.bind(Me);
          for (var h in e)
            if (m(e, h)) {
              var E = void 0;
              try {
                if (typeof e[h] != "function") {
                  var j = Error((u || "React class") + ": " + o + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                E = e[h](r, h, u, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (N) {
                E = N;
              }
              E && !(E instanceof Error) && (Er(c), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", o, h, typeof E), Er(null)), E instanceof Error && !(E.message in ct) && (ct[E.message] = !0, Er(c), y("Failed %s type: %s", o, E.message), Er(null));
            }
        }
      }
      function qe(e) {
        if (e) {
          var r = e._owner, o = _r(e.type, e._source, r ? r.type : null);
          Te(o);
        } else
          Te(null);
      }
      var Wr;
      Wr = !1;
      function ft() {
        if (ae.current) {
          var e = ge(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Bt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
      function Jt(e) {
        return e != null ? Bt(e.__source) : "";
      }
      var dt = {};
      function Wt(e) {
        var r = ft();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
      function pt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var o = Wt(r);
          if (!dt[o]) {
            dt[o] = !0;
            var u = "";
            e && e._owner && e._owner !== ae.current && (u = " It was passed a child from " + ge(e._owner.type) + "."), qe(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, u), qe(null);
          }
        }
      }
      function vt(e, r) {
        if (typeof e == "object") {
          if (Ye(e))
            for (var o = 0; o < e.length; o++) {
              var u = e[o];
              Pe(u) && pt(u, r);
            }
          else if (Pe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = K(e);
            if (typeof c == "function" && c !== e.entries)
              for (var m = c.call(e), h; !(h = m.next()).done; )
                Pe(h.value) && pt(h.value, r);
          }
        }
      }
      function ht(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var o;
          if (typeof r == "function")
            o = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === oe))
            o = r.propTypes;
          else
            return;
          if (o) {
            var u = ge(r);
            Yt(o, e.props, "prop", u, e);
          } else if (r.PropTypes !== void 0 && !Wr) {
            Wr = !0;
            var c = ge(r);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ht(e) {
        {
          for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
            var u = r[o];
            if (u !== "children" && u !== "key") {
              qe(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), qe(null);
              break;
            }
          }
          e.ref !== null && (qe(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
        }
      }
      function yt(e, r, o) {
        var u = s(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = Jt(r);
          m ? c += m : c += ft();
          var h;
          e === null ? h = "null" : Ye(e) ? h = "array" : e !== void 0 && e.$$typeof === l ? (h = "<" + (ge(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, c);
        }
        var E = Ar.apply(this, arguments);
        if (E == null)
          return E;
        if (u)
          for (var j = 2; j < arguments.length; j++)
            vt(arguments[j], e);
        return e === g ? Ht(E) : ht(E), E;
      }
      var mt = !1;
      function qt(e) {
        var r = yt.bind(null, e);
        return r.type = e, mt || (mt = !0, pe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return pe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Kt(e, r, o) {
        for (var u = Ir.apply(this, arguments), c = 2; c < arguments.length; c++)
          vt(arguments[c], u.type);
        return ht(u), u;
      }
      function Gt(e, r) {
        var o = de.transition;
        de.transition = {};
        var u = de.transition;
        de.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (de.transition = o, o === null && u._updatedFibers) {
            var c = u._updatedFibers.size;
            c > 10 && pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
          }
        }
      }
      var gt = !1, Rr = null;
      function Xt(e) {
        if (Rr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), o = n && n[r];
            Rr = o.call(n, "timers").setImmediate;
          } catch {
            Rr = function(c) {
              gt === !1 && (gt = !0, typeof MessageChannel > "u" && y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var m = new MessageChannel();
              m.port1.onmessage = c, m.port2.postMessage(void 0);
            };
          }
        return Rr(e);
      }
      var Ke = 0, bt = !1;
      function Qt(e) {
        {
          var r = Ke;
          Ke++, X.current === null && (X.current = []);
          var o = X.isBatchingLegacy, u;
          try {
            if (X.isBatchingLegacy = !0, u = e(), !o && X.didScheduleLegacyUpdate) {
              var c = X.current;
              c !== null && (X.didScheduleLegacyUpdate = !1, Kr(c));
            }
          } catch (W) {
            throw Cr(r), W;
          } finally {
            X.isBatchingLegacy = o;
          }
          if (u !== null && typeof u == "object" && typeof u.then == "function") {
            var m = u, h = !1, E = {
              then: function(W, Q) {
                h = !0, m.then(function(ne) {
                  Cr(r), Ke === 0 ? Hr(ne, W, Q) : W(ne);
                }, function(ne) {
                  Cr(r), Q(ne);
                });
              }
            };
            return !bt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              h || (bt = !0, y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), E;
          } else {
            var j = u;
            if (Cr(r), Ke === 0) {
              var N = X.current;
              N !== null && (Kr(N), X.current = null);
              var Y = {
                then: function(W, Q) {
                  X.current === null ? (X.current = [], Hr(j, W, Q)) : W(j);
                }
              };
              return Y;
            } else {
              var B = {
                then: function(W, Q) {
                  W(j);
                }
              };
              return B;
            }
          }
        }
      }
      function Cr(e) {
        e !== Ke - 1 && y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ke = e;
      }
      function Hr(e, r, o) {
        {
          var u = X.current;
          if (u !== null)
            try {
              Kr(u), Xt(function() {
                u.length === 0 ? (X.current = null, r(e)) : Hr(e, r, o);
              });
            } catch (c) {
              o(c);
            }
          else
            r(e);
        }
      }
      var qr = !1;
      function Kr(e) {
        if (!qr) {
          qr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do
                o = o(!0);
              while (o !== null);
            }
            e.length = 0;
          } catch (u) {
            throw e = e.slice(r + 1), u;
          } finally {
            qr = !1;
          }
        }
      }
      var Zt = yt, en = Kt, rn = qt, tn = {
        map: Ne,
        forEach: vr,
        count: Fr,
        toArray: Nr,
        only: hr
      };
      i.Children = tn, i.Component = S, i.Fragment = g, i.Profiler = H, i.PureComponent = ee, i.StrictMode = R, i.Suspense = q, i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, i.cloneElement = en, i.createContext = yr, i.createElement = Zt, i.createFactory = rn, i.createRef = jr, i.forwardRef = zr, i.isValidElement = Pe, i.lazy = Vr, i.memo = d, i.startTransition = Gt, i.unstable_act = Qt, i.useCallback = se, i.useContext = x, i.useDebugValue = ve, i.useDeferredValue = Mt, i.useEffect = te, i.useId = $t, i.useImperativeHandle = mr, i.useInsertionEffect = J, i.useLayoutEffect = G, i.useMemo = Oe, i.useReducer = T, i.useRef = w, i.useState = M, i.useSyncExternalStore = Ft, i.useTransition = It, i.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ar, ar.exports)), ar.exports;
}
process.env.NODE_ENV === "production" ? Qr.exports = sn() : Qr.exports = cn();
var Ge = Qr.exports;
const Ve = /* @__PURE__ */ un(Ge);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function ln() {
  if (wt)
    return tr;
  wt = 1;
  var n = Ge, i = Symbol.for("react.element"), p = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(H, k, z) {
    var D, q = {}, Z = null, oe = null;
    z !== void 0 && (Z = "" + z), k.key !== void 0 && (Z = "" + k.key), k.ref !== void 0 && (oe = k.ref);
    for (D in k)
      l.call(k, D) && !g.hasOwnProperty(D) && (q[D] = k[D]);
    if (H && H.defaultProps)
      for (D in k = H.defaultProps, k)
        q[D] === void 0 && (q[D] = k[D]);
    return { $$typeof: i, type: H, key: Z, ref: oe, props: q, _owner: _.current };
  }
  return tr.Fragment = p, tr.jsx = R, tr.jsxs = R, tr;
}
var nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function fn() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ge, i = Symbol.for("react.element"), p = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), H = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), he = Symbol.iterator, ze = "@@iterator";
    function le(t) {
      if (t === null || typeof t != "object")
        return null;
      var s = he && t[he] || t[ze];
      return typeof s == "function" ? s : null;
    }
    var fe = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(t) {
      {
        for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
          d[v - 1] = arguments[v];
        Ee("error", t, d);
      }
    }
    function Ee(t, s, d) {
      {
        var v = fe.ReactDebugCurrentFrame, x = v.getStackAddendum();
        x !== "" && (s += "%s", d = d.concat([x]));
        var M = d.map(function(T) {
          return String(T);
        });
        M.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, M);
      }
    }
    var de = !1, X = !1, ae = !1, ye = !1, be = !1, Te;
    Te = Symbol.for("react.module.reference");
    function je(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === l || t === g || be || t === _ || t === z || t === D || ye || t === oe || de || X || ae || typeof t == "object" && t !== null && (t.$$typeof === Z || t.$$typeof === q || t.$$typeof === R || t.$$typeof === H || t.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Te || t.getModuleId !== void 0));
    }
    function Xe(t, s, d) {
      var v = t.displayName;
      if (v)
        return v;
      var x = s.displayName || s.name || "";
      return x !== "" ? d + "(" + x + ")" : d;
    }
    function ke(t) {
      return t.displayName || "Context";
    }
    function ie(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case l:
          return "Fragment";
        case p:
          return "Portal";
        case g:
          return "Profiler";
        case _:
          return "StrictMode";
        case z:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case H:
            var s = t;
            return ke(s) + ".Consumer";
          case R:
            var d = t;
            return ke(d._context) + ".Provider";
          case k:
            return Xe(t, t.render, "ForwardRef");
          case q:
            var v = t.displayName || null;
            return v !== null ? v : ie(t.type) || "Memo";
          case Z: {
            var x = t, M = x._payload, T = x._init;
            try {
              return ie(T(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, re = 0, pe, y, me, xe, a, f, C;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function S() {
      {
        if (re === 0) {
          pe = console.log, y = console.info, me = console.warn, xe = console.error, a = console.group, f = console.groupCollapsed, C = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        re++;
      }
    }
    function U() {
      {
        if (re--, re === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, t, {
              value: pe
            }),
            info: ue({}, t, {
              value: y
            }),
            warn: ue({}, t, {
              value: me
            }),
            error: ue({}, t, {
              value: xe
            }),
            group: ue({}, t, {
              value: a
            }),
            groupCollapsed: ue({}, t, {
              value: f
            }),
            groupEnd: ue({}, t, {
              value: C
            })
          });
        }
        re < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = fe.ReactCurrentDispatcher, F;
    function I(t, s, d) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (x) {
            var v = x.stack.trim().match(/\n( *(at )?)/);
            F = v && v[1] || "";
          }
        return `
` + F + t;
      }
    }
    var ee = !1, Re;
    {
      var jr = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new jr();
    }
    function or(t, s) {
      if (!t || ee)
        return "";
      {
        var d = Re.get(t);
        if (d !== void 0)
          return d;
      }
      var v;
      ee = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = V.current, V.current = null, S();
      try {
        if (s) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (ve) {
              v = ve;
            }
            Reflect.construct(t, [], T);
          } else {
            try {
              T.call();
            } catch (ve) {
              v = ve;
            }
            t.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            v = ve;
          }
          t();
        }
      } catch (ve) {
        if (ve && v && typeof ve.stack == "string") {
          for (var w = ve.stack.split(`
`), te = v.stack.split(`
`), J = w.length - 1, G = te.length - 1; J >= 1 && G >= 0 && w[J] !== te[G]; )
            G--;
          for (; J >= 1 && G >= 0; J--, G--)
            if (w[J] !== te[G]) {
              if (J !== 1 || G !== 1)
                do
                  if (J--, G--, G < 0 || w[J] !== te[G]) {
                    var se = `
` + w[J].replace(" at new ", " at ");
                    return t.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", t.displayName)), typeof t == "function" && Re.set(t, se), se;
                  }
                while (J >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        ee = !1, V.current = M, U(), Error.prepareStackTrace = x;
      }
      var Oe = t ? t.displayName || t.name : "", mr = Oe ? I(Oe) : "";
      return typeof t == "function" && Re.set(t, mr), mr;
    }
    function Ye(t, s, d) {
      return or(t, !1);
    }
    function kr(t) {
      var s = t.prototype;
      return !!(s && s.isReactComponent);
    }
    function Be(t, s, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return or(t, kr(t));
      if (typeof t == "string")
        return I(t);
      switch (t) {
        case z:
          return I("Suspense");
        case D:
          return I("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case k:
            return Ye(t.render);
          case q:
            return Be(t.type, s, d);
          case Z: {
            var v = t, x = v._payload, M = v._init;
            try {
              return Be(M(x), s, d);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, De = {}, ur = fe.ReactDebugCurrentFrame;
    function Ie(t) {
      if (t) {
        var s = t._owner, d = Be(t.type, t._source, s ? s.type : null);
        ur.setExtraStackFrame(d);
      } else
        ur.setExtraStackFrame(null);
    }
    function ge(t, s, d, v, x) {
      {
        var M = Function.call.bind(Ae);
        for (var T in t)
          if (M(t, T)) {
            var w = void 0;
            try {
              if (typeof t[T] != "function") {
                var te = Error((v || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              w = t[T](s, T, v, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              w = J;
            }
            w && !(w instanceof Error) && (Ie(x), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", d, T, typeof w), Ie(null)), w instanceof Error && !(w.message in De) && (De[w.message] = !0, Ie(x), K("Failed %s type: %s", d, w.message), Ie(null));
          }
      }
    }
    var Me = Array.isArray;
    function Je(t) {
      return Me(t);
    }
    function sr(t) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, d = s && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function cr(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function Qe(t) {
      if (cr(t))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(t)), We(t);
    }
    var Ce = fe.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lr, fr, $e;
    $e = {};
    function Ar(t) {
      if (Ae.call(t, "ref")) {
        var s = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Dr(t) {
      if (Ae.call(t, "key")) {
        var s = Object.getOwnPropertyDescriptor(t, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ir(t, s) {
      if (typeof t.ref == "string" && Ce.current && s && Ce.current.stateNode !== s) {
        var d = ie(Ce.current.type);
        $e[d] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ie(Ce.current.type), t.ref), $e[d] = !0);
      }
    }
    function Pe(t, s) {
      {
        var d = function() {
          lr || (lr = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function dr(t, s) {
      {
        var d = function() {
          fr || (fr = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Mr = function(t, s, d, v, x, M, T) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: t,
        key: s,
        ref: d,
        props: T,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function $r(t, s, d, v, x) {
      {
        var M, T = {}, w = null, te = null;
        d !== void 0 && (Qe(d), w = "" + d), Dr(s) && (Qe(s.key), w = "" + s.key), Ar(s) && (te = s.ref, Ir(s, x));
        for (M in s)
          Ae.call(s, M) && !xr.hasOwnProperty(M) && (T[M] = s[M]);
        if (t && t.defaultProps) {
          var J = t.defaultProps;
          for (M in J)
            T[M] === void 0 && (T[M] = J[M]);
        }
        if (w || te) {
          var G = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          w && Pe(T, G), te && dr(T, G);
        }
        return Mr(t, w, te, x, v, Ce.current, T);
      }
    }
    var He = fe.ReactCurrentOwner, pr = fe.ReactDebugCurrentFrame;
    function _e(t) {
      if (t) {
        var s = t._owner, d = Be(t.type, t._source, s ? s.type : null);
        pr.setExtraStackFrame(d);
      } else
        pr.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function we(t) {
      return typeof t == "object" && t !== null && t.$$typeof === i;
    }
    function Ne() {
      {
        if (He.current) {
          var t = ie(He.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Fr(t) {
      {
        if (t !== void 0) {
          var s = t.fileName.replace(/^.*[\\\/]/, ""), d = t.lineNumber;
          return `

Check your code at ` + s + ":" + d + ".";
        }
        return "";
      }
    }
    var vr = {};
    function Nr(t) {
      {
        var s = Ne();
        if (!s) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (s = `

Check the top-level render call using <` + d + ">.");
        }
        return s;
      }
    }
    function hr(t, s) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = Nr(s);
        if (vr[d])
          return;
        vr[d] = !0;
        var v = "";
        t && t._owner && t._owner !== He.current && (v = " It was passed a child from " + ie(t._owner.type) + "."), _e(t), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, v), _e(null);
      }
    }
    function yr(t, s) {
      {
        if (typeof t != "object")
          return;
        if (Je(t))
          for (var d = 0; d < t.length; d++) {
            var v = t[d];
            we(v) && hr(v, s);
          }
        else if (we(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var x = le(t);
          if (typeof x == "function" && x !== t.entries)
            for (var M = x.call(t), T; !(T = M.next()).done; )
              we(T.value) && hr(T.value, s);
        }
      }
    }
    function Le(t) {
      {
        var s = t.type;
        if (s == null || typeof s == "string")
          return;
        var d;
        if (typeof s == "function")
          d = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === q))
          d = s.propTypes;
        else
          return;
        if (d) {
          var v = ie(s);
          ge(d, t.props, "prop", v, t);
        } else if (s.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var x = ie(s);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ze(t) {
      {
        for (var s = Object.keys(t.props), d = 0; d < s.length; d++) {
          var v = s[d];
          if (v !== "children" && v !== "key") {
            _e(t), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), _e(null);
            break;
          }
        }
        t.ref !== null && (_e(t), K("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function er(t, s, d, v, x, M) {
      {
        var T = je(t);
        if (!T) {
          var w = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = Fr(x);
          te ? w += te : w += Ne();
          var J;
          t === null ? J = "null" : Je(t) ? J = "array" : t !== void 0 && t.$$typeof === i ? (J = "<" + (ie(t.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : J = typeof t, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, w);
        }
        var G = $r(t, s, d, x, M);
        if (G == null)
          return G;
        if (T) {
          var se = s.children;
          if (se !== void 0)
            if (v)
              if (Je(se)) {
                for (var Oe = 0; Oe < se.length; Oe++)
                  yr(se[Oe], t);
                Object.freeze && Object.freeze(se);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(se, t);
        }
        return t === l ? Ze(G) : Le(G), G;
      }
    }
    function Lr(t, s, d) {
      return er(t, s, d, !0);
    }
    function Ur(t, s, d) {
      return er(t, s, d, !1);
    }
    var Vr = Ur, zr = Lr;
    nr.Fragment = l, nr.jsx = Vr, nr.jsxs = zr;
  }()), nr;
}
process.env.NODE_ENV === "production" ? Xr.exports = ln() : Xr.exports = fn();
var $ = Xr.exports, P = /* @__PURE__ */ ((n) => (n.Japanese = "ja", n.English = "en", n))(P || {}), b = /* @__PURE__ */ ((n) => (n[n.AddUnit = 1] = "AddUnit", n[n.ChangeApprover = 2] = "ChangeApprover", n[n.RemoveUnit = 3] = "RemoveUnit", n[n.Modify = 11] = "Modify", n[n.CancelModify = 12] = "CancelModify", n[n.SubmitModify = 13] = "SubmitModify", n[n.Petition = 14] = "Petition", n[n.CancelPetition = 21] = "CancelPetition", n[n.Approve = 31] = "Approve", n[n.Disapprove = 32] = "Disapprove", n[n.Reapplication = 41] = "Reapplication", n))(b || {}), kt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, St = Ve.createContext && /* @__PURE__ */ Ve.createContext(kt), dn = ["attr", "size", "title"];
function pn(n, i) {
  if (n == null)
    return {};
  var p = vn(n, i), l, _;
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(n);
    for (_ = 0; _ < g.length; _++)
      l = g[_], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (p[l] = n[l]);
  }
  return p;
}
function vn(n, i) {
  if (n == null)
    return {};
  var p = {}, l = Object.keys(n), _, g;
  for (g = 0; g < l.length; g++)
    _ = l[g], !(i.indexOf(_) >= 0) && (p[_] = n[_]);
  return p;
}
function Or() {
  return Or = Object.assign ? Object.assign.bind() : function(n) {
    for (var i = 1; i < arguments.length; i++) {
      var p = arguments[i];
      for (var l in p)
        Object.prototype.hasOwnProperty.call(p, l) && (n[l] = p[l]);
    }
    return n;
  }, Or.apply(this, arguments);
}
function Tt(n, i) {
  var p = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    i && (l = l.filter(function(_) {
      return Object.getOwnPropertyDescriptor(n, _).enumerable;
    })), p.push.apply(p, l);
  }
  return p;
}
function Sr(n) {
  for (var i = 1; i < arguments.length; i++) {
    var p = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Tt(Object(p), !0).forEach(function(l) {
      hn(n, l, p[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(p)) : Tt(Object(p)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(p, l));
    });
  }
  return n;
}
function hn(n, i, p) {
  return i = yn(i), i in n ? Object.defineProperty(n, i, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : n[i] = p, n;
}
function yn(n) {
  var i = mn(n, "string");
  return typeof i == "symbol" ? i : String(i);
}
function mn(n, i) {
  if (typeof n != "object" || n === null)
    return n;
  var p = n[Symbol.toPrimitive];
  if (p !== void 0) {
    var l = p.call(n, i || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(n);
}
function xt(n) {
  return n && n.map((i, p) => /* @__PURE__ */ Ve.createElement(i.tag, Sr({
    key: p
  }, i.attr), xt(i.child)));
}
function Tr(n) {
  return (i) => /* @__PURE__ */ Ve.createElement(gn, Or({
    attr: Sr({}, n.attr)
  }, i), xt(n.child));
}
function gn(n) {
  var i = (p) => {
    var {
      attr: l,
      size: _,
      title: g
    } = n, R = pn(n, dn), H = _ || p.size || "1em", k;
    return p.className && (k = p.className), n.className && (k = (k ? k + " " : "") + n.className), /* @__PURE__ */ Ve.createElement("svg", Or({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, p.attr, l, R, {
      className: k,
      style: Sr(Sr({
        color: n.color || p.color
      }, p.style), n.style),
      height: H,
      width: H,
      xmlns: "http://www.w3.org/2000/svg"
    }), g && /* @__PURE__ */ Ve.createElement("title", null, g), n.children);
  };
  return St !== void 0 ? /* @__PURE__ */ Ve.createElement(St.Consumer, null, (p) => i(p)) : i(kt);
}
function bn(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" }, child: [] }] })(n);
}
function _n(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zM19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }, child: [] }] })(n);
}
function En(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" }, child: [] }] })(n);
}
function Rn(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z" }, child: [] }] })(n);
}
var ir;
((n) => {
  function i(g, R = P.Japanese) {
    return p(g) && (R = P.Japanese), _[g][R];
  }
  n.getLabel = i;
  function p(g) {
    const R = _[g].isIcon;
    return R ?? !1;
  }
  n.isIcon = p;
  function l(g) {
    const R = _[g].needParams;
    return R ?? !1;
  }
  n.needParams = l;
  const _ = {
    [b.AddUnit]: {
      [P.Japanese]: /* @__PURE__ */ $.jsx(En, {}),
      isIcon: !0,
      needParams: !0
    },
    [b.ChangeApprover]: {
      [P.Japanese]: /* @__PURE__ */ $.jsx(_n, {}),
      isIcon: !0,
      needParams: !0
    },
    [b.RemoveUnit]: {
      [P.Japanese]: /* @__PURE__ */ $.jsx(Rn, {}),
      isIcon: !0,
      needParams: !0
    },
    [b.Modify]: {
      [P.Japanese]: "編集",
      [P.English]: "Modify"
    },
    [b.CancelModify]: {
      [P.Japanese]: "キャンセル",
      [P.English]: "Cancel"
    },
    [b.SubmitModify]: {
      [P.Japanese]: "保存",
      [P.English]: "Save"
    },
    [b.Petition]: {
      [P.Japanese]: "申請",
      [P.English]: "Petition"
    },
    [b.CancelPetition]: {
      [P.Japanese]: "申請キャンセル",
      [P.English]: "Cancel Petition"
    },
    [b.Approve]: {
      [P.Japanese]: "承認",
      [P.English]: "Approve"
    },
    [b.Disapprove]: {
      [P.Japanese]: "非承認",
      [P.English]: "Disapprove"
    },
    [b.Reapplication]: {
      [P.Japanese]: "再申請",
      [P.English]: "Reapplication"
    }
  };
})(ir || (ir = {}));
var L = /* @__PURE__ */ ((n) => (n[n.None = 0] = "None", n[n.PrePetition = 1] = "PrePetition", n[n.Petitioning = 2] = "Petitioning", n[n.Remanded = 3] = "Remanded", n[n.Approved = 4] = "Approved", n[n.CanEdit = 11] = "CanEdit", n[n.Editing = 12] = "Editing", n[n.Approving = 13] = "Approving", n))(L || {}), Zr;
((n) => {
  function i(l, _ = P.Japanese) {
    return p[l][_];
  }
  n.getLabel = i;
  const p = {
    // 基本のステータス
    [L.None]: {
      [P.Japanese]: "申請情報なし",
      [P.English]: "None"
    },
    [L.PrePetition]: {
      [P.Japanese]: "申請前",
      [P.English]: "Pre Petition"
    },
    [L.Petitioning]: {
      [P.Japanese]: "申請中",
      [P.English]: "Petitioning"
    },
    [L.Remanded]: {
      [P.Japanese]: "差戻し中",
      [P.English]: "Remanded"
    },
    [L.Approved]: {
      [P.Japanese]: "承認完了",
      [P.English]: "Approved"
    },
    // 申請前 から遷移するステータス
    [L.CanEdit]: {
      [P.Japanese]: "編集可能",
      [P.English]: "Can Edit"
    },
    [L.Editing]: {
      [P.Japanese]: "編集中",
      [P.English]: "Editing"
    },
    [L.Approving]: {
      [P.Japanese]: "承認中",
      [P.English]: "Approving"
    }
  };
})(Zr || (Zr = {}));
function At(n) {
  var i, p, l = "";
  if (typeof n == "string" || typeof n == "number")
    l += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var _ = n.length;
      for (i = 0; i < _; i++)
        n[i] && (p = At(n[i])) && (l && (l += " "), l += p);
    } else
      for (p in n)
        n[p] && (l && (l += " "), l += p);
  return l;
}
function Dt() {
  for (var n, i, p = 0, l = "", _ = arguments.length; p < _; p++)
    (n = arguments[p]) && (i = At(n)) && (l && (l += " "), l += i);
  return l;
}
var ce = { labelButton: "_13s4fcp7 _13s4fcp6", iconButton: "_13s4fcp8 _13s4fcp6", themes: { icon: "_13s4fcp9", normal: "_13s4fcpa", safe: "_13s4fcpb", warn: "_13s4fcpc", danger: "_13s4fcpd" } };
function wr({
  actionCode: n,
  lang: i,
  onAction: p = () => {
  },
  params: l
}) {
  const _ = ir.isIcon(n), g = ir.getLabel(n, i), R = _ ? ce.iconButton : ce.labelButton, H = Cn(n);
  return /* @__PURE__ */ $.jsx("button", { className: Dt(R, H), onClick: k, children: g });
  function k() {
    ir.needParams(n) && !l || p(n, l);
  }
}
function Cn(n) {
  let i = "";
  switch (n) {
    case b.AddUnit:
      i = ce.themes.icon;
      break;
    case b.ChangeApprover:
      i = ce.themes.icon;
      break;
    case b.RemoveUnit:
      i = ce.themes.icon;
      break;
    case b.Modify:
      i = ce.themes.normal;
      break;
    case b.CancelModify:
      i = ce.themes.danger;
      break;
    case b.SubmitModify:
      i = ce.themes.safe;
      break;
    case b.Petition:
      i = ce.themes.warn;
      break;
    case b.CancelPetition:
      i = ce.themes.danger;
      break;
    case b.Approve:
      i = ce.themes.safe;
      break;
    case b.Disapprove:
      i = ce.themes.danger;
      break;
    case b.Reapplication:
      i = ce.themes.danger;
      break;
  }
  return i;
}
var Se = { label: "_1d9ak1h2", themes: { pending: "_1d9ak1h3", success: "_1d9ak1h4", warn: "_1d9ak1h5", danger: "_1d9ak1h6", action: "_1d9ak1h7" } };
function Pn({
  statusCode: n,
  lang: i
}) {
  const p = Zr.getLabel(n, i) + n.toString(), l = wn(n);
  return /* @__PURE__ */ $.jsx(
    "p",
    {
      "data-testid": "workflowStatusLabel",
      className: Dt(Se.label, l),
      children: p
    }
  );
}
function wn(n) {
  let i = "";
  switch (n) {
    case L.None:
    case L.PrePetition:
      i = Se.themes.pending;
      break;
    case L.Petitioning:
      i = Se.themes.danger;
      break;
    case L.Remanded:
      i = Se.themes.danger;
      break;
    case L.Approved:
      i = Se.themes.success;
      break;
    case L.CanEdit:
      i = Se.themes.pending;
      break;
    case L.Editing:
      i = Se.themes.pending;
      break;
    case L.Approving:
      i = Se.themes.action;
      break;
  }
  return i;
}
var On = { container: "_11kmar60" };
function Sn({
  statusCode: n,
  lang: i = P.Japanese,
  onAction: p = () => {
  }
}) {
  const l = _(n);
  return /* @__PURE__ */ $.jsx("div", {
    className: On.container,
    /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
    children: l.map((g, R) => /* @__PURE__ */ Ge.createElement(wr, { ...g, lang: i, onAction: p, key: R }))
  });
  function _(g) {
    let R = [];
    switch (g) {
      case L.None:
      case L.PrePetition:
        R = [];
        break;
      case L.Petitioning:
        R = [{ actionCode: b.CancelPetition, lang: i }];
        break;
      case L.Remanded:
        R = [
          { actionCode: b.Modify, lang: i },
          { actionCode: b.Petition, lang: i }
        ];
        break;
      case L.Approved:
        R = [];
        break;
      case L.CanEdit:
        R = [
          { actionCode: b.Modify, lang: i },
          { actionCode: b.Petition, lang: i }
        ];
        break;
      case L.Editing:
        R = [
          { actionCode: b.SubmitModify, lang: i },
          { actionCode: b.CancelModify, lang: i }
        ];
        break;
      case L.Approving:
        R = [
          { actionCode: b.Approve, lang: i },
          { actionCode: b.Disapprove, lang: i }
        ];
        break;
    }
    return R;
  }
}
var Ue = { frame: "exv2aw0", wrapper: "exv2aw1", titleContainer: "exv2aw2", title: "exv2aw3", employeeInfoContainer: "exv2aw4", buttonContainer: "exv2aw5", error: "exv2aw6" };
function Tn(n) {
  const { index: i, title: p, employeeInfo: l, sendEmail: _, lang: g, onAction: R = () => {
  } } = n;
  return /* @__PURE__ */ $.jsx("div", { className: Ue.frame, children: /* @__PURE__ */ $.jsxs("div", { className: Ue.wrapper, children: [
    /* @__PURE__ */ $.jsxs("div", { className: Ue.titleContainer, children: [
      /* @__PURE__ */ $.jsx("p", { className: Ue.title, children: p }),
      /* @__PURE__ */ $.jsx("i", { children: _ && /* @__PURE__ */ $.jsx(bn, {}) })
    ] }),
    /* @__PURE__ */ $.jsx("div", {
      className: Ue.employeeInfoContainer,
      /* 従業員情報の有無で表示を変える */
      children: l == null ? /* @__PURE__ */ $.jsx("p", { className: Ue.error, children: "承認社未設定" }) : /* @__PURE__ */ $.jsxs($.Fragment, { children: [
        /* @__PURE__ */ $.jsx("p", { children: l == null ? void 0 : l.id }),
        /* @__PURE__ */ $.jsx("p", { children: l == null ? void 0 : l.name })
      ] })
    }),
    /* @__PURE__ */ $.jsxs("div", { className: Ue.buttonContainer, children: [
      /* @__PURE__ */ $.jsx(
        wr,
        {
          actionCode: b.AddUnit,
          lang: g,
          onAction: R,
          params: i
        }
      ),
      /* @__PURE__ */ $.jsx(
        wr,
        {
          actionCode: b.ChangeApprover,
          lang: g,
          onAction: R,
          params: i
        }
      ),
      /* @__PURE__ */ $.jsx(
        wr,
        {
          actionCode: b.RemoveUnit,
          lang: g,
          onAction: R,
          params: i
        }
      )
    ] })
  ] }) });
}
var jn = { container: "_1tvgepq0" };
function kn({ units: n, onAction: i }) {
  return /* @__PURE__ */ $.jsx("div", {
    className: jn.container,
    /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
    children: n.map((p, l) => /* @__PURE__ */ $.jsx(Tn, { ...p, index: l, onAction: i, key: l }))
  });
}
var jt = { container: "_1j3i0us0", sideContainer: "_1j3i0us1" };
function xn({
  props: { units: n, setUnits: i, statusCode: p, setStatusCode: l, lang: _ }
}) {
  return /* @__PURE__ */ $.jsxs("div", { className: jt.container, children: [
    /* @__PURE__ */ $.jsx(kn, { units: n, onAction: g }),
    /* @__PURE__ */ $.jsxs("div", { className: jt.sideContainer, children: [
      /* @__PURE__ */ $.jsx(Pn, { statusCode: p, lang: _ }),
      /* @__PURE__ */ $.jsx(Sn, { statusCode: p, lang: _, onAction: g })
    ] })
  ] });
  function g(z, D) {
    switch (z) {
      case b.AddUnit:
        R(D);
        break;
      case b.ChangeApprover:
        break;
      case b.RemoveUnit:
        H(D);
        break;
      case b.Modify:
      case b.SubmitModify:
      case b.CancelModify:
        k(z);
        break;
      default:
        alert(`Call API ${b[z]}`);
        break;
    }
  }
  function R(z) {
    i((D) => {
      console.log(D);
      const q = z + 1, Z = [...D];
      return Z.splice(q, 0, {
        index: q,
        title: "承認者",
        sendEmail: !1,
        lang: P.Japanese,
        onAction: g
      }), Z;
    });
  }
  function H(z) {
    i((D) => {
      const q = z, Z = [...D];
      return Z.splice(q, 1), Z;
    });
  }
  function k(z) {
    switch (z) {
      case b.Modify:
        l(L.Editing);
        break;
      case b.SubmitModify:
      case b.CancelModify:
        l(L.CanEdit);
        break;
      default:
        return !1;
    }
    return !0;
  }
}
function An({
  lang: n = P.Japanese,
  ...i
}) {
  const p = i.units.map(
    (H, k) => ({
      ...H,
      index: k,
      lang: n
    })
  ), [l, _] = Ge.useState(p), [g, R] = Ge.useState(i.statusCode);
  return {
    units: l,
    setUnits: _,
    initialStatusCode: i.statusCode,
    statusCode: g,
    setStatusCode: R,
    lang: n
  };
}
export {
  xn as WorkflowContainer,
  An as useWorkFlow
};
