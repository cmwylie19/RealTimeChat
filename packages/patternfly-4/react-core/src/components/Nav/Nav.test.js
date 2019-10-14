"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Nav_1 = require("./Nav");
var NavList_1 = require("./NavList");
var NavGroup_1 = require("./NavGroup");
var NavItem_1 = require("./NavItem");
var NavExpandable_1 = require("./NavExpandable");
var props = {
    items: [
        { to: '#link1', label: 'Link 1' },
        { to: '#link2', label: 'Link 2' },
        { to: '#link3', label: 'Link 3' },
        { to: '#link4', label: 'Link 4' }
    ]
};
beforeEach(function () {
    window.location.hash = '#link1';
});
var context = {
    onSelect: function () { return undefined; },
    onToggle: function () { return undefined; }
};
test('Default Nav List', function () {
    var view = enzyme_1.mount(<Nav_1.Nav className="test=nav-class">
      <NavList_1.NavList className="test-nav-list-class">
        {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to} className="test-nav-item-class">
            {item.label}
          </NavItem_1.NavItem>); })}
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Dark Nav List', function () {
    var view = enzyme_1.mount(<Nav_1.Nav className="test=nav-class" theme="dark">
      <NavList_1.NavList className="test-nav-list-class">
        {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to} className="test-nav-item-class">
            {item.label}
          </NavItem_1.NavItem>); })}
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Default Nav List - Trigger item active update', function () {
    window.location.hash = '#link2';
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavList_1.NavList>
        {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem_1.NavItem>); })}
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    view
        .find({ href: '#link2' })
        .first()
        .simulate('click');
    expect(view).toMatchSnapshot();
});
test('Simple Nav List', function () {
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavList_1.NavList variant="simple">
        {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem_1.NavItem>); })}
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Expandable Nav List', function () {
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavList_1.NavList>
        <NavExpandable_1.NavExpandable id="grp-1" title="Section 1">
          {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem_1.NavItem>); })}
        </NavExpandable_1.NavExpandable>
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Expandable Nav List - Trigger toggle', function () {
    window.location.hash = '#link2';
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavList_1.NavList>
        <NavExpandable_1.NavExpandable id="grp-1" title="Section 1" className="expandable-group" isExpanded>
          {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem_1.NavItem>); })}
        </NavExpandable_1.NavExpandable>
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    view
        .find('li.expandable-group')
        .first()
        .simulate('click');
    expect(view).toMatchSnapshot();
});
test('Expandable Nav List with aria label', function () {
    var view = enzyme_1.mount(<Nav_1.Nav aria-label="Test">
      <NavList_1.NavList>
        <NavExpandable_1.NavExpandable id="grp-1" title="Section 1" srText="Section 1 - Example sub-navigation">
          {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem_1.NavItem>); })}
        </NavExpandable_1.NavExpandable>
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Nav Grouped List', function () {
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavGroup_1.NavGroup id="grp-1" title="Section 1">
        <NavList_1.NavList>
          {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={"section1_" + item.to}>
              {item.label}
            </NavItem_1.NavItem>); })}
        </NavList_1.NavList>
      </NavGroup_1.NavGroup>
      <NavGroup_1.NavGroup id="grp-2" title="Section 2">
        <NavList_1.NavList>
          {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={"section2_" + item.to}>
              {item.label}
            </NavItem_1.NavItem>); })}
        </NavList_1.NavList>
      </NavGroup_1.NavGroup>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Horizontal Nav List', function () {
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavList_1.NavList variant="horizontal">
        {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem_1.NavItem>); })}
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Tertiary Nav List', function () {
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavList_1.NavList variant="tertiary">
        {props.items.map(function (item) { return (<NavItem_1.NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem_1.NavItem>); })}
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
test('Nav List with custom item nodes', function () {
    var view = enzyme_1.mount(<Nav_1.Nav>
      <NavList_1.NavList variant="tertiary">
        <NavItem_1.NavItem to="/components/nav#link1" className="test-nav-item-class">
          <div className="my-custom-node">My custom node</div>
        </NavItem_1.NavItem>
      </NavList_1.NavList>
    </Nav_1.Nav>, { context: context });
    expect(view).toMatchSnapshot();
});
