"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var SelectToggle_1 = require("./SelectToggle");
describe('API', function () {
    test('click on closed', function () {
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" onToggle={mockToggle} parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        view
            .find('button')
            .first()
            .simulate('click');
        expect(mockToggle.mock.calls[0][0]).toBe(true);
    });
    test('click on opened', function () {
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" onToggle={mockToggle} isExpanded parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        view
            .find('button')
            .first()
            .simulate('click');
        expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('click on document', function () {
        var map = {};
        document.addEventListener = jest.fn(function (event, cb) {
            map[event] = cb;
        });
        var mockToggle = jest.fn();
        enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" onToggle={mockToggle} isExpanded parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        map.mousedown({ target: document });
        expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('touch on document', function () {
        var map = {};
        document.addEventListener = jest.fn(function (event, cb) {
            map[event] = cb;
        });
        var mockToggle = jest.fn();
        enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" onToggle={mockToggle} isExpanded parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        map.touchstart({ target: document });
        expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('on click outside has been removed', function () {
        var map = {};
        document.addEventListener = jest.fn(function (event, cb) {
            map[event] = cb;
        });
        document.removeEventListener = jest.fn(function (event, cb) {
            if (map[event] === cb) {
                map[event] = function () { };
            }
        });
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" onToggle={mockToggle} isExpanded parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        view.unmount();
        map.mousedown({ target: document });
        expect(mockToggle.mock.calls).toHaveLength(0);
        expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
    });
    test('on touch outside has been removed', function () {
        var map = {};
        document.addEventListener = jest.fn(function (event, cb) {
            map[event] = cb;
        });
        document.removeEventListener = jest.fn(function (event, cb) {
            if (map[event] === cb) {
                map[event] = function () { };
            }
        });
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" onToggle={mockToggle} isExpanded parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        view.unmount();
        map.touchstart({ target: document });
        expect(mockToggle.mock.calls).toHaveLength(0);
        expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
    });
});
describe('state', function () {
    test('hover', function () {
        var view = enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" isHovered parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        expect(view).toMatchSnapshot();
    });
    test('active', function () {
        var view = enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" isActive parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        expect(view).toMatchSnapshot();
    });
    test('focus', function () {
        var view = enzyme_1.mount(<SelectToggle_1.SelectToggle id="Select Toggle" isFocused parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle_1.SelectToggle>);
        expect(view).toMatchSnapshot();
    });
});
