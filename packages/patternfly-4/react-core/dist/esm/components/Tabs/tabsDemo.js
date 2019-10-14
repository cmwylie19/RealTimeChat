import React, { Component, Fragment } from 'react';
import { Tabs, Tab, TabsVariant } from '@patternfly/react-core';
export default class TabsNavVariant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    }; // Toggle currently active tab

    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return React.createElement(Fragment, null, React.createElement(Tabs, {
      activeKey: this.state.activeTabKey,
      onSelect: this.handleTabClick,
      "aria-label": "Local",
      variant: TabsVariant.nav
    }, React.createElement(Tab, {
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"), React.createElement(Tab, {
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), React.createElement(Tab, {
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section"), React.createElement(Tab, {
      eventKey: 3,
      title: "Tab item 4"
    }, "Tab 4 section"), React.createElement(Tab, {
      eventKey: 4,
      title: "Tab item 5"
    }, "Tab 5 section"), React.createElement(Tab, {
      eventKey: 5,
      title: "Tab item 6"
    }, "Tab 6 section"), React.createElement(Tab, {
      eventKey: 6,
      title: "Tab item 7"
    }, "Tab 7 section"), React.createElement(Tab, {
      eventKey: 7,
      title: "Tab item 8"
    }, "Tab 8 section"), React.createElement(Tab, {
      eventKey: 8,
      title: "Tab item 9"
    }, "Tab 9 section"), React.createElement(Tab, {
      eventKey: 9,
      title: "Tab item 10"
    }, "Tab 10 section"), React.createElement(Tab, {
      eventKey: 10,
      title: "Tab item 11"
    }, "Tab 11 section"), React.createElement(Tab, {
      eventKey: 11,
      title: "Tab item 12"
    }, "Tab 12 section")), React.createElement("br", null), React.createElement(Tabs, {
      activeKey: this.state.activeTabKey,
      onSelect: this.handleTabClick,
      "aria-label": "Local",
      variant: TabsVariant.nav
    }, React.createElement(Tab, {
      eventKey: 0,
      title: "Tab item 1"
    }, "Tab 1 section"), React.createElement(Tab, {
      eventKey: 1,
      title: "Tab item 2"
    }, "Tab 2 section"), React.createElement(Tab, {
      eventKey: 2,
      title: "Tab item 3"
    }, "Tab 3 section")));
  }

}
//# sourceMappingURL=tabsDemo.js.map