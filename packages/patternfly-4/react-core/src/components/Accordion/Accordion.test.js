"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var Accordion_1 = require("./Accordion");
var AccordionToggle_1 = require("./AccordionToggle");
var AccordionContent_1 = require("./AccordionContent");
var AccordionItem_1 = require("./AccordionItem");
describe('Accordion', function () {
    test('Accordion default', function () {
        var view = enzyme_1.shallow(<Accordion_1.Accordion aria-label="this is a simple accordion"/>);
        expect(view.render()).toMatchSnapshot();
    });
    test('Accordion with non-default headingLevel', function () {
        var view = enzyme_1.shallow(<Accordion_1.Accordion asDefinitionList={false} headingLevel="h2">
        <AccordionItem_1.AccordionItem>
          <AccordionToggle_1.AccordionToggle id="item-1">Item One</AccordionToggle_1.AccordionToggle>
          <AccordionContent_1.AccordionContent>Item One Content</AccordionContent_1.AccordionContent>
        </AccordionItem_1.AccordionItem>
      </Accordion_1.Accordion>);
        expect(view.render()).toMatchSnapshot();
    });
    test('It should pass optional aria props', function () {
        var view = enzyme_1.mount(<Accordion_1.Accordion asDefinitionList>
        <AccordionToggle_1.AccordionToggle aria-label="Toggle details for" aria-labelledby="ex-toggle2 ex-item2" id="ex-toggle2"/>
      </Accordion_1.Accordion>);
        var button = view.find('button[id="ex-toggle2"]').getElement();
        expect(button.props['aria-label']).toBe('Toggle details for');
        expect(button.props['aria-labelledby']).toBe('ex-toggle2 ex-item2');
        expect(button.props['aria-expanded']).toBe(false);
    });
    test('Toggle expanded', function () {
        var view = enzyme_1.mount(<Accordion_1.Accordion asDefinitionList>
        <AccordionToggle_1.AccordionToggle aria-label="Toggle details for" id="ex-toggle2" isExpanded/>
      </Accordion_1.Accordion>);
        var button = view.find('button[id="ex-toggle2"]').getElement();
        expect(button.props['aria-expanded']).toBe(true);
        expect(button.props.className).toContain('pf-m-expanded');
    });
    test('Custom containers', function () {
        var container = 'a';
        var view = enzyme_1.mount(<Accordion_1.Accordion headingLevel="h2">
        <AccordionItem_1.AccordionItem>
          <AccordionToggle_1.AccordionToggle id="item-1" component={container}>Item One</AccordionToggle_1.AccordionToggle>
          <AccordionContent_1.AccordionContent component={container}>Item One Content</AccordionContent_1.AccordionContent>
        </AccordionItem_1.AccordionItem>
      </Accordion_1.Accordion>);
        expect(view.find(AccordionToggle_1.AccordionToggle).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
        expect(view.find(AccordionContent_1.AccordionContent).getDOMNode().tagName).toBe(container.toLocaleUpperCase());
    });
});
