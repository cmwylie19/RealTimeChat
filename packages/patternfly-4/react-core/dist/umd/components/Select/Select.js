(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/Select/select", "@patternfly/react-styles/css/components/Badge/badge", "@patternfly/react-styles/css/components/FormControl/form-control", "@patternfly/react-styles/css/components/Button/button", "@patternfly/react-styles", "@patternfly/react-icons", "./SelectMenu", "./SelectOption", "./SelectToggle", "./selectConstants", "../ChipGroup", "../../helpers/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/Select/select"), require("@patternfly/react-styles/css/components/Badge/badge"), require("@patternfly/react-styles/css/components/FormControl/form-control"), require("@patternfly/react-styles/css/components/Button/button"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("./SelectMenu"), require("./SelectOption"), require("./SelectToggle"), require("./selectConstants"), require("../ChipGroup"), require("../../helpers/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.select, global.badge, global.formControl, global.button, global.reactStyles, global.reactIcons, global.SelectMenu, global.SelectOption, global.SelectToggle, global.selectConstants, global.ChipGroup, global.util);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _select, _badge, _formControl, _button, _reactStyles, _reactIcons, _SelectMenu, _SelectOption, _SelectToggle, _selectConstants, _ChipGroup, _util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Select = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _select2 = _interopRequireDefault(_select);

  var _badge2 = _interopRequireDefault(_badge);

  var _formControl2 = _interopRequireDefault(_formControl);

  var _button2 = _interopRequireDefault(_button);

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

  // seed for the aria-labelledby ID
  let currentId = 0;

  class Select extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "parentRef", React.createRef());

      _defineProperty(this, "refCollection", []);

      _defineProperty(this, "state", {
        openedOnEnter: false,
        typeaheadInputValue: '',
        typeaheadActiveChild: null,
        typeaheadFilteredChildren: React.Children.toArray(this.props.children),
        typeaheadCurrIndex: -1,
        creatableValue: ''
      });

      _defineProperty(this, "componentDidUpdate", (prevProps, prevState) => {
        if (!prevState.openedOnEnter && this.state.openedOnEnter) {
          this.refCollection[0].focus();
        }

        if (prevProps.children !== this.props.children) {
          this.setState({
            typeaheadFilteredChildren: React.Children.toArray(this.props.children)
          });
        }

        if (prevProps.selections !== this.props.selections && this.state.typeaheadActiveChild) {
          this.setState({
            typeaheadInputValue: this.state.typeaheadActiveChild.innerText
          });
        }
      });

      _defineProperty(this, "onEnter", () => {
        this.setState({
          openedOnEnter: true
        });
      });

      _defineProperty(this, "onClose", () => {
        this.setState({
          openedOnEnter: false,
          typeaheadInputValue: null,
          typeaheadActiveChild: null,
          typeaheadFilteredChildren: React.Children.toArray(this.props.children),
          typeaheadCurrIndex: -1
        });
      });

      _defineProperty(this, "onChange", e => {
        const {
          onFilter,
          isCreatable,
          onCreateOption,
          createText,
          noResultsFoundText
        } = this.props;
        let typeaheadFilteredChildren;

        if (onFilter) {
          typeaheadFilteredChildren = onFilter(e);
        } else {
          let input;

          try {
            input = new RegExp(e.target.value.toString(), 'i');
          } catch (err) {
            input = new RegExp(e.target.value.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
          }

          typeaheadFilteredChildren = e.target.value.toString() !== '' ? React.Children.toArray(this.props.children).filter(child => this.getDisplay(child.props.value.toString(), 'text').search(input) === 0) : React.Children.toArray(this.props.children);
        }

        if (typeaheadFilteredChildren.length === 0) {
          !isCreatable && typeaheadFilteredChildren.push(React.createElement(_SelectOption.SelectOption, {
            isDisabled: true,
            key: 0,
            value: noResultsFoundText
          }));
        }

        if (isCreatable && e.target.value != '') {
          const newValue = e.target.value;
          typeaheadFilteredChildren.push(React.createElement(_SelectOption.SelectOption, {
            key: 0,
            value: newValue,
            onClick: () => onCreateOption && onCreateOption(newValue)
          }, createText, " \"", newValue, "\""));
        }

        this.setState({
          typeaheadInputValue: e.target.value,
          typeaheadCurrIndex: -1,
          typeaheadFilteredChildren,
          typeaheadActiveChild: null,
          creatableValue: e.target.value
        });
        this.refCollection = [];
      });

      _defineProperty(this, "onClick", e => {
        e.stopPropagation();
      });

      _defineProperty(this, "clearSelection", e => {
        e.stopPropagation();
        this.setState({
          typeaheadInputValue: '',
          typeaheadActiveChild: null,
          typeaheadFilteredChildren: React.Children.toArray(this.props.children),
          typeaheadCurrIndex: -1
        });
      });

      _defineProperty(this, "sendRef", (ref, index) => {
        this.refCollection[index] = ref;
      });

      _defineProperty(this, "handleArrowKeys", (index, position) => {
        (0, _util.keyHandler)(index, position, this.refCollection, this.refCollection);
      });

      _defineProperty(this, "handleFocus", () => {
        if (!this.props.isExpanded) {
          this.props.onToggle(true);
        }
      });

      _defineProperty(this, "handleTypeaheadKeys", position => {
        const {
          isExpanded,
          isCreatable,
          createText
        } = this.props;
        const {
          typeaheadActiveChild,
          typeaheadCurrIndex
        } = this.state;

        if (isExpanded) {
          if (position === 'enter' && (typeaheadActiveChild || this.refCollection[0])) {
            this.setState({
              typeaheadInputValue: typeaheadActiveChild && typeaheadActiveChild.innerText || this.refCollection[0].innerText
            });

            if (typeaheadActiveChild) {
              typeaheadActiveChild.click();
            } else {
              this.refCollection[0].click();
            }
          } else {
            let nextIndex;

            if (typeaheadCurrIndex === -1 && position === 'down') {
              nextIndex = 0;
            } else if (typeaheadCurrIndex === -1 && position === 'up') {
              nextIndex = this.refCollection.length - 1;
            } else {
              nextIndex = (0, _util.getNextIndex)(typeaheadCurrIndex, position, this.refCollection);
            }

            this.setState({
              typeaheadCurrIndex: nextIndex,
              typeaheadActiveChild: this.refCollection[nextIndex],
              typeaheadInputValue: isCreatable && this.refCollection[nextIndex].innerText.includes(createText) ? this.state.creatableValue : this.refCollection[nextIndex].innerText
            });
          }
        }
      });

      _defineProperty(this, "getDisplay", (value, type = 'node') => {
        if (!value) {
          return;
        }

        const {
          children
        } = this.props;
        const item = children.filter(child => child.props.value.toString() === value.toString())[0];

        if (item) {
          if (item && item.props.children) {
            if (type === 'node') {
              return item.props.children;
            }

            return this.findText(item);
          }

          return item.props.value.toString();
        }

        return value;
      });

      _defineProperty(this, "findText", item => {
        if (!item.props || !item.props.children) {
          if (typeof item !== 'string') {
            return '';
          }

          return item;
        }

        if (typeof item.props.children === 'string') {
          return item.props.children;
        }

        const multi = [];
        React.Children.toArray(item.props.children).forEach(child => multi.push(this.findText(child)));
        return multi.join('');
      });
    }

    extendTypeaheadChildren(typeaheadActiveChild) {
      return this.state.typeaheadFilteredChildren.map(child => React.cloneElement(child, {
        isFocused: typeaheadActiveChild && (typeaheadActiveChild.innerText === this.getDisplay(child.props.value.toString(), 'text') || this.props.isCreatable && typeaheadActiveChild.innerText === `{createText} "${child.props.value}"`)
      }));
    }

    render() {
      const _this$props = this.props,
            {
        children,
        className,
        variant,
        direction,
        onToggle,
        onSelect,
        onClear,
        onFilter,
        onCreateOption,
        toggleId,
        isExpanded,
        isGrouped,
        isPlain,
        isDisabled,
        isCreatable,
        selections,
        ariaLabelledBy,
        ariaLabelTypeAhead,
        ariaLabelClear,
        ariaLabelToggle,
        ariaLabelRemove,
        'aria-label': ariaLabel,
        placeholderText,
        width,
        maxHeight,
        toggleIcon
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["children", "className", "variant", "direction", "onToggle", "onSelect", "onClear", "onFilter", "onCreateOption", "toggleId", "isExpanded", "isGrouped", "isPlain", "isDisabled", "isCreatable", "selections", "ariaLabelledBy", "ariaLabelTypeAhead", "ariaLabelClear", "ariaLabelToggle", "ariaLabelRemove", "aria-label", "placeholderText", "width", "maxHeight", "toggleIcon"]);

      const {
        openedOnEnter,
        typeaheadInputValue,
        typeaheadActiveChild
      } = this.state;
      const selectToggleId = toggleId || `pf-toggle-id-${currentId++}`;
      let childPlaceholderText = null;

      if (!selections && !placeholderText) {
        const childPlaceholder = React.Children.toArray(children.filter(child => child.props.isPlaceholder === true));
        childPlaceholderText = childPlaceholder[0] && this.getDisplay(childPlaceholder[0].props.value, 'node') || children[0] && this.getDisplay(children[0].props.value, 'node');
      }

      let selectedChips = null;

      if (variant === _selectConstants.SelectVariant.typeaheadMulti) {
        selectedChips = React.createElement(_ChipGroup.ChipGroup, null, selections && selections.map(item => React.createElement(_ChipGroup.Chip, {
          key: item,
          onClick: e => onSelect(e, item),
          closeBtnAriaLabel: ariaLabelRemove
        }, this.getDisplay(item, 'node'))));
      }

      return React.createElement("div", {
        className: (0, _reactStyles.css)(_select2.default.select, isExpanded && _select2.default.modifiers.expanded, direction === _selectConstants.SelectDirection.up && _select2.default.modifiers.top, className),
        ref: this.parentRef,
        style: {
          width
        }
      }, React.createElement(_selectConstants.SelectContext.Provider, {
        value: {
          onSelect,
          onClose: this.onClose,
          variant
        }
      }, React.createElement(_SelectToggle.SelectToggle, {
        id: selectToggleId,
        parentRef: this.parentRef,
        isExpanded: isExpanded,
        isPlain: isPlain,
        onToggle: onToggle,
        onEnter: this.onEnter,
        onClose: this.onClose,
        ariaLabelledBy: `${ariaLabelledBy || ''} ${selectToggleId}`,
        variant: variant,
        ariaLabelToggle: ariaLabelToggle,
        handleTypeaheadKeys: this.handleTypeaheadKeys,
        isDisabled: isDisabled
      }, variant === _selectConstants.SelectVariant.single && React.createElement("div", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleIcon)
      }, toggleIcon), React.createElement("span", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleText)
      }, this.getDisplay(selections, 'node') || placeholderText || childPlaceholderText)), variant === _selectConstants.SelectVariant.checkbox && React.createElement(React.Fragment, null, React.createElement("div", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleIcon)
      }, toggleIcon), React.createElement("span", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleText)
      }, placeholderText), selections && Array.isArray(selections) && selections.length > 0 && React.createElement("div", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleBadge)
      }, React.createElement("span", {
        className: (0, _reactStyles.css)(_badge2.default.badge, _badge2.default.modifiers.read)
      }, selections.length)))), variant === _selectConstants.SelectVariant.typeahead && React.createElement(React.Fragment, null, React.createElement("div", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleIcon)
      }, toggleIcon), React.createElement("form", {
        onSubmit: e => e.preventDefault()
      }, React.createElement("input", {
        className: (0, _reactStyles.css)(_formControl2.default.formControl, _select2.default.selectToggleTypeahead),
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
        className: (0, _reactStyles.css)(_button2.default.button, _button2.default.modifiers.plain, _select2.default.selectToggleClear),
        onClick: e => {
          this.clearSelection(e);
          onClear(e);
        },
        "aria-label": ariaLabelClear,
        type: "button",
        disabled: isDisabled
      }, React.createElement(_reactIcons.TimesCircleIcon, {
        "aria-hidden": true
      }))), variant === _selectConstants.SelectVariant.typeaheadMulti && React.createElement(React.Fragment, null, React.createElement("div", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleWrapper)
      }, toggleIcon && React.createElement("span", {
        className: (0, _reactStyles.css)(_select2.default.selectToggleIcon)
      }, toggleIcon), selections && Array.isArray(selections) && selections.length > 0 && selectedChips, React.createElement("form", {
        onSubmit: e => e.preventDefault()
      }, React.createElement("input", {
        className: (0, _reactStyles.css)(_formControl2.default.formControl, _select2.default.selectToggleTypeahead),
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
        className: (0, _reactStyles.css)(_button2.default.button, _button2.default.modifiers.plain, _select2.default.selectToggleClear),
        onClick: e => {
          this.clearSelection(e);
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

  }

  exports.Select = Select;

  _defineProperty(Select, "propTypes", {
    children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
    className: _propTypes2.default.string,
    direction: _propTypes2.default.oneOf(['up', 'down']),
    isExpanded: _propTypes2.default.bool,
    isGrouped: _propTypes2.default.bool,
    isPlain: _propTypes2.default.bool,
    isDisabled: _propTypes2.default.bool,
    isCreatable: _propTypes2.default.bool,
    createText: _propTypes2.default.string,
    placeholderText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    noResultsFoundText: _propTypes2.default.string,
    selections: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.any, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.any]))]),
    toggleId: _propTypes2.default.string,
    'aria-label': _propTypes2.default.string,
    ariaLabelledBy: _propTypes2.default.string,
    ariaLabelTypeAhead: _propTypes2.default.string,
    ariaLabelClear: _propTypes2.default.string,
    ariaLabelToggle: _propTypes2.default.string,
    ariaLabelRemove: _propTypes2.default.string,
    onSelect: _propTypes2.default.func,
    onToggle: _propTypes2.default.func.isRequired,
    onClear: _propTypes2.default.func,
    onFilter: _propTypes2.default.func,
    onCreateOption: _propTypes2.default.func,
    variant: _propTypes2.default.oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti'])
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
});
//# sourceMappingURL=Select.js.map