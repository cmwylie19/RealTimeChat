"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var TopologyControlBar_1 = require("./TopologyControlBar");
describe('TopologyControlBar', function () {
    test('should display the default controls correctly', function () {
        var controlButtons = TopologyControlBar_1.createTopologyControlButtons();
        var mockfn = jest.fn();
        var view = enzyme_1.mount(<TopologyControlBar_1.TopologyControlBar className="default-test-class" id="default-test-id" controlButtons={controlButtons} onButtonClick={mockfn}/>);
        expect(view).toMatchSnapshot();
        view
            .find("#" + TopologyControlBar_1.ZOOM_IN)
            .at(0)
            .simulate('click');
        expect(mockfn.mock.calls).toHaveLength(1);
    });
    test('should accept button options correctly', function () {
        var mockfn = jest.fn();
        var controlButtons = TopologyControlBar_1.createTopologyControlButtons(__assign(__assign({}, TopologyControlBar_1.defaultControlButtonsOptions), { zoomInCallback: mockfn, zoomInAriaLabel: 'test-zoom-in-aria-label', zoomInIcon: <span>test zoom in</span>, zoomInTip: 'test zoom in tooltip', fitToScreenHidden: true, resetViewDisabled: true, legend: false }));
        var view = enzyme_1.mount(<TopologyControlBar_1.TopologyControlBar className="default-test-class" id="default-test-id" controlButtons={controlButtons}/>);
        expect(view).toMatchSnapshot();
        view
            .find("#" + TopologyControlBar_1.ZOOM_IN)
            .at(0)
            .simulate('click');
        expect(mockfn.mock.calls).toHaveLength(1);
    });
});
