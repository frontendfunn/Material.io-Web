!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=3)}([function(t,e,i){var n;/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */!function(e,i){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?i(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return i(t)}:i(e)}("undefined"!=typeof window?window:this,function(s,r){"use strict";var a=[],o=s.document,l=Object.getPrototypeOf,c=a.slice,d=a.concat,h=a.push,u=a.indexOf,p={},_=p.toString,f=p.hasOwnProperty,g=f.toString,m=g.call(Object),E={},v=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},C=function(t){return null!=t&&t===t.window},T={type:!0,src:!0,noModule:!0};function y(t,e,i){var n,s=(e=e||o).createElement("script");if(s.text=t,i)for(n in T)i[n]&&(s[n]=i[n]);e.head.appendChild(s).parentNode.removeChild(s)}function A(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?p[_.call(t)]||"object":typeof t}var I=function(t,e){return new I.fn.init(t,e)},b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function S(t){var e=!!t&&"length"in t&&t.length,i=A(t);return!v(t)&&!C(t)&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}I.fn=I.prototype={jquery:"3.3.1",constructor:I,length:0,toArray:function(){return c.call(this)},get:function(t){return null==t?c.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=I.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return I.each(this,t)},map:function(t){return this.pushStack(I.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:a.sort,splice:a.splice},I.extend=I.fn.extend=function(){var t,e,i,n,s,r,a=arguments[0]||{},o=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[o]||{},o++),"object"==typeof a||v(a)||(a={}),o===l&&(a=this,o--);o<l;o++)if(null!=(t=arguments[o]))for(e in t)i=a[e],a!==(n=t[e])&&(c&&n&&(I.isPlainObject(n)||(s=Array.isArray(n)))?(s?(s=!1,r=i&&Array.isArray(i)?i:[]):r=i&&I.isPlainObject(i)?i:{},a[e]=I.extend(c,r,n)):void 0!==n&&(a[e]=n));return a},I.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,i;return!(!t||"[object Object]"!==_.call(t)||(e=l(t))&&("function"!=typeof(i=f.call(e,"constructor")&&e.constructor)||g.call(i)!==m))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t){y(t)},each:function(t,e){var i,n=0;if(S(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},trim:function(t){return null==t?"":(t+"").replace(b,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(S(Object(t))?I.merge(i,"string"==typeof t?[t]:t):h.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:u.call(e,t,i)},merge:function(t,e){for(var i=+e.length,n=0,s=t.length;n<i;n++)t[s++]=e[n];return t.length=s,t},grep:function(t,e,i){for(var n=[],s=0,r=t.length,a=!i;s<r;s++)!e(t[s],s)!==a&&n.push(t[s]);return n},map:function(t,e,i){var n,s,r=0,a=[];if(S(t))for(n=t.length;r<n;r++)null!=(s=e(t[r],r,i))&&a.push(s);else for(r in t)null!=(s=e(t[r],r,i))&&a.push(s);return d.apply([],a)},guid:1,support:E}),"function"==typeof Symbol&&(I.fn[Symbol.iterator]=a[Symbol.iterator]),I.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){p["[object "+e+"]"]=e.toLowerCase()});var L=function(t){var e,i,n,s,r,a,o,l,c,d,h,u,p,_,f,g,m,E,v,C="sizzle"+1*new Date,T=t.document,y=0,A=0,I=at(),b=at(),S=at(),L=function(t,e){return t===e&&(h=!0),0},O={}.hasOwnProperty,x=[],R=x.pop,w=x.push,N=x.push,D=x.slice,H=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},k="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",P="\\["+F+"*("+M+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+F+"*\\]",B=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",V=new RegExp(F+"+","g"),j=new RegExp("^"+F+"+|((?:^|[^\\\\])(?:\\\\.)*)"+F+"+$","g"),q=new RegExp("^"+F+"*,"+F+"*"),W=new RegExp("^"+F+"*([>+~]|"+F+")"+F+"*"),U=new RegExp("="+F+"*([^\\]'\"]*?)"+F+"*\\]","g"),K=new RegExp(B),G=new RegExp("^"+M+"$"),z={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+F+"*(even|odd|(([+-]|)(\\d*)n|)"+F+"*(?:([+-]|)"+F+"*(\\d+)|))"+F+"*\\)|)","i"),bool:new RegExp("^(?:"+k+")$","i"),needsContext:new RegExp("^"+F+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+F+"*((?:-\\d)?\\d*)"+F+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,$=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Q=new RegExp("\\\\([\\da-f]{1,6}"+F+"?|("+F+")|.)","ig"),tt=function(t,e,i){var n="0x"+e-65536;return n!=n||i?e:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,it=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},nt=function(){u()},st=Et(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{N.apply(x=D.call(T.childNodes),T.childNodes),x[T.childNodes.length].nodeType}catch(t){N={apply:x.length?function(t,e){w.apply(t,D.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}function rt(t,e,n,s){var r,o,c,d,h,_,m,E=e&&e.ownerDocument,y=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==y&&9!==y&&11!==y)return n;if(!s&&((e?e.ownerDocument||e:T)!==p&&u(e),e=e||p,f)){if(11!==y&&(h=Z.exec(t)))if(r=h[1]){if(9===y){if(!(c=e.getElementById(r)))return n;if(c.id===r)return n.push(c),n}else if(E&&(c=E.getElementById(r))&&v(e,c)&&c.id===r)return n.push(c),n}else{if(h[2])return N.apply(n,e.getElementsByTagName(t)),n;if((r=h[3])&&i.getElementsByClassName&&e.getElementsByClassName)return N.apply(n,e.getElementsByClassName(r)),n}if(i.qsa&&!S[t+" "]&&(!g||!g.test(t))){if(1!==y)E=e,m=t;else if("object"!==e.nodeName.toLowerCase()){for((d=e.getAttribute("id"))?d=d.replace(et,it):e.setAttribute("id",d=C),o=(_=a(t)).length;o--;)_[o]="#"+d+" "+mt(_[o]);m=_.join(","),E=J.test(t)&&ft(e.parentNode)||e}if(m)try{return N.apply(n,E.querySelectorAll(m)),n}catch(t){}finally{d===C&&e.removeAttribute("id")}}}return l(t.replace(j,"$1"),e,n,s)}function at(){var t=[];return function e(i,s){return t.push(i+" ")>n.cacheLength&&delete e[t.shift()],e[i+" "]=s}}function ot(t){return t[C]=!0,t}function lt(t){var e=p.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ct(t,e){for(var i=t.split("|"),s=i.length;s--;)n.attrHandle[i[s]]=e}function dt(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(n)return n;if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}function ht(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function ut(t){return function(e){var i=e.nodeName.toLowerCase();return("input"===i||"button"===i)&&e.type===t}}function pt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&st(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function _t(t){return ot(function(e){return e=+e,ot(function(i,n){for(var s,r=t([],i.length,e),a=r.length;a--;)i[s=r[a]]&&(i[s]=!(n[s]=i[s]))})})}function ft(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in i=rt.support={},r=rt.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},u=rt.setDocument=function(t){var e,s,a=t?t.ownerDocument||t:T;return a!==p&&9===a.nodeType&&a.documentElement?(_=(p=a).documentElement,f=!r(p),T!==p&&(s=p.defaultView)&&s.top!==s&&(s.addEventListener?s.addEventListener("unload",nt,!1):s.attachEvent&&s.attachEvent("onunload",nt)),i.attributes=lt(function(t){return t.className="i",!t.getAttribute("className")}),i.getElementsByTagName=lt(function(t){return t.appendChild(p.createComment("")),!t.getElementsByTagName("*").length}),i.getElementsByClassName=Y.test(p.getElementsByClassName),i.getById=lt(function(t){return _.appendChild(t).id=C,!p.getElementsByName||!p.getElementsByName(C).length}),i.getById?(n.filter.ID=function(t){var e=t.replace(Q,tt);return function(t){return t.getAttribute("id")===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&f){var i=e.getElementById(t);return i?[i]:[]}}):(n.filter.ID=function(t){var e=t.replace(Q,tt);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&f){var i,n,s,r=e.getElementById(t);if(r){if((i=r.getAttributeNode("id"))&&i.value===t)return[r];for(s=e.getElementsByName(t),n=0;r=s[n++];)if((i=r.getAttributeNode("id"))&&i.value===t)return[r]}return[]}}),n.find.TAG=i.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):i.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],s=0,r=e.getElementsByTagName(t);if("*"===t){for(;i=r[s++];)1===i.nodeType&&n.push(i);return n}return r},n.find.CLASS=i.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&f)return e.getElementsByClassName(t)},m=[],g=[],(i.qsa=Y.test(p.querySelectorAll))&&(lt(function(t){_.appendChild(t).innerHTML="<a id='"+C+"'></a><select id='"+C+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+F+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||g.push("\\["+F+"*(?:value|"+k+")"),t.querySelectorAll("[id~="+C+"-]").length||g.push("~="),t.querySelectorAll(":checked").length||g.push(":checked"),t.querySelectorAll("a#"+C+"+*").length||g.push(".#.+[+~]")}),lt(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=p.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&g.push("name"+F+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),_.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),g.push(",.*:")})),(i.matchesSelector=Y.test(E=_.matches||_.webkitMatchesSelector||_.mozMatchesSelector||_.oMatchesSelector||_.msMatchesSelector))&&lt(function(t){i.disconnectedMatch=E.call(t,"*"),E.call(t,"[s!='']:x"),m.push("!=",B)}),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),e=Y.test(_.compareDocumentPosition),v=e||Y.test(_.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,n=e&&e.parentNode;return t===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):t.compareDocumentPosition&&16&t.compareDocumentPosition(n)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},L=e?function(t,e){if(t===e)return h=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(1&(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!i.sortDetached&&e.compareDocumentPosition(t)===n?t===p||t.ownerDocument===T&&v(T,t)?-1:e===p||e.ownerDocument===T&&v(T,e)?1:d?H(d,t)-H(d,e):0:4&n?-1:1)}:function(t,e){if(t===e)return h=!0,0;var i,n=0,s=t.parentNode,r=e.parentNode,a=[t],o=[e];if(!s||!r)return t===p?-1:e===p?1:s?-1:r?1:d?H(d,t)-H(d,e):0;if(s===r)return dt(t,e);for(i=t;i=i.parentNode;)a.unshift(i);for(i=e;i=i.parentNode;)o.unshift(i);for(;a[n]===o[n];)n++;return n?dt(a[n],o[n]):a[n]===T?-1:o[n]===T?1:0},p):p},rt.matches=function(t,e){return rt(t,null,null,e)},rt.matchesSelector=function(t,e){if((t.ownerDocument||t)!==p&&u(t),e=e.replace(U,"='$1']"),i.matchesSelector&&f&&!S[e+" "]&&(!m||!m.test(e))&&(!g||!g.test(e)))try{var n=E.call(t,e);if(n||i.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(t){}return rt(e,p,null,[t]).length>0},rt.contains=function(t,e){return(t.ownerDocument||t)!==p&&u(t),v(t,e)},rt.attr=function(t,e){(t.ownerDocument||t)!==p&&u(t);var s=n.attrHandle[e.toLowerCase()],r=s&&O.call(n.attrHandle,e.toLowerCase())?s(t,e,!f):void 0;return void 0!==r?r:i.attributes||!f?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},rt.escape=function(t){return(t+"").replace(et,it)},rt.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},rt.uniqueSort=function(t){var e,n=[],s=0,r=0;if(h=!i.detectDuplicates,d=!i.sortStable&&t.slice(0),t.sort(L),h){for(;e=t[r++];)e===t[r]&&(s=n.push(r));for(;s--;)t.splice(n[s],1)}return d=null,t},s=rt.getText=function(t){var e,i="",n=0,r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=s(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[n++];)i+=s(e);return i},(n=rt.selectors={cacheLength:50,createPseudo:ot,match:z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(Q,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(Q,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||rt.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&rt.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return z.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&K.test(i)&&(e=a(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(Q,tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=I[t+" "];return e||(e=new RegExp("(^|"+F+")"+t+"("+F+"|$)"))&&I(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,i){return function(n){var s=rt.attr(n,t);return null==s?"!="===e:!e||(s+="","="===e?s===i:"!="===e?s!==i:"^="===e?i&&0===s.indexOf(i):"*="===e?i&&s.indexOf(i)>-1:"$="===e?i&&s.slice(-i.length)===i:"~="===e?(" "+s.replace(V," ")+" ").indexOf(i)>-1:"|="===e&&(s===i||s.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,s){var r="nth"!==t.slice(0,3),a="last"!==t.slice(-4),o="of-type"===e;return 1===n&&0===s?function(t){return!!t.parentNode}:function(e,i,l){var c,d,h,u,p,_,f=r!==a?"nextSibling":"previousSibling",g=e.parentNode,m=o&&e.nodeName.toLowerCase(),E=!l&&!o,v=!1;if(g){if(r){for(;f;){for(u=e;u=u[f];)if(o?u.nodeName.toLowerCase()===m:1===u.nodeType)return!1;_=f="only"===t&&!_&&"nextSibling"}return!0}if(_=[a?g.firstChild:g.lastChild],a&&E){for(v=(p=(c=(d=(h=(u=g)[C]||(u[C]={}))[u.uniqueID]||(h[u.uniqueID]={}))[t]||[])[0]===y&&c[1])&&c[2],u=p&&g.childNodes[p];u=++p&&u&&u[f]||(v=p=0)||_.pop();)if(1===u.nodeType&&++v&&u===e){d[t]=[y,p,v];break}}else if(E&&(v=p=(c=(d=(h=(u=e)[C]||(u[C]={}))[u.uniqueID]||(h[u.uniqueID]={}))[t]||[])[0]===y&&c[1]),!1===v)for(;(u=++p&&u&&u[f]||(v=p=0)||_.pop())&&((o?u.nodeName.toLowerCase()!==m:1!==u.nodeType)||!++v||(E&&((d=(h=u[C]||(u[C]={}))[u.uniqueID]||(h[u.uniqueID]={}))[t]=[y,v]),u!==e)););return(v-=s)===n||v%n==0&&v/n>=0}}},PSEUDO:function(t,e){var i,s=n.pseudos[t]||n.setFilters[t.toLowerCase()]||rt.error("unsupported pseudo: "+t);return s[C]?s(e):s.length>1?(i=[t,t,"",e],n.setFilters.hasOwnProperty(t.toLowerCase())?ot(function(t,i){for(var n,r=s(t,e),a=r.length;a--;)t[n=H(t,r[a])]=!(i[n]=r[a])}):function(t){return s(t,0,i)}):s}},pseudos:{not:ot(function(t){var e=[],i=[],n=o(t.replace(j,"$1"));return n[C]?ot(function(t,e,i,s){for(var r,a=n(t,null,s,[]),o=t.length;o--;)(r=a[o])&&(t[o]=!(e[o]=r))}):function(t,s,r){return e[0]=t,n(e,null,r,i),e[0]=null,!i.pop()}}),has:ot(function(t){return function(e){return rt(t,e).length>0}}),contains:ot(function(t){return t=t.replace(Q,tt),function(e){return(e.textContent||e.innerText||s(e)).indexOf(t)>-1}}),lang:ot(function(t){return G.test(t||"")||rt.error("unsupported lang: "+t),t=t.replace(Q,tt).toLowerCase(),function(e){var i;do{if(i=f?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===_},focus:function(t){return t===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:pt(!1),disabled:pt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!n.pseudos.empty(t)},header:function(t){return $.test(t.nodeName)},input:function(t){return X.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:_t(function(){return[0]}),last:_t(function(t,e){return[e-1]}),eq:_t(function(t,e,i){return[i<0?i+e:i]}),even:_t(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:_t(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:_t(function(t,e,i){for(var n=i<0?i+e:i;--n>=0;)t.push(n);return t}),gt:_t(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[e]=ht(e);for(e in{submit:!0,reset:!0})n.pseudos[e]=ut(e);function gt(){}function mt(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function Et(t,e,i){var n=e.dir,s=e.next,r=s||n,a=i&&"parentNode"===r,o=A++;return e.first?function(e,i,s){for(;e=e[n];)if(1===e.nodeType||a)return t(e,i,s);return!1}:function(e,i,l){var c,d,h,u=[y,o];if(l){for(;e=e[n];)if((1===e.nodeType||a)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||a)if(d=(h=e[C]||(e[C]={}))[e.uniqueID]||(h[e.uniqueID]={}),s&&s===e.nodeName.toLowerCase())e=e[n]||e;else{if((c=d[r])&&c[0]===y&&c[1]===o)return u[2]=c[2];if(d[r]=u,u[2]=t(e,i,l))return!0}return!1}}function vt(t){return t.length>1?function(e,i,n){for(var s=t.length;s--;)if(!t[s](e,i,n))return!1;return!0}:t[0]}function Ct(t,e,i,n,s){for(var r,a=[],o=0,l=t.length,c=null!=e;o<l;o++)(r=t[o])&&(i&&!i(r,n,s)||(a.push(r),c&&e.push(o)));return a}function Tt(t,e,i,n,s,r){return n&&!n[C]&&(n=Tt(n)),s&&!s[C]&&(s=Tt(s,r)),ot(function(r,a,o,l){var c,d,h,u=[],p=[],_=a.length,f=r||function(t,e,i){for(var n=0,s=e.length;n<s;n++)rt(t,e[n],i);return i}(e||"*",o.nodeType?[o]:o,[]),g=!t||!r&&e?f:Ct(f,u,t,o,l),m=i?s||(r?t:_||n)?[]:a:g;if(i&&i(g,m,o,l),n)for(c=Ct(m,p),n(c,[],o,l),d=c.length;d--;)(h=c[d])&&(m[p[d]]=!(g[p[d]]=h));if(r){if(s||t){if(s){for(c=[],d=m.length;d--;)(h=m[d])&&c.push(g[d]=h);s(null,m=[],c,l)}for(d=m.length;d--;)(h=m[d])&&(c=s?H(r,h):u[d])>-1&&(r[c]=!(a[c]=h))}}else m=Ct(m===a?m.splice(_,m.length):m),s?s(null,a,m,l):N.apply(a,m)})}function yt(t){for(var e,i,s,r=t.length,a=n.relative[t[0].type],o=a||n.relative[" "],l=a?1:0,d=Et(function(t){return t===e},o,!0),h=Et(function(t){return H(e,t)>-1},o,!0),u=[function(t,i,n){var s=!a&&(n||i!==c)||((e=i).nodeType?d(t,i,n):h(t,i,n));return e=null,s}];l<r;l++)if(i=n.relative[t[l].type])u=[Et(vt(u),i)];else{if((i=n.filter[t[l].type].apply(null,t[l].matches))[C]){for(s=++l;s<r&&!n.relative[t[s].type];s++);return Tt(l>1&&vt(u),l>1&&mt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(j,"$1"),i,l<s&&yt(t.slice(l,s)),s<r&&yt(t=t.slice(s)),s<r&&mt(t))}u.push(i)}return vt(u)}function At(t,e){var i=e.length>0,s=t.length>0,r=function(r,a,o,l,d){var h,_,g,m=0,E="0",v=r&&[],C=[],T=c,A=r||s&&n.find.TAG("*",d),I=y+=null==T?1:Math.random()||.1,b=A.length;for(d&&(c=a===p||a||d);E!==b&&null!=(h=A[E]);E++){if(s&&h){for(_=0,a||h.ownerDocument===p||(u(h),o=!f);g=t[_++];)if(g(h,a||p,o)){l.push(h);break}d&&(y=I)}i&&((h=!g&&h)&&m--,r&&v.push(h))}if(m+=E,i&&E!==m){for(_=0;g=e[_++];)g(v,C,a,o);if(r){if(m>0)for(;E--;)v[E]||C[E]||(C[E]=R.call(l));C=Ct(C)}N.apply(l,C),d&&!r&&C.length>0&&m+e.length>1&&rt.uniqueSort(l)}return d&&(y=I,c=T),v};return i?ot(r):r}return gt.prototype=n.filters=n.pseudos,n.setFilters=new gt,a=rt.tokenize=function(t,e){var i,s,r,a,o,l,c,d=b[t+" "];if(d)return e?0:d.slice(0);for(o=t,l=[],c=n.preFilter;o;){for(a in i&&!(s=q.exec(o))||(s&&(o=o.slice(s[0].length)||o),l.push(r=[])),i=!1,(s=W.exec(o))&&(i=s.shift(),r.push({value:i,type:s[0].replace(j," ")}),o=o.slice(i.length)),n.filter)!(s=z[a].exec(o))||c[a]&&!(s=c[a](s))||(i=s.shift(),r.push({value:i,type:a,matches:s}),o=o.slice(i.length));if(!i)break}return e?o.length:o?rt.error(t):b(t,l).slice(0)},o=rt.compile=function(t,e){var i,n=[],s=[],r=S[t+" "];if(!r){for(e||(e=a(t)),i=e.length;i--;)(r=yt(e[i]))[C]?n.push(r):s.push(r);(r=S(t,At(s,n))).selector=t}return r},l=rt.select=function(t,e,i,s){var r,l,c,d,h,u="function"==typeof t&&t,p=!s&&a(t=u.selector||t);if(i=i||[],1===p.length){if((l=p[0]=p[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===e.nodeType&&f&&n.relative[l[1].type]){if(!(e=(n.find.ID(c.matches[0].replace(Q,tt),e)||[])[0]))return i;u&&(e=e.parentNode),t=t.slice(l.shift().value.length)}for(r=z.needsContext.test(t)?0:l.length;r--&&(c=l[r],!n.relative[d=c.type]);)if((h=n.find[d])&&(s=h(c.matches[0].replace(Q,tt),J.test(l[0].type)&&ft(e.parentNode)||e))){if(l.splice(r,1),!(t=s.length&&mt(l)))return N.apply(i,s),i;break}}return(u||o(t,p))(s,e,!f,i,!e||J.test(t)&&ft(e.parentNode)||e),i},i.sortStable=C.split("").sort(L).join("")===C,i.detectDuplicates=!!h,u(),i.sortDetached=lt(function(t){return 1&t.compareDocumentPosition(p.createElement("fieldset"))}),lt(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ct("type|href|height|width",function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),i.attributes&&lt(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ct("value",function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),lt(function(t){return null==t.getAttribute("disabled")})||ct(k,function(t,e,i){var n;if(!i)return!0===t[e]?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null}),rt}(s);I.find=L,I.expr=L.selectors,I.expr[":"]=I.expr.pseudos,I.uniqueSort=I.unique=L.uniqueSort,I.text=L.getText,I.isXMLDoc=L.isXML,I.contains=L.contains,I.escapeSelector=L.escape;var O=function(t,e,i){for(var n=[],s=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(s&&I(t).is(i))break;n.push(t)}return n},x=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},R=I.expr.match.needsContext;function w(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(t,e,i){return v(e)?I.grep(t,function(t,n){return!!e.call(t,n,t)!==i}):e.nodeType?I.grep(t,function(t){return t===e!==i}):"string"!=typeof e?I.grep(t,function(t){return u.call(e,t)>-1!==i}):I.filter(e,t,i)}I.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?I.find.matchesSelector(n,t)?[n]:[]:I.find.matches(t,I.grep(e,function(t){return 1===t.nodeType}))},I.fn.extend({find:function(t){var e,i,n=this.length,s=this;if("string"!=typeof t)return this.pushStack(I(t).filter(function(){for(e=0;e<n;e++)if(I.contains(s[e],this))return!0}));for(i=this.pushStack([]),e=0;e<n;e++)I.find(t,s[e],i);return n>1?I.uniqueSort(i):i},filter:function(t){return this.pushStack(D(this,t||[],!1))},not:function(t){return this.pushStack(D(this,t||[],!0))},is:function(t){return!!D(this,"string"==typeof t&&R.test(t)?I(t):t||[],!1).length}});var H,k=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(I.fn.init=function(t,e,i){var n,s;if(!t)return this;if(i=i||H,"string"==typeof t){if(!(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:k.exec(t))||!n[1]&&e)return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof I?e[0]:e,I.merge(this,I.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:o,!0)),N.test(n[1])&&I.isPlainObject(e))for(n in e)v(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return(s=o.getElementById(n[2]))&&(this[0]=s,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):v(t)?void 0!==i.ready?i.ready(t):t(I):I.makeArray(t,this)}).prototype=I.fn,H=I(o);var F=/^(?:parents|prev(?:Until|All))/,M={children:!0,contents:!0,next:!0,prev:!0};function P(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}I.fn.extend({has:function(t){var e=I(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(I.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,s=this.length,r=[],a="string"!=typeof t&&I(t);if(!R.test(t))for(;n<s;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(a?a.index(i)>-1:1===i.nodeType&&I.find.matchesSelector(i,t))){r.push(i);break}return this.pushStack(r.length>1?I.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?u.call(I(t),this[0]):u.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(I.uniqueSort(I.merge(this.get(),I(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),I.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return O(t,"parentNode")},parentsUntil:function(t,e,i){return O(t,"parentNode",i)},next:function(t){return P(t,"nextSibling")},prev:function(t){return P(t,"previousSibling")},nextAll:function(t){return O(t,"nextSibling")},prevAll:function(t){return O(t,"previousSibling")},nextUntil:function(t,e,i){return O(t,"nextSibling",i)},prevUntil:function(t,e,i){return O(t,"previousSibling",i)},siblings:function(t){return x((t.parentNode||{}).firstChild,t)},children:function(t){return x(t.firstChild)},contents:function(t){return w(t,"iframe")?t.contentDocument:(w(t,"template")&&(t=t.content||t),I.merge([],t.childNodes))}},function(t,e){I.fn[t]=function(i,n){var s=I.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(s=I.filter(n,s)),this.length>1&&(M[t]||I.uniqueSort(s),F.test(t)&&s.reverse()),this.pushStack(s)}});var B=/[^\x20\t\r\n\f]+/g;function V(t){return t}function j(t){throw t}function q(t,e,i,n){var s;try{t&&v(s=t.promise)?s.call(t).done(e).fail(i):t&&v(s=t.then)?s.call(t,e,i):e.apply(void 0,[t].slice(n))}catch(t){i.apply(void 0,[t])}}I.Callbacks=function(t){t="string"==typeof t?function(t){var e={};return I.each(t.match(B)||[],function(t,i){e[i]=!0}),e}(t):I.extend({},t);var e,i,n,s,r=[],a=[],o=-1,l=function(){for(s=s||t.once,n=e=!0;a.length;o=-1)for(i=a.shift();++o<r.length;)!1===r[o].apply(i[0],i[1])&&t.stopOnFalse&&(o=r.length,i=!1);t.memory||(i=!1),e=!1,s&&(r=i?[]:"")},c={add:function(){return r&&(i&&!e&&(o=r.length-1,a.push(i)),function e(i){I.each(i,function(i,n){v(n)?t.unique&&c.has(n)||r.push(n):n&&n.length&&"string"!==A(n)&&e(n)})}(arguments),i&&!e&&l()),this},remove:function(){return I.each(arguments,function(t,e){for(var i;(i=I.inArray(e,r,i))>-1;)r.splice(i,1),i<=o&&o--}),this},has:function(t){return t?I.inArray(t,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return s=a=[],r=i="",this},disabled:function(){return!r},lock:function(){return s=a=[],i||e||(r=i=""),this},locked:function(){return!!s},fireWith:function(t,i){return s||(i=[t,(i=i||[]).slice?i.slice():i],a.push(i),e||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},I.extend({Deferred:function(t){var e=[["notify","progress",I.Callbacks("memory"),I.Callbacks("memory"),2],["resolve","done",I.Callbacks("once memory"),I.Callbacks("once memory"),0,"resolved"],["reject","fail",I.Callbacks("once memory"),I.Callbacks("once memory"),1,"rejected"]],i="pending",n={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(t){return n.then(null,t)},pipe:function(){var t=arguments;return I.Deferred(function(i){I.each(e,function(e,n){var s=v(t[n[4]])&&t[n[4]];r[n[1]](function(){var t=s&&s.apply(this,arguments);t&&v(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[n[0]+"With"](this,s?[t]:arguments)})}),t=null}).promise()},then:function(t,i,n){var r=0;function a(t,e,i,n){return function(){var o=this,l=arguments,c=function(){var s,c;if(!(t<r)){if((s=i.apply(o,l))===e.promise())throw new TypeError("Thenable self-resolution");c=s&&("object"==typeof s||"function"==typeof s)&&s.then,v(c)?n?c.call(s,a(r,e,V,n),a(r,e,j,n)):(r++,c.call(s,a(r,e,V,n),a(r,e,j,n),a(r,e,V,e.notifyWith))):(i!==V&&(o=void 0,l=[s]),(n||e.resolveWith)(o,l))}},d=n?c:function(){try{c()}catch(n){I.Deferred.exceptionHook&&I.Deferred.exceptionHook(n,d.stackTrace),t+1>=r&&(i!==j&&(o=void 0,l=[n]),e.rejectWith(o,l))}};t?d():(I.Deferred.getStackHook&&(d.stackTrace=I.Deferred.getStackHook()),s.setTimeout(d))}}return I.Deferred(function(s){e[0][3].add(a(0,s,v(n)?n:V,s.notifyWith)),e[1][3].add(a(0,s,v(t)?t:V)),e[2][3].add(a(0,s,v(i)?i:j))}).promise()},promise:function(t){return null!=t?I.extend(t,n):n}},r={};return I.each(e,function(t,s){var a=s[2],o=s[5];n[s[1]]=a.add,o&&a.add(function(){i=o},e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),a.add(s[3].fire),r[s[0]]=function(){return r[s[0]+"With"](this===r?void 0:this,arguments),this},r[s[0]+"With"]=a.fireWith}),n.promise(r),t&&t.call(r,r),r},when:function(t){var e=arguments.length,i=e,n=Array(i),s=c.call(arguments),r=I.Deferred(),a=function(t){return function(i){n[t]=this,s[t]=arguments.length>1?c.call(arguments):i,--e||r.resolveWith(n,s)}};if(e<=1&&(q(t,r.done(a(i)).resolve,r.reject,!e),"pending"===r.state()||v(s[i]&&s[i].then)))return r.then();for(;i--;)q(s[i],a(i),r.reject);return r.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;I.Deferred.exceptionHook=function(t,e){s.console&&s.console.warn&&t&&W.test(t.name)&&s.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},I.readyException=function(t){s.setTimeout(function(){throw t})};var U=I.Deferred();function K(){o.removeEventListener("DOMContentLoaded",K),s.removeEventListener("load",K),I.ready()}I.fn.ready=function(t){return U.then(t).catch(function(t){I.readyException(t)}),this},I.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--I.readyWait:I.isReady)||(I.isReady=!0,!0!==t&&--I.readyWait>0||U.resolveWith(o,[I]))}}),I.ready.then=U.then,"complete"===o.readyState||"loading"!==o.readyState&&!o.documentElement.doScroll?s.setTimeout(I.ready):(o.addEventListener("DOMContentLoaded",K),s.addEventListener("load",K));var G=function(t,e,i,n,s,r,a){var o=0,l=t.length,c=null==i;if("object"===A(i))for(o in s=!0,i)G(t,e,o,i[o],!0,r,a);else if(void 0!==n&&(s=!0,v(n)||(a=!0),c&&(a?(e.call(t,n),e=null):(c=e,e=function(t,e,i){return c.call(I(t),i)})),e))for(;o<l;o++)e(t[o],i,a?n:n.call(t[o],o,e(t[o],i)));return s?t:c?e.call(t):l?e(t[0],i):r},z=/^-ms-/,X=/-([a-z])/g;function $(t,e){return e.toUpperCase()}function Y(t){return t.replace(z,"ms-").replace(X,$)}var Z=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function J(){this.expando=I.expando+J.uid++}J.uid=1,J.prototype={cache:function(t){var e=t[this.expando];return e||(e={},Z(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,s=this.cache(t);if("string"==typeof e)s[Y(e)]=i;else for(n in e)s[Y(n)]=e[n];return s},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][Y(e)]},access:function(t,e,i){return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e){i=(e=Array.isArray(e)?e.map(Y):(e=Y(e))in n?[e]:e.match(B)||[]).length;for(;i--;)delete n[e[i]]}(void 0===e||I.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!I.isEmptyObject(e)}};var Q=new J,tt=new J,et=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,it=/[A-Z]/g;function nt(t,e,i){var n;if(void 0===i&&1===t.nodeType)if(n="data-"+e.replace(it,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{i=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:et.test(t)?JSON.parse(t):t)}(i)}catch(t){}tt.set(t,e,i)}else i=void 0;return i}I.extend({hasData:function(t){return tt.hasData(t)||Q.hasData(t)},data:function(t,e,i){return tt.access(t,e,i)},removeData:function(t,e){tt.remove(t,e)},_data:function(t,e,i){return Q.access(t,e,i)},_removeData:function(t,e){Q.remove(t,e)}}),I.fn.extend({data:function(t,e){var i,n,s,r=this[0],a=r&&r.attributes;if(void 0===t){if(this.length&&(s=tt.get(r),1===r.nodeType&&!Q.get(r,"hasDataAttrs"))){for(i=a.length;i--;)a[i]&&0===(n=a[i].name).indexOf("data-")&&(n=Y(n.slice(5)),nt(r,n,s[n]));Q.set(r,"hasDataAttrs",!0)}return s}return"object"==typeof t?this.each(function(){tt.set(this,t)}):G(this,function(e){var i;if(r&&void 0===e){if(void 0!==(i=tt.get(r,t)))return i;if(void 0!==(i=nt(r,t)))return i}else this.each(function(){tt.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){tt.remove(this,t)})}}),I.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=Q.get(t,e),i&&(!n||Array.isArray(i)?n=Q.access(t,e,I.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=I.queue(t,e),n=i.length,s=i.shift(),r=I._queueHooks(t,e);"inprogress"===s&&(s=i.shift(),n--),s&&("fx"===e&&i.unshift("inprogress"),delete r.stop,s.call(t,function(){I.dequeue(t,e)},r)),!n&&r&&r.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return Q.get(t,i)||Q.access(t,i,{empty:I.Callbacks("once memory").add(function(){Q.remove(t,[e+"queue",i])})})}}),I.fn.extend({queue:function(t,e){var i=2;return"string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i?I.queue(this[0],t):void 0===e?this:this.each(function(){var i=I.queue(this,t,e);I._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&I.dequeue(this,t)})},dequeue:function(t){return this.each(function(){I.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,n=1,s=I.Deferred(),r=this,a=this.length,o=function(){--n||s.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(i=Q.get(r[a],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(o));return o(),s.promise(e)}});var st=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,rt=new RegExp("^(?:([+-])=|)("+st+")([a-z%]*)$","i"),at=["Top","Right","Bottom","Left"],ot=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&I.contains(t.ownerDocument,t)&&"none"===I.css(t,"display")},lt=function(t,e,i,n){var s,r,a={};for(r in e)a[r]=t.style[r],t.style[r]=e[r];for(r in s=i.apply(t,n||[]),e)t.style[r]=a[r];return s};function ct(t,e,i,n){var s,r,a=20,o=n?function(){return n.cur()}:function(){return I.css(t,e,"")},l=o(),c=i&&i[3]||(I.cssNumber[e]?"":"px"),d=(I.cssNumber[e]||"px"!==c&&+l)&&rt.exec(I.css(t,e));if(d&&d[3]!==c){for(l/=2,c=c||d[3],d=+l||1;a--;)I.style(t,e,d+c),(1-r)*(1-(r=o()/l||.5))<=0&&(a=0),d/=r;d*=2,I.style(t,e,d+c),i=i||[]}return i&&(d=+d||+l||0,s=i[1]?d+(i[1]+1)*i[2]:+i[2],n&&(n.unit=c,n.start=d,n.end=s)),s}var dt={};function ht(t){var e,i=t.ownerDocument,n=t.nodeName,s=dt[n];return s||(e=i.body.appendChild(i.createElement(n)),s=I.css(e,"display"),e.parentNode.removeChild(e),"none"===s&&(s="block"),dt[n]=s,s)}function ut(t,e){for(var i,n,s=[],r=0,a=t.length;r<a;r++)(n=t[r]).style&&(i=n.style.display,e?("none"===i&&(s[r]=Q.get(n,"display")||null,s[r]||(n.style.display="")),""===n.style.display&&ot(n)&&(s[r]=ht(n))):"none"!==i&&(s[r]="none",Q.set(n,"display",i)));for(r=0;r<a;r++)null!=s[r]&&(t[r].style.display=s[r]);return t}I.fn.extend({show:function(){return ut(this,!0)},hide:function(){return ut(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){ot(this)?I(this).show():I(this).hide()})}});var pt=/^(?:checkbox|radio)$/i,_t=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ft=/^$|^module$|\/(?:java|ecma)script/i,gt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function mt(t,e){var i;return i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&w(t,e)?I.merge([t],i):i}function Et(t,e){for(var i=0,n=t.length;i<n;i++)Q.set(t[i],"globalEval",!e||Q.get(e[i],"globalEval"))}gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;var vt=/<|&#?\w+;/;function Ct(t,e,i,n,s){for(var r,a,o,l,c,d,h=e.createDocumentFragment(),u=[],p=0,_=t.length;p<_;p++)if((r=t[p])||0===r)if("object"===A(r))I.merge(u,r.nodeType?[r]:r);else if(vt.test(r)){for(a=a||h.appendChild(e.createElement("div")),o=(_t.exec(r)||["",""])[1].toLowerCase(),l=gt[o]||gt._default,a.innerHTML=l[1]+I.htmlPrefilter(r)+l[2],d=l[0];d--;)a=a.lastChild;I.merge(u,a.childNodes),(a=h.firstChild).textContent=""}else u.push(e.createTextNode(r));for(h.textContent="",p=0;r=u[p++];)if(n&&I.inArray(r,n)>-1)s&&s.push(r);else if(c=I.contains(r.ownerDocument,r),a=mt(h.appendChild(r),"script"),c&&Et(a),i)for(d=0;r=a[d++];)ft.test(r.type||"")&&i.push(r);return h}!function(){var t=o.createDocumentFragment().appendChild(o.createElement("div")),e=o.createElement("input");e.setAttribute("type","radio"),e.setAttribute("checked","checked"),e.setAttribute("name","t"),t.appendChild(e),E.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Tt=o.documentElement,yt=/^key/,At=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,It=/^([^.]*)(?:\.(.+)|)/;function bt(){return!0}function St(){return!1}function Lt(){try{return o.activeElement}catch(t){}}function Ot(t,e,i,n,s,r){var a,o;if("object"==typeof e){for(o in"string"!=typeof i&&(n=n||i,i=void 0),e)Ot(t,o,i,n,e[o],r);return t}if(null==n&&null==s?(s=i,n=i=void 0):null==s&&("string"==typeof i?(s=n,n=void 0):(s=n,n=i,i=void 0)),!1===s)s=St;else if(!s)return t;return 1===r&&(a=s,(s=function(t){return I().off(t),a.apply(this,arguments)}).guid=a.guid||(a.guid=I.guid++)),t.each(function(){I.event.add(this,e,s,n,i)})}I.event={global:{},add:function(t,e,i,n,s){var r,a,o,l,c,d,h,u,p,_,f,g=Q.get(t);if(g)for(i.handler&&(i=(r=i).handler,s=r.selector),s&&I.find.matchesSelector(Tt,s),i.guid||(i.guid=I.guid++),(l=g.events)||(l=g.events={}),(a=g.handle)||(a=g.handle=function(e){return void 0!==I&&I.event.triggered!==e.type?I.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(B)||[""]).length;c--;)p=f=(o=It.exec(e[c])||[])[1],_=(o[2]||"").split(".").sort(),p&&(h=I.event.special[p]||{},p=(s?h.delegateType:h.bindType)||p,h=I.event.special[p]||{},d=I.extend({type:p,origType:f,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&I.expr.match.needsContext.test(s),namespace:_.join(".")},r),(u=l[p])||((u=l[p]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(t,n,_,a)||t.addEventListener&&t.addEventListener(p,a)),h.add&&(h.add.call(t,d),d.handler.guid||(d.handler.guid=i.guid)),s?u.splice(u.delegateCount++,0,d):u.push(d),I.event.global[p]=!0)},remove:function(t,e,i,n,s){var r,a,o,l,c,d,h,u,p,_,f,g=Q.hasData(t)&&Q.get(t);if(g&&(l=g.events)){for(c=(e=(e||"").match(B)||[""]).length;c--;)if(p=f=(o=It.exec(e[c])||[])[1],_=(o[2]||"").split(".").sort(),p){for(h=I.event.special[p]||{},u=l[p=(n?h.delegateType:h.bindType)||p]||[],o=o[2]&&new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=r=u.length;r--;)d=u[r],!s&&f!==d.origType||i&&i.guid!==d.guid||o&&!o.test(d.namespace)||n&&n!==d.selector&&("**"!==n||!d.selector)||(u.splice(r,1),d.selector&&u.delegateCount--,h.remove&&h.remove.call(t,d));a&&!u.length&&(h.teardown&&!1!==h.teardown.call(t,_,g.handle)||I.removeEvent(t,p,g.handle),delete l[p])}else for(p in l)I.event.remove(t,p+e[c],i,n,!0);I.isEmptyObject(l)&&Q.remove(t,"handle events")}},dispatch:function(t){var e,i,n,s,r,a,o=I.event.fix(t),l=new Array(arguments.length),c=(Q.get(this,"events")||{})[o.type]||[],d=I.event.special[o.type]||{};for(l[0]=o,e=1;e<arguments.length;e++)l[e]=arguments[e];if(o.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,o)){for(a=I.event.handlers.call(this,o,c),e=0;(s=a[e++])&&!o.isPropagationStopped();)for(o.currentTarget=s.elem,i=0;(r=s.handlers[i++])&&!o.isImmediatePropagationStopped();)o.rnamespace&&!o.rnamespace.test(r.namespace)||(o.handleObj=r,o.data=r.data,void 0!==(n=((I.event.special[r.origType]||{}).handle||r.handler).apply(s.elem,l))&&!1===(o.result=n)&&(o.preventDefault(),o.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,o),o.result}},handlers:function(t,e){var i,n,s,r,a,o=[],l=e.delegateCount,c=t.target;if(l&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(r=[],a={},i=0;i<l;i++)void 0===a[s=(n=e[i]).selector+" "]&&(a[s]=n.needsContext?I(s,this).index(c)>-1:I.find(s,this,null,[c]).length),a[s]&&r.push(n);r.length&&o.push({elem:c,handlers:r})}return c=this,l<e.length&&o.push({elem:c,handlers:e.slice(l)}),o},addProp:function(t,e){Object.defineProperty(I.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[I.expando]?t:new I.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Lt()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Lt()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&w(this,"input"))return this.click(),!1},_default:function(t){return w(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},I.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i)},I.Event=function(t,e){if(!(this instanceof I.Event))return new I.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?bt:St,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&I.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[I.expando]=!0},I.Event.prototype={constructor:I.Event,isDefaultPrevented:St,isPropagationStopped:St,isImmediatePropagationStopped:St,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=bt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=bt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=bt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},I.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&yt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&At.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},I.event.addProp),I.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){I.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=t.relatedTarget,s=t.handleObj;return n&&(n===this||I.contains(this,n))||(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=e),i}}}),I.fn.extend({on:function(t,e,i,n){return Ot(this,t,e,i,n)},one:function(t,e,i,n){return Ot(this,t,e,i,n,1)},off:function(t,e,i){var n,s;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,I(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof t){for(s in t)this.off(s,e,t[s]);return this}return!1!==e&&"function"!=typeof e||(i=e,e=void 0),!1===i&&(i=St),this.each(function(){I.event.remove(this,t,i,e)})}});var xt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Rt=/<script|<style|<link/i,wt=/checked\s*(?:[^=]|=\s*.checked.)/i,Nt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Dt(t,e){return w(t,"table")&&w(11!==e.nodeType?e:e.firstChild,"tr")&&I(t).children("tbody")[0]||t}function Ht(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function kt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Ft(t,e){var i,n,s,r,a,o,l,c;if(1===e.nodeType){if(Q.hasData(t)&&(r=Q.access(t),a=Q.set(e,r),c=r.events))for(s in delete a.handle,a.events={},c)for(i=0,n=c[s].length;i<n;i++)I.event.add(e,s,c[s][i]);tt.hasData(t)&&(o=tt.access(t),l=I.extend({},o),tt.set(e,l))}}function Mt(t,e){var i=e.nodeName.toLowerCase();"input"===i&&pt.test(t.type)?e.checked=t.checked:"input"!==i&&"textarea"!==i||(e.defaultValue=t.defaultValue)}function Pt(t,e,i,n){e=d.apply([],e);var s,r,a,o,l,c,h=0,u=t.length,p=u-1,_=e[0],f=v(_);if(f||u>1&&"string"==typeof _&&!E.checkClone&&wt.test(_))return t.each(function(s){var r=t.eq(s);f&&(e[0]=_.call(this,s,r.html())),Pt(r,e,i,n)});if(u&&(r=(s=Ct(e,t[0].ownerDocument,!1,t,n)).firstChild,1===s.childNodes.length&&(s=r),r||n)){for(o=(a=I.map(mt(s,"script"),Ht)).length;h<u;h++)l=s,h!==p&&(l=I.clone(l,!0,!0),o&&I.merge(a,mt(l,"script"))),i.call(t[h],l,h);if(o)for(c=a[a.length-1].ownerDocument,I.map(a,kt),h=0;h<o;h++)l=a[h],ft.test(l.type||"")&&!Q.access(l,"globalEval")&&I.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?I._evalUrl&&I._evalUrl(l.src):y(l.textContent.replace(Nt,""),c,l))}return t}function Bt(t,e,i){for(var n,s=e?I.filter(e,t):t,r=0;null!=(n=s[r]);r++)i||1!==n.nodeType||I.cleanData(mt(n)),n.parentNode&&(i&&I.contains(n.ownerDocument,n)&&Et(mt(n,"script")),n.parentNode.removeChild(n));return t}I.extend({htmlPrefilter:function(t){return t.replace(xt,"<$1></$2>")},clone:function(t,e,i){var n,s,r,a,o=t.cloneNode(!0),l=I.contains(t.ownerDocument,t);if(!(E.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||I.isXMLDoc(t)))for(a=mt(o),n=0,s=(r=mt(t)).length;n<s;n++)Mt(r[n],a[n]);if(e)if(i)for(r=r||mt(t),a=a||mt(o),n=0,s=r.length;n<s;n++)Ft(r[n],a[n]);else Ft(t,o);return(a=mt(o,"script")).length>0&&Et(a,!l&&mt(t,"script")),o},cleanData:function(t){for(var e,i,n,s=I.event.special,r=0;void 0!==(i=t[r]);r++)if(Z(i)){if(e=i[Q.expando]){if(e.events)for(n in e.events)s[n]?I.event.remove(i,n):I.removeEvent(i,n,e.handle);i[Q.expando]=void 0}i[tt.expando]&&(i[tt.expando]=void 0)}}}),I.fn.extend({detach:function(t){return Bt(this,t,!0)},remove:function(t){return Bt(this,t)},text:function(t){return G(this,function(t){return void 0===t?I.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Pt(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Dt(this,t).appendChild(t)})},prepend:function(){return Pt(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Dt(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return Pt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Pt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(I.cleanData(mt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return I.clone(this,t,e)})},html:function(t){return G(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Rt.test(t)&&!gt[(_t.exec(t)||["",""])[1].toLowerCase()]){t=I.htmlPrefilter(t);try{for(;i<n;i++)1===(e=this[i]||{}).nodeType&&(I.cleanData(mt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return Pt(this,arguments,function(e){var i=this.parentNode;I.inArray(this,t)<0&&(I.cleanData(mt(this)),i&&i.replaceChild(e,this))},t)}}),I.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){I.fn[t]=function(t){for(var i,n=[],s=I(t),r=s.length-1,a=0;a<=r;a++)i=a===r?this:this.clone(!0),I(s[a])[e](i),h.apply(n,i.get());return this.pushStack(n)}});var Vt=new RegExp("^("+st+")(?!px)[a-z%]+$","i"),jt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=s),e.getComputedStyle(t)},qt=new RegExp(at.join("|"),"i");function Wt(t,e,i){var n,s,r,a,o=t.style;return(i=i||jt(t))&&(""!==(a=i.getPropertyValue(e)||i[e])||I.contains(t.ownerDocument,t)||(a=I.style(t,e)),!E.pixelBoxStyles()&&Vt.test(a)&&qt.test(e)&&(n=o.width,s=o.minWidth,r=o.maxWidth,o.minWidth=o.maxWidth=o.width=a,a=i.width,o.width=n,o.minWidth=s,o.maxWidth=r)),void 0!==a?a+"":a}function Ut(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(d){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Tt.appendChild(c).appendChild(d);var t=s.getComputedStyle(d);i="1%"!==t.top,l=12===e(t.marginLeft),d.style.right="60%",a=36===e(t.right),n=36===e(t.width),d.style.position="absolute",r=36===d.offsetWidth||"absolute",Tt.removeChild(c),d=null}}function e(t){return Math.round(parseFloat(t))}var i,n,r,a,l,c=o.createElement("div"),d=o.createElement("div");d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle="content-box"===d.style.backgroundClip,I.extend(E,{boxSizingReliable:function(){return t(),n},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),r}}))}();var Kt=/^(none|table(?!-c[ea]).+)/,Gt=/^--/,zt={position:"absolute",visibility:"hidden",display:"block"},Xt={letterSpacing:"0",fontWeight:"400"},$t=["Webkit","Moz","ms"],Yt=o.createElement("div").style;function Zt(t){var e=I.cssProps[t];return e||(e=I.cssProps[t]=function(t){if(t in Yt)return t;for(var e=t[0].toUpperCase()+t.slice(1),i=$t.length;i--;)if((t=$t[i]+e)in Yt)return t}(t)||t),e}function Jt(t,e,i){var n=rt.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function Qt(t,e,i,n,s,r){var a="width"===e?1:0,o=0,l=0;if(i===(n?"border":"content"))return 0;for(;a<4;a+=2)"margin"===i&&(l+=I.css(t,i+at[a],!0,s)),n?("content"===i&&(l-=I.css(t,"padding"+at[a],!0,s)),"margin"!==i&&(l-=I.css(t,"border"+at[a]+"Width",!0,s))):(l+=I.css(t,"padding"+at[a],!0,s),"padding"!==i?l+=I.css(t,"border"+at[a]+"Width",!0,s):o+=I.css(t,"border"+at[a]+"Width",!0,s));return!n&&r>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-r-l-o-.5))),l}function te(t,e,i){var n=jt(t),s=Wt(t,e,n),r="border-box"===I.css(t,"boxSizing",!1,n),a=r;if(Vt.test(s)){if(!i)return s;s="auto"}return a=a&&(E.boxSizingReliable()||s===t.style[e]),("auto"===s||!parseFloat(s)&&"inline"===I.css(t,"display",!1,n))&&(s=t["offset"+e[0].toUpperCase()+e.slice(1)],a=!0),(s=parseFloat(s)||0)+Qt(t,e,i||(r?"border":"content"),a,n,s)+"px"}function ee(t,e,i,n,s){return new ee.prototype.init(t,e,i,n,s)}I.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=Wt(t,"opacity");return""===i?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var s,r,a,o=Y(e),l=Gt.test(e),c=t.style;if(l||(e=Zt(o)),a=I.cssHooks[e]||I.cssHooks[o],void 0===i)return a&&"get"in a&&void 0!==(s=a.get(t,!1,n))?s:c[e];"string"==(r=typeof i)&&(s=rt.exec(i))&&s[1]&&(i=ct(t,e,s),r="number"),null!=i&&i==i&&("number"===r&&(i+=s&&s[3]||(I.cssNumber[o]?"":"px")),E.clearCloneStyle||""!==i||0!==e.indexOf("background")||(c[e]="inherit"),a&&"set"in a&&void 0===(i=a.set(t,i,n))||(l?c.setProperty(e,i):c[e]=i))}},css:function(t,e,i,n){var s,r,a,o=Y(e);return Gt.test(e)||(e=Zt(o)),(a=I.cssHooks[e]||I.cssHooks[o])&&"get"in a&&(s=a.get(t,!0,i)),void 0===s&&(s=Wt(t,e,n)),"normal"===s&&e in Xt&&(s=Xt[e]),""===i||i?(r=parseFloat(s),!0===i||isFinite(r)?r||0:s):s}}),I.each(["height","width"],function(t,e){I.cssHooks[e]={get:function(t,i,n){if(i)return!Kt.test(I.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?te(t,e,n):lt(t,zt,function(){return te(t,e,n)})},set:function(t,i,n){var s,r=jt(t),a="border-box"===I.css(t,"boxSizing",!1,r),o=n&&Qt(t,e,n,a,r);return a&&E.scrollboxSize()===r.position&&(o-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(r[e])-Qt(t,e,"border",!1,r)-.5)),o&&(s=rt.exec(i))&&"px"!==(s[3]||"px")&&(t.style[e]=i,i=I.css(t,e)),Jt(0,i,o)}}}),I.cssHooks.marginLeft=Ut(E.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Wt(t,"marginLeft"))||t.getBoundingClientRect().left-lt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),I.each({margin:"",padding:"",border:"Width"},function(t,e){I.cssHooks[t+e]={expand:function(i){for(var n=0,s={},r="string"==typeof i?i.split(" "):[i];n<4;n++)s[t+at[n]+e]=r[n]||r[n-2]||r[0];return s}},"margin"!==t&&(I.cssHooks[t+e].set=Jt)}),I.fn.extend({css:function(t,e){return G(this,function(t,e,i){var n,s,r={},a=0;if(Array.isArray(e)){for(n=jt(t),s=e.length;a<s;a++)r[e[a]]=I.css(t,e[a],!1,n);return r}return void 0!==i?I.style(t,e,i):I.css(t,e)},t,e,arguments.length>1)}}),I.Tween=ee,ee.prototype={constructor:ee,init:function(t,e,i,n,s,r){this.elem=t,this.prop=i,this.easing=s||I.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=r||(I.cssNumber[i]?"":"px")},cur:function(){var t=ee.propHooks[this.prop];return t&&t.get?t.get(this):ee.propHooks._default.get(this)},run:function(t){var e,i=ee.propHooks[this.prop];return this.options.duration?this.pos=e=I.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):ee.propHooks._default.set(this),this}},ee.prototype.init.prototype=ee.prototype,ee.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=I.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){I.fx.step[t.prop]?I.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[I.cssProps[t.prop]]&&!I.cssHooks[t.prop]?t.elem[t.prop]=t.now:I.style(t.elem,t.prop,t.now+t.unit)}}},ee.propHooks.scrollTop=ee.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},I.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},I.fx=ee.prototype.init,I.fx.step={};var ie,ne,se=/^(?:toggle|show|hide)$/,re=/queueHooks$/;function ae(){ne&&(!1===o.hidden&&s.requestAnimationFrame?s.requestAnimationFrame(ae):s.setTimeout(ae,I.fx.interval),I.fx.tick())}function oe(){return s.setTimeout(function(){ie=void 0}),ie=Date.now()}function le(t,e){var i,n=0,s={height:t};for(e=e?1:0;n<4;n+=2-e)s["margin"+(i=at[n])]=s["padding"+i]=t;return e&&(s.opacity=s.width=t),s}function ce(t,e,i){for(var n,s=(de.tweeners[e]||[]).concat(de.tweeners["*"]),r=0,a=s.length;r<a;r++)if(n=s[r].call(i,e,t))return n}function de(t,e,i){var n,s,r=0,a=de.prefilters.length,o=I.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=ie||oe(),i=Math.max(0,c.startTime+c.duration-e),n=1-(i/c.duration||0),r=0,a=c.tweens.length;r<a;r++)c.tweens[r].run(n);return o.notifyWith(t,[c,n,i]),n<1&&a?i:(a||o.notifyWith(t,[c,1,0]),o.resolveWith(t,[c]),!1)},c=o.promise({elem:t,props:I.extend({},e),opts:I.extend(!0,{specialEasing:{},easing:I.easing._default},i),originalProperties:e,originalOptions:i,startTime:ie||oe(),duration:i.duration,tweens:[],createTween:function(e,i){var n=I.Tween(t,c.opts,e,i,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var i=0,n=e?c.tweens.length:0;if(s)return this;for(s=!0;i<n;i++)c.tweens[i].run(1);return e?(o.notifyWith(t,[c,1,0]),o.resolveWith(t,[c,e])):o.rejectWith(t,[c,e]),this}}),d=c.props;for(function(t,e){var i,n,s,r,a;for(i in t)if(s=e[n=Y(i)],r=t[i],Array.isArray(r)&&(s=r[1],r=t[i]=r[0]),i!==n&&(t[n]=r,delete t[i]),(a=I.cssHooks[n])&&"expand"in a)for(i in r=a.expand(r),delete t[n],r)i in t||(t[i]=r[i],e[i]=s);else e[n]=s}(d,c.opts.specialEasing);r<a;r++)if(n=de.prefilters[r].call(c,t,d,c.opts))return v(n.stop)&&(I._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return I.map(d,ce,c),v(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),I.fx.timer(I.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}I.Animation=I.extend(de,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return ct(i.elem,t,rt.exec(e),i),i}]},tweener:function(t,e){v(t)?(e=t,t=["*"]):t=t.match(B);for(var i,n=0,s=t.length;n<s;n++)i=t[n],de.tweeners[i]=de.tweeners[i]||[],de.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,s,r,a,o,l,c,d,h="width"in e||"height"in e,u=this,p={},_=t.style,f=t.nodeType&&ot(t),g=Q.get(t,"fxshow");for(n in i.queue||(null==(a=I._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,o=a.empty.fire,a.empty.fire=function(){a.unqueued||o()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,I.queue(t,"fx").length||a.empty.fire()})})),e)if(s=e[n],se.test(s)){if(delete e[n],r=r||"toggle"===s,s===(f?"hide":"show")){if("show"!==s||!g||void 0===g[n])continue;f=!0}p[n]=g&&g[n]||I.style(t,n)}if((l=!I.isEmptyObject(e))||!I.isEmptyObject(p))for(n in h&&1===t.nodeType&&(i.overflow=[_.overflow,_.overflowX,_.overflowY],null==(c=g&&g.display)&&(c=Q.get(t,"display")),"none"===(d=I.css(t,"display"))&&(c?d=c:(ut([t],!0),c=t.style.display||c,d=I.css(t,"display"),ut([t]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===I.css(t,"float")&&(l||(u.done(function(){_.display=c}),null==c&&(d=_.display,c="none"===d?"":d)),_.display="inline-block")),i.overflow&&(_.overflow="hidden",u.always(function(){_.overflow=i.overflow[0],_.overflowX=i.overflow[1],_.overflowY=i.overflow[2]})),l=!1,p)l||(g?"hidden"in g&&(f=g.hidden):g=Q.access(t,"fxshow",{display:c}),r&&(g.hidden=!f),f&&ut([t],!0),u.done(function(){for(n in f||ut([t]),Q.remove(t,"fxshow"),p)I.style(t,n,p[n])})),l=ce(f?g[n]:0,n,u),n in g||(g[n]=l.start,f&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?de.prefilters.unshift(t):de.prefilters.push(t)}}),I.speed=function(t,e,i){var n=t&&"object"==typeof t?I.extend({},t):{complete:i||!i&&e||v(t)&&t,duration:t,easing:i&&e||e&&!v(e)&&e};return I.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in I.fx.speeds?n.duration=I.fx.speeds[n.duration]:n.duration=I.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){v(n.old)&&n.old.call(this),n.queue&&I.dequeue(this,n.queue)},n},I.fn.extend({fadeTo:function(t,e,i,n){return this.filter(ot).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var s=I.isEmptyObject(t),r=I.speed(e,i,n),a=function(){var e=de(this,I.extend({},t),r);(s||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,s||!1===r.queue?this.each(a):this.queue(r.queue,a)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,s=null!=t&&t+"queueHooks",r=I.timers,a=Q.get(this);if(s)a[s]&&a[s].stop&&n(a[s]);else for(s in a)a[s]&&a[s].stop&&re.test(s)&&n(a[s]);for(s=r.length;s--;)r[s].elem!==this||null!=t&&r[s].queue!==t||(r[s].anim.stop(i),e=!1,r.splice(s,1));!e&&i||I.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,i=Q.get(this),n=i[t+"queue"],s=i[t+"queueHooks"],r=I.timers,a=n?n.length:0;for(i.finish=!0,I.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;e<a;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete i.finish})}}),I.each(["toggle","show","hide"],function(t,e){var i=I.fn[e];I.fn[e]=function(t,n,s){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(le(e,!0),t,n,s)}}),I.each({slideDown:le("show"),slideUp:le("hide"),slideToggle:le("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){I.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),I.timers=[],I.fx.tick=function(){var t,e=0,i=I.timers;for(ie=Date.now();e<i.length;e++)(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||I.fx.stop(),ie=void 0},I.fx.timer=function(t){I.timers.push(t),I.fx.start()},I.fx.interval=13,I.fx.start=function(){ne||(ne=!0,ae())},I.fx.stop=function(){ne=null},I.fx.speeds={slow:600,fast:200,_default:400},I.fn.delay=function(t,e){return t=I.fx&&I.fx.speeds[t]||t,e=e||"fx",this.queue(e,function(e,i){var n=s.setTimeout(e,t);i.stop=function(){s.clearTimeout(n)}})},function(){var t=o.createElement("input"),e=o.createElement("select").appendChild(o.createElement("option"));t.type="checkbox",E.checkOn=""!==t.value,E.optSelected=e.selected,(t=o.createElement("input")).value="t",t.type="radio",E.radioValue="t"===t.value}();var he,ue=I.expr.attrHandle;I.fn.extend({attr:function(t,e){return G(this,I.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){I.removeAttr(this,t)})}}),I.extend({attr:function(t,e,i){var n,s,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===t.getAttribute?I.prop(t,e,i):(1===r&&I.isXMLDoc(t)||(s=I.attrHooks[e.toLowerCase()]||(I.expr.match.bool.test(e)?he:void 0)),void 0!==i?null===i?void I.removeAttr(t,e):s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:(t.setAttribute(e,i+""),i):s&&"get"in s&&null!==(n=s.get(t,e))?n:null==(n=I.find.attr(t,e))?void 0:n)},attrHooks:{type:{set:function(t,e){if(!E.radioValue&&"radio"===e&&w(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,s=e&&e.match(B);if(s&&1===t.nodeType)for(;i=s[n++];)t.removeAttribute(i)}}),he={set:function(t,e,i){return!1===e?I.removeAttr(t,i):t.setAttribute(i,i),i}},I.each(I.expr.match.bool.source.match(/\w+/g),function(t,e){var i=ue[e]||I.find.attr;ue[e]=function(t,e,n){var s,r,a=e.toLowerCase();return n||(r=ue[a],ue[a]=s,s=null!=i(t,e,n)?a:null,ue[a]=r),s}});var pe=/^(?:input|select|textarea|button)$/i,_e=/^(?:a|area)$/i;function fe(t){return(t.match(B)||[]).join(" ")}function ge(t){return t.getAttribute&&t.getAttribute("class")||""}function me(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(B)||[]}I.fn.extend({prop:function(t,e){return G(this,I.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[I.propFix[t]||t]})}}),I.extend({prop:function(t,e,i){var n,s,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&I.isXMLDoc(t)||(e=I.propFix[e]||e,s=I.propHooks[e]),void 0!==i?s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:t[e]=i:s&&"get"in s&&null!==(n=s.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=I.find.attr(t,"tabindex");return e?parseInt(e,10):pe.test(t.nodeName)||_e.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(I.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),I.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){I.propFix[this.toLowerCase()]=this}),I.fn.extend({addClass:function(t){var e,i,n,s,r,a,o,l=0;if(v(t))return this.each(function(e){I(this).addClass(t.call(this,e,ge(this)))});if((e=me(t)).length)for(;i=this[l++];)if(s=ge(i),n=1===i.nodeType&&" "+fe(s)+" "){for(a=0;r=e[a++];)n.indexOf(" "+r+" ")<0&&(n+=r+" ");s!==(o=fe(n))&&i.setAttribute("class",o)}return this},removeClass:function(t){var e,i,n,s,r,a,o,l=0;if(v(t))return this.each(function(e){I(this).removeClass(t.call(this,e,ge(this)))});if(!arguments.length)return this.attr("class","");if((e=me(t)).length)for(;i=this[l++];)if(s=ge(i),n=1===i.nodeType&&" "+fe(s)+" "){for(a=0;r=e[a++];)for(;n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");s!==(o=fe(n))&&i.setAttribute("class",o)}return this},toggleClass:function(t,e){var i=typeof t,n="string"===i||Array.isArray(t);return"boolean"==typeof e&&n?e?this.addClass(t):this.removeClass(t):v(t)?this.each(function(i){I(this).toggleClass(t.call(this,i,ge(this),e),e)}):this.each(function(){var e,s,r,a;if(n)for(s=0,r=I(this),a=me(t);e=a[s++];)r.hasClass(e)?r.removeClass(e):r.addClass(e);else void 0!==t&&"boolean"!==i||((e=ge(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Q.get(this,"__className__")||""))})},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+fe(ge(i))+" ").indexOf(e)>-1)return!0;return!1}});var Ee=/\r/g;I.fn.extend({val:function(t){var e,i,n,s=this[0];return arguments.length?(n=v(t),this.each(function(i){var s;1===this.nodeType&&(null==(s=n?t.call(this,i,I(this).val()):t)?s="":"number"==typeof s?s+="":Array.isArray(s)&&(s=I.map(s,function(t){return null==t?"":t+""})),(e=I.valHooks[this.type]||I.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,s,"value")||(this.value=s))})):s?(e=I.valHooks[s.type]||I.valHooks[s.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(s,"value"))?i:"string"==typeof(i=s.value)?i.replace(Ee,""):null==i?"":i:void 0}}),I.extend({valHooks:{option:{get:function(t){var e=I.find.attr(t,"value");return null!=e?e:fe(I.text(t))}},select:{get:function(t){var e,i,n,s=t.options,r=t.selectedIndex,a="select-one"===t.type,o=a?null:[],l=a?r+1:s.length;for(n=r<0?l:a?r:0;n<l;n++)if(((i=s[n]).selected||n===r)&&!i.disabled&&(!i.parentNode.disabled||!w(i.parentNode,"optgroup"))){if(e=I(i).val(),a)return e;o.push(e)}return o},set:function(t,e){for(var i,n,s=t.options,r=I.makeArray(e),a=s.length;a--;)((n=s[a]).selected=I.inArray(I.valHooks.option.get(n),r)>-1)&&(i=!0);return i||(t.selectedIndex=-1),r}}}}),I.each(["radio","checkbox"],function(){I.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=I.inArray(I(t).val(),e)>-1}},E.checkOn||(I.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),E.focusin="onfocusin"in s;var ve=/^(?:focusinfocus|focusoutblur)$/,Ce=function(t){t.stopPropagation()};I.extend(I.event,{trigger:function(t,e,i,n){var r,a,l,c,d,h,u,p,_=[i||o],g=f.call(t,"type")?t.type:t,m=f.call(t,"namespace")?t.namespace.split("."):[];if(a=p=l=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!ve.test(g+I.event.triggered)&&(g.indexOf(".")>-1&&(g=(m=g.split(".")).shift(),m.sort()),d=g.indexOf(":")<0&&"on"+g,(t=t[I.expando]?t:new I.Event(g,"object"==typeof t&&t)).isTrigger=n?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),e=null==e?[t]:I.makeArray(e,[t]),u=I.event.special[g]||{},n||!u.trigger||!1!==u.trigger.apply(i,e))){if(!n&&!u.noBubble&&!C(i)){for(c=u.delegateType||g,ve.test(c+g)||(a=a.parentNode);a;a=a.parentNode)_.push(a),l=a;l===(i.ownerDocument||o)&&_.push(l.defaultView||l.parentWindow||s)}for(r=0;(a=_[r++])&&!t.isPropagationStopped();)p=a,t.type=r>1?c:u.bindType||g,(h=(Q.get(a,"events")||{})[t.type]&&Q.get(a,"handle"))&&h.apply(a,e),(h=d&&a[d])&&h.apply&&Z(a)&&(t.result=h.apply(a,e),!1===t.result&&t.preventDefault());return t.type=g,n||t.isDefaultPrevented()||u._default&&!1!==u._default.apply(_.pop(),e)||!Z(i)||d&&v(i[g])&&!C(i)&&((l=i[d])&&(i[d]=null),I.event.triggered=g,t.isPropagationStopped()&&p.addEventListener(g,Ce),i[g](),t.isPropagationStopped()&&p.removeEventListener(g,Ce),I.event.triggered=void 0,l&&(i[d]=l)),t.result}},simulate:function(t,e,i){var n=I.extend(new I.Event,i,{type:t,isSimulated:!0});I.event.trigger(n,null,e)}}),I.fn.extend({trigger:function(t,e){return this.each(function(){I.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return I.event.trigger(t,e,i,!0)}}),E.focusin||I.each({focus:"focusin",blur:"focusout"},function(t,e){var i=function(t){I.event.simulate(e,t.target,I.event.fix(t))};I.event.special[e]={setup:function(){var n=this.ownerDocument||this,s=Q.access(n,e);s||n.addEventListener(t,i,!0),Q.access(n,e,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this,s=Q.access(n,e)-1;s?Q.access(n,e,s):(n.removeEventListener(t,i,!0),Q.remove(n,e))}}});var Te=s.location,ye=Date.now(),Ae=/\?/;I.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new s.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||I.error("Invalid XML: "+t),e};var Ie=/\[\]$/,be=/\r?\n/g,Se=/^(?:submit|button|image|reset|file)$/i,Le=/^(?:input|select|textarea|keygen)/i;function Oe(t,e,i,n){var s;if(Array.isArray(e))I.each(e,function(e,s){i||Ie.test(t)?n(t,s):Oe(t+"["+("object"==typeof s&&null!=s?e:"")+"]",s,i,n)});else if(i||"object"!==A(e))n(t,e);else for(s in e)Oe(t+"["+s+"]",e[s],i,n)}I.param=function(t,e){var i,n=[],s=function(t,e){var i=v(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(Array.isArray(t)||t.jquery&&!I.isPlainObject(t))I.each(t,function(){s(this.name,this.value)});else for(i in t)Oe(i,t[i],e,s);return n.join("&")},I.fn.extend({serialize:function(){return I.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=I.prop(this,"elements");return t?I.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!I(this).is(":disabled")&&Le.test(this.nodeName)&&!Se.test(t)&&(this.checked||!pt.test(t))}).map(function(t,e){var i=I(this).val();return null==i?null:Array.isArray(i)?I.map(i,function(t){return{name:e.name,value:t.replace(be,"\r\n")}}):{name:e.name,value:i.replace(be,"\r\n")}}).get()}});var xe=/%20/g,Re=/#.*$/,we=/([?&])_=[^&]*/,Ne=/^(.*?):[ \t]*([^\r\n]*)$/gm,De=/^(?:GET|HEAD)$/,He=/^\/\//,ke={},Fe={},Me="*/".concat("*"),Pe=o.createElement("a");function Be(t){return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,s=0,r=e.toLowerCase().match(B)||[];if(v(i))for(;n=r[s++];)"+"===n[0]?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(i)):(t[n]=t[n]||[]).push(i)}}function Ve(t,e,i,n){var s={},r=t===Fe;function a(o){var l;return s[o]=!0,I.each(t[o]||[],function(t,o){var c=o(e,i,n);return"string"!=typeof c||r||s[c]?r?!(l=c):void 0:(e.dataTypes.unshift(c),a(c),!1)}),l}return a(e.dataTypes[0])||!s["*"]&&a("*")}function je(t,e){var i,n,s=I.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((s[i]?t:n||(n={}))[i]=e[i]);return n&&I.extend(!0,t,n),t}Pe.href=Te.href,I.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Te.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Me,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":I.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?je(je(t,I.ajaxSettings),e):je(I.ajaxSettings,t)},ajaxPrefilter:Be(ke),ajaxTransport:Be(Fe),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var i,n,r,a,l,c,d,h,u,p,_=I.ajaxSetup({},e),f=_.context||_,g=_.context&&(f.nodeType||f.jquery)?I(f):I.event,m=I.Deferred(),E=I.Callbacks("once memory"),v=_.statusCode||{},C={},T={},y="canceled",A={readyState:0,getResponseHeader:function(t){var e;if(d){if(!a)for(a={};e=Ne.exec(r);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return d?r:null},setRequestHeader:function(t,e){return null==d&&(t=T[t.toLowerCase()]=T[t.toLowerCase()]||t,C[t]=e),this},overrideMimeType:function(t){return null==d&&(_.mimeType=t),this},statusCode:function(t){var e;if(t)if(d)A.always(t[A.status]);else for(e in t)v[e]=[v[e],t[e]];return this},abort:function(t){var e=t||y;return i&&i.abort(e),b(0,e),this}};if(m.promise(A),_.url=((t||_.url||Te.href)+"").replace(He,Te.protocol+"//"),_.type=e.method||e.type||_.method||_.type,_.dataTypes=(_.dataType||"*").toLowerCase().match(B)||[""],null==_.crossDomain){c=o.createElement("a");try{c.href=_.url,c.href=c.href,_.crossDomain=Pe.protocol+"//"+Pe.host!=c.protocol+"//"+c.host}catch(t){_.crossDomain=!0}}if(_.data&&_.processData&&"string"!=typeof _.data&&(_.data=I.param(_.data,_.traditional)),Ve(ke,_,e,A),d)return A;for(u in(h=I.event&&_.global)&&0==I.active++&&I.event.trigger("ajaxStart"),_.type=_.type.toUpperCase(),_.hasContent=!De.test(_.type),n=_.url.replace(Re,""),_.hasContent?_.data&&_.processData&&0===(_.contentType||"").indexOf("application/x-www-form-urlencoded")&&(_.data=_.data.replace(xe,"+")):(p=_.url.slice(n.length),_.data&&(_.processData||"string"==typeof _.data)&&(n+=(Ae.test(n)?"&":"?")+_.data,delete _.data),!1===_.cache&&(n=n.replace(we,"$1"),p=(Ae.test(n)?"&":"?")+"_="+ye+++p),_.url=n+p),_.ifModified&&(I.lastModified[n]&&A.setRequestHeader("If-Modified-Since",I.lastModified[n]),I.etag[n]&&A.setRequestHeader("If-None-Match",I.etag[n])),(_.data&&_.hasContent&&!1!==_.contentType||e.contentType)&&A.setRequestHeader("Content-Type",_.contentType),A.setRequestHeader("Accept",_.dataTypes[0]&&_.accepts[_.dataTypes[0]]?_.accepts[_.dataTypes[0]]+("*"!==_.dataTypes[0]?", "+Me+"; q=0.01":""):_.accepts["*"]),_.headers)A.setRequestHeader(u,_.headers[u]);if(_.beforeSend&&(!1===_.beforeSend.call(f,A,_)||d))return A.abort();if(y="abort",E.add(_.complete),A.done(_.success),A.fail(_.error),i=Ve(Fe,_,e,A)){if(A.readyState=1,h&&g.trigger("ajaxSend",[A,_]),d)return A;_.async&&_.timeout>0&&(l=s.setTimeout(function(){A.abort("timeout")},_.timeout));try{d=!1,i.send(C,b)}catch(t){if(d)throw t;b(-1,t)}}else b(-1,"No Transport");function b(t,e,a,o){var c,u,p,C,T,y=e;d||(d=!0,l&&s.clearTimeout(l),i=void 0,r=o||"",A.readyState=t>0?4:0,c=t>=200&&t<300||304===t,a&&(C=function(t,e,i){for(var n,s,r,a,o=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));if(n)for(s in o)if(o[s]&&o[s].test(n)){l.unshift(s);break}if(l[0]in i)r=l[0];else{for(s in i){if(!l[0]||t.converters[s+" "+l[0]]){r=s;break}a||(a=s)}r=r||a}if(r)return r!==l[0]&&l.unshift(r),i[r]}(_,A,a)),C=function(t,e,i,n){var s,r,a,o,l,c={},d=t.dataTypes.slice();if(d[1])for(a in t.converters)c[a.toLowerCase()]=t.converters[a];for(r=d.shift();r;)if(t.responseFields[r]&&(i[t.responseFields[r]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(a=c[l+" "+r]||c["* "+r]))for(s in c)if((o=s.split(" "))[1]===r&&(a=c[l+" "+o[0]]||c["* "+o[0]])){!0===a?a=c[s]:!0!==c[s]&&(r=o[0],d.unshift(o[1]));break}if(!0!==a)if(a&&t.throws)e=a(e);else try{e=a(e)}catch(t){return{state:"parsererror",error:a?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}(_,C,A,c),c?(_.ifModified&&((T=A.getResponseHeader("Last-Modified"))&&(I.lastModified[n]=T),(T=A.getResponseHeader("etag"))&&(I.etag[n]=T)),204===t||"HEAD"===_.type?y="nocontent":304===t?y="notmodified":(y=C.state,u=C.data,c=!(p=C.error))):(p=y,!t&&y||(y="error",t<0&&(t=0))),A.status=t,A.statusText=(e||y)+"",c?m.resolveWith(f,[u,y,A]):m.rejectWith(f,[A,y,p]),A.statusCode(v),v=void 0,h&&g.trigger(c?"ajaxSuccess":"ajaxError",[A,_,c?u:p]),E.fireWith(f,[A,y]),h&&(g.trigger("ajaxComplete",[A,_]),--I.active||I.event.trigger("ajaxStop")))}return A},getJSON:function(t,e,i){return I.get(t,e,i,"json")},getScript:function(t,e){return I.get(t,void 0,e,"script")}}),I.each(["get","post"],function(t,e){I[e]=function(t,i,n,s){return v(i)&&(s=s||n,n=i,i=void 0),I.ajax(I.extend({url:t,type:e,dataType:s,data:i,success:n},I.isPlainObject(t)&&t))}}),I._evalUrl=function(t){return I.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},I.fn.extend({wrapAll:function(t){var e;return this[0]&&(v(t)&&(t=t.call(this[0])),e=I(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return v(t)?this.each(function(e){I(this).wrapInner(t.call(this,e))}):this.each(function(){var e=I(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=v(t);return this.each(function(i){I(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){I(this).replaceWith(this.childNodes)}),this}}),I.expr.pseudos.hidden=function(t){return!I.expr.pseudos.visible(t)},I.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},I.ajaxSettings.xhr=function(){try{return new s.XMLHttpRequest}catch(t){}};var qe={0:200,1223:204},We=I.ajaxSettings.xhr();E.cors=!!We&&"withCredentials"in We,E.ajax=We=!!We,I.ajaxTransport(function(t){var e,i;if(E.cors||We&&!t.crossDomain)return{send:function(n,r){var a,o=t.xhr();if(o.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)o[a]=t.xhrFields[a];for(a in t.mimeType&&o.overrideMimeType&&o.overrideMimeType(t.mimeType),t.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)o.setRequestHeader(a,n[a]);e=function(t){return function(){e&&(e=i=o.onload=o.onerror=o.onabort=o.ontimeout=o.onreadystatechange=null,"abort"===t?o.abort():"error"===t?"number"!=typeof o.status?r(0,"error"):r(o.status,o.statusText):r(qe[o.status]||o.status,o.statusText,"text"!==(o.responseType||"text")||"string"!=typeof o.responseText?{binary:o.response}:{text:o.responseText},o.getAllResponseHeaders()))}},o.onload=e(),i=o.onerror=o.ontimeout=e("error"),void 0!==o.onabort?o.onabort=i:o.onreadystatechange=function(){4===o.readyState&&s.setTimeout(function(){e&&i()})},e=e("abort");try{o.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}}),I.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),I.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return I.globalEval(t),t}}}),I.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),I.ajaxTransport("script",function(t){var e,i;if(t.crossDomain)return{send:function(n,s){e=I("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&s("error"===t.type?404:200,t.type)}),o.head.appendChild(e[0])},abort:function(){i&&i()}}});var Ue=[],Ke=/(=)\?(?=&|$)|\?\?/;I.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ue.pop()||I.expando+"_"+ye++;return this[t]=!0,t}}),I.ajaxPrefilter("json jsonp",function(t,e,i){var n,r,a,o=!1!==t.jsonp&&(Ke.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ke.test(t.data)&&"data");if(o||"jsonp"===t.dataTypes[0])return n=t.jsonpCallback=v(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,o?t[o]=t[o].replace(Ke,"$1"+n):!1!==t.jsonp&&(t.url+=(Ae.test(t.url)?"&":"?")+t.jsonp+"="+n),t.converters["script json"]=function(){return a||I.error(n+" was not called"),a[0]},t.dataTypes[0]="json",r=s[n],s[n]=function(){a=arguments},i.always(function(){void 0===r?I(s).removeProp(n):s[n]=r,t[n]&&(t.jsonpCallback=e.jsonpCallback,Ue.push(n)),a&&v(r)&&r(a[0]),a=r=void 0}),"script"}),E.createHTMLDocument=function(){var t=o.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),I.parseHTML=function(t,e,i){return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(E.createHTMLDocument?((n=(e=o.implementation.createHTMLDocument("")).createElement("base")).href=o.location.href,e.head.appendChild(n)):e=o),s=N.exec(t),r=!i&&[],s?[e.createElement(s[1])]:(s=Ct([t],e,r),r&&r.length&&I(r).remove(),I.merge([],s.childNodes)));var n,s,r},I.fn.load=function(t,e,i){var n,s,r,a=this,o=t.indexOf(" ");return o>-1&&(n=fe(t.slice(o)),t=t.slice(0,o)),v(e)?(i=e,e=void 0):e&&"object"==typeof e&&(s="POST"),a.length>0&&I.ajax({url:t,type:s||"GET",dataType:"html",data:e}).done(function(t){r=arguments,a.html(n?I("<div>").append(I.parseHTML(t)).find(n):t)}).always(i&&function(t,e){a.each(function(){i.apply(this,r||[t.responseText,e,t])})}),this},I.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){I.fn[e]=function(t){return this.on(e,t)}}),I.expr.pseudos.animated=function(t){return I.grep(I.timers,function(e){return t===e.elem}).length},I.offset={setOffset:function(t,e,i){var n,s,r,a,o,l,c=I.css(t,"position"),d=I(t),h={};"static"===c&&(t.style.position="relative"),o=d.offset(),r=I.css(t,"top"),l=I.css(t,"left"),("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1?(a=(n=d.position()).top,s=n.left):(a=parseFloat(r)||0,s=parseFloat(l)||0),v(e)&&(e=e.call(t,i,I.extend({},o))),null!=e.top&&(h.top=e.top-o.top+a),null!=e.left&&(h.left=e.left-o.left+s),"using"in e?e.using.call(t,h):d.css(h)}},I.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){I.offset.setOffset(this,t,e)});var e,i,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,i,n=this[0],s={top:0,left:0};if("fixed"===I.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===I.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&((s=I(t).offset()).top+=I.css(t,"borderTopWidth",!0),s.left+=I.css(t,"borderLeftWidth",!0))}return{top:e.top-s.top-I.css(n,"marginTop",!0),left:e.left-s.left-I.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===I.css(t,"position");)t=t.offsetParent;return t||Tt})}}),I.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i="pageYOffset"===e;I.fn[t]=function(n){return G(this,function(t,n,s){var r;if(C(t)?r=t:9===t.nodeType&&(r=t.defaultView),void 0===s)return r?r[e]:t[n];r?r.scrollTo(i?r.pageXOffset:s,i?s:r.pageYOffset):t[n]=s},t,n,arguments.length)}}),I.each(["top","left"],function(t,e){I.cssHooks[e]=Ut(E.pixelPosition,function(t,i){if(i)return i=Wt(t,e),Vt.test(i)?I(t).position()[e]+"px":i})}),I.each({Height:"height",Width:"width"},function(t,e){I.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){I.fn[n]=function(s,r){var a=arguments.length&&(i||"boolean"!=typeof s),o=i||(!0===s||!0===r?"margin":"border");return G(this,function(e,i,s){var r;return C(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+t],r["scroll"+t],e.body["offset"+t],r["offset"+t],r["client"+t])):void 0===s?I.css(e,i,o):I.style(e,i,s,o)},e,a?s:void 0,a)}})}),I.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){I.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}}),I.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),I.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}}),I.proxy=function(t,e){var i,n,s;if("string"==typeof e&&(i=t[e],e=t,t=i),v(t))return n=c.call(arguments,2),(s=function(){return t.apply(e||this,n.concat(c.call(arguments)))}).guid=t.guid=t.guid||I.guid++,s},I.holdReady=function(t){t?I.readyWait++:I.ready(!0)},I.isArray=Array.isArray,I.parseJSON=JSON.parse,I.nodeName=w,I.isFunction=v,I.isWindow=C,I.camelCase=Y,I.type=A,I.now=Date.now,I.isNumeric=function(t){var e=I.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},i(8)&&(void 0===(n=function(){return I}.apply(e,[]))||(t.exports=n));var Ge=s.jQuery,ze=s.$;return I.noConflict=function(t){return s.$===I&&(s.$=ze),t&&s.jQuery===I&&(s.jQuery=Ge),I},r||(s.jQuery=s.$=I),I})},function(t,e,i){var n=i(10),s=i(11),r=null;function a(t){return setTimeout(t,0)}t.exports=function(t,e){var i=document,o="string"==typeof t?i.querySelector(t):t,l=s({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),c={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d={activate:function(t){if(!c.active){C(),c.active=!0,c.paused=!1,c.nodeFocusedBeforeActivation=i.activeElement;var e=t&&t.onActivate?t.onActivate:l.onActivate;return e&&e(),u(),d}},deactivate:h,pause:function(){!c.paused&&c.active&&(c.paused=!0,p())},unpause:function(){c.paused&&c.active&&(c.paused=!1,u())}};return d;function h(t){if(c.active){p(),c.active=!1,c.paused=!1;var e=t&&void 0!==t.onDeactivate?t.onDeactivate:l.onDeactivate;return e&&e(),(t&&void 0!==t.returnFocus?t.returnFocus:l.returnFocusOnDeactivate)&&a(function(){T(c.nodeFocusedBeforeActivation)}),d}}function u(){if(c.active)return r&&r.pause(),r=d,C(),a(function(){T(f())}),i.addEventListener("focusin",m,!0),i.addEventListener("mousedown",g,!0),i.addEventListener("touchstart",g,!0),i.addEventListener("click",v,!0),i.addEventListener("keydown",E,!0),d}function p(){if(c.active&&r===d)return i.removeEventListener("focusin",m,!0),i.removeEventListener("mousedown",g,!0),i.removeEventListener("touchstart",g,!0),i.removeEventListener("click",v,!0),i.removeEventListener("keydown",E,!0),r=null,d}function _(t){var e=l[t],n=e;if(!e)return null;if("string"==typeof e&&!(n=i.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(n=e()))throw new Error("`"+t+"` did not return a node");return n}function f(){var t;if(!(t=null!==_("initialFocus")?_("initialFocus"):o.contains(i.activeElement)?i.activeElement:c.firstTabbableNode||_("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}function g(t){o.contains(t.target)||(l.clickOutsideDeactivates?h({returnFocus:!n.isFocusable(t.target)}):t.preventDefault())}function m(t){o.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),T(c.mostRecentlyFocusedNode||f()))}function E(t){if(!1!==l.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t))return t.preventDefault(),void h();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){if(C(),t.shiftKey&&t.target===c.firstTabbableNode)return t.preventDefault(),void T(c.lastTabbableNode);t.shiftKey||t.target!==c.lastTabbableNode||(t.preventDefault(),T(c.firstTabbableNode))}(t)}function v(t){l.clickOutsideDeactivates||o.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function C(){var t=n(o);c.firstTabbableNode=t[0]||f(),c.lastTabbableNode=t[t.length-1]||f()}function T(t){t!==i.activeElement&&(t&&t.focus?(t.focus(),c.mostRecentlyFocusedNode=t,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(t)&&t.select()):T(f()))}}},function(t,e,i){var n=i(9),s=null;function r(t){t&&t.focus&&t!==document.activeElement&&(t.focus(),"input"===t.tagName.toLowerCase()&&t.select())}t.exports=function(t,e){var i=[],a=null,o=null,l=null,c=!1,d=!1,h=null,u="string"==typeof t?document.querySelector(t):t,p=e||{};p.returnFocusOnDeactivate=!e||void 0===e.returnFocusOnDeactivate||e.returnFocusOnDeactivate,p.escapeDeactivates=!e||void 0===e.escapeDeactivates||e.escapeDeactivates;var _={activate:function(t){if(!c){var e={onActivate:t&&void 0!==t.onActivate?t.onActivate:p.onActivate};return c=!0,d=!1,l=document.activeElement,e.onActivate&&e.onActivate(),g(),_}},deactivate:f,pause:function(){!d&&c&&(d=!0,m())},unpause:function(){d&&c&&(d=!1,g())}};return _;function f(t){if(c){var e={returnFocus:t&&void 0!==t.returnFocus?t.returnFocus:p.returnFocusOnDeactivate,onDeactivate:t&&void 0!==t.onDeactivate?t.onDeactivate:p.onDeactivate};return m(),e.onDeactivate&&e.onDeactivate(),e.returnFocus&&setTimeout(function(){r(l)},0),c=!1,d=!1,this}}function g(){if(c)return s&&s.pause(),s=_,A(),setTimeout(function(){r(function(){var t;if(!(t=null!==E("initialFocus")?E("initialFocus"):u.contains(document.activeElement)?document.activeElement:i[0]||E("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return t}())},0),document.addEventListener("focus",T,!0),document.addEventListener("click",C,!0),document.addEventListener("mousedown",v,!0),document.addEventListener("touchstart",v,!0),document.addEventListener("keydown",y,!0),_}function m(){if(c&&s===_)return document.removeEventListener("focus",T,!0),document.removeEventListener("click",C,!0),document.removeEventListener("mousedown",v,!0),document.removeEventListener("touchstart",v,!0),document.removeEventListener("keydown",y,!0),s=null,_}function E(t){var e=p[t],i=e;if(!e)return null;if("string"==typeof e&&!(i=document.querySelector(e)))throw new Error("`"+t+"` refers to no known node");if("function"==typeof e&&!(i=e()))throw new Error("`"+t+"` did not return a node");return i}function v(t){p.clickOutsideDeactivates&&!u.contains(t.target)&&f({returnFocus:!1})}function C(t){p.clickOutsideDeactivates||u.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function T(t){u.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation(),"function"==typeof t.target.blur&&t.target.blur(),h&&function(t){if(t.shiftKey)return r(o);r(a)}(h))}function y(t){"Tab"!==t.key&&9!==t.keyCode||function(t){if(A(),t.target.hasAttribute("tabindex")&&Number(t.target.getAttribute("tabindex"))<0)return h=t;t.preventDefault();var e=i.indexOf(t.target);t.shiftKey?t.target===a||-1===i.indexOf(t.target)?r(o):r(i[e-1]):t.target===o?r(a):r(i[e+1])}(t),!1!==p.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&f()}function A(){i=n(u),a=i[0],o=i[i.length-1]}}},function(t,e,i){t.exports=i(12)},function(t,e,i){},,,function(t,e,i){t.exports=i.p+"index.html"},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e){t.exports=function(t,e){e=e||{};var i,n,s,r=t.ownerDocument||t,a=[],o=[],l=function(t){var e=[];return function(i){if(i===t.documentElement)return!1;var n=t.defaultView.getComputedStyle(i);return!!function i(n,s){if(n===t.documentElement)return!1;for(var r=0,a=e.length;r<a;r++)if(e[r][0]===n)return e[r][1];s=s||t.defaultView.getComputedStyle(n);var o=!1;"none"===s.display?o=!0:n.parentNode&&(o=i(n.parentNode));e.push([n,o]);return o}(i,n)||"hidden"===n.visibility}}(r),c=["input","select","a[href]","textarea","button","[tabindex]"],d=t.querySelectorAll(c.join(","));if(e.includeContainer){var h=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;c.some(function(e){return h.call(t,e)})&&(d=Array.prototype.slice.apply(d)).unshift(t)}for(var u=0,p=d.length;u<p;u++)i=d[u],n=parseInt(i.getAttribute("tabindex"),10),(s=isNaN(n)?i.tabIndex:n)<0||"INPUT"===i.tagName&&"hidden"===i.type||i.disabled||l(i,r)||(0===s?a.push(i):o.push({index:u,tabIndex:s,node:i}));var _=o.sort(function(t,e){return t.tabIndex===e.tabIndex?t.index-e.index:t.tabIndex-e.tabIndex}).map(function(t){return t.node});return Array.prototype.push.apply(_,a),_}},function(t,e){var i=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=i.join(","),s="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function r(t,e){e=e||{};var i,r,o,l=[],h=[],p=new u(t.ownerDocument||t),_=t.querySelectorAll(n);for(e.includeContainer&&s.call(t,n)&&(_=Array.prototype.slice.apply(_)).unshift(t),i=0;i<_.length;i++)a(r=_[i],p)&&(0===(o=c(r))?l.push(r):h.push({documentOrder:i,tabIndex:o,node:r}));return h.sort(d).map(function(t){return t.node}).concat(l)}function a(t,e){return!(!o(t,e)||function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'));return!e||e===t}(t)}(t)||c(t)<0)}function o(t,e){return e=e||new u(t.ownerDocument||t),!(t.disabled||function(t){return h(t)&&"hidden"===t.type}(t)||e.isUntouchable(t))}r.isTabbable=function(t,e){if(!t)throw new Error("No node provided");return!1!==s.call(t,n)&&a(t,e)},r.isFocusable=function(t,e){if(!t)throw new Error("No node provided");return!1!==s.call(t,l)&&o(t,e)};var l=i.concat("iframe").join(",");function c(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function d(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function h(t){return"INPUT"===t.tagName}function u(t){this.doc=t,this.cache=[]}u.prototype.hasDisplayNone=function(t,e){if(t===this.doc.documentElement)return!1;var i=function(t,e){for(var i=0,n=t.length;i<n;i++)if(e(t[i]))return t[i]}(this.cache,function(e){return e===t});if(i)return i[1];var n=!1;return"none"===(e=e||this.doc.defaultView.getComputedStyle(t)).display?n=!0:t.parentNode&&(n=this.hasDisplayNone(t.parentNode)),this.cache.push([t,n]),n},u.prototype.isUntouchable=function(t){if(t===this.doc.documentElement)return!1;var e=this.doc.defaultView.getComputedStyle(t);return!!this.hasDisplayNone(t,e)||"hidden"===e.visibility},t.exports=r},function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var s in n)i.call(n,s)&&(t[s]=n[s])}return t};var i=Object.prototype.hasOwnProperty},function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"MDCIconButtonToggle",function(){return Nt}),i.d(n,"MDCIconButtonToggleFoundation",function(){return wt});var s=i(0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const r=Object.create(null),a=console.warn.bind(console);function o(t=document,e=a){const i=[],n=t.querySelectorAll("[data-mdc-auto-init]");for(let t,s=0;t=n[s];s++){const n=t.dataset.mdcAutoInit;if(!n)throw new Error("(mdc-auto-init) Constructor name must be given.");const s=r[n];if("function"!=typeof s)throw new Error(`(mdc-auto-init) Could not find constructor in registry for ${n}`);if(t[n]){e(`(mdc-auto-init) Component already initialized for ${t}. Skipping...`);continue}const a=s.attachTo(t);Object.defineProperty(t,n,{value:a,writable:!1,enumerable:!1,configurable:!0}),i.push(a)}return function(t,e,i=!1){let n;"function"==typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),document.dispatchEvent(n)}("MDCAutoInit:End",{}),i}o.register=function(t,e,i=a){if("function"!=typeof e)throw new Error(`(mdc-auto-init) Invalid Ctor value ${e}. Expected function`);r[t]&&i(`(mdc-auto-init) Overriding registration for ${t} with ${e}. `+`Was: ${r[t]}`),r[t]=e},o.deregister=function(t){delete r[t]},o.deregisterAll=function(){Object.keys(r).forEach(this.deregister,this)};var l=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class c{static attachTo(t){return new c(t,new l)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let n;"function"==typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}var d=c;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const h={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},u={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};function p(t,e){if(!function(t){return void 0!==t.document&&"function"==typeof t.document.createElement}(t)||!function(t){return t in h||t in u}(e))return e;const i=e in h?h:u,n=t.document.createElement("div");let s="";return s=i===h?function(t,e,i){return e[t].styleProperty in i.style?e[t].noPrefix:e[t].webkitPrefix}(e,i,n):i[e].noPrefix in n.style?i[e].noPrefix:i[e].webkitPrefix}const _=["transform","WebkitTransform","MozTransform","OTransform","MSTransform"];function f(t,e){return p(t,e)}function g(t,e){return p(t,e)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const m={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},E={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},v={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let C,T;function y(t=window,e=!1){if(void 0===T||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){e=!0}})}catch(t){}T=e}return!!T&&{passive:!0}}function A(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(e=>e in t).pop()}const I=["touchstart","pointerdown","mousedown","keydown"],b=["touchend","pointerup","mouseup"];let S=[];class L extends l{static get cssClasses(){return m}static get strings(){return E}static get numbers(){return v}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(L.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(t=>this.deactivate_(t)),this.focusHandler_=(()=>this.handleFocus()),this.blurHandler_=(()=>this.handleBlur()),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_=null}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}init(){const t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){const{ROOT:t,UNBOUNDED:e}=L.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){if(this.activationTimer_){clearTimeout(this.activationTimer_),this.activationTimer_=0;const{FG_ACTIVATION:t}=L.cssClasses;this.adapter_.removeClass(t)}const{ROOT:t,UNBOUNDED:e}=L.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(t){t&&(I.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):b.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){I.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),b.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=L;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=null===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&S.length>0&&S.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(t&&(S.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{S=[],e.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t=null){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=L.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:n}=L.cssClasses,{DEACTIVATION_TIMEOUT_MS:s}=L.numbers;this.layoutInternal_();let r="",a="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();r=`${t.x}px, ${t.y}px`,a=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,r),this.adapter_.updateCssVariable(e,a),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(n),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),s)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:n,y:s}=e,r=n+i.left,a=s+i.top;let o,l;return"touchstart"===t.type?(o=t.changedTouches[0].pageX-r,l=t.changedTouches[0].pageY-a):(o=t.pageX-r,l=t.pageY-a),{x:o,y:l}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=L.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},v.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=L.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=null,L.numbers.TAP_DELAY_MS)}deactivate_(t){const e=this.activationState_;if(!e.isActivated)return;const i=Object.assign({},e);if(e.isProgrammatic){const t=null;requestAnimationFrame(()=>this.animateDeactivation_(t,i)),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(t,i),this.resetActivationState_()})}deactivate(t=null){this.deactivate_(t)}animateDeactivation_(t,{wasActivatedByPointer:e,wasElementMadeActive:i}){(e||i)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+L.numbers.PADDING})(),this.initialSize_=t*L.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:n}=L.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(n,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=L.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(L.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(L.cssClasses.BG_FOCUSED))}}var O=L;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class x extends d{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new x(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=A(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=C;if("boolean"==typeof C&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const n=t.CSS.supports("--css-vars","yes"),s=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!n&&!s||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const n=t.getComputedStyle(i),s=null!==n&&"solid"===n.borderTopStyle;return i.remove(),s}(t)),e||(C=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,y()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,y()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,y()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,y()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new O(x.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class R{}R.prototype.root_,R.prototype.unbounded,R.prototype.disabled;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const w={UPGRADED:"mdc-checkbox--upgraded",CHECKED:"mdc-checkbox--checked",INDETERMINATE:"mdc-checkbox--indeterminate",DISABLED:"mdc-checkbox--disabled",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked"},N={NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_UNCHECKED:"unchecked",TRANSITION_STATE_INDETERMINATE:"indeterminate",ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed"},D={ANIM_END_LATCH_MS:250},H=["checked","indeterminate"];class k extends l{static get cssClasses(){return w}static get strings(){return N}static get numbers(){return D}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},setNativeControlAttr:()=>{},removeNativeControlAttr:()=>{},getNativeControl:()=>{},forceLayout:()=>{},isAttachedToDOM:()=>{}}}constructor(t){super(Object.assign(k.defaultAdapter,t)),this.currentCheckState_=N.TRANSITION_STATE_INIT,this.currentAnimationClass_="",this.animEndLatchTimer_=0,this.enableAnimationEndHandler_=!1}init(){this.currentCheckState_=this.determineCheckState_(this.getNativeControl_()),this.updateAriaChecked_(),this.adapter_.addClass(w.UPGRADED),this.installPropertyChangeHooks_()}destroy(){this.uninstallPropertyChangeHooks_()}isChecked(){return this.getNativeControl_().checked}setChecked(t){this.getNativeControl_().checked=t}isIndeterminate(){return this.getNativeControl_().indeterminate}setIndeterminate(t){this.getNativeControl_().indeterminate=t}isDisabled(){return this.getNativeControl_().disabled}setDisabled(t){this.getNativeControl_().disabled=t,t?this.adapter_.addClass(w.DISABLED):this.adapter_.removeClass(w.DISABLED)}getValue(){return this.getNativeControl_().value}setValue(t){this.getNativeControl_().value=t}handleAnimationEnd(){this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout(()=>{this.adapter_.removeClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!1},D.ANIM_END_LATCH_MS))}handleChange(){this.transitionCheckState_()}installPropertyChangeHooks_(){const t=this.getNativeControl_(),e=Object.getPrototypeOf(t);H.forEach(i=>{const n=Object.getOwnPropertyDescriptor(e,i);if(F(n)){const e={get:n.get,set:e=>{n.set.call(t,e),this.transitionCheckState_()},configurable:n.configurable,enumerable:n.enumerable};Object.defineProperty(t,i,e)}})}uninstallPropertyChangeHooks_(){const t=this.getNativeControl_(),e=Object.getPrototypeOf(t);H.forEach(i=>{const n=Object.getOwnPropertyDescriptor(e,i);F(n)&&Object.defineProperty(t,i,n)})}transitionCheckState_(){const t=this.adapter_.getNativeControl();if(!t)return;const e=this.currentCheckState_,i=this.determineCheckState_(t);e!==i&&(this.updateAriaChecked_(),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(e,i),this.currentCheckState_=i,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0))}determineCheckState_(t){const{TRANSITION_STATE_INDETERMINATE:e,TRANSITION_STATE_CHECKED:i,TRANSITION_STATE_UNCHECKED:n}=N;return t.indeterminate?e:t.checked?i:n}getTransitionAnimationClass_(t,e){const{TRANSITION_STATE_INIT:i,TRANSITION_STATE_CHECKED:n,TRANSITION_STATE_UNCHECKED:s}=N,{ANIM_UNCHECKED_CHECKED:r,ANIM_UNCHECKED_INDETERMINATE:a,ANIM_CHECKED_UNCHECKED:o,ANIM_CHECKED_INDETERMINATE:l,ANIM_INDETERMINATE_CHECKED:c,ANIM_INDETERMINATE_UNCHECKED:d}=k.cssClasses;switch(t){case i:if(e===s)return"";case s:return e===n?r:a;case n:return e===s?o:l;default:return e===n?c:d}}updateAriaChecked_(){this.isIndeterminate()?this.adapter_.setNativeControlAttr(N.ARIA_CHECKED_ATTR,N.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(N.ARIA_CHECKED_ATTR)}getNativeControl_(){return this.adapter_.getNativeControl()||{checked:!1,indeterminate:!1,disabled:!1,value:null}}}function F(t){return!!t&&"function"==typeof t.set}var M=k;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class P extends d{static attachTo(t){return new P(t)}get nativeCb_(){const{NATIVE_CONTROL_SELECTOR:t}=M.strings;return this.root_.querySelector(t)}constructor(...t){super(...t),this.ripple_=this.initRipple_(),this.handleChange_,this.handleAnimationEnd_}initialSyncWithDOM(){this.handleChange_=(()=>this.foundation_.handleChange()),this.handleAnimationEnd_=(()=>this.foundation_.handleAnimationEnd()),this.nativeCb_.addEventListener("change",this.handleChange_),this.listen(f(window,"animationend"),this.handleAnimationEnd_)}initRipple_(){const t=A(HTMLElement.prototype),e=Object.assign(x.createAdapter(this),{isUnbounded:()=>!0,isSurfaceActive:()=>this.nativeCb_[t](":active"),registerInteractionHandler:(t,e)=>this.nativeCb_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.nativeCb_.removeEventListener(t,e)}),i=new O(e);return new x(this.root_,i)}getDefaultFoundation(){return new M({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setNativeControlAttr:(t,e)=>this.nativeCb_.setAttribute(t,e),removeNativeControlAttr:t=>this.nativeCb_.removeAttribute(t),getNativeControl:()=>this.nativeCb_,forceLayout:()=>this.root_.offsetWidth,isAttachedToDOM:()=>Boolean(this.root_.parentNode)})}get ripple(){return this.ripple_}get checked(){return this.foundation_.isChecked()}set checked(t){this.foundation_.setChecked(t)}get indeterminate(){return this.foundation_.isIndeterminate()}set indeterminate(t){this.foundation_.setIndeterminate(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}destroy(){this.ripple_.destroy(),this.nativeCb_.removeEventListener("change",this.handleChange_),this.unlisten(f(window,"animationend"),this.handleAnimationEnd_),super.destroy()}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const B={ENTRY_ANIMATION_NAME:"mdc-chip-entry",INTERACTION_EVENT:"MDCChip:interaction",TRAILING_ICON_INTERACTION_EVENT:"MDCChip:trailingIconInteraction",REMOVAL_EVENT:"MDCChip:removal",CHECKMARK_SELECTOR:".mdc-chip__checkmark",LEADING_ICON_SELECTOR:".mdc-chip__icon--leading",TRAILING_ICON_SELECTOR:".mdc-chip__icon--trailing"},V={CHECKMARK:"mdc-chip__checkmark",CHIP_EXIT:"mdc-chip--exit",HIDDEN_LEADING_ICON:"mdc-chip__icon--leading-hidden",LEADING_ICON:"mdc-chip__icon--leading",TRAILING_ICON:"mdc-chip__icon--trailing",SELECTED:"mdc-chip--selected"};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class j extends l{static get strings(){return B}static get cssClasses(){return V}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},addClassToLeadingIcon:()=>{},removeClassFromLeadingIcon:()=>{},eventTargetHasClass:()=>{},notifyInteraction:()=>{},notifyTrailingIconInteraction:()=>{},notifyRemoval:()=>{},getComputedStyleValue:()=>{},setStyleProperty:()=>{}}}constructor(t){super(Object.assign(j.defaultAdapter,t)),this.shouldRemoveOnTrailingIconClick_=!0}isSelected(){return this.adapter_.hasClass(V.SELECTED)}setSelected(t){t?this.adapter_.addClass(V.SELECTED):this.adapter_.removeClass(V.SELECTED)}getShouldRemoveOnTrailingIconClick(){return this.shouldRemoveOnTrailingIconClick_}setShouldRemoveOnTrailingIconClick(t){this.shouldRemoveOnTrailingIconClick_=t}beginExit(){this.adapter_.addClass(V.CHIP_EXIT)}handleInteraction(t){"click"!==t.type&&"Enter"!==t.key&&13!==t.keyCode||this.adapter_.notifyInteraction()}handleTransitionEnd(t){if(this.adapter_.eventTargetHasClass(t.target,V.CHIP_EXIT)){if("width"===t.propertyName)this.adapter_.notifyRemoval();else if("opacity"===t.propertyName){const t=this.adapter_.getComputedStyleValue("width");requestAnimationFrame(()=>{this.adapter_.setStyleProperty("width",t),this.adapter_.setStyleProperty("padding","0"),this.adapter_.setStyleProperty("margin","0"),requestAnimationFrame(()=>{this.adapter_.setStyleProperty("width","0")})})}}else"opacity"===t.propertyName&&(this.adapter_.eventTargetHasClass(t.target,V.LEADING_ICON)&&this.adapter_.hasClass(V.SELECTED)?this.adapter_.addClassToLeadingIcon(V.HIDDEN_LEADING_ICON):this.adapter_.eventTargetHasClass(t.target,V.CHECKMARK)&&!this.adapter_.hasClass(V.SELECTED)&&this.adapter_.removeClassFromLeadingIcon(V.HIDDEN_LEADING_ICON))}handleTrailingIconInteraction(t){t.stopPropagation(),"click"!==t.type&&"Enter"!==t.key&&13!==t.keyCode||(this.adapter_.notifyTrailingIconInteraction(),this.shouldRemoveOnTrailingIconClick_&&this.beginExit())}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const q=["click","keydown"];class W extends d{constructor(...t){super(...t),this.id,this.leadingIcon_,this.trailingIcon_,this.ripple_,this.handleInteraction_,this.handleTransitionEnd_,this.handleTrailingIconInteraction_}static attachTo(t){return new W(t)}initialize(t=((t,e)=>new x(t,e))){this.id=this.root_.id,this.leadingIcon_=this.root_.querySelector(B.LEADING_ICON_SELECTOR),this.trailingIcon_=this.root_.querySelector(B.TRAILING_ICON_SELECTOR);const e=this.root_.querySelector(B.CHECKMARK_SELECTOR);if(e&&!this.leadingIcon_){const i=Object.assign(x.createAdapter(this),{computeBoundingRect:()=>{return{height:this.root_.getBoundingClientRect().height,width:this.root_.getBoundingClientRect().width+e.getBoundingClientRect().height}}});this.ripple_=t(this.root_,new O(i))}else this.ripple_=t(this.root_)}initialSyncWithDOM(){this.handleInteraction_=(t=>this.foundation_.handleInteraction(t)),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.handleTrailingIconInteraction_=(t=>this.foundation_.handleTrailingIconInteraction(t)),q.forEach(t=>{this.root_.addEventListener(t,this.handleInteraction_)}),this.root_.addEventListener("transitionend",this.handleTransitionEnd_),this.trailingIcon_&&q.forEach(t=>{this.trailingIcon_.addEventListener(t,this.handleTrailingIconInteraction_)})}destroy(){this.ripple_.destroy(),q.forEach(t=>{this.root_.removeEventListener(t,this.handleInteraction_)}),this.root_.removeEventListener("transitionend",this.handleTransitionEnd_),this.trailingIcon_&&q.forEach(t=>{this.trailingIcon_.removeEventListener(t,this.handleTrailingIconInteraction_)}),super.destroy()}get selected(){return this.foundation_.isSelected()}set selected(t){this.foundation_.setSelected(t)}get shouldRemoveOnTrailingIconClick(){return this.foundation_.getShouldRemoveOnTrailingIconClick()}set shouldRemoveOnTrailingIconClick(t){this.foundation_.setShouldRemoveOnTrailingIconClick(t)}beginExit(){this.foundation_.beginExit()}getDefaultFoundation(){return new j(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),addClassToLeadingIcon:t=>{this.leadingIcon_&&this.leadingIcon_.classList.add(t)},removeClassFromLeadingIcon:t=>{this.leadingIcon_&&this.leadingIcon_.classList.remove(t)},eventTargetHasClass:(t,e)=>t.classList.contains(e),notifyInteraction:()=>this.emit(B.INTERACTION_EVENT,{chipId:this.id},!0),notifyTrailingIconInteraction:()=>this.emit(B.TRAILING_ICON_INTERACTION_EVENT,{chipId:this.id},!0),notifyRemoval:()=>this.emit(B.REMOVAL_EVENT,{chipId:this.id,root:this.root_},!0),getComputedStyleValue:t=>window.getComputedStyle(this.root_).getPropertyValue(t),setStyleProperty:(t,e)=>this.root_.style.setProperty(t,e)}))}get ripple(){return this.ripple_}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const U={CHIP_SELECTOR:".mdc-chip"},K={CHOICE:"mdc-chip-set--choice",FILTER:"mdc-chip-set--filter"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class G extends l{static get strings(){return U}static get cssClasses(){return K}static get defaultAdapter(){return{hasClass:()=>{},removeChip:()=>{},setSelected:()=>{}}}constructor(t){super(Object.assign(G.defaultAdapter,t)),this.selectedChipIds_=[]}getSelectedChipIds(){return this.selectedChipIds_}toggleSelect(t){this.selectedChipIds_.indexOf(t)>=0?this.deselect(t):this.select(t)}select(t){this.selectedChipIds_.indexOf(t)>=0||(this.adapter_.hasClass(K.CHOICE)&&this.selectedChipIds_.length>0&&(this.adapter_.setSelected(this.selectedChipIds_[0],!1),this.selectedChipIds_.length=0),this.adapter_.setSelected(t,!0),this.selectedChipIds_.push(t))}deselect(t){const e=this.selectedChipIds_.indexOf(t);e>=0&&(this.selectedChipIds_.splice(e,1),this.adapter_.setSelected(t,!1))}handleChipInteraction(t){const{chipId:e}=t.detail;(this.adapter_.hasClass(K.CHOICE)||this.adapter_.hasClass(K.FILTER))&&this.toggleSelect(e)}handleChipRemoval(t){const{chipId:e}=t.detail;this.deselect(e),this.adapter_.removeChip(e)}}var z=G;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let X=0;class $ extends d{constructor(...t){super(...t),this.chips,this.chipFactory_,this.handleChipInteraction_,this.handleChipRemoval_}static attachTo(t){return new $(t)}initialize(t=(t=>new W(t))){this.chipFactory_=t,this.chips=this.instantiateChips_(this.chipFactory_)}initialSyncWithDOM(){this.chips.forEach(t=>{t.selected&&this.foundation_.select(t.id)}),this.handleChipInteraction_=(t=>this.foundation_.handleChipInteraction(t)),this.handleChipRemoval_=(t=>this.foundation_.handleChipRemoval(t)),this.root_.addEventListener(j.strings.INTERACTION_EVENT,this.handleChipInteraction_),this.root_.addEventListener(j.strings.REMOVAL_EVENT,this.handleChipRemoval_)}destroy(){this.chips.forEach(t=>{t.destroy()}),this.root_.removeEventListener(j.strings.INTERACTION_EVENT,this.handleChipInteraction_),this.root_.removeEventListener(j.strings.REMOVAL_EVENT,this.handleChipRemoval_),super.destroy()}addChip(t){t.id=t.id||`mdc-chip-${++X}`,this.chips.push(this.chipFactory_(t))}get selectedChipIds(){return this.foundation_.getSelectedChipIds()}getDefaultFoundation(){return new z(Object.assign({hasClass:t=>this.root_.classList.contains(t),removeChip:t=>{const e=this.findChipIndex_(t);e>=0&&(this.chips[e].destroy(),this.chips.splice(e,1))},setSelected:(t,e)=>{const i=this.findChipIndex_(t);i>=0&&(this.chips[i].selected=e)}}))}instantiateChips_(t){return[].slice.call(this.root_.querySelectorAll(z.strings.CHIP_SELECTOR)).map(e=>(e.id=e.id||`mdc-chip-${++X}`,t(e)))}findChipIndex_(t){for(let e=0;e<this.chips.length;e++)if(this.chips[e].id===t)return e;return-1}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Y={ROOT:"mdc-dialog",OPEN:"mdc-dialog--open",ANIMATING:"mdc-dialog--animating",BACKDROP:"mdc-dialog__backdrop",SCROLL_LOCK:"mdc-dialog-scroll-lock",ACCEPT_BTN:"mdc-dialog__footer__button--accept",CANCEL_BTN:"mdc-dialog__footer__button--cancel"},Z={OPEN_DIALOG_SELECTOR:".mdc-dialog--open",DIALOG_SURFACE_SELECTOR:".mdc-dialog__surface",ACCEPT_SELECTOR:".mdc-dialog__footer__button--accept",ACCEPT_EVENT:"MDCDialog:accept",CANCEL_EVENT:"MDCDialog:cancel"},J={DIALOG_ANIMATION_TIME_MS:120};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Q extends l{static get cssClasses(){return Y}static get strings(){return Z}static get numbers(){return J}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},addBodyClass:()=>{},removeBodyClass:()=>{},eventTargetHasClass:()=>!1,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerSurfaceInteractionHandler:()=>{},deregisterSurfaceInteractionHandler:()=>{},registerDocumentKeydownHandler:()=>{},deregisterDocumentKeydownHandler:()=>{},notifyAccept:()=>{},notifyCancel:()=>{},trapFocusOnSurface:()=>{},untrapFocusOnSurface:()=>{},isDialog:()=>!1}}constructor(t){super(Object.assign(Q.defaultAdapter,t)),this.isOpen_=!1,this.componentClickHandler_=(t=>{this.adapter_.eventTargetHasClass(t.target,Y.BACKDROP)&&this.cancel(!0)}),this.dialogClickHandler_=(t=>this.handleDialogClick_(t)),this.documentKeydownHandler_=(t=>{(t.key&&"Escape"===t.key||27===t.keyCode)&&this.cancel(!0)}),this.timerId_=0,this.animationTimerEnd_=(t=>this.handleAnimationTimerEnd_(t))}destroy(){this.isOpen_&&this.close(),this.adapter_.removeClass(Q.cssClasses.ANIMATING),clearTimeout(this.timerId_)}open(){this.isOpen_=!0,this.disableScroll_(),this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_),this.adapter_.registerSurfaceInteractionHandler("click",this.dialogClickHandler_),this.adapter_.registerInteractionHandler("click",this.componentClickHandler_),clearTimeout(this.timerId_),this.timerId_=setTimeout(this.animationTimerEnd_,Q.numbers.DIALOG_ANIMATION_TIME_MS),this.adapter_.addClass(Q.cssClasses.ANIMATING),this.adapter_.addClass(Q.cssClasses.OPEN)}close(){this.isOpen_=!1,this.enableScroll_(),this.adapter_.deregisterSurfaceInteractionHandler("click",this.dialogClickHandler_),this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_),this.adapter_.deregisterInteractionHandler("click",this.componentClickHandler_),this.adapter_.untrapFocusOnSurface(),clearTimeout(this.timerId_),this.timerId_=setTimeout(this.animationTimerEnd_,Q.numbers.DIALOG_ANIMATION_TIME_MS),this.adapter_.addClass(Q.cssClasses.ANIMATING),this.adapter_.removeClass(Q.cssClasses.OPEN)}isOpen(){return this.isOpen_}accept(t){t&&this.adapter_.notifyAccept(),this.close()}cancel(t){t&&this.adapter_.notifyCancel(),this.close()}handleDialogClick_(t){const{target:e}=t;this.adapter_.eventTargetHasClass(e,Y.ACCEPT_BTN)?this.accept(!0):this.adapter_.eventTargetHasClass(e,Y.CANCEL_BTN)&&this.cancel(!0)}handleAnimationTimerEnd_(){this.adapter_.removeClass(Q.cssClasses.ANIMATING),this.isOpen_&&this.adapter_.trapFocusOnSurface()}disableScroll_(){this.adapter_.addBodyClass(Y.SCROLL_LOCK)}enableScroll_(){this.adapter_.removeBodyClass(Y.SCROLL_LOCK)}}var tt=i(2),et=i.n(tt);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class it extends d{static attachTo(t){return new it(t)}get open(){return this.foundation_.isOpen()}get acceptButton_(){return this.root_.querySelector(Q.strings.ACCEPT_SELECTOR)}get dialogSurface_(){return this.root_.querySelector(Q.strings.DIALOG_SURFACE_SELECTOR)}initialize(){this.focusTrap_=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e,i=et.a){return i(t,{initialFocus:e,clickOutsideDeactivates:!0})}(this.dialogSurface_,this.acceptButton_),this.footerBtnRipples_=[];const t=this.root_.querySelectorAll(".mdc-dialog__footer__button");for(let e,i=0;e=t[i];i++)this.footerBtnRipples_.push(new x(e))}destroy(){this.footerBtnRipples_.forEach(t=>t.destroy()),super.destroy()}show(){this.foundation_.open()}close(){this.foundation_.close()}getDefaultFoundation(){return new Q({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),addBodyClass:t=>document.body.classList.add(t),removeBodyClass:t=>document.body.classList.remove(t),eventTargetHasClass:(t,e)=>t.classList.contains(e),registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),registerSurfaceInteractionHandler:(t,e)=>this.dialogSurface_.addEventListener(t,e),deregisterSurfaceInteractionHandler:(t,e)=>this.dialogSurface_.removeEventListener(t,e),registerDocumentKeydownHandler:t=>document.addEventListener("keydown",t),deregisterDocumentKeydownHandler:t=>document.removeEventListener("keydown",t),notifyAccept:()=>this.emit(Q.strings.ACCEPT_EVENT),notifyCancel:()=>this.emit(Q.strings.CANCEL_EVENT),trapFocusOnSurface:()=>this.focusTrap_.activate(),untrapFocusOnSurface:()=>this.focusTrap_.deactivate(),isDialog:t=>t===this.dialogSurface_})}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const nt={ROOT:"mdc-drawer",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",ANIMATE:"mdc-drawer--animate",OPENING:"mdc-drawer--opening",CLOSING:"mdc-drawer--closing"},st={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",SCRIM_SELECTOR:".mdc-drawer-scrim",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened"};var rt=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class extends l{static get strings(){return st}static get cssClasses(){return nt}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},elementHasClass:()=>{},computeBoundingRect:()=>{},notifyClose:()=>{},notifyOpen:()=>{},saveFocus:()=>{},restoreFocus:()=>{},focusActiveNavigationItem:()=>{},trapFocus:()=>{},releaseFocus:()=>{}}}open(){this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(nt.OPEN),this.adapter_.addClass(nt.ANIMATE),this.adapter_.computeBoundingRect(),this.adapter_.addClass(nt.OPENING),this.adapter_.saveFocus())}close(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(nt.CLOSING)}opened(){}closed(){}isOpen(){return this.adapter_.hasClass(nt.OPEN)}isOpening(){return this.adapter_.hasClass(nt.OPENING)}isClosing(){return this.adapter_.hasClass(nt.CLOSING)}handleKeydown(t){const{keyCode:e,key:i}=t;("Escape"===i||27===e)&&this.close()}handleTransitionEnd(t){const{OPENING:e,CLOSING:i,OPEN:n,ANIMATE:s,ROOT:r}=nt;t.target instanceof Element&&this.adapter_.elementHasClass(t.target,r)&&(this.isClosing()?(this.adapter_.removeClass(n),this.adapter_.restoreFocus(),this.closed(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened(),this.adapter_.notifyOpen()),this.adapter_.removeClass(s),this.adapter_.removeClass(e),this.adapter_.removeClass(i))}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at=class extends rt{opened(){this.adapter_.trapFocus()}closed(){this.adapter_.releaseFocus()}handleScrimClick(){this.close()}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ot={ROOT:"mdc-list",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated"},lt={ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_SELECTED:"aria-selected",FOCUSABLE_CHILD_ELEMENTS:`.${ot.LIST_ITEM_CLASS} button:not(:disabled), .${ot.LIST_ITEM_CLASS} a`,ENABLED_ITEMS_SELECTOR:".mdc-list-item:not(.mdc-list-item--disabled)"},ct=["input","button","textarea","select"];class dt extends l{static get strings(){return lt}static get cssClasses(){return ot}static get defaultAdapter(){return{getListItemCount:()=>{},getFocusedElementIndex:()=>{},setAttributeForElementIndex:()=>{},removeAttributeForElementIndex:()=>{},addClassForElementIndex:()=>{},removeClassForElementIndex:()=>{},focusItemAtIndex:()=>{},setTabIndexForListItemChildren:()=>{},followHref:()=>{}}}constructor(t={}){super(Object.assign(dt.defaultAdapter,t)),this.wrapFocus_=!1,this.isVertical_=!0,this.isSingleSelectionList_=!1,this.selectedIndex_=-1,this.useActivatedClass_=!1}setWrapFocus(t){this.wrapFocus_=t}setVerticalOrientation(t){this.isVertical_=t}setSingleSelection(t){this.isSingleSelectionList_=t}setUseActivatedClass(t){this.useActivatedClass_=t}setSelectedIndex(t){if(t===this.selectedIndex_)return;const e=this.useActivatedClass_?ot.LIST_ITEM_ACTIVATED_CLASS:ot.LIST_ITEM_SELECTED_CLASS;this.selectedIndex_>=0&&(this.adapter_.removeAttributeForElementIndex(this.selectedIndex_,lt.ARIA_SELECTED),this.adapter_.removeClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",-1)),t>=0&&this.adapter_.getListItemCount()>t&&(this.selectedIndex_=t,this.adapter_.setAttributeForElementIndex(this.selectedIndex_,lt.ARIA_SELECTED,!0),this.adapter_.addClassForElementIndex(this.selectedIndex_,e),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,"tabindex",0),0!==this.selectedIndex_&&this.adapter_.setAttributeForElementIndex(0,"tabindex",-1))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForListItemChildren(e,-1)}handleKeydown(t,e,i){const n="ArrowLeft"===t.key||37===t.keyCode,s="ArrowUp"===t.key||38===t.keyCode,r="ArrowRight"===t.key||39===t.keyCode,a="ArrowDown"===t.key||40===t.keyCode,o="Home"===t.key||36===t.keyCode,l="End"===t.key||35===t.keyCode,c="Enter"===t.key||13===t.keyCode,d="Space"===t.key||32===t.keyCode;let h=this.adapter_.getFocusedElementIndex();-1===h&&(h=i)<0||(this.isVertical_&&a||!this.isVertical_&&r?(this.preventDefaultEvent_(t),this.focusNextElement(h)):this.isVertical_&&s||!this.isVertical_&&n?(this.preventDefaultEvent_(t),this.focusPrevElement(h)):o?(this.preventDefaultEvent_(t),this.focusFirstElement()):l?(this.preventDefaultEvent_(t),this.focusLastElement()):this.isSingleSelectionList_&&(c||d)&&(this.preventDefaultEvent_(t),e&&(this.setSelectedIndex(h),this.adapter_.followHref(h))))}handleClick(){const t=this.adapter_.getFocusedElementIndex();-1!==t&&this.setSelectedIndex(t)}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===ct.indexOf(e)&&t.preventDefault()}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return;e=0}this.adapter_.focusItemAtIndex(e)}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return;e=this.adapter_.getListItemCount()-1}this.adapter_.focusItemAtIndex(e)}focusFirstElement(){this.adapter_.getListItemCount()>0&&this.adapter_.focusItemAtIndex(0)}focusLastElement(){const t=this.adapter_.getListItemCount()-1;t>=0&&this.adapter_.focusItemAtIndex(t)}}var ht=dt;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ut extends d{constructor(...t){super(...t),this.handleKeydown_,this.handleClick_,this.focusInEventListener_,this.focusOutEventListener_}static attachTo(t){return new ut(t)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("click",this.handleClick_),this.root_.removeEventListener("focusin",this.focusInEventListener_),this.root_.removeEventListener("focusout",this.focusOutEventListener_)}initialSyncWithDOM(){this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("focusin",this.focusInEventListener_),this.root_.addEventListener("focusout",this.focusOutEventListener_),this.layout(),this.initializeListType()}layout(){const t=this.root_.getAttribute(lt.ARIA_ORIENTATION);this.vertical=t!==lt.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(t=>{t.setAttribute("tabindex",-1)}),[].slice.call(this.root_.querySelectorAll(lt.FOCUSABLE_CHILD_ELEMENTS)).forEach(t=>t.setAttribute("tabindex",-1))}getListItemIndex_(t){let e=t.target,i=-1;for(;!e.classList.contains(ot.LIST_ITEM_CLASS)&&!e.classList.contains(ot.ROOT);)e=e.parentElement;return e.classList.contains(ot.LIST_ITEM_CLASS)&&(i=this.listElements.indexOf(e)),i}handleFocusInEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusIn(t,e)}handleFocusOutEvent_(t){const e=this.getListItemIndex_(t);this.foundation_.handleFocusOut(t,e)}handleKeydownEvent_(t){const e=this.getListItemIndex_(t);e>=0&&this.foundation_.handleKeydown(t,t.target.classList.contains(ot.LIST_ITEM_CLASS),e)}initializeListType(){const t=this.root_.querySelector(`.${ot.LIST_ITEM_ACTIVATED_CLASS}, .${ot.LIST_ITEM_SELECTED_CLASS}`);t&&(t.classList.contains(ot.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(t))}set vertical(t){this.foundation_.setVerticalOrientation(t)}get listElements(){return[].slice.call(this.root_.querySelectorAll(lt.ENABLED_ITEMS_SELECTOR))}set wrapFocus(t){this.foundation_.setWrapFocus(t)}set singleSelection(t){t?this.root_.addEventListener("click",this.handleClick_):this.root_.removeEventListener("click",this.handleClick_),this.foundation_.setSingleSelection(t)}set selectedIndex(t){this.foundation_.setSelectedIndex(t)}getDefaultFoundation(){return new ht(Object.assign({getListItemCount:()=>this.listElements.length,getFocusedElementIndex:()=>this.listElements.indexOf(document.activeElement),setAttributeForElementIndex:(t,e,i)=>{const n=this.listElements[t];n&&n.setAttribute(e,i)},removeAttributeForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.removeAttribute(e)},addClassForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.classList.add(e)},removeClassForElementIndex:(t,e)=>{const i=this.listElements[t];i&&i.classList.remove(e)},focusItemAtIndex:t=>{const e=this.listElements[t];e&&e.focus()},setTabIndexForListItemChildren:(t,e)=>{const i=this.listElements[t];[].slice.call(i.querySelectorAll(lt.FOCUSABLE_CHILD_ELEMENTS)).forEach(t=>t.setAttribute("tabindex",e))},followHref:t=>{const e=this.listElements[t];e&&e.href&&e.click()}}))}}var pt=i(1),_t=i.n(pt);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class ft extends d{constructor(...t){super(...t),this.previousFocus_,this.handleKeydown_,this.handleTransitionEnd_,this.focusTrapFactory_,this.focusTrap_,this.scrim_,this.handleScrimClick_,this.list_}static attachTo(t){return new ft(t)}get open(){return this.foundation_.isOpen()}set open(t){t?this.foundation_.open():this.foundation_.close()}initialize(t=_t.a,e=(t=>new ut(t))){const i=this.root_.querySelector(`.${ht.cssClasses.ROOT}`);i&&(this.list_=e(i),this.list_.wrapFocus=!0),this.focusTrapFactory_=t}initialSyncWithDOM(){const{MODAL:t}=rt.cssClasses;if(this.root_.classList.contains(t)){const{SCRIM_SELECTOR:t}=rt.strings;this.scrim_=this.root_.parentElement.querySelector(t),this.handleScrimClick_=(()=>this.foundation_.handleScrimClick()),this.scrim_.addEventListener("click",this.handleScrimClick_),this.focusTrap_=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e=_t.a){return e(t,{clickOutsideDeactivates:!0,initialFocus:!1,escapeDeactivates:!1,returnFocusOnDeactivate:!1})}(this.root_,this.focusTrapFactory_)}this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("transitionend",this.handleTransitionEnd_)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("transitionend",this.handleTransitionEnd_),this.list_&&this.list_.destroy();const{MODAL:t}=rt.cssClasses;this.root_.classList.contains(t)&&(this.scrim_.removeEventListener("click",this.handleScrimClick_),this.open=!1)}getDefaultFoundation(){const t=Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),elementHasClass:(t,e)=>t.classList.contains(e),computeBoundingRect:()=>this.root_.getBoundingClientRect(),saveFocus:()=>{this.previousFocus_=document.activeElement},restoreFocus:()=>{const t=this.previousFocus_&&this.previousFocus_.focus;this.root_.contains(document.activeElement)&&t&&this.previousFocus_.focus()},focusActiveNavigationItem:()=>{const t=this.root_.querySelector(`.${ht.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`);t&&t.focus()},notifyClose:()=>this.emit(st.CLOSE_EVENT,{},!0),notifyOpen:()=>this.emit(st.OPEN_EVENT,{},!0),trapFocus:()=>this.focusTrap_.activate(),releaseFocus:()=>this.focusTrap_.deactivate()}),{DISMISSIBLE:e,MODAL:i}=rt.cssClasses;if(this.root_.classList.contains(e))return new rt(t);if(this.root_.classList.contains(i))return new at(t);throw new Error(`MDCDrawer: Failed to instantiate component. Supported variants are ${e} and ${i}.`)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const gt={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake"};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class mt extends l{static get cssClasses(){return gt}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},getWidth:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{}}}constructor(t){super(Object.assign(mt.defaultAdapter,t)),this.shakeAnimationEndHandler_=(()=>this.handleShakeAnimationEnd_())}init(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)}destroy(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)}getWidth(){return this.adapter_.getWidth()}shake(t){const{LABEL_SHAKE:e}=mt.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}float(t){const{LABEL_FLOAT_ABOVE:e,LABEL_SHAKE:i}=mt.cssClasses;t?this.adapter_.addClass(e):(this.adapter_.removeClass(e),this.adapter_.removeClass(i))}handleShakeAnimationEnd_(){const{LABEL_SHAKE:t}=mt.cssClasses;this.adapter_.removeClass(t)}}var Et=mt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class vt extends d{static attachTo(t){return new vt(t)}shake(t){this.foundation_.shake(t)}float(t){this.foundation_.float(t)}getWidth(){return this.foundation_.getWidth()}getDefaultFoundation(){return new Et({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getWidth:()=>this.root_.offsetWidth,registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e)})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ct={ROOT:"mdc-form-field"},Tt={LABEL_SELECTOR:".mdc-form-field > label"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class yt extends l{static get cssClasses(){return Ct}static get strings(){return Tt}static get defaultAdapter(){return{registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},activateInputRipple:()=>{},deactivateInputRipple:()=>{}}}constructor(t){super(Object.assign(yt.defaultAdapter,t)),this.clickHandler_=(()=>this.handleClick_())}init(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)}destroy(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)}handleClick_(){this.adapter_.activateInputRipple(),requestAnimationFrame(()=>this.adapter_.deactivateInputRipple())}}var At=yt;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class It extends d{static attachTo(t){return new It(t)}set input(t){this.input_=t}get input(){return this.input_}constructor(...t){super(...t),this.input_}get label_(){const{LABEL_SELECTOR:t}=At.strings;return this.root_.querySelector(t)}getDefaultFoundation(){return new At({registerInteractionHandler:(t,e)=>this.label_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.label_.removeEventListener(t,e),activateInputRipple:()=>{this.input_&&this.input_.ripple&&this.input_.ripple.activate()},deactivateInputRipple:()=>{this.input_&&this.input_.ripple&&this.input_.ripple.deactivate()}})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const bt={TILES_SELECTOR:".mdc-grid-list__tiles",TILE_SELECTOR:".mdc-grid-tile"};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class St extends l{static get strings(){return bt}static get defaultAdapter(){return{getOffsetWidth:()=>0,getNumberOfTiles:()=>0,getOffsetWidthForTileAtIndex:()=>0,setStyleForTilesElement:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{}}}constructor(t){super(Object.assign(St.defaultAdapter,t)),this.resizeHandler_=(()=>this.alignCenter()),this.resizeFrame_=0}init(){this.alignCenter(),this.adapter_.registerResizeHandler(this.resizeHandler_)}destroy(){this.adapter_.deregisterResizeHandler(this.resizeHandler_)}alignCenter(){0!==this.resizeFrame_&&cancelAnimationFrame(this.resizeFrame_),this.resizeFrame_=requestAnimationFrame(()=>{this.alignCenter_(),this.resizeFrame_=0})}alignCenter_(){if(0==this.adapter_.getNumberOfTiles())return;const t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetWidthForTileAtIndex(0),i=e*Math.floor(t/e);this.adapter_.setStyleForTilesElement("width",`${i}px`)}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Lt extends d{static attachTo(t){return new Lt(t)}getDefaultFoundation(){return new St({getOffsetWidth:()=>this.root_.offsetWidth,getNumberOfTiles:()=>this.root_.querySelectorAll(St.strings.TILE_SELECTOR).length,getOffsetWidthForTileAtIndex:t=>this.root_.querySelectorAll(St.strings.TILE_SELECTOR)[t].offsetWidth,setStyleForTilesElement:(t,e)=>{this.root_.querySelector(St.strings.TILES_SELECTOR).style[t]=e},registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t)})}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ot={ROOT:"mdc-icon-button",ICON_BUTTON_ON:"mdc-icon-button--on"},xt={ARIA_PRESSED:"aria-pressed",ARIA_LABEL:"aria-label",CHANGE_EVENT:"MDCIconButtonToggle:change"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Rt extends l{static get cssClasses(){return Ot}static get strings(){return xt}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},notifyChange:()=>{}}}constructor(t){super(Object.assign(Rt.defaultAdapter,t)),this.disabled_=!1}init(){this.adapter_.setAttr(xt.ARIA_PRESSED,`${this.isOn()}`)}handleClick(){this.toggle(),this.adapter_.notifyChange({isOn:this.isOn()})}isOn(){return this.adapter_.hasClass(Ot.ICON_BUTTON_ON)}toggle(t=!this.isOn()){t?this.adapter_.addClass(Ot.ICON_BUTTON_ON):this.adapter_.removeClass(Ot.ICON_BUTTON_ON),this.adapter_.setAttr(xt.ARIA_PRESSED,`${t}`)}}var wt=Rt;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Nt extends d{static attachTo(t){return new Nt(t)}constructor(...t){super(...t),this.ripple_=this.initRipple_(),this.handleClick_}initRipple_(){const t=new x(this.root_);return t.unbounded=!0,t}destroy(){this.root_.removeEventListener("click",this.handleClick_),this.ripple_.destroy(),super.destroy()}getDefaultFoundation(){return new wt({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),notifyChange:t=>this.emit(wt.strings.CHANGE_EVENT,t)})}initialSyncWithDOM(){this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.root_.addEventListener("click",this.handleClick_)}get ripple(){return this.ripple_}get on(){return this.foundation_.isOn()}set on(t){this.foundation_.toggle(t)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Dt={ROOT:"mdc-icon-toggle",DISABLED:"mdc-icon-toggle--disabled"},Ht={DATA_TOGGLE_ON:"data-toggle-on",DATA_TOGGLE_OFF:"data-toggle-off",ARIA_PRESSED:"aria-pressed",ARIA_DISABLED:"aria-disabled",ARIA_LABEL:"aria-label",CHANGE_EVENT:"MDCIconToggle:change"};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class kt extends l{static get cssClasses(){return Dt}static get strings(){return Ht}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},setText:()=>{},getTabIndex:()=>0,setTabIndex:()=>{},getAttr:()=>"",setAttr:()=>{},rmAttr:()=>{},notifyChange:()=>{}}}constructor(t){super(Object.assign(kt.defaultAdapter,t)),this.on_=!1,this.disabled_=!1,this.savedTabIndex_=-1,this.toggleOnData_=null,this.toggleOffData_=null,this.clickHandler_=(()=>this.toggleFromEvt_()),this.isHandlingKeydown_=!1,this.keydownHandler_=(t=>{if(Ft(t))return this.isHandlingKeydown_=!0,t.preventDefault()}),this.keyupHandler_=(t=>{Ft(t)&&(this.isHandlingKeydown_=!1,this.toggleFromEvt_())})}init(){this.refreshToggleData(),this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.registerInteractionHandler("click",this.clickHandler_),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("keyup",this.keyupHandler_)}refreshToggleData(){const{DATA_TOGGLE_ON:t,DATA_TOGGLE_OFF:e}=kt.strings;this.toggleOnData_=this.parseJsonDataAttr_(t),this.toggleOffData_=this.parseJsonDataAttr_(e)}destroy(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("keyup",this.keyupHandler_)}toggleFromEvt_(){this.toggle();const{on_:t}=this;this.adapter_.notifyChange({isOn:t})}isOn(){return this.on_}toggle(t=!this.on_){this.on_=t;const{ARIA_LABEL:e,ARIA_PRESSED:i}=kt.strings;this.on_?this.adapter_.setAttr(i,"true"):this.adapter_.setAttr(i,"false");const{cssClass:n}=this.on_?this.toggleOffData_:this.toggleOnData_;n&&this.adapter_.removeClass(n);const{content:s,label:r,cssClass:a}=this.on_?this.toggleOnData_:this.toggleOffData_;a&&this.adapter_.addClass(a),s&&this.adapter_.setText(s),r&&this.adapter_.setAttr(e,r)}parseJsonDataAttr_(t){const e=this.adapter_.getAttr(t);return e?JSON.parse(e):{}}isDisabled(){return this.disabled_}setDisabled(t){this.disabled_=t;const{DISABLED:e}=kt.cssClasses,{ARIA_DISABLED:i}=kt.strings;this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setTabIndex(-1),this.adapter_.setAttr(i,"true"),this.adapter_.addClass(e)):(this.adapter_.setTabIndex(this.savedTabIndex_),this.adapter_.rmAttr(i),this.adapter_.removeClass(e))}isKeyboardActivated(){return this.isHandlingKeydown_}}function Ft(t){return"Space"===t.key||32===t.keyCode}class Mt{}Mt.prototype.label,Mt.prototype.content,Mt.prototype.cssClass;var Pt=kt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Bt extends d{static attachTo(t){return new Bt(t)}constructor(...t){super(...t),this.ripple_=this.initRipple_()}get iconEl_(){const{iconInnerSelector:t}=this.root_.dataset;return t?this.root_.querySelector(t):this.root_}initRipple_(){const t=Object.assign(x.createAdapter(this),{isUnbounded:()=>!0,isSurfaceActive:()=>this.foundation_.isKeyboardActivated()}),e=new O(t);return new x(this.root_,e)}destroy(){this.ripple_.destroy(),super.destroy()}getDefaultFoundation(){return new Pt({addClass:t=>this.iconEl_.classList.add(t),removeClass:t=>this.iconEl_.classList.remove(t),registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),setText:t=>this.iconEl_.textContent=t,getTabIndex:()=>this.root_.tabIndex,setTabIndex:t=>this.root_.tabIndex=t,getAttr:(t,e)=>this.root_.getAttribute(t,e),setAttr:(t,e)=>this.root_.setAttribute(t,e),rmAttr:t=>this.root_.removeAttribute(t),notifyChange:t=>this.emit(Pt.strings.CHANGE_EVENT,t)})}initialSyncWithDOM(){this.on="true"===this.root_.getAttribute(Pt.strings.ARIA_PRESSED),this.disabled="true"===this.root_.getAttribute(Pt.strings.ARIA_DISABLED)}get ripple(){return this.ripple_}get on(){return this.foundation_.isOn()}set on(t){this.foundation_.toggle(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}refreshToggleData(){this.foundation_.refreshToggleData()}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Vt={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},jt={PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar",BUFFER_SELECTOR:".mdc-linear-progress__buffer"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class qt extends l{static get cssClasses(){return Vt}static get strings(){return jt}static get defaultAdapter(){return{addClass:()=>{},getPrimaryBar:()=>{},getBuffer:()=>{},hasClass:()=>!1,removeClass:()=>{},setStyle:()=>{}}}constructor(t){super(Object.assign(qt.defaultAdapter,t))}init(){this.determinate_=!this.adapter_.hasClass(Vt.INDETERMINATE_CLASS),this.reverse_=this.adapter_.hasClass(Vt.REVERSED_CLASS),this.progress_=0}setDeterminate(t){this.determinate_=t,this.determinate_?(this.adapter_.removeClass(Vt.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_)):(this.adapter_.addClass(Vt.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))}setProgress(t){this.progress_=t,this.determinate_&&this.setScale_(this.adapter_.getPrimaryBar(),t)}setBuffer(t){this.determinate_&&this.setScale_(this.adapter_.getBuffer(),t)}setReverse(t){this.reverse_=t,this.reverse_?this.adapter_.addClass(Vt.REVERSED_CLASS):this.adapter_.removeClass(Vt.REVERSED_CLASS)}open(){this.adapter_.removeClass(Vt.CLOSED_CLASS)}close(){this.adapter_.addClass(Vt.CLOSED_CLASS)}setScale_(t,e){const i="scaleX("+e+")";_.forEach(e=>{this.adapter_.setStyle(t,e,i)})}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Wt extends d{static attachTo(t){return new Wt(t)}set determinate(t){this.foundation_.setDeterminate(t)}set progress(t){this.foundation_.setProgress(t)}set buffer(t){this.foundation_.setBuffer(t)}set reverse(t){this.foundation_.setReverse(t)}open(){this.foundation_.open()}close(){this.foundation_.close()}getDefaultFoundation(){return new qt({addClass:t=>this.root_.classList.add(t),getPrimaryBar:()=>this.root_.querySelector(qt.strings.PRIMARY_BAR_SELECTOR),getBuffer:()=>this.root_.querySelector(qt.strings.BUFFER_SELECTOR),hasClass:t=>this.root_.classList.contains(t),removeClass:t=>this.root_.classList.remove(t),setStyle:(t,e,i)=>t.style[e]=i})}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ut={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Kt extends l{static get cssClasses(){return Ut}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setStyle:()=>{},registerEventHandler:()=>{},deregisterEventHandler:()=>{}}}constructor(t={}){super(Object.assign(Kt.defaultAdapter,t)),this.transitionEndHandler_=(t=>this.handleTransitionEnd(t))}init(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)}destroy(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)}activate(){this.adapter_.removeClass(Ut.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(Ut.LINE_RIPPLE_ACTIVE)}setRippleCenter(t){this.adapter_.setStyle("transform-origin",`${t}px center`)}deactivate(){this.adapter_.addClass(Ut.LINE_RIPPLE_DEACTIVATING)}handleTransitionEnd(t){const e=this.adapter_.hasClass(Ut.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(Ut.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(Ut.LINE_RIPPLE_DEACTIVATING))}}var Gt=Kt;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class zt extends d{static attachTo(t){return new zt(t)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}setRippleCenter(t){this.foundation_.setRippleCenter(t)}getDefaultFoundation(){return new Gt(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setStyle:(t,e)=>this.root_.style[t]=e,registerEventHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterEventHandler:(t,e)=>this.root_.removeEventListener(t,e)}))}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Xt={ROOT:"mdc-menu",MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group"},$t={SELECTED_EVENT:"MDCMenu:selected",ARIA_SELECTED_ATTR:"aria-selected",LIST_SELECTOR:".mdc-list",CHECKBOX_SELECTOR:'input[type="checkbox"]'};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Yt={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Zt={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'},Jt={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},Qt={BOTTOM:1,CENTER:2,RIGHT:4,FLIP_RTL:8},te={TOP_LEFT:0,TOP_RIGHT:Qt.RIGHT,BOTTOM_LEFT:Qt.BOTTOM,BOTTOM_RIGHT:Qt.BOTTOM|Qt.RIGHT,TOP_START:Qt.FLIP_RTL,TOP_END:Qt.FLIP_RTL|Qt.RIGHT,BOTTOM_START:Qt.BOTTOM|Qt.FLIP_RTL,BOTTOM_END:Qt.BOTTOM|Qt.RIGHT|Qt.FLIP_RTL};class ee extends l{static get cssClasses(){return Yt}static get strings(){return Zt}static get numbers(){return Jt}static get Corner(){return te}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>!1,hasAnchor:()=>!1,notifyClose:()=>{},notifyOpen:()=>{},isElementInContainer:()=>!1,isRtl:()=>!1,setTransformOrigin:()=>{},isFocused:()=>!1,saveFocus:()=>{},restoreFocus:()=>{},isFirstElementFocused:()=>{},isLastElementFocused:()=>{},focusFirstElement:()=>{},focusLastElement:()=>{},getInnerDimensions:()=>({}),getAnchorDimensions:()=>({}),getWindowDimensions:()=>({}),getBodyDimensions:()=>({}),getWindowScroll:()=>({}),setPosition:()=>{},setMaxHeight:()=>{}}}constructor(t){super(Object.assign(ee.defaultAdapter,t)),this.isOpen_=!1,this.openAnimationEndTimerId_=0,this.closeAnimationEndTimerId_=0,this.animationRequestId_=0,this.dimensions_,this.anchorCorner_=te.TOP_START,this.anchorMargin_={top:0,right:0,bottom:0,left:0},this.measures_=null,this.quickOpen_=!1,this.hoistedElement_=!1,this.isFixedPosition_=!1,this.position_={x:0,y:0}}init(){const{ROOT:t,OPEN:e}=ee.cssClasses;if(!this.adapter_.hasClass(t))throw new Error(`${t} class required in root element.`);this.adapter_.hasClass(e)&&(this.isOpen_=!0)}destroy(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)}setAnchorCorner(t){this.anchorCorner_=t}setAnchorMargin(t){this.anchorMargin_.top="number"==typeof t.top?t.top:0,this.anchorMargin_.right="number"==typeof t.right?t.right:0,this.anchorMargin_.bottom="number"==typeof t.bottom?t.bottom:0,this.anchorMargin_.left="number"==typeof t.left?t.left:0}setIsHoisted(t){this.hoistedElement_=t}setFixedPosition(t){this.isFixedPosition_=t}setAbsolutePosition(t,e){this.position_.x=this.typeCheckisFinite_(t)?t:0,this.position_.y=this.typeCheckisFinite_(e)?e:0}setQuickOpen(t){this.quickOpen_=t}handleBodyClick(t){const e=t.target;this.adapter_.isElementInContainer(e)||this.close()}handleKeydown(t){const{keyCode:e,key:i,shiftKey:n}=t,s="Tab"===i||9===e;"Escape"===i||27===e?this.close():s&&(this.adapter_.isLastElementFocused()&&!n?(this.adapter_.focusFirstElement(),t.preventDefault()):this.adapter_.isFirstElementFocused()&&n&&(this.adapter_.focusLastElement(),t.preventDefault()))}getAutoLayoutMeasurements_(){let t=this.adapter_.getAnchorDimensions();const e=this.adapter_.getWindowDimensions(),i=this.adapter_.getBodyDimensions(),n=this.adapter_.getWindowScroll();return t||(t={x:this.position_.x,y:this.position_.y,top:this.position_.y,bottom:this.position_.y,left:this.position_.x,right:this.position_.x,height:0,width:0}),{viewport:e,bodyDimensions:i,windowScroll:n,viewportDistance:{top:t.top,right:e.width-t.right,left:t.left,bottom:e.height-t.bottom},anchorHeight:t.height,anchorWidth:t.width,surfaceHeight:this.dimensions_.height,surfaceWidth:this.dimensions_.width}}getOriginCorner_(){let t=te.TOP_LEFT;const{viewportDistance:e,anchorHeight:i,anchorWidth:n,surfaceHeight:s,surfaceWidth:r}=this.measures_,a=Boolean(this.anchorCorner_&Qt.BOTTOM),o=a?e.top+i+this.anchorMargin_.bottom:e.top+this.anchorMargin_.top,l=s-(a?e.bottom-this.anchorMargin_.bottom:e.bottom+i-this.anchorMargin_.top);l>0&&s-o<l&&(t|=Qt.BOTTOM);const c=this.adapter_.isRtl(),d=Boolean(this.anchorCorner_&Qt.FLIP_RTL),h=Boolean(this.anchorCorner_&Qt.RIGHT),u=h&&!c||!h&&d&&c,p=r-(u?e.left+n+this.anchorMargin_.right:e.left+this.anchorMargin_.left),_=r-(u?e.right-this.anchorMargin_.right:e.right+n-this.anchorMargin_.left);return(p<0&&u&&c||h&&!u&&p<0||_>0&&p<_)&&(t|=Qt.RIGHT),t}getHorizontalOriginOffset_(t){const{anchorWidth:e}=this.measures_,i=Boolean(t&Qt.RIGHT),n=Boolean(this.anchorCorner_&Qt.RIGHT);if(i){const t=n?e-this.anchorMargin_.left:this.anchorMargin_.right;return this.hoistedElement_||this.isFixedPosition_?t-(this.measures_.viewport.width-this.measures_.bodyDimensions.width):t}return n?e-this.anchorMargin_.right:this.anchorMargin_.left}getVerticalOriginOffset_(t){const{anchorHeight:e}=this.measures_,i=Boolean(t&Qt.BOTTOM),n=Boolean(this.anchorCorner_&Qt.BOTTOM);let s=0;return s=i?n?e-this.anchorMargin_.top:-this.anchorMargin_.bottom:n?e+this.anchorMargin_.bottom:this.anchorMargin_.top}getMenuSurfaceMaxHeight_(t){let e=0;const{viewportDistance:i}=this.measures_,n=Boolean(t&Qt.BOTTOM),{MARGIN_TO_EDGE:s}=ee.numbers;return n?(e=i.top+this.anchorMargin_.top-s,this.anchorCorner_&Qt.BOTTOM||(e+=this.measures_.anchorHeight)):(e=i.bottom-this.anchorMargin_.bottom+this.measures_.anchorHeight-s,this.anchorCorner_&Qt.BOTTOM&&(e-=this.measures_.anchorHeight)),e}autoPosition_(){this.measures_=this.getAutoLayoutMeasurements_();const t=this.getOriginCorner_(),e=this.getMenuSurfaceMaxHeight_(t),i=t&Qt.BOTTOM?"bottom":"top";let n=t&Qt.RIGHT?"right":"left";const s=this.getHorizontalOriginOffset_(t),r=this.getVerticalOriginOffset_(t);let a={[n]:s||"0",[i]:r||"0"};const{anchorWidth:o,surfaceWidth:l}=this.measures_;o/l>Jt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(n="center"),(this.hoistedElement_||this.isFixedPosition_)&&(a=this.adjustPositionForHoistedElement_(a));for(const t in a)a.hasOwnProperty(t)&&"0"!==a[t]&&(a[t]=`${parseInt(a[t],10)}px`);this.adapter_.setTransformOrigin(`${n} ${i}`),this.adapter_.setPosition(a),this.adapter_.setMaxHeight(e?e+"px":""),this.measures_=null}adjustPositionForHoistedElement_(t){const{bodyDimensions:e,windowScroll:i,viewport:n,viewportDistance:s}=this.measures_;for(const r in t)t.hasOwnProperty(r)&&(s.hasOwnProperty(r)&&(t[r]=parseInt(t[r],10)+s[r]),this.isFixedPosition_||"top"!==r?this.isFixedPosition_||"bottom"!==r||(t[r]=e.height-(n.height+i.y)+parseInt(t[r],10)):t[r]=parseInt(t[r],10)+i.y);return t}open(){this.adapter_.saveFocus(),this.quickOpen_||this.adapter_.addClass(ee.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame(()=>{this.adapter_.addClass(ee.cssClasses.OPEN),this.dimensions_=this.adapter_.getInnerDimensions(),this.autoPosition_(),this.quickOpen_?this.adapter_.notifyOpen():this.openAnimationEndTimerId_=setTimeout(()=>{this.openAnimationEndTimerId_=0,this.adapter_.removeClass(ee.cssClasses.ANIMATING_OPEN),this.adapter_.notifyOpen()},Jt.TRANSITION_OPEN_DURATION)}),this.isOpen_=!0}close(){this.quickOpen_||this.adapter_.addClass(ee.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(()=>{this.adapter_.removeClass(ee.cssClasses.OPEN),this.quickOpen_?this.adapter_.notifyClose():this.closeAnimationEndTimerId_=setTimeout(()=>{this.closeAnimationEndTimerId_=0,this.adapter_.removeClass(ee.cssClasses.ANIMATING_CLOSED),this.adapter_.notifyClose()},Jt.TRANSITION_CLOSE_DURATION)}),this.isOpen_=!1,this.maybeRestoreFocus_()}maybeRestoreFocus_(){(this.adapter_.isFocused()||this.adapter_.isElementInContainer(document.activeElement))&&this.adapter_.restoreFocus()}isOpen(){return this.isOpen_}typeCheckisFinite_(t){return"number"==typeof t&&isFinite(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const ie=["input","button","textarea","select"];class ne extends l{static get cssClasses(){return Xt}static get strings(){return $t}static get defaultAdapter(){return{addClassToElementAtIndex:()=>{},removeClassFromElementAtIndex:()=>{},addAttributeToElementAtIndex:()=>{},removeAttributeFromElementAtIndex:()=>{},elementContainsClass:()=>{},closeSurface:()=>{},getElementIndex:()=>{},getParentElement:()=>{},getSelectedElementIndex:()=>{},notifySelected:()=>{},getCheckboxAtIndex:()=>{},toggleCheckbox:()=>{}}}constructor(t){super(Object.assign(ne.defaultAdapter,t)),this.closeAnimationEndTimerId_=0}destroy(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()}handleKeydown(t){const{key:e,keyCode:i}=t,n="Tab"===e||9===i;"Space"===e||32===i||("Enter"===e||13===i)?this.handleAction_(t):n&&this.adapter_.closeSurface()}handleClick(t){this.handleAction_(t)}handleAction_(t){const e=this.getListItem_(t.target);e&&(this.handleSelection_(e),this.preventDefaultEvent_(t))}handleSelection_(t){const e=this.adapter_.getElementIndex(t);if(e<0)return;this.adapter_.notifySelected({index:e}),this.adapter_.closeSurface();const i=this.adapter_.getCheckboxAtIndex(e);i&&this.adapter_.toggleCheckbox(i),this.closeAnimationEndTimerId_=setTimeout(()=>{const i=this.getSelectionGroup_(t);null!==i&&this.handleSelectionGroup_(i,e)},ee.numbers.TRANSITION_CLOSE_DURATION)}handleSelectionGroup_(t,e){const i=this.adapter_.getSelectedElementIndex(t);i>=0&&(this.adapter_.removeAttributeFromElementAtIndex(i,$t.ARIA_SELECTED_ATTR),this.adapter_.removeClassFromElementAtIndex(i,Xt.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(e,Xt.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(e,$t.ARIA_SELECTED_ATTR,"true")}getSelectionGroup_(t){let e=this.adapter_.getParentElement(t),i=this.adapter_.elementContainsClass(e,Xt.MENU_SELECTION_GROUP);for(;!i&&!this.adapter_.elementContainsClass(e,ht.cssClasses.ROOT);)e=this.adapter_.getParentElement(e),i=this.adapter_.elementContainsClass(e,Xt.MENU_SELECTION_GROUP);return i?e:null}getListItem_(t){let e=this.adapter_.elementContainsClass(t,ht.cssClasses.LIST_ITEM_CLASS);for(;!e;){if(!(t=this.adapter_.getParentElement(t)))return null;e=this.adapter_.elementContainsClass(t,ht.cssClasses.LIST_ITEM_CLASS)}return t}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===ie.indexOf(e)&&t.preventDefault()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let se;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class re extends d{constructor(...t){super(...t),this.previousFocus_,this.anchorElement,this.firstFocusableElement_,this.lastFocusableElement_,this.handleKeydown_,this.handleBodyClick_,this.registerBodyClickListener_,this.deregisterBodyClickListener_}static attachTo(t){return new re(t)}initialSyncWithDOM(){this.root_.parentElement&&this.root_.parentElement.classList.contains(Yt.ANCHOR)&&(this.anchorElement=this.root_.parentElement),this.root_.classList.contains(Yt.FIXED)&&this.setFixedPosition(!0),this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleBodyClick_=(t=>this.foundation_.handleBodyClick(t)),this.registerBodyClickListener_=(()=>document.body.addEventListener("click",this.handleBodyClick_)),this.deregisterBodyClickListener_=(()=>document.body.removeEventListener("click",this.handleBodyClick_)),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener(Zt.OPENED_EVENT,this.registerBodyClickListener_),this.root_.addEventListener(Zt.CLOSED_EVENT,this.deregisterBodyClickListener_)}destroy(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener(Zt.OPENED_EVENT,this.registerBodyClickListener_),this.root_.removeEventListener(Zt.CLOSED_EVENT,this.deregisterBodyClickListener_),super.destroy()}get open(){return this.foundation_.isOpen()}set open(t){if(t){const t=this.root_.querySelectorAll(Zt.FOCUSABLE_ELEMENTS);this.firstFocusableElement_=t.length>0?t[0]:null,this.lastFocusableElement_=t.length>0?t[t.length-1]:null,this.foundation_.open()}else this.foundation_.close()}hoistMenuToBody(){document.body.appendChild(this.root_.parentElement.removeChild(this.root_)),this.setIsHoisted(!0)}setIsHoisted(t){this.foundation_.setIsHoisted(t)}setMenuSurfaceAnchorElement(t){this.anchorElement=t}setFixedPosition(t){t?this.root_.classList.add(Yt.FIXED):this.root_.classList.remove(Yt.FIXED),this.foundation_.setFixedPosition(t)}setAbsolutePosition(t,e){this.foundation_.setAbsolutePosition(t,e),this.setIsHoisted(!0)}setAnchorCorner(t){this.foundation_.setAnchorCorner(t)}setAnchorMargin(t){this.foundation_.setAnchorMargin(t)}set quickOpen(t){this.foundation_.setQuickOpen(t)}getDefaultFoundation(){return new ee(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),hasAnchor:()=>!!this.anchorElement,notifyClose:()=>this.emit(ee.strings.CLOSED_EVENT,{}),notifyOpen:()=>this.emit(ee.strings.OPENED_EVENT,{}),isElementInContainer:t=>this.root_===t||this.root_.contains(t),isRtl:()=>"rtl"===getComputedStyle(this.root_).getPropertyValue("direction"),setTransformOrigin:t=>{this.root_.style[`${function(t,e=!1){if(void 0===se||e){const e="transform"in t.document.createElement("div").style?"transform":"webkitTransform";se=e}return se}(window)}-origin`]=t}},this.getFocusAdapterMethods_(),this.getDimensionAdapterMethods_()))}getFocusAdapterMethods_(){return{isFocused:()=>document.activeElement===this.root_,saveFocus:()=>{this.previousFocus_=document.activeElement},restoreFocus:()=>{this.root_.contains(document.activeElement)&&this.previousFocus_&&this.previousFocus_.focus&&this.previousFocus_.focus()},isFirstElementFocused:()=>this.firstFocusableElement_&&this.firstFocusableElement_===document.activeElement,isLastElementFocused:()=>this.lastFocusableElement_&&this.lastFocusableElement_===document.activeElement,focusFirstElement:()=>this.firstFocusableElement_&&this.firstFocusableElement_.focus&&this.firstFocusableElement_.focus(),focusLastElement:()=>this.lastFocusableElement_&&this.lastFocusableElement_.focus&&this.lastFocusableElement_.focus()}}getDimensionAdapterMethods_(){return{getInnerDimensions:()=>({width:this.root_.offsetWidth,height:this.root_.offsetHeight}),getAnchorDimensions:()=>this.anchorElement&&this.anchorElement.getBoundingClientRect(),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.root_.style.left="left"in t?t.left:null,this.root_.style.right="right"in t?t.right:null,this.root_.style.top="top"in t?t.top:null,this.root_.style.bottom="bottom"in t?t.bottom:null},setMaxHeight:t=>{this.root_.style.maxHeight=t}}}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ae extends d{constructor(...t){super(...t),this.menuSurface_,this.list_,this.handleKeydown_,this.handleClick_,this.afterOpenedCallback_}static attachTo(t){return new ae(t)}initialize(t=(t=>new re(t)),e=(t=>new ut(t))){this.menuSurface_=t(this.root_);const i=this.root_.querySelector($t.LIST_SELECTOR);i&&(this.list_=e(i),this.list_.wrapFocus=!0)}initialSyncWithDOM(){this.afterOpenedCallback_=(()=>this.handleAfterOpened_()),this.handleKeydown_=(t=>this.foundation_.handleKeydown(t)),this.handleClick_=(t=>this.foundation_.handleClick(t)),this.menuSurface_.listen(ee.strings.OPENED_EVENT,this.afterOpenedCallback_),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_)}destroy(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(ee.strings.OPENED_EVENT,this.afterOpenedCallback_),this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),super.destroy()}get open(){return this.menuSurface_.open}set open(t){this.menuSurface_.open=t}setAnchorCorner(t){this.menuSurface_.setAnchorCorner(t)}setAnchorMargin(t){this.menuSurface_.setAnchorMargin(t)}get items(){return this.list_.listElements}getOptionByIndex(t){return t<this.items.length?this.items[t]:null}set quickOpen(t){this.menuSurface_.quickOpen=t}setFixedPosition(t){this.menuSurface_.setFixedPosition(t)}hoistMenuToBody(){this.menuSurface_.hoistMenuToBody()}setIsHoisted(t){this.menuSurface_.setIsHoisted(t)}setAbsolutePosition(t,e){this.menuSurface_.setAbsolutePosition(t,e)}setAnchorElement(t){this.menuSurface_.anchorElement=t}handleAfterOpened_(){const t=this.items;t.length>0&&t[0].focus()}getDefaultFoundation(){return new ne({addClassToElementAtIndex:(t,e)=>{this.items[t].classList.add(e)},removeClassFromElementAtIndex:(t,e)=>{this.items[t].classList.remove(e)},addAttributeToElementAtIndex:(t,e,i)=>{this.items[t].setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{this.items[t].removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>this.open=!1,getElementIndex:t=>this.items.indexOf(t),getParentElement:t=>t.parentElement,getSelectedElementIndex:t=>this.items.indexOf(t.querySelector(`.${Xt.MENU_SELECTED_LIST_ITEM}`)),notifySelected:t=>this.emit($t.SELECTED_EVENT,{index:t.index,item:this.items[t.index]}),getCheckboxAtIndex:t=>{return this.items[t].querySelector($t.CHECKBOX_SELECTOR)},toggleCheckbox:t=>{t.checked=!t.checked;const e=document.createEvent("Event");e.initEvent("change",!1,!0),t.dispatchEvent(e)}})}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const oe={PATH_SELECTOR:".mdc-notched-outline__path",IDLE_OUTLINE_SELECTOR:".mdc-notched-outline__idle"},le={OUTLINE_NOTCHED:"mdc-notched-outline--notched"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class ce extends l{static get strings(){return oe}static get cssClasses(){return le}static get defaultAdapter(){return{getWidth:()=>{},getHeight:()=>{},addClass:()=>{},removeClass:()=>{},setOutlinePathAttr:()=>{},getIdleOutlineStyleValue:()=>{}}}constructor(t){super(Object.assign(ce.defaultAdapter,t))}notch(t,e=!1){const{OUTLINE_NOTCHED:i}=ce.cssClasses;this.adapter_.addClass(i),this.updateSvgPath_(t,e)}closeNotch(){const{OUTLINE_NOTCHED:t}=ce.cssClasses;this.adapter_.removeClass(t)}updateSvgPath_(t,e){const i=this.adapter_.getIdleOutlineStyleValue("border-radius")||this.adapter_.getIdleOutlineStyleValue("border-top-left-radius"),n=parseFloat(i),s=this.adapter_.getWidth(),r=this.adapter_.getHeight(),a=n+1.2,o=Math.abs(12-a);let l=0;t>0&&(l=t+8);const c="a"+n+","+n+" 0 0 1 "+n+","+n+"v"+(r-2*a)+"a"+n+","+n+" 0 0 1 "+-n+","+n+"h"+(2*a-s)+"a"+n+","+n+" 0 0 1 "+-n+","+-n+"v"+(2*a-r)+"a"+n+","+n+" 0 0 1 "+n+","+-n;let d;d=e?"M"+(s-a-o)+",1h"+o+c+"h"+(s-2*a-l-o):"M"+(a+o+l)+",1h"+(s-2*a-l-o)+c+"h"+o,this.adapter_.setOutlinePathAttr(d)}}var de=ce;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class he extends d{static attachTo(t){return new he(t)}notch(t,e){this.foundation_.notch(t,e)}closeNotch(){this.foundation_.closeNotch()}getDefaultFoundation(){return new de({getWidth:()=>this.root_.offsetWidth,getHeight:()=>this.root_.offsetHeight,addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setOutlinePathAttr:t=>{this.root_.querySelector(oe.PATH_SELECTOR).setAttribute("d",t)},getIdleOutlineStyleValue:t=>{const e=this.root_.parentNode.querySelector(oe.IDLE_OUTLINE_SELECTOR);return window.getComputedStyle(e).getPropertyValue(t)}})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ue={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},pe={ROOT:"mdc-radio",DISABLED:"mdc-radio--disabled"};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class _e extends l{static get cssClasses(){return pe}static get strings(){return ue}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},getNativeControl:()=>{}}}isChecked(){return this.getNativeControl_().checked}setChecked(t){this.getNativeControl_().checked=t}isDisabled(){return this.getNativeControl_().disabled}setDisabled(t){const{DISABLED:e}=_e.cssClasses;this.getNativeControl_().disabled=t,t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}getValue(){return this.getNativeControl_().value}setValue(t){this.getNativeControl_().value=t}getNativeControl_(){return this.adapter_.getNativeControl()||{checked:!1,disabled:!1,value:null}}}var fe=_e;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ge extends d{static attachTo(t){return new ge(t)}get checked(){return this.foundation_.isChecked()}set checked(t){this.foundation_.setChecked(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get ripple(){return this.ripple_}constructor(...t){super(...t),this.ripple_=this.initRipple_()}initRipple_(){const t=Object.assign(x.createAdapter(this),{isUnbounded:()=>!0,isSurfaceActive:()=>!1,registerInteractionHandler:(t,e)=>this.nativeControl_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.nativeControl_.removeEventListener(t,e)}),e=new O(t);return new x(this.root_,e)}get nativeControl_(){const{NATIVE_CONTROL_SELECTOR:t}=fe.strings;return this.root_.querySelector(t)}destroy(){this.ripple_.destroy(),super.destroy()}getDefaultFoundation(){return new fe({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getNativeControl:()=>this.root_.querySelector(fe.strings.NATIVE_CONTROL_SELECTOR)})}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const me={BOX:"mdc-select--box",DISABLED:"mdc-select--disabled",ROOT:"mdc-select",OUTLINED:"mdc-select--outlined"},Ee={CHANGE_EVENT:"MDCSelect:change",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",LABEL_SELECTOR:".mdc-floating-label",NATIVE_CONTROL_SELECTOR:".mdc-select__native-control",OUTLINE_SELECTOR:".mdc-notched-outline"},ve={LABEL_SCALE:.75};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Ce extends l{static get cssClasses(){return me}static get numbers(){return ve}static get strings(){return Ee}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>!1,activateBottomLine:()=>{},deactivateBottomLine:()=>{},getValue:()=>{},isRtl:()=>!1,hasLabel:()=>!1,floatLabel:()=>{},getLabelWidth:()=>{},hasOutline:()=>!1,notchOutline:()=>{},closeOutline:()=>{}}}constructor(t){super(Object.assign(Ce.defaultAdapter,t))}updateDisabledStyle(t){const{DISABLED:e}=Ce.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleChange(){const t=this.adapter_.getValue().length>0;this.adapter_.floatLabel(t),this.notchOutline(t)}handleFocus(){this.adapter_.floatLabel(!0),this.notchOutline(!0),this.adapter_.activateBottomLine()}handleBlur(){this.handleChange(),this.adapter_.deactivateBottomLine()}notchOutline(t){if(this.adapter_.hasOutline())if(t){const t=ve.LABEL_SCALE,e=this.adapter_.getLabelWidth()*t,i=this.adapter_.isRtl();this.adapter_.notchOutline(e,i)}else this.adapter_.closeOutline()}}var Te=Ce;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ye extends d{constructor(...t){super(...t),this.nativeControl_,this.ripple,this.lineRipple_,this.label_,this.outline_,this.handleChange_,this.handleFocus_,this.handleBlur_,this.handleClick_}static attachTo(t){return new ye(t)}get value(){return this.nativeControl_.value}set value(t){this.nativeControl_.value=t,this.foundation_.handleChange()}get selectedIndex(){return this.nativeControl_.selectedIndex}set selectedIndex(t){this.nativeControl_.selectedIndex=t,this.foundation_.handleChange()}get disabled(){return this.nativeControl_.disabled}set disabled(t){this.nativeControl_.disabled=t,this.foundation_.updateDisabledStyle(t)}layout(){const t=this.nativeControl_.value.length>0;this.foundation_.notchOutline(t)}initialize(t=(t=>new vt(t)),e=(t=>new zt(t)),i=(t=>new he(t))){this.nativeControl_=this.root_.querySelector(Ee.NATIVE_CONTROL_SELECTOR);const n=this.root_.querySelector(Ee.LABEL_SELECTOR);n&&(this.label_=t(n));const s=this.root_.querySelector(Ee.LINE_RIPPLE_SELECTOR);s&&(this.lineRipple_=e(s));const r=this.root_.querySelector(Ee.OUTLINE_SELECTOR);r&&(this.outline_=i(r)),this.root_.classList.contains(me.BOX)&&(this.ripple=this.initRipple_())}initRipple_(){const t=Object.assign(x.createAdapter(this),{registerInteractionHandler:(t,e)=>this.nativeControl_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.nativeControl_.removeEventListener(t,e)}),e=new O(t);return new x(this.root_,e)}initialSyncWithDOM(){this.handleChange_=(()=>this.foundation_.handleChange()),this.handleFocus_=(()=>this.foundation_.handleFocus()),this.handleBlur_=(()=>this.foundation_.handleBlur()),this.handleClick_=(t=>this.setTransformOrigin_(t)),this.nativeControl_.addEventListener("change",this.handleChange_),this.nativeControl_.addEventListener("focus",this.handleFocus_),this.nativeControl_.addEventListener("blur",this.handleBlur_),this.lineRipple_&&["mousedown","touchstart"].forEach(t=>{this.nativeControl_.addEventListener(t,this.handleClick_)}),this.foundation_.handleChange(),this.nativeControl_.disabled&&(this.disabled=!0)}destroy(){this.nativeControl_.removeEventListener("change",this.handleChange_),this.nativeControl_.removeEventListener("focus",this.handleFocus_),this.nativeControl_.removeEventListener("blur",this.handleBlur_),["mousedown","touchstart"].forEach(t=>{this.nativeControl_.removeEventListener(t,this.handleClick_)}),this.ripple&&this.ripple.destroy(),this.outline_&&this.outline_.destroy(),super.destroy()}getDefaultFoundation(){return new Te(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),getValue:()=>this.nativeControl_.value,isRtl:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction"),activateBottomLine:()=>{this.lineRipple_&&this.lineRipple_.activate()},deactivateBottomLine:()=>{this.lineRipple_&&this.lineRipple_.deactivate()}},this.getOutlineAdapterMethods_(),this.getLabelAdapterMethods_()))}getOutlineAdapterMethods_(){return{hasOutline:()=>!!this.outline_,notchOutline:(t,e)=>{this.outline_&&this.outline_.notch(t,e)},closeOutline:()=>{this.outline_&&this.outline_.closeNotch()}}}getLabelAdapterMethods_(){return{hasLabel:()=>!!this.label_,floatLabel:t=>{this.label_&&this.label_.float(t)},getLabelWidth:()=>this.label_?this.label_.getWidth():0}}setTransformOrigin_(t){const e=t.target.getBoundingClientRect(),i=t.clientX-e.left;this.lineRipple_.setRippleCenter(i)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Ae={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",HAS_TRACK_MARKER:"mdc-slider--display-markers"},Ie={TRACK_SELECTOR:".mdc-slider__track",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",LAST_TRACK_MARKER_SELECTOR:".mdc-slider__track-marker:last-child",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUENOW:"aria-valuenow",ARIA_DISABLED:"aria-disabled",STEP_DATA_ATTR:"data-step",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input"},be={PAGE_FACTOR:4};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Se={ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",HOME:"Home",END:"End",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},Le={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"pointermove"},Oe=["mousedown","pointerdown","touchstart"],xe=["mouseup","pointerup","touchend"];class Re extends l{static get cssClasses(){return Ae}static get strings(){return Ie}static get numbers(){return be}static get defaultAdapter(){return{hasClass:()=>!1,addClass:()=>{},removeClass:()=>{},getAttribute:()=>null,setAttribute:()=>{},removeAttribute:()=>{},computeBoundingRect:()=>({top:0,right:0,bottom:0,left:0,width:0,height:0}),getTabIndex:()=>0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerThumbContainerInteractionHandler:()=>{},deregisterThumbContainerInteractionHandler:()=>{},registerBodyInteractionHandler:()=>{},deregisterBodyInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},notifyInput:()=>{},notifyChange:()=>{},setThumbContainerStyleProperty:()=>{},setTrackStyleProperty:()=>{},setMarkerValue:()=>{},appendTrackMarkers:()=>{},removeTrackMarkers:()=>{},setLastTrackMarkersStyleProperty:()=>{},isRTL:()=>!1}}constructor(t){super(Object.assign(Re.defaultAdapter,t)),this.rect_=null,this.savedTabIndex_=NaN,this.active_=!1,this.inTransit_=!1,this.isDiscrete_=!1,this.hasTrackMarker_=!1,this.handlingThumbTargetEvt_=!1,this.min_=0,this.max_=100,this.step_=0,this.value_=0,this.disabled_=!1,this.preventFocusState_=!1,this.updateUIFrame_=0,this.thumbContainerPointerHandler_=(()=>{this.handlingThumbTargetEvt_=!0}),this.interactionStartHandler_=(t=>this.handleDown_(t)),this.keydownHandler_=(t=>this.handleKeydown_(t)),this.focusHandler_=(()=>this.handleFocus_()),this.blurHandler_=(()=>this.handleBlur_()),this.resizeHandler_=(()=>this.layout())}init(){this.isDiscrete_=this.adapter_.hasClass(Ae.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(Ae.HAS_TRACK_MARKER),Oe.forEach(t=>this.adapter_.registerInteractionHandler(t,this.interactionStartHandler_)),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),Oe.forEach(t=>{this.adapter_.registerThumbContainerInteractionHandler(t,this.thumbContainerPointerHandler_)}),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0==this.getStep()&&(this.step_=1)}destroy(){Oe.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.interactionStartHandler_)}),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),Oe.forEach(t=>{this.adapter_.deregisterThumbContainerInteractionHandler(t,this.thumbContainerPointerHandler_)}),this.adapter_.deregisterResizeHandler(this.resizeHandler_)}setupTrackMarker(){if(this.isDiscrete_&&this.hasTrackMarker_&&0!=this.getStep()){const t=this.getMin(),e=this.getMax(),i=this.getStep();let n=(e-t)/i;const s=Math.ceil(n)!==n;if(s&&(n=Math.ceil(n)),this.adapter_.removeTrackMarkers(),this.adapter_.appendTrackMarkers(n),s){const t=(e-n*i)/i+1,s=g(window,"flex");this.adapter_.setLastTrackMarkersStyleProperty(s,String(t))}}}layout(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()}getValue(){return this.value_}setValue(t){this.setValue_(t,!1)}getMax(){return this.max_}setMax(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Ie.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()}getMin(){return this.min_}setMin(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(Ie.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()}getStep(){return this.step_}setStep(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()}isDisabled(){return this.disabled_}setDisabled(t){this.disabled_=t,this.toggleClass_(Ae.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(Ie.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(Ie.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))}handleDown_(t){if(this.disabled_)return;this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);const e=t=>{this.handleMove_(t)},i=()=>{this.handleUp_(),this.adapter_.deregisterBodyInteractionHandler(Le[t.type],e),xe.forEach(t=>this.adapter_.deregisterBodyInteractionHandler(t,i))};this.adapter_.registerBodyInteractionHandler(Le[t.type],e),xe.forEach(t=>this.adapter_.registerBodyInteractionHandler(t,i)),this.setValueFromEvt_(t)}handleMove_(t){t.preventDefault(),this.setValueFromEvt_(t)}handleUp_(){this.setActive_(!1),this.adapter_.notifyChange()}getPageX_(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].pageX:t.pageX}setValueFromEvt_(t){const e=this.getPageX_(t),i=this.computeValueFromPageX_(e);this.setValue_(i,!0)}computeValueFromPageX_(t){const{max_:e,min_:i}=this;let n=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(n=1-n),i+n*(e-i)}handleKeydown_(t){const e=this.getKeyId_(t),i=this.getValueForKeyId_(e);isNaN(i)||(t.preventDefault(),this.adapter_.addClass(Ae.FOCUS),this.setValue_(i,!0),this.adapter_.notifyChange())}getKeyId_(t){return t.key===Se.ARROW_LEFT||37===t.keyCode?Se.ARROW_LEFT:t.key===Se.ARROW_RIGHT||39===t.keyCode?Se.ARROW_RIGHT:t.key===Se.ARROW_UP||38===t.keyCode?Se.ARROW_UP:t.key===Se.ARROW_DOWN||40===t.keyCode?Se.ARROW_DOWN:t.key===Se.HOME||36===t.keyCode?Se.HOME:t.key===Se.END||35===t.keyCode?Se.END:t.key===Se.PAGE_UP||33===t.keyCode?Se.PAGE_UP:t.key===Se.PAGE_DOWN||34===t.keyCode?Se.PAGE_DOWN:""}getValueForKeyId_(t){const{max_:e,min_:i,step_:n}=this;let s=n||(e-i)/100;switch(this.adapter_.isRTL()&&(t===Se.ARROW_LEFT||t===Se.ARROW_RIGHT)&&(s=-s),t){case Se.ARROW_LEFT:case Se.ARROW_DOWN:return this.value_-s;case Se.ARROW_RIGHT:case Se.ARROW_UP:return this.value_+s;case Se.HOME:return this.min_;case Se.END:return this.max_;case Se.PAGE_UP:return this.value_+s*be.PAGE_FACTOR;case Se.PAGE_DOWN:return this.value_-s*be.PAGE_FACTOR;default:return NaN}}handleFocus_(){this.preventFocusState_||this.adapter_.addClass(Ae.FOCUS)}handleBlur_(){this.preventFocusState_=!1,this.adapter_.removeClass(Ae.FOCUS)}setValue_(t,e,i=!1){if(t===this.value_&&!i)return;const{min_:n,max_:s}=this,r=t===n||t===s;this.step_&&!r&&(t=this.quantize_(t)),t<n?t=n:t>s&&(t=s),this.value_=t,this.adapter_.setAttribute(Ie.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}quantize_(t){return Math.round(t/this.step_)*this.step_}updateUIForCurrentValue_(){const{max_:t,min_:e,value_:i}=this,n=(i-e)/(t-e);let s=n*this.rect_.width;this.adapter_.isRTL()&&(s=this.rect_.width-s);const r=g(window,"transform"),a=f(window,"transitionend");if(this.inTransit_){const t=()=>{this.setInTransit_(!1),this.adapter_.deregisterThumbContainerInteractionHandler(a,t)};this.adapter_.registerThumbContainerInteractionHandler(a,t)}this.updateUIFrame_=requestAnimationFrame(()=>{this.adapter_.setThumbContainerStyleProperty(r,`translateX(${s}px) translateX(-50%)`),this.adapter_.setTrackStyleProperty(r,`scaleX(${n})`)})}setActive_(t){this.active_=t,this.toggleClass_(Ae.ACTIVE,this.active_)}setInTransit_(t){this.inTransit_=t,this.toggleClass_(Ae.IN_TRANSIT,this.inTransit_)}toggleClass_(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)}}var we=Re;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ne extends d{static attachTo(t){return new Ne(t)}constructor(...t){super(...t),this.thumbContainer_,this.track_,this.pinValueMarker_,this.trackMarkerContainer_}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get min(){return this.foundation_.getMin()}set min(t){this.foundation_.setMin(t)}get max(){return this.foundation_.getMax()}set max(t){this.foundation_.setMax(t)}get step(){return this.foundation_.getStep()}set step(t){this.foundation_.setStep(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}initialize(){this.thumbContainer_=this.root_.querySelector(Ie.THUMB_CONTAINER_SELECTOR),this.track_=this.root_.querySelector(Ie.TRACK_SELECTOR),this.pinValueMarker_=this.root_.querySelector(Ie.PIN_VALUE_MARKER_SELECTOR),this.trackMarkerContainer_=this.root_.querySelector(Ie.TRACK_MARKER_CONTAINER_SELECTOR)}getDefaultFoundation(){return new we({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getAttribute:t=>this.root_.getAttribute(t),setAttribute:(t,e)=>this.root_.setAttribute(t,e),removeAttribute:t=>this.root_.removeAttribute(t),computeBoundingRect:()=>this.root_.getBoundingClientRect(),getTabIndex:()=>this.root_.tabIndex,registerInteractionHandler:(t,e)=>{this.root_.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.root_.removeEventListener(t,e)},registerThumbContainerInteractionHandler:(t,e)=>{this.thumbContainer_.addEventListener(t,e)},deregisterThumbContainerInteractionHandler:(t,e)=>{this.thumbContainer_.removeEventListener(t,e)},registerBodyInteractionHandler:(t,e)=>{document.body.addEventListener(t,e)},deregisterBodyInteractionHandler:(t,e)=>{document.body.removeEventListener(t,e)},registerResizeHandler:t=>{window.addEventListener("resize",t)},deregisterResizeHandler:t=>{window.removeEventListener("resize",t)},notifyInput:()=>{this.emit(Ie.INPUT_EVENT,this)},notifyChange:()=>{this.emit(Ie.CHANGE_EVENT,this)},setThumbContainerStyleProperty:(t,e)=>{this.thumbContainer_.style.setProperty(t,e)},setTrackStyleProperty:(t,e)=>{this.track_.style.setProperty(t,e)},setMarkerValue:t=>{this.pinValueMarker_.innerText=t},appendTrackMarkers:t=>{const e=document.createDocumentFragment();for(let i=0;i<t;i++){const t=document.createElement("div");t.classList.add("mdc-slider__track-marker"),e.appendChild(t)}this.trackMarkerContainer_.appendChild(e)},removeTrackMarkers:()=>{for(;this.trackMarkerContainer_.firstChild;)this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild)},setLastTrackMarkersStyleProperty:(t,e)=>{this.root_.querySelector(Ie.LAST_TRACK_MARKER_SELECTOR).style.setProperty(t,e)},isRTL:()=>"rtl"===getComputedStyle(this.root_).direction})}initialSyncWithDOM(){const t=parseFloat(this.root_.getAttribute(Ie.ARIA_VALUENOW));this.min=parseFloat(this.root_.getAttribute(Ie.ARIA_VALUEMIN))||this.min,this.max=parseFloat(this.root_.getAttribute(Ie.ARIA_VALUEMAX))||this.max,this.step=parseFloat(this.root_.getAttribute(Ie.STEP_DATA_ATTR))||this.step,this.value=t||this.value,this.disabled=this.root_.hasAttribute(Ie.ARIA_DISABLED)&&"false"!==this.root_.getAttribute(Ie.ARIA_DISABLED),this.foundation_.setupTrackMarker()}layout(){this.foundation_.layout()}stepUp(t=this.step||1){this.value+=t}stepDown(t=this.step||1){this.value-=t}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const De={ROOT:"mdc-snackbar",TEXT:"mdc-snackbar__text",ACTION_WRAPPER:"mdc-snackbar__action-wrapper",ACTION_BUTTON:"mdc-snackbar__action-button",ACTIVE:"mdc-snackbar--active",MULTILINE:"mdc-snackbar--multiline",ACTION_ON_BOTTOM:"mdc-snackbar--action-on-bottom"},He={TEXT_SELECTOR:".mdc-snackbar__text",ACTION_WRAPPER_SELECTOR:".mdc-snackbar__action-wrapper",ACTION_BUTTON_SELECTOR:".mdc-snackbar__action-button",SHOW_EVENT:"MDCSnackbar:show",HIDE_EVENT:"MDCSnackbar:hide"},ke={MESSAGE_TIMEOUT:2750};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Fe extends l{static get cssClasses(){return De}static get strings(){return He}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},setAriaHidden:()=>{},unsetAriaHidden:()=>{},setActionAriaHidden:()=>{},unsetActionAriaHidden:()=>{},setActionText:()=>{},setMessageText:()=>{},setFocus:()=>{},isFocused:()=>!1,visibilityIsHidden:()=>!1,registerCapturedBlurHandler:()=>{},deregisterCapturedBlurHandler:()=>{},registerVisibilityChangeHandler:()=>{},deregisterVisibilityChangeHandler:()=>{},registerCapturedInteractionHandler:()=>{},deregisterCapturedInteractionHandler:()=>{},registerActionClickHandler:()=>{},deregisterActionClickHandler:()=>{},registerTransitionEndHandler:()=>{},deregisterTransitionEndHandler:()=>{},notifyShow:()=>{},notifyHide:()=>{}}}get active(){return this.active_}constructor(t){super(Object.assign(Fe.defaultAdapter,t)),this.active_=!1,this.actionWasClicked_=!1,this.dismissOnAction_=!0,this.firstFocus_=!0,this.pointerDownRecognized_=!1,this.snackbarHasFocus_=!1,this.snackbarData_=null,this.queue_=[],this.actionClickHandler_=(()=>{this.actionWasClicked_=!0,this.invokeAction_()}),this.visibilitychangeHandler_=(()=>{clearTimeout(this.timeoutId_),this.snackbarHasFocus_=!0,this.adapter_.visibilityIsHidden()||setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||ke.MESSAGE_TIMEOUT)}),this.interactionHandler_=(t=>{("focus"!==t.type||this.adapter_.isFocused())&&("touchstart"!==t.type&&"mousedown"!==t.type||(this.pointerDownRecognized_=!0),this.handlePossibleTabKeyboardFocus_(t),"focus"===t.type&&(this.pointerDownRecognized_=!1))}),this.blurHandler_=(()=>{clearTimeout(this.timeoutId_),this.snackbarHasFocus_=!1,this.timeoutId_=setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||ke.MESSAGE_TIMEOUT)})}init(){this.adapter_.registerActionClickHandler(this.actionClickHandler_),this.adapter_.setAriaHidden(),this.adapter_.setActionAriaHidden()}destroy(){this.adapter_.deregisterActionClickHandler(this.actionClickHandler_),this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_),this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_),["touchstart","mousedown","focus"].forEach(t=>{this.adapter_.deregisterCapturedInteractionHandler(t,this.interactionHandler_)})}dismissesOnAction(){return this.dismissOnAction_}setDismissOnAction(t){this.dismissOnAction_=!!t}show(t){if(!t)throw new Error("Please provide a data object with at least a message to display.");if(!t.message)throw new Error("Please provide a message to be displayed.");if(t.actionHandler&&!t.actionText)throw new Error("Please provide action text with the handler.");if(this.active)return void this.queue_.push(t);clearTimeout(this.timeoutId_),this.snackbarData_=t,this.firstFocus_=!0,this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_),this.adapter_.registerCapturedBlurHandler(this.blurHandler_),["touchstart","mousedown","focus"].forEach(t=>{this.adapter_.registerCapturedInteractionHandler(t,this.interactionHandler_)});const{ACTIVE:e,MULTILINE:i,ACTION_ON_BOTTOM:n}=De;this.adapter_.setMessageText(this.snackbarData_.message),this.snackbarData_.multiline&&(this.adapter_.addClass(i),this.snackbarData_.actionOnBottom&&this.adapter_.addClass(n)),this.snackbarData_.actionHandler?(this.adapter_.setActionText(this.snackbarData_.actionText),this.actionHandler_=this.snackbarData_.actionHandler,this.setActionHidden_(!1)):(this.setActionHidden_(!0),this.actionHandler_=null,this.adapter_.setActionText(null)),this.active_=!0,this.adapter_.addClass(e),this.adapter_.unsetAriaHidden(),this.adapter_.notifyShow(),this.timeoutId_=setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||ke.MESSAGE_TIMEOUT)}handlePossibleTabKeyboardFocus_(){this.firstFocus_&&!this.pointerDownRecognized_&&this.setFocusOnAction_(),this.firstFocus_=!1}setFocusOnAction_(){this.adapter_.setFocus(),this.snackbarHasFocus_=!0,this.firstFocus_=!1}invokeAction_(){try{if(!this.actionHandler_)return;this.actionHandler_()}finally{this.dismissOnAction_&&this.cleanup_()}}cleanup_(){if(!this.snackbarHasFocus_||this.actionWasClicked_){const{ACTIVE:t,MULTILINE:e,ACTION_ON_BOTTOM:i}=De;this.adapter_.removeClass(t);const n=()=>{clearTimeout(this.timeoutId_),this.adapter_.deregisterTransitionEndHandler(n),this.adapter_.removeClass(e),this.adapter_.removeClass(i),this.setActionHidden_(!0),this.adapter_.setAriaHidden(),this.active_=!1,this.snackbarHasFocus_=!1,this.adapter_.notifyHide(),this.showNext_()};this.adapter_.registerTransitionEndHandler(n)}}showNext_(){this.queue_.length&&this.show(this.queue_.shift())}setActionHidden_(t){t?this.adapter_.setActionAriaHidden():this.adapter_.unsetActionAriaHidden()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Me extends d{static attachTo(t){return new Me(t)}show(t){this.foundation_.show(t)}getDefaultFoundation(){const{TEXT_SELECTOR:t,ACTION_BUTTON_SELECTOR:e}=Fe.strings,i=()=>this.root_.querySelector(t),n=()=>this.root_.querySelector(e);return new Fe({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setAriaHidden:()=>this.root_.setAttribute("aria-hidden","true"),unsetAriaHidden:()=>this.root_.removeAttribute("aria-hidden"),setActionAriaHidden:()=>n().setAttribute("aria-hidden","true"),unsetActionAriaHidden:()=>n().removeAttribute("aria-hidden"),setActionText:t=>{n().textContent=t},setMessageText:t=>{i().textContent=t},setFocus:()=>n().focus(),isFocused:()=>document.activeElement===n(),visibilityIsHidden:()=>document.hidden,registerCapturedBlurHandler:t=>n().addEventListener("blur",t,!0),deregisterCapturedBlurHandler:t=>n().removeEventListener("blur",t,!0),registerVisibilityChangeHandler:t=>document.addEventListener("visibilitychange",t),deregisterVisibilityChangeHandler:t=>document.removeEventListener("visibilitychange",t),registerCapturedInteractionHandler:(t,e)=>document.body.addEventListener(t,e,!0),deregisterCapturedInteractionHandler:(t,e)=>document.body.removeEventListener(t,e,!0),registerActionClickHandler:t=>n().addEventListener("click",t),deregisterActionClickHandler:t=>n().removeEventListener("click",t),registerTransitionEndHandler:t=>this.root_.addEventListener(f(window,"transitionend"),t),deregisterTransitionEndHandler:t=>this.root_.removeEventListener(f(window,"transitionend"),t),notifyShow:()=>this.emit(Fe.strings.SHOW_EVENT),notifyHide:()=>this.emit(Fe.strings.HIDE_EVENT)})}get dismissesOnAction(){return this.foundation_.dismissesOnAction()}set dismissesOnAction(t){this.foundation_.setDismissOnAction(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Pe={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},Be={NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Ve extends l{static get strings(){return Be}static get cssClasses(){return Pe}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},setNativeControlChecked:()=>{},setNativeControlDisabled:()=>{}}}constructor(t){super(Object.assign(Ve.defaultAdapter,t))}setChecked(t){this.adapter_.setNativeControlChecked(t),this.updateCheckedStyling_(t)}setDisabled(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(Pe.DISABLED):this.adapter_.removeClass(Pe.DISABLED)}handleChange(t){this.updateCheckedStyling_(t.target.checked)}updateCheckedStyling_(t){t?this.adapter_.addClass(Pe.CHECKED):this.adapter_.removeClass(Pe.CHECKED)}}var je=Ve;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class qe extends d{static attachTo(t){return new qe(t)}constructor(...t){super(...t),this.ripple_=this.initRipple_(),this.changeHandler_}destroy(){super.destroy(),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)}initialSyncWithDOM(){this.changeHandler_=this.foundation_.handleChange.bind(this.foundation_),this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked}get nativeControl_(){const{NATIVE_CONTROL_SELECTOR:t}=je.strings;return this.root_.querySelector(t)}initRipple_(){const{RIPPLE_SURFACE_SELECTOR:t}=je.strings,e=this.root_.querySelector(t),i=A(HTMLElement.prototype),n=Object.assign(x.createAdapter(this),{isUnbounded:()=>!0,isSurfaceActive:()=>this.nativeControl_[i](":active"),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),registerInteractionHandler:(t,e)=>this.nativeControl_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.nativeControl_.removeEventListener(t,e),updateCssVariable:(t,i)=>e.style.setProperty(t,i),computeBoundingRect:()=>e.getBoundingClientRect()}),s=new O(n);return new x(this.root_,s)}getDefaultFoundation(){return new je({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setNativeControlChecked:t=>this.nativeControl_.checked=t,setNativeControlDisabled:t=>this.nativeControl_.disabled=t})}get ripple(){return this.ripple_}get checked(){return this.nativeControl_.checked}set checked(t){this.foundation_.setChecked(t)}get disabled(){return this.nativeControl_.disabled}set disabled(t){this.foundation_.setDisabled(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const We={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Ue={CONTENT_SELECTOR:".mdc-tab-indicator__content"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Ke extends l{static get cssClasses(){return We}static get strings(){return Ue}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},computeContentClientRect:()=>{},setContentStyleProperty:()=>{}}}constructor(t){super(Object.assign(Ke.defaultAdapter,t))}computeContentClientRect(){return this.adapter_.computeContentClientRect()}activate(t){}deactivate(){}}var Ge=Ke;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ze=class extends Ge{activate(t){if(!t)return void this.adapter_.addClass(Ge.cssClasses.ACTIVE);const e=this.computeContentClientRect(),i=t.width/e.width,n=t.left-e.left;this.adapter_.addClass(Ge.cssClasses.NO_TRANSITION),this.adapter_.setContentStyleProperty("transform",`translateX(${n}px) scaleX(${i})`),this.computeContentClientRect(),this.adapter_.removeClass(Ge.cssClasses.NO_TRANSITION),this.adapter_.addClass(Ge.cssClasses.ACTIVE),this.adapter_.setContentStyleProperty("transform","")}deactivate(){this.adapter_.removeClass(Ge.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Xe=class extends Ge{activate(){this.adapter_.addClass(Ge.cssClasses.ACTIVE)}deactivate(){this.adapter_.removeClass(Ge.cssClasses.ACTIVE)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class $e extends d{static attachTo(t){return new $e(t)}constructor(...t){super(...t),this.content_}initialize(){this.content_=this.root_.querySelector(Ge.strings.CONTENT_SELECTOR)}computeContentClientRect(){return this.foundation_.computeContentClientRect()}getDefaultFoundation(){const t=Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),computeContentClientRect:()=>this.content_.getBoundingClientRect(),setContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e)});return this.root_.classList.contains(Ge.cssClasses.FADE)?new Xe(t):new ze(t)}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ye={ACTIVE:"mdc-tab--active"},Ze={ARIA_SELECTED:"aria-selected",RIPPLE_SELECTOR:".mdc-tab__ripple",CONTENT_SELECTOR:".mdc-tab__content",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator",TABINDEX:"tabIndex",INTERACTED_EVENT:"MDCTab:interacted"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Je extends l{static get cssClasses(){return Ye}static get strings(){return Ze}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},activateIndicator:()=>{},deactivateIndicator:()=>{},notifyInteracted:()=>{},getOffsetLeft:()=>{},getOffsetWidth:()=>{},getContentOffsetLeft:()=>{},getContentOffsetWidth:()=>{},focus:()=>{}}}constructor(t){super(Object.assign(Je.defaultAdapter,t)),this.handleClick_=(()=>this.handleClick())}handleClick(){this.adapter_.notifyInteracted()}isActive(){return this.adapter_.hasClass(Ye.ACTIVE)}activate(t){this.adapter_.addClass(Ye.ACTIVE),this.adapter_.setAttr(Ze.ARIA_SELECTED,"true"),this.adapter_.setAttr(Ze.TABINDEX,"0"),this.adapter_.activateIndicator(t),this.adapter_.focus()}deactivate(){this.isActive()&&(this.adapter_.removeClass(Ye.ACTIVE),this.adapter_.setAttr(Ze.ARIA_SELECTED,"false"),this.adapter_.setAttr(Ze.TABINDEX,"-1"),this.adapter_.deactivateIndicator())}computeDimensions(){const t=this.adapter_.getOffsetWidth(),e=this.adapter_.getOffsetLeft(),i=this.adapter_.getContentOffsetWidth(),n=this.adapter_.getContentOffsetLeft();return{rootLeft:e,rootRight:e+t,contentLeft:e+n,contentRight:e+n+i}}}var Qe=Je;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class ti extends d{constructor(...t){super(...t),this.ripple_,this.tabIndicator_,this.content_,this.handleClick_}static attachTo(t){return new ti(t)}initialize(t=((t,e)=>new x(t,e)),e=(t=>new $e(t))){const i=this.root_.querySelector(Qe.strings.RIPPLE_SELECTOR),n=Object.assign(x.createAdapter(this),{addClass:t=>i.classList.add(t),removeClass:t=>i.classList.remove(t),updateCssVariable:(t,e)=>i.style.setProperty(t,e)}),s=new O(n);this.ripple_=t(this.root_,s);const r=this.root_.querySelector(Qe.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=e(r),this.content_=this.root_.querySelector(Qe.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleClick_=this.foundation_.handleClick.bind(this.foundation_),this.listen("click",this.handleClick_)}destroy(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),super.destroy()}getDefaultFoundation(){return new Qe({setAttr:(t,e)=>this.root_.setAttribute(t,e),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),activateIndicator:t=>this.tabIndicator_.activate(t),deactivateIndicator:()=>this.tabIndicator_.deactivate(),notifyInteracted:()=>this.emit(Qe.strings.INTERACTED_EVENT,{tab:this},!0),getOffsetLeft:()=>this.root_.offsetLeft,getOffsetWidth:()=>this.root_.offsetWidth,getContentOffsetLeft:()=>this.content_.offsetLeft,getContentOffsetWidth:()=>this.content_.offsetWidth,focus:()=>this.root_.focus()})}get active(){return this.foundation_.isActive()}activate(t){this.foundation_.activate(t)}deactivate(){this.foundation_.deactivate()}computeIndicatorClientRect(){return this.tabIndicator_.computeContentClientRect()}computeDimensions(){return this.foundation_.computeDimensions()}focus(){this.root_.focus()}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ei={ANIMATING:"mdc-tab-scroller--animating",SCROLL_TEST:"mdc-tab-scroller__test",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll"},ii={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};var ni=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class{constructor(t){this.adapter_=t}getScrollPositionRTL(t){}scrollToRTL(t){}incrementScrollRTL(t){}getAnimatingScrollPosition(t,e){}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var si=class extends ni{getScrollPositionRTL(){const t=this.adapter_.getScrollAreaScrollLeft(),{right:e}=this.calculateScrollEdges_();return Math.round(e-t)}scrollToRTL(t){const e=this.calculateScrollEdges_(),i=this.adapter_.getScrollAreaScrollLeft(),n=this.clampScrollValue_(e.right-t);return{finalScrollPosition:n,scrollDelta:n-i}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e-t);return{finalScrollPosition:i,scrollDelta:i-e}}getAnimatingScrollPosition(t){return t}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ri=class extends ni{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(t-e)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(-t);return{finalScrollPosition:i,scrollDelta:i-e}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e-t);return{finalScrollPosition:i,scrollDelta:i-e}}getAnimatingScrollPosition(t,e){return t-e}calculateScrollEdges_(){const t=this.adapter_.getScrollContentOffsetWidth();return{left:this.adapter_.getScrollAreaOffsetWidth()-t,right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ai=class extends ni{getScrollPositionRTL(t){const e=this.adapter_.getScrollAreaScrollLeft();return Math.round(e-t)}scrollToRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(t);return{finalScrollPosition:i,scrollDelta:e-i}}incrementScrollRTL(t){const e=this.adapter_.getScrollAreaScrollLeft(),i=this.clampScrollValue_(e+t);return{finalScrollPosition:i,scrollDelta:e-i}}getAnimatingScrollPosition(t,e){return t+e}calculateScrollEdges_(){return{left:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth(),right:0}}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class oi extends l{static get cssClasses(){return ei}static get strings(){return ii}static get defaultAdapter(){return{eventTargetMatchesSelector:()=>{},addClass:()=>{},removeClass:()=>{},addScrollAreaClass:()=>{},setScrollAreaStyleProperty:()=>{},setScrollContentStyleProperty:()=>{},getScrollContentStyleValue:()=>{},setScrollAreaScrollLeft:()=>{},getScrollAreaScrollLeft:()=>{},getScrollContentOffsetWidth:()=>{},getScrollAreaOffsetWidth:()=>{},computeScrollAreaClientRect:()=>{},computeScrollContentClientRect:()=>{},computeHorizontalScrollbarHeight:()=>{}}}constructor(t){super(Object.assign(oi.defaultAdapter,t)),this.isAnimating_=!1,this.rtlScrollerInstance_}init(){const t=this.adapter_.computeHorizontalScrollbarHeight();this.adapter_.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter_.addScrollAreaClass(oi.cssClasses.SCROLL_AREA_SCROLL)}getScrollPosition(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();const t=this.calculateCurrentTranslateX_();return this.adapter_.getScrollAreaScrollLeft()-t}handleInteraction(){this.isAnimating_&&this.stopScrollAnimation_()}handleTransitionEnd(t){this.isAnimating_&&this.adapter_.eventTargetMatchesSelector(t.target,oi.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter_.removeClass(oi.cssClasses.ANIMATING))}incrementScroll(t){if(0!==t)return this.isRTL_()?this.incrementScrollRTL_(t):void this.incrementScroll_(t)}scrollTo(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)}getRTLScroller(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_}calculateCurrentTranslateX_(){const t=this.adapter_.getScrollContentStyleValue("transform");if("none"===t)return 0;const e=/\((.+)\)/.exec(t)[1].split(",");return parseFloat(e[4])}clampScrollValue_(t){const e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)}computeCurrentScrollPositionRTL_(){const t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)}calculateScrollEdges_(){return{left:0,right:this.adapter_.getScrollContentOffsetWidth()-this.adapter_.getScrollAreaOffsetWidth()}}scrollTo_(t){const e=this.getScrollPosition(),i=this.clampScrollValue_(t),n=i-e;this.animate_({finalScrollPosition:i,scrollDelta:n})}scrollToRTL_(t){const e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)}incrementScroll_(t){const e=this.getScrollPosition(),i=t+e,n=this.clampScrollValue_(i),s=n-e;this.animate_({finalScrollPosition:n,scrollDelta:s})}incrementScrollRTL_(t){const e=this.getRTLScroller().incrementScrollRTL(t);this.animate_(e)}animate_(t){0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter_.setScrollContentStyleProperty("transform",`translateX(${t.scrollDelta}px)`),this.adapter_.computeScrollAreaClientRect(),requestAnimationFrame(()=>{this.adapter_.addClass(oi.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","none")}),this.isAnimating_=!0)}stopScrollAnimation_(){this.isAnimating_=!1;const t=this.getAnimatingScrollPosition_();this.adapter_.removeClass(oi.cssClasses.ANIMATING),this.adapter_.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter_.setScrollAreaScrollLeft(t)}getAnimatingScrollPosition_(){const t=this.calculateCurrentTranslateX_(),e=this.adapter_.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t}rtlScrollerFactory_(){const t=this.adapter_.getScrollAreaScrollLeft();this.adapter_.setScrollAreaScrollLeft(t-1);const e=this.adapter_.getScrollAreaScrollLeft();if(e<0)return this.adapter_.setScrollAreaScrollLeft(t),new ri(this.adapter_);const i=this.adapter_.computeScrollAreaClientRect(),n=this.adapter_.computeScrollContentClientRect(),s=Math.round(n.right-i.right);return this.adapter_.setScrollAreaScrollLeft(t),s===e?new ai(this.adapter_):new si(this.adapter_)}isRTL_(){return"rtl"===this.adapter_.getScrollContentStyleValue("direction")}}var li=oi;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let ci;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class di extends d{static attachTo(t){return new di(t)}constructor(...t){super(...t),this.content_,this.area_,this.handleInteraction_,this.handleTransitionEnd_}initialize(){this.area_=this.root_.querySelector(li.strings.AREA_SELECTOR),this.content_=this.root_.querySelector(li.strings.CONTENT_SELECTOR)}initialSyncWithDOM(){this.handleInteraction_=(()=>this.foundation_.handleInteraction()),this.handleTransitionEnd_=(t=>this.foundation_.handleTransitionEnd(t)),this.area_.addEventListener("wheel",this.handleInteraction_),this.area_.addEventListener("touchstart",this.handleInteraction_),this.area_.addEventListener("pointerdown",this.handleInteraction_),this.area_.addEventListener("mousedown",this.handleInteraction_),this.area_.addEventListener("keydown",this.handleInteraction_),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)}destroy(){super.destroy(),this.area_.removeEventListener("wheel",this.handleInteraction_),this.area_.removeEventListener("touchstart",this.handleInteraction_),this.area_.removeEventListener("pointerdown",this.handleInteraction_),this.area_.removeEventListener("mousedown",this.handleInteraction_),this.area_.removeEventListener("keydown",this.handleInteraction_),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)}getDefaultFoundation(){return new li({eventTargetMatchesSelector:(t,e)=>{return t[function(t){return["msMatchesSelector","matches"].filter(e=>e in t).pop()}(HTMLElement.prototype)](e)},addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),addScrollAreaClass:t=>this.area_.classList.add(t),setScrollAreaStyleProperty:(t,e)=>this.area_.style.setProperty(t,e),setScrollContentStyleProperty:(t,e)=>this.content_.style.setProperty(t,e),getScrollContentStyleValue:t=>window.getComputedStyle(this.content_).getPropertyValue(t),setScrollAreaScrollLeft:t=>this.area_.scrollLeft=t,getScrollAreaScrollLeft:()=>this.area_.scrollLeft,getScrollContentOffsetWidth:()=>this.content_.offsetWidth,getScrollAreaOffsetWidth:()=>this.area_.offsetWidth,computeScrollAreaClientRect:()=>this.area_.getBoundingClientRect(),computeScrollContentClientRect:()=>this.content_.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>(function(t,e=!0){if(e&&void 0!==ci)return ci;const i=t.createElement("div");i.classList.add(ei.SCROLL_TEST),t.body.appendChild(i);const n=i.offsetHeight-i.clientHeight;return t.body.removeChild(i),e&&(ci=n),n})(document)})}getScrollPosition(){return this.foundation_.getScrollPosition()}getScrollContentWidth(){return this.content_.offsetWidth}incrementScroll(t){this.foundation_.incrementScroll(t)}scrollTo(t){this.foundation_.scrollTo(t)}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const hi={TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab",ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",HOME_KEY:"Home",ENTER_KEY:"Enter",SPACE_KEY:"Space"},ui={EXTRA_SCROLL_AMOUNT:20,ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,HOME_KEYCODE:36,ENTER_KEYCODE:13,SPACE_KEYCODE:32},pi=new Set;pi.add(hi.ARROW_LEFT_KEY),pi.add(hi.ARROW_RIGHT_KEY),pi.add(hi.END_KEY),pi.add(hi.HOME_KEY),pi.add(hi.ENTER_KEY),pi.add(hi.SPACE_KEY);const _i=new Map;_i.set(ui.ARROW_LEFT_KEYCODE,hi.ARROW_LEFT_KEY),_i.set(ui.ARROW_RIGHT_KEYCODE,hi.ARROW_RIGHT_KEY),_i.set(ui.END_KEYCODE,hi.END_KEY),_i.set(ui.HOME_KEYCODE,hi.HOME_KEY),_i.set(ui.ENTER_KEYCODE,hi.ENTER_KEY),_i.set(ui.SPACE_KEYCODE,hi.SPACE_KEY);class fi extends l{static get strings(){return hi}static get numbers(){return ui}static get defaultAdapter(){return{scrollTo:()=>{},incrementScroll:()=>{},getScrollPosition:()=>{},getScrollContentWidth:()=>{},getOffsetWidth:()=>{},isRTL:()=>{},setActiveTab:()=>{},activateTabAtIndex:()=>{},deactivateTabAtIndex:()=>{},focusTabAtIndex:()=>{},getTabIndicatorClientRectAtIndex:()=>{},getTabDimensionsAtIndex:()=>{},getPreviousActiveTabIndex:()=>{},getFocusedTabIndex:()=>{},getIndexOfTab:()=>{},getTabListLength:()=>{},notifyTabActivated:()=>{}}}constructor(t){super(Object.assign(fi.defaultAdapter,t)),this.useAutomaticActivation_=!1}setUseAutomaticActivation(t){this.useAutomaticActivation_=t}activateTab(t){const e=this.adapter_.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==e&&(this.adapter_.deactivateTabAtIndex(e),this.adapter_.activateTabAtIndex(t,this.adapter_.getTabIndicatorClientRectAtIndex(e)),this.scrollIntoView(t),this.adapter_.notifyTabActivated(t))}handleKeyDown(t){const e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;const t=this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(),e);this.adapter_.setActiveTab(t),this.scrollIntoView(t)}else{const t=this.adapter_.getFocusedTabIndex();if(this.isActivationKey_(e))this.adapter_.setActiveTab(t);else{const i=this.determineTargetFromKey_(t,e);this.adapter_.focusTabAtIndex(i),this.scrollIntoView(i)}}}handleTabInteraction(t){this.adapter_.setActiveTab(this.adapter_.getIndexOfTab(t.detail.tab))}scrollIntoView(t){if(this.indexIsInRange_(t))return 0===t?this.adapter_.scrollTo(0):t===this.adapter_.getTabListLength()-1?this.adapter_.scrollTo(this.adapter_.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)}determineTargetFromKey_(t,e){const i=this.isRTL_(),n=this.adapter_.getTabListLength()-1,s=e===hi.END_KEY,r=e===hi.ARROW_LEFT_KEY&&!i||e===hi.ARROW_RIGHT_KEY&&i,a=e===hi.ARROW_RIGHT_KEY&&!i||e===hi.ARROW_LEFT_KEY&&i;let o=t;return s?o=n:r?o-=1:a?o+=1:o=0,o<0?o=n:o>n&&(o=0),o}calculateScrollIncrement_(t,e,i,n){const s=this.adapter_.getTabDimensionsAtIndex(e),r=s.contentLeft-i-n,a=s.contentRight-i-ui.EXTRA_SCROLL_AMOUNT,o=r+ui.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(a,0):Math.max(o,0)}calculateScrollIncrementRTL_(t,e,i,n,s){const r=this.adapter_.getTabDimensionsAtIndex(e),a=s-r.contentLeft-i,o=s-r.contentRight-i-n+ui.EXTRA_SCROLL_AMOUNT,l=a-ui.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(o,0):Math.min(l,0)}findAdjacentTabIndexClosestToEdge_(t,e,i,n){const s=e.rootLeft-i,r=e.rootRight-i-n,a=s+r;return s<0||a<0?t-1:r>0||a>0?t+1:-1}findAdjacentTabIndexClosestToEdgeRTL_(t,e,i,n,s){const r=s-e.rootLeft-n-i,a=s-e.rootRight-i,o=r+a;return r>0||o>0?t+1:a<0||o<0?t-1:-1}getKeyFromEvent_(t){return pi.has(t.key)?t.key:_i.get(t.keyCode)}isActivationKey_(t){return t===hi.SPACE_KEY||t===hi.ENTER_KEY}indexIsInRange_(t){return t>=0&&t<this.adapter_.getTabListLength()}isRTL_(){return this.adapter_.isRTL()}scrollIntoView_(t){const e=this.adapter_.getScrollPosition(),i=this.adapter_.getOffsetWidth(),n=this.adapter_.getTabDimensionsAtIndex(t),s=this.findAdjacentTabIndexClosestToEdge_(t,n,e,i);if(!this.indexIsInRange_(s))return;const r=this.calculateScrollIncrement_(t,s,e,i);this.adapter_.incrementScroll(r)}scrollIntoViewRTL_(t){const e=this.adapter_.getScrollPosition(),i=this.adapter_.getOffsetWidth(),n=this.adapter_.getTabDimensionsAtIndex(t),s=this.adapter_.getScrollContentWidth(),r=this.findAdjacentTabIndexClosestToEdgeRTL_(t,n,e,i,s);if(!this.indexIsInRange_(r))return;const a=this.calculateScrollIncrementRTL_(t,r,e,i,s);this.adapter_.incrementScroll(a)}}var gi=fi;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class mi extends d{constructor(...t){super(...t),this.tabList_,this.tabFactory_,this.tabScroller_,this.tabScrollerFactory_,this.handleTabInteraction_,this.handleKeyDown_}static attachTo(t){return new mi(t)}set useAutomaticActivation(t){this.foundation_.setUseAutomaticActivation(t)}initialize(t=(t=>new ti(t)),e=(t=>new di(t))){this.tabFactory_=t,this.tabScrollerFactory_=e,this.tabList_=this.getTabElements_().map(t=>this.tabFactory_(t));const i=this.root_.querySelector(gi.strings.TAB_SCROLLER_SELECTOR);i&&(this.tabScroller_=this.tabScrollerFactory_(i))}initialSyncWithDOM(){this.handleTabInteraction_=(t=>this.foundation_.handleTabInteraction(t)),this.handleKeyDown_=(t=>this.foundation_.handleKeyDown(t)),this.root_.addEventListener(Qe.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.addEventListener("keydown",this.handleKeyDown_);for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active){this.scrollIntoView(t);break}}destroy(){super.destroy(),this.root_.removeEventListener(Qe.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.root_.removeEventListener("keydown",this.handleKeyDown_),this.tabList_.forEach(t=>t.destroy()),this.tabScroller_.destroy()}getDefaultFoundation(){return new gi({scrollTo:t=>this.tabScroller_.scrollTo(t),incrementScroll:t=>this.tabScroller_.incrementScroll(t),getScrollPosition:()=>this.tabScroller_.getScrollPosition(),getScrollContentWidth:()=>this.tabScroller_.getScrollContentWidth(),getOffsetWidth:()=>this.root_.offsetWidth,isRTL:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction"),setActiveTab:t=>this.foundation_.activateTab(t),activateTabAtIndex:(t,e)=>this.tabList_[t].activate(e),deactivateTabAtIndex:t=>this.tabList_[t].deactivate(),focusTabAtIndex:t=>this.tabList_[t].focus(),getTabIndicatorClientRectAtIndex:t=>this.tabList_[t].computeIndicatorClientRect(),getTabDimensionsAtIndex:t=>this.tabList_[t].computeDimensions(),getPreviousActiveTabIndex:()=>{for(let t=0;t<this.tabList_.length;t++)if(this.tabList_[t].active)return t;return-1},getFocusedTabIndex:()=>{const t=this.getTabElements_(),e=document.activeElement;return t.indexOf(e)},getIndexOfTab:t=>this.tabList_.indexOf(t),getTabListLength:()=>this.tabList_.length,notifyTabActivated:t=>this.emit(gi.strings.TAB_ACTIVATED_EVENT,{index:t},!0)})}activateTab(t){this.foundation_.activateTab(t)}scrollIntoView(t){this.foundation_.scrollIntoView(t)}getTabElements_(){return[].slice.call(this.root_.querySelectorAll(gi.strings.TAB_SELECTOR))}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Ei={ARIA_CONTROLS:"aria-controls",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",ICON_SELECTOR:".mdc-text-field__icon",OUTLINE_SELECTOR:".mdc-notched-outline",LINE_RIPPLE_SELECTOR:".mdc-line-ripple"},vi={ROOT:"mdc-text-field",DISABLED:"mdc-text-field--disabled",DENSE:"mdc-text-field--dense",FOCUSED:"mdc-text-field--focused",INVALID:"mdc-text-field--invalid",TEXTAREA:"mdc-text-field--textarea",OUTLINED:"mdc-text-field--outlined"},Ci={LABEL_SCALE:.75,DENSE_LABEL_SCALE:.923},Ti=["pattern","min","max","required","step","minlength","maxlength"],yi=["color","date","datetime-local","month","range","time","week"];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ai={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Ii={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class bi extends l{static get cssClasses(){return Ii}static get strings(){return Ai}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},removeAttr:()=>{},setContent:()=>{}}}constructor(t){super(Object.assign(bi.defaultAdapter,t))}setContent(t){this.adapter_.setContent(t)}setPersistent(t){t?this.adapter_.addClass(Ii.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(Ii.HELPER_TEXT_PERSISTENT)}setValidation(t){t?this.adapter_.addClass(Ii.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(Ii.HELPER_TEXT_VALIDATION_MSG)}showToScreenReader(){this.adapter_.removeAttr(Ai.ARIA_HIDDEN)}setValidity(t){const e=this.adapter_.hasClass(Ii.HELPER_TEXT_PERSISTENT),i=this.adapter_.hasClass(Ii.HELPER_TEXT_VALIDATION_MSG)&&!t;i?this.adapter_.setAttr(Ai.ROLE,"alert"):this.adapter_.removeAttr(Ai.ROLE),e||i||this.hide_()}hide_(){this.adapter_.setAttr(Ai.ARIA_HIDDEN,"true")}}var Si=bi;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Li={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Oi extends l{static get strings(){return Li}static get defaultAdapter(){return{getAttr:()=>{},setAttr:()=>{},removeAttr:()=>{},setContent:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},notifyIconAction:()=>{}}}constructor(t){super(Object.assign(Oi.defaultAdapter,t)),this.savedTabIndex_=null,this.interactionHandler_=(t=>this.handleInteraction(t))}init(){this.savedTabIndex_=this.adapter_.getAttr("tabindex"),["click","keydown"].forEach(t=>{this.adapter_.registerInteractionHandler(t,this.interactionHandler_)})}destroy(){["click","keydown"].forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.interactionHandler_)})}setDisabled(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",Li.ICON_ROLE)))}setAriaLabel(t){this.adapter_.setAttr("aria-label",t)}setContent(t){this.adapter_.setContent(t)}handleInteraction(t){"click"!==t.type&&"Enter"!==t.key&&13!==t.keyCode||this.adapter_.notifyIconAction()}}var xi=Oi;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Ri extends l{static get cssClasses(){return vi}static get strings(){return Ei}static get numbers(){return Ci}get shouldShake(){return!this.isValid()&&!this.isFocused_&&!!this.getValue()}get shouldAlwaysFloat_(){const t=this.getNativeInput_().type;return yi.indexOf(t)>=0}get shouldFloat(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},registerTextFieldInteractionHandler:()=>{},deregisterTextFieldInteractionHandler:()=>{},registerInputInteractionHandler:()=>{},deregisterInputInteractionHandler:()=>{},registerValidationAttributeChangeHandler:()=>{},deregisterValidationAttributeChangeHandler:()=>{},getNativeInput:()=>{},isFocused:()=>{},isRtl:()=>{},activateLineRipple:()=>{},deactivateLineRipple:()=>{},setLineRippleTransformOrigin:()=>{},shakeLabel:()=>{},floatLabel:()=>{},hasLabel:()=>{},getLabelWidth:()=>{},hasOutline:()=>{},notchOutline:()=>{},closeOutline:()=>{}}}constructor(t,e={}){super(Object.assign(Ri.defaultAdapter,t)),this.helperText_=e.helperText,this.icon_=e.icon,this.isFocused_=!1,this.receivedUserInput_=!1,this.useCustomValidityChecking_=!1,this.isValid_=!0,this.useNativeValidation_=!0,this.inputFocusHandler_=(()=>this.activateFocus()),this.inputBlurHandler_=(()=>this.deactivateFocus()),this.inputInputHandler_=(()=>this.autoCompleteFocus()),this.setPointerXOffset_=(t=>this.setTransformOrigin(t)),this.textFieldInteractionHandler_=(()=>this.handleTextFieldInteraction()),this.validationAttributeChangeHandler_=(t=>this.handleValidationAttributeChange(t)),this.validationObserver_}init(){this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.registerInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.registerTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_)}destroy(){this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.deregisterInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.deregisterTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)}handleTextFieldInteraction(){this.adapter_.getNativeInput().disabled||(this.receivedUserInput_=!0)}handleValidationAttributeChange(t){t.some(t=>{if(Ti.indexOf(t)>-1)return this.styleValidity_(!0),!0})}notchOutline(t){if(this.adapter_.hasOutline())if(t){const t=this.adapter_.hasClass(vi.DENSE)?Ci.DENSE_LABEL_SCALE:Ci.LABEL_SCALE,e=this.adapter_.getLabelWidth()*t,i=this.adapter_.isRtl();this.adapter_.notchOutline(e,i)}else this.adapter_.closeOutline()}activateFocus(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()}setTransformOrigin(t){const e=t.target.getBoundingClientRect(),i=t.clientX,n=(t.clientY,i-e.left);this.adapter_.setLineRippleTransformOrigin(n)}autoCompleteFocus(){this.receivedUserInput_||this.activateFocus()}deactivateFocus(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();const t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)}getValue(){return this.getNativeInput_().value}setValue(t){this.getNativeInput_().value=t;const e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))}isValid(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_}setValid(t){this.isValid_=t,this.styleValidity_(t);const e=!t&&!this.isFocused_;this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)}setUseNativeValidation(t){this.useNativeValidation_=t}isDisabled(){return this.getNativeInput_().disabled}setDisabled(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)}setHelperTextContent(t){this.helperText_&&this.helperText_.setContent(t)}setIconAriaLabel(t){this.icon_&&this.icon_.setAriaLabel(t)}setIconContent(t){this.icon_&&this.icon_.setContent(t)}isBadInput_(){return this.getNativeInput_().validity.badInput}isNativeInputValid_(){return this.getNativeInput_().validity.valid}styleValidity_(t){const{INVALID:e}=Ri.cssClasses;t?this.adapter_.removeClass(e):this.adapter_.addClass(e),this.helperText_&&this.helperText_.setValidity(t)}styleFocused_(t){const{FOCUSED:e}=Ri.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}styleDisabled_(t){const{DISABLED:e,INVALID:i}=Ri.cssClasses;t?(this.adapter_.addClass(e),this.adapter_.removeClass(i)):this.adapter_.removeClass(e),this.icon_&&this.icon_.setDisabled(t)}getNativeInput_(){return this.adapter_.getNativeInput()||{value:"",disabled:!1,validity:{badInput:!1,valid:!0}}}}var wi=Ri;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Ni extends d{static attachTo(t){return new Ni(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new Si(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),setContent:t=>{this.root_.textContent=t}}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Di extends d{static attachTo(t){return new Di(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new xi(Object.assign({getAttr:t=>this.root_.getAttribute(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),setContent:t=>{this.root_.textContent=t},registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),notifyIconAction:()=>this.emit(xi.strings.ICON_EVENT,{},!0)}))}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Hi extends d{constructor(...t){super(...t),this.input_,this.ripple,this.lineRipple_,this.helperText_,this.icon_,this.label_,this.outline_}static attachTo(t){return new Hi(t)}initialize(t=((t,e)=>new x(t,e)),e=(t=>new zt(t)),i=(t=>new Ni(t)),n=(t=>new Di(t)),s=(t=>new vt(t)),r=(t=>new he(t))){this.input_=this.root_.querySelector(Ei.INPUT_SELECTOR);const a=this.root_.querySelector(Ei.LABEL_SELECTOR);a&&(this.label_=s(a));const o=this.root_.querySelector(Ei.LINE_RIPPLE_SELECTOR);o&&(this.lineRipple_=e(o));const l=this.root_.querySelector(Ei.OUTLINE_SELECTOR);if(l&&(this.outline_=r(l)),this.input_.hasAttribute(Ei.ARIA_CONTROLS)){const t=document.getElementById(this.input_.getAttribute(Ei.ARIA_CONTROLS));t&&(this.helperText_=i(t))}const c=this.root_.querySelector(Ei.ICON_SELECTOR);if(c&&(this.icon_=n(c)),this.ripple=null,!this.root_.classList.contains(vi.TEXTAREA)&&!this.root_.classList.contains(vi.OUTLINED)){const e=A(HTMLElement.prototype),i=Object.assign(x.createAdapter(this),{isSurfaceActive:()=>this.input_[e](":active"),registerInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e)}),n=new O(i);this.ripple=t(this.root_,n)}}destroy(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.icon_&&this.icon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),super.destroy()}initialSyncWithDom(){this.disabled=this.input_.disabled}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}get valid(){return this.foundation_.isValid()}set valid(t){this.foundation_.setValid(t)}get required(){return this.input_.required}set required(t){this.input_.required=t}get pattern(){return this.input_.pattern}set pattern(t){this.input_.pattern=t}get minLength(){return this.input_.minLength}set minLength(t){this.input_.minLength=t}get maxLength(){return this.input_.maxLength}set maxLength(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t}get min(){return this.input_.min}set min(t){this.input_.min=t}get max(){return this.input_.max}set max(t){this.input_.max=t}get step(){return this.input_.step}set step(t){this.input_.step=t}set helperTextContent(t){this.foundation_.setHelperTextContent(t)}set iconAriaLabel(t){this.foundation_.setIconAriaLabel(t)}set iconContent(t){this.foundation_.setIconContent(t)}set useNativeValidation(t){this.foundation_.setUseNativeValidation(t)}layout(){const t=this.foundation_.shouldFloat;this.foundation_.notchOutline(t)}getDefaultFoundation(){return new wi(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),registerTextFieldInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver(e=>t((t=>t.map(t=>t.attributeName))(e))),i=this.root_.querySelector(Ei.INPUT_SELECTOR);return e.observe(i,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect(),isFocused:()=>document.activeElement===this.root_.querySelector(Ei.INPUT_SELECTOR),isRtl:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction")},this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_()),this.getFoundationMap_())}getLabelAdapterMethods_(){return{shakeLabel:t=>this.label_.shake(t),floatLabel:t=>this.label_.float(t),hasLabel:()=>!!this.label_,getLabelWidth:()=>this.label_.getWidth()}}getLineRippleAdapterMethods_(){return{activateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.activate()},deactivateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRipple_&&this.lineRipple_.setRippleCenter(t)}}}getOutlineAdapterMethods_(){return{notchOutline:(t,e)=>this.outline_.notch(t,e),closeOutline:()=>this.outline_.closeNotch(),hasOutline:()=>!!this.outline_}}getInputAdapterMethods_(){return{registerInputInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInputInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e),getNativeInput:()=>this.input_}}getFoundationMap_(){return{helperText:this.helperText_?this.helperText_.foundation:void 0,icon:this.icon_?this.icon_.foundation:void 0}}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const ki={FIXED:"mdc-toolbar--fixed",FIXED_LASTROW:"mdc-toolbar--fixed-lastrow-only",FIXED_AT_LAST_ROW:"mdc-toolbar--fixed-at-last-row",TOOLBAR_ROW_FLEXIBLE:"mdc-toolbar--flexible",FLEXIBLE_DEFAULT_BEHAVIOR:"mdc-toolbar--flexible-default-behavior",FLEXIBLE_MAX:"mdc-toolbar--flexible-space-maximized",FLEXIBLE_MIN:"mdc-toolbar--flexible-space-minimized"},Fi={TITLE_SELECTOR:".mdc-toolbar__title",ICON_SELECTOR:".mdc-toolbar__icon",FIRST_ROW_SELECTOR:".mdc-toolbar__row:first-child",CHANGE_EVENT:"MDCToolbar:change"},Mi={MAX_TITLE_SIZE:2.125,MIN_TITLE_SIZE:1.25,TOOLBAR_ROW_HEIGHT:64,TOOLBAR_ROW_MOBILE_HEIGHT:56,TOOLBAR_MOBILE_BREAKPOINT:600};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Pi extends l{static get cssClasses(){return ki}static get strings(){return Fi}static get numbers(){return Mi}static get defaultAdapter(){return{hasClass:()=>!1,addClass:()=>{},removeClass:()=>{},registerScrollHandler:()=>{},deregisterScrollHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},getViewportWidth:()=>0,getViewportScrollY:()=>0,getOffsetHeight:()=>0,getFirstRowElementOffsetHeight:()=>0,notifyChange:()=>{},setStyle:()=>{},setStyleForTitleElement:()=>{},setStyleForFlexibleRowElement:()=>{},setStyleForFixedAdjustElement:()=>{}}}constructor(t){super(Object.assign(Pi.defaultAdapter,t)),this.resizeHandler_=(()=>this.checkRowHeight_()),this.scrollHandler_=(()=>this.updateToolbarStyles_()),this.checkRowHeightFrame_=0,this.scrollFrame_=0,this.executedLastChange_=!1,this.calculations_={toolbarRowHeight:0,toolbarRatio:0,flexibleExpansionRatio:0,maxTranslateYRatio:0,scrollThresholdRatio:0,toolbarHeight:0,flexibleExpansionHeight:0,maxTranslateYDistance:0,scrollThreshold:0},this.fixed_=!1,this.fixedLastrow_=!1,this.hasFlexibleRow_=!1,this.useFlexDefaultBehavior_=!1}init(){this.fixed_=this.adapter_.hasClass(Pi.cssClasses.FIXED),this.fixedLastrow_=this.adapter_.hasClass(Pi.cssClasses.FIXED_LASTROW)&this.fixed_,this.hasFlexibleRow_=this.adapter_.hasClass(Pi.cssClasses.TOOLBAR_ROW_FLEXIBLE),this.hasFlexibleRow_&&(this.useFlexDefaultBehavior_=this.adapter_.hasClass(Pi.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR)),this.initKeyRatio_(),this.setKeyHeights_(),this.adapter_.registerResizeHandler(this.resizeHandler_),this.adapter_.registerScrollHandler(this.scrollHandler_)}destroy(){this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}updateAdjustElementStyles(){this.fixed_&&this.adapter_.setStyleForFixedAdjustElement("margin-top",`${this.calculations_.toolbarHeight}px`)}getFlexibleExpansionRatio_(t){return Math.max(0,1-t/(this.calculations_.flexibleExpansionHeight+1e-4))}checkRowHeight_(){cancelAnimationFrame(this.checkRowHeightFrame_),this.checkRowHeightFrame_=requestAnimationFrame(()=>this.setKeyHeights_())}setKeyHeights_(){const t=this.getRowHeight_();t!==this.calculations_.toolbarRowHeight&&(this.calculations_.toolbarRowHeight=t,this.calculations_.toolbarHeight=this.calculations_.toolbarRatio*this.calculations_.toolbarRowHeight,this.calculations_.flexibleExpansionHeight=this.calculations_.flexibleExpansionRatio*this.calculations_.toolbarRowHeight,this.calculations_.maxTranslateYDistance=this.calculations_.maxTranslateYRatio*this.calculations_.toolbarRowHeight,this.calculations_.scrollThreshold=this.calculations_.scrollThresholdRatio*this.calculations_.toolbarRowHeight,this.updateAdjustElementStyles(),this.updateToolbarStyles_())}updateToolbarStyles_(){cancelAnimationFrame(this.scrollFrame_),this.scrollFrame_=requestAnimationFrame(()=>{const t=this.adapter_.getViewportScrollY(),e=this.scrolledOutOfThreshold_(t);if(e&&this.executedLastChange_)return;const i=this.getFlexibleExpansionRatio_(t);this.updateToolbarFlexibleState_(i),this.fixedLastrow_&&this.updateToolbarFixedState_(t),this.hasFlexibleRow_&&this.updateFlexibleRowElementStyles_(i),this.executedLastChange_=e,this.adapter_.notifyChange({flexibleExpansionRatio:i})})}scrolledOutOfThreshold_(t){return t>this.calculations_.scrollThreshold}initKeyRatio_(){const t=this.getRowHeight_(),e=this.adapter_.getFirstRowElementOffsetHeight()/t;this.calculations_.toolbarRatio=this.adapter_.getOffsetHeight()/t,this.calculations_.flexibleExpansionRatio=e-1,this.calculations_.maxTranslateYRatio=this.fixedLastrow_?this.calculations_.toolbarRatio-e:0,this.calculations_.scrollThresholdRatio=(this.fixedLastrow_?this.calculations_.toolbarRatio:e)-1}getRowHeight_(){const t=Pi.numbers.TOOLBAR_MOBILE_BREAKPOINT;return this.adapter_.getViewportWidth()<t?Pi.numbers.TOOLBAR_ROW_MOBILE_HEIGHT:Pi.numbers.TOOLBAR_ROW_HEIGHT}updateToolbarFlexibleState_(t){this.adapter_.removeClass(Pi.cssClasses.FLEXIBLE_MAX),this.adapter_.removeClass(Pi.cssClasses.FLEXIBLE_MIN),1===t?this.adapter_.addClass(Pi.cssClasses.FLEXIBLE_MAX):0===t&&this.adapter_.addClass(Pi.cssClasses.FLEXIBLE_MIN)}updateToolbarFixedState_(t){const e=Math.max(0,Math.min(t-this.calculations_.flexibleExpansionHeight,this.calculations_.maxTranslateYDistance));this.adapter_.setStyle("transform",`translateY(${-e}px)`),e===this.calculations_.maxTranslateYDistance?this.adapter_.addClass(Pi.cssClasses.FIXED_AT_LAST_ROW):this.adapter_.removeClass(Pi.cssClasses.FIXED_AT_LAST_ROW)}updateFlexibleRowElementStyles_(t){if(this.fixed_){const e=this.calculations_.flexibleExpansionHeight*t;this.adapter_.setStyleForFlexibleRowElement("height",`${e+this.calculations_.toolbarRowHeight}px`)}this.useFlexDefaultBehavior_&&this.updateElementStylesDefaultBehavior_(t)}updateElementStylesDefaultBehavior_(t){const e=Pi.numbers.MAX_TITLE_SIZE,i=Pi.numbers.MIN_TITLE_SIZE,n=(e-i)*t+i;this.adapter_.setStyleForTitleElement("font-size",`${n}rem`)}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Bi extends d{static attachTo(t){return new Bi(t)}get firstRowElement_(){return this.root_.querySelector(Pi.strings.FIRST_ROW_SELECTOR)}get titleElement_(){return this.root_.querySelector(Pi.strings.TITLE_SELECTOR)}set fixedAdjustElement(t){this.fixedAdjustElement_=t,this.foundation_.updateAdjustElementStyles()}get fixedAdjustElement(){return this.fixedAdjustElement_}initialize(){this.ripples_=[].map.call(this.root_.querySelectorAll(Pi.strings.ICON_SELECTOR),t=>{const e=x.attachTo(t);return e.unbounded=!0,e})}destroy(){this.ripples_.forEach(t=>{t.destroy()}),super.destroy()}getDefaultFoundation(){return new Pi({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),registerScrollHandler:t=>window.addEventListener("scroll",t),deregisterScrollHandler:t=>window.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportWidth:()=>window.innerWidth,getViewportScrollY:()=>window.pageYOffset,getOffsetHeight:()=>this.root_.offsetHeight,getFirstRowElementOffsetHeight:()=>this.firstRowElement_.offsetHeight,notifyChange:t=>this.emit(Pi.strings.CHANGE_EVENT,t),setStyle:(t,e)=>this.root_.style.setProperty(t,e),setStyleForTitleElement:(t,e)=>this.titleElement_.style.setProperty(t,e),setStyleForFlexibleRowElement:(t,e)=>this.firstRowElement_.style.setProperty(t,e),setStyleForFixedAdjustElement:(t,e)=>{this.fixedAdjustElement&&this.fixedAdjustElement.style.setProperty(t,e)}})}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Vi={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed"},ji={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},qi={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Wi extends l{static get strings(){return qi}static get cssClasses(){return Vi}static get numbers(){return ji}static get defaultAdapter(){return{hasClass:()=>{},addClass:()=>{},removeClass:()=>{},setStyle:()=>{},getTopAppBarHeight:()=>{},registerNavigationIconInteractionHandler:()=>{},deregisterNavigationIconInteractionHandler:()=>{},notifyNavigationIconClicked:()=>{},registerScrollHandler:()=>{},deregisterScrollHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},getViewportScrollY:()=>0,getTotalActionItems:()=>0}}constructor(t){super(Object.assign(Wi.defaultAdapter,t)),this.navClickHandler_=(()=>this.adapter_.notifyNavigationIconClicked()),this.scrollHandler_=(()=>{})}init(){this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)}destroy(){this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)}initScrollHandler(){this.adapter_.registerScrollHandler(this.scrollHandler_)}destroyScrollHandler(){this.adapter_.deregisterScrollHandler(this.scrollHandler_)}}var Ui=Wi;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ki=class extends Ui{constructor(t){super(t),this.wasScrolled_=!1,this.scrollHandler_=(()=>this.fixedScrollHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}fixedScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(Vi.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(Vi.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Gi=class extends Ui{constructor(t){super(t),this.isCollapsed=!1,this.scrollHandler_=(()=>this.shortAppBarScrollHandler_())}init(){super.init();const t=this.adapter_.hasClass(Vi.SHORT_COLLAPSED_CLASS);this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(Vi.SHORT_HAS_ACTION_ITEM_CLASS),t||(this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}shortAppBarScrollHandler_(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed&&(this.adapter_.removeClass(Vi.SHORT_COLLAPSED_CLASS),this.isCollapsed=!1):this.isCollapsed||(this.adapter_.addClass(Vi.SHORT_COLLAPSED_CLASS),this.isCollapsed=!0)}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const zi=0;var Xi=class extends Ui{constructor(t){super(t),this.lastScrollPosition_=this.adapter_.getViewportScrollY(),this.topAppBarHeight_=this.adapter_.getTopAppBarHeight(),this.wasDocked_=!0,this.isDockedShowing_=!0,this.currentAppBarOffsetTop_=0,this.isCurrentlyBeingResized_=!1,this.resizeThrottleId_=zi,this.resizeDebounceId_=zi,this.scrollHandler_=(()=>this.topAppBarScrollHandler_()),this.resizeHandler_=(()=>this.topAppBarResizeHandler_())}init(){super.init(),this.adapter_.registerScrollHandler(this.scrollHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}destroy(){super.destroy(),this.adapter_.deregisterScrollHandler(this.scrollHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.setStyle("top","")}checkForUpdate_(){const t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,n=e&&i;if(n)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return n}moveTopAppBar_(){if(this.checkForUpdate_()){let t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-ji.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}}topAppBarScrollHandler_(){const t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())}topAppBarResizeHandler_(){this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(()=>{this.resizeThrottleId_=zi,this.throttledResizeHandler_()},ji.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(()=>{this.topAppBarScrollHandler_(),this.isCurrentlyBeingResized_=!1,this.resizeDebounceId_=zi},ji.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)}throttledResizeHandler_(){const t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class $i extends d{constructor(...t){super(...t),this.navIcon_,this.iconRipples_,this.scrollTarget_}initialize(t=(t=>x.attachTo(t))){this.navIcon_=this.root_.querySelector(qi.NAVIGATION_ICON_SELECTOR);const e=[].slice.call(this.root_.querySelectorAll(qi.ACTION_ITEM_SELECTOR));this.navIcon_&&e.push(this.navIcon_),this.iconRipples_=e.map(e=>{const i=t(e);return i.unbounded=!0,i})}destroy(){this.iconRipples_.forEach(t=>t.destroy()),super.destroy()}setScrollTarget(t){this.foundation_.destroyScrollHandler(),this.scrollTarget_=t,this.foundation_.initScrollHandler()}static attachTo(t){return new $i(t)}getDefaultFoundation(){const t=Object.assign({hasClass:t=>this.root_.classList.contains(t),addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setStyle:(t,e)=>this.root_.style.setProperty(t,e),getTopAppBarHeight:()=>this.root_.clientHeight,registerNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:(t,e)=>{this.navIcon_&&this.navIcon_.removeEventListener(t,e)},notifyNavigationIconClicked:()=>{this.emit(qi.NAVIGATION_EVENT,{})},registerScrollHandler:t=>this.scrollTarget_.addEventListener("scroll",t),deregisterScrollHandler:t=>this.scrollTarget_.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportScrollY:()=>this.scrollTarget_[this.scrollTarget_===window?"pageYOffset":"scrollTop"],getTotalActionItems:()=>this.root_.querySelectorAll(qi.ACTION_ITEM_SELECTOR).length});let e;return this.scrollTarget_=window,e=this.root_.classList.contains(Vi.SHORT_CLASS)?new Gi(t):this.root_.classList.contains(Vi.FIXED_CLASS)?new Ki(t):new Xi(t)}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */o.register("MDCCheckbox",P),o.register("MDCChip",W),o.register("MDCChipSet",$),o.register("MDCDialog",it),o.register("MDCDrawer",ft),o.register("MDCFloatingLabel",vt),o.register("MDCFormField",It),o.register("MDCRipple",x),o.register("MDCGridList",Lt),o.register("MDCIconButtonToggle",Nt),o.register("MDCIconToggle",Bt),o.register("MDCLineRipple",zt),o.register("MDCLinearProgress",Wt),o.register("MDCList",ut),o.register("MDCNotchedOutline",he),o.register("MDCRadio",ge),o.register("MDCSnackbar",Me),o.register("MDCTabBar",mi),o.register("MDCTextField",Hi),o.register("MDCMenu",ae),o.register("MDCMenuSurface",re),o.register("MDCSelect",ye),o.register("MDCSlider",Ne),o.register("MDCSwitch",qe),o.register("MDCToolbar",Bi),o.register("MDCTopAppBar",$i),i(4),i(7),s(document).ready(function(){s(".iconToggle").each(function(){new n.MDCIconButtonToggle(this)}),s(".rippleEffect").each(function(){new x(this)}),s(".iconToggleRipple").each(function(){new x(this).unbounded=!0})})}]);