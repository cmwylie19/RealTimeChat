import PropTypes from 'prop-types';
import React from 'react';

var MoreInformationInstallVariant = function MoreInformationInstallVariant(_ref) {
  var os = _ref.os,
      content = _ref.content,
      children = _ref.children;
  return React.createElement(
    'li',
    null,
    React.createElement(
      'div',
      { className: 'more-information-pf-install' },
      React.createElement(
        'b',
        null,
        os,
        ':'
      ),
      content || children
    )
  );
};
MoreInformationInstallVariant.propTypes = {
  children: PropTypes.any,

  os: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
MoreInformationInstallVariant.defaultProps = {
  children: null,
  content: null
};

export default MoreInformationInstallVariant;