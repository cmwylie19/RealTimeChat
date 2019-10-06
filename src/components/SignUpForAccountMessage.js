import React from 'react'
import { LoginMainFooterBandItem } from '@patternfly/react-core';

const SignUpForAccountMessage = props => (
    <LoginMainFooterBandItem>
        Need an account?
        <a onClick={props.handleClick}>
            Sign up.
        </a>
    </LoginMainFooterBandItem>
)

export default SignUpForAccountMessage