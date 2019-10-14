function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme/build';
import { default as editableRowWrapper } from './editableRowWrapper';
import { TableEditConfirmation } from './constants';
import { mockClosest } from '../../test-helpers/helpers';

const TestRow = ({
  trRef
}) => React.createElement("tr", {
  ref: trRef
});

TestRow.propTypes = {
  trRef: PropTypes.func
};
TestRow.defaultProps = {
  trRef: null
};

const getRowWrapper = (row, props) => {
  const RowWrapper = editableRowWrapper(TestRow);
  return React.createElement(RowWrapper, _extends({}, props, {
    row: row
  }));
};

const buildRow = (row = {}, editConfirmationType = TableEditConfirmation.ROW) => _objectSpread({}, row, {
  editConfig: {
    editConfirmationType
  }
});

describe('editableRowWrapper', () => {
  let mountOptions;
  let container;
  beforeEach(() => {
    container = mount(React.createElement("table", null, React.createElement("tbody", null)));
    mountOptions = {
      attachTo: container.find('tbody').getDOMNode()
    };
    mockClosest(null, selector => selector === 'table' ? container.getDOMNode() : undefined, true);
  });
  afterEach(() => {
    container.unmount();
  });
  test('renders correctly', () => {
    const trRef = jest.fn();
    const view = mount(getRowWrapper(buildRow({}, null), {
      onResize: jest.fn(),
      onScroll: jest.fn(),
      trRef
    }), mountOptions);
    expect(view).toMatchSnapshot();
    expect(trRef).toHaveBeenCalled();
  });
  test('sets editable row classname', () => {
    [...Object.keys(TableEditConfirmation), null].forEach(confirmationType => {
      const view = mount(getRowWrapper(buildRow({}, confirmationType)), mountOptions);
      expect(view.find('.pf-c-table__editable-row')).toHaveLength(1);
      view.detach();
    });
  });
  test('has inline edit buttons', () => {
    [buildRow({
      isEditing: true
    }), buildRow({
      isEditing: true,
      isParentEditing: true
    }), // expandable
    buildRow({
      isEditing: true,
      isChildEditing: true,
      isLastVisibleParent: true
    }), // expandable
    buildRow({
      isTableEditing: true,
      isFirstVisible: true
    }, TableEditConfirmation.TABLE_TOP), buildRow({
      isTableEditing: true,
      isLastVisible: true
    }, TableEditConfirmation.TABLE_BOTTOM)].forEach(row => {
      const view = mount(getRowWrapper(row), mountOptions);
      expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(1);
      view.detach();
    });
  });
  test('does not have inline edit buttons', () => {
    [buildRow({
      isEditing: true
    }, TableEditConfirmation.NONE), buildRow({
      isEditing: true
    }, TableEditConfirmation.TABLE_TOP), buildRow({
      isEditing: true
    }, TableEditConfirmation.TABLE_BOTTOM), buildRow({
      isEditing: true,
      isParentEditing: true,
      isLastVisible: true
    }), // expandable
    buildRow({
      isEditing: true,
      isChildEditing: true
    }), // expandable
    buildRow({
      isTableEditing: true,
      isLastVisible: true
    }, TableEditConfirmation.NONE), buildRow({
      isTableEditing: true,
      isLastVisible: true
    }), buildRow({
      isTableEditing: true
    }, TableEditConfirmation.TABLE_TOP), buildRow({
      isTableEditing: true
    }, TableEditConfirmation.TABLE_BOTTOM), buildRow({
      isTableEditing: true,
      isLastVisible: true
    }, TableEditConfirmation.TABLE_TOP), buildRow({
      isTableEditing: true,
      isFirstVisible: true
    }, TableEditConfirmation.TABLE_BOTTOM)].forEach(row => {
      const view = mount(getRowWrapper(row), mountOptions);
      expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(0);
      view.detach();
    });
  });
  test('onEditConfirmed and onEditCanceled called', () => {
    const onEditConfirmed = jest.fn();
    const onEditCanceled = jest.fn();
    const row = {
      isEditing: true,
      editConfig: {
        editConfirmationType: TableEditConfirmation.ROW,
        onEditConfirmed,
        onEditCanceled
      }
    };
    const view = mount(getRowWrapper(row, null, React.Fragment), mountOptions);
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
    expect(onEditConfirmed).toHaveBeenCalled();
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
    expect(onEditCanceled).toHaveBeenCalled();
  });
});
//# sourceMappingURL=editableRowWrapper.test.js.map