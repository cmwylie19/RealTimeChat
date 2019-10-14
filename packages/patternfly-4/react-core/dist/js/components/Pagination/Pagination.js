"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = exports.PaginationVariant = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Dropdown = require("../Dropdown");

var _ToggleTemplate = require("./ToggleTemplate");

var _pagination = _interopRequireDefault(require("@patternfly/react-styles/css/components/Pagination/pagination"));

var _reactStyles = require("@patternfly/react-styles");

var _Navigation = require("./Navigation");

var _PaginationOptionsMenu = require("./PaginationOptionsMenu");

var _withOuia = require("../withOuia");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PaginationVariant;
exports.PaginationVariant = PaginationVariant;

(function (PaginationVariant) {
  PaginationVariant["top"] = "top";
  PaginationVariant["bottom"] = "bottom";
  PaginationVariant["left"] = "left";
  PaginationVariant["right"] = "right";
})(PaginationVariant || (exports.PaginationVariant = PaginationVariant = {}));

var defaultPerPageOptions = [{
  title: '10',
  value: 10
}, {
  title: '20',
  value: 20
}, {
  title: '50',
  value: 50
}, {
  title: '100',
  value: 100
}];

var Pagination = function Pagination(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? PaginationVariant.top : _ref$variant,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isCompact = _ref.isCompact,
      isCompact = _ref$isCompact === void 0 ? false : _ref$isCompact,
      _ref$perPage = _ref.perPage,
      perPage = _ref$perPage === void 0 ? defaultPerPageOptions[0].value : _ref$perPage,
      _ref$titles = _ref.titles,
      titles = _ref$titles === void 0 ? {
    items: '',
    page: '',
    itemsPerPage: 'Items per page',
    perPageSuffix: 'per page',
    toFirstPage: 'Go to first page',
    toPreviousPage: 'Go to previous page',
    toLastPage: 'Go to last page',
    toNextPage: 'Go to next page',
    optionsToggle: 'Items per page',
    currPage: 'Current page',
    paginationTitle: 'Pagination'
  } : _ref$titles,
      _ref$firstPage = _ref.firstPage,
      firstPage = _ref$firstPage === void 0 ? 1 : _ref$firstPage,
      _ref$page = _ref.page,
      page = _ref$page === void 0 ? 1 : _ref$page,
      itemCount = _ref.itemCount,
      _ref$itemsStart = _ref.itemsStart,
      itemsStart = _ref$itemsStart === void 0 ? null : _ref$itemsStart,
      _ref$itemsEnd = _ref.itemsEnd,
      itemsEnd = _ref$itemsEnd === void 0 ? null : _ref$itemsEnd,
      _ref$perPageOptions = _ref.perPageOptions,
      perPageOptions = _ref$perPageOptions === void 0 ? defaultPerPageOptions : _ref$perPageOptions,
      _ref$dropDirection = _ref.dropDirection,
      dropDirection = _ref$dropDirection === void 0 ? _Dropdown.DropdownDirection.down : _ref$dropDirection,
      _ref$widgetId = _ref.widgetId,
      widgetId = _ref$widgetId === void 0 ? 'pagination-options-menu' : _ref$widgetId,
      _ref$toggleTemplate = _ref.toggleTemplate,
      toggleTemplate = _ref$toggleTemplate === void 0 ? _ToggleTemplate.ToggleTemplate : _ref$toggleTemplate,
      _ref$onSetPage = _ref.onSetPage,
      onSetPage = _ref$onSetPage === void 0 ? function () {
    return undefined;
  } : _ref$onSetPage,
      _ref$onPerPageSelect = _ref.onPerPageSelect,
      onPerPageSelect = _ref$onPerPageSelect === void 0 ? function () {
    return undefined;
  } : _ref$onPerPageSelect,
      _ref$onFirstClick = _ref.onFirstClick,
      onFirstClick = _ref$onFirstClick === void 0 ? function () {
    return undefined;
  } : _ref$onFirstClick,
      _ref$onPreviousClick = _ref.onPreviousClick,
      onPreviousClick = _ref$onPreviousClick === void 0 ? function () {
    return undefined;
  } : _ref$onPreviousClick,
      _ref$onNextClick = _ref.onNextClick,
      onNextClick = _ref$onNextClick === void 0 ? function () {
    return undefined;
  } : _ref$onNextClick,
      _ref$onPageInput = _ref.onPageInput,
      onPageInput = _ref$onPageInput === void 0 ? function () {
    return undefined;
  } : _ref$onPageInput,
      _ref$onLastClick = _ref.onLastClick,
      onLastClick = _ref$onLastClick === void 0 ? function () {
    return undefined;
  } : _ref$onLastClick,
      _ref$ouiaContext = _ref.ouiaContext,
      ouiaContext = _ref$ouiaContext === void 0 ? null : _ref$ouiaContext,
      _ref$ouiaId = _ref.ouiaId,
      ouiaId = _ref$ouiaId === void 0 ? null : _ref$ouiaId,
      props = _objectWithoutProperties(_ref, ["children", "className", "variant", "isDisabled", "isCompact", "perPage", "titles", "firstPage", "page", "itemCount", "itemsStart", "itemsEnd", "perPageOptions", "dropDirection", "widgetId", "toggleTemplate", "onSetPage", "onPerPageSelect", "onFirstClick", "onPreviousClick", "onNextClick", "onPageInput", "onLastClick", "ouiaContext", "ouiaId"]);

  var lastPage = Math.ceil(itemCount / perPage);

  if (page < firstPage) {
    page = firstPage;
  } else if (page > lastPage) {
    page = lastPage;
  }

  var firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;
  var lastIndex;

  if (itemCount <= 0) {
    lastIndex = 0;
  } else {
    lastIndex = page === lastPage ? itemCount : page * perPage;
  }

  return React.createElement("div", _extends({
    className: (0, _reactStyles.css)(_pagination["default"].pagination, variant === PaginationVariant.bottom && _pagination["default"].modifiers.footer, isCompact && _pagination["default"].modifiers.compact, className),
    id: widgetId
  }, ouiaContext.isOuia && {
    'data-ouia-component-type': 'Pagination',
    'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
  }, props), variant === PaginationVariant.top && React.createElement("div", {
    className: (0, _reactStyles.css)(_pagination["default"].paginationTotalItems)
  }, React.createElement(_ToggleTemplate.ToggleTemplate, {
    firstIndex: firstIndex,
    lastIndex: lastIndex,
    itemCount: itemCount,
    itemsTitle: titles.items
  })), React.createElement(_PaginationOptionsMenu.PaginationOptionsMenu, {
    itemsPerPageTitle: titles.itemsPerPage,
    perPageSuffix: titles.perPageSuffix,
    itemsTitle: isCompact ? '' : titles.items,
    optionsToggle: titles.optionsToggle,
    perPageOptions: perPageOptions,
    firstIndex: itemsStart !== null ? itemsStart : firstIndex,
    lastIndex: itemsEnd !== null ? itemsEnd : lastIndex,
    itemCount: itemCount,
    perPage: perPage,
    onPerPageSelect: onPerPageSelect,
    dropDirection: dropDirection,
    widgetId: widgetId,
    toggleTemplate: toggleTemplate,
    isDisabled: isDisabled
  }), React.createElement(_Navigation.Navigation, {
    pagesTitle: titles.page,
    toLastPage: titles.toLastPage,
    toPreviousPage: titles.toPreviousPage,
    toNextPage: titles.toNextPage,
    toFirstPage: titles.toFirstPage,
    currPage: titles.currPage,
    paginationTitle: titles.paginationTitle,
    page: itemCount <= 0 ? 0 : page,
    firstPage: itemsStart !== null ? itemsStart : firstIndex,
    lastPage: lastPage,
    onSetPage: onSetPage,
    onFirstClick: onFirstClick,
    onPreviousClick: onPreviousClick,
    onNextClick: onNextClick,
    onLastClick: onLastClick,
    onPageInput: onPageInput,
    isDisabled: isDisabled,
    isCompact: isCompact
  }), children);
};

Pagination.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  itemCount: _propTypes["default"].number.isRequired,
  variant: _propTypes["default"].oneOf(['top', 'bottom', 'left', 'right']),
  isDisabled: _propTypes["default"].bool,
  isCompact: _propTypes["default"].bool,
  perPage: _propTypes["default"].number,
  perPageOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    value: _propTypes["default"].number
  })),
  firstPage: _propTypes["default"].number,
  page: _propTypes["default"].number,
  itemsStart: _propTypes["default"].number,
  itemsEnd: _propTypes["default"].number,
  widgetId: _propTypes["default"].string,
  dropDirection: _propTypes["default"].oneOf(['up', 'down']),
  titles: _propTypes["default"].shape({
    page: _propTypes["default"].string,
    items: _propTypes["default"].string,
    itemsPerPage: _propTypes["default"].string,
    perPageSuffix: _propTypes["default"].string,
    toFirstPage: _propTypes["default"].string,
    toPreviousPage: _propTypes["default"].string,
    toLastPage: _propTypes["default"].string,
    toNextPage: _propTypes["default"].string,
    optionsToggle: _propTypes["default"].string,
    currPage: _propTypes["default"].string,
    paginationTitle: _propTypes["default"].string
  }),
  toggleTemplate: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  onSetPage: _propTypes["default"].func,
  onFirstClick: _propTypes["default"].func,
  onPreviousClick: _propTypes["default"].func,
  onNextClick: _propTypes["default"].func,
  onLastClick: _propTypes["default"].func,
  onPageInput: _propTypes["default"].func,
  onPerPageSelect: _propTypes["default"].func
};
var PaginationWithOuiaContext = (0, _withOuia.withOuiaContext)(Pagination);
exports.Pagination = PaginationWithOuiaContext;
//# sourceMappingURL=Pagination.js.map