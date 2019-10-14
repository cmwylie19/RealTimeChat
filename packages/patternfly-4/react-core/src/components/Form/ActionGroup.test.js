"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ActionGroup_1 = require("./ActionGroup");
var Form_1 = require("./Form");
describe('ActionGroup component', function () {
    test('should render default action group variant', function () {
        var view = enzyme_1.mount(<ActionGroup_1.ActionGroup>
        <div>Hello</div>
      </ActionGroup_1.ActionGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render horizontal form ActionGroup variant', function () {
        var view = enzyme_1.mount(<Form_1.Form isHorizontal>
        <ActionGroup_1.ActionGroup />
      </Form_1.Form>);
        expect(view).toMatchSnapshot();
    });
});
