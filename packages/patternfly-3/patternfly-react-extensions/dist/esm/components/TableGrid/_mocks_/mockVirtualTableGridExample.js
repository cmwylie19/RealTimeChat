var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import VirtualTableGrid from '../VirtualTableGrid';
import OverlayTrigger from 'patternfly-react/dist/esm/components/OverlayTrigger/OverlayTrigger';
import Tooltip from 'patternfly-react/dist/esm/components/Tooltip/Tooltip';

import { mockVirtualItems } from './mockVirtualItems';

var titleColSizes = {
  md: 2,
  sm: 4,
  xs: 6
};
var descrColSizes = {
  md: 6,
  sm: 4,
  xs: 6
};
var countColSizes = {
  md: 2,
  sm: 2,
  xsHidden: true
};

var MockVirtualTableGridExample = function (_React$Component) {
  _inherits(MockVirtualTableGridExample, _React$Component);

  function MockVirtualTableGridExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MockVirtualTableGridExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MockVirtualTableGridExample.__proto__ || Object.getPrototypeOf(MockVirtualTableGridExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sortField: 'title',
      isAscending: true,
      items: mockVirtualItems,
      selectedItem: null,
      selectedField: null,
      selectedItems: []
    }, _this.onSortToggle = function (id) {
      var _this$state = _this.state,
          items = _this$state.items,
          sortField = _this$state.sortField,
          isAscending = _this$state.isAscending;

      var updateAscending = true;

      if (id === sortField) {
        updateAscending = !isAscending;
      }

      items.sort(function (a, b) {
        var compVal = 0;
        if (id === 'title') {
          compVal = a.title.localeCompare(b.title);
        } else if (id === 'hosts') {
          compVal = a.hosts - b.hosts;
        } else if (id === 'clusters') {
          compVal = a.clusters - b.clusters;
        }

        if (!updateAscending) {
          compVal *= -1;
        }

        return compVal;
      });

      _this.setState({ items: items, sortField: id, isAscending: updateAscending });
    }, _this.onSelect = function (item, field) {
      _this.setState({ selectedItem: item, selectedField: field });
    }, _this.toggleSelection = function (item) {
      var selectedItems = _this.state.selectedItems;

      var newSelections = void 0;
      var index = selectedItems.indexOf(item);

      if (index >= 0) {
        newSelections = [].concat(_toConsumableArray(selectedItems.slice(0, index)), _toConsumableArray(selectedItems.slice(index + 1)));
      } else {
        newSelections = [].concat(_toConsumableArray(selectedItems), [item]);
      }
      _this.setState({ selectedItems: newSelections });
    }, _this.toggleAllSelections = function () {
      var _this$state2 = _this.state,
          items = _this$state2.items,
          selectedItems = _this$state2.selectedItems;

      _this.setState({ selectedItems: selectedItems.length > 0 ? [] : [].concat(_toConsumableArray(items)) });
    }, _this.ItemHeader = function (tableData) {
      var numItems = tableData.numItems,
          selectType = tableData.selectType,
          selectedItems = tableData.selectedItems,
          sortField = tableData.sortField,
          isAscending = tableData.isAscending;

      return React.createElement(
        VirtualTableGrid.Head,
        {
          showCheckbox: selectType === 'checkbox',
          allSelected: selectType === 'checkbox' && selectedItems.length === numItems,
          partialSelected: selectType === 'checkbox' && selectedItems.length > 0 && selectedItems.length < numItems,
          onToggleSelection: _this.toggleAllSelections
        },
        React.createElement(
          VirtualTableGrid.ColumnHeader,
          _extends({
            id: 'title',
            sortable: true,
            isSorted: sortField === 'title',
            isAscending: isAscending,
            onSortToggle: function onSortToggle() {
              return _this.onSortToggle('title');
            }
          }, titleColSizes),
          'Title'
        ),
        React.createElement(
          VirtualTableGrid.ColumnHeader,
          _extends({
            id: 'description',
            isSorted: sortField === 'description',
            isAscending: isAscending,
            onSortToggle: function onSortToggle() {
              return _this.onSortToggle('description');
            }
          }, descrColSizes),
          'Description'
        ),
        React.createElement(
          VirtualTableGrid.ColumnHeader,
          _extends({
            id: 'hosts',
            sortable: true,
            isSorted: sortField === 'hosts',
            isAscending: isAscending,
            onSortToggle: function onSortToggle() {
              return _this.onSortToggle('hosts');
            }
          }, countColSizes),
          React.createElement(
            OverlayTrigger,
            { overlay: React.createElement(
                Tooltip,
                { id: 'hosts-tip' },
                'Hosts'
              ), placement: 'top' },
            React.createElement(
              'span',
              null,
              'Hosts'
            )
          )
        ),
        React.createElement(
          VirtualTableGrid.ColumnHeader,
          _extends({
            id: 'clusters',
            sortable: true,
            isSorted: sortField === 'clusters',
            isAscending: isAscending,
            onSortToggle: function onSortToggle() {
              return _this.onSortToggle('clusters');
            }
          }, countColSizes),
          React.createElement(
            OverlayTrigger,
            { overlay: React.createElement(
                Tooltip,
                { id: 'clusters-tip' },
                'Clusters'
              ), placement: 'top' },
            React.createElement(
              'span',
              null,
              'Clusters'
            )
          )
        )
      );
    }, _this.ItemRow = function (rowProps) {
      var obj = rowProps.obj,
          tableData = rowProps.tableData,
          index = rowProps.index;
      var selectType = tableData.selectType,
          selectedItem = tableData.selectedItem,
          selectedField = tableData.selectedField,
          selectedItems = tableData.selectedItems;

      var selected = selectType === 'checkbox' ? selectedItems.indexOf(obj) >= 0 : selectedItem === obj;
      return React.createElement(
        VirtualTableGrid.Row,
        {
          key: index,
          onClick: function onClick() {
            return selectType === 'row' && _this.onSelect(obj);
          },
          selected: (selectType === 'row' || selectType === 'checkbox') && selected,
          onToggleSelection: function onToggleSelection() {
            return _this.toggleSelection(obj);
          }
        },
        React.createElement(
          VirtualTableGrid.Col,
          _extends({}, titleColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(obj, 'title');
            },
            selected: selectType === 'cell' && selected && selectedField === 'title'
          }),
          obj.title
        ),
        React.createElement(
          VirtualTableGrid.Col,
          _extends({}, descrColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(obj, 'description');
            },
            selected: selectType === 'cell' && selected && selectedField === 'description'
          }),
          obj.description
        ),
        React.createElement(
          VirtualTableGrid.Col,
          _extends({}, countColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(obj, 'hosts');
            },
            selected: selectType === 'cell' && selected && selectedField === 'hosts'
          }),
          obj.hosts
        ),
        React.createElement(
          VirtualTableGrid.Col,
          _extends({}, countColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(obj, 'clusters');
            },
            selected: selectType === 'cell' && selected && selectedField === 'clusters'
          }),
          obj.clusters
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MockVirtualTableGridExample, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          items = _state.items,
          selectedItem = _state.selectedItem,
          selectedItems = _state.selectedItems,
          selectedField = _state.selectedField,
          sortField = _state.sortField,
          isAscending = _state.isAscending;
      var _props = this.props,
          bordered = _props.bordered,
          selectType = _props.selectType;

      var tableData = {
        selectedItem: selectedItem,
        selectedItems: selectedItems,
        selectedField: selectedField,
        sortField: sortField,
        isAscending: isAscending,
        selectType: selectType
      };
      return React.createElement(VirtualTableGrid, {
        id: 'virtual-table-grid',
        bordered: bordered,
        selectType: selectType,
        header: this.ItemHeader,
        row: this.ItemRow,
        data: items,
        tableData: tableData
      });
    }
  }]);

  return MockVirtualTableGridExample;
}(React.Component);

MockVirtualTableGridExample.propTypes = {
  bordered: PropTypes.bool,
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};

MockVirtualTableGridExample.defaultProps = {
  bordered: false,
  selectType: 'none'
};

export { MockVirtualTableGridExample };

export var MockVirtualTableGridExampleSource = '\nimport React from \'react\';\nimport PropTypes from \'prop-types\';\nimport VirtualTableGrid from \'../VirtualTableGrid\';\nimport { OverlayTrigger, Tooltip } from \'patternfly-react\';\nimport { mockVirtualItems } from \'./mockVirtualItems\';\n\nconst titleColSizes = {\n  md: 2,\n  sm: 4,\n  xs: 6\n};\nconst descrColSizes = {\n  md: 6,\n  sm: 4,\n  xs: 6\n};\nconst countColSizes = {\n  md: 2,\n  sm: 2,\n  xsHidden: true\n};\n\nclass MockVirtualTableGridExample extends React.Component {\n  state = {\n    sortField: \'title\',\n    isAscending: true,\n    items: mockVirtualItems,\n    selectedItem: null,\n    selectedField: null,\n    selectedItems: []\n  };\n\n  onSortToggle = id => {\n    const { items, sortField, isAscending } = this.state;\n    let updateAscending = true;\n\n    if (id === sortField) {\n      updateAscending = !isAscending;\n    }\n\n    items.sort((a, b) => {\n      let compVal = 0;\n      if (id === \'title\') {\n        compVal = a.title.localeCompare(b.title);\n      } else if (id === \'hosts\') {\n        compVal = a.hosts - b.hosts;\n      } else if (id === \'clusters\') {\n        compVal = a.clusters - b.clusters;\n      }\n\n      if (!updateAscending) {\n        compVal *= -1;\n      }\n\n      return compVal;\n    });\n\n    this.setState({ items, sortField: id, isAscending: updateAscending });\n  };\n\n  onSelect = (item, field) => {\n    this.setState({ selectedItem: item, selectedField: field });\n  };\n\n  toggleSelection = item => {\n    const { selectedItems } = this.state;\n    let newSelections;\n    const index = selectedItems.indexOf(item);\n\n    if (index >= 0) {\n      newSelections = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)];\n    } else {\n      newSelections = [...selectedItems, item];\n    }\n    this.setState({ selectedItems: newSelections });\n  };\n\n  toggleAllSelections = () => {\n    const { items, selectedItems } = this.state;\n    this.setState({ selectedItems: selectedItems.length > 0 ? [] : [...items] });\n  };\n\n  ItemHeader = tableData => {\n    const { numItems, selectType, selectedItems, sortField, isAscending } = tableData;\n    return (\n      <VirtualTableGrid.Head\n        showCheckbox={selectType === \'checkbox\'}\n        allSelected={selectType === \'checkbox\' && selectedItems.length === numItems}\n        partialSelected={selectType === \'checkbox\' && selectedItems.length > 0 && selectedItems.length < numItems}\n        onToggleSelection={this.toggleAllSelections}\n      >\n        <VirtualTableGrid.ColumnHeader\n          id="title"\n          sortable\n          isSorted={sortField === \'title\'}\n          isAscending={isAscending}\n          onSortToggle={() => this.onSortToggle(\'title\')}\n          {...titleColSizes}\n        >\n          Title\n        </VirtualTableGrid.ColumnHeader>\n        <VirtualTableGrid.ColumnHeader\n          id="description"\n          isSorted={sortField === \'description\'}\n          isAscending={isAscending}\n          onSortToggle={() => this.onSortToggle(\'description\')}\n          {...descrColSizes}\n        >\n          Description\n        </VirtualTableGrid.ColumnHeader>\n        <VirtualTableGrid.ColumnHeader\n          id="hosts"\n          sortable\n          isSorted={sortField === \'hosts\'}\n          isAscending={isAscending}\n          onSortToggle={() => this.onSortToggle(\'hosts\')}\n          {...countColSizes}\n        >\n          <OverlayTrigger overlay={<Tooltip id="hosts-tip">Hosts</Tooltip>} placement="top">\n            <span>Hosts</span>\n          </OverlayTrigger>\n        </VirtualTableGrid.ColumnHeader>\n        <VirtualTableGrid.ColumnHeader\n          id="clusters"\n          sortable\n          isSorted={sortField === \'clusters\'}\n          isAscending={isAscending}\n          onSortToggle={() => this.onSortToggle(\'clusters\')}\n          {...countColSizes}\n        >\n          <OverlayTrigger overlay={<Tooltip id="clusters-tip">Clusters</Tooltip>} placement="top">\n            <span>Clusters</span>\n          </OverlayTrigger>\n        </VirtualTableGrid.ColumnHeader>\n      </VirtualTableGrid.Head>\n    );\n  };\n\n  ItemRow = rowProps => {\n    const { obj, tableData, index } = rowProps;\n    const { selectType, selectedItem, selectedField, selectedItems } = tableData;\n    const selected = selectType === \'checkbox\' ? selectedItems.indexOf(obj) >= 0 : selectedItem === obj;\n    return (\n      <VirtualTableGrid.Row\n        key={index}\n        onClick={() => selectType === \'row\' && this.onSelect(obj)}\n        selected={(selectType === \'row\' || selectType === \'checkbox\') && selected}\n        onToggleSelection={() => this.toggleSelection(obj)}\n      >\n        <VirtualTableGrid.Col\n          {...titleColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(obj, \'title\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'title\'}\n        >\n          {obj.title}\n        </VirtualTableGrid.Col>\n        <VirtualTableGrid.Col\n          {...descrColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(obj, \'description\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'description\'}\n        >\n          {obj.description}\n        </VirtualTableGrid.Col>\n        <VirtualTableGrid.Col\n          {...countColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(obj, \'hosts\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'hosts\'}\n        >\n          {obj.hosts}\n        </VirtualTableGrid.Col>\n        <VirtualTableGrid.Col\n          {...countColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(obj, \'clusters\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'clusters\'}\n        >\n          {obj.clusters}\n        </VirtualTableGrid.Col>\n      </VirtualTableGrid.Row>\n    );\n  };\n\n  render() {\n    const { items, selectedItem, selectedItems, selectedField, sortField, isAscending } = this.state;\n    const { bordered, selectType } = this.props;\n    const tableData = {\n      selectedItem,\n      selectedItems,\n      selectedField,\n      sortField,\n      isAscending,\n      selectType\n    };\n    return (\n      <VirtualTableGrid\n        id="virtual-table-grid"\n        bordered={bordered}\n        selectType={selectType}\n        header={this.ItemHeader}\n        row={this.ItemRow}\n        data={items}\n        tableData={tableData}\n      />\n    );\n  }\n}\n\nMockVirtualTableGridExample.propTypes = {\n  bordered: PropTypes.bool,\n  selectType: PropTypes.oneOf([\'row\', \'cell\', \'checkbox\', \'none\'])\n};\n\nMockVirtualTableGridExample.defaultProps = {\n  bordered: false,\n  selectType: \'none\'\n};\n\nexport { MockVirtualTableGridExample };\n';