(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-dom", "./constants", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-dom"), require("./constants"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactDom, global.constants, global.reactStyles);
    global.undefined = mod.exports;
  }
})(this, function (exports, _reactDom, _constants, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.formatBreakpointMods = undefined;
  exports.capitalize = capitalize;
  exports.getUniqueId = getUniqueId;
  exports.debounce = debounce;
  exports.isElementInView = isElementInView;
  exports.sideElementIsOutOfView = sideElementIsOutOfView;
  exports.fillTemplate = fillTemplate;
  exports.keyHandler = keyHandler;
  exports.getNextIndex = getNextIndex;
  exports.pluralize = pluralize;

  var ReactDOM = _interopRequireWildcard(_reactDom);

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

  function capitalize(input) {
    return input[0].toUpperCase() + input.substring(1);
  }

  function getUniqueId(prefix = 'pf') {
    const uid = new Date().getTime() + Math.random().toString(36).slice(2);
    return `${prefix}-${uid}`;
  }

  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  /** This function returns whether or not an element is within the viewable area of a container. If partial is true,
   * then this function will return true even if only part of the element is in view.
   * @param {HTMLElement} container  The container to check if the element is in view of.
   * @param {HTMLElement} element    The element to check if it is view
   * @param {boolean} partial   true if partial view is allowed
   *
   * @return {type} True if the component is in View.
   */


  function isElementInView(container, element, partial) {
    const containerBounds = container.getBoundingClientRect();
    const elementBounds = element.getBoundingClientRect();
    const containerBoundsLeft = Math.floor(containerBounds.left);
    const containerBoundsRight = Math.floor(containerBounds.right);
    const elementBoundsLeft = Math.floor(elementBounds.left);
    const elementBoundsRight = Math.floor(elementBounds.right); // Check if in view

    const isTotallyInView = elementBoundsLeft >= containerBoundsLeft && elementBoundsRight <= containerBoundsRight;
    const isPartiallyInView = partial && (elementBoundsLeft < containerBoundsLeft && elementBoundsRight > containerBoundsLeft || elementBoundsRight > containerBoundsRight && elementBoundsLeft < containerBoundsRight); // Return outcome

    return isTotallyInView || isPartiallyInView;
  }
  /** This function returns the side the element is out of view on (right, left or both)
   * @param {HTMLElement} container    The container to check if the element is in view of.
   * @param {HTMLElement} element      The element to check if it is view
   *
   * @return {type} right if the element is of the right, left if element is off the left or both if it is off on both sides.
   */


  function sideElementIsOutOfView(container, element) {
    const containerBounds = container.getBoundingClientRect();
    const elementBounds = element.getBoundingClientRect();
    const containerBoundsLeft = Math.floor(containerBounds.left);
    const containerBoundsRight = Math.floor(containerBounds.right);
    const elementBoundsLeft = Math.floor(elementBounds.left);
    const elementBoundsRight = Math.floor(elementBounds.right); // Check if in view

    const isOffLeft = elementBoundsLeft < containerBoundsLeft;
    const isOffRight = elementBoundsRight > containerBoundsRight;
    let side = _constants.SIDE.NONE;

    if (isOffRight && isOffLeft) {
      side = _constants.SIDE.BOTH;
    } else if (isOffRight) {
      side = _constants.SIDE.RIGHT;
    } else if (isOffLeft) {
      side = _constants.SIDE.LEFT;
    } // Return outcome


    return side;
  }
  /** Interpolates a parameterized templateString using values from a templateVars object.
   * The templateVars object should have keys and values which match the templateString's parameters.
   * Example:
   *    const templateString: 'My name is ${firstName} ${lastName}';
   *    const templateVars: {
   *      firstName: 'Jon'
   *      lastName: 'Dough'
   *    };
   *    const result = fillTemplate(templateString, templateVars);
   *    // "My name is Jon Dough"
   * @param {Object} templateString  The string passed by the consumer
   * @param {Object} templateVars The variables passed to the string
   *
   * @return {type} The template string literal result
   */


  function fillTemplate(templateString, templateVars) {
    const func = new Function(...Object.keys(templateVars), `return \`${templateString}\`;`);
    return func(...Object.values(templateVars));
  }
  /** This function allows for keyboard navigation through dropdowns. The custom argument is optional.
   * @param {number} index The index of the element you're on
   * @param {string} position The orientation of the dropdown
   * @param {string[]} refsCollection Array of refs to the items in the dropdown
   * @param {Object[]} kids Array of items in the dropdown
   * @param {boolean} [custom] Allows for handling of flexible content
   */


  function keyHandler(index, position, refsCollection, kids, custom = false) {
    if (!Array.isArray(kids)) {
      return;
    }

    let nextIndex;

    if (position === 'up') {
      if (index === 0) {
        // loop back to end
        nextIndex = kids.length - 1;
      } else {
        nextIndex = index - 1;
      }
    } else if (index === kids.length - 1) {
      // loop back to beginning
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }

    if (refsCollection[nextIndex] === null) {
      keyHandler(nextIndex, position, refsCollection, kids, custom);
    } else if (custom) {
      if (refsCollection[nextIndex].focus) {
        refsCollection[nextIndex].focus();
      }

      const element = ReactDOM.findDOMNode(refsCollection[nextIndex]);
      element.focus();
    } else {
      refsCollection[nextIndex].focus();
    }
  }
  /** This function is a helper for keyboard navigation through dropdowns.
   * @param {number} index The index of the element you're on
   * @param {string} position The orientation of the dropdown
   * @param {string[]} collection Array of refs to the items in the dropdown
   */


  function getNextIndex(index, position, collection) {
    let nextIndex;

    if (position === 'up') {
      if (index === 0) {
        // loop back to end
        nextIndex = collection.length - 1;
      } else {
        nextIndex = index - 1;
      }
    } else if (index === collection.length - 1) {
      // loop back to beginning
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }

    if (collection[nextIndex] === null) {
      getNextIndex(nextIndex, position, collection);
    } else {
      return nextIndex;
    }
  }
  /** This function is a helper for pluralizing strings.
   * @param {number} i The quantity of the string you want to pluralize
   * @param {string} singular The singular version of the string
   * @param {string} plural The change to the string that should occur if the quantity is not equal to 1.
   *                 Defaults to adding an 's'.
   */


  function pluralize(i, singular, plural) {
    if (!plural) {
      plural = `${singular}s`;
    }

    return `${i || 0} ${i === 1 ? singular : plural}`;
  }
  /** This function is a helper for turning arrays of breakpointMod objects for data toolbar and flex into classes
   * @param {(DataToolbarBreakpointMod | FlexBreakpointMod | FlexItemBreakpointMod)[]} breakpointMods The modifiers object
   * @param {any} styles The appropriate styles object for the component
   */


  const formatBreakpointMods = exports.formatBreakpointMods = (breakpointMods, styles) => {
    return breakpointMods.reduce((acc, curr) => `${acc}${acc && ' '}${(0, _reactStyles.getModifier)(styles, `${curr.modifier}${curr.breakpoint ? `-on-${curr.breakpoint}` : ''}`)}`, '');
  };
});
//# sourceMappingURL=util.js.map