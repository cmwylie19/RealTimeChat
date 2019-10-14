(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/layouts/Bullseye/bullseye", "@patternfly/react-styles", "./AboutModalBoxContent", "./AboutModalBoxHeader", "./AboutModalBoxHero", "./AboutModalBoxBrand", "./AboutModalBoxCloseButton", "./AboutModalBox", "../Backdrop/Backdrop", 'focus-trap-react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/layouts/Bullseye/bullseye"), require("@patternfly/react-styles"), require("./AboutModalBoxContent"), require("./AboutModalBoxHeader"), require("./AboutModalBoxHero"), require("./AboutModalBoxBrand"), require("./AboutModalBoxCloseButton"), require("./AboutModalBox"), require("../Backdrop/Backdrop"), require('focus-trap-react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.bullseye, global.reactStyles, global.AboutModalBoxContent, global.AboutModalBoxHeader, global.AboutModalBoxHero, global.AboutModalBoxBrand, global.AboutModalBoxCloseButton, global.AboutModalBox, global.Backdrop, global.focusTrapReact);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _bullseye, _reactStyles, _AboutModalBoxContent, _AboutModalBoxHeader, _AboutModalBoxHero, _AboutModalBoxBrand, _AboutModalBoxCloseButton, _AboutModalBox, _Backdrop, FocusTrap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AboutModalContainer = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _bullseye2 = _interopRequireDefault(_bullseye);

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

  const AboutModalContainer = exports.AboutModalContainer = _ref => {
    let {
      children,
      className = '',
      isOpen = false,
      onClose = () => undefined,
      productName = '',
      trademark,
      brandImageSrc,
      brandImageAlt,
      backgroundImageSrc,
      ariaLabelledbyId,
      ariaDescribedById
    } = _ref,
        props = _objectWithoutProperties(_ref, ["children", "className", "isOpen", "onClose", "productName", "trademark", "brandImageSrc", "brandImageAlt", "backgroundImageSrc", "ariaLabelledbyId", "ariaDescribedById"]);

    if (!isOpen) {
      return null;
    }

    return React.createElement(_Backdrop.Backdrop, null, React.createElement(FocusTrap, {
      focusTrapOptions: {
        clickOutsideDeactivates: true
      },
      className: (0, _reactStyles.css)(_bullseye2.default.bullseye)
    }, React.createElement(_AboutModalBox.AboutModalBox, {
      className: className,
      "aria-labelledby": ariaLabelledbyId,
      "aria-describedby": ariaDescribedById
    }, React.createElement(_AboutModalBoxBrand.AboutModalBoxBrand, {
      src: brandImageSrc,
      alt: brandImageAlt
    }), React.createElement(_AboutModalBoxCloseButton.AboutModalBoxCloseButton, {
      onClose: onClose
    }), productName && React.createElement(_AboutModalBoxHeader.AboutModalBoxHeader, {
      id: ariaLabelledbyId,
      productName: productName
    }), React.createElement(_AboutModalBoxContent.AboutModalBoxContent, _extends({
      trademark: trademark,
      id: ariaDescribedById,
      noAboutModalBoxContentContainer: false
    }, props), children), React.createElement(_AboutModalBoxHero.AboutModalBoxHero, {
      backgroundImageSrc: backgroundImageSrc
    }))));
  };

  AboutModalContainer.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    isOpen: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    productName: _propTypes2.default.string,
    trademark: _propTypes2.default.string,
    brandImageSrc: _propTypes2.default.string.isRequired,
    brandImageAlt: _propTypes2.default.string.isRequired,
    backgroundImageSrc: _propTypes2.default.string,
    ariaLabelledbyId: _propTypes2.default.string.isRequired,
    ariaDescribedById: _propTypes2.default.string.isRequired
  };
});
//# sourceMappingURL=AboutModalContainer.js.map