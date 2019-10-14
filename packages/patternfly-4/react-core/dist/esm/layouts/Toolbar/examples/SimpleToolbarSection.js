import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSection, ToolbarItem } from '@patternfly/react-core';

class SimpleToolbarSection extends React.Component {
  render() {
    return React.createElement(Toolbar, null, React.createElement(ToolbarSection, {
      "aria-label": "First section"
    }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 1")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 2"), React.createElement(ToolbarItem, null, "Item 3"))), React.createElement(ToolbarSection, {
      "aria-label": "Second section"
    }, React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 4"), React.createElement(ToolbarItem, null, "Item 5"), React.createElement(ToolbarItem, null, "Item 6")), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, null, "Item 7"))));
  }

}

export default SimpleToolbarSection;
//# sourceMappingURL=SimpleToolbarSection.js.map