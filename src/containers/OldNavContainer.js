import React, { Fragment } from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';
import { AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
let arr = new Array(100)

const MyLink = () => (
  <a href="http://localhost:3000/nav">
    Link to Proposed Version
  </a>
)
export default class OldNavContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };

    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Current Version</h1>
         <MyLink />
         <br />
         <Tabs
        activeKey={this.state.activeTabKey}
        onSelect={this.handleTabClick}
        aria-label="Local"
        variant={TabsVariant.nav}
      >
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
            </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
            </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
            </Tab>
      </Tabs>
      </Fragment>
      
    );
  }
}