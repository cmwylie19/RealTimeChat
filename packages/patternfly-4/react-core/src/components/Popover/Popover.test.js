"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Popover_1 = require("./Popover");
test('popover renders close-button, header and body', function () {
    var view = enzyme_1.shallow(<Popover_1.Popover position="top" isVisible hideOnOutsideClick headerContent={<div>Popover Header</div>} bodyContent={<div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>}>
      <div>Toggle Popover</div>
    </Popover_1.Popover>);
    expect(view).toMatchSnapshot();
});
test('popover can specify position as object value', function () {
    var view = enzyme_1.shallow(<Popover_1.Popover position={Popover_1.PopoverPosition.right} isVisible hideOnOutsideClick headerContent={<div>Popover Header</div>} bodyContent={<div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>}>
      <div>Toggle Popover</div>
    </Popover_1.Popover>);
    expect(view).toMatchSnapshot();
});
test('popover passes along values to tippy.js', function () {
    var view = enzyme_1.shallow(<Popover_1.Popover position={Popover_1.PopoverPosition.right} isVisible hideOnOutsideClick headerContent={<div>Popover Header</div>} bodyContent={<div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>} tippyProps={{
        duration: [200, 200],
        offset: 20
    }}>
      <div>Tippy Props Test</div>
    </Popover_1.Popover>);
    expect(view).toMatchSnapshot();
});
