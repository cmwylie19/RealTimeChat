"use strict";
exports.__esModule = true;
exports.PathHelpers = {
    circle: function (x, y, size) {
        return "M " + x + ", " + y + "\n      m " + -size + ", 0\n      a " + size + ", " + size + " 0 1,0 " + size * 2 + ",0\n      a " + size + ", " + size + " 0 1,0 " + -size * 2 + ",0";
    },
    square: function (x, y, size) {
        var baseSize = 0.87 * size;
        var x0 = x - baseSize;
        var y1 = y + baseSize;
        var distance = x + baseSize - x0;
        return "M " + x0 + ", " + y1 + "\n      h" + distance + "\n      v-" + distance + "\n      h-" + distance + "\n      z";
    },
    diamond: function (x, y, size) {
        var baseSize = 0.87 * size;
        var length = Math.sqrt(2 * (baseSize * baseSize));
        return "M " + x + ", " + (y + length) + "\n      l " + length + ", -" + length + "\n      l -" + length + ", -" + length + "\n      l -" + length + ", " + length + "\n      l " + length + ", " + length + "\n      z";
    },
    triangleDown: function (x, y, size) {
        var height = (size / 2) * Math.sqrt(3);
        var x0 = x - size;
        var x1 = x + size;
        var y0 = y - size;
        var y1 = y + height;
        return "M " + x0 + ", " + y0 + "\n      L " + x1 + ", " + y0 + "\n      L " + x + ", " + y1 + "\n      z";
    },
    triangleUp: function (x, y, size) {
        var height = (size / 2) * Math.sqrt(3);
        var x0 = x - size;
        var x1 = x + size;
        var y0 = y - height;
        var y1 = y + size;
        return "M " + x0 + ", " + y1 + "\n      L " + x1 + ", " + y1 + "\n      L " + x + ", " + y0 + "\n      z";
    },
    plus: function (x, y, size) {
        var baseSize = 1.1 * size;
        var distance = baseSize / 1.5;
        return "\n      M " + (x - distance / 2) + ", " + (y + baseSize) + "\n      v-" + distance + "\n      h-" + distance + "\n      v-" + distance + "\n      h" + distance + "\n      v-" + distance + "\n      h" + distance + "\n      v" + distance + "\n      h" + distance + "\n      v" + distance + "\n      h-" + distance + "\n      v" + distance + "\n      z";
    },
    minus: function (x, y, size) {
        var baseSize = 1.1 * size;
        var lineHeight = baseSize - baseSize * 0.3;
        var x0 = x - baseSize;
        var y1 = y + lineHeight / 2;
        var distance = x + baseSize - x0;
        return "M " + x0 + ", " + y1 + "\n      h" + distance + "\n      v-" + lineHeight + "\n      h-" + distance + "\n      z";
    },
    star: function (x, y, size) {
        var baseSize = 1.35 * size;
        var angle = Math.PI / 5;
        var range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var starCoords = range.map(function (index) {
            var length = index % 2 === 0 ? baseSize : baseSize / 2;
            return length * Math.sin(angle * (index + 1)) + x + ",\n        " + (length * Math.cos(angle * (index + 1)) + y);
        });
        return "M " + starCoords.join('L') + " z";
    },
    dash: function (x, y, size) {
        var baseSize = 1.1 * size;
        var lineHeight = baseSize - baseSize * 0.3;
        var x0 = x - baseSize;
        var y1 = y + lineHeight / 2;
        var distance = (x + baseSize - x0) * 0.3;
        var padding = distance / 3;
        return "M " + x0 + ", " + y1 + "\n      h" + distance + "\n      v-" + lineHeight + "\n      h-" + distance + "\n      z\n      M " + (x0 + distance + padding) + ", " + y1 + "\n      h" + distance + "\n      v-" + lineHeight + "\n      h-" + distance + "\n      z\n      M " + (x0 + distance * 2 + padding * 2) + ", " + y1 + "\n      h" + distance + "\n      v-" + lineHeight + "\n      h-" + distance + "\n      z";
    },
    threshold: function (x, y, size) {
        var baseSize = 1.1 * size;
        var lineHeight = baseSize - baseSize * 0.3;
        var x0 = x - baseSize;
        var y1 = y + lineHeight / 2;
        var distance = (x + baseSize - x0) * 0.5;
        var padding = distance / 3;
        return "M " + x0 + ", " + y1 + "\n      h" + distance + "\n      v-" + lineHeight + "\n      h-" + distance + "\n      z\n      M " + (x0 + distance + padding) + ", " + y1 + "\n      h" + distance + "\n      v-" + lineHeight + "\n      h-" + distance + "\n      z";
    }
};
