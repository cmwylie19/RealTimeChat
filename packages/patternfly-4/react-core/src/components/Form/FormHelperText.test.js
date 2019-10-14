"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FormHelperText_1 = require("./FormHelperText");
var enzyme_1 = require("enzyme");
test('renders with PatternFly Core styles', function () {
    var view = enzyme_1.shallow(<FormHelperText_1.FormHelperText isError isHidden={false}/>);
    expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
    var view = enzyme_1.shallow(<FormHelperText_1.FormHelperText className="extra-class"/>);
    expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
    var testId = 'login-body';
    var view = enzyme_1.shallow(<FormHelperText_1.FormHelperText data-testid={testId}/>);
    expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', function () {
    var CustomNode = function () { return <div>My custom node</div>; };
    var view = enzyme_1.shallow(<FormHelperText_1.FormHelperText>
      <CustomNode />
    </FormHelperText_1.FormHelperText>);
    expect(view).toMatchSnapshot();
});
