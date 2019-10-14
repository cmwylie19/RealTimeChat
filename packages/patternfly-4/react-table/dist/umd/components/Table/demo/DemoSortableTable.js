(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactTable);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactTable) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // eslint-disable-next-line import/no-extraneous-dependencies
  class DemoSortableTable extends _react2.default.Component {
    constructor(props) {
      super(props);
      this.state = {
        columns: [{
          title: 'Repositories',
          transforms: [_reactTable.sortable]
        }, 'Branches', {
          title: 'Pull requests',
          transforms: [_reactTable.sortable]
        }, 'Workspaces', 'Last Commit'],
        rows: [props.firstColumnRows, ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
        sortBy: {}
      };
      this.onSort = this.onSort.bind(this);
    }

    onSort(_event, index, direction) {
      const sortedRows = this.state.rows.sort((a, b) => {
        if (a[index] < b[index]) {
          return -1;
        }

        return a[index] > b[index] ? 1 : 0;
      });
      this.setState({
        sortBy: {
          index,
          direction
        },
        rows: direction === _reactTable.SortByDirection.asc ? sortedRows : sortedRows.reverse()
      });
    }

    render() {
      const {
        id
      } = this.props;
      const {
        columns,
        rows,
        sortBy
      } = this.state;
      return _react2.default.createElement(_reactTable.Table, {
        "aria-label": "Sortable Table",
        variant: _reactTable.TableVariant.compact,
        sortBy: sortBy,
        onSort: this.onSort,
        cells: columns,
        rows: rows,
        className: "pf-m-no-border-rows",
        id: id
      }, _react2.default.createElement(_reactTable.TableHeader, null), _react2.default.createElement(_reactTable.TableBody, null));
    }

  }

  exports.default = DemoSortableTable;
  DemoSortableTable.propTypes = {
    firstColumnRows: _propTypes2.default.array.isRequired,
    id: _propTypes2.default.string.isRequired
  };
});
//# sourceMappingURL=DemoSortableTable.js.map