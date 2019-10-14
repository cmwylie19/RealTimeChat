import React from 'react';
import { SkipToContent } from '@patternfly/react-core'; // eslint-disable-next-line react/prefer-stateless-function

class SimpleSkipToContent extends React.Component {
  render() {
    return React.createElement(SkipToContent, {
      href: "#main-content"
    }, "Skip to Content");
  }

}

export default SimpleSkipToContent;
//# sourceMappingURL=SimpleSkipToContent.js.map