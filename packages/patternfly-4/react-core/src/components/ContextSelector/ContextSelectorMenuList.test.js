"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ContextSelectorItem_1 = require("./ContextSelectorItem");
var ContextSelectorMenuList_1 = require("./ContextSelectorMenuList");
var items = [
    <ContextSelectorItem_1.ContextSelectorItem key="0">My Project</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="2">Production Ansible</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="3">AWS</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="4">Azure</ContextSelectorItem_1.ContextSelectorItem>
];
test('Renders ContextSelectorMenuList open', function () {
    var view = enzyme_1.shallow(<ContextSelectorMenuList_1.ContextSelectorMenuList isOpen={false}>
      {items}
    </ContextSelectorMenuList_1.ContextSelectorMenuList>);
    expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorMenuList closed', function () {
    var view = enzyme_1.shallow(<ContextSelectorMenuList_1.ContextSelectorMenuList isOpen={false}>
      {items}
    </ContextSelectorMenuList_1.ContextSelectorMenuList>);
    expect(view).toMatchSnapshot();
});
