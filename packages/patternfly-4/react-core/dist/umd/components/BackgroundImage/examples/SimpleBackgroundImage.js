(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactCore);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  class SimpleBackgroundImage extends _react2.default.Component {
    constructor(props) {
      super(props);
      /**
       * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
       */

      this.images = {
        [_reactCore.BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
        [_reactCore.BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
        [_reactCore.BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
        [_reactCore.BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
        [_reactCore.BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg'
      };
    }

    render() {
      return _react2.default.createElement(_reactCore.BackgroundImage, {
        src: this.images
      });
    }

  }

  exports.default = SimpleBackgroundImage;
});
//# sourceMappingURL=SimpleBackgroundImage.js.map