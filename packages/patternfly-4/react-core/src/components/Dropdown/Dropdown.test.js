"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Dropdown_1 = require("./Dropdown");
var dropdownConstants_1 = require("./dropdownConstants");
var InternalDropdownItem_1 = require("./InternalDropdownItem");
var Separator_1 = require("./Separator");
var DropdownToggle_1 = require("./DropdownToggle");
var KebabToggle_1 = require("./KebabToggle");
var dropdownItems = [
    <InternalDropdownItem_1.InternalDropdownItem key="link">Link</InternalDropdownItem_1.InternalDropdownItem>,
    <InternalDropdownItem_1.InternalDropdownItem key="action" component="button">
    Action
  </InternalDropdownItem_1.InternalDropdownItem>,
    <InternalDropdownItem_1.InternalDropdownItem key="disabled link" isDisabled>
    Disabled Link
  </InternalDropdownItem_1.InternalDropdownItem>,
    <InternalDropdownItem_1.InternalDropdownItem key="disabled action" isDisabled component="button">
    Disabled Action
  </InternalDropdownItem_1.InternalDropdownItem>,
    <Separator_1.DropdownSeparator key="separator"/>,
    <InternalDropdownItem_1.InternalDropdownItem key="separated link">Separated Link</InternalDropdownItem_1.InternalDropdownItem>,
    <InternalDropdownItem_1.InternalDropdownItem key="separated action" component="button">
    Separated Action
  </InternalDropdownItem_1.InternalDropdownItem>
];
describe('dropdown', function () {
    test('regular', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        expect(view).toMatchSnapshot();
    });
    test('right aligned', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} position={dropdownConstants_1.DropdownPosition.right} toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        expect(view).toMatchSnapshot();
    });
    test('dropup', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} direction={dropdownConstants_1.DropdownDirection.up} toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} direction={dropdownConstants_1.DropdownDirection.up} position={dropdownConstants_1.DropdownPosition.right} toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        expect(view).toMatchSnapshot();
    });
    test('expanded', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} isOpen toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        expect(view).toMatchSnapshot();
    });
    test('primary', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle" isPrimary>Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        expect(view).toMatchSnapshot();
    });
    test('basic', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown isOpen toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}>
        <div>BASIC</div>
      </Dropdown_1.Dropdown>);
        expect(view).toMatchSnapshot();
    });
});
describe('KebabToggle', function () {
    test('regular', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} toggle={<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>}/>);
        expect(view).toMatchSnapshot();
    });
    test('right aligned', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} position={dropdownConstants_1.DropdownPosition.right} toggle={<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>}/>);
        expect(view).toMatchSnapshot();
    });
    test('dropup', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} direction={dropdownConstants_1.DropdownDirection.up} toggle={<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>}/>);
        expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} direction={dropdownConstants_1.DropdownDirection.up} position={dropdownConstants_1.DropdownPosition.right} toggle={<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>}/>);
        expect(view).toMatchSnapshot();
    });
    test('expanded', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} isOpen toggle={<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>}/>);
        expect(view).toMatchSnapshot();
    });
    test('plain', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} isPlain toggle={<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>}/>);
        expect(view).toMatchSnapshot();
    });
    test('basic', function () {
        var view = enzyme_1.mount(<Dropdown_1.Dropdown isOpen toggle={<KebabToggle_1.KebabToggle id="Dropdown Toggle"/>}>
        <div>BASIC</div>
      </Dropdown_1.Dropdown>);
        expect(view).toMatchSnapshot();
    });
});
describe('API', function () {
    test('click on item', function () {
        var mockToggle = jest.fn();
        var mockSelect = jest.fn();
        var view = enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} onSelect={mockSelect} isOpen toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        view
            .find('a')
            .first()
            .simulate('click');
        expect(mockToggle.mock.calls).toHaveLength(0);
        expect(mockSelect.mock.calls).toHaveLength(1);
    });
    test('dropdownItems and children console error ', function () {
        expect(function () { return enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} isOpen toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}>
        <div>Children items</div>
      </Dropdown_1.Dropdown>); }).toThrowError();
    });
    test('dropdownItems only, no console error ', function () {
        var myMock = jest.fn();
        global.console = { error: myMock };
        enzyme_1.mount(<Dropdown_1.Dropdown dropdownItems={dropdownItems} isOpen toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}/>);
        expect(myMock).not.toBeCalled();
    });
    test('children only, no console ', function () {
        var myMock = jest.fn();
        global.console = { error: myMock };
        enzyme_1.mount(<Dropdown_1.Dropdown isOpen toggle={<DropdownToggle_1.DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle_1.DropdownToggle>}>
        <div>Children items</div>
      </Dropdown_1.Dropdown>);
        expect(myMock).not.toBeCalled();
    });
});
