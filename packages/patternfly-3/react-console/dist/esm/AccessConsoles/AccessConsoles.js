var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'patternfly-react/dist/esm/components/Grid/Grid';
import Form from 'patternfly-react/dist/esm/components/Form/Form';
import Dropdown from 'patternfly-react/dist/esm/components/Dropdown/Dropdown';
import MenuItem from 'patternfly-react/dist/esm/components/MenuItem/MenuItem';
import helpers from 'patternfly-react/dist/esm/common/helpers';


import constants from '../common/constants';

var NONE_TYPE = constants.NONE_TYPE,
    SERIAL_CONSOLE_TYPE = constants.SERIAL_CONSOLE_TYPE,
    VNC_CONSOLE_TYPE = constants.VNC_CONSOLE_TYPE,
    DESKTOP_VIEWER_CONSOLE_TYPE = constants.DESKTOP_VIEWER_CONSOLE_TYPE;
var Row = Grid.Row,
    Col = Grid.Col;
var Checkbox = Form.Checkbox,
    FormGroup = Form.FormGroup;


var getChildTypeName = function getChildTypeName(child) {
  return child && child.props && child.props.type ? child.props.type : child && child.type && child.type.displayName || null;
};

var isChildOfType = function isChildOfType(child, type) {
  return helpers.hasDisplayName(child, type) || child && child.props && child.props.type === type;
};

var AccessConsoles = function (_React$Component) {
  _inherits(AccessConsoles, _React$Component);

  function AccessConsoles() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AccessConsoles);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccessConsoles.__proto__ || Object.getPrototypeOf(AccessConsoles)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      type: _this.props.preselectedType,
      disconnectByChange: _this.props.disconnectByChange, // eslint-disable-line react/no-unused-state
      keptConnection: _defineProperty({}, _this.props.preselectedType, true)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AccessConsoles, [{
    key: 'onTypeChange',
    value: function onTypeChange(type) {
      this.setState(function (prevState) {
        var keptConnection = prevState.disconnectByChange ? _defineProperty({}, type, true) : _extends({}, prevState.keptConnection, _defineProperty({}, type, true));

        return {
          type: type,
          keptConnection: keptConnection
        };
      });
    }
  }, {
    key: 'onChangeDisconnectBySwitchClick',
    value: function onChangeDisconnectBySwitchClick(target) {
      this.setState(function (prevState) {
        return {
          disconnectByChange: target.checked, // eslint-disable-line react/no-unused-state
          keptConnection: target.checked ? _defineProperty({}, prevState.type, true) : prevState.keptConnection
        };
      });
    }
  }, {
    key: 'getSelectedConsole',
    value: function getSelectedConsole() {
      return this.getConsoleForType(this.state.type);
    }
  }, {
    key: 'isChildOfTypePresent',
    value: function isChildOfTypePresent(type) {
      var found = false;
      React.Children.forEach(this.props.children, function (child) {
        found = found || isChildOfType(child, type);
      });

      return found;
    }
  }, {
    key: 'getConsoleForType',
    value: function getConsoleForType(type) {
      var _this2 = this;

      // To keep connection, render all consoles but hide those unused
      return React.Children.map(this.props.children, function (child) {
        return _this2.state.keptConnection[getChildTypeName(child)] ? React.createElement(
          'div',
          { key: getChildTypeName(child), hidden: !isChildOfType(child, type) },
          child
        ) : null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _items,
          _this3 = this;

      var items = (_items = {}, _defineProperty(_items, NONE_TYPE, this.props.textSelectConsoleType), _defineProperty(_items, SERIAL_CONSOLE_TYPE, this.props.textSerialConsole), _defineProperty(_items, VNC_CONSOLE_TYPE, this.props.textVncConsole), _defineProperty(_items, DESKTOP_VIEWER_CONSOLE_TYPE, this.props.textDesktopViewerConsole), _items);

      return React.createElement(
        Grid,
        { fluid: true, className: 'access-consoles-pf' },
        React.createElement(
          Form,
          { horizontal: true },
          React.createElement(
            FormGroup,
            { controlId: 'console-type', className: 'console-selector-pf' },
            React.createElement(
              Col,
              null,
              React.createElement(
                Dropdown,
                { id: 'console-type-selector', disabled: !this.props.children },
                React.createElement(
                  Dropdown.Toggle,
                  null,
                  this.props.children ? items[this.state.type] : this.props.textEmptyConsoleList
                ),
                React.createElement(
                  Dropdown.Menu,
                  null,
                  this.isChildOfTypePresent(VNC_CONSOLE_TYPE) && React.createElement(
                    MenuItem,
                    { eventKey: '1', onClick: function onClick() {
                        return _this3.onTypeChange(VNC_CONSOLE_TYPE);
                      } },
                    items[VNC_CONSOLE_TYPE]
                  ),
                  this.isChildOfTypePresent(SERIAL_CONSOLE_TYPE) && React.createElement(
                    MenuItem,
                    { eventKey: '2', onClick: function onClick() {
                        return _this3.onTypeChange(SERIAL_CONSOLE_TYPE);
                      } },
                    items[SERIAL_CONSOLE_TYPE]
                  ),
                  this.isChildOfTypePresent(DESKTOP_VIEWER_CONSOLE_TYPE) && React.createElement(
                    MenuItem,
                    { eventKey: '3', onClick: function onClick() {
                        return _this3.onTypeChange(DESKTOP_VIEWER_CONSOLE_TYPE);
                      } },
                    items[DESKTOP_VIEWER_CONSOLE_TYPE]
                  )
                )
              ),
              this.state.type !== NONE_TYPE && this.state.type !== DESKTOP_VIEWER_CONSOLE_TYPE && React.createElement(
                Checkbox,
                {
                  className: 'console-selector-pf-disconnect-switch',
                  inline: true,
                  defaultChecked: this.props.disconnectByChange,
                  onChange: function onChange(e) {
                    return _this3.onChangeDisconnectBySwitchClick(e.target);
                  }
                },
                this.props.textDisconnectByChange
              )
            )
          )
        ),
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            null,
            this.getSelectedConsole()
          )
        )
      );
    }
  }]);

  return AccessConsoles;
}(React.Component);

var validChildrenTypes = [SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE];
var childElementValidator = function childElementValidator(propValue) {
  if (propValue) {
    var children = Array.isArray(propValue) ? propValue : [propValue];
    if (!children.every(function (child) {
      return child === undefined || child == null || child.type && validChildrenTypes.indexOf(child.type.displayName) >= 0 || child.props && validChildrenTypes.indexOf(child.props.type) >= 0;
    })) {
      return new Error('AccessConsoles child validation failed');
    }
  }
  return true;
};

AccessConsoles.propTypes = {
  /**
   * Child element can be either
   *   - <SerialConsole>, <VncConsole> or <DesktopViewer>
   *   - or has a property "type" of value either SERIAL_CONSOLE_TYPE or VNC_CONSOLE_TYPE (useful when wrapping (composing) basic console components
   */
  children: PropTypes.oneOfType([PropTypes.objectOf(childElementValidator), PropTypes.arrayOf(childElementValidator)]),

  textSelectConsoleType: PropTypes.string /** Internationalization */
  , textSerialConsole: PropTypes.string /** Internationalization */
  , textVncConsole: PropTypes.string /** Internationalization */
  , textDesktopViewerConsole: PropTypes.string /** Internationalization */
  , textDisconnectByChange: PropTypes.string /** Internationalization */
  , textEmptyConsoleList: PropTypes.string /** Internationalization */

  , preselectedType: PropTypes.oneOf([NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE]) /** Initial selection of the dropdown */
  , disconnectByChange: PropTypes.bool /** Initial value of "Disconnect before switching" checkbox, "false" to disconnect when console type changed */
};

AccessConsoles.defaultProps = {
  children: null,

  textSelectConsoleType: 'Select Console Type',
  textSerialConsole: 'Serial Console',
  textVncConsole: 'VNC Console',
  textDesktopViewerConsole: 'Desktop Viewer',
  textDisconnectByChange: 'Disconnect before switching',
  textEmptyConsoleList: 'No console available',

  preselectedType: NONE_TYPE,
  disconnectByChange: true /** By default, console is unmounted (disconnected) when switching to other type */
};

AccessConsoles.constants = constants;

export default AccessConsoles;