"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var DropdownToggle_1 = require("./DropdownToggle");
var dropdownConstants_1 = require("./dropdownConstants");
describe('API', function () {
    test('click on closed', function () {
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle onToggle={mockToggle} parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle_1.DropdownToggle>);
        view
            .find('button')
            .first()
            .simulate('click');
        expect(mockToggle.mock.calls[0][0]).toBe(true);
    });
    test('click on opened', function () {
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle_1.DropdownToggle>);
        view
            .find('button')
            .first()
            .simulate('click');
        expect(mockToggle.mock.calls[0][0]).toBe(false);
    });
    test('on click outside has been removed', function () {
        var mousedown = function () { };
        document.addEventListener = jest.fn(function (event, cb) {
            mousedown = cb;
        });
        document.removeEventListener = jest.fn(function (event, cb) {
            if (mousedown === cb) {
                mousedown = function () { };
            }
        });
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle_1.DropdownToggle>);
        view.unmount();
        mousedown({ target: document });
        expect(mockToggle.mock.calls).toHaveLength(0);
        expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
    });
    test('on touch outside has been removed', function () {
        var touchstart = function () { };
        document.addEventListener = jest.fn(function (event, cb) {
            touchstart = cb;
        });
        document.removeEventListener = jest.fn(function (event, cb) {
            if (touchstart === cb) {
                touchstart = function () { };
            }
        });
        var mockToggle = jest.fn();
        var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle_1.DropdownToggle>);
        view.unmount();
        touchstart({ target: document });
        expect(mockToggle.mock.calls).toHaveLength(0);
        expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
    });
});
describe('state', function () {
    test('hover', function () {
        var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle id="Dropdown Toggle" isHovered parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle_1.DropdownToggle>);
        expect(view).toMatchSnapshot();
    });
    test('active', function () {
        var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle id="Dropdown Toggle" isActive parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle_1.DropdownToggle>);
        expect(view).toMatchSnapshot();
    });
    test('focus', function () {
        var view = enzyme_1.mount(<DropdownToggle_1.DropdownToggle id="Dropdown Toggle" isFocused parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle_1.DropdownToggle>);
        expect(view).toMatchSnapshot();
    });
    test('class changes', function () {
        var view = enzyme_1.mount(<dropdownConstants_1.DropdownContext.Provider value={{
            toggleTextClass: 'some-test-class',
            toggleIconClass: 'another-test-class'
        }}>
        <DropdownToggle_1.DropdownToggle id="Dropdown Toggle" isFocused parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle_1.DropdownToggle>
      </dropdownConstants_1.DropdownContext.Provider>);
        expect(view).toMatchSnapshot();
    });
    test('class changes', function () {
        var view = enzyme_1.mount(<dropdownConstants_1.DropdownContext.Provider value={{
            toggleTextClass: 'some-test-class',
            toggleIconClass: 'another-test-class'
        }}>
        <DropdownToggle_1.DropdownToggle id="Dropdown Toggle" isFocused parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle_1.DropdownToggle>
      </dropdownConstants_1.DropdownContext.Provider>);
        expect(view).toMatchSnapshot();
    });
});
