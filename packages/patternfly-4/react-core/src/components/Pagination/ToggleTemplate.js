"use strict";
exports.__esModule = true;
var React = require("react");
exports.ToggleTemplate = function (_a) {
    var _b = _a.firstIndex, firstIndex = _b === void 0 ? 0 : _b, _c = _a.lastIndex, lastIndex = _c === void 0 ? 0 : _c, _d = _a.itemCount, itemCount = _d === void 0 ? 0 : _d, _e = _a.itemsTitle, itemsTitle = _e === void 0 ? 'items' : _e;
    return (<React.Fragment>
      <b>
        {firstIndex} - {lastIndex}
      </b>{' '}
      of <b>{itemCount}</b> {itemsTitle}
    </React.Fragment>);
};
