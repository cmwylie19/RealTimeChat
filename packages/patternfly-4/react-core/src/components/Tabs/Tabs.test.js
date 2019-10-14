"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var Tabs_1 = require("./Tabs");
var Tab_1 = require("./Tab");
test('should render simple tabs', function () {
    var view = enzyme_1.render(<Tabs_1.Tabs id="simpleTabs">
      <Tab_1.Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab4" eventKey={3} title={<b>
            Tab item <i>4</i>
          </b>}>
        Tab 4 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    expect(view).toMatchSnapshot();
});
test('should render accessible tabs', function () {
    var view = enzyme_1.render(<Tabs_1.Tabs id="accessibleTabs" aria-label="accessible Tabs example" variant="nav">
      <Tab_1.Tab id="tab1" eventKey={0} title="Tab item 1" href="#/items/1">
        Tab 1 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={1} title="Tab item 2" href="#/items/2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={2} title="Tab item 3" href="#/items/3">
        Tab 3 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    expect(view).toMatchSnapshot();
});
test('should render filled tabs', function () {
    var view = enzyme_1.render(<Tabs_1.Tabs id="filledTabs" isFilled>
      <Tab_1.Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    expect(view).toMatchSnapshot();
});
test('should render secondary tabs', function () {
    var view = enzyme_1.render(<Tabs_1.Tabs id="primarieTabs">
      <Tab_1.Tab eventKey={0} title="Tab item 1">
        <Tabs_1.Tabs id="secondaryTabs">
          <Tab_1.Tab id="secondary tab1" eventKey={10} title="Secondary Tab 1">
            Secondary Tab 1 section
          </Tab_1.Tab>
          <Tab_1.Tab id="secondary tab2" eventKey={11} title="Secondary Tab 2">
            Secondary Tab 2 section
          </Tab_1.Tab>
          <Tab_1.Tab id="secondary tab3" eventKey={12} title="Secondary Tab 3">
            Secondary Tab 3 section
          </Tab_1.Tab>
        </Tabs_1.Tabs>
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    expect(view).toMatchSnapshot();
});
test('should call scrollLeft tabs with scrolls', function () {
    var view = enzyme_1.mount(<Tabs_1.Tabs id="scrollLeft" isFilled>
      <Tab_1.Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    view
        .find('.pf-c-tabs__scroll-button')
        .first()
        .simulate('click');
    expect(view).toMatchSnapshot();
});
test('should call scrollRight tabs with scrolls', function () {
    var view = enzyme_1.mount(<Tabs_1.Tabs id="scrollRight" isFilled>
      <Tab_1.Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    view
        .find('.pf-c-tabs__scroll-button')
        .last()
        .simulate('click');
    expect(view).toMatchSnapshot();
});
test('should call handleScrollButtons tabs with scrolls', function () {
    var view = enzyme_1.mount(<Tabs_1.Tabs id="handleScrollButtons" isFilled>
      <Tab_1.Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    view.simulate('scroll');
    expect(view).toMatchSnapshot();
});
test('should render tabs with eventKey Strings', function () {
    var view = enzyme_1.render(<Tabs_1.Tabs id="eventKeyTabs">
      <Tab_1.Tab id="tab1" eventKey={'one'} title="Tab item 1">
        Tab 1 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab2" eventKey={'two'} title="Tab item 2">
        Tab 2 section
      </Tab_1.Tab>
      <Tab_1.Tab id="tab3" eventKey={'three'} title="Tab item 3">
        Tab 3 section
      </Tab_1.Tab>
    </Tabs_1.Tabs>);
    expect(view).toMatchSnapshot();
});
