(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/DataToolbar/data-toolbar", "@patternfly/react-styles", "./DataToolbarExpandableContent", "./DataToolbarUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar"), require("@patternfly/react-styles"), require("./DataToolbarExpandableContent"), require("./DataToolbarUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.dataToolbar, global.reactStyles, global.DataToolbarExpandableContent, global.DataToolbarUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _dataToolbar, _reactStyles, _DataToolbarExpandableContent, _DataToolbarUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DataToolbar = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _dataToolbar2 = _interopRequireDefault(_dataToolbar);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class DataToolbar extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "expandableContentRef", React.createRef());

      _defineProperty(this, "toggleIsExpanded", () => {
        this.setState(prevState => ({
          componentManagedIsExpanded: !prevState.componentManagedIsExpanded
        }));
      });

      _defineProperty(this, "closeExpandableContent", () => {
        this.setState(() => ({
          componentManagedIsExpanded: false
        }));
      });

      this.state = {
        isConsumerManagedToggleGroup: props.isExpanded || !!props.toggleIsExpanded,
        componentManagedIsExpanded: false
      };
    }

    componentDidMount() {
      const {
        isConsumerManagedToggleGroup
      } = this.state;

      if (!isConsumerManagedToggleGroup) {
        window.addEventListener('resize', this.closeExpandableContent);
      }
    }

    componentWillUnmount() {
      const {
        isConsumerManagedToggleGroup
      } = this.state;

      if (isConsumerManagedToggleGroup) {
        window.removeEventListener('resize', this.closeExpandableContent);
      }
    }

    render() {
      const _this$props = this.props,
            {
        className,
        children,
        isExpanded,
        toggleIsExpanded,
        id
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["className", "children", "isExpanded", "toggleIsExpanded", "id"]);

      const {
        isConsumerManagedToggleGroup,
        componentManagedIsExpanded
      } = this.state;
      const expandableContentId = `${id}-expandable-content`;
      return React.createElement("div", _extends({
        className: (0, _reactStyles.css)(_dataToolbar2.default.dataToolbar, className),
        id: id
      }, props), React.createElement(_DataToolbarUtils.DataToolbarContext.Provider, {
        value: {
          isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
          toggleIsExpanded: isConsumerManagedToggleGroup ? toggleIsExpanded : this.toggleIsExpanded,
          expandableContentRef: this.expandableContentRef,
          expandableContentId
        }
      }, children), React.createElement(_DataToolbarExpandableContent.DataToolbarExpandableContent, {
        id: expandableContentId,
        isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
        expandableContentRef: this.expandableContentRef
      }));
    }

  }

  exports.DataToolbar = DataToolbar;

  _defineProperty(DataToolbar, "propTypes", {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    isExpanded: _propTypes2.default.bool,
    toggleIsExpanded: _propTypes2.default.func,
    id: _propTypes2.default.string.isRequired
  });

  _defineProperty(DataToolbar, "defaultProps", {
    isExpanded: false
  });
});
//# sourceMappingURL=DataToolbar.js.map