import React, { Fragment } from 'react'
import { ListItem, LoginFooterItem } from '@patternfly/react-core'

const HelpLinks = (
  <Fragment>
    <ListItem>
      <LoginFooterItem href="#">Terms of Use </LoginFooterItem>
    </ListItem>
    <ListItem>
      <LoginFooterItem href="#">Help</LoginFooterItem>
    </ListItem>
    <ListItem>
      <LoginFooterItem href="#">Privacy Policy</LoginFooterItem>
    </ListItem>
  </Fragment>
);

export default HelpLinks;
