"use strict";
exports.__esModule = true;
var React = require("react");
var Flex_1 = require("./Flex");
var FlexItem_1 = require("./FlexItem");
var enzyme_1 = require("enzyme");
test('Simple flex with single item', function () {
    var view = enzyme_1.shallow(<Flex_1.Flex>
      <FlexItem_1.FlexItem>Test</FlexItem_1.FlexItem>
    </Flex_1.Flex>);
    expect(view).toMatchSnapshot();
});
test('Nested flex', function () {
    var view = enzyme_1.shallow(<Flex_1.Flex>
      <Flex_1.Flex>
        <FlexItem_1.FlexItem>Test</FlexItem_1.FlexItem>
      </Flex_1.Flex>
    </Flex_1.Flex>);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<Flex_1.Flex className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'flex';
    var view = enzyme_1.shallow(<Flex_1.Flex data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
