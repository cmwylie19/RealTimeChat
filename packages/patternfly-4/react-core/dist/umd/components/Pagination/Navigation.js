(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/Pagination/pagination", "@patternfly/react-styles", "@patternfly/react-icons", "../Button", "../../helpers", "../../helpers/constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/Pagination/pagination"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("../Button"), require("../../helpers"), require("../../helpers/constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.pagination, global.reactStyles, global.reactIcons, global.Button, global.helpers, global.constants);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _pagination, _reactStyles, _reactIcons, _Button, _helpers, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Navigation = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _pagination2 = _interopRequireDefault(_pagination);

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

  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInputPage: this.props.page
      };
    }

    static parseInteger(input, lastPage) {
      let inputPage = Number.parseInt(input, 10);

      if (!Number.isNaN(inputPage)) {
        inputPage = inputPage > lastPage ? lastPage : inputPage;
        inputPage = inputPage < 1 ? 1 : inputPage;
      }

      return inputPage;
    }

    onChange(event, lastPage) {
      const inputPage = Navigation.parseInteger(event.target.value, lastPage);
      this.setState({
        userInputPage: Number.isNaN(inputPage) ? event.target.value : inputPage
      });
    }

    onKeyDown(event, page, lastPage, onPageInput, onSetPage) {
      if (event.keyCode === _constants.KEY_CODES.ENTER) {
        const inputPage = Navigation.parseInteger(this.state.userInputPage, lastPage);
        onPageInput(event, Number.isNaN(inputPage) ? page : inputPage);
        onSetPage(event, Number.isNaN(inputPage) ? page : inputPage);
      }
    }

    componentDidUpdate(lastState) {
      if (this.props.page !== lastState.page && this.props.page <= this.props.lastPage && this.state.userInputPage !== this.props.page) {
        this.setState({
          userInputPage: this.props.page
        });
      }
    }

    render() {
      const _this$props = this.props,
            {
        page,
        isDisabled,
        lastPage,
        firstPage,
        pagesTitle,
        toLastPage,
        toNextPage,
        toFirstPage,
        toPreviousPage,
        currPage,
        paginationTitle,
        onSetPage,
        onNextClick,
        onPreviousClick,
        onFirstClick,
        onLastClick,
        onPageInput,
        className,
        isCompact
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["page", "isDisabled", "lastPage", "firstPage", "pagesTitle", "toLastPage", "toNextPage", "toFirstPage", "toPreviousPage", "currPage", "paginationTitle", "onSetPage", "onNextClick", "onPreviousClick", "onFirstClick", "onLastClick", "onPageInput", "className", "isCompact"]);

      const {
        userInputPage
      } = this.state;
      return React.createElement("nav", _extends({
        className: (0, _reactStyles.css)(_pagination2.default.paginationNav, className),
        "aria-label": paginationTitle
      }, props), !isCompact && React.createElement(_Button.Button, {
        variant: _Button.ButtonVariant.plain,
        isDisabled: isDisabled || page === firstPage,
        "aria-label": toFirstPage,
        "data-action": "first",
        onClick: event => {
          onFirstClick(event, 1);
          onSetPage(event, 1);
          this.setState({
            userInputPage: 1
          });
        }
      }, React.createElement(_reactIcons.AngleDoubleLeftIcon, null)), React.createElement(_Button.Button, {
        variant: _Button.ButtonVariant.plain,
        isDisabled: isDisabled || page === firstPage,
        "data-action": "previous",
        onClick: event => {
          const newPage = page - 1 >= 1 ? page - 1 : 1;
          onPreviousClick(event, newPage);
          onSetPage(event, newPage);
          this.setState({
            userInputPage: newPage
          });
        },
        "aria-label": toPreviousPage
      }, React.createElement(_reactIcons.AngleLeftIcon, null)), !isCompact && React.createElement("div", {
        className: (0, _reactStyles.css)(_pagination2.default.paginationNavPageSelect)
      }, React.createElement("input", {
        className: (0, _reactStyles.css)(_pagination2.default.formControl),
        "aria-label": currPage,
        type: "number",
        disabled: isDisabled || page === firstPage && page === lastPage,
        min: lastPage <= 0 && firstPage <= 0 ? 0 : 1,
        max: lastPage,
        value: userInputPage,
        onKeyDown: event => this.onKeyDown(event, page, lastPage, onPageInput, onSetPage),
        onChange: event => this.onChange(event, lastPage)
      }), React.createElement("span", {
        "aria-hidden": "true"
      }, "of ", pagesTitle ? (0, _helpers.pluralize)(lastPage, pagesTitle) : lastPage)), React.createElement(_Button.Button, {
        variant: _Button.ButtonVariant.plain,
        isDisabled: isDisabled || page === lastPage,
        "aria-label": toNextPage,
        "data-action": "next",
        onClick: event => {
          const newPage = page + 1 <= lastPage ? page + 1 : lastPage;
          onNextClick(event, newPage);
          onSetPage(event, newPage);
          this.setState({
            userInputPage: newPage
          });
        }
      }, React.createElement(_reactIcons.AngleRightIcon, null)), !isCompact && React.createElement(_Button.Button, {
        variant: _Button.ButtonVariant.plain,
        isDisabled: isDisabled || page === lastPage,
        "aria-label": toLastPage,
        "data-action": "last",
        onClick: event => {
          onLastClick(event, lastPage);
          onSetPage(event, lastPage);
          this.setState({
            userInputPage: lastPage
          });
        }
      }, React.createElement(_reactIcons.AngleDoubleRightIcon, null)));
    }

  }

  exports.Navigation = Navigation;

  _defineProperty(Navigation, "propTypes", {
    className: _propTypes2.default.string,
    isDisabled: _propTypes2.default.bool,
    isCompact: _propTypes2.default.bool,
    lastPage: _propTypes2.default.number,
    firstPage: _propTypes2.default.number,
    pagesTitle: _propTypes2.default.string,
    toLastPage: _propTypes2.default.string,
    toPreviousPage: _propTypes2.default.string,
    toNextPage: _propTypes2.default.string,
    toFirstPage: _propTypes2.default.string,
    currPage: _propTypes2.default.string,
    paginationTitle: _propTypes2.default.string,
    page: _propTypes2.default.node.isRequired,
    onSetPage: _propTypes2.default.func.isRequired,
    onNextClick: _propTypes2.default.func,
    onPreviousClick: _propTypes2.default.func,
    onFirstClick: _propTypes2.default.func,
    onLastClick: _propTypes2.default.func,
    onPageInput: _propTypes2.default.func
  });

  _defineProperty(Navigation, "defaultProps", {
    className: '',
    isDisabled: false,
    isCompact: false,
    lastPage: 0,
    firstPage: 0,
    pagesTitle: '',
    toLastPage: 'Go to last page',
    toNextPage: 'Go to next page',
    toFirstPage: 'Go to first page',
    toPreviousPage: 'Go to previous page',
    currPage: 'Current page',
    paginationTitle: 'Pagination',
    onNextClick: () => undefined,
    onPreviousClick: () => undefined,
    onFirstClick: () => undefined,
    onLastClick: () => undefined,
    onPageInput: () => undefined
  });
});
//# sourceMappingURL=Navigation.js.map