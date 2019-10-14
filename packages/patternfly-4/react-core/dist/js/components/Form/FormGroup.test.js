"use strict";

var _react = _interopRequireDefault(require("react"));

var _FormGroup = require("./FormGroup");

var _Form = require("./Form");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('FormGroup component', function () {
  var returnFunction = function returnFunction() {
    return _react["default"].createElement("div", null, "label");
  };

  test('should render default form group variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      label: "label",
      fieldId: "label-id",
      helperText: "this is helper text"
    }, _react["default"].createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render inline form group variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      isInline: true,
      label: "label",
      fieldId: "label-id",
      helperText: "this is helper text"
    }, _react["default"].createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with required label', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      label: "label",
      isRequired: true,
      fieldId: "label-id"
    }, _react["default"].createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with node label', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      fieldId: "id",
      label: _react["default"].createElement("h1", null, "Header")
    }, _react["default"].createElement("input", {
      "aria-label": "input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with function label', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      fieldId: "id",
      label: returnFunction()
    }, _react["default"].createElement("input", {
      "aria-label": "input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with node helperText', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      label: "Label",
      fieldId: "label-id",
      helperText: _react["default"].createElement("h1", null, "Header")
    }, _react["default"].createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with function helperText', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      label: "Label",
      fieldId: "label-id",
      helperText: returnFunction()
    }, _react["default"].createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form group variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Form.Form, {
      isHorizontal: true
    }, _react["default"].createElement(_FormGroup.FormGroup, {
      label: "label",
      fieldId: "label-id",
      helperText: "this is helperText"
    }, _react["default"].createElement("input", {
      id: "label-id"
    }))));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant without label', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      fieldId: "id"
    }, _react["default"].createElement("input", {
      "aria-label": "input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group required variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      isRequired: true,
      label: "label",
      fieldId: "id"
    }, _react["default"].createElement("input", {
      id: "id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group invalid variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      label: "label",
      fieldId: "label-id",
      isValid: false,
      helperTextInvalid: "Invalid FormGroup"
    }, _react["default"].createElement("input", {
      id: "id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render correctly when label is not a string with Children = Array', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_FormGroup.FormGroup, {
      fieldId: "id",
      label: returnFunction()
    }, _react["default"].createElement("input", {
      "aria-label": "label"
    }), _react["default"].createElement("input", {
      id: "id"
    }), _react["default"].createElement("input", null)));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=FormGroup.test.js.map