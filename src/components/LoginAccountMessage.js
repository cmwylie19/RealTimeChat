import React from 'react'
import { LoginMainFooterBandItem } from '@patternfly/react-core';

const LoginAccountMessage = props =>
    <LoginMainFooterBandItem>
      Already have an account? 
      <a onClick={props.handleClick}>log in.</a>
    </LoginMainFooterBandItem>
  

export default LoginAccountMessage