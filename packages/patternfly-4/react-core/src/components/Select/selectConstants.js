"use strict";
exports.__esModule = true;
var React = require("react");
exports.SelectContext = React.createContext(null);
exports.SelectProvider = exports.SelectContext.Provider;
exports.SelectConsumer = exports.SelectContext.Consumer;
var SelectVariant;
(function (SelectVariant) {
    SelectVariant["single"] = "single";
    SelectVariant["checkbox"] = "checkbox";
    SelectVariant["typeahead"] = "typeahead";
    SelectVariant["typeaheadMulti"] = "typeaheadmulti";
})(SelectVariant = exports.SelectVariant || (exports.SelectVariant = {}));
var SelectDirection;
(function (SelectDirection) {
    SelectDirection["up"] = "up";
    SelectDirection["down"] = "down";
})(SelectDirection = exports.SelectDirection || (exports.SelectDirection = {}));
exports.KeyTypes = {
    Tab: 'Tab',
    Space: ' ',
    Escape: 'Escape',
    Enter: 'Enter',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown'
};
