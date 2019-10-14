"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Tooltip_1 = require("./Tooltip");
test('tooltip renders', function () {
    var view = enzyme_1.shallow(<Tooltip_1.Tooltip position="top" content={<div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>}>
      <div>Toggle tooltip</div>
    </Tooltip_1.Tooltip>);
    expect(view).toMatchSnapshot();
});
test('tooltip passes along values to tippy.js', function () {
    var view = enzyme_1.shallow(<Tooltip_1.Tooltip position="top" content={<div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>} tippyProps={{
        duration: [200, 200],
        offset: 20
    }}>
      <div>Tippy Props Test</div>
    </Tooltip_1.Tooltip>);
    expect(view).toMatchSnapshot();
});
