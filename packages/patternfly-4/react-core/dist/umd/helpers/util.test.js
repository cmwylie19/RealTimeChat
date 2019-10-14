(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "@patternfly/react-core", "./util", "./constants", "@patternfly/react-styles/css/layouts/Flex/flex"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("@patternfly/react-core"), require("./util"), require("./constants"), require("@patternfly/react-styles/css/layouts/Flex/flex"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.reactCore, global.util, global.constants, global.flex);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _reactCore, _util, _constants, _flex) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _flex2 = _interopRequireDefault(_flex);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const createMockHtmlElement = bounds => ({
    getBoundingClientRect: () => bounds
  });

  test('capitalize', () => {
    expect((0, _util.capitalize)('foo')).toBe('Foo');
  });
  test('getUniqueId', () => {
    expect((0, _util.getUniqueId)()).not.toBe((0, _util.getUniqueId)());
  });
  test('getUniqueId prefixed', () => {
    expect((0, _util.getUniqueId)().substring(0, 3)).toBe('pf-');
    expect((0, _util.getUniqueId)('pf-switch').substring(0, 10)).toBe('pf-switch-');
  });
  test('debounce', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const debouncedFunction = (0, _util.debounce)(callback, 50);
    debouncedFunction(); // At this point in time, the callback should not have been called yet

    expect(callback).toHaveBeenCalledTimes(0);

    for (let i = 0; i < 10; i++) {
      jest.advanceTimersByTime(50);
      debouncedFunction();
    }

    expect(callback).toBeCalledTimes(10);
  });
  test('isElementInView should be true when partial out of view and with partial true', () => {
    const container = createMockHtmlElement({
      left: 0,
      right: 200
    });
    const element = createMockHtmlElement({
      left: 10,
      right: 210
    });
    expect((0, _util.isElementInView)(container, element, true)).toBe(true);
  });
  test('isElementInView should be false when partial out of view and with partial false ', () => {
    const container = createMockHtmlElement({
      left: 0,
      right: 200
    });
    const element = createMockHtmlElement({
      left: 10,
      right: 210
    });
    expect((0, _util.isElementInView)(container, element, false)).toBe(false);
  });
  test('isElementInView should be false completely out of view ', () => {
    const container = createMockHtmlElement({
      left: 0,
      right: 200
    });
    const element = createMockHtmlElement({
      left: 200,
      right: 300
    });
    expect((0, _util.isElementInView)(container, element, true)).toBe(false);
  });
  test('isElementInView should be false completely out of view when partial false ', () => {
    const container = createMockHtmlElement({
      left: 0,
      right: 200
    });
    const element = createMockHtmlElement({
      left: 200,
      right: 300
    });
    expect((0, _util.isElementInView)(container, element, false)).toBe(false);
  });
  test('sideElementIsOutOfView Returns left when off on left side', () => {
    const container = createMockHtmlElement({
      left: 20,
      right: 220
    });
    const element = createMockHtmlElement({
      left: 10,
      right: 210
    });
    expect((0, _util.sideElementIsOutOfView)(container, element)).toBe(_constants.SIDE.LEFT);
  });
  test('sideElementIsOutOfView Returns right when off on right side', () => {
    const container = createMockHtmlElement({
      left: 0,
      right: 200
    });
    const element = createMockHtmlElement({
      left: 210,
      right: 410
    });
    expect((0, _util.sideElementIsOutOfView)(container, element)).toBe(_constants.SIDE.RIGHT);
  });
  test('sideElementIsOutOfView Returns NONE when in view', () => {
    const container = createMockHtmlElement({
      left: 0,
      right: 200
    });
    const element = createMockHtmlElement({
      left: 10,
      right: 110
    });
    expect((0, _util.sideElementIsOutOfView)(container, element)).toBe(_constants.SIDE.NONE);
  });
  describe('keyHandler works on ApplicationLauncher', () => {
    document.body.innerHTML = '<!doctype html><html><body></body></html>';
    const dropdownItems = [_react2.default.createElement(_reactCore.DropdownItem, {
      key: " 1",
      id: "first",
      component: "button"
    }, "Action 1"), _react2.default.createElement(_reactCore.DropdownItem, {
      key: "2",
      id: "second",
      component: "button"
    }, "Action 2"), _react2.default.createElement(_reactCore.DropdownItem, {
      key: "3",
      id: "third",
      component: "button",
      isDisabled: true
    }, "Disabled Link")];
    const view = (0, _enzyme.mount)(_react2.default.createElement(_reactCore.ApplicationLauncher, {
      dropdownItems: dropdownItems,
      isOpen: true
    }), {
      attachTo: document.getElementsByName('div')[0]
    });
    const firstDropdownItem = view.find('#first button').first();
    const secondDropdownItem = view.find('#second button').first();
    test('keyHandler advances forward', () => {
      firstDropdownItem.simulate('keydown', {
        key: 'ArrowDown',
        keyCode: _constants.KEY_CODES.ARROW_DOWN,
        which: _constants.KEY_CODES.ARROW_DOWN
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('second');
    });
    test('keyHandler regresses backward', () => {
      secondDropdownItem.simulate('keydown', {
        key: 'ArrowUp',
        keyCode: _constants.KEY_CODES.ARROW_UP,
        which: _constants.KEY_CODES.ARROW_UP
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('first');
    });
    test('keyHandler skips disabled items and loops down to top', () => {
      secondDropdownItem.simulate('keydown', {
        key: 'ArrowDown',
        keyCode: _constants.KEY_CODES.ARROW_DOWN,
        which: _constants.KEY_CODES.ARROW_DOWN
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('first');
    });
    test('keyHandler loops top to bottom', () => {
      firstDropdownItem.simulate('keydown', {
        key: 'ArrowUp',
        keyCode: _constants.KEY_CODES.ARROW_UP,
        which: _constants.KEY_CODES.ARROW_UP
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('second');
    });
  });
  describe('keyHandler works on Dropdown', () => {
    document.body.innerHTML = '<!doctype html><html><body></body></html>';
    const dropdownItems = [_react2.default.createElement(_reactCore.DropdownItem, {
      key: " 1",
      id: "first",
      component: "button"
    }, "Action 1"), _react2.default.createElement(_reactCore.DropdownItem, {
      key: "2",
      id: "second",
      component: "button"
    }, "Action 2"), _react2.default.createElement(_reactCore.DropdownItem, {
      key: "3",
      id: "third",
      component: "button",
      isDisabled: true
    }, "Disabled Link")];
    const view = (0, _enzyme.mount)(_react2.default.createElement(_reactCore.Dropdown, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggle: _react2.default.createElement(_reactCore.DropdownToggle, null, "Expanded Dropdown")
    }), {
      attachTo: document.getElementsByName('div')[0]
    });
    const firstDropdownItem = view.find('#first button').first();
    const secondDropdownItem = view.find('#second button').first();
    test('keyHandler advances forward', () => {
      firstDropdownItem.simulate('keydown', {
        key: 'ArrowDown',
        keyCode: _constants.KEY_CODES.ARROW_DOWN,
        which: _constants.KEY_CODES.ARROW_DOWN
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('second');
    });
    test('keyHandler regresses backward', () => {
      secondDropdownItem.simulate('keydown', {
        key: 'ArrowUp',
        keyCode: _constants.KEY_CODES.ARROW_UP,
        which: _constants.KEY_CODES.ARROW_UP
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('first');
    });
    test('keyHandler skips disabled items and loops down to top', () => {
      secondDropdownItem.simulate('keydown', {
        key: 'ArrowDown',
        keyCode: _constants.KEY_CODES.ARROW_DOWN,
        which: _constants.KEY_CODES.ARROW_DOWN
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('first');
    });
    test('keyHandler loops top to bottom', () => {
      firstDropdownItem.simulate('keydown', {
        key: 'ArrowUp',
        keyCode: _constants.KEY_CODES.ARROW_UP,
        which: _constants.KEY_CODES.ARROW_UP
      });
      const focusedElement = document.activeElement;
      expect(focusedElement.getAttribute('id')).toEqual('second');
    });
  });
  test('fillTemplate interpolates strings correctly', () => {
    // eslint-disable-next-line no-template-curly-in-string
    const templateString = 'My name is ${firstName} ${lastName}';
    const expected = 'My name is Jon Dough';
    const templatVars = {
      firstName: 'Jon',
      lastName: 'Dough'
    };
    const actual = (0, _util.fillTemplate)(templateString, templatVars);
    expect(actual).toEqual(expected);
  });
  test('text pluralize', () => {
    expect((0, _util.pluralize)(1, 'dog')).toEqual('1 dog');
    expect((0, _util.pluralize)(2, 'dog')).toEqual('2 dogs');
    expect((0, _util.pluralize)(2, 'finch', 'finches')).toEqual('2 finches');
  });
  test('formatBreakpointMods', () => {
    expect((0, _util.formatBreakpointMods)([{
      modifier: "spacer-none"
    }], _flex2.default)).toEqual('pf-m-spacer-none');
    expect((0, _util.formatBreakpointMods)([{
      modifier: "spacer-none",
      breakpoint: 'md'
    }], _flex2.default)).toEqual('pf-m-spacer-none-on-md');
    expect((0, _util.formatBreakpointMods)([{
      modifier: "column"
    }, {
      modifier: "row",
      breakpoint: "lg"
    }], _flex2.default)).toEqual('pf-m-column pf-m-row-on-lg');
  });
});
//# sourceMappingURL=util.test.js.map