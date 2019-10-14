(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Accordion", "./AccordionToggle", "./AccordionContent", "./AccordionItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Accordion"), require("./AccordionToggle"), require("./AccordionContent"), require("./AccordionItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Accordion, global.AccordionToggle, global.AccordionContent, global.AccordionItem);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Accordion, _AccordionToggle, _AccordionContent, _AccordionItem) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Accordion', () => {
    test('Accordion default', () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_Accordion.Accordion, {
        "aria-label": "this is a simple accordion"
      }));
      expect(view.render()).toMatchSnapshot();
    });
    test('Accordion with non-default headingLevel', () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_Accordion.Accordion, {
        asDefinitionList: false,
        headingLevel: "h2"
      }, _react2.default.createElement(_AccordionItem.AccordionItem, null, _react2.default.createElement(_AccordionToggle.AccordionToggle, {
        id: "item-1"
      }, "Item One"), _react2.default.createElement(_AccordionContent.AccordionContent, null, "Item One Content"))));
      expect(view.render()).toMatchSnapshot();
    });
    test('It should pass optional aria props', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_Accordion.Accordion, {
        asDefinitionList: true
      }, _react2.default.createElement(_AccordionToggle.AccordionToggle, {
        "aria-label": "Toggle details for",
        "aria-labelledby": "ex-toggle2 ex-item2",
        id: "ex-toggle2"
      })));
      const button = view.find('button[id="ex-toggle2"]').getElement();
      expect(button.props['aria-label']).toBe('Toggle details for');
      expect(button.props['aria-labelledby']).toBe('ex-toggle2 ex-item2');
      expect(button.props['aria-expanded']).toBe(false);
    });
    test('Toggle expanded', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_Accordion.Accordion, {
        asDefinitionList: true
      }, _react2.default.createElement(_AccordionToggle.AccordionToggle, {
        "aria-label": "Toggle details for",
        id: "ex-toggle2",
        isExpanded: true
      })));
      const button = view.find('button[id="ex-toggle2"]').getElement();
      expect(button.props['aria-expanded']).toBe(true);
      expect(button.props.className).toContain('pf-m-expanded');
    });
    test('Custom containers', () => {
      const container = 'a';
      const view = (0, _enzyme.mount)(_react2.default.createElement(_Accordion.Accordion, {
        headingLevel: "h2"
      }, _react2.default.createElement(_AccordionItem.AccordionItem, null, _react2.default.createElement(_AccordionToggle.AccordionToggle, {
        id: "item-1",
        component: container
      }, "Item One"), _react2.default.createElement(_AccordionContent.AccordionContent, {
        component: container
      }, "Item One Content"))));
      expect(view.find(_AccordionToggle.AccordionToggle).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
      expect(view.find(_AccordionContent.AccordionContent).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
    });
  });
});
//# sourceMappingURL=Accordion.test.js.map