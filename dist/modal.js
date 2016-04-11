/*!
 * mimodal - https://draggable.github.io/mimodal
 * Version: 0.0.1
 * Author: Kevin Chappell
 */
!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(){var t=this,e={modal:window.mimodal.dialog.bind(t),dialog:window.mimodal.confirm.bind(t)},n={};for(var o in t.dataset)t.dataset.hasOwnProperty(o)&&-1!==o.indexOf("modal")&&(n[o]=t.dataset[o]);e[t.dataset.toggle](n)}n(1);var a=n(5),i=o(a);window.mimodal=new i["default"];for(var u=document.querySelectorAll("[data-toggle]"),s=0;s<u.length;s++)u[s].addEventListener("click",r)},function(t,e){},,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),a=o(r),i=n(21),u=o(i),s=n(22),c=o(s),l=n(25),f=new l.Helpers,d=new l.Events,m=function(){function t(e){(0,u["default"])(this,t);var n=this;n.defaults={buttons:[{tag:"button",content:"No",attrs:{className:"btn btn-sm btn-danger"},action:function(){n.closeDialog()}},{tag:"button",content:"Yes",attrs:{className:"btn btn-sm btn-success"},action:function(){n.closeDialog()}}],coords:{pageX:Math.max(document.documentElement.clientWidth,window.innerWidth||0)/2,pageY:Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2},className:"mimodal",modalTransitionSpeed:500,modalStyle:"simple",prefix:"modal-"},d.add("resize",function(){n.defaults.coords={pageX:Math.max(document.documentElement.clientWidth,window.innerWidth||0)/2,pageY:Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2}}),n.opts=(0,a["default"])(n.defaults,e)}return(0,c["default"])(t,[{key:"getCoords",value:function(t){var e={};if(t){var n=t.getBoundingClientRect(),o=document.body.getBoundingClientRect();e={pageX:n.left+n.width/2,pageY:n.top-o.top-12}}else e={pageX:Math.max(document.documentElement.clientWidth,window.innerWidth||0)/2,pageY:Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2};return e}},{key:"showOverlay",value:function(t){var e=this,n=t.className+"-overlay",o=f.markup({tag:"div",attrs:{className:n}});if(o.classList.add(window.mimodal.opts.prefix+t.modalStyle),document.body.appendChild(o),"fade"===t.modalStyle?f.fadeIn(o):f.setVisible(o),t.modalTimeout){var r=Number(t.modalTimeout);setTimeout(function(){e.closeDialog(o,t)},r)}return o.onclick=function(r){r.target.classList.contains(n)&&e.closeDialog(o,t)},o}},{key:"closeDialog",value:function(){var t=window.mimodal.opts,e=document.querySelector("."+t.className+"-overlay");e.classList.remove(t.prefix+"visible"),e.classList.add(t.prefix+"removing"),"fade"===t.modalStyle?f.fadeOut(e):e.remove(),document.dispatchEvent(d.modalClosed)}},{key:"dialog",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=(0,a["default"])({},window.mimodal.defaults,t),n=[],o=[],r=window.mimodal.showOverlay(e);if(e.modalHeader&&n.push(f.markup({tag:"header",attrs:{className:e.className+"-header"},content:e.modalHeader})),e.modalContent&&n.push(f.markup({tag:"div",attrs:{className:e.className+"-content"},content:e.modalContent})),e.confirm){for(var i,u=0;u<e.buttons.length;u++){var s=f.markup(e.buttons[u]);e.buttons[u].action&&"function"==typeof e.buttons[u].action&&(s.onclick=e.buttons[u].action),o.push(s)}i=f.markup({tag:"div",attrs:{className:"btn-group"},content:o}),n.push(f.markup({tag:"footer",attrs:{className:e.className+"-footer"},content:i}))}var c=[{type:"close",label:"Close Modal",action:window.mimodal.closeDialog}],l=f.makeControlBar(c),m=f.markup({tag:"div",content:n,attrs:{className:e.className}});if(e.coords?m.style.position="fixed":m.classList.add("positioned"),e.draggable){var p=f.markup({tag:"li",content:"Move Modal",attrs:{className:"modal-move"}});m.classList.add("draggable"),l.insertBefore(p,l.firstChild),p.addEventListener("mousedown",d.drag.bind(m,d),!1),m.addEventListener("mousedown",d.drag.bind(m,d),!1)}return m.style.left=e.coords.pageX+"px",m.style.top=e.coords.pageY+"px",m.insertBefore(l,m.firstChild),r.appendChild(m),e.confirm&&o[e.buttons.length-1].focus(),d.add("resize",function(){var t=window.mimodal.getCoords();m.style.left=t.pageX+"px",m.style.top=t.pageY+"px"}),document.dispatchEvent(d.modalOpen),m}},{key:"confirm",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=(0,a["default"])({},window.mimodal.defaults,t);return e.confirm=!0,window.mimodal.dialog(e)}}]),t}();e["default"]=m},function(t,e,n){t.exports={"default":n(7),__esModule:!0}},function(t,e,n){n(8),t.exports=n(11).Object.assign},function(t,e,n){var o=n(9);o(o.S+o.F,"Object",{assign:n(14)})},function(t,e,n){var o=n(10),r=n(11),a=n(12),i="prototype",u=function(t,e,n){var s,c,l,f=t&u.F,d=t&u.G,m=t&u.S,p=t&u.P,v=t&u.B,y=t&u.W,g=d?r:r[e]||(r[e]={}),h=d?o:m?o[e]:(o[e]||{})[i];d&&(n=e);for(s in n)c=!f&&h&&s in h,c&&s in g||(l=c?h[s]:n[s],g[s]=d&&"function"!=typeof h[s]?n[s]:v&&c?a(l,o):y&&h[s]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[i]=t[i],e}(l):p&&"function"==typeof l?a(Function.call,l):l,p&&((g[i]||(g[i]={}))[s]=l))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var o=n(13);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(15),r=n(16),a=n(18);t.exports=n(20)(function(){var t=Object.assign,e={},n={},o=Symbol(),r="abcdefghijklmnopqrst";return e[o]=7,r.split("").forEach(function(t){n[t]=t}),7!=t({},e)[o]||Object.keys(t({},n)).join("")!=r})?function(t,e){for(var n=r(t),i=arguments,u=i.length,s=1,c=o.getKeys,l=o.getSymbols,f=o.isEnum;u>s;)for(var d,m=a(i[s++]),p=l?c(m).concat(l(m)):c(m),v=p.length,y=0;v>y;)f.call(m,d=p[y++])&&(n[d]=m[d]);return n}:Object.assign},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){var o=n(17);t.exports=function(t){return Object(o(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(23),a=o(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,a["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},function(t,e,n){t.exports={"default":n(24),__esModule:!0}},function(t,e,n){var o=n(15);t.exports=function(t,e,n){return o.setDesc(t,e,n)}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Events=e.Helpers=void 0;var r=n(26),a=o(r),i=n(21),u=o(i),s=n(22),c=o(s);e.Helpers=function(){function t(){(0,u["default"])(this,t)}return(0,c["default"])(t,[{key:"hyphenCase",value:function(t){return t=t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()}),t.replace(/\s/g,"-").replace(/^-+/g,"")}},{key:"setVisible",value:function(t){t.style.opacity=1,t.style.display="block"}},{key:"safeAttrName",value:function(t){var e={className:"class"};return e[t]||this.hyphenCase(t)}},{key:"fadeOut",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?500:arguments[1],n=1/(e/60);t.style.opacity=1,function o(){var e=Number(t.style.opacity)-n;e>0?(t.style.opacity=e,requestAnimationFrame(o)):t.remove()}()}},{key:"fadeIn",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?500:arguments[1],n=this,o=1/(e/60);t.classList.contains("modal-hidden")&&t.classList.remove("modal-hidden"),t.style.opacity=0,t.style.display="block",function r(){var e=Number(t.style.opacity)+o;1>e?(t.style.opacity=e,requestAnimationFrame(r)):n.setVisible(t)}()}},{key:"makeControlBar",value:function(t){for(var e=this,n=[],o=0;o<t.length;o++){var r=e.markup({tag:"li",content:t[o].label,attrs:{title:t[o].label,className:"modal-"+t[o].type}});t[o].action&&(r.onclick=t[o].action),n.push(r)}return e.markup({tag:"ul",content:n,attrs:{className:"modal-controls"}})}},{key:"markup",value:function(t){var e=void 0,n=document.createElement(t.tag),o=function(t){return Array.isArray(t)?"array":"undefined"==typeof t?"undefined":(0,a["default"])(t)},r={string:function(t){n.innerHTML=t},object:function(t){return n.appendChild(t)},array:function(t){for(var n=0;n<t.length;n++)e=o(t[n]),r[e](t[n])}};if(t.attrs)for(var i in t.attrs)if(t.attrs.hasOwnProperty(i)&&t.attrs[i]){var u=this.safeAttrName(i);n.setAttribute(u,t.attrs[i])}return e=o(t.content),t.content&&r[e].call(this,t.content),n}}]),t}(),e.Events=function(){function t(){(0,u["default"])(this,t),this.modalOpen=new Event("modalOpen"),this.modalClosed=new Event("modalClosed")}return(0,c["default"])(t,[{key:"add",value:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?window:arguments[2],o=this;o[t]=o[t]||{callbacks:[]},o.addCallback(t,e);var r=function(e){o.throttle(o[t],e)};return n.addEventListener(t,r),r}},{key:"remove",value:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?window:arguments[2],o=this;o[t]=o[t]||{callbacks:[]},o.addCallback(t,e);var r=function(e){o.throttle(o[t],e)};return n.addEventListener(t,r),r}},{key:"addCallback",value:function(t,e){var n=this;e&&n[t].callbacks.push(e)}},{key:"runCallbacks",value:function(t,e){t.callbacks.forEach(function(t){t(e)}),t.running=!1}},{key:"throttle",value:function(t,e){var n=this;t.running||(t.running=!0,window.requestAnimationFrame?window.requestAnimationFrame(function(){n.runCallbacks(t,e)}):setTimeout(n.runCallbacks.bind(t),66))}},{key:"drag",value:function e(t,n){function o(t,e){var n=t.offsetWidth/2,o=t.offsetHeight/2;return{x:e.clientX-t.offsetLeft+n-n,y:e.clientY-t.offsetTop+o-o}}var e={},r=this;e.move=function(t){var n={x:t.clientX-e.offset.x,y:t.clientY-e.offset.y};r.style.position="absolute",r.style.top=n.y+"px",r.style.left=n.x+"px"},e.stop=function(){t.mousemove.callbacks=[],window.removeEventListener("mouseup",e.stop)},e.start=function(n){return n.target===r||n.target.classList.contains("modal-move")?(e.offset=o(r,n),window.addEventListener("mouseup",e.stop),void t.add("mousemove",e.move)):!1}(n)}}]),t}()},function(t,e,n){"use strict";var o=n(27)["default"];e["default"]=function(t){return t&&t.constructor===o?"symbol":typeof t},e.__esModule=!0},function(t,e,n){t.exports={"default":n(28),__esModule:!0}},function(t,e,n){n(29),n(47),t.exports=n(11).Symbol},function(t,e,n){"use strict";var o=n(15),r=n(10),a=n(30),i=n(31),u=n(9),s=n(32),c=n(20),l=n(35),f=n(36),d=n(38),m=n(37),p=n(39),v=n(41),y=n(42),g=n(43),h=n(44),b=n(40),w=n(34),x=o.getDesc,k=o.setDesc,S=o.create,O=v.get,_=r.Symbol,E=r.JSON,N=E&&E.stringify,C=!1,M=m("_hidden"),j=o.isEnum,P=l("symbol-registry"),D=l("symbols"),L="function"==typeof _,A=Object.prototype,T=i&&c(function(){return 7!=S(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=x(A,e);o&&delete A[e],k(t,e,n),o&&t!==A&&k(A,e,o)}:k,H=function(t){var e=D[t]=S(_.prototype);return e._k=t,i&&C&&T(A,t,{configurable:!0,set:function(e){a(this,M)&&a(this[M],t)&&(this[M][t]=!1),T(this,t,w(1,e))}}),e},F=function(t){return"symbol"==typeof t},W=function(t,e,n){return n&&a(D,e)?(n.enumerable?(a(t,M)&&t[M][e]&&(t[M][e]=!1),n=S(n,{enumerable:w(0,!1)})):(a(t,M)||k(t,M,w(1,{})),t[M][e]=!0),T(t,e,n)):k(t,e,n)},Y=function(t,e){h(t);for(var n,o=y(e=b(e)),r=0,a=o.length;a>r;)W(t,n=o[r++],e[n]);return t},B=function(t,e){return void 0===e?S(t):Y(S(t),e)},X=function(t){var e=j.call(this,t);return e||!a(this,t)||!a(D,t)||a(this,M)&&this[M][t]?e:!0},q=function(t,e){var n=x(t=b(t),e);return!n||!a(D,e)||a(t,M)&&t[M][e]||(n.enumerable=!0),n},I=function(t){for(var e,n=O(b(t)),o=[],r=0;n.length>r;)a(D,e=n[r++])||e==M||o.push(e);return o},J=function(t){for(var e,n=O(b(t)),o=[],r=0;n.length>r;)a(D,e=n[r++])&&o.push(D[e]);return o},K=function(t){if(void 0!==t&&!F(t)){for(var e,n,o=[t],r=1,a=arguments;a.length>r;)o.push(a[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),F(e)?void 0:e}),o[1]=e,N.apply(E,o)}},z=c(function(){var t=_();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))});L||(_=function(){if(F(this))throw TypeError("Symbol is not a constructor");return H(d(arguments.length>0?arguments[0]:void 0))},s(_.prototype,"toString",function(){return this._k}),F=function(t){return t instanceof _},o.create=B,o.isEnum=X,o.getDesc=q,o.setDesc=W,o.setDescs=Y,o.getNames=v.get=I,o.getSymbols=J,i&&!n(46)&&s(A,"propertyIsEnumerable",X,!0));var G={"for":function(t){return a(P,t+="")?P[t]:P[t]=_(t)},keyFor:function(t){return p(P,t)},useSetter:function(){C=!0},useSimple:function(){C=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=m(t);G[t]=L?e:H(e)}),C=!0,u(u.G+u.W,{Symbol:_}),u(u.S,"Symbol",G),u(u.S+u.F*!L,"Object",{create:B,defineProperty:W,defineProperties:Y,getOwnPropertyDescriptor:q,getOwnPropertyNames:I,getOwnPropertySymbols:J}),E&&u(u.S+u.F*(!L||z),"JSON",{stringify:K}),f(_,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=n(33)},function(t,e,n){var o=n(15),r=n(34);t.exports=n(31)?function(t,e,n){return o.setDesc(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(10),r="__core-js_shared__",a=o[r]||(o[r]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,e,n){var o=n(15).setDesc,r=n(30),a=n(37)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,a)&&o(t,a,{configurable:!0,value:e})}},function(t,e,n){var o=n(35)("wks"),r=n(38),a=n(10).Symbol;t.exports=function(t){return o[t]||(o[t]=a&&a[t]||(a||r)("Symbol."+t))}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(15),r=n(40);t.exports=function(t,e){for(var n,a=r(t),i=o.getKeys(a),u=i.length,s=0;u>s;)if(a[n=i[s++]]===e)return n}},function(t,e,n){var o=n(18),r=n(17);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(40),r=n(15).getNames,a={}.toString,i="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return r(t)}catch(e){return i.slice()}};t.exports.get=function(t){return i&&"[object Window]"==a.call(t)?u(t):r(o(t))}},function(t,e,n){var o=n(15);t.exports=function(t){var e=o.getKeys(t),n=o.getSymbols;if(n)for(var r,a=n(t),i=o.isEnum,u=0;a.length>u;)i.call(t,r=a[u++])&&e.push(r);return e}},function(t,e,n){var o=n(19);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(45);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=!0},function(t,e){}]);