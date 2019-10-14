"use strict";
exports.__esModule = true;
var State = /** @class */ (function () {
    function State(name, abbreviation, capital, founded) {
        var _this = this;
        this.toString = function () { return _this.name + " (" + _this.abbreviation + ") - Founded: " + _this.founded; };
        this.name = name;
        this.abbreviation = abbreviation;
        this.capital = capital;
        this.founded = founded;
    }
    return State;
}());
exports.State = State;
