import React, { useImperativeHandle,useRef,Fragment, useEffect } from 'react';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
} from '@patternfly/react-core';

export default function MessageInput(props) {
  const inputEl = useRef(null);
  // useEffect(()=>{
  //   inputEl.current.focus();
  // },{})
  useImperativeHandle(inputEl, () => ({
    focus: () => {
      inputEl.current.focus();
    }
  }));
  return (
    <Fragment
    >
      <InputGroup
      >
        <TextArea 
        ref={inputEl}
        name="textarea2" id="textarea2" aria-label="textarea with button" />
        <Button id="textAreaButton2" variant={ButtonVariant.control}>
          Send
          </Button>
      </InputGroup>
    </Fragment>
  );
}