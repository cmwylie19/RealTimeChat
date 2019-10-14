import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

class SimpleToolbar extends React.Component {
  render() {
    return React.createElement(Toolbar, null, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 2"), React.createElement(ToolbarItem, null, "Item 3")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 4")));
  }

}

export default SimpleToolbar;
//# sourceMappingURL=SimpleToolbar.js.map