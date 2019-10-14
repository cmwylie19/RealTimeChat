"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
describe('ChipGroup', function () {
    test('chip group default', function () {
        var view = enzyme_1.shallow(<index_1.ChipGroup>
        <index_1.Chip>1.1</index_1.Chip>
      </index_1.ChipGroup>);
        expect(view).toMatchSnapshot();
    });
    test('chip group with toolbar', function () {
        var view = enzyme_1.shallow(<index_1.ChipGroup withToolbar>
        <index_1.ChipGroupToolbarItem>
          <index_1.Chip>1.1</index_1.Chip>
        </index_1.ChipGroupToolbarItem>
      </index_1.ChipGroup>);
        expect(view).toMatchSnapshot();
    });
    test('chip group expanded', function () {
        var view = enzyme_1.mount(<index_1.ChipGroup>
        <index_1.Chip>1</index_1.Chip>
        <index_1.Chip>2</index_1.Chip>
        <index_1.Chip>3</index_1.Chip>
        <index_1.Chip>4</index_1.Chip>
      </index_1.ChipGroup>);
        var overflowButton = view.find('.pf-m-overflow .pf-c-chip__text');
        expect(overflowButton.text()).toBe('1 more');
        overflowButton.simulate('click');
        expect(overflowButton.text()).toBe('Show Less');
    });
    test('chip group will not render if no children passed', function () {
        var view = enzyme_1.shallow(<index_1.ChipGroup />);
        expect(view.html()).toBeNull();
    });
});
