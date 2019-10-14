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
var React = require("react");
var ReactDOM = require("react-dom");
var exenv_1 = require("exenv");
var react_styles_1 = require("@patternfly/react-styles");
var backdrop_1 = require("@patternfly/react-styles/css/components/Backdrop/backdrop");
var constants_1 = require("../../helpers/constants");
var ModalContent_1 = require("./ModalContent");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.id = '';
        _this.handleEscKeyClick = function (event) {
            if (event.keyCode === constants_1.KEY_CODES.ESCAPE_KEY && _this.props.isOpen) {
                _this.props.onClose();
            }
        };
        _this.getElement = function (appendTo) {
            var target;
            if (typeof appendTo === 'function') {
                target = appendTo();
            }
            else {
                target = appendTo;
            }
            return target;
        };
        _this.toggleSiblingsFromScreenReaders = function (hide) {
            var appendTo = _this.props.appendTo;
            var target = _this.getElement(appendTo);
            var bodyChildren = target.children;
            for (var _i = 0, _a = Array.from(bodyChildren); _i < _a.length; _i++) {
                var child = _a[_i];
                if (child !== _this.state.container) {
                    hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
                }
            }
        };
        var newId = Modal.currentId++;
        _this.id = "pf-modal-" + newId;
        _this.state = {
            container: undefined
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var appendTo = this.props.appendTo;
        var target = this.getElement(appendTo);
        var container = document.createElement('div');
        this.setState({ container: container });
        target.appendChild(container);
        target.addEventListener('keydown', this.handleEscKeyClick, false);
        if (this.props.isOpen) {
            target.classList.add(react_styles_1.css(backdrop_1["default"].backdropOpen));
        }
        else {
            target.classList.remove(react_styles_1.css(backdrop_1["default"].backdropOpen));
        }
    };
    Modal.prototype.componentDidUpdate = function () {
        var appendTo = this.props.appendTo;
        var target = this.getElement(appendTo);
        if (this.props.isOpen) {
            target.classList.add(react_styles_1.css(backdrop_1["default"].backdropOpen));
            this.toggleSiblingsFromScreenReaders(true);
        }
        else {
            target.classList.remove(react_styles_1.css(backdrop_1["default"].backdropOpen));
            this.toggleSiblingsFromScreenReaders(false);
        }
    };
    Modal.prototype.componentWillUnmount = function () {
        var appendTo = this.props.appendTo;
        var target = this.getElement(appendTo);
        if (this.state.container) {
            target.removeChild(this.state.container);
        }
        target.removeEventListener('keydown', this.handleEscKeyClick, false);
        target.classList.remove(react_styles_1.css(backdrop_1["default"].backdropOpen));
    };
    Modal.prototype.render = function () {
        var _a = this.props, appendTo = _a.appendTo, props = __rest(_a, ["appendTo"]);
        var container = this.state.container;
        if (!exenv_1.canUseDOM || !container) {
            return null;
        }
        return ReactDOM.createPortal(<ModalContent_1.ModalContent {...props} title={this.props.title} id={this.id} ariaDescribedById={this.props.ariaDescribedById}/>, container);
    };
    Modal.currentId = 0;
    Modal.defaultProps = {
        className: '',
        isOpen: false,
        hideTitle: false,
        showClose: true,
        ariaDescribedById: '',
        actions: [],
        isFooterLeftAligned: false,
        onClose: function () { return undefined; },
        isLarge: false,
        isSmall: false,
        appendTo: typeof document !== 'undefined' && document.body || null
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
