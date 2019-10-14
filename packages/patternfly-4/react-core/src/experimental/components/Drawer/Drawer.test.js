"use strict";
exports.__esModule = true;
var _1 = require("./");
var react_1 = require("react");
var enzyme_1 = require("enzyme");
Object.values([
    { isExpanded: true, isInline: false },
    { isExpanded: false, isInline: false },
    { isExpanded: true, isInline: true },
    { isExpanded: false, isInline: true }
]).forEach(function (_a) {
    var isExpanded = _a.isExpanded, isInline = _a.isInline;
    var drawerContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';
    test("Drawer isExpanded = " + isExpanded + " and isInline = " + isInline, function () {
        var view = enzyme_1.mount(<_1.Drawer isExpanded={isExpanded} isInline={isInline}>
        <_1.DrawerContent>{drawerContent}</_1.DrawerContent>
        <_1.DrawerPanelContent> drawer-panel </_1.DrawerPanelContent>
      </_1.Drawer>);
        expect(view).toMatchSnapshot();
    });
});
