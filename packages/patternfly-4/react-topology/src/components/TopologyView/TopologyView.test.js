"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
describe('TopologyView', function () {
    test('should display an empty topology correctly', function () {
        var view = enzyme_1.mount(<index_1.TopologyView className="my-test-class" id="simple-test-id"/>);
        expect(view).toMatchSnapshot();
    });
    test('should display topology correctly', function () {
        var view = enzyme_1.mount(<index_1.TopologyView className="my-test-class" id="simple-test-id" contextToolbar={<div id="test-context-bar"/>} viewToolbar={<div id="test-view-bar"/>} controlBar={<div id="test-control-bar"/>}>
        <div id="test-canvas"/>
      </index_1.TopologyView>);
        expect(view).toMatchSnapshot();
    });
    test('should display topology sidebar correctly', function () {
        var view = enzyme_1.mount(<index_1.TopologyView className="my-test-class" id="simple-test-id" contextToolbar={<div id="test-context-bar"/>} viewToolbar={<div id="test-view-bar"/>} controlBar={<div id="test-control-bar"/>} sideBar={<div>Test SideBar</div>} sideBarOpen={false}>
        <div id="test-canvas"/>
      </index_1.TopologyView>);
        expect(view).toMatchSnapshot();
        expect(view.find('div.pf-topology-container__with-sidebar').length).toBe(1);
        expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(0);
    });
    test('should display topology w/ open sidebar correctly', function () {
        var view = enzyme_1.mount(<index_1.TopologyView className="my-test-class" id="simple-test-id" contextToolbar={<div id="test-context-bar"/>} viewToolbar={<div id="test-view-bar"/>} controlBar={<div id="test-control-bar"/>} sideBar={<div>Test SideBar</div>} sideBarOpen>
        <div id="test-canvas"/>
      </index_1.TopologyView>);
        expect(view).toMatchSnapshot();
        expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(1);
    });
});
