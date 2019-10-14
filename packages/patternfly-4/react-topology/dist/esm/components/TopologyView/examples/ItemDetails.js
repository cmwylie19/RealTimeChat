import React from 'react';
import PropTypes from 'prop-types';
import { Title, TitleLevel, BaseSizes } from '@patternfly/react-core';
import { TopologySideBar } from '@patternfly/react-topology';
export class ItemDetails extends React.Component {
  render() {
    const {
      show,
      onClose
    } = this.props;
    const header = React.createElement("div", {
      className: "pf-u-m-lg"
    }, React.createElement(Title, {
      headingLevel: TitleLevel.h1,
      size: BaseSizes['2xl']
    }, "Item Details"), React.createElement("p", null, "Short description of the selected item."));
    return React.createElement(TopologySideBar, {
      show: show,
      onClose: onClose,
      header: header
    }, React.createElement("div", {
      className: "pf-u-mx-lg"
    }, React.createElement("p", {
      id: "custom-header-example"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), React.createElement("br", null), React.createElement("p", null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
  }

}
ItemDetails.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
};
ItemDetails.defaultProps = {
  show: false,
  onClose: () => undefined
};
//# sourceMappingURL=ItemDetails.js.map