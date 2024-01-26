function tn(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var qr = { exports: {} }, Ze = {}, Kr = { exports: {} }, E = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function nn() {
  if (Et)
    return E;
  Et = 1;
  var o = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Q = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), J = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), V = Symbol.iterator;
  function ue(n) {
    return n === null || typeof n != "object" ? null : (n = V && n[V] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, pe = Object.assign, Le = {};
  function se(n, l, b) {
    this.props = n, this.context = l, this.refs = Le, this.updater = b || ae;
  }
  se.prototype.isReactComponent = {}, se.prototype.setState = function(n, l) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, l, "setState");
  }, se.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ce() {
  }
  ce.prototype = se.prototype;
  function B(n, l, b) {
    this.props = n, this.context = l, this.refs = Le, this.updater = b || ae;
  }
  var be = B.prototype = new ce();
  be.constructor = B, pe(be, se.prototype), be.isPureReactComponent = !0;
  var le = Array.isArray, H = Object.prototype.hasOwnProperty, te = { current: null }, ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(n, l, b) {
    var k, R = {}, $ = null, M = null;
    if (l != null)
      for (k in l.ref !== void 0 && (M = l.ref), l.key !== void 0 && ($ = "" + l.key), l)
        H.call(l, k) && !ve.hasOwnProperty(k) && (R[k] = l[k]);
    var D = arguments.length - 2;
    if (D === 1)
      R.children = b;
    else if (1 < D) {
      for (var x = Array(D), G = 0; G < D; G++)
        x[G] = arguments[G + 2];
      R.children = x;
    }
    if (n && n.defaultProps)
      for (k in D = n.defaultProps, D)
        R[k] === void 0 && (R[k] = D[k]);
    return { $$typeof: o, type: n, key: $, ref: M, props: R, _owner: te.current };
  }
  function we(n, l) {
    return { $$typeof: o, type: n.type, key: l, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Pe(n) {
    return typeof n == "object" && n !== null && n.$$typeof === o;
  }
  function qe(n) {
    var l = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(b) {
      return l[b];
    });
  }
  var Se = /\/+/g;
  function ne(n, l) {
    return typeof n == "object" && n !== null && n.key != null ? qe("" + n.key) : l.toString(36);
  }
  function oe(n, l, b, k, R) {
    var $ = typeof n;
    ($ === "undefined" || $ === "boolean") && (n = null);
    var M = !1;
    if (n === null)
      M = !0;
    else
      switch ($) {
        case "string":
        case "number":
          M = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case o:
            case u:
              M = !0;
          }
      }
    if (M)
      return M = n, R = R(M), n = k === "" ? "." + ne(M, 0) : k, le(R) ? (b = "", n != null && (b = n.replace(Se, "$&/") + "/"), oe(R, l, b, "", function(G) {
        return G;
      })) : R != null && (Pe(R) && (R = we(R, b + (!R.key || M && M.key === R.key ? "" : ("" + R.key).replace(Se, "$&/") + "/") + n)), l.push(R)), 1;
    if (M = 0, k = k === "" ? "." : k + ":", le(n))
      for (var D = 0; D < n.length; D++) {
        $ = n[D];
        var x = k + ne($, D);
        M += oe($, l, b, x, R);
      }
    else if (x = ue(n), typeof x == "function")
      for (n = x.call(n), D = 0; !($ = n.next()).done; )
        $ = $.value, x = k + ne($, D++), M += oe($, l, b, x, R);
    else if ($ === "object")
      throw l = String(n), Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    return M;
  }
  function Z(n, l, b) {
    if (n == null)
      return n;
    var k = [], R = 0;
    return oe(n, k, "", "", function($) {
      return l.call(b, $, R++);
    }), k;
  }
  function fe(n) {
    if (n._status === -1) {
      var l = n._result;
      l = l(), l.then(function(b) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = b);
      }, function(b) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = b);
      }), n._status === -1 && (n._status = 0, n._result = l);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var h = { current: null }, ye = { transition: null }, Te = { ReactCurrentDispatcher: h, ReactCurrentBatchConfig: ye, ReactCurrentOwner: te };
  return E.Children = { map: Z, forEach: function(n, l, b) {
    Z(n, function() {
      l.apply(this, arguments);
    }, b);
  }, count: function(n) {
    var l = 0;
    return Z(n, function() {
      l++;
    }), l;
  }, toArray: function(n) {
    return Z(n, function(l) {
      return l;
    }) || [];
  }, only: function(n) {
    if (!Pe(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, E.Component = se, E.Fragment = d, E.Profiler = w, E.PureComponent = B, E.StrictMode = y, E.Suspense = T, E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, E.cloneElement = function(n, l, b) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var k = pe({}, n.props), R = n.key, $ = n.ref, M = n._owner;
    if (l != null) {
      if (l.ref !== void 0 && ($ = l.ref, M = te.current), l.key !== void 0 && (R = "" + l.key), n.type && n.type.defaultProps)
        var D = n.type.defaultProps;
      for (x in l)
        H.call(l, x) && !ve.hasOwnProperty(x) && (k[x] = l[x] === void 0 && D !== void 0 ? D[x] : l[x]);
    }
    var x = arguments.length - 2;
    if (x === 1)
      k.children = b;
    else if (1 < x) {
      D = Array(x);
      for (var G = 0; G < x; G++)
        D[G] = arguments[G + 2];
      k.children = D;
    }
    return { $$typeof: o, type: n.type, key: R, ref: $, props: k, _owner: M };
  }, E.createContext = function(n) {
    return n = { $$typeof: Q, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: S, _context: n }, n.Consumer = n;
  }, E.createElement = me, E.createFactory = function(n) {
    var l = me.bind(null, n);
    return l.type = n, l;
  }, E.createRef = function() {
    return { current: null };
  }, E.forwardRef = function(n) {
    return { $$typeof: X, render: n };
  }, E.isValidElement = Pe, E.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: fe };
  }, E.memo = function(n, l) {
    return { $$typeof: J, type: n, compare: l === void 0 ? null : l };
  }, E.startTransition = function(n) {
    var l = ye.transition;
    ye.transition = {};
    try {
      n();
    } finally {
      ye.transition = l;
    }
  }, E.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, E.useCallback = function(n, l) {
    return h.current.useCallback(n, l);
  }, E.useContext = function(n) {
    return h.current.useContext(n);
  }, E.useDebugValue = function() {
  }, E.useDeferredValue = function(n) {
    return h.current.useDeferredValue(n);
  }, E.useEffect = function(n, l) {
    return h.current.useEffect(n, l);
  }, E.useId = function() {
    return h.current.useId();
  }, E.useImperativeHandle = function(n, l, b) {
    return h.current.useImperativeHandle(n, l, b);
  }, E.useInsertionEffect = function(n, l) {
    return h.current.useInsertionEffect(n, l);
  }, E.useLayoutEffect = function(n, l) {
    return h.current.useLayoutEffect(n, l);
  }, E.useMemo = function(n, l) {
    return h.current.useMemo(n, l);
  }, E.useReducer = function(n, l, b) {
    return h.current.useReducer(n, l, b);
  }, E.useRef = function(n) {
    return h.current.useRef(n);
  }, E.useState = function(n) {
    return h.current.useState(n);
  }, E.useSyncExternalStore = function(n, l, b) {
    return h.current.useSyncExternalStore(n, l, b);
  }, E.useTransition = function() {
    return h.current.useTransition();
  }, E.version = "18.2.0", E;
}
var rr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
rr.exports;
var Rt;
function an() {
  return Rt || (Rt = 1, function(o, u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.2.0", y = Symbol.for("react.element"), w = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), J = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Le = Symbol.for("react.offscreen"), se = Symbol.iterator, ce = "@@iterator";
      function B(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = se && e[se] || e[ce];
        return typeof r == "function" ? r : null;
      }
      var be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {
        transition: null
      }, H = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, te = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ve = {}, me = null;
      function we(e) {
        me = e;
      }
      ve.setExtraStackFrame = function(e) {
        me = e;
      }, ve.getCurrentStack = null, ve.getStackAddendum = function() {
        var e = "";
        me && (e += me);
        var r = ve.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Pe = !1, qe = !1, Se = !1, ne = !1, oe = !1, Z = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: le,
        ReactCurrentOwner: te
      };
      Z.ReactDebugCurrentFrame = ve, Z.ReactCurrentActQueue = H;
      function fe(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
            a[i - 1] = arguments[i];
          ye("warn", e, a);
        }
      }
      function h(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
            a[i - 1] = arguments[i];
          ye("error", e, a);
        }
      }
      function ye(e, r, a) {
        {
          var i = Z.ReactDebugCurrentFrame, c = i.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var m = a.map(function(v) {
            return String(v);
          });
          m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, i = a && (a.displayName || a.name) || "ReactClass", c = i + "." + r;
          if (Te[c])
            return;
          h("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, i), Te[c] = !0;
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
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
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
        enqueueReplaceState: function(e, r, a, i) {
          n(e, "replaceState");
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
        enqueueSetState: function(e, r, a, i) {
          n(e, "setState");
        }
      }, b = Object.assign, k = {};
      Object.freeze(k);
      function R(e, r, a) {
        this.props = e, this.context = r, this.refs = k, this.updater = a || l;
      }
      R.prototype.isReactComponent = {}, R.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, R.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var $ = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, M = function(e, r) {
          Object.defineProperty(R.prototype, e, {
            get: function() {
              fe("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var D in $)
          $.hasOwnProperty(D) && M(D, $[D]);
      }
      function x() {
      }
      x.prototype = R.prototype;
      function G(e, r, a) {
        this.props = e, this.context = r, this.refs = k, this.updater = a || l;
      }
      var _e = G.prototype = new x();
      _e.constructor = G, b(_e, R.prototype), _e.isPureReactComponent = !0;
      function Pr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var nr = Array.isArray;
      function Ue(e) {
        return nr(e);
      }
      function Sr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ve(e) {
        try {
          return je(e), !1;
        } catch {
          return !0;
        }
      }
      function je(e) {
        return "" + e;
      }
      function ke(e) {
        if (Ve(e))
          return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(e)), je(e);
      }
      function ar(e, r, a) {
        var i = e.displayName;
        if (i)
          return i;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function xe(e) {
        return e.displayName || "Context";
      }
      function he(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case S:
            return "Fragment";
          case w:
            return "Portal";
          case X:
            return "Profiler";
          case Q:
            return "StrictMode";
          case V:
            return "Suspense";
          case ue:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case J:
              var r = e;
              return xe(r) + ".Consumer";
            case T:
              var a = e;
              return xe(a._context) + ".Provider";
            case N:
              return ar(e, e.render, "ForwardRef");
            case ae:
              var i = e.displayName || null;
              return i !== null ? i : he(e.type) || "Memo";
            case pe: {
              var c = e, m = c._payload, v = c._init;
              try {
                return he(v(m));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = Object.prototype.hasOwnProperty, Ye = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, or, ir, ze;
      ze = {};
      function Ke(e) {
        if (Ae.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ee(e) {
        if (Ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Tr(e, r) {
        var a = function() {
          or || (or = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function ur(e, r) {
        var a = function() {
          ir || (ir = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function sr(e) {
        if (typeof e.ref == "string" && te.current && e.__self && te.current.stateNode !== e.__self) {
          var r = he(te.current.type);
          ze[r] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), ze[r] = !0);
        }
      }
      var De = function(e, r, a, i, c, m, v) {
        var g = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: v,
          // Record the component responsible for creating this element.
          _owner: m
        };
        return g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(g, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.defineProperty(g, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      };
      function jr(e, r, a) {
        var i, c = {}, m = null, v = null, g = null, P = null;
        if (r != null) {
          Ke(r) && (v = r.ref, sr(r)), Ee(r) && (ke(r.key), m = "" + r.key), g = r.__self === void 0 ? null : r.__self, P = r.__source === void 0 ? null : r.__source;
          for (i in r)
            Ae.call(r, i) && !Ye.hasOwnProperty(i) && (c[i] = r[i]);
        }
        var I = arguments.length - 2;
        if (I === 1)
          c.children = a;
        else if (I > 1) {
          for (var L = Array(I), U = 0; U < I; U++)
            L[U] = arguments[U + 2];
          Object.freeze && Object.freeze(L), c.children = L;
        }
        if (e && e.defaultProps) {
          var z = e.defaultProps;
          for (i in z)
            c[i] === void 0 && (c[i] = z[i]);
        }
        if (m || v) {
          var q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Tr(c, q), v && ur(c, q);
        }
        return De(e, m, v, g, P, te.current, c);
      }
      function kr(e, r) {
        var a = De(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function xr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var i, c = b({}, e.props), m = e.key, v = e.ref, g = e._self, P = e._source, I = e._owner;
        if (r != null) {
          Ke(r) && (v = r.ref, I = te.current), Ee(r) && (ke(r.key), m = "" + r.key);
          var L;
          e.type && e.type.defaultProps && (L = e.type.defaultProps);
          for (i in r)
            Ae.call(r, i) && !Ye.hasOwnProperty(i) && (r[i] === void 0 && L !== void 0 ? c[i] = L[i] : c[i] = r[i]);
        }
        var U = arguments.length - 2;
        if (U === 1)
          c.children = a;
        else if (U > 1) {
          for (var z = Array(U), q = 0; q < U; q++)
            z[q] = arguments[q + 2];
          c.children = z;
        }
        return De(e.type, m, v, g, P, I, c);
      }
      function Re(e) {
        return typeof e == "object" && e !== null && e.$$typeof === y;
      }
      var cr = ".", Ar = ":";
      function Dr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, i = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + i;
      }
      var Be = !1, lr = /\/+/g;
      function ge(e) {
        return e.replace(lr, "$&/");
      }
      function Ie(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Dr("" + e.key)) : r.toString(36);
      }
      function Ce(e, r, a, i, c) {
        var m = typeof e;
        (m === "undefined" || m === "boolean") && (e = null);
        var v = !1;
        if (e === null)
          v = !0;
        else
          switch (m) {
            case "string":
            case "number":
              v = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case y:
                case w:
                  v = !0;
              }
          }
        if (v) {
          var g = e, P = c(g), I = i === "" ? cr + Ie(g, 0) : i;
          if (Ue(P)) {
            var L = "";
            I != null && (L = ge(I) + "/"), Ce(P, r, L, "", function(rn) {
              return rn;
            });
          } else
            P != null && (Re(P) && (P.key && (!g || g.key !== P.key) && ke(P.key), P = kr(
              P,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (P.key && (!g || g.key !== P.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ge("" + P.key) + "/"
              ) : "") + I
            )), r.push(P));
          return 1;
        }
        var U, z, q = 0, re = i === "" ? cr : i + Ar;
        if (Ue(e))
          for (var Er = 0; Er < e.length; Er++)
            U = e[Er], z = re + Ie(U, Er), q += Ce(U, r, a, z, c);
        else {
          var Hr = B(e);
          if (typeof Hr == "function") {
            var gt = e;
            Hr === gt.entries && (Be || fe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Be = !0);
            for (var Zt = Hr.call(gt), bt, en = 0; !(bt = Zt.next()).done; )
              U = bt.value, z = re + Ie(U, en++), q += Ce(U, r, a, z, c);
          } else if (m === "object") {
            var _t = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (_t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : _t) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return q;
      }
      function Fe(e, r, a) {
        if (e == null)
          return e;
        var i = [], c = 0;
        return Ce(e, i, "", "", function(m) {
          return r.call(a, m, c++);
        }), i;
      }
      function Ir(e) {
        var r = 0;
        return Fe(e, function() {
          r++;
        }), r;
      }
      function fr(e, r, a) {
        Fe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Fr(e) {
        return Fe(e, function(r) {
          return r;
        }) || [];
      }
      function dr(e) {
        if (!Re(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function pr(e) {
        var r = {
          $$typeof: J,
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
          $$typeof: T,
          _context: r
        };
        var a = !1, i = !1, c = !1;
        {
          var m = {
            $$typeof: J,
            _context: r
          };
          Object.defineProperties(m, {
            Provider: {
              get: function() {
                return i || (i = !0, h("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(v) {
                r.Provider = v;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(v) {
                r._currentValue = v;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(v) {
                r._currentValue2 = v;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(v) {
                r._threadCount = v;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, h("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(v) {
                c || (fe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", v), c = !0);
              }
            }
          }), r.Consumer = m;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var $e = -1, Ge = 0, Xe = 1, $r = 2;
      function Nr(e) {
        if (e._status === $e) {
          var r = e._result, a = r();
          if (a.then(function(m) {
            if (e._status === Ge || e._status === $e) {
              var v = e;
              v._status = Xe, v._result = m;
            }
          }, function(m) {
            if (e._status === Ge || e._status === $e) {
              var v = e;
              v._status = $r, v._result = m;
            }
          }), e._status === $e) {
            var i = e;
            i._status = Ge, i._result = a;
          }
        }
        if (e._status === Xe) {
          var c = e._result;
          return c === void 0 && h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Mr(e) {
        var r = {
          // We use these fields to store the result.
          _status: $e,
          _result: e
        }, a = {
          $$typeof: pe,
          _payload: r,
          _init: Nr
        };
        {
          var i, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(m) {
                h("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = m, Object.defineProperty(a, "defaultProps", {
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
                h("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = m, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Lr(e) {
        e != null && e.$$typeof === ae ? h("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? h("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && h("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && h("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(i) {
              a = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function s(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === S || e === X || oe || e === Q || e === V || e === ue || ne || e === Le || Pe || qe || Se || typeof e == "object" && e !== null && (e.$$typeof === pe || e.$$typeof === ae || e.$$typeof === T || e.$$typeof === J || e.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function f(e, r) {
        s(e) || h("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: ae,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var i;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(c) {
              i = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function p() {
        var e = be.current;
        return e === null && h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function j(e) {
        var r = p();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? h("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && h("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function A(e) {
        var r = p();
        return r.useState(e);
      }
      function C(e, r, a) {
        var i = p();
        return i.useReducer(e, r, a);
      }
      function _(e) {
        var r = p();
        return r.useRef(e);
      }
      function ee(e, r) {
        var a = p();
        return a.useEffect(e, r);
      }
      function Y(e, r) {
        var a = p();
        return a.useInsertionEffect(e, r);
      }
      function W(e, r) {
        var a = p();
        return a.useLayoutEffect(e, r);
      }
      function ie(e, r) {
        var a = p();
        return a.useCallback(e, r);
      }
      function Oe(e, r) {
        var a = p();
        return a.useMemo(e, r);
      }
      function vr(e, r, a) {
        var i = p();
        return i.useImperativeHandle(e, r, a);
      }
      function de(e, r) {
        {
          var a = p();
          return a.useDebugValue(e, r);
        }
      }
      function kt() {
        var e = p();
        return e.useTransition();
      }
      function xt(e) {
        var r = p();
        return r.useDeferredValue(e);
      }
      function At() {
        var e = p();
        return e.useId();
      }
      function Dt(e, r, a) {
        var i = p();
        return i.useSyncExternalStore(e, r, a);
      }
      var Qe = 0, Qr, Zr, et, rt, tt, nt, at;
      function ot() {
      }
      ot.__reactDisabledLog = !0;
      function It() {
        {
          if (Qe === 0) {
            Qr = console.log, Zr = console.info, et = console.warn, rt = console.error, tt = console.group, nt = console.groupCollapsed, at = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ot,
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
          Qe++;
        }
      }
      function Ft() {
        {
          if (Qe--, Qe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: b({}, e, {
                value: Qr
              }),
              info: b({}, e, {
                value: Zr
              }),
              warn: b({}, e, {
                value: et
              }),
              error: b({}, e, {
                value: rt
              }),
              group: b({}, e, {
                value: tt
              }),
              groupCollapsed: b({}, e, {
                value: nt
              }),
              groupEnd: b({}, e, {
                value: at
              })
            });
          }
          Qe < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ur = Z.ReactCurrentDispatcher, Vr;
      function yr(e, r, a) {
        {
          if (Vr === void 0)
            try {
              throw Error();
            } catch (c) {
              var i = c.stack.trim().match(/\n( *(at )?)/);
              Vr = i && i[1] || "";
            }
          return `
` + Vr + e;
        }
      }
      var Yr = !1, hr;
      {
        var $t = typeof WeakMap == "function" ? WeakMap : Map;
        hr = new $t();
      }
      function it(e, r) {
        if (!e || Yr)
          return "";
        {
          var a = hr.get(e);
          if (a !== void 0)
            return a;
        }
        var i;
        Yr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var m;
        m = Ur.current, Ur.current = null, It();
        try {
          if (r) {
            var v = function() {
              throw Error();
            };
            if (Object.defineProperty(v.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(v, []);
              } catch (re) {
                i = re;
              }
              Reflect.construct(e, [], v);
            } else {
              try {
                v.call();
              } catch (re) {
                i = re;
              }
              e.call(v.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (re) {
              i = re;
            }
            e();
          }
        } catch (re) {
          if (re && i && typeof re.stack == "string") {
            for (var g = re.stack.split(`
`), P = i.stack.split(`
`), I = g.length - 1, L = P.length - 1; I >= 1 && L >= 0 && g[I] !== P[L]; )
              L--;
            for (; I >= 1 && L >= 0; I--, L--)
              if (g[I] !== P[L]) {
                if (I !== 1 || L !== 1)
                  do
                    if (I--, L--, L < 0 || g[I] !== P[L]) {
                      var U = `
` + g[I].replace(" at new ", " at ");
                      return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && hr.set(e, U), U;
                    }
                  while (I >= 1 && L >= 0);
                break;
              }
          }
        } finally {
          Yr = !1, Ur.current = m, Ft(), Error.prepareStackTrace = c;
        }
        var z = e ? e.displayName || e.name : "", q = z ? yr(z) : "";
        return typeof e == "function" && hr.set(e, q), q;
      }
      function Nt(e, r, a) {
        return it(e, !1);
      }
      function Mt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function mr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return it(e, Mt(e));
        if (typeof e == "string")
          return yr(e);
        switch (e) {
          case V:
            return yr("Suspense");
          case ue:
            return yr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return Nt(e.render);
            case ae:
              return mr(e.type, r, a);
            case pe: {
              var i = e, c = i._payload, m = i._init;
              try {
                return mr(m(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var ut = {}, st = Z.ReactDebugCurrentFrame;
      function gr(e) {
        if (e) {
          var r = e._owner, a = mr(e.type, e._source, r ? r.type : null);
          st.setExtraStackFrame(a);
        } else
          st.setExtraStackFrame(null);
      }
      function Lt(e, r, a, i, c) {
        {
          var m = Function.call.bind(Ae);
          for (var v in e)
            if (m(e, v)) {
              var g = void 0;
              try {
                if (typeof e[v] != "function") {
                  var P = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw P.name = "Invariant Violation", P;
                }
                g = e[v](r, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (I) {
                g = I;
              }
              g && !(g instanceof Error) && (gr(c), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof g), gr(null)), g instanceof Error && !(g.message in ut) && (ut[g.message] = !0, gr(c), h("Failed %s type: %s", a, g.message), gr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = mr(e.type, e._source, r ? r.type : null);
          we(a);
        } else
          we(null);
      }
      var zr;
      zr = !1;
      function ct() {
        if (te.current) {
          var e = he(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Ut(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Vt(e) {
        return e != null ? Ut(e.__source) : "";
      }
      var lt = {};
      function Yt(e) {
        var r = ct();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function ft(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Yt(r);
          if (!lt[a]) {
            lt[a] = !0;
            var i = "";
            e && e._owner && e._owner !== te.current && (i = " It was passed a child from " + he(e._owner.type) + "."), We(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, i), We(null);
          }
        }
      }
      function dt(e, r) {
        if (typeof e == "object") {
          if (Ue(e))
            for (var a = 0; a < e.length; a++) {
              var i = e[a];
              Re(i) && ft(i, r);
            }
          else if (Re(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = B(e);
            if (typeof c == "function" && c !== e.entries)
              for (var m = c.call(e), v; !(v = m.next()).done; )
                Re(v.value) && ft(v.value, r);
          }
        }
      }
      function pt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === ae))
            a = r.propTypes;
          else
            return;
          if (a) {
            var i = he(r);
            Lt(a, e.props, "prop", i, e);
          } else if (r.PropTypes !== void 0 && !zr) {
            zr = !0;
            var c = he(r);
            h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function zt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var i = r[a];
            if (i !== "children" && i !== "key") {
              We(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function vt(e, r, a) {
        var i = s(e);
        if (!i) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = Vt(r);
          m ? c += m : c += ct();
          var v;
          e === null ? v = "null" : Ue(e) ? v = "array" : e !== void 0 && e.$$typeof === y ? (v = "<" + (he(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, h("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, c);
        }
        var g = jr.apply(this, arguments);
        if (g == null)
          return g;
        if (i)
          for (var P = 2; P < arguments.length; P++)
            dt(arguments[P], e);
        return e === S ? zt(g) : pt(g), g;
      }
      var yt = !1;
      function Bt(e) {
        var r = vt.bind(null, e);
        return r.type = e, yt || (yt = !0, fe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return fe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Wt(e, r, a) {
        for (var i = xr.apply(this, arguments), c = 2; c < arguments.length; c++)
          dt(arguments[c], i.type);
        return pt(i), i;
      }
      function Jt(e, r) {
        var a = le.transition;
        le.transition = {};
        var i = le.transition;
        le.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (le.transition = a, a === null && i._updatedFibers) {
            var c = i._updatedFibers.size;
            c > 10 && fe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
          }
        }
      }
      var ht = !1, br = null;
      function Ht(e) {
        if (br === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = o && o[r];
            br = a.call(o, "timers").setImmediate;
          } catch {
            br = function(c) {
              ht === !1 && (ht = !0, typeof MessageChannel > "u" && h("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var m = new MessageChannel();
              m.port1.onmessage = c, m.port2.postMessage(void 0);
            };
          }
        return br(e);
      }
      var Je = 0, mt = !1;
      function qt(e) {
        {
          var r = Je;
          Je++, H.current === null && (H.current = []);
          var a = H.isBatchingLegacy, i;
          try {
            if (H.isBatchingLegacy = !0, i = e(), !a && H.didScheduleLegacyUpdate) {
              var c = H.current;
              c !== null && (H.didScheduleLegacyUpdate = !1, Jr(c));
            }
          } catch (z) {
            throw _r(r), z;
          } finally {
            H.isBatchingLegacy = a;
          }
          if (i !== null && typeof i == "object" && typeof i.then == "function") {
            var m = i, v = !1, g = {
              then: function(z, q) {
                v = !0, m.then(function(re) {
                  _r(r), Je === 0 ? Br(re, z, q) : z(re);
                }, function(re) {
                  _r(r), q(re);
                });
              }
            };
            return !mt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              v || (mt = !0, h("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), g;
          } else {
            var P = i;
            if (_r(r), Je === 0) {
              var I = H.current;
              I !== null && (Jr(I), H.current = null);
              var L = {
                then: function(z, q) {
                  H.current === null ? (H.current = [], Br(P, z, q)) : z(P);
                }
              };
              return L;
            } else {
              var U = {
                then: function(z, q) {
                  z(P);
                }
              };
              return U;
            }
          }
        }
      }
      function _r(e) {
        e !== Je - 1 && h("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Je = e;
      }
      function Br(e, r, a) {
        {
          var i = H.current;
          if (i !== null)
            try {
              Jr(i), Ht(function() {
                i.length === 0 ? (H.current = null, r(e)) : Br(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Wr = !1;
      function Jr(e) {
        if (!Wr) {
          Wr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (i) {
            throw e = e.slice(r + 1), i;
          } finally {
            Wr = !1;
          }
        }
      }
      var Kt = vt, Gt = Wt, Xt = Bt, Qt = {
        map: Fe,
        forEach: fr,
        count: Ir,
        toArray: Fr,
        only: dr
      };
      u.Children = Qt, u.Component = R, u.Fragment = S, u.Profiler = X, u.PureComponent = G, u.StrictMode = Q, u.Suspense = V, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, u.cloneElement = Gt, u.createContext = pr, u.createElement = Kt, u.createFactory = Xt, u.createRef = Pr, u.forwardRef = Lr, u.isValidElement = Re, u.lazy = Mr, u.memo = f, u.startTransition = Jt, u.unstable_act = qt, u.useCallback = ie, u.useContext = j, u.useDebugValue = de, u.useDeferredValue = xt, u.useEffect = ee, u.useId = At, u.useImperativeHandle = vr, u.useInsertionEffect = Y, u.useLayoutEffect = W, u.useMemo = Oe, u.useReducer = C, u.useRef = _, u.useState = A, u.useSyncExternalStore = Dt, u.useTransition = kt, u.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(rr, rr.exports)), rr.exports;
}
process.env.NODE_ENV === "production" ? Kr.exports = nn() : Kr.exports = an();
var tr = Kr.exports;
const Me = /* @__PURE__ */ tn(tr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function on() {
  if (Ct)
    return Ze;
  Ct = 1;
  var o = tr, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, w = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q(X, T, J) {
    var N, V = {}, ue = null, ae = null;
    J !== void 0 && (ue = "" + J), T.key !== void 0 && (ue = "" + T.key), T.ref !== void 0 && (ae = T.ref);
    for (N in T)
      y.call(T, N) && !S.hasOwnProperty(N) && (V[N] = T[N]);
    if (X && X.defaultProps)
      for (N in T = X.defaultProps, T)
        V[N] === void 0 && (V[N] = T[N]);
    return { $$typeof: u, type: X, key: ue, ref: ae, props: V, _owner: w.current };
  }
  return Ze.Fragment = d, Ze.jsx = Q, Ze.jsxs = Q, Ze;
}
var er = {};
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
function un() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    var o = tr, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), X = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), pe = Symbol.iterator, Le = "@@iterator";
    function se(t) {
      if (t === null || typeof t != "object")
        return null;
      var s = pe && t[pe] || t[Le];
      return typeof s == "function" ? s : null;
    }
    var ce = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function B(t) {
      {
        for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          f[p - 1] = arguments[p];
        be("error", t, f);
      }
    }
    function be(t, s, f) {
      {
        var p = ce.ReactDebugCurrentFrame, j = p.getStackAddendum();
        j !== "" && (s += "%s", f = f.concat([j]));
        var A = f.map(function(C) {
          return String(C);
        });
        A.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, A);
      }
    }
    var le = !1, H = !1, te = !1, ve = !1, me = !1, we;
    we = Symbol.for("react.module.reference");
    function Pe(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === y || t === S || me || t === w || t === J || t === N || ve || t === ae || le || H || te || typeof t == "object" && t !== null && (t.$$typeof === ue || t.$$typeof === V || t.$$typeof === Q || t.$$typeof === X || t.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === we || t.getModuleId !== void 0));
    }
    function qe(t, s, f) {
      var p = t.displayName;
      if (p)
        return p;
      var j = s.displayName || s.name || "";
      return j !== "" ? f + "(" + j + ")" : f;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function ne(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case y:
          return "Fragment";
        case d:
          return "Portal";
        case S:
          return "Profiler";
        case w:
          return "StrictMode";
        case J:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case X:
            var s = t;
            return Se(s) + ".Consumer";
          case Q:
            var f = t;
            return Se(f._context) + ".Provider";
          case T:
            return qe(t, t.render, "ForwardRef");
          case V:
            var p = t.displayName || null;
            return p !== null ? p : ne(t.type) || "Memo";
          case ue: {
            var j = t, A = j._payload, C = j._init;
            try {
              return ne(C(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, Z = 0, fe, h, ye, Te, n, l, b;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function R() {
      {
        if (Z === 0) {
          fe = console.log, h = console.info, ye = console.warn, Te = console.error, n = console.group, l = console.groupCollapsed, b = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: k,
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
        Z++;
      }
    }
    function $() {
      {
        if (Z--, Z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, t, {
              value: fe
            }),
            info: oe({}, t, {
              value: h
            }),
            warn: oe({}, t, {
              value: ye
            }),
            error: oe({}, t, {
              value: Te
            }),
            group: oe({}, t, {
              value: n
            }),
            groupCollapsed: oe({}, t, {
              value: l
            }),
            groupEnd: oe({}, t, {
              value: b
            })
          });
        }
        Z < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = ce.ReactCurrentDispatcher, D;
    function x(t, s, f) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (j) {
            var p = j.stack.trim().match(/\n( *(at )?)/);
            D = p && p[1] || "";
          }
        return `
` + D + t;
      }
    }
    var G = !1, _e;
    {
      var Pr = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new Pr();
    }
    function nr(t, s) {
      if (!t || G)
        return "";
      {
        var f = _e.get(t);
        if (f !== void 0)
          return f;
      }
      var p;
      G = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = M.current, M.current = null, R();
      try {
        if (s) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (de) {
              p = de;
            }
            Reflect.construct(t, [], C);
          } else {
            try {
              C.call();
            } catch (de) {
              p = de;
            }
            t.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            p = de;
          }
          t();
        }
      } catch (de) {
        if (de && p && typeof de.stack == "string") {
          for (var _ = de.stack.split(`
`), ee = p.stack.split(`
`), Y = _.length - 1, W = ee.length - 1; Y >= 1 && W >= 0 && _[Y] !== ee[W]; )
            W--;
          for (; Y >= 1 && W >= 0; Y--, W--)
            if (_[Y] !== ee[W]) {
              if (Y !== 1 || W !== 1)
                do
                  if (Y--, W--, W < 0 || _[Y] !== ee[W]) {
                    var ie = `
` + _[Y].replace(" at new ", " at ");
                    return t.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", t.displayName)), typeof t == "function" && _e.set(t, ie), ie;
                  }
                while (Y >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        G = !1, M.current = A, $(), Error.prepareStackTrace = j;
      }
      var Oe = t ? t.displayName || t.name : "", vr = Oe ? x(Oe) : "";
      return typeof t == "function" && _e.set(t, vr), vr;
    }
    function Ue(t, s, f) {
      return nr(t, !1);
    }
    function Sr(t) {
      var s = t.prototype;
      return !!(s && s.isReactComponent);
    }
    function Ve(t, s, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return nr(t, Sr(t));
      if (typeof t == "string")
        return x(t);
      switch (t) {
        case J:
          return x("Suspense");
        case N:
          return x("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case T:
            return Ue(t.render);
          case V:
            return Ve(t.type, s, f);
          case ue: {
            var p = t, j = p._payload, A = p._init;
            try {
              return Ve(A(j), s, f);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, ke = {}, ar = ce.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var s = t._owner, f = Ve(t.type, t._source, s ? s.type : null);
        ar.setExtraStackFrame(f);
      } else
        ar.setExtraStackFrame(null);
    }
    function he(t, s, f, p, j) {
      {
        var A = Function.call.bind(je);
        for (var C in t)
          if (A(t, C)) {
            var _ = void 0;
            try {
              if (typeof t[C] != "function") {
                var ee = Error((p || "React class") + ": " + f + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              _ = t[C](s, C, p, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              _ = Y;
            }
            _ && !(_ instanceof Error) && (xe(j), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", f, C, typeof _), xe(null)), _ instanceof Error && !(_.message in ke) && (ke[_.message] = !0, xe(j), B("Failed %s type: %s", f, _.message), xe(null));
          }
      }
    }
    var Ae = Array.isArray;
    function Ye(t) {
      return Ae(t);
    }
    function or(t) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, f = s && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function ir(t) {
      try {
        return ze(t), !1;
      } catch {
        return !0;
      }
    }
    function ze(t) {
      return "" + t;
    }
    function Ke(t) {
      if (ir(t))
        return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(t)), ze(t);
    }
    var Ee = ce.ReactCurrentOwner, Tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ur, sr, De;
    De = {};
    function jr(t) {
      if (je.call(t, "ref")) {
        var s = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function kr(t) {
      if (je.call(t, "key")) {
        var s = Object.getOwnPropertyDescriptor(t, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function xr(t, s) {
      if (typeof t.ref == "string" && Ee.current && s && Ee.current.stateNode !== s) {
        var f = ne(Ee.current.type);
        De[f] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(Ee.current.type), t.ref), De[f] = !0);
      }
    }
    function Re(t, s) {
      {
        var f = function() {
          ur || (ur = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function cr(t, s) {
      {
        var f = function() {
          sr || (sr = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Ar = function(t, s, f, p, j, A, C) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: t,
        key: s,
        ref: f,
        props: C,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Dr(t, s, f, p, j) {
      {
        var A, C = {}, _ = null, ee = null;
        f !== void 0 && (Ke(f), _ = "" + f), kr(s) && (Ke(s.key), _ = "" + s.key), jr(s) && (ee = s.ref, xr(s, j));
        for (A in s)
          je.call(s, A) && !Tr.hasOwnProperty(A) && (C[A] = s[A]);
        if (t && t.defaultProps) {
          var Y = t.defaultProps;
          for (A in Y)
            C[A] === void 0 && (C[A] = Y[A]);
        }
        if (_ || ee) {
          var W = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          _ && Re(C, W), ee && cr(C, W);
        }
        return Ar(t, _, ee, j, p, Ee.current, C);
      }
    }
    var Be = ce.ReactCurrentOwner, lr = ce.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var s = t._owner, f = Ve(t.type, t._source, s ? s.type : null);
        lr.setExtraStackFrame(f);
      } else
        lr.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Ce(t) {
      return typeof t == "object" && t !== null && t.$$typeof === u;
    }
    function Fe() {
      {
        if (Be.current) {
          var t = ne(Be.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ir(t) {
      {
        if (t !== void 0) {
          var s = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + s + ":" + f + ".";
        }
        return "";
      }
    }
    var fr = {};
    function Fr(t) {
      {
        var s = Fe();
        if (!s) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (s = `

Check the top-level render call using <` + f + ">.");
        }
        return s;
      }
    }
    function dr(t, s) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = Fr(s);
        if (fr[f])
          return;
        fr[f] = !0;
        var p = "";
        t && t._owner && t._owner !== Be.current && (p = " It was passed a child from " + ne(t._owner.type) + "."), ge(t), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, p), ge(null);
      }
    }
    function pr(t, s) {
      {
        if (typeof t != "object")
          return;
        if (Ye(t))
          for (var f = 0; f < t.length; f++) {
            var p = t[f];
            Ce(p) && dr(p, s);
          }
        else if (Ce(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var j = se(t);
          if (typeof j == "function" && j !== t.entries)
            for (var A = j.call(t), C; !(C = A.next()).done; )
              Ce(C.value) && dr(C.value, s);
        }
      }
    }
    function $e(t) {
      {
        var s = t.type;
        if (s == null || typeof s == "string")
          return;
        var f;
        if (typeof s == "function")
          f = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === V))
          f = s.propTypes;
        else
          return;
        if (f) {
          var p = ne(s);
          he(f, t.props, "prop", p, t);
        } else if (s.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var j = ne(s);
          B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ge(t) {
      {
        for (var s = Object.keys(t.props), f = 0; f < s.length; f++) {
          var p = s[f];
          if (p !== "children" && p !== "key") {
            ge(t), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), B("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    function Xe(t, s, f, p, j, A) {
      {
        var C = Pe(t);
        if (!C) {
          var _ = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = Ir(j);
          ee ? _ += ee : _ += Fe();
          var Y;
          t === null ? Y = "null" : Ye(t) ? Y = "array" : t !== void 0 && t.$$typeof === u ? (Y = "<" + (ne(t.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof t, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, _);
        }
        var W = Dr(t, s, f, j, A);
        if (W == null)
          return W;
        if (C) {
          var ie = s.children;
          if (ie !== void 0)
            if (p)
              if (Ye(ie)) {
                for (var Oe = 0; Oe < ie.length; Oe++)
                  pr(ie[Oe], t);
                Object.freeze && Object.freeze(ie);
              } else
                B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pr(ie, t);
        }
        return t === y ? Ge(W) : $e(W), W;
      }
    }
    function $r(t, s, f) {
      return Xe(t, s, f, !0);
    }
    function Nr(t, s, f) {
      return Xe(t, s, f, !1);
    }
    var Mr = Nr, Lr = $r;
    er.Fragment = y, er.jsx = Mr, er.jsxs = Lr;
  }()), er;
}
process.env.NODE_ENV === "production" ? qr.exports = on() : qr.exports = un();
var F = qr.exports, O = /* @__PURE__ */ ((o) => (o.Japanese = "ja", o.English = "en", o))(O || {}), K = /* @__PURE__ */ ((o) => (o[o.AddUnit = 1] = "AddUnit", o[o.ChangeApprover = 2] = "ChangeApprover", o[o.RemoveUnit = 3] = "RemoveUnit", o[o.Modify = 11] = "Modify", o[o.CancelModify = 12] = "CancelModify", o[o.SubmitModify = 13] = "SubmitModify", o[o.Petition = 14] = "Petition", o[o.CancelPetition = 21] = "CancelPetition", o[o.Approve = 31] = "Approve", o[o.Disapprove = 32] = "Disapprove", o[o.Reapplication = 41] = "Reapplication", o))(K || {}), Tt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, wt = Me.createContext && /* @__PURE__ */ Me.createContext(Tt), sn = ["attr", "size", "title"];
function cn(o, u) {
  if (o == null)
    return {};
  var d = ln(o, u), y, w;
  if (Object.getOwnPropertySymbols) {
    var S = Object.getOwnPropertySymbols(o);
    for (w = 0; w < S.length; w++)
      y = S[w], !(u.indexOf(y) >= 0) && Object.prototype.propertyIsEnumerable.call(o, y) && (d[y] = o[y]);
  }
  return d;
}
function ln(o, u) {
  if (o == null)
    return {};
  var d = {}, y = Object.keys(o), w, S;
  for (S = 0; S < y.length; S++)
    w = y[S], !(u.indexOf(w) >= 0) && (d[w] = o[w]);
  return d;
}
function Cr() {
  return Cr = Object.assign ? Object.assign.bind() : function(o) {
    for (var u = 1; u < arguments.length; u++) {
      var d = arguments[u];
      for (var y in d)
        Object.prototype.hasOwnProperty.call(d, y) && (o[y] = d[y]);
    }
    return o;
  }, Cr.apply(this, arguments);
}
function Pt(o, u) {
  var d = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(o);
    u && (y = y.filter(function(w) {
      return Object.getOwnPropertyDescriptor(o, w).enumerable;
    })), d.push.apply(d, y);
  }
  return d;
}
function Or(o) {
  for (var u = 1; u < arguments.length; u++) {
    var d = arguments[u] != null ? arguments[u] : {};
    u % 2 ? Pt(Object(d), !0).forEach(function(y) {
      fn(o, y, d[y]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : Pt(Object(d)).forEach(function(y) {
      Object.defineProperty(o, y, Object.getOwnPropertyDescriptor(d, y));
    });
  }
  return o;
}
function fn(o, u, d) {
  return u = dn(u), u in o ? Object.defineProperty(o, u, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : o[u] = d, o;
}
function dn(o) {
  var u = pn(o, "string");
  return typeof u == "symbol" ? u : String(u);
}
function pn(o, u) {
  if (typeof o != "object" || o === null)
    return o;
  var d = o[Symbol.toPrimitive];
  if (d !== void 0) {
    var y = d.call(o, u || "default");
    if (typeof y != "object")
      return y;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (u === "string" ? String : Number)(o);
}
function jt(o) {
  return o && o.map((u, d) => /* @__PURE__ */ Me.createElement(u.tag, Or({
    key: d
  }, u.attr), jt(u.child)));
}
function Xr(o) {
  return (u) => /* @__PURE__ */ Me.createElement(vn, Cr({
    attr: Or({}, o.attr)
  }, u), jt(o.child));
}
function vn(o) {
  var u = (d) => {
    var {
      attr: y,
      size: w,
      title: S
    } = o, Q = cn(o, sn), X = w || d.size || "1em", T;
    return d.className && (T = d.className), o.className && (T = (T ? T + " " : "") + o.className), /* @__PURE__ */ Me.createElement("svg", Cr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, d.attr, y, Q, {
      className: T,
      style: Or(Or({
        color: o.color || d.color
      }, d.style), o.style),
      height: X,
      width: X,
      xmlns: "http://www.w3.org/2000/svg"
    }), S && /* @__PURE__ */ Me.createElement("title", null, S), o.children);
  };
  return wt !== void 0 ? /* @__PURE__ */ Me.createElement(wt.Consumer, null, (d) => u(d)) : u(Tt);
}
function yn(o) {
  return Xr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zM19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }, child: [] }] })(o);
}
function hn(o) {
  return Xr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" }, child: [] }] })(o);
}
function mn(o) {
  return Xr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z" }, child: [] }] })(o);
}
var wr;
((o) => {
  function u(w, S = O.Japanese) {
    return d(w) && (S = O.Japanese), y[w][S];
  }
  o.getLabel = u;
  function d(w) {
    const S = y[w].isIcon;
    return S ?? !1;
  }
  o.isIcon = d;
  const y = {
    [K.AddUnit]: {
      [O.Japanese]: /* @__PURE__ */ F.jsx(hn, {}),
      isIcon: !0
    },
    [K.ChangeApprover]: {
      [O.Japanese]: /* @__PURE__ */ F.jsx(yn, {}),
      isIcon: !0
    },
    [K.RemoveUnit]: {
      [O.Japanese]: /* @__PURE__ */ F.jsx(mn, {}),
      isIcon: !0
    },
    [K.Modify]: {
      [O.Japanese]: "編集",
      [O.English]: "Modify"
    },
    [K.CancelModify]: {
      [O.Japanese]: "キャンセル",
      [O.English]: "Cancel"
    },
    [K.SubmitModify]: {
      [O.Japanese]: "保存",
      [O.English]: "Save"
    },
    [K.Petition]: {
      [O.Japanese]: "申請",
      [O.English]: "Petition"
    },
    [K.CancelPetition]: {
      [O.Japanese]: "申請キャンセル",
      [O.English]: "Cancel Petition"
    },
    [K.Approve]: {
      [O.Japanese]: "承認",
      [O.English]: "Approve"
    },
    [K.Disapprove]: {
      [O.Japanese]: "非承認",
      [O.English]: "Disapprove"
    },
    [K.Reapplication]: {
      [O.Japanese]: "再申請",
      [O.English]: "Reapplication"
    }
  };
})(wr || (wr = {}));
var Ne = /* @__PURE__ */ ((o) => (o[o.None = 0] = "None", o[o.PrePetition = 1] = "PrePetition", o[o.Petitioning = 2] = "Petitioning", o[o.Remanded = 3] = "Remanded", o[o.Approved = 4] = "Approved", o))(Ne || {}), Gr;
((o) => {
  function u(y, w = O.Japanese) {
    return d[y][w];
  }
  o.getLabel = u;
  const d = {
    [Ne.None]: {
      [O.Japanese]: "申請情報なし",
      [O.English]: "None"
    },
    [Ne.PrePetition]: {
      [O.Japanese]: "申請前",
      [O.English]: "PrePetition"
    },
    [Ne.Petitioning]: {
      [O.Japanese]: "申請中",
      [O.English]: "Petitioning"
    },
    [Ne.Remanded]: {
      [O.Japanese]: "差戻し中",
      [O.English]: "Remanded"
    },
    [Ne.Approved]: {
      [O.Japanese]: "承認完了",
      [O.English]: "Approved"
    }
  };
})(Gr || (Gr = {}));
var St = { labelButton: "_13s4fcp0", iconButton: "_13s4fcp1" };
function Rr({
  actionCode: o,
  lang: u = O.Japanese,
  params: d,
  onAction: y = () => {
  }
}) {
  const w = wr.isIcon(o), S = wr.getLabel(o, u), Q = w ? St.iconButton : St.labelButton;
  return /* @__PURE__ */ F.jsx("button", { className: Q, onClick: () => y(o, d), children: S });
}
var gn = { label: "_1d9ak1h0" };
function bn({
  statusCode: o = Ne.None,
  lang: u = O.Japanese
}) {
  const d = Gr.getLabel(o, u);
  return /* @__PURE__ */ F.jsx("p", { className: gn.label, children: d });
}
var _n = { container: "_11kmar60" };
function En({
  statusCode: o,
  onAction: u = () => {
  }
}) {
  console.log(o);
  const d = [
    { actionCode: K.Petition },
    { actionCode: K.Reapplication }
  ];
  return /* @__PURE__ */ F.jsx("div", { className: _n.container, children: d.map((y) => /* @__PURE__ */ F.jsx(Rr, { ...y, onAction: u })) });
}
var He = { frame: "exv2aw0", wrapper: "exv2aw1", titleContainer: "exv2aw2", employeeInfoContainer: "exv2aw3", buttonContainer: "exv2aw4", error: "exv2aw5" };
function Rn({
  index: o,
  title: u,
  employeeInfo: d,
  onAction: y = () => {
  }
}) {
  return /* @__PURE__ */ F.jsx("div", { className: He.frame, children: /* @__PURE__ */ F.jsxs("div", { className: He.wrapper, children: [
    /* @__PURE__ */ F.jsx("div", { className: He.titleContainer, children: /* @__PURE__ */ F.jsx("p", { children: u }) }),
    /* @__PURE__ */ F.jsx("div", {
      className: He.employeeInfoContainer,
      /* 従業員情報の有無で表示を変える */
      children: d == null ? /* @__PURE__ */ F.jsx("p", { className: He.error, children: "承認社未設定" }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
        /* @__PURE__ */ F.jsx("p", { children: d == null ? void 0 : d.id }),
        /* @__PURE__ */ F.jsx("p", { children: d == null ? void 0 : d.name })
      ] })
    }),
    /* @__PURE__ */ F.jsxs("div", { className: He.buttonContainer, children: [
      /* @__PURE__ */ F.jsx(
        Rr,
        {
          actionCode: K.AddUnit,
          onAction: y,
          params: o
        }
      ),
      /* @__PURE__ */ F.jsx(
        Rr,
        {
          actionCode: K.ChangeApprover,
          onAction: y,
          params: o
        }
      ),
      /* @__PURE__ */ F.jsx(
        Rr,
        {
          actionCode: K.RemoveUnit,
          onAction: y,
          params: o
        }
      )
    ] })
  ] }) });
}
var Cn = { container: "_1tvgepq0" };
function On({
  units: o,
  onAction: u
}) {
  return /* @__PURE__ */ F.jsx("div", {
    className: Cn.container,
    /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
    children: o.map((d, y) => /* @__PURE__ */ tr.createElement(
      Rn,
      {
        ...d,
        index: y,
        onAction: u,
        key: y
      }
    ))
  });
}
var wn = { container: "_1j3i0us0" };
function Pn({
  statusCode: o,
  ...u
}) {
  const [d, y] = tr.useState(u.units ? u.units : w());
  return /* @__PURE__ */ F.jsxs("div", { className: wn.container, children: [
    /* @__PURE__ */ F.jsx(On, { units: d, onAction: S }),
    /* @__PURE__ */ F.jsxs("div", { children: [
      /* @__PURE__ */ F.jsx(bn, { statusCode: o }),
      /* @__PURE__ */ F.jsx(
        En,
        {
          statusCode: o,
          onAction: S
        }
      )
    ] })
  ] });
  function w() {
    return [{ title: "承認者" }];
  }
  function S(T, J) {
    switch (T) {
      case K.AddUnit:
        Q(J);
        break;
      case K.ChangeApprover:
        break;
      case K.RemoveUnit:
        X(J);
        break;
    }
  }
  function Q(T) {
    y((J) => {
      const N = T + 1, V = [...J];
      return V.splice(N, 0, { title: "承認者" }), V;
    });
  }
  function X(T) {
    y((J) => {
      const N = T, V = [...J];
      return V.splice(N, 1), V;
    });
  }
}
export {
  Pn as WorkflowContainer
};
