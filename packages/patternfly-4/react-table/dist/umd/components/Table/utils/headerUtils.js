(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./transformers", "./formatters"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./transformers"), require("./formatters"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.transformers, global.formatters);
    global.undefined = mod.exports;
  }
})(this, function (exports, _transformers, _formatters) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.calculateColumns = exports.mapOpenedRows = undefined;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
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

  /**
   * Generate header with transforms and formatters from custom header object.
   * @param {*} header with transforms, formatters, columnTransforms, and rest of header object.
   * @param {*} title to be used as label in header config.
   * @return {*} header, label, transforms: Array, formatters: Array.
   */
  const generateHeader = ({
    transforms: origTransforms,
    formatters: origFormatters,
    columnTransforms,
    header
  }, title) => _objectSpread({}, header, {
    label: title,
    transforms: [_transformers.scopeColTransformer, _transformers.emptyCol, ...(origTransforms || []), ...(columnTransforms || []), ...(header && header.hasOwnProperty('transforms') ? header.transforms : [])],
    formatters: [...(origFormatters || []), ...(header && header.hasOwnProperty('formatters') ? header.formatters : [])]
  });
  /**
   * Function to generate cell for header config to change look of each cell.
   * @param {*} customCell config with cellFormatters, cellTransforms, columnTransforms and rest of cell config.
   * @returns {*} cell, transforms: Array, formatters: Array.
   */


  const generateCell = ({
    cellFormatters,
    cellTransforms,
    columnTransforms,
    cell
  }, extra) => _objectSpread({}, cell, {
    transforms: [...(cellTransforms || []), ...(columnTransforms || []), ...(cell && cell.hasOwnProperty('transforms') ? cell.transforms : []), _transformers.mapProps // This transform should be applied last so that props that are manually defined at the cell level will override all other transforms.
    ],
    formatters: [_formatters.defaultTitle, ...(cellFormatters || []), ...(cell && cell.hasOwnProperty('formatters') ? cell.formatters : [])]
  });
  /**
   * Function to map custom simple object properties to expected format with property, header, cell, extra params
   * and props.
   * @param {*} column to be shown in header - either string or object with title, transformers and formatters (for cels as well).
   * @param {*} extra additional object with callbacks for specific formatters.
   * @param {*} key cell key to be shown in data-key.
   * @param {*} props additional props for each cell.
   * @returns {*} object with property, extraParams, header, cell and props.
   */


  const mapHeader = (column, extra, key, ...props) => {
    const title = column.hasOwnProperty('title') ? column.title : column;
    return {
      property: typeof title === 'string' && title.toLowerCase().trim().replace(/\s/g, '-') || `column-${key}`,
      extraParams: extra,
      data: column.data,
      header: generateHeader(column, title),
      cell: generateCell(column, extra),
      props: _objectSpread({
        'data-label': typeof title === 'string' ? title : `column-${key}`,
        'data-key': key
      }, column.hasOwnProperty('props') ? column.props : {}, {}, props)
    };
  };
  /**
   * Function to define select cell in first column.
   * @param {*} extraObject with onSelect callback.
   * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
   */


  const selectableTransforms = ({
    onSelect,
    canSelectAll
  }) => [...(onSelect ? [{
    title: '',
    transforms: canSelectAll && [_transformers.selectable] || null,
    cellTransforms: [_transformers.selectable]
  }] : [])];
  /**
   * Function to define actions in last column.
   * @param {*} extraObject with actions array.
   * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
   */


  const actionsTransforms = ({
    actions,
    actionResolver,
    areActionsDisabled
  }) => [...(actionResolver || actions ? [{
    title: '',
    transforms: [_transformers.emptyTD],
    cellTransforms: [(0, _transformers.cellActions)(actions, actionResolver, areActionsDisabled)]
  }] : [])];
  /**
   * Function to define collapsible in first column.
   * @param {*}  extraObject with onCollapse callback.
   * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
   */


  const collapsibleTransfroms = ({
    onCollapse
  }) => [...(onCollapse ? [{
    title: '',
    transforms: [_transformers.emptyTD],
    cellTransforms: [_transformers.collapsible]
  }] : [])];
  /**
   * Function to add additional cell transforms to object.
   * @param {*} cell to be expanded.
   * @param {*} additional thing to be added to cellTransforms.
   * @returns {*} object with title from cell and cellTransforms with additional in.
   */


  const addAdditionalCellTranforms = (cell, additional) => _objectSpread({}, cell.hasOwnProperty('title') ? cell : {
    title: cell
  }, {
    cellTransforms: [...(cell.hasOwnProperty('cellTransforms') ? cell.cellTransforms : []), additional]
  });
  /**
   * Function to change expanded row with additional transforms.
   * @param {*} header info with cellTransforms.
   * @param {*} extraObject with onCollapse function.
   */


  const expandContent = (header, {
    onCollapse
  }) => {
    if (!onCollapse) {
      return header;
    }

    return header.map((cell, key) => {
      const parentIdCell = addAdditionalCellTranforms(cell, _transformers.parentId);
      return key === 0 ? addAdditionalCellTranforms(parentIdCell, (0, _transformers.expandedRow)(header.length)) : parentIdCell;
    });
  };
  /**
   * Function to join parent and their children so they can be rendered in tbody.
   * @param {*} rows raw data to find out if it's child or parent.
   * @param {*} children data to render (array of react children).
   */


  const mapOpenedRows = exports.mapOpenedRows = (rows, children) => rows.reduce((acc, curr, key) => {
    if (curr.hasOwnProperty('parent')) {
      const parent = acc.length > 0 && acc[acc.length - 1];

      if (parent) {
        acc[acc.length - 1].rows = [...acc[acc.length - 1].rows, children[key]];

        if (curr.hasOwnProperty('compoundParent')) {
          // if this is compound expand, check for any open child cell
          acc[acc.length - 1].isOpen = acc[acc.length - 1].rows.some(oneRow => oneRow.props.rowData.cells.some(oneCell => oneCell.props && oneCell.props.isOpen));
        }
      }
    } else {
      acc = [...acc, _objectSpread({}, curr, {
        rows: [children[key]]
      })];
    }

    return acc;
  }, []);
  /**
   * Function to calculate columns based on custom config.
   * It adds some custom cells for collapse, select, if expanded row and actions.
   * @param {*} headerRows custom object with described table header cells.
   * @param {*} extra object with custom callbacks.
   * @return {*} expected object for react tabular table.
   */


  const calculateColumns = exports.calculateColumns = (headerRows, extra) => headerRows && [...collapsibleTransfroms(extra), ...selectableTransforms(extra), ...expandContent(headerRows, extra), ...actionsTransforms(extra)].map((oneCol, key) => _objectSpread({}, mapHeader(oneCol, extra, key)));
});
//# sourceMappingURL=headerUtils.js.map