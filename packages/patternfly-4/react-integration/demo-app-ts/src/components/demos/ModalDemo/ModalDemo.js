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
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var ModalDemo = /** @class */ (function (_super) {
    __extends(ModalDemo, _super);
    function ModalDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isModalOpen: false,
            isSmallModalOpen: false,
            isLargeModalOpen: false,
            isHalfWidthModalOpen: false,
            isCustomHeaderFooterModalOpen: false,
            isNoHeaderModalOpen: false
        };
        _this.handleModalToggle = function () {
            _this.setState(function (_a) {
                var isModalOpen = _a.isModalOpen;
                return ({
                    isModalOpen: !isModalOpen
                });
            });
        };
        _this.handleSmallModalToggle = function () {
            _this.setState(function (_a) {
                var isSmallModalOpen = _a.isSmallModalOpen;
                return ({
                    isSmallModalOpen: !isSmallModalOpen
                });
            });
        };
        _this.handleLargeModalToggle = function () {
            _this.setState(function (_a) {
                var isLargeModalOpen = _a.isLargeModalOpen;
                return ({
                    isLargeModalOpen: !isLargeModalOpen
                });
            });
        };
        _this.handleHalfWidthModalToggle = function () {
            _this.setState(function (_a) {
                var isHalfWidthModalOpen = _a.isHalfWidthModalOpen;
                return ({
                    isHalfWidthModalOpen: !isHalfWidthModalOpen
                });
            });
        };
        _this.handleCustomHeaderFooterModalToggle = function () {
            _this.setState(function (_a) {
                var isCustomHeaderFooterModalOpen = _a.isCustomHeaderFooterModalOpen;
                return ({
                    isCustomHeaderFooterModalOpen: !isCustomHeaderFooterModalOpen
                });
            });
        };
        _this.handleNoHeaderModalToggle = function () {
            _this.setState(function (_a) {
                var isNoHeaderModalOpen = _a.isNoHeaderModalOpen;
                return ({
                    isNoHeaderModalOpen: !isNoHeaderModalOpen
                });
            });
        };
        return _this;
    }
    ModalDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    ModalDemo.prototype.renderModal = function () {
        var isModalOpen = this.state.isModalOpen;
        return (<react_core_1.Modal title="Modal Header" isOpen={isModalOpen} onClose={this.handleModalToggle} actions={[
            <react_core_1.Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>
            Cancel
          </react_core_1.Button>,
            <react_core_1.Button key="confirm" variant="primary" onClick={this.handleModalToggle}>
            Confirm
          </react_core_1.Button>
        ]} isFooterLeftAligned>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </react_core_1.Modal>);
    };
    ModalDemo.prototype.renderSmallModal = function () {
        var isSmallModalOpen = this.state.isSmallModalOpen;
        return (<react_core_1.Modal isSmall title="Modal Header" isOpen={isSmallModalOpen} onClose={this.handleSmallModalToggle} actions={[
            <react_core_1.Button key="cancel" variant="secondary" onClick={this.handleSmallModalToggle}>
            Cancel
          </react_core_1.Button>,
            <react_core_1.Button key="confirm" variant="primary" onClick={this.handleSmallModalToggle}>
            Confirm
          </react_core_1.Button>
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </react_core_1.Modal>);
    };
    ModalDemo.prototype.renderLargeModal = function () {
        var isLargeModalOpen = this.state.isLargeModalOpen;
        return (<react_core_1.Modal isLarge title="Modal Header" isOpen={isLargeModalOpen} onClose={this.handleLargeModalToggle} actions={[
            <react_core_1.Button key="cancel" variant="secondary" onClick={this.handleLargeModalToggle}>
            Cancel
          </react_core_1.Button>,
            <react_core_1.Button key="confirm" variant="primary" onClick={this.handleLargeModalToggle}>
            Confirm
          </react_core_1.Button>
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </react_core_1.Modal>);
    };
    ModalDemo.prototype.renderHalfWidthModal = function () {
        var isHalfWidthModalOpen = this.state.isHalfWidthModalOpen;
        return (<react_core_1.Modal width={'50%'} title="Modal Header" isOpen={isHalfWidthModalOpen} onClose={this.handleHalfWidthModalToggle} actions={[
            <react_core_1.Button key="cancel" variant="secondary" onClick={this.handleHalfWidthModalToggle}>
            Cancel
          </react_core_1.Button>,
            <react_core_1.Button key="confirm" variant="primary" onClick={this.handleHalfWidthModalToggle}>
            Confirm
          </react_core_1.Button>
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </react_core_1.Modal>);
    };
    ModalDemo.prototype.renderCustomHeaderFooterModal = function () {
        var isCustomHeaderFooterModalOpen = this.state.isCustomHeaderFooterModalOpen;
        var header = (<react_1["default"].Fragment>
        <react_core_1.Title id="customHeaderTitle" headingLevel={react_core_1.TitleLevel.h1} size={react_core_1.BaseSizes['2xl']}>
          Custom Modal Header/Footer
        </react_core_1.Title>
        <p id="customHeaderDescription" className="pf-u-pt-sm">
          Allows for custom content in the header and/or footer by passing components.
        </p>
      </react_1["default"].Fragment>);
        var footer = (<react_core_1.Title id="customFooterTitle" headingLevel={react_core_1.TitleLevel.h4} size={react_core_1.BaseSizes.sm}>
        <react_icons_1.WarningTriangleIcon />
        <span className="pf-u-pl-sm">Custom modal footer.</span>
      </react_core_1.Title>);
        return (<react_core_1.Modal isLarge isOpen={isCustomHeaderFooterModalOpen} header={header} title="custom header example" ariaDescribedById="custom-header-example" onClose={this.handleCustomHeaderFooterModalToggle} footer={footer}>
          <span id="custom-header-example">
            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
            aria-describedby value.
          </span>
        <br />
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </react_core_1.Modal>);
    };
    ModalDemo.prototype.renderNoHeaderModal = function () {
        var isNoHeaderModalOpen = this.state.isNoHeaderModalOpen;
        return (<react_core_1.Modal isLarge title="Modal Header" isOpen={isNoHeaderModalOpen} hideTitle ariaDescribedById="no-header-example" onClose={this.handleNoHeaderModalToggle} actions={[
            <react_core_1.Button key="confirm" variant="primary" onClick={this.handleNoHeaderModalToggle}>
            Close
          </react_core_1.Button>
        ]}>
          <span id="no-header-example">
            When static text describing the modal is available, it can be wrapped with an ID referring to the modal's
            aria-describedby value.
          </span>{' '}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </react_core_1.Modal>);
    };
    ModalDemo.prototype.render = function () {
        var buttonStyle = {
            marginRight: 20,
            marginBottom: 20
        };
        return (<react_1["default"].Fragment>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <react_core_1.Button style={buttonStyle} variant="primary" onClick={this.handleModalToggle} id="showDefaultModalButton">
           Show Modal
          </react_core_1.Button>
          <react_core_1.Button style={buttonStyle} variant="primary" onClick={this.handleSmallModalToggle} id="showSmallModalButton">
            Show Small Modal
          </react_core_1.Button>
          <react_core_1.Button style={buttonStyle} variant="primary" onClick={this.handleLargeModalToggle} id="showLargeModalButton">
            Show Large Modal
          </react_core_1.Button>
          <react_core_1.Button style={buttonStyle} variant="primary" onClick={this.handleHalfWidthModalToggle} id="showHalfWidthModalButton">
            Show 50% Width Modal
          </react_core_1.Button>
          <react_core_1.Button style={buttonStyle} variant="primary" onClick={this.handleCustomHeaderFooterModalToggle} id="showCustomHeaderFooterModalButton">
            Show Custom Header/Footer Modal
          </react_core_1.Button>
          <react_core_1.Button style={buttonStyle} variant="primary" onClick={this.handleNoHeaderModalToggle} id="showNoHeaderModalButton">
            Show No Header Modal
          </react_core_1.Button>
        </div>
        {this.renderModal()}
        {this.renderSmallModal()}
        {this.renderLargeModal()}
        {this.renderHalfWidthModal()}
        {this.renderCustomHeaderFooterModal()}
        {this.renderNoHeaderModal()}
      </react_1["default"].Fragment>);
    };
    return ModalDemo;
}(react_1["default"].Component));
exports.ModalDemo = ModalDemo;
