(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../components/Table/Table", "../components/Table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../components/Table/Table"), require("../components/Table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Table, global.Table);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Table, _Table2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TableProvider = exports.withContext = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const withContext = exports.withContext = ({
    context = {},
    contextType = {}
  }) => WrappedComponent => {
    class WithContext extends _react.Component {
      getChildContext() {
        return context;
      }

      render() {
        return _react2.default.createElement(WrappedComponent, null, this.props.children);
      }

    }

    WithContext.propTypes = {
      children: _propTypes2.default.node
    };
    WithContext.defaultProps = {
      children: null
    };
    WithContext.WrappedComponent = WrappedComponent;
    WithContext.childContextTypes = contextType;
    return WithContext;
  };

  const TableProvider = exports.TableProvider = withContext({
    context: {
      columns: [],
      renderers: {
        header: {
          wrapper: 'thead',
          row: 'tr',
          cell: 'th'
        }
      }
    },
    contextType: {
      columns: _propTypes2.default.any,
      renderers: _propTypes2.default.any
    }
  })('table');

  const MockedTableChanges = ({
    updateFunc,
    columns
  }) => _react2.default.createElement(_Table.TableContext.Provider, {
    value: {
      updateHeaderData: updateFunc
    }
  }, _react2.default.createElement(TableProvider, null, _react2.default.createElement(_Table2.TableHeader, {
    headerRows: columns
  })));

  MockedTableChanges.propTypes = {
    updateFunc: _propTypes2.default.func,
    columns: _propTypes2.default.array
  };
  MockedTableChanges.defaultProps = {
    updateFunc: () => undefined,
    columns: []
  };
  exports.default = MockedTableChanges;
});
//# sourceMappingURL=MockedTableChanges.js.map