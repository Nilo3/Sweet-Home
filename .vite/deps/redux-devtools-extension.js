import {
  init_redux,
  redux_exports
} from "./chunk-YXFXM5FK.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/redux-devtools-extension/index.js
var require_redux_devtools_extension = __commonJS({
  "node_modules/redux-devtools-extension/index.js"(exports) {
    var compose = (init_redux(), __toCommonJS(redux_exports)).compose;
    exports.__esModule = true;
    exports.composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
      if (arguments.length === 0)
        return void 0;
      if (typeof arguments[0] === "object")
        return compose;
      return compose.apply(null, arguments);
    };
    exports.devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
      return function(noop) {
        return noop;
      };
    };
  }
});
export default require_redux_devtools_extension();
//# sourceMappingURL=redux-devtools-extension.js.map
