"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Alert_1 = require("./Alert");
var AlertActionLink_1 = require("./AlertActionLink");
var AlertActionCloseButton_1 = require("./AlertActionCloseButton");
test('default Alert variant is info', function () {
    var view = enzyme_1.shallow(<Alert_1.Alert title="this is a test">Alert testing</Alert_1.Alert>);
    expect(view.props().className).toMatch(/pf-m-info/);
});
Object.values(Alert_1.AlertVariant).forEach(function (variant) {
    describe("Alert - " + variant, function () {
        test('Description', function () {
            var view = enzyme_1.mount(<Alert_1.Alert variant={variant} title="">
          Some alert
        </Alert_1.Alert>);
            expect(view).toMatchSnapshot();
        });
        test('Title', function () {
            var view = enzyme_1.mount(<Alert_1.Alert variant={variant} title="Some title">
          Some alert
        </Alert_1.Alert>);
            expect(view).toMatchSnapshot();
        });
        test('Action Link', function () {
            var view = enzyme_1.mount(<Alert_1.Alert variant={variant} action={<AlertActionLink_1.AlertActionLink>test</AlertActionLink_1.AlertActionLink>} title="">
          Some alert
        </Alert_1.Alert>);
            expect(view).toMatchSnapshot();
        });
        test('Action Close Button', function () {
            var onClose = jest.fn();
            var view = enzyme_1.mount(<Alert_1.Alert variant={variant} action={<AlertActionCloseButton_1.AlertActionCloseButton aria-label="Close" onClose={onClose}/>} title="">
          Some alert
        </Alert_1.Alert>);
            expect(view).toMatchSnapshot();
            view.find('button[aria-label="Close"]').simulate('click');
            expect(onClose).toHaveBeenCalled();
        });
        test('Action and Title', function () {
            var view = enzyme_1.mount(<Alert_1.Alert variant={variant} action={<AlertActionLink_1.AlertActionLink>test</AlertActionLink_1.AlertActionLink>} title="Some title">
          Some alert
        </Alert_1.Alert>);
            expect(view).toMatchSnapshot();
        });
        test('Custom aria label', function () {
            var view = enzyme_1.mount(<Alert_1.Alert variant={variant} aria-label={"Custom aria label for " + variant} action={<AlertActionLink_1.AlertActionLink>test</AlertActionLink_1.AlertActionLink>} title="Some title">
          Some alert
        </Alert_1.Alert>);
            expect(view).toMatchSnapshot();
        });
        test('inline variation', function () {
            var view = enzyme_1.mount(<Alert_1.Alert variant={variant} isInline title="Some title">
          Some alert
        </Alert_1.Alert>);
            expect(view).toMatchSnapshot();
        });
    });
});
