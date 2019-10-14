function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css } from '@patternfly/react-styles';
import { combineFunctions, shallowLeftSideEquals, getBoundingClientRect, getClientWindowDimensions } from './utils/utils';
import ConfirmButtons from './ConfirmButtons';
import { TableEditConfirmation } from './constants';
import '@patternfly/react-styles/css/components/Table/inline-edit.css';
import { inlineEditStyles as styles } from './css/inline-edit-css';
const propTypes = {
  trRef: PropTypes.func,
  className: PropTypes.string,
  onScroll: PropTypes.func,
  onResize: PropTypes.func,
  row: PropTypes.shape({
    isOpen: PropTypes.bool,
    isExpanded: PropTypes.bool,
    isEditing: PropTypes.bool,
    isTableEditing: PropTypes.bool,
    isFirstVisible: PropTypes.bool,
    isLastVisible: PropTypes.bool,
    isChildEditing: PropTypes.bool,
    isParentEditing: PropTypes.bool,
    isLastVisibleParent: PropTypes.bool,
    editConfig: PropTypes.object
  }),
  rowProps: PropTypes.object
};
const defaultProps = {
  trRef: undefined,
  className: '',
  onScroll: undefined,
  onResize: undefined,
  row: {
    isOpen: undefined,
    isExpanded: undefined,
    isEditing: undefined,
    isTableEditing: undefined,
    isFirstVisible: undefined,
    isLastVisible: undefined,
    isChildEditing: undefined,
    isParentEditing: undefined,
    isLastVisibleParent: undefined,
    editConfig: undefined
  },
  rowProps: null
}; // TableEditConfirmation constants like TABLE_TOP cannot be referenced but must be hardcoded due to this issue:
// https://github.com/reactjs/react-docgen/issues/317#issue-393678795

const tableConfirmationMapper = {
  TABLE_TOP: {
    hasConfirmationButtons: ({
      isTableEditing,
      isFirstVisible
    }) => isTableEditing && isFirstVisible,
    isTableConfirmation: () => true,
    areButtonsOnTop: () => true,
    hasBoldBorder: () => true,
    getEditStyles: ({
      isTableEditing,
      isFirstVisible
    }) => css(styles.tableEditableRow, isTableEditing && isFirstVisible && styles.modifiers.tableEditingFirstRow)
  },
  TABLE_BOTTOM: {
    hasConfirmationButtons: ({
      isTableEditing,
      isLastVisible
    }) => isTableEditing && isLastVisible,
    isTableConfirmation: () => true,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => true,
    getEditStyles: ({
      isTableEditing,
      isLastVisible
    }) => css(styles.tableEditableRow, isTableEditing && isLastVisible && styles.modifiers.tableEditingLastRow)
  },
  ROW: {
    hasConfirmationButtons: ({
      isEditing,
      isParentEditing,
      isLastVisibleParent,
      isChildEditing,
      isLastVisible
    }) => isEditing && !(isChildEditing && isParentEditing) && // buttons can't appear in the middle
    !(isParentEditing && isLastVisible) && // parent will show the buttons on top
    !(isChildEditing && !isLastVisibleParent),
    // child will show the buttons on bottom
    isTableConfirmation: () => false,
    areButtonsOnTop: ({
      isLastVisible,
      isLastVisibleParent
    }) => isLastVisible || isLastVisibleParent,
    hasBoldBorder: () => false,
    getEditStyles: ({
      isEditing
    }) => css(styles.tableEditableRow, isEditing && styles.modifiers.editing)
  },
  NO_CONFIRM_ROW: {
    hasConfirmationButtons: () => false,
    isTableConfirmation: () => false,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => false,
    getEditStyles: ({
      isEditing
    }) => css(styles.tableEditableRow, isEditing && styles.modifiers.editing)
  },
  NONE: {
    hasConfirmationButtons: () => false,
    isTableConfirmation: () => false,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => false,
    getEditStyles: () => css(styles.tableEditableRow)
  }
};

const getTableConfirmation = ({
  editConfig
}) => tableConfirmationMapper[editConfig && editConfig.editConfirmationType] || tableConfirmationMapper[TableEditConfirmation.NONE];

const editableRowWrapper = RowWrapperComponent => {
  class RowWrapper extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "setStateWith2dEquals", newState => {
        this.setState(oldState => Object.keys(newState).find(key => !shallowLeftSideEquals(newState[key], oldState[key])) ? newState : null);
      });

      _defineProperty(this, "saveRowDimensions", element => {
        if (element) {
          this.element = element;
          this.tableElem = element.closest('table');
        }

        this.updateRowDimensions();
      });

      _defineProperty(this, "updateRowDimensions", () => {
        if (this.element) {
          this.setStateWith2dEquals({
            rowDimensions: getBoundingClientRect(this.element)
          });
        }
      });

      _defineProperty(this, "handleScroll", event => {
        this.updateRowDimensions();
      });

      _defineProperty(this, "handleResize", event => {
        this.fetchClientDimensions();
        this.updateRowDimensions();
      });

      this.state = _objectSpread({
        rowDimensions: {},
        window: {}
      }, RowWrapper.getDerivedStateFromProps(props));
    }

    componentDidMount() {
      if (this.state.hasConfirmationButtons) {
        this.fetchClientDimensions();
      }
    }

    fetchClientDimensions() {
      this.setStateWith2dEquals({
        window: getClientWindowDimensions()
      });
    }

    getConfirmationButtons() {
      const _this$props = this.props,
            {
        row,
        rowProps
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["row", "rowProps"]);

      const {
        isLastVisible,
        isParentEditing,
        isLastVisibleParent,
        editConfig
      } = row;

      if (!editConfig) {
        return null;
      }

      const {
        onEditConfirmed,
        onEditCanceled
      } = editConfig;
      const tableConfirmation = getTableConfirmation(row);
      let confirmButtons;

      if (this.element && this.state.rowDimensions) {
        const options = tableConfirmation.isTableConfirmation() ? {} : rowProps;
        const actionObject = tableConfirmation.isTableConfirmation() ? null : row;
        confirmButtons = createPortal(React.createElement(ConfirmButtons, _extends({}, props, {
          onConfirm: event => onEditConfirmed(event, actionObject, options),
          onCancel: event => onEditCanceled(event, actionObject, options),
          buttonsOnTop: tableConfirmation.areButtonsOnTop({
            isLastVisible,
            isParentEditing,
            isLastVisibleParent
          }),
          boldBorder: tableConfirmation.hasBoldBorder(),
          environment: {
            window: this.state.window,
            row: getBoundingClientRect(this.element)
          }
        })), this.tableElem ? this.tableElem.parentNode : document.body);
      }

      return confirmButtons;
    }

    render() {
      const {
        trRef,
        className,
        onScroll,
        onResize,
        row: {
          isFirstVisible,
          isLastVisible,
          isEditing,
          isTableEditing,
          editConfig
        }
      } = this.props;
      const {
        hasConfirmationButtons
      } = this.state;
      const trClassName = getTableConfirmation({
        editConfig
      }).getEditStyles({
        isEditing,
        isTableEditing,
        isFirstVisible,
        isLastVisible
      });
      return React.createElement(React.Fragment, null, React.createElement(RowWrapperComponent, _extends({}, this.props, {
        trRef: combineFunctions(this.saveRowDimensions, trRef),
        className: classNames(trClassName, className),
        onScroll: combineFunctions(hasConfirmationButtons && this.handleScroll, onScroll),
        onResize: combineFunctions(hasConfirmationButtons && this.handleResize, onResize)
      })), hasConfirmationButtons && this.getConfirmationButtons());
    }

  }

  _defineProperty(RowWrapper, "getDerivedStateFromProps", (props, state) => ({
    hasConfirmationButtons: getTableConfirmation(props.row).hasConfirmationButtons(props.row)
  }));

  RowWrapper.propTypes = propTypes;
  RowWrapper.defaultProps = defaultProps;
  return RowWrapper;
};

export default editableRowWrapper;
//# sourceMappingURL=editableRowWrapper.js.map