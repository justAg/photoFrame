webpackJsonp([8],{"21It":function(e,t,r){"use strict";var n=r("FtD3");e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},"5VQ+":function(e,t,r){"use strict";var n=r("cGG2");e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},"7GwW":function(e,t,r){"use strict";var n=r("cGG2"),o=r("21It"),i=r("DQCr"),s=r("oJlt"),a=r("GHBc"),c=r("FtD3"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r("thJu");e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";p.Authorization="Basic "+u(g+":"+v)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};o(t,f,i),d=null}},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var w=r("p1b6"),x=(e.withCredentials||a(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;x&&(p[e.xsrfHeaderName]=x)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},"8Sd/":function(e,t,r){"use strict";t.a={components:{},data:function(){return{}},props:{text:{type:String,default:"商家列表"}},watch:{},methods:{back:function(){this.$emit("back")}},filters:{},computed:{},created:function(){},mounted:function(){}}},DQCr:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r("cGG2");e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},Dawo:function(e,t,r){var n=r("hxrY");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("06df6a6e",n,!0,{})},EV1k:function(e,t,r){"use strict";function n(e){r("daLt")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("broi"),i=r("pxAY"),s=r("VU/8"),a=n,c=s(o.a,i.a,!1,a,"data-v-1d48f628",null);t.default=c.exports},FtD3:function(e,t,r){"use strict";var n=r("t8qj");e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},GHBc:function(e,t,r){"use strict";var n=r("cGG2");e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},"JP+z":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},KCLY:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r("cGG2"),i=r("5VQ+"),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r("7GwW"):void 0!==t&&(e=r("7GwW")),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,r("W2nU"))},Re3r:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},TNV1:function(e,t,r){"use strict";var n=r("cGG2");e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},XmWM:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=r("KCLY"),i=r("cGG2"),s=r("fuGk"),a=r("xLtR"),c=r("dIwP"),u=r("qRfI");n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url));var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},bNrS:function(e,t,r){"use strict";function n(e){r("Dawo")}var o=r("8Sd/"),i=r("cVRU"),s=r("VU/8"),a=n,c=s(o.a,i.a,!1,a,"data-v-77600400",null);t.a=c.exports},broi:function(e,t,r){"use strict";var n=r("bNrS"),o=r("mtWM"),i=r.n(o);t.a={components:{HeaderBar:n.a},data:function(){return{selected:"1",login_username:"",login_password:"",register_username:"",register_email:"",register_password1:"",register_password2:""}},props:{},watch:{},methods:{back:function(){this.$router.push({path:"/index"})},login:function(){i.a.post("/user/login",{username:this.login_username,password:this.login_password}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},register:function(){console.log("register")}},filters:{},computed:{},created:function(){},mounted:function(){}}},cGG2:function(e,t,r){"use strict";function n(e){return"[object Array]"===R.call(e)}function o(e){return"[object ArrayBuffer]"===R.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function c(e){return"number"==typeof e}function u(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===R.call(e)}function p(e){return"[object File]"===R.call(e)}function d(e){return"[object Blob]"===R.call(e)}function h(e){return"[object Function]"===R.call(e)}function m(e){return f(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function x(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function y(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=y(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)x(arguments[r],e);return t}function b(e,t,r){return x(t,function(t,n){e[n]=r&&"function"==typeof t?_(t,r):t}),e}var _=r("JP+z"),C=r("Re3r"),R=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:s,isString:a,isNumber:c,isObject:f,isUndefined:u,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:w,forEach:x,merge:y,extend:b,trim:v}},cVRU:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-bar"},[r("i",{staticClass:"icon-arrow_lift",on:{click:e.back}}),e._v(" "),r("h1",[e._v(e._s(e.text))])])},o=[],i={render:n,staticRenderFns:o};t.a=i},cWxy:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r("dVOP");n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},dIwP:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},dVOP:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},daLt:function(e,t,r){var n=r("tm7m");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("53145ad0",n,!0,{})},fuGk:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r("cGG2");n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},hxrY:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".header-bar[data-v-77600400]{position:fixed;top:0;width:100%;height:42px;line-height:42px;background:#fff;text-align:center;border-bottom:1px solid rgba(7,17,27,.1);z-index:10}.header-bar i[data-v-77600400]{display:block;float:left;margin:12px 0 0 15px}.header-bar h1[data-v-77600400]{display:inline-block;line-height:44px;font-size:17px;color:#333;margin-left:-15px}",""])},mtWM:function(e,t,r){e.exports=r("tIFN")},oJlt:function(e,t,r){"use strict";var n=r("cGG2");e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+r:r)}),i):i}},p1b6:function(e,t,r){"use strict";var n=r("cGG2");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},pBtG:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},pxAY:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("header-bar",{attrs:{text:"登录注册页"},on:{back:e.back}}),e._v(" "),r("mt-navbar",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[r("mt-tab-item",{attrs:{id:"1"}},[e._v("登录")]),e._v(" "),r("mt-tab-item",{attrs:{id:"2"}},[e._v("注册")])],1),e._v(" "),r("mt-tab-container",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[r("mt-tab-container-item",{staticClass:"login-wrapper",attrs:{id:"1"}},[r("mt-field",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:e.login_username,callback:function(t){e.login_username=t},expression:"login_username"}}),e._v(" "),r("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",type:"password"},model:{value:e.login_password,callback:function(t){e.login_password=t},expression:"login_password"}}),e._v(" "),r("mt-button",{attrs:{type:"primary",size:"large"},nativeOn:{click:function(t){return e.login(t)}}},[e._v("登录")])],1),e._v(" "),r("mt-tab-container-item",{staticClass:"register-wrapper",attrs:{id:"2"}},[r("mt-field",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:e.register_username,callback:function(t){e.register_username=t},expression:"register_username"}}),e._v(" "),r("mt-field",{attrs:{label:"邮箱",placeholder:"请输入邮箱",type:"email"},model:{value:e.register_email,callback:function(t){e.register_email=t},expression:"register_email"}}),e._v(" "),r("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",type:"password"},model:{value:e.register_password1,callback:function(t){e.register_password1=t},expression:"register_password1"}}),e._v(" "),r("mt-field",{attrs:{label:"确认密码",placeholder:"请确认密码",type:"password"},model:{value:e.register_password2,callback:function(t){e.register_password2=t},expression:"register_password2"}}),e._v(" "),r("mt-button",{attrs:{type:"primary",size:"large"},nativeOn:{click:function(t){return e.register(t)}}},[e._v("注册")])],1)],1)],1)},o=[],i={render:n,staticRenderFns:o};t.a=i},pxG4:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},qRfI:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},t8qj:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},tIFN:function(e,t,r){"use strict";function n(e){var t=new s(e),r=i(s.prototype.request,t);return o.extend(r,s.prototype,t),o.extend(r,t),r}var o=r("cGG2"),i=r("JP+z"),s=r("XmWM"),a=r("KCLY"),c=n(a);c.Axios=s,c.create=function(e){return n(o.merge(a,e))},c.Cancel=r("dVOP"),c.CancelToken=r("cWxy"),c.isCancel=r("pBtG"),c.all=function(e){return Promise.all(e)},c.spread=r("pxG4"),e.exports=c,e.exports.default=c},thJu:function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),s="",a=0,c=i;o.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&t>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;t=t<<8|r}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},tm7m:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".login[data-v-1d48f628]{color:#333;margin-top:40px;background-color:#fff;overflow:visible}.login .login-wrapper[data-v-1d48f628]{margin-top:20px;overflow:hidden}.login .login-wrapper .mint-button[data-v-1d48f628]{margin-top:30px}.login .register-wrapper[data-v-1d48f628]{margin-top:20px;overflow:hidden}.login .register-wrapper .mint-button[data-v-1d48f628]{margin-top:30px}",""])},xLtR:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r("cGG2"),i=r("TNV1"),s=r("pBtG"),a=r("KCLY");e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}});