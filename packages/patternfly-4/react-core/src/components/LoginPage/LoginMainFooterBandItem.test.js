"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var LoginMainFooterBandItem_1 = require("./LoginMainFooterBandItem");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<LoginMainFooterBandItem_1.LoginMainFooterBandItem />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<LoginMainFooterBandItem_1.LoginMainFooterBandItem className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'login-body';
    var view = enzyme_1.shallow(<LoginMainFooterBandItem_1.LoginMainFooterBandItem data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', function () {
    var CustomNode = function () { return <div>My custom node</div>; };
    var view = enzyme_1.shallow(<LoginMainFooterBandItem_1.LoginMainFooterBandItem>
      <CustomNode />
    </LoginMainFooterBandItem_1.LoginMainFooterBandItem>);
    expect(view).toMatchSnapshot();
});
