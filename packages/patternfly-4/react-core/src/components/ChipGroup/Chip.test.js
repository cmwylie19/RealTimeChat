"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ChipButton_1 = require("./ChipButton");
var Chip_1 = require("./Chip");
test('ChipButton', function () {
    var view = enzyme_1.shallow(<ChipButton_1.ChipButton id="my-chip-button" className="chip-bttn-cls">
      <b>Close</b>
    </ChipButton_1.ChipButton>);
    expect(view).toMatchSnapshot();
});
describe('Chip', function () {
    test('overflow', function () {
        var view = enzyme_1.shallow(<Chip_1.Chip className="my-chp-cls" isOverflowChip>
        4 more
      </Chip_1.Chip>);
        expect(view).toMatchSnapshot();
    });
    test('closable', function () {
        var view = enzyme_1.shallow(<Chip_1.Chip className="my-chp-cls" id="chip_one">
        Chip
      </Chip_1.Chip>);
        expect(view).toMatchSnapshot();
    });
    test('closable with tooltip', function () {
        var view = enzyme_1.shallow(<Chip_1.Chip className="my-chp-cls" id="chip_one">
        1234567890123456789
      </Chip_1.Chip>);
        expect(view).toMatchSnapshot();
    });
    test('readonly', function () {
        var view = enzyme_1.shallow(<Chip_1.Chip className="my-chp-cls" isReadOnly>
        4 more
      </Chip_1.Chip>);
        expect(view).toMatchSnapshot();
    });
});
