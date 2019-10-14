import React from 'react';

import MoreInformationInstallVariant from './MoreInformationInstallVariant';

var MoreInformationDefaultContent = function MoreInformationDefaultContent() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Clicking "Launch Remote Viewer" will download a .vv file and launch ',
      React.createElement(
        'i',
        null,
        'Remote Viewer'
      )
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'i',
        null,
        'Remote Viewer'
      ),
      ' is available for most operating systems. To install it, search for it in GNOME Software or run the following:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(MoreInformationInstallVariant, { os: 'RHEL, CentOS', content: 'sudo yum install virt-viewer' }),
      React.createElement(MoreInformationInstallVariant, { os: 'Fedora', content: 'sudo dnf install virt-viewer' }),
      React.createElement(MoreInformationInstallVariant, { os: 'Ubuntu, Debian', content: 'sudo apt-get install virt-viewer' }),
      React.createElement(
        MoreInformationInstallVariant,
        { os: 'Windows' },
        React.createElement(
          'div',
          null,
          'Download the MSI from',
          ' ',
          React.createElement(
            'a',
            { href: 'https://virt-manager.org/download/', target: '_blank', rel: 'noopener noreferrer' },
            'virt-manager.org'
          )
        )
      )
    )
  );
};

export default MoreInformationDefaultContent;