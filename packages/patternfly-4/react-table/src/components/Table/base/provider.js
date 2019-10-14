"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
/**
 * provider.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
var React = require("react");
var types_1 = require("./types");
exports.ProviderContext = React.createContext({
    columns: null,
    renderers: null
});
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Provider.prototype.render = function () {
        var _a = this.props, columns = _a.columns, renderers = _a.renderers, components = _a.components, children = _a.children, props = __rest(_a, ["columns", "renderers", "components", "children"]);
        var finalRenderers = renderers;
        if (components) {
            // tslint:disable-next-line:no-console
            console.warn('`components` have been deprecated in favor of `renderers` and will be removed in the next major version, please rename!');
            finalRenderers = components;
        }
        var provider = React.createElement(renderers.table || types_1.TableDefaults.renderers.table, props, children);
        return (<exports.ProviderContext.Provider value={{
            columns: columns,
            renderers: {
                table: finalRenderers.table || types_1.TableDefaults.renderers.table,
                header: __assign(__assign({}, types_1.TableDefaults.renderers.header), finalRenderers.header),
                body: __assign(__assign({}, types_1.TableDefaults.renderers.body), finalRenderers.body)
            }
        }}>
      {provider}
      </exports.ProviderContext.Provider>);
    };
    Provider.defaultProps = {
        renderers: types_1.TableDefaults.renderers
    };
    return Provider;
}(React.Component));
exports.Provider = Provider;
