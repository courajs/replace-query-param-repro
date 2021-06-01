"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("replace-query-param-repro/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/app",["exports","ember-resolver","ember-load-initializers","replace-query-param-repro/config/environment"],(function(e,r,t,n){function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){return(a=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function i(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var t,n=f(e)
if(r){var o=f(this).constructor
t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments)
return u(this,t)}}function u(e,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?l(e):r}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&a(e,r)})(u,Ember.Application)
var t=i(u)
function u(){var e
o(this,u)
for(var a=arguments.length,i=new Array(a),f=0;f<a;f++)i[f]=arguments[f]
return c(l(e=t.call.apply(t,[this].concat(i))),"modulePrefix",n.default.modulePrefix),c(l(e),"podModulePrefix",n.default.podModulePrefix),c(l(e),"Resolver",r.default),e}return u}()
e.default=p,(0,t.default)(p,n.default.modulePrefix)})),define("replace-query-param-repro/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/controllers/two",["exports"],(function(e){var r,t,n
function o(e,r,t,n){t&&Object.defineProperty(e,r,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(n):void 0})}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,r){return(u=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function l(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var t,n=p(e)
if(r){var o=p(this).constructor
t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments)
return f(this,t)}}function f(e,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?c(e):r}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s,d,y,b,m,v,_=(r=Ember._tracked,s=(t=function(e){(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&u(e,r)})(s,Ember.Controller)
var r,t,f,p=l(s)
function s(){var e
a(this,s)
for(var r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i]
return o(c(e=p.call.apply(p,[this].concat(t))),"transition",n,c(e)),e}return r=s,(t=[{key:"back",value:function(){window.history.back()}}])&&i(r.prototype,t),f&&i(r,f),s}()).prototype,d="transition",y=[r],b={configurable:!0,enumerable:!0,writable:!0,initializer:null},v={},Object.keys(b).forEach((function(e){v[e]=b[e]})),v.enumerable=!!v.enumerable,v.configurable=!!v.configurable,("value"in v||v.initializer)&&(v.writable=!0),v=y.slice().reverse().reduce((function(e,r){return r(s,d,e)||e}),v),m&&void 0!==v.initializer&&(v.value=v.initializer?v.initializer.call(m):void 0,v.initializer=void 0),void 0===v.initializer&&(Object.defineProperty(s,d,v),v=null),n=v,t)
e.default=_})),define("replace-query-param-repro/data-adapter",["exports","@ember-data/debug"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/helpers/app-version",["exports","replace-query-param-repro/config/environment","ember-cli-app-version/utils/regexp"],(function(e,r,t){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.default.APP.version,a=n.versionOnly||n.hideSha,i=n.shaOnly||n.hideVersion,u=null
return a&&(n.showExtended&&(u=o.match(t.versionExtendedRegExp)),u||(u=o.match(t.versionRegExp))),i&&(u=o.match(t.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("replace-query-param-repro/helpers/loc",["exports","@ember/string/helpers/loc"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"loc",{enumerable:!0,get:function(){return r.loc}})})),define("replace-query-param-repro/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=r.default
e.default=t})),define("replace-query-param-repro/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=r.default
e.default=t})),define("replace-query-param-repro/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=r.default
e.default=t})),define("replace-query-param-repro/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","replace-query-param-repro/config/environment"],(function(e,r,t){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.default.APP&&(n=t.default.APP.name,o=t.default.APP.version)
var a={name:"App Version",initialize:(0,r.default)(n,o)}
e.default=a})),define("replace-query-param-repro/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",r.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=t})),define("replace-query-param-repro/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,r,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n})),define("replace-query-param-repro/initializers/export-application-global",["exports","replace-query-param-repro/config/environment"],(function(e,r){function t(){var e=arguments[1]||arguments[0]
if(!1!==r.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var n,o=r.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(r.default.modulePrefix),t[n]||(t[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default=void 0
var n={name:"export-application-global",initialize:t}
e.default=n})),define("replace-query-param-repro/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("replace-query-param-repro/router",["exports","replace-query-param-repro/config/environment"],(function(e,r){function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){return(n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function o(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var t,n=u(e)
if(r){var o=u(this).constructor
t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments)
return a(this,t)}}function a(e,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?i(e):r}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&n(e,r)})(u,Ember.Router)
var a=o(u)
function u(){var e
t(this,u)
for(var n=arguments.length,o=new Array(n),f=0;f<n;f++)o[f]=arguments[f]
return l(i(e=a.call.apply(a,[this].concat(o))),"location",r.default.locationType),l(i(e),"rootURL",r.default.rootURL),e}return u}()
e.default=f,f.map((function(){this.route("one"),this.route("two")}))})),define("replace-query-param-repro/routes/two",["exports"],(function(e){function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,t){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var n=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=l(e)););return e}(e,r)
if(n){var o=Object.getOwnPropertyDescriptor(n,r)
return o.get?o.get.call(t):o.value}})(e,r,t||e)}function o(e,r){return(o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function a(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var t,n=l(e)
if(r){var o=l(this).constructor
t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments)
return i(this,t)}}function i(e,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?u(e):r}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&o(e,r)})(d,Ember.Route)
var i,c,p,s=a(d)
function d(){var e
r(this,d)
for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return f(u(e=s.call.apply(s,[this].concat(n))),"queryParams",{a:{replace:!0,refreshModel:!0},b:{replace:!0},c:{refreshModel:!0}}),e}return i=d,(c=[{key:"afterModel",value:function(e,r){}},{key:"model",value:function(){return 42}},{key:"setupController",value:function(e,r,t){window.the_transition=t,console.log(t),n(l(d.prototype),"setupController",this).call(this,e,r,t),e.transition=t}}])&&t(i.prototype,c),p&&t(i,p),d}()
e.default=c})),define("replace-query-param-repro/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/services/store",["exports","ember-data/store"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("replace-query-param-repro/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.HTMLBars.template({id:"flhWEVQm",block:'[[[10,"style"],[12],[1,"\\n  a, button {\\n    font-size: 48pt;\\n  }\\n"],[13],[1,"\\n"],[1,[28,[35,0],["ReplaceQueryParamRepro"],null]],[1,"\\n"],[46,[28,[37,2],null,null],null,null,null],[1,"\\n"]],[],false,["page-title","component","-outlet"]]',moduleName:"replace-query-param-repro/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("replace-query-param-repro/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.HTMLBars.template({id:"1CmxO9OH",block:'[[[8,[39,0],null,[["@route"],["one"]],[["default"],[[[[1,"\\n  One\\n"]],[]]]]],[1,"\\n"]],[],false,["link-to"]]',moduleName:"replace-query-param-repro/templates/index.hbs",isStrictMode:!1})
e.default=r})),define("replace-query-param-repro/templates/one",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.HTMLBars.template({id:"tBWL7s+/",block:'[[[8,[39,0],null,[["@route","@query"],["two",[28,[37,1],null,[["a"],["thing"]]]]],[["default"],[[[[1,"\\n  Two:a\\n"]],[]]]]],[1,"\\n"],[10,"br"],[12],[13],[1,"\\n"],[8,[39,0],null,[["@route","@query"],["two",[28,[37,1],null,[["b","c"],["thing","other"]]]]],[["default"],[[[[1,"\\n  Two:b,c\\n"]],[]]]]],[1,"\\n"],[10,"br"],[12],[13],[1,"\\n"],[8,[39,0],null,[["@route"],["two"]],[["default"],[[[[1,"\\n  Two\\n"]],[]]]]],[1,"\\n"]],[],false,["link-to","hash"]]',moduleName:"replace-query-param-repro/templates/one.hbs",isStrictMode:!1})
e.default=r})),define("replace-query-param-repro/templates/two",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.HTMLBars.template({id:"6HXQRQSV",block:'[[[1,[28,[35,0],["Two"],null]],[1,"\\n"],[11,"button"],[4,[38,1],["click",[30,0,["back"]]],null],[12],[1,"Back"],[13],[1,"\\n"],[10,"br"],[12],[13],[1,"\\n"],[10,"code"],[12],[1,"\\n  queryParamsOnly: "],[1,[30,0,["transition","queryParamsOnly"]]],[1,"\\n"],[13],[1,"\\n\\n"]],[],false,["page-title","on"]]',moduleName:"replace-query-param-repro/templates/two.hbs",isStrictMode:!1})
e.default=r})),define("replace-query-param-repro/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.BooleanTransform}})})),define("replace-query-param-repro/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.DateTransform}})}))
define("replace-query-param-repro/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.NumberTransform}})})),define("replace-query-param-repro/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.StringTransform}})})),define("replace-query-param-repro/config/environment",[],(function(){try{var e="replace-query-param-repro/config/environment",r=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(decodeURIComponent(r))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("replace-query-param-repro/app").default.create({name:"replace-query-param-repro",version:"0.0.0+d80c91d0"})
