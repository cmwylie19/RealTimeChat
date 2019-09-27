import React, {Fragment} from 'react';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
} from '@patternfly/react-core';

export default function MessageInpu() {
 
    return (
      <Fragment>
    
        <InputGroup>
          <TextArea name="textarea2" id="textarea2" aria-label="textarea with button" />
          <Button id="textAreaButton2" variant={ButtonVariant.control}>
            Send
          </Button>
        </InputGroup>
       
      </Fragment>
    );
}