import A, { createElement as Or, useState as Ie } from "react";
var ue = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Tr() {
  if (Fe)
    return $;
  Fe = 1;
  var r = A, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(E, g, C) {
    var _, O = {}, T = null, V = null;
    C !== void 0 && (T = "" + C), g.key !== void 0 && (T = "" + g.key), g.ref !== void 0 && (V = g.ref);
    for (_ in g)
      a.call(g, _) && !f.hasOwnProperty(_) && (O[_] = g[_]);
    if (E && E.defaultProps)
      for (_ in g = E.defaultProps, g)
        O[_] === void 0 && (O[_] = g[_]);
    return { $$typeof: t, type: E, key: T, ref: V, props: O, _owner: l.current };
  }
  return $.Fragment = s, $.jsx = d, $.jsxs = d, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function wr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var r = A, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), E = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), fe = Symbol.iterator, He = "@@iterator";
    function qe(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = fe && e[fe] || e[He];
      return typeof n == "function" ? n : null;
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          i[o - 1] = arguments[o];
        Ge("error", e, i);
      }
    }
    function Ge(e, n, i) {
      {
        var o = F.ReactDebugCurrentFrame, m = o.getStackAddendum();
        m !== "" && (n += "%s", i = i.concat([m]));
        var b = i.map(function(p) {
          return String(p);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var Ke = !1, Xe = !1, Ze = !1, Qe = !1, We = !1, de;
    de = Symbol.for("react.module.reference");
    function er(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === f || We || e === l || e === C || e === _ || Qe || e === V || Ke || Xe || Ze || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === O || e.$$typeof === d || e.$$typeof === E || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function rr(e, n, i) {
      var o = e.displayName;
      if (o)
        return o;
      var m = n.displayName || n.name || "";
      return m !== "" ? i + "(" + m + ")" : i;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case C:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var n = e;
            return ve(n) + ".Consumer";
          case d:
            var i = e;
            return ve(i._context) + ".Provider";
          case g:
            return rr(e, e.render, "ForwardRef");
          case O:
            var o = e.displayName || null;
            return o !== null ? o : k(e.type) || "Memo";
          case T: {
            var m = e, b = m._payload, p = m._init;
            try {
              return k(p(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, z = 0, pe, me, he, ge, be, ye, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function tr() {
      {
        if (z === 0) {
          pe = console.log, me = console.info, he = console.warn, ge = console.error, be = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        z++;
      }
    }
    function nr() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: pe
            }),
            info: N({}, e, {
              value: me
            }),
            warn: N({}, e, {
              value: he
            }),
            error: N({}, e, {
              value: ge
            }),
            group: N({}, e, {
              value: be
            }),
            groupCollapsed: N({}, e, {
              value: ye
            }),
            groupEnd: N({}, e, {
              value: Ee
            })
          });
        }
        z < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = F.ReactCurrentDispatcher, te;
    function H(e, n, i) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (m) {
            var o = m.stack.trim().match(/\n( *(at )?)/);
            te = o && o[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, q;
    {
      var ar = typeof WeakMap == "function" ? WeakMap : Map;
      q = new ar();
    }
    function Pe(e, n) {
      if (!e || ne)
        return "";
      {
        var i = q.get(e);
        if (i !== void 0)
          return i;
      }
      var o;
      ne = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = re.current, re.current = null, tr();
      try {
        if (n) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (M) {
              o = M;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (M) {
              o = M;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            o = M;
          }
          e();
        }
      } catch (M) {
        if (M && o && typeof M.stack == "string") {
          for (var v = M.stack.split(`
`), x = o.stack.split(`
`), P = v.length - 1, R = x.length - 1; P >= 1 && R >= 0 && v[P] !== x[R]; )
            R--;
          for (; P >= 1 && R >= 0; P--, R--)
            if (v[P] !== x[R]) {
              if (P !== 1 || R !== 1)
                do
                  if (P--, R--, R < 0 || v[P] !== x[R]) {
                    var S = `
` + v[P].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, S), S;
                  }
                while (P >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = b, nr(), Error.prepareStackTrace = m;
      }
      var J = e ? e.displayName || e.name : "", Ne = J ? H(J) : "";
      return typeof e == "function" && q.set(e, Ne), Ne;
    }
    function ir(e, n, i) {
      return Pe(e, !1);
    }
    function sr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function G(e, n, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, sr(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case C:
          return H("Suspense");
        case _:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return ir(e.render);
          case O:
            return G(e.type, n, i);
          case T: {
            var o = e, m = o._payload, b = o._init;
            try {
              return G(b(m), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, Re = {}, Ce = F.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var n = e._owner, i = G(e.type, e._source, n ? n.type : null);
        Ce.setExtraStackFrame(i);
      } else
        Ce.setExtraStackFrame(null);
    }
    function or(e, n, i, o, m) {
      {
        var b = Function.call.bind(K);
        for (var p in e)
          if (b(e, p)) {
            var v = void 0;
            try {
              if (typeof e[p] != "function") {
                var x = Error((o || "React class") + ": " + i + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              v = e[p](n, p, o, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              v = P;
            }
            v && !(v instanceof Error) && (X(m), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", i, p, typeof v), X(null)), v instanceof Error && !(v.message in Re) && (Re[v.message] = !0, X(m), j("Failed %s type: %s", i, v.message), X(null));
          }
      }
    }
    var cr = Array.isArray;
    function ae(e) {
      return cr(e);
    }
    function ur(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function lr(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function xe(e) {
      if (lr(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(e)), je(e);
    }
    var L = F.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Te, ie;
    ie = {};
    function dr(e) {
      if (K.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vr(e) {
      if (K.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function pr(e, n) {
      if (typeof e.ref == "string" && L.current && n && L.current.stateNode !== n) {
        var i = k(L.current.type);
        ie[i] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(L.current.type), e.ref), ie[i] = !0);
      }
    }
    function mr(e, n) {
      {
        var i = function() {
          Oe || (Oe = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function hr(e, n) {
      {
        var i = function() {
          Te || (Te = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var gr = function(e, n, i, o, m, b, p) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: i,
        props: p,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function br(e, n, i, o, m) {
      {
        var b, p = {}, v = null, x = null;
        i !== void 0 && (xe(i), v = "" + i), vr(n) && (xe(n.key), v = "" + n.key), dr(n) && (x = n.ref, pr(n, m));
        for (b in n)
          K.call(n, b) && !fr.hasOwnProperty(b) && (p[b] = n[b]);
        if (e && e.defaultProps) {
          var P = e.defaultProps;
          for (b in P)
            p[b] === void 0 && (p[b] = P[b]);
        }
        if (v || x) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && mr(p, R), x && hr(p, R);
        }
        return gr(e, v, x, m, o, L.current, p);
      }
    }
    var se = F.ReactCurrentOwner, we = F.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var n = e._owner, i = G(e.type, e._source, n ? n.type : null);
        we.setExtraStackFrame(i);
      } else
        we.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Se() {
      {
        if (se.current) {
          var e = k(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function yr(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var ke = {};
    function Er(e) {
      {
        var n = Se();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function Me(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Er(n);
        if (ke[i])
          return;
        ke[i] = !0;
        var o = "";
        e && e._owner && e._owner !== se.current && (o = " It was passed a child from " + k(e._owner.type) + "."), U(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, o), U(null);
      }
    }
    function Ae(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            ce(o) && Me(o, n);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = qe(e);
          if (typeof m == "function" && m !== e.entries)
            for (var b = m.call(e), p; !(p = b.next()).done; )
              ce(p.value) && Me(p.value, n);
        }
      }
    }
    function _r(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === O))
          i = n.propTypes;
        else
          return;
        if (i) {
          var o = k(n);
          or(i, e.props, "prop", o, e);
        } else if (n.PropTypes !== void 0 && !oe) {
          oe = !0;
          var m = k(n);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pr(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var o = n[i];
          if (o !== "children" && o !== "key") {
            U(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function De(e, n, i, o, m, b) {
      {
        var p = er(e);
        if (!p) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = yr(m);
          x ? v += x : v += Se();
          var P;
          e === null ? P = "null" : ae(e) ? P = "array" : e !== void 0 && e.$$typeof === t ? (P = "<" + (k(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, v);
        }
        var R = br(e, n, i, m, b);
        if (R == null)
          return R;
        if (p) {
          var S = n.children;
          if (S !== void 0)
            if (o)
              if (ae(S)) {
                for (var J = 0; J < S.length; J++)
                  Ae(S[J], e);
                Object.freeze && Object.freeze(S);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(S, e);
        }
        return e === a ? Pr(R) : _r(R), R;
      }
    }
    function Rr(e, n, i) {
      return De(e, n, i, !0);
    }
    function Cr(e, n, i) {
      return De(e, n, i, !1);
    }
    var jr = Cr, xr = Rr;
    Y.Fragment = a, Y.jsx = jr, Y.jsxs = xr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ue.exports = Tr() : ue.exports = wr();
var h = ue.exports, u = /* @__PURE__ */ ((r) => (r.Japanese = "ja", r.English = "en", r))(u || {}), c = /* @__PURE__ */ ((r) => (r[r.AddUnit = 1] = "AddUnit", r[r.ChangeApprover = 2] = "ChangeApprover", r[r.RemoveUnit = 3] = "RemoveUnit", r[r.Modify = 11] = "Modify", r[r.CancelModify = 12] = "CancelModify", r[r.SubmitModify = 13] = "SubmitModify", r[r.Petition = 14] = "Petition", r[r.CancelPetition = 21] = "CancelPetition", r[r.Approve = 31] = "Approve", r[r.Disapprove = 32] = "Disapprove", r[r.Reapplication = 41] = "Reapplication", r))(c || {}), $e = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Je = A.createContext && /* @__PURE__ */ A.createContext($e), Sr = ["attr", "size", "title"];
function kr(r, t) {
  if (r == null)
    return {};
  var s = Mr(r, t), a, l;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(r);
    for (l = 0; l < f.length; l++)
      a = f[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(r, a) && (s[a] = r[a]);
  }
  return s;
}
function Mr(r, t) {
  if (r == null)
    return {};
  var s = {}, a = Object.keys(r), l, f;
  for (f = 0; f < a.length; f++)
    l = a[f], !(t.indexOf(l) >= 0) && (s[l] = r[l]);
  return s;
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = arguments[t];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (r[a] = s[a]);
    }
    return r;
  }, Q.apply(this, arguments);
}
function ze(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(r, l).enumerable;
    })), s.push.apply(s, a);
  }
  return s;
}
function W(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ze(Object(s), !0).forEach(function(a) {
      Ar(r, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : ze(Object(s)).forEach(function(a) {
      Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(s, a));
    });
  }
  return r;
}
function Ar(r, t, s) {
  return t = Dr(t), t in r ? Object.defineProperty(r, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = s, r;
}
function Dr(r) {
  var t = Nr(r, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Nr(r, t) {
  if (typeof r != "object" || r === null)
    return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var a = s.call(r, t || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function Ye(r) {
  return r && r.map((t, s) => /* @__PURE__ */ A.createElement(t.tag, W({
    key: s
  }, t.attr), Ye(t.child)));
}
function ee(r) {
  return (t) => /* @__PURE__ */ A.createElement(Ir, Q({
    attr: W({}, r.attr)
  }, t), Ye(r.child));
}
function Ir(r) {
  var t = (s) => {
    var {
      attr: a,
      size: l,
      title: f
    } = r, d = kr(r, Sr), E = l || s.size || "1em", g;
    return s.className && (g = s.className), r.className && (g = (g ? g + " " : "") + r.className), /* @__PURE__ */ A.createElement("svg", Q({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, s.attr, a, d, {
      className: g,
      style: W(W({
        color: r.color || s.color
      }, s.style), r.style),
      height: E,
      width: E,
      xmlns: "http://www.w3.org/2000/svg"
    }), f && /* @__PURE__ */ A.createElement("title", null, f), r.children);
  };
  return Je !== void 0 ? /* @__PURE__ */ A.createElement(Je.Consumer, null, (s) => t(s)) : t($e);
}
function Fr(r) {
  return ee({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" }, child: [] }] })(r);
}
function Ur(r) {
  return ee({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zM19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }, child: [] }] })(r);
}
function Jr(r) {
  return ee({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" }, child: [] }] })(r);
}
function zr(r) {
  return ee({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zM17 10h6v2h-6z" }, child: [] }] })(r);
}
var B;
((r) => {
  function t(f, d = u.Japanese) {
    return s(f) && (d = u.Japanese), l[f][d];
  }
  r.getLabel = t;
  function s(f) {
    const d = l[f].isIcon;
    return d ?? !1;
  }
  r.isIcon = s;
  function a(f) {
    const d = l[f].needParams;
    return d ?? !1;
  }
  r.needParams = a;
  const l = {
    [c.AddUnit]: {
      [u.Japanese]: /* @__PURE__ */ h.jsx(Jr, {}),
      isIcon: !0,
      needParams: !0
    },
    [c.ChangeApprover]: {
      [u.Japanese]: /* @__PURE__ */ h.jsx(Ur, {}),
      isIcon: !0,
      needParams: !0
    },
    [c.RemoveUnit]: {
      [u.Japanese]: /* @__PURE__ */ h.jsx(zr, {}),
      isIcon: !0,
      needParams: !0
    },
    [c.Modify]: {
      [u.Japanese]: "編集",
      [u.English]: "Modify"
    },
    [c.CancelModify]: {
      [u.Japanese]: "キャンセル",
      [u.English]: "Cancel"
    },
    [c.SubmitModify]: {
      [u.Japanese]: "保存",
      [u.English]: "Save"
    },
    [c.Petition]: {
      [u.Japanese]: "申請",
      [u.English]: "Petition"
    },
    [c.CancelPetition]: {
      [u.Japanese]: "申請キャンセル",
      [u.English]: "Cancel Petition"
    },
    [c.Approve]: {
      [u.Japanese]: "承認",
      [u.English]: "Approve"
    },
    [c.Disapprove]: {
      [u.Japanese]: "非承認",
      [u.English]: "Disapprove"
    },
    [c.Reapplication]: {
      [u.Japanese]: "再申請",
      [u.English]: "Reapplication"
    }
  };
})(B || (B = {}));
var y = /* @__PURE__ */ ((r) => (r[r.None = 0] = "None", r[r.PrePetition = 1] = "PrePetition", r[r.Petitioning = 2] = "Petitioning", r[r.Remanded = 3] = "Remanded", r[r.Approved = 4] = "Approved", r[r.CanEdit = 11] = "CanEdit", r[r.Editing = 12] = "Editing", r[r.Approving = 13] = "Approving", r))(y || {}), le;
((r) => {
  function t(a, l = u.Japanese) {
    return s[a][l];
  }
  r.getLabel = t;
  const s = {
    // 基本のステータス
    [y.None]: {
      [u.Japanese]: "申請情報なし",
      [u.English]: "None"
    },
    [y.PrePetition]: {
      [u.Japanese]: "申請前",
      [u.English]: "Pre Petition"
    },
    [y.Petitioning]: {
      [u.Japanese]: "申請中",
      [u.English]: "Petitioning"
    },
    [y.Remanded]: {
      [u.Japanese]: "差戻し中",
      [u.English]: "Remanded"
    },
    [y.Approved]: {
      [u.Japanese]: "承認完了",
      [u.English]: "Approved"
    },
    // 申請前 から遷移するステータス
    [y.CanEdit]: {
      [u.Japanese]: "編集可能",
      [u.English]: "Can Edit"
    },
    [y.Editing]: {
      [u.Japanese]: "編集中",
      [u.English]: "Editing"
    },
    [y.Approving]: {
      [u.Japanese]: "承認中",
      [u.English]: "Approving"
    }
  };
})(le || (le = {}));
function Be(r) {
  var t, s, a = "";
  if (typeof r == "string" || typeof r == "number")
    a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var l = r.length;
      for (t = 0; t < l; t++)
        r[t] && (s = Be(r[t])) && (a && (a += " "), a += s);
    } else
      for (s in r)
        r[s] && (a && (a += " "), a += s);
  return a;
}
function Ve() {
  for (var r, t, s = 0, a = "", l = arguments.length; s < l; s++)
    (r = arguments[s]) && (t = Be(r)) && (a && (a += " "), a += t);
  return a;
}
var w = { labelButton: "_13s4fcp7 _13s4fcp6", iconButton: "_13s4fcp8 _13s4fcp6", themes: { icon: "_13s4fcp9", normal: "_13s4fcpa", safe: "_13s4fcpb", warn: "_13s4fcpc", danger: "_13s4fcpd" } };
function Z({
  actionCode: r,
  lang: t,
  onAction: s = () => {
  },
  params: a
}) {
  const l = B.isIcon(r), f = B.getLabel(r, t), d = l ? w.iconButton : w.labelButton, E = Lr(r);
  return /* @__PURE__ */ h.jsx("button", { className: Ve(d, E), onClick: g, children: f });
  function g() {
    B.needParams(r) && !a || s(r, a);
  }
}
function Lr(r) {
  let t = "";
  switch (r) {
    case c.AddUnit:
      t = w.themes.icon;
      break;
    case c.ChangeApprover:
      t = w.themes.icon;
      break;
    case c.RemoveUnit:
      t = w.themes.icon;
      break;
    case c.Modify:
      t = w.themes.normal;
      break;
    case c.CancelModify:
      t = w.themes.danger;
      break;
    case c.SubmitModify:
      t = w.themes.safe;
      break;
    case c.Petition:
      t = w.themes.warn;
      break;
    case c.CancelPetition:
      t = w.themes.danger;
      break;
    case c.Approve:
      t = w.themes.safe;
      break;
    case c.Disapprove:
      t = w.themes.danger;
      break;
    case c.Reapplication:
      t = w.themes.danger;
      break;
  }
  return t;
}
var D = { label: "_1d9ak1h2", themes: { pending: "_1d9ak1h3", success: "_1d9ak1h4", warn: "_1d9ak1h5", danger: "_1d9ak1h6", action: "_1d9ak1h7" } };
function $r({
  statusCode: r,
  lang: t
}) {
  const s = le.getLabel(r, t) + r.toString(), a = Yr(r);
  return /* @__PURE__ */ h.jsx(
    "p",
    {
      "data-testid": "workflowStatusLabel",
      className: Ve(D.label, a),
      children: s
    }
  );
}
function Yr(r) {
  let t = "";
  switch (r) {
    case y.None:
    case y.PrePetition:
      t = D.themes.pending;
      break;
    case y.Petitioning:
      t = D.themes.danger;
      break;
    case y.Remanded:
      t = D.themes.danger;
      break;
    case y.Approved:
      t = D.themes.success;
      break;
    case y.CanEdit:
      t = D.themes.pending;
      break;
    case y.Editing:
      t = D.themes.pending;
      break;
    case y.Approving:
      t = D.themes.action;
      break;
  }
  return t;
}
var Br = { container: "_11kmar60" };
function Vr({
  statusCode: r,
  lang: t = u.Japanese,
  onAction: s = () => {
  }
}) {
  const a = l(r);
  return /* @__PURE__ */ h.jsx("div", {
    className: Br.container,
    /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
    children: a.map((f, d) => /* @__PURE__ */ Or(Z, { ...f, lang: t, onAction: s, key: d }))
  });
  function l(f) {
    let d = [];
    const E = { lang: t, onAction: s };
    switch (f) {
      case y.None:
      case y.PrePetition:
        d = [];
        break;
      case y.Petitioning:
        d = [{ ...E, actionCode: c.CancelPetition }];
        break;
      case y.Remanded:
        d = [
          { ...E, actionCode: c.Modify },
          { ...E, actionCode: c.Petition }
        ];
        break;
      case y.Approved:
        d = [];
        break;
      case y.CanEdit:
        d = [
          { ...E, actionCode: c.Modify },
          { ...E, actionCode: c.Petition }
        ];
        break;
      case y.Editing:
        d = [
          { ...E, actionCode: c.SubmitModify },
          { ...E, actionCode: c.CancelModify }
        ];
        break;
      case y.Approving:
        d = [
          { ...E, actionCode: c.Approve },
          { ...E, actionCode: c.Disapprove }
        ];
        break;
    }
    return d;
  }
}
var I = { frame: "exv2aw0", wrapper: "exv2aw1", titleContainer: "exv2aw2", title: "exv2aw3", employeeInfoContainer: "exv2aw4", buttonContainer: "exv2aw5", error: "exv2aw6" };
function Hr(r) {
  const { index: t, title: s, employeeInfo: a, sendEmail: l, lang: f, onAction: d = () => {
  } } = r;
  return /* @__PURE__ */ h.jsx("div", { className: I.frame, children: /* @__PURE__ */ h.jsxs("div", { className: I.wrapper, children: [
    /* @__PURE__ */ h.jsxs("div", { className: I.titleContainer, children: [
      /* @__PURE__ */ h.jsx("p", { className: I.title, children: s }),
      /* @__PURE__ */ h.jsx("i", { children: l && /* @__PURE__ */ h.jsx(Fr, {}) })
    ] }),
    /* @__PURE__ */ h.jsx("div", {
      className: I.employeeInfoContainer,
      /* 従業員情報の有無で表示を変える */
      children: a == null ? /* @__PURE__ */ h.jsx("p", { className: I.error, children: "承認社未設定" }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsx("p", { children: a == null ? void 0 : a.id }),
        /* @__PURE__ */ h.jsx("p", { children: a == null ? void 0 : a.name })
      ] })
    }),
    /* @__PURE__ */ h.jsxs("div", { className: I.buttonContainer, children: [
      /* @__PURE__ */ h.jsx(
        Z,
        {
          actionCode: c.AddUnit,
          lang: f,
          onAction: d,
          params: t
        }
      ),
      /* @__PURE__ */ h.jsx(
        Z,
        {
          actionCode: c.ChangeApprover,
          lang: f,
          onAction: d,
          params: t
        }
      ),
      /* @__PURE__ */ h.jsx(
        Z,
        {
          actionCode: c.RemoveUnit,
          lang: f,
          onAction: d,
          params: t
        }
      )
    ] })
  ] }) });
}
var qr = { container: "_1tvgepq0" };
function Gr({ units: r, onAction: t }) {
  return /* @__PURE__ */ h.jsx("div", {
    className: qr.container,
    /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
    children: r.map((s, a) => /* @__PURE__ */ h.jsx(Hr, { ...s, index: a, onAction: t, key: a }))
  });
}
var Le = { container: "_1j3i0us0", sideContainer: "_1j3i0us1" };
function Xr({
  props: { units: r, setUnits: t, statusCode: s, setStatusCode: a, lang: l }
}) {
  return /* @__PURE__ */ h.jsxs("div", { className: Le.container, children: [
    /* @__PURE__ */ h.jsx(Gr, { units: r, onAction: f }),
    /* @__PURE__ */ h.jsxs("div", { className: Le.sideContainer, children: [
      /* @__PURE__ */ h.jsx($r, { statusCode: s, lang: l }),
      /* @__PURE__ */ h.jsx(Vr, { statusCode: s, lang: l, onAction: f })
    ] })
  ] });
  function f(C, _) {
    switch (C) {
      case c.AddUnit:
        d(_);
        break;
      case c.ChangeApprover:
        break;
      case c.RemoveUnit:
        E(_);
        break;
      case c.Modify:
      case c.SubmitModify:
      case c.CancelModify:
        g(C);
        break;
      default:
        alert(`Call API ${c[C]}`);
        break;
    }
  }
  function d(C) {
    t((_) => {
      console.log(_);
      const O = C + 1, T = [..._];
      return T.splice(O, 0, {
        index: O,
        title: "承認者",
        sendEmail: !1,
        lang: u.Japanese,
        onAction: f
      }), T;
    });
  }
  function E(C) {
    t((_) => {
      const O = C, T = [..._];
      return T.splice(O, 1), T;
    });
  }
  function g(C) {
    switch (C) {
      case c.Modify:
        a(y.Editing);
        break;
      case c.SubmitModify:
      case c.CancelModify:
        a(y.CanEdit);
        break;
      default:
        return !1;
    }
    return !0;
  }
}
function Zr({
  lang: r = u.Japanese,
  ...t
}) {
  const s = t.units.map(
    (E, g) => ({
      ...E,
      index: g,
      lang: r
    })
  ), [a, l] = Ie(s), [f, d] = Ie(t.statusCode);
  return {
    units: a,
    setUnits: l,
    initialStatusCode: t.statusCode,
    statusCode: f,
    setStatusCode: d,
    lang: r
  };
}
export {
  u as Language,
  c as WorkflowAction,
  B as WorkflowActionUtil,
  Xr as WorkflowContainer,
  y as WorkflowStatus,
  le as WorkflowStatusUtil,
  Zr as useWorkflow
};
