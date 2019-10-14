"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _select = _interopRequireDefault(require("@patternfly/react-styles/css/components/Select/select"));

var _badge = _interopRequireDefault(require("@patternfly/react-styles/css/components/Badge/badge"));

var _formControl = _interopRequireDefault(require("@patternfly/react-styles/css/components/FormControl/form-control"));

var _button = _interopRequireDefault(require("@patternfly/react-styles/css/components/Button/button"));

var _reactStyles = require("@patternfly/react-styles");

var _reactIcons = require("@patternfly/react-icons");

var _SelectMenu = require("./SelectMenu");

var _SelectOption = require("./SelectOption");

var _SelectToggle = require("./SelectToggle");

var _selectConstants = require("./selectConstants");

var _ChipGroup = require("../ChipGroup");

var _util = require("../../helpers/util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// seed for the aria-labelledby ID
var currentId = 0;

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "parentRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "refCollection", []);

    _defineProperty(_assertThisInitialized(_this), "state", {
      openedOnEnter: false,
      typeaheadInputValue: '',
      typeaheadActiveChild: null,
      typeaheadFilteredChildren: React.Children.toArray(_this.props.children),
      typeaheadCurrIndex: -1,
      creatableValue: ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      if (!prevState.openedOnEnter && _this.state.openedOnEnter) {
        _this.refCollection[0].focus();
      }

      if (prevProps.children !== _this.props.children) {
        _this.setState({
          typeaheadFilteredChildren: React.Children.toArray(_this.props.children)
        });
      }

      if (prevProps.selections !== _this.props.selections && _this.state.typeaheadActiveChild) {
        _this.setState({
          typeaheadInputValue: _this.state.typeaheadActiveChild.innerText
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEnter", function () {
      _this.setState({
        openedOnEnter: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        openedOnEnter: false,
        typeaheadInputValue: null,
        typeaheadActiveChild: null,
        typeaheadFilteredChildren: React.Children.toArray(_this.props.children),
        typeaheadCurrIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var _this$props = _this.props,
          onFilter = _this$props.onFilter,
          isCreatable = _this$props.isCreatable,
          onCreateOption = _this$props.onCreateOption,
          createText = _this$props.createText,
          noResultsFoundText = _this$props.noResultsFoundText;
      var typeaheadFilteredChildren;

      if (onFilter) {
        typeaheadFilteredChildren = onFilter(e);
      } else {
        var input;

        try {
          input = new RegExp(e.target.value.toString(), 'i');
        } catch (err) {
          input = new RegExp(e.target.value.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        }

        typeaheadFilteredChildren = e.target.value.toString() !== '' ? React.Children.toArray(_this.props.children).filter(function (child) {
          return _this.getDisplay(child.props.value.toString(), 'text').search(input) === 0;
        }) : React.Children.toArray(_this.props.children);
      }

      if (typeaheadFilteredChildren.length === 0) {
        !isCreatable && typeaheadFilteredChildren.push(React.createElement(_SelectOption.SelectOption, {
          isDisabled: true,
          key: 0,
          value: noResultsFoundText
        }));
      }

      if (isCreatable && e.target.value != '') {
        var newValue = e.target.value;
        typeaheadFilteredChildren.push(React.createElement(_SelectOption.SelectOption, {
          key: 0,
          value: newValue,
          onClick: function onClick() {
            return onCreateOption && onCreateOption(newValue);
          }
        }, createText, " \"", newValue, "\""));
      }

      _this.setState({
        typeaheadInputValue: e.target.value,
        typeaheadCurrIndex: -1,
        typeaheadFilteredChildren: typeaheadFilteredChildren,
        typeaheadActiveChild: null,
        creatableValue: e.target.value
      });

      _this.refCollection = [];
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clearSelection", function (e) {
      e.stopPropagation();

      _this.setState({
        typeaheadInputValue: '',
        typeaheadActiveChild: null,
        typeaheadFilteredChildren: React.Children.toArray(_this.props.children),
        typeaheadCurrIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendRef", function (ref, index) {
      _this.refCollection[index] = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowKeys", function (index, position) {
      (0, _util.keyHandler)(index, position, _this.refCollection, _this.refCollection);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      if (!_this.props.isExpanded) {
        _this.props.onToggle(true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTypeaheadKeys", function (position) {
      var _this$props2 = _this.props,
          isExpanded = _this$props2.isExpanded,
          isCreatable = _this$props2.isCreatable,
          createText = _this$props2.createText;
      var _this$state = _this.state,
          typeaheadActiveChild = _this$state.typeaheadActiveChild,
          typeaheadCurrIndex = _this$state.typeaheadCurrIndex;

      if (isExpanded) {
        if (position === 'enter' && (typeaheadActiveChild || _this.refCollection[0])) {
          _this.setState({
            typeaheadInputValue: typeaheadActiveChild && typeaheadActiveChild.innerText || _this.refCollection[0].innerText
          });

          if (typeaheadActiveChild) {
            typeaheadActiveChild.click();
          } else {
            _this.refCollection[0].click();
          }
        } else {
          var nextIndex;

          if (typeaheadCurrIndex === -1 && position === 'down') {
            nextIndex = 0;
          } else if (typeaheadCurrIndex === -1 && position === 'up') {
            nextIndex = _this.refCollection.length - 1;
          } else {
            nextIndex = (0, _util.getNextIndex)(typeaheadCurrIndex, position, _this.refCollection);
          }

          _this.setState({
            typeaheadCurrIndex: nextIndex,
            typeaheadActiveChild: _this.refCollection[nextIndex],
            typeaheadInputValue: isCreatable && _this.refCollection[nextIndex].innerText.includes(createText) ? _this.state.creatableValue : _this.refCollection[nextIndex].innerText
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getDisplay", function (value) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'node';

      if (!value) {
        return;
      }

      var children = _this.props.children;
      var item = children.filter(function (child) {
        return child.props.value.toString() === value.toString();
      })[0];

      if (item) {
        if (item && item.props.children) {
          if (type === 'node') {
            return item.props.children;
          }

          return _this.findText(item);
        }

        return item.props.value.toString();
      }

      return value;
    });

    _defineProperty(_assertThisInitialized(_this), "findText", function (item) {
      if (!item.props || !item.props.children) {
        if (typeof item !== 'string') {
          return '';
        }

        return item;
      }

      if (typeof item.props.children === 'string') {
        return item.props.children;
      }

      var multi = [];
      React.Children.toArray(item.props.children).forEach(function (child) {
        return multi.push(_this.findText(child));
      });
      return multi.join('');
    });

    return _this;
  }

  _createClass(Select, [{
    key: "extendTypeaheadChildren",
    value: function extendTypeaheadChildren(typeaheadActiveChild) {
      var _this2 = this;

      return this.state.typeaheadFilteredChildren.map(function (child) {
        return React.cloneElement(child, {
          isFocused: typeaheadActiveChild && (typeaheadActiveChild.innerText === _this2.getDisplay(child.props.value.toString(), 'text') || _this2.props.isCreatable && typeaheadActiveChild.innerText === "{createText} \"".concat(child.props.value, "\""))
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          variant = _this$props3.variant,
          direction = _this$props3.direction,
          onToggle = _this$props3.onToggle,
          onSelect = _this$props3.onSelect,
          onClear = _this$props3.onClear,
          onFilter = _this$props3.onFilter,
          onCreateOption = _this$props3.onCreateOption,
          toggleId = _this$props3.toggleId,
          isExpanded = _this$props3.isExpanded,
          isGrouped = _this$props3.isGrouped,
          isPlain = _this$props3.isPlain,
          isDisabled = _this$props3.isDisabled,
          isCreatable = _this$props3.isCreatable,
          selections = _this$props3.selections,
          ariaLabelledBy = _this$props3.ariaLabelledBy,
          ariaLabelTypeAhead = _this$props3.ariaLabelTypeAhead,
          ariaLabelClear = _this$props3.ariaLabelClear,
          ariaLabelToggle = _this$props3.ariaLabelToggle,
          ariaLabelRemove = _this$props3.ariaLabelRemove,
          ariaLabel = _this$props3['aria-label'],
          placeholderText = _this$props3.placeholderText,
          width = _this$props3.width,
          maxHeight = _this$props3.maxHeight,
          toggleIcon = _this$props3.toggleIcon,
          props = _objectWithoutProperties(_this$props3, ["children", "className", "variant", "direction", "onToggle", "onSelect", "onClear", "onFilter", "onCreateOption", "toggleId", "isExpanded", "isGrouped", "isPlain", "isDisabled", "isCreatable", "selections", "ariaLabelledBy", "ariaLabelTypeAhead", "ariaLabelClear", "ariaLabelToggle", "ariaLabelRemove", "aria-label", "placeholderText", "width", "maxHeight", "toggleIcon"]);

      var _this$state2 = this.state,
          openedOnEnter = _this$state2.openedOnEnter,
          typeaheadInputValue = _this$state2.typeaheadInputValue,
          typeaheadActiveChild = _this$state2.typeaheadActiveChild;
      var selectToggleId = toggleId || "pf-toggle-id-".concat(currentId++);
      var childPlaceholderText = null;

      if (!selections && !placeholderText) {
        var childPlaceholder = React.Children.toArray(children.filter(function (child) {
          return child.props.isPlaceholder === true;
        }));
        childPlaceholderText = childPlaceholder[0] && this.getDisplay(childPlaceholder[0].props.value, 'node') || children[0] && this.getDisplay(children[0].props.value, 'node');
      }

      var selectedChips = null;

      if (variant === _selectConstants.SelectVariant.typeaheadMulti) {
        selectedChips = React.createElement(_ChipGroup.ChipGroup, null, selections && selections.map(function (item) {
          return React.createElement(_ChipGroup.Chip, {
            key: item,
            onClick: function onClick(e) {
              return onSelect(e, item);
            },
            closeBtnAriaLabel: ariaLabelRemove
          }, _this3.getDisplay(item, 'node'));
        }));
      }

      return React.createElement("div", {
        className: (0, _reactStyles.css)(_select["default"].select, isExpanded && _select["default"].modifiers.expanded, direction === _selectConstants.SelectDirection.up && _select["default"].modifiers.top, className),
        ref: this.parentRef,
        style: {
          width: width
        }
      }, React.createElement(_selectConstants.SelectContext.Provider, {
        value: {
          onSelect: onSelect,
          onClose: this.onClose,
          variant: variant
        }
      }, React.createElement(_SelectToggle.SelectToggle, {
        id: selectToggleId,
        parentRef: this.parentRef,
        isExpanded: isExpanded,
        isPlain: isPlain,
        onToggle: onToggle,
        onEnter: this.onEnter,
        onClose: this.onClose,
        ariaLabelledBy: "".concat(ariaLabelledBy || '', " ").concat(selectToggleId),
        variant: variant,
        ariaLabelToggle: ariaLabelToggle,
        handleTypeaheadKeys: this.handleTypeaheadKeys,
        isDisabled: isDisabled
      }, variant === _selectConstants.SelectVariant.single && React.createElement("div", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleIcon)
      }, toggleIcon), React.createElement("span", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleText)
      }, this.getDisplay(selections, 'node') || placeholderText || childPlaceholderText)), variant === _selectConstants.SelectVariant.checkbox && React.createElement(React.Fragment, null, React.createElement("div", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleIcon)
      }, toggleIcon), React.createElement("span", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleText)
      }, placeholderText), selections && Array.isArray(selections) && selections.length > 0 && React.createElement("div", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleBadge)
      }, React.createElement("span", {
        className: (0, _reactStyles.css)(_badge["default"].badge, _badge["default"].modifiers.read)
      }, selections.length)))), variant === _selectConstants.SelectVariant.typeahead && React.createElement(React.Fragment, null, React.createElement("div", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleIcon)
      }, toggleIcon), React.createElement("form", {
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        }
      }, React.createElement("input", {
        className: (0, _reactStyles.css)(_formControl["default"].formControl, _select["default"].selectToggleTypeahead),
        "aria-activedescendant": typeaheadActiveChild && typeaheadActiveChild.id,
        id: "select-typeahead",
        "aria-label": ariaLabelTypeAhead,
        placeholder: placeholderText,
        value: typeaheadInputValue !== null ? typeaheadInputValue : this.getDisplay(selections, 'text') || '',
        type: "text",
        onChange: this.onChange,
        onFocus: this.handleFocus,
        autoComplete: "off",
        disabled: isDisabled
      }))), selections && React.createElement("button", {
        className: (0, _reactStyles.css)(_button["default"].button, _button["default"].modifiers.plain, _select["default"].selectToggleClear),
        onClick: function onClick(e) {
          _this3.clearSelection(e);

          onClear(e);
        },
        "aria-label": ariaLabelClear,
        type: "button",
        disabled: isDisabled
      }, React.createElement(_reactIcons.TimesCircleIcon, {
        "aria-hidden": true
      }))), variant === _selectConstants.SelectVariant.typeaheadMulti && React.createElement(React.Fragment, null, React.createElement("div", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select["default"].selectToggleIcon)
      }, toggleIcon), selections && Array.isArray(selections) && selections.length > 0 && selectedChips, React.createElement("form", {
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        }
      }, React.createElement("input", {
        className: (0, _reactStyles.css)(_formControl["default"].formControl, _select["default"].selectToggleTypeahead),
        "aria-activedescendant": typeaheadActiveChild && typeaheadActiveChild.id,
        id: "select-multi-typeahead-typeahead",
        "aria-label": ariaLabelTypeAhead,
        placeholder: placeholderText,
        value: typeaheadInputValue !== null ? typeaheadInputValue : '',
        type: "text",
        onChange: this.onChange,
        onFocus: this.handleFocus,
        autoComplete: "off",
        disabled: isDisabled
      }))), selections && Array.isArray(selections) && selections.length > 0 && React.createElement("button", {
        className: (0, _reactStyles.css)(_button["default"].button, _button["default"].modifiers.plain, _select["default"].selectToggleClear),
        onClick: function onClick(e) {
          _this3.clearSelection(e);

          onClear(e);
        },
        "aria-label": ariaLabelClear,
        type: "button",
        disabled: isDisabled
      }, React.createElement(_reactIcons.TimesCircleIcon, {
        "aria-hidden": true
      })))), variant === _selectConstants.SelectVariant.single && isExpanded && React.createElement(_SelectMenu.SelectMenu, _extends({}, props, {
        selected: selections,
        openedOnEnter: openedOnEnter,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        sendRef: this.sendRef,
        keyHandler: this.handleArrowKeys,
        maxHeight: maxHeight
      }), children), variant === _selectConstants.SelectVariant.checkbox && isExpanded && React.createElement(_SelectMenu.SelectMenu, _extends({}, props, {
        checked: selections,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        isGrouped: isGrouped,
        sendRef: this.sendRef,
        keyHandler: this.handleArrowKeys,
        maxHeight: maxHeight
      }), children), (variant === _selectConstants.SelectVariant.typeahead || variant === _selectConstants.SelectVariant.typeaheadMulti) && isExpanded && React.createElement(_SelectMenu.SelectMenu, _extends({}, props, {
        selected: selections,
        openedOnEnter: openedOnEnter,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        sendRef: this.sendRef,
        keyHandler: this.handleArrowKeys,
        maxHeight: maxHeight
      }), this.extendTypeaheadChildren(typeaheadActiveChild))));
    }
  }]);

  return Select;
}(React.Component);

exports.Select = Select;

_defineProperty(Select, "propTypes", {
  children: _propTypes["default"].arrayOf(_propTypes["default"].element).isRequired,
  className: _propTypes["default"].string,
  direction: _propTypes["default"].oneOf(['up', 'down']),
  isExpanded: _propTypes["default"].bool,
  isGrouped: _propTypes["default"].bool,
  isPlain: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  isCreatable: _propTypes["default"].bool,
  createText: _propTypes["default"].string,
  placeholderText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  noResultsFoundText: _propTypes["default"].string,
  selections: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].any, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].any]))]),
  toggleId: _propTypes["default"].string,
  'aria-label': _propTypes["default"].string,
  ariaLabelledBy: _propTypes["default"].string,
  ariaLabelTypeAhead: _propTypes["default"].string,
  ariaLabelClear: _propTypes["default"].string,
  ariaLabelToggle: _propTypes["default"].string,
  ariaLabelRemove: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  onToggle: _propTypes["default"].func.isRequired,
  onClear: _propTypes["default"].func,
  onFilter: _propTypes["default"].func,
  onCreateOption: _propTypes["default"].func,
  variant: _propTypes["default"].oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti'])
});

_defineProperty(Select, "defaultProps", {
  "children": [],
  "className": '',
  "direction": _selectConstants.SelectDirection.down,
  "toggleId": null,
  "isExpanded": false,
  "isGrouped": false,
  "isPlain": false,
  "isDisabled": false,
  "isCreatable": false,
  "aria-label": '',
  "ariaLabelledBy": '',
  "ariaLabelTypeAhead": '',
  "ariaLabelClear": 'Clear all',
  "ariaLabelToggle": 'Options menu',
  "ariaLabelRemove": 'Remove',
  "selections": '',
  "createText": "Create",
  "placeholderText": '',
  "noResultsFoundText": "No results found",
  "variant": _selectConstants.SelectVariant.single,
  "width": '',
  "maxHeight": '',
  "onClear": Function.prototype,
  "onCreateOption": Function.prototype,
  "toggleIcon": null,
  "onFilter": undefined
});
//# sourceMappingURL=Select.js.map