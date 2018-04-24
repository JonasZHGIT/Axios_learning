(function webpackUniversalModuleDefinition(root, factory) {
  // CommonJS 方式加载模块
  if(typeof exports === "object" && typeof module === "object") module.exports = factory();
  // AMD 方式加载模块
  else if(typeof define === "function" && define.amd) define([], factory);
  // ES6 方法加载模块
  else if(typeof exports === "object") exports["axios"] = factory();
  // 定义全局变量 axios
  else root["axios"] = factory();
})(this, function() {
  return (function(modules) {
    // 存储已载入模块
    let installedModules = {};

    __webpack_require__.m = modules;

    __webpack_require__.c = installedModules;

    __webpack_require__.p = '';

    // 入口模块
    return __webpack_require__(0);

    function __webpack_require__(moduleId) {
      // 如果模块已经加载，则返回模块
      if(installedModules[mduleId]) return installedModules[moduleId].exports;
      // 如果模块没有加载，则创建加载模块
      let module = installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false,
      }
      // 执行加载对应模块
      // module.exports 参数为 {}
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

      module.loaded = true;

      return module.exports;
    }
  })([function(module, exports, __webpack_require__) {
    // __webpack_require_(0): 入口模块
    // 所以运行后直接进入__webpack_require__(1)模块
    module.exports = __webpack_require__(1);

  }, function(module, exports, __webpack_require__) {
    // __webpack_require__(1): 创建axios实例
    let utils = __webpack_require__(2),
        bind = __webpack_require__(3),
        Axios = __webpack_require__(5),
        defaults = __webpack_require__(6);
    let axios = createInstance(defaults);
    axios.Axios = Axios;
    axios.create = function create(instanceConfig) {
      return createInstance(utils.merge(defauls, instanceConfig));
    }
    // cancel 相关的操作
    axios.Cancel = __webpack_require__(23);
    axios.CancelToken = __webpack_require__(24);
    axios.isCancel = __webpack_require__(20);

    axios.all = function all(promises) {
      return Promise.all(promises);
    }
    axios.spread = __webpack_require__(25);
    module.exports = axios;
    module.exports.default = axios;

    function createInstance(defaultConfig) {
      let context = new Axios(defaultConfig);
      let instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }

  }, function() {
    // __webpack_require__(2): 定义通用函数
    let bind = __webpack_require__(3),
        isBuffer = __webpack_require__(4);
    let toString = Object.prototype.toString;
    
    module.exports = {
      // isArray: isArray,
      // isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      // isString: isString,
      // isNumber: isNumber,
      isObject: isObject,
      isUndefined: isUndefined,
      // isData: isData,
      // isFile: isFile,
      // isBlob: isBlob,
      // isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim,
    };
    
    forEach(["Array", "ArrayBuffer", "Blob", "Date", "File", "Function", "Number", "String"], function(name) {
      module.exports[`is${name}`] = function(obj) {
        return toString.call(obj) === `[object ${name}]`;
      }
    });

    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if(thisArgs && typeof val === "function") a[key] = bind(val, thisArg);
        else a[key] = val;
      });
      return a;
    }

    function forEach(obj, fn) {
      if(obj == null) return;
      if(typeof obj !== "object") obj = [obj];
      if(isArray(obj)) {
        for(let i = 0; i < obj.length; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for(let key in obj) {
          if(Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
        }
      }
    }

    function isArrayBufferView(val) {
      let result;
      if(typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
      else reuslt = val && val.buffer instanceof ArrayBuffer;
      return result;
    }

    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }

    function isObject(val) {
      return val != null && typeof val === "object";
    }

    function isStandardBrowserEnv() {
      if(typeof navigator !== "undefined" && navigator.product === "ReactNative") return false;
      return typeof window !== "undefined" && typeof document !== "undefined";
    }

    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }

    function isUndefined(val) {
      return typeof val === "undefined";
    }

    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }

  }, function(module, exports) {
    // __webpack_require__(3): 定义bind方法
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        let args = new Array(arguments.length);
        for(let i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      }
    }
  }]);
});