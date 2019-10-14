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
exports.__esModule = true;
var React = require("react");
var ouia_1 = require("./ouia");
exports.OuiaContext = React.createContext(null);
function withOuiaContext(WrappedComponent) {
    return function (props) { return (<exports.OuiaContext.Consumer>
      {function (value) { return <ComponentWithOuia consumerContext={value} component={WrappedComponent} componentProps={props}/>; }}
    </exports.OuiaContext.Consumer>); };
}
exports.withOuiaContext = withOuiaContext;
var ComponentWithOuia = /** @class */ (function (_super) {
    __extends(ComponentWithOuia, _super);
    function ComponentWithOuia(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOuia: false,
            ouiaId: null
        };
        return _this;
    }
    /**
     * if either consumer set isOuia through context or local storage
     * then force a re-render
     */
    ComponentWithOuia.prototype.componentDidMount = function () {
        var _a = this.state, isOuia = _a.isOuia, ouiaId = _a.ouiaId;
        var consumerContext = this.props.consumerContext;
        var isOuiaEnv = ouia_1.isOUIAEnvironment();
        if ((consumerContext && consumerContext.isOuia !== undefined && consumerContext.isOuia !== isOuia) || isOuiaEnv !== isOuia) {
            this.setState({
                isOuia: consumerContext && consumerContext.isOuia !== undefined ? consumerContext.isOuia : isOuiaEnv,
                ouiaId: consumerContext && consumerContext.ouiaId !== undefined ? consumerContext.ouiaId : (ouia_1.generateOUIAId() ? ouia_1.getUniqueId() : ouiaId)
            });
        }
    };
    ComponentWithOuia.prototype.render = function () {
        var _a = this.state, isOuia = _a.isOuia, ouiaId = _a.ouiaId;
        var _b = this.props, WrappedComponent = _b.component, componentProps = _b.componentProps, consumerContext = _b.consumerContext;
        return (<exports.OuiaContext.Provider value={{ isOuia: isOuia, ouiaId: ouiaId }}>
          <exports.OuiaContext.Consumer>
            {function (value) { return <WrappedComponent {...componentProps} ouiaContext={value}/>; }}
          </exports.OuiaContext.Consumer>
      </exports.OuiaContext.Provider>);
    };
    return ComponentWithOuia;
}(React.Component));
