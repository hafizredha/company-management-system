import {
  __commonJS,
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery3 = function(selector, context) {
        return new jQuery3.fn.init(selector, context);
      };
      jQuery3.fn = jQuery3.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery3,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery3.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery3.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery3.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery3.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery3.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery3.extend = jQuery3.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery3.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery3.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery3.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery3.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery3.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery3.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery3.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery3.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery3.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "�";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery3.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery3.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery3.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery3.isXMLDoc(document3);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery3.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery3.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery3.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery3.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery3.fn.uniqueSort = function() {
          return this.pushStack(jQuery3.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery3.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery3.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery3.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery3.find = find;
        jQuery3.expr[":"] = jQuery3.expr.pseudos;
        jQuery3.unique = jQuery3.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery3.escapeSelector;
        find.getText = jQuery3.text;
        find.isXML = jQuery3.isXMLDoc;
        find.selectors = jQuery3.expr;
        find.support = jQuery3.support;
        find.uniqueSort = jQuery3.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery3(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery3.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery3.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery3.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery3.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery3.filter(qualifier, elements, not);
      }
      jQuery3.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery3.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery3.find.matches(expr, jQuery3.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery3.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery3(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery3.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery3.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery3.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery3(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery3.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery3 ? context[0] : context;
              jQuery3.merge(this, jQuery3.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery3.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery3)
          );
        }
        return jQuery3.makeArray(selector, this);
      };
      init.prototype = jQuery3.fn;
      rootjQuery = jQuery3(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery3.fn.extend({
        has: function(target) {
          var targets = jQuery3(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery3.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery3(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery3.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery3.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery3(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery3.uniqueSort(
              jQuery3.merge(this.get(), jQuery3(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery3.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery3.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery3.fn[name] = function(until, selector) {
          var matched = jQuery3.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery3.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery3.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery3.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery3.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery3.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery3.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery3.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery3.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery3.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery3.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery3.Callbacks("memory"),
              jQuery3.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery3.Callbacks("once memory"),
              jQuery3.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery3.Callbacks("once memory"),
              jQuery3.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery3.Deferred(function(newDefer) {
                jQuery3.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery3.Deferred.exceptionHook) {
                        jQuery3.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery3.Deferred.getErrorHook) {
                      process.error = jQuery3.Deferred.getErrorHook();
                    } else if (jQuery3.Deferred.getStackHook) {
                      process.error = jQuery3.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery3.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery3.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery3.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery3.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery3.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery3.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery3.Deferred();
      jQuery3.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery3.readyException(error);
        });
        return this;
      };
      jQuery3.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery3.readyWait : jQuery3.isReady) {
            return;
          }
          jQuery3.isReady = true;
          if (wait !== true && --jQuery3.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery3]);
        }
      });
      jQuery3.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery3.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery3.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery3(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery3.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery3.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery3.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery3.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery3.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery3.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery3.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery3.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery3._queueHooks(elem, type), next = function() {
            jQuery3.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery3.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery3.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery3.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery3.queue(this, type, data);
            jQuery3._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery3.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery3.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery3.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery3.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery3.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery3.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery3.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery3.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery3.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery3.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery3.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery3.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery3.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery3.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery3(this).show();
            } else {
              jQuery3(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery3.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery3.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery3.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery3.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery3.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery3().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery3.guid++);
        }
        return elem.each(function() {
          jQuery3.event.add(this, types, fn, data, selector);
        });
      }
      jQuery3.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery3.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery3.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery3 !== "undefined" && jQuery3.event.triggered !== e.type ? jQuery3.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery3.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery3.event.special[type] || {};
            handleObj = jQuery3.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery3.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery3.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery3.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery3.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery3.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery3.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery3.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery3.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery3.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery3.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery3(sel, this).index(cur) > -1 : jQuery3.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery3.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery3.expando] ? originalEvent : new jQuery3.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery3.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery3.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery3.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery3.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery3.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery3.Event = function(src, props) {
        if (!(this instanceof jQuery3.Event)) {
          return new jQuery3.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery3.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery3.expando] = true;
      };
      jQuery3.Event.prototype = {
        constructor: jQuery3.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery3.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery3.event.addProp);
      jQuery3.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery3.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery3.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery3.event.fix(nativeEvent)
            );
          }
        }
        jQuery3.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery3.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery3.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery3.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery3.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery3.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery3(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery3.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery3(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery3.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery3.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery3.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery3.clone(node, true, true);
                if (hasScripts) {
                  jQuery3.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery3.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery3.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery3._evalUrl && !node.noModule) {
                      jQuery3._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery3.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery3.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery3.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery3.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery3.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery3.event.remove(elem, type);
                    } else {
                      jQuery3.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery3.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery3.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery3.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery3.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery3.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery3.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery3.inArray(this, ignored) < 0) {
              jQuery3.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery3.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery3.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery3(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery3(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery3.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery3.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery3.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery3.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery3.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery3.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery3.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery3.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery3.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery3.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery3.cssHooks[name] || jQuery3.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery3.each(["height", "width"], function(_i, dimension) {
        jQuery3.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery3.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery3.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery3.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery3.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery3.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery3.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery3.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery3.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery3.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery3.style(elem, name2, value2) : jQuery3.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery3.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery3.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery3.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery3.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery3.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery3.fx.step[tween.prop]) {
              jQuery3.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery3.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery3.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery3.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery3.fx = Tween.prototype.init;
      jQuery3.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery3.fx.interval);
          }
          jQuery3.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery3._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery3.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery3.style(elem, prop);
          }
        }
        propTween = !jQuery3.isEmptyObject(props);
        if (!propTween && jQuery3.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery3.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery3.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery3.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery3.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery3.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery3.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery3.extend({}, properties),
          opts: jQuery3.extend(true, {
            specialEasing: {},
            easing: jQuery3.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery3.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery3._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery3.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery3.fx.timer(
          jQuery3.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery3.Animation = jQuery3.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery3.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery3.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery3.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery3.fx.speeds) {
              opt.duration = jQuery3.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery3.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery3.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery3.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery3.isEmptyObject(prop), optall = jQuery3.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery3.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery3.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery3.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery3.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery3.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery3.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery3.fn[name];
        jQuery3.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery3.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery3.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery3.timers = [];
      jQuery3.fx.tick = function() {
        var timer, i = 0, timers = jQuery3.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery3.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery3.fx.timer = function(timer) {
        jQuery3.timers.push(timer);
        jQuery3.fx.start();
      };
      jQuery3.fx.interval = 13;
      jQuery3.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery3.fx.stop = function() {
        inProgress = null;
      };
      jQuery3.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery3.fn.delay = function(time, type) {
        time = jQuery3.fx ? jQuery3.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery3.expr.attrHandle;
      jQuery3.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery3.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery3.removeAttr(this, name);
          });
        }
      });
      jQuery3.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery3.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
            hooks = jQuery3.attrHooks[name.toLowerCase()] || (jQuery3.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery3.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery3.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery3.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery3.each(jQuery3.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery3.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery3.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery3.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery3.propFix[name] || name];
          });
        }
      });
      jQuery3.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery3.isXMLDoc(elem)) {
            name = jQuery3.propFix[name] || name;
            hooks = jQuery3.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery3.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery3.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery3.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery3.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery3.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery3(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery3(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery3(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self = jQuery3(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery3.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery3.valHooks[elem.type] || jQuery3.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery3(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery3.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery3.valHooks[this.type] || jQuery3.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery3.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery3.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery3.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery3(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery3.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery3.inArray(jQuery3.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery3.each(["radio", "checkbox"], function() {
        jQuery3.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery3.inArray(jQuery3(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery3.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location2 = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery3.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery3.error("Invalid XML: " + (parserErrorElem ? jQuery3.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery3.extend(jQuery3.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery3.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery3.expando] ? event : new jQuery3.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery3.makeArray(data, [event]);
          special = jQuery3.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery3.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery3.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery3.extend(
            new jQuery3.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery3.event.trigger(e, null, elem);
        }
      });
      jQuery3.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery3.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery3.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery3.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery3.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery3.isPlainObject(a)) {
          jQuery3.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery3.fn.extend({
        serialize: function() {
          return jQuery3.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery3.prop(this, "elements");
            return elements ? jQuery3.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery3(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery3(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery3.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery3.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery3.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery3.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery3.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery3.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery3.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery3.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery3.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery3(callbackContext) : jQuery3.event, deferred = jQuery3.Deferred(), completeDeferred = jQuery3.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery3.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery3.event && s.global;
          if (fireGlobals && jQuery3.active++ === 0) {
            jQuery3.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery3.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery3.lastModified[cacheURL]);
            }
            if (jQuery3.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery3.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery3.inArray("script", s.dataTypes) > -1 && jQuery3.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery3.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery3.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery3.active) {
                jQuery3.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery3.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery3.get(url, void 0, callback, "script");
        }
      });
      jQuery3.each(["get", "post"], function(_i, method) {
        jQuery3[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery3.ajax(jQuery3.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery3.isPlainObject(url) && url));
        };
      });
      jQuery3.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery3._evalUrl = function(url, options, doc) {
        return jQuery3.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery3.globalEval(response, options, doc);
          }
        });
      };
      jQuery3.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery3(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery3(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery3(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery3(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery3(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery3.expr.pseudos.hidden = function(elem) {
        return !jQuery3.expr.pseudos.visible(elem);
      };
      jQuery3.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery3.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery3.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery3.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery3.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery3.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery3.globalEval(text);
            return text;
          }
        }
      });
      jQuery3.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery3.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery3("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery3.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery3.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery3.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery3.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery3(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery3.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery3(scripts).remove();
        }
        return jQuery3.merge([], parsed.childNodes);
      };
      jQuery3.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery3.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery3("<div>").append(jQuery3.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery3.expr.pseudos.animated = function(elem) {
        return jQuery3.grep(jQuery3.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery3.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery3.css(elem, "position"), curElem = jQuery3(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery3.css(elem, "top");
          curCSSLeft = jQuery3.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery3.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery3.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery3.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery3.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery3.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery3(offsetParent).offset();
              parentOffset.top += jQuery3.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery3.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery3.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery3.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery3.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery3.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery3.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery3.each(["top", "left"], function(_i, prop) {
        jQuery3.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery3(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery3.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery3.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery3.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery3.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery3.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery3.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery3.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery3.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery3.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery3.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery3.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery3.guid++;
        return proxy;
      };
      jQuery3.holdReady = function(hold) {
        if (hold) {
          jQuery3.readyWait++;
        } else {
          jQuery3.ready(true);
        }
      };
      jQuery3.isArray = Array.isArray;
      jQuery3.parseJSON = JSON.parse;
      jQuery3.nodeName = nodeName;
      jQuery3.isFunction = isFunction;
      jQuery3.isWindow = isWindow;
      jQuery3.camelCase = camelCase;
      jQuery3.type = toType;
      jQuery3.now = Date.now;
      jQuery3.isNumeric = function(obj) {
        var type = jQuery3.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery3.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery3;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery3.noConflict = function(deep) {
        if (window2.$ === jQuery3) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery3) {
          window2.jQuery = _jQuery;
        }
        return jQuery3;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery3;
      }
      return jQuery3;
    });
  }
});

// node_modules/datatables.net-dt/js/dataTables.dataTables.mjs
var import_jquery2 = __toESM(require_jquery(), 1);

// node_modules/datatables.net/js/dataTables.mjs
var import_jquery = __toESM(require_jquery(), 1);
var $ = import_jquery.default;
var DataTable = function(selector, options) {
  if (DataTable.factory(selector, options)) {
    return DataTable;
  }
  if (this instanceof DataTable) {
    return $(selector).DataTable(options);
  } else {
    options = selector;
  }
  var _that = this;
  var emptyInit = options === void 0;
  var len = this.length;
  if (emptyInit) {
    options = {};
  }
  this.api = function() {
    return new _Api(this);
  };
  this.each(function() {
    var o = {};
    var oInit = len > 1 ? (
      // optimisation for single table case
      _fnExtend(o, options, true)
    ) : options;
    var i = 0, iLen;
    var sId = this.getAttribute("id");
    var defaults = DataTable.defaults;
    var $this = $(this);
    if (this.nodeName.toLowerCase() != "table") {
      _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
      return;
    }
    $(this).trigger("options.dt", oInit);
    _fnCompatOpts(defaults);
    _fnCompatCols(defaults.column);
    _fnCamelToHungarian(defaults, defaults, true);
    _fnCamelToHungarian(defaults.column, defaults.column, true);
    _fnCamelToHungarian(defaults, $.extend(oInit, $this.data()), true);
    var allSettings = DataTable.settings;
    for (i = 0, iLen = allSettings.length; i < iLen; i++) {
      var s = allSettings[i];
      if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
        var bRetrieve = oInit.bRetrieve !== void 0 ? oInit.bRetrieve : defaults.bRetrieve;
        var bDestroy = oInit.bDestroy !== void 0 ? oInit.bDestroy : defaults.bDestroy;
        if (emptyInit || bRetrieve) {
          return s.oInstance;
        } else if (bDestroy) {
          new DataTable.Api(s).destroy();
          break;
        } else {
          _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
          return;
        }
      }
      if (s.sTableId == this.id) {
        allSettings.splice(i, 1);
        break;
      }
    }
    if (sId === null || sId === "") {
      sId = "DataTables_Table_" + DataTable.ext._unique++;
      this.id = sId;
    }
    var oSettings = $.extend(true, {}, DataTable.models.oSettings, {
      "sDestroyWidth": $this[0].style.width,
      "sInstance": sId,
      "sTableId": sId,
      colgroup: $("<colgroup>").prependTo(this),
      fastData: function(row, column, type) {
        return _fnGetCellData(oSettings, row, column, type);
      }
    });
    oSettings.nTable = this;
    oSettings.oInit = oInit;
    allSettings.push(oSettings);
    oSettings.api = new _Api(oSettings);
    oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
    _fnCompatOpts(oInit);
    if (oInit.aLengthMenu && !oInit.iDisplayLength) {
      oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : $.isPlainObject(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0].value : oInit.aLengthMenu[0];
    }
    oInit = _fnExtend($.extend(true, {}, defaults), oInit);
    _fnMap(oSettings.oFeatures, oInit, [
      "bPaginate",
      "bLengthChange",
      "bFilter",
      "bSort",
      "bSortMulti",
      "bInfo",
      "bProcessing",
      "bAutoWidth",
      "bSortClasses",
      "bServerSide",
      "bDeferRender"
    ]);
    _fnMap(oSettings, oInit, [
      "ajax",
      "fnFormatNumber",
      "sServerMethod",
      "aaSorting",
      "aaSortingFixed",
      "aLengthMenu",
      "sPaginationType",
      "iStateDuration",
      "bSortCellsTop",
      "iTabIndex",
      "sDom",
      "fnStateLoadCallback",
      "fnStateSaveCallback",
      "renderer",
      "searchDelay",
      "rowId",
      "caption",
      "layout",
      "orderDescReverse",
      "typeDetect",
      ["iCookieDuration", "iStateDuration"],
      // backwards compat
      ["oSearch", "oPreviousSearch"],
      ["aoSearchCols", "aoPreSearchCols"],
      ["iDisplayLength", "_iDisplayLength"]
    ]);
    _fnMap(oSettings.oScroll, oInit, [
      ["sScrollX", "sX"],
      ["sScrollXInner", "sXInner"],
      ["sScrollY", "sY"],
      ["bScrollCollapse", "bCollapse"]
    ]);
    _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
    _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback);
    _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams);
    _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams);
    _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded);
    _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback);
    _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow);
    _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback);
    _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback);
    _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete);
    _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback);
    oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
    _fnBrowserDetect(oSettings);
    var oClasses = oSettings.oClasses;
    $.extend(oClasses, DataTable.ext.classes, oInit.oClasses);
    $this.addClass(oClasses.table);
    if (!oSettings.oFeatures.bPaginate) {
      oInit.iDisplayStart = 0;
    }
    if (oSettings.iInitDisplayStart === void 0) {
      oSettings.iInitDisplayStart = oInit.iDisplayStart;
      oSettings._iDisplayStart = oInit.iDisplayStart;
    }
    var defer = oInit.iDeferLoading;
    if (defer !== null) {
      oSettings.deferLoading = true;
      var tmp = Array.isArray(defer);
      oSettings._iRecordsDisplay = tmp ? defer[0] : defer;
      oSettings._iRecordsTotal = tmp ? defer[1] : defer;
    }
    var columnsInit = [];
    var thead = this.getElementsByTagName("thead");
    var initHeaderLayout = _fnDetectHeader(oSettings, thead[0]);
    if (oInit.aoColumns) {
      columnsInit = oInit.aoColumns;
    } else if (initHeaderLayout.length) {
      for (i = 0, iLen = initHeaderLayout[0].length; i < iLen; i++) {
        columnsInit.push(null);
      }
    }
    for (i = 0, iLen = columnsInit.length; i < iLen; i++) {
      _fnAddColumn(oSettings);
    }
    _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, columnsInit, initHeaderLayout, function(iCol, oDef) {
      _fnColumnOptions(oSettings, iCol, oDef);
    });
    var rowOne = $this.children("tbody").find("tr").eq(0);
    if (rowOne.length) {
      var a = function(cell, name) {
        return cell.getAttribute("data-" + name) !== null ? name : null;
      };
      $(rowOne[0]).children("th, td").each(function(i2, cell) {
        var col = oSettings.aoColumns[i2];
        if (!col) {
          _fnLog(oSettings, 0, "Incorrect column count", 18);
        }
        if (col.mData === i2) {
          var sort = a(cell, "sort") || a(cell, "order");
          var filter = a(cell, "filter") || a(cell, "search");
          if (sort !== null || filter !== null) {
            col.mData = {
              _: i2 + ".display",
              sort: sort !== null ? i2 + ".@data-" + sort : void 0,
              type: sort !== null ? i2 + ".@data-" + sort : void 0,
              filter: filter !== null ? i2 + ".@data-" + filter : void 0
            };
            col._isArrayHost = true;
            _fnColumnOptions(oSettings, i2);
          }
        }
      });
    }
    _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState);
    var features = oSettings.oFeatures;
    if (oInit.bStateSave) {
      features.bStateSave = true;
    }
    if (oInit.aaSorting === void 0) {
      var sorting = oSettings.aaSorting;
      for (i = 0, iLen = sorting.length; i < iLen; i++) {
        sorting[i][1] = oSettings.aoColumns[i].asSorting[0];
      }
    }
    _fnSortingClasses(oSettings);
    _fnCallbackReg(oSettings, "aoDrawCallback", function() {
      if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
        _fnSortingClasses(oSettings);
      }
    });
    var caption = $this.children("caption");
    if (oSettings.caption) {
      if (caption.length === 0) {
        caption = $("<caption/>").appendTo($this);
      }
      caption.html(oSettings.caption);
    }
    if (caption.length) {
      caption[0]._captionSide = caption.css("caption-side");
      oSettings.captionNode = caption[0];
    }
    if (thead.length === 0) {
      thead = $("<thead/>").appendTo($this);
    }
    oSettings.nTHead = thead[0];
    $("tr", thead).addClass(oClasses.thead.row);
    var tbody = $this.children("tbody");
    if (tbody.length === 0) {
      tbody = $("<tbody/>").insertAfter(thead);
    }
    oSettings.nTBody = tbody[0];
    var tfoot = $this.children("tfoot");
    if (tfoot.length === 0) {
      tfoot = $("<tfoot/>").appendTo($this);
    }
    oSettings.nTFoot = tfoot[0];
    $("tr", tfoot).addClass(oClasses.tfoot.row);
    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
    oSettings.bInitialised = true;
    var oLanguage = oSettings.oLanguage;
    $.extend(true, oLanguage, oInit.oLanguage);
    if (oLanguage.sUrl) {
      $.ajax({
        dataType: "json",
        url: oLanguage.sUrl,
        success: function(json) {
          _fnCamelToHungarian(defaults.oLanguage, json);
          $.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
          _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
          _fnInitialise(oSettings);
        },
        error: function() {
          _fnLog(oSettings, 0, "i18n file loading error", 21);
          _fnInitialise(oSettings);
        }
      });
    } else {
      _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
      _fnInitialise(oSettings);
    }
  });
  _that = null;
  return this;
};
DataTable.ext = _ext = {
  /**
   * Buttons. For use with the Buttons extension for DataTables. This is
   * defined here so other extensions can define buttons regardless of load
   * order. It is _not_ used by DataTables core.
   *
   *  @type object
   *  @default {}
   */
  buttons: {},
  /**
   * Element class names
   *
   *  @type object
   *  @default {}
   */
  classes: {},
  /**
   * DataTables build type (expanded by the download builder)
   *
   *  @type string
   */
  builder: "-source-",
  /**
   * Error reporting.
   * 
   * How should DataTables report an error. Can take the value 'alert',
   * 'throw', 'none' or a function.
   *
   *  @type string|function
   *  @default alert
   */
  errMode: "alert",
  /**
   * Legacy so v1 plug-ins don't throw js errors on load
   */
  feature: [],
  /**
   * Feature plug-ins.
   * 
   * This is an object of callbacks which provide the features for DataTables
   * to be initialised via the `layout` option.
   */
  features: {},
  /**
   * Row searching.
   * 
   * This method of searching is complimentary to the default type based
   * searching, and a lot more comprehensive as it allows you complete control
   * over the searching logic. Each element in this array is a function
   * (parameters described below) that is called for every row in the table,
   * and your logic decides if it should be included in the searching data set
   * or not.
   *
   * Searching functions have the following input parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{array|object}` Data for the row to be processed (same as the
   *    original format that was passed in as the data source, or an array
   *    from a DOM data source
   * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
   *    can be useful to retrieve the `TR` element if you need DOM interaction.
   *
   * And the following return is expected:
   *
   * * {boolean} Include the row in the searched result set (true) or not
   *   (false)
   *
   * Note that as with the main search ability in DataTables, technically this
   * is "filtering", since it is subtractive. However, for consistency in
   * naming we call it searching here.
   *
   *  @type array
   *  @default []
   *
   *  @example
   *    // The following example shows custom search being applied to the
   *    // fourth column (i.e. the data[3] index) based on two input values
   *    // from the end-user, matching the data in a certain range.
   *    $.fn.dataTable.ext.search.push(
   *      function( settings, data, dataIndex ) {
   *        var min = document.getElementById('min').value * 1;
   *        var max = document.getElementById('max').value * 1;
   *        var version = data[3] == "-" ? 0 : data[3]*1;
   *
   *        if ( min == "" && max == "" ) {
   *          return true;
   *        }
   *        else if ( min == "" && version < max ) {
   *          return true;
   *        }
   *        else if ( min < version && "" == max ) {
   *          return true;
   *        }
   *        else if ( min < version && version < max ) {
   *          return true;
   *        }
   *        return false;
   *      }
   *    );
   */
  search: [],
  /**
   * Selector extensions
   *
   * The `selector` option can be used to extend the options available for the
   * selector modifier options (`selector-modifier` object data type) that
   * each of the three built in selector types offer (row, column and cell +
   * their plural counterparts). For example the Select extension uses this
   * mechanism to provide an option to select only rows, columns and cells
   * that have been marked as selected by the end user (`{selected: true}`),
   * which can be used in conjunction with the existing built in selector
   * options.
   *
   * Each property is an array to which functions can be pushed. The functions
   * take three attributes:
   *
   * * Settings object for the host table
   * * Options object (`selector-modifier` object type)
   * * Array of selected item indexes
   *
   * The return is an array of the resulting item indexes after the custom
   * selector has been applied.
   *
   *  @type object
   */
  selector: {
    cell: [],
    column: [],
    row: []
  },
  /**
   * Legacy configuration options. Enable and disable legacy options that
   * are available in DataTables.
   *
   *  @type object
   */
  legacy: {
    /**
     * Enable / disable DataTables 1.9 compatible server-side processing
     * requests
     *
     *  @type boolean
     *  @default null
     */
    ajax: null
  },
  /**
   * Pagination plug-in methods.
   * 
   * Each entry in this object is a function and defines which buttons should
   * be shown by the pagination rendering method that is used for the table:
   * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
   * buttons are displayed in the document, while the functions here tell it
   * what buttons to display. This is done by returning an array of button
   * descriptions (what each button will do).
   *
   * Pagination types (the four built in options and any additional plug-in
   * options defined here) can be used through the `paginationType`
   * initialisation parameter.
   *
   * The functions defined take two parameters:
   *
   * 1. `{int} page` The current page index
   * 2. `{int} pages` The number of pages in the table
   *
   * Each function is expected to return an array where each element of the
   * array can be one of:
   *
   * * `first` - Jump to first page when activated
   * * `last` - Jump to last page when activated
   * * `previous` - Show previous page when activated
   * * `next` - Show next page when activated
   * * `{int}` - Show page of the index given
   * * `{array}` - A nested array containing the above elements to add a
   *   containing 'DIV' element (might be useful for styling).
   *
   * Note that DataTables v1.9- used this object slightly differently whereby
   * an object with two functions would be defined for each plug-in. That
   * ability is still supported by DataTables 1.10+ to provide backwards
   * compatibility, but this option of use is now decremented and no longer
   * documented in DataTables 1.10+.
   *
   *  @type object
   *  @default {}
   *
   *  @example
   *    // Show previous, next and current page buttons only
   *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
   *      return [ 'previous', page, 'next' ];
   *    };
   */
  pager: {},
  renderer: {
    pageButton: {},
    header: {}
  },
  /**
   * Ordering plug-ins - custom data source
   * 
   * The extension options for ordering of data available here is complimentary
   * to the default type based ordering that DataTables typically uses. It
   * allows much greater control over the the data that is being used to
   * order a column, but is necessarily therefore more complex.
   * 
   * This type of ordering is useful if you want to do ordering based on data
   * live from the DOM (for example the contents of an 'input' element) rather
   * than just the static string that DataTables knows of.
   * 
   * The way these plug-ins work is that you create an array of the values you
   * wish to be ordering for the column in question and then return that
   * array. The data in the array much be in the index order of the rows in
   * the table (not the currently ordering order!). Which order data gathering
   * function is run here depends on the `dt-init columns.orderDataType`
   * parameter that is used for the column (if any).
   *
   * The functions defined take two parameters:
   *
   * 1. `{object}` DataTables settings object: see
   *    {@link DataTable.models.oSettings}
   * 2. `{int}` Target column index
   *
   * Each function is expected to return an array:
   *
   * * `{array}` Data for the column to be ordering upon
   *
   *  @type array
   *
   *  @example
   *    // Ordering using `input` node values
   *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
   *    {
   *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
   *        return $('input', td).val();
   *      } );
   *    }
   */
  order: {},
  /**
   * Type based plug-ins.
   *
   * Each column in DataTables has a type assigned to it, either by automatic
   * detection or by direct assignment using the `type` option for the column.
   * The type of a column will effect how it is ordering and search (plug-ins
   * can also make use of the column type if required).
   *
   * @namespace
   */
  type: {
    /**
     * Automatic column class assignment
     */
    className: {},
    /**
     * Type detection functions.
     *
     * The functions defined in this object are used to automatically detect
     * a column's type, making initialisation of DataTables super easy, even
     * when complex data is in the table.
     *
     * The functions defined take two parameters:
     *
        *  1. `{*}` Data from the column cell to be analysed
        *  2. `{settings}` DataTables settings object. This can be used to
        *     perform context specific type detection - for example detection
        *     based on language settings such as using a comma for a decimal
        *     place. Generally speaking the options from the settings will not
        *     be required
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Data type detected, or null if unknown (and thus
     *   pass it on to the other type detection functions.
     *
     *  @type array
     *
     *  @example
     *    // Currency type detection plug-in:
     *    $.fn.dataTable.ext.type.detect.push(
     *      function ( data, settings ) {
     *        // Check the numeric part
     *        if ( ! data.substring(1).match(/[0-9]/) ) {
     *          return null;
     *        }
     *
     *        // Check prefixed by currency
     *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
     *          return 'currency';
     *        }
     *        return null;
     *      }
     *    );
     */
    detect: [],
    /**
     * Automatic renderer assignment
     */
    render: {},
    /**
     * Type based search formatting.
     *
     * The type based searching functions can be used to pre-format the
     * data to be search on. For example, it can be used to strip HTML
     * tags or to de-format telephone numbers for numeric only searching.
     *
     * Note that is a search is not defined for a column of a given type,
     * no search formatting will be performed.
     * 
     * Pre-processing of searching data plug-ins - When you assign the sType
     * for a column (or have it automatically detected for you by DataTables
     * or a type detection plug-in), you will typically be using this for
     * custom sorting, but it can also be used to provide custom searching
     * by allowing you to pre-processing the data and returning the data in
     * the format that should be searched upon. This is done by adding
     * functions this object with a parameter name which matches the sType
     * for that target column. This is the corollary of <i>afnSortData</i>
     * for searching data.
     *
     * The functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for searching
     *
     * Each function is expected to return:
     *
     * * `{string|null}` Formatted string that will be used for the searching.
     *
     *  @type object
     *  @default {}
     *
     *  @example
     *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
     *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
     *    }
     */
    search: {},
    /**
     * Type based ordering.
     *
     * The column type tells DataTables what ordering to apply to the table
     * when a column is sorted upon. The order for each type that is defined,
     * is defined by the functions available in this object.
     *
     * Each ordering option can be described by three properties added to
     * this object:
     *
     * * `{type}-pre` - Pre-formatting function
     * * `{type}-asc` - Ascending order function
     * * `{type}-desc` - Descending order function
     *
     * All three can be used together, only `{type}-pre` or only
     * `{type}-asc` and `{type}-desc` together. It is generally recommended
     * that only `{type}-pre` is used, as this provides the optimal
     * implementation in terms of speed, although the others are provided
     * for compatibility with existing Javascript sort functions.
     *
     * `{type}-pre`: Functions defined take a single parameter:
     *
        *  1. `{*}` Data from the column cell to be prepared for ordering
     *
     * And return:
     *
     * * `{*}` Data to be sorted upon
     *
     * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
     * functions, taking two parameters:
     *
        *  1. `{*}` Data to compare to the second parameter
        *  2. `{*}` Data to compare to the first parameter
     *
     * And returning:
     *
     * * `{*}` Ordering match: <0 if first parameter should be sorted lower
     *   than the second parameter, ===0 if the two parameters are equal and
     *   >0 if the first parameter should be sorted height than the second
     *   parameter.
     * 
     *  @type object
     *  @default {}
     *
     *  @example
     *    // Numeric ordering of formatted numbers with a pre-formatter
     *    $.extend( $.fn.dataTable.ext.type.order, {
     *      "string-pre": function(x) {
     *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
     *        return parseFloat( a );
     *      }
     *    } );
     *
     *  @example
     *    // Case-sensitive string ordering, with no pre-formatting method
     *    $.extend( $.fn.dataTable.ext.order, {
     *      "string-case-asc": function(x,y) {
     *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     *      },
     *      "string-case-desc": function(x,y) {
     *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
     *      }
     *    } );
     */
    order: {}
  },
  /**
   * Unique DataTables instance counter
   *
   * @type int
   * @private
   */
  _unique: 0,
  //
  // Depreciated
  // The following properties are retained for backwards compatibility only.
  // The should not be used in new projects and will be removed in a future
  // version
  //
  /**
   * Version check function.
   *  @type function
   *  @depreciated Since 1.10
   */
  fnVersionCheck: DataTable.fnVersionCheck,
  /**
   * Index for what 'this' index API functions should use
   *  @type int
   *  @deprecated Since v1.10
   */
  iApiIndex: 0,
  /**
   * Software version
   *  @type string
   *  @deprecated Since v1.10
   */
  sVersion: DataTable.version
};
$.extend(_ext, {
  afnFiltering: _ext.search,
  aTypes: _ext.type.detect,
  ofnSearch: _ext.type.search,
  oSort: _ext.type.order,
  afnSortData: _ext.order,
  aoFeatures: _ext.feature,
  oStdClasses: _ext.classes,
  oPagination: _ext.pager
});
$.extend(DataTable.ext.classes, {
  container: "dt-container",
  empty: {
    row: "dt-empty"
  },
  info: {
    container: "dt-info"
  },
  layout: {
    row: "dt-layout-row",
    cell: "dt-layout-cell",
    tableRow: "dt-layout-table",
    tableCell: "",
    start: "dt-layout-start",
    end: "dt-layout-end",
    full: "dt-layout-full"
  },
  length: {
    container: "dt-length",
    select: "dt-input"
  },
  order: {
    canAsc: "dt-orderable-asc",
    canDesc: "dt-orderable-desc",
    isAsc: "dt-ordering-asc",
    isDesc: "dt-ordering-desc",
    none: "dt-orderable-none",
    position: "sorting_"
  },
  processing: {
    container: "dt-processing"
  },
  scrolling: {
    body: "dt-scroll-body",
    container: "dt-scroll",
    footer: {
      self: "dt-scroll-foot",
      inner: "dt-scroll-footInner"
    },
    header: {
      self: "dt-scroll-head",
      inner: "dt-scroll-headInner"
    }
  },
  search: {
    container: "dt-search",
    input: "dt-input"
  },
  table: "dataTable",
  tbody: {
    cell: "",
    row: ""
  },
  thead: {
    cell: "",
    row: ""
  },
  tfoot: {
    cell: "",
    row: ""
  },
  paging: {
    active: "current",
    button: "dt-paging-button",
    container: "dt-paging",
    disabled: "disabled",
    nav: ""
  }
});
var _ext;
var _Api;
var _api_register;
var _api_registerPlural;
var _re_dic = {};
var _re_new_lines = /[\r\n\u2028]/g;
var _re_html = /<([^>]*>)/g;
var _max_str_len = Math.pow(2, 28);
var _re_date = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/;
var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
var _empty = function(d) {
  return !d || d === true || d === "-" ? true : false;
};
var _intVal = function(s) {
  var integer = parseInt(s, 10);
  return !isNaN(integer) && isFinite(s) ? integer : null;
};
var _numToDecimal = function(num, decimalPoint) {
  if (!_re_dic[decimalPoint]) {
    _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g");
  }
  return typeof num === "string" && decimalPoint !== "." ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num;
};
var _isNumber = function(d, decimalPoint, formatted, allowEmpty) {
  var type = typeof d;
  var strType = type === "string";
  if (type === "number" || type === "bigint") {
    return true;
  }
  if (allowEmpty && _empty(d)) {
    return true;
  }
  if (decimalPoint && strType) {
    d = _numToDecimal(d, decimalPoint);
  }
  if (formatted && strType) {
    d = d.replace(_re_formatted_numeric, "");
  }
  return !isNaN(parseFloat(d)) && isFinite(d);
};
var _isHtml = function(d) {
  return _empty(d) || typeof d === "string";
};
var _htmlNumeric = function(d, decimalPoint, formatted, allowEmpty) {
  if (allowEmpty && _empty(d)) {
    return true;
  }
  if (typeof d === "string" && d.match(/<(input|select)/i)) {
    return null;
  }
  var html = _isHtml(d);
  return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted, allowEmpty) ? true : null;
};
var _pluck = function(a, prop, prop2) {
  var out = [];
  var i = 0, ien = a.length;
  if (prop2 !== void 0) {
    for (; i < ien; i++) {
      if (a[i] && a[i][prop]) {
        out.push(a[i][prop][prop2]);
      }
    }
  } else {
    for (; i < ien; i++) {
      if (a[i]) {
        out.push(a[i][prop]);
      }
    }
  }
  return out;
};
var _pluck_order = function(a, order, prop, prop2) {
  var out = [];
  var i = 0, ien = order.length;
  if (prop2 !== void 0) {
    for (; i < ien; i++) {
      if (a[order[i]] && a[order[i]][prop]) {
        out.push(a[order[i]][prop][prop2]);
      }
    }
  } else {
    for (; i < ien; i++) {
      if (a[order[i]]) {
        out.push(a[order[i]][prop]);
      }
    }
  }
  return out;
};
var _range = function(len, start) {
  var out = [];
  var end;
  if (start === void 0) {
    start = 0;
    end = len;
  } else {
    end = start;
    start = len;
  }
  for (var i = start; i < end; i++) {
    out.push(i);
  }
  return out;
};
var _removeEmpty = function(a) {
  var out = [];
  for (var i = 0, ien = a.length; i < ien; i++) {
    if (a[i]) {
      out.push(a[i]);
    }
  }
  return out;
};
var _stripHtml = function(input) {
  if (!input || typeof input !== "string") {
    return input;
  }
  if (input.length > _max_str_len) {
    throw new Error("Exceeded max str len");
  }
  var previous;
  input = input.replace(_re_html, "");
  do {
    previous = input;
    input = input.replace(/<script/i, "");
  } while (input !== previous);
  return previous;
};
var _escapeHtml = function(d) {
  if (Array.isArray(d)) {
    d = d.join(",");
  }
  return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d;
};
var _normalize = function(str, both) {
  if (typeof str !== "string") {
    return str;
  }
  var res = str.normalize ? str.normalize("NFD") : str;
  return res.length !== str.length ? (both === true ? str + " " : "") + res.replace(/[\u0300-\u036f]/g, "") : res;
};
var _areAllUnique = function(src) {
  if (src.length < 2) {
    return true;
  }
  var sorted = src.slice().sort();
  var last = sorted[0];
  for (var i = 1, ien = sorted.length; i < ien; i++) {
    if (sorted[i] === last) {
      return false;
    }
    last = sorted[i];
  }
  return true;
};
var _unique = function(src) {
  if (Array.from && Set) {
    return Array.from(new Set(src));
  }
  if (_areAllUnique(src)) {
    return src.slice();
  }
  var out = [], val, i, ien = src.length, j, k = 0;
  again:
    for (i = 0; i < ien; i++) {
      val = src[i];
      for (j = 0; j < k; j++) {
        if (out[j] === val) {
          continue again;
        }
      }
      out.push(val);
      k++;
    }
  return out;
};
var _flatten = function(out, val) {
  if (Array.isArray(val)) {
    for (var i = 0; i < val.length; i++) {
      _flatten(out, val[i]);
    }
  } else {
    out.push(val);
  }
  return out;
};
function _addClass(el, name) {
  if (name) {
    name.split(" ").forEach(function(n) {
      if (n) {
        el.classList.add(n);
      }
    });
  }
}
DataTable.util = {
  /**
   * Return a string with diacritic characters decomposed
   * @param {*} mixed Function or string to normalize
   * @param {*} both Return original string and the normalized string
   * @returns String or undefined
   */
  diacritics: function(mixed, both) {
    var type = typeof mixed;
    if (type !== "function") {
      return _normalize(mixed, both);
    }
    _normalize = mixed;
  },
  /**
   * Debounce a function
   *
   * @param {function} fn Function to be called
   * @param {integer} freq Call frequency in mS
   * @return {function} Wrapped function
   */
  debounce: function(fn, timeout) {
    var timer;
    return function() {
      var that = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(that, args);
      }, timeout || 250);
    };
  },
  /**
   * Throttle the calls to a function. Arguments and context are maintained
   * for the throttled function.
   *
   * @param {function} fn Function to be called
   * @param {integer} freq Call frequency in mS
   * @return {function} Wrapped function
   */
  throttle: function(fn, freq) {
    var frequency = freq !== void 0 ? freq : 200, last, timer;
    return function() {
      var that = this, now = +/* @__PURE__ */ new Date(), args = arguments;
      if (last && now < last + frequency) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          last = void 0;
          fn.apply(that, args);
        }, frequency);
      } else {
        last = now;
        fn.apply(that, args);
      }
    };
  },
  /**
   * Escape a string such that it can be used in a regular expression
   *
   *  @param {string} val string to escape
   *  @returns {string} escaped string
   */
  escapeRegex: function(val) {
    return val.replace(_re_escape_regex, "\\$1");
  },
  /**
   * Create a function that will write to a nested object or array
   * @param {*} source JSON notation string
   * @returns Write function
   */
  set: function(source) {
    if ($.isPlainObject(source)) {
      return DataTable.util.set(source._);
    } else if (source === null) {
      return function() {
      };
    } else if (typeof source === "function") {
      return function(data, val, meta) {
        source(data, "set", val, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var setData = function(data, val, src) {
        var a = _fnSplitObjNotation(src), b;
        var aLast = a[a.length - 1];
        var arrayNotation, funcNotation, o, innerSrc;
        for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
          if (a[i] === "__proto__" || a[i] === "constructor") {
            throw new Error("Cannot set prototype values");
          }
          arrayNotation = a[i].match(__reArray);
          funcNotation = a[i].match(__reFn);
          if (arrayNotation) {
            a[i] = a[i].replace(__reArray, "");
            data[a[i]] = [];
            b = a.slice();
            b.splice(0, i + 1);
            innerSrc = b.join(".");
            if (Array.isArray(val)) {
              for (var j = 0, jLen = val.length; j < jLen; j++) {
                o = {};
                setData(o, val[j], innerSrc);
                data[a[i]].push(o);
              }
            } else {
              data[a[i]] = val;
            }
            return;
          } else if (funcNotation) {
            a[i] = a[i].replace(__reFn, "");
            data = data[a[i]](val);
          }
          if (data[a[i]] === null || data[a[i]] === void 0) {
            data[a[i]] = {};
          }
          data = data[a[i]];
        }
        if (aLast.match(__reFn)) {
          data = data[aLast.replace(__reFn, "")](val);
        } else {
          data[aLast.replace(__reArray, "")] = val;
        }
      };
      return function(data, val) {
        return setData(data, val, source);
      };
    } else {
      return function(data, val) {
        data[source] = val;
      };
    }
  },
  /**
   * Create a function that will read nested objects from arrays, based on JSON notation
   * @param {*} source JSON notation string
   * @returns Value read
   */
  get: function(source) {
    if ($.isPlainObject(source)) {
      var o = {};
      $.each(source, function(key, val) {
        if (val) {
          o[key] = DataTable.util.get(val);
        }
      });
      return function(data, type, row, meta) {
        var t = o[type] || o._;
        return t !== void 0 ? t(data, type, row, meta) : data;
      };
    } else if (source === null) {
      return function(data) {
        return data;
      };
    } else if (typeof source === "function") {
      return function(data, type, row, meta) {
        return source(data, type, row, meta);
      };
    } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
      var fetchData = function(data, type, src) {
        var arrayNotation, funcNotation, out, innerSrc;
        if (src !== "") {
          var a = _fnSplitObjNotation(src);
          for (var i = 0, iLen = a.length; i < iLen; i++) {
            arrayNotation = a[i].match(__reArray);
            funcNotation = a[i].match(__reFn);
            if (arrayNotation) {
              a[i] = a[i].replace(__reArray, "");
              if (a[i] !== "") {
                data = data[a[i]];
              }
              out = [];
              a.splice(0, i + 1);
              innerSrc = a.join(".");
              if (Array.isArray(data)) {
                for (var j = 0, jLen = data.length; j < jLen; j++) {
                  out.push(fetchData(data[j], type, innerSrc));
                }
              }
              var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
              data = join === "" ? out : out.join(join);
              break;
            } else if (funcNotation) {
              a[i] = a[i].replace(__reFn, "");
              data = data[a[i]]();
              continue;
            }
            if (data === null || data[a[i]] === null) {
              return null;
            } else if (data === void 0 || data[a[i]] === void 0) {
              return void 0;
            }
            data = data[a[i]];
          }
        }
        return data;
      };
      return function(data, type) {
        return fetchData(data, type, source);
      };
    } else {
      return function(data) {
        return data[source];
      };
    }
  },
  stripHtml: function(mixed) {
    var type = typeof mixed;
    if (type === "function") {
      _stripHtml = mixed;
      return;
    } else if (type === "string") {
      return _stripHtml(mixed);
    }
    return mixed;
  },
  escapeHtml: function(mixed) {
    var type = typeof mixed;
    if (type === "function") {
      _escapeHtml = mixed;
      return;
    } else if (type === "string" || Array.isArray(mixed)) {
      return _escapeHtml(mixed);
    }
    return mixed;
  },
  unique: _unique
};
function _fnHungarianMap(o) {
  var hungarian = "a aa ai ao as b fn i m o s ", match, newKey, map = {};
  $.each(o, function(key) {
    match = key.match(/^([^A-Z]+?)([A-Z])/);
    if (match && hungarian.indexOf(match[1] + " ") !== -1) {
      newKey = key.replace(match[0], match[2].toLowerCase());
      map[newKey] = key;
      if (match[1] === "o") {
        _fnHungarianMap(o[key]);
      }
    }
  });
  o._hungarianMap = map;
}
function _fnCamelToHungarian(src, user, force) {
  if (!src._hungarianMap) {
    _fnHungarianMap(src);
  }
  var hungarianKey;
  $.each(user, function(key) {
    hungarianKey = src._hungarianMap[key];
    if (hungarianKey !== void 0 && (force || user[hungarianKey] === void 0)) {
      if (hungarianKey.charAt(0) === "o") {
        if (!user[hungarianKey]) {
          user[hungarianKey] = {};
        }
        $.extend(true, user[hungarianKey], user[key]);
        _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
      } else {
        user[hungarianKey] = user[key];
      }
    }
  });
}
var _fnCompatMap = function(o, knew, old) {
  if (o[knew] !== void 0) {
    o[old] = o[knew];
  }
};
function _fnCompatOpts(init) {
  _fnCompatMap(init, "ordering", "bSort");
  _fnCompatMap(init, "orderMulti", "bSortMulti");
  _fnCompatMap(init, "orderClasses", "bSortClasses");
  _fnCompatMap(init, "orderCellsTop", "bSortCellsTop");
  _fnCompatMap(init, "order", "aaSorting");
  _fnCompatMap(init, "orderFixed", "aaSortingFixed");
  _fnCompatMap(init, "paging", "bPaginate");
  _fnCompatMap(init, "pagingType", "sPaginationType");
  _fnCompatMap(init, "pageLength", "iDisplayLength");
  _fnCompatMap(init, "searching", "bFilter");
  if (typeof init.sScrollX === "boolean") {
    init.sScrollX = init.sScrollX ? "100%" : "";
  }
  if (typeof init.scrollX === "boolean") {
    init.scrollX = init.scrollX ? "100%" : "";
  }
  var searchCols = init.aoSearchCols;
  if (searchCols) {
    for (var i = 0, ien = searchCols.length; i < ien; i++) {
      if (searchCols[i]) {
        _fnCamelToHungarian(DataTable.models.oSearch, searchCols[i]);
      }
    }
  }
  if (init.serverSide && !init.searchDelay) {
    init.searchDelay = 400;
  }
}
function _fnCompatCols(init) {
  _fnCompatMap(init, "orderable", "bSortable");
  _fnCompatMap(init, "orderData", "aDataSort");
  _fnCompatMap(init, "orderSequence", "asSorting");
  _fnCompatMap(init, "orderDataType", "sortDataType");
  var dataSort = init.aDataSort;
  if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
    init.aDataSort = [dataSort];
  }
}
function _fnBrowserDetect(settings) {
  if (!DataTable.__browser) {
    var browser = {};
    DataTable.__browser = browser;
    var n = $("<div/>").css({
      position: "fixed",
      top: 0,
      left: -1 * window.pageXOffset,
      // allow for scrolling
      height: 1,
      width: 1,
      overflow: "hidden"
    }).append(
      $("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(
        $("<div/>").css({
          width: "100%",
          height: 10
        })
      )
    ).appendTo("body");
    var outer = n.children();
    var inner = outer.children();
    browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
    browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
    n.remove();
  }
  $.extend(settings.oBrowser, DataTable.__browser);
  settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
}
function _fnAddColumn(oSettings) {
  var oDefaults = DataTable.defaults.column;
  var iCol = oSettings.aoColumns.length;
  var oCol = $.extend({}, DataTable.models.oColumn, oDefaults, {
    "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
    "mData": oDefaults.mData ? oDefaults.mData : iCol,
    idx: iCol,
    searchFixed: {},
    colEl: $("<col>").attr("data-dt-column", iCol)
  });
  oSettings.aoColumns.push(oCol);
  var searchCols = oSettings.aoPreSearchCols;
  searchCols[iCol] = $.extend({}, DataTable.models.oSearch, searchCols[iCol]);
}
function _fnColumnOptions(oSettings, iCol, oOptions) {
  var oCol = oSettings.aoColumns[iCol];
  if (oOptions !== void 0 && oOptions !== null) {
    _fnCompatCols(oOptions);
    _fnCamelToHungarian(DataTable.defaults.column, oOptions, true);
    if (oOptions.mDataProp !== void 0 && !oOptions.mData) {
      oOptions.mData = oOptions.mDataProp;
    }
    if (oOptions.sType) {
      oCol._sManualType = oOptions.sType;
    }
    if (oOptions.className && !oOptions.sClass) {
      oOptions.sClass = oOptions.className;
    }
    var origClass = oCol.sClass;
    $.extend(oCol, oOptions);
    _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
    if (origClass !== oCol.sClass) {
      oCol.sClass = origClass + " " + oCol.sClass;
    }
    if (oOptions.iDataSort !== void 0) {
      oCol.aDataSort = [oOptions.iDataSort];
    }
    _fnMap(oCol, oOptions, "aDataSort");
  }
  var mDataSrc = oCol.mData;
  var mData = _fnGetObjectDataFn(mDataSrc);
  if (oCol.mRender && Array.isArray(oCol.mRender)) {
    var copy = oCol.mRender.slice();
    var name = copy.shift();
    oCol.mRender = DataTable.render[name].apply(window, copy);
  }
  oCol._render = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
  var attrTest = function(src) {
    return typeof src === "string" && src.indexOf("@") !== -1;
  };
  oCol._bAttrSrc = $.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
  oCol._setter = null;
  oCol.fnGetData = function(rowData, type, meta) {
    var innerData = mData(rowData, type, void 0, meta);
    return oCol._render && type ? oCol._render(innerData, type, rowData, meta) : innerData;
  };
  oCol.fnSetData = function(rowData, val, meta) {
    return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
  };
  if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
    oSettings._rowReadObject = true;
  }
  if (!oSettings.oFeatures.bSort) {
    oCol.bSortable = false;
  }
}
function _fnAdjustColumnSizing(settings) {
  _fnCalculateColumnWidths(settings);
  _fnColumnSizes(settings);
  var scroll = settings.oScroll;
  if (scroll.sY !== "" || scroll.sX !== "") {
    _fnScrollDraw(settings);
  }
  _fnCallbackFire(settings, null, "column-sizing", [settings]);
}
function _fnColumnSizes(settings) {
  var cols = settings.aoColumns;
  for (var i = 0; i < cols.length; i++) {
    var width = _fnColumnsSumWidth(settings, [i], false, false);
    cols[i].colEl.css("width", width);
  }
}
function _fnVisibleToColumnIndex(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null;
}
function _fnColumnIndexToVisible(oSettings, iMatch) {
  var aiVis = _fnGetColumns(oSettings, "bVisible");
  var iPos = aiVis.indexOf(iMatch);
  return iPos !== -1 ? iPos : null;
}
function _fnVisbleColumns(settings) {
  var layout = settings.aoHeader;
  var columns = settings.aoColumns;
  var vis = 0;
  if (layout.length) {
    for (var i = 0, ien = layout[0].length; i < ien; i++) {
      if (columns[i].bVisible && $(layout[0][i].cell).css("display") !== "none") {
        vis++;
      }
    }
  }
  return vis;
}
function _fnGetColumns(oSettings, sParam) {
  var a = [];
  oSettings.aoColumns.map(function(val, i) {
    if (val[sParam]) {
      a.push(i);
    }
  });
  return a;
}
function _typeResult(typeDetect, res) {
  return res === true ? typeDetect._name : res;
}
function _fnColumnTypes(settings) {
  var columns = settings.aoColumns;
  var data = settings.aoData;
  var types = DataTable.ext.type.detect;
  var i, ien, j, jen, k, ken;
  var col, detectedType, cache;
  for (i = 0, ien = columns.length; i < ien; i++) {
    col = columns[i];
    cache = [];
    if (!col.sType && col._sManualType) {
      col.sType = col._sManualType;
    } else if (!col.sType) {
      if (!settings.typeDetect) {
        return;
      }
      for (j = 0, jen = types.length; j < jen; j++) {
        var typeDetect = types[j];
        var oneOf = typeDetect.oneOf;
        var allOf = typeDetect.allOf || typeDetect;
        var init = typeDetect.init;
        var one = false;
        detectedType = null;
        if (init) {
          detectedType = _typeResult(typeDetect, init(settings, col, i));
          if (detectedType) {
            col.sType = detectedType;
            break;
          }
        }
        for (k = 0, ken = data.length; k < ken; k++) {
          if (!data[k]) {
            continue;
          }
          if (cache[k] === void 0) {
            cache[k] = _fnGetCellData(settings, k, i, "type");
          }
          if (oneOf && !one) {
            one = _typeResult(typeDetect, oneOf(cache[k], settings));
          }
          detectedType = _typeResult(typeDetect, allOf(cache[k], settings));
          if (!detectedType && j !== types.length - 3) {
            break;
          }
          if (detectedType === "html" && !_empty(cache[k])) {
            break;
          }
        }
        if (oneOf && one && detectedType || !oneOf && detectedType) {
          col.sType = detectedType;
          break;
        }
      }
      if (!col.sType) {
        col.sType = "string";
      }
    }
    var autoClass = _ext.type.className[col.sType];
    if (autoClass) {
      _columnAutoClass(settings.aoHeader, i, autoClass);
      _columnAutoClass(settings.aoFooter, i, autoClass);
    }
    var renderer = _ext.type.render[col.sType];
    if (renderer && !col._render) {
      col._render = DataTable.util.get(renderer);
      _columnAutoRender(settings, i);
    }
  }
}
function _columnAutoRender(settings, colIdx) {
  var data = settings.aoData;
  for (var i = 0; i < data.length; i++) {
    if (data[i].nTr) {
      var display = _fnGetCellData(settings, i, colIdx, "display");
      data[i].displayData[colIdx] = display;
      _fnWriteCell(data[i].anCells[colIdx], display);
    }
  }
}
function _columnAutoClass(container, colIdx, className) {
  container.forEach(function(row) {
    if (row[colIdx] && row[colIdx].unique) {
      _addClass(row[colIdx].cell, className);
    }
  });
}
function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, headerLayout, fn) {
  var i, iLen, j, jLen, k, kLen, def;
  var columns = oSettings.aoColumns;
  if (aoCols) {
    for (i = 0, iLen = aoCols.length; i < iLen; i++) {
      if (aoCols[i] && aoCols[i].name) {
        columns[i].sName = aoCols[i].name;
      }
    }
  }
  if (aoColDefs) {
    for (i = aoColDefs.length - 1; i >= 0; i--) {
      def = aoColDefs[i];
      var aTargets = def.target !== void 0 ? def.target : def.targets !== void 0 ? def.targets : def.aTargets;
      if (!Array.isArray(aTargets)) {
        aTargets = [aTargets];
      }
      for (j = 0, jLen = aTargets.length; j < jLen; j++) {
        var target = aTargets[j];
        if (typeof target === "number" && target >= 0) {
          while (columns.length <= target) {
            _fnAddColumn(oSettings);
          }
          fn(target, def);
        } else if (typeof target === "number" && target < 0) {
          fn(columns.length + target, def);
        } else if (typeof target === "string") {
          for (k = 0, kLen = columns.length; k < kLen; k++) {
            if (target === "_all") {
              fn(k, def);
            } else if (target.indexOf(":name") !== -1) {
              if (columns[k].sName === target.replace(":name", "")) {
                fn(k, def);
              }
            } else {
              headerLayout.forEach(function(row) {
                if (row[k]) {
                  var cell = $(row[k].cell);
                  if (target.match(/^[a-z][\w-]*$/i)) {
                    target = "." + target;
                  }
                  if (cell.is(target)) {
                    fn(k, def);
                  }
                }
              });
            }
          }
        }
      }
    }
  }
  if (aoCols) {
    for (i = 0, iLen = aoCols.length; i < iLen; i++) {
      fn(i, aoCols[i]);
    }
  }
}
function _fnColumnsSumWidth(settings, targets, original, incVisible) {
  if (!Array.isArray(targets)) {
    targets = _fnColumnsFromHeader(targets);
  }
  var sum = 0;
  var unit;
  var columns = settings.aoColumns;
  for (var i = 0, ien = targets.length; i < ien; i++) {
    var column = columns[targets[i]];
    var definedWidth = original ? column.sWidthOrig : column.sWidth;
    if (!incVisible && column.bVisible === false) {
      continue;
    }
    if (definedWidth === null || definedWidth === void 0) {
      return null;
    } else if (typeof definedWidth === "number") {
      unit = "px";
      sum += definedWidth;
    } else {
      var matched = definedWidth.match(/([\d\.]+)([^\d]*)/);
      if (matched) {
        sum += matched[1] * 1;
        unit = matched.length === 3 ? matched[2] : "px";
      }
    }
  }
  return sum + unit;
}
function _fnColumnsFromHeader(cell) {
  var attr = $(cell).closest("[data-dt-column]").attr("data-dt-column");
  if (!attr) {
    return [];
  }
  return attr.split(",").map(function(val) {
    return val * 1;
  });
}
function _fnAddData(settings, dataIn, tr, tds) {
  var rowIdx = settings.aoData.length;
  var rowModel = $.extend(true, {}, DataTable.models.oRow, {
    src: tr ? "dom" : "data",
    idx: rowIdx
  });
  rowModel._aData = dataIn;
  settings.aoData.push(rowModel);
  var columns = settings.aoColumns;
  for (var i = 0, iLen = columns.length; i < iLen; i++) {
    columns[i].sType = null;
  }
  settings.aiDisplayMaster.push(rowIdx);
  var id = settings.rowIdFn(dataIn);
  if (id !== void 0) {
    settings.aIds[id] = rowModel;
  }
  if (tr || !settings.oFeatures.bDeferRender) {
    _fnCreateTr(settings, rowIdx, tr, tds);
  }
  return rowIdx;
}
function _fnAddTr(settings, trs) {
  var row;
  if (!(trs instanceof $)) {
    trs = $(trs);
  }
  return trs.map(function(i, el) {
    row = _fnGetRowElements(settings, el);
    return _fnAddData(settings, row.data, el, row.cells);
  });
}
function _fnGetCellData(settings, rowIdx, colIdx, type) {
  if (type === "search") {
    type = "filter";
  } else if (type === "order") {
    type = "sort";
  }
  var row = settings.aoData[rowIdx];
  if (!row) {
    return void 0;
  }
  var draw = settings.iDraw;
  var col = settings.aoColumns[colIdx];
  var rowData = row._aData;
  var defaultContent = col.sDefaultContent;
  var cellData = col.fnGetData(rowData, type, {
    settings,
    row: rowIdx,
    col: colIdx
  });
  if (type !== "display" && cellData && typeof cellData === "object" && cellData.nodeName) {
    cellData = cellData.innerHTML;
  }
  if (cellData === void 0) {
    if (settings.iDrawError != draw && defaultContent === null) {
      _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
      settings.iDrawError = draw;
    }
    return defaultContent;
  }
  if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== void 0) {
    cellData = defaultContent;
  } else if (typeof cellData === "function") {
    return cellData.call(rowData);
  }
  if (cellData === null && type === "display") {
    return "";
  }
  if (type === "filter") {
    var fomatters = DataTable.ext.type.search;
    if (fomatters[col.sType]) {
      cellData = fomatters[col.sType](cellData);
    }
  }
  return cellData;
}
function _fnSetCellData(settings, rowIdx, colIdx, val) {
  var col = settings.aoColumns[colIdx];
  var rowData = settings.aoData[rowIdx]._aData;
  col.fnSetData(rowData, val, {
    settings,
    row: rowIdx,
    col: colIdx
  });
}
function _fnWriteCell(td, val) {
  if (val && typeof val === "object" && val.nodeName) {
    $(td).empty().append(val);
  } else {
    td.innerHTML = val;
  }
}
var __reArray = /\[.*?\]$/;
var __reFn = /\(\)$/;
function _fnSplitObjNotation(str) {
  var parts = str.match(/(\\.|[^.])+/g) || [""];
  return parts.map(function(s) {
    return s.replace(/\\\./g, ".");
  });
}
var _fnGetObjectDataFn = DataTable.util.get;
var _fnSetObjectDataFn = DataTable.util.set;
function _fnGetDataMaster(settings) {
  return _pluck(settings.aoData, "_aData");
}
function _fnClearTable(settings) {
  settings.aoData.length = 0;
  settings.aiDisplayMaster.length = 0;
  settings.aiDisplay.length = 0;
  settings.aIds = {};
}
function _fnInvalidate(settings, rowIdx, src, colIdx) {
  var row = settings.aoData[rowIdx];
  var i, ien;
  row._aSortData = null;
  row._aFilterData = null;
  row.displayData = null;
  if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
    row._aData = _fnGetRowElements(
      settings,
      row,
      colIdx,
      colIdx === void 0 ? void 0 : row._aData
    ).data;
  } else {
    var cells = row.anCells;
    var display = _fnGetRowDisplay(settings, rowIdx);
    if (cells) {
      if (colIdx !== void 0) {
        _fnWriteCell(cells[colIdx], display[colIdx]);
      } else {
        for (i = 0, ien = cells.length; i < ien; i++) {
          _fnWriteCell(cells[i], display[i]);
        }
      }
    }
  }
  var cols = settings.aoColumns;
  if (colIdx !== void 0) {
    cols[colIdx].sType = null;
    cols[colIdx].maxLenString = null;
  } else {
    for (i = 0, ien = cols.length; i < ien; i++) {
      cols[i].sType = null;
      cols[i].maxLenString = null;
    }
    _fnRowAttributes(settings, row);
  }
}
function _fnGetRowElements(settings, row, colIdx, d) {
  var tds = [], td = row.firstChild, name, col, i = 0, contents, columns = settings.aoColumns, objectRead = settings._rowReadObject;
  d = d !== void 0 ? d : objectRead ? {} : [];
  var attr = function(str, td2) {
    if (typeof str === "string") {
      var idx = str.indexOf("@");
      if (idx !== -1) {
        var attr2 = str.substring(idx + 1);
        var setter = _fnSetObjectDataFn(str);
        setter(d, td2.getAttribute(attr2));
      }
    }
  };
  var cellProcess = function(cell) {
    if (colIdx === void 0 || colIdx === i) {
      col = columns[i];
      contents = cell.innerHTML.trim();
      if (col && col._bAttrSrc) {
        var setter = _fnSetObjectDataFn(col.mData._);
        setter(d, contents);
        attr(col.mData.sort, cell);
        attr(col.mData.type, cell);
        attr(col.mData.filter, cell);
      } else {
        if (objectRead) {
          if (!col._setter) {
            col._setter = _fnSetObjectDataFn(col.mData);
          }
          col._setter(d, contents);
        } else {
          d[i] = contents;
        }
      }
    }
    i++;
  };
  if (td) {
    while (td) {
      name = td.nodeName.toUpperCase();
      if (name == "TD" || name == "TH") {
        cellProcess(td);
        tds.push(td);
      }
      td = td.nextSibling;
    }
  } else {
    tds = row.anCells;
    for (var j = 0, jen = tds.length; j < jen; j++) {
      cellProcess(tds[j]);
    }
  }
  var rowNode = row.firstChild ? row : row.nTr;
  if (rowNode) {
    var id = rowNode.getAttribute("id");
    if (id) {
      _fnSetObjectDataFn(settings.rowId)(d, id);
    }
  }
  return {
    data: d,
    cells: tds
  };
}
function _fnGetRowDisplay(settings, rowIdx) {
  var rowModal = settings.aoData[rowIdx];
  var columns = settings.aoColumns;
  if (!rowModal.displayData) {
    rowModal.displayData = [];
    for (var colIdx = 0, len = columns.length; colIdx < len; colIdx++) {
      rowModal.displayData.push(
        _fnGetCellData(settings, rowIdx, colIdx, "display")
      );
    }
  }
  return rowModal.displayData;
}
function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
  var row = oSettings.aoData[iRow], rowData = row._aData, cells = [], nTr, nTd, oCol, i, iLen, create, trClass = oSettings.oClasses.tbody.row;
  if (row.nTr === null) {
    nTr = nTrIn || document.createElement("tr");
    row.nTr = nTr;
    row.anCells = cells;
    _addClass(nTr, trClass);
    nTr._DT_RowIndex = iRow;
    _fnRowAttributes(oSettings, row);
    for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
      oCol = oSettings.aoColumns[i];
      create = nTrIn && anTds[i] ? false : true;
      nTd = create ? document.createElement(oCol.sCellType) : anTds[i];
      if (!nTd) {
        _fnLog(oSettings, 0, "Incorrect column count", 18);
      }
      nTd._DT_CellIndex = {
        row: iRow,
        column: i
      };
      cells.push(nTd);
      var display = _fnGetRowDisplay(oSettings, iRow);
      if (create || (oCol.mRender || oCol.mData !== i) && (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i + ".display")) {
        _fnWriteCell(nTd, display[i]);
      }
      _addClass(nTd, oCol.sClass);
      if (oCol.bVisible && create) {
        nTr.appendChild(nTd);
      } else if (!oCol.bVisible && !create) {
        nTd.parentNode.removeChild(nTd);
      }
      if (oCol.fnCreatedCell) {
        oCol.fnCreatedCell.call(
          oSettings.oInstance,
          nTd,
          _fnGetCellData(oSettings, iRow, i),
          rowData,
          iRow,
          i
        );
      }
    }
    _fnCallbackFire(oSettings, "aoRowCreatedCallback", "row-created", [nTr, rowData, iRow, cells]);
  } else {
    _addClass(row.nTr, trClass);
  }
}
function _fnRowAttributes(settings, row) {
  var tr = row.nTr;
  var data = row._aData;
  if (tr) {
    var id = settings.rowIdFn(data);
    if (id) {
      tr.id = id;
    }
    if (data.DT_RowClass) {
      var a = data.DT_RowClass.split(" ");
      row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
      $(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass);
    }
    if (data.DT_RowAttr) {
      $(tr).attr(data.DT_RowAttr);
    }
    if (data.DT_RowData) {
      $(tr).data(data.DT_RowData);
    }
  }
}
function _fnBuildHead(settings, side) {
  var classes = settings.oClasses;
  var columns = settings.aoColumns;
  var i, ien, row;
  var target = side === "header" ? settings.nTHead : settings.nTFoot;
  var titleProp = side === "header" ? "sTitle" : side;
  if (!target) {
    return;
  }
  if (side === "header" || _pluck(settings.aoColumns, titleProp).join("")) {
    row = $("tr", target);
    if (!row.length) {
      row = $("<tr/>").appendTo(target);
    }
    if (row.length === 1) {
      var cells = $("td, th", row);
      for (i = cells.length, ien = columns.length; i < ien; i++) {
        $("<th/>").html(columns[i][titleProp] || "").appendTo(row);
      }
    }
  }
  var detected = _fnDetectHeader(settings, target, true);
  if (side === "header") {
    settings.aoHeader = detected;
  } else {
    settings.aoFooter = detected;
  }
  $(target).children("tr").children("th, td").each(function() {
    _fnRenderer(settings, side)(
      settings,
      $(this),
      classes
    );
  });
}
function _fnHeaderLayout(settings, source, incColumns) {
  var row, column, cell;
  var local = [];
  var structure = [];
  var columns = settings.aoColumns;
  var columnCount = columns.length;
  var rowspan, colspan;
  if (!source) {
    return;
  }
  if (!incColumns) {
    incColumns = _range(columnCount).filter(function(idx) {
      return columns[idx].bVisible;
    });
  }
  for (row = 0; row < source.length; row++) {
    local[row] = source[row].slice().filter(function(cell2, i) {
      return incColumns.includes(i);
    });
    structure.push([]);
  }
  for (row = 0; row < local.length; row++) {
    for (column = 0; column < local[row].length; column++) {
      rowspan = 1;
      colspan = 1;
      if (structure[row][column] === void 0) {
        cell = local[row][column].cell;
        while (local[row + rowspan] !== void 0 && local[row][column].cell == local[row + rowspan][column].cell) {
          structure[row + rowspan][column] = null;
          rowspan++;
        }
        while (local[row][column + colspan] !== void 0 && local[row][column].cell == local[row][column + colspan].cell) {
          for (var k = 0; k < rowspan; k++) {
            structure[row + k][column + colspan] = null;
          }
          colspan++;
        }
        var titleSpan = $("span.dt-column-title", cell);
        structure[row][column] = {
          cell,
          colspan,
          rowspan,
          title: titleSpan.length ? titleSpan.html() : $(cell).html()
        };
      }
    }
  }
  return structure;
}
function _fnDrawHead(settings, source) {
  var layout = _fnHeaderLayout(settings, source);
  var tr, n;
  for (var row = 0; row < source.length; row++) {
    tr = source[row].row;
    if (tr) {
      while (n = tr.firstChild) {
        tr.removeChild(n);
      }
    }
    for (var column = 0; column < layout[row].length; column++) {
      var point = layout[row][column];
      if (point) {
        $(point.cell).appendTo(tr).attr("rowspan", point.rowspan).attr("colspan", point.colspan);
      }
    }
  }
}
function _fnDraw(oSettings, ajaxComplete) {
  _fnStart(oSettings);
  var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
  if (aPreDraw.indexOf(false) !== -1) {
    _fnProcessingDisplay(oSettings, false);
    return;
  }
  var anRows = [];
  var iRowCount = 0;
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var aiDisplay = oSettings.aiDisplay;
  var iDisplayStart = oSettings._iDisplayStart;
  var iDisplayEnd = oSettings.fnDisplayEnd();
  var columns = oSettings.aoColumns;
  var body = $(oSettings.nTBody);
  oSettings.bDrawing = true;
  if (oSettings.deferLoading) {
    oSettings.deferLoading = false;
    oSettings.iDraw++;
    _fnProcessingDisplay(oSettings, false);
  } else if (!bServerSide) {
    oSettings.iDraw++;
  } else if (!oSettings.bDestroying && !ajaxComplete) {
    if (oSettings.iDraw === 0) {
      body.empty().append(_emptyRow(oSettings));
    }
    _fnAjaxUpdate(oSettings);
    return;
  }
  if (aiDisplay.length !== 0) {
    var iStart = bServerSide ? 0 : iDisplayStart;
    var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
    for (var j = iStart; j < iEnd; j++) {
      var iDataIndex = aiDisplay[j];
      var aoData = oSettings.aoData[iDataIndex];
      if (aoData.nTr === null) {
        _fnCreateTr(oSettings, iDataIndex);
      }
      var nRow = aoData.nTr;
      for (var i = 0; i < columns.length; i++) {
        var col = columns[i];
        var td = aoData.anCells[i];
        _addClass(td, _ext.type.className[col.sType]);
        _addClass(td, oSettings.oClasses.tbody.cell);
      }
      _fnCallbackFire(
        oSettings,
        "aoRowCallback",
        null,
        [nRow, aoData._aData, iRowCount, j, iDataIndex]
      );
      anRows.push(nRow);
      iRowCount++;
    }
  } else {
    anRows[0] = _emptyRow(oSettings);
  }
  _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [
    $(oSettings.nTHead).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [
    $(oSettings.nTFoot).children("tr")[0],
    _fnGetDataMaster(oSettings),
    iDisplayStart,
    iDisplayEnd,
    aiDisplay
  ]);
  if (body[0].replaceChildren) {
    body[0].replaceChildren.apply(body[0], anRows);
  } else {
    body.children().detach();
    body.append($(anRows));
  }
  $(oSettings.nTableWrapper).toggleClass("dt-empty-footer", $("tr", oSettings.nTFoot).length === 0);
  _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings], true);
  oSettings.bSorted = false;
  oSettings.bFiltered = false;
  oSettings.bDrawing = false;
}
function _fnReDraw(settings, holdPosition, recompute) {
  var features = settings.oFeatures, sort = features.bSort, filter = features.bFilter;
  if (recompute === void 0 || recompute === true) {
    _fnColumnTypes(settings);
    if (sort) {
      _fnSort(settings);
    }
    if (filter) {
      _fnFilterComplete(settings, settings.oPreviousSearch);
    } else {
      settings.aiDisplay = settings.aiDisplayMaster.slice();
    }
  }
  if (holdPosition !== true) {
    settings._iDisplayStart = 0;
  }
  settings._drawHold = holdPosition;
  _fnDraw(settings);
  settings._drawHold = false;
}
function _emptyRow(settings) {
  var oLang = settings.oLanguage;
  var zero = oLang.sZeroRecords;
  var dataSrc = _fnDataSource(settings);
  if (settings.iDraw < 1 && dataSrc === "ssp" || settings.iDraw <= 1 && dataSrc === "ajax") {
    zero = oLang.sLoadingRecords;
  } else if (oLang.sEmptyTable && settings.fnRecordsTotal() === 0) {
    zero = oLang.sEmptyTable;
  }
  return $("<tr/>").append($("<td />", {
    "colSpan": _fnVisbleColumns(settings),
    "class": settings.oClasses.empty.row
  }).html(zero))[0];
}
function _layoutItems(row, align, items) {
  if (Array.isArray(items)) {
    for (var i = 0; i < items.length; i++) {
      _layoutItems(row, align, items[i]);
    }
    return;
  }
  var rowCell = row[align];
  if ($.isPlainObject(items)) {
    if (items.features) {
      if (items.rowId) {
        row.id = items.rowId;
      }
      if (items.rowClass) {
        row.className = items.rowClass;
      }
      rowCell.id = items.id;
      rowCell.className = items.className;
      _layoutItems(row, align, items.features);
    } else {
      Object.keys(items).map(function(key) {
        rowCell.contents.push({
          feature: key,
          opts: items[key]
        });
      });
    }
  } else {
    rowCell.contents.push(items);
  }
}
function _layoutGetRow(rows, rowNum, align) {
  var row;
  for (var i = 0; i < rows.length; i++) {
    row = rows[i];
    if (row.rowNum === rowNum) {
      if (align === "full" && row.full || (align === "start" || align === "end") && (row.start || row.end)) {
        if (!row[align]) {
          row[align] = {
            contents: []
          };
        }
        return row;
      }
    }
  }
  row = {
    rowNum
  };
  row[align] = {
    contents: []
  };
  rows.push(row);
  return row;
}
function _layoutArray(settings, layout, side) {
  var rows = [];
  $.each(layout, function(pos, items) {
    if (items === null) {
      return;
    }
    var parts = pos.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/);
    var rowNum = parts[2] ? parts[2] * 1 : 0;
    var align = parts[3] ? parts[3].toLowerCase() : "full";
    if (parts[1] !== side) {
      return;
    }
    var row2 = _layoutGetRow(rows, rowNum, align);
    _layoutItems(row2, align, items);
  });
  rows.sort(function(a, b) {
    var order1 = a.rowNum;
    var order2 = b.rowNum;
    if (order1 === order2) {
      var ret = a.full && !b.full ? -1 : 1;
      return side === "bottom" ? ret * -1 : ret;
    }
    return order2 - order1;
  });
  if (side === "bottom") {
    rows.reverse();
  }
  for (var row = 0; row < rows.length; row++) {
    delete rows[row].rowNum;
    _layoutResolve(settings, rows[row]);
  }
  return rows;
}
function _layoutResolve(settings, row) {
  var getFeature = function(feature, opts) {
    if (!_ext.features[feature]) {
      _fnLog(settings, 0, "Unknown feature: " + feature);
    }
    return _ext.features[feature].apply(this, [settings, opts]);
  };
  var resolve = function(item) {
    if (!row[item]) {
      return;
    }
    var line = row[item].contents;
    for (var i = 0, ien = line.length; i < ien; i++) {
      if (!line[i]) {
        continue;
      } else if (typeof line[i] === "string") {
        line[i] = getFeature(line[i], null);
      } else if ($.isPlainObject(line[i])) {
        line[i] = getFeature(line[i].feature, line[i].opts);
      } else if (typeof line[i].node === "function") {
        line[i] = line[i].node(settings);
      } else if (typeof line[i] === "function") {
        var inst = line[i](settings);
        line[i] = typeof inst.node === "function" ? inst.node() : inst;
      }
    }
  };
  resolve("start");
  resolve("end");
  resolve("full");
}
function _fnAddOptionsHtml(settings) {
  var classes = settings.oClasses;
  var table = $(settings.nTable);
  var insert = $("<div/>").attr({
    id: settings.sTableId + "_wrapper",
    "class": classes.container
  }).insertBefore(table);
  settings.nTableWrapper = insert[0];
  if (settings.sDom) {
    _fnLayoutDom(settings, settings.sDom, insert);
  } else {
    var top = _layoutArray(settings, settings.layout, "top");
    var bottom = _layoutArray(settings, settings.layout, "bottom");
    var renderer = _fnRenderer(settings, "layout");
    top.forEach(function(item) {
      renderer(settings, insert, item);
    });
    renderer(settings, insert, {
      full: {
        table: true,
        contents: [_fnFeatureHtmlTable(settings)]
      }
    });
    bottom.forEach(function(item) {
      renderer(settings, insert, item);
    });
  }
  _processingHtml(settings);
}
function _fnLayoutDom(settings, dom, insert) {
  var parts = dom.match(/(".*?")|('.*?')|./g);
  var featureNode, option, newNode, next, attr;
  for (var i = 0; i < parts.length; i++) {
    featureNode = null;
    option = parts[i];
    if (option == "<") {
      newNode = $("<div/>");
      next = parts[i + 1];
      if (next[0] == "'" || next[0] == '"') {
        attr = next.replace(/['"]/g, "");
        var id = "", className;
        if (attr.indexOf(".") != -1) {
          var split = attr.split(".");
          id = split[0];
          className = split[1];
        } else if (attr[0] == "#") {
          id = attr;
        } else {
          className = attr;
        }
        newNode.attr("id", id.substring(1)).addClass(className);
        i++;
      }
      insert.append(newNode);
      insert = newNode;
    } else if (option == ">") {
      insert = insert.parent();
    } else if (option == "t") {
      featureNode = _fnFeatureHtmlTable(settings);
    } else {
      DataTable.ext.feature.forEach(function(feature) {
        if (option == feature.cFeature) {
          featureNode = feature.fnInit(settings);
        }
      });
    }
    if (featureNode) {
      insert.append(featureNode);
    }
  }
}
function _fnDetectHeader(settings, thead, write) {
  var columns = settings.aoColumns;
  var rows = $(thead).children("tr");
  var row, cell;
  var i, k, l, iLen, shifted, column, colspan, rowspan;
  var isHeader = thead && thead.nodeName.toLowerCase() === "thead";
  var layout = [];
  var unique;
  var shift = function(a, i2, j) {
    var k2 = a[i2];
    while (k2[j]) {
      j++;
    }
    return j;
  };
  for (i = 0, iLen = rows.length; i < iLen; i++) {
    layout.push([]);
  }
  for (i = 0, iLen = rows.length; i < iLen; i++) {
    row = rows[i];
    column = 0;
    cell = row.firstChild;
    while (cell) {
      if (cell.nodeName.toUpperCase() == "TD" || cell.nodeName.toUpperCase() == "TH") {
        var cols = [];
        colspan = cell.getAttribute("colspan") * 1;
        rowspan = cell.getAttribute("rowspan") * 1;
        colspan = !colspan || colspan === 0 || colspan === 1 ? 1 : colspan;
        rowspan = !rowspan || rowspan === 0 || rowspan === 1 ? 1 : rowspan;
        shifted = shift(layout, i, column);
        unique = colspan === 1 ? true : false;
        if (write) {
          if (unique) {
            _fnColumnOptions(settings, shifted, $(cell).data());
            var columnDef = columns[shifted];
            var width = cell.getAttribute("width") || null;
            var t = cell.style.width.match(/width:\s*(\d+[pxem%]+)/);
            if (t) {
              width = t[1];
            }
            columnDef.sWidthOrig = columnDef.sWidth || width;
            if (isHeader) {
              if (columnDef.sTitle !== null && !columnDef.autoTitle) {
                cell.innerHTML = columnDef.sTitle;
              }
              if (!columnDef.sTitle && unique) {
                columnDef.sTitle = _stripHtml(cell.innerHTML);
                columnDef.autoTitle = true;
              }
            } else {
              if (columnDef.footer) {
                cell.innerHTML = columnDef.footer;
              }
            }
            if (!columnDef.ariaTitle) {
              columnDef.ariaTitle = $(cell).attr("aria-label") || columnDef.sTitle;
            }
            if (columnDef.className) {
              $(cell).addClass(columnDef.className);
            }
          }
          if ($("span.dt-column-title", cell).length === 0) {
            $("<span>").addClass("dt-column-title").append(cell.childNodes).appendTo(cell);
          }
          if (isHeader && $("span.dt-column-order", cell).length === 0) {
            $("<span>").addClass("dt-column-order").appendTo(cell);
          }
        }
        for (l = 0; l < colspan; l++) {
          for (k = 0; k < rowspan; k++) {
            layout[i + k][shifted + l] = {
              cell,
              unique
            };
            layout[i + k].row = row;
          }
          cols.push(shifted + l);
        }
        cell.setAttribute("data-dt-column", _unique(cols).join(","));
      }
      cell = cell.nextSibling;
    }
  }
  return layout;
}
function _fnStart(oSettings) {
  var bServerSide = _fnDataSource(oSettings) == "ssp";
  var iInitDisplayStart = oSettings.iInitDisplayStart;
  if (iInitDisplayStart !== void 0 && iInitDisplayStart !== -1) {
    oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
    oSettings.iInitDisplayStart = -1;
  }
}
function _fnBuildAjax(oSettings, data, fn) {
  var ajaxData;
  var ajax = oSettings.ajax;
  var instance = oSettings.oInstance;
  var callback = function(json) {
    var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
    if (json === null || typeof status === "number" && status == 204) {
      json = {};
      _fnAjaxDataSrc(oSettings, json, []);
    }
    var error = json.error || json.sError;
    if (error) {
      _fnLog(oSettings, 0, error);
    }
    if (json.d && typeof json.d === "string") {
      try {
        json = JSON.parse(json.d);
      } catch (e) {
      }
    }
    oSettings.json = json;
    _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR], true);
    fn(json);
  };
  if ($.isPlainObject(ajax) && ajax.data) {
    ajaxData = ajax.data;
    var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : (
      // fn can manipulate data or return
      ajaxData
    );
    data = typeof ajaxData === "function" && newData ? newData : $.extend(true, data, newData);
    delete ajax.data;
  }
  var baseAjax = {
    "url": typeof ajax === "string" ? ajax : "",
    "data": data,
    "success": callback,
    "dataType": "json",
    "cache": false,
    "type": oSettings.sServerMethod,
    "error": function(xhr, error) {
      var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR], true);
      if (ret.indexOf(true) === -1) {
        if (error == "parsererror") {
          _fnLog(oSettings, 0, "Invalid JSON response", 1);
        } else if (xhr.readyState === 4) {
          _fnLog(oSettings, 0, "Ajax error", 7);
        }
      }
      _fnProcessingDisplay(oSettings, false);
    }
  };
  if ($.isPlainObject(ajax)) {
    $.extend(baseAjax, ajax);
  }
  oSettings.oAjaxData = data;
  _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data, baseAjax], true);
  if (typeof ajax === "function") {
    oSettings.jqXHR = ajax.call(instance, data, callback, oSettings);
  } else if (ajax.url === "") {
    var empty = {};
    DataTable.util.set(ajax.dataSrc)(empty, []);
    callback(empty);
  } else {
    oSettings.jqXHR = $.ajax(baseAjax);
  }
  if (ajaxData) {
    ajax.data = ajaxData;
  }
}
function _fnAjaxUpdate(settings) {
  settings.iDraw++;
  _fnProcessingDisplay(settings, true);
  _fnBuildAjax(
    settings,
    _fnAjaxParameters(settings),
    function(json) {
      _fnAjaxUpdateDraw(settings, json);
    }
  );
}
function _fnAjaxParameters(settings) {
  var columns = settings.aoColumns, features = settings.oFeatures, preSearch = settings.oPreviousSearch, preColSearch = settings.aoPreSearchCols, colData = function(idx, prop) {
    return typeof columns[idx][prop] === "function" ? "function" : columns[idx][prop];
  };
  return {
    draw: settings.iDraw,
    columns: columns.map(function(column, i) {
      return {
        data: colData(i, "mData"),
        name: column.sName,
        searchable: column.bSearchable,
        orderable: column.bSortable,
        search: {
          value: preColSearch[i].search,
          regex: preColSearch[i].regex,
          fixed: Object.keys(column.searchFixed).map(function(name) {
            return {
              name,
              term: column.searchFixed[name].toString()
            };
          })
        }
      };
    }),
    order: _fnSortFlatten(settings).map(function(val) {
      return {
        column: val.col,
        dir: val.dir,
        name: colData(val.col, "sName")
      };
    }),
    start: settings._iDisplayStart,
    length: features.bPaginate ? settings._iDisplayLength : -1,
    search: {
      value: preSearch.search,
      regex: preSearch.regex,
      fixed: Object.keys(settings.searchFixed).map(function(name) {
        return {
          name,
          term: settings.searchFixed[name].toString()
        };
      })
    }
  };
}
function _fnAjaxUpdateDraw(settings, json) {
  var data = _fnAjaxDataSrc(settings, json);
  var draw = _fnAjaxDataSrcParam(settings, "draw", json);
  var recordsTotal = _fnAjaxDataSrcParam(settings, "recordsTotal", json);
  var recordsFiltered = _fnAjaxDataSrcParam(settings, "recordsFiltered", json);
  if (draw !== void 0) {
    if (draw * 1 < settings.iDraw) {
      return;
    }
    settings.iDraw = draw * 1;
  }
  if (!data) {
    data = [];
  }
  _fnClearTable(settings);
  settings._iRecordsTotal = parseInt(recordsTotal, 10);
  settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
  for (var i = 0, ien = data.length; i < ien; i++) {
    _fnAddData(settings, data[i]);
  }
  settings.aiDisplay = settings.aiDisplayMaster.slice();
  _fnColumnTypes(settings);
  _fnDraw(settings, true);
  _fnInitComplete(settings);
  _fnProcessingDisplay(settings, false);
}
function _fnAjaxDataSrc(settings, json, write) {
  var dataProp = "data";
  if ($.isPlainObject(settings.ajax) && settings.ajax.dataSrc !== void 0) {
    var dataSrc = settings.ajax.dataSrc;
    if (typeof dataSrc === "string" || typeof dataSrc === "function") {
      dataProp = dataSrc;
    } else if (dataSrc.data !== void 0) {
      dataProp = dataSrc.data;
    }
  }
  if (!write) {
    if (dataProp === "data") {
      return json.aaData || json[dataProp];
    }
    return dataProp !== "" ? _fnGetObjectDataFn(dataProp)(json) : json;
  }
  _fnSetObjectDataFn(dataProp)(json, write);
}
function _fnAjaxDataSrcParam(settings, param, json) {
  var dataSrc = $.isPlainObject(settings.ajax) ? settings.ajax.dataSrc : null;
  if (dataSrc && dataSrc[param]) {
    return _fnGetObjectDataFn(dataSrc[param])(json);
  }
  var old = "";
  if (param === "draw") {
    old = "sEcho";
  } else if (param === "recordsTotal") {
    old = "iTotalRecords";
  } else if (param === "recordsFiltered") {
    old = "iTotalDisplayRecords";
  }
  return json[old] !== void 0 ? json[old] : json[param];
}
function _fnFilterComplete(settings, input) {
  var columnsSearch = settings.aoPreSearchCols;
  if (_fnDataSource(settings) != "ssp") {
    _fnFilterData(settings);
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnFilter(settings.aiDisplay, settings, input.search, input);
    $.each(settings.searchFixed, function(name, term) {
      _fnFilter(settings.aiDisplay, settings, term, {});
    });
    for (var i = 0; i < columnsSearch.length; i++) {
      var col = columnsSearch[i];
      _fnFilter(
        settings.aiDisplay,
        settings,
        col.search,
        col,
        i
      );
      $.each(settings.aoColumns[i].searchFixed, function(name, term) {
        _fnFilter(settings.aiDisplay, settings, term, {}, i);
      });
    }
    _fnFilterCustom(settings);
  }
  settings.bFiltered = true;
  _fnCallbackFire(settings, null, "search", [settings]);
}
function _fnFilterCustom(settings) {
  var filters = DataTable.ext.search;
  var displayRows = settings.aiDisplay;
  var row, rowIdx;
  for (var i = 0, ien = filters.length; i < ien; i++) {
    var rows = [];
    for (var j = 0, jen = displayRows.length; j < jen; j++) {
      rowIdx = displayRows[j];
      row = settings.aoData[rowIdx];
      if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) {
        rows.push(rowIdx);
      }
    }
    displayRows.length = 0;
    displayRows.push.apply(displayRows, rows);
  }
}
function _fnFilter(searchRows, settings, input, options, column) {
  if (input === "") {
    return;
  }
  var i = 0;
  var matched = [];
  var searchFunc = typeof input === "function" ? input : null;
  var rpSearch = input instanceof RegExp ? input : searchFunc ? null : _fnFilterCreateSearch(input, options);
  for (i = 0; i < searchRows.length; i++) {
    var row = settings.aoData[searchRows[i]];
    var data = column === void 0 ? row._sFilterRow : row._aFilterData[column];
    if (searchFunc && searchFunc(data, row._aData, searchRows[i], column) || rpSearch && rpSearch.test(data)) {
      matched.push(searchRows[i]);
    }
  }
  searchRows.length = matched.length;
  for (i = 0; i < matched.length; i++) {
    searchRows[i] = matched[i];
  }
}
function _fnFilterCreateSearch(search, inOpts) {
  var not = [];
  var options = $.extend({}, {
    boundary: false,
    caseInsensitive: true,
    exact: false,
    regex: false,
    smart: true
  }, inOpts);
  if (typeof search !== "string") {
    search = search.toString();
  }
  search = _normalize(search);
  if (options.exact) {
    return new RegExp(
      "^" + _fnEscapeRegex(search) + "$",
      options.caseInsensitive ? "i" : ""
    );
  }
  search = options.regex ? search : _fnEscapeRegex(search);
  if (options.smart) {
    var parts = search.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""];
    var a = parts.map(function(word) {
      var negative = false;
      var m;
      if (word.charAt(0) === "!") {
        negative = true;
        word = word.substring(1);
      }
      if (word.charAt(0) === '"') {
        m = word.match(/^"(.*)"$/);
        word = m ? m[1] : word;
      } else if (word.charAt(0) === "“") {
        m = word.match(/^\u201C(.*)\u201D$/);
        word = m ? m[1] : word;
      }
      if (negative) {
        if (word.length > 1) {
          not.push("(?!" + word + ")");
        }
        word = "";
      }
      return word.replace(/"/g, "");
    });
    var match = not.length ? not.join("") : "";
    var boundary = options.boundary ? "\\b" : "";
    search = "^(?=.*?" + boundary + a.join(")(?=.*?" + boundary) + ")(" + match + ".)*$";
  }
  return new RegExp(search, options.caseInsensitive ? "i" : "");
}
var _fnEscapeRegex = DataTable.util.escapeRegex;
var __filter_div = $("<div>")[0];
var __filter_div_textContent = __filter_div.textContent !== void 0;
function _fnFilterData(settings) {
  var columns = settings.aoColumns;
  var data = settings.aoData;
  var column;
  var j, jen, filterData, cellData, row;
  var wasInvalidated = false;
  for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
    if (!data[rowIdx]) {
      continue;
    }
    row = data[rowIdx];
    if (!row._aFilterData) {
      filterData = [];
      for (j = 0, jen = columns.length; j < jen; j++) {
        column = columns[j];
        if (column.bSearchable) {
          cellData = _fnGetCellData(settings, rowIdx, j, "filter");
          if (cellData === null) {
            cellData = "";
          }
          if (typeof cellData !== "string" && cellData.toString) {
            cellData = cellData.toString();
          }
        } else {
          cellData = "";
        }
        if (cellData.indexOf && cellData.indexOf("&") !== -1) {
          __filter_div.innerHTML = cellData;
          cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
        }
        if (cellData.replace) {
          cellData = cellData.replace(/[\r\n\u2028]/g, "");
        }
        filterData.push(cellData);
      }
      row._aFilterData = filterData;
      row._sFilterRow = filterData.join("  ");
      wasInvalidated = true;
    }
  }
  return wasInvalidated;
}
function _fnInitialise(settings) {
  var i;
  var init = settings.oInit;
  var deferLoading = settings.deferLoading;
  var dataSrc = _fnDataSource(settings);
  if (!settings.bInitialised) {
    setTimeout(function() {
      _fnInitialise(settings);
    }, 200);
    return;
  }
  _fnBuildHead(settings, "header");
  _fnBuildHead(settings, "footer");
  _fnLoadState(settings, init, function() {
    _fnDrawHead(settings, settings.aoHeader);
    _fnDrawHead(settings, settings.aoFooter);
    var iAjaxStart = settings.iInitDisplayStart;
    if (init.aaData) {
      for (i = 0; i < init.aaData.length; i++) {
        _fnAddData(settings, init.aaData[i]);
      }
    } else if (deferLoading || dataSrc == "dom") {
      _fnAddTr(settings, $(settings.nTBody).children("tr"));
    }
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnAddOptionsHtml(settings);
    _fnSortInit(settings);
    _colGroup(settings);
    _fnProcessingDisplay(settings, true);
    _fnCallbackFire(settings, null, "preInit", [settings], true);
    _fnReDraw(settings);
    if (dataSrc != "ssp" || deferLoading) {
      if (dataSrc == "ajax") {
        _fnBuildAjax(settings, {}, function(json) {
          var aData = _fnAjaxDataSrc(settings, json);
          for (i = 0; i < aData.length; i++) {
            _fnAddData(settings, aData[i]);
          }
          settings.iInitDisplayStart = iAjaxStart;
          _fnReDraw(settings);
          _fnProcessingDisplay(settings, false);
          _fnInitComplete(settings);
        }, settings);
      } else {
        _fnInitComplete(settings);
        _fnProcessingDisplay(settings, false);
      }
    }
  });
}
function _fnInitComplete(settings) {
  if (settings._bInitComplete) {
    return;
  }
  var args = [settings, settings.json];
  settings._bInitComplete = true;
  _fnAdjustColumnSizing(settings);
  _fnCallbackFire(settings, null, "plugin-init", args, true);
  _fnCallbackFire(settings, "aoInitComplete", "init", args, true);
}
function _fnLengthChange(settings, val) {
  var len = parseInt(val, 10);
  settings._iDisplayLength = len;
  _fnLengthOverflow(settings);
  _fnCallbackFire(settings, null, "length", [settings, len]);
}
function _fnPageChange(settings, action, redraw) {
  var start = settings._iDisplayStart, len = settings._iDisplayLength, records = settings.fnRecordsDisplay();
  if (records === 0 || len === -1) {
    start = 0;
  } else if (typeof action === "number") {
    start = action * len;
    if (start > records) {
      start = 0;
    }
  } else if (action == "first") {
    start = 0;
  } else if (action == "previous") {
    start = len >= 0 ? start - len : 0;
    if (start < 0) {
      start = 0;
    }
  } else if (action == "next") {
    if (start + len < records) {
      start += len;
    }
  } else if (action == "last") {
    start = Math.floor((records - 1) / len) * len;
  } else if (action === "ellipsis") {
    return;
  } else {
    _fnLog(settings, 0, "Unknown paging action: " + action, 5);
  }
  var changed = settings._iDisplayStart !== start;
  settings._iDisplayStart = start;
  _fnCallbackFire(settings, null, changed ? "page" : "page-nc", [settings]);
  if (changed && redraw) {
    _fnDraw(settings);
  }
  return changed;
}
function _processingHtml(settings) {
  var table = settings.nTable;
  var scrolling = settings.oScroll.sX !== "" || settings.oScroll.sY !== "";
  if (settings.oFeatures.bProcessing) {
    var n = $("<div/>", {
      "id": settings.sTableId + "_processing",
      "class": settings.oClasses.processing.container,
      "role": "status"
    }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
    if (scrolling) {
      n.prependTo($("div.dt-scroll", settings.nTableWrapper));
    } else {
      n.insertBefore(table);
    }
    $(table).on("processing.dt.DT", function(e, s, show) {
      n.css("display", show ? "block" : "none");
    });
  }
}
function _fnProcessingDisplay(settings, show) {
  if (settings.bDrawing && show === false) {
    return;
  }
  _fnCallbackFire(settings, null, "processing", [settings, show]);
}
function _fnProcessingRun(settings, enable, run) {
  if (!enable) {
    run();
  } else {
    _fnProcessingDisplay(settings, true);
    setTimeout(function() {
      run();
      _fnProcessingDisplay(settings, false);
    }, 0);
  }
}
function _fnFeatureHtmlTable(settings) {
  var table = $(settings.nTable);
  var scroll = settings.oScroll;
  if (scroll.sX === "" && scroll.sY === "") {
    return settings.nTable;
  }
  var scrollX = scroll.sX;
  var scrollY = scroll.sY;
  var classes = settings.oClasses.scrolling;
  var caption = settings.captionNode;
  var captionSide = caption ? caption._captionSide : null;
  var headerClone = $(table[0].cloneNode(false));
  var footerClone = $(table[0].cloneNode(false));
  var footer = table.children("tfoot");
  var _div = "<div/>";
  var size = function(s) {
    return !s ? null : _fnStringToCss(s);
  };
  if (!footer.length) {
    footer = null;
  }
  var scroller = $(_div, { "class": classes.container }).append(
    $(_div, { "class": classes.header.self }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: scrollX ? size(scrollX) : "100%"
    }).append(
      $(_div, { "class": classes.header.inner }).css({
        "box-sizing": "content-box",
        width: scroll.sXInner || "100%"
      }).append(
        headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(
          table.children("thead")
        )
      )
    )
  ).append(
    $(_div, { "class": classes.body }).css({
      position: "relative",
      overflow: "auto",
      width: size(scrollX)
    }).append(table)
  );
  if (footer) {
    scroller.append(
      $(_div, { "class": classes.footer.self }).css({
        overflow: "hidden",
        border: 0,
        width: scrollX ? size(scrollX) : "100%"
      }).append(
        $(_div, { "class": classes.footer.inner }).append(
          footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(
            table.children("tfoot")
          )
        )
      )
    );
  }
  var children = scroller.children();
  var scrollHead = children[0];
  var scrollBody = children[1];
  var scrollFoot = footer ? children[2] : null;
  $(scrollBody).on("scroll.DT", function() {
    var scrollLeft = this.scrollLeft;
    scrollHead.scrollLeft = scrollLeft;
    if (footer) {
      scrollFoot.scrollLeft = scrollLeft;
    }
  });
  $("th, td", scrollHead).on("focus", function() {
    var scrollLeft = scrollHead.scrollLeft;
    scrollBody.scrollLeft = scrollLeft;
    if (footer) {
      scrollBody.scrollLeft = scrollLeft;
    }
  });
  $(scrollBody).css("max-height", scrollY);
  if (!scroll.bCollapse) {
    $(scrollBody).css("height", scrollY);
  }
  settings.nScrollHead = scrollHead;
  settings.nScrollBody = scrollBody;
  settings.nScrollFoot = scrollFoot;
  settings.aoDrawCallback.push(_fnScrollDraw);
  return scroller[0];
}
function _fnScrollDraw(settings) {
  var scroll = settings.oScroll, barWidth = scroll.iBarWidth, divHeader = $(settings.nScrollHead), divHeaderInner = divHeader.children("div"), divHeaderTable = divHeaderInner.children("table"), divBodyEl = settings.nScrollBody, divBody = $(divBodyEl), divFooter = $(settings.nScrollFoot), divFooterInner = divFooter.children("div"), divFooterTable = divFooterInner.children("table"), header = $(settings.nTHead), table = $(settings.nTable), footer = settings.nTFoot && $("th, td", settings.nTFoot).length ? $(settings.nTFoot) : null, browser = settings.oBrowser, headerCopy, footerCopy;
  var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
  if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== void 0) {
    settings.scrollBarVis = scrollBarVis;
    _fnAdjustColumnSizing(settings);
    return;
  } else {
    settings.scrollBarVis = scrollBarVis;
  }
  table.children("thead, tfoot").remove();
  headerCopy = header.clone().prependTo(table);
  headerCopy.find("th, td").removeAttr("tabindex");
  headerCopy.find("[id]").removeAttr("id");
  if (footer) {
    footerCopy = footer.clone().prependTo(table);
    footerCopy.find("[id]").removeAttr("id");
  }
  if (settings.aiDisplay.length) {
    var firstTr = null;
    for (i = settings._iDisplayStart; i < settings.aiDisplay.length; i++) {
      var idx = settings.aiDisplay[i];
      var tr = settings.aoData[idx].nTr;
      if (tr) {
        firstTr = tr;
        break;
      }
    }
    if (firstTr) {
      var colSizes = $(firstTr).children("th, td").map(function(vis) {
        return {
          idx: _fnVisibleToColumnIndex(settings, vis),
          width: $(this).outerWidth()
        };
      });
      for (var i = 0; i < colSizes.length; i++) {
        var colEl = settings.aoColumns[colSizes[i].idx].colEl[0];
        var colWidth = colEl.style.width.replace("px", "");
        if (colWidth !== colSizes[i].width) {
          colEl.style.width = colSizes[i].width + "px";
        }
      }
    }
  }
  divHeaderTable.find("colgroup").remove();
  divHeaderTable.append(settings.colgroup.clone());
  if (footer) {
    divFooterTable.find("colgroup").remove();
    divFooterTable.append(settings.colgroup.clone());
  }
  $("th, td", headerCopy).each(function() {
    $(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
  });
  if (footer) {
    $("th, td", footerCopy).each(function() {
      $(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
    });
  }
  var isScrolling = Math.floor(table.height()) > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
  var paddingSide = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
  var outerWidth = table.outerWidth();
  divHeaderTable.css("width", _fnStringToCss(outerWidth));
  divHeaderInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  if (footer) {
    divFooterTable.css("width", _fnStringToCss(outerWidth));
    divFooterInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
  }
  table.children("colgroup").prependTo(table);
  divBody.trigger("scroll");
  if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
    divBodyEl.scrollTop = 0;
  }
}
function _fnCalculateColumnWidths(settings) {
  if (!settings.oFeatures.bAutoWidth) {
    return;
  }
  var table = settings.nTable, columns = settings.aoColumns, scroll = settings.oScroll, scrollY = scroll.sY, scrollX = scroll.sX, scrollXInner = scroll.sXInner, visibleColumns = _fnGetColumns(settings, "bVisible"), tableWidthAttr = table.getAttribute("width"), tableContainer = table.parentNode, i, column, columnIdx;
  var styleWidth = table.style.width;
  if (!styleWidth && !tableWidthAttr) {
    table.style.width = "100%";
    styleWidth = "100%";
  }
  if (styleWidth && styleWidth.indexOf("%") !== -1) {
    tableWidthAttr = styleWidth;
  }
  _fnCallbackFire(
    settings,
    null,
    "column-calc",
    { visible: visibleColumns },
    false
  );
  var tmpTable = $(table.cloneNode()).css("visibility", "hidden").removeAttr("id");
  tmpTable.append("<tbody>");
  var tr = $("<tr/>").appendTo(tmpTable.find("tbody"));
  tmpTable.append($(settings.nTHead).clone()).append($(settings.nTFoot).clone());
  tmpTable.find("tfoot th, tfoot td").css("width", "");
  tmpTable.find("thead th, thead td").each(function() {
    var width = _fnColumnsSumWidth(settings, this, true, false);
    if (width) {
      this.style.width = width;
      if (scrollX) {
        $(this).append($("<div/>").css({
          width,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }
    } else {
      this.style.width = "";
    }
  });
  for (i = 0; i < visibleColumns.length; i++) {
    columnIdx = visibleColumns[i];
    column = columns[columnIdx];
    var longest = _fnGetMaxLenString(settings, columnIdx);
    var autoClass = _ext.type.className[column.sType];
    var text = longest + column.sContentPadding;
    var insert = longest.indexOf("<") === -1 ? document.createTextNode(text) : text;
    $("<td/>").addClass(autoClass).addClass(column.sClass).append(insert).appendTo(tr);
  }
  $("[name]", tmpTable).removeAttr("name");
  var holder = $("<div/>").css(
    scrollX || scrollY ? {
      position: "absolute",
      top: 0,
      left: 0,
      height: 1,
      right: 0,
      overflow: "hidden"
    } : {}
  ).append(tmpTable).appendTo(tableContainer);
  if (scrollX && scrollXInner) {
    tmpTable.width(scrollXInner);
  } else if (scrollX) {
    tmpTable.css("width", "auto");
    tmpTable.removeAttr("width");
    if (tmpTable.width() < tableContainer.clientWidth && tableWidthAttr) {
      tmpTable.width(tableContainer.clientWidth);
    }
  } else if (scrollY) {
    tmpTable.width(tableContainer.clientWidth);
  } else if (tableWidthAttr) {
    tmpTable.width(tableWidthAttr);
  }
  var total = 0;
  var bodyCells = tmpTable.find("tbody tr").eq(0).children();
  for (i = 0; i < visibleColumns.length; i++) {
    var bounding = bodyCells[i].getBoundingClientRect().width;
    total += bounding;
    columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding);
  }
  table.style.width = _fnStringToCss(total);
  holder.remove();
  if (tableWidthAttr) {
    table.style.width = _fnStringToCss(tableWidthAttr);
  }
  if ((tableWidthAttr || scrollX) && !settings._reszEvt) {
    var bindResize = function() {
      $(window).on("resize.DT-" + settings.sInstance, DataTable.util.throttle(function() {
        if (!settings.bDestroying) {
          _fnAdjustColumnSizing(settings);
        }
      }));
    };
    bindResize();
    settings._reszEvt = true;
  }
}
function _fnGetMaxLenString(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  if (!column.maxLenString) {
    var s, max = "", maxLen = -1;
    for (var i = 0, ien = settings.aiDisplayMaster.length; i < ien; i++) {
      var rowIdx = settings.aiDisplayMaster[i];
      var data = _fnGetRowDisplay(settings, rowIdx)[colIdx];
      var cellString = data && typeof data === "object" && data.nodeType ? data.innerHTML : data + "";
      cellString = cellString.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "");
      s = _stripHtml(cellString).replace(/&nbsp;/g, " ");
      if (s.length > maxLen) {
        max = cellString;
        maxLen = s.length;
      }
    }
    column.maxLenString = max;
  }
  return column.maxLenString;
}
function _fnStringToCss(s) {
  if (s === null) {
    return "0px";
  }
  if (typeof s == "number") {
    return s < 0 ? "0px" : s + "px";
  }
  return s.match(/\d$/) ? s + "px" : s;
}
function _colGroup(settings) {
  var cols = settings.aoColumns;
  settings.colgroup.empty();
  for (i = 0; i < cols.length; i++) {
    if (cols[i].bVisible) {
      settings.colgroup.append(cols[i].colEl);
    }
  }
}
function _fnSortInit(settings) {
  var target = settings.nTHead;
  var headerRows = target.querySelectorAll("tr");
  var legacyTop = settings.bSortCellsTop;
  var notSelector = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
  if (legacyTop === true) {
    target = headerRows[0];
  } else if (legacyTop === false) {
    target = headerRows[headerRows.length - 1];
  }
  _fnSortAttachListener(
    settings,
    target,
    target === settings.nTHead ? "tr" + notSelector + " th" + notSelector + ", tr" + notSelector + " td" + notSelector : "th" + notSelector + ", td" + notSelector
  );
  var order = [];
  _fnSortResolve(settings, order, settings.aaSorting);
  settings.aaSorting = order;
}
function _fnSortAttachListener(settings, node, selector, column, callback) {
  _fnBindAction(node, selector, function(e) {
    var run = false;
    var columns = column === void 0 ? _fnColumnsFromHeader(e.target) : [column];
    if (columns.length) {
      for (var i = 0, ien = columns.length; i < ien; i++) {
        var ret = _fnSortAdd(settings, columns[i], i, e.shiftKey);
        if (ret !== false) {
          run = true;
        }
        if (settings.aaSorting.length === 1 && settings.aaSorting[0][1] === "") {
          break;
        }
      }
      if (run) {
        _fnProcessingRun(settings, true, function() {
          _fnSort(settings);
          _fnSortDisplay(settings, settings.aiDisplay);
          _fnReDraw(settings, false, false);
          if (callback) {
            callback();
          }
        });
      }
    }
  });
}
function _fnSortDisplay(settings, display) {
  if (display.length < 2) {
    return;
  }
  var master = settings.aiDisplayMaster;
  var masterMap = {};
  var map = {};
  var i;
  for (i = 0; i < master.length; i++) {
    masterMap[master[i]] = i;
  }
  for (i = 0; i < display.length; i++) {
    map[display[i]] = masterMap[display[i]];
  }
  display.sort(function(a, b) {
    return map[a] - map[b];
  });
}
function _fnSortResolve(settings, nestedSort, sort) {
  var push = function(a) {
    if ($.isPlainObject(a)) {
      if (a.idx !== void 0) {
        nestedSort.push([a.idx, a.dir]);
      } else if (a.name) {
        var cols = _pluck(settings.aoColumns, "sName");
        var idx = cols.indexOf(a.name);
        if (idx !== -1) {
          nestedSort.push([idx, a.dir]);
        }
      }
    } else {
      nestedSort.push(a);
    }
  };
  if ($.isPlainObject(sort)) {
    push(sort);
  } else if (sort.length && typeof sort[0] === "number") {
    push(sort);
  } else if (sort.length) {
    for (var z = 0; z < sort.length; z++) {
      push(sort[z]);
    }
  }
}
function _fnSortFlatten(settings) {
  var i, k, kLen, aSort = [], extSort = DataTable.ext.type.order, aoColumns = settings.aoColumns, aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed, fixedObj = $.isPlainObject(fixed), nestedSort = [];
  if (!settings.oFeatures.bSort) {
    return aSort;
  }
  if (Array.isArray(fixed)) {
    _fnSortResolve(settings, nestedSort, fixed);
  }
  if (fixedObj && fixed.pre) {
    _fnSortResolve(settings, nestedSort, fixed.pre);
  }
  _fnSortResolve(settings, nestedSort, settings.aaSorting);
  if (fixedObj && fixed.post) {
    _fnSortResolve(settings, nestedSort, fixed.post);
  }
  for (i = 0; i < nestedSort.length; i++) {
    srcCol = nestedSort[i][0];
    if (aoColumns[srcCol]) {
      aDataSort = aoColumns[srcCol].aDataSort;
      for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
        iCol = aDataSort[k];
        sType = aoColumns[iCol].sType || "string";
        if (nestedSort[i]._idx === void 0) {
          nestedSort[i]._idx = aoColumns[iCol].asSorting.indexOf(nestedSort[i][1]);
        }
        if (nestedSort[i][1]) {
          aSort.push({
            src: srcCol,
            col: iCol,
            dir: nestedSort[i][1],
            index: nestedSort[i]._idx,
            type: sType,
            formatter: extSort[sType + "-pre"],
            sorter: extSort[sType + "-" + nestedSort[i][1]]
          });
        }
      }
    }
  }
  return aSort;
}
function _fnSort(oSettings, col, dir) {
  var i, ien, iLen, aiOrig = [], extSort = DataTable.ext.type.order, aoData = oSettings.aoData, sortCol, displayMaster = oSettings.aiDisplayMaster, aSort;
  if (col !== void 0) {
    var srcCol = oSettings.aoColumns[col];
    aSort = [{
      src: col,
      col,
      dir,
      index: 0,
      type: srcCol.sType,
      formatter: extSort[srcCol.sType + "-pre"],
      sorter: extSort[srcCol.sType + "-" + dir]
    }];
    displayMaster = displayMaster.slice();
  } else {
    aSort = _fnSortFlatten(oSettings);
  }
  for (i = 0, ien = aSort.length; i < ien; i++) {
    sortCol = aSort[i];
    _fnSortData(oSettings, sortCol.col);
  }
  if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
    for (i = 0, iLen = displayMaster.length; i < iLen; i++) {
      aiOrig[i] = i;
    }
    if (aSort.length && aSort[0].dir === "desc" && oSettings.orderDescReverse) {
      aiOrig.reverse();
    }
    displayMaster.sort(function(a, b) {
      var x, y, k, test, sort, len = aSort.length, dataA = aoData[a]._aSortData, dataB = aoData[b]._aSortData;
      for (k = 0; k < len; k++) {
        sort = aSort[k];
        x = dataA[sort.col];
        y = dataB[sort.col];
        if (sort.sorter) {
          test = sort.sorter(x, y);
          if (test !== 0) {
            return test;
          }
        } else {
          test = x < y ? -1 : x > y ? 1 : 0;
          if (test !== 0) {
            return sort.dir === "asc" ? test : -test;
          }
        }
      }
      x = aiOrig[a];
      y = aiOrig[b];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  } else if (aSort.length === 0) {
    displayMaster.sort(function(x, y) {
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  if (col === void 0) {
    oSettings.bSorted = true;
    oSettings.sortDetails = aSort;
    _fnCallbackFire(oSettings, null, "order", [oSettings, aSort]);
  }
  return displayMaster;
}
function _fnSortAdd(settings, colIdx, addIndex, shift) {
  var col = settings.aoColumns[colIdx];
  var sorting = settings.aaSorting;
  var asSorting = col.asSorting;
  var nextSortIdx;
  var next = function(a, overflow) {
    var idx = a._idx;
    if (idx === void 0) {
      idx = asSorting.indexOf(a[1]);
    }
    return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
  };
  if (!col.bSortable) {
    return false;
  }
  if (typeof sorting[0] === "number") {
    sorting = settings.aaSorting = [sorting];
  }
  if ((shift || addIndex) && settings.oFeatures.bSortMulti) {
    var sortIdx = _pluck(sorting, "0").indexOf(colIdx);
    if (sortIdx !== -1) {
      nextSortIdx = next(sorting[sortIdx], true);
      if (nextSortIdx === null && sorting.length === 1) {
        nextSortIdx = 0;
      }
      if (nextSortIdx === null) {
        sorting.splice(sortIdx, 1);
      } else {
        sorting[sortIdx][1] = asSorting[nextSortIdx];
        sorting[sortIdx]._idx = nextSortIdx;
      }
    } else if (shift) {
      sorting.push([colIdx, asSorting[0], 0]);
      sorting[sorting.length - 1]._idx = 0;
    } else {
      sorting.push([colIdx, sorting[0][1], 0]);
      sorting[sorting.length - 1]._idx = 0;
    }
  } else if (sorting.length && sorting[0][0] == colIdx) {
    nextSortIdx = next(sorting[0]);
    sorting.length = 1;
    sorting[0][1] = asSorting[nextSortIdx];
    sorting[0]._idx = nextSortIdx;
  } else {
    sorting.length = 0;
    sorting.push([colIdx, asSorting[0]]);
    sorting[0]._idx = 0;
  }
}
function _fnSortingClasses(settings) {
  var oldSort = settings.aLastSort;
  var sortClass = settings.oClasses.order.position;
  var sort = _fnSortFlatten(settings);
  var features = settings.oFeatures;
  var i, ien, colIdx;
  if (features.bSort && features.bSortClasses) {
    for (i = 0, ien = oldSort.length; i < ien; i++) {
      colIdx = oldSort[i].src;
      $(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3));
    }
    for (i = 0, ien = sort.length; i < ien; i++) {
      colIdx = sort[i].src;
      $(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3));
    }
  }
  settings.aLastSort = sort;
}
function _fnSortData(settings, colIdx) {
  var column = settings.aoColumns[colIdx];
  var customSort = DataTable.ext.order[column.sSortDataType];
  var customData;
  if (customSort) {
    customData = customSort.call(
      settings.oInstance,
      settings,
      colIdx,
      _fnColumnIndexToVisible(settings, colIdx)
    );
  }
  var row, cellData;
  var formatter = DataTable.ext.type.order[column.sType + "-pre"];
  var data = settings.aoData;
  for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
    if (!data[rowIdx]) {
      continue;
    }
    row = data[rowIdx];
    if (!row._aSortData) {
      row._aSortData = [];
    }
    if (!row._aSortData[colIdx] || customSort) {
      cellData = customSort ? customData[rowIdx] : (
        // If there was a custom sort function, use data from there
        _fnGetCellData(settings, rowIdx, colIdx, "sort")
      );
      row._aSortData[colIdx] = formatter ? formatter(cellData, settings) : cellData;
    }
  }
}
function _fnSaveState(settings) {
  if (settings._bLoadingState) {
    return;
  }
  var state = {
    time: +/* @__PURE__ */ new Date(),
    start: settings._iDisplayStart,
    length: settings._iDisplayLength,
    order: $.extend(true, [], settings.aaSorting),
    search: $.extend({}, settings.oPreviousSearch),
    columns: settings.aoColumns.map(function(col, i) {
      return {
        visible: col.bVisible,
        search: $.extend({}, settings.aoPreSearchCols[i])
      };
    })
  };
  settings.oSavedState = state;
  _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
  if (settings.oFeatures.bStateSave && !settings.bDestroying) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
  }
}
function _fnLoadState(settings, init, callback) {
  if (!settings.oFeatures.bStateSave) {
    callback();
    return;
  }
  var loaded = function(state2) {
    _fnImplementState(settings, state2, callback);
  };
  var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
  if (state !== void 0) {
    _fnImplementState(settings, state, callback);
  }
  return true;
}
function _fnImplementState(settings, s, callback) {
  var i, ien;
  var columns = settings.aoColumns;
  settings._bLoadingState = true;
  var api = settings._bInitComplete ? new DataTable.Api(settings) : null;
  if (!s || !s.time) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var duration = settings.iStateDuration;
  if (duration > 0 && s.time < +/* @__PURE__ */ new Date() - duration * 1e3) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
  if (abStateLoad.indexOf(false) !== -1) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  if (s.columns && columns.length !== s.columns.length) {
    settings._bLoadingState = false;
    callback();
    return;
  }
  settings.oLoadedState = $.extend(true, {}, s);
  _fnCallbackFire(settings, null, "stateLoadInit", [settings, s], true);
  if (s.length !== void 0) {
    if (api) {
      api.page.len(s.length);
    } else {
      settings._iDisplayLength = s.length;
    }
  }
  if (s.start !== void 0) {
    if (api === null) {
      settings._iDisplayStart = s.start;
      settings.iInitDisplayStart = s.start;
    } else {
      _fnPageChange(settings, s.start / settings._iDisplayLength);
    }
  }
  if (s.order !== void 0) {
    settings.aaSorting = [];
    $.each(s.order, function(i2, col2) {
      settings.aaSorting.push(
        col2[0] >= columns.length ? [0, col2[1]] : col2
      );
    });
  }
  if (s.search !== void 0) {
    $.extend(settings.oPreviousSearch, s.search);
  }
  if (s.columns) {
    for (i = 0, ien = s.columns.length; i < ien; i++) {
      var col = s.columns[i];
      if (col.visible !== void 0) {
        if (api) {
          api.column(i).visible(col.visible, false);
        } else {
          columns[i].bVisible = col.visible;
        }
      }
      if (col.search !== void 0) {
        $.extend(settings.aoPreSearchCols[i], col.search);
      }
    }
    if (api) {
      api.columns.adjust();
    }
  }
  settings._bLoadingState = false;
  _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
  callback();
}
function _fnLog(settings, level, msg, tn) {
  msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
  if (tn) {
    msg += ". For more information about this error, please see https://datatables.net/tn/" + tn;
  }
  if (!level) {
    var ext = DataTable.ext;
    var type = ext.sErrMode || ext.errMode;
    if (settings) {
      _fnCallbackFire(settings, null, "dt-error", [settings, tn, msg], true);
    }
    if (type == "alert") {
      alert(msg);
    } else if (type == "throw") {
      throw new Error(msg);
    } else if (typeof type == "function") {
      type(settings, tn, msg);
    }
  } else if (window.console && console.log) {
    console.log(msg);
  }
}
function _fnMap(ret, src, name, mappedName) {
  if (Array.isArray(name)) {
    $.each(name, function(i, val) {
      if (Array.isArray(val)) {
        _fnMap(ret, src, val[0], val[1]);
      } else {
        _fnMap(ret, src, val);
      }
    });
    return;
  }
  if (mappedName === void 0) {
    mappedName = name;
  }
  if (src[name] !== void 0) {
    ret[mappedName] = src[name];
  }
}
function _fnExtend(out, extender, breakRefs) {
  var val;
  for (var prop in extender) {
    if (Object.prototype.hasOwnProperty.call(extender, prop)) {
      val = extender[prop];
      if ($.isPlainObject(val)) {
        if (!$.isPlainObject(out[prop])) {
          out[prop] = {};
        }
        $.extend(true, out[prop], val);
      } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
        out[prop] = val.slice();
      } else {
        out[prop] = val;
      }
    }
  }
  return out;
}
function _fnBindAction(n, selector, fn) {
  $(n).on("click.DT", selector, function(e) {
    fn(e);
  }).on("keypress.DT", selector, function(e) {
    if (e.which === 13) {
      e.preventDefault();
      fn(e);
    }
  }).on("selectstart.DT", selector, function() {
    return false;
  });
}
function _fnCallbackReg(settings, store, fn) {
  if (fn) {
    settings[store].push(fn);
  }
}
function _fnCallbackFire(settings, callbackArr, eventName, args, bubbles) {
  var ret = [];
  if (callbackArr) {
    ret = settings[callbackArr].slice().reverse().map(function(val) {
      return val.apply(settings.oInstance, args);
    });
  }
  if (eventName !== null) {
    var e = $.Event(eventName + ".dt");
    var table = $(settings.nTable);
    e.dt = settings.api;
    table[bubbles ? "trigger" : "triggerHandler"](e, args);
    if (bubbles && table.parents("body").length === 0) {
      $("body").trigger(e, args);
    }
    ret.push(e.result);
  }
  return ret;
}
function _fnLengthOverflow(settings) {
  var start = settings._iDisplayStart, end = settings.fnDisplayEnd(), len = settings._iDisplayLength;
  if (start >= end) {
    start = end - len;
  }
  start -= start % len;
  if (len === -1 || start < 0) {
    start = 0;
  }
  settings._iDisplayStart = start;
}
function _fnRenderer(settings, type) {
  var renderer = settings.renderer;
  var host = DataTable.ext.renderer[type];
  if ($.isPlainObject(renderer) && renderer[type]) {
    return host[renderer[type]] || host._;
  } else if (typeof renderer === "string") {
    return host[renderer] || host._;
  }
  return host._;
}
function _fnDataSource(settings) {
  if (settings.oFeatures.bServerSide) {
    return "ssp";
  } else if (settings.ajax) {
    return "ajax";
  }
  return "dom";
}
function _fnMacros(settings, str, entries) {
  var formatter = settings.fnFormatNumber, start = settings._iDisplayStart + 1, len = settings._iDisplayLength, vis = settings.fnRecordsDisplay(), max = settings.fnRecordsTotal(), all = len === -1;
  return str.replace(/_START_/g, formatter.call(settings, start)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, max)).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len))).replace(/_ENTRIES_/g, settings.api.i18n("entries", "", entries)).replace(/_ENTRIES-MAX_/g, settings.api.i18n("entries", "", max)).replace(/_ENTRIES-TOTAL_/g, settings.api.i18n("entries", "", vis));
}
var __apiStruct = [];
var __arrayProto = Array.prototype;
var _toSettings = function(mixed) {
  var idx, jq;
  var settings = DataTable.settings;
  var tables = _pluck(settings, "nTable");
  if (!mixed) {
    return [];
  } else if (mixed.nTable && mixed.oFeatures) {
    return [mixed];
  } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
    idx = tables.indexOf(mixed);
    return idx !== -1 ? [settings[idx]] : null;
  } else if (mixed && typeof mixed.settings === "function") {
    return mixed.settings().toArray();
  } else if (typeof mixed === "string") {
    jq = $(mixed).get();
  } else if (mixed instanceof $) {
    jq = mixed.get();
  }
  if (jq) {
    return settings.filter(function(v, idx2) {
      return jq.includes(tables[idx2]);
    });
  }
};
_Api = function(context, data) {
  if (!(this instanceof _Api)) {
    return new _Api(context, data);
  }
  var i;
  var settings = [];
  var ctxSettings = function(o) {
    var a = _toSettings(o);
    if (a) {
      settings.push.apply(settings, a);
    }
  };
  if (Array.isArray(context)) {
    for (i = 0; i < context.length; i++) {
      ctxSettings(context[i]);
    }
  } else {
    ctxSettings(context);
  }
  this.context = settings.length > 1 ? _unique(settings) : settings;
  if (data) {
    if (data.length < 1e4) {
      this.push.apply(this, data);
    } else {
      for (i = 0; i < data.length; i++) {
        this.push(data[i]);
      }
    }
  }
  this.selector = {
    rows: null,
    cols: null,
    opts: null
  };
  _Api.extend(this, this, __apiStruct);
};
DataTable.Api = _Api;
$.extend(_Api.prototype, {
  any: function() {
    return this.count() !== 0;
  },
  context: [],
  // array of table settings objects
  count: function() {
    return this.flatten().length;
  },
  each: function(fn) {
    for (var i = 0, ien = this.length; i < ien; i++) {
      fn.call(this, this[i], i, this);
    }
    return this;
  },
  eq: function(idx) {
    var ctx = this.context;
    return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null;
  },
  filter: function(fn) {
    var a = __arrayProto.filter.call(this, fn, this);
    return new _Api(this.context, a);
  },
  flatten: function() {
    var a = [];
    return new _Api(this.context, a.concat.apply(a, this.toArray()));
  },
  get: function(idx) {
    return this[idx];
  },
  join: __arrayProto.join,
  includes: function(find) {
    return this.indexOf(find) === -1 ? false : true;
  },
  indexOf: __arrayProto.indexOf,
  iterator: function(flatten, type, fn, alwaysNew) {
    var a = [], ret, i, ien, j, jen, context = this.context, rows, items, item, selector = this.selector;
    if (typeof flatten === "string") {
      alwaysNew = fn;
      fn = type;
      type = flatten;
      flatten = false;
    }
    for (i = 0, ien = context.length; i < ien; i++) {
      var apiInst = new _Api(context[i]);
      if (type === "table") {
        ret = fn.call(apiInst, context[i], i);
        if (ret !== void 0) {
          a.push(ret);
        }
      } else if (type === "columns" || type === "rows") {
        ret = fn.call(apiInst, context[i], this[i], i);
        if (ret !== void 0) {
          a.push(ret);
        }
      } else if (type === "every" || type === "column" || type === "column-rows" || type === "row" || type === "cell") {
        items = this[i];
        if (type === "column-rows") {
          rows = _selector_row_indexes(context[i], selector.opts);
        }
        for (j = 0, jen = items.length; j < jen; j++) {
          item = items[j];
          if (type === "cell") {
            ret = fn.call(apiInst, context[i], item.row, item.column, i, j);
          } else {
            ret = fn.call(apiInst, context[i], item, i, j, rows);
          }
          if (ret !== void 0) {
            a.push(ret);
          }
        }
      }
    }
    if (a.length || alwaysNew) {
      var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
      var apiSelector = api.selector;
      apiSelector.rows = selector.rows;
      apiSelector.cols = selector.cols;
      apiSelector.opts = selector.opts;
      return api;
    }
    return this;
  },
  lastIndexOf: __arrayProto.lastIndexOf,
  length: 0,
  map: function(fn) {
    var a = __arrayProto.map.call(this, fn, this);
    return new _Api(this.context, a);
  },
  pluck: function(prop) {
    var fn = DataTable.util.get(prop);
    return this.map(function(el) {
      return fn(el);
    });
  },
  pop: __arrayProto.pop,
  push: __arrayProto.push,
  reduce: __arrayProto.reduce,
  reduceRight: __arrayProto.reduceRight,
  reverse: __arrayProto.reverse,
  // Object with rows, columns and opts
  selector: null,
  shift: __arrayProto.shift,
  slice: function() {
    return new _Api(this.context, this);
  },
  sort: __arrayProto.sort,
  splice: __arrayProto.splice,
  toArray: function() {
    return __arrayProto.slice.call(this);
  },
  to$: function() {
    return $(this);
  },
  toJQuery: function() {
    return $(this);
  },
  unique: function() {
    return new _Api(this.context, _unique(this.toArray()));
  },
  unshift: __arrayProto.unshift
});
function _api_scope(scope, fn, struc) {
  return function() {
    var ret = fn.apply(scope || this, arguments);
    _Api.extend(ret, ret, struc.methodExt);
    return ret;
  };
}
function _api_find(src, name) {
  for (var i = 0, ien = src.length; i < ien; i++) {
    if (src[i].name === name) {
      return src[i];
    }
  }
  return null;
}
window.__apiStruct = __apiStruct;
_Api.extend = function(scope, obj, ext) {
  if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
    return;
  }
  var i, ien, struct;
  for (i = 0, ien = ext.length; i < ien; i++) {
    struct = ext[i];
    if (struct.name === "__proto__") {
      continue;
    }
    obj[struct.name] = struct.type === "function" ? _api_scope(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
    obj[struct.name].__dt_wrapper = true;
    _Api.extend(scope, obj[struct.name], struct.propExt);
  }
};
_Api.register = _api_register = function(name, val) {
  if (Array.isArray(name)) {
    for (var j = 0, jen = name.length; j < jen; j++) {
      _Api.register(name[j], val);
    }
    return;
  }
  var i, ien, heir = name.split("."), struct = __apiStruct, key, method;
  for (i = 0, ien = heir.length; i < ien; i++) {
    method = heir[i].indexOf("()") !== -1;
    key = method ? heir[i].replace("()", "") : heir[i];
    var src = _api_find(struct, key);
    if (!src) {
      src = {
        name: key,
        val: {},
        methodExt: [],
        propExt: [],
        type: "object"
      };
      struct.push(src);
    }
    if (i === ien - 1) {
      src.val = val;
      src.type = typeof val === "function" ? "function" : $.isPlainObject(val) ? "object" : "other";
    } else {
      struct = method ? src.methodExt : src.propExt;
    }
  }
};
_Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
  _Api.register(pluralName, val);
  _Api.register(singularName, function() {
    var ret = val.apply(this, arguments);
    if (ret === this) {
      return this;
    } else if (ret instanceof _Api) {
      return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : (
        // Array results are 'enhanced'
        ret[0]
      ) : void 0;
    }
    return ret;
  });
};
var __table_selector = function(selector, a) {
  if (Array.isArray(selector)) {
    var result = [];
    selector.forEach(function(sel) {
      var inner = __table_selector(sel, a);
      result.push.apply(result, inner);
    });
    return result.filter(function(item) {
      return item;
    });
  }
  if (typeof selector === "number") {
    return [a[selector]];
  }
  var nodes = a.map(function(el) {
    return el.nTable;
  });
  return $(nodes).filter(selector).map(function() {
    var idx = nodes.indexOf(this);
    return a[idx];
  }).toArray();
};
_api_register("tables()", function(selector) {
  return selector !== void 0 && selector !== null ? new _Api(__table_selector(selector, this.context)) : this;
});
_api_register("table()", function(selector) {
  var tables = this.tables(selector);
  var ctx = tables.context;
  return ctx.length ? new _Api(ctx[0]) : tables;
});
[
  ["nodes", "node", "nTable"],
  ["body", "body", "nTBody"],
  ["header", "header", "nTHead"],
  ["footer", "footer", "nTFoot"]
].forEach(function(item) {
  _api_registerPlural(
    "tables()." + item[0] + "()",
    "table()." + item[1] + "()",
    function() {
      return this.iterator("table", function(ctx) {
        return ctx[item[2]];
      }, 1);
    }
  );
});
[
  ["header", "aoHeader"],
  ["footer", "aoFooter"]
].forEach(function(item) {
  _api_register("table()." + item[0] + ".structure()", function(selector) {
    var indexes = this.columns(selector).indexes().flatten();
    var ctx = this.context[0];
    return _fnHeaderLayout(ctx, ctx[item[1]], indexes);
  });
});
_api_registerPlural("tables().containers()", "table().container()", function() {
  return this.iterator("table", function(ctx) {
    return ctx.nTableWrapper;
  }, 1);
});
_api_register("tables().every()", function(fn) {
  var that = this;
  return this.iterator("table", function(s, i) {
    fn.call(that.table(i), i);
  });
});
_api_register("caption()", function(value, side) {
  var context = this.context;
  if (value === void 0) {
    var caption = context[0].captionNode;
    return caption && context.length ? caption.innerHTML : null;
  }
  return this.iterator("table", function(ctx) {
    var table = $(ctx.nTable);
    var caption2 = $(ctx.captionNode);
    var container = $(ctx.nTableWrapper);
    if (!caption2.length) {
      caption2 = $("<caption/>").html(value);
      ctx.captionNode = caption2[0];
      if (!side) {
        table.prepend(caption2);
        side = caption2.css("caption-side");
      }
    }
    caption2.html(value);
    if (side) {
      caption2.css("caption-side", side);
      caption2[0]._captionSide = side;
    }
    if (container.find("div.dataTables_scroll").length) {
      var selector = side === "top" ? "Head" : "Foot";
      container.find("div.dataTables_scroll" + selector + " table").prepend(caption2);
    } else {
      table.prepend(caption2);
    }
  }, 1);
});
_api_register("caption.node()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].captionNode : null;
});
_api_register("draw()", function(paging) {
  return this.iterator("table", function(settings) {
    if (paging === "page") {
      _fnDraw(settings);
    } else {
      if (typeof paging === "string") {
        paging = paging === "full-hold" ? false : true;
      }
      _fnReDraw(settings, paging === false);
    }
  });
});
_api_register("page()", function(action) {
  if (action === void 0) {
    return this.page.info().page;
  }
  return this.iterator("table", function(settings) {
    _fnPageChange(settings, action);
  });
});
_api_register("page.info()", function() {
  if (this.context.length === 0) {
    return void 0;
  }
  var settings = this.context[0], start = settings._iDisplayStart, len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1, visRecords = settings.fnRecordsDisplay(), all = len === -1;
  return {
    "page": all ? 0 : Math.floor(start / len),
    "pages": all ? 1 : Math.ceil(visRecords / len),
    "start": start,
    "end": settings.fnDisplayEnd(),
    "length": len,
    "recordsTotal": settings.fnRecordsTotal(),
    "recordsDisplay": visRecords,
    "serverSide": _fnDataSource(settings) === "ssp"
  };
});
_api_register("page.len()", function(len) {
  if (len === void 0) {
    return this.context.length !== 0 ? this.context[0]._iDisplayLength : void 0;
  }
  return this.iterator("table", function(settings) {
    _fnLengthChange(settings, len);
  });
});
var __reload = function(settings, holdPosition, callback) {
  if (callback) {
    var api = new _Api(settings);
    api.one("draw", function() {
      callback(api.ajax.json());
    });
  }
  if (_fnDataSource(settings) == "ssp") {
    _fnReDraw(settings, holdPosition);
  } else {
    _fnProcessingDisplay(settings, true);
    var xhr = settings.jqXHR;
    if (xhr && xhr.readyState !== 4) {
      xhr.abort();
    }
    _fnBuildAjax(settings, {}, function(json) {
      _fnClearTable(settings);
      var data = _fnAjaxDataSrc(settings, json);
      for (var i = 0, ien = data.length; i < ien; i++) {
        _fnAddData(settings, data[i]);
      }
      _fnReDraw(settings, holdPosition);
      _fnInitComplete(settings);
      _fnProcessingDisplay(settings, false);
    });
  }
};
_api_register("ajax.json()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].json;
  }
});
_api_register("ajax.params()", function() {
  var ctx = this.context;
  if (ctx.length > 0) {
    return ctx[0].oAjaxData;
  }
});
_api_register("ajax.reload()", function(callback, resetPaging) {
  return this.iterator("table", function(settings) {
    __reload(settings, resetPaging === false, callback);
  });
});
_api_register("ajax.url()", function(url) {
  var ctx = this.context;
  if (url === void 0) {
    if (ctx.length === 0) {
      return void 0;
    }
    ctx = ctx[0];
    return $.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax;
  }
  return this.iterator("table", function(settings) {
    if ($.isPlainObject(settings.ajax)) {
      settings.ajax.url = url;
    } else {
      settings.ajax = url;
    }
  });
});
_api_register("ajax.url().load()", function(callback, resetPaging) {
  return this.iterator("table", function(ctx) {
    __reload(ctx, resetPaging === false, callback);
  });
});
var _selector_run = function(type, selector, selectFn, settings, opts) {
  var out = [], res, a, i, ien, j, jen, selectorType = typeof selector;
  if (!selector || selectorType === "string" || selectorType === "function" || selector.length === void 0) {
    selector = [selector];
  }
  for (i = 0, ien = selector.length; i < ien; i++) {
    a = selector[i] && selector[i].split && !selector[i].match(/[[(:]/) ? selector[i].split(",") : [selector[i]];
    for (j = 0, jen = a.length; j < jen; j++) {
      res = selectFn(typeof a[j] === "string" ? a[j].trim() : a[j]);
      res = res.filter(function(item) {
        return item !== null && item !== void 0;
      });
      if (res && res.length) {
        out = out.concat(res);
      }
    }
  }
  var ext = _ext.selector[type];
  if (ext.length) {
    for (i = 0, ien = ext.length; i < ien; i++) {
      out = ext[i](settings, opts, out);
    }
  }
  return _unique(out);
};
var _selector_opts = function(opts) {
  if (!opts) {
    opts = {};
  }
  if (opts.filter && opts.search === void 0) {
    opts.search = opts.filter;
  }
  return $.extend({
    search: "none",
    order: "current",
    page: "all"
  }, opts);
};
var _selector_first = function(old) {
  var inst = new _Api(old.context[0]);
  if (old.length) {
    inst.push(old[0]);
  }
  inst.selector = old.selector;
  if (inst.length && inst[0].length > 1) {
    inst[0].splice(1);
  }
  return inst;
};
var _selector_row_indexes = function(settings, opts) {
  var i, ien, tmp, a = [], displayFiltered = settings.aiDisplay, displayMaster = settings.aiDisplayMaster;
  var search = opts.search, order = opts.order, page = opts.page;
  if (_fnDataSource(settings) == "ssp") {
    return search === "removed" ? [] : _range(0, displayMaster.length);
  }
  if (page == "current") {
    for (i = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i < ien; i++) {
      a.push(displayFiltered[i]);
    }
  } else if (order == "current" || order == "applied") {
    if (search == "none") {
      a = displayMaster.slice();
    } else if (search == "applied") {
      a = displayFiltered.slice();
    } else if (search == "removed") {
      var displayFilteredMap = {};
      for (i = 0, ien = displayFiltered.length; i < ien; i++) {
        displayFilteredMap[displayFiltered[i]] = null;
      }
      displayMaster.forEach(function(item) {
        if (!Object.prototype.hasOwnProperty.call(displayFilteredMap, item)) {
          a.push(item);
        }
      });
    }
  } else if (order == "index" || order == "original") {
    for (i = 0, ien = settings.aoData.length; i < ien; i++) {
      if (!settings.aoData[i]) {
        continue;
      }
      if (search == "none") {
        a.push(i);
      } else {
        tmp = displayFiltered.indexOf(i);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(i);
        }
      }
    }
  } else if (typeof order === "number") {
    var ordered = _fnSort(settings, order, "asc");
    if (search === "none") {
      a = ordered;
    } else {
      for (i = 0; i < ordered.length; i++) {
        tmp = displayFiltered.indexOf(ordered[i]);
        if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
          a.push(ordered[i]);
        }
      }
    }
  }
  return a;
};
var __row_selector = function(settings, selector, opts) {
  var rows;
  var run = function(sel) {
    var selInt = _intVal(sel);
    var aoData = settings.aoData;
    if (selInt !== null && !opts) {
      return [selInt];
    }
    if (!rows) {
      rows = _selector_row_indexes(settings, opts);
    }
    if (selInt !== null && rows.indexOf(selInt) !== -1) {
      return [selInt];
    } else if (sel === null || sel === void 0 || sel === "") {
      return rows;
    }
    if (typeof sel === "function") {
      return rows.map(function(idx) {
        var row = aoData[idx];
        return sel(idx, row._aData, row.nTr) ? idx : null;
      });
    }
    if (sel.nodeName) {
      var rowIdx = sel._DT_RowIndex;
      var cellIdx = sel._DT_CellIndex;
      if (rowIdx !== void 0) {
        return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : [];
      } else if (cellIdx) {
        return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : [];
      } else {
        var host = $(sel).closest("*[data-dt-row]");
        return host.length ? [host.data("dt-row")] : [];
      }
    }
    if (typeof sel === "string" && sel.charAt(0) === "#") {
      var rowObj = settings.aIds[sel.replace(/^#/, "")];
      if (rowObj !== void 0) {
        return [rowObj.idx];
      }
    }
    var nodes = _removeEmpty(
      _pluck_order(settings.aoData, rows, "nTr")
    );
    return $(nodes).filter(sel).map(function() {
      return this._DT_RowIndex;
    }).toArray();
  };
  var matched = _selector_run("row", selector, run, settings, opts);
  if (opts.order === "current" || opts.order === "applied") {
    _fnSortDisplay(settings, matched);
  }
  return matched;
};
_api_register("rows()", function(selector, opts) {
  if (selector === void 0) {
    selector = "";
  } else if ($.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __row_selector(settings, selector, opts);
  }, 1);
  inst.selector.rows = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_register("rows().nodes()", function() {
  return this.iterator("row", function(settings, row) {
    return settings.aoData[row].nTr || void 0;
  }, 1);
});
_api_register("rows().data()", function() {
  return this.iterator(true, "rows", function(settings, rows) {
    return _pluck_order(settings.aoData, rows, "_aData");
  }, 1);
});
_api_registerPlural("rows().cache()", "row().cache()", function(type) {
  return this.iterator("row", function(settings, row) {
    var r = settings.aoData[row];
    return type === "search" ? r._aFilterData : r._aSortData;
  }, 1);
});
_api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
  return this.iterator("row", function(settings, row) {
    _fnInvalidate(settings, row, src);
  });
});
_api_registerPlural("rows().indexes()", "row().index()", function() {
  return this.iterator("row", function(settings, row) {
    return row;
  }, 1);
});
_api_registerPlural("rows().ids()", "row().id()", function(hash) {
  var a = [];
  var context = this.context;
  for (var i = 0, ien = context.length; i < ien; i++) {
    for (var j = 0, jen = this[i].length; j < jen; j++) {
      var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);
      a.push((hash === true ? "#" : "") + id);
    }
  }
  return new _Api(context, a);
});
_api_registerPlural("rows().remove()", "row().remove()", function() {
  this.iterator("row", function(settings, row) {
    var data = settings.aoData;
    var rowData = data[row];
    var idx = settings.aiDisplayMaster.indexOf(row);
    if (idx !== -1) {
      settings.aiDisplayMaster.splice(idx, 1);
    }
    if (settings._iRecordsDisplay > 0) {
      settings._iRecordsDisplay--;
    }
    _fnLengthOverflow(settings);
    var id = settings.rowIdFn(rowData._aData);
    if (id !== void 0) {
      delete settings.aIds[id];
    }
    data[row] = null;
  });
  return this;
});
_api_register("rows.add()", function(rows) {
  var newRows = this.iterator("table", function(settings) {
    var row, i, ien;
    var out = [];
    for (i = 0, ien = rows.length; i < ien; i++) {
      row = rows[i];
      if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
        out.push(_fnAddTr(settings, row)[0]);
      } else {
        out.push(_fnAddData(settings, row));
      }
    }
    return out;
  }, 1);
  var modRows = this.rows(-1);
  modRows.pop();
  modRows.push.apply(modRows, newRows);
  return modRows;
});
_api_register("row()", function(selector, opts) {
  return _selector_first(this.rows(selector, opts));
});
_api_register("row().data()", function(data) {
  var ctx = this.context;
  if (data === void 0) {
    return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]]._aData : void 0;
  }
  var row = ctx[0].aoData[this[0]];
  row._aData = data;
  if (Array.isArray(data) && row.nTr && row.nTr.id) {
    _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id);
  }
  _fnInvalidate(ctx[0], this[0], "data");
  return this;
});
_api_register("row().node()", function() {
  var ctx = this.context;
  if (ctx.length && this.length && this[0].length) {
    var row = ctx[0].aoData[this[0]];
    if (row && row.nTr) {
      return row.nTr;
    }
  }
  return null;
});
_api_register("row.add()", function(row) {
  if (row instanceof $ && row.length) {
    row = row[0];
  }
  var rows = this.iterator("table", function(settings) {
    if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
      return _fnAddTr(settings, row)[0];
    }
    return _fnAddData(settings, row);
  });
  return this.row(rows[0]);
});
$(document).on("plugin-init.dt", function(e, context) {
  var api = new _Api(context);
  api.on("stateSaveParams.DT", function(e2, settings, d) {
    var idFn = settings.rowIdFn;
    var rows = settings.aiDisplayMaster;
    var ids = [];
    for (var i = 0; i < rows.length; i++) {
      var rowIdx = rows[i];
      var data = settings.aoData[rowIdx];
      if (data._detailsShow) {
        ids.push("#" + idFn(data._aData));
      }
    }
    d.childRows = ids;
  });
  api.on("stateLoaded.DT", function(e2, settings, state) {
    __details_state_load(api, state);
  });
  __details_state_load(api, api.state.loaded());
});
var __details_state_load = function(api, state) {
  if (state && state.childRows) {
    api.rows(state.childRows.map(function(id) {
      return id.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
    })).every(function() {
      _fnCallbackFire(api.settings()[0], null, "requestChild", [this]);
    });
  }
};
var __details_add = function(ctx, row, data, klass) {
  var rows = [];
  var addRow = function(r, k) {
    if (Array.isArray(r) || r instanceof $) {
      for (var i = 0, ien = r.length; i < ien; i++) {
        addRow(r[i], k);
      }
      return;
    }
    if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
      r.setAttribute("data-dt-row", row.idx);
      rows.push(r);
    } else {
      var created = $("<tr><td></td></tr>").attr("data-dt-row", row.idx).addClass(k);
      $("td", created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);
      rows.push(created[0]);
    }
  };
  addRow(data, klass);
  if (row._details) {
    row._details.detach();
  }
  row._details = $(rows);
  if (row._detailsShow) {
    row._details.insertAfter(row.nTr);
  }
};
var __details_state = DataTable.util.throttle(
  function(ctx) {
    _fnSaveState(ctx[0]);
  },
  500
);
var __details_remove = function(api, idx) {
  var ctx = api.context;
  if (ctx.length) {
    var row = ctx[0].aoData[idx !== void 0 ? idx : api[0]];
    if (row && row._details) {
      row._details.remove();
      row._detailsShow = void 0;
      row._details = void 0;
      $(row.nTr).removeClass("dt-hasChild");
      __details_state(ctx);
    }
  }
};
var __details_display = function(api, show) {
  var ctx = api.context;
  if (ctx.length && api.length) {
    var row = ctx[0].aoData[api[0]];
    if (row._details) {
      row._detailsShow = show;
      if (show) {
        row._details.insertAfter(row.nTr);
        $(row.nTr).addClass("dt-hasChild");
      } else {
        row._details.detach();
        $(row.nTr).removeClass("dt-hasChild");
      }
      _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
      __details_events(ctx[0]);
      __details_state(ctx);
    }
  }
};
var __details_events = function(settings) {
  var api = new _Api(settings);
  var namespace = ".dt.DT_details";
  var drawEvent = "draw" + namespace;
  var colvisEvent = "column-sizing" + namespace;
  var destroyEvent = "destroy" + namespace;
  var data = settings.aoData;
  api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
  if (_pluck(data, "_details").length > 0) {
    api.on(drawEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      api.rows({ page: "current" }).eq(0).each(function(idx) {
        var row = data[idx];
        if (row._detailsShow) {
          row._details.insertAfter(row.nTr);
        }
      });
    });
    api.on(colvisEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      var row, visible = _fnVisbleColumns(ctx);
      for (var i = 0, ien = data.length; i < ien; i++) {
        row = data[i];
        if (row && row._details) {
          row._details.each(function() {
            var el = $(this).children("td");
            if (el.length == 1) {
              el.attr("colspan", visible);
            }
          });
        }
      }
    });
    api.on(destroyEvent, function(e, ctx) {
      if (settings !== ctx) {
        return;
      }
      for (var i = 0, ien = data.length; i < ien; i++) {
        if (data[i] && data[i]._details) {
          __details_remove(api, i);
        }
      }
    });
  }
};
var _emp = "";
var _child_obj = _emp + "row().child";
var _child_mth = _child_obj + "()";
_api_register(_child_mth, function(data, klass) {
  var ctx = this.context;
  if (data === void 0) {
    return ctx.length && this.length && ctx[0].aoData[this[0]] ? ctx[0].aoData[this[0]]._details : void 0;
  } else if (data === true) {
    this.child.show();
  } else if (data === false) {
    __details_remove(this);
  } else if (ctx.length && this.length) {
    __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
  }
  return this;
});
_api_register([
  _child_obj + ".show()",
  _child_mth + ".show()"
  // only when `child()` was called with parameters (without
], function() {
  __details_display(this, true);
  return this;
});
_api_register([
  _child_obj + ".hide()",
  _child_mth + ".hide()"
  // only when `child()` was called with parameters (without
], function() {
  __details_display(this, false);
  return this;
});
_api_register([
  _child_obj + ".remove()",
  _child_mth + ".remove()"
  // only when `child()` was called with parameters (without
], function() {
  __details_remove(this);
  return this;
});
_api_register(_child_obj + ".isShown()", function() {
  var ctx = this.context;
  if (ctx.length && this.length && ctx[0].aoData[this[0]]) {
    return ctx[0].aoData[this[0]]._detailsShow || false;
  }
  return false;
});
var __re_column_selector = /^([^:]+)?:(name|title|visIdx|visible)$/;
var __columnData = function(settings, column, r1, r2, rows, type) {
  var a = [];
  for (var row = 0, ien = rows.length; row < ien; row++) {
    a.push(_fnGetCellData(settings, rows[row], column, type));
  }
  return a;
};
var __column_header = function(settings, column, row) {
  var header = settings.aoHeader;
  var target = row !== void 0 ? row : settings.bSortCellsTop ? 0 : header.length - 1;
  return header[target][column].cell;
};
var __column_selector = function(settings, selector, opts) {
  var columns = settings.aoColumns, names = _pluck(columns, "sName"), titles = _pluck(columns, "sTitle"), cells = DataTable.util.get("[].[].cell")(settings.aoHeader), nodes = _unique(_flatten([], cells));
  var run = function(s) {
    var selInt = _intVal(s);
    if (s === "") {
      return _range(columns.length);
    }
    if (selInt !== null) {
      return [
        selInt >= 0 ? selInt : (
          // Count from left
          columns.length + selInt
        )
        // Count from right (+ because its a negative value)
      ];
    }
    if (typeof s === "function") {
      var rows = _selector_row_indexes(settings, opts);
      return columns.map(function(col, idx2) {
        return s(
          idx2,
          __columnData(settings, idx2, 0, 0, rows),
          __column_header(settings, idx2)
        ) ? idx2 : null;
      });
    }
    var match = typeof s === "string" ? s.match(__re_column_selector) : "";
    if (match) {
      switch (match[2]) {
        case "visIdx":
        case "visible":
          if (match[1] && match[1].match(/^\d+$/)) {
            var idx = parseInt(match[1], 10);
            if (idx < 0) {
              var visColumns = columns.map(function(col, i) {
                return col.bVisible ? i : null;
              });
              return [visColumns[visColumns.length + idx]];
            }
            return [_fnVisibleToColumnIndex(settings, idx)];
          }
          return columns.map(function(col, idx2) {
            if (!col.bVisible) {
              return null;
            }
            if (match[1]) {
              return $(nodes[idx2]).filter(match[1]).length > 0 ? idx2 : null;
            }
            return idx2;
          });
        case "name":
          return names.map(function(name, i) {
            return name === match[1] ? i : null;
          });
        case "title":
          return titles.map(function(title, i) {
            return title === match[1] ? i : null;
          });
        default:
          return [];
      }
    }
    if (s.nodeName && s._DT_CellIndex) {
      return [s._DT_CellIndex.column];
    }
    var jqResult = $(nodes).filter(s).map(function() {
      return _fnColumnsFromHeader(this);
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    var host = $(s).closest("*[data-dt-column]");
    return host.length ? [host.data("dt-column")] : [];
  };
  return _selector_run("column", selector, run, settings, opts);
};
var __setColumnVis = function(settings, column, vis) {
  var cols = settings.aoColumns, col = cols[column], data = settings.aoData, cells, i, ien, tr;
  if (vis === void 0) {
    return col.bVisible;
  }
  if (col.bVisible === vis) {
    return false;
  }
  if (vis) {
    var insertBefore = _pluck(cols, "bVisible").indexOf(true, column + 1);
    for (i = 0, ien = data.length; i < ien; i++) {
      if (data[i]) {
        tr = data[i].nTr;
        cells = data[i].anCells;
        if (tr) {
          tr.insertBefore(cells[column], cells[insertBefore] || null);
        }
      }
    }
  } else {
    $(_pluck(settings.aoData, "anCells", column)).detach();
  }
  col.bVisible = vis;
  _colGroup(settings);
  return true;
};
_api_register("columns()", function(selector, opts) {
  if (selector === void 0) {
    selector = "";
  } else if ($.isPlainObject(selector)) {
    opts = selector;
    selector = "";
  }
  opts = _selector_opts(opts);
  var inst = this.iterator("table", function(settings) {
    return __column_selector(settings, selector, opts);
  }, 1);
  inst.selector.cols = selector;
  inst.selector.opts = opts;
  return inst;
});
_api_registerPlural("columns().header()", "column().header()", function(row) {
  return this.iterator("column", function(settings, column) {
    return __column_header(settings, column, row);
  }, 1);
});
_api_registerPlural("columns().footer()", "column().footer()", function(row) {
  return this.iterator("column", function(settings, column) {
    var footer = settings.aoFooter;
    if (!footer.length) {
      return null;
    }
    return settings.aoFooter[row !== void 0 ? row : 0][column].cell;
  }, 1);
});
_api_registerPlural("columns().data()", "column().data()", function() {
  return this.iterator("column-rows", __columnData, 1);
});
_api_registerPlural("columns().render()", "column().render()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return __columnData(settings, column, i, j, rows, type);
  }, 1);
});
_api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column].mData;
  }, 1);
});
_api_registerPlural("columns().cache()", "column().cache()", function(type) {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(
      settings.aoData,
      rows,
      type === "search" ? "_aFilterData" : "_aSortData",
      column
    );
  }, 1);
});
_api_registerPlural("columns().init()", "column().init()", function() {
  return this.iterator("column", function(settings, column) {
    return settings.aoColumns[column];
  }, 1);
});
_api_registerPlural("columns().nodes()", "column().nodes()", function() {
  return this.iterator("column-rows", function(settings, column, i, j, rows) {
    return _pluck_order(settings.aoData, rows, "anCells", column);
  }, 1);
});
_api_registerPlural("columns().titles()", "column().title()", function(title, row) {
  return this.iterator("column", function(settings, column) {
    if (typeof title === "number") {
      row = title;
      title = void 0;
    }
    var span = $("span.dt-column-title", this.column(column).header(row));
    if (title !== void 0) {
      span.html(title);
      return this;
    }
    return span.html();
  }, 1);
});
_api_registerPlural("columns().types()", "column().type()", function() {
  return this.iterator("column", function(settings, column) {
    var type = settings.aoColumns[column].sType;
    if (!type) {
      _fnColumnTypes(settings);
    }
    return type;
  }, 1);
});
_api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
  var that = this;
  var changed = [];
  var ret = this.iterator("column", function(settings, column) {
    if (vis === void 0) {
      return settings.aoColumns[column].bVisible;
    }
    if (__setColumnVis(settings, column, vis)) {
      changed.push(column);
    }
  });
  if (vis !== void 0) {
    this.iterator("table", function(settings) {
      _fnDrawHead(settings, settings.aoHeader);
      _fnDrawHead(settings, settings.aoFooter);
      if (!settings.aiDisplay.length) {
        $(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings));
      }
      _fnSaveState(settings);
      that.iterator("column", function(settings2, column) {
        if (changed.includes(column)) {
          _fnCallbackFire(settings2, null, "column-visibility", [settings2, column, vis, calc]);
        }
      });
      if (changed.length && (calc === void 0 || calc)) {
        that.columns.adjust();
      }
    });
  }
  return ret;
});
_api_registerPlural("columns().widths()", "column().width()", function() {
  var columns = this.columns(":visible").count();
  var row = $("<tr>").html("<td>" + Array(columns).join("</td><td>") + "</td>");
  $(this.table().body()).append(row);
  var widths = row.children().map(function() {
    return $(this).outerWidth();
  });
  row.remove();
  return this.iterator("column", function(settings, column) {
    var visIdx = _fnColumnIndexToVisible(settings, column);
    return visIdx !== null ? widths[visIdx] : 0;
  }, 1);
});
_api_registerPlural("columns().indexes()", "column().index()", function(type) {
  return this.iterator("column", function(settings, column) {
    return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column;
  }, 1);
});
_api_register("columns.adjust()", function() {
  return this.iterator("table", function(settings) {
    _fnAdjustColumnSizing(settings);
  }, 1);
});
_api_register("column.index()", function(type, idx) {
  if (this.context.length !== 0) {
    var ctx = this.context[0];
    if (type === "fromVisible" || type === "toData") {
      return _fnVisibleToColumnIndex(ctx, idx);
    } else if (type === "fromData" || type === "toVisible") {
      return _fnColumnIndexToVisible(ctx, idx);
    }
  }
});
_api_register("column()", function(selector, opts) {
  return _selector_first(this.columns(selector, opts));
});
var __cell_selector = function(settings, selector, opts) {
  var data = settings.aoData;
  var rows = _selector_row_indexes(settings, opts);
  var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
  var allCells = $(_flatten([], cells));
  var row;
  var columns = settings.aoColumns.length;
  var a, i, ien, j, o, host;
  var run = function(s) {
    var fnSelector = typeof s === "function";
    if (s === null || s === void 0 || fnSelector) {
      a = [];
      for (i = 0, ien = rows.length; i < ien; i++) {
        row = rows[i];
        for (j = 0; j < columns; j++) {
          o = {
            row,
            column: j
          };
          if (fnSelector) {
            host = data[row];
            if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
              a.push(o);
            }
          } else {
            a.push(o);
          }
        }
      }
      return a;
    }
    if ($.isPlainObject(s)) {
      return s.column !== void 0 && s.row !== void 0 && rows.indexOf(s.row) !== -1 ? [s] : [];
    }
    var jqResult = allCells.filter(s).map(function(i2, el) {
      return {
        // use a new object, in case someone changes the values
        row: el._DT_CellIndex.row,
        column: el._DT_CellIndex.column
      };
    }).toArray();
    if (jqResult.length || !s.nodeName) {
      return jqResult;
    }
    host = $(s).closest("*[data-dt-row]");
    return host.length ? [{
      row: host.data("dt-row"),
      column: host.data("dt-column")
    }] : [];
  };
  return _selector_run("cell", selector, run, settings, opts);
};
_api_register("cells()", function(rowSelector, columnSelector, opts) {
  if ($.isPlainObject(rowSelector)) {
    if (rowSelector.row === void 0) {
      opts = rowSelector;
      rowSelector = null;
    } else {
      opts = columnSelector;
      columnSelector = null;
    }
  }
  if ($.isPlainObject(columnSelector)) {
    opts = columnSelector;
    columnSelector = null;
  }
  if (columnSelector === null || columnSelector === void 0) {
    return this.iterator("table", function(settings) {
      return __cell_selector(settings, rowSelector, _selector_opts(opts));
    });
  }
  var internalOpts = opts ? {
    page: opts.page,
    order: opts.order,
    search: opts.search
  } : {};
  var columns = this.columns(columnSelector, internalOpts);
  var rows = this.rows(rowSelector, internalOpts);
  var i, ien, j, jen;
  var cellsNoOpts = this.iterator("table", function(settings, idx) {
    var a = [];
    for (i = 0, ien = rows[idx].length; i < ien; i++) {
      for (j = 0, jen = columns[idx].length; j < jen; j++) {
        a.push({
          row: rows[idx][i],
          column: columns[idx][j]
        });
      }
    }
    return a;
  }, 1);
  var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
  $.extend(cells.selector, {
    cols: columnSelector,
    rows: rowSelector,
    opts
  });
  return cells;
});
_api_registerPlural("cells().nodes()", "cell().node()", function() {
  return this.iterator("cell", function(settings, row, column) {
    var data = settings.aoData[row];
    return data && data.anCells ? data.anCells[column] : void 0;
  }, 1);
});
_api_register("cells().data()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column);
  }, 1);
});
_api_registerPlural("cells().cache()", "cell().cache()", function(type) {
  type = type === "search" ? "_aFilterData" : "_aSortData";
  return this.iterator("cell", function(settings, row, column) {
    return settings.aoData[row][type][column];
  }, 1);
});
_api_registerPlural("cells().render()", "cell().render()", function(type) {
  return this.iterator("cell", function(settings, row, column) {
    return _fnGetCellData(settings, row, column, type);
  }, 1);
});
_api_registerPlural("cells().indexes()", "cell().index()", function() {
  return this.iterator("cell", function(settings, row, column) {
    return {
      row,
      column,
      columnVisible: _fnColumnIndexToVisible(settings, column)
    };
  }, 1);
});
_api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
  return this.iterator("cell", function(settings, row, column) {
    _fnInvalidate(settings, row, src, column);
  });
});
_api_register("cell()", function(rowSelector, columnSelector, opts) {
  return _selector_first(this.cells(rowSelector, columnSelector, opts));
});
_api_register("cell().data()", function(data) {
  var ctx = this.context;
  var cell = this[0];
  if (data === void 0) {
    return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : void 0;
  }
  _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
  _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
  return this;
});
_api_register("order()", function(order, dir) {
  var ctx = this.context;
  var args = Array.prototype.slice.call(arguments);
  if (order === void 0) {
    return ctx.length !== 0 ? ctx[0].aaSorting : void 0;
  }
  if (typeof order === "number") {
    order = [[order, dir]];
  } else if (args.length > 1) {
    order = args;
  }
  return this.iterator("table", function(settings) {
    settings.aaSorting = Array.isArray(order) ? order.slice() : order;
  });
});
_api_register("order.listener()", function(node, column, callback) {
  return this.iterator("table", function(settings) {
    _fnSortAttachListener(settings, node, {}, column, callback);
  });
});
_api_register("order.fixed()", function(set) {
  if (!set) {
    var ctx = this.context;
    var fixed = ctx.length ? ctx[0].aaSortingFixed : void 0;
    return Array.isArray(fixed) ? { pre: fixed } : fixed;
  }
  return this.iterator("table", function(settings) {
    settings.aaSortingFixed = $.extend(true, {}, set);
  });
});
_api_register([
  "columns().order()",
  "column().order()"
], function(dir) {
  var that = this;
  if (!dir) {
    return this.iterator("column", function(settings, idx) {
      var sort = _fnSortFlatten(settings);
      for (var i = 0, ien = sort.length; i < ien; i++) {
        if (sort[i].col === idx) {
          return sort[i].dir;
        }
      }
      return null;
    }, 1);
  } else {
    return this.iterator("table", function(settings, i) {
      settings.aaSorting = that[i].map(function(col) {
        return [col, dir];
      });
    });
  }
});
_api_registerPlural("columns().orderable()", "column().orderable()", function(directions) {
  return this.iterator("column", function(settings, idx) {
    var col = settings.aoColumns[idx];
    return directions ? col.asSorting : col.bSortable;
  }, 1);
});
_api_register("processing()", function(show) {
  return this.iterator("table", function(ctx) {
    _fnProcessingDisplay(ctx, show);
  });
});
_api_register("search()", function(input, regex, smart, caseInsen) {
  var ctx = this.context;
  if (input === void 0) {
    return ctx.length !== 0 ? ctx[0].oPreviousSearch.search : void 0;
  }
  return this.iterator("table", function(settings) {
    if (!settings.oFeatures.bFilter) {
      return;
    }
    if (typeof regex === "object") {
      _fnFilterComplete(settings, $.extend(settings.oPreviousSearch, regex, {
        search: input
      }));
    } else {
      _fnFilterComplete(settings, $.extend(settings.oPreviousSearch, {
        search: input,
        regex: regex === null ? false : regex,
        smart: smart === null ? true : smart,
        caseInsensitive: caseInsen === null ? true : caseInsen
      }));
    }
  });
});
_api_register("search.fixed()", function(name, search) {
  var ret = this.iterator(true, "table", function(settings) {
    var fixed = settings.searchFixed;
    if (!name) {
      return Object.keys(fixed);
    } else if (search === void 0) {
      return fixed[name];
    } else if (search === null) {
      delete fixed[name];
    } else {
      fixed[name] = search;
    }
    return this;
  });
  return name !== void 0 && search === void 0 ? ret[0] : ret;
});
_api_registerPlural(
  "columns().search()",
  "column().search()",
  function(input, regex, smart, caseInsen) {
    return this.iterator("column", function(settings, column) {
      var preSearch = settings.aoPreSearchCols;
      if (input === void 0) {
        return preSearch[column].search;
      }
      if (!settings.oFeatures.bFilter) {
        return;
      }
      if (typeof regex === "object") {
        $.extend(preSearch[column], regex, {
          search: input
        });
      } else {
        $.extend(preSearch[column], {
          search: input,
          regex: regex === null ? false : regex,
          smart: smart === null ? true : smart,
          caseInsensitive: caseInsen === null ? true : caseInsen
        });
      }
      _fnFilterComplete(settings, settings.oPreviousSearch);
    });
  }
);
_api_register(
  [
    "columns().search.fixed()",
    "column().search.fixed()"
  ],
  function(name, search) {
    var ret = this.iterator(true, "column", function(settings, colIdx) {
      var fixed = settings.aoColumns[colIdx].searchFixed;
      if (!name) {
        return Object.keys(fixed);
      } else if (search === void 0) {
        return fixed[name];
      } else if (search === null) {
        delete fixed[name];
      } else {
        fixed[name] = search;
      }
      return this;
    });
    return name !== void 0 && search === void 0 ? ret[0] : ret;
  }
);
_api_register("state()", function(set, ignoreTime) {
  if (!set) {
    return this.context.length ? this.context[0].oSavedState : null;
  }
  var setMutate = $.extend(true, {}, set);
  return this.iterator("table", function(settings) {
    if (ignoreTime !== false) {
      setMutate.time = +/* @__PURE__ */ new Date() + 100;
    }
    _fnImplementState(settings, setMutate, function() {
    });
  });
});
_api_register("state.clear()", function() {
  return this.iterator("table", function(settings) {
    settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
  });
});
_api_register("state.loaded()", function() {
  return this.context.length ? this.context[0].oLoadedState : null;
});
_api_register("state.save()", function() {
  return this.iterator("table", function(settings) {
    _fnSaveState(settings);
  });
});
DataTable.use = function(arg1, arg2) {
  var module = typeof arg1 === "string" ? arg2 : arg1;
  var type = typeof arg2 === "string" ? arg2 : arg1;
  if (module === void 0 && typeof type === "string") {
    switch (type) {
      case "lib":
      case "jq":
        return $;
      case "win":
        return window;
      case "datetime":
        return DataTable.DateTime;
      case "luxon":
        return __luxon;
      case "moment":
        return __moment;
      default:
        return null;
    }
  }
  if (type === "lib" || type === "jq" || module && module.fn && module.fn.jquery) {
    $ = module;
  } else if (type == "win" || module && module.document) {
    window = module;
    document = module.document;
  } else if (type === "datetime" || module && module.type === "DateTime") {
    DataTable.DateTime = module;
  } else if (type === "luxon" || module && module.FixedOffsetZone) {
    __luxon = module;
  } else if (type === "moment" || module && module.isMoment) {
    __moment = module;
  }
};
DataTable.factory = function(root, jq) {
  var is = false;
  if (root && root.document) {
    window = root;
    document = root.document;
  }
  if (jq && jq.fn && jq.fn.jquery) {
    $ = jq;
    is = true;
  }
  return is;
};
DataTable.versionCheck = function(version, version2) {
  var aThis = version2 ? version2.split(".") : DataTable.version.split(".");
  var aThat = version.split(".");
  var iThis, iThat;
  for (var i = 0, iLen = aThat.length; i < iLen; i++) {
    iThis = parseInt(aThis[i], 10) || 0;
    iThat = parseInt(aThat[i], 10) || 0;
    if (iThis === iThat) {
      continue;
    }
    return iThis > iThat;
  }
  return true;
};
DataTable.isDataTable = function(table) {
  var t = $(table).get(0);
  var is = false;
  if (table instanceof DataTable.Api) {
    return true;
  }
  $.each(DataTable.settings, function(i, o) {
    var head = o.nScrollHead ? $("table", o.nScrollHead)[0] : null;
    var foot = o.nScrollFoot ? $("table", o.nScrollFoot)[0] : null;
    if (o.nTable === t || head === t || foot === t) {
      is = true;
    }
  });
  return is;
};
DataTable.tables = function(visible) {
  var api = false;
  if ($.isPlainObject(visible)) {
    api = visible.api;
    visible = visible.visible;
  }
  var a = DataTable.settings.filter(function(o) {
    return !visible || visible && $(o.nTable).is(":visible") ? true : false;
  }).map(function(o) {
    return o.nTable;
  });
  return api ? new _Api(a) : a;
};
DataTable.camelToHungarian = _fnCamelToHungarian;
_api_register("$()", function(selector, opts) {
  var rows = this.rows(opts).nodes(), jqRows = $(rows);
  return $([].concat(
    jqRows.filter(selector).toArray(),
    jqRows.find(selector).toArray()
  ));
});
$.each(["on", "one", "off"], function(i, key) {
  _api_register(key + "()", function() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = args[0].split(/\s/).map(function(e) {
      return !e.match(/\.dt\b/) ? e + ".dt" : e;
    }).join(" ");
    var inst = $(this.tables().nodes());
    inst[key].apply(inst, args);
    return this;
  });
});
_api_register("clear()", function() {
  return this.iterator("table", function(settings) {
    _fnClearTable(settings);
  });
});
_api_register("error()", function(msg) {
  return this.iterator("table", function(settings) {
    _fnLog(settings, 0, msg);
  });
});
_api_register("settings()", function() {
  return new _Api(this.context, this.context);
});
_api_register("init()", function() {
  var ctx = this.context;
  return ctx.length ? ctx[0].oInit : null;
});
_api_register("data()", function() {
  return this.iterator("table", function(settings) {
    return _pluck(settings.aoData, "_aData");
  }).flatten();
});
_api_register("trigger()", function(name, args, bubbles) {
  return this.iterator("table", function(settings) {
    return _fnCallbackFire(settings, null, name, args, bubbles);
  }).flatten();
});
_api_register("ready()", function(fn) {
  var ctx = this.context;
  if (!fn) {
    return ctx.length ? ctx[0]._bInitComplete || false : null;
  }
  return this.tables().every(function() {
    if (this.context[0]._bInitComplete) {
      fn.call(this);
    } else {
      this.on("init.dt.DT", function() {
        fn.call(this);
      });
    }
  });
});
_api_register("destroy()", function(remove) {
  remove = remove || false;
  return this.iterator("table", function(settings) {
    var classes = settings.oClasses;
    var table = settings.nTable;
    var tbody = settings.nTBody;
    var thead = settings.nTHead;
    var tfoot = settings.nTFoot;
    var jqTable = $(table);
    var jqTbody = $(tbody);
    var jqWrapper = $(settings.nTableWrapper);
    var rows = settings.aoData.map(function(r) {
      return r ? r.nTr : null;
    });
    var orderClasses = classes.order;
    settings.bDestroying = true;
    _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings], true);
    if (!remove) {
      new _Api(settings).columns().visible(true);
    }
    jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
    $(window).off(".DT-" + settings.sInstance);
    if (table != thead.parentNode) {
      jqTable.children("thead").detach();
      jqTable.append(thead);
    }
    if (tfoot && table != tfoot.parentNode) {
      jqTable.children("tfoot").detach();
      jqTable.append(tfoot);
    }
    settings.colgroup.remove();
    settings.aaSorting = [];
    settings.aaSortingFixed = [];
    _fnSortingClasses(settings);
    $("th, td", thead).removeClass(
      orderClasses.canAsc + " " + orderClasses.canDesc + " " + orderClasses.isAsc + " " + orderClasses.isDesc
    ).css("width", "");
    jqTbody.children().detach();
    jqTbody.append(rows);
    var orig = settings.nTableWrapper.parentNode;
    var insertBefore = settings.nTableWrapper.nextSibling;
    var removedMethod = remove ? "remove" : "detach";
    jqTable[removedMethod]();
    jqWrapper[removedMethod]();
    if (!remove && orig) {
      orig.insertBefore(table, insertBefore);
      jqTable.css("width", settings.sDestroyWidth).removeClass(classes.table);
    }
    var idx = DataTable.settings.indexOf(settings);
    if (idx !== -1) {
      DataTable.settings.splice(idx, 1);
    }
  });
});
$.each(["column", "row", "cell"], function(i, type) {
  _api_register(type + "s().every()", function(fn) {
    var opts = this.selector.opts;
    var api = this;
    var inst;
    var counter = 0;
    return this.iterator("every", function(settings, selectedIdx, tableIdx) {
      inst = api[type](selectedIdx, opts);
      if (type === "cell") {
        fn.call(inst, inst[0][0].row, inst[0][0].column, tableIdx, counter);
      } else {
        fn.call(inst, selectedIdx, tableIdx, counter);
      }
      counter++;
    });
  });
});
_api_register("i18n()", function(token, def, plural) {
  var ctx = this.context[0];
  var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
  if (resolved === void 0) {
    resolved = def;
  }
  if ($.isPlainObject(resolved)) {
    resolved = plural !== void 0 && resolved[plural] !== void 0 ? resolved[plural] : resolved._;
  }
  return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved;
});
DataTable.version = "2.1.8";
DataTable.settings = [];
DataTable.models = {};
DataTable.models.oSearch = {
  /**
   * Flag to indicate if the filtering should be case insensitive or not
   */
  "caseInsensitive": true,
  /**
   * Applied search term
   */
  "search": "",
  /**
   * Flag to indicate if the search term should be interpreted as a
   * regular expression (true) or not (false) and therefore and special
   * regex characters escaped.
   */
  "regex": false,
  /**
   * Flag to indicate if DataTables is to use its smart filtering or not.
   */
  "smart": true,
  /**
   * Flag to indicate if DataTables should only trigger a search when
   * the return key is pressed.
   */
  "return": false
};
DataTable.models.oRow = {
  /**
   * TR element for the row
   */
  "nTr": null,
  /**
   * Array of TD elements for each row. This is null until the row has been
   * created.
   */
  "anCells": null,
  /**
   * Data object from the original data source for the row. This is either
   * an array if using the traditional form of DataTables, or an object if
   * using mData options. The exact type will depend on the passed in
   * data from the data source, or will be an array if using DOM a data
   * source.
   */
  "_aData": [],
  /**
   * Sorting data cache - this array is ostensibly the same length as the
   * number of columns (although each index is generated only as it is
   * needed), and holds the data that is used for sorting each column in the
   * row. We do this cache generation at the start of the sort in order that
   * the formatting of the sort data need be done only once for each cell
   * per sort. This array should not be read from or written to by anything
   * other than the master sorting methods.
   */
  "_aSortData": null,
  /**
   * Per cell filtering data cache. As per the sort data cache, used to
   * increase the performance of the filtering in DataTables
   */
  "_aFilterData": null,
  /**
   * Filtering data cache. This is the same as the cell filtering cache, but
   * in this case a string rather than an array. This is easily computed with
   * a join on `_aFilterData`, but is provided as a cache so the join isn't
   * needed on every search (memory traded for performance)
   */
  "_sFilterRow": null,
  /**
   * Denote if the original data source was from the DOM, or the data source
   * object. This is used for invalidating data, so DataTables can
   * automatically read data from the original source, unless uninstructed
   * otherwise.
   */
  "src": null,
  /**
   * Index in the aoData array. This saves an indexOf lookup when we have the
   * object, but want to know the index
   */
  "idx": -1,
  /**
   * Cached display value
   */
  displayData: null
};
DataTable.models.oColumn = {
  /**
   * Column index.
   */
  "idx": null,
  /**
   * A list of the columns that sorting should occur on when this column
   * is sorted. That this property is an array allows multi-column sorting
   * to be defined for a column (for example first name / last name columns
   * would benefit from this). The values are integers pointing to the
   * columns to be sorted on (typically it will be a single integer pointing
   * at itself, but that doesn't need to be the case).
   */
  "aDataSort": null,
  /**
   * Define the sorting directions that are applied to the column, in sequence
   * as the column is repeatedly sorted upon - i.e. the first value is used
   * as the sorting direction when the column if first sorted (clicked on).
   * Sort it again (click again) and it will move on to the next index.
   * Repeat until loop.
   */
  "asSorting": null,
  /**
   * Flag to indicate if the column is searchable, and thus should be included
   * in the filtering or not.
   */
  "bSearchable": null,
  /**
   * Flag to indicate if the column is sortable or not.
   */
  "bSortable": null,
  /**
   * Flag to indicate if the column is currently visible in the table or not
   */
  "bVisible": null,
  /**
   * Store for manual type assignment using the `column.type` option. This
   * is held in store so we can manipulate the column's `sType` property.
   */
  "_sManualType": null,
  /**
   * Flag to indicate if HTML5 data attributes should be used as the data
   * source for filtering or sorting. True is either are.
   */
  "_bAttrSrc": false,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   */
  "fnCreatedCell": null,
  /**
   * Function to get data from a cell in a column. You should <b>never</b>
   * access data directly through _aData internally in DataTables - always use
   * the method attached to this property. It allows mData to function as
   * required. This function is automatically assigned by the column
   * initialisation method
   */
  "fnGetData": null,
  /**
   * Function to set data for a cell in the column. You should <b>never</b>
   * set the data directly to _aData internally in DataTables - always use
   * this method. It allows mData to function as required. This function
   * is automatically assigned by the column initialisation method
   */
  "fnSetData": null,
  /**
   * Property to read the value for the cells in the column from the data
   * source array / object. If null, then the default content is used, if a
   * function is given then the return from the function is used.
   */
  "mData": null,
  /**
   * Partner property to mData which is used (only when defined) to get
   * the data - i.e. it is basically the same as mData, but without the
   * 'set' option, and also the data fed to it is the result from mData.
   * This is the rendering method to match the data method of mData.
   */
  "mRender": null,
  /**
   * The class to apply to all TD elements in the table's TBODY for the column
   */
  "sClass": null,
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   */
  "sContentPadding": null,
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because mData
   * is set to null, or because the data source itself is null).
   */
  "sDefaultContent": null,
  /**
   * Name for the column, allowing reference to the column by name as well as
   * by index (needs a lookup to work by name).
   */
  "sName": null,
  /**
   * Custom sorting data type - defines which of the available plug-ins in
   * afnSortData the custom sorting will use - if any is defined.
   */
  "sSortDataType": "std",
  /**
   * Class to be applied to the header element when sorting on this column
   */
  "sSortingClass": null,
  /**
   * Title of the column - what is seen in the TH element (nTh).
   */
  "sTitle": null,
  /**
   * Column sorting and filtering type
   */
  "sType": null,
  /**
   * Width of the column
   */
  "sWidth": null,
  /**
   * Width of the column when it was first "encountered"
   */
  "sWidthOrig": null,
  /** Cached string which is the longest in the column */
  maxLenString: null,
  /**
   * Store for named searches
   */
  searchFixed: null
};
DataTable.defaults = {
  /**
   * An array of data to use for the table, passed in at initialisation which
   * will be used in preference to any data which is already in the DOM. This is
   * particularly useful for constructing tables purely in Javascript, for
   * example with a custom Ajax call.
   */
  "aaData": null,
  /**
   * If ordering is enabled, then DataTables will perform a first pass sort on
   * initialisation. You can define which column(s) the sort is performed
   * upon, and the sorting direction, with this variable. The `sorting` array
   * should contain an array for each column to be sorted initially containing
   * the column's index and a direction string ('asc' or 'desc').
   */
  "aaSorting": [[0, "asc"]],
  /**
   * This parameter is basically identical to the `sorting` parameter, but
   * cannot be overridden by user interaction with the table. What this means
   * is that you could have a column (visible or hidden) which the sorting
   * will always be forced on first - any sorting after that (from the user)
   * will then be performed as required. This can be useful for grouping rows
   * together.
   */
  "aaSortingFixed": [],
  /**
   * DataTables can be instructed to load data to display in the table from a
   * Ajax source. This option defines how that Ajax call is made and where to.
   *
   * The `ajax` property has three different modes of operation, depending on
   * how it is defined. These are:
   *
   * * `string` - Set the URL from where the data should be loaded from.
   * * `object` - Define properties for `jQuery.ajax`.
   * * `function` - Custom data get function
   *
   * `string`
   * --------
   *
   * As a string, the `ajax` property simply defines the URL from which
   * DataTables will load data.
   *
   * `object`
   * --------
   *
   * As an object, the parameters in the object are passed to
   * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/) allowing fine control
   * of the Ajax request. DataTables has a number of default parameters which
   * you can override using this option. Please refer to the jQuery
   * documentation for a full description of the options available, although
   * the following parameters provide additional options in DataTables or
   * require special consideration:
   *
   * * `data` - As with jQuery, `data` can be provided as an object, but it
   *   can also be used as a function to manipulate the data DataTables sends
   *   to the server. The function takes a single parameter, an object of
   *   parameters with the values that DataTables has readied for sending. An
   *   object may be returned which will be merged into the DataTables
   *   defaults, or you can add the items to the object that was passed in and
   *   not return anything from the function. This supersedes `fnServerParams`
   *   from DataTables 1.9-.
   *
   * * `dataSrc` - By default DataTables will look for the property `data` (or
   *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
   *   from an Ajax source or for server-side processing - this parameter
   *   allows that property to be changed. You can use Javascript dotted
   *   object notation to get a data source for multiple levels of nesting, or
   *   it my be used as a function. As a function it takes a single parameter,
   *   the JSON returned from the server, which can be manipulated as
   *   required, with the returned value being that used by DataTables as the
   *   data source for the table.
   *
   * * `success` - Should not be overridden it is used internally in
   *   DataTables. To manipulate / transform the data returned by the server
   *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
   *
   * `function`
   * ----------
   *
   * As a function, making the Ajax call is left up to yourself allowing
   * complete control of the Ajax request. Indeed, if desired, a method other
   * than Ajax could be used to obtain the required data, such as Web storage
   * or an AIR database.
   *
   * The function is given four parameters and no return is required. The
   * parameters are:
   *
   * 1. _object_ - Data to send to the server
   * 2. _function_ - Callback function that must be executed when the required
   *    data has been obtained. That data should be passed into the callback
   *    as the only parameter
   * 3. _object_ - DataTables settings object for the table
   */
  "ajax": null,
  /**
   * This parameter allows you to readily specify the entries in the length drop
   * down menu that DataTables shows when pagination is enabled. It can be
   * either a 1D array of options which will be used for both the displayed
   * option and the value, or a 2D array which will use the array in the first
   * position as the value, and the array in the second position as the
   * displayed options (useful for language strings such as 'All').
   *
   * Note that the `pageLength` property will be automatically set to the
   * first value given in this array, unless `pageLength` is also provided.
   */
  "aLengthMenu": [10, 25, 50, 100],
  /**
   * The `columns` option in the initialisation parameter allows you to define
   * details about the way individual columns behave. For a full list of
   * column options that can be set, please see
   * {@link DataTable.defaults.column}. Note that if you use `columns` to
   * define your columns, you must have an entry in the array for every single
   * column that you have in your table (these can be null if you don't which
   * to specify any options).
   */
  "aoColumns": null,
  /**
   * Very similar to `columns`, `columnDefs` allows you to target a specific
   * column, multiple columns, or all columns, using the `targets` property of
   * each object in the array. This allows great flexibility when creating
   * tables, as the `columnDefs` arrays can be of any length, targeting the
   * columns you specifically want. `columnDefs` may use any of the column
   * options available: {@link DataTable.defaults.column}, but it _must_
   * have `targets` defined in each object in the array. Values in the `targets`
   * array may be:
   *   <ul>
   *     <li>a string - class name will be matched on the TH for the column</li>
   *     <li>0 or a positive integer - column index counting from the left</li>
   *     <li>a negative integer - column index counting from the right</li>
   *     <li>the string "_all" - all columns (i.e. assign a default)</li>
   *   </ul>
   */
  "aoColumnDefs": null,
  /**
   * Basically the same as `search`, this parameter defines the individual column
   * filtering state at initialisation time. The array must be of the same size
   * as the number of columns, and each element be an object with the parameters
   * `search` and `escapeRegex` (the latter is optional). 'null' is also
   * accepted and the default will be used.
   */
  "aoSearchCols": [],
  /**
   * Enable or disable automatic column width calculation. This can be disabled
   * as an optimisation (it takes some time to calculate the widths) if the
   * tables widths are passed in using `columns`.
   */
  "bAutoWidth": true,
  /**
   * Deferred rendering can provide DataTables with a huge speed boost when you
   * are using an Ajax or JS data source for the table. This option, when set to
   * true, will cause DataTables to defer the creation of the table elements for
   * each row until they are needed for a draw - saving a significant amount of
   * time.
   */
  "bDeferRender": true,
  /**
   * Replace a DataTable which matches the given selector and replace it with
   * one which has the properties of the new initialisation object passed. If no
   * table matches the selector, then the new DataTable will be constructed as
   * per normal.
   */
  "bDestroy": false,
  /**
   * Enable or disable filtering of data. Filtering in DataTables is "smart" in
   * that it allows the end user to input multiple words (space separated) and
   * will match a row containing those words, even if not in the order that was
   * specified (this allow matching across multiple columns). Note that if you
   * wish to use filtering in DataTables this must remain 'true' - to remove the
   * default filtering input box and retain filtering abilities, please use
   * {@link DataTable.defaults.dom}.
   */
  "bFilter": true,
  /**
   * Used only for compatiblity with DT1
   * @deprecated
   */
  "bInfo": true,
  /**
   * Used only for compatiblity with DT1
   * @deprecated
   */
  "bLengthChange": true,
  /**
   * Enable or disable pagination.
   */
  "bPaginate": true,
  /**
   * Enable or disable the display of a 'processing' indicator when the table is
   * being processed (e.g. a sort). This is particularly useful for tables with
   * large amounts of data where it can take a noticeable amount of time to sort
   * the entries.
   */
  "bProcessing": false,
  /**
   * Retrieve the DataTables object for the given selector. Note that if the
   * table has already been initialised, this parameter will cause DataTables
   * to simply return the object that has already been set up - it will not take
   * account of any changes you might have made to the initialisation object
   * passed to DataTables (setting this parameter to true is an acknowledgement
   * that you understand this). `destroy` can be used to reinitialise a table if
   * you need.
   */
  "bRetrieve": false,
  /**
   * When vertical (y) scrolling is enabled, DataTables will force the height of
   * the table's viewport to the given height at all times (useful for layout).
   * However, this can look odd when filtering data down to a small data set,
   * and the footer is left "floating" further down. This parameter (when
   * enabled) will cause DataTables to collapse the table's viewport down when
   * the result set will fit within the given Y height.
   */
  "bScrollCollapse": false,
  /**
   * Configure DataTables to use server-side processing. Note that the
   * `ajax` parameter must also be given in order to give DataTables a
   * source to obtain the required data for each draw.
   */
  "bServerSide": false,
  /**
   * Enable or disable sorting of columns. Sorting of individual columns can be
   * disabled by the `sortable` option for each column.
   */
  "bSort": true,
  /**
   * Enable or display DataTables' ability to sort multiple columns at the
   * same time (activated by shift-click by the user).
   */
  "bSortMulti": true,
  /**
   * Allows control over whether DataTables should use the top (true) unique
   * cell that is found for a single column, or the bottom (false - default).
   * This is useful when using complex headers.
   */
  "bSortCellsTop": null,
  /**
   * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
   * `sorting\_3` to the columns which are currently being sorted on. This is
   * presented as a feature switch as it can increase processing time (while
   * classes are removed and added) so for large data sets you might want to
   * turn this off.
   */
  "bSortClasses": true,
  /**
   * Enable or disable state saving. When enabled HTML5 `localStorage` will be
   * used to save table display information such as pagination information,
   * display length, filtering and sorting. As such when the end user reloads
   * the page the display display will match what thy had previously set up.
   */
  "bStateSave": false,
  /**
   * This function is called when a TR element is created (and all TD child
   * elements have been inserted), or registered if using a DOM source, allowing
   * manipulation of the TR element (adding classes etc).
   */
  "fnCreatedRow": null,
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify any aspect you want about the created DOM.
   */
  "fnDrawCallback": null,
  /**
   * Identical to fnHeaderCallback() but for the table footer this function
   * allows you to modify the table footer on every 'draw' event.
   */
  "fnFooterCallback": null,
  /**
   * When rendering large numbers in the information element for the table
   * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
   * to have a comma separator for the 'thousands' units (e.g. 1 million is
   * rendered as "1,000,000") to help readability for the end user. This
   * function will override the default method DataTables uses.
   */
  "fnFormatNumber": function(toFormat) {
    return toFormat.toString().replace(
      /\B(?=(\d{3})+(?!\d))/g,
      this.oLanguage.sThousands
    );
  },
  /**
   * This function is called on every 'draw' event, and allows you to
   * dynamically modify the header row. This can be used to calculate and
   * display useful information about the table.
   */
  "fnHeaderCallback": null,
  /**
   * The information element can be used to convey information about the current
   * state of the table. Although the internationalisation options presented by
   * DataTables are quite capable of dealing with most customisations, there may
   * be times where you wish to customise the string further. This callback
   * allows you to do exactly that.
   */
  "fnInfoCallback": null,
  /**
   * Called when the table has been initialised. Normally DataTables will
   * initialise sequentially and there will be no need for this function,
   * however, this does not hold true when using external language information
   * since that is obtained using an async XHR call.
   */
  "fnInitComplete": null,
  /**
   * Called at the very start of each table draw and can be used to cancel the
   * draw by returning false, any other return (including undefined) results in
   * the full draw occurring).
   */
  "fnPreDrawCallback": null,
  /**
   * This function allows you to 'post process' each row after it have been
   * generated for each table draw, but before it is rendered on screen. This
   * function might be used for setting the row class name etc.
   */
  "fnRowCallback": null,
  /**
   * Load the table state. With this function you can define from where, and how, the
   * state of a table is loaded. By default DataTables will load from `localStorage`
   * but you might wish to use a server-side database or cookies.
   */
  "fnStateLoadCallback": function(settings) {
    try {
      return JSON.parse(
        (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
          "DataTables_" + settings.sInstance + "_" + location.pathname
        )
      );
    } catch (e) {
      return {};
    }
  },
  /**
   * Callback which allows modification of the saved state prior to loading that state.
   * This callback is called when the table is loading state from the stored data, but
   * prior to the settings object being modified by the saved state. Note that for
   * plug-in authors, you should use the `stateLoadParams` event to load parameters for
   * a plug-in.
   */
  "fnStateLoadParams": null,
  /**
   * Callback that is called when the state has been loaded from the state saving method
   * and the DataTables settings object has been modified as a result of the loaded state.
   */
  "fnStateLoaded": null,
  /**
   * Save the table state. This function allows you to define where and how the state
   * information for the table is stored By default DataTables will use `localStorage`
   * but you might wish to use a server-side database or cookies.
   */
  "fnStateSaveCallback": function(settings, data) {
    try {
      (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
        "DataTables_" + settings.sInstance + "_" + location.pathname,
        JSON.stringify(data)
      );
    } catch (e) {
    }
  },
  /**
   * Callback which allows modification of the state to be saved. Called when the table
   * has changed state a new state save is required. This method allows modification of
   * the state saving object prior to actually doing the save, including addition or
   * other state properties or modification. Note that for plug-in authors, you should
   * use the `stateSaveParams` event to save parameters for a plug-in.
   */
  "fnStateSaveParams": null,
  /**
   * Duration for which the saved state information is considered valid. After this period
   * has elapsed the state will be returned to the default.
   * Value is given in seconds.
   */
  "iStateDuration": 7200,
  /**
   * Number of rows to display on a single page when using pagination. If
   * feature enabled (`lengthChange`) then the end user will be able to override
   * this to a custom setting using a pop-up menu.
   */
  "iDisplayLength": 10,
  /**
   * Define the starting point for data display when using DataTables with
   * pagination. Note that this parameter is the number of records, rather than
   * the page number, so if you have 10 records per page and want to start on
   * the third page, it should be "20".
   */
  "iDisplayStart": 0,
  /**
   * By default DataTables allows keyboard navigation of the table (sorting, paging,
   * and filtering) by adding a `tabindex` attribute to the required elements. This
   * allows you to tab through the controls and press the enter key to activate them.
   * The tabindex is default 0, meaning that the tab follows the flow of the document.
   * You can overrule this using this parameter if you wish. Use a value of -1 to
   * disable built-in keyboard navigation.
   */
  "iTabIndex": 0,
  /**
   * Classes that DataTables assigns to the various components and features
   * that it adds to the HTML table. This allows classes to be configured
   * during initialisation in addition to through the static
   * {@link DataTable.ext.oStdClasses} object).
   */
  "oClasses": {},
  /**
   * All strings that DataTables uses in the user interface that it creates
   * are defined in this object, allowing you to modified them individually or
   * completely replace them all as required.
   */
  "oLanguage": {
    /**
     * Strings that are used for WAI-ARIA labels and controls only (these are not
     * actually visible on the page, but will be read by screenreaders, and thus
     * must be internationalised as well).
     */
    "oAria": {
      /**
       * ARIA label that is added to the table headers when the column may be sorted
       */
      "orderable": ": Activate to sort",
      /**
       * ARIA label that is added to the table headers when the column is currently being sorted
       */
      "orderableReverse": ": Activate to invert sorting",
      /**
       * ARIA label that is added to the table headers when the column is currently being 
       * sorted and next step is to remove sorting
       */
      "orderableRemove": ": Activate to remove sorting",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous",
        number: ""
      }
    },
    /**
     * Pagination string used by DataTables for the built-in pagination
     * control types.
     */
    "oPaginate": {
      /**
       * Label and character for first page button («)
       */
      "sFirst": "«",
      /**
       * Last page button (»)
       */
      "sLast": "»",
      /**
       * Next page button (›)
       */
      "sNext": "›",
      /**
       * Previous page button (‹)
       */
      "sPrevious": "‹"
    },
    /**
     * Plural object for the data type the table is showing
     */
    entries: {
      _: "entries",
      1: "entry"
    },
    /**
     * This string is shown in preference to `zeroRecords` when the table is
     * empty of data (regardless of filtering). Note that this is an optional
     * parameter - if it is not given, the value of `zeroRecords` will be used
     * instead (either the default or given value).
     */
    "sEmptyTable": "No data available in table",
    /**
     * This string gives information to the end user about the information
     * that is current on display on the page. The following tokens can be
     * used in the string and will be dynamically replaced as the table
     * display updates. This tokens can be placed anywhere in the string, or
     * removed as needed by the language requires:
     *
     * * `\_START\_` - Display index of the first record on the current page
     * * `\_END\_` - Display index of the last record on the current page
     * * `\_TOTAL\_` - Number of records in the table after filtering
     * * `\_MAX\_` - Number of records in the table without filtering
     * * `\_PAGE\_` - Current page number
     * * `\_PAGES\_` - Total number of pages of data in the table
     */
    "sInfo": "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
    /**
     * Display information string for when the table is empty. Typically the
     * format of this string should match `info`.
     */
    "sInfoEmpty": "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
    /**
     * When a user filters the information in a table, this string is appended
     * to the information (`info`) to give an idea of how strong the filtering
     * is. The variable _MAX_ is dynamically updated.
     */
    "sInfoFiltered": "(filtered from _MAX_ total _ENTRIES-MAX_)",
    /**
     * If can be useful to append extra information to the info string at times,
     * and this variable does exactly that. This information will be appended to
     * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
     * being used) at all times.
     */
    "sInfoPostFix": "",
    /**
     * This decimal place operator is a little different from the other
     * language options since DataTables doesn't output floating point
     * numbers, so it won't ever use this for display of a number. Rather,
     * what this parameter does is modify the sort methods of the table so
     * that numbers which are in a format which has a character other than
     * a period (`.`) as a decimal place will be sorted numerically.
     *
     * Note that numbers with different decimal places cannot be shown in
     * the same table and still be sortable, the table must be consistent.
     * However, multiple different tables on the page can use different
     * decimal place characters.
     */
    "sDecimal": "",
    /**
     * DataTables has a build in number formatter (`formatNumber`) which is
     * used to format large numbers that are used in the table information.
     * By default a comma is used, but this can be trivially changed to any
     * character you wish with this parameter.
     */
    "sThousands": ",",
    /**
     * Detail the action that will be taken when the drop down menu for the
     * pagination length option is changed. The '_MENU_' variable is replaced
     * with a default select list of 10, 25, 50 and 100, and can be replaced
     * with a custom select box if required.
     */
    "sLengthMenu": "_MENU_ _ENTRIES_ per page",
    /**
     * When using Ajax sourced data and during the first draw when DataTables is
     * gathering the data, this message is shown in an empty row in the table to
     * indicate to the end user the the data is being loaded. Note that this
     * parameter is not used when loading data by server-side processing, just
     * Ajax sourced data with client-side processing.
     */
    "sLoadingRecords": "Loading...",
    /**
     * Text which is displayed when the table is processing a user action
     * (usually a sort command or similar).
     */
    "sProcessing": "",
    /**
     * Details the actions that will be taken when the user types into the
     * filtering input text box. The variable "_INPUT_", if used in the string,
     * is replaced with the HTML text box for the filtering input allowing
     * control over where it appears in the string. If "_INPUT_" is not given
     * then the input box is appended to the string automatically.
     */
    "sSearch": "Search:",
    /**
     * Assign a `placeholder` attribute to the search `input` element
     *  @type string
     *  @default 
     *
     *  @dtopt Language
     *  @name DataTable.defaults.language.searchPlaceholder
     */
    "sSearchPlaceholder": "",
    /**
     * All of the language information can be stored in a file on the
     * server-side, which DataTables will look up if this parameter is passed.
     * It must store the URL of the language file, which is in a JSON format,
     * and the object has the same properties as the oLanguage object in the
     * initialiser object (i.e. the above parameters). Please refer to one of
     * the example language files to see how this works in action.
     */
    "sUrl": "",
    /**
     * Text shown inside the table records when the is no information to be
     * displayed after filtering. `emptyTable` is shown when there is simply no
     * information in the table at all (regardless of filtering).
     */
    "sZeroRecords": "No matching records found"
  },
  /** The initial data order is reversed when `desc` ordering */
  orderDescReverse: true,
  /**
   * This parameter allows you to have define the global filtering state at
   * initialisation time. As an object the `search` parameter must be
   * defined, but all other parameters are optional. When `regex` is true,
   * the search string will be treated as a regular expression, when false
   * (default) it will be treated as a straight string. When `smart`
   * DataTables will use it's smart filtering methods (to word match at
   * any point in the data), when false this will not be done.
   */
  "oSearch": $.extend({}, DataTable.models.oSearch),
  /**
   * Table and control layout. This replaces the legacy `dom` option.
   */
  layout: {
    topStart: "pageLength",
    topEnd: "search",
    bottomStart: "info",
    bottomEnd: "paging"
  },
  /**
   * Legacy DOM layout option
   */
  "sDom": null,
  /**
   * Search delay option. This will throttle full table searches that use the
   * DataTables provided search input element (it does not effect calls to
   * `dt-api search()`, providing a delay before the search is made.
   */
  "searchDelay": null,
  /**
   * DataTables features six different built-in options for the buttons to
   * display for pagination control:
   *
   * * `numbers` - Page number buttons only
   * * `simple` - 'Previous' and 'Next' buttons only
   * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
   * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
   * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
   * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
   */
  "sPaginationType": "",
  /**
   * Enable horizontal scrolling. When a table is too wide to fit into a
   * certain layout, or you have a large number of columns in the table, you
   * can enable x-scrolling to show the table in a viewport, which can be
   * scrolled. This property can be `true` which will allow the table to
   * scroll horizontally when needed, or any CSS unit, or a number (in which
   * case it will be treated as a pixel measurement). Setting as simply `true`
   * is recommended.
   */
  "sScrollX": "",
  /**
   * This property can be used to force a DataTable to use more width than it
   * might otherwise do when x-scrolling is enabled. For example if you have a
   * table which requires to be well spaced, this parameter is useful for
   * "over-sizing" the table, and thus forcing scrolling. This property can by
   * any CSS unit, or a number (in which case it will be treated as a pixel
   * measurement).
   */
  "sScrollXInner": "",
  /**
   * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
   * to the given height, and enable scrolling for any data which overflows the
   * current viewport. This can be used as an alternative to paging to display
   * a lot of data in a small area (although paging and scrolling can both be
   * enabled at the same time). This property can be any CSS unit, or a number
   * (in which case it will be treated as a pixel measurement).
   */
  "sScrollY": "",
  /**
   * __Deprecated__ The functionality provided by this parameter has now been
   * superseded by that provided through `ajax`, which should be used instead.
   *
   * Set the HTTP method that is used to make the Ajax call for server-side
   * processing or Ajax sourced data.
   */
  "sServerMethod": "GET",
  /**
   * DataTables makes use of renderers when displaying HTML elements for
   * a table. These renderers can be added or modified by plug-ins to
   * generate suitable mark-up for a site. For example the Bootstrap
   * integration plug-in for DataTables uses a paging button renderer to
   * display pagination buttons in the mark-up required by Bootstrap.
   *
   * For further information about the renderers available see
   * DataTable.ext.renderer
   */
  "renderer": null,
  /**
   * Set the data property name that DataTables should use to get a row's id
   * to set as the `id` property in the node.
   */
  "rowId": "DT_RowId",
  /**
   * Caption value
   */
  "caption": null,
  /**
   * For server-side processing - use the data from the DOM for the first draw
   */
  iDeferLoading: null
};
_fnHungarianMap(DataTable.defaults);
DataTable.defaults.column = {
  /**
   * Define which column(s) an order will occur on for this column. This
   * allows a column's ordering to take multiple columns into account when
   * doing a sort or use the data from a different column. For example first
   * name / last name columns make sense to do a multi-column sort over the
   * two columns.
   */
  "aDataSort": null,
  "iDataSort": -1,
  ariaTitle: "",
  /**
   * You can control the default ordering direction, and even alter the
   * behaviour of the sort handler (i.e. only allow ascending ordering etc)
   * using this parameter.
   */
  "asSorting": ["asc", "desc", ""],
  /**
   * Enable or disable filtering on the data in this column.
   */
  "bSearchable": true,
  /**
   * Enable or disable ordering on this column.
   */
  "bSortable": true,
  /**
   * Enable or disable the display of this column.
   */
  "bVisible": true,
  /**
   * Developer definable function that is called whenever a cell is created (Ajax source,
   * etc) or processed for input (DOM source). This can be used as a compliment to mRender
   * allowing you to modify the DOM element (add background colour for example) when the
   * element is available.
   */
  "fnCreatedCell": null,
  /**
   * This property can be used to read data from any data source property,
   * including deeply nested objects / properties. `data` can be given in a
   * number of different ways which effect its behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted Javascript notation. Just as you use a `.` in
   *      Javascript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object. Note that
   *      function notation is recommended for use in `render` rather than
   *      `data` as it is much simpler to use as a renderer.
   * * `null` - use the original data source for the row rather than plucking
   *   data directly from it. This action has effects on two other
   *   initialisation options:
   *    * `defaultContent` - When null is given as the `data` option and
   *      `defaultContent` is specified for the column, the value defined by
   *      `defaultContent` will be used for the cell.
   *    * `render` - When null is used for the `data` option and the `render`
   *      option is specified for the column, the whole data source for the
   *      row is used for the renderer.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * `{array|object}` The data source for the row
   *      * `{string}` The type call data requested - this will be 'set' when
   *        setting data or 'filter', 'display', 'type', 'sort' or undefined
   *        when gathering data. Note that when `undefined` is given for the
   *        type DataTables expects to get the raw data for the object back<
   *      * `{*}` Data to set when the second parameter is 'set'.
   *    * Return:
   *      * The return value from the function is not required when 'set' is
   *        the type of call, but otherwise the return is what will be used
   *        for the data requested.
   *
   * Note that `data` is a getter and setter option. If you just require
   * formatting of data for output, you will likely want to use `render` which
   * is simply a getter and thus simpler to use.
   *
   * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
   * name change reflects the flexibility of this property and is consistent
   * with the naming of mRender. If 'mDataProp' is given, then it will still
   * be used by DataTables, as it automatically maps the old name to the new
   * if required.
   */
  "mData": null,
  /**
   * This property is the rendering partner to `data` and it is suggested that
   * when you want to manipulate data for display (including filtering,
   * sorting etc) without altering the underlying data for the table, use this
   * property. `render` can be considered to be the the read only companion to
   * `data` which is read / write (then as such more complex). Like `data`
   * this option can be given in a number of different ways to effect its
   * behaviour:
   *
   * * `integer` - treated as an array index for the data source. This is the
   *   default that DataTables uses (incrementally increased for each column).
   * * `string` - read an object property from the data source. There are
   *   three 'special' options that can be used in the string to alter how
   *   DataTables reads the data from the source object:
   *    * `.` - Dotted Javascript notation. Just as you use a `.` in
   *      Javascript to read from nested objects, so to can the options
   *      specified in `data`. For example: `browser.version` or
   *      `browser.name`. If your object parameter name contains a period, use
   *      `\\` to escape it - i.e. `first\\.name`.
   *    * `[]` - Array notation. DataTables can automatically combine data
   *      from and array source, joining the data with the characters provided
   *      between the two brackets. For example: `name[, ]` would provide a
   *      comma-space separated list from the source array. If no characters
   *      are provided between the brackets, the original array source is
   *      returned.
   *    * `()` - Function notation. Adding `()` to the end of a parameter will
   *      execute a function of the name given. For example: `browser()` for a
   *      simple function on the data source, `browser.version()` for a
   *      function in a nested property or even `browser().version` to get an
   *      object property if the function called returns an object.
   * * `object` - use different data for the different data types requested by
   *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
   *   of the object is the data type the property refers to and the value can
   *   defined using an integer, string or function using the same rules as
   *   `render` normally does. Note that an `_` option _must_ be specified.
   *   This is the default value to use if you haven't specified a value for
   *   the data type requested by DataTables.
   * * `function` - the function given will be executed whenever DataTables
   *   needs to set or get the data for a cell in the column. The function
   *   takes three parameters:
   *    * Parameters:
   *      * {array|object} The data source for the row (based on `data`)
   *      * {string} The type call data requested - this will be 'filter',
   *        'display', 'type' or 'sort'.
   *      * {array|object} The full data source for the row (not based on
   *        `data`)
   *    * Return:
   *      * The return value from the function is what will be used for the
   *        data requested.
   */
  "mRender": null,
  /**
   * Change the cell type created for the column - either TD cells or TH cells. This
   * can be useful as TH cells have semantic meaning in the table body, allowing them
   * to act as a header for a row (you may wish to add scope='row' to the TH elements).
   */
  "sCellType": "td",
  /**
   * Class to give to each cell in this column.
   */
  "sClass": "",
  /**
   * When DataTables calculates the column widths to assign to each column,
   * it finds the longest string in each column and then constructs a
   * temporary table and reads the widths from that. The problem with this
   * is that "mmm" is much wider then "iiii", but the latter is a longer
   * string - thus the calculation can go wrong (doing it properly and putting
   * it into an DOM object and measuring that is horribly(!) slow). Thus as
   * a "work around" we provide this option. It will append its value to the
   * text that is found to be the longest string for the column - i.e. padding.
   * Generally you shouldn't need this!
   */
  "sContentPadding": "",
  /**
   * Allows a default value to be given for a column's data, and will be used
   * whenever a null data source is encountered (this can be because `data`
   * is set to null, or because the data source itself is null).
   */
  "sDefaultContent": null,
  /**
   * This parameter is only used in DataTables' server-side processing. It can
   * be exceptionally useful to know what columns are being displayed on the
   * client side, and to map these to database fields. When defined, the names
   * also allow DataTables to reorder information from the server if it comes
   * back in an unexpected order (i.e. if you switch your columns around on the
   * client-side, your server-side code does not also need updating).
   */
  "sName": "",
  /**
   * Defines a data source type for the ordering which can be used to read
   * real-time information from the table (updating the internally cached
   * version) prior to ordering. This allows ordering to occur on user
   * editable elements such as form inputs.
   */
  "sSortDataType": "std",
  /**
   * The title of this column.
   */
  "sTitle": null,
  /**
   * The type allows you to specify how the data for this column will be
   * ordered. Four types (string, numeric, date and html (which will strip
   * HTML tags before ordering)) are currently available. Note that only date
   * formats understood by Javascript's Date() object will be accepted as type
   * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
   * 'numeric', 'date' or 'html' (by default). Further types can be adding
   * through plug-ins.
   */
  "sType": null,
  /**
   * Defining the width of the column, this parameter may take any CSS value
   * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
   * been given a specific width through this interface ensuring that the table
   * remains readable.
   */
  "sWidth": null
};
_fnHungarianMap(DataTable.defaults.column);
DataTable.models.oSettings = {
  /**
   * Primary features of DataTables and their enablement state.
   */
  "oFeatures": {
    /**
     * Flag to say if DataTables should automatically try to calculate the
     * optimum table and columns widths (true) or not (false).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bAutoWidth": null,
    /**
     * Delay the creation of TR and TD elements until they are actually
     * needed by a driven page draw. This can give a significant speed
     * increase for Ajax source and Javascript source data, but makes no
     * difference at all for DOM and server-side processing tables.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bDeferRender": null,
    /**
     * Enable filtering on the table or not. Note that if this is disabled
     * then there is no filtering at all on the table, including fnFilter.
     * To just remove the filtering input use sDom and remove the 'f' option.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bFilter": null,
    /**
     * Used only for compatiblity with DT1
     * @deprecated
     */
    "bInfo": true,
    /**
     * Used only for compatiblity with DT1
     * @deprecated
     */
    "bLengthChange": true,
    /**
     * Pagination enabled or not. Note that if this is disabled then length
     * changing must also be disabled.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bPaginate": null,
    /**
     * Processing indicator enable flag whenever DataTables is enacting a
     * user request - typically an Ajax request for server-side processing.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bProcessing": null,
    /**
     * Server-side processing enabled flag - when enabled DataTables will
     * get all data from the server for every draw - there is no filtering,
     * sorting or paging done on the client-side.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bServerSide": null,
    /**
     * Sorting enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bSort": null,
    /**
     * Multi-column sorting
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bSortMulti": null,
    /**
     * Apply a class to the columns which are being sorted to provide a
     * visual highlight or not. This can slow things down when enabled since
     * there is a lot of DOM interaction.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bSortClasses": null,
    /**
     * State saving enablement flag.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bStateSave": null
  },
  /**
   * Scrolling settings for a table.
   */
  "oScroll": {
    /**
     * When the table is shorter in height than sScrollY, collapse the
     * table container down to the height of the table (when true).
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "bCollapse": null,
    /**
     * Width of the scrollbar for the web-browser's platform. Calculated
     * during table initialisation.
     */
    "iBarWidth": 0,
    /**
     * Viewport width for horizontal scrolling. Horizontal scrolling is
     * disabled if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "sX": null,
    /**
     * Width to expand the table to when using x-scrolling. Typically you
     * should not need to use this.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     *  @deprecated
     */
    "sXInner": null,
    /**
     * Viewport height for vertical scrolling. Vertical scrolling is disabled
     * if an empty string.
     * Note that this parameter will be set by the initialisation routine. To
     * set a default use {@link DataTable.defaults}.
     */
    "sY": null
  },
  /**
   * Language information for the table.
   */
  "oLanguage": {
    /**
     * Information callback function. See
     * {@link DataTable.defaults.fnInfoCallback}
     */
    "fnInfoCallback": null
  },
  /**
   * Browser support parameters
   */
  "oBrowser": {
    /**
     * Determine if the vertical scrollbar is on the right or left of the
     * scrolling container - needed for rtl language layout, although not
     * all browsers move the scrollbar (Safari).
     */
    "bScrollbarLeft": false,
    /**
     * Browser scrollbar width
     */
    "barWidth": 0
  },
  "ajax": null,
  /**
   * Array referencing the nodes which are used for the features. The
   * parameters of this object match what is allowed by sDom - i.e.
   *   <ul>
   *     <li>'l' - Length changing</li>
   *     <li>'f' - Filtering input</li>
   *     <li>'t' - The table!</li>
   *     <li>'i' - Information</li>
   *     <li>'p' - Pagination</li>
   *     <li>'r' - pRocessing</li>
   *   </ul>
   */
  "aanFeatures": [],
  /**
   * Store data information - see {@link DataTable.models.oRow} for detailed
   * information.
   */
  "aoData": [],
  /**
   * Array of indexes which are in the current display (after filtering etc)
   */
  "aiDisplay": [],
  /**
   * Array of indexes for display - no filtering
   */
  "aiDisplayMaster": [],
  /**
   * Map of row ids to data indexes
   */
  "aIds": {},
  /**
   * Store information about each column that is in use
   */
  "aoColumns": [],
  /**
   * Store information about the table's header
   */
  "aoHeader": [],
  /**
   * Store information about the table's footer
   */
  "aoFooter": [],
  /**
   * Store the applied global search information in case we want to force a
   * research or compare the old search to a new one.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "oPreviousSearch": {},
  /**
   * Store for named searches
   */
  searchFixed: {},
  /**
   * Store the applied search for each column - see
   * {@link DataTable.models.oSearch} for the format that is used for the
   * filtering information for each column.
   */
  "aoPreSearchCols": [],
  /**
   * Sorting that is applied to the table. Note that the inner arrays are
   * used in the following manner:
   * <ul>
   *   <li>Index 0 - column number</li>
   *   <li>Index 1 - current sorting direction</li>
   * </ul>
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "aaSorting": null,
  /**
   * Sorting that is always applied to the table (i.e. prefixed in front of
   * aaSorting).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "aaSortingFixed": [],
  /**
   * If restoring a table - we should restore its width
   */
  "sDestroyWidth": 0,
  /**
   * Callback functions array for every time a row is inserted (i.e. on a draw).
   */
  "aoRowCallback": [],
  /**
   * Callback functions for the header on each draw.
   */
  "aoHeaderCallback": [],
  /**
   * Callback function for the footer on each draw.
   */
  "aoFooterCallback": [],
  /**
   * Array of callback functions for draw callback functions
   */
  "aoDrawCallback": [],
  /**
   * Array of callback functions for row created function
   */
  "aoRowCreatedCallback": [],
  /**
   * Callback functions for just before the table is redrawn. A return of
   * false will be used to cancel the draw.
   */
  "aoPreDrawCallback": [],
  /**
   * Callback functions for when the table has been initialised.
   */
  "aoInitComplete": [],
  /**
   * Callbacks for modifying the settings to be stored for state saving, prior to
   * saving state.
   */
  "aoStateSaveParams": [],
  /**
   * Callbacks for modifying the settings that have been stored for state saving
   * prior to using the stored values to restore the state.
   */
  "aoStateLoadParams": [],
  /**
   * Callbacks for operating on the settings object once the saved state has been
   * loaded
   */
  "aoStateLoaded": [],
  /**
   * Cache the table ID for quick access
   */
  "sTableId": "",
  /**
   * The TABLE node for the main table
   */
  "nTable": null,
  /**
   * Permanent ref to the thead element
   */
  "nTHead": null,
  /**
   * Permanent ref to the tfoot element - if it exists
   */
  "nTFoot": null,
  /**
   * Permanent ref to the tbody element
   */
  "nTBody": null,
  /**
   * Cache the wrapper node (contains all DataTables controlled elements)
   */
  "nTableWrapper": null,
  /**
   * Indicate if all required information has been read in
   */
  "bInitialised": false,
  /**
   * Information about open rows. Each object in the array has the parameters
   * 'nTr' and 'nParent'
   */
  "aoOpenRows": [],
  /**
   * Dictate the positioning of DataTables' control elements - see
   * {@link DataTable.model.oInit.sDom}.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "sDom": null,
  /**
   * Search delay (in mS)
   */
  "searchDelay": null,
  /**
   * Which type of pagination should be used.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "sPaginationType": "two_button",
  /**
   * Number of paging controls on the page. Only used for backwards compatibility
   */
  pagingControls: 0,
  /**
   * The state duration (for `stateSave`) in seconds.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "iStateDuration": 0,
  /**
   * Array of callback functions for state saving. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the JSON string to save that has been thus far created. Returns
   *       a JSON string to be inserted into a json object
   *       (i.e. '"param": [ 0, 1, 2]')</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   */
  "aoStateSave": [],
  /**
   * Array of callback functions for state loading. Each array element is an
   * object with the following parameters:
   *   <ul>
   *     <li>function:fn - function to call. Takes two parameters, oSettings
   *       and the object stored. May return false to cancel state loading</li>
   *     <li>string:sName - name of callback</li>
   *   </ul>
   */
  "aoStateLoad": [],
  /**
   * State that was saved. Useful for back reference
   */
  "oSavedState": null,
  /**
   * State that was loaded. Useful for back reference
   */
  "oLoadedState": null,
  /**
   * Note if draw should be blocked while getting data
   */
  "bAjaxDataGet": true,
  /**
   * The last jQuery XHR object that was used for server-side data gathering.
   * This can be used for working with the XHR information in one of the
   * callbacks
   */
  "jqXHR": null,
  /**
   * JSON returned from the server in the last Ajax request
   */
  "json": void 0,
  /**
   * Data submitted as part of the last Ajax request
   */
  "oAjaxData": void 0,
  /**
   * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
   * required).
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "sServerMethod": null,
  /**
   * Format numbers for display.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "fnFormatNumber": null,
  /**
   * List of options that can be used for the user selectable length menu.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "aLengthMenu": null,
  /**
   * Counter for the draws that the table does. Also used as a tracker for
   * server-side processing
   */
  "iDraw": 0,
  /**
   * Indicate if a redraw is being done - useful for Ajax
   */
  "bDrawing": false,
  /**
   * Draw index (iDraw) of the last error when parsing the returned data
   */
  "iDrawError": -1,
  /**
   * Paging display length
   */
  "_iDisplayLength": 10,
  /**
   * Paging start point - aiDisplay index
   */
  "_iDisplayStart": 0,
  /**
   * Server-side processing - number of records in the result set
   * (i.e. before filtering), Use fnRecordsTotal rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   */
  "_iRecordsTotal": 0,
  /**
   * Server-side processing - number of records in the current display set
   * (i.e. after filtering). Use fnRecordsDisplay rather than
   * this property to get the value of the number of records, regardless of
   * the server-side processing setting.
   */
  "_iRecordsDisplay": 0,
  /**
   * The classes to use for the table
   */
  "oClasses": {},
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if filtering has been done in the draw. Deprecated in favour of
   * events.
   *  @deprecated
   */
  "bFiltered": false,
  /**
   * Flag attached to the settings object so you can check in the draw
   * callback if sorting has been done in the draw. Deprecated in favour of
   * events.
   *  @deprecated
   */
  "bSorted": false,
  /**
   * Indicate that if multiple rows are in the header and there is more than
   * one unique cell per column, if the top one (true) or bottom one (false)
   * should be used for sorting / title by DataTables.
   * Note that this parameter will be set by the initialisation routine. To
   * set a default use {@link DataTable.defaults}.
   */
  "bSortCellsTop": null,
  /**
   * Initialisation object that is used for the table
   */
  "oInit": null,
  /**
   * Destroy callback functions - for plug-ins to attach themselves to the
   * destroy so they can clean up markup and events.
   */
  "aoDestroyCallback": [],
  /**
   * Get the number of records in the current record set, before filtering
   */
  "fnRecordsTotal": function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
  },
  /**
   * Get the number of records in the current record set, after filtering
   */
  "fnRecordsDisplay": function() {
    return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
  },
  /**
   * Get the display end point - aiDisplay index
   */
  "fnDisplayEnd": function() {
    var len = this._iDisplayLength, start = this._iDisplayStart, calc = start + len, records = this.aiDisplay.length, features = this.oFeatures, paginate = features.bPaginate;
    if (features.bServerSide) {
      return paginate === false || len === -1 ? start + records : Math.min(start + len, this._iRecordsDisplay);
    } else {
      return !paginate || calc > records || len === -1 ? records : calc;
    }
  },
  /**
   * The DataTables object for this table
   */
  "oInstance": null,
  /**
   * Unique identifier for each instance of the DataTables object. If there
   * is an ID on the table node, then it takes that value, otherwise an
   * incrementing internal counter is used.
   */
  "sInstance": null,
  /**
   * tabindex attribute value that is added to DataTables control elements, allowing
   * keyboard navigation of the table and its controls.
   */
  "iTabIndex": 0,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  "nScrollHead": null,
  /**
   * DIV container for the footer scrolling table if scrolling
   */
  "nScrollFoot": null,
  /**
   * Last applied sort
   */
  "aLastSort": [],
  /**
   * Stored plug-in instances
   */
  "oPlugins": {},
  /**
   * Function used to get a row's id from the row's data
   */
  "rowIdFn": null,
  /**
   * Data location where to store a row's id
   */
  "rowId": null,
  caption: "",
  captionNode: null,
  colgroup: null,
  /** Delay loading of data */
  deferLoading: null,
  /** Allow auto type detection */
  typeDetect: true
};
var extPagination = DataTable.ext.pager;
$.extend(extPagination, {
  simple: function() {
    return ["previous", "next"];
  },
  full: function() {
    return ["first", "previous", "next", "last"];
  },
  numbers: function() {
    return ["numbers"];
  },
  simple_numbers: function() {
    return ["previous", "numbers", "next"];
  },
  full_numbers: function() {
    return ["first", "previous", "numbers", "next", "last"];
  },
  first_last: function() {
    return ["first", "last"];
  },
  first_last_numbers: function() {
    return ["first", "numbers", "last"];
  },
  // For testing and plug-ins to use
  _numbers: _pagingNumbers,
  // Number of number buttons - legacy, use `numbers` option for paging feature
  numbers_length: 7
});
$.extend(true, DataTable.ext.renderer, {
  pagingButton: {
    _: function(settings, buttonType, content, active, disabled) {
      var classes = settings.oClasses.paging;
      var btnClasses = [classes.button];
      var btn;
      if (active) {
        btnClasses.push(classes.active);
      }
      if (disabled) {
        btnClasses.push(classes.disabled);
      }
      if (buttonType === "ellipsis") {
        btn = $('<span class="ellipsis"></span>').html(content)[0];
      } else {
        btn = $("<button>", {
          class: btnClasses.join(" "),
          role: "link",
          type: "button"
        }).html(content);
      }
      return {
        display: btn,
        clicker: btn
      };
    }
  },
  pagingContainer: {
    _: function(settings, buttons) {
      return buttons;
    }
  }
});
var _filterString = function(stripHtml, normalize) {
  return function(str) {
    if (_empty(str) || typeof str !== "string") {
      return str;
    }
    str = str.replace(_re_new_lines, " ");
    if (stripHtml) {
      str = _stripHtml(str);
    }
    if (normalize) {
      str = _normalize(str, false);
    }
    return str;
  };
};
function __mld(dtLib, momentFn, luxonFn, dateFn, arg1) {
  if (__moment) {
    return dtLib[momentFn](arg1);
  } else if (__luxon) {
    return dtLib[luxonFn](arg1);
  }
  return dateFn ? dtLib[dateFn](arg1) : dtLib;
}
var __mlWarning = false;
var __luxon;
var __moment;
function resolveWindowLibs() {
  if (window.luxon && !__luxon) {
    __luxon = window.luxon;
  }
  if (window.moment && !__moment) {
    __moment = window.moment;
  }
}
function __mldObj(d, format, locale) {
  var dt;
  resolveWindowLibs();
  if (__moment) {
    dt = __moment.utc(d, format, locale, true);
    if (!dt.isValid()) {
      return null;
    }
  } else if (__luxon) {
    dt = format && typeof d === "string" ? __luxon.DateTime.fromFormat(d, format) : __luxon.DateTime.fromISO(d);
    if (!dt.isValid) {
      return null;
    }
    dt.setLocale(locale);
  } else if (!format) {
    dt = new Date(d);
  } else {
    if (!__mlWarning) {
      alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17");
    }
    __mlWarning = true;
  }
  return dt;
}
function __mlHelper(localeString) {
  return function(from, to, locale, def) {
    if (arguments.length === 0) {
      locale = "en";
      to = null;
      from = null;
    } else if (arguments.length === 1) {
      locale = "en";
      to = from;
      from = null;
    } else if (arguments.length === 2) {
      locale = to;
      to = from;
      from = null;
    }
    var typeName = "datetime" + (to ? "-" + to : "");
    if (!DataTable.ext.type.order[typeName + "-pre"]) {
      DataTable.type(typeName, {
        detect: function(d) {
          return d === typeName ? typeName : false;
        },
        order: {
          pre: function(d) {
            return d.valueOf();
          }
        },
        className: "dt-right"
      });
    }
    return function(d, type) {
      if (d === null || d === void 0) {
        if (def === "--now") {
          var local = /* @__PURE__ */ new Date();
          d = new Date(Date.UTC(
            local.getFullYear(),
            local.getMonth(),
            local.getDate(),
            local.getHours(),
            local.getMinutes(),
            local.getSeconds()
          ));
        } else {
          d = "";
        }
      }
      if (type === "type") {
        return typeName;
      }
      if (d === "") {
        return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale);
      }
      if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
        return d;
      }
      var dt = __mldObj(d, from, locale);
      if (dt === null) {
        return d;
      }
      if (type === "sort") {
        return dt;
      }
      var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
      return type === "display" ? _escapeHtml(formatted) : formatted;
    };
  };
}
var __thousands = ",";
var __decimal = ".";
if (window.Intl !== void 0) {
  try {
    num = new Intl.NumberFormat().formatToParts(100000.1);
    for (i = 0; i < num.length; i++) {
      if (num[i].type === "group") {
        __thousands = num[i].value;
      } else if (num[i].type === "decimal") {
        __decimal = num[i].value;
      }
    }
  } catch (e) {
  }
}
var num;
var i;
DataTable.datetime = function(format, locale) {
  var typeName = "datetime-" + format;
  if (!locale) {
    locale = "en";
  }
  if (!DataTable.ext.type.order[typeName]) {
    DataTable.type(typeName, {
      detect: function(d) {
        var dt = __mldObj(d, format, locale);
        return d === "" || dt ? typeName : false;
      },
      order: {
        pre: function(d) {
          return __mldObj(d, format, locale) || 0;
        }
      },
      className: "dt-right"
    });
  }
};
DataTable.render = {
  date: __mlHelper("toLocaleDateString"),
  datetime: __mlHelper("toLocaleString"),
  time: __mlHelper("toLocaleTimeString"),
  number: function(thousands, decimal, precision, prefix, postfix) {
    if (thousands === null || thousands === void 0) {
      thousands = __thousands;
    }
    if (decimal === null || decimal === void 0) {
      decimal = __decimal;
    }
    return {
      display: function(d) {
        if (typeof d !== "number" && typeof d !== "string") {
          return d;
        }
        if (d === "" || d === null) {
          return d;
        }
        var negative = d < 0 ? "-" : "";
        var flo = parseFloat(d);
        var abs = Math.abs(flo);
        if (abs >= 1e11 || abs < 1e-4 && abs !== 0) {
          var exp = flo.toExponential(precision).split(/e\+?/);
          return exp[0] + " x 10<sup>" + exp[1] + "</sup>";
        }
        if (isNaN(flo)) {
          return _escapeHtml(d);
        }
        flo = flo.toFixed(precision);
        d = Math.abs(flo);
        var intPart = parseInt(d, 10);
        var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
        if (intPart === 0 && parseFloat(floatPart) === 0) {
          negative = "";
        }
        return negative + (prefix || "") + intPart.toString().replace(
          /\B(?=(\d{3})+(?!\d))/g,
          thousands
        ) + floatPart + (postfix || "");
      }
    };
  },
  text: function() {
    return {
      display: _escapeHtml,
      filter: _escapeHtml
    };
  }
};
var _extTypes = DataTable.ext.type;
DataTable.type = function(name, prop, val) {
  if (!prop) {
    return {
      className: _extTypes.className[name],
      detect: _extTypes.detect.find(function(fn) {
        return fn._name === name;
      }),
      order: {
        pre: _extTypes.order[name + "-pre"],
        asc: _extTypes.order[name + "-asc"],
        desc: _extTypes.order[name + "-desc"]
      },
      render: _extTypes.render[name],
      search: _extTypes.search[name]
    };
  }
  var setProp = function(prop2, propVal) {
    _extTypes[prop2][name] = propVal;
  };
  var setDetect = function(detect) {
    Object.defineProperty(detect, "_name", { value: name });
    var idx = _extTypes.detect.findIndex(function(item) {
      return item._name === name;
    });
    if (idx === -1) {
      _extTypes.detect.unshift(detect);
    } else {
      _extTypes.detect.splice(idx, 1, detect);
    }
  };
  var setOrder = function(obj) {
    _extTypes.order[name + "-pre"] = obj.pre;
    _extTypes.order[name + "-asc"] = obj.asc;
    _extTypes.order[name + "-desc"] = obj.desc;
  };
  if (val === void 0) {
    val = prop;
    prop = null;
  }
  if (prop === "className") {
    setProp("className", val);
  } else if (prop === "detect") {
    setDetect(val);
  } else if (prop === "order") {
    setOrder(val);
  } else if (prop === "render") {
    setProp("render", val);
  } else if (prop === "search") {
    setProp("search", val);
  } else if (!prop) {
    if (val.className) {
      setProp("className", val.className);
    }
    if (val.detect !== void 0) {
      setDetect(val.detect);
    }
    if (val.order) {
      setOrder(val.order);
    }
    if (val.render !== void 0) {
      setProp("render", val.render);
    }
    if (val.search !== void 0) {
      setProp("search", val.search);
    }
  }
};
DataTable.types = function() {
  return _extTypes.detect.map(function(fn) {
    return fn._name;
  });
};
var __diacriticSort = function(a, b) {
  a = a !== null && a !== void 0 ? a.toString().toLowerCase() : "";
  b = b !== null && b !== void 0 ? b.toString().toLowerCase() : "";
  return a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true
  });
};
DataTable.type("string", {
  detect: function() {
    return "string";
  },
  order: {
    pre: function(a) {
      return _empty(a) && typeof a !== "boolean" ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString();
    }
  },
  search: _filterString(false, true)
});
DataTable.type("string-utf8", {
  detect: {
    allOf: function(d) {
      return true;
    },
    oneOf: function(d) {
      return !_empty(d) && navigator.languages && typeof d === "string" && d.match(/[^\x00-\x7F]/);
    }
  },
  order: {
    asc: __diacriticSort,
    desc: function(a, b) {
      return __diacriticSort(a, b) * -1;
    }
  },
  search: _filterString(false, true)
});
DataTable.type("html", {
  detect: {
    allOf: function(d) {
      return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1;
    },
    oneOf: function(d) {
      return !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1;
    }
  },
  order: {
    pre: function(a) {
      return _empty(a) ? "" : a.replace ? _stripHtml(a).trim().toLowerCase() : a + "";
    }
  },
  search: _filterString(true, true)
});
DataTable.type("date", {
  className: "dt-type-date",
  detect: {
    allOf: function(d) {
      if (d && !(d instanceof Date) && !_re_date.test(d)) {
        return null;
      }
      var parsed = Date.parse(d);
      return parsed !== null && !isNaN(parsed) || _empty(d);
    },
    oneOf: function(d) {
      return d instanceof Date || typeof d === "string" && _re_date.test(d);
    }
  },
  order: {
    pre: function(d) {
      var ts = Date.parse(d);
      return isNaN(ts) ? -Infinity : ts;
    }
  }
});
DataTable.type("html-num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, true, false);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, true, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html, _re_formatted_numeric);
    }
  },
  search: _filterString(true, true)
});
DataTable.type("html-num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, false, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _htmlNumeric(d, decimal, false, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_html);
    }
  },
  search: _filterString(true, true)
});
DataTable.type("num-fmt", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, true, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, true, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp, _re_formatted_numeric);
    }
  }
});
DataTable.type("num", {
  className: "dt-type-numeric",
  detect: {
    allOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, false, true);
    },
    oneOf: function(d, settings) {
      var decimal = settings.oLanguage.sDecimal;
      return _isNumber(d, decimal, false, false);
    }
  },
  order: {
    pre: function(d, s) {
      var dp = s.oLanguage.sDecimal;
      return __numericReplace(d, dp);
    }
  }
});
var __numericReplace = function(d, decimalPlace, re1, re2) {
  if (d !== 0 && (!d || d === "-")) {
    return -Infinity;
  }
  var type = typeof d;
  if (type === "number" || type === "bigint") {
    return d;
  }
  if (decimalPlace) {
    d = _numToDecimal(d, decimalPlace);
  }
  if (d.replace) {
    if (re1) {
      d = d.replace(re1, "");
    }
    if (re2) {
      d = d.replace(re2, "");
    }
  }
  return d * 1;
};
$.extend(true, DataTable.ext.renderer, {
  footer: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.tfoot.cell);
    }
  },
  header: {
    _: function(settings, cell, classes) {
      cell.addClass(classes.thead.cell);
      if (!settings.oFeatures.bSort) {
        cell.addClass(classes.order.none);
      }
      var legacyTop = settings.bSortCellsTop;
      var headerRows = cell.closest("thead").find("tr");
      var rowIdx = cell.parent().index();
      if (
        // Cells and rows which have the attribute to disable the icons
        cell.attr("data-dt-order") === "disable" || cell.parent().attr("data-dt-order") === "disable" || // Legacy support for `orderCellsTop`. If it is set, then cells
        // which are not in the top or bottom row of the header (depending
        // on the value) do not get the sorting classes applied to them
        legacyTop === true && rowIdx !== 0 || legacyTop === false && rowIdx !== headerRows.length - 1
      ) {
        return;
      }
      $(settings.nTable).on("order.dt.DT column-visibility.dt.DT", function(e, ctx) {
        if (settings !== ctx) {
          return;
        }
        var sorting = ctx.sortDetails;
        if (!sorting) {
          return;
        }
        var i;
        var orderClasses = classes.order;
        var columns = ctx.api.columns(cell);
        var col = settings.aoColumns[columns.flatten()[0]];
        var orderable = columns.orderable().includes(true);
        var ariaType = "";
        var indexes = columns.indexes();
        var sortDirs = columns.orderable(true).flatten();
        var orderedColumns = _pluck(sorting, "col");
        cell.removeClass(
          orderClasses.isAsc + " " + orderClasses.isDesc
        ).toggleClass(orderClasses.none, !orderable).toggleClass(orderClasses.canAsc, orderable && sortDirs.includes("asc")).toggleClass(orderClasses.canDesc, orderable && sortDirs.includes("desc"));
        var isOrdering = true;
        for (i = 0; i < indexes.length; i++) {
          if (!orderedColumns.includes(indexes[i])) {
            isOrdering = false;
          }
        }
        if (isOrdering) {
          var orderDirs = columns.order();
          cell.addClass(
            orderDirs.includes("asc") ? orderClasses.isAsc : "" + orderDirs.includes("desc") ? orderClasses.isDesc : ""
          );
        }
        var firstVis = -1;
        for (i = 0; i < orderedColumns.length; i++) {
          if (settings.aoColumns[orderedColumns[i]].bVisible) {
            firstVis = orderedColumns[i];
            break;
          }
        }
        if (indexes[0] == firstVis) {
          var firstSort = sorting[0];
          var sortOrder = col.asSorting;
          cell.attr("aria-sort", firstSort.dir === "asc" ? "ascending" : "descending");
          ariaType = !sortOrder[firstSort.index + 1] ? "Remove" : "Reverse";
        } else {
          cell.removeAttr("aria-sort");
        }
        cell.attr(
          "aria-label",
          orderable ? col.ariaTitle + ctx.api.i18n("oAria.orderable" + ariaType) : col.ariaTitle
        );
        if (orderable) {
          cell.find(".dt-column-title").attr("role", "button");
          cell.attr("tabindex", 0);
        }
      });
    }
  },
  layout: {
    _: function(settings, container, items) {
      var classes = settings.oClasses.layout;
      var row = $("<div/>").attr("id", items.id || null).addClass(items.className || classes.row).appendTo(container);
      $.each(items, function(key, val) {
        if (key === "id" || key === "className") {
          return;
        }
        var klass = "";
        if (val.table) {
          row.addClass(classes.tableRow);
          klass += classes.tableCell + " ";
        }
        if (key === "start") {
          klass += classes.start;
        } else if (key === "end") {
          klass += classes.end;
        } else {
          klass += classes.full;
        }
        $("<div/>").attr({
          id: val.id || null,
          "class": val.className ? val.className : classes.cell + " " + klass
        }).append(val.contents).appendTo(row);
      });
    }
  }
});
DataTable.feature = {};
DataTable.feature.register = function(name, cb, legacy) {
  DataTable.ext.features[name] = cb;
  if (legacy) {
    _ext.feature.push({
      cFeature: legacy,
      fnInit: cb
    });
  }
};
function _divProp(el, prop, val) {
  if (val) {
    el[prop] = val;
  }
}
DataTable.feature.register("div", function(settings, opts) {
  var n = $("<div>")[0];
  if (opts) {
    _divProp(n, "className", opts.className);
    _divProp(n, "id", opts.id);
    _divProp(n, "innerHTML", opts.html);
    _divProp(n, "textContent", opts.text);
  }
  return n;
});
DataTable.feature.register("info", function(settings, opts) {
  if (!settings.oFeatures.bInfo) {
    return null;
  }
  var lang = settings.oLanguage, tid = settings.sTableId, n = $("<div/>", {
    "class": settings.oClasses.info.container
  });
  opts = $.extend({
    callback: lang.fnInfoCallback,
    empty: lang.sInfoEmpty,
    postfix: lang.sInfoPostFix,
    search: lang.sInfoFiltered,
    text: lang.sInfo
  }, opts);
  settings.aoDrawCallback.push(function(s) {
    _fnUpdateInfo(s, opts, n);
  });
  if (!settings._infoEl) {
    n.attr({
      "aria-live": "polite",
      id: tid + "_info",
      role: "status"
    });
    $(settings.nTable).attr("aria-describedby", tid + "_info");
    settings._infoEl = n;
  }
  return n;
}, "i");
function _fnUpdateInfo(settings, opts, node) {
  var start = settings._iDisplayStart + 1, end = settings.fnDisplayEnd(), max = settings.fnRecordsTotal(), total = settings.fnRecordsDisplay(), out = total ? opts.text : opts.empty;
  if (total !== max) {
    out += " " + opts.search;
  }
  out += opts.postfix;
  out = _fnMacros(settings, out);
  if (opts.callback) {
    out = opts.callback.call(
      settings.oInstance,
      settings,
      start,
      end,
      max,
      total,
      out
    );
  }
  node.html(out);
  _fnCallbackFire(settings, null, "info", [settings, node[0], out]);
}
var __searchCounter = 0;
DataTable.feature.register("search", function(settings, opts) {
  if (!settings.oFeatures.bFilter) {
    return null;
  }
  var classes = settings.oClasses.search;
  var tableId = settings.sTableId;
  var language = settings.oLanguage;
  var previousSearch = settings.oPreviousSearch;
  var input = '<input type="search" class="' + classes.input + '"/>';
  opts = $.extend({
    placeholder: language.sSearchPlaceholder,
    processing: false,
    text: language.sSearch
  }, opts);
  if (opts.text.indexOf("_INPUT_") === -1) {
    opts.text += "_INPUT_";
  }
  opts.text = _fnMacros(settings, opts.text);
  var end = opts.text.match(/_INPUT_$/);
  var start = opts.text.match(/^_INPUT_/);
  var removed = opts.text.replace(/_INPUT_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start) {
    str = "_INPUT_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_INPUT_";
  }
  var filter = $("<div>").addClass(classes.container).append(str.replace(/_INPUT_/, input));
  filter.find("label").attr("for", "dt-search-" + __searchCounter);
  filter.find("input").attr("id", "dt-search-" + __searchCounter);
  __searchCounter++;
  var searchFn = function(event) {
    var val = this.value;
    if (previousSearch.return && event.key !== "Enter") {
      return;
    }
    if (val != previousSearch.search) {
      _fnProcessingRun(settings, opts.processing, function() {
        previousSearch.search = val;
        _fnFilterComplete(settings, previousSearch);
        settings._iDisplayStart = 0;
        _fnDraw(settings);
      });
    }
  };
  var searchDelay = settings.searchDelay !== null ? settings.searchDelay : 0;
  var jqFilter = $("input", filter).val(previousSearch.search).attr("placeholder", opts.placeholder).on(
    "keyup.DT search.DT input.DT paste.DT cut.DT",
    searchDelay ? DataTable.util.debounce(searchFn, searchDelay) : searchFn
  ).on("mouseup.DT", function(e) {
    setTimeout(function() {
      searchFn.call(jqFilter[0], e);
    }, 10);
  }).on("keypress.DT", function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  }).attr("aria-controls", tableId);
  $(settings.nTable).on("search.dt.DT", function(ev, s) {
    if (settings === s && jqFilter[0] !== document.activeElement) {
      jqFilter.val(
        typeof previousSearch.search !== "function" ? previousSearch.search : ""
      );
    }
  });
  return filter;
}, "f");
DataTable.feature.register("paging", function(settings, opts) {
  if (!settings.oFeatures.bPaginate) {
    return null;
  }
  opts = $.extend({
    buttons: DataTable.ext.pager.numbers_length,
    type: settings.sPaginationType,
    boundaryNumbers: true,
    firstLast: true,
    previousNext: true,
    numbers: true
  }, opts);
  var host = $("<div/>").addClass(settings.oClasses.paging.container + (opts.type ? " paging_" + opts.type : "")).append(
    $("<nav>").attr("aria-label", "pagination").addClass(settings.oClasses.paging.nav)
  );
  var draw = function() {
    _pagingDraw(settings, host.children(), opts);
  };
  settings.aoDrawCallback.push(draw);
  $(settings.nTable).on("column-sizing.dt.DT", draw);
  return host;
}, "p");
function _pagingDynamic(opts) {
  var out = [];
  if (opts.numbers) {
    out.push("numbers");
  }
  if (opts.previousNext) {
    out.unshift("previous");
    out.push("next");
  }
  if (opts.firstLast) {
    out.unshift("first");
    out.push("last");
  }
  return out;
}
function _pagingDraw(settings, host, opts) {
  if (!settings._bInitComplete) {
    return;
  }
  var plugin = opts.type ? DataTable.ext.pager[opts.type] : _pagingDynamic, aria = settings.oLanguage.oAria.paginate || {}, start = settings._iDisplayStart, len = settings._iDisplayLength, visRecords = settings.fnRecordsDisplay(), all = len === -1, page = all ? 0 : Math.ceil(start / len), pages = all ? 1 : Math.ceil(visRecords / len), buttons = [], buttonEls = [], buttonsNested = plugin(opts).map(function(val) {
    return val === "numbers" ? _pagingNumbers(page, pages, opts.buttons, opts.boundaryNumbers) : val;
  });
  buttons = buttons.concat.apply(buttons, buttonsNested);
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var btnInfo = _pagingButtonInfo(settings, button, page, pages);
    var btn = _fnRenderer(settings, "pagingButton")(
      settings,
      button,
      btnInfo.display,
      btnInfo.active,
      btnInfo.disabled
    );
    var ariaLabel = typeof button === "string" ? aria[button] : aria.number ? aria.number + (button + 1) : null;
    $(btn.clicker).attr({
      "aria-controls": settings.sTableId,
      "aria-disabled": btnInfo.disabled ? "true" : null,
      "aria-current": btnInfo.active ? "page" : null,
      "aria-label": ariaLabel,
      "data-dt-idx": button,
      "tabIndex": btnInfo.disabled ? -1 : settings.iTabIndex ? settings.iTabIndex : null
      // `0` doesn't need a tabIndex since it is the default
    });
    if (typeof button !== "number") {
      $(btn.clicker).addClass(button);
    }
    _fnBindAction(
      btn.clicker,
      { action: button },
      function(e) {
        e.preventDefault();
        _fnPageChange(settings, e.data.action, true);
      }
    );
    buttonEls.push(btn.display);
  }
  var wrapped = _fnRenderer(settings, "pagingContainer")(
    settings,
    buttonEls
  );
  var activeEl = host.find(document.activeElement).data("dt-idx");
  host.empty().append(wrapped);
  if (activeEl !== void 0) {
    host.find("[data-dt-idx=" + activeEl + "]").trigger("focus");
  }
  if (buttonEls.length && // any buttons
  opts.buttons > 1 && // prevent infinite
  $(host).height() >= $(buttonEls[0]).outerHeight() * 2 - 10) {
    _pagingDraw(settings, host, $.extend({}, opts, { buttons: opts.buttons - 2 }));
  }
}
function _pagingButtonInfo(settings, button, page, pages) {
  var lang = settings.oLanguage.oPaginate;
  var o = {
    display: "",
    active: false,
    disabled: false
  };
  switch (button) {
    case "ellipsis":
      o.display = "&#x2026;";
      o.disabled = true;
      break;
    case "first":
      o.display = lang.sFirst;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "previous":
      o.display = lang.sPrevious;
      if (page === 0) {
        o.disabled = true;
      }
      break;
    case "next":
      o.display = lang.sNext;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    case "last":
      o.display = lang.sLast;
      if (pages === 0 || page === pages - 1) {
        o.disabled = true;
      }
      break;
    default:
      if (typeof button === "number") {
        o.display = settings.fnFormatNumber(button + 1);
        if (page === button) {
          o.active = true;
        }
      }
      break;
  }
  return o;
}
function _pagingNumbers(page, pages, buttons, addFirstLast) {
  var numbers = [], half = Math.floor(buttons / 2), before = addFirstLast ? 2 : 1, after = addFirstLast ? 1 : 0;
  if (pages <= buttons) {
    numbers = _range(0, pages);
  } else if (buttons === 1) {
    numbers = [page];
  } else if (buttons === 3) {
    if (page <= 1) {
      numbers = [0, 1, "ellipsis"];
    } else if (page >= pages - 2) {
      numbers = _range(pages - 2, pages);
      numbers.unshift("ellipsis");
    } else {
      numbers = ["ellipsis", page, "ellipsis"];
    }
  } else if (page <= half) {
    numbers = _range(0, buttons - before);
    numbers.push("ellipsis");
    if (addFirstLast) {
      numbers.push(pages - 1);
    }
  } else if (page >= pages - 1 - half) {
    numbers = _range(pages - (buttons - before), pages);
    numbers.unshift("ellipsis");
    if (addFirstLast) {
      numbers.unshift(0);
    }
  } else {
    numbers = _range(page - half + before, page + half - after);
    numbers.push("ellipsis");
    numbers.unshift("ellipsis");
    if (addFirstLast) {
      numbers.push(pages - 1);
      numbers.unshift(0);
    }
  }
  return numbers;
}
var __lengthCounter = 0;
DataTable.feature.register("pageLength", function(settings, opts) {
  var features = settings.oFeatures;
  if (!features.bPaginate || !features.bLengthChange) {
    return null;
  }
  opts = $.extend({
    menu: settings.aLengthMenu,
    text: settings.oLanguage.sLengthMenu
  }, opts);
  var classes = settings.oClasses.length, tableId = settings.sTableId, menu = opts.menu, lengths = [], language = [], i;
  if (Array.isArray(menu[0])) {
    lengths = menu[0];
    language = menu[1];
  } else {
    for (i = 0; i < menu.length; i++) {
      if ($.isPlainObject(menu[i])) {
        lengths.push(menu[i].value);
        language.push(menu[i].label);
      } else {
        lengths.push(menu[i]);
        language.push(menu[i]);
      }
    }
  }
  var end = opts.text.match(/_MENU_$/);
  var start = opts.text.match(/^_MENU_/);
  var removed = opts.text.replace(/_MENU_/, "");
  var str = "<label>" + opts.text + "</label>";
  if (start) {
    str = "_MENU_<label>" + removed + "</label>";
  } else if (end) {
    str = "<label>" + removed + "</label>_MENU_";
  }
  var tmpId = "tmp-" + +/* @__PURE__ */ new Date();
  var div = $("<div/>").addClass(classes.container).append(
    str.replace("_MENU_", '<span id="' + tmpId + '"></span>')
  );
  var textNodes = [];
  Array.from(div.find("label")[0].childNodes).forEach(function(el) {
    if (el.nodeType === Node.TEXT_NODE) {
      textNodes.push({
        el,
        text: el.textContent
      });
    }
  });
  var updateEntries = function(len) {
    textNodes.forEach(function(node) {
      node.el.textContent = _fnMacros(settings, node.text, len);
    });
  };
  var select = $("<select/>", {
    "name": tableId + "_length",
    "aria-controls": tableId,
    "class": classes.select
  });
  for (i = 0; i < lengths.length; i++) {
    select[0][i] = new Option(
      typeof language[i] === "number" ? settings.fnFormatNumber(language[i]) : language[i],
      lengths[i]
    );
  }
  div.find("label").attr("for", "dt-length-" + __lengthCounter);
  select.attr("id", "dt-length-" + __lengthCounter);
  __lengthCounter++;
  div.find("#" + tmpId).replaceWith(select);
  $("select", div).val(settings._iDisplayLength).on("change.DT", function() {
    _fnLengthChange(settings, $(this).val());
    _fnDraw(settings);
  });
  $(settings.nTable).on("length.dt.DT", function(e, s, len) {
    if (settings === s) {
      $("select", div).val(len);
      updateEntries(len);
    }
  });
  updateEntries(settings._iDisplayLength);
  return div;
}, "l");
$.fn.dataTable = DataTable;
DataTable.$ = $;
$.fn.dataTableSettings = DataTable.settings;
$.fn.dataTableExt = DataTable.ext;
$.fn.DataTable = function(opts) {
  return $(this).dataTable(opts).api();
};
$.each(DataTable, function(prop, val) {
  $.fn.DataTable[prop] = val;
});
var dataTables_default = DataTable;

// node_modules/datatables.net-dt/js/dataTables.dataTables.mjs
var dataTables_dataTables_default = dataTables_default;
export {
  dataTables_dataTables_default as default
};
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

datatables.net/js/dataTables.mjs:
  (*! DataTables 2.1.8
   * © SpryMedia Ltd - datatables.net/license
   *)

datatables.net-dt/js/dataTables.dataTables.mjs:
  (*! DataTables styling integration
   * © SpryMedia Ltd - datatables.net/license
   *)
*/
//# sourceMappingURL=datatables__net-dt.js.map
