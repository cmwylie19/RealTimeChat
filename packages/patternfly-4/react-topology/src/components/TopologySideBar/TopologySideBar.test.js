"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
describe('TopologySideBar', function () {
    test('should display topology sidebar correctly', function () {
        var view = enzyme_1.mount(<index_1.TopologySideBar className="my-test-class" show header={<span id="test-header-id">Header</span>}>
        <div id="test-canvas"/>
      </index_1.TopologySideBar>);
        expect(view).toMatchSnapshot();
        expect(view.find('.pf-topology-side-bar__header #test-header-id').length).toBe(1);
    });
    test('should display topology sidebar w/ close correctly', function () {
        var mockClose = jest.fn();
        var view = enzyme_1.mount(<index_1.TopologySideBar className="my-test-class" show onClose={mockClose}>
      >
        <div id="test-canvas"/>
      </index_1.TopologySideBar>);
        expect(view).toMatchSnapshot();
        view.find('button.pf-topology-side-bar__dismiss').simulate('click');
        expect(mockClose).toBeCalled();
    });
    test('should hide the sidebar correctly', function () {
        var view = enzyme_1.mount(<index_1.TopologySideBar className="my-test-class" show={false} header={<span id="test-header-id">Header</span>}>
        >
        <div id="test-canvas"/>
      </index_1.TopologySideBar>);
        expect(view).toMatchSnapshot();
        expect(view.find('#test-canvas').length).toBe(0);
    });
});
