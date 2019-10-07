import React, { Fragment } from 'react';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';
import { AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
let arr = new Array(100)

const MyLink = () => (
  <a href="http://localhost:3000/prev">
   Link to Current Version
  </a>
)
export default class NavContainer extends React.Component {
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

  scrollLeft = () => {
    this.state.activeTabKey !== 0 && this.setState(previousState => (
      { activeTabKey: previousState.activeTabKey - 1 }
    ))
  }

  scrollRight = () => {
    this.state.activeTabKey !== 11 && this.setState(previousState => (
      { activeTabKey: previousState.activeTabKey + 1 }
    ))
  }

  render() {
    return (
      <Fragment>
          <h1>Proposed Version</h1>
        <MyLink/>
        <br />
        <div style={{ display: 'block', alignItems: 'center' }}>

          <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick} leftScrollAriaLabel="scrollLeft" rightScrollAriaLabel="right">
            <Tab onClick={this.scrollLeft} title={<AngleLeftIcon />} />

            <Tab eventKey={0} title="Tab item 1">
              Tab 1 section
        </Tab>
            <Tab eventKey={1} title="Tab item 2">
              Tab 2 section
        </Tab>
            <Tab eventKey={2} title="Tab item 3">
              Tab 3 section
        </Tab>
            <Tab eventKey={3} title="Tab item 4">
              Tab 4 section
        </Tab>
            <Tab eventKey={4} title="Tab item 5">
              Tab 5 section
        </Tab>
            <Tab eventKey={5} title="Tab item 6">
              Tab 6 section
        </Tab>
            <Tab eventKey={6} title="Tab item 7">
              Tab 7 section
        </Tab>
            <Tab eventKey={7} title="Tab item 8">
              Tab 8 section
        </Tab>
            <Tab eventKey={8} title="Tab item 9">
              Tab 9 section
        </Tab>
            <Tab eventKey={9} title="Tab item 10">
              Tab 10 section
        </Tab>
            <Tab eventKey={10} title="Tab item 11">
              Tab 11 section
        </Tab>
            <Tab eventKey={11} title="Tab item 12">
              Tab 12 section
        </Tab>
            <Tab onClick={this.scrollRight} title={<AngleRightIcon />} />
          </Tabs>

        </div>
        <br />
        <Tabs
          activeKey={this.state.activeTabKey}
          onSelect={this.handleTabClick}
          aria-label="Local"
          variant={TabsVariant.nav}
        >
          <Tab eventKey={0} title="Tab item 1" href="#">
            Tab 1 section
        </Tab>
          <Tab eventKey={1} title="Tab item 2" href="#">
            Tab 2 section
        </Tab>
          <Tab eventKey={2} title="Tab item 3" href="#">
            Tab 3 section
        </Tab>
        </Tabs>
      </Fragment>
    );
  }
}

