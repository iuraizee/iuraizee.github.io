!function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="javascripts/",n(n.s=17)}([function(t,n,e){"use strict";function r(t,n){this._groups=t,this._parents=n}function i(){return new r([[document.documentElement]],k)}e.d(n,"b",function(){return k}),n.a=r;var u=e(22),o=e(23),c=e(24),a=e(25),s=e(14),f=e(27),l=e(28),h=e(29),p=e(30),v=e(31),d=e(32),_=e(33),m=e(34),y=e(35),g=e(36),w=e(37),b=e(16),A=e(38),x=e(39),S=e(40),j=e(41),O=e(42),E=e(43),C=e(44),N=e(45),P=e(46),M=e(47),R=e(48),L=e(7),T=e(49),k=[null];r.prototype=i.prototype={constructor:r,select:u.a,selectAll:o.a,filter:c.a,data:a.a,enter:s.b,exit:f.a,merge:l.a,order:h.a,sort:p.a,call:v.a,nodes:d.a,node:_.a,size:m.a,empty:y.a,each:g.a,attr:w.a,style:b.a,property:A.a,classed:x.a,text:S.a,html:j.a,raise:O.a,lower:E.a,append:C.a,insert:N.a,remove:P.a,clone:M.a,datum:R.a,on:L.a,dispatch:T.a}},function(t,n,e){"use strict";function r(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===o.b&&n.documentElement.namespaceURI===o.b?n.createElement(t):n.createElementNS(e,t)}}function i(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var u=e(3),o=e(4);n.a=function(t){var n=Object(u.a)(t);return(n.local?i:r)(n)}},function(t,n,e){"use strict";n.a=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}},function(t,n,e){"use strict";var r=e(4);n.a=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),r.a.hasOwnProperty(n)?{space:r.a[n],local:t}:t}},function(t,n,e){"use strict";e.d(n,"b",function(){return r});var r="http://www.w3.org/1999/xhtml";n.a={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}},function(t,n,e){"use strict";function r(){}n.a=function(t){return null==t?r:function(){return this.querySelector(t)}}},function(t,n,e){"use strict";n.a=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}},function(t,n,e){"use strict";function r(t,n,e){return t=i(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function i(t,n,e){return function(r){var i=s;s=r;try{t.call(this,this.__data__,n,e)}finally{s=i}}}function u(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function o(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,u=n.length;r<u;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function c(t,n,e){var u=a.hasOwnProperty(t.type)?r:i;return function(r,i,o){var c,a=this.__on,s=u(n,i,o);if(a)for(var f=0,l=a.length;f<l;++f)if((c=a[f]).type===t.type&&c.name===t.name)return this.removeEventListener(c.type,c.listener,c.capture),this.addEventListener(c.type,c.listener=s,c.capture=e),void(c.value=n);this.addEventListener(t.type,s,e),c={type:t.type,name:t.name,value:n,listener:s,capture:e},a?a.push(c):this.__on=[c]}}e.d(n,"b",function(){return s});var a={},s=null;if("undefined"!=typeof document){"onmouseenter"in document.documentElement||(a={mouseenter:"mouseover",mouseleave:"mouseout"})}n.a=function(t,n,e){var r,i,a=u(t+""),s=a.length;{if(!(arguments.length<2)){for(f=n?c:o,null==e&&(e=!1),r=0;r<s;++r)this.each(f(a[r],n,e));return this}var f=this.node().__on;if(f)for(var l,h=0,p=f.length;h<p;++h)for(r=0,l=f[h];r<s;++r)if((i=a[r]).type===l.type&&i.name===l.name)return l.value}}},function(t,n,e){"use strict";var r=e(7);n.a=function(){for(var t,n=r.b;t=n.sourceEvent;)n=t;return n}},function(t,n,e){"use strict";function r(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function i(t,n){var e=r(t);return function(r,i){return n(e(r),i,t)}}function u(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}var o={},c={},a=34,s=10,f=13;n.a=function(t){function n(t,n){var u,o,c=e(t,function(t,e){if(u)return u(t,e-1);o=t,u=n?i(t,n):r(t)});return c.columns=o||[],c}function e(t,n){function e(){if(p)return c;if(v)return v=!1,o;var n,e,r=l;if(t.charCodeAt(r)===a){for(;l++<u&&t.charCodeAt(l)!==a||t.charCodeAt(++l)===a;);return(n=l)>=u?p=!0:(e=t.charCodeAt(l++))===s?v=!0:e===f&&(v=!0,t.charCodeAt(l)===s&&++l),t.slice(r+1,n-1).replace(/""/g,'"')}for(;l<u;){if((e=t.charCodeAt(n=l++))===s)v=!0;else if(e===f)v=!0,t.charCodeAt(l)===s&&++l;else if(e!==_)continue;return t.slice(r,n)}return p=!0,t.slice(r,u)}var r,i=[],u=t.length,l=0,h=0,p=u<=0,v=!1;for(t.charCodeAt(u-1)===s&&--u,t.charCodeAt(u-1)===f&&--u;(r=e())!==c;){for(var d=[];r!==o&&r!==c;)d.push(r),r=e();n&&null==(d=n(d,h++))||i.push(d)}return i}function l(n,e){return null==e&&(e=u(n)),[e.map(v).join(t)].concat(n.map(function(n){return e.map(function(t){return v(n[t])}).join(t)})).join("\n")}function h(t){return t.map(p).join("\n")}function p(n){return n.map(v).join(t)}function v(t){return null==t?"":d.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}var d=new RegExp('["'+t+"\n\r]"),_=t.charCodeAt(0);return{parse:n,parseRows:e,format:l,formatRows:h}}},function(t,n,e){"use strict";function r(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}n.a=function(t,n){return fetch(t,n).then(r)}},function(t,n,e){"use strict";var r=e(0);n.a=function(t){return"string"==typeof t?new r.a([[document.querySelector(t)]],[document.documentElement]):new r.a([[t]],r.b)}},function(t,n,e){"use strict";function r(){return[]}n.a=function(t){return null==t?r:function(){return this.querySelectorAll(t)}}},function(t,n,e){"use strict";var r=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var i=document.documentElement;if(!i.matches){var u=i.webkitMatchesSelector||i.msMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector;r=function(t){return function(){return u.call(this,t)}}}}n.a=r},function(t,n,e){"use strict";function r(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}n.a=r;var i=e(15),u=e(0);n.b=function(){return new u.a(this._enter||this._groups.map(i.a),this._parents)},r.prototype={constructor:r,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}},function(t,n,e){"use strict";n.a=function(t){return new Array(t.length)}},function(t,n,e){"use strict";function r(t){return function(){this.style.removeProperty(t)}}function i(t,n,e){return function(){this.style.setProperty(t,n,e)}}function u(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function o(t,n){return t.style.getPropertyValue(n)||Object(c.a)(t).getComputedStyle(t,null).getPropertyValue(n)}var c=e(6);n.a=function(t,n,e){return arguments.length>1?this.each((null==n?r:"function"==typeof n?u:i)(t,n,null==e?"":e)):o(this.node(),t)}},function(t,n,e){t.exports=e(18)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(19);Object(r.a)()},function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e(20),i=e(55),u={select:r.a,selectAll:r.b,csv:i.a},o=function(){u.csv("projects.csv").then(function(t){var n=u.select("#projects"),e=n.selectAll(".block").data(t.filter(function(t){if("TRUE"==t.featured)return t})).enter().append("div").classed("block",!0);e.append("a").classed("link",!0).attr("target","_blank").attr("href",function(t){return t.url}).append("div").attr("class","block-container").append("img").attr("src",function(t){return"images/"+t.image}).attr("class",function(t){return t.featured+" "+t.image}),e.append("span").classed("title",!0).text(function(t){return t.title}),e.append("span").classed("publication",!0).text(function(t){return t.pub})})}},function(t,n,e){"use strict";var r=(e(21),e(1),e(50),e(13),e(51),e(3),e(4),e(2),e(11));e.d(n,"a",function(){return r.a});var i=e(52);e.d(n,"b",function(){return i.a});e(0),e(5),e(12),e(16),e(53),e(54),e(6),e(7)},function(t,n,e){"use strict";e(1),e(11)},function(t,n,e){"use strict";var r=e(0),i=e(5);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,u=new Array(e),o=0;o<e;++o)for(var c,a,s=n[o],f=s.length,l=u[o]=new Array(f),h=0;h<f;++h)(c=s[h])&&(a=t.call(c,c.__data__,h,s))&&("__data__"in c&&(a.__data__=c.__data__),l[h]=a);return new r.a(u,this._parents)}},function(t,n,e){"use strict";var r=e(0),i=e(12);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,u=[],o=[],c=0;c<e;++c)for(var a,s=n[c],f=s.length,l=0;l<f;++l)(a=s[l])&&(u.push(t.call(a,a.__data__,l,s)),o.push(a));return new r.a(u,o)}},function(t,n,e){"use strict";var r=e(0),i=e(13);n.a=function(t){"function"!=typeof t&&(t=Object(i.a)(t));for(var n=this._groups,e=n.length,u=new Array(e),o=0;o<e;++o)for(var c,a=n[o],s=a.length,f=u[o]=[],l=0;l<s;++l)(c=a[l])&&t.call(c,c.__data__,l,a)&&f.push(c);return new r.a(u,this._parents)}},function(t,n,e){"use strict";function r(t,n,e,r,i,u){for(var c,a=0,s=n.length,f=u.length;a<f;++a)(c=n[a])?(c.__data__=u[a],r[a]=c):e[a]=new o.a(t,u[a]);for(;a<s;++a)(c=n[a])&&(i[a]=c)}function i(t,n,e,r,i,u,c){var s,f,l,h={},p=n.length,v=u.length,d=new Array(p);for(s=0;s<p;++s)(f=n[s])&&(d[s]=l=a+c.call(f,f.__data__,s,n),l in h?i[s]=f:h[l]=f);for(s=0;s<v;++s)l=a+c.call(t,u[s],s,u),(f=h[l])?(r[s]=f,f.__data__=u[s],h[l]=null):e[s]=new o.a(t,u[s]);for(s=0;s<p;++s)(f=n[s])&&h[d[s]]===f&&(i[s]=f)}var u=e(0),o=e(14),c=e(26),a="$";n.a=function(t,n){if(!t)return m=new Array(this.size()),p=-1,this.each(function(t){m[++p]=t}),m;var e=n?i:r,o=this._parents,a=this._groups;"function"!=typeof t&&(t=Object(c.a)(t));for(var s=a.length,f=new Array(s),l=new Array(s),h=new Array(s),p=0;p<s;++p){var v=o[p],d=a[p],_=d.length,m=t.call(v,v&&v.__data__,p,o),y=m.length,g=l[p]=new Array(y),w=f[p]=new Array(y);e(v,d,g,w,h[p]=new Array(_),m,n);for(var b,A,x=0,S=0;x<y;++x)if(b=g[x]){for(x>=S&&(S=x+1);!(A=w[S])&&++S<y;);b._next=A||null}}return f=new u.a(f,o),f._enter=l,f._exit=h,f}},function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},function(t,n,e){"use strict";var r=e(15),i=e(0);n.a=function(){return new i.a(this._exit||this._groups.map(r.a),this._parents)}},function(t,n,e){"use strict";var r=e(0);n.a=function(t){for(var n=this._groups,e=t._groups,i=n.length,u=e.length,o=Math.min(i,u),c=new Array(i),a=0;a<o;++a)for(var s,f=n[a],l=e[a],h=f.length,p=c[a]=new Array(h),v=0;v<h;++v)(s=f[v]||l[v])&&(p[v]=s);for(;a<i;++a)c[a]=n[a];return new r.a(c,this._parents)}},function(t,n,e){"use strict";n.a=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],u=i.length-1,o=i[u];--u>=0;)(r=i[u])&&(o&&o!==r.nextSibling&&o.parentNode.insertBefore(r,o),o=r);return this}},function(t,n,e){"use strict";function r(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var i=e(0);n.a=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=r);for(var e=this._groups,u=e.length,o=new Array(u),c=0;c<u;++c){for(var a,s=e[c],f=s.length,l=o[c]=new Array(f),h=0;h<f;++h)(a=s[h])&&(l[h]=a);l.sort(n)}return new i.a(o,this._parents).order()}},function(t,n,e){"use strict";n.a=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}},function(t,n,e){"use strict";n.a=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t}},function(t,n,e){"use strict";n.a=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,u=r.length;i<u;++i){var o=r[i];if(o)return o}return null}},function(t,n,e){"use strict";n.a=function(){var t=0;return this.each(function(){++t}),t}},function(t,n,e){"use strict";n.a=function(){return!this.node()}},function(t,n,e){"use strict";n.a=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,u=n[e],o=0,c=u.length;o<c;++o)(i=u[o])&&t.call(i,i.__data__,o,u);return this}},function(t,n,e){"use strict";function r(t){return function(){this.removeAttribute(t)}}function i(t){return function(){this.removeAttributeNS(t.space,t.local)}}function u(t,n){return function(){this.setAttribute(t,n)}}function o(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function c(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function a(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var s=e(3);n.a=function(t,n){var e=Object(s.a)(t);if(arguments.length<2){var f=this.node();return e.local?f.getAttributeNS(e.space,e.local):f.getAttribute(e)}return this.each((null==n?e.local?i:r:"function"==typeof n?e.local?a:c:e.local?o:u)(e,n))}},function(t,n,e){"use strict";function r(t){return function(){delete this[t]}}function i(t,n){return function(){this[t]=n}}function u(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}n.a=function(t,n){return arguments.length>1?this.each((null==n?r:"function"==typeof n?u:i)(t,n)):this.node()[t]}},function(t,n,e){"use strict";function r(t){return t.trim().split(/^|\s+/)}function i(t){return t.classList||new u(t)}function u(t){this._node=t,this._names=r(t.getAttribute("class")||"")}function o(t,n){for(var e=i(t),r=-1,u=n.length;++r<u;)e.add(n[r])}function c(t,n){for(var e=i(t),r=-1,u=n.length;++r<u;)e.remove(n[r])}function a(t){return function(){o(this,t)}}function s(t){return function(){c(this,t)}}function f(t,n){return function(){(n.apply(this,arguments)?o:c)(this,t)}}u.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}},n.a=function(t,n){var e=r(t+"");if(arguments.length<2){for(var u=i(this.node()),o=-1,c=e.length;++o<c;)if(!u.contains(e[o]))return!1;return!0}return this.each(("function"==typeof n?f:n?a:s)(e,n))}},function(t,n,e){"use strict";function r(){this.textContent=""}function i(t){return function(){this.textContent=t}}function u(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}n.a=function(t){return arguments.length?this.each(null==t?r:("function"==typeof t?u:i)(t)):this.node().textContent}},function(t,n,e){"use strict";function r(){this.innerHTML=""}function i(t){return function(){this.innerHTML=t}}function u(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}n.a=function(t){return arguments.length?this.each(null==t?r:("function"==typeof t?u:i)(t)):this.node().innerHTML}},function(t,n,e){"use strict";function r(){this.nextSibling&&this.parentNode.appendChild(this)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";function r(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";var r=e(1);n.a=function(t){var n="function"==typeof t?t:Object(r.a)(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}},function(t,n,e){"use strict";function r(){return null}var i=e(1),u=e(5);n.a=function(t,n){var e="function"==typeof t?t:Object(i.a)(t),o=null==n?r:"function"==typeof n?n:Object(u.a)(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),o.apply(this,arguments)||null)})}},function(t,n,e){"use strict";function r(){var t=this.parentNode;t&&t.removeChild(this)}n.a=function(){return this.each(r)}},function(t,n,e){"use strict";function r(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function i(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}n.a=function(t){return this.select(t?i:r)}},function(t,n,e){"use strict";n.a=function(t){return arguments.length?this.property("__data__",t):this.node().__data__}},function(t,n,e){"use strict";function r(t,n,e){var r=Object(o.a)(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function i(t,n){return function(){return r(this,t,n)}}function u(t,n){return function(){return r(this,t,n.apply(this,arguments))}}var o=e(6);n.a=function(t,n){return this.each(("function"==typeof n?u:i)(t,n))}},function(t,n,e){"use strict";function r(){return new i}function i(){this._="@"+(++u).toString(36)}var u=0;i.prototype=r.prototype={constructor:i,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}},function(t,n,e){"use strict";e(8),e(2)},function(t,n,e){"use strict";var r=e(0);n.a=function(t){return"string"==typeof t?new r.a([document.querySelectorAll(t)],[document.documentElement]):new r.a([null==t?[]:t],r.b)}},function(t,n,e){"use strict";e(8),e(2)},function(t,n,e){"use strict";e(8),e(2)},function(t,n,e){"use strict";var r=(e(56),e(57),e(58));e.d(n,"a",function(){return r.a});e(62),e(63),e(10),e(64)},function(t,n,e){"use strict"},function(t,n,e){"use strict"},function(t,n,e){"use strict";function r(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),Object(u.a)(n,e).then(function(n){return t(n,r)})}}e.d(n,"a",function(){return o});var i=e(59),u=e(10),o=r(i.a);r(i.c)},function(t,n,e){"use strict";var r=e(9);e.d(n,"b",function(){return r.a});var i=e(60);e.d(n,"a",function(){return i.a});var u=e(61);e.d(n,"c",function(){return u.a})},function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e(9),i=Object(r.a)(","),u=i.parse;i.parseRows,i.format,i.formatRows},function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e(9),i=Object(r.a)("\t"),u=i.parse;i.parseRows,i.format,i.formatRows},function(t,n,e){"use strict"},function(t,n,e){"use strict"},function(t,n,e){"use strict";function r(t){return function(n,e){return Object(i.a)(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}var i=e(10);r("application/xml"),r("text/html"),r("image/svg+xml")}]);