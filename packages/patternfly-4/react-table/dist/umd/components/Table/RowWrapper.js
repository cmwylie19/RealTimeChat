(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-core", "@patternfly/react-styles/css/components/Table/table", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-core"), require("@patternfly/react-styles/css/components/Table/table"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactCore, global.table, global.reactStyles);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactCore, _table, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RowWrapper = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _table2 = _interopRequireDefault(_table);

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

  // legacy export now, RowWrapperRow can simply be typed as IRow in the future
  class RowWrapper extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "handleScroll", event => {
        if (!this._unmounted) {
          this.props.onScroll(event);
        }
      });

      _defineProperty(this, "handleResize", event => {
        if (!this._unmounted) {
          this.props.onResize(event);
        }
      });

      if (props.onScroll) {
        this.handleScroll = (0, _reactCore.debounce)(this.handleScroll, 100);
      }

      if (props.onResize) {
        this.handleResize = (0, _reactCore.debounce)(this.handleResize, 100);
      }
    }

    componentDidMount() {
      this._unmounted = false;

      if (this.props.onScroll) {
        window.addEventListener('scroll', this.handleScroll);
      }

      if (this.props.onResize) {
        window.addEventListener('resize', this.handleResize);
      }
    }

    componentWillUnmount() {
      this._unmounted = true;

      if (this.props.onScroll) {
        window.removeEventListener('scroll', this.handleScroll);
      }

      if (this.props.onResize) {
        window.removeEventListener('resize', this.handleResize);
      }
    }

    render() {
      const _this$props = this.props,
            {
        trRef,
        className,
        onScroll,
        onResize,
        row: {
          isExpanded
        },
        rowProps
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["trRef", "className", "onScroll", "onResize", "row", "rowProps"]);

      return React.createElement("tr", _extends({}, props, {
        ref: trRef,
        className: (0, _reactStyles.css)(className, isExpanded !== undefined && _table2.default.tableExpandableRow, isExpanded && _table2.default.modifiers.expanded),
        hidden: isExpanded !== undefined && !isExpanded
      }));
    }

  }

  exports.RowWrapper = RowWrapper;

  _defineProperty(RowWrapper, "propTypes", {
    trRef: _propTypes2.default.oneOfType([_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object]), _propTypes2.default.any]),
    className: _propTypes2.default.string,
    onScroll: _propTypes2.default.func,
    onResize: _propTypes2.default.func,
    row: _propTypes2.default.shape({
      isOpen: _propTypes2.default.any,
      isExpanded: _propTypes2.default.any
    }),
    rowProps: _propTypes2.default.any
  });

  _defineProperty(RowWrapper, "defaultProps", {
    className: '',
    row: {
      isOpen: undefined,
      isExpanded: undefined
    },
    rowProps: null
  });
});
//# sourceMappingURL=RowWrapper.js.map