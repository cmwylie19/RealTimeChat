(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-core", "@patternfly/react-topology"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-core"), require("@patternfly/react-topology"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactCore, global.reactTopology);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactCore, _reactTopology) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ItemDetails = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class ItemDetails extends _react2.default.Component {
    render() {
      const {
        show,
        onClose
      } = this.props;

      const header = _react2.default.createElement("div", {
        className: "pf-u-m-lg"
      }, _react2.default.createElement(_reactCore.Title, {
        headingLevel: _reactCore.TitleLevel.h1,
        size: _reactCore.BaseSizes['2xl']
      }, "Item Details"), _react2.default.createElement("p", null, "Short description of the selected item."));

      return _react2.default.createElement(_reactTopology.TopologySideBar, {
        show: show,
        onClose: onClose,
        header: header
      }, _react2.default.createElement("div", {
        className: "pf-u-mx-lg"
      }, _react2.default.createElement("p", {
        id: "custom-header-example"
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), _react2.default.createElement("br", null), _react2.default.createElement("p", null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
    }

  }

  exports.ItemDetails = ItemDetails;
  ItemDetails.propTypes = {
    show: _propTypes2.default.bool,
    onClose: _propTypes2.default.func
  };
  ItemDetails.defaultProps = {
    show: false,
    onClose: () => undefined
  };
});
//# sourceMappingURL=ItemDetails.js.map