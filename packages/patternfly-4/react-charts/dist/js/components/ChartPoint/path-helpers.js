"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathHelpers = void 0;
var PathHelpers = {
  circle: function circle(x, y, size) {
    return "M ".concat(x, ", ").concat(y, "\n      m ").concat(-size, ", 0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(size * 2, ",0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(-size * 2, ",0");
  },
  square: function square(x, y, size) {
    var baseSize = 0.87 * size;
    var x0 = x - baseSize;
    var y1 = y + baseSize;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      z");
  },
  diamond: function diamond(x, y, size) {
    var baseSize = 0.87 * size;
    var length = Math.sqrt(2 * (baseSize * baseSize));
    return "M ".concat(x, ", ").concat(y + length, "\n      l ").concat(length, ", -").concat(length, "\n      l -").concat(length, ", -").concat(length, "\n      l -").concat(length, ", ").concat(length, "\n      l ").concat(length, ", ").concat(length, "\n      z");
  },
  triangleDown: function triangleDown(x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - size;
    var y1 = y + height;
    return "M ".concat(x0, ", ").concat(y0, "\n      L ").concat(x1, ", ").concat(y0, "\n      L ").concat(x, ", ").concat(y1, "\n      z");
  },
  triangleUp: function triangleUp(x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - height;
    var y1 = y + size;
    return "M ".concat(x0, ", ").concat(y1, "\n      L ").concat(x1, ", ").concat(y1, "\n      L ").concat(x, ", ").concat(y0, "\n      z");
  },
  plus: function plus(x, y, size) {
    var baseSize = 1.1 * size;
    var distance = baseSize / 1.5;
    return "\n      M ".concat(x - distance / 2, ", ").concat(y + baseSize, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h-").concat(distance, "\n      v").concat(distance, "\n      z");
  },
  minus: function minus(x, y, size) {
    var baseSize = 1.1 * size;
    var lineHeight = baseSize - baseSize * 0.3;
    var x0 = x - baseSize;
    var y1 = y + lineHeight / 2;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z");
  },
  star: function star(x, y, size) {
    var baseSize = 1.35 * size;
    var angle = Math.PI / 5;
    var range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var starCoords = range.map(function (index) {
      var length = index % 2 === 0 ? baseSize : baseSize / 2;
      return "".concat(length * Math.sin(angle * (index + 1)) + x, ",\n        ").concat(length * Math.cos(angle * (index + 1)) + y);
    });
    return "M ".concat(starCoords.join('L'), " z");
  },
  dash: function dash(x, y, size) {
    var baseSize = 1.1 * size;
    var lineHeight = baseSize - baseSize * 0.3;
    var x0 = x - baseSize;
    var y1 = y + lineHeight / 2;
    var distance = (x + baseSize - x0) * 0.3;
    var padding = distance / 3;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z\n      M ").concat(x0 + distance + padding, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z\n      M ").concat(x0 + distance * 2 + padding * 2, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z");
  },
  threshold: function threshold(x, y, size) {
    var baseSize = 1.1 * size;
    var lineHeight = baseSize - baseSize * 0.3;
    var x0 = x - baseSize;
    var y1 = y + lineHeight / 2;
    var distance = (x + baseSize - x0) * 0.5;
    var padding = distance / 3;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z\n      M ").concat(x0 + distance + padding, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z");
  }
};
exports.PathHelpers = PathHelpers;
//# sourceMappingURL=path-helpers.js.map