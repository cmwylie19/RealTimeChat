import React from 'react';

var MoreInformationDefaultRDPContent = function MoreInformationDefaultRDPContent() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Clicking "Launch Remote Desktop" will download an .rdp file and launch ',
      React.createElement(
        'i',
        null,
        'Remote Desktop Viewer'
      ),
      '.'
    ),
    React.createElement(
      'p',
      null,
      'Since the RDP is native Windows protocol, the best experience is achieved when used on Windows-based desktop.'
    ),
    React.createElement(
      'p',
      null,
      'For other operating systems, the ',
      React.createElement(
        'i',
        null,
        'Remote Viewer'
      ),
      ' is recommended. If RDP needs to be accessed anyway, the',
      ' ',
      React.createElement(
        'a',
        { href: 'https://www.remmina.org/wp/' },
        'Remmina'
      ),
      ' client is available.'
    )
  );
};

export default MoreInformationDefaultRDPContent;