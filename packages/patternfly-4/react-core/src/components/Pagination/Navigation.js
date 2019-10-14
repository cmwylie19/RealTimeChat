"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var pagination_1 = require("@patternfly/react-styles/css/components/Pagination/pagination");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var Button_1 = require("../Button");
var helpers_1 = require("../../helpers");
var constants_1 = require("../../helpers/constants");
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { userInputPage: _this.props.page };
        return _this;
    }
    Navigation.parseInteger = function (input, lastPage) {
        var inputPage = Number.parseInt(input, 10);
        if (!Number.isNaN(inputPage)) {
            inputPage = inputPage > lastPage ? lastPage : inputPage;
            inputPage = inputPage < 1 ? 1 : inputPage;
        }
        return inputPage;
    };
    Navigation.prototype.onChange = function (event, lastPage) {
        var inputPage = Navigation.parseInteger(event.target.value, lastPage);
        this.setState({ userInputPage: Number.isNaN(inputPage) ? event.target.value : inputPage });
    };
    Navigation.prototype.onKeyDown = function (event, page, lastPage, onPageInput, onSetPage) {
        if (event.keyCode === constants_1.KEY_CODES.ENTER) {
            var inputPage = Navigation.parseInteger(this.state.userInputPage, lastPage);
            onPageInput(event, Number.isNaN(inputPage) ? page : inputPage);
            onSetPage(event, Number.isNaN(inputPage) ? page : inputPage);
        }
    };
    Navigation.prototype.componentDidUpdate = function (lastState) {
        if (this.props.page !== lastState.page && this.props.page <= this.props.lastPage && this.state.userInputPage !== this.props.page) {
            this.setState({ userInputPage: this.props.page });
        }
    };
    Navigation.prototype.render = function () {
        var _this = this;
        var _a = this.props, page = _a.page, isDisabled = _a.isDisabled, lastPage = _a.lastPage, firstPage = _a.firstPage, pagesTitle = _a.pagesTitle, toLastPage = _a.toLastPage, toNextPage = _a.toNextPage, toFirstPage = _a.toFirstPage, toPreviousPage = _a.toPreviousPage, currPage = _a.currPage, paginationTitle = _a.paginationTitle, onSetPage = _a.onSetPage, onNextClick = _a.onNextClick, onPreviousClick = _a.onPreviousClick, onFirstClick = _a.onFirstClick, onLastClick = _a.onLastClick, onPageInput = _a.onPageInput, className = _a.className, isCompact = _a.isCompact, props = __rest(_a, ["page", "isDisabled", "lastPage", "firstPage", "pagesTitle", "toLastPage", "toNextPage", "toFirstPage", "toPreviousPage", "currPage", "paginationTitle", "onSetPage", "onNextClick", "onPreviousClick", "onFirstClick", "onLastClick", "onPageInput", "className", "isCompact"]);
        var userInputPage = this.state.userInputPage;
        return (<nav className={react_styles_1.css(pagination_1["default"].paginationNav, className)} aria-label={paginationTitle} {...props}>
        {!isCompact && (<Button_1.Button variant={Button_1.ButtonVariant.plain} isDisabled={isDisabled || page === firstPage} aria-label={toFirstPage} data-action="first" onClick={function (event) {
            onFirstClick(event, 1);
            onSetPage(event, 1);
            _this.setState({ userInputPage: 1 });
        }}>
            <react_icons_1.AngleDoubleLeftIcon />
          </Button_1.Button>)}
        <Button_1.Button variant={Button_1.ButtonVariant.plain} isDisabled={isDisabled || page === firstPage} data-action="previous" onClick={function (event) {
            var newPage = page - 1 >= 1 ? page - 1 : 1;
            onPreviousClick(event, newPage);
            onSetPage(event, newPage);
            _this.setState({ userInputPage: newPage });
        }} aria-label={toPreviousPage}>
          <react_icons_1.AngleLeftIcon />
        </Button_1.Button>
        {!isCompact && (<div className={react_styles_1.css(pagination_1["default"].paginationNavPageSelect)}>
            <input className={react_styles_1.css(pagination_1["default"].formControl)} aria-label={currPage} type="number" disabled={isDisabled || page === firstPage && page === lastPage} min={lastPage <= 0 && firstPage <= 0 ? 0 : 1} max={lastPage} value={userInputPage} onKeyDown={function (event) { return _this.onKeyDown(event, page, lastPage, onPageInput, onSetPage); }} onChange={function (event) { return _this.onChange(event, lastPage); }}/>
            <span aria-hidden="true">
              of {pagesTitle ? helpers_1.pluralize(lastPage, pagesTitle) : lastPage}
            </span>
          </div>)}
        <Button_1.Button variant={Button_1.ButtonVariant.plain} isDisabled={isDisabled || page === lastPage} aria-label={toNextPage} data-action="next" onClick={function (event) {
            var newPage = page + 1 <= lastPage ? page + 1 : lastPage;
            onNextClick(event, newPage);
            onSetPage(event, newPage);
            _this.setState({ userInputPage: newPage });
        }}>
          <react_icons_1.AngleRightIcon />
        </Button_1.Button>
        {!isCompact && (<Button_1.Button variant={Button_1.ButtonVariant.plain} isDisabled={isDisabled || page === lastPage} aria-label={toLastPage} data-action="last" onClick={function (event) {
            onLastClick(event, lastPage);
            onSetPage(event, lastPage);
            _this.setState({ userInputPage: lastPage });
        }}>
            <react_icons_1.AngleDoubleRightIcon />
          </Button_1.Button>)}
      </nav>);
    };
    Navigation.defaultProps = {
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
        onNextClick: function () { return undefined; },
        onPreviousClick: function () { return undefined; },
        onFirstClick: function () { return undefined; },
        onLastClick: function () { return undefined; },
        onPageInput: function () { return undefined; }
    };
    return Navigation;
}(React.Component));
exports.Navigation = Navigation;
