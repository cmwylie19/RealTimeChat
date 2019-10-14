"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardHeader_1 = require("./CardHeader");
var enzyme_1 = require("enzyme");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<CardHeader_1.CardHeader />);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<CardHeader_1.CardHeader className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'card-header';
    var view = enzyme_1.shallow(<CardHeader_1.CardHeader data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
