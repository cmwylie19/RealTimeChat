"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Select_1 = require("./Select");
var SelectOption_1 = require("./SelectOption");
var CheckboxSelectOption_1 = require("./CheckboxSelectOption");
var SelectGroup_1 = require("./SelectGroup");
var CheckboxSelectGroup_1 = require("./CheckboxSelectGroup");
var selectConstants_1 = require("./selectConstants");
var User = /** @class */ (function () {
    function User(title, firstName, lastName) {
        var _this = this;
        this.toString = function () { return _this.title + ": " + _this.firstName + " " + _this.lastName; };
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
var selectOptions = [
    <SelectOption_1.SelectOption value="Mr" key="0"/>,
    <SelectOption_1.SelectOption value="Mrs" key="1"/>,
    <SelectOption_1.SelectOption value="Ms" key="2"/>,
    <SelectOption_1.SelectOption value="Other" key="3"/>
];
var checkboxSelectOptions = [
    <CheckboxSelectOption_1.CheckboxSelectOption value="Mr" key="0"/>,
    <CheckboxSelectOption_1.CheckboxSelectOption value="Mrs" key="1"/>,
    <CheckboxSelectOption_1.CheckboxSelectOption value="Ms" key="2"/>,
    <CheckboxSelectOption_1.CheckboxSelectOption value="Other" key="3"/>
];
var selectOptionsCustom = [
    <SelectOption_1.SelectOption value={new User('Mr', 'User', 'One')} key="0"/>,
    <SelectOption_1.SelectOption value={new User('Mrs', 'New', 'User')} key="1"/>,
    <SelectOption_1.SelectOption value={new User('Ms', 'Test', 'Three')} key="2"/>
];
describe('select', function () {
    describe('single select', function () {
        test('renders closed successfully', function () {
            var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()}>
          {selectOptions}
        </Select_1.Select>);
            expect(view).toMatchSnapshot();
        });
        test('renders disabled successfully', function () {
            var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isDisabled>
          {selectOptions}
        </Select_1.Select>);
            expect(view).toMatchSnapshot();
        });
        test('renders expanded successfully', function () {
            var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
          {selectOptions}
        </Select_1.Select>);
            expect(view).toMatchSnapshot();
        });
        test('renders expanded successfully with custom objects', function () {
            var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
          {selectOptionsCustom}
        </Select_1.Select>);
            expect(view).toMatchSnapshot();
        });
    });
    test('renders up drection successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.single} direction={selectConstants_1.SelectDirection.up} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    describe('custom select filter', function () {
        test('filters properly', function () {
            var customFilter = function (e) {
                var input;
                try {
                    input = new RegExp(e.target.value, 'i');
                }
                catch (err) {
                    input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                }
                var typeaheadFilteredChildren = e.target.value !== ''
                    ? selectOptions.filter(function (child) { return input.test(child.props.value); })
                    : selectOptions;
                return typeaheadFilteredChildren;
            };
            var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} onFilter={customFilter} isExpanded>
          {selectOptions}
        </Select_1.Select>);
            view.find('input').simulate('change', { target: { value: 'r' } });
            view.update();
            expect(view.state('typeaheadFilteredChildren').length).toBe(3);
            expect(view).toMatchSnapshot();
        });
    });
    test('renders select groups successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded isGrouped>
        <SelectGroup_1.SelectGroup label="group 1">{selectOptions}</SelectGroup_1.SelectGroup>
        <SelectGroup_1.SelectGroup label="group 2">{selectOptions}</SelectGroup_1.SelectGroup>
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
});
describe('checkbox select', function () {
    test('renders closed successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders closed successfully - old classes', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()}>
        {checkboxSelectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully - old classes', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {checkboxSelectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully with custom objects', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptionsCustom}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders checkbox select groups successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded isGrouped>
        <SelectGroup_1.SelectGroup label="group 1">{selectOptions}</SelectGroup_1.SelectGroup>
        <SelectGroup_1.SelectGroup label="group 2">{selectOptions}</SelectGroup_1.SelectGroup>
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders checkbox select groups successfully - old classes', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded isGrouped>
        <CheckboxSelectGroup_1.CheckboxSelectGroup label="group 1">{checkboxSelectOptions}</CheckboxSelectGroup_1.CheckboxSelectGroup>
        <CheckboxSelectGroup_1.CheckboxSelectGroup label="group 2">{checkboxSelectOptions}</CheckboxSelectGroup_1.CheckboxSelectGroup>
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
});
describe('typeahead select', function () {
    test('renders closed successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders selected successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeahead} selections="Mr" onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('test onChange', function () {
        var mockEvent = { target: { value: 'test' } };
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} onClear={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        var inst = view.instance();
        inst.onChange(mockEvent);
        view.update();
        expect(view).toMatchSnapshot();
    });
    test('test creatable option', function () {
        var mockEvent = { target: { value: 'test' } };
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeahead} onToggle={jest.fn()} isExpanded isCreatable>
        {selectOptions}
      </Select_1.Select>);
        var inst = view.instance();
        inst.onChange(mockEvent);
        view.update();
        expect(view).toMatchSnapshot();
    });
});
describe('typeahead multi select', function () {
    test('renders closed successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('renders selected successfully', function () {
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeaheadMulti} selections={['Mr', 'Mrs']} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        expect(view).toMatchSnapshot();
    });
    test('test onChange', function () {
        var mockEvent = { target: { value: 'test' } };
        var view = enzyme_1.mount(<Select_1.Select variant={selectConstants_1.SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} onClear={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        var inst = view.instance();
        inst.onChange(mockEvent);
        view.update();
        expect(view).toMatchSnapshot();
    });
});
describe('API', function () {
    test('click on item', function () {
        var mockToggle = jest.fn();
        var mockSelect = jest.fn();
        var view = enzyme_1.mount(<Select_1.Select variant="single" onToggle={mockToggle} onSelect={mockSelect} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        view
            .find('button')
            .at(1)
            .simulate('click');
        expect(mockToggle.mock.calls).toHaveLength(0);
        expect(mockSelect.mock.calls).toHaveLength(1);
    });
    test('children only, no console error', function () {
        var myMock = jest.fn();
        global.console = __assign(__assign({}, global.console), { error: myMock });
        enzyme_1.mount(<Select_1.Select variant="single" onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select_1.Select>);
        expect(myMock).not.toBeCalled();
    });
});
describe('toggle icon', function () {
    var ToggleIcon = <div>Icon</div>;
    test('select single', function () {
        var view = enzyme_1.mount(<Select_1.Select toggleIcon={ToggleIcon} variant={selectConstants_1.SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
    test('select checkbox', function () {
        var view = enzyme_1.mount(<Select_1.Select toggleIcon={ToggleIcon} variant={selectConstants_1.SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
    test('typeahead select', function () {
        var view = enzyme_1.mount(<Select_1.Select toggleIcon={ToggleIcon} variant={selectConstants_1.SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
    test('typeahead multi select', function () {
        var view = enzyme_1.mount(<Select_1.Select toggleIcon={ToggleIcon} variant={selectConstants_1.SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select_1.Select>);
        expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
});
