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
var react_styles_1 = require("@patternfly/react-styles");
var backdrop_1 = require("@patternfly/react-styles/css/components/Backdrop/backdrop");
var exenv_1 = require("exenv");
var constants_1 = require("../../helpers/constants");
var AboutModalContainer_1 = require("./AboutModalContainer");
var AboutModal = /** @class */ (function (_super) {
    __extends(AboutModal, _super);
    function AboutModal(props) {
        var _this = _super.call(this, props) || this;
        _this.id = AboutModal.currentId++;
        _this.ariaLabelledBy = "pf-about-modal-title-" + _this.id;
        _this.ariaDescribedBy = "pf-about-modal-content-" + _this.id;
        _this.handleEscKeyClick = function (event) {
            if (event.keyCode === constants_1.KEY_CODES.ESCAPE_KEY && _this.props.isOpen) {
                _this.props.onClose();
            }
        };
        _this.toggleSiblingsFromScreenReaders = function (hide) {
            var bodyChildren = document.body.children;
            for (var _i = 0, _a = Array.from(bodyChildren); _i < _a.length; _i++) {
                var child = _a[_i];
                if (child !== _this.state.container) {
                    hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
                }
            }
        };
        _this.state = {
            container: undefined
        };
        if (props.brandImageSrc && !props.brandImageAlt) {
            // tslint:disable-next-line:no-console
            console.error('AboutModal:', 'brandImageAlt is required when a brandImageSrc is specified');
        }
        return _this;
    }
    AboutModal.prototype.componentDidMount = function () {
        var container = document.createElement('div');
        this.setState({ container: container });
        document.body.appendChild(container);
        document.addEventListener('keydown', this.handleEscKeyClick, false);
        if (this.props.isOpen) {
            document.body.classList.add(react_styles_1.css(backdrop_1["default"].backdropOpen));
        }
        else {
            document.body.classList.remove(react_styles_1.css(backdrop_1["default"].backdropOpen));
        }
    };
    AboutModal.prototype.componentDidUpdate = function () {
        if (this.props.isOpen) {
            document.body.classList.add(react_styles_1.css(backdrop_1["default"].backdropOpen));
            this.toggleSiblingsFromScreenReaders(true);
        }
        else {
            document.body.classList.remove(react_styles_1.css(backdrop_1["default"].backdropOpen));
            this.toggleSiblingsFromScreenReaders(false);
        }
    };
    AboutModal.prototype.componentWillUnmount = function () {
        if (this.state.container) {
            document.body.removeChild(this.state.container);
        }
        document.removeEventListener('keydown', this.handleEscKeyClick, false);
    };
    AboutModal.prototype.render = function () {
        var props = __rest(this.props, []);
        var container = this.state.container;
        if (!exenv_1.canUseDOM || !container) {
            return null;
        }
        return ReactDOM.createPortal(<AboutModalContainer_1.AboutModalContainer ariaLabelledbyId={this.ariaLabelledBy} ariaDescribedById={this.ariaDescribedBy} {...props}/>, container);
    };
    AboutModal.currentId = 0;
    AboutModal.defaultProps = {
        className: '',
        isOpen: false,
        onClose: function () { return undefined; },
        productName: '',
        trademark: '',
        backgroundImageSrc: '',
        noAboutModalBoxContentContainer: false
    };
    return AboutModal;
}(React.Component));
exports.AboutModal = AboutModal;
