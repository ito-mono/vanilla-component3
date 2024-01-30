function cn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xr = { exports: {} }, rr = {}, Pr = { exports: {} }, O = {};
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
function ln() {
  if (Ct)
    return O;
  Ct = 1;
  var n = Symbol.for("react.element"), o = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), C = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), H = Symbol.iterator;
  function Z(a) {
    return a === null || typeof a != "object" ? null : (a = H && a[H] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, he = Object.assign, ze = {};
  function le(a, l, E) {
    this.props = a, this.context = l, this.refs = ze, this.updater = E || oe;
  }
  le.prototype.isReactComponent = {}, le.prototype.setState = function(a, l) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, l, "setState");
  }, le.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function fe() {
  }
  fe.prototype = le.prototype;
  function q(a, l, E) {
    this.props = a, this.context = l, this.refs = ze, this.updater = E || oe;
  }
  var Ee = q.prototype = new fe();
  Ee.constructor = q, he(Ee, le.prototype), Ee.isPureReactComponent = !0;
  var de = Array.isArray, X = Object.prototype.hasOwnProperty, ae = { current: null }, ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function be(a, l, E) {
    var x, S = {}, U = null, V = null;
    if (l != null)
      for (x in l.ref !== void 0 && (V = l.ref), l.key !== void 0 && (U = "" + l.key), l)
        X.call(l, x) && !ye.hasOwnProperty(x) && (S[x] = l[x]);
    var F = arguments.length - 2;
    if (F === 1)
      S.children = E;
    else if (1 < F) {
      for (var I = Array(F), ee = 0; ee < F; ee++)
        I[ee] = arguments[ee + 2];
      S.children = I;
    }
    if (a && a.defaultProps)
      for (x in F = a.defaultProps, F)
        S[x] === void 0 && (S[x] = F[x]);
    return { $$typeof: n, type: a, key: U, ref: V, props: S, _owner: ae.current };
  }
  function Te(a, l) {
    return { $$typeof: n, type: a.type, key: l, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function je(a) {
    return typeof a == "object" && a !== null && a.$$typeof === n;
  }
  function Ge(a) {
    var l = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(E) {
      return l[E];
    });
  }
  var ke = /\/+/g;
  function ie(a, l) {
    return typeof a == "object" && a !== null && a.key != null ? Ge("" + a.key) : l.toString(36);
  }
  function ue(a, l, E, x, S) {
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
            case o:
              V = !0;
          }
      }
    if (V)
      return V = a, S = S(V), a = x === "" ? "." + ie(V, 0) : x, de(S) ? (E = "", a != null && (E = a.replace(ke, "$&/") + "/"), ue(S, l, E, "", function(ee) {
        return ee;
      })) : S != null && (je(S) && (S = Te(S, E + (!S.key || V && V.key === S.key ? "" : ("" + S.key).replace(ke, "$&/") + "/") + a)), l.push(S)), 1;
    if (V = 0, x = x === "" ? "." : x + ":", de(a))
      for (var F = 0; F < a.length; F++) {
        U = a[F];
        var I = x + ie(U, F);
        V += ue(U, l, E, I, S);
      }
    else if (I = Z(a), typeof I == "function")
      for (a = I.call(a), F = 0; !(U = a.next()).done; )
        U = U.value, I = x + ie(U, F++), V += ue(U, l, E, I, S);
    else if (U === "object")
      throw l = String(a), Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function re(a, l, E) {
    if (a == null)
      return a;
    var x = [], S = 0;
    return ue(a, x, "", "", function(U) {
      return l.call(E, U, S++);
    }), x;
  }
  function pe(a) {
    if (a._status === -1) {
      var l = a._result;
      l = l(), l.then(function(E) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = E);
      }, function(E) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = E);
      }), a._status === -1 && (a._status = 0, a._result = l);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  }
  var y = { current: null }, me = { transition: null }, xe = { ReactCurrentDispatcher: y, ReactCurrentBatchConfig: me, ReactCurrentOwner: ae };
  return O.Children = { map: re, forEach: function(a, l, E) {
    re(a, function() {
      l.apply(this, arguments);
    }, E);
  }, count: function(a) {
    var l = 0;
    return re(a, function() {
      l++;
    }), l;
  }, toArray: function(a) {
    return re(a, function(l) {
      return l;
    }) || [];
  }, only: function(a) {
    if (!je(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, O.Component = le, O.Fragment = p, O.Profiler = R, O.PureComponent = q, O.StrictMode = f, O.Suspense = A, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe, O.cloneElement = function(a, l, E) {
    if (a == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var x = he({}, a.props), S = a.key, U = a.ref, V = a._owner;
    if (l != null) {
      if (l.ref !== void 0 && (U = l.ref, V = ae.current), l.key !== void 0 && (S = "" + l.key), a.type && a.type.defaultProps)
        var F = a.type.defaultProps;
      for (I in l)
        X.call(l, I) && !ye.hasOwnProperty(I) && (x[I] = l[I] === void 0 && F !== void 0 ? F[I] : l[I]);
    }
    var I = arguments.length - 2;
    if (I === 1)
      x.children = E;
    else if (1 < I) {
      F = Array(I);
      for (var ee = 0; ee < I; ee++)
        F[ee] = arguments[ee + 2];
      x.children = F;
    }
    return { $$typeof: n, type: a.type, key: S, ref: U, props: x, _owner: V };
  }, O.createContext = function(a) {
    return a = { $$typeof: C, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: _, _context: a }, a.Consumer = a;
  }, O.createElement = be, O.createFactory = function(a) {
    var l = be.bind(null, a);
    return l.type = a, l;
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(a) {
    return { $$typeof: G, render: a };
  }, O.isValidElement = je, O.lazy = function(a) {
    return { $$typeof: D, _payload: { _status: -1, _result: a }, _init: pe };
  }, O.memo = function(a, l) {
    return { $$typeof: z, type: a, compare: l === void 0 ? null : l };
  }, O.startTransition = function(a) {
    var l = me.transition;
    me.transition = {};
    try {
      a();
    } finally {
      me.transition = l;
    }
  }, O.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, O.useCallback = function(a, l) {
    return y.current.useCallback(a, l);
  }, O.useContext = function(a) {
    return y.current.useContext(a);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(a) {
    return y.current.useDeferredValue(a);
  }, O.useEffect = function(a, l) {
    return y.current.useEffect(a, l);
  }, O.useId = function() {
    return y.current.useId();
  }, O.useImperativeHandle = function(a, l, E) {
    return y.current.useImperativeHandle(a, l, E);
  }, O.useInsertionEffect = function(a, l) {
    return y.current.useInsertionEffect(a, l);
  }, O.useLayoutEffect = function(a, l) {
    return y.current.useLayoutEffect(a, l);
  }, O.useMemo = function(a, l) {
    return y.current.useMemo(a, l);
  }, O.useReducer = function(a, l, E) {
    return y.current.useReducer(a, l, E);
  }, O.useRef = function(a) {
    return y.current.useRef(a);
  }, O.useState = function(a) {
    return y.current.useState(a);
  }, O.useSyncExternalStore = function(a, l, E) {
    return y.current.useSyncExternalStore(a, l, E);
  }, O.useTransition = function() {
    return y.current.useTransition();
  }, O.version = "18.2.0", O;
}
var nr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
nr.exports;
var Pt;
function fn() {
  return Pt || (Pt = 1, function(n, o) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", f = Symbol.for("react.element"), R = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), z = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ze = Symbol.for("react.offscreen"), le = Symbol.iterator, fe = "@@iterator";
      function q(e) {
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
      var je = !1, Ge = !1, ke = !1, ie = !1, ue = !1, re = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: de,
        ReactCurrentOwner: ae
      };
      re.ReactDebugCurrentFrame = ye, re.ReactCurrentActQueue = X;
      function pe(e) {
        {
          for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
            i[u - 1] = arguments[u];
          me("warn", e, i);
        }
      }
      function y(e) {
        {
          for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
            i[u - 1] = arguments[u];
          me("error", e, i);
        }
      }
      function me(e, r, i) {
        {
          var u = re.ReactDebugCurrentFrame, c = u.getStackAddendum();
          c !== "" && (r += "%s", i = i.concat([c]));
          var m = i.map(function(h) {
            return String(h);
          });
          m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
        }
      }
      var xe = {};
      function a(e, r) {
        {
          var i = e.constructor, u = i && (i.displayName || i.name) || "ReactClass", c = u + "." + r;
          if (xe[c])
            return;
          y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, u), xe[c] = !0;
        }
      }
      var l = {
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
        enqueueForceUpdate: function(e, r, i) {
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
        enqueueReplaceState: function(e, r, i, u) {
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
        enqueueSetState: function(e, r, i, u) {
          a(e, "setState");
        }
      }, E = Object.assign, x = {};
      Object.freeze(x);
      function S(e, r, i) {
        this.props = e, this.context = r, this.refs = x, this.updater = i || l;
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
      function ee(e, r, i) {
        this.props = e, this.context = r, this.refs = x, this.updater = i || l;
      }
      var Re = ee.prototype = new I();
      Re.constructor = ee, E(Re, S.prototype), Re.isPureReactComponent = !0;
      function jr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var ir = Array.isArray;
      function Ye(e) {
        return ir(e);
      }
      function kr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return i;
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
      function or(e, r, i) {
        var u = e.displayName;
        if (u)
          return u;
        var c = r.displayName || r.name || "";
        return c !== "" ? i + "(" + c + ")" : i;
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
          case _:
            return "Fragment";
          case R:
            return "Portal";
          case G:
            return "Profiler";
          case C:
            return "StrictMode";
          case H:
            return "Suspense";
          case Z:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case z:
              var r = e;
              return Ie(r) + ".Consumer";
            case A:
              var i = e;
              return Ie(i._context) + ".Provider";
            case D:
              return or(e, e.render, "ForwardRef");
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
      }, ur, sr, We;
      We = {};
      function Xe(e) {
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
        var i = function() {
          ur || (ur = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
      function cr(e, r) {
        var i = function() {
          sr || (sr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
      function lr(e) {
        if (typeof e.ref == "string" && ae.current && e.__self && ae.current.stateNode !== e.__self) {
          var r = ge(ae.current.type);
          We[r] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var $e = function(e, r, i, u, c, m, h) {
        var b = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: f,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: i,
          props: h,
          // Record the component responsible for creating this element.
          _owner: m
        };
        return b._store = {}, Object.defineProperty(b._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(b, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.defineProperty(b, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
      };
      function Ar(e, r, i) {
        var u, c = {}, m = null, h = null, b = null, j = null;
        if (r != null) {
          Xe(r) && (h = r.ref, lr(r)), Ce(r) && (De(r.key), m = "" + r.key), b = r.__self === void 0 ? null : r.__self, j = r.__source === void 0 ? null : r.__source;
          for (u in r)
            Me.call(r, u) && !Je.hasOwnProperty(u) && (c[u] = r[u]);
        }
        var N = arguments.length - 2;
        if (N === 1)
          c.children = i;
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
          m && xr(c, Q), h && cr(c, Q);
        }
        return $e(e, m, h, b, j, ae.current, c);
      }
      function Dr(e, r) {
        var i = $e(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return i;
      }
      function Ir(e, r, i) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var u, c = E({}, e.props), m = e.key, h = e.ref, b = e._self, j = e._source, N = e._owner;
        if (r != null) {
          Xe(r) && (h = r.ref, N = ae.current), Ce(r) && (De(r.key), m = "" + r.key);
          var Y;
          e.type && e.type.defaultProps && (Y = e.type.defaultProps);
          for (u in r)
            Me.call(r, u) && !Je.hasOwnProperty(u) && (r[u] === void 0 && Y !== void 0 ? c[u] = Y[u] : c[u] = r[u]);
        }
        var B = arguments.length - 2;
        if (B === 1)
          c.children = i;
        else if (B > 1) {
          for (var W = Array(B), Q = 0; Q < B; Q++)
            W[Q] = arguments[Q + 2];
          c.children = W;
        }
        return $e(e.type, m, h, b, j, N, c);
      }
      function Pe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === f;
      }
      var fr = ".", Mr = ":";
      function $r(e) {
        var r = /[=:]/g, i = {
          "=": "=0",
          ":": "=2"
        }, u = e.replace(r, function(c) {
          return i[c];
        });
        return "$" + u;
      }
      var He = !1, dr = /\/+/g;
      function _e(e) {
        return e.replace(dr, "$&/");
      }
      function Fe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (De(e.key), $r("" + e.key)) : r.toString(36);
      }
      function we(e, r, i, u, c) {
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
                case f:
                case R:
                  h = !0;
              }
          }
        if (h) {
          var b = e, j = c(b), N = u === "" ? fr + Fe(b, 0) : u;
          if (Ye(j)) {
            var Y = "";
            N != null && (Y = _e(N) + "/"), we(j, r, Y, "", function(sn) {
              return sn;
            });
          } else
            j != null && (Pe(j) && (j.key && (!b || b.key !== j.key) && De(j.key), j = Dr(
              j,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              i + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (j.key && (!b || b.key !== j.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                _e("" + j.key) + "/"
              ) : "") + N
            )), r.push(j));
          return 1;
        }
        var B, W, Q = 0, ne = u === "" ? fr : u + Mr;
        if (Ye(e))
          for (var Cr = 0; Cr < e.length; Cr++)
            B = e[Cr], W = ne + Fe(B, Cr), Q += we(B, r, i, W, c);
        else {
          var Gr = q(e);
          if (typeof Gr == "function") {
            var _t = e;
            Gr === _t.entries && (He || pe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), He = !0);
            for (var on = Gr.call(_t), Et, un = 0; !(Et = on.next()).done; )
              B = Et.value, W = ne + Fe(B, un++), Q += we(B, r, i, W, c);
          } else if (m === "object") {
            var Rt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Rt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Rt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Q;
      }
      function Ne(e, r, i) {
        if (e == null)
          return e;
        var u = [], c = 0;
        return we(e, u, "", "", function(m) {
          return r.call(i, m, c++);
        }), u;
      }
      function Fr(e) {
        var r = 0;
        return Ne(e, function() {
          r++;
        }), r;
      }
      function pr(e, r, i) {
        Ne(e, function() {
          r.apply(this, arguments);
        }, i);
      }
      function Nr(e) {
        return Ne(e, function(r) {
          return r;
        }) || [];
      }
      function vr(e) {
        if (!Pe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function hr(e) {
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
          $$typeof: A,
          _context: r
        };
        var i = !1, u = !1, c = !1;
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
                return i || (i = !0, y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
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
      var Le = -1, Qe = 0, Ze = 1, Lr = 2;
      function Ur(e) {
        if (e._status === Le) {
          var r = e._result, i = r();
          if (i.then(function(m) {
            if (e._status === Qe || e._status === Le) {
              var h = e;
              h._status = Ze, h._result = m;
            }
          }, function(m) {
            if (e._status === Qe || e._status === Le) {
              var h = e;
              h._status = Lr, h._result = m;
            }
          }), e._status === Le) {
            var u = e;
            u._status = Qe, u._result = i;
          }
        }
        if (e._status === Ze) {
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
        }, i = {
          $$typeof: he,
          _payload: r,
          _init: Ur
        };
        {
          var u, c;
          Object.defineProperties(i, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(m) {
                y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = m, Object.defineProperty(i, "defaultProps", {
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
                y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = m, Object.defineProperty(i, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return i;
      }
      function zr(e) {
        e != null && e.$$typeof === oe ? y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? y("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && y("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: D,
          render: e
        };
        {
          var i;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(u) {
              i = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function s(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === _ || e === G || ue || e === C || e === H || e === Z || ie || e === ze || je || Ge || ke || typeof e == "object" && e !== null && (e.$$typeof === he || e.$$typeof === oe || e.$$typeof === A || e.$$typeof === z || e.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function d(e, r) {
        s(e) || y("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var i = {
          $$typeof: oe,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var u;
          Object.defineProperty(i, "displayName", {
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
        return i;
      }
      function v() {
        var e = Ee.current;
        return e === null && y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function k(e) {
        var r = v();
        if (e._context !== void 0) {
          var i = e._context;
          i.Consumer === e ? y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : i.Provider === e && y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function M(e) {
        var r = v();
        return r.useState(e);
      }
      function T(e, r, i) {
        var u = v();
        return u.useReducer(e, r, i);
      }
      function w(e) {
        var r = v();
        return r.useRef(e);
      }
      function te(e, r) {
        var i = v();
        return i.useEffect(e, r);
      }
      function J(e, r) {
        var i = v();
        return i.useInsertionEffect(e, r);
      }
      function K(e, r) {
        var i = v();
        return i.useLayoutEffect(e, r);
      }
      function se(e, r) {
        var i = v();
        return i.useCallback(e, r);
      }
      function Oe(e, r) {
        var i = v();
        return i.useMemo(e, r);
      }
      function yr(e, r, i) {
        var u = v();
        return u.useImperativeHandle(e, r, i);
      }
      function ve(e, r) {
        {
          var i = v();
          return i.useDebugValue(e, r);
        }
      }
      function $t() {
        var e = v();
        return e.useTransition();
      }
      function Ft(e) {
        var r = v();
        return r.useDeferredValue(e);
      }
      function Nt() {
        var e = v();
        return e.useId();
      }
      function Lt(e, r, i) {
        var u = v();
        return u.useSyncExternalStore(e, r, i);
      }
      var er = 0, et, rt, tt, nt, at, it, ot;
      function ut() {
      }
      ut.__reactDisabledLog = !0;
      function Ut() {
        {
          if (er === 0) {
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
          er++;
        }
      }
      function Vt() {
        {
          if (er--, er === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: E({}, e, {
                value: et
              }),
              info: E({}, e, {
                value: rt
              }),
              warn: E({}, e, {
                value: tt
              }),
              error: E({}, e, {
                value: nt
              }),
              group: E({}, e, {
                value: at
              }),
              groupCollapsed: E({}, e, {
                value: it
              }),
              groupEnd: E({}, e, {
                value: ot
              })
            });
          }
          er < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Yr = re.ReactCurrentDispatcher, Br;
      function mr(e, r, i) {
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
      var Jr = !1, gr;
      {
        var zt = typeof WeakMap == "function" ? WeakMap : Map;
        gr = new zt();
      }
      function st(e, r) {
        if (!e || Jr)
          return "";
        {
          var i = gr.get(e);
          if (i !== void 0)
            return i;
        }
        var u;
        Jr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var m;
        m = Yr.current, Yr.current = null, Ut();
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
            for (var b = ne.stack.split(`
`), j = u.stack.split(`
`), N = b.length - 1, Y = j.length - 1; N >= 1 && Y >= 0 && b[N] !== j[Y]; )
              Y--;
            for (; N >= 1 && Y >= 0; N--, Y--)
              if (b[N] !== j[Y]) {
                if (N !== 1 || Y !== 1)
                  do
                    if (N--, Y--, Y < 0 || b[N] !== j[Y]) {
                      var B = `
` + b[N].replace(" at new ", " at ");
                      return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && gr.set(e, B), B;
                    }
                  while (N >= 1 && Y >= 0);
                break;
              }
          }
        } finally {
          Jr = !1, Yr.current = m, Vt(), Error.prepareStackTrace = c;
        }
        var W = e ? e.displayName || e.name : "", Q = W ? mr(W) : "";
        return typeof e == "function" && gr.set(e, Q), Q;
      }
      function Yt(e, r, i) {
        return st(e, !1);
      }
      function Bt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function br(e, r, i) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return st(e, Bt(e));
        if (typeof e == "string")
          return mr(e);
        switch (e) {
          case H:
            return mr("Suspense");
          case Z:
            return mr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case D:
              return Yt(e.render);
            case oe:
              return br(e.type, r, i);
            case he: {
              var u = e, c = u._payload, m = u._init;
              try {
                return br(m(c), r, i);
              } catch {
              }
            }
          }
        return "";
      }
      var ct = {}, lt = re.ReactDebugCurrentFrame;
      function _r(e) {
        if (e) {
          var r = e._owner, i = br(e.type, e._source, r ? r.type : null);
          lt.setExtraStackFrame(i);
        } else
          lt.setExtraStackFrame(null);
      }
      function Jt(e, r, i, u, c) {
        {
          var m = Function.call.bind(Me);
          for (var h in e)
            if (m(e, h)) {
              var b = void 0;
              try {
                if (typeof e[h] != "function") {
                  var j = Error((u || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                b = e[h](r, h, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (N) {
                b = N;
              }
              b && !(b instanceof Error) && (_r(c), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, h, typeof b), _r(null)), b instanceof Error && !(b.message in ct) && (ct[b.message] = !0, _r(c), y("Failed %s type: %s", i, b.message), _r(null));
            }
        }
      }
      function qe(e) {
        if (e) {
          var r = e._owner, i = br(e.type, e._source, r ? r.type : null);
          Te(i);
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
      function Wt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
      function Ht(e) {
        return e != null ? Wt(e.__source) : "";
      }
      var dt = {};
      function qt(e) {
        var r = ft();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
      function pt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var i = qt(r);
          if (!dt[i]) {
            dt[i] = !0;
            var u = "";
            e && e._owner && e._owner !== ae.current && (u = " It was passed a child from " + ge(e._owner.type) + "."), qe(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), qe(null);
          }
        }
      }
      function vt(e, r) {
        if (typeof e == "object") {
          if (Ye(e))
            for (var i = 0; i < e.length; i++) {
              var u = e[i];
              Pe(u) && pt(u, r);
            }
          else if (Pe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = q(e);
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
          var i;
          if (typeof r == "function")
            i = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === oe))
            i = r.propTypes;
          else
            return;
          if (i) {
            var u = ge(r);
            Jt(i, e.props, "prop", u, e);
          } else if (r.PropTypes !== void 0 && !Wr) {
            Wr = !0;
            var c = ge(r);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kt(e) {
        {
          for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
            var u = r[i];
            if (u !== "children" && u !== "key") {
              qe(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), qe(null);
              break;
            }
          }
          e.ref !== null && (qe(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
        }
      }
      function yt(e, r, i) {
        var u = s(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = Ht(r);
          m ? c += m : c += ft();
          var h;
          e === null ? h = "null" : Ye(e) ? h = "array" : e !== void 0 && e.$$typeof === f ? (h = "<" + (ge(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, c);
        }
        var b = Ar.apply(this, arguments);
        if (b == null)
          return b;
        if (u)
          for (var j = 2; j < arguments.length; j++)
            vt(arguments[j], e);
        return e === _ ? Kt(b) : ht(b), b;
      }
      var mt = !1;
      function Gt(e) {
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
      function Xt(e, r, i) {
        for (var u = Ir.apply(this, arguments), c = 2; c < arguments.length; c++)
          vt(arguments[c], u.type);
        return ht(u), u;
      }
      function Qt(e, r) {
        var i = de.transition;
        de.transition = {};
        var u = de.transition;
        de.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (de.transition = i, i === null && u._updatedFibers) {
            var c = u._updatedFibers.size;
            c > 10 && pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
          }
        }
      }
      var gt = !1, Er = null;
      function Zt(e) {
        if (Er === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), i = n && n[r];
            Er = i.call(n, "timers").setImmediate;
          } catch {
            Er = function(c) {
              gt === !1 && (gt = !0, typeof MessageChannel > "u" && y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var m = new MessageChannel();
              m.port1.onmessage = c, m.port2.postMessage(void 0);
            };
          }
        return Er(e);
      }
      var Ke = 0, bt = !1;
      function en(e) {
        {
          var r = Ke;
          Ke++, X.current === null && (X.current = []);
          var i = X.isBatchingLegacy, u;
          try {
            if (X.isBatchingLegacy = !0, u = e(), !i && X.didScheduleLegacyUpdate) {
              var c = X.current;
              c !== null && (X.didScheduleLegacyUpdate = !1, Kr(c));
            }
          } catch (W) {
            throw Rr(r), W;
          } finally {
            X.isBatchingLegacy = i;
          }
          if (u !== null && typeof u == "object" && typeof u.then == "function") {
            var m = u, h = !1, b = {
              then: function(W, Q) {
                h = !0, m.then(function(ne) {
                  Rr(r), Ke === 0 ? Hr(ne, W, Q) : W(ne);
                }, function(ne) {
                  Rr(r), Q(ne);
                });
              }
            };
            return !bt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              h || (bt = !0, y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), b;
          } else {
            var j = u;
            if (Rr(r), Ke === 0) {
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
      function Rr(e) {
        e !== Ke - 1 && y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ke = e;
      }
      function Hr(e, r, i) {
        {
          var u = X.current;
          if (u !== null)
            try {
              Kr(u), Zt(function() {
                u.length === 0 ? (X.current = null, r(e)) : Hr(e, r, i);
              });
            } catch (c) {
              i(c);
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
              var i = e[r];
              do
                i = i(!0);
              while (i !== null);
            }
            e.length = 0;
          } catch (u) {
            throw e = e.slice(r + 1), u;
          } finally {
            qr = !1;
          }
        }
      }
      var rn = yt, tn = Xt, nn = Gt, an = {
        map: Ne,
        forEach: pr,
        count: Fr,
        toArray: Nr,
        only: vr
      };
      o.Children = an, o.Component = S, o.Fragment = _, o.Profiler = G, o.PureComponent = ee, o.StrictMode = C, o.Suspense = H, o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, o.cloneElement = tn, o.createContext = hr, o.createElement = rn, o.createFactory = nn, o.createRef = jr, o.forwardRef = zr, o.isValidElement = Pe, o.lazy = Vr, o.memo = d, o.startTransition = Qt, o.unstable_act = en, o.useCallback = se, o.useContext = k, o.useDebugValue = ve, o.useDeferredValue = Ft, o.useEffect = te, o.useId = Nt, o.useImperativeHandle = yr, o.useInsertionEffect = J, o.useLayoutEffect = K, o.useMemo = Oe, o.useReducer = T, o.useRef = w, o.useState = M, o.useSyncExternalStore = Lt, o.useTransition = $t, o.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(nr, nr.exports)), nr.exports;
}
var wt;
function Zr() {
  return wt || (wt = 1, process.env.NODE_ENV === "production" ? Pr.exports = ln() : Pr.exports = fn()), Pr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function dn() {
  if (Ot)
    return rr;
  Ot = 1;
  var n = Zr(), o = Symbol.for("react.element"), p = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(G, A, z) {
    var D, H = {}, Z = null, oe = null;
    z !== void 0 && (Z = "" + z), A.key !== void 0 && (Z = "" + A.key), A.ref !== void 0 && (oe = A.ref);
    for (D in A)
      f.call(A, D) && !_.hasOwnProperty(D) && (H[D] = A[D]);
    if (G && G.defaultProps)
      for (D in A = G.defaultProps, A)
        H[D] === void 0 && (H[D] = A[D]);
    return { $$typeof: o, type: G, key: Z, ref: oe, props: H, _owner: R.current };
  }
  return rr.Fragment = p, rr.jsx = C, rr.jsxs = C, rr;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function pn() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Zr(), o = Symbol.for("react.element"), p = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), G = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), he = Symbol.iterator, ze = "@@iterator";
    function le(t) {
      if (t === null || typeof t != "object")
        return null;
      var s = he && t[he] || t[ze];
      return typeof s == "function" ? s : null;
    }
    var fe = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(t) {
      {
        for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
          d[v - 1] = arguments[v];
        Ee("error", t, d);
      }
    }
    function Ee(t, s, d) {
      {
        var v = fe.ReactDebugCurrentFrame, k = v.getStackAddendum();
        k !== "" && (s += "%s", d = d.concat([k]));
        var M = d.map(function(T) {
          return String(T);
        });
        M.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, M);
      }
    }
    var de = !1, X = !1, ae = !1, ye = !1, be = !1, Te;
    Te = Symbol.for("react.module.reference");
    function je(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === f || t === _ || be || t === R || t === z || t === D || ye || t === oe || de || X || ae || typeof t == "object" && t !== null && (t.$$typeof === Z || t.$$typeof === H || t.$$typeof === C || t.$$typeof === G || t.$$typeof === A || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Te || t.getModuleId !== void 0));
    }
    function Ge(t, s, d) {
      var v = t.displayName;
      if (v)
        return v;
      var k = s.displayName || s.name || "";
      return k !== "" ? d + "(" + k + ")" : d;
    }
    function ke(t) {
      return t.displayName || "Context";
    }
    function ie(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case f:
          return "Fragment";
        case p:
          return "Portal";
        case _:
          return "Profiler";
        case R:
          return "StrictMode";
        case z:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case G:
            var s = t;
            return ke(s) + ".Consumer";
          case C:
            var d = t;
            return ke(d._context) + ".Provider";
          case A:
            return Ge(t, t.render, "ForwardRef");
          case H:
            var v = t.displayName || null;
            return v !== null ? v : ie(t.type) || "Memo";
          case Z: {
            var k = t, M = k._payload, T = k._init;
            try {
              return ie(T(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, re = 0, pe, y, me, xe, a, l, E;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function S() {
      {
        if (re === 0) {
          pe = console.log, y = console.info, me = console.warn, xe = console.error, a = console.group, l = console.groupCollapsed, E = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: x,
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
              value: l
            }),
            groupEnd: ue({}, t, {
              value: E
            })
          });
        }
        re < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = fe.ReactCurrentDispatcher, F;
    function I(t, s, d) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (k) {
            var v = k.stack.trim().match(/\n( *(at )?)/);
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
    function ir(t, s) {
      if (!t || ee)
        return "";
      {
        var d = Re.get(t);
        if (d !== void 0)
          return d;
      }
      var v;
      ee = !0;
      var k = Error.prepareStackTrace;
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
`), J = w.length - 1, K = te.length - 1; J >= 1 && K >= 0 && w[J] !== te[K]; )
            K--;
          for (; J >= 1 && K >= 0; J--, K--)
            if (w[J] !== te[K]) {
              if (J !== 1 || K !== 1)
                do
                  if (J--, K--, K < 0 || w[J] !== te[K]) {
                    var se = `
` + w[J].replace(" at new ", " at ");
                    return t.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", t.displayName)), typeof t == "function" && Re.set(t, se), se;
                  }
                while (J >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        ee = !1, V.current = M, U(), Error.prepareStackTrace = k;
      }
      var Oe = t ? t.displayName || t.name : "", yr = Oe ? I(Oe) : "";
      return typeof t == "function" && Re.set(t, yr), yr;
    }
    function Ye(t, s, d) {
      return ir(t, !1);
    }
    function kr(t) {
      var s = t.prototype;
      return !!(s && s.isReactComponent);
    }
    function Be(t, s, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ir(t, kr(t));
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
          case A:
            return Ye(t.render);
          case H:
            return Be(t.type, s, d);
          case Z: {
            var v = t, k = v._payload, M = v._init;
            try {
              return Be(M(k), s, d);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, De = {}, or = fe.ReactDebugCurrentFrame;
    function Ie(t) {
      if (t) {
        var s = t._owner, d = Be(t.type, t._source, s ? s.type : null);
        or.setExtraStackFrame(d);
      } else
        or.setExtraStackFrame(null);
    }
    function ge(t, s, d, v, k) {
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
            w && !(w instanceof Error) && (Ie(k), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", d, T, typeof w), Ie(null)), w instanceof Error && !(w.message in De) && (De[w.message] = !0, Ie(k), q("Failed %s type: %s", d, w.message), Ie(null));
          }
      }
    }
    var Me = Array.isArray;
    function Je(t) {
      return Me(t);
    }
    function ur(t) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, d = s && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function sr(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function Xe(t) {
      if (sr(t))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(t)), We(t);
    }
    var Ce = fe.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cr, lr, $e;
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
        $e[d] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ie(Ce.current.type), t.ref), $e[d] = !0);
      }
    }
    function Pe(t, s) {
      {
        var d = function() {
          cr || (cr = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function fr(t, s) {
      {
        var d = function() {
          lr || (lr = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Mr = function(t, s, d, v, k, M, T) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
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
        value: k
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function $r(t, s, d, v, k) {
      {
        var M, T = {}, w = null, te = null;
        d !== void 0 && (Xe(d), w = "" + d), Dr(s) && (Xe(s.key), w = "" + s.key), Ar(s) && (te = s.ref, Ir(s, k));
        for (M in s)
          Ae.call(s, M) && !xr.hasOwnProperty(M) && (T[M] = s[M]);
        if (t && t.defaultProps) {
          var J = t.defaultProps;
          for (M in J)
            T[M] === void 0 && (T[M] = J[M]);
        }
        if (w || te) {
          var K = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          w && Pe(T, K), te && fr(T, K);
        }
        return Mr(t, w, te, k, v, Ce.current, T);
      }
    }
    var He = fe.ReactCurrentOwner, dr = fe.ReactDebugCurrentFrame;
    function _e(t) {
      if (t) {
        var s = t._owner, d = Be(t.type, t._source, s ? s.type : null);
        dr.setExtraStackFrame(d);
      } else
        dr.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function we(t) {
      return typeof t == "object" && t !== null && t.$$typeof === o;
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
    var pr = {};
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
    function vr(t, s) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = Nr(s);
        if (pr[d])
          return;
        pr[d] = !0;
        var v = "";
        t && t._owner && t._owner !== He.current && (v = " It was passed a child from " + ie(t._owner.type) + "."), _e(t), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, v), _e(null);
      }
    }
    function hr(t, s) {
      {
        if (typeof t != "object")
          return;
        if (Je(t))
          for (var d = 0; d < t.length; d++) {
            var v = t[d];
            we(v) && vr(v, s);
          }
        else if (we(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var k = le(t);
          if (typeof k == "function" && k !== t.entries)
            for (var M = k.call(t), T; !(T = M.next()).done; )
              we(T.value) && vr(T.value, s);
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
        else if (typeof s == "object" && (s.$$typeof === A || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === H))
          d = s.propTypes;
        else
          return;
        if (d) {
          var v = ie(s);
          ge(d, t.props, "prop", v, t);
        } else if (s.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var k = ie(s);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(t) {
      {
        for (var s = Object.keys(t.props), d = 0; d < s.length; d++) {
          var v = s[d];
          if (v !== "children" && v !== "key") {
            _e(t), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), _e(null);
            break;
          }
        }
        t.ref !== null && (_e(t), q("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function Ze(t, s, d, v, k, M) {
      {
        var T = je(t);
        if (!T) {
          var w = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = Fr(k);
          te ? w += te : w += Ne();
          var J;
          t === null ? J = "null" : Je(t) ? J = "array" : t !== void 0 && t.$$typeof === o ? (J = "<" + (ie(t.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : J = typeof t, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, w);
        }
        var K = $r(t, s, d, k, M);
        if (K == null)
          return K;
        if (T) {
          var se = s.children;
          if (se !== void 0)
            if (v)
              if (Je(se)) {
                for (var Oe = 0; Oe < se.length; Oe++)
                  hr(se[Oe], t);
                Object.freeze && Object.freeze(se);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hr(se, t);
        }
        return t === f ? Qe(K) : Le(K), K;
      }
    }
    function Lr(t, s, d) {
      return Ze(t, s, d, !0);
    }
    function Ur(t, s, d) {
      return Ze(t, s, d, !1);
    }
    var Vr = Ur, zr = Lr;
    tr.Fragment = f, tr.jsx = Vr, tr.jsxs = zr;
  }()), tr;
}
process.env.NODE_ENV === "production" ? Xr.exports = dn() : Xr.exports = pn();
var $ = Xr.exports, P = /* @__PURE__ */ ((n) => (n.Japanese = "ja", n.English = "en", n))(P || {}), g = /* @__PURE__ */ ((n) => (n[n.AddUnit = 1] = "AddUnit", n[n.ChangeApprover = 2] = "ChangeApprover", n[n.RemoveUnit = 3] = "RemoveUnit", n[n.Modify = 11] = "Modify", n[n.CancelModify = 12] = "CancelModify", n[n.SubmitModify = 13] = "SubmitModify", n[n.Petition = 14] = "Petition", n[n.CancelPetition = 21] = "CancelPetition", n[n.Approve = 31] = "Approve", n[n.Disapprove = 32] = "Disapprove", n[n.Reapplication = 41] = "Reapplication", n))(g || {}), xt = Zr();
const Ve = /* @__PURE__ */ cn(xt);
var At = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Tt = Ve.createContext && /* @__PURE__ */ Ve.createContext(At), vn = ["attr", "size", "title"];
function hn(n, o) {
  if (n == null)
    return {};
  var p = yn(n, o), f, R;
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(n);
    for (R = 0; R < _.length; R++)
      f = _[R], !(o.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(n, f) && (p[f] = n[f]);
  }
  return p;
}
function yn(n, o) {
  if (n == null)
    return {};
  var p = {}, f = Object.keys(n), R, _;
  for (_ = 0; _ < f.length; _++)
    R = f[_], !(o.indexOf(R) >= 0) && (p[R] = n[R]);
  return p;
}
function Or() {
  return Or = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var p = arguments[o];
      for (var f in p)
        Object.prototype.hasOwnProperty.call(p, f) && (n[f] = p[f]);
    }
    return n;
  }, Or.apply(this, arguments);
}
function jt(n, o) {
  var p = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    o && (f = f.filter(function(R) {
      return Object.getOwnPropertyDescriptor(n, R).enumerable;
    })), p.push.apply(p, f);
  }
  return p;
}
function Sr(n) {
  for (var o = 1; o < arguments.length; o++) {
    var p = arguments[o] != null ? arguments[o] : {};
    o % 2 ? jt(Object(p), !0).forEach(function(f) {
      mn(n, f, p[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(p)) : jt(Object(p)).forEach(function(f) {
      Object.defineProperty(n, f, Object.getOwnPropertyDescriptor(p, f));
    });
  }
  return n;
}
function mn(n, o, p) {
  return o = gn(o), o in n ? Object.defineProperty(n, o, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : n[o] = p, n;
}
function gn(n) {
  var o = bn(n, "string");
  return typeof o == "symbol" ? o : String(o);
}
function bn(n, o) {
  if (typeof n != "object" || n === null)
    return n;
  var p = n[Symbol.toPrimitive];
  if (p !== void 0) {
    var f = p.call(n, o || "default");
    if (typeof f != "object")
      return f;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(n);
}
function Dt(n) {
  return n && n.map((o, p) => /* @__PURE__ */ Ve.createElement(o.tag, Sr({
    key: p
  }, o.attr), Dt(o.child)));
}
function Tr(n) {
  return (o) => /* @__PURE__ */ Ve.createElement(_n, Or({
    attr: Sr({}, n.attr)
  }, o), Dt(n.child));
}
function _n(n) {
  var o = (p) => {
    var {
      attr: f,
      size: R,
      title: _
    } = n, C = hn(n, vn), G = R || p.size || "1em", A;
    return p.className && (A = p.className), n.className && (A = (A ? A + " " : "") + n.className), /* @__PURE__ */ Ve.createElement("svg", Or({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, p.attr, f, C, {
      className: A,
      style: Sr(Sr({
        color: n.color || p.color
      }, p.style), n.style),
      height: G,
      width: G,
      xmlns: "http://www.w3.org/2000/svg"
    }), _ && /* @__PURE__ */ Ve.createElement("title", null, _), n.children);
  };
  return Tt !== void 0 ? /* @__PURE__ */ Ve.createElement(Tt.Consumer, null, (p) => o(p)) : o(At);
}
function En(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" }, child: [] }] })(n);
}
function Rn(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zM19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }, child: [] }] })(n);
}
function Cn(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" }, child: [] }] })(n);
}
function Pn(n) {
  return Tr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z" }, child: [] }] })(n);
}
var ar;
((n) => {
  function o(_, C = P.Japanese) {
    return p(_) && (C = P.Japanese), R[_][C];
  }
  n.getLabel = o;
  function p(_) {
    const C = R[_].isIcon;
    return C ?? !1;
  }
  n.isIcon = p;
  function f(_) {
    const C = R[_].needParams;
    return C ?? !1;
  }
  n.needParams = f;
  const R = {
    [g.AddUnit]: {
      [P.Japanese]: /* @__PURE__ */ $.jsx(Cn, {}),
      isIcon: !0,
      needParams: !0
    },
    [g.ChangeApprover]: {
      [P.Japanese]: /* @__PURE__ */ $.jsx(Rn, {}),
      isIcon: !0,
      needParams: !0
    },
    [g.RemoveUnit]: {
      [P.Japanese]: /* @__PURE__ */ $.jsx(Pn, {}),
      isIcon: !0,
      needParams: !0
    },
    [g.Modify]: {
      [P.Japanese]: "編集",
      [P.English]: "Modify"
    },
    [g.CancelModify]: {
      [P.Japanese]: "キャンセル",
      [P.English]: "Cancel"
    },
    [g.SubmitModify]: {
      [P.Japanese]: "保存",
      [P.English]: "Save"
    },
    [g.Petition]: {
      [P.Japanese]: "申請",
      [P.English]: "Petition"
    },
    [g.CancelPetition]: {
      [P.Japanese]: "申請キャンセル",
      [P.English]: "Cancel Petition"
    },
    [g.Approve]: {
      [P.Japanese]: "承認",
      [P.English]: "Approve"
    },
    [g.Disapprove]: {
      [P.Japanese]: "非承認",
      [P.English]: "Disapprove"
    },
    [g.Reapplication]: {
      [P.Japanese]: "再申請",
      [P.English]: "Reapplication"
    }
  };
})(ar || (ar = {}));
var L = /* @__PURE__ */ ((n) => (n[n.None = 0] = "None", n[n.PrePetition = 1] = "PrePetition", n[n.Petitioning = 2] = "Petitioning", n[n.Remanded = 3] = "Remanded", n[n.Approved = 4] = "Approved", n[n.CanEdit = 11] = "CanEdit", n[n.Editing = 12] = "Editing", n[n.Approving = 13] = "Approving", n))(L || {}), Qr;
((n) => {
  function o(f, R = P.Japanese) {
    return p[f][R];
  }
  n.getLabel = o;
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
})(Qr || (Qr = {}));
function It(n) {
  var o, p, f = "";
  if (typeof n == "string" || typeof n == "number")
    f += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var R = n.length;
      for (o = 0; o < R; o++)
        n[o] && (p = It(n[o])) && (f && (f += " "), f += p);
    } else
      for (p in n)
        n[p] && (f && (f += " "), f += p);
  return f;
}
function Mt() {
  for (var n, o, p = 0, f = "", R = arguments.length; p < R; p++)
    (n = arguments[p]) && (o = It(n)) && (f && (f += " "), f += o);
  return f;
}
var ce = { labelButton: "_13s4fcp7 _13s4fcp6", iconButton: "_13s4fcp8 _13s4fcp6", themes: { icon: "_13s4fcp9", normal: "_13s4fcpa", safe: "_13s4fcpb", warn: "_13s4fcpc", danger: "_13s4fcpd" } };
function wr({
  actionCode: n,
  lang: o,
  onAction: p = () => {
  },
  params: f
}) {
  const R = ar.isIcon(n), _ = ar.getLabel(n, o), C = R ? ce.iconButton : ce.labelButton, G = wn(n);
  return /* @__PURE__ */ $.jsx("button", { className: Mt(C, G), onClick: A, children: _ });
  function A() {
    ar.needParams(n) && !f || p(n, f);
  }
}
function wn(n) {
  let o = "";
  switch (n) {
    case g.AddUnit:
      o = ce.themes.icon;
      break;
    case g.ChangeApprover:
      o = ce.themes.icon;
      break;
    case g.RemoveUnit:
      o = ce.themes.icon;
      break;
    case g.Modify:
      o = ce.themes.normal;
      break;
    case g.CancelModify:
      o = ce.themes.danger;
      break;
    case g.SubmitModify:
      o = ce.themes.safe;
      break;
    case g.Petition:
      o = ce.themes.warn;
      break;
    case g.CancelPetition:
      o = ce.themes.danger;
      break;
    case g.Approve:
      o = ce.themes.safe;
      break;
    case g.Disapprove:
      o = ce.themes.danger;
      break;
    case g.Reapplication:
      o = ce.themes.danger;
      break;
  }
  return o;
}
var Se = { label: "_1d9ak1h2", themes: { pending: "_1d9ak1h3", success: "_1d9ak1h4", warn: "_1d9ak1h5", danger: "_1d9ak1h6", action: "_1d9ak1h7" } };
function On({
  statusCode: n,
  lang: o
}) {
  const p = Qr.getLabel(n, o) + n.toString(), f = Sn(n);
  return /* @__PURE__ */ $.jsx(
    "p",
    {
      "data-testid": "workflowStatusLabel",
      className: Mt(Se.label, f),
      children: p
    }
  );
}
function Sn(n) {
  let o = "";
  switch (n) {
    case L.None:
    case L.PrePetition:
      o = Se.themes.pending;
      break;
    case L.Petitioning:
      o = Se.themes.danger;
      break;
    case L.Remanded:
      o = Se.themes.danger;
      break;
    case L.Approved:
      o = Se.themes.success;
      break;
    case L.CanEdit:
      o = Se.themes.pending;
      break;
    case L.Editing:
      o = Se.themes.pending;
      break;
    case L.Approving:
      o = Se.themes.action;
      break;
  }
  return o;
}
var Tn = { container: "_11kmar60" };
function jn({
  statusCode: n,
  lang: o = P.Japanese,
  onAction: p = () => {
  }
}) {
  const f = R(n);
  return /* @__PURE__ */ $.jsx("div", {
    className: Tn.container,
    /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
    children: f.map((_, C) => /* @__PURE__ */ xt.createElement(wr, { ..._, lang: o, onAction: p, key: C }))
  });
  function R(_) {
    let C = [];
    switch (_) {
      case L.None:
      case L.PrePetition:
        C = [];
        break;
      case L.Petitioning:
        C = [{ actionCode: g.CancelPetition, lang: o }];
        break;
      case L.Remanded:
        C = [
          { actionCode: g.Modify, lang: o },
          { actionCode: g.Petition, lang: o }
        ];
        break;
      case L.Approved:
        C = [];
        break;
      case L.CanEdit:
        C = [
          { actionCode: g.Modify, lang: o },
          { actionCode: g.Petition, lang: o }
        ];
        break;
      case L.Editing:
        C = [
          { actionCode: g.SubmitModify, lang: o },
          { actionCode: g.CancelModify, lang: o }
        ];
        break;
      case L.Approving:
        C = [
          { actionCode: g.Approve, lang: o },
          { actionCode: g.Disapprove, lang: o }
        ];
        break;
    }
    return C;
  }
}
var Ue = { frame: "exv2aw0", wrapper: "exv2aw1", titleContainer: "exv2aw2", title: "exv2aw3", employeeInfoContainer: "exv2aw4", buttonContainer: "exv2aw5", error: "exv2aw6" };
function kn(n) {
  const { index: o, title: p, employeeInfo: f, sendEmail: R, lang: _, onAction: C = () => {
  } } = n;
  return /* @__PURE__ */ $.jsx("div", { className: Ue.frame, children: /* @__PURE__ */ $.jsxs("div", { className: Ue.wrapper, children: [
    /* @__PURE__ */ $.jsxs("div", { className: Ue.titleContainer, children: [
      /* @__PURE__ */ $.jsx("p", { className: Ue.title, children: p }),
      /* @__PURE__ */ $.jsx("i", { children: R && /* @__PURE__ */ $.jsx(En, {}) })
    ] }),
    /* @__PURE__ */ $.jsx("div", {
      className: Ue.employeeInfoContainer,
      /* 従業員情報の有無で表示を変える */
      children: f == null ? /* @__PURE__ */ $.jsx("p", { className: Ue.error, children: "承認社未設定" }) : /* @__PURE__ */ $.jsxs($.Fragment, { children: [
        /* @__PURE__ */ $.jsx("p", { children: f == null ? void 0 : f.id }),
        /* @__PURE__ */ $.jsx("p", { children: f == null ? void 0 : f.name })
      ] })
    }),
    /* @__PURE__ */ $.jsxs("div", { className: Ue.buttonContainer, children: [
      /* @__PURE__ */ $.jsx(
        wr,
        {
          actionCode: g.AddUnit,
          lang: _,
          onAction: C,
          params: o
        }
      ),
      /* @__PURE__ */ $.jsx(
        wr,
        {
          actionCode: g.ChangeApprover,
          lang: _,
          onAction: C,
          params: o
        }
      ),
      /* @__PURE__ */ $.jsx(
        wr,
        {
          actionCode: g.RemoveUnit,
          lang: _,
          onAction: C,
          params: o
        }
      )
    ] })
  ] }) });
}
var xn = { container: "_1tvgepq0" };
function An({ units: n, onAction: o }) {
  return /* @__PURE__ */ $.jsx("div", {
    className: xn.container,
    /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
    children: n.map((p, f) => /* @__PURE__ */ $.jsx(kn, { ...p, index: f, onAction: o, key: f }))
  });
}
var kt = { container: "_1j3i0us0", sideContainer: "_1j3i0us1" };
function Dn({
  props: { units: n, setUnits: o, statusCode: p, setStatusCode: f, lang: R }
}) {
  return /* @__PURE__ */ $.jsxs("div", { className: kt.container, children: [
    /* @__PURE__ */ $.jsx(An, { units: n, onAction: _ }),
    /* @__PURE__ */ $.jsxs("div", { className: kt.sideContainer, children: [
      /* @__PURE__ */ $.jsx(On, { statusCode: p, lang: R }),
      /* @__PURE__ */ $.jsx(jn, { statusCode: p, lang: R, onAction: _ })
    ] })
  ] });
  function _(z, D) {
    switch (z) {
      case g.AddUnit:
        C(D);
        break;
      case g.ChangeApprover:
        break;
      case g.RemoveUnit:
        G(D);
        break;
      case g.Modify:
      case g.SubmitModify:
      case g.CancelModify:
        A(z);
        break;
      default:
        alert(`Call API ${g[z]}`);
        break;
    }
  }
  function C(z) {
    o((D) => {
      console.log(D);
      const H = z + 1, Z = [...D];
      return Z.splice(H, 0, {
        index: H,
        title: "承認者",
        sendEmail: !1,
        lang: P.Japanese,
        onAction: _
      }), Z;
    });
  }
  function G(z) {
    o((D) => {
      const H = z, Z = [...D];
      return Z.splice(H, 1), Z;
    });
  }
  function A(z) {
    switch (z) {
      case g.Modify:
        f(L.Editing);
        break;
      case g.SubmitModify:
      case g.CancelModify:
        f(L.CanEdit);
        break;
      default:
        return !1;
    }
    return !0;
  }
}
export {
  Dn as WorkflowContainer
};
