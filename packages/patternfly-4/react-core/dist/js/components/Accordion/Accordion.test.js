"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Accordion = require("./Accordion");

var _AccordionToggle = require("./AccordionToggle");

var _AccordionContent = require("./AccordionContent");

var _AccordionItem = require("./AccordionItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Accordion', function () {
  test('Accordion default', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Accordion.Accordion, {
      "aria-label": "this is a simple accordion"
    }));
    expect(view.render()).toMatchSnapshot();
  });
  test('Accordion with non-default headingLevel', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Accordion.Accordion, {
      asDefinitionList: false,
      headingLevel: "h2"
    }, _react["default"].createElement(_AccordionItem.AccordionItem, null, _react["default"].createElement(_AccordionToggle.AccordionToggle, {
      id: "item-1"
    }, "Item One"), _react["default"].createElement(_AccordionContent.AccordionContent, null, "Item One Content"))));
    expect(view.render()).toMatchSnapshot();
  });
  test('It should pass optional aria props', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Accordion.Accordion, {
      asDefinitionList: true
    }, _react["default"].createElement(_AccordionToggle.AccordionToggle, {
      "aria-label": "Toggle details for",
      "aria-labelledby": "ex-toggle2 ex-item2",
      id: "ex-toggle2"
    })));
    var button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-label']).toBe('Toggle details for');
    expect(button.props['aria-labelledby']).toBe('ex-toggle2 ex-item2');
    expect(button.props['aria-expanded']).toBe(false);
  });
  test('Toggle expanded', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Accordion.Accordion, {
      asDefinitionList: true
    }, _react["default"].createElement(_AccordionToggle.AccordionToggle, {
      "aria-label": "Toggle details for",
      id: "ex-toggle2",
      isExpanded: true
    })));
    var button = view.find('button[id="ex-toggle2"]').getElement();
    expect(button.props['aria-expanded']).toBe(true);
    expect(button.props.className).toContain('pf-m-expanded');
  });
  test('Custom containers', function () {
    var container = 'a';
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Accordion.Accordion, {
      headingLevel: "h2"
    }, _react["default"].createElement(_AccordionItem.AccordionItem, null, _react["default"].createElement(_AccordionToggle.AccordionToggle, {
      id: "item-1",
      component: container
    }, "Item One"), _react["default"].createElement(_AccordionContent.AccordionContent, {
      component: container
    }, "Item One Content"))));
    expect(view.find(_AccordionToggle.AccordionToggle).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
    expect(view.find(_AccordionContent.AccordionContent).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
  });
});
//# sourceMappingURL=Accordion.test.js.map