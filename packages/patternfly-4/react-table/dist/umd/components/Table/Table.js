(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/Table/table", "@patternfly/react-styles/css/components/Table/table-grid", "@patternfly/react-core", "@patternfly/react-styles", "./base", "./BodyCell", "./HeaderCell", "./RowWrapper", "./BodyWrapper", "./utils/headerUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/Table/table"), require("@patternfly/react-styles/css/components/Table/table-grid"), require("@patternfly/react-core"), require("@patternfly/react-styles"), require("./base"), require("./BodyCell"), require("./HeaderCell"), require("./RowWrapper"), require("./BodyWrapper"), require("./utils/headerUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.table, global.tableGrid, global.reactCore, global.reactStyles, global.base, global.BodyCell, global.HeaderCell, global.RowWrapper, global.BodyWrapper, global.headerUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _table, _tableGrid, _reactCore, _reactStyles, _base, _BodyCell, _HeaderCell, _RowWrapper, _BodyWrapper, _headerUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Table = exports.TableContext = exports.SortByDirection = exports.TableVariant = exports.TableGridBreakpoint = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _table2 = _interopRequireDefault(_table);

  var _tableGrid2 = _interopRequireDefault(_tableGrid);

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

  let TableGridBreakpoint = exports.TableGridBreakpoint = undefined;

  (function (TableGridBreakpoint) {
    TableGridBreakpoint["none"] = "";
    TableGridBreakpoint["grid"] = "grid";
    TableGridBreakpoint["gridMd"] = "grid-md";
    TableGridBreakpoint["gridLg"] = "grid-lg";
    TableGridBreakpoint["gridXl"] = "grid-xl";
    TableGridBreakpoint["grid2xl"] = "grid-2xl";
  })(TableGridBreakpoint || (exports.TableGridBreakpoint = TableGridBreakpoint = {}));

  let TableVariant = exports.TableVariant = undefined;

  (function (TableVariant) {
    TableVariant["compact"] = "compact";
  })(TableVariant || (exports.TableVariant = TableVariant = {}));

  let SortByDirection = exports.SortByDirection = undefined;

  (function (SortByDirection) {
    SortByDirection["asc"] = "asc";
    SortByDirection["desc"] = "desc";
  })(SortByDirection || (exports.SortByDirection = SortByDirection = {}));

  const TableContext = exports.TableContext = React.createContext({
    headerData: null,
    headerRows: null,
    rows: []
  });

  class Table extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "isSelected", row => row.selected === true);

      _defineProperty(this, "areAllRowsSelected", rows => {
        if (rows === undefined || rows.length === 0) {
          return false;
        }

        return rows.every(row => this.isSelected(row) || row.hasOwnProperty('parent') && !row.showSelect);
      });
    }

    render() {
      const _this$props = this.props,
            {
        'aria-label': ariaLabel,
        caption,
        header,
        className,
        gridBreakPoint,
        onSort,
        onSelect,
        canSelectAll,
        sortBy,
        children,
        actions,
        actionResolver,
        areActionsDisabled,
        onCollapse,
        onExpand,
        rowLabeledBy,
        dropdownPosition,
        dropdownDirection,
        contentId,
        expandId,
        variant,
        rows,
        cells,
        bodyWrapper,
        rowWrapper,
        borders,
        role
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["aria-label", "caption", "header", "className", "gridBreakPoint", "onSort", "onSelect", "canSelectAll", "sortBy", "children", "actions", "actionResolver", "areActionsDisabled", "onCollapse", "onExpand", "rowLabeledBy", "dropdownPosition", "dropdownDirection", "contentId", "expandId", "variant", "rows", "cells", "bodyWrapper", "rowWrapper", "borders", "role"]);

      if (!ariaLabel && !caption && !header && role !== 'presentation') {
        // tslint:disable-next-line:no-console
        console.error('Table: Specify at least one of: header, caption, aria-label');
      }

      const headerData = (0, _headerUtils.calculateColumns)(cells, {
        sortBy,
        onSort,
        onSelect,
        canSelectAll,
        allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
        actions,
        actionResolver,
        areActionsDisabled,
        onCollapse,
        onExpand,
        rowLabeledBy,
        expandId,
        contentId,
        dropdownPosition,
        dropdownDirection,
        firstUserColumnIndex: [onCollapse, onSelect].filter(callback => callback).length
      });
      return React.createElement(TableContext.Provider, {
        value: {
          headerData,
          headerRows: null,
          rows
        }
      }, header, React.createElement(_base.Provider, _extends({}, props, {
        "aria-label": ariaLabel,
        renderers: {
          body: {
            wrapper: bodyWrapper || _BodyWrapper.BodyWrapper,
            row: rowWrapper || _RowWrapper.RowWrapper,
            cell: _BodyCell.BodyCell
          },
          header: {
            cell: _HeaderCell.HeaderCell
          }
        },
        columns: headerData,
        role: role,
        className: (0, _reactStyles.css)(_table2.default.table, gridBreakPoint && (0, _reactStyles.getModifier)(_tableGrid2.default, gridBreakPoint), (0, _reactStyles.getModifier)(_table2.default, variant), (onCollapse && variant === TableVariant.compact || onExpand) && _table2.default.modifiers.expandable, variant === TableVariant.compact && borders === false ? _table2.default.modifiers.noBorderRows : null, className)
      }), caption && React.createElement("caption", null, caption), children));
    }

  }

  exports.Table = Table;

  _defineProperty(Table, "propTypes", {
    'aria-label': _propTypes2.default.string,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    variant: _propTypes2.default.oneOf(['compact']),
    borders: _propTypes2.default.bool,
    gridBreakPoint: _propTypes2.default.oneOf(['', 'grid', 'grid-md', 'grid-lg', 'grid-xl', 'grid-2xl']),
    sortBy: _propTypes2.default.shape({
      index: _propTypes2.default.number,
      direction: _propTypes2.default.oneOf(['asc', 'desc'])
    }),
    onCollapse: _propTypes2.default.func,
    onExpand: _propTypes2.default.func,
    onSelect: _propTypes2.default.func,
    canSelectAll: _propTypes2.default.bool,
    onSort: _propTypes2.default.func,
    actions: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
      isSeparator: _propTypes2.default.bool,
      itemKey: _propTypes2.default.string,
      title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
      onClick: _propTypes2.default.func.isRequired
    }), _propTypes2.default.shape({
      isSeparator: _propTypes2.default.bool.isRequired
    })])),
    actionResolver: _propTypes2.default.func,
    areActionsDisabled: _propTypes2.default.func,
    header: _propTypes2.default.node,
    caption: _propTypes2.default.node,
    rowLabeledBy: _propTypes2.default.string,
    expandId: _propTypes2.default.string,
    contentId: _propTypes2.default.string,
    dropdownPosition: _propTypes2.default.oneOf(['right', 'left']),
    dropdownDirection: _propTypes2.default.oneOf(['up', 'down']),
    rows: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
      cells: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.shape({
        title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
        props: _propTypes2.default.any
      })])),
      isOpen: _propTypes2.default.bool,
      parent: _propTypes2.default.number,
      compoundParent: _propTypes2.default.number,
      props: _propTypes2.default.any,
      fullWidth: _propTypes2.default.bool,
      noPadding: _propTypes2.default.bool,
      showSelect: _propTypes2.default.bool,
      isExpanded: _propTypes2.default.bool,
      isFirstVisible: _propTypes2.default.bool,
      isLastVisible: _propTypes2.default.bool,
      selected: _propTypes2.default.bool
    }), _propTypes2.default.arrayOf(_propTypes2.default.string)])).isRequired,
    cells: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.shape({
      title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
      transforms: _propTypes2.default.arrayOf(_propTypes2.default.func),
      cellTransforms: _propTypes2.default.arrayOf(_propTypes2.default.func),
      columnTransforms: _propTypes2.default.arrayOf(_propTypes2.default.func),
      formatters: _propTypes2.default.arrayOf(_propTypes2.default.func),
      cellFormatters: _propTypes2.default.arrayOf(_propTypes2.default.func),
      props: _propTypes2.default.any,
      data: _propTypes2.default.any,
      header: _propTypes2.default.any,
      cell: _propTypes2.default.any
    }), _propTypes2.default.string])).isRequired,
    bodyWrapper: _propTypes2.default.any
  });

  _defineProperty(Table, "defaultProps", {
    "children": null,
    "className": '',
    "variant": null,
    "borders": true,
    "rowLabeledBy": 'simple-node',
    "expandId": 'expandable-toggle',
    "contentId": 'expanded-content',
    "dropdownPosition": _reactCore.DropdownPosition.right,
    "dropdownDirection": _reactCore.DropdownDirection.down,
    "header": undefined,
    "caption": undefined,
    'aria-label': undefined,
    "gridBreakPoint": TableGridBreakpoint.gridMd,
    "role": 'grid',
    "canSelectAll": true
  });
});
//# sourceMappingURL=Table.js.map