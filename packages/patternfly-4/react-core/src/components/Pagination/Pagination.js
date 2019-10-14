"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var Dropdown_1 = require("../Dropdown");
var ToggleTemplate_1 = require("./ToggleTemplate");
var pagination_1 = require("@patternfly/react-styles/css/components/Pagination/pagination");
var react_styles_1 = require("@patternfly/react-styles");
var Navigation_1 = require("./Navigation");
var PaginationOptionsMenu_1 = require("./PaginationOptionsMenu");
var withOuia_1 = require("../withOuia");
var PaginationVariant;
(function (PaginationVariant) {
    PaginationVariant["top"] = "top";
    PaginationVariant["bottom"] = "bottom";
    PaginationVariant["left"] = "left";
    PaginationVariant["right"] = "right";
})(PaginationVariant = exports.PaginationVariant || (exports.PaginationVariant = {}));
var defaultPerPageOptions = [
    {
        title: '10',
        value: 10
    },
    {
        title: '20',
        value: 20
    },
    {
        title: '50',
        value: 50
    },
    {
        title: '100',
        value: 100
    }
];
var Pagination = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.variant, variant = _d === void 0 ? PaginationVariant.top : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.isCompact, isCompact = _f === void 0 ? false : _f, _g = _a.perPage, perPage = _g === void 0 ? defaultPerPageOptions[0].value : _g, _h = _a.titles, titles = _h === void 0 ? {
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
    } : _h, _j = _a.firstPage, firstPage = _j === void 0 ? 1 : _j, _k = _a.page, page = _k === void 0 ? 1 : _k, itemCount = _a.itemCount, _l = _a.itemsStart, itemsStart = _l === void 0 ? null : _l, _m = _a.itemsEnd, itemsEnd = _m === void 0 ? null : _m, _o = _a.perPageOptions, perPageOptions = _o === void 0 ? defaultPerPageOptions : _o, _p = _a.dropDirection, dropDirection = _p === void 0 ? Dropdown_1.DropdownDirection.down : _p, _q = _a.widgetId, widgetId = _q === void 0 ? 'pagination-options-menu' : _q, _r = _a.toggleTemplate, toggleTemplate = _r === void 0 ? ToggleTemplate_1.ToggleTemplate : _r, _s = _a.onSetPage, onSetPage = _s === void 0 ? function () { return undefined; } : _s, _t = _a.onPerPageSelect, onPerPageSelect = _t === void 0 ? function () { return undefined; } : _t, _u = _a.onFirstClick, onFirstClick = _u === void 0 ? function () { return undefined; } : _u, _v = _a.onPreviousClick, onPreviousClick = _v === void 0 ? function () { return undefined; } : _v, _w = _a.onNextClick, onNextClick = _w === void 0 ? function () { return undefined; } : _w, _x = _a.onPageInput, onPageInput = _x === void 0 ? function () { return undefined; } : _x, _y = _a.onLastClick, onLastClick = _y === void 0 ? function () { return undefined; } : _y, _z = _a.ouiaContext, ouiaContext = _z === void 0 ? null : _z, _0 = _a.ouiaId, ouiaId = _0 === void 0 ? null : _0, props = __rest(_a, ["children", "className", "variant", "isDisabled", "isCompact", "perPage", "titles", "firstPage", "page", "itemCount", "itemsStart", "itemsEnd", "perPageOptions", "dropDirection", "widgetId", "toggleTemplate", "onSetPage", "onPerPageSelect", "onFirstClick", "onPreviousClick", "onNextClick", "onPageInput", "onLastClick", "ouiaContext", "ouiaId"]);
    var lastPage = Math.ceil(itemCount / perPage);
    if (page < firstPage) {
        page = firstPage;
    }
    else if (page > lastPage) {
        page = lastPage;
    }
    var firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;
    var lastIndex;
    if (itemCount <= 0) {
        lastIndex = 0;
    }
    else {
        lastIndex = page === lastPage ? itemCount : page * perPage;
    }
    return (<div className={react_styles_1.css(pagination_1["default"].pagination, variant === PaginationVariant.bottom && pagination_1["default"].modifiers.footer, isCompact && pagination_1["default"].modifiers.compact, className)} id={widgetId} {...ouiaContext.isOuia && {
        'data-ouia-component-type': 'Pagination',
        'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
    }} {...props}>
      {variant === PaginationVariant.top && (<div className={react_styles_1.css(pagination_1["default"].paginationTotalItems)}>
          <ToggleTemplate_1.ToggleTemplate firstIndex={firstIndex} lastIndex={lastIndex} itemCount={itemCount} itemsTitle={titles.items}/>
        </div>)}
      <PaginationOptionsMenu_1.PaginationOptionsMenu itemsPerPageTitle={titles.itemsPerPage} perPageSuffix={titles.perPageSuffix} itemsTitle={isCompact ? '' : titles.items} optionsToggle={titles.optionsToggle} perPageOptions={perPageOptions} firstIndex={itemsStart !== null ? itemsStart : firstIndex} lastIndex={itemsEnd !== null ? itemsEnd : lastIndex} itemCount={itemCount} perPage={perPage} onPerPageSelect={onPerPageSelect} dropDirection={dropDirection} widgetId={widgetId} toggleTemplate={toggleTemplate} isDisabled={isDisabled}/>
      <Navigation_1.Navigation pagesTitle={titles.page} toLastPage={titles.toLastPage} toPreviousPage={titles.toPreviousPage} toNextPage={titles.toNextPage} toFirstPage={titles.toFirstPage} currPage={titles.currPage} paginationTitle={titles.paginationTitle} page={itemCount <= 0 ? 0 : page} firstPage={itemsStart !== null ? itemsStart : firstIndex} lastPage={lastPage} onSetPage={onSetPage} onFirstClick={onFirstClick} onPreviousClick={onPreviousClick} onNextClick={onNextClick} onLastClick={onLastClick} onPageInput={onPageInput} isDisabled={isDisabled} isCompact={isCompact}/>
      {children}
    </div>);
};
var PaginationWithOuiaContext = withOuia_1.withOuiaContext(Pagination);
exports.Pagination = PaginationWithOuiaContext;
